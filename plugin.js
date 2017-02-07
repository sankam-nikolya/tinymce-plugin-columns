(function (tinymce) {
  'use strict'

  function Plugin (editor, url) {
    this.editor = editor
    this.url = url

    this.generalItems = [
      {
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
      {
        type: 'container',
        layout: 'grid',
        spacing: 20,
        columns: 3,
        align: 'center',
        
        items: [
          {
            type: 'label', 
            text: 'xs'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-xs-'+width }
            })),
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-xs-offset'+width }
            })),
          }
        ]
      },
      {
        type: 'container',
        layout: 'grid',
        spacing: 20,
        columns: 3,
        align: 'center',
        items: [
          {
            type: 'label', 
            text: 'sm'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-'+width }
            })),
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-offset'+width }
            })),
          }
        ]
      },
      {
        type: 'container',
        layout: 'grid',
        spacing: 20,
        columns: 3,
        align: 'center',
        items: [
          {
            type: 'label', 
            text: 'md'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-'+width }
            })),
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-offset-'+width }
            })),
            onPostRender: function() {
              this.value('col-md-offset-5');
            }
          }
        ]
      },
      {
        type: 'container',
        layout: 'grid',
        spacing: 20,
        columns: 3,
        align: 'center',
        
        items: [
          {
            type: 'label', 
            text: 'lg'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-lg-'+width }
            })),
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-lg-offset'+width }
            })),
          }
        ]
      }
    ]

    this.init(editor, url)
  }

  Plugin.prototype.showDialog = function () {
    var data = this.data

    this.editor.windowManager.open({
      title: 'Adjust Column Sizing',
      data: this.data,
      body: this.generalItems,

      onsubmit: function(e) {
        console.log("submitted");
      }
    });
  }

  function isRow(table) {
    return true;
  }

  Plugin.prototype.addToolbars = function() {
    var toolbarItems = this.editor.settings.table_toolbar;

    if (toolbarItems === '' || toolbarItems === false) {
      return;
    }

    if (!toolbarItems) {
      toolbarItems = 'bscolumns';
    }

    this.editor.addContextToolbar(
      isRow,
      toolbarItems
    );
  }

  Plugin.prototype.init = function (editor, url) {
    var plugin = this

    // Add a button that opens a window
    editor.addButton('bscolumns', {
      text: 'Columns',
      icon: false,
      onclick: function() {
        // Open window
        plugin.showDialog();
      }
    });

    plugin.addToolbars();
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