
throw new TypeError('deprecated, use `glint-plugin-wrap-locale` on the wrap instead');

///**
// * Module dependencies.
// */
//var debug = require('debug')('glint:plugin-adapter-locale');
//
///**
// *  Dates Adapter Plugin
// *
// *  adds the locale attribute.
// */
//module.exports = function(o) {
//  o = o || {};
//  o.locale = o.locale || 'locale';
//  o.path = o.path || 'path';
//  o.pattern = o.pattern || '([a-zA-Z]{1,3}(?:-(?:[a-zA-Z0-9]{2})){0,1})';
//
//  plugin.api = 'adapter-plugin';
//  plugin.name = 'locale';
//  function plugin(adapter) {
//
//    //adapter.on('pre-save', function() {
//    //  var args = [].slice.apply(arguments);
//    //  var len = args.length, pos = 3;
//    //  if (len <= pos) return debug('missing argument');
//    //  var obj = args[pos]; // object: 4th argument
//    //  var id = args[pos - 1]; // id: 3rd argument
//    //
//    //  //extract locale from id e.g. de-ch-home-alone -> de-ch
//    //  var locale;
//    //  var pattern = new RegExp('^' + o.pattern + '', 'i');
//    //  if (pattern.test(id)) {
//    //    locale = RegExp.$1;
//    //  }
//    //  if (locale) {
//    //    obj[o.locale] = locale;
//    //    obj[o.path] = id.replace(locale + '-', '');
//    //
//    //  }
//    //});
//
//  }
//
//  return plugin;
//
//};
