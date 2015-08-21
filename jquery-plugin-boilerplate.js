;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    //CommonJS
    module.exports = factory(require('jquery'));
  } else {
    //Browser
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var pluginName = 'myplugin';

  var defaults = {
    callback1 : function() {

    },
    callback2 : function() {

    },    
    val1 : 123,
    val2 : 456
  };
  
  var Plugin = function(select, options) {
    this.$select = $(select);
    this.options = $.extend({}, defaults, typeof options == 'object' && options);
    this._init();
  };

  Plugin.prototype = {
    constructor : Plugin,

    _init : function() {

    },

    _func1 : function() {

    },

    _func2 : function() {

    },    

    func1 : function() {

    },

    func2 : function() {

    }
  };

  var old = $.fn[pluginName];
  
  $.fn[pluginName] = function(options) {
    var args = Array.apply(null, arguments);
    args.shift();
    
    return this.each(function() {
      var $this = $(this);
      var data = $this.data(pluginName);
      
      if (!data) {
        $this.data(pluginName, (data = new Plugin(this, options)));
      }
      if (typeof options == 'string') {
        data[options].apply(data, args);
      }
    });
  };

  $.fn[pluginName].noConflict = function() {
    $.fn[pluginName] = old;
    return this;
  };
/*
  $(document).ready(function() {
    $('[data-role="' + pluginName + '"]').each(function() {
      var $this = $(this);
      var data = $this.data();

      // ...

      $.fn[pluginName].call($this, data);
    });
  });
*/  
}));
