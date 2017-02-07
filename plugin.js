(function (tinymce) {
  'use strict'

  function Plugin (editor, url) {
    var plugin = this;
    plugin.editor = editor;
    plugin.url = url;
    plugin.data = [];


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
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-xs-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-xs-offset'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-xs-offset-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
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
            text: 'sm'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-sm-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-sm-offset-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
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
            text: 'md'
          },
          {
            type: 'ListBox', 
            name: 'width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-md-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-md-offset-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
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
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-lg-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-lg-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data, function(value) {
                return value.indexOf("col-lg-offset-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          }
        ]
      }
    ]

    this.init(editor, url);
  }

  Plugin.prototype.showDialog = function () {
    var data = this.data;

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

    editor.on('NodeChange', function(e) {
      if(e.selectionChange) {
        $.each(e.parents, function(index, parent){
          if(parent.nodeName === 'DIV') {   
            if($(e.parents[index+1]).hasClass('row')) {
              console.log(plugin.data)
              // this.data = $(parent).attr("class").split(" ");
              // console.log(this.data)
              plugin.data = $(parent).attr("class").split(" ");
            }
          }
        })
      }
    });

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