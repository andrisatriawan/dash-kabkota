/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

//////////////////////////////////////////////////////////////////////////////

/** The main highcharts editor namespace
 * @ignore
 */
var highed = {
  schemas: {},
  meta: {
    chartTemplates: {},
    fonts: []
  },
  plugins: {},

  resources: {
    logo:
      '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"     width="425.197px" height="141.732px" viewBox="0 0 425.197 141.732" enable-background="new 0 0 425.197 141.732"     xml:space="preserve"><g>    <path fill="#eeeaea" d="M138.475,69.712h-17.02v9.77c0,1.037-0.813,1.851-1.849,1.851c-1.037,0-1.85-0.813-1.85-1.851V57.725        c0-1.037,0.813-1.852,1.85-1.852c1.036,0,1.849,0.813,1.849,1.852v8.436h17.02v-8.436c0-1.037,0.814-1.852,1.85-1.852        c1.036,0,1.85,0.813,1.85,1.852v21.754c0,1.037-0.814,1.851-1.85,1.851c-1.036,0-1.85-0.813-1.85-1.851V69.712z"/>    <path fill="#eeeaea" d="M156.973,79.479c0,1.037-0.814,1.851-1.852,1.851s-1.852-0.813-1.852-1.851V57.725        c0-1.037,0.814-1.852,1.852-1.852s1.852,0.813,1.852,1.852V79.479z"/>    <path fill="#eeeaea" d="M184.125,70.378c0-1.036,0.814-1.774,1.852-1.774c1.034,0,1.852,0.813,1.852,1.849v5.847        c0,0.444-0.226,1.109-0.595,1.479c-2.367,2.369-5.549,3.773-9.176,3.773c-7.178,0-12.949-5.771-12.949-12.948        c0-7.181,5.771-12.949,12.949-12.949c3.627,0,6.809,1.405,9.176,3.771c0.738,0.74,0.738,1.852,0,2.592        c-0.741,0.738-1.922,0.813-2.663,0.072c-1.702-1.699-3.923-2.736-6.513-2.736c-5.104,0-9.249,4.144-9.249,9.25        c0,5.104,4.146,9.25,9.249,9.25c2.367,0,4.441-0.813,6.067-2.222V70.378z"/>    <path fill="#eeeaea" d="M218.162,69.712h-17.019v9.77c0,1.037-0.817,1.851-1.852,1.851c-1.037,0-1.849-0.813-1.849-1.851V57.725        c0-1.037,0.812-1.852,1.849-1.852c1.034,0,1.852,0.813,1.852,1.852v8.436h17.019v-8.436c0-1.037,0.813-1.852,1.849-1.852        c1.037,0,1.852,0.813,1.852,1.852v21.754c0,1.037-0.813,1.851-1.852,1.851c-1.033,0-1.849-0.813-1.849-1.851V69.712z"/>    <path fill="#eeeaea" d="M242.948,81.552c-7.182,0-12.949-5.771-12.949-12.948c0-7.181,5.77-12.949,12.949-12.949        c3.627,0,6.809,1.405,9.176,3.771c0.738,0.74,0.738,1.852,0,2.592c-0.741,0.738-1.925,0.813-2.666,0.072        c-1.699-1.699-3.92-2.736-6.51-2.736c-5.106,0-9.249,4.144-9.249,9.25c0,5.104,4.143,9.25,9.249,9.25        c2.59,0,4.884-0.962,6.586-2.664c0.74-0.741,1.849-0.741,2.59,0c0.738,0.738,0.738,1.85,0,2.589        C249.756,80.146,246.574,81.552,242.948,81.552z"/>    <path fill="#eeeaea" d="M281.569,69.712h-17.02v9.77c0,1.037-0.813,1.851-1.852,1.851c-1.034,0-1.85-0.813-1.85-1.851V57.725        c0-1.037,0.813-1.852,1.85-1.852c1.035,0,1.852,0.813,1.852,1.852v8.436h17.02v-8.436c0-1.037,0.813-1.852,1.853-1.852        c1.034,0,1.849,0.813,1.849,1.852v21.754c0,1.037-0.813,1.851-1.849,1.851c-1.037,0-1.853-0.813-1.853-1.851V69.712z"/>    <path fill="#eeeaea" d="M308.758,57.503l10.507,20.646c0.223,0.443,0.445,1.036,0.445,1.554c0,1.036-0.668,1.628-1.702,1.628        c-0.741,0-1.481-0.222-2.001-1.258l-3.253-6.438h-13.547l-3.183,6.438c-0.517,1.036-1.256,1.258-1.994,1.258        c-1.037,0-1.702-0.593-1.702-1.628c0-0.519,0.22-1.109,0.442-1.554l10.506-20.646c0.668-1.405,2.002-1.628,2.74-1.628        C306.76,55.875,308.09,56.096,308.758,57.503z M300.985,70.083h9.988l-4.957-9.99L300.985,70.083z"/>    <path fill="#eeeaea" d="M340.159,56.023c4.441,0,8.064,3.255,8.064,7.694c0,3.923-2.813,6.884-6.511,7.549l6.731,7.104        c0.664,0.666,0.889,1.85,0.146,2.516c-0.736,0.741-2.145,0.521-2.886-0.296l-8.729-9.176h-6.511v8.142        c0,1.034-0.815,1.774-1.854,1.774c-1.033,0-1.85-0.813-1.85-1.851V57.873c0-1.035,0.814-1.85,1.85-1.85H340.159z M330.468,59.575        v8.288h9.691c2.59,0,4.367-1.776,4.367-4.146c0-2.365-1.777-4.144-4.367-4.144L330.468,59.575L330.468,59.575z"/>    <path fill="#eeeaea" d="M365.047,59.575h-9.249c-1.033,0-1.849-0.74-1.849-1.776c0-1.034,0.813-1.773,1.849-1.773h22.201        c1.037,0,1.852,0.74,1.852,1.773c0,1.037-0.813,1.776-1.852,1.776h-9.249V79.48c0,1.037-0.813,1.851-1.849,1.851        c-1.037,0-1.854-0.813-1.854-1.851V59.575z"/>    <path fill="#eeeaea" d="M388.724,66.013c0-9.25,5.698-10.359,9.99-10.359c1.035,0,1.85,0.813,1.85,1.85        c0,1.036-0.813,1.851-1.85,1.851c-3.479,0-6.29,0.738-6.29,6.66v5.18c0,9.25-5.698,10.358-9.989,10.358        c-1.035,0-1.85-0.813-1.85-1.85s0.814-1.85,1.85-1.85c3.479,0,6.289-0.74,6.289-6.66V66.013z"/></g><polygon fill="#8087E8" points="67.981,30.52 56.757,56.73 42.009,91.171 76.301,76.685 94.465,69.013 "/><polygon fill="#30426B" points="73.7,62.25 76.302,76.685 94.466,69.013 "/><polygon fill="#6699A1" points="67.981,30.52 73.7,62.251 94.465,69.013 "/><polygon fill="#78758C" points="73.7,62.25 94.466,69.013 56.758,56.729 42.009,91.171 76.302,76.685 "/><polygon fill="#A3EDBA" points="42.009,91.171 56.757,56.73 26.442,46.855 "/><polygon fill="#6699A1" points="76.302,76.685 79.628,95.13 94.466,69.013 "/><polygon fill="#8087E8" points="67.981,30.52 56.757,56.73 73.7,62.251 "/></svg>'
  },

  /** Trigger file download
   *  @namespace highed
   *  @param filename {string} - the filename
   *  @param data {string} - the contained data
   */
  download: function(filename, data, mime) {
    var l = highed.dom.cr('a');
    mime = mime || 'application/octet-stream';
    l.download = filename || 'unkown';
    l.href = 'data:' + mime + ',' + encodeURIComponent(data);
    highed.dom.ap(document.body, l);
    l.click();
    document.body.removeChild(l);
  },

  /** Clear an object
   * Deletes all the object attributes.
   * Useful when needing to clear an object without invalidating references to it
   * @namespace highed
   * @param obj {object} - the object to clear
   */
  clearObj: function(obj) {
    Object.keys(obj).forEach(function(key) {
      delete obj[key];
    });
  },

  /** Preform an AJAX request. Same syntax as jQuery.
   *  @namespace highed
   *  @param p {object} - options
   *    > url {string} - the URL to call
   *    > type {enum} - the type of request
   *    > dataType {enum} - the type of data expected
   *    > success {function} - function to call on success
   *    > error {function} - function to call on request fail
   *    > data {object} - the payload
   *    > autoFire {boolean} - whether or not to fire the request right away
   *
   *   @emits Error {string} - when there's an error
   *   @emits OK {string} - when the request succeeded
   *   @returns {object} - interface to the request
   */
  ajax: function(p) {
    var props = highed.merge(
        {
          url: false,
          type: 'GET',
          dataType: 'json',
          success: false,
          error: false,
          data: {},
          autoFire: true,
          headers: {}
        },
        p
      ),
      headers = {
        json: 'application/json',
        xml: 'application/xml',
        text: 'text/plain',
        octet: 'application/octet-stream'
      },
      r = new XMLHttpRequest(),
      events = highed.events();

    if (!props.url) return false;

    r.open(props.type, props.url, true);
    r.setRequestHeader('Content-Type', headers[props.dataType] || headers.text);

    Object.keys(props.headers).forEach(function(key) {
      r.setRequestHeader(key, props.headers[key]);
    });

    r.onreadystatechange = function() {
      events.emit('ReadyStateChange', r.readyState, r.status);

      if (r.readyState === 4 && r.status === 200) {
        if (props.dataType === 'json') {
          try {
            var json = JSON.parse(r.responseText);
            if (highed.isFn(props.success)) {
              props.success(json);
            }
            events.emit('OK', json);
          } catch (e) {
            console.log('parse error', e);
            if (highed.isFn(props.error)) {
              props.error(e.toString(), r.responseText);
            }
            events.emit('Error', e.toString(), r.status);
          }
        } else {
          if (highed.isFn(props.success)) {
            props.success(r.responseText);
          }
          events.emit('OK', r.responseText);
        }
      } else if (r.readyState === 4) {
        events.emit('Error', r.status, r.statusText);
        if (highed.isFn(props.error)) {
          props.error(r.status, r.statusText);
        }
      }
    };

    function fire() {
      try {
        r.send(JSON.stringify(props.data));
      } catch (e) {
        r.send(props.data || true);
      }
    }

    if (props.autoFire) {
      fire();
    }

    return {
      on: events.on,
      fire: fire,
      request: r
    };
  },

  /** Generate a uuid
   *  Borrowed from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   *  @namespace highed
   *  @returns {string} - a UUID string
   */
  uuid: function() {
    var d = new Date().getTime(),
      uuid;

    if (window.performance && typeof window.performance.now === 'function') {
      d += window.performance.now(); //use high-precision timer if available
    }

    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  },

  /** Map an array to an object
   *  @namespace highed
   *  @param {array} arr - the array to map
   *  @return {object} - an object with the array contents as keys, and their value set to true
   */
  arrToObj: function(arr) {
    var obj = {};

    if ((!highed.isArr(arr) && !highed.isBasic(arr)) || arr === false) {
      return arr;
    }

    if (highed.isStr(arr)) {
      arr = arr.split(' ');
    }

    arr.forEach(function(thing) {
      obj[thing] = true;
    });

    return obj;
  },

  /** Make a camel back string pretty
   *  Transforms e.g. `imACamelBackString` to `Im a camelback string`.
   *  @namespace highed
   *  @param str {string} - the input string
   *  @return {string} - the transformed string
   */
  uncamelize: function(str) {
    var s = '';

    if (!str) {
      return str;
    }

    if (str.length < 0 || !str) {
      return str;
    }

    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        if (
          (str[i + 1] && str[i + 1] === str[i + 1].toUpperCase()) ||
          (str[i - 1] && str[i - 1] === str[i - 1].toUpperCase())
        ) {
        } else {
          s += ' ';
        }
      }
      s += str[i];
    }

    return s[0].toUpperCase() + s.substr(1);
  },

  /** Clamp a number between min/max
   *  @namespace highed
   *  @param min {number} - minimum value
   *  @param max {number} - maximum value
   *  @param value {number} - the value to clamp
   *  @returns {number} - the clamped value
   */
  clamp: function(min, max, value) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  },

  /** Convert a hex value to RGB
   *
   *  @namespace highed
   *  @param {string} hex - the hex string
   *  @return {object} - an object with rgb components
   *    > r {number} - red
   *    > g {number} - green
   *    > b {number} - blue
   */
  hexToRgb: function(hex) {
    if (!hex) {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }

    if (hex.indexOf('rgba') === 0) {
      hex = hex
        .substr(5)
        .replace(')', '')
        .split(',');
      return {
        r: parseInt(hex[0], 10),
        g: parseInt(hex[1], 10),
        b: parseInt(hex[2], 10),
        a: parseInt(hex[3], 10)
      };
    }

    if (hex.length === 4) {
      hex += hex[hex.length - 1];
      hex += hex[hex.length - 1];
      hex += hex[hex.length - 1];
    }

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : {
          r: 0,
          g: 0,
          b: 0
        };
  },

  /** Invert a color
   *  @namespace highed
   *  @param {string} hex - the color to invert
   *  @return {string} - new hex color
   */
  invertHexColor: function(hex) {
    var rgb = highed.hexToRgb(hex),
      res = 0;

    rgb.r = 255 - rgb.r;
    rgb.g = 255 - rgb.g;
    rgb.b = 255 - rgb.b;

    res = rgb.r << 16;
    res |= rgb.g << 8;
    res |= rgb.b;

    return '#' + res;
  },

  /** Return #FFF or #000 based on the intensity of a color
   *  @namespace highed
   *  @param {string} hex - input color
   *  @return {string} - the new hex color
   */
  getContrastedColor: function(hex) {
    var rgb = highed.hexToRgb(hex),
      avarage = (rgb.r + rgb.g + rgb.b) / 3;

    if (avarage > 150) {
      return '#000';
    }
    return '#FFF';
  },

  /** Convert a string to a bool
   *  @namespace highed
   *  @param {string} what - the string to convert
   *  @return {bool} - the resulting bool
   */
  toBool: function(what) {
    return what === 'true' || what === true || what === 'on';
  },

  /** Set a property based on -- delimited path
   *  @namespace highed
   *  @param {object} obj - the object to modify
   *  @param {string} path - the path to the attribute to change
   *  @param {anything} value - the value to set
   *  @param {number} index - if we're accessing an array, this is the index
   */
  setAttr: function(obj, path, value, index) {
    var current = obj;

    if (!current) return;

    if (highed.isArr(obj)) {
      obj.forEach(function(thing) {
        highed.setAttr(thing, path, value, index);
      });
      return;
    }

    path = path
      .replace(/\-\-/g, '.')
      .replace(/\-/g, '.')
      .split('.');

    path.forEach(function(p, i) {
      if (i === path.length - 1) {
        current[p] = value;
      } else {
        if (typeof current[p] === 'undefined') {
          current = current[p] = {};
        } else {
          current = current[p];

          if (highed.isArr(current)) {
            if (index > current.length - 1) {
              for (var j = current.length; j <= index; j++) {
                current.push({});
              }
            }
            if (index >= 0) {
              current = current[index];
            }
          }
        }
      }
    });
  },

  /** Get a property based on -- delimited path
   *  @namespace highed
   *  @param {object} obj - the object to traverse
   *  @param {string} path - the path to the attribute to get
   *  @param {number} index - if we're accessing an array, this is the index
   *  @returns {anything} - the value or false
   */
  getAttr: function(obj, path, index) {
    var current = obj,
      result = undefined;

    if (!current) return result;

    if (highed.isArr(obj)) {
      obj.forEach(function(thing) {
        result = highed.getAttr(thing, path);
      });
      return result;
    }

    path = path
      .replace(/\-\-/g, '.')
      .replace(/\-/g, '.')
      .split('.');

    path.forEach(function(p, i) {
      if (i === path.length - 1) {
        if (typeof current !== 'undefined') {
          result = current[p];
        }
      } else {
        if (typeof current[p] === 'undefined') {
          current = current[p] = {};
        } else {
          current = current[p];

          if (highed.isArr(current) && index >= 0 && index < current.length) {
            current = current[index];
          }
        }
      }
    });

    return result;
  },

  /** Deep merge two objects.
   * Note: this modifies object `a`!
   * @namespace highed
   * @param {object} a - the destination object
   * @param {object} b - the source object
   * @param {bool} ignoreEmpty - Ignore empty things
   * @param {object} excludeMap - Map of properties to exclude from the merge
   * @return {object} - argument a
   */
  merge: function(a, b, ignoreEmpty, excludeMap) {
    if (!a || !b) return a || b;

    if (ignoreEmpty && Object.keys(b).length === 0) {
      return;
    }

    Object.keys(b).forEach(function(bk) {
      if (excludeMap && excludeMap[bk]) {
      } else if (highed.isNull(b[bk]) || highed.isBasic(b[bk])) {
        a[bk] = b[bk];
      } else if (highed.isArr(b[bk])) {
        a[bk] = [];

        b[bk].forEach(function(i) {
          if (highed.isNull(i) || highed.isBasic(i)) {
            a[bk].push(i);
          } else {
            a[bk].push(highed.merge(highed.isArr(i) ? [] : {}, i));
          }
        });
      } else if (
        b[bk].tagName &&
        b[bk].appendChild &&
        b[bk].removeChild &&
        b[bk].style
      ) {
        a[bk] = b[bk];
      } else {
        if (ignoreEmpty && Object.keys(b[bk]).length === 0) {
          return;
        }

        a[bk] = a[bk] || {};
        highed.merge(a[bk], b[bk]);
      }
    });
    return a;
  },

  /** Check if something is null or undefined
   *  @namespace highed
   *  @param {anything} what - the value to check
   *  @return {bool} - true if null
   */
  isNull: function(what) {
    return typeof what === 'undefined' || what === null;
  },

  /** Check if something is a string
   *  @namespace highed
   *  @param {anything} what - the value to check
   *  @return {bool} - true if string
   */
  isStr: function(what) {
    return typeof what === 'string' || what instanceof String;
  },

  /** Check if something is a number
   * @namespace highed
   *  @param {anything} what - the value to check
   *  @return {bool} - true if number
   */
  isNum: function(what) {
    return !isNaN(parseFloat(what)) && isFinite(what);
  },

  /** Check if a value is a function
   * @namespace highed
   * @param {anything} what - the value to check
   * @return {bool} - true if function
   */
  isFn: function(what) {
    return (what && typeof what === 'function') || what instanceof Function;
  },

  /** Check if a value is an array
   * @namespace highed
   * @param {anything} what - the value to check
   * @return {bool} - true if array
   */
  isArr: function(what) {
    return (
      !highed.isNull(what) && what.constructor.toString().indexOf('Array') > -1
    );
  },

  /** Check if a value is a boolean
   * @namespace highed
   * @param {anything} what - the value to check
   * @return {bool} - true if bool
   */
  isBool: function(what) {
    return what === true || what === false;
  },

  /** Check if a value is a basic type
   * A basic type is either a bool, string, or a number
   * @namespace highed
   * @param {anything} what - the value to check
   * @return {bool} - true if basic
   */
  isBasic: function(what) {
    return (
      !highed.isArr(what) &&
      (highed.isStr(what) ||
        highed.isNum(what) ||
        highed.isBool(what) ||
        highed.isFn(what))
    );
  },

  /** Parse CSV Data
     * @namespace highed
     * @param {string} - inData
     * @return {string} - delimiter 
     */

  parseCSV: function(inData, delimiter) {
    var isStr = highed.isStr,
      isArr = highed.isArray,
      isNum = highed.isNum,
      csv = inData || '',
      result = [],
      options = {
        delimiter: delimiter
      },
      potentialDelimiters = {
        ',': true,
        ';': true,
        '\t': true
      },
      delimiterCounts = {
        ',': 0,
        ';': 0,
        '\t': 0
      },
      rows;
    //The only thing CSV formats have in common..
    rows = (csv || '').replace(/\r\n/g, '\n').split('\n');

    // If there's no delimiter, look at the first few rows to guess it.

    if (!options.delimiter) {
      rows.some(function(row, i) {
        if (i > 10) return true;

        var inStr = false,
          c,
          cn,
          cl,
          token = '';

        for (var j = 0; j < row.length; j++) {
          c = row[j];
          cn = row[j + 1];
          cl = row[j - 1];

          if (c === '"') {
            if (inStr) {
              if (cl !== '"' && cn !== '"') {
                // The next non-blank character is likely the delimiter.

                while (cn === ' ') {
                  cn = row[++j];
                }

                if (potentialDelimiters[cn]) {
                  delimiterCounts[cn]++;
                  return true;
                }

                inStr = false;
              }
            } else {
              inStr = true;
            }
          } else if (potentialDelimiters[c]) {
            if (!isNaN(Date.parse(token))) {
              // Yup, likely the right delimiter
              token = '';
              delimiterCounts[c]++;
            } else if (!isNum(token) && token.length) {
              token = '';
              delimiterCounts[c]++;
            }
          } else {
            token += c;
          }
        }
      });

      options.delimiter = ';';

      if (
        delimiterCounts[','] > delimiterCounts[';'] &&
        delimiterCounts[','] > delimiterCounts['\t']
      ) {
        options.delimiter = ',';
      }

      if (
        delimiterCounts['\t'] >= delimiterCounts[';'] &&
        delimiterCounts['\t'] >= delimiterCounts[',']
      ) {
        options.delimiter = '\t';
      }
    }

    rows.forEach(function(row, rowNumber) {
      var cols = [],
        inStr = false,
        i = 0,
        j,
        token = '',
        guessedDel,
        c,
        cp,
        cn;

      function pushToken() {
        if (!token.length) {
          token = null;
          // return;
        }

        if (isNum(token)) {
          token = parseFloat(token);
        }

        cols.push(token);
        token = '';
      }

      for (i = 0; i < row.length; i++) {
        c = row[i];
        cn = row[i + 1];
        cp = row[i - 1];

        if (c === '"') {
          if (inStr) {
            pushToken();
          } else {
            inStr = false;
          }

          //Everything is allowed inside quotes
        } else if (inStr) {
          token += c;
          //Check if we're done reading a token
        } else if (c === options.delimiter) {
          pushToken();

          //Append to token
        } else {
          token += c;
        }

        // Push if this was the last character
        if (i === row.length - 1) {
          pushToken();
        }
      }

      result.push(cols);
    });

    return result;
  },

  removeNulls: function(dataSet){

    const newDataArr = [];
    dataSet.forEach(function(e){

      var rarr = [],
        hasData = false;

      e.forEach(function(v) {
        if (v) {
          hasData = true;
        }

        if (!highed.isNum(v) && highed.isStr(v)) {
          v = v.replace(/\"/g, '"');
        }

        if (highed.isNum(v)) {
          v = parseFloat(v);
        }

        if (highed.isStr(v) && Date.parse(v) !== NaN) {
          //v = (new Date(v)).getTime();
        }

        rarr.push(v);
      });

      if (hasData) {
        newDataArr.push(rarr);
      }
    });

    return newDataArr;
  }

};

// Stateful functions
(function() {
  var logLevels = ['error', 'warn', 'notice', 'verbose'],
    currentLogLevel = 0,
    initQueue = [],
    isReady = false,
    includedScripts = {},
    isOnPhone = false,
    options = {
      codeMirrorTheme: 'neo',
      helpURL: 'https://www.highcharts.com/products/highcharts-editor',
      defaultLanguage: 'en',
      includeCDNInExport: true,
      stickyChartProperties: {},
      includeHighcharts: true,
      cloudAPIURL: 'https://cloud-api.highcharts.com/',
      helpImgPath: 'help/',
      thumbnailURL: 'https://cloud.highcharts.com/static/thumbnails/',
      autoIncludeDependencies: true
    },
    cdnScripts = [
      'https://code.highcharts.com/stock/highstock.js',
      'https://code.highcharts.com/highcharts-more.js',
      'https://code.highcharts.com/highcharts-3d.js',
      'https://code.highcharts.com/modules/data.js',
      'https://code.highcharts.com/modules/exporting.js'
    ];

  ///////////////////////////////////////////////////////////////////////////

  function pollForReady() {
    if (!isReady) {
      if (document.body) {
        isReady = true;
        initQueue.forEach(function(fn) {
          fn();
        });
      } else {
        window.setTimeout(pollForReady, 100);
      }
    }
  }

  pollForReady();

  ///////////////////////////////////////////////////////////////////////////

  /**
   * Whitelist an option in simple view
   */
  highed.exposeOption = function(option) {};

  /** Set/get an option
   *  Skip `value` to get the value
   *  @param option {string} - the option to set
   *  @param value {anything} - the value to set
   *  @returns {anything} - the option value
   */
  highed.option = function(option, value) {
    if (!highed.isBasic(option)) {
      highed.merge(options, option);
    } else if (options[option]) {
      if (typeof value !== 'undefined') {
        options[option] = value;
      }
      return options[option];
    }
    return false;
  };

  /** Set a set of options
   *  @param options {object} - an object of options to set
   */
  highed.options = function(options) {
    Object.keys(options || {}).forEach(function(key) {
      highed.option(key, options[key]);
    });
  };

  /** Serialize the global options
   *  @returns {object} - a copy of the global options
   */
  highed.serializeEditorOptions = function() {
    return highed.merge({}, options);
  };

  /** Add a function to call when the document is ready
   * @param {function} fn - the function to call
   */
  highed.ready = function(fn) {
    if (highed.isFn(fn)) {
      if (isReady) {
        fn();
      } else {
        initQueue.push(fn);
      }
    }
  };

  /** Log something
   * Accepts a variable amount of arguments after `level` which will be
   * the log message (similar to `console.log`).
   * @param {number} level - the log level 1..4
   */
  highed.log = function(level) {
    var things = Array.prototype.slice.call(arguments);
    things.splice(0, 1);

    if (level <= currentLogLevel) {
      console.log.apply(undefined, [logLevels[level - 1] + ':'].concat(things)); //eslint-disable-line no-console
    }
  };

  /** Set the current log level
   *  @param level {number} - the current log level
   */
  highed.setLogLevel = function(level) {
    if (level <= logLevels.length) {
      currentLogLevel = level;
    }
  };

  /** Include something
   *  @namespace highed
   *  @param what {string} - URL to a css or javascript file
   *  @param fn {function} - function to call when done including the script
   *  @param asCSS {boolean} - force including as css
   */
  highed.include = function(what, fn, asCSS) {
    var n;

    if (!highed.isStr(what)) {
      return highed.isFn(fn) && fn();
    }

    function next() {
      if (n < what.length - 1) {
        highed.include(what[++n], next);
      }

      return highed.isFn(fn) && fn();
    }

    if (highed.isArr(what)) {
      n = -1;
      return next();
    }

    if (includedScripts[what]) {
      highed.log(3, 'script already included, skipping:', what);
      return fn();
    }

    highed.log(3, 'including script', what);
    includedScripts[what] = true;

    if (asCSS || what.lastIndexOf('.css') === what.length - 4) {
      n = document.createElement('link');
      n.rel = 'stylesheet';
      n.type = 'text/css';
      n.href = what;
      n.onload = fn;
    } else {
      n = document.createElement('script');
      n.src = what;
      n.onload = fn;
    }

    document.head.appendChild(n);
  };

  /** Returns true if running on a phone
   *  @namespace highed
   *  @returns {boolean} - true if running on a phone
   */
  highed.onPhone = function() {
    return isOnPhone;
  };

  function checkIfPhone() {
    var check = false;
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  isOnPhone = checkIfPhone();

  ///////////////////////////////////////////////////////////////////////////

  //Inject dependencies
  highed.ready(function() {
    if (!options.autoIncludeDependencies) {
      return false;
    }

    highed.include(
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css'
    );
    highed.include(
      'https://fonts.googleapis.com/css?family=Roboto:400,300,100,700|Source Sans:400,300,100',
      false,
      true
    );
  });

  //   highed.ready(function () {
  //Include the highcharts scripts
  // function tryAddScripts() {
  //     if (document.head) {
  //         cdnScripts.forEach(function (script) {
  //             var s = document.createElement('script');
  //             s.src = script;
  //             document.head.appendChild(s);
  //         });
  //     } else {
  //         window.setTimeout(tryAddScripts, 10);
  //     }
  // }

  // tryAddScripts();

  // function include(script, next) {
  //     var sc=document.createElement("script");
  //     sc.src = script;
  //     sc.type="text/javascript";
  //     sc.onload=function() {
  //         if (++next < incl.length) {
  //             include(incl[next], next);
  //         } else {
  //             loadedScripts = true;
  //         }
  //     };
  //     document.head.appendChild(sc);
  // }

  // var inc = {},
  //     incl = []
  // ;

  // document.querySelectorAll("script").forEach(function(t) {inc[t.src.substr(0, t.src.indexOf("?"))] = 1;});

  // Object.keys(cdnScripts).forEach(function (k){
  //     if (!inc[k] && k && k.length > 0) {
  //         incl.push(k)
  //     }
  // });

  // if (incl.length > 0) { include(incl[0], 0); } else {loadedScripts = true;}
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/*
    Note that the localization system uses attribute names
    rather than a default string. This is to make it easier to
    modify translations.

*/

(function() {
  var currentLang = highed.option('defaultLanguage'),
    langTree = {};

  /** Get a localized string based on the current global language
     *  @param id {string} - the ID of the string to get
     */
  highed.getLocalizedStr = function(id) {
    if (langTree[currentLang]) {
      if (langTree[currentLang][id]) {
        return langTree[currentLang][id];
      }
    } else {
      //The current language is invalid, fall back to 'en'
      if (langTree.en[id]) {
        return langTree.en[id];
      }
    }

    //404
    return 'bad localized string: ' + id;
  };

  /** This is an alias for highed.getLocalizedStr
     *  @type {function}
     *  @param id {string} - the string to get
     */
  highed.L = highed.getLocalizedStr;

  /** Install a language pack from a json object
     *  @param translations {object} - translation object
     */
  highed.installLanguage = function(translations) {
    if (translations && translations.language && translations.entries) {
      langTree[translations.language] = translations.entries;
    }
  };

  /** Install a language pack from a url
     *  @param url {string} - the location of the pack
     */
  highed.installLanguageFromURL = function(url, fn) {
    highed.ajax({
      url: url,
      success: function(res) {
        if (res) {
          if (highed.installLanguage(res)) {
            return fn && fn(false);
          }
          return fn && fn(true);
        }
      },
      error: function(err) {
        return fn && fn(err);
      }
    });
  };

  /** Set the active language
     *  @param lang {string} - the language to activate
     *  @return {boolean} - true if the language exists, and was applied
     */
  highed.setLang = function(lang) {
    if (langTree[lang]) {
      currentLang = lang;
      return true;
    }
    return false;
  };
})();

/*
    
    en Language Pack for the Highcharts Editor

    This file was generated by tools/gen.localization.js from
    en.json, Thu Mar 15 2018 10:04:15 GMT+0100 (CET)

*/

//Install "en" translations
highed.installLanguage({
  language: 'en',
  entries: {
    confirmNewChart:
      'Are you sure you want to abandon the current chart and start over?',
    previewChart: 'Preview Chart',
    newChart: 'New Chart',
    saveProject: 'Save Project',
    loadProject: 'Load Project',
    exportPNG: 'Export as PNG',
    exportJPEG: 'Export as JPEG',
    exportSVG: 'Export as SVG',
    exportPDF: 'Export as PDF',
    loadCloud: 'Load From Cloud',
    saveCloud: 'Save To Cloud',
    help: 'Help',
    licenseInfo: 'License Information',
    stepDone: 'Done',
    stepStart: 'Start',
    stepImport: 'Import',
    stepTemplates: 'Templates',
    stepCustomize: 'Customize',
    stepExport: 'Export',
    stepData: 'Data',
    doneCaption: 'Close & Generate Chart',
    dgDeleteRow: 'Really delete the selected rows?',
    dgWithSelected: 'With Selection:',
    dgImportBtn: 'IMPORT',
    dgExportBtn: 'EXPORT DATA',
    dgNewBtn: 'CLEAR DATA',
    dgAddRow: 'ADD ROW',
    dgDataImported: 'Data imported',
    dgDataImporting: 'Importing data',
    dgNewCol: 'New Column',
    dgSortAsc: 'Sort Ascending',
    dgSortDec: 'Sort Descending',
    dgSortAscMonth: 'Sort as Month Names Ascending',
    dgSortDecMonth: 'Sort as Month Names Decending',
    dgDelCol: 'Delete Column',
    dgDelColConfirm: 'Really delete the column?',
    dgInsColBefore: 'Insert Column Before',
    dgInsColAfter: 'Insert Column After',
    customizeSimple: 'SIMPLE',
    customizeAdvanced: 'ADVANCED',
    customizeCustomCode: 'CUSTOM CODE',
    customizePreview: 'PREVIEW OPTIONS',
    'option.cat.title': 'Titles',
    'option.subcat.titles': 'Main titles',
    'option.cat.general': 'General',
    'option.subcat.size': 'Chart size',
    'option.subcat.interaction': 'Chart Interaction',
    'option.cat.appearance': 'Appearance',
    'option.subcat.fonts': 'Fonts',
    'option.subcat.titlestyle': 'Title Style',
    'option.subcat.seriescolors': 'Series Colors',
    'option.subcat.chartarea': 'Chart Area',
    'option.subcat.plotarea': 'Plot Area',
    'option.cat.axes': 'Axes',
    'option.subcat.axessetup': 'Axes Setup',
    'option.subcat.xaxis': 'X-Axis',
    'option.subcat.yaxis': 'Y-Axis',
    'option.cat.series': 'Data Series',
    'option.cat.labels': 'Value Labels',
    'option.subcat.labels': 'Value Labels',
    'option.cat.legend': 'Legend',
    'option.subcat.general': 'General',
    'option.subcat.placement': 'Placement',
    'option.subcat.legendappearance': 'Appearance',
    'option.cat.tooltip': 'Tooltip',
    'option.subcat.colorborder': 'Color and Border',
    'option.cat.exporting': 'Exporting',
    'option.cat.localization': 'Localization',
    'option.subcat.numberformat': 'Number formatting',
    'option.subcat.exportbutton': 'Exporting button and menu',
    'option.subcat.zoombutton': 'Zoom button',
    'option.cat.credits': 'Credits',
    'option.series.label': 'Series Labels',
    'option.text.series.label.enabled': 'Series label',
    'option.tooltip.series.label.enabled':
      'Enable or disable the series label. Series labels are placed as close to the series as possible in a natural way, seeking to avoid other series. The goal of this feature is to make the chart more easily readable, like if a human designer placed the labels in the optimal position.',
    'option.text.series.label.style': 'Series label style',
    'options.tooltip.series.label.style': '',
    'option.text.title.text': 'Chart title',
    'option.tooltip.title.text': 'The main chart title.',
    'option.text.subtitle.text': 'Chart subtitle',
    'option.tooltip.subtitle.text':
      "The chart's subtitle, normally displayed with smaller fonts below the main title.",
    'option.text.yAxis.title.text': 'Y axis title',
    'option.tooltip.yAxis.title.text':
      'The Y axis title, normally displayed vertically along the Y axis.',
    'option.text.chart.width': 'Chart width',
    'option.tooltip.chart.width':
      'An explicit width for the chart. By default (when <code>null</code>) the width is calculated from the offset width of the containing element.',
    'option.text.chart.height': 'Chart height',
    'option.tooltip.chart.height':
      "An explicit height for the chart. By default (when <code>null</code>) the height is calculated from the offset height of the containing element, or 400 pixels if the containing element's height is 0.",
    'option.text.chart.zoomType': 'Allow zooming',
    'option.tooltip.chart.zoomType':
      'Decides in what dimensions the user can zoom by dragging the mouse. Can be one of <code>x</code>, <code>y</code> or <code>xy</code>.',
    'option.text.chart.polar': 'Polar (radar) projection',
    'option.tooltip.chart.polar':
      'When true, cartesian charts like line, spline, area and column are transformed into the polar coordinate system. Requires <code>highcharts-more.js</code>.',
    'option.text.chart.style': 'Font family',
    'option.tooltip.chart.style': 'The font to use throughout the chart',
    'option.text.title.style': 'Main title style',
    'option.tooltip.title.style': 'Styling for the main chart title',
    'option.text.subtitle.style': 'Subtitle style',
    'option.tooltip.subtitle.style':
      "Styling for the chart's subtitle, normally displayed with smaller fonts below the main title",
    'option.text.colors': 'Colors',
    'option.tooltip.colors':
      'Default colors for the data series, or for individual points in a pie series or a column series with individual colors. Colors will be picked in succession. If a color is explicitly set for each series in the <em>Data series</em> view, that color will take precedence.',
    'option.text.chart.backgroundColor': 'Background color',
    'option.tooltip.chart.backgroundColor':
      'Background color for the full chart area',
    'option.text.chart.borderWidth': 'Border width',
    'option.tooltip.chart.borderWidth':
      'The pixel width of the outer chart border.',
    'option.text.chart.borderRadius': 'Border corner radius',
    'option.tooltip.chart.borderRadius':
      'The corner radius of the outer chart border.',
    'option.text.chart.borderColor': 'Border color',
    'option.tooltip.chart.borderColor': 'The color of the outer chart border.',
    'option.text.chart.plotBackgroundColor': 'Background color',
    'option.tooltip.chart.plotBackgroundColor':
      'Background color for the plot area, the area inside the axes',
    'option.text.chart.plotBackgroundImage': 'Background image URL',
    'option.tooltip.chart.plotBackgroundImage':
      'The online URL for an image to use as the plot area background',
    'option.text.chart.plotBorderWidth': 'Border width',
    'option.tooltip.chart.plotBorderWidth':
      'The pixel width of the plot area border.',
    'option.text.chart.plotBorderColor': 'Border color',
    'option.tooltip.chart.plotBorderColor':
      'The color of the inner chart or plot area border.',
    'option.text.chart.inverted': 'Inverted axes',
    'option.tooltip.chart.inverted':
      '<p>Whether to invert the axes so that the x axis is vertical and y axis is horizontal. When true, the x axis is <a href="#xAxis.reversed">reversed</a> by default. If a bar series is present in the chart, it will be inverted automatically.</p>\r\n\r\n<p>Inverting the chart doesn\'t have an effect if there are no cartesian series in the chart, or if the chart is <a href="#chart.polar">polar</a>.</p>',
    'option.text.xAxis.title.style': 'X axis title',
    'option.tooltip.xAxis.title.style': 'Styling and text for the X axis title',
    'option.text.xAxis.title.text': 'Text',
    'option.tooltip.xAxis.title.text':
      'The actual text of the axis title. It can contain basic HTML text markup like &lt;b&gt;, &lt;i&gt; and spans with style.',
    'option.text.xAxis.type': 'Type',
    'option.tooltip.xAxis.type': 'The type of axis',
    'option.text.xAxis.opposite': 'Opposite side of chart',
    'option.tooltip.xAxis.opposite':
      'Whether to display the axis on the opposite side of the normal. The normal is on the left side for vertical axes and bottom for horizontal, so the opposite sides will be right and top respectively. This is typically used with dual or multiple axes.',
    'option.text.xAxis.reversed': 'Reversed direction',
    'option.tooltip.xAxis.reversed':
      'Whether to reverse the axis so that the highest number is closest to the origin. If the chart is inverted, the x axis is reversed by default.',
    'option.text.xAxis.labels.format': 'Axis labels format',
    'option.tooltip.xAxis.labels.format':
      '<p>A format string for the axis labels. The value is available through a variable <code>{value}</code>.</p><p><b>Units</b> can be added for example like <code>{value} USD</code>.</p><p><b>Formatting</b> can be added after a colon inside the variable, for example <code>USD {value:.2f}</code> to display two decimals, or <code>{value:%Y-%m-%d}</code> for a certain time format.',
    'option.text.yAxis.title.style': 'Y axis title style',
    'option.tooltip.yAxis.title.style': 'Styling and text for the X axis title',
    'option.text.yAxis.type': 'Type',
    'option.tooltip.yAxis.type': 'The type of axis',
    'option.text.yAxis.opposite': 'Opposite side of chart',
    'option.tooltip.yAxis.opposite':
      'Whether to display the axis on the opposite side of the normal. The normal is on the left side for vertical axes and bottom for horizontal, so the opposite sides will be right and top respectively. This is typically used with dual or multiple axes.',
    'option.text.yAxis.reversed': 'Reversed direction',
    'option.tooltip.yAxis.reversed':
      'Whether to reverse the axis so that the highest number is closest to the origin. If the chart is inverted, the x axis is reversed by default.',
    'option.text.yAxis.labels.format': 'Axis labels format',
    'option.tooltip.yAxis.labels.format':
      '<p>A format string for the axis labels. The value is available through a variable <code>{value}</code>.</p><p><b>Units</b> can be added for example like <code>{value} USD</code>.</p><p><b>Formatting</b> can be added after a colon inside the variable, for example <code>USD {value:.2f}</code> to display two decimals, or <code>{value:%Y-%m-%d}</code> for a certain time format.',
    'option.text.series.type': 'Series type',
    'option.tooltip.series.type': 'The type of series',
    'option.text.series.color': 'Color',
    'option.tooltip.series.color':
      'The main color of the series. If no color is given here, the color is pulled from the array of default colors as given in the "Appearance" section.',
    'option.text.series.negativeColor': 'Negative color',
    'option.tooltip.series.negativeColor':
      'The negative color of the series below the threshold. Threshold is default zero, this can be changed in the advanced settings.',
    'option.text.series.colorByPoint': 'Color by point',
    'option.tooltip.series.colorByPoint':
      'Use one color per point. Colors can be changed in the "Appearance" section.',
    'option.text.series.dashStyle': 'Dash style',
    'option.tooltip.series.dashStyle':
      'A name for the dash style to use for the graph. Applies only to series type having a graph, like <code>line</code>, <code>spline</code>, <code>area</code> and <code>scatter</code> in  case it has a <code>lineWidth</code>. The value for the <code>dashStyle</code> include:\r\n\t\t    <ul>\r\n\t\t    \t<li>Solid</li>\r\n\t\t    \t<li>ShortDash</li>\r\n\t\t    \t<li>ShortDot</li>\r\n\t\t    \t<li>ShortDashDot</li>\r\n\t\t    \t<li>ShortDashDotDot</li>\r\n\t\t    \t<li>Dot</li>\r\n\t\t    \t<li>Dash</li>\r\n\t\t    \t<li>LongDash</li>\r\n\t\t    \t<li>DashDot</li>\r\n\t\t    \t<li>LongDashDot</li>\r\n\t\t    \t<li>LongDashDotDot</li>\r\n\t\t    </ul>',
    'option.text.series.marker.enabled': 'Enable point markers',
    'option.tooltip.series.marker.enabled':
      'Enable or disable the point marker. If <code>null</code>, the markers are hidden when the data is dense, and shown for more widespread data points.',
    'option.text.series.marker.symbol': 'Marker symbol',
    'option.tooltip.series.marker.symbol':
      '<p>A predefined shape or symbol for the marker. When null, the symbol is pulled from options.symbols. Other possible values are "circle", "square", "diamond", "triangle" and "triangle-down".</p>\r\n\r\n<p>Additionally, the URL to a graphic can be given on this form:  "url(graphic.png)". Note that for the image to be applied to exported charts, its URL needs to be accessible by the export server.</p>\r\n\r\n<p>Custom callbacks for symbol path generation can also be added to <code>Highcharts.SVGRenderer.prototype.symbols</code>. The callback is then used by its method name, as shown in the demo.</p>',
    'option.text.plotOptions.series.dataLabels.enabled':
      'Enable data labels for all series',
    'option.tooltip.plotOptions.series.dataLabels.enabled':
      'Show small labels next to each data value (point, column, pie slice etc)',
    'option.text.plotOptions.series.dataLabels.style': 'Text style',
    'option.tooltip.plotOptions.series.dataLabels.style':
      'Styles for the label.',
    'option.text.legend.enabled': 'Enable legend',
    'option.tooltip.legend.enabled': 'Enable or disable the legend.',
    'option.text.legend.layout': 'Item layout',
    'option.tooltip.legend.layout':
      'The layout of the legend items. Can be one of "horizontal" or "vertical".',
    'option.text.legend.align': 'Horizontal alignment',
    'option.tooltip.legend.align':
      '<p>The horizontal alignment of the legend box within the chart area. Valid values are <code>left</code>, <code>center</code> and <code>right</code>.</p>\r\n\r\n<p>In the case that the legend is aligned in a corner position, the <code>layout</code> option will determine whether to place it above/below or on the side of the plot area.</p>',
    'option.text.legend.x': 'Horizontal offset',
    'option.tooltip.legend.x':
      'The pixel offset of the legend relative to its alignment',
    'option.text.legend.verticalAlign': 'Vertical alignment',
    'option.tooltip.legend.verticalAlign':
      '<p>The vertical alignment of the legend box. Can be one of <code>top</code>, <code>middle</code> or  <code>bottom</code>. Vertical position can be further determined by the <code>y</code> option.</p>\r\n\r\n<p>In the case that the legend is aligned in a corner position, the <code>layout</code> option will determine whether to place it above/below or on the side of the plot area.</p>',
    'option.text.legend.y': 'Vertical offset',
    'option.tooltip.legend.y':
      'The pixel offset of the legend relative to its alignment',
    'option.text.legend.floating': 'Float on top of plot area',
    'option.tooltip.legend.floating':
      'When the legend is floating, the plot area ignores it and is allowed to be placed below it.',
    'option.text.legend.itemStyle': 'Text style',
    'option.tooltip.legend.itemStyle':
      'CSS styles for each legend item. Only a subset of CSS is supported, notably those options related to text.',
    'option.text.legend.itemHiddenStyle': 'Text style hidden',
    'option.tooltip.legend.itemHiddenStyle':
      'CSS styles for each legend item when the corresponding series or point is hidden. Only a subset of CSS is supported, notably those options related to text. Properties are inherited from <code>style</code> unless overridden here.',
    'option.text.legend.backgroundColor': 'Background color',
    'option.tooltip.legend.backgroundColor':
      'The background color of the legend.',
    'option.text.legend.borderWidth': 'Border width',
    'option.tooltip.legend.borderWidth':
      'The width of the drawn border around the legend.',
    'option.text.legend.borderRadius': 'Border corner radius',
    'option.tooltip.legend.borderRadius':
      'The border corner radius of the legend.',
    'option.text.legend.borderColor': 'Border color',
    'option.tooltip.legend.borderColor':
      'The color of the drawn border around the legend.',
    'option.text.tooltip.enabled': 'Enable tooltip',
    'option.tooltip.tooltip.enabled':
      'Enable or disable the tooltip. The tooltip is the information box that appears on mouse-over or touch on a point.',
    'option.text.tooltip.shared': 'Shared between series',
    'option.tooltip.tooltip.shared':
      'When the tooltip is shared, the entire plot area will capture mouse movement or touch events. Tooltip texts for series types with ordered data (not pie, scatter, flags etc) will be shown in a single bubble. This is recommended for single series charts and for tablet/mobile optimized charts.',
    'option.text.tooltip.backgroundColor': 'Background color',
    'option.tooltip.tooltip.backgroundColor':
      'The background color of the tooltip',
    'option.text.tooltip.borderWidth': 'Border width',
    'option.tooltip.tooltip.borderWidth':
      '<p>The pixel width of the tooltip border.</p>\r\n\r\n<p>In <a href="http://www.highcharts.com/docs/chart-design-and-style/style-by-css">styled mode</a>, the stroke width is set in the <code>.highcharts-tooltip-box</code> class.</p>',
    'option.text.tooltip.borderRadius': 'Border corner radius',
    'option.tooltip.tooltip.borderRadius':
      'The radius of the rounded border corners.',
    'option.text.tooltip.borderColor': 'Border color',
    'option.tooltip.tooltip.borderColor':
      'The border color of the tooltip. If no color is given, the corresponding series color is used.',
    'option.text.exporting.enabled': 'Enable exporting',
    'option.tooltip.exporting.enabled':
      'Enable the context button on the top right of the chart, allowing end users to download image exports.',
    'option.text.exporting.sourceWidth': 'Exported width',
    'option.tooltip.exporting.sourceWidth':
      'The width of the original chart when exported. The pixel width of the exported image is then multiplied by the <em>Scaling factor</em>.',
    'option.text.exporting.scale': 'Scaling factor',
    'option.tooltip.exporting.scale':
      'The export scale. Note that this is overridden if width is set.',
    'option.text.lang.decimalPoint': 'Decimal point',
    'option.tooltip.lang.decimalPoint':
      'The decimal point used for all numbers',
    'option.text.lang.thousandsSep': 'Thousands separator',
    'option.tooltip.lang.thousandsSep':
      'The thousands separator used for all numbers',
    'option.text.lang.contextButtonTitle': 'Context button title',
    'option.tooltip.lang.contextButtonTitle':
      'Exporting module menu. The tooltip title for the context menu holding print and export menu items.',
    'option.text.lang.printChart': 'Print chart',
    'option.tooltip.lang.printChart':
      'Exporting module only. The text for the menu item to print the chart.',
    'option.text.lang.downloadPNG': 'Download PNG',
    'option.tooltip.lang.downloadPNG':
      'Exporting module only. The text for the PNG download menu item.',
    'option.text.lang.downloadJPEG': 'Download JPEG',
    'option.tooltip.lang.downloadJPEG':
      'Exporting module only. The text for the JPEG download menu item.',
    'option.text.lang.downloadPDF': 'Download PDF',
    'option.tooltip.lang.downloadPDF':
      'Exporting module only. The text for the PDF download menu item.',
    'option.text.lang.downloadSVG': 'Download SVG',
    'option.tooltip.lang.downloadSVG':
      'Exporting module only. The text for the SVG download menu item.',
    'option.text.lang.resetZoom': 'Reset zoom button',
    'option.tooltip.lang.resetZoom':
      'The text for the label appearing when a chart is zoomed.',
    'option.text.credits.enabled': 'Enable credits',
    'option.tooltip.credits.enabled': 'Whether to show the credits text',
    'option.text.credits.text': 'Credits text',
    'option.tooltip.credits.text': 'The text for the credits label',
    'option.text.credits.href': 'Link',
    'option.tooltip.credits.href': 'The URL for the credits label'
  }
});

/*******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Namespace for DOM helper functions
 * @ignore
 */
highed.dom = {
  /** Check if a node is visible
     *  @namespace highed.dom
     *  @param node {domnode} - the node to check
     */
  isVisible: function(node) {
    var style = window.getComputedStyle(node);
    return style.display !== 'none';
  },

  /** Append a set of nodes to another node.
     * Arguments supplied after the @param {} target represents the children to append.
     * @namespace highed.dom
     * @param target {object} - the node to append to
     * @return {domnode} - the target
     */
  ap: function(target) {
    var children = Array.prototype.slice.call(arguments);
    children.splice(0, 1);

    target = highed.dom.get(target);

    if (!highed.isNull(target) && typeof target.appendChild !== 'undefined') {
      children.forEach(function(child) {
        if (highed.isArr(child)) {
          child.forEach(function(sc) {
            highed.dom.ap(target, sc);
          });
        } else if (
          typeof child !== 'undefined' &&
          typeof child.appendChild !== 'undefined'
        ) {
          target.appendChild(child);
        } else if (child !== false) {
          highed.log(1, 'child is not valid (highed.dom.ap)');
        }
      });
    } else {
      highed.log(1, 'target is not a valid DOM node (highed.dom.ap)');
    }

    return target;
  },

  /** Create a set of options for a select
     * @namespace highed.dom
     * @param select {HTMLSelect} - the dropdown to add options to
     * @param options {(array|object)} - the options as an array or as an object keyed on ID
     * @param selected {number} - the index of the selected option
     */
  options: function(select, options, selected) {
    if (highed.isNull(options)) {
    } else if (highed.isArr(options)) {
      options.forEach(function(option) {
        highed.dom.ap(select, highed.dom.cr('option', '', option, option));
      });

      if (selected) {
        select.selectedIndex = selected;
      }
    } else if (highed.isStr(options)) {
      try {
        highed.dom.options(select, JSON.parse(options));
      } catch (e) {
        highed.log(e + ' in highed.options (json parser)');
      }
    } else {
      Object.keys(options).forEach(function(key) {
        highed.dom.ap(select, highed.dom.cr('option', '', options[key], key));
      });
    }
  },

  /** Show a node when another is hovered
     * @namespace highed.dom
     * @param parent {object} - the node to listen for the hover on
     * @param child {object} - the node to show when the parent is hovered
     */
  showOnHover: function(parent, child) {
    if (highed.isArr(child)) {
      child.forEach(function(c) {
        highed.dom.showOnHover(parent, c);
      });
      return;
    }

    highed.dom.on(parent, 'mouseover', function() {
      highed.dom.style(child, {
        //display: 'block',
        opacity: 1,
        //  background: 'rgba(46, 46, 46, 0.85)',
        'pointer-events': 'auto'
      });
    });

    highed.dom.on(parent, 'mouseout', function() {
      highed.dom.style(child, {
        //display: 'none',
        opacity: 0,
        //background: 'rgba(0, 0, 0, 0)',
        'pointer-events': 'none'
      });
    });
  },

  /** Create a new HTML node
     * @namespace highed.dom
     * @param type {string} - the type of node to create
     * @param cssClass {string} (optional) - the css class to use for the node
     * @param innerHTML {string} (optional) - the inner html of the new node
     * @param id {string} (optional) - the id of the new node
     *
     * @return {domnode} - the new dom node
     */
  cr: function(type, cssClass, innerHTML, id) {
    var res = false;

    if (typeof type !== 'undefined') {
      res = document.createElement(type);

      if (typeof cssClass !== 'undefined') {
        res.className = cssClass;
      }

      if (typeof innerHTML !== 'undefined') {
        res.innerHTML = innerHTML;
      }

      if (typeof id !== 'undefined') {
        res.id = id;
      }
    } else {
      highed.log(1, 'no node type supplied (highed.dom.cr');
    }

    return res;
  },

  /** Style a node
     * @namespace highed.dom
     * @param nodes {(object|array)}  - the node to style. Can also be an array
     * @param style {object} - object containing style properties
     *
     * @return {anything} - whatever was supplied to @param {} nodes
     */
  style: function(nodes, style) {
    if (highed.isArr(nodes)) {
      nodes.forEach(function(node) {
        highed.dom.style(node, style);
      });
      return nodes;
    }

    if (nodes && nodes.style) {
      Object.keys(style).forEach(function(p) {
        nodes.style[p] = style[p];
      });
      return nodes;
    }
    return false;
  },

  /** Attach an event listener to a dom node
     * @namespace highed.dom
     * @param target {object} - the dom node to attach to
     * @param event {string} - the event to listen for
     * @param callback {function} - the function to call when the event is emitted
     * @param context {object} (optional) - the context of the callback function
     *
     * @return {function} - a function that can be called to unbind the handler
     */
  on: function(target, event, callback, context) {
    var s = [];

    if (!target) {
      return function() {};
    }

    if (highed.isArr(event)) {
      event.forEach(function(event) {
        s.push(highed.dom.on(target, event, callback, context));
      });

      return function() {
        s.forEach(function(f) {
          f();
        });
      };
    }

    if (target === document.body && event === 'resize') {
      //Need some special magic here eventually.
    }

    if (target && target.forEach) {
      target.forEach(function(t) {
        s.push(highed.dom.on(t, event, callback));
      });
    }

    if (s.length > 0) {
      return function() {
        s.forEach(function(f) {
          f();
        });
      };
    }

    function actualCallback() {
      if (highed.isFn(callback)) {
        return callback.apply(context, arguments);
      }
      return;
    }

    if (target.addEventListener) {
      target.addEventListener(event, actualCallback, false);
    } else {
      target.attachEvent('on' + event, actualCallback, false);
    }

    return function() {
      if (window.removeEventListener) {
        target.removeEventListener(event, actualCallback, false);
      } else {
        target.detachEvent('on' + event, actualCallback);
      }
    };
  },

  nodefault: function(e) {
    e.cancelBubble = true;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  },

  /** Get or set the value of a node
     * @namespace highed.dom
     * @param node {object} - the node to get the value of
     * @param value {(string|bool|number)} (optional) - the value to set
     * @return {anything} - the value
     */
  val: function(node, value) {
    if (node.tagName === 'SELECT') {
      if (node.selectedIndex >= 0) {
        if (!highed.isNull(value)) {
          for (var i = 0; i < node.options.length; i++) {
            if (node.options[i].id === value) {
              node.selectedIndex = i;
              break;
            }
          }
        }
        return node.options[node.selectedIndex].id;
      }
    } else if (node.tagName === 'INPUT') {
      if (node.type === 'checkbox') {
        if (!highed.isNull(value)) {
          node.checked = highed.toBool(value);
        }
        return node.checked;
      }
      if (!highed.isNull(value)) {
        node.value = value;
      }
      return node.value;
    } else {
      if (!highed.isNull(value)) {
        node.innerHTML = value;
      }
      return node.innerText;
    }

    return false;
  },

  /** Get the size of a node
     * @namespace highed.dom
     * @param node {object} - the node to get the size of
     * @return {object} - the size as an object `{w, h}`
     */
  size: function(node) {
    return {
      w: node.clientWidth,
      h: node.clientHeight
    };
  },

  /** Get the position of a node
     * @namespace highed.dom
     * @param node {object} - the node to get the position of
     * @param abs {boolean} - absolute calculation rather than parent relative
     * @return {object} - the position as an object `{x, y}`
     */
  pos: function(node, abs) {
    var x = 0,
      y = 0;

    if (abs) {
      var b = node.getBoundingClientRect();

      return {
        x: b.left + window.scrollX,
        y: b.top + window.scrollY
      };
    }

    return {
      x: node.offsetLeft,
      y: node.offsetTop
    };
  },

  /** Find a node
     * @namespace highed.dom
     * @param node {object} - the node to find. Either a string or an actual node instance
     * @return {object} - the node or false if the node was not found
     */
  get: function(node) {
    if (node && node.appendChild) {
      return node;
    }
    return document.getElementById(node) || false;
  }
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Event dispatcher object
 *  Constructs an instance of an event dispatcher when called.
 *  @constructor
 *  @example
 *  var events = highed.events();
 *  events.on('foobar', function () {console.log('Hello world!')});
 *  events.emit('foobar');
 */
highed.events = function() {
  var callbacks = {},
    listenerCounter = 0;

  /** Listen to an event
      * @memberof highed.events
      * @param event {string} - the event to listen for
      * @param callback {function} - the function to call when the event is emitted
      * @param context {anything} - the calling context (`this` reference) for the callback
      * @returns {function} - function that can be called to unbind the listener
      */
  function on(event, callback, context) {
    var id = ++listenerCounter;

    if (highed.isArr(callback)) {
      return callback.forEach(function(cb) {
        on(event, cb, context);
      });
    }

    callbacks[event] = callbacks[event] || [];

    callbacks[event].push({
      id: id,
      fn: callback,
      context: context
    });

    return function() {
      callbacks[event] = callbacks[event].filter(function(e) {
        return e.id !== id;
      });
    };
  }

  return {
    on: on,

    /** Emit an event
         * Note that the function accepts a variable amount of arguments. Any arguments after the event name will be passed on to any event listeners attached to the event being emitted.
         * @memberof highed.events
         * @param event {string} - the event to emit
         * @return {number} - The number of events dispatched
         */
    emit: function(event) {
      var args = Array.prototype.slice.call(arguments);
      args.splice(0, 1);

      if (typeof callbacks[event] !== 'undefined') {
        callbacks[event].forEach(function(event) {
          if (highed.isFn(event.fn)) {
            event.fn.apply(event.context, args);
          }
        });

        return callbacks[event].length;
      }
      return 0;
    }
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/**
 * @ignore
 */
highed.ready(function() {
  var uploader = highed.dom.cr('input'),
    cb = false;

  uploader.type = 'file';
  uploader.accept = '.csv';

  highed.dom.ap(document.body, uploader);

  highed.dom.style(uploader, {
    display: 'none'
  });

  /** Upload and parse a local file
  *  Borrowed from almostvanilla which is licensed under MIT.
  *  @param props {object} - the upload settings
  *     > type {string} - the type of data to load
  *     > accept {string} - the accepted file extensions
  *     > multiple {boolean} - allow multiple files
  *     > progress {function} - progress callback
  *       > {number} - the progress in percent
  *     > success {function} - function called when the file is uploaded
  *       > {object} - the file information
  *         > filename {string} - the name of the file
  *         > size {number} - the size of the file in bytes
  *         > data {string} - the file data
  */
  highed.readLocalFile = function(props) {
    var p = highed.merge(
      {
        type: 'text',
        multiple: false,
        accept: '.csv'
      },
      props
    );

    uploader.accept = p.accept;

    if (highed.isFn(cb)) {
      cb();
    }

    cb = highed.dom.on(uploader, 'change', function() {
      function crReader(file) {
        var reader = new FileReader();

        reader.onloadstart = function(evt) {
          if (highed.isFn(p.progress)) {
            p.progress(Math.round(evt.loaded / evt.total * 100));
          }
        };

        reader.onload = function(event) {
          var data = reader.result;

          if (p.type === 'json') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              if (highed.isFn(p.error)) {
                p.error(e);
              }
            }
          }

          if (highed.isFn(p.success)) {
            p.success({
              filename: file.name,
              size: file.size,
              data: data
            });
          }
        };

        return reader;
      }

      for (var i = 0; i < uploader.files.length; i++) {
        if (!p.type || p.type === 'text' || p.type === 'json') {
          crReader(uploader.files[i]).readAsText(uploader.files[i]);
        } else if (p.type === 'binary') {
          crReader(uploader.files[i]).readAsBinaryString(uploader.files[i]);
        } else if (p.type === 'b64') {
          crReader(uploader.files[i]).readAsDataURL(uploader.files[i]);
        }
      }
      cb();
      uploader.value = '';
    });

    uploader.multiple = p.multiple;

    uploader.click();
  };
});

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

highed.templates = {};

(function() {
  /* Templates */
  var templates = {};

  /** Install a new template
     *
     *  @example
     *  highed.installTemplate('custom', {
     *      title: 'My company template',
     *      tooltipText: 'Company template: requires no particular data',
     *      config: {
     *           'chart--title': 'Company Chart'
     *      }
     *  });
     *
     *  @param type {string} - template type: `line area column bar scatter pie polar stock`
     *  @param def {object} - the template definition
     *    > title {string} - the template title
     *    > config {object} - the highcharts attributes
     *    > tooltipText {string} - the tooltip text
     */
  highed.templates.add = function(type, def) {
    var properties = highed.merge(
      {
        title: '',
        description: '',
        constructor: '',
        thumbnail: '',
        sampleSets: [],
        validator: false,
        config: {}
      },
      def
    );

    if (!highed.isBasic(type)) {
      return false;
    }

    templates[type] = templates[type] || {
      description: '',
      sampleData: [],
      templates: {}
    };

    if (properties.title.length) {
      templates[type].templates[properties.title] = properties;
      highed.log(4, '[templateman] - added template', properties.title);
      return true;
    }

    return false;
  };

  /**
     * Do something for each template
     * @param fn {function} - the callback
     */
  highed.templates.each = function(fn) {
    if (highed.isFn(fn)) {
      Object.keys(templates).forEach(function(cat) {
        Object.keys(templates[cat].templates).forEach(function(id) {
          fn(cat, templates[cat].templates[id]);
        });
      });
    }
  };

  /**
     * Do something for each template within a given category
     * @param cat {string} - the category to filter by
     * @param fn {function} - the callback
     */
  highed.templates.eachInCategory = function(cat, fn) {
    if (highed.isFn(fn) && templates[cat]) {
      Object.keys(templates[cat].templates).forEach(function(id) {
        fn(templates[cat].templates[id]);
      });
    }
  };

  /**
     * Get a reference to the templates within a given category
     */
  highed.templates.getAllInCat = function(cat) {
    return templates[cat] ? templates[cat].templates : false;
  };

  /**
     * Get category meta
     */
  highed.templates.getCatInfo = function(cat) {
    return highed.merge(
      {
        id: cat
      },
      templates[cat] || {}
    );
  };

  /**
     * Get a list of id/title pairs for templates
     */
  highed.templates.getCatArray = function() {
    return Object.keys(templates).map(function(cat) {
      return {
        id: cat,
        title: cat
      };
    });
  };

  /**
     * Add meta information to a category
     */
  highed.templates.addCategory = function(id, meta) {
    templates[id] = templates[id] || {
      templates: {}
    };

    highed.merge(templates[id], meta, false, { templates: 1 });
  };

  /**
     * Do something with each category
     * @param fn {function} - the callback
     */
  highed.templates.eachCategory = function(fn) {
    if (highed.isFn(fn)) {
      Object.keys(templates).forEach(function(id) {
        fn(id, templates[id]);
      });
    }
  };

  /** Flush templates */
  highed.templates.flush = function() {
    templates = {};
  };

  /** Add a new template type
     *  If the type already exists, nothing will happen
     *
     *  @example
     *  highed.addTemplateType('custom', 'My company templates');
     *
     *  @param type {string} - the type id
     *  @param title {string} - the title as it appears in the category list
     */
  highed.templates.addType = function(type, title) {
    if (typeof templates === 'undefined') {
      templates = {};
    }

    if (typeof templates[type] === 'undefined') {
      templates[type] = {
        title: title,
        templates: {}
      };
    }
  };

  /** Add a set of templates
      * @example
      * highed.installMultipleTemplates([
      *   {type: 'line', template: {title: 'My Line Template', config: {}}}
      * ]);
      *
      * @param templates {array} - an array of templates
      *
      */
  highed.templates.addMultiple = function(templates) {
    if (typeof templates === 'undefined') {
      templates = {};
    }

    if (highed.isArr(templates)) {
      templates.forEach(function(template) {
        if (template.type && template.template) {
          highed.installTemplate(template.type, template.template);
        }
      });
    }
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

// There be dragons here...
(function() {
  var hasTransformedAdvanced = false;

  /**
     * Merges/extends advanced meta
     *  1. Find the source
     *  2. If source is also extending:
     *      2a. Recursively merge source
     *  3. Remove the extends attribute from target
     *  4. Merge source children
     */
  function mergeAdv(superset, dest, src, trigger) {
    var path = src.split('.'),
      current = superset,
      seriesNames = {
        pie: true,
        line: true
      };

    // console.log(
    //     'extending',
    //     (dest.meta.ns ? dest.meta.ns + '.' : '') + dest.meta.name,
    //     'with',
    //     src
    // );

    path.some(function(p) {
      if (current.subtree[p]) {
        current = current.subtree[p];
      } else {
        // console.log(
        //     'unable to resolve path for merge:',
        //     src,
        //     'from',
        //     dest.meta.name
        // );

        current = false;
        return true;
      }
    });

    // Stop from trying to extend this multiple times
    dest.meta.extends = dest.meta.extends.replace(src, '');

    if (current) {
      // Extend the source if needed
      extend(superset, current);

      // Unfortunatly we need to take series into special consideration
      // until we have a more robust way of handling its meta
      if (trigger && trigger.indexOf('series') === 0) {
        Object.keys(current.subtree || {}).forEach(function(key) {
          dest.subtree[key] =
            dest.subtree[key] || highed.merge({}, current.subtree[key]);
          dest.subtree[key].meta.validFor =
            dest.subtree[key].meta.validFor || {};

          if (
            dest.meta.excludes &&
            Object.keys(dest.meta.excludes).length > 0
          ) {
            dest.subtree[key].meta.validFor[current.meta.name] = !dest.meta
              .excludes[key];
          } else {
            dest.subtree[key].meta.validFor[current.meta.name] = 1;
          }
        });

        // console.log(dest);
      } else {
        // Do actual extending
        highed.merge(dest.subtree, current.subtree, false, dest.meta.excludes);
      }
    }
  }

  /**
      * Extend a node
      */
  function extend(superset, node, trigger) {
    if (node.meta.extends && node.meta.extends.length > 0) {
      node.meta.extends = node.meta.extends.replace('{', '').replace('}', '');

      if (trigger === 'series') {
        node.meta.extends += ',plotOptions.line';
      }

      node.meta.extends.split(',').forEach(function(part) {
        if (part && part.length > 0) {
          mergeAdv(superset, node, part.trim(), trigger);
        }
      });
    }
  }

  /**
     * Transform the tree
     * - merges
     * - arrifies
     * - sorts
     *
     * Duplicating children is faster than arrifying and replacing
     *
     */
  function transformAdv(input, onlyOnce) {
    var res;

    if (onlyOnce && hasTransformedAdvanced) {
      return input;
    }

    function visit(node, pname) {
      var children = (node.subtree = node.subtree || {});

      node.meta = node.meta || {};
      node.meta.ns = pname;
      node.children = [];

      // Take care of merging
      extend(input, node, (pname ? pname + '.' : '') + node.meta.name);

      node.meta.hasSubTree = false;

      node.children = [];

      Object.keys(children).forEach(function(child) {
        if (Object.keys(children[child].subtree).length > 0) {
          node.meta.hasSubTree = true;
        }

        node.children.push(
          visit(
            children[child],
            (pname ? pname + '.' : '') + (node.meta.name || '')
          )
        );
      });

      node.children.sort(function(a, b) {
        return a.meta.name.localeCompare(b.meta.name);
      });

      if (node.children.length === 0) {
        node.meta.leafNode = true;
      }

      return node;
    }

    // console.time('tree transform');
    res = visit(input);
    // console.timeEnd('tree transform');

    return res;
  }

  // Removes all empty objects and arrays from the input object
  function removeBlanks(input) {
    function rewind(stack) {
      if (!stack || stack.length === 0) return;

      var t = stack.pop();

      if (Object.keys(t).length === 0) {
        rewind(stack);
      } else {
        Object.keys(t || {}).forEach(function(key) {
          var child = t[key];

          if (key[0] === '_') {
            delete t[key];
          } else if (
            child &&
            !highed.isBasic(child) &&
            !highed.isArr(child) &&
            Object.keys(child).length === 0
          ) {
            delete t[key];
          } else if (highed.isArr(child) && child.length === 0) {
            delete t[key];
          } else if (highed.isArr(child)) {
            child = child.map(function(sub) {
              return removeBlanks(sub);
            });
          }
        });
      }

      rewind(stack);
    }

    function visit(node, parentStack) {
      parentStack = parentStack || [];

      if (node) {
        if (parentStack && Object.keys(node).length === 0) {
          rewind(parentStack.concat([node]));
        } else {
          Object.keys(node).forEach(function(key) {
            var child = node[key];
            if (key[0] === '_') {
              rewind(parentStack.concat([node]));
            } else if (!highed.isBasic(child) && !highed.isArr(child)) {
              visit(child, parentStack.concat([node]));
            }
          });
        }
      }
    }

    visit(input);
    return input;
  }

  highed.transform = {
    advanced: transformAdv,
    remBlanks: removeBlanks
  };
})();

/*******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  // Samples, keyed on ID
  var samples = {};

  highed.samples = {
    /**
         * Add a sample to the sample collection
         *
         * This should be linked to templates too,
         * both in the sense that templates should have a list of
         * ID's for suitable sample data, and in the sense that
         * when displaying sample data it should display what kind of
         * chart types the data is valid for.
         *
         * The latter can be done automatically by cross-checking templates.
         *
         * @param {object} sample - the sample definition
         *    > id {anything} - the ID of the sample
         *    > title {anything} - the sample title
         *    > description {string} - the sample description
         *    > dataset {array<array<object>>} - the sample data
         *    > suitableSeries {object} - the kind of series this is suitable for
         */
    add: function(sample) {
      var options = highed.merge(
        {
          title: 'Untitled Sample',
          description: 'Untitled Sample',
          dataset: [],
          suitableSeries: false,
          products: false
        },
        sample
      );

      if (options.id && !samples[options.id]) {
        samples[options.id] = options;
        return true;
      }

      return false;
    },

    /**
         * Do something for each sample
         * @param fn {function} - the callback
         * @param productFilter {string} - the product(s) to include (optional)
         * @param typeFilter {string} - the series type(s) to include (optional)
         */
    each: function(fn, productFilter, typeFilter) {
      if (highed.isFn(fn)) {
        Object.keys(samples).forEach(function(id) {
          fn(samples[id]);
        });
      }
    },

    /**
         * Get a single sample set
         * @param id {string} - the id of the sample set to get
         * @returns {sample|false} - false if 404, sample if found
         */
    get: function(id) {
      return samples[id] || false;
    }
  };
})();

/*******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/* Keeps track of validations */

(function() {
  // Keyed on ID
  var validators = {};

  highed.validators = {
    /**
         * Add a validator
         * @param id {string} - the id
         * @param fn {function} - the validator function
         */
    add: function(id, fn) {
      if (id && !validators[id] && highed.isFn(fn)) {
        validators[id] = fn;
        return true;
      }

      return false;
    },

    /**
         * Execute a validator
         * @param id {string} - the id of the validator
         * @param chart {Chart} - the charts whose data to validate
         * @return {boolean} - true if valid
         */
    validate: function(id, chart) {
      return validators[id] ? validators[id](chart) : true;
    }
  };
})();

/*******************************************************************************

Copyright (c) 2017-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*******************************************************************************/

// @format

(function() {
  var token = false,
    url = highed.option('cloudAPIURL');

  // Set up namespace for the cloud API
  highed.cloud = {};

  highed.cloud.isLoggedIn = function() {
    return token !== false;
  };

  highed.cloud.login = function(username, password, fn) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'login',
      type: 'post',
      data: {
        username: username,
        password: password
      },
      success: function(data) {
        if (data && data.token) {
          token = data.token;
        }
        return highed.isFn(fn) && fn(typeof data.token === 'undefined', data);
      },
      error: function(err) {
        return highed.isFn(fn) && fn(err);
      }
    });
  };

  highed.cloud.getTeams = function(fn) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'teams',
      type: 'get',
      headers: {
        'X-Auth-Token': token
      },
      success: function(data) {
        if (data.error) {
          return highed.snackBar(data.message);
        }
        return highed.isFn(fn) && fn(data);
      }
    });
  };

  highed.cloud.getCharts = function(teamID, fn, page) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'team/' + teamID + '/charts/' + '?page=' + page,
      type: 'get',
      headers: {
        'X-Auth-Token': token
      },
      success: function(data) {
        if (data.error) {
          return highed.snackBar(data.message);
        }
        return highed.isFn(fn) && fn(data.data, data);
      }
    });
  };

  highed.cloud.getChart = function(teamID, chartID, fn) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'team/' + teamID + '/chart/' + chartID,
      type: 'get',
      headers: {
        'X-Auth-Token': token
      },
      success: function(data) {
        if (data.error) {
          return highed.snackBar(data.message);
        }
        return highed.isFn(fn) && fn(data);
      }
    });
  };

  highed.cloud.saveExistingChart = function(teamID, chartID, chart, fn) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'team/' + teamID + '/chart/' + chartID,
      type: 'post',
      headers: {
        'X-Auth-Token': token
      },
      data: {
        data: chart
      },
      success: function(data) {
        if (data.error) {
          return highed.snackbar(data.message);
        }
        return highed.isFn(fn) && fn(data);
      }
    });
  };

  highed.cloud.saveNewChart = function(teamID, name, chart, fn) {
    url = highed.option('cloudAPIURL');

    highed.ajax({
      url: url + 'team/' + teamID + '/chart',
      type: 'post',
      headers: {
        'X-Auth-Token': token
      },
      data: {
        name: name,
        data: chart
      },
      success: function(data) {
        if (data.error) {
          return highed.snackbar(data.message);
        }
        return highed.isFn(fn) && fn(data);
      }
    });
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var events = highed.events();
  highed.on = events.on;
  highed.emit = events.emit;
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  /** Show a dimmer backdrop
     *
     *  Used to catch input when showing modals, context menus etc.
     *
     *  @example
     *  highed.showDimmer(function () {
     *       alert('You clicked the dimmer!');
     *  });
     *
     *  @param {function} fn - the function to call when the dimmer is clicked
     *  @param {bool} autohide - set to true to hide the dimmer when it's clicked
     *  @param {bool} transparent - set to true for the dimmer to be transparent
     *  @param {number} zIndex - the z index *offset*
     *  @return {function} - A function that can be called to hide the dimmer
     */
  highed.showDimmer = function(fn, autohide, transparent, zIndex) {
    var dimmer = highed.dom.cr('div', 'highed-dimmer'),
      unbinder = false;

    highed.dom.ap(document.body, dimmer);

    highed.dom.style(dimmer, {
      opacity: 0.7,
      'pointer-events': 'auto',
      'z-index': 9999 + (zIndex || 0)
    });

    if (transparent) {
      highed.dom.style(dimmer, {
        opacity: 0
      });
    }

    function hide() {
      highed.dom.style(dimmer, {
        opacity: 0,
        'pointer-events': 'none'
      });

      if (highed.isFn(unbinder)) {
        unbinder();
        unbinder = false;
      }

      window.setTimeout(function() {
        if (dimmer.parentNode) {
          dimmer.parentNode.removeChild(dimmer);
        }
      }, 300);
    }

    unbinder = highed.dom.on(dimmer, 'click', function(e) {
      if (highed.isFn(fn)) {
        fn();
      }

      if (autohide) {
        hide();
      }
    });

    return hide;
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Turn a DOM node into an overlay "popup"
 *
 *  @example
 *  //Create an overlay with hello world in it
 *  highed.OverlayModal(highed.dom.cr('h1', '', 'Hello World!'));
 *
 *  @constructor
 *
 *  @emits Show - when the overlay is shown
 *  @emits Hide - when the overlay is hidden
 *
 *  @param {domnode} contents - the DOM node to wrap.
 *  @param {object} attributes - properties for the modal
 *    > width {number} - the width of the modal
 *    > height {number} - the height of the modal
 *    > minWidth {number} - the minimum width of the modal
 *    > minHeight {number} - the minimum height of the modal
 *    > showOnInit {boolean} - if true, the modal will be shown after creation
 *    > zIndex {number} - the Z-Index to use for the modal
 *  @return {object} - A new instance of OverlayModal
 */
highed.OverlayModal = function(contents, attributes) {
  var container = highed.dom.cr('div', 'highed-overlay-modal'),
    events = highed.events(),
    properties = highed.merge(
      {
        width: 200,
        height: 200,
        minWidth: 10,
        minHeight: 10,
        showOnInit: true,
        zIndex: 10000
      },
      attributes
    ),
    hideDimmer = false,
    visible = false;

  ///////////////////////////////////////////////////////////////////////////

  /** Show the modal
     *  @memberof highed.OverlayModal
     */
  function show() {
    if (visible) return;

    highed.dom.style(container, {
      width:
        properties.width +
        (properties.width.toString().indexOf('%') > 0 ? '' : 'px'),
      height:
        properties.height +
        (properties.height.toString().indexOf('%') > 0 ? '' : 'px'),
      opacity: 1,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      'pointer-events': 'auto',
      'min-width': properties.minWidth + 'px',
      'min-height': properties.minHeight + 'px',
      'z-index': properties.zIndex
    });

    highed.dom.style(document.body, {
      'overflow-x': 'hidden',
      'overflow-y': 'hidden'
    });

    hideDimmer = highed.showDimmer(
      hide,
      true,
      false,
      properties.zIndex - 10000
    );

    window.setTimeout(function() {
      events.emit('Show');
    }, 300);

    visible = true;
  }

  /** Hide the modal
     *  @memberof highed.OverlayModal
     *  @param suppress {boolean} - suppress the hide event emitting
     */
  function hide(suppress) {
    if (!visible) return;

    highed.dom.style(container, {
      width: '0px',
      height: '0px',
      opacity: 0,
      left: '-20000px',
      'pointer-events': 'none'
    });

    highed.dom.style(document.body, {
      'overflow-x': '',
      'overflow-y': ''
    });

    if (highed.isFn(hideDimmer)) {
      hideDimmer();
    }

    visible = false;

    if (!suppress) {
      events.emit('Hide');
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  highed.ready(function() {
    highed.dom.ap(document.body, container);
  });

  if (contents) {
    // if (highed.isStr(contents)) {
    //    contents = highed.dom.cr('div', '', contents);
    // }
    // highed.dom.ap(container,
    //    contents
    // );
  }

  hide(true);

  ///////////////////////////////////////////////////////////////////////////

  //Public interface
  return {
    on: events.on,
    show: show,
    hide: hide,
    /** The container DOM node
         *  @memberof highed.OverlayModal
         */
    body: container
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Horizontal splitter
 *
 *  Splits a view into two horizontal cells
 *
 *  @example
 *  var splitter = highed.HSplitter(document.body);
 *  highed.dom.ap(splitter.left, highed.dom.cr('div', '', 'Left!'));
 *  highed.dom.ap(splitter.right, highed.dom.cr('div', '', 'Right!'));
 *
 *  @constructor
 *  @param parent {domnode} - the parent to attach to
 *  @param attributes {object} - the settings for the splitter
 *    > leftWidth {number} - the width in percent of the left cell
 *    > noOverflow {bool} - whether or not overflowing is allowed
 *    > leftClasses {string} - additional css classes to use for the left body
 *    > rightClasses {string} - additional css classes to use for the right body
 *    > allowResize {boolean} - set to true to enable user-resizing
 *    > leftMax {number} - the max width of the left panel
 *    > rightMax {number} - the max width of the right panel
 */
highed.HSplitter = function(parent, attributes) {
  var properties = highed.merge(
      {
        leftWidth: 40,
        noOverflow: false,
        leftClasses: '',
        rightClasses: '',
        allowResize: false,
        responsive: false,
        leftMax: false,
        rightMax: false
      },
      attributes
    ),
    container = highed.dom.cr('div', 'highed-hsplitter'),
    left = highed.dom.cr(
      'div',
      'highed-scrollbar panel left ' + properties.leftClasses
    ),
    right = highed.dom.cr(
      'div',
      'highed-scrollbar panel right ' + properties.rightClasses
    ),
    leftBody = highed.dom.cr(
      'div',
      'highed-scrollbar highed-hsplitter-body ' + properties.leftClasses
    ),
    rightBody = highed.dom.cr(
      'div',
      'highed-scrollbar highed-hsplitter-body ' + properties.rightClasses
    ),
    resizeBar = highed.dom.cr('div', 'highed-hsplitter-resize-bar'),
    mover;

  if (properties.responsive) {
    left.className += ' highed-hsplitter-body-responsive';
  }

  ///////////////////////////////////////////////////////////////////////////

  function updateSizeFromMover(x) {
    var psize;

    if (properties.allowResize && highed.dom.isVisible(right)) {
      psize = highed.dom.size(container);
      x = x || highed.dom.pos(resizeBar).x;

      highed.dom.style(left, {
        width: x + 'px'
      });

      highed.dom.style(right, {
        width: psize.w - x + 'px'
      });

      highed.dom.style(resizeBar, {
        display: ''
      });
    }
  }

  /** Force a resize of the splitter
     *  @memberof highed.HSplitter
     *  @param w {number} - the width of the splitter (will use parent if null)
     *  @param h {number} - the height of the splitter (will use parent if null)
     */
  function resize(w, h) {
    var s = highed.dom.size(parent),
      st,
      ps;

    //Check if the right side is visible
    if (!highed.dom.isVisible(right)) {
      highed.dom.style(left, {
        width: '100%'
      });

      highed.dom.style(resizeBar, {
        display: 'none'
      });
    } else {
      resetSize();
    }

    if (properties.responsive) {
      st = window.getComputedStyle(left);
      if (st.float === 'none') {
        highed.dom.style(right, {
          width: '100%'
        });

        highed.dom.style(resizeBar, {
          display: 'none'
        });
      } else {
        resetSize();
      }
    }

    highed.dom.style([left, right, container, resizeBar], {
      height: (h || s.h) + 'px'
    });

    if (properties.rightMax) {
      highed.dom.style(right, {
        'max-width': properties.rightMax + 'px'
      });
    }

    if (properties.leftMax) {
      highed.dom.style(left, {
        'max-width': properties.leftMax + 'px'
      });
    }

    //If we're at right max, we need to resize the left panel
    ps = highed.dom.size(left);
    if (ps.w === properties.leftMax) {
      highed.dom.style(right, {
        width: s.w - properties.leftMax - 1 + 'px'
      });
    }

    updateSizeFromMover();
  }

  function resetSize() {
    highed.dom.style(left, {
      width: properties.leftWidth + '%'
    });

    highed.dom.style(right, {
      width: 100 - properties.leftWidth + '%'
    });
  }

  ///////////////////////////////////////////////////////////////////////////

  parent = highed.dom.get(parent);

  highed.dom.ap(
    highed.dom.get(parent),
    highed.dom.ap(
      container,
      highed.dom.ap(left, leftBody),
      highed.dom.ap(right, rightBody)
    )
  );

  resetSize();

  if (properties.noOverflow) {
    highed.dom.style([container, left, right], {
      'overflow-y': 'hidden'
    });
  }

  if (properties.allowResize) {
    highed.dom.ap(container, resizeBar);

    highed.dom.style(resizeBar, {
      left: properties.leftWidth + '%'
    });

    mover = highed.Movable(resizeBar, 'x').on('Moving', function(x) {
      updateSizeFromMover(x);
    });
  }

  //resize();

  ///////////////////////////////////////////////////////////////////////////

  // Public interface
  return {
    resize: resize,
    /** The dom node for the left cell
         *  @memberof highed.HSplitter
         *  @type {domnode}
         */
    left: leftBody,
    /** The dom node for the right cell
         *  @memberof highed.HSplitter
         *  @type {domnode}
         */
    right: rightBody
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Vertical splitter
 *  Splits a view into two vertical cells
 *
 *  @example
 *  var splitter = highed.VSplitter(document.body);
 *  highed.dom.ap(splitter.top, highed.dom.cr('div', '', 'Top!'));
 *  highed.dom.ap(splitter.bottom, highed.dom.cr('div', '', 'Bottom!'));
 *
 *  @constructor
 *  @param parent {domnode} - the parent to attach to
 *  @param attributes {object} - the settings for the splitter
 *    > topHeight {number} - the height in percent of the left cell. Alternatively, use '123px' to set a capped size.
 *    > noOverflow {bool} - whether or not overflowing is allowed
 */
highed.VSplitter = function(parent, attributes) {
  var properties = highed.merge(
      {
        topHeight: 40,
        noOverflow: false
      },
      attributes
    ),
    container = highed.dom.cr('div', 'highed-vsplitter'),
    top = highed.dom.cr('div', 'panel top highed-scrollbar'),
    bottom = highed.dom.cr('div', 'panel bottom highed-scrollbar'),
    topBody = highed.dom.cr('div', 'highed-vsplitter-body highed-scrollbar'),
    bottomBody = highed.dom.cr('div', 'highed-vsplitter-body highed-scrollbar');

  ///////////////////////////////////////////////////////////////////////////

  /** Force a resize of the splitter
     *  @memberof highed.VSplitter
     *  @param w {number} - the width of the splitter (will use parent if null)
     *  @param h {number} - the height of the splitter (will use parent if null)
     */
  function resize(w, h) {
    var s = highed.dom.size(parent);

    highed.dom.style(container, {
      width: (w || s.w) + 'px',
      height: (h || s.h) + 'px'
    });

    if (properties.topHeight.toString().indexOf('px') > 0) {
      highed.dom.style(top, {
        height: properties.topHeight
      });

      highed.dom.style(bottom, {
        height: (h || s.h) - parseInt(properties.topHeight, 10) + 'px'
      });
    } else {
      highed.dom.style(top, {
        height: properties.topHeight + '%'
      });

      highed.dom.style(bottom, {
        height: 100 - properties.topHeight + '%'
      });
    }
    //highed.dom.style([top, bottom, container], {
    //    width: (w || s.w) + 'px'
    //});
  }

  ///////////////////////////////////////////////////////////////////////////

  highed.dom.ap(
    highed.dom.get(parent),
    highed.dom.ap(
      container,
      highed.dom.ap(top, topBody),
      highed.dom.ap(bottom, bottomBody)
    )
  );

  if (properties.noOverflow) {
    highed.dom.style([container, top, bottom], {
      'overflow-y': 'hidden'
    });
  }

  parent = highed.dom.get(parent);

  ///////////////////////////////////////////////////////////////////////////

  // Public interface
  return {
    resize: resize,
    /** The dom node for the top cell
         *  @memberof highed.VSplitter
         *  @type {domnode}
         */
    top: topBody,
    /** The dom node for the bottom cell
         *  @memberof highed.VSplitter
         *  @type {domnode}
         */
    bottom: bottomBody
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Standard tabcontrol component
 *  @example
 *  var tabs = highed.TabControl(document.body),
 *      tab1 = tabs.createTab({title: 'Tab 1'}),
 *      tab2 = tabs.createTab({title: 'Tab 2'})
 *  ;
 *  //Append things to tab1|tab2.body
 *
 *  @constructor
 *
 *  @emits Focus {object} - when a new tab gets focus.
 *
 *  @param parent {domnode} - the node to attach to
 *  @param noOverflow {boolean} - set to true to disable scrollbars
 *  @param extraPadding {boolean} - set to true to have extra padding in bodies
 */
highed.TabControl = function(parent, noOverflow, extraPadding) {
  var container = highed.dom.cr('div', 'highed-tab-control'),
    paneBar = highed.dom.cr('div', 'tabs'),
    body = highed.dom.cr('div', 'body'),
    indicator = highed.dom.cr('div', 'indicator'),
    more = highed.dom.cr('div', 'highed-tab-control-more fa fa-chevron-right'),
    events = highed.events(),
    selectedTab = false,
    tabs = [],
    ctx = highed.ContextMenu();

  ///////////////////////////////////////////////////////////////////////////

  //Build ctx menu
  function buildCTX() {
    ctx.build(
      tabs.map(function(tab) {
        return {
          title: tab.title,
          click: tab.focus,
          selected: tab.selected
        };
      })
    );
  }

  highed.dom.on(more, 'click', function(e) {
    buildCTX();
    ctx.show(e.clientX, e.clientY);
  });

  /** Force a resize of the tab control
   *  @memberof highed.TabControl
   *  @param w {number} - the width, uses parent width if null
   *  @param h {number} - the height, uses parent width if null
   */
  function resize(w, h) {
    var cs = highed.dom.size(parent),
      ps = highed.dom.size(paneBar),
      width = 0;

    highed.dom.style(container, {
      height: (h || cs.h) + 'px'
    });

    highed.dom.style(body, {
      height: (h || cs.h) - ps.h + 'px'
    });

    //Also re-focus the active tab
    if (selectedTab) {
      selectedTab.focus();
    }

    //clientWidth/scrollWidth doesn't produce what we need,
    //so let's check the accumulated width of the tabs.

    tabs.forEach(function(tab) {
      width += highed.dom.size(tab.node).w || 0;
    });

    if (width > paneBar.scrollWidth) {
      highed.dom.style(more, {
        display: 'block'
      });
    } else {
      highed.dom.style(more, {
        display: 'none'
      });
    }
  }

  /** Select the first tab
   *  @memberof highed.TabControl
   */
  function selectFirst() {
    tabs.some(function(tab) {
      if (tab.visible()) {
        tab.focus();
        return true;
      }
    });
  }

  /** Hide the tab control
   *  @memberof highed.TabControl
   */
  function hide() {
    highed.dom.style(container, {
      display: 'none'
    });
  }

  /** Show the tab control
   *  @memberof highed.TabControl
   */
  function show() {
    highed.dom.style(container, {
      display: 'block'
    });
  }

  function updateVisibility() {
    var c = tabs.filter(function(a) {
      return a.visible();
    }).length;

    if (c < 2) {
      highed.dom.style(paneBar, {
        display: 'none'
      });
    } else {
      highed.dom.style(paneBar, {
        display: ''
      });
    }
  }

  /* Create and return a new tab
     * @memberof highed.TabControl
     * @name createTab
     * @properties - the properties for the tab:
     *   > title {string} - the title of the tab
     * @returns {object} - an interface to the tab
     *    > hide {function} - hide the tab
     *    > show {function} - show the tab
     *    > focus {function} - make the tab active
     *    > visible {function} - returns true if the tab is visible
     *    > body {domnode} - the tab body
     */
  function Tab(properties) {
    var tevents = highed.events(),
      tab = highed.dom.cr('div', 'tab', properties.title),
      tbody = highed.dom.cr('div', 'tab-body'),
      visible = true,
      texports = {
        selected: false
      };

    if (extraPadding) {
      tbody.className += ' tab-body-padded';
    }

    highed.dom.ap(paneBar, tab);
    highed.dom.ap(body, tbody);

    function hide() {
      visible = false;
      highed.dom.style(tab, { display: 'none' });
      updateVisibility();
    }

    function show() {
      visible = true;
      highed.dom.style(tab, { display: '' });
      updateVisibility();
    }

    function resize(w, h) {
      highed.dom.style(container, { width: w + 'px', height: h + 'px' });
    }

    function focus() {
      var tsize = highed.dom.size(tab),
        tpos = highed.dom.pos(tab);
      if (!visible) {
        return;
      }

      if (selectedTab) {
        selectedTab.node.className = 'tab';
        selectedTab.selected = false;

        highed.dom.style(selectedTab.body, {
          opacity: 0,
          //                  'pointer-events': 'none',
          display: 'none'
        });
      }

      if (!tsize || !tpos || !tsize.w) {
        //We're not ready yet..
      }

      highed.dom.style(indicator, {
        width: tsize.w + 'px',
        left: tpos.x + 'px'
      });

      tab.className = 'tab tab-selected';

      highed.dom.style(tbody, {
        opacity: 1,
        //                'pointer-events': 'auto',
        display: 'block'
      });

      selectedTab = texports;
      selectedTab.selected = true;
      tevents.emit('Focus');

      events.emit('Focus', texports);
    }

    highed.dom.on(tab, 'click', function() {
      focus();
      highed.emit('UIAction', 'TabControlNavigation', properties.title);
    });

    texports = {
      on: tevents.on,
      focus: focus,
      node: tab,
      body: tbody,
      hide: hide,
      show: show,
      resize: resize,
      title: properties.title,
      visible: function() {
        return visible;
      }
    };

    if (!selectedTab) {
      focus();
    }

    if (noOverflow) {
      highed.dom.style(tbody, {
        overflow: 'hidden'
      });
    }

    tabs.push(texports);

    resize();
    updateVisibility();

    return texports;
  }

  ///////////////////////////////////////////////////////////////////////////

  if (!highed.isNull(parent)) {
    highed.ready(function() {
      highed.dom.ap(
        parent,
        highed.dom.ap(container, highed.dom.ap(paneBar, more, indicator), body)
      );

      resize();
      updateVisibility();
    });
  }

  ///////////////////////////////////////////////////////////////////////////

  return {
    container: container,
    on: events.on,
    createTab: Tab,
    resize: resize,
    selectFirst: selectFirst,
    show: show,
    hide: hide,
    /** Get the size of the title bar
     *  @memberof highed.TabControl
     *  @returns {object}
     *    > w {number} - the width of the control
     *    > h {number} - the height of the control
     */
    barSize: function() {
      return highed.dom.size(paneBar);
    }
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** An editable field
 *
 *  Creates a table row with three columns:
 *    - label
 *    - widget
 *    - help icon
 *  @todo This needs a proper cleaning now that the requirements are set.
 *  @example
 *  //Create a table, append to body, add a color picker to it.
 *  highed.dom.ap(document.body,
 *      highed.dom.ap(highed.dom.cr('table'),
 *          highed.InspectorField('color', '#FFF', {
 *              title: 'Set the color!'
 *          }, function (newValue) {
 *              highed.dom.style(document.body, {
 *                  backgroundColor: newValue
 *              });
 *          })
 *      )
 *  );
 *
 *  @param type {enum} - the type of widget to use
 *    > string
 *    > number
 *    > range
 *    > boolean
 *    > color
 *    > font
 *    > options
 *    > object
 *  @param value {anything} - the current value of the field
 *  @param properties {object} - the properties for the widget
 *  @param fn {function} - the function to call when the field is changed
 *     > {anything} - the changed value
 *  @param nohint {boolean} - if true, the help icon will be skipped
 *  @param fieldID {anything} - the id of the field
 *  @returns {domnode} - a DOM node containing the field + label wrapped in a tr
 */
highed.InspectorField = function(type, value, properties, fn, nohint, fieldID) {
  var createReset = function(resetTo, callback) {
      var node = highed.dom.cr('div', 'highed-field-reset fa fa-undo');

      if (resetTo === 'null') {
        resetTo = null;
      }

      highed.dom.on(node, 'click', function() {
        if (highed.isFn(callback)) {
          callback(properties.defaults || resetTo);
        }
      });

      return node;
    },
    fields = {
      string: function(val, callback) {
        var input = highed.dom.cr('input', 'highed-field-input', '', fieldID),
          reset = createReset(properties.defaults || val || value, function(v) {
            input.value = val = v;
            tryCallback(callback, v);
          });

        highed.dom.on(input, 'change', function(e) {
          tryCallback(callback, input.value);
          e.cancelBubble = true;
        });

        input.value = val || value;

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          reset,
          input
        );
      },
      number: function(val, callback) {
        var input = highed.dom.cr('input', 'highed-field-input', '', fieldID),
          reset = createReset(properties.defaults || val || value, function(v) {
            input.value = val = v;
            tryCallback(callback, parseFloat(v));
          });

        input.type = 'number';

        if (!highed.isNull(properties.custom)) {
          input.step = properties.custom.step;
          input.min = properties.custom.minValue;
          input.max = properties.custom.maxValue;
        }

        highed.dom.on(input, 'change', function() {
          tryCallback(callback, parseFloat(input.value));
        });

        input.value = val || value;

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          reset,
          input
        );
      },
      range: function(val, callback) {
        var slider = highed.Slider(false, {
          min: properties.custom.minValue,
          max: properties.custom.maxValue,
          step: properties.custom.step,
          value: val || value,
          resetTo: properties.defaults
        });

        slider.on('Change', function(v) {
          tryCallback(callback, v);
        });

        return slider.container;
      },
      boolean: function(val, callback) {
        var input = highed.dom.cr('input', '', '', fieldID),
          reset = createReset(properties.defaults || val || value, function(v) {
            input.checked = val = highed.toBool(v);
            tryCallback(callback, val);
          });

        input.type = 'checkbox';

        input.checked = highed.toBool(val || value);

        highed.dom.on(input, 'change', function() {
          tryCallback(callback, input.checked);
        });

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          reset,
          input
        );
      },
      color: function(val, callback) {
        var box = highed.dom.cr('div', 'highed-field-colorpicker', '', fieldID),
          reset = highed.dom.cr('div', 'highed-field-reset fa fa-undo'),
          resetTo = val || value || properties.defaults;

        if (resetTo === 'null') {
          resetTo = null;
        }

        function update(col, callback) {
          if (
            col &&
            col !== 'null' &&
            col !== 'undefined' &&
            typeof col !== 'undefined'
          ) {
            box.innerHTML = col;
          } else {
            box.innerHTML = 'auto';
            col = '#FFFFFF';
          }

          highed.dom.style(box, {
            background: col,
            color: highed.getContrastedColor(col)
          });
        }

        function fixVal() {
          //This is very ugly
          try {
            val = JSON.parse(val);
          } catch (e) {}

          if (highed.isArr(val)) {
            val = '#FFF';
          }
        }

        fixVal();

        highed.dom.on(box, 'click', function(e) {
          highed.pickColor(e.clientX, e.clientY, val || value, function(col) {
            if (highed.isArr(val)) {
              val = '#FFFFFF';
            }

            val = col;
            update(col);
            tryCallback(callback, col);
          });
        });

        highed.dom.on(reset, 'click', function() {
          val = resetTo;
          fixVal();
          update(val);
          tryCallback(callback, val);
        });

        update(val || value);

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          box,
          reset
        );
      },
      font: function(val, callback) {
        return fields.cssobject(val, callback);
      },
      configset: function(val, callback) {
        return fields.string(val, callback);
      },
      json: function(val, callback) {
        var textArea = highed.dom.cr(
            'textarea',
            'highed-field-input',
            '',
            fieldID
          ),
          errorBar = highed.dom.cr('div', 'highed-field-error'),
          editor = false,
          updateIt = function(v) {
            if (editor) {
              editor.setValue(JSON.stringify(v, undefined, '\t'));
            } else {
              textArea.value = JSON.stringify(v, undefined, '\t');
            }
          },
          reset = createReset(properties.defaults || val || value, function(v) {
            val = v;
            updateIt(v);
            tryCallback(callback, v);
          }),
          parent = highed.dom.ap(
            highed.dom.cr('div', 'highed-field-container'),
            textArea,
            reset,
            errorBar
          );

        function resizePoll() {
          if (document.body && editor) {
            if (document.getElementById(fieldID)) {
              editor.refresh();
            } else {
              setTimeout(resizePoll, 10);
            }
          }
        }

        function callHome(v) {
          try {
            v = JSON.parse(v);
            tryCallback(callback, v);
            errorBar.innerHTML = '';
            highed.dom.style(errorBar, { display: 'none', opacity: 0 });
          } catch (e) {
            //highed.snackBar('There\'s an error in your JSON: ' + e);
            errorBar.innerHTML = 'Syntax error: ' + e;
            highed.dom.style(errorBar, { display: 'block', opacity: 1 });
          }
        }

        if (typeof window['CodeMirror'] !== 'undefined') {
          editor = CodeMirror.fromTextArea(textArea, {
            lineNumbers: true,
            mode: 'application/json',
            theme: highed.option('codeMirrorTheme')
          });

          updateIt(val || value || properties.defaults);

          editor.on('change', function() {
            callHome(editor.getValue());
          });

          resizePoll();
        } else {
          updateIt(val || value || properties.defaults);

          highed.dom.on(textArea, 'change', function() {
            callHome(textArea.value);
          });
        }

        return parent;
      },
      cssobject: function(val, callback) {
        var picker = highed.FontPicker(callback || fn, val || value),
          reset = createReset(properties.defaults || val || value, function(v) {
            val = v;
            picker.set(val);
            tryCallback(callback, v);
          });

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          reset,
          picker.container
        );
      },
      options: function(val, callback) {
        var ddown = highed.DropDown(),
          reset = createReset(properties.defaults, function(v) {
            val = v;
            ddown.selectById(val);
            tryCallback(callback, v);
          });

        if (highed.isStr(properties.values)) {
          try {
            properties.values = JSON.parse(properties.values);
          } catch (e) {
            properties.values = properties.values.split(' ');
          }
        }

        ddown.addItems(properties.values);
        ddown.addItem({ title: 'auto', id: properties.defaults });

        ddown.selectById(val || value || properties.defaults);

        ddown.on('Change', function(selected) {
          tryCallback(callback, selected.id());
        });

        return highed.dom.ap(
          highed.dom.cr('div', 'highed-field-container'),
          ddown.container,
          reset
        );
      },
      object: function(val, callback) {
        //Create a sub-table of options
        var stable = highed.dom.cr(
            'table',
            'highed-customizer-table',
            '',
            fieldID
          ),
          wasUndefined = highed.isNull(val || value);

        val = val || value || {};

        if (highed.isStr(val)) {
          try {
            val = JSON.parse(val);
          } catch (e) {}
        }

        if (properties && highed.isArr(properties.attributes)) {
          properties.attributes.forEach(function(attr) {
            val[attr.name || attr.id] =
              val[attr.name || attr.id] ||
              attr.defaults ||
              (attr.dataType.indexOf('object') >= 0 ? {} : '');

            attr.title = highed.uncamelize(attr.title);

            highed.dom.ap(
              stable,
              highed.InspectorField(
                attr.dataType,
                val[attr.name || attr.id] || attr.defaults,
                attr,
                function(nval) {
                  val[attr.name || attr.id] = nval;
                  tryCallback(callback, val);
                }
              )
            );
          });
        }

        if (wasUndefined) {
          // tryCallback(callback, val);
        }

        return stable;
      },

      function: function(val, callback) {
        var container = highed.dom.cr(
            'div',
            'highed-field-container highed-field-code-container'
          ),
          field = highed.dom.cr('textarea', 'highed-field-code', '', fieldID),
          editor = false,
          reset = createReset(properties.defaults || val || value, function(v) {
            val = v;
            updateIt(v);
            callHome(v);
          });

        function updateIt(v) {
          if (highed.isFn(v)) {
            v = v.toString();
          }

          if (editor) {
            editor.setValue(v);
            editor.refresh();
          } else {
            field.value = v;
          }
        }

        function callHome(v) {
          var args = [];
          var argStart = v.indexOf('(');
          var argEnd = v.substr(argStart + 1).indexOf(')');
          var body = '';
          var balance = 0;
          var parsing = false;

          try {
            args = v
              .substr(argStart + 1, argEnd - 1)
              .trim()
              .split(',');

            args = args.filter(function(b) {
              return b && b.length > 0 && b.indexOf('/*') === -1;
            });

            for (var i = 0; i < v.length; i++) {
              if (v[i] === '{') {
                balance++;
                parsing = true;
              } else if (v[i] === '}') {
                balance--;
                if (balance === 0) {
                  parsing = false;
                }
              } else if (parsing) {
                body += v[i];
              }
            }

            v = new Function(args, body);
          } catch (e) {
            console.log(e);
            return;
          }
          tryCallback(callback, v);
        }

        function resizePoll() {
          if (editor && document.body) {
            if (container.parentNode) {
              editor.refresh();
            } else {
              setTimeout(resizePoll, 50);
            }
          }
        }

        highed.dom.ap(container, field);

        if (typeof window['CodeMirror'] !== 'undefined') {
          editor = CodeMirror.fromTextArea(field, {
            lineNumbers: true,
            mode: 'javascript',
            theme: highed.option('codeMirrorTheme')
          });

          editor.on('change', function() {
            callHome(editor.getValue());
          });

          resizePoll();
        } else {
          highed.dom.on(field, 'change', function() {
            callHome(field.value);
          });
        }

        updateIt(val || value || properties.defaults || function() {});

        return container;
      },

      array: function() {
        var container = highed.dom.cr('div', '', '', fieldID),
          add = highed.dom.cr('span', 'highed-field-array-add fa fa-plus', ''),
          itemsNode = highed.dom.cr('div', 'highed-inline-blocks'),
          items = {},
          itemCounter = 0,
          itemTable = highed.dom.cr('table', 'highed-field-table');

        if (highed.isStr(value)) {
          try {
            value = JSON.parse(value);
          } catch (e) {
            return container;
          }
        }

        if (value && !highed.isArr(value) && !highed.isBasic(value)) {
          // This is an object.
          value = Object.keys(value).map(function(e) {
            return value[e];
          });
        }

        function addCompositeItem(val, suppressCallback) {
          var item,
            rem = highed.dom.cr('span', 'highed-icon fa fa-trash'),
            row = highed.dom.cr('tr'),
            id = ++itemCounter;

          function processChange(newVal) {
            if (newVal) {
              items[id].value = newVal;
              doEmitCallback();
            }
          }

          function doEmitCallback() {
            if (highed.isFn(fn)) {
              fn(
                Object.keys(items).map(function(key) {
                  return items[key].value;
                })
              );
            }
          }

          if (highed.isArr(val)) {
            val = val[id];
          }

          items[id] = {
            id: id,
            row: row,
            value: val
          };

          item = fields[properties.subType]
            ? fields[properties.subType](
                val || value[id] || properties.defaults,
                processChange
              )
            : fields.string(val, processChange);

          highed.dom.ap(
            itemTable,
            highed.dom.ap(
              row,
              highed.dom.ap(highed.dom.cr('td'), item),
              highed.dom.ap(highed.dom.cr('td'), rem)
            )
          );

          highed.dom.on(rem, 'click', function(e) {
            delete items[id];
            itemTable.removeChild(row);

            doEmitCallback();

            e.cancelBubble = true;
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
          });

          if (!suppressCallback) {
            processChange();
          }
        }

        highed.dom.ap(container, itemTable);

        highed.dom.on(add, 'click', function() {
          addCompositeItem();
        });

        if (highed.isArr(value)) {
          value.forEach(function(item) {
            addCompositeItem(item, true);
          });
        }

        highed.dom.ap(container, itemsNode, add);

        return container;
      }
    },
    help = highed.dom.cr(
      'span',
      'highed-icon highed-field-help fa fa-question-circle'
    ),
    helpTD = highed.dom.cr('td', 'highed-customizer-table-help'),
    widgetTD = highed.dom.cr('td', 'highed-field-table-widget-column'),
    titleCol = highed.dom.cr('td'),
    typeIndicator = highed.dom.cr('span', 'highed-customize-type');

  function tryCallback(cb, val) {
    cb = cb || fn;
    if (highed.isFn(cb)) {
      cb(val);
    }
  }

  function deduceObject() {
    if (
      (!properties.attributes || !properties.attributes.length) &&
      properties.defaults
    ) {
      properties.attributes = [];

      //There's no attributes but it's an object.
      //Check if there are default values we can use
      //to figure out the structure.
      if (properties.defaults) {
        try {
          properties.defaults = JSON.parse(properties.defaults);
          Object.keys(properties.defaults).forEach(function(k) {
            var tp = 'string',
              def = properties.defaults[k],
              up = k.toUpperCase(),
              vals;

            //This is hackish.
            if (highed.isNum(def)) {
              tp = 'number';
            }

            if (
              def.length &&
              def[0] === '#' &&
              (up.indexOf('BACKGROUND') >= 0 || up.indexOf('COLOR') >= 0)
            ) {
              tp = 'color';
            }

            properties.attributes.push({
              id: k,
              title: k,
              dataType: tp,
              defaults: properties.defaults[k],
              tooltip: '',
              values: vals
            });
          });
        } catch (e) {
          highed.log(
            3,
            'property',
            properties.id,
            'skipped, no way to deduce the object members'
          );
          return;
        }
      }
    } else {
      type = 'json';
      properties.defaults = properties.defaults || {};
    }
  }

  if (highed.isNull(value)) {
    value = '';
  }

  if (type === 'cssobject') {
    //So there are more than one version of this thing - one of them
    //requires a font picker, the other is dynamic.
    //Figure out which one we're dealing with here.

    // properties = properties || {};
    // properties.attributes = [
    //     {name: 'x', title: 'x', title: 'X', values: '0', dataType: 'number'}

    // ];
    type = 'object';
  }

  //Choose a type
  if (type && type.indexOf('|') >= 0) {
    type = type.indexOf('object') >= 0 ? 'object' : type.split('|')[0];
  }

  if (
    !highed.isNull(properties.custom) &&
    !highed.isNull(properties.custom.minValue) &&
    !highed.isNull(properties.custom.maxValue) &&
    !highed.isNull(properties.custom.step)
  ) {
    type = 'range';
  }

  if (type && type.indexOf('array') === 0) {
    properties.subType = type.substr(6, type.length - 7);
    type = 'array';

    if (properties.subType === 'object') {
      deduceObject();
    }
  }

  if (type === 'object') {
    deduceObject();
  }

  if (!properties.tooltip && !properties.tooltipText) {
    nohint = true;
  } else {
    // properties.tooltip = properties.tooltip.replace(/\n/g, '<br/><br/>');
  }

  if (highed.onPhone()) {
    highed.dom.on(help, 'click', function() {
      highed.Tooltip(0, 0, properties.tooltip || properties.tooltipText, true);
    });
  } else {
    highed.dom.on([help], 'mouseover', function(e) {
      highed.Tooltip(
        e.clientX + 20,
        e.clientY,
        properties.tooltip || properties.tooltipText
      );

      // highed.showDimmer(highed.hideAllTooltips, true, true);
    });
  }

  if (nohint) {
    highed.dom.style(help, { display: 'none' });
    widgetTD.colSpan = 2;
  }

  typeIndicator.className += ' highed-customize-type-' + type;

  return highed.dom.ap(
    highed.dom.ap(
      highed.dom.cr('tr'),
      highed.dom.ap(
        titleCol,
        highed.dom.cr('span', 'highed-customize-field-label', properties.title),
        typeIndicator
      ),
      highed.dom.ap(widgetTD, fields[type] ? fields[type]() : fields.string()),
      !nohint
        ? highed.dom.ap(
            helpTD,
            //highed.dom.cr('span', 'highed-field-tooltip', properties.tooltip)
            help
          )
        : false
    )
  );
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A list component
 *
 *  Creates a list with selectable items
 *
 *  @example
 *  var list = highed.List(document.body).addItem({
 *      title: 'My Item',
 *      click: function() {
 *          alert('You clicked the item!');
 *      }
 *  });
 *
 *  @constructor
 *  @param parent {domnode} - the node to attach the list to
 *  @param responsive {boolean} - set to true to get JS-based responsive functionality
 */
highed.List = function(parent, responsive) {
  var container = highed.dom.cr('div', 'highed-list'),
    compactIndicator = highed.dom.cr('div', 'highed-list-compact', 'compact'),
    ctx = highed.ContextMenu(),
    selectedItem = false,
    events = highed.events(),
    items = [];

  ///////////////////////////////////////////////////////////////////////////

  /** Add an item to the list
     * @memberof highed.List
     * @param item {object} - the item meta for the item to add
     *   > title {string} - the title as displayed in the list
     *   > id {anything} - the id of the item: used for `highed.List.on('Select')`
     *   > click {function} - function to call when clicking the item
     * @returns {object} - an interface to interact with the item
     *   > id {anything} - the item id
     *   > title {string} - the title of the item
     *   > node {domnode} - the dom node for the item
     *   > select {function} - selects the item if called
     */
  function addItem(item) {
    var node = highed.dom.cr('a', 'item', item.title),
      iexports = {};

    function select(e) {
      if (selectedItem) {
        selectedItem.selected = false;
        selectedItem.node.className = 'item';
      }

      selectedItem = iexports;
      selectedItem.selected = true;
      node.className = 'item item-selected';
      events.emit('Select', item.id);
      compactIndicator.innerHTML =
        '<span class="icon fa fa-th-list"></span>' + item.title;

      if (highed.isFn(item.click)) {
        return item.click(e);
      }
    }

    highed.dom.on(node, 'click', select);
    highed.dom.ap(container, node);

    iexports = {
      id: item.id,
      title: item.title,
      node: node,
      select: select,
      selected: false
    };

    items.push(iexports);

    if (!selectedItem) {
      select();
    }

    return iexports;
  }

  /** Add a set of items to the list
     *  @memberof highed.List
     *  @param items {array<object>} - an array of items to add
     */
  function addItems(items) {
    if (highed.isArr(items)) {
      items.forEach(addItem);
    }
  }

  /** Clear all the items in the list
     *  @memberof highed.List
     */
  function clear() {
    container.innerHTML = '';
  }

  /** Force resize of the list
     *  @memberof highed.List
     */
  function resize() {
    var ps = highed.dom.size(parent),
      cs = highed.dom.size(container);

    if (responsive && ps.h < 50 && ps.h !== 0 && ps.h) {
      highed.dom.style(compactIndicator, {
        display: 'block'
      });
      highed.dom.style(container, {
        display: 'none'
      });
    } else if (responsive) {
      highed.dom.style(compactIndicator, {
        display: 'none'
      });
      highed.dom.style(container, {
        display: ''
      });
    }

    // highed.dom.style(container, {
    //     //height: ps.height + 'px'
    //     height: '100%'
    // });
  }

  /** Show the list
    *  @memberof highed.List
    */
  function show() {
    highed.dom.style(container, {});
  }

  /** Hide the list
     *  @memberof highed.List
     */
  function hide() {}

  /** Select the first item
     *  @memberof highed.List
     */
  function selectFirst() {
    if (items.length > 0) {
      items[0].select();
    }
  }

  /** Select an item
     *  @memberof highed.List
     *  @param which {string} - the id of the item to select
     */
  function select(which) {
    items.some(function(item) {
      if (which === item.title) {
        item.select();
        return true;
      }
    });
  }

  /** Reselect the current item
     *  @memberof highed.List
     */
  function reselect() {
    if (selectedItem) {
      selectedItem.select();
    }
  }

  /** Count the number of items currently in the list
     *  @memberof highed.List
     */
  function countItems() {
    return items.length;
  }

  /** Get the selected item
     *  @memberof highed.List
     *  @returns {object} - the selected item
     */
  function selected() {
    return selectedItem;
  }
  ///////////////////////////////////////////////////////////////////////////

  highed.dom.on(compactIndicator, 'click', function(e) {
    ctx.build(
      items.map(function(item) {
        return {
          title: item.title,
          click: item.select,
          selected: item.selected
        };
      })
    );
    ctx.show(e.clientX, e.clientY);
  });

  highed.dom.ap(parent, container, compactIndicator);

  ///////////////////////////////////////////////////////////////////////////

  //Public interface
  return {
    on: events.on,
    addItem: addItem,
    addItems: addItems,
    clear: clear,
    resize: resize,
    show: show,
    hide: hide,
    selectFirst: selectFirst,
    select: select,
    reselect: reselect,
    selected: selected,
    count: countItems,
    container: container
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var container = highed.dom.cr(
      'div',
      'highed-colorpicker highed-colorpicker-responsive'
    ),
    canvas = highed.dom.cr('canvas', 'picker'),
    closeBtn = highed.dom.cr('div', 'highed-ok-button', 'Close'),
    ctx = canvas.getContext('2d'),
    manualInput = highed.dom.cr('input', 'manual');

  //Attach the container to the document when the document is ready
  highed.ready(function() {
    highed.dom.ap(document.body, container);
  });

  function updatePickerBackground(current) {
    highed.dom.style(manualInput, {
      background: current,
      color: highed.getContrastedColor(current)
    });
  }

  /** Color picker
     *  Component to pick colors from the google material design color palette.
     *  User input is also possible.
     *
     *  The color palette is defined in meta/highed.meta.colors.js,
     *  and is divided into groups of 14 hues per. color.
     *
     *  @example
     *  //Show a color picker at [10,10]
     *  highed.pickColor(10, 10, '#fff', function (color) {
     *      alert('You selected ' + color + ', great choice!');
     *  });
     *
     *  @param x {number} - the x position to display the picker at
     *  @param y {number} - the y position to display the picker at
     *  @param current {string} - the current color
     *  @param fn {function} - the function to call when the color changes
     *    > newColor {string} - the color selected by the user
     */
  highed.pickColor = function(x, y, current, fn) {
    var windowSize = highed.dom.size(document.body),
      containerSize = highed.dom.size(container),
      pickerSize = highed.dom.size(canvas),
      binder = false,
      pbinder = false,
      cbinder = false,
      dbinder = false;

    ///////////////////////////////////////////////////////////////////////

    /* Draws the color picker itself */
    function drawPicker() {
      //There's 14 hues per. color, 19 colors in total.
      var x,
        y,
        tx = Math.floor(pickerSize.w / 14),
        ty = Math.floor(pickerSize.h / 19),
        col = -1;

      canvas.width = pickerSize.w;
      canvas.height = pickerSize.h;

      //To avoid picking null
      ctx.fillStyle = '#FFF';
      ctx.fillRect(0, 0, pickerSize.w, pickerSize.h);

      for (y = 0; y < 19; y++) {
        for (x = 0; x < 15; x++) {
          ctx.fillStyle = highed.meta.colors[++col]; //highed.meta.colors[x + y * tx];
          ctx.fillRect(x * tx, y * ty, tx, ty);
        }
      }
    }

    /* Hide the picker */
    function hide() {
      highed.dom.style(container, {
        opacity: 0,
        left: '-20000px',
        'pointer-events': 'none'
      });
      binder();
      pbinder();
      cbinder();
      dbinder();
    }

    function rgbToHex(r, g, b) {
      var res = '#' + ((r << 16) | (g << 8) | b).toString(16);
      if (res.length === 5) {
        return res.replace('#', '#00');
      } else if (res.length === 6) {
        return res.replace('#', '#0');
      }
      return res;
    }

    function pickColor(e) {
      var px = e.clientX || e.touches[0].clientX || 0,
        py = e.clientY || e.touches[0].clientY || 0,
        cp = highed.dom.pos(canvas),
        id = ctx.getImageData(px - cp.x - x, py - cp.y - y, 1, 1).data,
        col = rgbToHex(id[0] || 0, id[1], id[2]);

      manualInput.value = col;

      updatePickerBackground(col);

      if (highed.isFn(fn)) {
        fn(col);
      }

      e.cancelBubble = true;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }

    ///////////////////////////////////////////////////////////////////////

    //Make sure we're not off screen
    if (x > windowSize.w - containerSize.w) {
      x = windowSize.w - containerSize.w - 10;
    }

    if (y > windowSize.h - containerSize.h) {
      y = windowSize.h - containerSize.h - 10;
    }

    highed.dom.style(container, {
      left: x + 'px',
      top: y + 'px',
      opacity: 1,
      'pointer-events': 'auto'
    });

    dbinder = highed.showDimmer(hide, true, true, 5);

    cbinder = highed.dom.on(closeBtn, 'click', hide);

    binder = highed.dom.on(manualInput, 'keyup', function() {
      if (highed.isFn(fn)) {
        fn(manualInput.value);
      }
    });

    pbinder = highed.dom.on(canvas, ['mousedown', 'touchstart'], function(e) {
      var mover = highed.dom.on(canvas, ['mousemove', 'touchmove'], pickColor),
        cancel = highed.dom.on(
          document.body,
          ['mouseup', 'touchend'],
          function() {
            mover();
            cancel();
          }
        );

      pickColor(e);
    });

    manualInput.value = current;
    updatePickerBackground(current);

    drawPicker();

    ///////////////////////////////////////////////////////////////////////

    return {};
  };

  highed.dom.ap(container, canvas, manualInput, closeBtn);
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A standard toolbar.
 *
 *  @example
 *  var toolbar = highed.Toolbar('my-node', {
 *    additionalCSS: ['cool-toolbar']
 *  });
 *
 *  @constructor
 *  @param parent {domnode} - the node to attach the toolbar to
 *  @param attributes {object} - toolbar settings
 *    > additionalCSS {array} - array of additional css classes to add to the toolbar
 */
highed.Toolbar = function(parent, attributes) {
  var properties = highed.merge(
      {
        additionalCSS: []
      },
      attributes
    ),
    container = highed.dom.cr(
      'div',
      'highed-toolbar ' + properties.additionalCSS.join(' ')
    ),
    left = highed.dom.cr('div', 'highed-toolbar-left'),
    right = highed.dom.cr('div', 'highed-toolbar-right'),
    center = highed.dom.cr('div', 'highed-toolbar-center'),
    iconsRight = highed.dom.cr('div', 'icons');

  ///////////////////////////////////////////////////////////////////////////

  /** Add an icon to the toolbar
     *  @memberof highed.Toolbar
     *  @param icon {object} - an object containing the icon settings.
     *    > css {array} - the additional css class(s) to use
     *    > click {function} - the function to call when the icon is clicked
     */
  function addIcon(icon, where) {
    var i = highed.dom.cr('div', 'icon highed-icon fa ' + (icon.css || ''));

    highed.dom.on(i, 'click', function(e) {
      if (highed.isFn(icon.click)) {
        icon.click(e);
      }
    });

    i.title = icon.tooltip || icon.title;

    highed.dom.ap(where === 'left' ? left : right, i);
  }

  /** Add a button to the toolbar
     *  @memberof highed.Toolbar
     *  @param icon {object} - an object containing the icon settings.
     *    > css {array} - the additional css class(s) to use
     *    > click {function} - the function to call when the icon is clicked
     */
  function addButton(icon, where) {
    var i = highed.dom.cr(
      'div',
      'highed-ok-button highed-toolbar-button',
      icon.title || ''
    );

    highed.dom.on(i, 'click', function(e) {
      if (highed.isFn(icon.click)) {
        icon.click(e);
      }
    });

    i.title = icon.tooltip;

    highed.dom.ap(where === 'left' ? left : right, i);
  }

  function addSeparator(where) {
    highed.dom.ap(
      where === 'left' ? left : right,
      highed.dom.cr('span', 'separator')
    );
  }

  ///////////////////////////////////////////////////////////////////////////

  highed.dom.ap(parent, highed.dom.ap(container, left, center, right));

  ///////////////////////////////////////////////////////////////////////////

  return {
    /** The toolbar container
         *  @type {domnode}
         *  @memberof highed.Toolbar
         */
    container: container,
    addIcon: addIcon,
    addButton: addButton,
    addSeparator: addSeparator,
    /** The left part of the toolbar
         *  @type {domnode}
         *  @memberof highed.Toolbar
         */
    left: left,
    /** The center part of the toolbar
         *  @type {domnode}
         *  @memberof highed.Toolbar
         */
    center: center,
    /** The right part of the toolbar
         *  @type {domnode}
         *  @memberof highed.Toolbar
         */
    right: right
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  /** Font picker
     *
     *  Creates a small font picking widget editing of:
     *      - bold
     *      - font family
     *      - font size
     *      - color
     *
     *  Note that this must be attached to the document manually by appending
     *  the returned container to something.
     *
     *  @example
     *  var picker = highed.FontPicker(function (newStyle) {
     *      highed.dom.style(document.body, newStyle);
     *  });
     *
     *  highed.dom.ap(document.body, picker.container);
     *
     *  @param fn {function} - the function to call when things change
     *  @param style {object} - the current style object
     *    > fontFamily {string} - the font family
     *    > color {string} - the font color
     *    > fontWeight {string} - the current font weight
     *    > fontStyle {string} - the current font style
     *  @returns {object} - an interface to the picker
     *    > container {domnode} - the body of the picker
     */
  highed.FontPicker = function(fn, style) {
    var container = highed.dom.cr('div', 'highed-font-picker'),
      fontFamily = highed.DropDown(), //highed.dom.cr('select', 'font-family'),
      fontSize = highed.DropDown(), //highed.dom.cr('select', 'font-size'),
      boldBtn = highed.PushButton(false, 'bold'),
      italicBtn = highed.PushButton(false, 'italic'),
      color = highed.dom.cr('span', 'font-color', '&nbsp;');

    if (highed.isStr(style)) {
      try {
        style = JSON.parse(style);
      } catch (e) {}
    }

    ///////////////////////////////////////////////////////////////////////

    function callback() {
      if (highed.isFn(fn)) {
        fn(style);
      }
    }

    function updateColor(ncol, suppressCallback) {
      highed.dom.style(color, {
        background: ncol
      });

      style.color = ncol;
      if (!suppressCallback) {
        callback();
      }
    }

    ///////////////////////////////////////////////////////////////////////

    /** Set the current options
         *  @memberof highed.FontPicker
         *  @param options {object} - the options to set
         */
    function set(options) {
      if (highed.isStr(options)) {
        try {
          options = JSON.parse(options);
        } catch (e) {
          highed.log(0, 'Error in FontPicker::set');
          return;
        }
      }

      style = highed.merge(
        {
          fontFamily:
            '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
          color: '#333',
          fontSize: '18px',
          fontWeight: 'normal',
          fontStyle: 'normal'
        },
        options
      );

      //Set the current values
      boldBtn.set(style.fontWeight === 'bold');
      italicBtn.set(style.fontStyle === 'italic');
      updateColor(style.color, true);
      fontFamily.selectById(style.fontFamily);
      fontSize.selectById(style.fontSize.replace('px', ''));
    }

    //Add fonts to font selector
    fontFamily.addItems(highed.meta.fonts);
    //Add font sizes
    fontSize.addItems([8, 10, 12, 14, 16, 18, 20, 22, 25, 26, 28, 30, 32, 34]);

    set(style);

    //Listen to font changes
    fontFamily.on('Change', function(selected) {
      style.fontFamily = selected.id();
      return callback();
    });

    //Listen to font size changes
    fontSize.on('Change', function(selected) {
      style.fontSize = selected.id() + 'px';
      return callback();
    });

    //Listen to bold changes
    boldBtn.on('Toggle', function(state) {
      style.fontWeight = state ? 'bold' : 'normal';
      callback();
    });

    //Listen to italic changes
    italicBtn.on('Toggle', function(state) {
      style.fontStyle = state ? 'italic' : 'normal';
      callback();
    });

    //Handle color picker
    highed.dom.on(color, 'click', function(e) {
      highed.pickColor(e.clientX, e.clientY, style.color, updateColor);
    });

    //Create DOM
    highed.dom.ap(
      container,
      fontFamily.container,
      highed.dom.ap(
        highed.dom.cr('div', 'highed-font-picker-button-container'),
        fontSize.container,
        highed.dom.ap(
          highed.dom.cr('div', 'highed-font-picker-buttons'),
          boldBtn.button,
          italicBtn.button,
          color
        )
      )
    );

    ///////////////////////////////////////////////////////////////////////

    return {
      set: set,
      container: container
    };
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A wizard-type stepper
 *  This is sort of like a tab control, but with a logical
 *  x -> y flow.
 *
 *  @emits Step - when going back/forth
 *  @emits AddStep - when a new step is added
 *
 *  @constructor
 *  @param bodyParent {domnode} - the node to attach the body to
 *  @param indicatorParent {domnode} - the node to attach the indicators to
 *  @param attributes {object} - the settings for the stepper
 *    > indicatorPos {enum} - the indicator alignment
 *       > top
 *       > bottom
 */
highed.WizardStepper = function(bodyParent, indicatorParent, attributes) {
  var properties = highed.merge(
      {
        indicatorPos: 'top'
      },
      attributes
    ),
    events = highed.events(),
    body = highed.dom.cr('div', 'highed-wizstepper-body'),
    indicators = highed.dom.cr('div', 'highed-wizstepper-indicators'),
    currentIndicator = highed.dom.cr('div', 'highed-wizstepper-current'),
    currentBubble = highed.dom.cr('div', 'highed-wizstpper-current-bubble'),
    activeStep = false,
    stepCount = 0,
    steps = [],
    ctx = highed.ContextMenu();

  ///////////////////////////////////////////////////////////////////////////

  /* Update the bar CSS - this is more stable than doing it in pure CS */
  function updateBarCSS() {
    var fsteps = steps.filter(function(t) {
      return t.visible;
    });

    stepCount = 0;

    fsteps.forEach(function(step, i) {
      if (i === 0) {
        step.bar.className = 'bar bar-first';
      } else if (i === fsteps.length - 1) {
        step.bar.className = 'bar bar-last';
      } else {
        step.bar.className = 'bar';
      }

      step.number = ++stepCount;

      step.bar.className +=
        ' ' + (properties.indicatorPos === 'bottom' ? 'bar-bottom' : 'bar-top');
    });
  }

  /** Add a new step
     *  @memberof highed.WizardStepper
     *  @param step {object} - an object describing the step
     *    > title {string} - the step title
     *  @returns {object} - interface to manipulate the step
     *    > activate {function} - function to activate the step
     *    > bubble {domnode} - the node for the bubble
     *    > body {domnode} - the node for the step body
     */
  function addStep(step) {
    var stepexports = {
      number: ++stepCount,
      node: highed.dom.cr('div', 'highed-wizstepper-item'),
      label: highed.dom.cr('div', '', step.title, 'label'),
      bubble: highed.dom.cr(
        'div',
        'bubble ' +
          (properties.indicatorPos === 'bottom'
            ? 'bubble-bottom'
            : 'bubble-top')
      ),
      bar: highed.dom.cr(
        'div',
        'bar ' +
          (properties.indicatorPos === 'bottom' ? 'bar-bottom' : 'bar-top')
      ),
      body: highed.dom.cr('div', 'highed-step-body'),
      visible: true
    };

    stepexports.title = step.title;

    function activate() {
      if (activeStep) {
        activeStep.bubble.innerHTML = '';

        highed.dom.style(activeStep.bubble, {
          height: '',
          width: '',
          bottom: '-4px',
          'font-size': '0px'
        });

        highed.dom.style(activeStep.body, {
          opacity: 0,
          display: 'none',
          'pointer-events': 'none'
        });

        if (properties.indicatorPos === 'top') {
          highed.dom.style(activeStep.bubble, {
            top: '-6px',
            bottom: ''
          });
        }

        activeStep.label.className = 'label-inactive';

        currentIndicator.innerHTML =
          step.title + ' - ' + stepexports.number + '/' + stepCount;

        //highed.dom.ap(currentIndicator, currentBubble);
        currentBubble.innerHTML = stepexports.number + '/' + stepCount;

        if (step.onshow) {
          step.onshow();
        }
      }

      stepexports.bubble.innerHTML = stepexports.number;

      highed.dom.style(stepexports.bubble, {
        height: '25px',
        width: '25px',
        bottom: '-8px',
        'font-size': '16px'
      });

      highed.dom.style(stepexports.body, {
        opacity: 1,
        display: 'block',
        'pointer-events': 'auto'
      });

      if (properties.indicatorPos === 'top') {
        highed.dom.style(stepexports.bubble, {
          top: '-10px'
        });
      }

      activeStep = stepexports;
      activeStep.label.className = 'label-active';

      events.emit('Step', stepexports, stepCount, step);
    }

    stepexports.hide = function() {
      highed.dom.style(stepexports.node, {
        display: 'none'
      });
      if (stepexports.visible) {
        //This needs fixing
        stepCount--;
        stepexports.visible = false;
        updateBarCSS();
      }
    };

    stepexports.show = function() {
      highed.dom.style(stepexports.node, {
        display: ''
      });

      if (!stepexports.visible) {
        stepCount++;
        stepexports.visible = true;
        updateBarCSS();

        if (step.onshow) {
          step.onshow();
        }
      }
    };

    stepexports.visible = function() {
      return visible;
    };

    highed.dom.on(stepexports.node, 'click', activate);

    if (!activeStep) {
      activate();
    }

    stepexports.activate = activate;

    steps.push(stepexports);

    updateBarCSS();

    highed.dom.ap(
      indicators,
      highed.dom.ap(
        stepexports.node,
        stepexports.label,
        stepexports.bar,
        stepexports.bubble
      )
    );

    highed.dom.ap(body, stepexports.body);

    events.emit('AddStep', activeStep, stepCount);

    return stepexports;
  }

  /** Go to the next step
     *  @memberof highed.WizardStepper
     */
  function next() {
    var fsteps = steps.filter(function(t) {
      return t.visible;
    });
    if (activeStep && activeStep.number < stepCount) {
      fsteps[activeStep.number].activate();
    }
  }

  /** Go to the previous step
     *  @memberof highed.WizardStepper
     */
  function previous() {
    var fsteps = steps.filter(function(t) {
      return t.visible;
    });
    if (activeStep && activeStep.number > 1) {
      fsteps[activeStep.number - 2].activate();
    }
  }

  /** Force a resize of the splitter
     *  @memberof highed.WizardStepper
     *  @param w {number} - the width of the stepper (will use parent if null)
     *  @param h {number} - the height of the stepper (will use parent if null)
     */
  function resize(w, h) {
    var ps = highed.dom.size(bodyParent);

    highed.dom.style(body, {
      height: (h || ps.h) + 'px'
    });
  }

  /** Select the first step
      * @memberof highed.WizardStepper
      */
  function selectFirst() {
    steps.some(function(step, i) {
      if (step.visible) {
        step.activate();
        return true;
      }
    });
  }

  highed.dom.on(currentIndicator, 'click', function(e) {
    var fsteps = steps.filter(function(t) {
      return t.visible;
    });

    ctx.build(
      fsteps.map(function(step) {
        return {
          title: step.title,
          click: step.activate,
          selected: activeStep.title === step.title
        };
      })
    );

    ctx.show(e.clientX, e.clientY);
  });

  ///////////////////////////////////////////////////////////////////////////

  highed.dom.ap(
    indicatorParent,
    indicators,
    highed.dom.ap(currentIndicator, currentBubble)
  );

  highed.dom.ap(bodyParent, body);

  ///////////////////////////////////////////////////////////////////////////

  return {
    on: events.on,
    addStep: addStep,
    next: next,
    resize: resize,
    previous: previous,
    selectFirst: selectFirst,
    /** The main body
         *  @memberof highed.WizardStepper
         *  @type {domnode}
         */
    body: body
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var container = highed.dom.cr(
    'div',
    'highed-scrollbar highed-tooltip highed-tooltip-fixed'
  );

  highed.ready(function() {
    highed.dom.ap(document.body, container);
  });

  function hide() {
    highed.dom.style(container, {
      opacity: 0,
      'pointer-events': 'none'
    });
  }

  highed.dom.on(container, 'mouseout', hide);
  highed.dom.on(container, 'click', hide);

  /** Show a tooltip
     *  @param x {number} - the x position of the tooltip
     *  @param y {number} - the y position of the tooltip
     *  @param tip {string} - the title
     *  @param blowup {boolean}  - blow the tooltip up
     */
  highed.Tooltip = function(x, y, tip, blowup) {
    var ds = highed.dom.size(document.body);

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > ds.w - 200) x = ds.w - 200;

    highed.dom.style(container, {
      opacity: 1,
      'pointer-events': 'auto',
      left: x + 'px',
      top: y + 'px',
      'max-width': '300px'
    });

    if (blowup) {
      highed.dom.style(container, {
        opacity: 1,
        'pointer-events': 'auto',
        width: '90%',
        height: '90%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      });
    }

    container.innerHTML = tip;

    return hide;
  };

  highed.hideAllTooltips = hide;
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A simple toggle button component
 *
 *  @example
 *  //Create a push button with the gear icon attached
 *  highed.PushButton(document.body, 'gear', false).on('Toggle', function (state) {
 *      alert('Push button is now ' + state);
 *  });
 *
 *  @constructor
 *
 *  @emits Toggle {boolean} - when the state changes
 *
 *  @param parent {domnode} (optional) - the parent to attach the button to
 *  @param icon {string} - the button icon
 *  @param state {boolean} - the initial state of the button
 */
highed.PushButton = function(parent, icon, state) {
  var button = highed.dom.cr('span', 'highed-pushbutton fa fa-' + icon),
    events = highed.events();

  function updateCSS() {
    if (state) {
      button.className += ' highed-pushbutton-active';
    } else {
      button.className = button.className.replace(
        ' highed-pushbutton-active',
        ''
      );
    }
  }

  /** Set the current state
    *  @memberof highed.PushButton
    *  @param flag {boolean} - the new state
    */
  function set(flag) {
    state = flag;
    updateCSS();
  }

  highed.dom.on(button, 'click', function() {
    state = !state;
    updateCSS();
    events.emit('Toggle', state);
  });

  if (!highed.isNull(parent) && parent !== false) {
    highed.dom.ap(parent, button);
  }

  updateCSS();

  return {
    set: set,
    /** The button
         * @memberof highed.PushButton
         * @type {domnode}
         */
    button: button,
    on: events.on
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Tree component
 *  For an example of formatting, build the editor with `gulp with-advanced`,
 *  and look in `src/meta/highed.options.advanced.js`.
 *
 *  @emits Select {object} - when a node is selected
 *
 *  @constructor
 *  @param parent {domnode} - the node to attach the tree to
 */
highed.Tree = function(parent) {
  var container = highed.dom.cr('div', 'highed-tree'),
    selectedNode = false,
    events = highed.events(),
    expands = {},
    expandState = {},
    selectedID = false,
    selectedPath = false,
    attachedData = {},
    filters = {
      //Filter the series properties based on the series.type property
      series: {
        controller: 'type',
        state: false
      }
    };

  ////////////////////////////////////////////////////////////////////////////

  function createNode(child, pnode, instancedData, productFilter, myIndex) {
    var node = highed.dom.cr(
        'div',
        'node',
        '',
        (child.meta.ns ? child.meta.ns : '') + child.meta.name
      ),
      title = highed.dom.cr(
        'div',
        'parent-title',
        highed.uncamelize(child.meta.title || child.meta.name)
      ),
      body = highed.dom.cr('div', 'parent-body'),
      icon = highed.dom.cr('div', 'exp-col-icon fa fa-folder-o'),
      rightIcons = highed.dom.cr('div', 'right-icons'),
      remIcon = highed.dom.cr('div', 'highed-icon fa fa-minus-square-o'),
      addIcon = highed.dom.cr('div', 'highed-icon fa fa-plus-square-o'),
      index =
        (child.meta.ns ? child.meta.ns + '.' : '') +
        (myIndex ? '[' + myIndex + '].' : '') +
        child.meta.name,
      expanded = true;

    child.meta.fullname = index;

    function pushExpandState() {
      if (
        (!child.meta.types.array &&
          typeof expandState[index] !== 'undefined') ||
        expanded
      ) {
        expandState[index] = expanded;
      }
    }

    function select() {
      if (selectedNode) {
        selectedNode.className = 'parent-title';
      }

      selectedNode = title;
      selectedPath = index;

      title.className = 'parent-title parent-title-selected';

      events.emit(
        'Select',
        child,
        title.innerHTML,
        child.data,
        productFilter,
        filters[index] ? child.data[filters[index].controller] : false
      );
    }

    function expand(noSelect, force) {
      if (
        (force || !expanded) &&
        child.children.length &&
        child.meta.hasSubTree
      ) {
        icon.className = 'exp-col-icon fa fa-folder-open-o';
        highed.dom.style(body, { display: 'block' });
        expanded = true;
        pushExpandState();
      }

      if (!noSelect) {
        select();
      }

      highed.emit(
        'UIAction',
        'AdvancedTreeNavigation',
        (child.meta.ns ? child.meta.ns + '.' : '') + child.meta.name
      );
    }

    function collapse(noSelect, noPush) {
      if (expanded && child.children.length && child.meta.hasSubTree) {
        icon.className = 'exp-col-icon fa fa-folder-o';
        highed.dom.style(body, { display: 'none' });
        expanded = false;
        if (!noPush) {
          pushExpandState();
        }
      }

      if (!noSelect) {
        select();
      }
    }

    function toggle(e) {
      if (expanded) {
        collapse();
      } else {
        expand();
      }

      if (e) {
        return highed.dom.nodefault(e);
      }
    }

    function buildSubtree(activeFilter) {
      body.innerHTML = '';

      // Skip this element if it's not part of the current product
      if (
        productFilter &&
        Object.keys(child.meta.products || {}).length > 0 &&
        !child.meta.products[productFilter]
      ) {
        //return false;
      }

      if (child.meta.isArrayElement) {
        highed.dom.ap(node, highed.dom.ap(rightIcons, remIcon));

        highed.dom.on(remIcon, 'click', function(e) {
          if (confirm('Really delete the element? This cannot be undone!')) {
            var delIndex = false;

            if (selectedNode === node) {
              selectedNode.className = 'parent-title';
              selectedNode = false;
              selectedPath = false;
              events.emit('ClearSelection');
            }

            body.parentNode.removeChild(body);
            node.parentNode.removeChild(node);

            // This is a bit convuluted, but we can't do a filter
            child.meta.arrayData.some(function(a, i) {
              if (a === child.data) {
                delIndex = i;
                return true;
              }
            });

            child.meta.arrayData.splice(delIndex, 1);

            events.emit('ForceSave', attachedData);

            highed.snackBar(
              'Removed element ' +
                delIndex +
                ' from ' +
                (child.meta.ns ? child.meta.ns + '.' : '') +
                child.meta.name
            );
          }

          return highed.dom.nodefault(e);
        });
      }

      // This node contains an array of stuff
      if (child.meta.types.array) {
        highed.dom.ap(node, highed.dom.ap(rightIcons, addIcon));

        icon.className = 'exp-col-icon fa fa-th-list';

        // We need to create one child per. existing entry
        child.data = instancedData[child.meta.name] =
          instancedData[child.meta.name] || [];

        // Force it to be an array
        if (!highed.isArr(child.data)) {
          child.data = instancedData[child.meta.name] = [
            instancedData[child.meta.name]
          ];
        }

        function addArrayElementToList(data, i) {
          var cat = {
              meta: {
                name: child.meta.name,
                title: child.meta.name + '[' + i + ']',
                hasSubTree: true,
                arrayData: instancedData[child.meta.name],
                isArrayElement: true,
                types: {
                  object: 1
                }
              },
              data: data,
              // We need to clone the children since the builders
              // add data attributes to them.
              // If we don't clone, all the sub-stuff will link to
              // the last child data accross all instances.
              children: highed.merge([], child.children)
            },
            node = createNode(cat, body, data, productFilter, i);

          if (node) {
            build(cat, node.body, data, productFilter);
          }
        }

        highed.dom.on(addIcon, 'click', function() {
          var newElement = {};

          highed.snackBar('Added new element to ' + child.meta.name);
          child.data.push(newElement);
          addArrayElementToList(newElement, child.data.length - 1);

          events.emit('ForceSave', attachedData);
        });

        child.data.forEach(addArrayElementToList);
      } else {
        // Only allow expanding on non-array parents
        highed.dom.on(node, 'click', function() {
          expand();
        });

        highed.dom.on(icon, 'click', toggle);

        if (!child.meta.hasSubTree) {
          icon.className = 'exp-col-icon fa fa-sliders';
        }

        // Add data instance
        if (!child.meta.isArrayElement) {
          child.data = instancedData[child.meta.name] =
            instancedData[child.meta.name] || {};
        }

        // Collapsed by default
        if (!expandState[index]) {
          collapse(true, true);
        } else {
          expand(true, true);
        }

        if (index === selectedPath) {
          select();
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////

    highed.dom.ap(pnode, highed.dom.ap(node, icon, title), body);

    expands[index] = expand;

    buildSubtree();

    return {
      data: child.data,
      body: body,
      rebuild: buildSubtree
    };
  }

  /** Expand to show a given ID
   *  @memberof highed.Tree
   *  @param id {string} - the ID of the element to expand
   */
  function expandTo(id) {
    var prev = '';

    if (!id) return;

    id = id
      .replace(/\-\-/g, '.')
      .replace(/\-/g, '.')
      .split('.');

    id.forEach(function(seg) {
      seg = prev + seg;
      if (expands[seg]) expands[seg]();
      prev += seg + '.';
    });
  }

  /** Build the tree
   *
   *  This function takes in a transformed, compact, meta definitions
   *  for all entries in the API. The definitions are structured as an actual
   *  tree, where each node has an array of children, and a meta object with
   *  meta information such as data type, default, and GH links.
   *
   *  @memberof highed.Tree
   *  @param tree {object} - the tree to display
   *    > children {object} - the children of the node
   *    > entries {array} - array of orphan children
   *  @param pnode {domnode} - the parent node
   *  @param instancedData {object} - the actual tree data
   *  @param dataIndex {number} - the path to data in arrays
   */
  function build(tree, pnode, instancedData, productFilter) {
    if (!tree) {
      return;
    }

    // Handled in createNode, just skip.
    if (tree.meta.types['array']) {
      return;
    }

    if (
      productFilter &&
      Object.keys(tree.meta.products || {}).length > 0 &&
      !tree.meta.products[productFilter]
    ) {
      return;
    }

    if (highed.isArr(tree.children)) {
      tree.children.forEach(function(child) {
        var node, fstate;

        if (tree.meta.fullname && filters[tree.meta.fullname]) {
          if (child.meta && child.meta.validFor) {
            fstate = tree.data[filters[tree.meta.fullname].controller];
            if (fstate && fstate.length > 0 && !child.meta.validFor[fstate]) {
              return;
            }
          }
        }

        if (!child.meta.leafNode) {
          node = createNode(child, pnode, instancedData, productFilter);
          if (node) {
            build(child, node.body, node.data, productFilter);
          }
        }
      });
    }
  }

  function getMasterData() {
    return attachedData;
  }

  function isFilterController(ns, name) {
    if (typeof filters[ns] !== 'undefined') {
      return filters[ns].controller === name;
    }
    return false;
  }

  ////////////////////////////////////////////////////////////////////////////

  highed.dom.ap(parent, container);

  ////////////////////////////////////////////////////////////////////////////

  return {
    on: events.on,
    expandTo: expandTo,
    getMasterData: getMasterData,
    isFilterController: isFilterController,
    build: function(tree, data) {
      attachedData = data;
      container.innerHTML = '';
      build(tree, container, data, false);
    }
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var container = highed.dom.cr('div', 'highed-snackbar no-print'),
    title = highed.dom.cr('span', 'snackbar-title', ''),
    action = highed.dom.cr('span', 'snackbar-action', ''),
    closeNode = highed.dom.cr(
      'span',
      'highed-snackbar-close fa fa-times-circle',
      ''
    ),
    timeout = false,
    callback = false;

  highed.ready(function() {
    highed.dom.ap(
      document.body,
      highed.dom.ap(container, title, action, closeNode)
    );
  });

  highed.dom.on(container, 'mouseover', function() {
    window.clearTimeout(timeout);
  });

  highed.dom.on(container, 'mouseout', function() {
    hide();
  });

  highed.dom.on(closeNode, 'click', function() {
    highed.dom.style(container, {
      bottom: '-68px'
    });
  });

  ///////////////////////////////////////////////////////////////////////////

  function hide() {
    timeout = window.setTimeout(function() {
      highed.dom.style(container, {
        bottom: '-68px'
      });
    }, 5000);
  }

  ///////////////////////////////////////////////////////////////////////////

  /**  Show a snackbar
     *   A snack bar is those info rectangles showing up on the bottom left.
     *
     *   @example
     *   highed.snackBar('Hello world!');
     *
     *   @param stitle {string} (optional) - the snackbar title
     *   @param saction {string} (optional) - the snackbar action text
     *   @param fn {function} (optional) - the function to call when clicking the action
     */
  highed.snackBar = function(stitle, saction, fn) {
    title.innerHTML = stitle; // .toUpperCase();

    window.clearTimeout(timeout);

    if (saction) {
      action.innerHTML = saction.toUpperCase();
    }

    if (callback) {
      callback();
    }

    highed.dom.style(container, {
      bottom: '10px'
    });

    highed.dom.style(action, {
      display: saction ? '' : 'none'
    });

    callback = highed.dom.on(action, 'click', fn);

    hide();
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A context menu component
 *  Does a typicall right-click menu.
 *  Note that each instance get their own DOM node in the document body.
 *
 *  @example
 *  var ctx = highed.ContextMenu([
 *     {
 *         title: "Hello World",
 *         click: function (e) {
 *             alert('hello world!');
 *         }
 *     }
 *  ]);
 *
 *  @constructor
 *  @param stuff {object} - things to add (optional)
 *      > title {string} - the title of the entry
 *      > click {function} - function to call when selecting the item
 */
highed.ContextMenu = function(stuff) {
  var container = highed.dom.cr(
      'div',
      'highed-ctx-container-common highed-ctx-container'
    ),
    closeBtn = highed.dom.cr('div', 'highed-ctx-close-button', 'Close'),
    visible = false,
    dimHide = false;

  ///////////////////////////////////////////////////////////////////////////

  /** Add an entry to the menu
     *  @memberof highed.ContextMenu
     *  @param entry {object} - the definition of the entry to add
     *    > title {string} - the title of the entry
     *    > click {function} - the function to call when clicking the item
     */
  function addEntry(entry) {
    var item = highed.dom.cr(
        'div',
        'highed-ctx-item highed-ctx-item-responsive',
        entry.title
      ),
      right = highed.dom.cr('div', 'highed-ctx-child-icon fa fa-angle-right'),
      childCtx;

    if (entry === '-') {
      return highed.dom.ap(container, highed.dom.cr('div', 'highed-ctx-sep'));
    }

    highed.dom.on(item, 'click', function() {
      if (highed.isFn(entry.click)) {
        entry.click();
      }

      hide();
    });

    if (entry.selected) {
      item.className += ' highed-ctx-item-selected';
    }

    if (!highed.isNull(entry.children)) {
      childCtx = highed.ContextMenu(entry.children);

      highed.dom.on(item, 'mouseenter', function(e) {
        childCtx.show(e.clientX, e.clientY);
      });
    }

    highed.dom.ap(
      container,
      highed.dom.ap(
        item,
        entry.icon
          ? highed.dom.cr(
              'div',
              'ctx-child-licon highed-ctx-child-licon-responsive fa fa-' +
                entry.icon
            )
          : false,
        entry.children ? right : false
      )
    );
  }

  /** Show the menu
     *  @memberof highed.ContextMenu
     *  @param x {number} - the x position
     *  @param y {number} - the y position
     */
  function show(x, y) {
    var psize = highed.dom.size(document.body),
      size = highed.dom.size(container);

    if (visible) return;

    if (x > psize.w - size.w - 20) {
      x = psize.w - size.w - 20;
    }

    if (y > psize.h - size.h - 20) {
      y = psize.h - size.h - 20;
    }

    highed.dom.style(container, {
      'pointer-events': 'auto',
      opacity: 1,
      left: x + 'px',
      top: y + 'px'
    });

    visible = true;
    dimHide = highed.showDimmer(hide, true, true, 10);
  }

  /** Hide the menu
     *  @memberof highed.ContextMenu
     */
  function hide() {
    if (!visible) return;

    highed.dom.style(container, {
      left: '-2000px',
      'pointer-events': 'none',
      opacity: 0
    });

    if (highed.isFn(dimHide)) {
      dimHide();
    }

    visible = false;
  }

  /** Build a menu
     *  @memberof highed.ContextMenu
     *  @param def {array<object>} - an array of entries
     */
  function build(def) {
    container.innerHTML = '';
    highed.dom.ap(container, closeBtn);

    if (highed.isArr(def)) {
      return def.forEach(addEntry);
    }

    Object.keys(def).forEach(function(key) {
      var entry = def[key];
      addEntry(highed.merge({ title: key }, entry));
    });
  }

  ///////////////////////////////////////////////////////////////////////////

  if (stuff) {
    build(stuff);
  }

  highed.dom.on(closeBtn, 'click', hide);

  highed.ready(function() {
    highed.dom.ap(document.body, container);
  });

  ///////////////////////////////////////////////////////////////////////////

  return {
    addEntry: addEntry,
    show: show,
    hide: hide,
    build: build
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var dropdownItems = highed.dom.cr(
    'div',
    'highed-dropdown-items highed-dropdown-items-responsive'
  );

  highed.ready(function() {
    highed.dom.ap(document.body, dropdownItems);
  });

  /** A stylable dropdown
     *  @constructor
     *
     *  @emits Change - when the selection changes
     *  @emits Open - when the dropdown is opened
     *  @emits Close - when the dropdown is closed
     *
     *  @param parent {domnode} - the node to attach the dropdown to
     */
  highed.DropDown = function(parent) {
    var events = highed.events(),
      container = highed.dom.cr('div', 'highed-dropdown'),
      body = highed.dom.cr('div', 'highed-dropdown-body'),
      arrow = highed.dom.cr('div', 'highed-dropdown-arrow fa fa-arrow-down'),
      items = [],
      selectedItem = false,
      expanded = false,
      catcher = false;

    ////////////////////////////////////////////////////////////////////////

    //Build the DOM
    function buildDOM() {
      dropdownItems.innerHTML = '';

      items.forEach(function(item) {
        highed.dom.ap(dropdownItems, item.node);
        //IE fix
        item.node.innerHTML = item.title();
      });
    }

    //Collapse the dropdown
    function collapse() {
      if (highed.isFn(catcher)) {
        catcher();
        catcher = false;
      }

      //Should update the container
      if (selectedItem) {
        body.innerHTML = selectedItem.title();
      }

      highed.dom.style(dropdownItems, {
        opacity: 0,
        left: '-20000px',
        'pointer-events': 'none'
      });

      expanded = false;
    }

    //Expand the dropdown
    function expand(e) {
      buildDOM();

      var pos = highed.dom.pos(container, true),
        s = highed.dom.size(container);

      //Quick hack for IE...
      if (!pos || !pos.x) {
        pos = {
          x: 10,
          y: 10
        };
      }

      if (!s || !s.w) {
        s = {
          w: 200,
          h: 200
        };
      }

      //Need to check the height + y to see if we need to move it

      highed.dom.style(dropdownItems, {
        opacity: 1,
        'pointer-events': 'auto',
        left: pos.x + 'px',
        top: pos.y + s.h + 'px',
        width: s.w - 1 + 'px',
        'min-height': s.h + 'px'
      });

      catcher = highed.showDimmer(collapse, true, true, 500);

      expanded = true;
    }

    //Toggle expansion
    function toggle(e) {
      expanded = !expanded;
      if (expanded) {
        return expand(e);
      }
      collapse();

      return expanded;
    }

    /** Add an item to the dropdown
         *  @memberof highed.DropDown
         *  @param item {object} - the item to add
         *    > title {string} - the title of the item
         *    > id {anyting} - the id of the item
         *    > select {function} - function to call when the item is selected
         */
    function addItem(item) {
      if (item && item.id) {
        if (!highed.isBasic(item.id)) {
          item.id = '1234';
        }
      }

      if (highed.isBasic(item)) {
        item = {
          id: item,
          title: item
        };
      }

      if (
        items.filter(function(b) {
          return b.id() === item.id;
        }).length > 0
      ) {
        return false;
      }

      var node = highed.dom.cr('div', 'highed-dropdown-item'),
        id = highed.uuid(),
        index = items.length,
        itemInstance = {
          //The node
          node: node,

          //Get the index
          index: function() {
            return index;
          },

          //Get the ID
          id: function() {
            return id;
          },

          //Get the title
          title: function() {
            return highed.isStr(item) ? item : item.title || '';
          },

          //Unselect the item
          unselect: function() {
            node.className = 'highed-dropdown-item';
          },

          //Select the item
          select: function() {
            if (selectedItem) {
              selectedItem.unselect();
            }

            node.className =
              'highed-dropdown-item highed-dropdown-item-selected';
            selectedItem = itemInstance;

            body.innerHTML = selectedItem.title();

            events.emit('Change', itemInstance);

            if (item && highed.isFn(item.select)) {
              item.select(itemInstance);
            }

            collapse();
          }
        };

      if (!item) {
        return false;
      }

      if (highed.isStr(item) || highed.isNum(item)) {
        node.innerHTML = item;
        id = item;
      } else {
        node.innerHTML = item.title || '';
        id = item.id; // || id;

        if (item.selected) {
          itemInstance.select();
        }
      }

      highed.dom.on(node, 'click', function(e) {
        itemInstance.select();
        e.cancelBubble = true;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      });

      items.push(itemInstance);

      return itemInstance;
    }

    /** Clear the dropdown
         *  @memberof highed.DropDown
         */
    function clear() {
      items = [];
    }

    /** Add several items to the dropdown
         *  @memberof highed.DropDown
         *  @param itemsToAdd {array} - array of items to add
         */
    function addItems(itemsToAdd) {
      if (highed.isArr(itemsToAdd)) {
        itemsToAdd.forEach(addItem);
      }
    }

    /** Set the current selection by id
         *  @memberof highed.DropDown
         *  @param id {anything} - the id to select
         */
    function selectById(id) {
      items.some(function(item) {
        //This is not a typo..
        if (item.id() == id) {
          item.select();
          return true;
        }
      });
    }

    /** Set the current selection by index
         *  @memberof highed.DropDown
         *  @param index {number} - the index to select in range [0..item.length]
         */
    function selectByIndex(index) {
      if (index >= 0 && index < items.length) {
        items[index].select();
      }
    }

    ///////////////////////////////////////////////////////////////////////////

    if (parent) {
      parent = highed.dom.get(parent);
      highed.dom.ap(parent, container);
    }

    highed.dom.ap(container, body, arrow);

    highed.dom.on(container, 'click', toggle);

    return {
      container: container,
      selectById: selectById,
      selectByIndex: selectByIndex,
      addItems: addItems,
      addItem: addItem,
      clear: clear,
      on: events.on
    };
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Make a node movable
 *  @constructor
 *
 *  @emits StartMove - when starting to move
 *  @emits Moving - when moving
 *  @emits EndMove - when stopping to move
 *
 *  @param target {domnode} - the node to make movable
 *  @param constrain {string} - constrain moving: `XY`, `Y`, or `X`
 */
highed.Movable = function(
  target,
  constrain,
  constrainParent,
  parentNode,
  min,
  doOffset
) {
  var events = highed.events(),
    moving = false;

  constrain = (constrain || 'XY').toUpperCase();
  target = highed.dom.get(target);

  if (target) {
    highed.dom.on(target, ['mousedown', 'touchstart'], function(e) {
      //   if (moving) return;
      moving = true;
      var cp = highed.dom.pos(target),
        ps = highed.dom.size(parentNode || target.parentNode),
        ns = highed.dom.size(target),
        x = cp.x,
        y = cp.y,
        offsetX = 0,
        offsetY = 0,
        mover = highed.dom.on(
          document.body,
          ['mousemove', 'touchmove'],
          function(moveE) {
            if (constrain === 'X' || constrain === 'XY') {
              x =
                cp.x + ((moveE.clientX || moveE.touches[0].clientX) - offsetX);

              if (constrainParent) {
                if (x < 0) x = 0;
                if (x > ps.w - ns.w) x = ps.w - ns.w;
              }
            }
            if (constrain === 'Y' || constrain === 'XY') {
              y =
                cp.y + ((moveE.clientY || moveE.touches[0].clientY) - offsetY);

              if (constrainParent) {
                if (y < 0) y = 0;
                if (y > ps.h - ns.h) y = ps.h - ns.h;
              }
            }

            if (min && x < min.x) {
              x = min.x;
            }
            if (min && y < min.y) {
              y = min.y;
            }

            highed.dom.style(target, {
              left: x - (doOffset ? ns.w : 0) + 'px',
              top: y + 'px'
            });

            events.emit('Moving', x, y);

            moveE.cancelBubble = true;
            moveE.preventDefault();
            moveE.stopPropagation();
            moveE.stopImmediatePropagation();
            return false;
          }
        ),
        upper = highed.dom.on(document.body, ['mouseup', 'touchend'], function(
          upE
        ) {
          //Detach the document listeners
          upper();
          mover();
          moving = false;
          document.body.className = document.body.className.replace(
            ' highed-nosel',
            ''
          );
          events.emit('EndMove', x, y);

          upE.cancelBubble = true;
          upE.preventDefault();
          upE.stopPropagation();
          upE.stopImmediatePropagation();
          return false;
        });

      document.body.className += ' highed-nosel';
      offsetX = e.clientX || e.touches[0].clientX;
      offsetY = e.clientY || e.touches[0].clientY;
      events.emit('StartMove', cp.x, cp.y);

      e.cancelBubble = true;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    });
  }

  ////////////////////////////////////////////////////////////////////////////

  return {
    on: events.on
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Slider widget
 *  @constructor
 *
 *  @emits Change - when the value changes
 *
 *  @param parent {domnode} - the parent of the slider
 *  @param attributes {object} - the slider properties
 *    > max {number} - the max value
 *    > min {number} - the min value
 *    > step {number} - the step size
 *    > resetTo {anything} - value to reset to
 */
highed.Slider = function(parent, attributes) {
  var properties = highed.merge(
      {
        max: 100,
        min: 1,
        step: 1,
        resetTo: 0,
        value: 0
      },
      attributes
    ),
    events = highed.events(),
    value = properties.value || properties.resetTo,
    container = highed.dom.cr('div', 'highed-slider'),
    indicator = highed.dom.cr('div', 'highed-slider-indicator'),
    textIndicator = highed.dom.cr('div', 'highed-slider-text-indicator'),
    sliderBackground = highed.dom.cr('div', 'highed-slider-background'),
    resetIcon = highed.dom.cr('div', 'highed-slider-reset fa fa-undo'),
    mover = highed.Movable(indicator, 'x', true, sliderBackground);

  ////////////////////////////////////////////////////////////////////////////

  function updateText() {
    textIndicator.innerHTML = value;

    if (value === 'null' || value === null) {
      textIndicator.innerHTML = 'auto';
    }
    if (value === 'undefined' || typeof value === 'undefined') {
      textIndicator.innerHTML = 'auto';
    }
  }

  // Calculate the indicator X
  function calcIndicator() {
    var x = 0,
      s = highed.dom.size(sliderBackground),
      ms = highed.dom.size(indicator);

    if (!highed.isNum(value) || !value) {
      x = 0;
    } else {
      x =
        (value - properties.min) /
        (properties.max - properties.min) *
        (s.w - ms.w);
    }

    highed.dom.style(indicator, {
      left: x + 'px'
    });
  }

  //Waits until the slider is in the dom
  function tryUpdateIndicators() {
    updateText();
    if (container.parentNode) {
      calcIndicator();
    } else {
      window.setTimeout(tryUpdateIndicators, 10);
    }
  }

  /** Set the value
     *  @memberof highed.Slider
     *  @param newValue {number} - the new value
     */
  function set(newValue) {
    value = highed.clamp(properties.min, properties.max, newValue);
    textIndicator.innerHTML = value;
    calcIndicator();
  }

  mover.on('Moving', function(x) {
    var s = highed.dom.size(sliderBackground),
      ms = highed.dom.size(indicator);

    //Set the value based on the new X
    value =
      properties.min +
      Math.round(x / (s.w - ms.w) * (properties.max - properties.min));

    textIndicator.innerHTML = value;
    if (!highed.onPhone()) {
      events.emit('Change', value);
    }
  });

  mover.on('StartMove', function() {
    if (highed.onPhone()) {
      textIndicator.className =
        'highed-slider-text-indicator highed-slider-text-indicator-popup';
    }
  });

  mover.on('EndMove', function() {
    if (highed.onPhone()) {
      textIndicator.className = 'highed-slider-text-indicator';
      //We're not emitting changes until done on mobile
      events.emit('Change', value);
    }
  });

  ////////////////////////////////////////////////////////////////////////////

  highed.dom.on(resetIcon, 'mouseover', function(e) {
    //  highed.Tooltip(e.clientX, e.clientY, 'Reset to initial value');
  });

  highed.dom.on(resetIcon, 'click', function() {
    value = properties.resetTo;
    calcIndicator();

    if (value === 'null') {
      value = null;
    }
    if (value === 'undefined') {
      value = undefined;
    }

    updateText();
    events.emit('Change', value);
  });

  if (parent) {
    parent = highed.dom.get(parent);
    highed.dom.ap(parent, container);
  }

  highed.dom.ap(
    container,
    sliderBackground,
    resetIcon,
    highed.dom.ap(indicator, textIndicator)
  );

  tryUpdateIndicators();

  // Public interface
  return {
    on: events.on,
    set: set,
    container: container
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

function parseCSV(inData, delimiter) {
  var isStr = highed.isStr,
    isArr = highed.isArray,
    isNum = highed.isNum,
    csv = inData || '',
    result = [],
    options = {
      delimiter: delimiter
    },
    potentialDelimiters = {
      ',': true,
      ';': true,
      '\t': true
    },
    delimiterCounts = {
      ',': 0,
      ';': 0,
      '\t': 0
    };
  //The only thing CSV formats have in common..
  rows = (csv || '').replace(/\r\n/g, '\n').split('\n');

  // If there's no delimiter, look at the first few rows to guess it.

  if (!options.delimiter) {
    rows.some(function(row, i) {
      if (i > 10) return true;

      var inStr = false,
        c,
        cn,
        cl,
        token = '';

      for (var j = 0; j < row.length; j++) {
        c = row[j];
        cn = row[j + 1];
        cl = row[j - 1];

        if (c === '"') {
          if (inStr) {
            if (cl !== '"' && cn !== '"') {
              // The next non-blank character is likely the delimiter.

              while (cn === ' ') {
                cn = row[++j];
              }

              if (potentialDelimiters[cn]) {
                delimiterCounts[cn]++;
                return true;
              }

              inStr = false;
            }
          } else {
            inStr = true;
          }
        } else if (potentialDelimiters[c]) {
          if (!isNaN(Date.parse(token))) {
            // Yup, likely the right delimiter
            token = '';
            delimiterCounts[c]++;
          } else if (!isNum(token) && token.length) {
            token = '';
            delimiterCounts[c]++;
          }
        } else {
          token += c;
        }
      }
    });

    options.delimiter = ';';

    if (
      delimiterCounts[','] > delimiterCounts[';'] &&
      delimiterCounts[','] > delimiterCounts['\t']
    ) {
      options.delimiter = ',';
    }

    if (
      delimiterCounts['\t'] >= delimiterCounts[';'] &&
      delimiterCounts['\t'] >= delimiterCounts[',']
    ) {
      options.delimiter = '\t';
    }
  }

  rows.forEach(function(row, rowNumber) {
    var cols = [],
      inStr = false,
      i = 0,
      j,
      token = '',
      guessedDel,
      c,
      cp,
      cn;

    function pushToken() {
      token = (token || '').replace(/\,/g, '');
      if (!token.length) {
        token = null;
        // return;
      }

      if (isNum(token)) {
        token = parseFloat(token);
      }

      cols.push(token);
      token = '';
    }

    for (i = 0; i < row.length; i++) {
      c = row[i];
      cn = row[i + 1];
      cp = row[i - 1];

      if (c === '"') {
        if (inStr) {
          pushToken();
        } else {
          inStr = false;
        }

        //Everything is allowed inside quotes
      } else if (inStr) {
        token += c;
        //Check if we're done reading a token
      } else if (c === options.delimiter) {
        pushToken();

        //Append to token
      } else {
        token += c;
      }

      // Push if this was the last character
      if (i === row.length - 1) {
        pushToken();
      }
    }

    result.push(cols);
  });

  return result;
}

/** Data table
 *  @constructor
 *  @param {domnode} parent - the node to attach to
 *  @param {object} attributes - the properties
 */
highed.DataTable = function(parent, attributes) {
  var properties = highed.merge(
      {
        checkable: true,
        importer: {}
      },
      attributes
    ),
    events = highed.events(),
    container = highed.dom.cr('div', 'highed-dtable-container'),
    frame = highed.dom.cr('div', 'highed-dtable-table-frame highed-scrollbar'),
    table = highed.dom.cr('table', 'highed-dtable-table'),
    thead = highed.dom.cr('thead', 'highed-dtable-head'),
    tbody = highed.dom.cr('tbody', 'highed-dtable-body'),
    tableTail = highed.dom.cr(
      'div',
      'highed-dtable-table-tail',
      'Only the first 500 rows are shown.'
    ),
    colgroup = highed.dom.cr('colgroup'),
    leftBar = highed.dom.cr('div', 'highed-dtable-left-bar'),
    topBar = highed.dom.cr('div', 'highed-dtable-top-bar'),
    topLeftPanel = highed.dom.cr('div', 'highed-dtable-top-left-panel'),
    checkAll = highed.dom.cr('input'),
    mainInput = highed.dom.cr('textarea', 'highed-dtable-input'),
    weirdDataModal = highed.OverlayModal(false, {
      // zIndex: 20000,
      showOnInit: false,
      width: 300,
      height: 350
    }),
    weirdDataContainer = highed.dom.cr(
      'div',
      'highed-dtable-weird-data highed-box-size highed-errobar-body'
    ),
    weirdDataIgnore = highed.dom.cr(
      'button',
      'highed-ok-button',
      'No, this looks right'
    ),
    weirdDataFix = highed.dom.cr(
      'button',
      'highed-ok-button',
      'Yeah, this looks wrong'
    ),
    loadIndicator = highed.dom.cr(
      'div',
      'highed-dtable-load-indicator',
      'Loading Data...'
    ),
    dropZone = highed.dom.cr(
      'div',
      'highed-dtable-drop-zone highed-transition'
    ),
    liveDataFrame = highed.dom.cr(
      'div',
      'highed-box-size highed-dtable-gsheet-frame'
    ),
    gsheetFrame = highed.dom.cr(
      'div',
      'highed-box-size highed-dtable-gsheet-frame'
    ),
    gsheetContainer = highed.dom.cr(
      'div',
      'highed-box-size highed-prettyscroll highed-dtable-gsheet'
    ),
    liveDataContainer = highed.dom.cr(
      'div',
      'highed-box-size highed-prettyscroll highed-dtable-gsheet'
    ),
    liveDataInput = highed.dom.cr('input', 'highed-imp-input-stretch'),
    liveDataIntervalInput = highed.dom.cr('input', 'highed-imp-input-stretch'),
    liveDataTypeSelect = highed.DropDown(),

    liveDataTypeContainer = highed.dom.cr('div', 'highed-customize-group'),
    liveDataTypeMasterNode = highed.dom.cr('div', 'highed-customize-master-dropdown'),

    gsheetID = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetWorksheetID = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetRefreshTime = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetStartRow = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetEndRow = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetStartCol = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetEndCol = highed.dom.cr(
      'input',
      'highed-box-size highed-dtable-gsheet-id'
    ),
    gsheetCancelButton = highed.dom.cr(
      'button',
      'highed-ok-button highed-dtable-gsheet-button',
      'Detach Sheet From Chart'
    ),
    gsheetLoadButton = highed.dom.cr(
      'button',
      'highed-ok-button highed-dtable-gsheet-button',
      'Load Spreadsheet'
    ),
    liveDataLoadButton = highed.dom.cr(
      'button',
      'highed-ok-button highed-dtable-gsheet-button',
      'Load Live Data'
    ),
    liveDataCancelButton = highed.dom.cr(
      'button',
      'highed-ok-button highed-dtable-gsheet-button',
      'Cancel'
    ),
    detailValue = 0,
    isInGSheetMode = false,
    isInLiveDataMode = false,
    mainInputCb = [],
    rawCSV = false,
    mainInputCloseCb = false,
    toolbar,
    importModal = highed.OverlayModal(false, {
      minWidth: 600,
      minHeight: 600
    }),
    importer = highed.DataImporter(importModal.body, properties.importer),
    rows = [],
    gcolumns = [],
    changeTimeout = false,
    surpressChangeEvents = false,
    monthNumbers = {
      JAN: 1,
      FEB: 2,
      MAR: 3,
      APR: 4,
      MAY: 5,
      JUN: 6,
      JUL: 7,
      AUG: 8,
      SEP: 9,
      OCT: 10,
      NOV: 11,
      DEC: 12
    },
    saveCtx = highed.ContextMenu([
      {
        title: 'Use <code>,</code> as delimiter',
        click: function() {
          highed.download('data.csv', toCSV(','), 'application/csv');
        }
      },
      {
        title: 'Use <code>;</code> as delimiter',
        click: function() {
          highed.download('data.csv', toCSV(';'), 'application/csv');
        }
      }
    ]),
    selectedRowIndex = 0,
    addRowCtx = highed.ContextMenu([
      {
        title: 'At the end',
        icon: '',
        click: function() {
          addRow();
          highed.emit('UIAction', 'AddRowAtEnd');
        }
      },
      {
        title: 'After highlighted',
        click: function() {
          addRowAfter(selectedRowIndex);
          highed.emit('UIAction', 'AddRowAfterHighlight');
        }
      },
      {
        title: 'Before highlighted',
        click: function() {
          addRowBefore(selectedRowIndex);
          highed.emit('UIAction', 'AddRowBeforeHighlight');
        }
      }
    ]);
  checkAll.type = 'checkbox';

  highed.dom.on(mainInput, 'click', function(e) {
    return highed.dom.nodefault(e);
  });

  highed.dom.style(liveDataIntervalInput, {
    padding: '8px'
  });
  ////////////////////////////////////////////////////////////////////////////

  // Handle drag 'n drop of files

  function handleFileUpload(f) {
    if (f.type !== 'text/csv') {
      return highed.snackBar('The file is not a valid CSV file');
    }

    var reader = new FileReader();

    reader.onload = function(e) {
      loadCSV({ csv: e.target.result });
    };

    reader.readAsText(f);
  }

  frame.ondrop = function(e) {
    e.preventDefault();

    var d = e.dataTransfer;
    var f;
    var i;

    if (d.items) {
      for (i = 0; i < d.items.length; i++) {
        f = d.items[i];
        if (f.kind === 'file') {
          handleFileUpload(f.getAsFile());
        }
      }
    } else {
      for (i = 0; i < d.files.length; i++) {
        f = d.files[i];
        handleFileUpload(f);
      }
    }
  };

  frame.ondragover = function(e) {
    e.preventDefault();
  };

  ////////////////////////////////////////////////////////////////////////////

  function showDataImportError() {
    highed.dom.style(weirdDataContainer, {
      display: 'block'
    });
  }

  function hideDataImportError() {
    highed.dom.style(weirdDataContainer, {
      display: 'none'
    });
  }

  function emitChanged(noDelay) {
    window.clearTimeout(changeTimeout);

    if (isInGSheetMode) {
      return;
    }
    if (isInLiveDataMode) {
      return;
    }

    if (surpressChangeEvents) {
      return;
    }

    if (noDelay) {
      return events.emit('Change', getHeaderTextArr(), toData());
    }

    //We use an interval to stop a crazy amount of changes to be
    //emitted in succession when e.g. loading sets.
    changeTimeout = window.setTimeout(function() {
      if (!isInGSheetMode && !isInLiveDataMode) {
        events.emit('Change', getHeaderTextArr(), toData());
      }
    }, 1000);
  }

  function makeEditable(target, value, fn, keyup, close) {
    if (mainInputCb.length) {
      mainInputCb = mainInputCb.filter(function(fn) {
        fn();
        return false;
      });
    }

    if (mainInputCloseCb) {
      mainInputCloseCb();
    }

    mainInputCloseCb = close;

    mainInput.value = value;
    mainInput.setSelectionRange(0, mainInput.value.length);

    mainInputCb.push(
      highed.dom.on(mainInput, 'keydown', function(e) {
        //(highed.isFn(fn) && fn(mainInput.value));
        if (highed.isFn(keyup)) {
          return keyup(e);
        }
      })
    );

    mainInputCb.push(
      highed.dom.on(mainInput, 'keyup', function(e) {
        // Super hack to allow pasting CSV into cells
        var ps = highed.parseCSV(mainInput.value);
        if (ps.length > 1) {
          if (
            confirm(
              'You are about to load CSV data. This will overwrite your current data. Continue?'
            )
          ) {
            rawCSV = mainInput.value;
            highed.emit('UIAction', 'PasteCSVAttempt');
            return loadRows(ps);
          }
          return;
        }

        return highed.isFn(fn) && fn(mainInput.value);
      })
    );

    highed.dom.ap(target, mainInput);
    mainInput.focus();
  }

  ////////////////////////////////////////////////////////////////////////////

  function Column(row, colNumber, val) {
    var value = typeof val === 'undefined' ? null : val,
      col = highed.dom.cr('td'),
      colVal = highed.dom.cr('div', 'highed-dtable-col-val', value),
      input = highed.dom.cr('input'),
      exports = {};

    function goLeft() {
      if (colNumber >= 1) {
        row.columns[colNumber - 1].focus();
      } else {
        //Go up to the last column
        if (row.number - 1 >= 0) {
          rows[row.number - 1].columns[
            rows[row.number - 1].columns.length - 1
          ].focus();
        }
      }
    }

    function goRight() {
      if (colNumber < row.columns.length - 1) {
        row.columns[colNumber + 1].focus();
      } else {
        //Go down on the first column
        if (row.number < rows.length - 1) {
          rows[row.number + 1].columns[0].focus();
        }
      }
    }

    function goUp() {
      if (row.number > 0 && rows[row.number - 1].columns.length > colNumber) {
        rows[row.number - 1].columns[colNumber].focus();
      }
    }

    function goBelow() {
      if (
        row.number < rows.length - 1 &&
        rows[row.number + 1].columns.length > colNumber
      ) {
        rows[row.number + 1].columns[colNumber].focus();
      }
    }

    function handleKeyup(e) {
      //Go the the column to the left
      if (e.keyCode === 37) {
        goLeft();
        return highed.dom.nodefault(e);

        //Go to the column above
      } else if (e.keyCode === 38) {
        goUp();
        return highed.dom.nodefault(e);

        //Go to the column to the right
      } else if (e.keyCode === 39 || e.keyCode === 9) {
        goRight();
        return highed.dom.nodefault(e);

        //Go to the column below
      } else if (e.keyCode === 40) {
        goBelow();
        return highed.dom.nodefault(e);

        //Go to next row
      } else if (e.keyCode === 13) {
        //If we're standing in the last column of the last row,
        //insert a new row.
        if (row.number === rows.length - 1) {
          // && colNumber === rows.columns.length - 1) {
          addRow();
          rows[row.number + 1].columns[0].focus();
        } else {
          goBelow();
        }
        return highed.dom.nodefault(e);
      }
    }

    function selContents() {
      input.setSelectionRange(0, input.value.length);
    }

    function focus() {
      function checkNull(value) {
        return value === null || value === '';
      }
      mainInput.className = 'highed-dtable-input';
      makeEditable(
        col,
        value,
        function(val) {
          var changed = value !== val;
          value = checkNull(val) ? null : val;
          colVal.innerHTML = value;
          if (changed) {
            emitChanged();
          }
        },
        handleKeyup
      );

      row.select();
    }

    function destroy() {
      row.node.removeChild(col);
      col.innerHTML = '';
      colVal.innerHTML = '';
    }

    function getVal() {
      return value;
    }

    function addToDOM(me) {
      colNumber = me || colNumber;
      highed.dom.ap(row.node, highed.dom.ap(col, colVal));
    }

    highed.dom.on(col, 'click', focus);

    if (rows.length <= 500) {
      addToDOM();
    }

    exports = {
      focus: focus,
      value: getVal,
      destroy: destroy,
      addToDOM: addToDOM
    };

    return exports;
  }

  ////////////////////////////////////////////////////////////////////////////

  function Row(skipAdd) {
    var columns = [],
      row = highed.dom.cr('tr'),
      leftItem = highed.dom.cr('div', 'highed-dtable-left-bar-row', ''),
      checker = highed.dom.cr('input', 'highed-dtable-row-select-box'),
      checked = false,
      didAddHTML = false,
      exports = {};

    checker.type = 'checkbox';

    function addCol(val) {
      columns.push(Column(exports, columns.length, val));
    }

    function insertCol(where) {
      var col = Column(exports, columns.length);
      columns.splice(where, 0, col);
    }

    function select() {
      var o = tbody.querySelector('.highed-dtable-body-selected-row');
      if (o) {
        o.className = '';
      }
      row.className = 'highed-dtable-body-selected-row';
      selectedRowIndex = exports.rowIndex;
    }

    function isChecked() {
      return checked;
    }

    function check(state) {
      checker.checked = checked = state;
    }

    function destroy() {
      if (didAddHTML) {
        leftBar.removeChild(leftItem);
        tbody.removeChild(row);
        row.innerHTML = '';
      }

      rows = rows.filter(function(b) {
        return b !== exports;
      });

      if (rows.length < 2) {
        showDropzone();
      }
    }

    function addToDOM(number) {
      didAddHTML = true;
      exports.number = number;

      highed.dom.ap(tbody, row);

      highed.dom.ap(leftBar, highed.dom.ap(leftItem, checker));
    }

    function rebuildColumns() {
      row.innerHTML = '';
      columns.forEach(function(col, i) {
        col.addToDOM(i);
      });
    }

    function delCol(which) {
      if (which >= 0 && which < columns.length) {
        columns[which].destroy();
        columns.splice(which, 1);
      }
    }

    highed.dom.on(checker, 'change', function() {
      checked = checker.checked;
    });

    if (rows.length < 500) {
      addToDOM(rows.length);
    } else if (rows.length === 500) {
      highed.dom.style(tableTail, {
        display: 'block'
      });
    }

    exports = {
      destroy: destroy,
      select: select,
      columns: columns,
      number: rows.length,
      addCol: addCol,
      isChecked: isChecked,
      check: check,
      node: row,
      addToDOM: addToDOM,
      insertCol: insertCol,
      rebuildColumns: rebuildColumns,
      delCol: delCol,
      rowIndex: rows.length
    };

    if (!skipAdd) {
      rows.push(exports);
    }

    resize();

    return exports;
  }

  ////////////////////////////////////////////////////////////////////////////

  function rebuildRows() {
    rows.forEach(function(row, i) {
      if (rows.length < 500) {
        row.addToDOM(i);
      }
      row.rowIndex = i;
    });

    emitChanged();
  }

  function rebuildColumns() {
    rows.forEach(function(row) {
      row.rebuildColumns();
    });
  }

  function addRowBefore(index) {
    if (index > 0 && index < rows.length) {
      rows.splice(index - 0, 0, addRow(true, true));
      rebuildRows();
    }
  }

  function addRowAfter(index) {
    if (index >= 0 && index < rows.length) {
      rows.splice(index + 1, 0, addRow(true, true));
      rebuildRows();
    }
  }

  function init() {
    clear();

    surpressChangeEvents = true;

    for (var i = 0; i < 1; i++) {
      var r = Row();
    }

    for (var j = 0; j < 2; j++) {
      addCol('Column ' + (j + 1));
    }

    highed.dom.ap(colgroup, highed.dom.cr('col'));
    resize();

    surpressChangeEvents = false;
  }

  function updateColumns() {
    colgroup.innerHTML = '';
    topBar.innerHTML = '';

    gcolumns.forEach(function(col, i) {
      col.colNumber = i;
      col.addToDOM();
    });

    rebuildColumns();

    highed.dom.ap(colgroup, highed.dom.cr('col'));
    resize();
  }

  function addCol(value, where) {
    //The header columns control the colgroup
    var col = highed.dom.cr('col'),
      colNumber = gcolumns.length,
      header = highed.dom.cr('span', 'highed-dtable-top-bar-col'),
      headerTitle = highed.dom.cr('div', '', value),
      moveHandle = highed.dom.cr('div', 'highed-dtable-resize-handle'),
      options = highed.dom.cr(
        'div',
        'highed-dtable-top-bar-col-options fa fa-chevron-down'
      ),
      exports = {
        col: col,
        header: header,
        headerTitle: headerTitle,
        colNumber: gcolumns.length
      },
      mover = highed.Movable(
        moveHandle,
        'X',
        false,
        false,
        {
          x: 20,
          y: 0
        },
        true
      ),
      ctx = highed.ContextMenu([
        {
          title: highed.L('dgSortAsc'),
          icon: 'sort-amount-asc',
          click: function() {
            sortRows(exports.colNumber, 'asc');
          }
        },
        {
          title: highed.L('dgSortDec'),
          icon: 'sort-amount-desc',
          click: function() {
            sortRows(exports.colNumber, 'desc');
          }
        },
        '-',
        {
          title: highed.L('dgSortAscMonth'),
          icon: 'sort-amount-asc',
          click: function() {
            sortRows(exports.colNumber, 'asc', true);
          }
        },
        {
          title: highed.L('dgSortDecMonth'),
          icon: 'sort-amount-desc',
          click: function() {
            sortRows(exports.colNumber, 'desc', true);
          }
        },
        '-',
        {
          title: highed.L('dgDelCol'),
          icon: 'trash',
          click: function() {
            if (confirm(highed.L('dgDelColConfirm'))) {
              delCol(exports.colNumber);
            }
          }
        },
        // {
        //     title: 'Clone Column',
        //     icon: 'clone'
        // },
        '-',
        {
          title: highed.L('dgInsColBefore'),
          icon: 'plus',
          click: function() {
            insertCol(exports.colNumber);
          }
        },
        {
          title: highed.L('dgInsColAfter'),
          icon: 'plus',
          click: function() {
            insertCol(exports.colNumber + 1);
          }
        }
      ]),
      ox;

    ////////////////////////////////////////////////////////////////////////

    exports.addToDOM = function() {
      highed.dom.ap(colgroup, col);
      highed.dom.ap(
        topBar,
        highed.dom.ap(header, headerTitle, options, moveHandle)
      );
    };

    exports.destroy = function() {
      colgroup.removeChild(col);
      topBar.removeChild(header);

      gcolumns = gcolumns.filter(function(b) {
        return b !== exports;
      });
    };

    ////////////////////////////////////////////////////////////////////////

    exports.addToDOM();

    // highed.dom.showOnHover(header, options);

    col.width = 140;
    highed.dom.style([col, header], {
      width: col.width + 'px'
    });

    mover.on('StartMove', function(x) {
      ox = x;

      highed.dom.style(document.body, {
        cursor: 'ew-resize'
      });
    });

    mover.on('Moving', function(x) {
      col.width = x;

      highed.dom.style([col, header], {
        width: x + 'px'
      });

      moveHandle.className =
        'highed-dtable-resize-handle highed-dtable-resize-handle-moving';
    });

    mover.on('EndMove', function(x) {
      highed.dom.style(document.body, {
        cursor: ''
      });

      moveHandle.className = 'highed-dtable-resize-handle';
    });

    highed.dom.on(options, 'click', function(e) {
      ctx.show(e.clientX, e.clientY);
      return highed.dom.nodefault(e);
    });

    highed.dom.on(header, 'click', function(e) {
      //Ugly.
      mainInput.className = 'highed-dtable-input highed-dtable-input-header';

      //Spawn an edit box in the node
      makeEditable(
        header,
        value,
        function(val) {
          headerTitle.innerHTML = value = val;
          emitChanged();
        },
        function(e) {
          if (e.keyCode === 13) {
            mainInput.className = 'highed-dtable-input';
            header.removeChild(mainInput);
          }
        }
      );
    });

    rows.forEach(function(row) {
      if (where) {
        row.insertCol(where);
      } else {
        row.addCol();
      }
    });

    if (where) {
      gcolumns.splice(where, 0, exports);
    } else {
      gcolumns.push(exports);
    }

    emitChanged();
  }

  function showDropzone() {
    highed.dom.style(dropZone, {
      opacity: 1
    });
  }

  function hideDropzone() {
    highed.dom.style(dropZone, {
      opacity: 0
    });
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC FUNCTIONS FOLLOW

  /** Sort rows
   * @memberof highed.DataTable
   * @param column {number} - the column to sort on
   * @param direction {string} - the direction: `asc` or `desc`
   * @param asMonths {boolean} - if true, sort by month
   */
  function sortRows(column, direction, asMonths) {
    tbody.innerHTML = '';

    direction = (direction || '').toUpperCase();

    rows.sort(function(a, b) {
      var ad = a.columns[column].value(),
        bd = b.columns[column].value();

      if ((highed.isNum(ad) && highed.isNum(bd)) || asMonths) {
        if (asMonths) {
          ad = monthNumbers[ad.toUpperCase().substr(0, 3)] || 13;
          bd = monthNumbers[bd.toUpperCase().substr(0, 3)] || 13;
        } else {
          ad = parseFloat(ad);
          bd = parseFloat(bd);
        }

        if (direction === 'ASC') {
          return ad - bd;
        }
        return bd < ad ? -1 : bd > ad ? 1 : 0;
      }

      if (direction === 'ASC') {
        return ad.localeCompare(bd);
      }
      return bd.localeCompare(ad);
    });

    rebuildRows();
    emitChanged();
  }

  /** Clear the table
   * @memberof highed.DataTable
   */
  function clear(noWait) {
    rows = rows.filter(function(row) {
      row.destroy();
      return false;
    });

    gcolumns = gcolumns.filter(function(row) {
      //Destroy col here
      return false;
    });

    tbody.innerHTML = '';
    leftBar.innerHTML = '';
    topBar.innerHTML = '';
    colgroup.innerHTML = '';

    highed.dom.style(tableTail, {
      display: ''
    });

    events.emit('ClearData');

    emitChanged(noWait);
    showDropzone();
  }

  /** Add a new row
   * @memberof highed.DataTable
   */
  function addRow(supressChange, skipAdd) {
    var r = Row(skipAdd);

    gcolumns.forEach(function() {
      r.addCol();
    });

    if (!supressChange) {
      emitChanged();
    }

    if (rows.length > 1) {
      hideDropzone();
    }

    return r;
  }

  /** Insert a new column
   * @memberof highed.DataTable
   * @param {number} where - is the position where to add it
   */
  function insertCol(where) {
    if (!where) gcolumns.length;
    if (where < 0) where = 0;
    if (where >= gcolumns.length) where = gcolumns.length;

    //Insert into gcolumns and on each row, then call updateColumns()
    addCol(highed.L('dgNewCol'), where);

    updateColumns();
  }

  /** Delete a column
   * @memberof highed.DataTable
   * @param {number} which - the index of the column to delete
   */
  function delCol(which) {
    if (which >= 0 && which < gcolumns.length) {
      rows.forEach(function(row) {
        row.delCol(which);
      });

      gcolumns[which].destroy();

      updateColumns();
      emitChanged();
    }
  }

  /** Resize the table based on the container size
   *  @memberof highed.DataTable
   */
  function resize() {
    var ps = highed.dom.size(parent),
      hs = highed.dom.size(topBar),
      tb = highed.dom.size(toolbar.container);

    highed.dom.style(frame, {
      height: ps.h - hs.h - tb.h + 'px',
      width: ps.w - hs.h + 'px'
    });

    highed.dom.style(table, {
      width: ps.w - hs.h + 'px'
    });
  }

  /** Returns the header titles as an array
   *  @memberof highed.DataTable
   *  @returns {array<string>} - the headers
   */
  function getHeaderTextArr(quoteStrings) {
    return gcolumns.map(function(item) {
      var title = item.headerTitle.innerHTML.length
        ? item.headerTitle.innerHTML
        : null;

      if (quoteStrings) {
        title = '"' + title + '"';
      }

      return title;
    });
  }

  /** Get the table contents as an array of arrays
   *  @memberof highed.DataTable
   *  @param {boolean} quoteStrings - if true, strings are wrapped in double quotes
   *  @param {boolean} includeHeaders - if true, the header texts will be included as the first row
   *  @returns {array<array<string>>}
   */
  function toData(quoteStrings, includeHeaders) {
    var data = [];

    if (includeHeaders) {
      data.push(getHeaderTextArr(quoteStrings));
    }

    rows.forEach(function(row) {
      var rarr = [],
        hasData = false;

      row.columns.forEach(function(col) {
        var v = col.value(),
          d;

        if (v) {
          hasData = true;
        }

        if (quoteStrings && !highed.isNum(v) && highed.isStr(v)) {
          v = '"' + v.replace(/\"/g, '"') + '"';
        }

        if (highed.isNum(v)) {
          v = parseFloat(v);
        }

        if (highed.isStr(v) && Date.parse(v) !== NaN) {
          //v = (new Date(v)).getTime();
        }

        rarr.push(v);
      });

      if (hasData) {
        data.push(rarr);
      }
    });

    return data;
  }

  /** Get the table contents as series
   *  @memberof highed.DataTable
   */
  function toDataSeries(ignoreFirst) {
    var res = {
      categories: [],
      series: []
    };

    gcolumns.forEach(function(item, i) {
      if (i > 0) {
        res.series.push({
          name: item.headerTitle.innerHTML.length
            ? item.headerTitle.innerHTML
            : null,
          data: []
        });
      }
    });

    rows.forEach(function(row, i) {
      row.columns.forEach(function(col, ci) {
        var v = col.value();

        if (!ci) {
          if (v && highed.isStr(v) && Date.parse(v) !== NaN) {
            // v = new Date(v);
          }

          res.categories.push(v);
          return;
        }

        ci--;

        if (v && highed.isNum(v)) {
          v = parseFloat(v);
        }

        if (v && highed.isStr(v) && Date.parse(v) !== NaN) {
          // v = (new Date(v)).getTime();
        }

        res.series[ci].data.push(v);
      });
    });

    return res;
  }

  /** Get the table contents as standard CSV
   *  @memberof highed.DataTable
   *  @param delimiter {string} - the delimiter to use. Defaults to `,`.
   */
  function toCSV(delimiter, quoteStrings) {
    delimiter = delimiter || ',';
    return toData(quoteStrings, true)
      .map(function(cols) {
        return cols.join(delimiter);
      })
      .join('\n');
  }

  function loadRows(rows, done) {
    var sanityCounts = {};

    clear();

    if (rows.length > 1) {
      hideDropzone();
    }

    // Do a sanity check on rows.
    // If the column count varries between rows, there may be something wrong.
    // In those cases we should pop up a dialog allow to specify what the
    // delimiter should be manually.

    rows.some(function(row, i) {
      var count = row.length;
      sanityCounts[count] =
        typeof sanityCounts[count] === 'undefined' ? 0 : sanityCounts[count];
      ++sanityCounts[count];
      return i > 20;
    });

    if (Object.keys(sanityCounts).length > 4) {
      // Four or more rows have varrying amounts of columns.
      // Something is wrong.
      showDataImportError();
    }

    highed.dom.style(loadIndicator, {
      opacity: 1
    });

    setTimeout(function() {
      rows.forEach(function(cols, i) {
        var row;

        if (i) {
          row = Row();
        }

        cols.forEach(function(c) {
          if (i === 0) {
            addCol(c);
          } else {
            row.addCol(c);
          }
        });
      });

      highed.dom.ap(colgroup, highed.dom.cr('col'));

      // highed.snackBar(highed.L('dgDataImported'));
      resize();

      highed.dom.style(loadIndicator, {
        opacity: 0
      });

      if (highed.isFn(done)) {
        done();
      }
    }, 10);
  }

  function loadLiveDataPanel(params){
      //loadRows(params.csv);

      isInLiveDataMode = true;
      highed.dom.style(gsheetFrame, {
        display: 'none'
      });
      highed.dom.style(container, {
        display: 'none'
      });
      highed.dom.style(liveDataFrame, {
        display: 'block'
      });

      liveDataInput.value = params.columnsURL || params.rowsURL || params.csvURL;
      liveDataIntervalInput.value = params.dataRefreshRate || '';
      liveDataTypeSelect.selectById((params.columnsURL ? 'columnsURL' : (params.rowsURL ? 'rowsURL': 'csvURL')));
  }

  function loadLiveDataFromURL(url, interval, type) {
    isInLiveDataMode = true;
    events.emit('LoadLiveData', { url: url,
                                  interval: interval,
                                  type: type });
  }

  function loadCSV(data, surpressEvents) {
    var rows;

    if (isInGSheetMode) {
      isInGSheetMode = false;
      isInLiveDataMode = false;

      highed.dom.style(gsheetFrame, {
        display: 'none'
      });

      highed.dom.style(liveDataFrame, {
        display: 'none'
      });

      highed.dom.style(container, {
        display: 'block'
      });
    }

    // highed.snackBar(highed.L('dgDataImporting'));
    importModal.hide();

    surpressChangeEvents = true;

    rawCSV = data.csv;

    if (data && data.csv) {
      rows = parseCSV(data.csv, data.delimiter);
      loadRows(rows, function() {});
    } else {
      // surpressChangeEvents = false;
      // if (!surpressEvents) {
      //   emitChanged(true);
      // }
    }
    surpressChangeEvents = false;
    if (!surpressEvents) {
      emitChanged(true);
    }
  }

  function initGSheet(
    id,
    worksheet,
    startRow,
    endRow,
    startColumn,
    endColumn,
    skipLoad,
    dataRefreshRate
  ) {
    gsheetID.value = id;
    gsheetWorksheetID.value = worksheet || '';
    gsheetRefreshTime.value = dataRefreshRate || '';
    gsheetStartRow.value = startRow || 0;
    gsheetEndRow.value = endRow || '';
    gsheetStartCol.value = startColumn || 0;
    gsheetEndCol.value = endColumn || 0;

    isInGSheetMode = true;
    isInLiveDataMode = false;

    highed.dom.style(gsheetFrame, {
      display: 'block'
    });

    highed.dom.style(container, {
      display: 'none'
    });

    highed.dom.style(liveDataFrame, {
      display: 'none'
    });


    if (!skipLoad) {
      events.emit('LoadGSheet', {
        googleSpreadsheetKey: gsheetID.value,
        googleSpreadsheetWorksheet: gsheetWorksheetID.value || false,
        dataRefreshRate: gsheetRefreshTime.value || false,
        enablePolling: (parseInt(gsheetRefreshTime.value) !== 0),
        startRow: gsheetStartRow.value || 0,
        endRow: gsheetEndRow.value || undefined,
        startColumn: gsheetStartCol.value || 0,
        endColumn: gsheetEndCol.value || undefined
      });
    }
  }

  function addImportTab(tabOptions){
    importer.addImportTab(tabOptions);
  }

  function hideImportModal(){
    importModal.hide();
  }

  function showLiveData() {
    if (
      rows.length <= 1 ||
      confirm('This will clear your existing data. Continue?')
    ) {
      clear(true);

      liveDataInput.value = '';
      liveDataIntervalInput.value = '';
      liveDataTypeSelect.selectByIndex(0);

      highed.dom.style(gsheetFrame, {
        display: 'none'
      });

      highed.dom.style(container, {
        display: 'none'
      });

      highed.dom.style(liveDataFrame, {
        display: 'block'
      });
      importModal.hide();

      isInGSheetMode = false;
      isInLiveDataMode = true;
    }

  }

  function showGSheet() {
    if (
      rows.length <= 1 ||
      confirm('This will clear your existing data. Continue?')
    ) {
      clear(true);

      gsheetID.value = '';
      gsheetWorksheetID.value = '';
      gsheetRefreshTime.value = '';

      highed.dom.style(gsheetFrame, {
        display: 'block'
      });

      highed.dom.style(container, {
        display: 'none'
      });

      highed.dom.style(liveDataFrame, {
        display: 'none'
      });

      isInGSheetMode = true;
      isInLiveDataMode = false;
    }
  }

  function hideLiveData() {
    if (
      !liveDataInput.value ||
      confirm('Are you sure you want to remove your live data?')
    ) {
      // Should emit a gsheet clear

      events.emit('LoadLiveData', {
          url: ''
      });

      highed.dom.style(gsheetFrame, {
        display: 'none'
      });

      highed.dom.style(container, {
        display: 'block'
      });


      highed.dom.style(liveDataFrame, {
        display: 'none'
      });

      isInLiveDataMode = false;

      init();
    }
  }

  function hideGSheet() {
    if (
      !gsheetID.value ||
      confirm('Are you sure you want to detach the current spreadsheet?')
    ) {
      // Should emit a gsheet clear
      events.emit('LoadGSheet', {
        googleSpreadsheetKey: '',
        googleSpreadsheetWorksheet: false
      });

      highed.dom.style(gsheetFrame, {
        display: 'none'
      });

      highed.dom.style(container, {
        display: 'block'
      });

      highed.dom.style(liveDataFrame, {
        display: 'none'
      });
      isInGSheetMode = false;

      init();

      highed.emit('UIAction', 'DetachGoogleSheet');
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  importer.on('ImportCSV', function(data) {
    highed.emit('UIAction', 'ImportCSV');
    loadCSV(data);
  });

  importer.on('ImportLiveData', function(data) {
    isInLiveDataMode = true;
    showLiveData();
    //loadLiveDataFromURL(data.url);
  });

  importer.on('ImportChartSettings', function(settings, format) {
    // Do something with the data here
    events.emit('ImportChartSettings', settings, format);
    importModal.hide();
  });

  highed.dom.on(gsheetCancelButton, 'click', function() {
    hideGSheet();
    events.emit('CancelDataInput');
  });

  highed.dom.on(liveDataCancelButton, 'click', function() {
    hideLiveData();
    events.emit('CancelDataInput');
  });

  highed.dom.on(liveDataLoadButton, 'click', function() {
    loadLiveDataFromURL(liveDataInput.value, liveDataIntervalInput.value, detailValue || 'columnsURL');
  });

  highed.dom.on(gsheetLoadButton, 'click', function() {
    events.emit('LoadGSheet', {
      googleSpreadsheetKey: gsheetID.value,
      googleSpreadsheetWorksheet: gsheetWorksheetID.value || false,
      dataRefreshRate: gsheetRefreshTime.value || false,
      enablePolling: (parseInt(gsheetRefreshTime.value) !== 0),
      startRow: gsheetStartRow.value || 0,
      endRow: gsheetEndRow.value || Number.MAX_VALUE,
      startColumn: gsheetStartCol.value || 0,
      endColumn: gsheetEndCol.value || Number.MAX_VALUE
    });
  });

  highed.dom.on(weirdDataIgnore, 'click', hideDataImportError);

  highed.dom.on(weirdDataFix, 'click', function() {
    // Pop open a modal with the option of supplying a delimiter manually.
    var dropdownParent = highed.dom.cr('div'),
      dropdown = highed.DropDown(dropdownParent),
      okBtn = highed.dom.cr('button', 'highed-ok-button', 'Rerun Import'),
      nevermindBtn = highed.dom.cr('button', 'highed-ok-button', 'Nevermind'),
      selectedDelimiter = undefined;

    weirdDataModal.body.innerHTML = '';
    weirdDataModal.show();

    dropdown.addItems([
      {
        title: 'Tab',
        id: 'tab',
        select: function() {
          selectedDelimiter = '\t';
        }
      },
      {
        title: 'Comma',
        id: 'comma',
        select: function() {
          selectedDelimiter = ',';
        }
      },
      {
        title: 'Semicolon',
        id: 'semicolon',
        select: function() {
          selectedDelimiter = ';';
        }
      }
    ]);

    dropdown.selectByIndex(0);

    highed.dom.ap(
      weirdDataModal.body,
      highed.dom.cr('h3', '', 'Data Import Fixer'),
      highed.dom.cr(
        'div',
        'highed-dtable-weird-data-body',
        [
          'We could not properly determine how your columns are separated.',
          '<br/><br/>',
          'Usually this is caused by commas as thousand separators,',
          'or something similar. Please choose which delimiter you want to use,',
          'and click the Rerun button.<br/><br/>'
        ].join(' ')
      ),
      dropdownParent,
      highed.dom.style(okBtn, {
        marginRight: '5px'
      }),
      nevermindBtn
    );

    highed.dom.on(nevermindBtn, 'click', weirdDataModal.hide);

    highed.dom.on(okBtn, 'click', function() {
      weirdDataModal.hide();
      hideDataImportError();

      loadCSV({
        csv: rawCSV,
        delimiter: selectedDelimiter
      });
    });
  });

  ////////////////////////////////////////////////////////////////////////////

  dropZone.innerHTML =
    'DROP CSV FILES HERE OR ON THE TABLE!<br/>' +
    '<span class="highed-dtable-drop-zone-small">...you can also paste CSV or Excel data into any cell</span>';

  table.cellPadding = 0;
  table.cellSpacing = 0;

  highed.dom.on(frame, 'scroll', function(e) {
    leftBar.style.top = -frame.scrollTop + 'px';
    topBar.style.left = -frame.scrollLeft + 'px';
  });

  parent = highed.dom.get(parent);
  highed.dom.ap(
    parent,
    gsheetFrame,
    liveDataFrame,
    highed.dom.ap(
      container,
      highed.dom.ap(
        frame,
        highed.dom.ap(table, colgroup, thead, tbody),
        tableTail,
        dropZone
      ),
      leftBar,
      topBar,
      highed.dom.ap(topLeftPanel, checkAll)
    ),
    highed.dom.ap(
      weirdDataContainer,
      highed.dom.cr(
        'div',
        'highed-dtable-weird-data-body',
        [
          'Uh-oh! It looks like our data importer may have had some issues',
          'processing your data.',
          'Usually this means that we were unable to deduce how the columns',
          'are separated.'
        ].join(' ')
      ),
      weirdDataIgnore,
      weirdDataFix
    ),

    loadIndicator
  );

  gsheetID.placeholder = 'Spreadsheet ID';
  gsheetWorksheetID.placeholder = 'Worksheet (leave blank for first)';
  gsheetRefreshTime.placeholder = 'Refresh Time (leave blank for no refresh)';

  highed.dom.ap(
    gsheetFrame,
    highed.dom.ap(
      gsheetContainer,
      highed.dom.cr(
        'div',
        'highed-dtable-gsheet-heading',
        'Google Spreadsheet'
      ),
      highed.dom.ap(
        highed.dom.cr('div', 'highed-dtable-gsheet-inner'),
        // highed.dom.cr('div', 'highed-dtable-gsheet-centered', 'You have loaded a Google Spreadsheet.'),
        // highed.dom.cr(
        //   'div',
        //   'highed-dtable-gsheet-desc',
        //   [
        //     'Google Spreadsheets are referenced, meaning that the data is imported',
        //     'on the fly. When viewing the chart, the latest version of your sheet',
        //     'will always be used!<br/><br/>'
        //   ].join(' ')
        // ),
        highed.dom.cr(
          'div',
          'highed-dtable-gsheet-label',
          'Google Spreadsheet ID'
        ),
        highed.dom.ap(highed.dom.cr('div'), gsheetID),
        highed.dom.ap(
          highed.dom.cr('table', 'highed-stretch'),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Worksheet'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Refresh Time (Seconds)')
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetWorksheetID),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetRefreshTime)
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Start Row'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'End Row')
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetStartRow),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetEndRow)
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Start Column'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'End Column')
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetStartCol),
            highed.dom.ap(highed.dom.cr('td', '', ''), gsheetEndCol)
          )
        ),
        highed.dom.ap(
          highed.dom.cr('div'),
          gsheetLoadButton,
          gsheetCancelButton
        ),
        highed.dom.cr(
          'div',
          '',
          [
            'When using Google Spreadsheet, Highcharts references the sheet directly.<br/><br/>',
            'This means that the published chart always loads the latest version of the sheet.<br/><br/>',

            'For more information on how to set up your spreadsheet, visit',
            '<a target="_blank" href="https://www.highcharts.com/cloud/import-data/how-to-set-up-a-google-spreadsheet-file">the documentation</a>.'
          ].join(' ')
        )
      )
    )
  );

  liveDataTypeSelect.addItems([
    {id: 'columnsURL', title: "JSON (Column Ordered)"},
    {id: 'rowsURL', title: "JSON (Row Ordered)"},
    {id: 'csvURL', title: "CSV"}
  ]
  );

  liveDataTypeSelect.on('Change', function(selected) {
    //detailIndex = selected.index();
    detailValue = selected.id();
    //liveDataTypeSelect.selectById(detailValue || 'json');
  });

  highed.dom.ap(liveDataTypeMasterNode, liveDataTypeSelect.container);
  highed.dom.style(liveDataTypeMasterNode, {
    display: 'block'
  });

  highed.dom.ap(
    liveDataFrame,
    highed.dom.ap(
      liveDataContainer,
      highed.dom.cr(
        'div',
        'highed-dtable-gsheet-heading',
        'Live Data'
      ),
      highed.dom.ap(
        highed.dom.cr('div', 'highed-dtable-gsheet-inner'),
        // highed.dom.cr('div', 'highed-dtable-gsheet-centered', 'You have loaded a Google Spreadsheet.'),
        // highed.dom.cr(
        //   'div',
        //   'highed-dtable-gsheet-desc',
        //   [
        //     'Google Spreadsheets are referenced, meaning that the data is imported',
        //     'on the fly. When viewing the chart, the latest version of your sheet',
        //     'will always be used!<br/><br/>'
        //   ].join(' ')
        // ),
        highed.dom.cr(
          'div',
          'highed-dtable-gsheet-label',
          'URL'
        ),
        highed.dom.ap(highed.dom.cr('div'), liveDataInput),

        highed.dom.ap(
          highed.dom.cr('table', 'highed-stretch'),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Chart Refresh Time (Seconds)'),
            highed.dom.cr('td', 'highed-dtable-gsheet-label', 'Data Type')
          ),
          highed.dom.ap(
            highed.dom.cr('tr'),
            highed.dom.ap(highed.dom.cr('td', '', ''), liveDataIntervalInput),
            highed.dom.ap(highed.dom.cr('td', '', ''), liveDataTypeMasterNode)
          )
        ),

        highed.dom.ap(
          highed.dom.cr('div'),
          liveDataLoadButton,
          liveDataCancelButton
        ),
        highed.dom.cr('div', '', [
          'Live data needs a url to your JSON data to reference.<br/><br/>',
          'This means that the published chart always loads the latest version of your data.<br/><br/>'
        ].join(' '))
      )
    )
  );

  function getRawCSV() {
    return rawCSV;
  }

  ////////////////////////////////////////////////////////////////////////////

  toolbar = highed.Toolbar(container, {
    additionalCSS: ['highed-dtable-toolbar']
  });

  toolbar.addButton({
    css: 'fa-plus-circle',
    tooltip: 'Add row',
    title: highed.L('dgAddRow'),
    click: function(e) {
      highed.emit('UIAction', 'BtnAddRow');
      addRowCtx.show(e.clientX, e.clientY);
    }
  });

  toolbar.addButton({
    css: 'fa-file-o',
    tooltip: 'Reset',
    title: highed.L('dgNewBtn'),
    click: function() {
      highed.emit('UIAction', 'BtnFlushData');
      if (confirm('Start from scratch?')) {
        highed.emit('UIAction', 'FlushDataConfirm');
        init();
        emitChanged();
      }
    }
  });

  toolbar.addButton({
    tooltip: 'Import Google Spreadsheet',
    title: 'Google Sheet',
    click: function() {
      highed.emit('UIAction', 'BtnGoogleSheet');
      showGSheet();
    }
  });

  toolbar.addButton({
    css: 'fa-floppy-o',
    title: highed.L('dgExportBtn'),
    tooltip: 'Download data',
    click: function(e) {
      highed.emit('UIAction', 'BtnExportData');
      saveCtx.show(e.clientX, e.clientY);
    }
  });

  toolbar.addButton({
    title: highed.L('dgImportBtn'),
    click: function() {
      highed.emit('UIAction', 'BtnImport');
      importModal.show();
      importer.resize();
    }
  });

  highed.dom.on(checkAll, 'change', function() {
    rows.forEach(function(row) {
      row.check(checkAll.checked);
    });
  });

  highed.dom.ap(
    toolbar.left,
    highed.dom.cr(
      'div',
      'highed-dtable-toolbar-label',
      highed.L('dgWithSelected') + ' '
    )
  );

  toolbar.addIcon(
    {
      css: 'fa-trash',
      title: 'Delete row(s)',
      click: function() {
        highed.emit('UIAction', 'BtnDeleteRow');

        if (!confirm(highed.L('dgDeleteRow'))) {
          return;
        }

        highed.emit('UIAction', 'DeleteRowConfirm');

        rows.forEach(function(row) {
          if (row.isChecked()) {
            row.destroy();
            emitChanged();
          }
        });
      }
    },
    'left'
  );

  // toolbar.addIcon(
  //   {
  //     css: 'fa-clone',
  //     title: 'Clone Rows',
  //     click: function() {
  //       importModal.show();
  //       importer.resize();
  //     }
  //   },
  //   'left'
  // );

  ////////////////////////////////////////////////////////////////////////////

  highed.ready(function() {
    init();
  });

  ////////////////////////////////////////////////////////////////////////////

  return {
    toolbar: toolbar,
    sortRows: sortRows,
    clear: clear,
    addRow: addRow,
    insCol: insertCol,
    delCol: delCol,
    loadCSV: loadCSV,
    getRawCSV: getRawCSV,
    toData: toData,
    toCSV: toCSV,
    toDataSeries: toDataSeries,
    getHeaderTextArr: getHeaderTextArr,
    addImportTab: addImportTab,
    hideImportModal: hideImportModal,
    initGSheet: initGSheet,
    on: events.on,
    resize: resize,
    loadLiveDataFromURL: loadLiveDataFromURL,
    loadLiveDataPanel: loadLiveDataPanel
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

highed.Toolbox = function(parent, attr) {
  var events = highed.events(),
    container = highed.dom.cr(
      'div',
      'highed-transition highed-toolbox highed-box-size'
    ),
    bar = highed.dom.cr('div', 'highed-toolbox-bar highed-box-size'),
    body = highed.dom.cr(
      'div',
      'highed-toolbox-body highed-box-size highed-transition'
    ),
    activeTimeout,
    expanded = false,
    activeItem = false,
    properties = highed.merge(
      {
        animate: true
      },
      attr
    ),
    liveDiv = highed.dom.cr(
      'div',
      'highed-toolbox-live',
      'LIVE'
    );

  function addEntry(def) {
    var props = highed.merge(
        {
          title: 'Tooltip Missing',
          icon: 'fa-trash',
          width: 200
        },
        def
      ),
      entryEvents = highed.events(),
      title = highed.dom.cr('div', 'highed-toolbox-body-title', props.title),
      contents = highed.dom.cr(
        'div',
        'highed-box-size highed-toolbox-inner-body'
      ),
      userContents = highed.dom.cr(
        'div',
        'highed-box-size highed-toolbox-user-contents'
      ),
      helpIcon = highed.dom.cr(
        'div',
        'highed-toolbox-help highed-icon fa fa-question-circle'
      ),
      iconClass = 'highed-box-size highed-toolbox-bar-icon fa ' + props.icon,
      icon = highed.dom.cr('div', iconClass),
      helpModal = highed.HelpModal(props.help || []),
      resizeTimeout,
      exports = {};

    if (def.iconOnly) {
      props.width = 0;
    }

    highed.dom.on(icon, 'click', function() {
      entryEvents.emit('Click');
    });

    highed.dom.on(icon, 'mouseover', function(e) {
      var pos = highed.dom.pos(icon),
        size = highed.dom.size(icon),
        ppos = highed.dom.pos(parent);

      pos.y += ppos.y;

      clearTimeout(activeTimeout);

      activeTimeout = setTimeout(function() {
        highed.Tooltip(pos.x + 10 + size.w, pos.y + size.h, def.title);
      }, 800);
    });

    highed.dom.on(icon, 'mouseout', function() {
      clearTimeout(activeTimeout);
      highed.hideAllTooltips();
    });

    function resizeBody() {
      var bsize = highed.dom.size(body),
        tsize = highed.dom.size(title),
        size = {
          w: bsize.w,
          h: bsize.h - tsize.h
        };

      highed.dom.style(contents, {
        width: size.w + 'px',
        height: size.h + 'px'
      });

      return size;
    }

    function expand() {
      var bsize = highed.dom.size(bar);
      var newWidth = bsize.w + props.width;

      if (expanded && activeItem === exports) {
        return;
      }

      if (props.iconOnly) {
        return;
      }

      if (activeItem) {
        activeItem.disselect();
      }

      entryEvents.emit('BeforeExpand');

      body.innerHTML = '';
      highed.dom.ap(body, contents);

      highed.dom.style(body, {
        width: props.width + 'px',
        height: bsize.h + 'px',
        opacity: 1
      });

      highed.dom.style(container, {
        width: newWidth + 'px'
      });

      events.emit('BeforeResize', newWidth);

      expanded = true;

      setTimeout(function() {
        var height = resizeBody().h;

        events.emit('Expanded', exports, newWidth);
        entryEvents.emit('Expanded', newWidth, height - 20);
      }, 300);

      if (props.iconOnly) {
        activeItem = false;
      } else {
        icon.className = iconClass + ' highed-toolbox-bar-icon-sel';
        activeItem = exports;
      }

      highed.dom.style(helpIcon, {
        display: props.iconOnly ? 'none' : 'block'
      });

      highed.emit('UIAction', 'ToolboxNavigation', props.title);
    }

    function collapse() {
      var newWidth = highed.dom.size(bar).w;

      if (expanded) {
        highed.dom.style(body, {
          width: '0px',
          opacity: 0.1
        });

        highed.dom.style(container, {
          width: newWidth + 'px'
        });

        events.emit('BeforeResize', newWidth);

        disselect();
        expanded = false;
        activeItem = false;

        highed.dom.style(helpIcon, {
          display: 'none'
        });
      }
    }

    function toggle() {
      if (activeItem === exports) {
        collapse();
      } else {
        expand();
      }
    }

    function disselect() {
      icon.className = iconClass;
    }

    function showHelp() {
      highed.emit('UIAction', 'IconHelp', props.title);
      helpModal.show();
    }

    highed.dom.on(helpIcon, 'click', showHelp);
    highed.dom.on(icon, 'click', toggle);
    highed.dom.ap(bar, icon);
    highed.dom.ap(contents, (props.showLiveStatus ? highed.dom.ap(title, liveDiv, helpIcon) :  highed.dom.ap(title, helpIcon)), userContents);

    function reflowEverything() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        highed.dom.style(body, { height: '' });
        if (expanded) {
          var height = resizeBody().h;
          entryEvents.emit('Expanded', highed.dom.size(bar), height - 20);
        }
      }, 100);
    }

    highed.dom.on(window, 'resize', reflowEverything);

    exports = {
      on: entryEvents.on,
      expand: expand,
      collapse: collapse,
      body: userContents,
      disselect: disselect
    };

    return exports;
  }

  function width() {
    var bodySize = highed.dom.size(body),
      barSize = highed.dom.size(bar);

    return bodySize.w + barSize.w;
  }

  function clear() {
    bar.innerHTML = '';
    body.innerHTML = '';
  }

  function showLiveStatus() {
    highed.dom.style(liveDiv, {
      display: 'inline'
    });
  }

  function hideLiveStatus() {
    highed.dom.style(liveDiv, {
      display: 'none'
    });
  }

  highed.dom.ap(parent, highed.dom.ap(container, bar, body));

  return {
    clear: clear,
    on: events.on,
    addEntry: addEntry,
    width: width,
    showLiveStatus: showLiveStatus,
    hideLiveStatus: hideLiveStatus
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

highed.HelpModal = function(items) {
  var active = false,
    nav = highed.dom.cr('div', 'highed-help-nav'),
    body = highed.dom.cr('div'),
    counter = highed.dom.cr('div', 'highed-help-counter'),
    modal = highed.OverlayModal(false, {
      width: 600,
      height: 600
    });

  items.forEach(function(item, i) {
    var container = highed.dom.cr('div'),
      heading = highed.dom.cr('div', 'highed-toolbox-body-title', item.title),
      gif = highed.dom.cr('div', 'highed-help-gif'),
      desc = highed.dom.cr('div', 'highed-scrollbar highed-help-desc'),
      activate = highed.dom.cr('span', 'highed-icon fa fa-circle-o');

    if (highed.isArr(item.description)) {
      item.description = item.description.join(' ');
    }

    desc.innerHTML = item.description;
    if (item.gif) {
      item.gif = highed.option('helpImgPath') + item.gif;

      highed.dom.style(gif, {
        'background-image': 'url("' + item.gif + '")'
      });
    } else {
      highed.dom.style(gif, { display: 'none' });
    }

    function makeActive() {
      if (active) {
        active.className = 'highed-icon fa fa-circle-o';
      }

      body.innerHTML = '';
      activate.className = 'highed-icon fa fa-circle';
      highed.dom.ap(body, container);
      active = activate;

      counter.innerHTML = i + 1 + '/' + items.length;
    }

    highed.dom.on(activate, 'click', makeActive);

    highed.dom.ap(container, heading, gif, desc);

    highed.dom.ap(nav, activate);

    if (i === 0) {
      makeActive();
    }
  });

  if (items.length < 2) {
    highed.dom.style([nav, counter], {
      display: 'none'
    });
  }

  highed.dom.ap(modal.body, body, nav, counter);

  return {
    show: modal.show
  };
};

/*

Highcharts Editor v<%= version %>

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

// @format

highed.meta.optionsExtended = {
  options: {
    'option.cat.title': [
      {
        text: 'option.subcat.titles',
        options: [
          {
            id: 'title--text',
            pid: 'title.text',
            dataType: 'string',
            context: 'General',
            defaults: 'Chart title',
            parent: 'title'
          },
          {
            id: 'subtitle--text',
            pid: 'subtitle.text',
            dataType: 'string',
            context: 'General',
            parent: 'subtitle'
          },
          {
            id: 'yAxis-title--text',
            dataIndex: 0,
            pid: 'yAxis.title.text',
            dataType: 'string',
            context: 'General',
            defaults: 'Values',
            parent: 'yAxis-title'
          }
        ]
      }
    ],
    'option.cat.general': [
      {
        text: 'option.subcat.size',
        options: [
          {
            id: 'chart--width',
            custom: {
              minValue: 50,
              maxValue: 5000,
              step: 10
            },
            pid: 'chart.width',
            dataType: 'number',
            context: 'General',
            defaults: 'null',
            parent: 'chart'
          },
          {
            id: 'chart--height',
            custom: {
              minValue: 50,
              maxValue: 5000,
              step: 10
            },
            pid: 'chart.height',
            dataType: 'number',
            context: 'General',
            defaults: 'null',
            parent: 'chart'
          }
        ]
      },
      {
        text: 'option.subcat.interaction',
        options: [
          {
            id: 'chart--zoomType',
            pid: 'chart.zoomType',
            dataType: 'string',
            context: 'General',
            parent: 'chart',
            values: '[null, "x", "y", "xy"]'
          },
          {
            id: 'chart--polar',
            pid: 'chart.polar',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'chart'
          }
        ]
      }
    ],
    'option.cat.appearance': [
      {
        text: 'option.subcat.fonts',
        options: [
          {
            id: 'chart--style',
            dataType: 'font',
            pid: 'chart.style',
            context: 'General',
            defaults:
              '{"fontFamily":"\\"Lucida Grande\\", \\"Lucida Sans Unicode\\", Verdana, Arial, Helvetica, sans-serif","fontSize":"12px"}',
            parent: 'chart'
          }
        ]
      },
      {
        text: 'option.subcat.titlestyle',
        options: [
          {
            id: 'title--style',
            dataType: 'font',
            pid: 'title.style',
            context: 'General',
            defaults: '{ "color": "#333333", "fontSize": "18px" }',
            parent: 'title'
          },
          {
            id: 'subtitle--style',
            dataType: 'font',
            pid: 'subtitle.style',
            context: 'General',
            defaults: '{ "color": "#666666" }',
            parent: 'subtitle'
          }
        ]
      },
      {
        text: 'option.subcat.seriescolors',
        options: [
          {
            id: 'colors',
            pid: 'colors',
            dataType: 'array<color>',
            context: 'General',
            defaults:
              '[ "#7cb5ec" , "#434348" , "#90ed7d" , "#f7a35c" , "#8085e9" , "#f15c80" , "#e4d354" , "#2b908f" , "#f45b5b" , "#91e8e1"]'
          }
        ]
      },
      {
        text: 'option.subcat.chartarea',
        options: [
          {
            id: 'chart--backgroundColor',
            pid: 'chart.backgroundColor',
            dataType: 'color',
            context: 'General',
            defaults: '#FFFFFF',
            parent: 'chart'
          },
          {
            id: 'chart--borderWidth',
            custom: {
              minValue: 0
            },
            pid: 'chart.borderWidth',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'chart'
          },
          {
            id: 'chart--borderRadius',
            custom: {
              minValue: 0
            },
            pid: 'chart.borderRadius',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'chart'
          },
          {
            id: 'chart--borderColor',
            pid: 'chart.borderColor',
            dataType: 'color',
            context: 'General',
            defaults: '#335cad',
            parent: 'chart'
          }
        ]
      },
      {
        text: 'option.subcat.plotarea',
        options: [
          {
            id: 'chart--plotBackgroundColor',
            pid: 'chart.plotBackgroundColor',
            dataType: 'color',
            context: 'General',
            parent: 'chart'
          },
          {
            id: 'chart--plotBackgroundImage',
            pid: 'chart.plotBackgroundImage',
            dataType: 'string',
            context: 'General',
            parent: 'chart'
          },
          {
            id: 'chart--plotBorderWidth',
            pid: 'chart.plotBorderWidth',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'chart'
          },
          {
            id: 'chart--plotBorderColor',
            pid: 'chart.plotBorderColor',
            dataType: 'color',
            context: 'General',
            defaults: '#cccccc',
            parent: 'chart'
          }
        ]
      }
    ],
    'option.cat.axes': [
      {
        text: 'option.subcat.axessetup',
        options: [
          {
            id: 'chart--inverted',
            pid: 'chart.inverted',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'chart'
          }
        ]
      },
      {
        id: 'xAxis',
        text: 'option.subcat.xaxis',
        options: [
          {
            id: 'xAxis-title--style',
            dataType: 'font',
            dataIndex: 0,
            pid: 'xAxis.title.style',
            context: 'General',
            defaults: '{ "color": "#666666" }',
            parent: 'xAxis-title'
          },
          {
            id: 'xAxis-title--text',
            dataIndex: 0,
            pid: 'xAxis.title.text',
            dataType: 'string',
            context: 'General',
            parent: 'xAxis-title'
          },
          {
            id: 'xAxis--type',
            dataIndex: 0,
            pid: 'xAxis.type',
            dataType: 'string',
            context: 'General',
            defaults: 'linear',
            parent: 'xAxis',
            values: '["linear", "logarithmic", "datetime", "category"]'
          },
          {
            id: 'xAxis--opposite',
            dataIndex: 0,
            pid: 'xAxis.opposite',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'xAxis'
          },
          {
            id: 'xAxis--reversed',
            dataIndex: 0,
            pid: 'xAxis.reversed',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'xAxis'
          },
          {
            id: 'xAxis-labels--format',
            dataIndex: 0,
            pid: 'xAxis.labels.format',
            dataType: 'string',
            context: 'General',
            defaults: '{value}',
            parent: 'xAxis-labels'
          }
        ]
      },
      {
        id: 'yAxis',
        text: 'option.subcat.yaxis',
        options: [
          {
            id: 'yAxis-title--style',
            dataType: 'font',
            dataIndex: 0,
            pid: 'yAxis.title.style',
            context: 'General',
            defaults: '{ "color": "#666666" }',
            parent: 'yAxis-title'
          },
          {
            id: 'yAxis--type',
            dataIndex: 0,
            pid: 'yAxis.type',
            dataType: 'string',
            context: 'General',
            defaults: 'linear',
            parent: 'yAxis',
            values: '["linear", "logarithmic", "datetime", "category"]'
          },
          {
            id: 'yAxis--opposite',
            dataIndex: 0,
            pid: 'yAxis.opposite',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'yAxis'
          },
          {
            id: 'yAxis--reversed',
            dataIndex: 0,
            pid: 'yAxis.reversed',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'yAxis'
          },
          {
            id: 'yAxis-labels--format',
            dataIndex: 0,
            pid: 'yAxis.labels.format',
            dataType: 'string',
            context: 'General',
            defaults: '{value}',
            parent: 'yAxis-labels'
          }
        ]
      }
    ],
    'option.cat.series': [
      {
        id: 'series',
        array: true,
        text: 'option.cat.series',
        controlledBy: {
          title: 'Select Series',
          options: 'series',
          optionsTitle: 'name'
        },
        filteredBy: 'series--type',
        options: [
          {
            id: 'series--type',
            pid: 'series.type',
            dataType: 'string',
            context: 'General',
            parent: 'series<treemap>',
            values:
              '[null, "line", "spline", "column", "area", "areaspline", "pie", "arearange", "areasplinerange", "boxplot", "bubble", "columnrange", "errorbar", "funnel", "gauge", "scatter", "waterfall"]',
            subType: [
              'treemap',
              'scatter',
              'line',
              'gauge',
              'heatmap',
              'spline',
              'funnel',
              'areaspline',
              'area',
              'bar',
              'bubble',
              'areasplinerange',
              'boxplot',
              'pie',
              'arearange',
              'column',
              'waterfall',
              'columnrange',
              'pyramid',
              'polygon',
              'solidgauge',
              'errorbar'
            ],
            subTypeDefaults: {}
          },
          {
            id: 'series--color',
            pid: 'series.color',
            dataType: 'color',
            context: 'General',
            defaults: 'null',
            parent: 'series<boxplot>',
            subType: [
              'boxplot',
              'column',
              'waterfall',
              'columnrange',
              'heatmap',
              'area',
              'scatter',
              'bar',
              'treemap',
              'arearange',
              'bubble',
              'errorbar',
              'spline',
              'polygon',
              'line',
              'gauge',
              'areaspline',
              'areasplinerange'
            ],
            subTypeDefaults: {
              heatmap: 'null',
              treemap: 'null',
              errorbar: '#000000'
            }
          },
          {
            id: 'series--negativeColor',
            pid: 'series.negativeColor',
            dataType: 'color',
            context: 'General',
            defaults: 'null',
            parent: 'series<gauge>',
            subType: [
              'gauge',
              'arearange',
              'areasplinerange',
              'line',
              'errorbar',
              'boxplot',
              'areaspline',
              'spline',
              'bar',
              'scatter',
              'polygon',
              'bubble',
              'area',
              'column'
            ],
            subTypeDefaults: {
              arearange: 'null',
              areasplinerange: 'null',
              line: 'null',
              errorbar: 'null',
              boxplot: 'null',
              areaspline: 'null',
              spline: 'null',
              bar: 'null',
              scatter: 'null',
              polygon: 'null',
              bubble: 'null',
              area: 'null',
              column: 'null'
            }
          },
          {
            id: 'series--colorByPoint',
            pid: 'series.colorByPoint',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'series<treemap>',
            subType: [
              'treemap',
              'heatmap',
              'column',
              'errorbar',
              'columnrange',
              'boxplot',
              'bar',
              'waterfall'
            ],
            subTypeDefaults: {
              heatmap: 'false',
              column: 'false',
              errorbar: 'false',
              columnrange: 'false',
              boxplot: 'false',
              bar: 'false',
              waterfall: 'false'
            }
          },
          {
            id: 'series--dashStyle',
            pid: 'series.dashStyle',
            dataType: 'string',
            context: 'General',
            defaults: 'Solid',
            parent: 'series<areasplinerange>',
            values:
              '["Solid", "ShortDash", "ShortDot", "ShortDashDot", "ShortDashDotDot", "Dot", "Dash" ,"LongDash", "DashDot", "LongDashDot", "LongDashDotDot"]',
            subType: [
              'areasplinerange',
              'polygon',
              'areaspline',
              'spline',
              'scatter',
              'area',
              'bubble',
              'arearange',
              'waterfall',
              'line'
            ],
            subTypeDefaults: {
              polygon: 'Solid',
              areaspline: 'Solid',
              spline: 'Solid',
              scatter: 'Solid',
              area: 'Solid',
              bubble: 'Solid',
              arearange: 'Solid',
              waterfall: 'Dot',
              line: 'Solid'
            }
          },
          {
            id: 'series-marker--enabled',
            pid: 'series.marker.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'null',
            parent: 'series<bubble>-marker',
            subType: [
              'bubble',
              'area',
              'scatter',
              'areaspline',
              'spline',
              'polygon',
              'line'
            ],
            subTypeDefaults: {
              area: 'null',
              scatter: 'null',
              areaspline: 'null',
              spline: 'null',
              polygon: 'null',
              line: 'null'
            }
          },
          {
            id: 'series-marker--symbol',
            pid: 'series.marker.symbol',
            dataType: 'string',
            context: 'General',
            parent: 'series<bubble>-marker',
            values:
              '[null, "circle", "square", "diamond", "triangle", "triangle-down"]',
            subType: [
              'bubble',
              'polygon',
              'line',
              'scatter',
              'spline',
              'area',
              'areaspline'
            ],
            subTypeDefaults: {}
          }

          // {
          //   id: 'series-label--enabled',
          //   pid: 'series.label.enabled',
          //   defaults: 'true',
          //   dataType: 'boolean',
          //   subType: [
          //     'line',
          //     'spline',
          //     'area',
          //     'arearange',
          //     'areaspline',
          //     'waterfall',
          //     'areasplinerange'
          //   ],
          //   subTypeDefaults: {}
          // }

          // {
          // id: 'series-label--style',
          // pid: 'series.label.style',
          // dataType: 'font'
          // }
        ]
      }
    ],
    'option.cat.labels': [
      {
        id: 'data-labels',
        text: 'option.subcat.labels',
        options: [
          {
            id: 'plotOptions-series-dataLabels--enabled',
            pid: 'plotOptions.series.dataLabels.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'plotOptions-series-dataLabels'
          },
          {
            id: 'plotOptions-series-dataLabels--style',
            pid: 'plotOptions.series.dataLabels.style',
            dataType: 'cssobject',
            context: 'General',
            defaults:
              '{"color": "contrast", "fontSize": "11px", "fontWeight": "bold", "textOutline": "1px 1px contrast" }',
            parent: 'plotOptions-series-dataLabels'
          }
        ]
      }
    ],
    'option.cat.legend': [
      {
        text: 'option.subcat.general',
        options: [
          {
            id: 'legend--enabled',
            pid: 'legend.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'true',
            parent: 'legend'
          },
          {
            id: 'legend--layout',
            pid: 'legend.layout',
            dataType: 'string',
            context: 'General',
            defaults: 'horizontal',
            parent: 'legend',
            values: '["horizontal", "vertical"]'
          }
        ]
      },
      {
        text: 'option.subcat.placement',
        options: [
          {
            id: 'legend--align',
            pid: 'legend.align',
            dataType: 'string',
            context: 'General',
            defaults: 'center',
            parent: 'legend',
            values: '["left", "center", "right"]'
          },
          {
            id: 'legend--x',
            pid: 'legend.x',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'legend'
          },
          {
            id: 'legend--verticalAlign',
            pid: 'legend.verticalAlign',
            dataType: 'string',
            context: 'General',
            defaults: 'bottom',
            parent: 'legend',
            values: '["top", "middle", "bottom"]'
          },
          {
            id: 'legend--y',
            pid: 'legend.y',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'legend'
          },
          {
            id: 'legend--floating',
            pid: 'legend.floating',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'legend'
          }
        ]
      },
      {
        text: 'option.subcat.legendappearance',
        options: [
          {
            id: 'legend--itemStyle',
            dataType: 'font',
            pid: 'legend.itemStyle',
            context: 'General',
            defaults:
              '{ "color": "#333333", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold" }',
            parent: 'legend'
          },
          {
            id: 'legend--itemHiddenStyle',
            dataType: 'font',
            pid: 'legend.itemHiddenStyle',
            context: 'General',
            defaults: '{ "color": "#cccccc" }',
            parent: 'legend'
          },
          {
            id: 'legend--backgroundColor',
            pid: 'legend.backgroundColor',
            dataType: 'color',
            context: 'General',
            parent: 'legend'
          },
          {
            id: 'legend--borderWidth',
            pid: 'legend.borderWidth',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'legend'
          },
          {
            id: 'legend--borderRadius',
            pid: 'legend.borderRadius',
            dataType: 'number',
            context: 'General',
            defaults: '0',
            parent: 'legend'
          },
          {
            id: 'legend--borderColor',
            pid: 'legend.borderColor',
            dataType: 'color',
            context: 'General',
            defaults: '#999999',
            parent: 'legend'
          }
        ]
      }
    ],
    'option.cat.tooltip': [
      {
        text: 'option.subcat.general',
        options: [
          {
            id: 'tooltip--enabled',
            pid: 'tooltip.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'true',
            parent: 'tooltip'
          },
          {
            id: 'tooltip--shared',
            pid: 'tooltip.shared',
            dataType: 'boolean',
            context: 'General',
            defaults: 'false',
            parent: 'tooltip'
          }
        ]
      },
      {
        text: 'option.subcat.colorborder',
        options: [
          {
            id: 'tooltip--backgroundColor',
            pid: 'tooltip.backgroundColor',
            dataType: 'color',
            context: 'General',
            defaults: 'rgba(247,247,247,0.85)',
            parent: 'tooltip'
          },
          {
            id: 'tooltip--borderWidth',
            custom: {
              minValue: 0
            },
            pid: 'tooltip.borderWidth',
            dataType: 'number',
            context: 'General',
            defaults: '1',
            parent: 'tooltip'
          },
          {
            id: 'tooltip--borderRadius',
            custom: {
              minValue: 0
            },
            pid: 'tooltip.borderRadius',
            dataType: 'number',
            context: 'General',
            defaults: '3',
            parent: 'tooltip'
          },
          {
            id: 'tooltip--borderColor',
            pid: 'tooltip.borderColor',
            dataType: 'color',
            context: 'General',
            defaults: 'null',
            parent: 'tooltip'
          }
        ]
      }
    ],
    'option.cat.exporting': [
      {
        text: 'option.cat.exporting',
        options: [
          {
            id: 'exporting--enabled',
            pid: 'exporting.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'true',
            parent: 'exporting'
          },
          {
            id: 'exporting--sourceWidth',
            custom: {
              minValue: 10,
              maxValue: 2000,
              step: 10
            },
            pid: 'exporting.sourceWidth',
            dataType: 'number',
            context: 'General',
            parent: 'exporting',
            values: ''
          },
          {
            id: 'exporting--scale',
            custom: {
              minValue: 1,
              maxValue: 4
            },
            pid: 'exporting.scale',
            dataType: 'number',
            context: 'General',
            defaults: '2',
            parent: 'exporting',
            values: ''
          }
        ]
      }
    ],
    'option.cat.localization': [
      {
        text: 'option.subcat.numberformat',
        options: [
          {
            id: 'lang--decimalPoint',
            pid: 'lang.decimalPoint',
            dataType: 'string',
            context: 'General',
            defaults: '.',
            parent: 'lang'
          },
          {
            id: 'lang--thousandsSep',
            pid: 'lang.thousandsSep',
            dataType: 'string',
            context: 'General',
            defaults: ' ',
            parent: 'lang'
          }
        ]
      },
      {
        text: 'option.subcat.exportbutton',
        options: [
          {
            id: 'lang--contextButtonTitle',
            pid: 'lang.contextButtonTitle',
            dataType: 'string',
            context: 'General',
            defaults: 'Chart context menu',
            parent: 'lang',
            values: ''
          },
          {
            id: 'lang--printChart',
            pid: 'lang.printChart',
            dataType: 'string',
            context: 'General',
            defaults: 'Print chart',
            parent: 'lang',
            values: ''
          },
          {
            id: 'lang--downloadPNG',
            pid: 'lang.downloadPNG',
            dataType: 'string',
            context: 'General',
            defaults: 'Download PNG image',
            parent: 'lang'
          },
          {
            id: 'lang--downloadJPEG',
            pid: 'lang.downloadJPEG',
            dataType: 'string',
            context: 'General',
            defaults: 'Download JPEG image',
            parent: 'lang'
          },
          {
            id: 'lang--downloadPDF',
            pid: 'lang.downloadPDF',
            dataType: 'string',
            context: 'General',
            defaults: 'Download PDF document',
            parent: 'lang'
          },
          {
            id: 'lang--downloadSVG',
            pid: 'lang.downloadSVG',
            dataType: 'string',
            context: 'General',
            defaults: 'Download SVG vector image',
            parent: 'lang'
          }
        ]
      },
      {
        text: 'option.subcat.zoombutton',
        options: [
          {
            id: 'lang--resetZoom',
            pid: 'lang.resetZoom',
            dataType: 'string',
            context: 'General',
            defaults: 'Reset zoom',
            parent: 'lang'
          }
        ]
      }
    ],
    'option.cat.credits': [
      {
        text: 'option.cat.credits',
        options: [
          {
            id: 'credits--enabled',
            pid: 'credits.enabled',
            dataType: 'boolean',
            context: 'General',
            defaults: 'true',
            parent: 'credits'
          },
          {
            id: 'credits--text',
            pid: 'credits.text',
            dataType: 'string',
            context: 'General',
            defaults: 'Highcharts.com',
            parent: 'credits'
          },
          {
            id: 'credits--href',
            pid: 'credits.href',
            dataType: 'string',
            context: 'General',
            defaults: 'http://www.highcharts.com',
            parent: 'credits'
          }
        ]
      }
    ]
  }
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

highed.meta.colors = [
  //Red
  '#F44336',
  '#FFEBEE',
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
  '#FF8A80',
  '#FF5252',
  '#FF1744',
  '#D50000',
  //Pink
  '#E91E63',
  '#FCE4EC',
  '#F8BBD0',
  '#F48FB1',
  '#F06292',
  '#EC407A',
  '#E91E63',
  '#D81B60',
  '#C2185B',
  '#AD1457',
  '#880E4F',
  '#FF80AB',
  '#FF4081',
  '#F50057',
  '#C51162',
  //Purple
  '#9C27B0',
  '#F3E5F5',
  '#E1BEE7',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#9C27B0',
  '#8E24AA',
  '#7B1FA2',
  '#6A1B9A',
  '#4A148C',
  '#EA80FC',
  '#E040FB',
  '#D500F9',
  '#AA00FF',
  //Deep Purple
  '#673AB7',
  '#EDE7F6',
  '#D1C4E9',
  '#B39DDB',
  '#9575CD',
  '#7E57C2',
  '#673AB7',
  '#5E35B1',
  '#512DA8',
  '#4527A0',
  '#311B92',
  '#B388FF',
  '#7C4DFF',
  '#651FFF',
  '#6200EA',
  //Indigo
  '#3F51B5',
  '#E8EAF6',
  '#C5CAE9',
  '#9FA8DA',
  '#7986CB',
  '#5C6BC0',
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#283593',
  '#1A237E',
  '#8C9EFF',
  '#536DFE',
  '#3D5AFE',
  '#304FFE',
  //Blue
  '#2196F3',
  '#E3F2FD',
  '#BBDEFB',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
  '#1E88E5',
  '#1976D2',
  '#1565C0',
  '#0D47A1',
  '#82B1FF',
  '#448AFF',
  '#2979FF',
  '#2962FF',
  //Light Blue
  '#03A9F4',
  '#E1F5FE',
  '#B3E5FC',
  '#81D4FA',
  '#4FC3F7',
  '#29B6F6',
  '#03A9F4',
  '#039BE5',
  '#0288D1',
  '#0277BD',
  '#01579B',
  '#80D8FF',
  '#40C4FF',
  '#00B0FF',
  '#0091EA',
  //Cyan
  '#00BCD4',
  '#E0F7FA',
  '#B2EBF2',
  '#80DEEA',
  '#4DD0E1',
  '#26C6DA',
  '#00BCD4',
  '#00ACC1',
  '#0097A7',
  '#00838F',
  '#006064',
  '#84FFFF',
  '#18FFFF',
  '#00E5FF',
  '#00B8D4',
  //Teal
  '#009688',
  '#E0F2F1',
  '#B2DFDB',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#00897B',
  '#00796B',
  '#00695C',
  '#004D40',
  '#A7FFEB',
  '#64FFDA',
  '#1DE9B6',
  '#00BFA5',
  //Green
  '#4CAF50',
  '#E8F5E9',
  '#C8E6C9',
  '#A5D6A7',
  '#81C784',
  '#66BB6A',
  '#4CAF50',
  '#43A047',
  '#388E3C',
  '#2E7D32',
  '#1B5E20',
  '#B9F6CA',
  '#69F0AE',
  '#00E676',
  '#00C853',
  //Light Green
  '#8BC34A',
  '#F1F8E9',
  '#DCEDC8',
  '#C5E1A5',
  '#AED581',
  '#9CCC65',
  '#8BC34A',
  '#7CB342',
  '#689F38',
  '#558B2F',
  '#33691E',
  '#CCFF90',
  '#B2FF59',
  '#76FF03',
  '#64DD17',
  //Lime
  '#CDDC39',
  '#F9FBE7',
  '#F0F4C3',
  '#E6EE9C',
  '#DCE775',
  '#D4E157',
  '#CDDC39',
  '#C0CA33',
  '#AFB42B',
  '#9E9D24',
  '#827717',
  '#F4FF81',
  '#EEFF41',
  '#C6FF00',
  '#AEEA00',
  //Yellow
  '#FFEB3B',
  '#FFFDE7',
  '#FFF9C4',
  '#FFF59D',
  '#FFF176',
  '#FFEE58',
  '#FFEB3B',
  '#FDD835',
  '#FBC02D',
  '#F9A825',
  '#F57F17',
  '#FFFF8D',
  '#FFFF00',
  '#FFEA00',
  '#FFD600',
  //Amber
  '#FFC107',
  '#FFF8E1',
  '#FFECB3',
  '#FFE082',
  '#FFD54F',
  '#FFCA28',
  '#FFC107',
  '#FFB300',
  '#FFA000',
  '#FF8F00',
  '#FF6F00',
  '#FFE57F',
  '#FFD740',
  '#FFC400',
  '#FFAB00',
  //Orange
  '#FF9800',
  '#FFF3E0',
  '#FFE0B2',
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FF9800',
  '#FB8C00',
  '#F57C00',
  '#EF6C00',
  '#E65100',
  '#FFD180',
  '#FFAB40',
  '#FF9100',
  '#FF6D00',
  //Deep Orange
  '#FF5722',
  '#FBE9E7',
  '#FFCCBC',
  '#FFAB91',
  '#FF8A65',
  '#FF7043',
  '#FF5722',
  '#F4511E',
  '#E64A19',
  '#D84315',
  '#BF360C',
  '#FF9E80',
  '#FF6E40',
  '#FF3D00',
  '#DD2C00',
  //Brown
  '#795548',
  '#EFEBE9',
  '#D7CCC8',
  '#BCAAA4',
  '#A1887F',
  '#8D6E63',
  '#795548',
  '#6D4C41',
  '#5D4037',
  '#4E342E',
  '#3E2723',
  '#3E2723',
  '#3E2723',
  '#3E2723',
  '#3E2723',
  //Grey
  '#9E9E9E',
  '#FAFAFA',
  '#F5F5F5',
  '#EEEEEE',
  '#E0E0E0',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
  '#212121',
  '#212121',
  '#212121',
  //Blue Grey
  '#607D8B',
  '#ECEFF1',
  '#CFD8DC',
  '#B0BEC5',
  '#90A4AE',
  '#78909C',
  '#607D8B',
  '#546E7A',
  '#455A64',
  '#37474F',
  '#37474F',
  '#37474F',
  '#37474F',
  '#263238'
];

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

highed.meta.fonts = [
  '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
  'Courier',
  'Arial',
  'Verdana',
  'Georgia',
  'Palatino Linotype',
  'Times New Roman',
  'Comic Sans MS',
  'Impact',
  'Lucida Sans Unicode',
  'Tahoma',
  'Lucida Console',
  'Courier New',
  'Monaco',
  'Monospace'
];

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

highed.highchartsErrors = {
  // Plotting zero or subzero value on a log axis
  10: {
    title: "Can't plot zero or subzero values on a logarithmic axis",
    text:
      'This error occurs in the following situations:<ul><li>If a zero or subzero data value is added to a logarithmic axis</li><li>If the minimum of a logarithimic axis is set to 0 or less</li><li>If the threshold is set to 0 or less</li></ul>As of Highcharts 5.0.8 it is possible to bypass this error message by setting <code>Axis.prototype.allowNegativeLog</code> to<code>true</code> and add custom conversion functions. <ahref="http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/samples/highcharts/yaxis/type-log-negative/">View live demo</a>.'
  },
  // Can't link axes of different types
  11: { title: "Can't link axes of different type", text: '' },
  // series.data needs to be arrays or numbers when in turbo mode
  12: {
    title:
      'Highcharts expects point configuration to be numbers or arrays in turbo mode',
    text: ''
  },
  // Rendering div not found
  13: { title: 'Rendering div not found', text: '' },
  // Expected number, got string
  14: { title: 'String value sent to series.data, expected Number', text: '' },
  // Expected sorted data, got non-sorted
  15: {
    title: 'Highcharts expects data to be sorted',
    text:
      'The data passed to your chart needs to be sorted. If you\'re using the datagrid, you can sort your data by clicking the arrow in the x-axis column header, and selecting "Sort Ascending"'
  },
  // Highcharts already defined
  16: { title: 'Highcharts already defined in the page', text: '' },
  // Requested type doesn't exist
  17: { title: 'The requested series type does not exist', text: '' },
  // Requested axis doesn't exist
  18: {
    title: 'The requested axis does not exist',
    text:
      'Make sure that your only references existing axis in the series properties.'
  },
  // Too many ticks (use bug spray)
  19: { title: 'Too many ticks', text: '' },
  // Can't add point config to a long data series
  20: {
    title: "Can't add object point configuration to a long data series",
    text: ''
  },
  // Can't find Proj4js library
  21: { title: "Can't find Proj4js library", text: '' },
  // Map does not support lat/long
  22: { title: 'Map does not support latitude/longitude', text: '' },
  // Unsupported color format used for color
  23: {
    title: 'Unsupported color format used for color interpolation',
    text: ''
  },
  // Cannot run Point.update on a grouped point
  24: { title: 'Cannot run Point.update on a grouped point', text: '' },
  // Can't find moment.js
  25: { title: "Can't find Moment.js library", text: '' },
  // WebGL not supported
  26: {
    title: 'WebGL not supported, and no fallback module included',
    text: ''
  },
  // Browser does not support SVG
  27: { title: 'This browser does not support SVG.', text: '' }
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** UI for selecting a chart template from the ones defined in meta/highed.meta.charts.js
 *
 *  @example
 *  var picker = highed.ChartTemplateSelector(document.body);
 *  picker.on('Select', function (template) {
 *      console.log('Selected new template:', template);
 *  });
 *
 *  @constructor
 *
 *  @param parent {domnode} - the parent to attach the selector to
 *
 *  @emits Select - when selecting a template
 *    > {object} - the template definition
 *  @emits Hover - when hovering a template
 *    > {object} - the template definition
 */
highed.ChartTemplateSelector = function(parent, chartPreview) {
  var events = highed.events(),
    container = highed.dom.cr('div', 'highed-chart-templates'),
    splitter = highed.HSplitter(container, { leftWidth: 30 }),
    list = highed.List(splitter.left),
    templates = splitter.right,
    catNode = highed.dom.cr('div', 'highed-chart-template-cat-desc'),
    selected = false;

  highed.dom.ap(parent, container);
  splitter.right.className += ' highed-chart-template-frame';

  ///////////////////////////////////////////////////////////////////////////

  function createSampleBtn(target, sample) {
    var btn,
      dset = highed.samples.get(sample);

    if (!dset) {
      return;
    }

    btn = sampleBtn = highed.dom.cr('div', 'highed-ok-button', dset.title);

    highed.dom.on(btn, 'click', function() {
      if (
        confirm(
          'You are about to load the ' +
            dset.title +
            ' sample set. This will purge any existing data in the chart. Continue?'
        )
      ) {
        events.emit('LoadDataSet', dset);
      }
    });

    highed.dom.ap(target, btn);
  }

  function buildCatMeta(catmeta) {
    var title = highed.dom.cr('h3', '', catmeta.id),
      desc = highed.dom.cr('div'),
      samples = highed.dom.cr('div');

    desc.innerHTML = highed.isArr(catmeta.description)
      ? catmeta.description.join('<br/><br/>')
      : catmeta.description || '';

    if (catmeta.samples && catmeta.samples.length > 0) {
      highed.dom.ap(samples, highed.dom.cr('h4', '', 'Sample Data Sets'));

      catmeta.samples.forEach(function(sample) {
        createSampleBtn(samples, sample);
      });
    }

    highed.dom.ap(catNode, title, desc, samples);
  }

  function showTemplates(templateList, masterID, catmeta) {
    var compatible = 0;

    templates.innerHTML = '';
    catNode.innerHTML = '';

    if (catmeta) {
      buildCatMeta(catmeta);
    }

    highed.dom.ap(templates, catNode);

    Object.keys(templateList).forEach(function(key) {
      var t = templateList[key],
        node = highed.dom.cr('div', 'highed-chart-template-container'),
        body = highed.dom.cr('div', 'highed-chart-template-body'),
        preview = highed.dom.cr('div', 'highed-chart-template-thumbnail'),
        titleBar = highed.dom.cr('div', 'highed-chart-template-title', t.title),
        description = highed.dom.cr('div', 'highed-chart-template-description'),
        samples = highed.dom.cr('div', 'highed-chart-template-samples');

      if (t.validator) {
        if (!highed.validators.validate(t.validator, chartPreview || false)) {
          return;
        }
      }

      compatible++;

      (highed.isArr(t.sampleSets)
        ? t.sampleSets
        : (t.sampleSets || '').split('.')
      ).forEach(function(sample, i) {
        if (i === 0) {
          highed.dom.ap(samples, highed.dom.cr('h4', '', 'Sample Data Sets'));
        }

        createSampleBtn(samples, sample);
      });

      description.innerHTML = highed.isArr(t.description)
        ? t.description.join('<br/><br/>')
        : t.description;

      if (selected && selected.id === masterID + key + t.title) {
        node.className =
          'highed-chart-template-container highed-chart-template-preview-selected';
        selected.node = node;
      }

      if (highed.meta.images && highed.meta.images[t.thumbnail]) {
        highed.dom.style(preview, {
          'background-image':
            'url("data:image/svg+xml;utf8,' +
            highed.meta.images[t.thumbnail] +
            '")'
        });
      } else {
        highed.dom.style(preview, {
          'background-image':
            'url(' + highed.option('thumbnailURL') + t.thumbnail + ')'
        });
      }

      highed.dom.on(node, 'click', function() {
        if (selected) {
          selected.node.className = 'highed-chart-template-container';
        }

        node.className =
          'highed-chart-template-container highed-chart-template-preview-selected';

        selected = {
          id: masterID + key + t.title,
          node: node
        };

        // If this is a map, we need to include the map collection
        if (t.constructor === 'Map') {
          var loadedSeries = 0;

          (t.config.series || []).forEach(function(series) {
            function incAndCheck() {
              loadedSeries++;
              if (loadedSeries === t.config.series.length) {
                events.emit('Select', t);
              }
            }

            if (series.mapData) {
              if (highed.isStr(series.mapData)) {
                highed.include(
                  'https://code.highcharts.com/mapdata/' +
                    series.mapData +
                    '.js',
                  function() {
                    series.mapData = Highcharts.maps[series.mapData];
                    incAndCheck();
                  }
                );
              } else {
                incAndCheck();
              }
            } else {
              incAndCheck();
            }
          });
        } else {
          events.emit('Select', t);
        }

        highed.emit('UIAction', 'TemplateChoose', t.title);
      });

      highed.dom.ap(
        templates,
        highed.dom.ap(
          node,
          preview,
          highed.dom.ap(
            body,
            titleBar,
            description,
            // highed.dom.cr('h4', '', 'Sample Data Sets'),
            samples
          )
        )
      );
    });

    if (compatible === 0) {
      highed.dom.ap(
        templates,
        highed.dom.ap(
          highed.dom.cr('div', 'highed-chart-template-404'),
          highed.dom.cr(
            'h4',
            '',
            'None of the templates in this category fits your dataset.'
          ),
          highed.dom.cr('div', '', catmeta ? catmeta.nofits || '' : '')
        )
      );
    } else {
      highed.dom.ap(
        catNode,
        highed.dom.cr(
          'h3',
          'highed-template-choose-text',
          'Choose a template below by clicking it'
        )
      );
    }
  }

  /* Force a resize */
  function resize(w, h) {
    var lsize;

    splitter.resize(w, h);
    list.resize();

    lsize = highed.dom.size(list.container);
    highed.dom.style(templates, {
      minHeight: lsize.h + 'px'
    });
  }

  /* Build the UI */
  function build() {
    list.addItems(highed.templates.getCatArray());
    list.selectFirst();
  }

  ///////////////////////////////////////////////////////////////////////////

  list.on('Select', function(id) {
    var templates = highed.templates.getAllInCat(id);

    highed.emit('UIAction', 'TemplateCatChoose', id);

    if (templates) {
      showTemplates(templates, id, highed.templates.getCatInfo(id));
    }
  });

  build();

  ///////////////////////////////////////////////////////////////////////////

  return {
    on: events.on,
    resize: resize,
    rebuild: build
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Create an instance of the default context menu
 *  This is shared accross the simple and full editor.
 *  @constructor
 *  @param chartPreview {highed.ChartPreview} - the chart preview for the menu
 */
highed.DefaultContextMenu = function(chartPreview) {
  var events = highed.events(),
    cmenu = highed.ContextMenu([
      {
        title: highed.getLocalizedStr('previewChart'),
        icon: 'bar-chart',
        click: function() {
          chartPreview.expand();
        }
      },
      '-',
      {
        title: highed.getLocalizedStr('newChart'),
        icon: 'file-o',
        click: function() {
          if (window.confirm(highed.getLocalizedStr('confirmNewChart'))) {
            chartPreview.new();
            events.emit('NewChart');
          }
        }
      },
      '-',
      {
        title: highed.getLocalizedStr('saveProject'),
        icon: 'floppy-o',
        click: function() {
          highed.download('chart.json', chartPreview.toProjectStr());
        }
      },
      {
        title: highed.getLocalizedStr('loadProject'),
        icon: 'folder-open-o',
        click: function() {
          highed.readLocalFile({
            type: 'text',
            accept: '.json',
            success: function(file) {
              try {
                file = JSON.parse(file.data);
              } catch (e) {
                return highed.snackBar('Error loading JSON: ' + e);
              }

              chartPreview.loadProject(file);
            }
          });
        }
      },
      '-',
      {
        title: 'Save to Cloud',
        icon: 'upload',
        click: function() {
          highed.cloud.save(chartPreview);
        }
      },
      {
        title: highed.getLocalizedStr('loadCloud'),
        icon: 'cloud',
        click: function() {
          highed.cloud.showUI(chartPreview);
        }
      },
      '-',
      {
        title: highed.getLocalizedStr('exportPNG'),
        icon: 'file-image-o',
        click: function() {
          chartPreview.data.export({});
        }
      },
      {
        title: highed.getLocalizedStr('exportJPEG'),
        icon: 'file-image-o',
        click: function() {
          chartPreview.data.export({ type: 'image/jpeg' });
        }
      },
      {
        title: highed.getLocalizedStr('exportSVG'),
        icon: 'file-image-o',
        click: function() {
          chartPreview.data.export({ type: 'image/svg+xml' });
        }
      },
      {
        title: highed.getLocalizedStr('exportPDF'),
        icon: 'file-pdf-o',
        click: function() {
          chartPreview.data.export({ type: 'application/pdf' });
        }
      },
      '-',
      {
        title: highed.getLocalizedStr('help'),
        icon: 'question-circle',
        click: function() {
          window.open(highed.option('helpURL'));
        }
      } //,
      // {
      //     title: highed.getLocalizedStr('licenseInfo'),
      //     icon: 'key',
      //     click: function () {
      //         highed.licenseInfo.show();
      //     }
      // }
    ]);

  return {
    on: events.on,
    show: cmenu.show
  };
};

/******************************************************************************

Copyright (c) 2016-2017, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** UI For customizing a chart
 *  @todo there be dragons here.
 *  @example
 *  var chart = highed.ChartCustomizer(document.body, {}, chartPreview);
 *
 *  @constructor
 *
 *  @emits PropertyChange - when a property changes
 *    > {string} - the path of the change
 *    > {anything} - the new value
 *    > {number} - the change array index
 *
 *  @param parent {domnode} - the node to attach the editor to
 *  @param attributes {object} - the attributes
 *    > noAdvanced {bool} - set to true to force disable the advance view
 *    > noCustomCode {bool} - set to true to disable custom code view
 *    > noPreview {bool} - set to true to disable option preview view
 *    > availableSettings {string|array} - whitelist of exposed settings
 *  @param chartPreview {ChartPreview} - the chart preview instance
 */
highed.ChartCustomizer = function(parent, attributes, chartPreview) {
  var properties = highed.merge(
      {
        noAdvanced: false,
        noCustomCode: false,
        noPreview: false,
        availableSettings: []
      },
      attributes
    ),
    events = highed.events(),
    advancedLoader = highed.dom.cr(
      'div',
      'highed-customizer-adv-loader',
      'Loading...'
    ),
    tabs = highed.TabControl(parent, true),
    simpleTab = tabs.createTab({
      title: highed.getLocalizedStr('customizeSimple')
    }),
    advancedTab = tabs.createTab({
      title: highed.getLocalizedStr('customizeAdvanced')
    }),
    customCodeTab = tabs.createTab({
      title: highed.getLocalizedStr('customizeCustomCode')
    }),
    outputPreviewTab = tabs.createTab({
      title: highed.getLocalizedStr('customizePreview')
    }),
    previewEditor = highed.dom.cr(
      'textarea',
      'highed-custom-code highed-box-size highed-stretch'
    ),
    previewCodeMirror = false,
    splitter = highed.HSplitter(simpleTab.body, {
      leftWidth: 20,
      responsive: true
    }),
    list = highed.List(splitter.left, true),
    body = splitter.right,
    advSplitter = highed.HSplitter(advancedTab.body, {
      leftWidth: 30
    }),
    advBody = advSplitter.right,
    advTree = highed.Tree(advSplitter.left),
    flatOptions = {},
    chartOptions = {},
    customCodeSplitter = highed.VSplitter(customCodeTab.body, {
      topHeight: 90,
      noOverflow: true
    }),
    customCodeDebug = highed.dom.cr('pre', 'highed-custom-debug'),
    codeMirrorBox = false,
    customCodeBox = highed.dom.cr(
      'textarea',
      'highed-custom-code highed-box-size highed-stretch'
    ),
    highlighted = false;

  //If we're on mobile, completely disable the advanced view
  if (highed.onPhone()) {
    properties.noAdvanced = true;
    properties.noCustomCode = true;
    properties.noPreview = true;
  }

  body.className += ' highed-customizer-body';

  properties.availableSettings = highed.arrToObj(properties.availableSettings);

  highed.dom.ap(parent, advancedLoader);
  highed.dom.ap(outputPreviewTab.body, previewEditor);

  ///////////////////////////////////////////////////////////////////////////

  advancedTab.on('Focus', function() {
    buildTree();
  });

  outputPreviewTab.on('Focus', function() {
    var prev = chartPreview.options.getPreview();

    if (!previewCodeMirror && typeof window.CodeMirror !== 'undefined') {
      previewCodeMirror = CodeMirror.fromTextArea(previewEditor, {
        lineNumbers: true,
        mode: 'application/javascript',
        theme: highed.option('codeMirrorTheme'),
        readOnly: true
      });

      previewCodeMirror.setSize('100%', '100%');
    }

    if (previewCodeMirror) {
      previewCodeMirror.setValue(prev);
    } else {
      previewEditor.readonly = true;
      previewEditor.value = prev;
    }
  });

  function loadCustomCode() {
    var code;

    if (chartPreview) {
      code = chartPreview.getCustomCode() || '';
      if (codeMirrorBox) {
        codeMirrorBox.setValue(code);
      } else {
        customCodeBox.value = code;
      }
    }
  }

  /**
   * Init the custom code stuff
   */
  function initCustomCode() {
    // Build the custom code tab
    highed.dom.ap(customCodeSplitter.top, customCodeBox);

    highed.dom.ap(customCodeSplitter.bottom, customCodeDebug);

    function setCustomCode() {
      highed.emit('UIAction', 'CustomCodeUpdate');
      customCodeDebug.innerHTML = '';
      if (chartPreview) {
        chartPreview.setCustomCode(
          codeMirrorBox ? codeMirrorBox.getValue() : customCodeBox.value,
          function(err) {
            customCodeDebug.innerHTML = err;
          }
        );
      }
    }

    if (typeof window['CodeMirror'] !== 'undefined') {
      codeMirrorBox = CodeMirror.fromTextArea(customCodeBox, {
        lineNumbers: true,
        mode: 'application/javascript',
        theme: highed.option('codeMirrorTheme')
      });
      codeMirrorBox.setSize('100%', '100%');
      codeMirrorBox.on('change', setCustomCode);
    } else {
      highed.dom.on(customCodeBox, 'change', function() {
        setCustomCode();
      });
    }
  }

  /** Force a resize of the editor
   *  @memberof highed.ChartCustomizer
   *  @param w {number} - the new width
   *  @param h {number} - the new height
   */
  function resize(w, h) {
    var bsize, lsize;

    tabs.resize(w, h);
    bsize = tabs.barSize();

    list.resize(w, h - bsize.h);
    splitter.resize(w, h - bsize.h - 10);

    //The customize body needs to have a min-height of the list height
    lsize = highed.dom.size(list.container);

    highed.dom.style(body, {
      minHeight: lsize.h + 'px'
    });

    customCodeSplitter.resize(w, h);

    if (codeMirrorBox) {
      codeMirrorBox.refresh();
    }
  }

  /** Init the customizer
   *  @memberof highed.ChartCustomizer
   *  @param foptions {object} - the customized options
   *  @param coptions {object} - the full chart options
   */
  function init(foptions, coptions, chartp) {
    flatOptions = coptions || {};
    chartOptions = highed.merge({}, foptions || {});
    list.reselect();
    // buildTree();
    chartPreview = chartp || chartPreview;

    customCodeSplitter.resize();
    loadCustomCode();
  }

  function buildBody(entry) {}

  function applyFilter(detailIndex, filteredBy, filter) {
    var selected = list.selected(),
      id = selected.id,
      entry = highed.meta.optionsExtended.options[id];

    if (!selected) return false;

    body.innerHTML = '';

    entry.forEach(function(thing) {
      selectGroup(thing, false, false, detailIndex, filteredBy, filter);
    });

    highlighted = false;
  }

  function shouldInclude(group) {
    var doInclude = false;

    if (Object.keys(properties.availableSettings || {}).length > 0) {
      if (highed.isArr(group)) {
        group.forEach(function(sub) {
          if (shouldInclude(sub)) {
            doInclude = true;
          }
        });
      } else if (highed.isArr(group.options)) {
        group.options.forEach(function(sub) {
          if (shouldInclude(sub)) {
            doInclude = true;
          }
        });
      } else if (
        properties.availableSettings[group.id] ||
        properties.availableSettings[group.pid]
      ) {
        doInclude = true;
      }

      return doInclude;
    }

    return true;
  }

  //This function has mutated into a proper mess. Needs refactoring.
  function selectGroup(group, table, options, detailIndex, filteredBy, filter) {
    var master,
      vals,
      doInclude = true,
      container,
      masterNode,
      def;

    options = chartPreview.options.getCustomized();

    if (highed.isArr(group.options)) {
      table = highed.dom.cr('table', 'highed-customizer-table');

      doInclude = shouldInclude(group);

      if (!doInclude) {
        return;
      }

      container = highed.dom.cr('div', 'highed-customize-group');
      masterNode = highed.dom.cr('div', 'highed-customize-master-dropdown');

      highed.dom.ap(
        body,
        highed.dom.ap(
          container,
          highed.dom.cr(
            'div',
            'highed-customizer-table-heading',
            highed.L(group.text)
          ),
          masterNode,
          table
        )
      );

      if (group.filteredBy) {
        filter = highed.getAttr(options, group.filteredBy, detailIndex);
      }

      if (group.controlledBy) {
        master = highed.DropDown();
        highed.dom.style(masterNode, {
          display: 'block'
        });

        if (highed.isStr(group.controlledBy.options)) {
          vals = highed.getAttr(
            options,
            group.controlledBy.options,
            detailIndex
          );

          if (highed.isArr(vals)) {
            if (vals.length === 0) {
              highed.dom.ap(
                body,
                highed.dom.cr('i', '', 'No data to display..')
              );
              return;
            }

            master.addItems(
              vals.map(function(t, i) {
                return (
                  (group.controlledBy.optionsTitle
                    ? t[group.controlledBy.optionsTitle]
                    : '#' + (i + 1)) || '#' + (i + 1)
                );
              })
            );

            master.selectByIndex(detailIndex || 0);

            master.on('Change', function(selected) {
              detailIndex = selected.index();

              table.innerHTML = '';

              group.options.forEach(function(sub) {
                if (group.filteredBy) {
                  filter = highed.getAttr(
                    options,
                    group.filteredBy,
                    detailIndex
                  );
                }
                selectGroup(
                  sub,
                  table,
                  options,
                  detailIndex,
                  group.filteredBy,
                  filter
                );
              });
            });

            highed.dom.ap(masterNode, master.container);
            detailIndex = detailIndex || 0;
          } else {
            return;
          }
        }
      }

      //highed.dom.ap(body, table);

      group.options.forEach(function(sub) {
        selectGroup(sub, table, options, detailIndex, group.filteredBy, filter);
      });
    } else if (typeof group.id !== 'undefined') {
      //Check if we should filter out this column
      if (filter && group.subType && group.subType.length) {
        if (!highed.arrToObj(group.subType)[filter]) {
          return;
        }
      }

      if (Object.keys(properties.availableSettings || {}).length > 0) {
        if (
          !properties.availableSettings[group.id] &&
          !properties.availableSettings[group.pid]
        ) {
          return;
        }
      }

      if (typeof group.dataIndex !== 'undefined') {
        detailIndex = group.dataIndex;
      }

      def = highed.getAttr(options, group.id, detailIndex);

      //highed.dom.ap(sub, highed.dom.cr('span', '', referenced[0].returnType));
      highed.dom.ap(
        table,
        highed.InspectorField(
          group.values ? 'options' : group.dataType,
          typeof def !== 'undefined'
            ? def
            : filter && group.subTypeDefaults[filter]
              ? group.subTypeDefaults[filter]
              : group.defaults,
          {
            title: highed.L('option.text.' + group.pid),
            tooltip: highed.L('option.tooltip.' + group.pid),
            values: group.values,
            custom: group.custom,
            defaults: group.defaults,
            attributes: group.attributes || []
          },
          function(newValue) {
            events.emit('PropertyChange', group.id, newValue, detailIndex);
            highed.emit(
              'UIAction',
              'SimplePropSet',
              highed.L('option.text.' + group.pid),
              newValue
            );

            if (group.id === filteredBy) {
              //This is a master for the rest of the childs,
              //which means that we need to rebuild everything
              //here somehow and check their subType
              applyFilter(detailIndex, filteredBy, newValue);
            }
          },
          false,
          group.id
        )
      );
    }
  }

  function buildTree() {
    if (properties.noAdvanced) {
      return;
    }

    highed.dom.style(advancedLoader, {
      opacity: 1
    });

    if (properties.noAdvanced || highed.isNull(highed.meta.optionsAdvanced)) {
      advancedTab.hide();
    } else {
      setTimeout(function() {
        highed.meta.optionsAdvanced = highed.transform.advanced(
          highed.meta.optionsAdvanced,
          true
        );

        advTree.build(
          highed.meta.optionsAdvanced,
          highed.merge({}, chartPreview.options.getCustomized())
        );

        highed.dom.style(advancedLoader, {
          opacity: 0
        });
      }, 10);
    }
  }

  function build() {
    Object.keys(highed.meta.optionsExtended.options).forEach(function(key) {
      if (!shouldInclude(highed.meta.optionsExtended.options[key])) {
        return;
      }

      list.addItem({
        id: key,
        title: highed.L(key)
      });
    });

    // buildTree();
  }

  //Highlight a node
  function highlightNode(n, x, y) {
    if (!n) return;

    var p = highed.dom.pos(n);

    if (!simpleTab.selected) {
      simpleTab.focus();
    }

    n.focus();
    n.scrollIntoView({
      inline: 'nearest'
    });

    // Draw a dot where the item was clicked
    var attention = highed.dom.cr('div', 'highed-attention');
    highed.dom.style(attention, {
      width: '10px',
      height: '10px',
      left: x - 5 + 'px',
      top: y - 5 + 'px',
      borderRadius: '50%'
    });
    highed.dom.ap(document.body, attention);

    // Animate it to the corresponding element
    var pos = Highcharts.offset(n);

    var bgColor = n.style.backgroundColor;
    highed.dom.style(attention, {
      width: n.clientWidth + 'px',
      height: n.clientHeight + 'px',
      borderRadius: 0,
      left: pos.left + 'px',
      top: pos.top + 'px'
    });
    window.setTimeout(function() {
      highed.dom.style(n, {
        backgroundColor: window.getComputedStyle(attention).backgroundColor,
        transition: '1s ease background-color'
      });

      attention.parentNode.removeChild(attention);
      attention = null;

      window.setTimeout(function() {
        highed.dom.style(n, {
          backgroundColor: bgColor
        });
      }, 250);
    }, 350);
  }

  //////////////////////////////////////////////////////////////////////////////
  // P U B L I C  F U N S

  /** Highlight a field in the customizer
   *  @memberof highed.ChartCustomizer
   *  @param id {string} - is the id of the field to highlight
   *  @param x {number} - the x coordinate where the focus was triggered
   *  @param y {number} - the y coordinate where the focus was triggered
   */
  function highlightField(id, x, y) {
    if (id.indexOf('-') >= 0) {
      var n = advSplitter.left.querySelector(
        '#' + id.substr(0, id.indexOf('-'))
      );

      highlightNode(body.querySelector('#' + id), x, y);
      highlightNode(advSplitter.right.querySelector('#' + id));

      if (n) {
        n.scrollIntoView({
          block: 'end'
        });
      }
    }
  }

  /** Focus a category
   *  @memberof highed.ChartCustomizer
   *  @param thing {anything} - the category to focus
   *  @param x {number} - the x coordinate where the focus was triggered
   *  @param y {number} - the y coordinate where the focus was triggered
   */
  function focus(thing, x, y) {
    var n;

    list.select(thing.tab);
    advTree.expandTo(thing.id);
    highlightField(thing.id, x, y);
  }

  ///////////////////////////////////////////////////////////////////////////

  list.on('Select', function(id) {
    var entry = highed.meta.optionsExtended.options[id];
    body.innerHTML = '';
    entry.forEach(function(thing) {
      selectGroup(thing);
    });
    highlighted = false;
    highed.emit('UIAction', 'SimplePropCatChoose', id);
  });

  function buildAdvTree(item, selected, instancedData, filter, propFilter) {
    var table = highed.dom.cr('table', 'highed-customizer-table'),
      componentCount = 0;

    advBody.innerHTML = '';

    if (properties.noAdvanced) {
      return;
    }

    item.children.forEach(function(entry) {
      if (!entry.meta.leafNode) {
        return;
      }

      // Skip functions for now
      if (Object.keys(entry.meta.types)[0] === 'function') {
        return;
      }

      if (propFilter && entry.meta.validFor) {
        if (!entry.meta.validFor[propFilter]) {
          // console.log('filtered', entry.meta.name, 'based on', propFilter);
          return false;
        }
      }

      if (
        filter &&
        entry.meta.products &&
        Object.keys(entry.meta.products) > 0 &&
        !entry.meta.products[filter]
      ) {
        return;
      }

      componentCount++;

      entry.values = entry.meta.enumValues;

      highed.dom.ap(
        table,
        highed.InspectorField(
          entry.values
            ? 'options'
            : Object.keys(entry.meta.types)[0] || 'string',
          typeof instancedData[entry.meta.name] !== 'undefined'
            ? instancedData[entry.meta.name]
            : entry.meta.default, //(highed.getAttr(chartOptions, entry.id)  || entry.defaults),
          {
            title: highed.uncamelize(entry.meta.name),
            tooltip: entry.meta.description,
            values: entry.meta.enumValues,
            defaults: entry.meta.default,
            custom: {},
            attributes: entry.attributes || []
          },
          function(newValue) {
            highed.emit(
              'UIAction',
              'AdvancedPropSet',
              (entry.meta.ns ? entry.meta.ns + '.' : '') + highed.uncamelize(entry.meta.name),
              newValue
            );
            instancedData[entry.meta.name] = newValue;
            events.emit('PropertySetChange', advTree.getMasterData());
            if (advTree.isFilterController(entry.meta.ns, entry.meta.name)) {
              buildTree();
            }
          },
          false,
          entry.id
        )
      );
    });

    highed.dom.ap(
      advBody,
      highed.dom.ap(
        highed.dom.cr('div', 'highed-customize-group'),
        highed.dom.cr('div', 'highed-customizer-table-heading', selected),
        table
      )
    );
  }

  advTree.on('ForceSave', function(data) {
    events.emit('PropertySetChange', data);
  });

  advTree.on('ClearSelection', function() {
    advBody.innerHTML = '';
  });

  advTree.on('Select', buildAdvTree);

  advTree.on('DataUpdate', function(path, data) {
    events.emit('PropertyChange', path, data);
  });

  advTree.on('Dirty', function() {
    init(flatOptions, chartOptions);
  });

  tabs.on('Focus', function() {
    init(flatOptions, chartOptions);
  });

  build();
  initCustomCode();

  if (properties.noCustomCode) {
    customCodeTab.hide();
  }

  if (properties.noAdvanced) {
    advancedTab.hide();
  }

  if (properties.noPreview) {
    outputPreviewTab.hide();
  }

  return {
    /* Listen to an event */
    on: events.on,
    resize: resize,
    init: init,
    focus: focus,
    reselect: list.reselect,
    highlightField: highlightField
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** This is a component that implements a toolbar with wizard steps
 * Proxies the interface of the WizardStepper object.
 * @constructor
 * @emits Step - when stepping back or forth
 * @emits AddStep - when adding a step to the stepper
 * @param parent {domnode} - the dom node to attach the UI to
 * @param bodyParent {domnode} - the dom node to attach the stepper body to
 * @param attributes {object} - options for the object
 */
highed.WizardBar = function(parent, bodyParent, attributes) {
  var toolbar = highed.Toolbar(parent, {
      additionalCSS: ['highed-wizstepper-bar']
    }),
    stepper = highed.WizardStepper(bodyParent, toolbar.center),
    next = highed.dom.cr(
      'span',
      'highed-wizstepper-next-prev fa fa-arrow-right'
    ),
    previous = highed.dom.cr(
      'span',
      'highed-wizstepper-next-prev fa fa-arrow-left'
    );

  ///////////////////////////////////////////////////////////////////////////

  function handleStepEvent(step, count) {
    if (step.number > 1) {
      highed.dom.style(previous, {
        opacity: 1,
        'pointer-events': 'auto',
        visibility: 'visible'
      });
    } else {
      highed.dom.style(previous, {
        opacity: 0,
        'pointer-events': 'none',
        visibility: 'hidden'
      });
    }

    if (step.number < count) {
      highed.dom.style(next, {
        opacity: 1,
        'pointer-events': 'auto',
        visibility: 'visible'
      });
    } else {
      highed.dom.style(next, {
        opacity: 0,
        'pointer-events': 'none',
        visibility: 'hidden'
      });
    }
  }

  stepper.on('Step', handleStepEvent);
  stepper.on('AddStep', handleStepEvent);

  highed.dom.on(next, 'click', stepper.next);
  highed.dom.on(previous, 'click', stepper.previous);

  ///////////////////////////////////////////////////////////////////////////

  highed.dom.ap(toolbar.right, next);
  highed.dom.ap(toolbar.left, previous);

  highed.dom.style(previous, {
    opacity: 0,
    'pointer-events': 'none'
  });

  return {
    /** The container which the bar is attached to
     *  @type {domnode}
     *  @memberof highed.WizardBar
     */
    container: toolbar.container,
    on: stepper.on,
    next: stepper.next,
    previous: stepper.previous,
    addStep: stepper.addStep,
    selectFirst: stepper.selectFirst
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var webImports = {};

  highed.plugins.import = {
    /** Install a data import plugin
     * @namespace highed.plugins.import
     * @param name {string} - the name of the plugin
     * @param defintion {object} - the plugin definition
     *   > description {string} - the plugin description
     *   > treatAs {string} - what to treat the import as: `json|csv`
     *   > fetchAs {string} - what the expect request return is
     *   > defaultURL {string} - the default URL
     *   > depdendencies {array<string>} - set of additional javascript/css to include
     *   > options {object} - additional user-supplied options
     *      > label {string} - the title of the option
     *      > type {string} - the type of the option
     *      > default {string} - the default value
     *   > filter {function} - function to call when executing the plugin
     *      >  url {anything} - request url
     *      >  options {object} - contains user-defined options
     *      >  callback {function} - function to call when the import is done
     */
    install: function(name, defintion) {
      if (highed.isNull(webImports[name])) {
        webImports[name] = highed.merge(
          {
            title: false,
            description: '',
            treatAs: 'csv',
            fetchAs: 'json',
            defaultURL: '',
            dependencies: [],
            options: {},
            filter: function() {}
          },
          defintion
        );

        if (webImports[name].dependencies) {
          webImports[name].dependencies.forEach(function(d) {
            highed.include(d);
          });
        }
      } else {
        highed.log(
          1,
          'tried to register an import plugin which already exists:',
          name
        );
      }
    }
  };

  /** Data importer widget
   *
   *  @example
   *  var dimp = highed.DataImporter(document.body);
   *  dimp.on('ImportCSV', function (data) {
   *      console.log('Importing csv:', data.csv);
   *  });
   *
   *  @constructor
   *
   *  @emits ImportChartSettings - when importing chart settings
   *  @emits ImportCSV - when importing CSV
   *  @emits ImportJSON - when importing JSON
   *  @param parent {domnode} - the node to attach the widget to
   *  @param attributes {object} - the settings
   *     > options {string} - the options to include: `csv json plugins samples`
   *     > plugins {string} - the plugins to activate (must have been installed first)
   */
  highed.DataImporter = function(parent, attributes) {
    var events = highed.events(),
      properties = highed.merge(
        {
          options: ['csv', 'plugins', 'samples'],
          plugins: ['CSV', 'JSON', 'Difi', 'Socrata', 'Google Spreadsheets']
        },
        attributes
      ),
      tabs = highed.TabControl(parent, false, true),
      csvTab = tabs.createTab({ title: 'CSV' }),
      jsonTab = tabs.createTab({ title: 'JSON' }),
      webTab = tabs.createTab({ title: 'Plugins' }),
      samplesTab = tabs.createTab({ title: 'Sample Data' }),
      csvPasteArea = highed.dom.cr('textarea', 'highed-imp-pastearea'),
      csvImportBtn = highed.dom.cr(
        'button',
        'highed-imp-button',
        'Import Pasted Data'
      ),
      liveDataImportBtn = highed.dom.cr('button', 'highed-imp-button', 'Import Live Data'),
      csvImportFileBtn = highed.dom.cr(
        'button',
        'highed-imp-button',
        'Upload & Import File'
      ),
      delimiter = highed.dom.cr('input', 'highed-imp-input'),
      dateFormat = highed.dom.cr('input', 'highed-imp-input'),
      decimalPoint = highed.dom.cr('input', 'highed-imp-input'),
      firstAsNames = highed.dom.cr('input', 'highed-imp-input'),
      jsonPasteArea = highed.dom.cr('textarea', 'highed-imp-pastearea'),
      jsonImportBtn = highed.dom.cr('button', 'highed-imp-button', 'Import'),
      jsonImportFileBtn = highed.dom.cr(
        'button',
        'highed-imp-button',
        'Upload & Import File'
      ),
      webSplitter = highed.HSplitter(webTab.body, { leftWidth: 30 }),
      webList = highed.List(webSplitter.left);

    jsonPasteArea.value = JSON.stringify({}, undefined, 2);

    setDefaultTabSize(600, 600, [csvTab, jsonTab, webTab, samplesTab]);
    ///////////////////////////////////////////////////////////////////////////

    highed.dom.style(samplesTab.body, { overflow: 'hidden' });

    properties.options = highed.arrToObj(properties.options);
    properties.plugins = highed.arrToObj(properties.plugins);

    //Remove referenced un-installed plugins.
    Object.keys(properties.plugins).forEach(function(plugin) {
      if (highed.isNull(webImports[plugin])) {
        delete properties.plugins[plugin];
      }
    });

    function setDefaultTabSize(w, h, tabs) {
      tabs.forEach(function (tab) {
        tab.on('Focus',function() {
          highed.dom.style(parent, { width: 600 + 'px', height: 600 + 'px' });
          tab.resize(600 - 10, 600 - 10);
        });
      });
    }

    function updateOptions() {
      if (!properties.options.csv) {
        csvTab.hide();
      }

      //Always disable json options..
      if (1 === 1 || !properties.options.json) {
        jsonTab.hide();
      }

      if (
        Object.keys(properties.plugins).length === 0 ||
        !properties.options.plugins
      ) {
        webTab.hide();
      }

      if (!properties.options.samples) {
        samplesTab.hide();
      }

      tabs.selectFirst();
    }

    function buildWebTab() {
      Object.keys(webImports).forEach(function(name) {
        if (!properties.plugins[name]) {
          return;
        }

        function buildBody() {
          var options = webImports[name],
            url = highed.dom.cr('input', 'highed-imp-input-stretch'),
            urlTitle = highed.dom.cr('div', '', 'URL'),
            importBtn = highed.dom.cr(
              'button',
              'highed-imp-button',
              'Import ' + name + ' from URL'
            ),
            dynamicOptionsContainer = highed.dom.cr(
              'table',
              'highed-customizer-table'
            ),
            dynamicOptions = {};

          url.value = options.defaultURL || '';

          Object.keys(options.options || {}).forEach(function(name) {
            dynamicOptions[name] = options.options[name].default;

            highed.dom.ap(
              dynamicOptionsContainer,
              highed.InspectorField(
                options.options[name].type,
                options.options[name].default,
                {
                  title: options.options[name].label
                },
                function(nval) {
                  dynamicOptions[name] = nval;
                },
                true
              )
            );
          });

          if (options.surpressURL) {
            highed.dom.style([url, urlTitle], {
              display: 'none'
            });
          }

          url.placeholder = 'Enter URL';

          highed.dom.on(importBtn, 'click', function() {
            highed.snackBar('Importing ' + name + ' data');

            if (highed.isFn(options.request)) {
              return options.request(url.value, dynamicOptions, function(
                err,
                chartProperties
              ) {
                if (err) return highed.snackBar('import error: ' + err);
                events.emit(
                  'ImportChartSettings',
                  chartProperties,
                  options.newFormat
                );
              });
            }

            highed.ajax({
              url: url.value,
              type: 'get',
              dataType: options.fetchAs || 'text',
              success: function(val) {
                options.filter(val, highed.merge({}, dynamicOptions), function(
                  error,
                  val
                ) {
                  if (error) return highed.snackBar('import error: ' + error);
                  if (options.treatAs === 'csv') {
                    csvTab.focus();
                    csvPasteArea.value = val;
                    emitCSVImport(val);
                  } else {
                    processJSONImport(val);
                  }
                });
              },
              error: function(err) {
                highed.snackBar('import error: ' + err);
              }
            });
          });

          webSplitter.right.innerHTML = '';

          highed.dom.ap(
            webSplitter.right,
            highed.dom.ap(
              highed.dom.cr('div', 'highed-plugin-details'),
              highed.dom.cr(
                'div',
                'highed-customizer-table-heading',
                options.title || name
              ),
              highed.dom.cr('div', 'highed-imp-help', options.description),
              urlTitle,
              url,
              Object.keys(options.options || {}).length
                ? dynamicOptionsContainer
                : false,
              highed.dom.cr('br'),
              importBtn
            )
          );
        }

        webList.addItem({
          id: name,
          title: webImports[name].title || name,
          click: buildBody
        });
      });

      webList.selectFirst();
    }

    function buildSampleTab() {
      samplesTab.innerHTML = '';

      highed.samples.each(function(sample) {
        var data = sample.dataset.join('\n'),
          loadBtn = highed.dom.cr(
            'button',
            'highed-box-size highed-imp-button',
            sample.title
          );

        highed.dom.style(loadBtn, { width: '99%' });

        highed.dom.on(loadBtn, 'click', function() {
          emitCSVImport(data);
          csvPasteArea.value = data;
          csvTab.focus();
        });

        highed.dom.ap(
          samplesTab.body,
          //highed.dom.cr('div', '', name),
          //highed.dom.cr('br'),
          loadBtn,
          highed.dom.cr('br')
        );
      });
    }

    function emitCSVImport(csv) {
      events.emit('ImportCSV', {
        itemDelimiter: delimiter.value,
        firstRowAsNames: firstAsNames.checked,
        dateFormat: dateFormat.value,
        csv: csv || csvPasteArea.value,
        decimalPoint: decimalPoint.value
      });
    }

    function loadCSVExternal(csv) {
      csvPasteArea.value = csv;
      emitCSVImport();
    }

    function processJSONImport(jsonString) {
      var json = jsonString;
      if (highed.isStr(json)) {
        try {
          json = JSON.parse(jsonString);
        } catch (e) {
          highed.snackBar('Error parsing json: ' + e);
          return false;
        }
      }
      events.emit('ImportJSON', json);
      highed.snackBar('imported json');
    }

    /** Force a resize of the widget
     *  @memberof highed.DataImporter
     *  @param w {number} - the new width
     *  @param h {number} - the new height
     */
    function resize(w, h) {
      var bsize,
        ps = highed.dom.size(parent);

      tabs.resize(w || ps.w, h || ps.h);
      bsize = tabs.barSize();

      webSplitter.resize(w || ps.w, (h || ps.h) - bsize.h - 20);
      webList.resize(w || ps.w, (h || ps.h) - bsize.h);
    }

    /** Show the importer
     *  @memberof highed.DataImporter
     */
    function show() {
      tabs.show();
    }

    /** Hide the importer
     *  @memberof highed.DataImporter
     */
    function hide() {
      tabs.hide();
    }

    function addImportTab(tabOptions){
      var newTab = tabs.createTab({ title: tabOptions.name || 'Features' });

      if (highed.isFn(tabOptions.create)) {
        tabOptions.create(newTab.body);
      }
      if (tabOptions.resize) {
        newTab.on('Focus',function() {
          highed.dom.style(parent, { width: tabOptions.resize.width + 'px', height: tabOptions.resize.height + 'px' });
          newTab.resize(tabOptions.resize.width - 10, tabOptions.resize.height - 10);
        });
      }
    }

    ///////////////////////////////////////////////////////////////////////////

    highed.dom.ap(
      csvTab.body,
      highed.dom.cr(
        'div',
        'highed-imp-help',
        'Paste CSV into the below box, or upload a file. Click Import to import your data.'
      ),
      csvPasteArea,

      // highed.dom.cr('span', 'highed-imp-label', 'Delimiter'),
      // delimiter,
      // highed.dom.cr('br'),

      // highed.dom.cr('span', 'highed-imp-label', 'Date Format'),
      // dateFormat,
      // highed.dom.cr('br'),

      // highed.dom.cr('span', 'highed-imp-label', 'Decimal Point Notation'),
      // decimalPoint,
      // highed.dom.cr('br'),

      // highed.dom.cr('span', 'highed-imp-label', 'First Row Is Series Names'),
      // firstAsNames,
      // highed.dom.cr('br'),

      csvImportBtn,
      csvImportFileBtn,
      liveDataImportBtn
    );

    highed.dom.ap(
      jsonTab.body,
      highed.dom.cr(
        'div',
        'highed-imp-help',
        'Paste JSON into the below box, or upload a file. Click Import to import your data. <br/><b>The JSON is the data passed to the chart constructor, and may contain any of the valid <a href="http://api.highcharts.com/highcharts/" target="_blank">options</a>.</b>'
      ),
      jsonPasteArea,
      jsonImportFileBtn,
      jsonImportBtn
    );

    highed.dom.on(csvImportBtn, 'click', function() {
      emitCSVImport();
    });

    highed.dom.on(liveDataImportBtn, 'click', function () {
      //console.log(liveDataInput);
      //console.log(liveDataInput.value);
      events.emit('ImportLiveData', {
      //  url: liveDataInput.value
      });
    });

    highed.dom.on(csvPasteArea, 'keyup', function(e) {
      if (e.keyCode === 13 || ((e.metaKey || e.ctrlKey) && e.key === 'z')) {
        emitCSVImport(csvPasteArea.value);
      }
    });

    highed.dom.on(csvImportFileBtn, 'click', function() {
      highed.readLocalFile({
        type: 'text',
        accept: '.csv',
        success: function(info) {
          csvPasteArea.value = info.data;
          highed.snackBar('File uploaded');
          emitCSVImport();
        }
      });
    });

    highed.dom.on(jsonImportBtn, 'click', function() {
      processJSONImport(jsonPasteArea.value);
    });

    highed.dom.on(jsonImportFileBtn, 'click', function() {
      highed.readLocalFile({
        type: 'text',
        accept: '.json',
        success: function(info) {
          jsonPasteArea.value = info.data;
          processJSONImport(info.data);
        }
      });
    });

    buildSampleTab();
    buildWebTab();
    updateOptions();

    delimiter.value = ',';
    //dateFormat.value = 'YYYY-mm-dd';
    firstAsNames.type = 'checkbox';
    decimalPoint.value = '.';
    firstAsNames.checked = true;

    //Should hide the web tab if running where cross-origin is an issue

    resize();

    ///////////////////////////////////////////////////////////////////////////

    return {
      on: events.on,
      loadCSV: loadCSVExternal,
      resize: resize,
      show: show,
      hide: hide,
      addImportTab: addImportTab
    };
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var exportPlugins = {};

  highed.plugins.export = {
    /** Install an export plugin
     *  @namespace highed.plugins.export
     *  @param name {string} - the name of the plugin
     *  @param definition {object} - the plugin definition
     */
    install: function(name, definition) {
      if (highed.isNull(exportPlugins[name])) {
        exportPlugins[name] = highed.merge(
          {
            description: '',
            options: {},
            title: false,
            downloadOutput: false
          },
          definition
        );

        if (exportPlugins[name].dependencies) {
          highed.include(exportPlugins[name].dependencies);
        }
      } else {
        highed.log(
          1,
          'tried to register an export plugin which already exists:',
          name
        );
      }
    }
  };

  /** Export widget
   *
   *  @example
   *  var exporter = highed.Exporter(document.body),
   *      preview = highed.ChartPreview(document.body)
   *  ;
   *
   *  exporter.init(preview.export.json(), preview.export.html(), preview.export.svg(), preview);
   *
   *  @constructor
   *
   *  @param parent {domnode} - the node to attach the widget to
   *  @param attributes {object} - the options
   *    > options {string} - things to include: `csv html json plugins`
   *    > plugins {string|array} - plugins to activate
   */
  highed.Exporter = function(parent, attributes) {
    var //splitter = highed.HSplitter(parent, {leftWidth: 50, noOverflow: true}),
      properties = highed.merge(
        {
          options: 'svg html json plugins',
          plugins: 'beautify-js beautify-json'
        },
        attributes
      ),
      tctrl = highed.TabControl(parent, false, true),
      htmlTab = tctrl.createTab({ title: 'HTML' }),
      jsonTab = tctrl.createTab({ title: 'JSON' }),
      svgTab = tctrl.createTab({ title: 'SVG' }),
      pluginTab = tctrl.createTab({ title: 'Plugins' }),
      pluginSplitter = highed.HSplitter(pluginTab.body, { leftWidth: 30 }),
      pluginList = highed.List(pluginSplitter.left),
      exportJSON = highed.dom.cr('a', '', 'Download'),
      exportHTML = highed.dom.cr('a', '', 'Download'),
      exportSVG = highed.dom.cr('a', '', 'Download'),
      jsonValue = highed.dom.cr(
        'textarea',
        'highed-imp-pastearea highed-scrollbar'
      ),
      htmlValue = highed.dom.cr(
        'textarea',
        'highed-imp-pastearea highed-scrollbar'
      ),
      svgValue = highed.dom.cr(
        'textarea',
        'highed-imp-pastearea highed-scrollbar'
      ),
      currentChartPreview = false,
      hasBuiltPlugins = false,
      hasBeenVisible = false,
      pluginData = {},
      activePlugins = {},
      activePlugin = false;

    properties.options = highed.arrToObj(properties.options);
    properties.plugins = highed.arrToObj(properties.plugins);

    ///////////////////////////////////////////////////////////////////////////

    //Hides unwanted stuff
    function updateOptions() {
      if (!properties.options.html) {
        htmlTab.hide();
      }
      if (!properties.options.json) {
        jsonTab.hide();
      }
      if (!properties.options.svg) {
        svgTab.hide();
      }
      if (!properties.options.plugins) {
        pluginTab.hide();
      }
      if (Object.keys(properties.plugins) === 0) {
        pluginTab.hide();
      }

      tctrl.selectFirst();
    }

    //Build plugin panel
    function buildPlugins() {
      if (hasBuiltPlugins) return;
      hasBuiltPlugins = true;

      Object.keys(exportPlugins).forEach(function(name) {
        var options = exportPlugins[name];

        pluginData[name] = { options: {} };

        if (!properties.plugins[name]) {
          return false;
        }

        function buildBody() {
          var container = highed.dom.cr('div', 'highed-plugin-details'),
            executeBtn = highed.dom.cr(
              'button',
              'highed-imp-button',
              options.exportTitle || 'Export'
            ),
            dynamicOptionsContainer = highed.dom.cr(
              'table',
              'highed-customizer-table'
            ),
            additionalUI = highed.dom.cr('div'),
            dynamicOptions = pluginData[name].options;

          // pluginSplitter.right.innerHTML = '';

          Object.keys(options.options || {}).forEach(function(pname) {
            dynamicOptions[pname] = options.options[pname].default;

            highed.dom.ap(
              dynamicOptionsContainer,
              highed.InspectorField(
                options.options[pname].type,
                options.options[pname].default,
                {
                  title: options.options[pname].label
                },
                function(nval) {
                  dynamicOptions[pname] = nval;

                  if (highed.isFn(options.show)) {
                    options.show.apply(pluginData[name], [currentChartPreview]);
                  }
                },
                true
              )
            );
          });

          function doExport() {
            if (highed.isFn(options.export) && currentChartPreview) {
              options.export.apply(pluginData[name], [
                dynamicOptions,
                currentChartPreview,
                function(err, data, filename) {
                  if (err) return highed.snackBar('Export error: ' + err);

                  if (options.downloadOutput) {
                    highed.download(filename, data);
                  }

                  highed.snackBar((options.title || name) + ' export complete');
                },
                additionalUI
              ]);
            }
          }

          highed.dom.on(executeBtn, 'click', doExport);

          highed.dom.ap(pluginSplitter.right, container);

          highed.dom.style(container, { display: 'none' });

          highed.dom.ap(
            container,
            highed.dom.cr(
              'div',
              'highed-customizer-table-heading',
              options.title || name
            ),
            highed.dom.cr('div', 'highed-imp-help', options.description),
            Object.keys(options.options || {}).length
              ? dynamicOptionsContainer
              : false,
            additionalUI,
            options.export ? executeBtn : false
          );

          if (highed.isFn(options.create)) {
            options.create.apply(pluginData[name], [
              currentChartPreview,
              additionalUI
            ]);
          }

          activePlugins[name] = {
            export: doExport,
            show: function() {
              if (activePlugin) {
                activePlugin.hide();
              }
              highed.dom.style(container, { display: '' });
              options.show.apply(pluginData[name], [currentChartPreview]);
              activePlugin = activePlugins[name];
            },
            hide: function() {
              highed.dom.style(container, { display: 'none' });
            }
          };
        }

        buildBody();

        pluginList.addItem({
          id: name,
          title: options.title || name,
          click: activePlugins[name].show
        });
      });
    }

    /** Set the export boxes based on chart JSON data (chart.options)
     *  @memberof highed.Exporter
     *  @param chartData {object} - the chart JSON
     *  @param chartHTML {string} - chart HTML
     *  @param chartSVG {string} - chart svg
     *  @param chartPreview {object} - instance of highed.ChartPreview
     */
    function init(chartData, chartHTML, chartSVG, chartPreview) {
      var title = '_export';

      if (chartData.title && chartData.title.text) {
        title = chartData.title.text.replace(/\s/g, '_') + title;
      } else {
        title = 'untitled' + title;
      }

      jsonValue.value = JSON.stringify(chartData);
      exportJSON.href = 'data:application/octet-stream,' + jsonValue.value;

      htmlValue.value = chartHTML;
      exportHTML.href =
        'data:application/octet-stream,' + encodeURIComponent(chartHTML);

      svgValue.value = chartSVG;
      exportSVG.href =
        'data:application/octet-stream,' + encodeURIComponent(chartSVG);

      exportJSON.download = title + '.json';
      exportHTML.download = title + '.html';
      exportSVG.download = title + '.svg';

      highed.dom.on(exportJSON, 'click', function() {
        highed.events('UIAction', 'BtnDownloadJSON');
      });

      highed.dom.on(exportHTML, 'click', function() {
        highed.events('UIAction', 'BtnDownloadHTML');
      });

      highed.dom.on(exportSVG, 'click', function() {
        highed.events('UIAction', 'BtnDownloadSVG');
      });

      currentChartPreview = chartPreview;

      buildPlugins();

      // Object.keys(activePlugins).forEach(function (name) {
      //     activePlugins[name].show();
      // });

      if (activePlugin) {
        activePlugin.show();
      }

      hasBeenVisible = true;
    }

    /** Force a resize of the UI
     *  @memberof highed.Exporter
     *  @param w {number} - the new width
     *  @param h {number} - the new height
     */
    function resize(w, h) {
      var bsize;

      //splitter.resize(w, h);
      tctrl.resize(w, h);
      bsize = tctrl.barSize();

      pluginSplitter.resize(w, h - bsize.h - 20);
      pluginList.resize(w, h - bsize.h);
    }

    function doSelectOnClick(thing, id) {
      highed.dom.on(thing, 'click', function() {
        thing.focus();
        thing.select();
        highed.emit('UIAction', 'Copy' + id);
      });
    }

    ///////////////////////////////////////////////////////////////////////////

    highed.dom.ap(
      htmlTab.body,
      // highed.dom.cr('div', 'highed-imp-headline', 'Export HTML'),
      highed.dom.ap(highed.dom.cr('div', 'highed-imp-spacer'), htmlValue),
      highed.dom.ap(highed.dom.cr('button', 'highed-imp-button'), exportHTML)
    );

    highed.dom.ap(
      jsonTab.body,
      // highed.dom.cr('div', 'highed-imp-headline', 'Export JSON'),
      highed.dom.ap(highed.dom.cr('div', 'highed-imp-spacer'), jsonValue),
      highed.dom.ap(highed.dom.cr('button', 'highed-imp-button'), exportJSON)
    );

    highed.dom.ap(
      svgTab.body,
      // highed.dom.cr('div', 'highed-imp-headline', 'Export JSON'),
      highed.dom.ap(highed.dom.cr('div', 'highed-imp-spacer'), svgValue),
      highed.dom.ap(highed.dom.cr('button', 'highed-imp-button'), exportSVG)
    );

    resize();
    updateOptions();

    doSelectOnClick(jsonValue, 'JSON');
    doSelectOnClick(htmlValue, 'HTML');
    doSelectOnClick(svgValue, 'SVG');

    ///////////////////////////////////////////////////////////////////////////

    return {
      init: init,
      resize: resize,
      buildPluginUI: buildPlugins
    };
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Basic chart preview
 *  This is just a facade to Highcharts.Chart mostly.
 *  It implements a sliding drawer type widget,
 *  where the initial state can be as part of the main DOM,
 *  and where the expanded state covers most of the screen (90%)
 *
 *  @todo this is a proper mess right now - need a good refactoring
 *
 *  @constructor
 *
 *  @param parent {domnode} - the node to attach the preview to
 *  @param attributes {object} - the settings
 *    > defaultChartOptions {object} - the default chart options
 */
highed.ChartPreview = function(parent, attributes) {
  var properties = highed.merge(
      {
        defaultChartOptions: {
          title: {
            text: 'My Chart'
          },
          subtitle: {
            text: 'My Untitled Chart'
          },
          exporting: {
            //   url: 'http://127.0.0.1:7801'
          }
        },
        expandTo: parent
      },
      attributes
    ),
    events = highed.events(),
    customizedOptions = highed.merge({}, properties.defaultChartOptions),
    aggregatedOptions = {},
    flatOptions = {},
    templateOptions = {},
    chartOptions = {},
    themeOptions = {},
    themeMeta = {},
    exports = {},
    customCodeDefault = [
      '/*',
      '// Sample of extending options:',
      'Highcharts.merge(true, options, {',
      '    chart: {',
      '        backgroundColor: "#bada55"',
      '    },',
      '    plotOptions: {',
      '        series: {',
      '            cursor: "pointer",',
      '            events: {',
      '                click: function(event) {',
      '                    alert(this.name + " clicked\\n" +',
      '                          "Alt: " + event.altKey + "\\n" +',
      '                          "Control: " + event.ctrlKey + "\\n" +',
      '                          "Shift: " + event.shiftKey + "\\n");',
      '                }',
      '            }',
      '        }',
      '    }',
      '});',
      '*/'
    ].join('\n'),
    customCode = '',
    customCodeStr = '',
    lastLoadedCSV = false,
    lastLoadedSheet = false,
    lastLoadedLiveData = false,
    throttleTimeout = false,
    chart = false,
    preExpandSize = false,
    toggleButton = highed.dom.cr(
      'div',
      'highed-icon highed-chart-preview-expand fa fa-external-link-square'
    ),
    expanded = false,
    constr = 'Chart',
    wysiwyg = {
      'g.highcharts-legend': { tab: 'Legend', id: 'legend--enabled' },
      'text.highcharts-title': { tab: 'Titles', id: 'title--text' },
      'text.highcharts-subtitle': { tab: 'Titles', id: 'subtitle--text' },
      '.highcharts-yaxis-labels': { tab: 'Axes', id: 'yAxis-labels--format' },
      '.highcharts-xaxis-labels': { tab: 'Axes', id: 'xAxis-labels--format' },
      '.highcharts-xaxis .highcharts-axis-title': {
        tab: 'Axes',
        id: 'xAxis-title--text'
      },
      '.highcharts-yaxis .highcharts-axis-title': {
        tab: 'Titles',
        id: 'yAxis-title--text'
      },
      'rect.highcharts-background': {
        tab: 'Appearance',
        id: 'chart--backgroundColor'
      },
      '.highcharts-series': { tab: 'Data series', id: 'series' },
      'g.highcharts-tooltip': { tab: 'Tooltip', id: 'tooltip--enabled' }
    };

  ///////////////////////////////////////////////////////////////////////////

  function attachWYSIWYG() {
    Object.keys(wysiwyg).forEach(function(key) {
      highed.dom.on(parent.querySelector(key), 'click', function(e) {
        events.emit('RequestEdit', wysiwyg[key], e.clientX, e.clientY);
        e.cancelBubble = true;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      });
    });
  }

  function stringifyFn(obj, tabs) {
    return JSON.stringify(
      obj,
      function(key, value) {
        if (highed.isFn(value)) {
          return value.toString();
        }

        return value;
      },
      tabs
    );
  }

  /* Get the chart if it's initied */
  function gc(fn) {
    if (highed.isFn(fn)) {
      if (chart !== false) {
        return fn(chart);
      }
      return fn(init());
    }
    return false;
  }

  /* Emit change events */
  function emitChange() {
    events.emit('ChartChange', aggregatedOptions);

    //Throttled event - we use this when doing server stuff in the handler
    //since e.g. using the color picker can result in quite a lot of updates
    //within a short amount of time
    window.clearTimeout(throttleTimeout);
    throttleTimeout = window.setTimeout(function() {
      events.emit('ChartChangeLately', aggregatedOptions);
    }, 200);
  }

  /* Init the chart */
  function init(options, pnode, noAnimation) {
    var i;

    //We want to work on a copy..
    options = options || aggregatedOptions;
    constr = constr || 'Chart';
    // options = highed.merge({}, options || aggregatedOptions);

    // if (aggregatedOptions && aggregatedOptions.series) {
    //     options = aggregatedOptions.series;
    // }

    if (noAnimation) {
      highed.setAttr(options, 'plotOptions--series--animation', false);
    }

    if (typeof window.Highcharts === 'undefined') {
      highed.snackBar('Highcharts.JS must be included to use the editor');
      return;
    }

    // (pnode || parent).innerHTML = 'Chart not loaded yet';

    // options.chart = options.chart || {};
    // options.chart.width = '100%';
    // options.chart.height = '100%';

    // if (options && options.chart) {
    //   delete options.chart.width;
    //   delete options.chart.height;
    // }

    try {
      chart = new Highcharts[constr](pnode || parent, options);
      //This is super ugly.
      // customizedOptions.series = customizedOptions.series || [];
      //  customizedOptions.series = chart.options.series || [];
      // highed.merge(customizedOptions.series, chart.options.series);
      //updateAggregated();

      if (chart && chart.options) {
        highed.clearObj(chartOptions);
        highed.merge(chartOptions, chart.options);
      }

      attachWYSIWYG();

      if (chart && chart.reflow) {
        //chart.reflow();
      }

      // highed.dom.ap(pnode || parent, toggleButton);

      Highcharts.addEvent(chart, 'afterPrint', function() {
        events.emit('RequestResize');
        // highed.dom.ap(pnode || parent, toggleButton);
      });

      events.emit('ChartRecreated');
    } catch (ex) {
      var e = ex.toString();

      //So we know that the return here is likely to be an
      //url with the error code. so extract it.
      highed.log(1, 'error initializing chart:', e);

      i = e.indexOf('www.');

      events.emit('Error', e);

      highed.emit('UIAction', 'UnsuccessfulChartGeneration');

      if (i > 0) {
        // highed.snackBar(
        //   'There is a problem with your chart!',
        //   e.substr(i),
        //   function() {
        //     window.open('http://' + e.substr(i));
        //   }
        // );
      } else {
        //Our assumption was wrong. The world is ending.
        // highed.snackBar(e);

        // console.error(e);
        console.error('exception trace:', ex.stack);
      }

      (pnode || parent).innerHTML = '';

      chart = false;
    }

    return chart;
  }

  /** Resize the preview
   *  Resizes based on the parent size.
   *  @memberof highed.ChartPreview
   */
  function resize(width, height) {
    gc(function(chart) {
      if (width && height) {
        // chart.setSize(width, height);
      }

      if (chart && chart.reflow) {
        // && chart.options) {
        try {
          chart.reflow();
        } catch (e) {
          // No idea why this keeps failing
        }
      }
    });
  }

  /**
   * Clear all themes from the chart. 
   * Used by cloud to reset theme
   */
  function clearTheme(theme, skipEmit) {
    
    themeOptions = false

    if (!skipEmit) {
      updateAggregated();
      init(aggregatedOptions);
      emitChange();
      events.emit('SetResizeData');
    }

    return true;
  }

  /**
   * Assign a theme to the chart
   * theme can either be a straight-up option set, or a theme object with
   * ID and so on.
   */
  function assignTheme(theme, skipEmit) {
    if (highed.isStr(theme)) {
      return assignTheme(JSON.parse(theme));
    }

    themeMeta = {};

    if (highed.isBasic(theme) || highed.isArr(theme)) {
      return false;
    }

    if (Object.keys(theme).length === 0) {
      return false;
    }

    if (theme && theme.options && theme.id) {
      // Assume that this uses the new format
      themeMeta = {
        id: theme.id,
        name: theme.name || theme.id
      };

      themeOptions = highed.merge({}, theme.options);
    } else {
      themeMeta = {
        id: highed.uuid(),
        name: 'Untitled Theme'
      };

      themeOptions = highed.merge({}, theme);
    }

    if (!skipEmit) {
      updateAggregated();
      init(aggregatedOptions);
      emitChange();
      events.emit('SetResizeData');
    }

    return true;
  }

  function updateAggregated(noCustomCode) {
    // customizedOptions.plotOptions = customizedOptions.plotOptions || {};
    // customizedOptions.plotOptions.series = customizedOptions.plotOptions.series || [];
    //  customizedOptions.series = customizedOptions.series || [];

    if (
      customizedOptions &&
      !highed.isArr(customizedOptions.yAxis) &&
      customizedOptions.yAxis
    ) {
      customizedOptions.yAxis = [customizedOptions.yAxis || {}];
    }

    if (
      customizedOptions &&
      !highed.isArr(customizedOptions.xAxis) &&
      customizedOptions.xAxis
    ) {
      customizedOptions.xAxis = [customizedOptions.xAxis || {}];
    }

    templateOptions = templateOptions || {};

    if (templateOptions.yAxis && !highed.isArr(templateOptions.yAxis)) {
      templateOptions.yAxis = [templateOptions.yAxis];
    }

    if (templateOptions.xAxis && !highed.isArr(templateOptions.xAxis)) {
      templateOptions.xAxis = [templateOptions.xAxis];
    }

    // if (templateOptions.series) {
    //     templateOptions.series = templateOptions.series.map(function (s) {
    //         delete s['data'];
    //         return s;
    //     });
    // }

    //Merge fest

    highed.clearObj(aggregatedOptions);

    // Apply theme first
    if (themeOptions && Object.keys(themeOptions).length) {
      highed.merge(
        aggregatedOptions,
        highed.merge(highed.merge({}, themeOptions))
      );
    }

    highed.merge(
      aggregatedOptions,
      highed.merge(highed.merge({}, templateOptions), customizedOptions)
    );

    //This needs to be cleaned up
    if (aggregatedOptions.yAxis && templateOptions.yAxis) {
      aggregatedOptions.yAxis.forEach(function(obj, i) {
        if (i < templateOptions.yAxis.length) {
          highed.merge(obj, templateOptions.yAxis[i]);
        }
      });
    }

    if (aggregatedOptions.xAxis && templateOptions.xAxis) {
      aggregatedOptions.xAxis.forEach(function(obj, i) {
        if (i < templateOptions.xAxis.length) {
          highed.merge(obj, templateOptions.xAxis[i]);
        }
      });
    }

    if (themeOptions && themeOptions.xAxis) {
      themeOptions.xAxis = highed.isArr(themeOptions.xAxis)
        ? themeOptions.xAxis
        : [themeOptions.xAxis];

      aggregatedOptions.xAxis.forEach(function(obj, i) {
        if (i < themeOptions.xAxis.length) {
          highed.merge(obj, themeOptions.xAxis[i]);
        }
      });
    }

    if (themeOptions && themeOptions.yAxis) {
      themeOptions.yAxis = highed.isArr(themeOptions.yAxis)
        ? themeOptions.yAxis
        : [themeOptions.yAxis];

      aggregatedOptions.yAxis.forEach(function(obj, i) {
        if (i < themeOptions.yAxis.length) {
          highed.merge(obj, themeOptions.yAxis[i]);
        }
      });
    }

    //Temporary hack
    //aggregatedOptions.series = customizedOptions.series;\
    aggregatedOptions.series = [];
    if (highed.isArr(customizedOptions.series)) {
      customizedOptions.series.forEach(function(obj, i) {
        var mergeTarget = {};

        if (themeOptions && highed.isArr(themeOptions.series)) {
          if (i < themeOptions.series.length) {
            mergeTarget = highed.merge({}, themeOptions.series[i]);
          }
        }

        aggregatedOptions.series.push(highed.merge(mergeTarget, obj));
      });
    }

    if (templateOptions.series) {
      aggregatedOptions.series = aggregatedOptions.series || [];

      templateOptions.series.forEach(function(obj, i) {
        if (i < aggregatedOptions.series.length) {
          highed.merge(aggregatedOptions.series[i], obj);
        } else {
          aggregatedOptions.series.push(highed.merge({}, obj));
        }
      });
    }

    if (aggregatedOptions.yAxis && !highed.isArr(aggregatedOptions.yAxis)) {
      aggregatedOptions.yAxis = [aggregatedOptions.yAxis];
    }

    if (aggregatedOptions.xAxis && !highed.isArr(aggregatedOptions.xAxis)) {
      aggregatedOptions.xAxis = [aggregatedOptions.xAxis];
    }

    highed.merge(aggregatedOptions, highed.option('stickyChartProperties'));

    // Finally, do custom code
    if (!noCustomCode && highed.isFn(customCode)) {
      customCode(aggregatedOptions);
    }
  }

  /** Load a template from the meta
   *  @memberof highed.ChartPreview
   *  @param template - the template object
   */
  function loadTemplate(template) {
    if (!template || !template.config) {
      return highed.log(
        1,
        'chart preview: templates must be an object {config: {...}}'
      );
    }

    constr = template.constructor || 'Chart';

    highed.clearObj(templateOptions);

    if (customizedOptions.xAxis) {
      delete customizedOptions.xAxis;
    }

    if (customizedOptions.yAxis) {
      delete customizedOptions.yAxis;
    }

    // highed.setAttr(customizedOptions, 'series', []);

    gc(function(chart) {
      templateOptions = highed.merge({}, template.config || {});

      updateAggregated();
      init(aggregatedOptions);
      emitChange();
    });
  }

  function loadSeries() {
    if (
      !gc(function(chart) {
        if (chart.options && chart.options.series) {
          customizedOptions.series = chart.options.series;
        }
        return true;
      })
    ) {
      customizedOptions.series = [];
    }
    updateAggregated();
  }

  /** Load CSV data
   *  @memberof highed.ChartPreview
   *  @name data.csv
   *  @param data {object} - the data to load
   */
  function loadCSVData(data, emitLoadSignal) {
    var mergedExisting = false,
      seriesClones = [];
    if (!data || !data.csv) {
      if (highed.isStr(data)) {
        data = {
          csv: data,
          // itemDelimiter: ';',
          firstRowAsNames: true
        };
      } else {
        return highed.log(1, 'chart load csv: data.csv is required');
      }
    }

    lastLoadedCSV = data.csv;
    lastLoadedSheet = false;
    lastLoadedLiveData = false;

    gc(function(chart) {
      var axis;

      // highed.setAttr(customizedOptions, 'series', []);
      // highed.setAttr(aggregatedOptions, 'series', []);

      // highed.setAttr(customizedOptions, 'plotOptions--series--animation', true);
      // highed.setAttr(customizedOptions, 'data--csv', data.csv);
      // highed.setAttr(customizedOptions, 'data--googleSpreadsheetKey', undefined);
      // highed.setAttr(customizedOptions, 'data--itemDelimiter', data.itemDelimiter);
      // highed.setAttr(customizedOptions, 'data--firstRowAsNames', data.firstRowAsNames);
      // highed.setAttr(customizedOptions, 'data--dateFormat', data.dateFormat);
      // highed.setAttr(customizedOptions, 'data--decimalPoint', data.decimalPoint);

      if (customizedOptions && customizedOptions.series) {
        (highed.isArr(customizedOptions.series)
          ? customizedOptions.series
          : [customizedOptions.series]
        ).forEach(function(series) {
          seriesClones.push(
            highed.merge({}, series, false, {
              data: 1,
              name: 1
            })
          );
        });
      }

      customizedOptions.series = [];

      highed.merge(customizedOptions, {
        plotOptions: {
          series: {
            animation: false
          }
        },
        data: {
          csv: data.csv,
          itemDelimiter: data.itemDelimiter,
          firstRowAsNames: data.firstRowAsNames,
          dateFormat: data.dateFormat,
          decimalPoint: data.decimalPoint,
          googleSpreadsheetKey: undefined,
          url: data.url
        }
      });

      updateAggregated();

      init(aggregatedOptions);
      loadSeries();
      emitChange();

      (customizedOptions.series || []).forEach(function(series, i) {
        if (i < seriesClones.length) {
          mergedExisting = true;
          highed.merge(series, seriesClones[i]);
        }
      });

      if (mergedExisting) {
        updateAggregated();
        init(aggregatedOptions);
        loadSeries();
        emitChange();
      }

      if (emitLoadSignal) {
        events.emit('LoadProjectData', data.csv);
      }
    });

    // setTimeout(function () {
    // gc(function (chart) {
    //   if (chart && highed.isArr(chart.xAxis) && chart.xAxis.length > 0) {
    //     customizedOptions.xAxis = customizedOptions.xAxis || [];
    //     chart.xAxis.forEach(function (a, i) {
    //       customizedOptions.xAxis[i] = customizedOptions.xAxis[i] || {};
    //       if (a.isDatetimeAxis) {
    //         customizedOptions.xAxis[i].type = 'datetime';
    //       } else if (a.categories) {
    //         customizedOptions.xAxis[i].type = 'categories';
    //       } else {
    //         // customizedOptions.xAxis[i].type = 'linear';
    //       }
    //     });
    //   }
    //   console.log(chart);
    // });
    // }, 1000);
  }

  /** Load project
   *  @memberof highed.ChartPreview
   *  @param projectData - the data to load
   */
  function loadProject(projectData) {
    var hasData = false,
      htmlEntities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>'
      };

    highed.emit('UIAction', 'LoadProject');

    lastLoadedCSV = false;
    lastLoadedSheet = false;
    lastLoadedLiveData = false;

    if (highed.isStr(projectData)) {
      try {
        return loadProject(JSON.parse(projectData));
      } catch (e) {
        highed.snackBar('Invalid project');
      }
    }

    if (projectData) {
      templateOptions = {};
      if (projectData.template) {
        templateOptions = projectData.template;
      }

      customizedOptions = {};
      if (projectData.options) {
        customizedOptions = projectData.options;
      }

      // highed.merge(customizedOptions, {
      //   data: {
      //     csv: undefined
      //   }
      // });

      // if (customizedOptions && customizedOptions.data) {
      //   customizedOptions.data.csv = undefined;
      // }

      if (customizedOptions.lang) {
        Highcharts.setOptions({
          lang: customizedOptions.lang
        });
      }

      if (typeof projectData.theme !== 'undefined') {
        assignTheme(projectData.theme, true);
      }

      if (customizedOptions && customizedOptions.series) {
        customizedOptions.series = highed.isArr(customizedOptions.series)
          ? customizedOptions.series
          : [customizedOptions.series];

        customizedOptions.series.forEach(function(series) {
          if (typeof series._colorIndex !== 'undefined') {
            delete series._colorIndex;
          }
        });
      }

      setCustomCode(
        projectData.customCode,
        function(err) {
          highed.snackBar('Error in custom code: ' + err);
        },
        true
      );

      constr = 'Chart';

      // Support legacy format
      if (projectData.settings && projectData.settings.templateView) {
        if (projectData.settings.templateView.activeSection === 'stock') {
          constr = 'StockChart';
        }
      }

      if (
        projectData.settings &&
        highed.isStr(projectData.settings.constructor)
      ) {
        constr = projectData.settings.constructor;
      }

      if (projectData.settings && projectData.settings.dataProvider) {
        if (projectData.settings.dataProvider.seriesMapping) {
          highed.merge(customizedOptions, {
            data: {
              seriesMapping: projectData.settings.dataProvider.seriesMapping
            }
          });
        }

        if (projectData.settings.dataProvider.googleSpreadsheet) {
          var provider = projectData.settings.dataProvider;
          var sheet = provider.googleSpreadsheet;

          if (customizedOptions.data) {
            sheet.startRow =
              provider.startRow || customizedOptions.data.startRow;
            sheet.endRow = provider.endRow || customizedOptions.data.endRow;
            sheet.startColumn =
              provider.startColumn || customizedOptions.data.startColumn;
            sheet.endColumn =
              provider.endColumn || customizedOptions.data.endColumn;
            if (provider.dataRefreshRate && provider.dataRefreshRate > 0) {
              sheet.dataRefreshRate = provider.dataRefreshRate || customizedOptions.data.dataRefreshRate;
              sheet.enablePolling = true;
            }
          }

          events.emit(
            'ProviderGSheet',
            projectData.settings.dataProvider.googleSpreadsheet
          );

          loadGSpreadsheet(sheet);

          hasData = true;
        } else if (projectData.settings.dataProvider.liveData){

          var provider = projectData.settings.dataProvider;
          var live = provider.liveData;

          loadLiveData(provider.liveData);
        } else if (projectData.settings.dataProvider.csv) {
          // We need to fix potential html-entities as they will mess up separators
          Object.keys(htmlEntities).forEach(function(ent) {
            projectData.settings.dataProvider.csv = projectData.settings.dataProvider.csv.replace(
              new RegExp(ent, 'g'),
              htmlEntities[ent]
            );
          });

          loadCSVData(
            {
              csv: projectData.settings.dataProvider.csv
            },
            true
          );

          // events.emit('LoadProjectData', projectData.settings.dataProvider.csv);

          hasData = true;
        }
      }

      // Not sure if this should be part of the project files yet
      // if (projectData.editorOptions) {
      //     Object.keys(projectData.editorOptions, function (key) {
      //         highed.option(key, projectData.editorOptions[key]);
      //     });
      // }

      if (!hasData) {
        updateAggregated();
        init(aggregatedOptions);
        emitChange();
      }
      events.emit('LoadProject', projectData);
    }
  }

  function loadLiveData(settings){

    lastLoadedLiveData = settings;

    lastLoadedCSV = false;
    lastLoadedSheet = false;

    highed.merge(customizedOptions, {
      data: lastLoadedLiveData
    });

    events.emit('ProviderLiveData', settings);
    updateAggregated();
    init(aggregatedOptions);

    loadSeries();
    emitChange();

  }

  function loadGSpreadsheet(options) {
    var key;

    lastLoadedCSV = false;
    lastLoadedSheet = options;

    lastLoadedSheet.googleSpreadsheetKey =
      lastLoadedSheet.googleSpreadsheetKey || lastLoadedSheet.id;
    lastLoadedSheet.googleSpreadsheetWorksheet =
      lastLoadedSheet.googleSpreadsheetWorksheet || lastLoadedSheet.worksheet;

    if (options && (options.googleSpreadsheetKey || '').indexOf('http') === 0) {
      // Parse out the spreadsheet ID
      // Located between /d/ and the next slash after that
      key = options.googleSpreadsheetKey;
      key = key.substr(key.indexOf('/d/') + 3);
      key = key.substr(0, key.indexOf('/'));

      options.googleSpreadsheetKey = key;
    }

    highed.merge(customizedOptions, {
      data: lastLoadedSheet
    });

    updateAggregated();
    init(aggregatedOptions);
    loadSeries();
    emitChange();

    // The sheet will be loaded async, so we should listen to the load event.
    gc(function(chart) {
      var found = Highcharts.addEvent(chart, 'load', function() {
        loadSeries();
        found();
      });
    });
  }

  function getCleanOptions(source) {
    return source;

    // return highed.merge(highed.merge({}, source), {
    //   data: {
    //     csv: false
    //   }
    // });

    // var clone = highed.merge({}, source || customizedOptions);

    // if (!highed.isArr(clone.yAxis)) {
    //   clone.yAxis = [clone.yAxis];
    // }

    // (clone.yAxis || []).forEach(function (axis) {
    //   if (axis.series) {
    //     delete axis.series.data;
    //   }
    // });

    // return clone;
  }

  /** Export project as JSON
   *  @memberof highed.ChartPreview
   */
  function toProject() {
    var loadedCSVRaw = false,
      gsheet = lastLoadedSheet,
      livedata = lastLoadedLiveData,
      themeData = false;

    if (
      chart &&
      chart.options &&
      chart.options.data &&
      chart.options.data.csv
    ) {
      loadedCSVRaw = chart.options.data.csv;
    }

    if (
      chart &&
      chart.options &&
      chart.options.data &&
      chart.options.data.googleSpreadsheetKey
    ) {
      gsheet = {
        googleSpreadsheetKey: chart.options.data.googleSpreadsheetKey,
        googleSpreadsheetWorksheet:
          chart.options.data.googleSpreadsheetWorksheet
      };
    }

    if (chart &&
        chart.options &&
        chart.options.data &&
        chart.options.data.url
      ) {
        livedata = {
          url: chart.options.data.url,
          interval: chart.options.data.interval,
          type: chart.options.data.type
        };
    }

    if (themeMeta && themeMeta.id && themeOptions) {
      themeData = {
        id: themeMeta.id,
        name: themeMeta.name,
        options: themeOptions || {}
      };
    }

    return {
      template: templateOptions,
      options: getCleanOptions(customizedOptions),
      customCode: highed.isFn(customCode) ? customCodeStr : '',
      theme: themeData,
      settings: {
        constructor: constr,
        dataProvider: {
          csv: (!gsheet && !livedata) ? (loadedCSVRaw || lastLoadedCSV) : false,
          googleSpreadsheet: gsheet,
          liveData: livedata
        }
      }
      //editorOptions: highed.serializeEditorOptions()
    };
  }

  function clearData(skipReinit) {
    lastLoadedCSV = false;
    lastLoadedSheet = false;
    lastLoadedLiveData = false;

    if (customizedOptions && customizedOptions.data) {
      customizedOptions.data = {};
    }

    if (customizedOptions.series) {
      customizedOptions.series = highed.isArr(customizedOptions.series)
        ? customizedOptions.series
        : [customizedOptions.series];

      customizedOptions.series.forEach(function(series) {
        if (series.data) {
          delete series.data;
        }
      });
    }

    if (!skipReinit) {
      updateAggregated();
      init(aggregatedOptions);
      emitChange();
    }
  }

  /**
   * Export project as a JSON string
   */
  function toProjectStr(tabs) {
    return stringifyFn(toProject(), tabs);
  }

  /** Load JSON data
   * Functionally, this only instances a new
   * chart with the supplied data as its options.
   * It accepts both a string and and object
   *
   * @memberof highed.ChartPreview
   * @name data.json
   * @param data {object} - the data to load
   */
  function loadJSONData(data) {
    lastLoadedCSV = false;

    gc(function(chart) {
      if (highed.isStr(data)) {
        try {
          loadJSONData(JSON.parse(data));
        } catch (e) {
          highed.snackBar('invalid json: ' + e);
        }
      } else if (highed.isBasic(data)) {
        highed.snackBar('the data is not valid json');
      } else {
        templateOptions = {};
        highed.clearObj(customizedOptions);
        highed.merge(customizedOptions, highed.merge({}, data));

        if (!highed.isNull(data.series)) {
          customizedOptions.series = data.series;
        }

        updateAggregated();
        init(customizedOptions);
        loadSeries();
        emitChange();
      }
    });
  }

  /**
   * Load raw dataset (array of arrays)
   */
  //function

  /** Set chart options from an object
   *
   */
  function setChartOptions(options) {
    function emitWidthChange() {
      events.emit('AttrChange', {
        id: 'chart.width'
      });
    }

    function emitHeightChange() {
      events.emit('AttrChange', {
        id: 'chart.height'
      });
    }

    var doEmitHeightChange = false,
      doEmitWidthChange = false;

    // Temp. hack to deal with actual sizing
    if (options && options.chart) {
      if (typeof options.chart.width !== 'undefined') {
        if (
          !customizedOptions.chart ||
          typeof customizedOptions.chart === 'undefined'
        ) {
          doEmitWidthChange = true;
        } else if (customizedOptions.chart.width !== options.chart.width) {
          doEmitWidthChange = true;
        }
      }

      if (typeof options.chart.height !== 'undefined') {
        if (
          !customizedOptions.chart ||
          typeof customizedOptions.chart === 'undefined'
        ) {
          doEmitHeightChange = true;
        } else if (customizedOptions.chart.height !== options.chart.height) {
          doEmitHeightChange = true;
        }
      }
    }

    // console.time('remblanks');
    customizedOptions = highed.transform.remBlanks(
      highed.merge({}, options, false)
    );
    // console.timeEnd('remblanks');

    if (customizedOptions && customizedOptions.lang) {
      Highcharts.setOptions({
        lang: customizedOptions.lang
      });
    }

    if (options && options.global) {
    }

    // This is nasty
    if (options && options.data && options.data.googleSpreadsheetKey) {
      events.emit('LoadedGoogleSpreadsheet');
    }

    updateAggregated();
    init(aggregatedOptions, false, true);
    emitChange();

    if (doEmitHeightChange) {
      emitHeightChange();
    }

    if (doEmitWidthChange) {
      emitWidthChange();
    }
  }

  /** Load chart settings
   * Note that merges the incoming settings with the existing ones.
   * @memberof highed.ChartPreview
   * @name data.settings
   * @param settings {object} - the settings to load
   */
  function loadChartSettings(settings) {
    gc(function(chart) {
      Object.keys(settings || {}).forEach(function(key) {
        highed.setAttr(customizedOptions, key, settings[key]);
      });

      updateAggregated();
      init(aggregatedOptions);
      emitChange();
    });
  }

  function loadSeriesData(seriesArr) {
    if (!highed.isArr(seriesArr)) return;
    customizedOptions.series = customizedOptions.series || [];

    if (seriesArr.length < customizedOptions.series.length) {
      //Need to delete some series
      customizedOptions.series.splice(
        seriesArr.length,
        customizedOptions.series.length - seriesArr.length
      );
    }

    seriesArr.forEach(function(s, i) {
      if (s.name) {
        set('series-name', s.name, i);
      }
      if (s.data) {
        set('series-data', s.data, i);
      }
    });
  }

  /** Set an attribute
   *  @memberof highed.ChartPreview
   *  @name options.set
   *  @param id {string} - the path of the attribute
   *  @param value {anything} - the value to set
   *  @param index {number} - used if the option is an array
   */
  function set(id, value, index) {
    gc(function(chart) {
      //highed.setAttr(chart.options, id, value, index);
      highed.setAttr(
        chart.options,
        'plotOptions--series--animation',
        false,
        index
      );
    });

    //We want to be able to set the customized options even if the chart
    //doesn't exist
    highed.setAttr(customizedOptions, id, value, index);

    flatOptions[id] = value;

    if (id.indexOf('lang--') === 0 && customizedOptions.lang) {
      Highcharts.setOptions({
        lang: customizedOptions.lang
      });
    }

    updateAggregated();
    init(aggregatedOptions, false, true);
    emitChange();

    events.emit('AttrChange', {
      id: id.replace(/\-\-/g, '.').replace(/\-/g, '.'),
      value: value
    });
  }

  /** Get embeddable JSON
   *  This returns the merged chart, with both customized options
   *  and options set indirectly through templates.
   *  @memberof highed.ChartPreview
   *  @name export.json
   *  @returns {object} - the chart object
   */
  function getEmbeddableJSON(noCustomCode) {
    var r;

    updateAggregated(noCustomCode);
    r = getCleanOptions(highed.merge({}, aggregatedOptions));

    //This should be part of the series
    if (!highed.isNull(r.data)) {
      // Don't delete spreadsheet stuff
      if (!r.data.googleSpreadsheetKey) {
        r.data = undefined;
      }
      //delete r['data'];
    }

    if (r && highed.isArr(r.series)) {
      r.series = r.series.map(function(s) {
        var cloned = highed.merge({}, s);
        delete s.data;
        return s;
      });
    }

    if (lastLoadedSheet) {
      highed.merge(r, {
        data: lastLoadedSheet
      });
    } else if (lastLoadedLiveData) {
      highed.merge(r, {
        data: lastLoadedLiveData,
        googleSpreadsheetKey: false,
        googleSpreadsheetWorksheet: false
      });
    } else if (lastLoadedCSV) {
      highed.merge(r, {
        data: {
          csv: lastLoadedCSV,
          googleSpreadsheetKey: false,
          googleSpreadsheetWorksheet: false
        }
      });
    }

    return r;
  }

  /**
   * Convert the chart to a string
   */
  function toString(tabs) {
    return stringifyFn(getEmbeddableJSON(), tabs);
  }

  /** Get embeddable SVG
   *  @memberof highed.ChartPreview
   *  @name export.svg
   *  @returns {string} - the result from `Highcharts.Chart.getSVG()`
   */
  function getEmbeddableSVG() {
    return gc(function(chart) {
      return highed.isFn(chart.getSVG) ? chart.getSVG() : '';
    });
  }

  /** Get embeddable JavaScript
   *  @memberof highed.ChartPreview
   *  @name export.js
   *  @param id {string} - the ID of the node to attach the chart to
   *  @returns {string} - a string containing JavaScript to reproduce the chart
   */
  function getEmbeddableJavaScript(id) {
    return gc(function(chart) {
      var cdnIncludes = [
          'https://code.highcharts.com/stock/highstock.js',
          'https://code.highcharts.com/highcharts-more.js',
          'https://code.highcharts.com/highcharts-3d.js',
          'https://code.highcharts.com/modules/data.js',
          'https://code.highcharts.com/modules/exporting.js',
          'https://code.highcharts.com/modules/funnel.js',
          'https://code.highcharts.com/modules/annotations.js',
          // 'https://code.highcharts.com/modules/series-label.js'
          'https://code.highcharts.com/modules/solid-gauge.js'
        ],
        cdnIncludesArr = [],
        title =
          chart.options && chart.options.title
            ? chart.options.title.text || 'untitled chart'
            : 'untitled chart';

      id = id || '';

      /*
                This magic code will generate an injection script that will
                check if highcharts is included, and include it if not.
                Afterwards, it will create the chart, and insert it into the page.

                It's quite messy, could to client-side templating or something,
                but it works.
            */

      if (highed.option('includeCDNInExport')) {
        cdnIncludesArr = [
          'var files = ',
          JSON.stringify(cdnIncludes),
          ',',
          'loaded = 0; ',
          'if (typeof window["HighchartsEditor"] === "undefined") {',
          'window.HighchartsEditor = {',
          'ondone: [cl],',
          'hasWrapped: false,',
          'hasLoaded: false',
          '};',
          'include(files[0]);',
          '} else {',
          'if (window.HighchartsEditor.hasLoaded) {',
          'cl();',
          '} else {',
          'window.HighchartsEditor.ondone.push(cl);',
          '}',
          '}',
          'function isScriptAlreadyIncluded(src){',
          'var scripts = document.getElementsByTagName("script");',
          'for (var i = 0; i < scripts.length; i++) {',
          'if (scripts[i].hasAttribute("src")) {',
          'if ((scripts[i].getAttribute("src") || "").indexOf(src) >= 0 || (scripts[i].getAttribute("src") === "http://code.highcharts.com/highcharts.js" && src === "https://code.highcharts.com/stock/highstock.js")) {',
          'return true;',
          '}',
          '}',
          '}',
          'return false;',
          '}',
          'function check() {',
          'if (loaded === files.length) {',
          'for (var i = 0; i < window.HighchartsEditor.ondone.length; i++) {',
          'try {',
          'window.HighchartsEditor.ondone[i]();',
          '} catch(e) {',
          'console.error(e);',
          '}',
          '}',
          'window.HighchartsEditor.hasLoaded = true;',
          '}',
          '}',

          'function include(script) {',
          'function next() {',
          '++loaded;',
          'if (loaded < files.length) {',
          'include(files[loaded]);',
          '}',
          'check();',
          '}',
          'if (isScriptAlreadyIncluded(script)) {',
          'return next();',
          '}',
          'var sc=document.createElement("script");',
          'sc.src = script;',
          'sc.type="text/javascript";',
          'sc.onload=function() { next(); };',
          'document.head.appendChild(sc);',
          '}',

          'function each(a, fn){',
          'if (typeof a.forEach !== "undefined"){a.forEach(fn);}',
          'else{',
          'for (var i = 0; i < a.length; i++){',
          'if (fn) {fn(a[i]);}',
          '}',
          '}',
          '}',

          'var inc = {},incl=[]; each(document.querySelectorAll("script"), function(t) {inc[t.src.substr(0, t.src.indexOf("?"))] = 1; ',
          '});'
        ];
      }

      return (
        '\n' +
        [
          '(function(){ ',

          cdnIncludesArr.join(''),

          ' function cl() {',
          'if(typeof window["Highcharts"] !== "undefined"){', //' && Highcharts.Data ? ',

          !customizedOptions.lang
            ? ''
            : 'Highcharts.setOptions({lang:' +
              JSON.stringify(customizedOptions.lang) +
              '});',
          'var options=',
          stringifyFn(getEmbeddableJSON(true)),
          ';',
          highed.isFn(customCode) ? customCodeStr : '',
          'new Highcharts.' + constr + '("',
          id,
          '", options);',
          '}',
          '}',
          '})();'
        ].join('') +
        '\n'
      );
    });
  }

  function getCodePreview() {
    var options = getEmbeddableJSON(true);

    if (highed.isFn(customCode) && customCodeStr) {
      customCode(options);
    }

    return stringifyFn(options, '  ');
  }

  /** Get embeddable HTML
   *  @memberof highed.ChartPreview
   *  @name export.html
   *  @param placehold {bool} - if true, SVG will also be embedded
   *  @returns {string} - a string of embeddable HTML
   */
  function getEmbeddableHTML(placehold) {
    return gc(function(chart) {
      var id = 'highcharts-' + highed.uuid();
      return (
        '\n' +
        [
          '<div id="',
          id,
          '">',
          placehold ? getEmbeddableSVG() : '',
          '</div>'
        ].join('') +
        '<script>' +
        getEmbeddableJavaScript(id) +
        '</script>'
      );
    });
  }

  /**
   * Expand the chart from its drawer
   * @memberof highed.ChartPreview
   */
  function expand() {
    gc(function(chart) {
      if (!expanded) {
        highed.dom.style(properties.expandTo, {
          width: '100%',
          display: 'block'
        });

        preExpandSize = highed.dom.size(parent);
        init(chart.options, properties.expandTo);
        expanded = true;

        toggleButton.className =
          'highed-icon highed-chart-preview-expand fa fa-times-circle';
      }
    });
  }

  /** Collapse the chart into its drawer
   *  @memberof highed.ChartPreview
   */
  function collapse() {
    gc(function(chart) {
      if (preExpandSize && expanded) {
        highed.dom.style(properties.expandTo, {
          width: '0px',
          display: 'none'
        });

        toggleButton.className =
          'highed-icon highed-chart-preview-expand fa fa-external-link-square';

        init(chart.options, parent);
        expanded = false;
      }
    });
  }

  /** Flush all options and start over
   *  @memberof highed.ChartPreview
   *  @name new
   */
  function newChart() {
    highed.cloud.flush();

    highed.clearObj(templateOptions);
    highed.clearObj(customizedOptions);
    highed.clearObj(flatOptions);

    customCode = false;

    highed.merge(customizedOptions, properties.defaultChartOptions);

    updateAggregated();

    init(aggregatedOptions);

    emitChange();
    events.emit('New');
  }

  /** Export the chart - calls `Highcharts.Chart.exportChart(..)`
   *  @memberof highed.ChartPreview
   *  @name data.export
   *  @param optons {object} - the export options
   */
  function exportChart(options) {
    gc(function(chart) {
      chart.exportChart(options, aggregatedOptions);
    });
  }

  /** Attach to a new DOM parent
   *  @memberof highed.ChartPreview
   *  @param newParent {DOMNode} - the node to attach to
   */
  function changeParent(newParent) {
    parent = newParent;
    init();
  }

  /** Returns the constructor currently in use
   *  @memberof highed.ChartPreview
   *  @returns {string}
   */
  function getConstructor() {
    return constr;
  }

  function getTheme() {
    return {
      id: themeMeta.id,
      name: themeMeta.name,
      options: themeOptions
    };
  }

  function getCustomCode() {
    return customCodeStr && customCodeStr.length
      ? customCodeStr
      : customCodeDefault;

    // return highed.isFn(customCode) ?
    // customCodeStr || customCodeDefault :
    // customCode || customCodeDefault;
  }

  function setCustomCode(newCode, errFn, skipEmit) {
    var fn;

    if (!newCode) {
      customCode = false;
      customCodeStr = '';
    }

    try {
      // eval('(var options = {};' + newCode + ')');
      customCode = new Function(
        'options',
        [
          'if (options.yAxis && options.yAxis.length === 1) options.yAxis = options.yAxis[0];',
          'if (options.xAxis && options.xAxis.length === 1) options.xAxis = options.xAxis[0];',
          'if (options.zAxis && options.zAxis.length === 1) options.zAxis = options.zAxis[0];',
          'if (!options.series || options.series.length === 0) return;',
          'var encodedUrl = "";'
        ].join('') + newCode 
      );
      customCodeStr = newCode;
    } catch (e) {
      customCode = false;
      customCodeStr = newCode;
      return highed.isFn(errFn) && errFn(e);
    }

    if (!skipEmit) {
      updateAggregated();
      init(aggregatedOptions);
      emitChange();
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  //Init the initial chart
  updateAggregated();
  init();

  highed.dom.on(toggleButton, 'click', function() {
    return expanded ? collapse() : expand();
  });

  ///////////////////////////////////////////////////////////////////////////

  exports = {
    assignTheme: assignTheme,
    clearTheme: clearTheme,
    getTheme: getTheme,
    getConstructor: getConstructor,
    on: events.on,
    expand: expand,
    collapse: collapse,
    new: newChart,
    changeParent: changeParent,

    getHighchartsInstance: gc,

    loadTemplate: loadTemplate,
    loadSeries: loadSeriesData,
    resize: resize,

    setCustomCode: setCustomCode,
    getCustomCode: getCustomCode,

    toProject: toProject,
    toProjectStr: toProjectStr,
    loadProject: loadProject,

    toString: toString,

    options: {
      set: set,
      setAll: setChartOptions,
      customized: customizedOptions,
      getCustomized: function() {
        return customizedOptions;
      },
      full: aggregatedOptions,
      flat: flatOptions,
      chart: chartOptions,
      getPreview: getCodePreview
    },

    data: {
      csv: loadCSVData,
      json: loadJSONData,
      settings: loadChartSettings,
      export: exportChart,
      gsheet: loadGSpreadsheet,
      clear: clearData,
      live: loadLiveData
    },

    export: {
      html: getEmbeddableHTML,
      json: getEmbeddableJSON,
      svg: getEmbeddableSVG,
      js: getEmbeddableJavaScript
    }
  };

  return exports;
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var modal = highed.OverlayModal(false, {
    showOnInit: false,
    zIndex: 11000,
    width: 300,
    height: 400
  });

  highed.dom.ap(
    modal.body,
    highed.dom.cr('span', '', 'License info goes here')
  );

  highed.licenseInfo = {
    /** Show license information modal
     *  @namespace highed.licenseInfo
     *  @type function
     */
    show: modal.show
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

(function() {
  var flatOptions = {};

  function dive(tree) {
    if (tree) {
      if (highed.isArr(tree)) {
        tree.forEach(dive);
      } else if (tree.options) {
        if (highed.isArr(tree.options)) {
          tree.options.forEach(dive);
        } else {
          Object.keys(tree.options).forEach(function(key) {
            dive(tree.options[key]);
          });
        }
      } else if (tree.id) {
        flatOptions[tree.id] = tree;
      }
    }
  }

  dive(highed.meta.optionsExtended);

  /** Simple version of the customizer. Whitelisted options
   *  @constructor
   *  @emits PropertyChange - when a property is modified
   *  @param parent {domnode} - the node to append to
   *  @param attributes {object} - settings
   *    > availableSettings {array} - whitelist of options to include
   */
  highed.SimpleCustomizer = function(parent, attributes) {
    var events = highed.events(),
      container = highed.dom.cr('div', 'highed-simple-customizer'),
      table = highed.dom.cr('table', 'highed-customizer-table'),
      properties = highed.merge(
        {
          availableSettings: [
            'title--text',
            'subtitle--text',
            'colors',
            'chart--backgroundColor',
            'yAxis-title--style',
            'yAxis--type',
            'yAxis--opposite',
            'yAxis--reversed',
            'yAxis-labels--format'
          ]
        },
        attributes
      );

    ////////////////////////////////////////////////////////////////////////

    /** Build the property setter
     *  @memberof highed.SimpleCustomizer
     *  @param options {object} - the current chart options
     */
    function build(options) {
      table.innerHTML = '';

      properties.availableSettings.forEach(function(name) {
        var group = highed.merge(
          {
            text: name.replace(/\-/g, ' '),
            id: name,
            tooltipText: false,
            dataType: 'string',
            defaults: false,
            custom: {},
            values: false
          },
          flatOptions[name]
        );

        highed.dom.ap(
          table,
          highed.InspectorField(
            group.values ? 'options' : group.dataType,
            highed.getAttr(options, group.id, 0) || group.defaults,
            {
              title: group.text,
              tooltip: group.tooltipText,
              values: group.values,
              custom: group.custom,
              defaults: group.defaults,
              attributes: group.attributes || []
            },
            function(newValue) {
              events.emit('PropertyChange', group.id, newValue, 0);
            },
            false,
            group.id
          )
        );
      });
    }

    function highlightNode(n) {
      if (!n) return;

      highed.dom.style(n, {
        border: '2px solid #33aa33'
      });

      n.focus();
      n.scrollIntoView(true);

      window.setTimeout(function() {
        highed.dom.style(n, {
          border: ''
        });
      }, 2000);
    }

    /** Focus a field in the inspector
     *  @memberof highed.SimpleCustomizer
     *  @param thing {object} - the thing to focus
     *    > id {anything} - the id of the field
     *  @param x {number} - the x position the request came from
     *  @param y {number} - the y position the request came from
     */
    function focus(thing, x, y) {
      var id = thing.id;
      if (id.indexOf('-') >= 0) {
        highlightNode(table.querySelector('#' + id));
      }
    }

    ////////////////////////////////////////////////////////////////////////

    highed.ready(function() {
      highed.dom.ap(
        parent,
        highed.dom.ap(
          container,
          highed.dom.cr('div', 'highed-customizer-table-heading', 'Edit Chart'),
          table
        )
      );
    });

    return {
      focus: focus,
      on: events.on,
      build: build
    };
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 ******************************************************************************/

// @format

(function() {
  function createTeamDropDown(target) {
    var dropdown = highed.DropDown(target);

    function refresh() {
      dropdown.clear();

      highed.cloud.getTeams(function(teamCollection) {
        teamCollection.forEach(function(team) {
          dropdown.addItem({
            id: team.id,
            title: team.name
          });
        });

        dropdown.selectByIndex(0);
      });
    }

    return {
      refresh: refresh,
      dropdown: dropdown
    };
  }

  var chartPreview = false,
    modal = highed.OverlayModal(document.body, {
      //eslint-disable-line no-undef
      showOnInit: false,
      width: '90%',
      height: '90%',
      zIndex: 10001
    }),
    mainContainer = highed.dom.cr('div'),
    charts = highed.dom.cr('div', 'highed-cloud-chart-container'),
    teams = createTeamDropDown(mainContainer),
    pageNavigation = highed.dom.cr('div', 'highed-cloud-paging'),
    activeTeam,
    activeChart,
    saveNewModal = highed.OverlayModal(document.body, {
      //eslint-disable-line no-undef
      showOnInt: false,
      width: 400,
      height: 300,
      zIndex: 10001
    }),
    saveNewTeamsContainer = highed.dom.cr('div'),
    saveNewTeams = createTeamDropDown(saveNewTeamsContainer),
    saveNewName = highed.dom.cr('input', 'highed-field-input'),
    saveNewBtn = highed.dom.cr('button', 'highed-ok-button', 'Save to cloud'),
    loginForm = false;

  highed.dom.ap(
    saveNewModal.body,
    highed.dom.cr('h2', 'highed-titlebar', 'Save to Cloud'),
    highed.dom.cr('div', '', 'Team'),
    saveNewTeamsContainer,
    highed.dom.cr('br'),
    highed.dom.cr('div', '', 'Chart Name'),
    saveNewName,
    saveNewBtn
  );

  highed.dom.on(saveNewBtn, 'click', function() {
    saveNewBtn.disabled = true;
    saveNewBtn.innerHTML = 'SAVING TO CLOUD...';

    highed.cloud.saveNewChart(
      activeTeam,
      saveNewName.value,
      JSON.stringify(chartPreview.toProject()),
      function(data) {
        saveNewBtn.disabled = false;
        if (!data.error && data) {
          activeChart = data;
          saveNewModal.hide();
          saveNewBtn.innerHTML = 'SAVE TO CLOUD';
          highed.snackBar('SAVED TO CLOUD');
        } else {
          highed.snackBar('Error saving to cloud');
        }
      }
    );
  });

  saveNewTeams.dropdown.on('Change', function(item) {
    activeTeam = item.id();
  });

  function addChart(chart) {
    var container = highed.dom.cr('div', 'highed-cloud-chart'),
      thumbnail = highed.dom.cr('div', 'highed-cloud-thumbnail');

    highed.dom.ap(
      charts,
      highed.dom.ap(
        container,
        thumbnail,
        highed.dom.cr('div', 'highed-cloud-chart-title', chart.name)
      )
    );

    highed.dom.style(thumbnail, {
      'background-image':
        'url(' + chart.thumbnail_url + '?t=' + new Date().getTime() + ')'
    });

    highed.dom.on(thumbnail, 'click', function() {
      if (chartPreview) {
        highed.cloud.getChart(chart.team_owner, chart.id, function(data) {
          try {
            chartPreview.loadProject(JSON.parse(data.data));
            activeChart = chart.id;
            activeTeam = chart.team_owner;
            modal.hide();
          } catch (e) {
            highed.snackbar(e);
          }
        });
      }
    });
  }

  highed.dom.ap(
    modal.body,
    highed.dom.cr(
      'h2',
      'highed-titlebar',
      'Load project from Highcharts Cloud'
    ),
    highed.dom.ap(mainContainer, charts, pageNavigation)
  );

  function getCharts(page, teamID) {
    // Load charts here
    charts.innerHTML = 'Loading Charts';
    highed.cloud.getCharts(
      teamID,
      function(chartCollection, full) {
        charts.innerHTML = '';
        pageNavigation.innerHTML = '';

        if (full.pageCount > 1) {
          for (var i = 1; i <= full.pageCount; i++) {
            (function(pageIndex) {
              var item = highed.dom.cr('span', 'highed-cloud-paging-item', i);

              if (pageIndex === page) {
                item.className += ' selected';
              }

              highed.dom.on(item, 'click', function() {
                getCharts(pageIndex, teamID);
              });

              highed.dom.ap(pageNavigation, item);
            })(i);
          }
        }

        chartCollection.forEach(addChart);
      },
      page
    );
  }

  teams.dropdown.on('Change', function(item) {
    getCharts(false, item.id());
  });

  highed.cloud.flush = function() {
    activeChart = false;
    activeTeam = false;
  };

  highed.cloud.save = function(chartp) {
    highed.cloud.loginForm(function() {
      saveNewName.value = '';
      saveNewName.focus();
      chartPreview = chartp || chartPreview;
      if (activeChart && activeTeam) {
        // Save project
        highed.cloud.saveExistingChart(
          activeTeam,
          activeChart,
          JSON.stringify(chartPreview.toProject()),
          function() {
            highed.snackbar('CHART SAVED TO CLOUD');
          }
        );
      } else {
        // Show save as new UI
        saveNewModal.show();
        saveNewTeams.refresh();
      }
    });
  };

  highed.cloud.showUI = function(preview) {
    highed.cloud.loginForm(function() {
      chartPreview = preview;
      modal.show();
      teams.refresh();
    });
  };

  function createLoginForm() {
    var body = highed.dom.cr('div', 'highed-cloud-login-container'),
      username = highed.dom.cr('input', 'highed-cloud-input'),
      password = highed.dom.cr('input', 'highed-cloud-input'),
      btn = highed.dom.cr('button', 'highed-ok-button', 'LOGIN'),
      notice = highed.dom.cr('div', 'highed-cloud-login-error'),
      loginCallback = false,
      modal = highed.OverlayModal(false, {
        height: 300,
        width: 250,
        zIndex: 10001
      });

    username.name = 'cloud-username';
    password.name = 'cloud-password';

    username.placeholder = 'E-Mail';
    password.placeholder = 'Your password';
    password.type = 'password';

    highed.dom.ap(
      modal.body,
      highed.dom.ap(
        body,
        highed.dom.cr('h3', '', 'Login to Highcharts Cloud'),
        notice,
        username,
        password,
        btn,
        highed.dom.cr(
          'div',
          'highed-cloud-login-notice',
          'Requires a Highcharts Cloud account'
        )
      )
    );

    highed.dom.on(btn, 'click', function() {
      btn.disabled = true;
      highed.dom.style(notice, { display: 'none' });

      highed.cloud.login(username.value, password.value, function(err, res) {
        btn.disabled = false;

        if (err || !res || typeof res.token === 'undefined') {
          notice.innerHTML =
            'Error: Check username/password (' + (err || res.message) + ')';
          highed.dom.style(notice, { display: 'block' });
        } else {
          modal.hide();
          if (highed.isFn(loginCallback)) {
            loginCallback();
          }
        }
      });
    });

    return function(fn) {
      loginCallback = fn || function() {};
      if (highed.cloud.isLoggedIn()) {
        loginCallback();
      } else {
        modal.show();
      }
    };
  }

  highed.cloud.loginForm = function(fn) {
    if (!loginForm) {
      loginForm = createLoginForm();
    }
    loginForm(fn);
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/* global window */

highed.DrawerEditor = function(parent, options) {
  var events = highed.events(),
    // Main properties
    properties = highed.merge(
      {
        defaultChartOptions: {},
        useHeader: true,
        features: [
          'data',
          'templates',
          'customize',
          'customcode',
          'advanced',
          'export'
        ],
        importer: {},
        dataGrid: {},
        customizer: {},
        toolbarIcons: []
      },
      options
    ),
    errorBar = highed.dom.cr(
      'div',
      'highed-errorbar highed-box-size highed-transition'
    ),
    errorBarHeadline = highed.dom.cr(
      'div',
      'highed-errorbar-headline',
      'This is an error!'
    ),
    errorBarBody = highed.dom.cr(
      'div',
      'highed-errorbar-body highed-scrollbar',
      'Oh noes! something is very wrong!'
    ),
    lastSetWidth = false,
    fixedSize = false,
    splitter = highed.VSplitter(parent, {
      topHeight: properties.useHeader ? '60px' : '0px',
      noOverflow: true
    }),
    toolbar = highed.Toolbar(splitter.top),
    toolbox = highed.Toolbox(splitter.bottom),
    // Data table
    dataTableContainer = highed.dom.cr('div', 'highed-box-size highed-fill'),
    dataTable = highed.DataTable(
      dataTableContainer,
      highed.merge(
        {
          importer: properties.importer
        },
        properties.dataGrid
      )
    ),
    // Chart preview
    chartFrame = highed.dom.cr(
      'div',
      'highed-transition highed-box-size highed-chart-frame highed-scrollbar'
    ),
    chartContainer = highed.dom.cr(
      'div',
      'highed-box-size highed-chart-frame-body'
    ),
    chartPreview = highed.ChartPreview(chartContainer, {
      defaultChartOptions: properties.defaultChartOptions
    }),
    // Res preview bar
    resPreviewBar = highed.dom.cr('div', 'highed-res-preview'),
    resQuickSelContainer = highed.dom.cr('div', 'highed-res-quicksel'),
    resQuickSel = highed.DropDown(resQuickSelContainer),
    resWidth = highed.dom.cr('input', 'highed-res-number'),
    resHeight = highed.dom.cr('input', 'highed-res-number'),
    // Exporter
    exporterContainer = highed.dom.cr('div', 'highed-box-size highed-fill'),
    exporter = highed.Exporter(exporterContainer),
    // Templates
    templatesContainer = highed.dom.cr('div', 'highed-box-size highed-fill'),
    templates = highed.ChartTemplateSelector(templatesContainer, chartPreview),
    // Customizer
    customizerContainer = highed.dom.cr('div', 'highed-box-size highed-fill'),
    customizer = highed.ChartCustomizer(
      customizerContainer,
      properties.customizer,
      chartPreview
    ),
    // Toolbar buttons
    toolbarButtons = [
      {
        title: highed.L('newChart'),
        css: 'fa-file',
        click: function() {
          if (window.confirm(highed.getLocalizedStr('confirmNewChart'))) {
            chartPreview.new();
          }
        }
      },
      {
        title: highed.L('saveProject'),
        css: 'fa-floppy-o',
        click: function() {
          var name;

          if (chartPreview.options.full.title) {
            name = chartPreview.options.full.title.text;
          }

          name = (name || 'chart').replace(/\s/g, '_');

          highed.download(name + '.json', chartPreview.toProjectStr());
        }
      },
      {
        title: highed.L('openProject'),
        css: 'fa-folder-open',
        click: function() {
          highed.readLocalFile({
            type: 'text',
            accept: '.json',
            success: function(file) {
              try {
                file = JSON.parse(file.data);
              } catch (e) {
                return highed.snackBar('Error loading JSON: ' + e);
              }

              chartPreview.loadProject(file);
            }
          });
        }
      },
      '-',
      {
        title: highed.L('saveCloud'),
        css: 'fa-cloud-upload',
        click: function() {
          highed.cloud.save(chartPreview);
        }
      },
      {
        title: highed.L('loadCloud'),
        css: 'fa-cloud-download',
        click: function() {
          highed.cloud.showUI(chartPreview);
        }
      },
      '-',
      {
        title: 'Help',
        css: 'fa-question-circle',
        click: function() {
          window.open(highed.option('helpURL'));
        }
      }
    ].concat(properties.toolbarIcons),
    // Custom toolbox options
    customOptions = {},
    // The toolbox options
    builtInOptions = {
      data: {
        icon: 'fa-table',
        title: 'Chart Data',
        width: 800,
        help: [
          {
            title: 'Manually Add/Edit Data',
            gif: 'dataImport.gif',
            description: [
              'Click a cell to edit its contents.<br/><br/>',
              'The cells can be navigated using the arrow keys.<br/><br/>',
              'Pressing Enter creates a new row, or navigates to the row directly below the current row.'
            ]
          },
          {
            title: 'Setting headings',
            gif: 'dataImport.gif',
            description: [
              'The headings are used as the series titles.<br/><br/>',
              'They can be edited by left clicking them.<br/><br/>',
              'Click the arrow symbol in the header to access column properties.'
            ]
          },
          {
            title: 'Importing Data',
            gif: 'import.gif',
            description: [
              'To import data, simply drag and drop CSV files onto the table, or paste CSV/Excel data into any cell.<br/><br/>',
              'For more advanced data import, click the IMPORT DATA button.'
            ]
          }
        ],
        create: function(body) {
          highed.dom.ap(body, dataTableContainer);
          dataTable.resize();
        },
        events: {
          Expanded: function(width, height) {
            dataTable.resize(width, height);
          }
        },
        showLiveStatus: true
      },
      templates: {
        icon: 'fa-bar-chart',
        width: 700,
        title: 'Templates',
        help: [
          {
            title: 'Templates',
            description: [
              'Templates are pre-defined bundles of configuration.<br/><br/>',
              'Start by choosing the template category in the list to the left,',
              'then pick a suitable template for your data and use case in the',
              'template list.'
            ]
          }
        ],
        create: function(body) {
          highed.dom.ap(body, templatesContainer);
        },
        events: {
          Expanded: function(width, height) {
            templates.resize(width, height);
          }
        }
      },
      export: {
        icon: 'fa-download',
        title: 'Export',
        width: 600,
        help: [
          {
            title: 'Export Chart',
            description: [
              'The export pane lets you export your chart to HTML, SVG, JSON, or JavaScript.<br/><br/>'
            ]
          }
        ],
        create: function(body) {
          highed.dom.ap(body, exporterContainer);
          exporter.resize();
        },
        events: {
          Expanded: function(width, height) {
            exporter.resize(width, height);
            exporter.init(
              chartPreview.export.json(),
              chartPreview.export.html(),
              chartPreview.export.svg(),
              chartPreview
            );
          }
        }
      },
      customize: {
        icon: 'fa-sliders',
        title: 'Customize Chart',
        width: 800,
        help: [
          {
            title: 'Customize',
            description: [
              'The customize pane lets you customize your chart.<br/><br/>',
              'The customizer has three different sections:<br/>',
              '<li>Simple: A simple customizer with the most used options</li>',
              '<li>Advanced: All options available in Highcharts/Highstock can be set here</li>',
              '<li>Custom code: Here, properties can be overridden programatically</li>'
            ]
          }
        ],
        create: function(body) {
          highed.dom.ap(body, customizerContainer);
          customizer.resize();
        },
        events: {
          Expanded: function(width, height) {
            customizer.resize(width, height);
          }
        }
      }
    },
    toolboxEntries,
    resolutions = {
      'Stretch to fit': [false, false],
      'iPhone X': [375, 812],
      'iPhone 8 Plus': [414, 736],
      'iPhone 8': [375, 667],
      'iPhone 7 Plus': [414, 736],
      'iPhone 7': [375, 667],
      'iPhone 6 Plus': [414, 736],
      'iPhone 6/6S': [375, 667],
      'iPhone 5': [320, 568],
      'iPad Pro': [1024, 1366],
      iPad: [768, 1024],
      'Nexus 6P': [411, 731],
      'Nexus 5X': [411, 731],
      'Google Pixel': [411, 731],
      'Google Pixel XL': [411, 731],
      'Google Pixel 2': [411, 731],
      'Google Pixel 2 XL': [411, 731],
      'Samsung Galaxy Note 5': [480, 853],
      'LG G5': [480, 853],
      'One Plus 3': [480, 853],
      'Samsung Galaxy S8': [360, 740],
      'Samsung Galaxy S8+': [360, 740],
      'Samsung Galaxy S7': [360, 640],
      'Samsung Galaxy S7 Edge': [360, 640]
    };

  if (!properties.useHeader) {
    highed.dom.style(splitter.top.parentNode, {
      display: 'none'
    });
  }

  // Alias import to data
  builtInOptions.import = builtInOptions.data;

  /**
   * Creates the features defined in property.features
   * Call this after changing properties.features to update the options.
   */
  function createFeatures() {
    var addedOptions = {};

    properties.features = highed.isArr(properties.features)
      ? properties.features
      : properties.features.split(' ');

    function addOption(option, id) {
      if (!option || !option.icon) {
        return;
      }

      var o = toolbox.addEntry({
        title: option.title,
        width: option.width,
        iconOnly: option.iconOnly,
        icon: option.icon,
        help: option.help,
        showLiveStatus: option.showLiveStatus
      });

      if (highed.isFn(option.create)) {
        option.create(o.body);
      }

      Object.keys(option.events || {}).forEach(function(e) {
        o.on(e, option.events[e]);
      });

      addedOptions[id] = o;
    }

    toolbox.clear();
    resize();

    properties.features.forEach(function(feature) {
      addOption(
        builtInOptions[feature] || customOptions[feature] || false,
        feature
      );
    });

    if (addedOptions.data) {
      setTimeout(addedOptions.data.expand, 200);
    }

    toolboxEntries = addedOptions;
    // resizeChart(toolbox.width());
  }

  /**
   * Create toolbar
   */
  function createToolbar() {
    toolbarButtons.forEach(function(b) {
      if (b === '-') {
        toolbar.addSeparator();
      } else {
        toolbar.addIcon(b);
      }
    });
  }

  /**
   * Resize the chart preview based on a given width
   */
  function resizeChart(newWidth) {
    var psize = highed.dom.size(splitter.bottom);

    lastSetWidth = newWidth;

    highed.dom.style(chartFrame, {
      left: newWidth + 'px',
      width: psize.w - newWidth + 'px',
      height: psize.h + 'px'
    });

    if (fixedSize) {
      // Update size after the animation is done
      setTimeout(function() {
        sizeChart(fixedSize.w, fixedSize.h);
      }, 400);
      return;
    }

    highed.dom.style(chartContainer, {
      width: psize.w - newWidth - 100 + 'px',
      height: psize.h - 100 + 'px'
    });

    chartPreview.resize();
  }

  function sizeChart(w, h) {
    if ((!w || w.length === 0) && (!h || h.length === 0)) {
      fixedSize = false;
      resHeight.value = '';
      resWidth.value = '';
      resizeChart(lastSetWidth);
    } else {
      var s = highed.dom.size(chartFrame);

      // highed.dom.style(chartFrame, {
      //   paddingLeft: (s.w / 2) - (w / 2) + 'px',
      //   paddingTop: (s.h / 2) - (h / 2) + 'px'
      // });

      fixedSize = {
        w: w,
        h: h
      };

      w = w || s.w - 100;
      h = h || s.h - 100;

      highed.dom.style(chartContainer, {
        width: w + 'px',
        height: h + 'px'
      });

      chartPreview.resize();
    }
  }

  /**
   * Resize everything
   */
  function resize() {
    splitter.resize();
    resizeChart(toolbox.width());
  }

  /**
   * Change the enabled features
   */
  function setEnabledFeatures(feats) {
    properties.features = feats;
    createFeatures();
  }

  /**
   * Add a new feature
   */
  function addFeature(name, feat) {
    customOptions[name] = feat;
    createFeatures();
  }

  function destroy() {}

  function addImportTab(tabOptions) {
    dataTable.addImportTab(tabOptions);
  }

  function hideImportModal() {
    dataTable.hideImportModal();
  }
  function showError(title, message) {
    highed.dom.style(errorBar, {
      opacity: 1,
      'pointer-events': 'auto'
    });

    errorBarHeadline.innerHTML = title;
    errorBarBody.innerHTML = message;
  }

  function hideError() {
    highed.dom.style(errorBar, {
      opacity: 0,
      'pointer-events': 'none'
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Event attachments

  toolbox.on('BeforeResize', resizeChart);

  customizer.on('PropertyChange', chartPreview.options.set);
  customizer.on('PropertySetChange', chartPreview.options.setAll);

  chartPreview.on('LoadProjectData', function(csv) {
    dataTable.loadCSV(
      {
        csv: csv
      },
      true
    );
  });

  chartPreview.on('ChartChange', function(newData) {
    events.emit('ChartChangedLately', newData);
  });

  templates.on('Select', function(template) {
    chartPreview.loadTemplate(template);
  });

  templates.on('LoadDataSet', function(sample) {
    if (sample.type === 'csv') {
      if (highed.isArr(sample.dataset)) {
        chartPreview.data.csv(sample.dataset.join('\n'));
      } else {
        chartPreview.data.csv(sample.dataset);
      }

      chartPreview.options.set('subtitle-text', '');
      chartPreview.options.set('title-text', sample.title);
    }
  });

  dataTable.on('LoadLiveData', function(settings){
    //chartPreview.data.live(settings);

    const liveDataSetting = {};

    liveDataSetting[settings.type] = settings.url;
    if (settings.interval && settings.interval > 0){
      liveDataSetting.enablePolling = true;
      liveDataSetting.dataRefreshRate = settings.interval
    }
    chartPreview.data.live(liveDataSetting);
  });
/*
  dataTable.on('UpdateLiveData', function(p){
    chartPreview.data.liveURL(p);
  });
*/
  chartPreview.on('LoadProject', function () {
    setTimeout(function () {
    resQuickSel.selectByIndex(0);
    setToActualSize();
    }, 2000);
  });

  dataTable.on('LoadGSheet', function(settings) {
    chartPreview.data.gsheet(settings);
  });

  chartPreview.on('RequestEdit', function(event, x, y) {
    // Expanded
    if (toolboxEntries.customize.body.offsetWidth) {
      customizer.focus(event, x, y);

      // Collapsed
    } else {
      var unbind = toolboxEntries.customize.on('Expanded', function() {
        customizer.focus(event, x, y);
        unbind();
      });
      toolboxEntries.customize.expand();
    }
  });

  dataTable.on('Change', function(headers, data) {
    return chartPreview.data.csv({
      csv: dataTable.toCSV(';', true)
    });
  });

  dataTable.on('ClearData', function() {
    chartPreview.data.clear();
  });

  chartPreview.on('ProviderGSheet', function(p) {
    dataTable.initGSheet(
      p.id || p.googleSpreadsheetKey,
      p.worksheet || p.googleSpreadsheetWorksheet,
      p.startRow,
      p.endRow,
      p.startColumn,
      p.endColumn,
      true,
      p.dataRefreshRate
    );
  });

  chartPreview.on('ProviderLiveData', function(p) {
    dataTable.loadLiveDataPanel(p);
  });

  chartPreview.on('Error', function(e) {
    if (e.indexOf('Highcharts error') >= 0) {
      var i1 = e.indexOf('#'),
        i = e.substr(i1).indexOf(':'),
        id = parseInt(e.substr(i1 + 1, i), 10),
        item = highed.highchartsErrors[id],
        urlStart = e.indexOf('www.'),
        url = '';

      if (urlStart >= 0) {
        url =
          '<div class="highed-errorbar-more"><a href="https://' +
          e.substr(urlStart) +
          '" target="_blank">Click here for more information</a></div>';
      }

      return showError(
        (item.title || "There's a problem with your chart") + '!',
        (item.text || e) + url
      );
    }

    showError("There's a problem with your chart!", e);
  });

  chartPreview.on('ChartRecreated', hideError);

  if (!highed.onPhone()) {
    highed.dom.on(window, 'resize', resize);
  }

  //////////////////////////////////////////////////////////////////////////////

  highed.dom.ap(
    toolbar.left,
    highed.dom.style(highed.dom.cr('span'), {
      'margin-left': '2px',
      width: '200px',
      height: '60px',
      float: 'left',
      display: 'inline-block',
      'background-position': 'left middle',
      'background-size': 'auto 100%',
      'background-repeat': 'no-repeat',
      'background-image':
        'url("data:image/svg+xml;utf8,' +
        encodeURIComponent(highed.resources.logo) +
        '")'
    })
  );

  highed.dom.ap(
    splitter.bottom,
    highed.dom.ap(
      chartFrame,

      highed.dom.ap(
        resPreviewBar,
        highed.dom.cr('div', 'highed-res-headline', 'Size Preview:'),
        resQuickSelContainer,
        highed.dom.ap(
          highed.dom.cr('div', 'highed-res-quicksel'),
          resWidth,
          highed.dom.cr('span', '', 'x'),
          resHeight
        )
      ),

      chartContainer,
      highed.dom.ap(errorBar, errorBarHeadline, errorBarBody)
    )
  );

  highed.dom.on([resWidth, resHeight], 'change', function() {
    sizeChart(parseInt(resWidth.value, 10), parseInt(resHeight.value, 10));
  });

  // Create the features
  createFeatures();
  createToolbar();

  resize();

  function setToActualSize() {
    resWidth.disabled = resHeight.disabled = 'disabled';
    chartPreview.getHighchartsInstance(function(chart) {
      var w, h;

      if (!chart || !chart.options || !chart.options.chart) {
        h = 400;
      } else {
        w = chart.options.chart.width;
        h = chart.options.chart.height || 400;
      }

      resWidth.value = w;
      resHeight.value = h;

      sizeChart(w, h);
    });

    highed.dom.style(chartFrame, {
      'overflow-x': 'auto'
    });
  }

  resQuickSel.addItem({
    id: 'actual',
    title: 'Actual Size',
    select: function() {
      setToActualSize();
    }
  });

  chartPreview.on('AttrChange', function(option) {
    if (option.id === 'chart.height' || option.id === 'chart.width') {
      resQuickSel.selectByIndex(0);
      // setToActualSize();
    }
  });
  
  chartPreview.on('SetResizeData', function () {
    setToActualSize();
  });

  Object.keys(resolutions).forEach(function(devName) {
    resQuickSel.addItem({
      id: devName,
      title: devName,
      select: function() {
        resWidth.disabled = resHeight.disabled = undefined;

        resWidth.value = resolutions[devName][0];
        resHeight.value = resolutions[devName][1];

        sizeChart(resolutions[devName][0], resolutions[devName][1]);

        highed.dom.style(chartFrame, {
          'overflow-x': ''
        });
      }
    });
  });

  resQuickSel.selectByIndex(0);

  return {
    on: events.on,
    resize: resize,
    destroy: destroy,
    /* Get embeddable javascript */
    getEmbeddableHTML: chartPreview.export.html,
    /* Get embeddable json */
    getEmbeddableJSON: chartPreview.export.json,
    /* Get embeddable SVG */
    getEmbeddableSVG: chartPreview.export.svg,
    addImportTab: addImportTab,
    hideImportModal: hideImportModal,
    setEnabledFeatures: setEnabledFeatures,
    addFeature: addFeature,
    chart: chartPreview,
    toolbar: toolbar,
    data: {
      on: dataTable.on,
      showLiveStatus: toolbox.showLiveStatus,
      hideLiveStatus: toolbox.hideLiveStatus
    },
    dataTable: dataTable,
    toolbar: toolbar
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

// Alias to drawer editor
highed.Editor = highed.DrawerEditor;

(function() {
  var instanceCount = 0,
    installedPlugins = {},
    activePlugins = {},
    pluginEvents = highed.events(),
    stepPlugins = {};

  ///////////////////////////////////////////////////////////////////////////

  /** Install an editor plugin
      *
      *  Note that plugins must be enabled when creating the editor
      *  for it to be active.
      *
      *  @namespace highed.plugins.editor
      *
      *  @param name       {string} - the name of the plugin
      *  @param definition {object} - the plugin definition
      *     > meta {object}
      *         > version {string}
      *         > author {string}
      *         > homepage {string}
      *     > dependencies {array<string>} - URLs of script dependencies
      *     > options {object}
      *         > option_name {object}
      *             > type {string} - the type of the option
      *             > label {string} - the label
      *             > default {anything} - the default value
      */
  function install(name, definition) {
    var properties = highed.merge(
      {
        meta: {
          version: 'unknown',
          author: 'unknown',
          homepage: 'unknown'
        },
        dependencies: [],
        options: {}
      },
      definition
    );

    console.error('Warning: editor plugins are no longer supported.');

    properties.dependencies.forEach(highed.include);

    if (!highed.isNull(installedPlugins[name])) {
      return highed.log(1, 'plugin -', name, 'is already installed');
    }

    installedPlugins[name] = properties;
  }

  function use(name, options) {
    var plugin = installedPlugins[name],
      filteredOptions = {};

    console.error('Warning: editor plugins are no longer supported.');

    if (!highed.isNull(plugin)) {
      if (activePlugins[name]) {
        return highed.log(2, 'plugin -', name, 'is already active');
      }

      //Verify options
      Object.keys(plugin.options).forEach(function(key) {
        var option = plugin.options[key];
        if (highed.isBasic(option) || highed.isArr(option)) {
          highed.log(
            2,
            'plugin -',
            name,
            'unexpected type definition for option',
            key,
            'expected object'
          );
        } else {
          filteredOptions[key] =
            options[key] || plugin.options[key].default || '';

          if (option.required && highed.isNull(options[key])) {
            highed.log(1, 'plugin -', name, 'option', key, 'is required');
          }
        }
      });

      activePlugins[name] = {
        definition: plugin,
        options: filteredOptions
      };
      filteredOptions;

      if (highed.isFn(plugin.activate)) {
        activePlugins[name].definition.activate(filteredOptions);
      }

      pluginEvents.emit('Use', activePlugins[name]);
    } else {
      highed.log(2, 'plugin -', name, 'is not installed');
    }
  }

  //Public interface
  highed.plugins.editor = {
    install: install,
    use: use
  };

  //UI plugin interface
  highed.plugins.step = {
    install: function(def) {
      stepPlugins[def.title] = def;
    }
  };
})();

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** Simple one-pane editor
 *  An essentials-only editor.
 *
 *  @example
 *  var simpleEditor = highed.SimpleEditor(document.body, {
 *      availableSettings: [
 *          'title--text',
 *          'subtitle--text'
 *      ]
 *  });
 *
 *  simpleEditor.on('Change', function (chart) {
 *       console.log(chart.export.html());
 *  });
 *
 *  @constructor
 *  @emits change - when the chart changes
 *    > {highed.ChartPreview} - an instance of the chart preview
 *
 *  @param parent {domnode} - the node to attach to
 *  @param attributes {object} - the options for the editor
 *    > availableSettings {array<string>} - the settings to include
 *    > defaultChartOptions {object} - default chart settings
 *    > importer {object} - options passed to the importer widget
 *      > options {string|array<string>} - the options to include
 *      > plugins {string|array<sting>} - the plugins to enable
 */
highed.SimpleEditor = function(parent, attributes) {
  var properties = highed.merge(
      {
        importer: {
          options: 'csv'
        },
        features: 'import preview customize',
        availableSettings: [
          'title--text',
          'subtitle--text',
          'colors',
          'chart--backgroundColor',
          'yAxis-title--style',
          'yAxis--type',
          'yAxis--opposite',
          'yAxis--reversed',
          'yAxis-labels--format'
        ],
        defaultChartOptions: {}
      },
      attributes
    ),
    events = highed.events(),
    container = highed.dom.cr('div', 'highed-container'),
    expandContainer = highed.dom.cr('div', 'highed-expand-container'),
    mainVSplitter = highed.VSplitter(container, {
      topHeight: '60px',
      noOverflow: true
    }),
    mainToolbar = highed.Toolbar(mainVSplitter.top, {
      additionalCSS: ['highed-header']
    }),
    hsplitter = highed.HSplitter(mainVSplitter.bottom, {
      leftWidth: 40,
      noOverflow: false
    }),
    vsplitterRight = highed.VSplitter(hsplitter.right, {
      noOverflow: true
    }),
    preview = highed.ChartPreview(vsplitterRight.top, {
      defaultChartOptions: properties.defaultChartOptions,
      expandTo: expandContainer
    }),
    //importer = highed.DataImporter(vsplitterRight.bottom, properties.importer),
    importer = highed.DataTable(vsplitterRight.bottom),
    customizer = highed.SimpleCustomizer(hsplitter.left, {
      availableSettings: properties.availableSettings
    }),
    cmenu = highed.DefaultContextMenu(preview);

  ///////////////////////////////////////////////////////////////////////////

  properties.features = highed.arrToObj(properties.features.split(' '));

  ///////////////////////////////////////////////////////////////////////////

  function applyFeatures() {
    if (!properties.features.import) {
      importer.hide();
    }

    if (!properties.features.preview) {
    }

    if (!properties.features.customize) {
    }
  }

  /** Force a resize of the editor
     *  @memberof highed.SimpleEditor
     */
  function resize() {
    var ps = highed.dom.size(container);

    mainVSplitter.resize(ps.w, ps.h);

    vsplitterRight.resize(false, ps.h - 60);

    hsplitter.resize(ps.w, ps.h - 60);

    preview.resize();
    importer.resize();
  }

  function attachToCustomizer() {
    customizer.build(preview.options.customized);
  }

  ///////////////////////////////////////////////////////////////////////////

  customizer.on('PropertyChange', function(id, value, index) {
    preview.options.set(id, value, index);
    events.emit('Change', preview);
  });
  // importer.on('ImportCSV', [preview.data.csv, attachToCustomizer]);
  // importer.on('ImportJSON', [preview.data.json, attachToCustomizer]);
  // importer.on('ImportChartSettings', [preview.data.settings, attachToCustomizer]);

  importer.on('Change', function(headers, data) {
    if (data.length) {
      var d = importer.toDataSeries();

      preview.options.set('xAxis-categories', d.categories, 0);

      preview.loadSeries(d.series);
    }
  });

  preview.on('RequestEdit', function(event, x, y) {
    customizer.focus(event, x, y);
  });

  preview.on('New', attachToCustomizer);

  ///////////////////////////////////////////////////////////////////////////

  highed.dom.ap(highed.dom.get(parent), container, expandContainer);

  highed.dom.on(window, 'resize', resize);

  highed.dom.ap(
    mainToolbar.left,
    highed.dom.style(highed.dom.cr('div', 'highed-logo'), {
      'background-image':
        'url("data:image/svg+xml;utf8,' +
        encodeURIComponent(
          '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 16.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"     width="425.197px" height="141.732px" viewBox="0 0 425.197 141.732" enable-background="new 0 0 425.197 141.732"     xml:space="preserve"><g>    <path fill="#eeeaea" d="M138.475,69.712h-17.02v9.77c0,1.037-0.813,1.851-1.849,1.851c-1.037,0-1.85-0.813-1.85-1.851V57.725        c0-1.037,0.813-1.852,1.85-1.852c1.036,0,1.849,0.813,1.849,1.852v8.436h17.02v-8.436c0-1.037,0.814-1.852,1.85-1.852        c1.036,0,1.85,0.813,1.85,1.852v21.754c0,1.037-0.814,1.851-1.85,1.851c-1.036,0-1.85-0.813-1.85-1.851V69.712z"/>    <path fill="#eeeaea" d="M156.973,79.479c0,1.037-0.814,1.851-1.852,1.851s-1.852-0.813-1.852-1.851V57.725        c0-1.037,0.814-1.852,1.852-1.852s1.852,0.813,1.852,1.852V79.479z"/>    <path fill="#eeeaea" d="M184.125,70.378c0-1.036,0.814-1.774,1.852-1.774c1.034,0,1.852,0.813,1.852,1.849v5.847        c0,0.444-0.226,1.109-0.595,1.479c-2.367,2.369-5.549,3.773-9.176,3.773c-7.178,0-12.949-5.771-12.949-12.948        c0-7.181,5.771-12.949,12.949-12.949c3.627,0,6.809,1.405,9.176,3.771c0.738,0.74,0.738,1.852,0,2.592        c-0.741,0.738-1.922,0.813-2.663,0.072c-1.702-1.699-3.923-2.736-6.513-2.736c-5.104,0-9.249,4.144-9.249,9.25        c0,5.104,4.146,9.25,9.249,9.25c2.367,0,4.441-0.813,6.067-2.222V70.378z"/>    <path fill="#eeeaea" d="M218.162,69.712h-17.019v9.77c0,1.037-0.817,1.851-1.852,1.851c-1.037,0-1.849-0.813-1.849-1.851V57.725        c0-1.037,0.812-1.852,1.849-1.852c1.034,0,1.852,0.813,1.852,1.852v8.436h17.019v-8.436c0-1.037,0.813-1.852,1.849-1.852        c1.037,0,1.852,0.813,1.852,1.852v21.754c0,1.037-0.813,1.851-1.852,1.851c-1.033,0-1.849-0.813-1.849-1.851V69.712z"/>    <path fill="#eeeaea" d="M242.948,81.552c-7.182,0-12.949-5.771-12.949-12.948c0-7.181,5.77-12.949,12.949-12.949        c3.627,0,6.809,1.405,9.176,3.771c0.738,0.74,0.738,1.852,0,2.592c-0.741,0.738-1.925,0.813-2.666,0.072        c-1.699-1.699-3.92-2.736-6.51-2.736c-5.106,0-9.249,4.144-9.249,9.25c0,5.104,4.143,9.25,9.249,9.25        c2.59,0,4.884-0.962,6.586-2.664c0.74-0.741,1.849-0.741,2.59,0c0.738,0.738,0.738,1.85,0,2.589        C249.756,80.146,246.574,81.552,242.948,81.552z"/>    <path fill="#eeeaea" d="M281.569,69.712h-17.02v9.77c0,1.037-0.813,1.851-1.852,1.851c-1.034,0-1.85-0.813-1.85-1.851V57.725        c0-1.037,0.813-1.852,1.85-1.852c1.035,0,1.852,0.813,1.852,1.852v8.436h17.02v-8.436c0-1.037,0.813-1.852,1.853-1.852        c1.034,0,1.849,0.813,1.849,1.852v21.754c0,1.037-0.813,1.851-1.849,1.851c-1.037,0-1.853-0.813-1.853-1.851V69.712z"/>    <path fill="#eeeaea" d="M308.758,57.503l10.507,20.646c0.223,0.443,0.445,1.036,0.445,1.554c0,1.036-0.668,1.628-1.702,1.628        c-0.741,0-1.481-0.222-2.001-1.258l-3.253-6.438h-13.547l-3.183,6.438c-0.517,1.036-1.256,1.258-1.994,1.258        c-1.037,0-1.702-0.593-1.702-1.628c0-0.519,0.22-1.109,0.442-1.554l10.506-20.646c0.668-1.405,2.002-1.628,2.74-1.628        C306.76,55.875,308.09,56.096,308.758,57.503z M300.985,70.083h9.988l-4.957-9.99L300.985,70.083z"/>    <path fill="#eeeaea" d="M340.159,56.023c4.441,0,8.064,3.255,8.064,7.694c0,3.923-2.813,6.884-6.511,7.549l6.731,7.104        c0.664,0.666,0.889,1.85,0.146,2.516c-0.736,0.741-2.145,0.521-2.886-0.296l-8.729-9.176h-6.511v8.142        c0,1.034-0.815,1.774-1.854,1.774c-1.033,0-1.85-0.813-1.85-1.851V57.873c0-1.035,0.814-1.85,1.85-1.85H340.159z M330.468,59.575        v8.288h9.691c2.59,0,4.367-1.776,4.367-4.146c0-2.365-1.777-4.144-4.367-4.144L330.468,59.575L330.468,59.575z"/>    <path fill="#eeeaea" d="M365.047,59.575h-9.249c-1.033,0-1.849-0.74-1.849-1.776c0-1.034,0.813-1.773,1.849-1.773h22.201        c1.037,0,1.852,0.74,1.852,1.773c0,1.037-0.813,1.776-1.852,1.776h-9.249V79.48c0,1.037-0.813,1.851-1.849,1.851        c-1.037,0-1.854-0.813-1.854-1.851V59.575z"/>    <path fill="#eeeaea" d="M388.724,66.013c0-9.25,5.698-10.359,9.99-10.359c1.035,0,1.85,0.813,1.85,1.85        c0,1.036-0.813,1.851-1.85,1.851c-3.479,0-6.29,0.738-6.29,6.66v5.18c0,9.25-5.698,10.358-9.989,10.358        c-1.035,0-1.85-0.813-1.85-1.85s0.814-1.85,1.85-1.85c3.479,0,6.289-0.74,6.289-6.66V66.013z"/></g><polygon fill="#8087E8" points="67.981,30.52 56.757,56.73 42.009,91.171 76.301,76.685 94.465,69.013 "/><polygon fill="#30426B" points="73.7,62.25 76.302,76.685 94.466,69.013 "/><polygon fill="#6699A1" points="67.981,30.52 73.7,62.251 94.465,69.013 "/><polygon fill="#78758C" points="73.7,62.25 94.466,69.013 56.758,56.729 42.009,91.171 76.302,76.685 "/><polygon fill="#A3EDBA" points="42.009,91.171 56.757,56.73 26.442,46.855 "/><polygon fill="#6699A1" points="76.302,76.685 79.628,95.13 94.466,69.013 "/><polygon fill="#8087E8" points="67.981,30.52 56.757,56.73 73.7,62.251 "/></svg>'
        ) +
        '")'
    })
  );

  mainToolbar.addIcon({
    css: 'fa-gear',
    click: function(e) {
      cmenu.show(e.clientX, e.clientY);
    }
  });

  applyFeatures();
  resize();
  attachToCustomizer();

  //Public interface
  return {
    resize: resize,
    on: events.on,
    /** Main toolbar
         *  @type {domnode}
         *  @memberof highed.SimpleEditor
         */
    toolbar: mainToolbar,
    /** The chart preview
         *  @type {highed.ChartPreview}
         *  @memberof highed.SimpleEditor
         */
    chart: preview
  };
};

/******************************************************************************

Copyright (c) 2016-2018, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

// @format

/** A modal editor
 * The modal editor connects to a "summoner", which is the DOM node that should
 * spawn the editor. This arg is however optional, and if not present,
 * `show()` should be called instead when wanting to display it.
 *
 * The contained editor can either be a full editor, or a simple editor.
 *
 * @example
 * highed.ModalEditor('icon', {allowDone: true}, function (html) {
 *    doSomethingWithTheExportedHTML(html);
 * });
 *
 * @constructor
 *
 * @param summoner {domnode} - the node which spawns the editor
 * @param attributes {object} - properties. Note that this object is also passed to the editor constructor.
 *   > type {string} - either `full` or `simple`.
 *   > allowDone {bool} - if set to true (default is false) a "Close and use" button will appear on the top bar
 * @param fn {function} - function to call when done editing, argument is an instance of highed.ChartPreview
 *
 */
highed.ModalEditor = function(summoner, attributes, fn) {
  var properties = highed.merge(
      {
        type: 'full',
        allowDone: false
      },
      attributes
    ),
    modal = highed.OverlayModal(false, {
      width: '95%',
      height: '95%',
      showOnInit: false
    }),
    editor =
      properties.type === 'full'
        ? highed.Editor(modal.body, attributes)
        : highed.SimpleEditor(modal.body, attributes),
    //We don't always know the summoner at create time..
    sumFn = false,
    doneEditing = highed.dom.cr(
      'button',
      'highed-done-button',
      'Close &amp; Use'
    );

  ///////////////////////////////////////////////////////////////////////////

  /** Attach to a new summoner
     *  @memberof highed.ModalEditor
     *  @param nn {domnode} - the new node to attach to
     */
  function attachToSummoner(nn) {
    nn = nn || summoner;

    if (!nn) {
      return;
    }

    if (highed.isFn(sumFn)) {
      sumFn();
    }

    //Show the modal when clicking the summoner
    sumFn = highed.dom.on(highed.dom.get(nn), 'click', modal.show);
  }

  function doDone() {
    if (highed.isFn(fn)) {
      fn(editor.chart);
    }
    modal.hide();
  }

  //Resize the editor when showing the modal
  modal.on('Show', editor.resize);

  highed.dom.on(doneEditing, 'click', doDone);

  attachToSummoner(summoner);

  if (properties.allowDone) {
    highed.dom.ap(editor.toolbar.center, doneEditing);
  }

  editor.on('Done', doDone);
  editor.resize();

  ///////////////////////////////////////////////////////////////////////////

  return {
    editor: editor,
    show: modal.show,
    hide: modal.hide,
    on: editor.on,
    attachToSummoner: attachToSummoner
  };
};
