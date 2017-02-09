(function (tinymce) {
  'use strict'

  function Plugin (editor, url) {
    var plugin = this;
    plugin.editor = editor;
    plugin.url = url;
    plugin.data = {column:null,classes:[]};


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
            name: 'xs-width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-xs-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
                return value.indexOf("col-xs-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'xs-offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-xs-offset'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
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
            name: 'sm-width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
                return value.indexOf("col-sm-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'sm-offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-sm-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
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
            name: 'md-width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
                return value.indexOf("col-md-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'md-offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-md-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
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
            name: 'lg-width',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-lg-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
                return value.indexOf("col-lg-") >= 0;
              });
              if(match.length > 0) {
                this.value(match[0]);
              }
            }
          },
          {
            type: 'ListBox', 
            name: 'lg-offset',  
            values: [{text: 'None', value: 'none'}].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (width) {
              return { text: width, value: 'col-lg-offset-'+width }
            })),
            onPostRender: function() {
              var match = jQuery.grep(plugin.data.classes, function(value) {
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
        var classes = [];

        $(data.column).removeClass (function (index, className) {
          return (className.match (/(^|\s)col-\S+/g) || []).join(' ');
        });

        $.each(e.data, function(type, value) {
          if(value != "none") {
            $(data.column).addClass(value);
            classes.push(value);
          }
        })

        data.classes = classes;
      }
    });
  }

  function isColumn(column) {
    var parents = $(column).parents();
    var check = false;

    $.each(parents, function(index, parent) {
      if($(parent).hasClass("row")) {
        check = true;
        return false;
      }
    })
    if(check) {
      return true;
    }
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
      isColumn,
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
              plugin.data.classes = $(parent).attr("class").split(" ");
              plugin.data.column = $(parent);
            }
          }
        })
      }
    });

    // Add a button that opens a window
    editor.addButton('bscolumns', {
      image: url + '/img/icons/columns-settings.svg',
      tooltip: 'Edit Column Sizing',
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