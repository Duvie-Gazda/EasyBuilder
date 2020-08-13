function CreateEditor(htmlContainer, language) {
  require.config({ paths: { vs: "../../../../Easy-Builder/assets/plugins/monaco/min/vs" } });
  require(["vs/editor/editor.main"], function () {
    var container = document.getElementById(htmlContainer);
    if (language === "html") {
      emmetMonaco.emmetHTML();
      window.editorHTML = monaco.editor.create(container, {
        value: "",
        language: language,
      });
    }
    if (language === "css") {
      emmetMonaco.emmetCSS();
      window.editorCSS = monaco.editor.create(container, {
        value: "",
        language: language,
      });
    } else if (language === "js") {
      window.editorJS = monaco.editor.create(container, {
        value: "",
        language: language,
      });
    } else {
      return `${language} language is not available`;
    }
  });
}
function ChangeEditorTheme(id) {
  let themePicker = document.getElementById(id);
  themePicker.onchange = function () {
    let theme = this.options[this.selectedIndex].getAttribute("value");
    monaco.editor.setTheme(theme);
  };
}

CreateEditor("editor", "html");
ChangeEditorTheme("theme-choose");

$('#send-data-Studio').on('click', function(){
    if(window.editorHTML !== undefined){
        let htmlEditorValue =  window.editorHTML.getValue();
        let data = {
            "html":htmlEditorValue
        };
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST","https://localhost:5001/studio");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.onreadystatechange = function(){
            if(this.readyState === 4){
                console.log(JSON.parse(this.response));
            }
        }
        xhttp.send(JSON.stringify(data));
    }
})
// arr[w.editor.html, w.editor.javascript, css] , type, id

/*
require.config({ paths: { 'vs': 'monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
    window.editor = monaco.editor.create(document.getElementById('container'),                 {
        value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n'),
        language: 'javascript'
    });
});

function save() {
   // get the value of the data
   var value = window.editor.getValue()
   saveValueSomewhere(value);     
}
 */