var inBrowser = typeof window !== "undefined";
var ua = inBrowser && navigator.userAgent.toLowerCase();
export const util = {
  RegExp: {
    email:
      "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    mobile: "^(13|15|18|17|14)[0-9]{9}$",
    idcard: "^([1-9][0-9]{14})$|^[0-9]{17}([0-9]|X)$",
    cn: "^[\u2E80-\u9FFF]+$"
  },
  validate: {
    isMobile: function(v) {
      return new RegExp(util.RegExp.mobile).test(v);
    }
  },
  /**
   * [page 页面可视区相关操作]
   * @type {Object}
   */
  page: {
    getWidth: function() {
      var doc = document,
        body = doc.body,
        html = doc.documentElement,
        client = doc.compatMode == "BackCompat" ? body : doc.documentElement;
      return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
    },
    getHeight: function() {
      var doc = document,
        body = doc.body,
        html = doc.documentElement,
        client = doc.compatMode == "BackCompat" ? body : doc.documentElement;
      return Math.max(
        html.scrollHeight,
        body.scrollHeight,
        client.clientHeight
      );
    },
    getViewWidth: function() {
      var doc = document,
        client =
          doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
      return client.clientWidth;
    },
    getViewHeight: function(doc) {
      var client =
        doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
      return client.clientHeight;
    }
  },
  objectToQuery: function(query) {
    var params = [];
    for (var n in query) {
      params.push(n + "=" + query[n]);
    }
    return params.join("&");
  },
  objectToArray: function(data) {
    var arr = [];
    for (var key in data) {
      arr.push({
        id: key,
        name: data[key]
      });
    }
    return arr;
  },
  getPlatForm: function() {
    var userAgent = navigator.userAgent;
    if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent)) {
      return "IOS";
    } else {
      return "Android";
    }
  },
  isWeChat: function() {
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },
  isWeixin: function() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },
  getByteLength: function(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9fa5) {
        len += 2;
      } else {
        len++;
      }
    }
    return len;
  },
  cookie: function(name, value, options) {
    if (typeof value != "undefined") {
      options = options || {};
      if (value === null) {
        value = "";
        options.expires = -1;
      }
      var expires = "";
      if (
        options.expires &&
        (typeof options.expires == "number" || options.expires.toUTCString)
      ) {
        var date;
        if (typeof options.expires == "number") {
          date = new Date();
          date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        } else {
          date = options.expires;
        }
        expires = "; expires=" + date.toUTCString();
      }
      var path = options.path ? "; path=" + options.path : "";
      var domain = options.domain ? "; domain=" + options.domain : "";
      var secure = options.secure ? "; secure" : "";
      document.cookie = [name, "=", value, expires, path, domain, secure].join(
        ""
      );
    } else {
      var cookieValue = null;
      if (document.cookie && document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = (cookies[i] || "").replace(/(^\s*)|(\s*$)/g, "");
          if (cookie.substring(0, name.length + 1) == name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  },
  /**
   * [url 地址栏相关操作方法]
   * @type {Object}
   */
  url: {
    /**
     * [getParam 获取地址栏参数]
     * @param  {[type]} o [description]
     * @return {[type]}   [description]
     */
    getParam: function(o) {
      var reg = new RegExp("(^|\\?|&|#)" + o + "=([^&#]*)(&|\x24|#)", ""),
        url = location.href,
        match = url.match(reg);
      if (match) {
        return decodeURIComponent(match[2]);
      }
      return "";
    },
    urlToObject: function() {
      var url = location.href,
        reg = new RegExp("^.*\\?([a-zA-z0-9&=_%\\u2E80-\\u9FFF]*).*$"),
        match = url.match(reg),
        params = {};
      if (match && match.length > 1) {
        var urlParams = match[1];
        if (urlParams && urlParams.length > 0) {
          urlParams = urlParams.split("&");
          for (var i = 0, len = urlParams.length; i < len; i++) {
            var query = urlParams[i].split("=");
            if (query && query.length > 1) {
              try {
                params[query[0]] = decodeURIComponent(
                  decodeURIComponent(query[1])
                );
              } catch (e) {
                return false;
              }
            }
          }
        }
      }
      return params;
    },
    urlStr() {
      return location.href;
    }
  },
  /**
   * 获取一段随机字符串(可指定长度)
   */
  getRandom: function(len) {
    return Math.random()
      .toString(36)
      .substr(2, len || 15);
  },
  /**
   * 生成时间戳
   */
  timesTamp: function() {
    return parseInt(new Date().getTime() / 1e3) + "";
  },
  /**
   * 64位编码程序
   */
  enBase64: function(a) {
    for (
      var e,
        f,
        g,
        b = "",
        c = 0,
        d = a.length,
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      d > c;

    ) {
      if (((e = 255 & a.charCodeAt(c++)), c == d)) {
        (b += h.charAt(e >> 2)), (b += h.charAt((3 & e) << 4)), (b += "==");
        break;
      }
      if (((f = a.charCodeAt(c++)), c == d)) {
        (b += h.charAt(e >> 2)),
          (b += h.charAt(((3 & e) << 4) | ((240 & f) >> 4))),
          (b += h.charAt((15 & f) << 2)),
          (b += "=");
        break;
      }
      (g = a.charCodeAt(c++)),
        (b += h.charAt(e >> 2)),
        (b += h.charAt(((3 & e) << 4) | ((240 & f) >> 4))),
        (b += h.charAt(((15 & f) << 2) | ((192 & g) >> 6))),
        (b += h.charAt(63 & g));
    }
    return b;
  },
  /**
   * 64位解码程序
   */
  deBase64: function(a) {
    for (
      var b,
        c,
        d,
        e,
        f = 0,
        g = a.length,
        h = "",
        i = [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          62,
          -1,
          -1,
          -1,
          63,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          -1,
          -1,
          -1,
          -1,
          -1
        ];
      g > f;

    ) {
      do b = i[255 & a.charCodeAt(f++)];
      while (g > f && -1 == b);
      if (-1 == b) break;
      do c = i[255 & a.charCodeAt(f++)];
      while (g > f && -1 == c);
      if (-1 == c) break;
      h += String.fromCharCode((b << 2) | ((48 & c) >> 4));
      do {
        if (((d = 255 & a.charCodeAt(f++)), 61 == d)) return h;
        d = i[d];
      } while (g > f && -1 == d);
      if (-1 == d) break;
      h += String.fromCharCode(((15 & c) << 4) | ((60 & d) >> 2));
      do {
        if (((e = 255 & a.charCodeAt(f++)), 61 == e)) return h;
        e = i[e];
      } while (g > f && -1 == e);
      if (-1 == e) break;
      h += String.fromCharCode(((3 & d) << 6) | e);
    }
    return h;
  },
  /**
   * 加密字符串
   * @str 待加密字符串
   * @key 密钥  可选，若无密钥传入，则会生成一枚随机密钥，并在结果中传出
   */
  enString: function(str, key) {
    // 如果没有key, 取一个随机数做为密钥
    (key = key || this.getRandom()),
      // 将经过url编码的字符串进行base64位编码
      (str = this.enBase64(encodeURIComponent(str)));
    // 加密操作
    var keyLen = key.length,
      strLen = str.length,
      Str = "",
      i = 0;
    for (; i < strLen; i += 1) {
      Str += String.fromCharCode(
        str.charCodeAt(i) ^ key.charCodeAt(i % keyLen)
      );
    }
    // 如果有key, 传出base64编码后的加密字符串, 如果没有key, 传出加密字符串与key
    return key
      ? this.enBase64(Str)
      : {
          str: this.enBase64(Str),
          key: key
        };
  },
  /**
   * 解密字符串
   * @str 待解密字符串
   * @key 密钥
   */
  deString: function(str, key) {
    str = this.deBase64(str);
    var keyLen = key.length,
      strLen = str.length,
      Str = "",
      i = 0;
    for (; i < strLen; i += 1) {
      Str += String.fromCharCode(
        str.charCodeAt(i) ^ key.charCodeAt(i % keyLen)
      );
    }
    return decodeURIComponent(this.deBase64(Str));
  },
  hasStorage: (function() {
    var testKey = "isEnable",
      storage = inBrowser && window.localStorage,
      isEnable = false;
    if (inBrowser) {
      try {
        storage.setItem(testKey, "1");
        storage.removeItem(testKey);
        isEnable = true;
      } catch (error) {
        //
        isEnable = false;
      }
      return isEnable;
    }
  })(),
  /**
   * set local storage
   * @key string 必须
   * @val string || object 必须
   * @expires timesTamp 可选，如未传入则默认为永久有效(如浏览器不支持storage则录入cookie中，三年有效)
   */
  setStorage: function(key, val, expires) {
    if (!this.hasStorage) return;
    if (typeof val !== "string") val = JSON.stringify(val);
    // 加密字符串值
    val = this.enString(val, key);
    // 如果有有效时长，写入有效期
    if (expires) {
      var date = new Date();
      date.setTime(date.getTime() + expires * 1e3);
      expires = ";expires:" + date.toGMTString();
    } else {
      expires = "";
    }
    if (inBrowser) {
      localStorage.setItem(key, "en:/str;" + val + expires);
    }
  },
  getStorage: function(key) {
    if (!this.hasStorage) return;
    if (inBrowser) {
      var val = localStorage.getItem(key),
        data;
      if (!val) {
        return;
      }
      if (val.indexOf(";expires:") > 0) {
        data = val.split(";expires:");
        val = data[0];
        // 有效期判断
        if (new Date().getTime() >= new Date(data[1]).getTime())
          return this.removeStorage(key), null;
      }
      // 判断是否加密，如未加密则清除本条内容
      if (val.indexOf("en:/str;") === 0) val = this.deString(val.slice(8), key);
      else return this.removeStorage(key), null;
      try {
        return JSON.parse(val);
      } catch (err) {
        return val;
      }
    }
  },
  removeStorage: function(key) {
    return this.hasStorage && inBrowser ? localStorage.removeItem(key) : "";
  },
  /**
   * set local storage
   * @key string 必须
   * @val string || object 必须
   * @expires timesTamp 可选，如未传入则默认为永久有效(如浏览器不支持storage则录入cookie中，退出浏览器后失效)
   */
  setSession: function(key, val) {
    if (!this.hasStorage) return;
    if (typeof val !== "string") val = JSON.stringify(val);
    val = this.enString(val, key);
    inBrowser && sessionStorage.setItem(key, "en:/str;" + val);
  },
  getSession: function(key) {
    if (!this.hasStorage) return;
    var val = inBrowser && sessionStorage.getItem(key);
    if (!val) {
      return;
    }
    // 判断是否加密，如未加密则清除本条内容
    if (val.indexOf("en:/str;") === 0) val = this.deString(val.slice(8), key);
    else return this.removeSession(key), null;
    try {
      return JSON.parse(val);
    } catch (err) {
      return val;
    }
  },
  removeSession: function(key) {
    return !this.hasStorage ? "" : sessionStorage.removeItem(key);
  },
  /**
   * [string 字符串相关]
   * @type {Object}
   */
  string: {
    /**
     * [format 格式化字符串]
     * @param  {[type]} source [description]
     * @param  {[type]} opts   [description]
     * @return {[type]}        [description]
     */
    format: function(source, opts) {
      source = String(source);
      var data = Array.prototype.slice.call(arguments, 1),
        toString = Object.prototype.toString;
      if (data.length) {
        data =
          data.length == 1
            ? opts !== null &&
              /\[object Array\]|\[object Object\]/.test(toString.call(opts))
              ? opts
              : data
            : data;
        return source.replace(/#\{(.+?)\}/g, function(match, key) {
          var replacer = data[key];
          if ("[object Function]" == toString.call(replacer)) {
            replacer = replacer(key);
          }
          return "undefined" == typeof replacer ? "" : replacer;
        });
      }
      return source;
    },
    decode: function(str) {
      return str.replace(/&/g, "&amp;");
    },
    stripTags: function(source) {
      return String(source || "").replace(/<[^>]+>/g, "");
    },
    toCamelCase: function(source) {
      if (source.indexOf("-") < 0 && source.indexOf("_") < 0) {
        return source;
      }
      return source.replace(/[-_][^-_]/g, function(match) {
        return match.charAt(1).toUpperCase();
      });
    },
    /**
     * [getByteLength 获取字符串字节长度]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    getByteLength: function(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9fa5) {
          len += 2;
        } else {
          len++;
        }
      }
      return len;
    }
  }
};
