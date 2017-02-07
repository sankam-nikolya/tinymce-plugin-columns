(function (tinymce) {
  'use strict'

  function Plugin (editor, url) {
    this.editor = editor
    this.url = url

    this.init(editor, url)
  }

  Plugin.prototype.showDialog = function () {
    var data = this.data

    this.editor.windowManager.open({
      title: 'Adjust Column Sizing',
      data: this.data,
      body: {
        type: 'container',
        layout: 'grid',
        spacing: 20,
        columns: 3,
        align: 'center',
        items: [
          {type: 'label', text: 'Screen Size'},
          {type: 'label', text: 'Column Width'},
          {type: 'label', text: 'Column Offset'}
        ]
      },
    });
  }

  Plugin.prototype.init = function (editor, url) {
    var plugin = this

    // Add a button that opens a window
    editor.addButton('columns', {
      text: 'Columns',
      icon: false,
      onclick: function() {
        // Open window
        plugin.showDialog();
      }
    });
  }

  tinymce.create('tinymce.plugins.BSColumns', {
    init: function (editor, url) {
      return new Plugin(editor, url)
    },
    getInfo: function () {
      return {
        longname: 'Bootstrap Columns - adds tools to manage bootstrap columns.',
        author: 'BrandExtract',
        authorurl: 'http://www.brandextract.com',
        version: '0.1.0'
      }
    }
  })

  // Register plugin
  tinymce.PluginManager.add('bscolumns', tinymce.plugins.BSColumns)
})(window.tinymce)