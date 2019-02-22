
const base = "ogs.html?base64script=";
const baseDebug = "ogs-debug.html?base64script=";
var editor = null;

function run()
{
    var iframe = document.getElementById("ogs");
    const script = btoa(editor.session.getValue());
    iframe.src = baseDebug + script;
}

function runFullPage()
{
    const script = btoa(editor.session.getValue());
    const url = base + script;
    window.open(url, "_blank");
}

function setCodeRedBG()
{
    editor.session.setValue("main.application.camera.clearColor = {1, 0, 0}");
}

function setCodeBlueBG()
{
    editor.session.setValue("main.application.camera.clearColor = {0, 0, 1}");
}

function main()
{
    // Initialize ACE editor and set its language to Lua.
    editor = ace.edit("editor");
    editor.session.setMode("ace/mode/lua");
}

// Specify startup function.
window.onload = main;
