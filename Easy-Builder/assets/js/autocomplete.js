var myContext = {
    name: 'myContext',
    obj:"ss",
 }
var editor = ace.edit("editor");
  editor.getSession().setUseWorker(true);

  ace.config.loadModule('ace/ext/tern', function () {
      editor.setOptions({
          enableTern: {
              defs: ['browser', 'ecma5', myContext],
              plugins: {
                  doc_comment: {
                      fullDocs: true
                  }
              },                    
              useWorker: true,                    
              startedCb: function () {
                  console.log('editor.ternServer:', editor.ternServer);
              },
          },
          enableSnippets: true,
          enableBasicAutocompletion: true,
      });
  });