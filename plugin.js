(function (tinymce) {
  'use strict'

  function toolbarCheck(column) {
    if($(column).hasClass("row")) {
      return true;
    }
  }

  function Plugin (editor, url) {
    var plugin = this;
    plugin.editor = editor;
    plugin.url = url;
    plugin.data = {column:null,classes:[]};
    var test = url + "/img/icons/column-settings.svg";

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
            text: 'xs',
            minWidth: 65,
            minHeight: 23,
            style: 'background-image: url('+url + "/img/icons/xs.svg"+'); background-repeat: no-repeat; background-position: right;'
          },
          {
            type: 'ListBox', 
            name: 'xs-width',  
            minWidth: 65,
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
            minWidth: 65,
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
            text: 'sm',
            minWidth: 65,
            minHeight: 23,
            style: 'background-image: url('+url + "/img/icons/sm.svg"+'); background-repeat: no-repeat; background-position: right;'
          },
          {
            type: 'ListBox', 
            name: 'sm-width',  
            minWidth: 65,
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
            minWidth: 65,
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
            text: 'md',
            minWidth: 65,
            minHeight: 23,
            style: 'background-image: url('+url + "/img/icons/md.svg"+'); background-repeat: no-repeat; background-position: right;'
          },
          {
            type: 'ListBox', 
            name: 'md-width',  
            minWidth: 65,
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
            minWidth: 65,
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
            text: 'lg',
            minWidth: 65,
            minHeight: 23,
            style: 'background-image: url('+url + "/img/icons/lg.svg"+'); background-repeat: no-repeat; background-position: right;'
          },
          {
            type: 'ListBox', 
            name: 'lg-width',  
            minWidth: 65,
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
            minWidth: 65,

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
    ];

    this.init(editor, url);
  }

  Plugin.prototype.showDialog = function () {
    var editor = this.editor;
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
        });

        editor.undoManager.add();
        data.classes = classes;
      }
    });
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
      toolbarCheck,
      toolbarItems
    );
  }

  Plugin.prototype.init = function (editor, url) {
    var plugin = this;
    var button = null;


    // Add a button that opens a window
    editor.addButton('bscolumns', {
      image: url + '/img/icons/column-settings.svg',
      tooltip: 'Edit Column Sizing',
      onclick: function() {
        // Open window
        plugin.showDialog();
      }
    });

    editor.addMenuItem('bscolumns', {
      image: url + '/img/icons/column-settings.svg',
      text: 'Column',
      onclick: function() {
        plugin.showDialog();
      },
      context: 'tools',
      onPostRender: function(){
        button = this;
        button.disabled(true);
      }
    });

    editor.on('NodeChange', function(e) {
      if(e.selectionChange) {
        var buttonDisabled = true;

        $.each(e.parents, function(index, parent){
          if(parent.nodeName === 'DIV' && $(e.parents[index+1]).hasClass('row')) {   
            plugin.data.classes = $(parent).attr("class").split(" ");
            plugin.data.column = $(parent);
            buttonDisabled = false;
            return false;
          } 
        })
        if(button) {
          button.disabled(buttonDisabled);
        }
      }
    });

    plugin.addToolbars();
  }

  tinymce.create('tinymce.plugins.BSColumns', {
    init: function (editor, url) {
      return new Plugin(editor, url);
    },
    getInfo: function () {
      return {
        longname: 'Bootstrap Columns - adds tools to manage bootstrap columns.',
        author: 'BrandExtract',
        authorurl: 'http://www.brandextract.com',
        version: '0.1.0'
      }
    }
  });

  // Register plugin
  tinymce.PluginManager.add('bscolumns', tinymce.plugins.BSColumns);
})(window.tinymce)