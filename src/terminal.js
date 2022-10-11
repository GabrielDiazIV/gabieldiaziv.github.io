var commands = [];
var command_index = 0;

function changeStyle() {
  document.getElementById("page_style").setAttribute("href", "light.css");
}

function printLine(text, style) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(() => {
    var next = document.createElement("p");
    next.className = style;
    next.innerHTML = t;

    pastCommands.parentNode.insertBefore(next, pastCommands);
    window.scrollTo(0, document.body.offsetHeight);
  }, 100);
}

function printLines(cmd, style) {
  cmd.forEach((line) => {
    printLine(line, style);
  });
}

function handleCommand(c) {
  c = c.toLowerCase();
  switch (c) {
    case "":
      break;
    case "gui":
      style_gui();
      break;
    case "theme":
      break;
    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="past_commands"></a>';
        pastCommands = document.getElementById("past_commands");
      }, 100);
      break;
    case "email":
      setTimeout(() => {
        mail();
      }, 500);
      break;
    default:
      var msg = COMMANDS.fail;
      if (c in COMMANDS) {
        msg = COMMANDS[c];
      }
      printLines(msg, "");
  }
}

const mv = 7.5;
const write = () => (command.innerHTML = textArea.value.replace(/\n/g, ""));

function mail() {
  var wndMail = window.open(
    "mailto:gabrieldiaziv@tamu.edu?subject=hey gabe!",
    "_blank",
    "scrollbars=yes,resizable=yes,width=10,height=10"
  , '_top');
  if (wndMail) {
    wndMail.close();
  }
}
