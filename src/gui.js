function edit(ev, command) {
  console.log("command", ev);
  modal.classList.add("active");
  edit_command = command;
  modal_header.innerHTML = command + ".html";
  modal_text.value = COMMANDS[command].join("\r\n");
}

function exit() {
  COMMANDS[edit_command] = modal_text.value.split(/\r?\n/);
  modal.classList.remove("active");
}

function allowDrop(ev) {
  if (ev.target.childElementCount == 0) ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.parentNode.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function showTime() {
  var date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString([], {
    timeStyle: "short",
  });
}

var edit_command = "";

var speech_index = 0;
function snailText() {
  var div = document.getElementById("bubble");
  div.innerHTML = SPEECH[speech_index++ % SPEECH.length];
}
