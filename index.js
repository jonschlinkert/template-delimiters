/*!
 * template-delimiters <https://github.com/jonschlinkert/template-delimiters>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {
  es6: require('es6-template-regex')(),
  verb: /\{%=\s*([\s\S]+?)\s*=%\}/g,
  handlebars: /\{\{\s*([^\}]+)\s*\}\}/g,
  lodash: {
    interpolate: /<%=([\s\S]+?)%>/g,
    evaluate: /<%([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  }
};

