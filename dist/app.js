require("./runtime");
require("./vendors");
require("./taro");

(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/app.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sr-sdk-wxapp */ "./node_modules/sr-sdk-wxapp/index.js");
/* harmony import */ var sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.less */ "./src/app.less");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_6__);







/**
   * 有数埋点SDK 默认配置
   * 使用方法请参考文档 https://mp.zhls.qq.com/youshu-docs/develop/sdk/Taro.html
   * 如对有数SDK埋点接入有任何疑问，请联系微信：sr_data_service
   */

sr_sdk_wxapp__WEBPACK_IMPORTED_MODULE_5___default.a.init({
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: 'bi6cdbda95ae2640ec',

  /**
   * 微信小程序appID，以wx开头
   */
  appid: 'touristappid',

  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,

  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,

  /**
   * 建议开启-开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,

  /**
   * 建议开启-开启组件自动代理， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   */
  proxyComponent: true,
  // 建议开启-是否开启页面分享链路自动跟踪
  openSdkShareDepth: true,
  // 建议开启-元素事件跟踪，自动上报元素事件，入tap、change、longpress、confirm
  autoTrack: true,
  installFrom: 'Taro@v3'
});

var App = /*#__PURE__*/function (_Component) {
  Object(_Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(_Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_gaohaifeng_self_temp_taro_test2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // this.props.children 是将要会渲染的页面

  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.production.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");

/** @license React v0.23.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  'use strict';

  var aa = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),
      ba = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),
      m = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/cjs/scheduler.production.min.js");

  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var q = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = {
    current: null
  });
  q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = {
    suspense: null
  });
  var u = "function" === typeof Symbol && Symbol.for,
      ca = u ? Symbol.for("react.element") : 60103,
      da = u ? Symbol.for("react.portal") : 60106,
      ea = u ? Symbol.for("react.fragment") : 60107,
      fa = u ? Symbol.for("react.strict_mode") : 60108,
      ha = u ? Symbol.for("react.profiler") : 60114,
      ia = u ? Symbol.for("react.provider") : 60109,
      ja = u ? Symbol.for("react.context") : 60110,
      ka = u ? Symbol.for("react.concurrent_mode") : 60111,
      la = u ? Symbol.for("react.forward_ref") : 60112,
      ma = u ? Symbol.for("react.suspense") : 60113,
      na = u ? Symbol.for("react.suspense_list") : 60120,
      oa = u ? Symbol.for("react.memo") : 60115,
      pa = u ? Symbol.for("react.lazy") : 60116;
  u && Symbol.for("react.fundamental");
  u && Symbol.for("react.responder");
  u && Symbol.for("react.scope");
  var qa = "function" === typeof Symbol && Symbol.iterator;

  function ra(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = qa && a[qa] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function sa(a) {
    if (-1 === a._status) {
      a._status = 0;
      var b = a._ctor;
      b = b();
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }
  }

  function ta(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case ea:
        return "Fragment";

      case da:
        return "Portal";

      case ha:
        return "Profiler";

      case fa:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === _typeof(a)) switch (a.$$typeof) {
      case ja:
        return "Context.Consumer";

      case ia:
        return "Context.Provider";

      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case oa:
        return ta(a.type);

      case pa:
        if (a = 1 === a._status ? a._result : null) return ta(a);
    }
    return null;
  }

  function ua(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b.return;) {
      b = b.return;
    } else {
      a = b;

      do {
        b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function va(a) {
    if (ua(a) !== a) throw Error(n(188));
  }

  function wa(a) {
    var b = a.alternate;

    if (!b) {
      b = ua(a);
      if (null === b) throw Error(n(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return va(e), a;
          if (f === d) return va(e), b;
          f = f.sibling;
        }

        throw Error(n(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, l = e.child; l;) {
          if (l === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (l === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          l = l.sibling;
        }

        if (!g) {
          for (l = f.child; l;) {
            if (l === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (l === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            l = l.sibling;
          }

          if (!g) throw Error(n(189));
        }
      }
      if (c.alternate !== d) throw Error(n(190));
    }

    if (3 !== c.tag) throw Error(n(188));
    return c.stateNode.current === c ? a : b;
  }

  function xa(a) {
    a = wa(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function ya(a) {
    a = wa(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  var za = $$$hostConfig.getPublicInstance,
      Aa = $$$hostConfig.getRootHostContext,
      Ba = $$$hostConfig.getChildHostContext,
      Ca = $$$hostConfig.prepareForCommit,
      Da = $$$hostConfig.resetAfterCommit,
      Ea = $$$hostConfig.createInstance,
      Fa = $$$hostConfig.appendInitialChild,
      Ga = $$$hostConfig.finalizeInitialChildren,
      Ia = $$$hostConfig.prepareUpdate,
      Ja = $$$hostConfig.shouldSetTextContent,
      Ka = $$$hostConfig.shouldDeprioritizeSubtree,
      La = $$$hostConfig.createTextInstance,
      Ma = $$$hostConfig.setTimeout,
      Na = $$$hostConfig.clearTimeout,
      Oa = $$$hostConfig.noTimeout,
      Pa = $$$hostConfig.isPrimaryRenderer,
      Qa = $$$hostConfig.supportsMutation,
      Ra = $$$hostConfig.supportsPersistence,
      Sa = $$$hostConfig.supportsHydration,
      Ta = $$$hostConfig.appendChild,
      Ua = $$$hostConfig.appendChildToContainer,
      Va = $$$hostConfig.commitTextUpdate,
      Wa = $$$hostConfig.commitMount,
      Xa = $$$hostConfig.commitUpdate,
      Ya = $$$hostConfig.insertBefore,
      Za = $$$hostConfig.insertInContainerBefore,
      $a = $$$hostConfig.removeChild,
      ab = $$$hostConfig.removeChildFromContainer,
      bb = $$$hostConfig.resetTextContent,
      cb = $$$hostConfig.hideInstance,
      db = $$$hostConfig.hideTextInstance,
      eb = $$$hostConfig.unhideInstance,
      fb = $$$hostConfig.unhideTextInstance,
      gb = $$$hostConfig.cloneInstance,
      hb = $$$hostConfig.createContainerChildSet,
      ib = $$$hostConfig.appendChildToContainerChildSet,
      kb = $$$hostConfig.finalizeContainerChildren,
      lb = $$$hostConfig.replaceContainerChildren,
      mb = $$$hostConfig.cloneHiddenInstance,
      nb = $$$hostConfig.cloneHiddenTextInstance,
      ob = $$$hostConfig.canHydrateInstance,
      pb = $$$hostConfig.canHydrateTextInstance,
      qb = $$$hostConfig.isSuspenseInstancePending,
      rb = $$$hostConfig.isSuspenseInstanceFallback,
      sb = $$$hostConfig.getNextHydratableSibling,
      tb = $$$hostConfig.getFirstHydratableChild,
      ub = $$$hostConfig.hydrateInstance,
      vb = $$$hostConfig.hydrateTextInstance,
      wb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      xb = $$$hostConfig.commitHydratedContainer,
      yb = $$$hostConfig.commitHydratedSuspenseInstance,
      zb = /^(.*)[\\\/]/;

  function Ab(a) {
    var b = "";

    do {
      a: switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;

        default:
          var d = a._debugOwner,
              e = a._debugSource,
              f = ta(a.type);
          c = null;
          d && (c = ta(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(zb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }

      b += c;
      a = a.return;
    } while (a);

    return b;
  }

  new Set();
  var Bb = [],
      Cb = -1;

  function y(a) {
    0 > Cb || (a.current = Bb[Cb], Bb[Cb] = null, Cb--);
  }

  function z(a, b) {
    Cb++;
    Bb[Cb] = a.current;
    a.current = b;
  }

  var Db = {},
      A = {
    current: Db
  },
      B = {
    current: !1
  },
      Eb = Db;

  function Fb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Db;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function C(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function Gb(a) {
    y(B, a);
    y(A, a);
  }

  function Hb(a) {
    y(B, a);
    y(A, a);
  }

  function Ib(a, b, c) {
    if (A.current !== Db) throw Error(n(168));
    z(A, b, a);
    z(B, c, a);
  }

  function Jb(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(n(108, ta(b) || "Unknown", e));
    }

    return aa({}, c, {}, d);
  }

  function Kb(a) {
    var b = a.stateNode;
    b = b && b.__reactInternalMemoizedMergedChildContext || Db;
    Eb = A.current;
    z(A, b, a);
    z(B, B.current, a);
    return !0;
  }

  function Lb(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (b = Jb(a, b, Eb), d.__reactInternalMemoizedMergedChildContext = b, y(B, a), y(A, a), z(A, b, a)) : y(B, a);
    z(B, c, a);
  }

  var Mb = m.unstable_runWithPriority,
      Nb = m.unstable_scheduleCallback,
      Ob = m.unstable_cancelCallback,
      Pb = m.unstable_shouldYield,
      Qb = m.unstable_requestPaint,
      Tb = m.unstable_now,
      Ub = m.unstable_getCurrentPriorityLevel,
      Vb = m.unstable_ImmediatePriority,
      Wb = m.unstable_UserBlockingPriority,
      Xb = m.unstable_NormalPriority,
      Yb = m.unstable_LowPriority,
      Zb = m.unstable_IdlePriority,
      $b = {},
      ac = void 0 !== Qb ? Qb : function () {},
      bc = null,
      cc = null,
      dc = !1,
      ec = Tb(),
      E = 1E4 > ec ? Tb : function () {
    return Tb() - ec;
  };

  function fc() {
    switch (Ub()) {
      case Vb:
        return 99;

      case Wb:
        return 98;

      case Xb:
        return 97;

      case Yb:
        return 96;

      case Zb:
        return 95;

      default:
        throw Error(n(332));
    }
  }

  function gc(a) {
    switch (a) {
      case 99:
        return Vb;

      case 98:
        return Wb;

      case 97:
        return Xb;

      case 96:
        return Yb;

      case 95:
        return Zb;

      default:
        throw Error(n(332));
    }
  }

  function hc(a, b) {
    a = gc(a);
    return Mb(a, b);
  }

  function ic(a, b, c) {
    a = gc(a);
    return Nb(a, b, c);
  }

  function jc(a) {
    null === bc ? (bc = [a], cc = Nb(Vb, kc)) : bc.push(a);
    return $b;
  }

  function F() {
    if (null !== cc) {
      var a = cc;
      cc = null;
      Ob(a);
    }

    kc();
  }

  function kc() {
    if (!dc && null !== bc) {
      dc = !0;
      var a = 0;

      try {
        var b = bc;
        hc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        bc = null;
      } catch (c) {
        throw null !== bc && (bc = bc.slice(a + 1)), Nb(Vb, F), c;
      } finally {
        dc = !1;
      }
    }
  }

  var lc = 3;

  function mc(a, b, c) {
    c /= 10;
    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
  }

  function nc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var oc = "function" === typeof Object.is ? Object.is : nc,
      pc = Object.prototype.hasOwnProperty;

  function qc(a, b) {
    if (oc(a, b)) return !0;
    if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!pc.call(b, c[d]) || !oc(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function rc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }
    }

    return b;
  }

  var sc = {
    current: null
  },
      tc = null,
      uc = null,
      vc = null;

  function wc() {
    vc = uc = tc = null;
  }

  function xc(a, b) {
    var c = a.type._context;
    Pa ? (z(sc, c._currentValue, a), c._currentValue = b) : (z(sc, c._currentValue2, a), c._currentValue2 = b);
  }

  function yc(a) {
    var b = sc.current;
    y(sc, a);
    a = a.type._context;
    Pa ? a._currentValue = b : a._currentValue2 = b;
  }

  function zc(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
      a = a.return;
    }
  }

  function Ac(a, b) {
    tc = a;
    vc = uc = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (a.expirationTime >= b && (Bc = !0), a.firstContext = null);
  }

  function Cc(a, b) {
    if (vc !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) vc = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === uc) {
        if (null === tc) throw Error(n(308));
        uc = b;
        tc.dependencies = {
          expirationTime: 0,
          firstContext: b,
          responders: null
        };
      } else uc = uc.next = b;
    }

    return Pa ? a._currentValue : a._currentValue2;
  }

  var Dc = !1;

  function Ec(a) {
    return {
      baseState: a,
      firstUpdate: null,
      lastUpdate: null,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }

  function Fc(a) {
    return {
      baseState: a.baseState,
      firstUpdate: a.firstUpdate,
      lastUpdate: a.lastUpdate,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }

  function Gc(a, b) {
    return {
      expirationTime: a,
      suspenseConfig: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
      nextEffect: null
    };
  }

  function Hc(a, b) {
    null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
  }

  function Ic(a, b) {
    var c = a.alternate;

    if (null === c) {
      var d = a.updateQueue;
      var e = null;
      null === d && (d = a.updateQueue = Ec(a.memoizedState));
    } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = Ec(a.memoizedState), e = c.updateQueue = Ec(c.memoizedState)) : d = a.updateQueue = Fc(e) : null === e && (e = c.updateQueue = Fc(d));

    null === e || d === e ? Hc(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (Hc(d, b), Hc(e, b)) : (Hc(d, b), e.lastUpdate = b);
  }

  function Jc(a, b) {
    var c = a.updateQueue;
    c = null === c ? a.updateQueue = Ec(a.memoizedState) : Kc(a, c);
    null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
  }

  function Kc(a, b) {
    var c = a.alternate;
    null !== c && b === c.updateQueue && (b = a.updateQueue = Fc(b));
    return b;
  }

  function Lc(a, b, c, d, e, f) {
    switch (c.tag) {
      case 1:
        return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

      case 3:
        a.effectTag = a.effectTag & -4097 | 64;

      case 0:
        a = c.payload;
        e = "function" === typeof a ? a.call(f, d, e) : a;
        if (null === e || void 0 === e) break;
        return aa({}, d, e);

      case 2:
        Dc = !0;
    }

    return d;
  }

  function Nc(a, b, c, d, e) {
    Dc = !1;
    b = Kc(a, b);

    for (var f = b.baseState, g = null, l = 0, h = b.firstUpdate, k = f; null !== h;) {
      var p = h.expirationTime;
      p < e ? (null === g && (g = h, f = k), l < p && (l = p)) : (Oc(p, h.suspenseConfig), k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = h : (b.lastEffect.nextEffect = h, b.lastEffect = h)));
      h = h.next;
    }

    p = null;

    for (h = b.firstCapturedUpdate; null !== h;) {
      var D = h.expirationTime;
      D < e ? (null === p && (p = h, null === g && (f = k)), l < D && (l = D)) : (k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = h : (b.lastCapturedEffect.nextEffect = h, b.lastCapturedEffect = h)));
      h = h.next;
    }

    null === g && (b.lastUpdate = null);
    null === p ? b.lastCapturedUpdate = null : a.effectTag |= 32;
    null === g && null === p && (f = k);
    b.baseState = f;
    b.firstUpdate = g;
    b.firstCapturedUpdate = p;
    Pc(l);
    a.expirationTime = l;
    a.memoizedState = k;
  }

  function Qc(a, b, c) {
    null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
    Rc(b.firstEffect, c);
    b.firstEffect = b.lastEffect = null;
    Rc(b.firstCapturedEffect, c);
    b.firstCapturedEffect = b.lastCapturedEffect = null;
  }

  function Rc(a, b) {
    for (; null !== a;) {
      var c = a.callback;

      if (null !== c) {
        a.callback = null;
        var d = b;
        if ("function" !== typeof c) throw Error(n(191, c));
        c.call(d);
      }

      a = a.nextEffect;
    }
  }

  var Sc = q.ReactCurrentBatchConfig,
      Tc = new ba.Component().refs;

  function Uc(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    d = a.updateQueue;
    null !== d && 0 === a.expirationTime && (d.baseState = c);
  }

  var Xc = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternalFiber) ? ua(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternalFiber;
      var d = G(),
          e = Sc.suspense;
      d = Vc(d, a, e);
      e = Gc(d, e);
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Ic(a, e);
      Wc(a, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternalFiber;
      var d = G(),
          e = Sc.suspense;
      d = Vc(d, a, e);
      e = Gc(d, e);
      e.tag = 1;
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Ic(a, e);
      Wc(a, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternalFiber;
      var c = G(),
          d = Sc.suspense;
      c = Vc(c, a, d);
      d = Gc(c, d);
      d.tag = 2;
      void 0 !== b && null !== b && (d.callback = b);
      Ic(a, d);
      Wc(a, c);
    }
  };

  function Yc(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !qc(c, d) || !qc(e, f) : !0;
  }

  function Zc(a, b, c) {
    var d = !1,
        e = Db;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? f = Cc(f) : (e = C(b) ? Eb : A.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Fb(a, e) : Db);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Xc;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function $c(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Xc.enqueueReplaceState(b, b.state, null);
  }

  function ad(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Tc;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? e.context = Cc(f) : (f = C(b) ? Eb : A.current, e.context = Fb(a, f));
    f = a.updateQueue;
    null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState);
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Uc(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Xc.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState));
    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
  }

  var bd = Array.isArray;

  function cd(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(n(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(n(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(_b) {
          var a = d.refs;
          a === Tc && (a = d.refs = {});
          null === _b ? delete a[e] : a[e] = _b;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(n(284));
      if (!c._owner) throw Error(n(290, a));
    }

    return a;
  }

  function dd(a, b) {
    if ("textarea" !== a.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
  }

  function ed(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.effectTag = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(b, a) {
      for (b = new Map(); null !== a;) {
        null !== a.key ? b.set(a.key, a) : b.set(a.index, a), a = a.sibling;
      }

      return b;
    }

    function e(b, a, c) {
      b = fd(b, a, c);
      b.index = 0;
      b.sibling = null;
      return b;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
      b.effectTag = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.effectTag = 2);
      return b;
    }

    function l(b, a, c, d) {
      if (null === a || 6 !== a.tag) return a = gd(c, b.mode, d), a.return = b, a;
      a = e(a, c, d);
      a.return = b;
      return a;
    }

    function h(b, a, c, d) {
      if (null !== a && a.elementType === c.type) return d = e(a, c.props, d), d.ref = cd(b, a, c), d.return = b, d;
      d = hd(c.type, c.key, c.props, null, b.mode, d);
      d.ref = cd(b, a, c);
      d.return = b;
      return d;
    }

    function k(b, a, c, d) {
      if (null === a || 4 !== a.tag || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation) return a = id(c, b.mode, d), a.return = b, a;
      a = e(a, c.children || [], d);
      a.return = b;
      return a;
    }

    function p(b, a, c, d, f) {
      if (null === a || 7 !== a.tag) return a = jd(c, b.mode, d, f), a.return = b, a;
      a = e(a, c, d);
      a.return = b;
      return a;
    }

    function D(b, a, c) {
      if ("string" === typeof a || "number" === typeof a) return a = gd("" + a, b.mode, c), a.return = b, a;

      if ("object" === _typeof(a) && null !== a) {
        switch (a.$$typeof) {
          case ca:
            return c = hd(a.type, a.key, a.props, null, b.mode, c), c.ref = cd(b, null, a), c.return = b, c;

          case da:
            return a = id(a, b.mode, c), a.return = b, a;
        }

        if (bd(a) || ra(a)) return a = jd(a, b.mode, c, null), a.return = b, a;
        dd(b, a);
      }

      return null;
    }

    function x(b, a, c, d) {
      var e = null !== a ? a.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : l(b, a, "" + c, d);

      if ("object" === _typeof(c) && null !== c) {
        switch (c.$$typeof) {
          case ca:
            return c.key === e ? c.type === ea ? p(b, a, c.props.children, d, e) : h(b, a, c, d) : null;

          case da:
            return c.key === e ? k(b, a, c, d) : null;
        }

        if (bd(c) || ra(c)) return null !== e ? null : p(b, a, c, d, null);
        dd(b, c);
      }

      return null;
    }

    function K(b, a, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return b = b.get(c) || null, l(a, b, "" + d, e);

      if ("object" === _typeof(d) && null !== d) {
        switch (d.$$typeof) {
          case ca:
            return b = b.get(null === d.key ? c : d.key) || null, d.type === ea ? p(a, b, d.props.children, e, d.key) : h(a, b, d, e);

          case da:
            return b = b.get(null === d.key ? c : d.key) || null, k(a, b, d, e);
        }

        if (bd(d) || ra(d)) return b = b.get(c) || null, p(a, b, d, e, null);
        dd(a, d);
      }

      return null;
    }

    function Ha(e, g, h, l) {
      for (var k = null, w = null, t = g, r = g = 0, p = null; null !== t && r < h.length; r++) {
        t.index > r ? (p = t, t = null) : p = t.sibling;
        var v = x(e, t, h[r], l);

        if (null === v) {
          null === t && (t = p);
          break;
        }

        a && t && null === v.alternate && b(e, t);
        g = f(v, g, r);
        null === w ? k = v : w.sibling = v;
        w = v;
        t = p;
      }

      if (r === h.length) return c(e, t), k;

      if (null === t) {
        for (; r < h.length; r++) {
          t = D(e, h[r], l), null !== t && (g = f(t, g, r), null === w ? k = t : w.sibling = t, w = t);
        }

        return k;
      }

      for (t = d(e, t); r < h.length; r++) {
        p = K(t, e, r, h[r], l), null !== p && (a && null !== p.alternate && t.delete(null === p.key ? r : p.key), g = f(p, g, r), null === w ? k = p : w.sibling = p, w = p);
      }

      a && t.forEach(function (a) {
        return b(e, a);
      });
      return k;
    }

    function O(e, g, h, l) {
      var k = ra(h);
      if ("function" !== typeof k) throw Error(n(150));
      h = k.call(h);
      if (null == h) throw Error(n(151));

      for (var t = k = null, r = g, w = g = 0, p = null, v = h.next(); null !== r && !v.done; w++, v = h.next()) {
        r.index > w ? (p = r, r = null) : p = r.sibling;
        var N = x(e, r, v.value, l);

        if (null === N) {
          null === r && (r = p);
          break;
        }

        a && r && null === N.alternate && b(e, r);
        g = f(N, g, w);
        null === t ? k = N : t.sibling = N;
        t = N;
        r = p;
      }

      if (v.done) return c(e, r), k;

      if (null === r) {
        for (; !v.done; w++, v = h.next()) {
          v = D(e, v.value, l), null !== v && (g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
        }

        return k;
      }

      for (r = d(e, r); !v.done; w++, v = h.next()) {
        v = K(r, e, w, v.value, l), null !== v && (a && null !== v.alternate && r.delete(null === v.key ? w : v.key), g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
      }

      a && r.forEach(function (a) {
        return b(e, a);
      });
      return k;
    }

    return function (a, d, f, h) {
      var k = "object" === _typeof(f) && null !== f && f.type === ea && null === f.key;
      k && (f = f.props.children);
      var l = "object" === _typeof(f) && null !== f;
      if (l) switch (f.$$typeof) {
        case ca:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                if (7 === k.tag ? f.type === ea : k.elementType === f.type) {
                  c(a, k.sibling);
                  d = e(k, f.type === ea ? f.props.children : f.props, h);
                  d.ref = cd(a, k, f);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, k);
                  break;
                }
              } else b(a, k);
              k = k.sibling;
            }

            f.type === ea ? (d = jd(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = hd(f.type, f.key, f.props, null, a.mode, h), h.ref = cd(a, d, f), h.return = a, a = h);
          }

          return g(a);

        case da:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || [], h);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = id(f, a.mode, h);
            d.return = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = gd(f, a.mode, h), d.return = a, a = d), g(a);
      if (bd(f)) return Ha(a, d, f, h);
      if (ra(f)) return O(a, d, f, h);
      l && dd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 0:
          throw a = a.type, Error(n(152, a.displayName || a.name || "Component"));
      }
      return c(a, d);
    };
  }

  var kd = ed(!0),
      ld = ed(!1),
      md = {},
      H = {
    current: md
  },
      nd = {
    current: md
  },
      od = {
    current: md
  };

  function pd(a) {
    if (a === md) throw Error(n(174));
    return a;
  }

  function qd(a, b) {
    z(od, b, a);
    z(nd, a, a);
    z(H, md, a);
    b = Aa(b);
    y(H, a);
    z(H, b, a);
  }

  function rd(a) {
    y(H, a);
    y(nd, a);
    y(od, a);
  }

  function sd(a) {
    var b = pd(od.current),
        c = pd(H.current);
    b = Ba(c, a.type, b);
    c !== b && (z(nd, a, a), z(H, b, a));
  }

  function td(a) {
    nd.current === a && (y(H, a), y(nd, a));
  }

  var I = {
    current: 0
  };

  function ud(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || qb(c) || rb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.effectTag & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }

    return null;
  }

  function vd(a, b) {
    return {
      responder: a,
      props: b
    };
  }

  var wd = q.ReactCurrentDispatcher,
      J = q.ReactCurrentBatchConfig,
      xd = 0,
      yd = null,
      L = null,
      zd = null,
      Ad = null,
      M = null,
      Bd = null,
      Cd = 0,
      Dd = null,
      Ed = 0,
      Fd = !1,
      Gd = null,
      Hd = 0;

  function P() {
    throw Error(n(321));
  }

  function Id(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!oc(a[c], b[c])) return !1;
    }

    return !0;
  }

  function Jd(a, b, c, d, e, f) {
    xd = f;
    yd = b;
    zd = null !== a ? a.memoizedState : null;
    wd.current = null === zd ? Kd : Ld;
    b = c(d, e);

    if (Fd) {
      do {
        Fd = !1, Hd += 1, zd = null !== a ? a.memoizedState : null, Bd = Ad, Dd = M = L = null, wd.current = Ld, b = c(d, e);
      } while (Fd);

      Gd = null;
      Hd = 0;
    }

    wd.current = Md;
    a = yd;
    a.memoizedState = Ad;
    a.expirationTime = Cd;
    a.updateQueue = Dd;
    a.effectTag |= Ed;
    a = null !== L && null !== L.next;
    xd = 0;
    Bd = M = Ad = zd = L = yd = null;
    Cd = 0;
    Dd = null;
    Ed = 0;
    if (a) throw Error(n(300));
    return b;
  }

  function Nd() {
    wd.current = Md;
    xd = 0;
    Bd = M = Ad = zd = L = yd = null;
    Cd = 0;
    Dd = null;
    Ed = 0;
    Fd = !1;
    Gd = null;
    Hd = 0;
  }

  function Od() {
    var a = {
      memoizedState: null,
      baseState: null,
      queue: null,
      baseUpdate: null,
      next: null
    };
    null === M ? Ad = M = a : M = M.next = a;
    return M;
  }

  function Pd() {
    if (null !== Bd) M = Bd, Bd = M.next, L = zd, zd = null !== L ? L.next : null;else {
      if (null === zd) throw Error(n(310));
      L = zd;
      var a = {
        memoizedState: L.memoizedState,
        baseState: L.baseState,
        queue: L.queue,
        baseUpdate: L.baseUpdate,
        next: null
      };
      M = null === M ? Ad = a : M.next = a;
      zd = L.next;
    }
    return M;
  }

  function Qd(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function Rd(a) {
    var b = Pd(),
        c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;

    if (0 < Hd) {
      var d = c.dispatch;

      if (null !== Gd) {
        var e = Gd.get(c);

        if (void 0 !== e) {
          Gd.delete(c);
          var f = b.memoizedState;

          do {
            f = a(f, e.action), e = e.next;
          } while (null !== e);

          oc(f, b.memoizedState) || (Bc = !0);
          b.memoizedState = f;
          b.baseUpdate === c.last && (b.baseState = f);
          c.lastRenderedState = f;
          return [f, d];
        }
      }

      return [b.memoizedState, d];
    }

    d = c.last;
    var g = b.baseUpdate;
    f = b.baseState;
    null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;

    if (null !== d) {
      var l = e = null,
          h = d,
          k = !1;

      do {
        var p = h.expirationTime;
        p < xd ? (k || (k = !0, l = g, e = f), p > Cd && (Cd = p, Pc(Cd))) : (Oc(p, h.suspenseConfig), f = h.eagerReducer === a ? h.eagerState : a(f, h.action));
        g = h;
        h = h.next;
      } while (null !== h && h !== d);

      k || (l = g, e = f);
      oc(f, b.memoizedState) || (Bc = !0);
      b.memoizedState = f;
      b.baseUpdate = l;
      b.baseState = e;
      c.lastRenderedState = f;
    }

    return [b.memoizedState, c.dispatch];
  }

  function Sd(a) {
    var b = Od();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: Qd,
      lastRenderedState: a
    };
    a = a.dispatch = Td.bind(null, yd, a);
    return [b.memoizedState, a];
  }

  function Ud(a) {
    return Rd(Qd, a);
  }

  function Vd(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    null === Dd ? (Dd = {
      lastEffect: null
    }, Dd.lastEffect = a.next = a) : (b = Dd.lastEffect, null === b ? Dd.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, Dd.lastEffect = a));
    return a;
  }

  function Wd(a, b, c, d) {
    var e = Od();
    Ed |= a;
    e.memoizedState = Vd(b, c, void 0, void 0 === d ? null : d);
  }

  function Xd(a, b, c, d) {
    var e = Pd();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== L) {
      var g = L.memoizedState;
      f = g.destroy;

      if (null !== d && Id(d, g.deps)) {
        Vd(0, c, f, d);
        return;
      }
    }

    Ed |= a;
    e.memoizedState = Vd(b, c, f, d);
  }

  function Yd(a, b) {
    return Wd(516, 192, a, b);
  }

  function Zd(a, b) {
    return Xd(516, 192, a, b);
  }

  function $d(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function ae() {}

  function be(a, b) {
    Od().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }

  function ce(a, b) {
    var c = Pd();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Id(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function Td(a, b, c) {
    if (!(25 > Hd)) throw Error(n(301));
    var d = a.alternate;
    if (a === yd || null !== d && d === yd) {
      if (Fd = !0, a = {
        expirationTime: xd,
        suspenseConfig: null,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, null === Gd && (Gd = new Map()), c = Gd.get(b), void 0 === c) Gd.set(b, a);else {
        for (b = c; null !== b.next;) {
          b = b.next;
        }

        b.next = a;
      }
    } else {
      var e = G(),
          f = Sc.suspense;
      e = Vc(e, a, f);
      f = {
        expirationTime: e,
        suspenseConfig: f,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var g = b.last;
      if (null === g) f.next = f;else {
        var l = g.next;
        null !== l && (f.next = l);
        g.next = f;
      }
      b.last = f;
      if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
        var h = b.lastRenderedState,
            k = d(h, c);
        f.eagerReducer = d;
        f.eagerState = k;
        if (oc(k, h)) return;
      } catch (p) {} finally {}
      Wc(a, e);
    }
  }

  var Md = {
    readContext: Cc,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useLayoutEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useResponder: P,
    useDeferredValue: P,
    useTransition: P
  },
      Kd = {
    readContext: Cc,
    useCallback: be,
    useContext: Cc,
    useEffect: Yd,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Wd(4, 36, $d.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return Wd(4, 36, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = Od();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = Od();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = Td.bind(null, yd, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = Od();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: Sd,
    useDebugValue: ae,
    useResponder: vd,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = Sd(a),
          d = c[0],
          e = c[1];
      Yd(function () {
        m.unstable_next(function () {
          var c = J.suspense;
          J.suspense = void 0 === b ? null : b;

          try {
            e(a);
          } finally {
            J.suspense = c;
          }
        });
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = Sd(!1),
          c = b[0],
          d = b[1];
      return [be(function (b) {
        d(!0);
        m.unstable_next(function () {
          var c = J.suspense;
          J.suspense = void 0 === a ? null : a;

          try {
            d(!1), b();
          } finally {
            J.suspense = c;
          }
        });
      }, [a, c]), c];
    }
  },
      Ld = {
    readContext: Cc,
    useCallback: ce,
    useContext: Cc,
    useEffect: Zd,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Xd(4, 36, $d.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return Xd(4, 36, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = Pd();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Id(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: Rd,
    useRef: function useRef() {
      return Pd().memoizedState;
    },
    useState: Ud,
    useDebugValue: ae,
    useResponder: vd,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = Ud(a),
          d = c[0],
          e = c[1];
      Zd(function () {
        m.unstable_next(function () {
          var c = J.suspense;
          J.suspense = void 0 === b ? null : b;

          try {
            e(a);
          } finally {
            J.suspense = c;
          }
        });
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = Ud(!1),
          c = b[0],
          d = b[1];
      return [ce(function (b) {
        d(!0);
        m.unstable_next(function () {
          var c = J.suspense;
          J.suspense = void 0 === a ? null : a;

          try {
            d(!1), b();
          } finally {
            J.suspense = c;
          }
        });
      }, [a, c]), c];
    }
  },
      de = null,
      ee = null,
      fe = !1;

  function ge(a, b) {
    var c = he(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function ie(a, b) {
    switch (a.tag) {
      case 5:
        return b = ob(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = pb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function je(a) {
    if (fe) {
      var b = ee;

      if (b) {
        var c = b;

        if (!ie(a, b)) {
          b = sb(c);

          if (!b || !ie(a, b)) {
            a.effectTag = a.effectTag & -1025 | 2;
            fe = !1;
            de = a;
            return;
          }

          ge(de, c);
        }

        de = a;
        ee = tb(b);
      } else a.effectTag = a.effectTag & -1025 | 2, fe = !1, de = a;
    }
  }

  function ke(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a.return;
    }

    de = a;
  }

  function ne(a) {
    if (!Sa || a !== de) return !1;
    if (!fe) return ke(a), fe = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ja(b, a.memoizedProps)) for (b = ee; b;) {
      ge(a, b), b = sb(b);
    }
    ke(a);

    if (13 === a.tag) {
      if (!Sa) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      ee = wb(a);
    } else ee = de ? sb(a.stateNode) : null;

    return !0;
  }

  function oe() {
    Sa && (ee = de = null, fe = !1);
  }

  var pe = q.ReactCurrentOwner,
      Bc = !1;

  function Q(a, b, c, d) {
    b.child = null === a ? ld(b, null, c, d) : kd(b, a.child, c, d);
  }

  function qe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Ac(b, e);
    d = Jd(a, b, c, d, f, e);
    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
    b.effectTag |= 1;
    Q(a, b, d, e);
    return b.child;
  }

  function se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ue(a, b, g, d, e, f);
      a = hd(c.type, null, d, null, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }

    g = a.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : qc, c(e, d) && a.ref === b.ref)) return re(a, b, f);
    b.effectTag |= 1;
    a = fd(g, d, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  function ue(a, b, c, d, e, f) {
    return null !== a && qc(a.memoizedProps, d) && a.ref === b.ref && (Bc = !1, e < f) ? re(a, b, f) : ve(a, b, c, d, f);
  }

  function we(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
  }

  function ve(a, b, c, d, e) {
    var f = C(c) ? Eb : A.current;
    f = Fb(b, f);
    Ac(b, e);
    c = Jd(a, b, c, d, f, e);
    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
    b.effectTag |= 1;
    Q(a, b, c, e);
    return b.child;
  }

  function xe(a, b, c, d, e) {
    if (C(c)) {
      var f = !0;
      Kb(b);
    } else f = !1;

    Ac(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Zc(b, c, d, e), ad(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          l = b.memoizedProps;
      g.props = l;
      var h = g.context,
          k = c.contextType;
      "object" === _typeof(k) && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k));
      var p = c.getDerivedStateFromProps,
          D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate;
      D || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k);
      Dc = !1;
      var x = b.memoizedState;
      h = g.state = x;
      var K = b.updateQueue;
      null !== K && (Nc(b, K, d, g, e), h = b.memoizedState);
      l !== d || x !== h || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), h = b.memoizedState), (l = Dc || Yc(b, c, l, d, x, h, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = h), g.props = d, g.state = h, g.context = k, d = l) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
    } else g = b.stateNode, l = b.memoizedProps, g.props = b.type === b.elementType ? l : rc(b.type, l), h = g.context, k = c.contextType, "object" === _typeof(k) && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k)), p = c.getDerivedStateFromProps, (D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k), Dc = !1, h = b.memoizedState, x = g.state = h, K = b.updateQueue, null !== K && (Nc(b, K, d, g, e), x = b.memoizedState), l !== d || h !== x || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), x = b.memoizedState), (p = Dc || Yc(b, c, l, d, h, x, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = p) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), d = !1);
    return ye(a, b, c, d, f, e);
  }

  function ye(a, b, c, d, e, f) {
    we(a, b);
    var g = 0 !== (b.effectTag & 64);
    if (!d && !g) return e && Lb(b, c, !1), re(a, b, f);
    d = b.stateNode;
    pe.current = b;
    var l = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.effectTag |= 1;
    null !== a && g ? (b.child = kd(b, a.child, null, f), b.child = kd(b, null, l, f)) : Q(a, b, l, f);
    b.memoizedState = d.state;
    e && Lb(b, c, !0);
    return b.child;
  }

  function ze(a) {
    var b = a.stateNode;
    b.pendingContext ? Ib(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ib(a, b.context, !1);
    qd(a, b.containerInfo);
  }

  var Ae = {
    dehydrated: null,
    retryTime: 0
  };

  function Be(a, b, c) {
    var d = b.mode,
        e = b.pendingProps,
        f = I.current,
        g = !1,
        l;
    (l = 0 !== (b.effectTag & 64)) || (l = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
    l ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
    z(I, f & 1, b);

    if (null === a) {
      void 0 !== e.fallback && je(b);

      if (g) {
        g = e.fallback;
        e = jd(null, d, 0, null);
        e.return = b;
        if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
          a.return = e, a = a.sibling;
        }
        c = jd(g, d, c, null);
        c.return = b;
        e.sibling = c;
        b.memoizedState = Ae;
        b.child = e;
        return c;
      }

      d = e.children;
      b.memoizedState = null;
      return b.child = ld(b, null, d, c);
    }

    if (null !== a.memoizedState) {
      a = a.child;
      d = a.sibling;

      if (g) {
        e = e.fallback;
        c = fd(a, a.pendingProps, 0);
        c.return = b;
        if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) {
          g.return = c, g = g.sibling;
        }
        d = fd(d, e, d.expirationTime);
        d.return = b;
        c.sibling = d;
        c.childExpirationTime = 0;
        b.memoizedState = Ae;
        b.child = c;
        return d;
      }

      c = kd(b, a.child, e.children, c);
      b.memoizedState = null;
      return b.child = c;
    }

    a = a.child;

    if (g) {
      g = e.fallback;
      e = jd(null, d, 0, null);
      e.return = b;
      e.child = a;
      null !== a && (a.return = e);
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
        a.return = e, a = a.sibling;
      }
      c = jd(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      e.childExpirationTime = 0;
      b.memoizedState = Ae;
      b.child = e;
      return c;
    }

    b.memoizedState = null;
    return b.child = kd(b, a, e.children, c);
  }

  function Ce(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    zc(a.return, b);
  }

  function De(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      last: d,
      tail: c,
      tailExpiration: 0,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
  }

  function Ee(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    Q(a, b, d.children, c);
    d = I.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
      if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && Ce(a, c);else if (19 === a.tag) Ce(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    z(I, d, b);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === ud(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        De(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === ud(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        De(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        De(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    0 !== d && Pc(d);
    if (b.childExpirationTime < c) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));

    if (null !== b.child) {
      a = b.child;
      c = fd(a, a.pendingProps, a.expirationTime);
      b.child = c;

      for (c.return = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = fd(a, a.pendingProps, a.expirationTime), c.return = b;
      }

      c.sibling = null;
    }

    return b.child;
  }

  function Fe(a) {
    a.effectTag |= 4;
  }

  var _Ge, He, Ie, Je;

  if (Qa) _Ge = function Ge(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Fa(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, He = function He() {}, Ie = function Ie(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = pd(H.current);
      c = Ia(f, c, a, d, e, g);
      (b.updateQueue = c) && Fe(b);
    }
  }, Je = function Je(a, b, c, d) {
    c !== d && Fe(b);
  };else if (Ra) {
    _Ge = function Ge(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = mb(f, e.type, e.memoizedProps, e));
          Fa(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), Fa(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, _Ge(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var Ke = function Ke(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = mb(f, e.type, e.memoizedProps, e));
          ib(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), ib(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, Ke(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    He = function He(a) {
      var b = a.stateNode;

      if (null !== a.firstEffect) {
        var c = b.containerInfo,
            d = hb(c);
        Ke(d, a, !1, !1);
        b.pendingChildren = d;
        Fe(a);
        kb(c, d);
      }
    };

    Ie = function Ie(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var l = b.stateNode,
            h = pd(H.current),
            k = null;
        g !== d && (k = Ia(l, c, g, d, e, h));
        a && null === k ? b.stateNode = f : (f = gb(f, k, c, g, d, b, a, l), Ga(f, c, d, e, h) && Fe(b), b.stateNode = f, a ? Fe(b) : _Ge(f, b, !1, !1));
      }
    };

    Je = function Je(a, b, c, d) {
      c !== d && (a = pd(od.current), c = pd(H.current), b.stateNode = La(d, a, c, b), Fe(b));
    };
  } else He = function He() {}, Ie = function Ie() {}, Je = function Je() {};

  function Le(a, b) {
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function Me(a) {
    switch (a.tag) {
      case 1:
        C(a.type) && Gb(a);
        var b = a.effectTag;
        return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

      case 3:
        rd(a);
        Hb(a);
        b = a.effectTag;
        if (0 !== (b & 64)) throw Error(n(285));
        a.effectTag = b & -4097 | 64;
        return a;

      case 5:
        return td(a), null;

      case 13:
        return y(I, a), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

      case 19:
        return y(I, a), null;

      case 4:
        return rd(a), null;

      case 10:
        return yc(a), null;

      default:
        return null;
    }
  }

  function Ne(a, b) {
    return {
      value: a,
      source: b,
      stack: Ab(b)
    };
  }

  var Oe = "function" === typeof WeakSet ? WeakSet : Set;

  function Pe(a, b) {
    var c = b.source,
        d = b.stack;
    null === d && null !== c && (d = Ab(c));
    null !== c && ta(c.type);
    b = b.value;
    null !== a && 1 === a.tag && ta(a.type);

    try {
      console.error(b);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function Qe(a, b) {
    try {
      b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
    } catch (c) {
      Re(a, c);
    }
  }

  function Se(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      Re(a, c);
    } else b.current = null;
  }

  function Te(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
        Ue(2, 0, b);
        break;

      case 1:
        if (b.effectTag & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : rc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        break;

      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        break;

      default:
        throw Error(n(163));
    }
  }

  function Ue(a, b, c) {
    c = c.updateQueue;
    c = null !== c ? c.lastEffect : null;

    if (null !== c) {
      var d = c = c.next;

      do {
        if (0 !== (d.tag & a)) {
          var e = d.destroy;
          d.destroy = void 0;
          void 0 !== e && e();
        }

        0 !== (d.tag & b) && (e = d.create, d.destroy = e());
        d = d.next;
      } while (d !== c);
    }
  }

  function Ve(a, b, c) {
    "function" === typeof We && We(b);

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var d = a.next;
          hc(97 < c ? 97 : c, function () {
            var a = d;

            do {
              var c = a.destroy;

              if (void 0 !== c) {
                var g = b;

                try {
                  c();
                } catch (l) {
                  Re(g, l);
                }
              }

              a = a.next;
            } while (a !== d);
          });
        }

        break;

      case 1:
        Se(b);
        c = b.stateNode;
        "function" === typeof c.componentWillUnmount && Qe(b, c);
        break;

      case 5:
        Se(b);
        break;

      case 4:
        Qa ? Xe(a, b, c) : Ra && Ye(b);
    }
  }

  function Ze(a, b, c) {
    for (var d = b;;) {
      if (Ve(a, d, c), null === d.child || Qa && 4 === d.tag) {
        if (d === b) break;

        for (; null === d.sibling;) {
          if (null === d.return || d.return === b) return;
          d = d.return;
        }

        d.sibling.return = d.return;
        d = d.sibling;
      } else d.child.return = d, d = d.child;
    }
  }

  function $e(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    null !== b && $e(b);
  }

  function Ye(a) {
    if (Ra) {
      a = a.stateNode.containerInfo;
      var b = hb(a);
      lb(a, b);
    }
  }

  function af(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function bf(a) {
    if (Qa) {
      a: {
        for (var b = a.return; null !== b;) {
          if (af(b)) {
            var c = b;
            break a;
          }

          b = b.return;
        }

        throw Error(n(160));
      }

      b = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          b = b.containerInfo;
          d = !0;
          break;

        case 4:
          b = b.containerInfo;
          d = !0;
          break;

        default:
          throw Error(n(161));
      }

      c.effectTag & 16 && (bb(b), c.effectTag &= -17);

      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || af(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.effectTag & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.effectTag & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      for (var e = a;;) {
        var f = 5 === e.tag || 6 === e.tag;
        if (f) f = f ? e.stateNode : e.stateNode.instance, c ? d ? Za(b, f, c) : Ya(b, f, c) : d ? Ua(b, f) : Ta(b, f);else if (4 !== e.tag && null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === a) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === a) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
  }

  function Xe(a, b, c) {
    for (var d = b, e = !1, f, g;;) {
      if (!e) {
        e = d.return;

        a: for (;;) {
          if (null === e) throw Error(n(160));
          f = e.stateNode;

          switch (e.tag) {
            case 5:
              g = !1;
              break a;

            case 3:
              f = f.containerInfo;
              g = !0;
              break a;

            case 4:
              f = f.containerInfo;
              g = !0;
              break a;
          }

          e = e.return;
        }

        e = !0;
      }

      if (5 === d.tag || 6 === d.tag) Ze(a, d, c), g ? ab(f, d.stateNode) : $a(f, d.stateNode);else if (4 === d.tag) {
        if (null !== d.child) {
          f = d.stateNode.containerInfo;
          g = !0;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if (Ve(a, d, c), null !== d.child) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b) break;

      for (; null === d.sibling;) {
        if (null === d.return || d.return === b) return;
        d = d.return;
        4 === d.tag && (e = !1);
      }

      d.sibling.return = d.return;
      d = d.sibling;
    }
  }

  function cf(a, b) {
    if (Qa) switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(4, 8, b);
        break;

      case 1:
        break;

      case 5:
        var c = b.stateNode;

        if (null != c) {
          var d = b.memoizedProps;
          a = null !== a ? a.memoizedProps : d;
          var e = b.type,
              f = b.updateQueue;
          b.updateQueue = null;
          null !== f && Xa(c, f, e, a, d, b);
        }

        break;

      case 6:
        if (null === b.stateNode) throw Error(n(162));
        c = b.memoizedProps;
        Va(b.stateNode, null !== a ? a.memoizedProps : c, c);
        break;

      case 3:
        Sa && (b = b.stateNode, b.hydrate && (b.hydrate = !1, xb(b.containerInfo)));
        break;

      case 12:
        break;

      case 13:
        df(b);
        ef(b);
        break;

      case 19:
        ef(b);
        break;

      case 17:
        break;

      case 20:
        break;

      case 21:
        break;

      default:
        throw Error(n(163));
    } else {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ue(4, 8, b);
          return;

        case 12:
          return;

        case 13:
          df(b);
          ef(b);
          return;

        case 19:
          ef(b);
          return;

        case 3:
          Sa && (c = b.stateNode, c.hydrate && (c.hydrate = !1, xb(c.containerInfo)));
      }

      a: if (Ra) switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;

        case 3:
        case 4:
          b = b.stateNode;
          lb(b.containerInfo, b.pendingChildren);
          break a;

        default:
          throw Error(n(163));
      }
    }
  }

  function df(a) {
    var b = a;
    if (null === a.memoizedState) var c = !1;else c = !0, b = a.child, ff = E();
    if (Qa && null !== b) a: if (a = b, Qa) for (b = a;;) {
      if (5 === b.tag) {
        var d = b.stateNode;
        c ? cb(d) : eb(b.stateNode, b.memoizedProps);
      } else if (6 === b.tag) d = b.stateNode, c ? db(d) : fb(d, b.memoizedProps);else if (13 === b.tag && null !== b.memoizedState && null === b.memoizedState.dehydrated) {
        d = b.child.sibling;
        d.return = b;
        b = d;
        continue;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break a;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) break a;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  function ef(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Oe());
      b.forEach(function (b) {
        var d = gf.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  var hf = "function" === typeof WeakMap ? WeakMap : Map;

  function jf(a, b, c) {
    c = Gc(c, null);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      kf || (kf = !0, lf = d);
      Pe(a, b);
    };

    return c;
  }

  function mf(a, b, c) {
    c = Gc(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        Pe(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === nf ? nf = new Set([this]) : nf.add(this), Pe(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var of = Math.ceil,
      pf = q.ReactCurrentDispatcher,
      qf = q.ReactCurrentOwner,
      R = 0,
      rf = 8,
      S = 16,
      sf = 32,
      tf = 0,
      uf = 1,
      vf = 2,
      wf = 3,
      xf = 4,
      yf = 5,
      T = R,
      U = null,
      V = null,
      W = 0,
      X = tf,
      zf = null,
      Af = 1073741823,
      Bf = 1073741823,
      Cf = null,
      Df = 0,
      Ef = !1,
      ff = 0,
      Ff = 500,
      Y = null,
      kf = !1,
      lf = null,
      nf = null,
      Gf = !1,
      Hf = null,
      If = 90,
      Jf = null,
      Kf = 0,
      Lf = null,
      Mf = 0;

  function G() {
    return (T & (S | sf)) !== R ? 1073741821 - (E() / 10 | 0) : 0 !== Mf ? Mf : Mf = 1073741821 - (E() / 10 | 0);
  }

  function Vc(a, b, c) {
    b = b.mode;
    if (0 === (b & 2)) return 1073741823;
    var d = fc();
    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((T & S) !== R) return W;
    if (null !== c) a = mc(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
      case 99:
        a = 1073741823;
        break;

      case 98:
        a = mc(a, 150, 100);
        break;

      case 97:
      case 96:
        a = mc(a, 5E3, 250);
        break;

      case 95:
        a = 2;
        break;

      default:
        throw Error(n(326));
    }
    null !== U && a === W && --a;
    return a;
  }

  function Wc(a, b) {
    if (50 < Kf) throw Kf = 0, Lf = null, Error(n(185));
    a = Nf(a, b);

    if (null !== a) {
      var c = fc();
      1073741823 === b ? (T & rf) !== R && (T & (S | sf)) === R ? Of(a) : (Z(a), T === R && F()) : Z(a);
      (T & 4) === R || 98 !== c && 99 !== c || (null === Jf ? Jf = new Map([[a, b]]) : (c = Jf.get(a), (void 0 === c || c > b) && Jf.set(a, b)));
    }
  }

  function Nf(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return,
        e = null;
    if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
      c = d.alternate;
      d.childExpirationTime < b && (d.childExpirationTime = b);
      null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

      if (null === d.return && 3 === d.tag) {
        e = d.stateNode;
        break;
      }

      d = d.return;
    }
    null !== e && (U === e && (Pc(b), X === xf && Pf(e, W)), Qf(e, b));
    return e;
  }

  function Rf(a) {
    var b = a.lastExpiredTime;
    if (0 !== b) return b;
    b = a.firstPendingTime;
    if (!Sf(a, b)) return b;
    b = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    return b > a ? b : a;
  }

  function Z(a) {
    if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = jc(Of.bind(null, a));else {
      var b = Rf(a),
          c = a.callbackNode;
      if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
        var d = G();
        1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);

        if (null !== c) {
          var e = a.callbackPriority;
          if (a.callbackExpirationTime === b && e >= d) return;
          c !== $b && Ob(c);
        }

        a.callbackExpirationTime = b;
        a.callbackPriority = d;
        b = 1073741823 === b ? jc(Of.bind(null, a)) : ic(d, Tf.bind(null, a), {
          timeout: 10 * (1073741821 - b) - E()
        });
        a.callbackNode = b;
      }
    }
  }

  function Tf(a, b) {
    Mf = 0;
    if (b) return b = G(), Uf(a, b), Z(a), null;
    var c = Rf(a);

    if (0 !== c) {
      b = a.callbackNode;
      if ((T & (S | sf)) !== R) throw Error(n(327));
      Vf();
      a === U && c === W || Wf(a, c);

      if (null !== V) {
        var d = T;
        T |= S;
        var e = Xf(a);

        do {
          try {
            Yf();
            break;
          } catch (l) {
            Zf(a, l);
          }
        } while (1);

        wc();
        T = d;
        pf.current = e;
        if (X === uf) throw b = zf, Wf(a, c), Pf(a, c), Z(a), b;
        if (null === V) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = X, U = null, d) {
          case tf:
          case uf:
            throw Error(n(345));

          case vf:
            Uf(a, 2 < c ? 2 : c);
            break;

          case wf:
            Pf(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = $f(e));

            if (1073741823 === Af && (e = ff + Ff - E(), 10 < e)) {
              if (Ef) {
                var f = a.lastPingedTime;

                if (0 === f || f >= c) {
                  a.lastPingedTime = c;
                  Wf(a, c);
                  break;
                }
              }

              f = Rf(a);
              if (0 !== f && f !== c) break;

              if (0 !== d && d !== c) {
                a.lastPingedTime = d;
                break;
              }

              a.timeoutHandle = Ma(ag.bind(null, a), e);
              break;
            }

            ag(a);
            break;

          case xf:
            Pf(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = $f(e));

            if (Ef && (e = a.lastPingedTime, 0 === e || e >= c)) {
              a.lastPingedTime = c;
              Wf(a, c);
              break;
            }

            e = Rf(a);
            if (0 !== e && e !== c) break;

            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }

            1073741823 !== Bf ? d = 10 * (1073741821 - Bf) - E() : 1073741823 === Af ? d = 0 : (d = 10 * (1073741821 - Af) - 5E3, e = E(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * of(d / 1960)) - d, c < d && (d = c));

            if (10 < d) {
              a.timeoutHandle = Ma(ag.bind(null, a), d);
              break;
            }

            ag(a);
            break;

          case yf:
            if (1073741823 !== Af && null !== Cf) {
              f = Af;
              var g = Cf;
              d = g.busyMinDurationMs | 0;
              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = E() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);

              if (10 < d) {
                Pf(a, c);
                a.timeoutHandle = Ma(ag.bind(null, a), d);
                break;
              }
            }

            ag(a);
            break;

          default:
            throw Error(n(329));
        }
        Z(a);
        if (a.callbackNode === b) return Tf.bind(null, a);
      }
    }

    return null;
  }

  function Of(a) {
    var b = a.lastExpiredTime;
    b = 0 !== b ? b : 1073741823;
    if (a.finishedExpirationTime === b) ag(a);else {
      if ((T & (S | sf)) !== R) throw Error(n(327));
      Vf();
      a === U && b === W || Wf(a, b);

      if (null !== V) {
        var c = T;
        T |= S;
        var d = Xf(a);

        do {
          try {
            bg();
            break;
          } catch (e) {
            Zf(a, e);
          }
        } while (1);

        wc();
        T = c;
        pf.current = d;
        if (X === uf) throw c = zf, Wf(a, b), Pf(a, b), Z(a), c;
        if (null !== V) throw Error(n(261));
        a.finishedWork = a.current.alternate;
        a.finishedExpirationTime = b;
        U = null;
        ag(a);
        Z(a);
      }
    }
    return null;
  }

  function cg(a, b) {
    Uf(a, b);
    Z(a);
    (T & (S | sf)) === R && F();
  }

  function dg() {
    if (null !== Jf) {
      var a = Jf;
      Jf = null;
      a.forEach(function (a, c) {
        Uf(c, a);
        Z(c);
      });
      F();
    }
  }

  function eg(a, b) {
    if ((T & (S | sf)) !== R) throw Error(n(187));
    var c = T;
    T |= 1;

    try {
      return hc(99, a.bind(null, b));
    } finally {
      T = c, F();
    }
  }

  function Wf(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    c !== Oa && (a.timeoutHandle = Oa, Na(c));
    if (null !== V) for (c = V.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          var e = d.type.childContextTypes;
          null !== e && void 0 !== e && Gb(d);
          break;

        case 3:
          rd(d);
          Hb(d);
          break;

        case 5:
          td(d);
          break;

        case 4:
          rd(d);
          break;

        case 13:
          y(I, d);
          break;

        case 19:
          y(I, d);
          break;

        case 10:
          yc(d);
      }

      c = c.return;
    }
    U = a;
    V = fd(a.current, null, b);
    W = b;
    X = tf;
    zf = null;
    Bf = Af = 1073741823;
    Cf = null;
    Df = 0;
    Ef = !1;
  }

  function Zf(a, b) {
    do {
      try {
        wc();
        Nd();
        if (null === V || null === V.return) return X = uf, zf = b, null;

        a: {
          var c = a,
              d = V.return,
              e = V,
              f = b;
          b = W;
          e.effectTag |= 2048;
          e.firstEffect = e.lastEffect = null;

          if (null !== f && "object" === _typeof(f) && "function" === typeof f.then) {
            var g = f,
                l = 0 !== (I.current & 1),
                h = d;

            do {
              var k;

              if (k = 13 === h.tag) {
                var p = h.memoizedState;
                if (null !== p) k = null !== p.dehydrated ? !0 : !1;else {
                  var D = h.memoizedProps;
                  k = void 0 === D.fallback ? !1 : !0 !== D.unstable_avoidThisFallback ? !0 : l ? !1 : !0;
                }
              }

              if (k) {
                var x = h.updateQueue;

                if (null === x) {
                  var K = new Set();
                  K.add(g);
                  h.updateQueue = K;
                } else x.add(g);

                if (0 === (h.mode & 2)) {
                  h.effectTag |= 64;
                  e.effectTag &= -2981;
                  if (1 === e.tag) if (null === e.alternate) e.tag = 17;else {
                    var Ha = Gc(1073741823, null);
                    Ha.tag = 2;
                    Ic(e, Ha);
                  }
                  e.expirationTime = 1073741823;
                  break a;
                }

                f = void 0;
                e = b;
                var O = c.pingCache;
                null === O ? (O = c.pingCache = new hf(), f = new Set(), O.set(g, f)) : (f = O.get(g), void 0 === f && (f = new Set(), O.set(g, f)));

                if (!f.has(e)) {
                  f.add(e);
                  var w = fg.bind(null, c, g, e);
                  g.then(w, w);
                }

                h.effectTag |= 4096;
                h.expirationTime = b;
                break a;
              }

              h = h.return;
            } while (null !== h);

            f = Error((ta(e.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Ab(e));
          }

          X !== yf && (X = vf);
          f = Ne(f, e);
          h = d;

          do {
            switch (h.tag) {
              case 3:
                g = f;
                h.effectTag |= 4096;
                h.expirationTime = b;
                var r = jf(h, g, b);
                Jc(h, r);
                break a;

              case 1:
                g = f;
                var t = h.type,
                    N = h.stateNode;

                if (0 === (h.effectTag & 64) && ("function" === typeof t.getDerivedStateFromError || null !== N && "function" === typeof N.componentDidCatch && (null === nf || !nf.has(N)))) {
                  h.effectTag |= 4096;
                  h.expirationTime = b;
                  var Mc = mf(h, g, b);
                  Jc(h, Mc);
                  break a;
                }

            }

            h = h.return;
          } while (null !== h);
        }

        V = gg(V);
      } catch (Rb) {
        b = Rb;
        continue;
      }

      break;
    } while (1);
  }

  function Xf() {
    var a = pf.current;
    pf.current = Md;
    return null === a ? Md : a;
  }

  function Oc(a, b) {
    a < Af && 2 < a && (Af = a);
    null !== b && a < Bf && 2 < a && (Bf = a, Cf = b);
  }

  function Pc(a) {
    a > Df && (Df = a);
  }

  function bg() {
    for (; null !== V;) {
      V = hg(V);
    }
  }

  function Yf() {
    for (; null !== V && !Pb();) {
      V = hg(V);
    }
  }

  function hg(a) {
    var b = ig(a.alternate, a, W);
    a.memoizedProps = a.pendingProps;
    null === b && (b = gg(a));
    qf.current = null;
    return b;
  }

  function gg(a) {
    V = a;

    do {
      var b = V.alternate;
      a = V.return;

      if (0 === (V.effectTag & 2048)) {
        a: {
          var c = b;
          b = V;
          var d = W,
              e = b.pendingProps;

          switch (b.tag) {
            case 2:
              break;

            case 16:
              break;

            case 15:
            case 0:
              break;

            case 1:
              C(b.type) && Gb(b);
              break;

            case 3:
              rd(b);
              Hb(b);
              e = b.stateNode;
              e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null);
              (null === c || null === c.child) && ne(b) && Fe(b);
              He(b);
              break;

            case 5:
              td(b);
              var f = pd(od.current);
              d = b.type;
              if (null !== c && null != b.stateNode) Ie(c, b, d, e, f), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
                c = pd(H.current);

                if (ne(b)) {
                  e = b;
                  if (!Sa) throw Error(n(175));
                  c = ub(e.stateNode, e.type, e.memoizedProps, f, c, e);
                  e.updateQueue = c;
                  c = null !== c ? !0 : !1;
                  c && Fe(b);
                } else {
                  var g = Ea(d, e, f, c, b);

                  _Ge(g, b, !1, !1);

                  b.stateNode = g;
                  Ga(g, d, e, f, c) && Fe(b);
                }

                null !== b.ref && (b.effectTag |= 128);
              } else if (null === b.stateNode) throw Error(n(166));
              break;

            case 6:
              if (c && null != b.stateNode) Je(c, b, c.memoizedProps, e);else {
                if ("string" !== typeof e && null === b.stateNode) throw Error(n(166));
                c = pd(od.current);
                f = pd(H.current);

                if (ne(b)) {
                  c = b;
                  if (!Sa) throw Error(n(176));
                  (c = vb(c.stateNode, c.memoizedProps, c)) && Fe(b);
                } else b.stateNode = La(e, c, f, b);
              }
              break;

            case 11:
              break;

            case 13:
              y(I, b);
              e = b.memoizedState;

              if (0 !== (b.effectTag & 64)) {
                b.expirationTime = d;
                break a;
              }

              e = null !== e;
              f = !1;
              null === c ? void 0 !== b.memoizedProps.fallback && ne(b) : (d = c.memoizedState, f = null !== d, e || null === d || (d = c.child.sibling, null !== d && (g = b.firstEffect, null !== g ? (b.firstEffect = d, d.nextEffect = g) : (b.firstEffect = b.lastEffect = d, d.nextEffect = null), d.effectTag = 8)));
              if (e && !f && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (I.current & 1)) X === tf && (X = wf);else {
                if (X === tf || X === wf) X = xf;
                0 !== Df && null !== U && (Pf(U, W), Qf(U, Df));
              }
              Ra && e && (b.effectTag |= 4);
              Qa && (e || f) && (b.effectTag |= 4);
              break;

            case 7:
              break;

            case 8:
              break;

            case 12:
              break;

            case 4:
              rd(b);
              He(b);
              break;

            case 10:
              yc(b);
              break;

            case 9:
              break;

            case 14:
              break;

            case 17:
              C(b.type) && Gb(b);
              break;

            case 19:
              y(I, b);
              e = b.memoizedState;
              if (null === e) break;
              f = 0 !== (b.effectTag & 64);
              g = e.rendering;
              if (null === g) {
                if (f) Le(e, !1);else {
                  if (X !== tf || null !== c && 0 !== (c.effectTag & 64)) for (c = b.child; null !== c;) {
                    g = ud(c);

                    if (null !== g) {
                      b.effectTag |= 64;
                      Le(e, !1);
                      c = g.updateQueue;
                      null !== c && (b.updateQueue = c, b.effectTag |= 4);
                      null === e.lastEffect && (b.firstEffect = null);
                      b.lastEffect = e.lastEffect;
                      c = d;

                      for (e = b.child; null !== e;) {
                        f = e, d = c, f.effectTag &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childExpirationTime = 0, f.expirationTime = d, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null) : (f.childExpirationTime = g.childExpirationTime, f.expirationTime = g.expirationTime, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, d = g.dependencies, f.dependencies = null === d ? null : {
                          expirationTime: d.expirationTime,
                          firstContext: d.firstContext,
                          responders: d.responders
                        }), e = e.sibling;
                      }

                      z(I, I.current & 1 | 2, b);
                      b = b.child;
                      break a;
                    }

                    c = c.sibling;
                  }
                }
              } else {
                if (!f) if (c = ud(g), null !== c) {
                  if (b.effectTag |= 64, f = !0, c = c.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), Le(e, !0), null === e.tail && "hidden" === e.tailMode) {
                    b = b.lastEffect = e.lastEffect;
                    null !== b && (b.nextEffect = null);
                    break;
                  }
                } else E() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, Le(e, !1), b.expirationTime = b.childExpirationTime = d - 1);
                e.isBackwards ? (g.sibling = b.child, b.child = g) : (c = e.last, null !== c ? c.sibling = g : b.child = g, e.last = g);
              }

              if (null !== e.tail) {
                0 === e.tailExpiration && (e.tailExpiration = E() + 500);
                c = e.tail;
                e.rendering = c;
                e.tail = c.sibling;
                e.lastEffect = b.lastEffect;
                c.sibling = null;
                e = I.current;
                e = f ? e & 1 | 2 : e & 1;
                z(I, e, b);
                b = c;
                break a;
              }

              break;

            case 20:
              break;

            case 21:
              break;

            default:
              throw Error(n(156, b.tag));
          }

          b = null;
        }

        c = V;

        if (1 === W || 1 !== c.childExpirationTime) {
          e = 0;

          for (f = c.child; null !== f;) {
            d = f.expirationTime, g = f.childExpirationTime, d > e && (e = d), g > e && (e = g), f = f.sibling;
          }

          c.childExpirationTime = e;
        }

        if (null !== b) return b;
        null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
      } else {
        b = Me(V, W);
        if (null !== b) return b.effectTag &= 2047, b;
        null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
      }

      b = V.sibling;
      if (null !== b) return b;
      V = a;
    } while (null !== V);

    X === tf && (X = yf);
    return null;
  }

  function $f(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
  }

  function ag(a) {
    var b = fc();
    hc(99, jg.bind(null, a, b));
    return null;
  }

  function jg(a, b) {
    Vf();
    if ((T & (S | sf)) !== R) throw Error(n(327));
    var c = a.finishedWork,
        d = a.finishedExpirationTime;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = $f(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === U && (V = U = null, W = 0);
    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

    if (null !== e) {
      var f = T;
      T |= sf;
      qf.current = null;
      Ca(a.containerInfo);
      Y = e;

      do {
        try {
          kg();
        } catch (jb) {
          if (null === Y) throw Error(n(330));
          Re(Y, jb);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Y = e;

      do {
        try {
          for (var g = a, l = b; null !== Y;) {
            var h = Y.effectTag;
            h & 16 && Qa && bb(Y.stateNode);

            if (h & 128) {
              var k = Y.alternate;

              if (null !== k) {
                var p = k.ref;
                null !== p && ("function" === typeof p ? p(null) : p.current = null);
              }
            }

            switch (h & 1038) {
              case 2:
                bf(Y);
                Y.effectTag &= -3;
                break;

              case 6:
                bf(Y);
                Y.effectTag &= -3;
                cf(Y.alternate, Y);
                break;

              case 1024:
                Y.effectTag &= -1025;
                break;

              case 1028:
                Y.effectTag &= -1025;
                cf(Y.alternate, Y);
                break;

              case 4:
                cf(Y.alternate, Y);
                break;

              case 8:
                var D = g,
                    x = Y,
                    K = l;
                Qa ? Xe(D, x, K) : Ze(D, x, K);
                $e(x);
            }

            Y = Y.nextEffect;
          }
        } catch (jb) {
          if (null === Y) throw Error(n(330));
          Re(Y, jb);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Da(a.containerInfo);
      a.current = c;
      Y = e;

      do {
        try {
          for (h = d; null !== Y;) {
            var Ha = Y.effectTag;

            if (Ha & 36) {
              var O = Y.alternate;
              k = Y;
              p = h;

              switch (k.tag) {
                case 0:
                case 11:
                case 15:
                  Ue(16, 32, k);
                  break;

                case 1:
                  var w = k.stateNode;
                  if (k.effectTag & 4) if (null === O) w.componentDidMount();else {
                    var r = k.elementType === k.type ? O.memoizedProps : rc(k.type, O.memoizedProps);
                    w.componentDidUpdate(r, O.memoizedState, w.__reactInternalSnapshotBeforeUpdate);
                  }
                  var t = k.updateQueue;
                  null !== t && Qc(k, t, w, p);
                  break;

                case 3:
                  var N = k.updateQueue;

                  if (null !== N) {
                    g = null;
                    if (null !== k.child) switch (k.child.tag) {
                      case 5:
                        g = za(k.child.stateNode);
                        break;

                      case 1:
                        g = k.child.stateNode;
                    }
                    Qc(k, N, g, p);
                  }

                  break;

                case 5:
                  var Mc = k.stateNode;
                  null === O && k.effectTag & 4 && Wa(Mc, k.type, k.memoizedProps, k);
                  break;

                case 6:
                  break;

                case 4:
                  break;

                case 12:
                  break;

                case 13:
                  if (Sa && null === k.memoizedState) {
                    var Rb = k.alternate;

                    if (null !== Rb) {
                      var le = Rb.memoizedState;

                      if (null !== le) {
                        var me = le.dehydrated;
                        null !== me && yb(me);
                      }
                    }
                  }

                  break;

                case 19:
                case 17:
                case 20:
                case 21:
                  break;

                default:
                  throw Error(n(163));
              }
            }

            if (Ha & 128) {
              k = void 0;
              var Sb = Y.ref;

              if (null !== Sb) {
                var v = Y.stateNode;

                switch (Y.tag) {
                  case 5:
                    k = za(v);
                    break;

                  default:
                    k = v;
                }

                "function" === typeof Sb ? Sb(k) : Sb.current = k;
              }
            }

            Y = Y.nextEffect;
          }
        } catch (jb) {
          if (null === Y) throw Error(n(330));
          Re(Y, jb);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Y = null;
      ac();
      T = f;
    } else a.current = c;

    if (Gf) Gf = !1, Hf = a, If = b;else for (Y = e; null !== Y;) {
      b = Y.nextEffect, Y.nextEffect = null, Y = b;
    }
    b = a.firstPendingTime;
    0 === b && (nf = null);
    1073741823 === b ? a === Lf ? Kf++ : (Kf = 0, Lf = a) : Kf = 0;
    "function" === typeof lg && lg(c.stateNode, d);
    Z(a);
    if (kf) throw kf = !1, a = lf, lf = null, a;
    if ((T & rf) !== R) return null;
    F();
    return null;
  }

  function kg() {
    for (; null !== Y;) {
      var a = Y.effectTag;
      0 !== (a & 256) && Te(Y.alternate, Y);
      0 === (a & 512) || Gf || (Gf = !0, ic(97, function () {
        Vf();
        return null;
      }));
      Y = Y.nextEffect;
    }
  }

  function Vf() {
    if (90 !== If) {
      var a = 97 < If ? 97 : If;
      If = 90;
      return hc(a, mg);
    }
  }

  function mg() {
    if (null === Hf) return !1;
    var a = Hf;
    Hf = null;
    if ((T & (S | sf)) !== R) throw Error(n(331));
    var b = T;
    T |= sf;

    for (a = a.current.firstEffect; null !== a;) {
      try {
        var c = a;
        if (0 !== (c.effectTag & 512)) switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Ue(128, 0, c), Ue(0, 64, c);
        }
      } catch (d) {
        if (null === a) throw Error(n(330));
        Re(a, d);
      }

      c = a.nextEffect;
      a.nextEffect = null;
      a = c;
    }

    T = b;
    F();
    return !0;
  }

  function ng(a, b, c) {
    b = Ne(c, b);
    b = jf(a, b, 1073741823);
    Ic(a, b);
    a = Nf(a, 1073741823);
    null !== a && Z(a);
  }

  function Re(a, b) {
    if (3 === a.tag) ng(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        ng(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === nf || !nf.has(d))) {
          a = Ne(b, a);
          a = mf(c, a, 1073741823);
          Ic(c, a);
          c = Nf(c, 1073741823);
          null !== c && Z(c);
          break;
        }
      }

      c = c.return;
    }
  }

  function fg(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    U === a && W === c ? X === xf || X === wf && 1073741823 === Af && E() - ff < Ff ? Wf(a, W) : Ef = !0 : Sf(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, a.finishedExpirationTime === c && (a.finishedExpirationTime = 0, a.finishedWork = null), Z(a)));
  }

  function gf(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = G(), b = Vc(b, a, null));
    a = Nf(a, b);
    null !== a && Z(a);
  }

  var ig;

  ig = function ig(a, b, c) {
    var d = b.expirationTime;

    if (null !== a) {
      var e = b.pendingProps;
      if (a.memoizedProps !== e || B.current) Bc = !0;else {
        if (d < c) {
          Bc = !1;

          switch (b.tag) {
            case 3:
              ze(b);
              oe();
              break;

            case 5:
              sd(b);
              if (b.mode & 4 && 1 !== c && Ka(b.type, e)) return b.expirationTime = b.childExpirationTime = 1, null;
              break;

            case 1:
              C(b.type) && Kb(b);
              break;

            case 4:
              qd(b, b.stateNode.containerInfo);
              break;

            case 10:
              xc(b, b.memoizedProps.value);
              break;

            case 13:
              if (null !== b.memoizedState) {
                d = b.child.childExpirationTime;
                if (0 !== d && d >= c) return Be(a, b, c);
                z(I, I.current & 1, b);
                b = re(a, b, c);
                return null !== b ? b.sibling : null;
              }

              z(I, I.current & 1, b);
              break;

            case 19:
              d = b.childExpirationTime >= c;

              if (0 !== (a.effectTag & 64)) {
                if (d) return Ee(a, b, c);
                b.effectTag |= 64;
              }

              e = b.memoizedState;
              null !== e && (e.rendering = null, e.tail = null);
              z(I, I.current, b);
              if (!d) return null;
          }

          return re(a, b, c);
        }

        Bc = !1;
      }
    } else Bc = !1;

    b.expirationTime = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        e = Fb(b, A.current);
        Ac(b, c);
        e = Jd(null, b, d, a, e, c);
        b.effectTag |= 1;

        if ("object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          Nd();

          if (C(d)) {
            var f = !0;
            Kb(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Uc(b, d, g, a);
          e.updater = Xc;
          b.stateNode = e;
          e._reactInternalFiber = b;
          ad(b, d, a, c);
          b = ye(null, b, d, !0, f, c);
        } else b.tag = 0, Q(null, b, e, c), b = b.child;

        return b;

      case 16:
        e = b.elementType;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        sa(e);
        if (1 !== e._status) throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = og(e);
        a = rc(e, a);

        switch (f) {
          case 0:
            b = ve(null, b, e, a, c);
            break;

          case 1:
            b = xe(null, b, e, a, c);
            break;

          case 11:
            b = qe(null, b, e, a, c);
            break;

          case 14:
            b = se(null, b, e, rc(e.type, a), d, c);
            break;

          default:
            throw Error(n(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), ve(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), xe(a, b, d, e, c);

      case 3:
        ze(b);
        d = b.updateQueue;
        if (null === d) throw Error(n(282));
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        Nc(b, d, b.pendingProps, null, c);
        d = b.memoizedState.element;
        if (d === e) oe(), b = re(a, b, c);else {
          if (e = b.stateNode.hydrate) Sa ? (ee = tb(b.stateNode.containerInfo), de = b, e = fe = !0) : e = !1;
          if (e) for (c = ld(b, null, d, c), b.child = c; c;) {
            c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
          } else Q(a, b, d, c), oe();
          b = b.child;
        }
        return b;

      case 5:
        return sd(b), null === a && je(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ja(d, e) ? g = null : null !== f && Ja(d, f) && (b.effectTag |= 16), we(a, b), b.mode & 4 && 1 !== c && Ka(d, e) ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (Q(a, b, g, c), b = b.child), b;

      case 6:
        return null === a && je(b), null;

      case 13:
        return Be(a, b, c);

      case 4:
        return qd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = kd(b, null, d, c) : Q(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), qe(a, b, d, e, c);

      case 7:
        return Q(a, b, b.pendingProps, c), b.child;

      case 8:
        return Q(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return Q(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          xc(b, f);

          if (null !== g) {
            var l = g.value;
            f = oc(l, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(l, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !B.current) {
                b = re(a, b, c);
                break a;
              }
            } else for (l = b.child, null !== l && (l.return = b); null !== l;) {
              var h = l.dependencies;

              if (null !== h) {
                g = l.child;

                for (var k = h.firstContext; null !== k;) {
                  if (k.context === d && 0 !== (k.observedBits & f)) {
                    1 === l.tag && (k = Gc(c, null), k.tag = 2, Ic(l, k));
                    l.expirationTime < c && (l.expirationTime = c);
                    k = l.alternate;
                    null !== k && k.expirationTime < c && (k.expirationTime = c);
                    zc(l.return, c);
                    h.expirationTime < c && (h.expirationTime = c);
                    break;
                  }

                  k = k.next;
                }
              } else g = 10 === l.tag ? l.type === b.type ? null : l.child : l.child;

              if (null !== g) g.return = l;else for (g = l; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }

                l = g.sibling;

                if (null !== l) {
                  l.return = g.return;
                  g = l;
                  break;
                }

                g = g.return;
              }
              l = g;
            }
          }

          Q(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, Ac(b, c), e = Cc(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, Q(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = rc(e, b.pendingProps), f = rc(e.type, f), se(a, b, e, f, d, c);

      case 15:
        return ue(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, C(d) ? (a = !0, Kb(b)) : a = !1, Ac(b, c), Zc(b, d, e, c), ad(b, d, e, c), ye(null, b, d, !0, a, c);

      case 19:
        return Ee(a, b, c);
    }

    throw Error(n(156, b.tag));
  };

  var lg = null,
      We = null;

  function pg(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber) return !0;

    try {
      var c = b.inject(a);

      lg = function lg(a) {
        try {
          b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
        } catch (e) {}
      };

      We = function We(a) {
        try {
          b.onCommitFiberUnmount(c, a);
        } catch (e) {}
      };
    } catch (d) {}

    return !0;
  }

  function qg(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }

  function he(a, b, c, d) {
    return new qg(a, b, c, d);
  }

  function te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function og(a) {
    if ("function" === typeof a) return te(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }

    return 2;
  }

  function fd(a, b) {
    var c = a.alternate;
    null === c ? (c = he(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      expirationTime: b.expirationTime,
      firstContext: b.firstContext,
      responders: b.responders
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function hd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ea:
        return jd(c.children, e, f, b);

      case ka:
        g = 8;
        e |= 7;
        break;

      case fa:
        g = 8;
        e |= 1;
        break;

      case ha:
        return a = he(12, c, b, e | 8), a.elementType = ha, a.type = ha, a.expirationTime = f, a;

      case ma:
        return a = he(13, c, b, e), a.type = ma, a.elementType = ma, a.expirationTime = f, a;

      case na:
        return a = he(19, c, b, e), a.elementType = na, a.expirationTime = f, a;

      default:
        if ("object" === _typeof(a) && null !== a) switch (a.$$typeof) {
          case ia:
            g = 10;
            break a;

          case ja:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;
        }
        throw Error(n(130, null == a ? a : _typeof(a), ""));
    }
    b = he(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
  }

  function jd(a, b, c, d) {
    a = he(7, a, d, b);
    a.expirationTime = c;
    return a;
  }

  function gd(a, b, c) {
    a = he(6, a, null, b);
    a.expirationTime = c;
    return a;
  }

  function id(a, b, c) {
    b = he(4, null !== a.children ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function rg(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = Oa;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }

  function Sf(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return 0 !== c && c >= b && a <= b;
  }

  function Pf(a, b) {
    var c = a.firstSuspendedTime,
        d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || 0 === c) a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  }

  function Qf(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
  }

  function Uf(a, b) {
    var c = a.lastExpiredTime;
    if (0 === c || c > b) a.lastExpiredTime = b;
  }

  function sg(a) {
    var b = a._reactInternalFiber;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      throw Error(n(268, Object.keys(a)));
    }

    a = xa(b);
    return null === a ? null : a.stateNode;
  }

  function tg(a, b) {
    a = a.memoizedState;
    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
  }

  function ug(a, b) {
    tg(a, b);
    (a = a.alternate) && tg(a, b);
  }

  var vg = {
    createContainer: function createContainer(a, b, c) {
      a = new rg(a, b, c);
      b = he(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
      a.current = b;
      return b.stateNode = a;
    },
    updateContainer: function updateContainer(a, b, c, d) {
      var e = b.current,
          f = G(),
          g = Sc.suspense;
      f = Vc(f, e, g);

      a: if (c) {
        c = c._reactInternalFiber;

        b: {
          if (ua(c) !== c || 1 !== c.tag) throw Error(n(170));
          var l = c;

          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break b;

              case 1:
                if (C(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }

            }

            l = l.return;
          } while (null !== l);

          throw Error(n(171));
        }

        if (1 === c.tag) {
          var h = c.type;

          if (C(h)) {
            c = Jb(c, h, l);
            break a;
          }
        }

        c = l;
      } else c = Db;

      null === b.context ? b.context = c : b.pendingContext = c;
      b = Gc(f, g);
      b.payload = {
        element: a
      };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      Ic(e, b);
      Wc(e, f);
      return f;
    },
    batchedEventUpdates: function batchedEventUpdates(a, b) {
      var c = T;
      T |= 2;

      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    batchedUpdates: function batchedUpdates(a, b) {
      var c = T;
      T |= 1;

      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    unbatchedUpdates: function unbatchedUpdates(a, b) {
      var c = T;
      T &= -2;
      T |= rf;

      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    deferredUpdates: function deferredUpdates(a) {
      return hc(97, a);
    },
    syncUpdates: function syncUpdates(a, b, c, d) {
      return hc(99, a.bind(null, b, c, d));
    },
    discreteUpdates: function discreteUpdates(a, b, c, d) {
      var e = T;
      T |= 4;

      try {
        return hc(98, a.bind(null, b, c, d));
      } finally {
        T = e, T === R && F();
      }
    },
    flushDiscreteUpdates: function flushDiscreteUpdates() {
      (T & (1 | S | sf)) === R && (dg(), Vf());
    },
    flushControlled: function flushControlled(a) {
      var b = T;
      T |= 1;

      try {
        hc(99, a);
      } finally {
        T = b, T === R && F();
      }
    },
    flushSync: eg,
    flushPassiveEffects: Vf,
    IsThisRendererActing: {
      current: !1
    },
    getPublicRootInstance: function getPublicRootInstance(a) {
      a = a.current;
      if (!a.child) return null;

      switch (a.child.tag) {
        case 5:
          return za(a.child.stateNode);

        default:
          return a.child.stateNode;
      }
    },
    attemptSynchronousHydration: function attemptSynchronousHydration(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          b.hydrate && cg(b, b.firstPendingTime);
          break;

        case 13:
          eg(function () {
            return Wc(a, 1073741823);
          }), b = mc(G(), 150, 100), ug(a, b);
      }
    },
    attemptUserBlockingHydration: function attemptUserBlockingHydration(a) {
      if (13 === a.tag) {
        var b = mc(G(), 150, 100);
        Wc(a, b);
        ug(a, b);
      }
    },
    attemptContinuousHydration: function attemptContinuousHydration(a) {
      if (13 === a.tag) {
        G();
        var b = lc++;
        Wc(a, b);
        ug(a, b);
      }
    },
    attemptHydrationAtCurrentPriority: function attemptHydrationAtCurrentPriority(a) {
      if (13 === a.tag) {
        var b = G();
        b = Vc(b, a, null);
        Wc(a, b);
        ug(a, b);
      }
    },
    findHostInstance: sg,
    findHostInstanceWithWarning: function findHostInstanceWithWarning(a) {
      return sg(a);
    },
    findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
      a = ya(a);
      return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
    },
    shouldSuspend: function shouldSuspend() {
      return !1;
    },
    injectIntoDevTools: function injectIntoDevTools(a) {
      var b = a.findFiberByHostInstance;
      return pg(aa({}, a, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: q.ReactCurrentDispatcher,
        findHostInstanceByFiber: function findHostInstanceByFiber(a) {
          a = xa(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: function findFiberByHostInstance(a) {
          return b ? b(a) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      }));
    }
  };
  module.exports = vg.default || vg;
  var $$$renderer = module.exports;
  module.exports = $$$reconciler;
  return $$$renderer;
};

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.17.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _f, g, h, k, l;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      t = function t() {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(t, 0), b;
    }
  },
      u = Date.now();

  exports.unstable_now = function () {
    return Date.now() - u;
  };

  _f = function f(a) {
    null !== p ? setTimeout(_f, 0, a) : (p = a, setTimeout(t, 0));
  };

  g = function g(a, b) {
    q = setTimeout(a, b);
  };

  h = function h() {
    clearTimeout(q);
  };

  k = function k() {
    return !1;
  };

  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout,
      A = window.requestAnimationFrame,
      B = window.cancelAnimationFrame;
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  if ("object" === _typeof(w) && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var C = x.now();

    exports.unstable_now = function () {
      return x.now() - C;
    };
  }
  var D = !1,
      E = null,
      F = -1,
      G = 5,
      H = 0;

  k = function k() {
    return exports.unstable_now() >= H;
  };

  l = function l() {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : G = 0 < a ? Math.floor(1E3 / a) : 33.33;
  };

  var I = new MessageChannel(),
      J = I.port2;

  I.port1.onmessage = function () {
    if (null !== E) {
      var a = exports.unstable_now();
      H = a + G;

      try {
        E(!0, a) ? J.postMessage(null) : (D = !1, E = null);
      } catch (b) {
        throw J.postMessage(null), b;
      }
    } else D = !1;
  };

  _f = function _f(a) {
    E = a;
    D || (D = !0, J.postMessage(null));
  };

  g = function g(a, b) {
    F = y(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function h() {
    z(F);
    F = -1;
  };
}

function K(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = Math.floor((c - 1) / 2),
        e = a[d];
    if (void 0 !== e && 0 < L(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function M(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function N(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > L(n, c)) void 0 !== r && 0 > L(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > L(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function L(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var O = [],
    P = [],
    Q = 1,
    R = null,
    S = 3,
    T = !1,
    U = !1,
    V = !1;

function W(a) {
  for (var b = M(P); null !== b;) {
    if (null === b.callback) N(P);else if (b.startTime <= a) N(P), b.sortIndex = b.expirationTime, K(O, b);else break;
    b = M(P);
  }
}

function X(a) {
  V = !1;
  W(a);
  if (!U) if (null !== M(O)) U = !0, _f(Y);else {
    var b = M(P);
    null !== b && g(X, b.startTime - a);
  }
}

function Y(a, b) {
  U = !1;
  V && (V = !1, h());
  T = !0;
  var c = S;

  try {
    W(b);

    for (R = M(O); null !== R && (!(R.expirationTime > b) || a && !k());) {
      var d = R.callback;

      if (null !== d) {
        R.callback = null;
        S = R.priorityLevel;
        var e = d(R.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? R.callback = e : R === M(O) && N(O);
        W(b);
      } else N(O);

      R = M(O);
    }

    if (null !== R) var m = !0;else {
      var n = M(P);
      null !== n && g(X, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    R = null, S = c, T = !1;
  }
}

function Z(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

var aa = l;
exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = S;
  S = a;

  try {
    return b();
  } finally {
    S = c;
  }
};

exports.unstable_next = function (a) {
  switch (S) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = S;
  }

  var c = S;
  S = b;

  try {
    return a();
  } finally {
    S = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();

  if ("object" === _typeof(c) && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Z(a);
  } else c = Z(a), e = d;

  c = e + c;
  a = {
    id: Q++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, K(P, a), null === M(O) && a === M(P) && (V ? h() : V = !0, g(X, e - d))) : (a.sortIndex = c, K(O, a), U || T || (U = !0, _f(Y)));
  return a;
};

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_wrapCallback = function (a) {
  var b = S;
  return function () {
    var c = S;
    S = b;

    try {
      return a.apply(this, arguments);
    } finally {
      S = c;
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return S;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  W(a);
  var b = M(O);
  return b !== R && null !== R && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < R.expirationTime || k();
};

exports.unstable_requestPaint = aa;

exports.unstable_continueExecution = function () {
  U || T || (U = !0, _f(Y));
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return M(O);
};

exports.unstable_Profiling = null;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/sr-sdk-wxapp/index.js":
/*!********************************************!*\
  !*** ./node_modules/sr-sdk-wxapp/index.js ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");

!function (t, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */

  var _t = function t(i, e) {
    return (_t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, i) {
      t.__proto__ = i;
    } || function (t, i) {
      for (var e in i) {
        i.hasOwnProperty(e) && (t[e] = i[e]);
      }
    })(i, e);
  };

  function i(i, e) {
    function s() {
      this.constructor = i;
    }

    _t(i, e), i.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s());
  }

  var _e = function e() {
    return (_e = Object.assign || function (t) {
      for (var i, e = 1, s = arguments.length; e < s; e++) {
        for (var r in i = arguments[e]) {
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  };

  function s(t, i, e, s) {
    var r,
        n = arguments.length,
        o = n < 3 ? i : null === s ? s = Object.getOwnPropertyDescriptor(i, e) : s;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, i, e, s);else for (var h = t.length - 1; h >= 0; h--) {
      (r = t[h]) && (o = (n < 3 ? r(o) : n > 3 ? r(i, e, o) : r(i, e)) || o);
    }
    return n > 3 && o && Object.defineProperty(i, e, o), o;
  }

  function r() {
    for (var t = 0, i = 0, e = arguments.length; i < e; i++) {
      t += arguments[i].length;
    }

    var s = Array(t),
        r = 0;

    for (i = 0; i < e; i++) {
      for (var n = arguments[i], o = 0, h = n.length; o < h; o++, r++) {
        s[r] = n[o];
      }
    }

    return s;
  }

  try {
    Object.entries || (Object.entries = function (t) {
      for (var i = Object.keys(t), e = i.length, s = new Array(e); e--;) {
        s[e] = [i[e], t[i[e]]];
      }

      return s;
    }), Array.prototype.includes || (Array.prototype.includes = function (t) {
      return !!~this.indexOf(t);
    });
  } catch (t) {
    console.error("polyfill exec failed", t);
  }

  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      h = function h(t) {
    return function (t) {
      for (var i, e, s, r, o = "", h = 0, a = (t = String(t)).length % 3; h < t.length;) {
        if ((e = t.charCodeAt(h++)) > 255 || (s = t.charCodeAt(h++)) > 255 || (r = t.charCodeAt(h++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        o += n.charAt((i = e << 16 | s << 8 | r) >> 18 & 63) + n.charAt(i >> 12 & 63) + n.charAt(i >> 6 & 63) + n.charAt(63 & i);
      }

      return a ? o.slice(0, a - 3) + "===".substring(a) : o;
    }(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, i) {
      var e;
      return e = "0x" + i, String.fromCharCode(e);
    }));
  },
      a = function a(t) {
    return decodeURIComponent(function (t) {
      if (t = String(t).replace(/[\t\n\f\r ]+/g, ""), !o.test(t)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      t += "==".slice(2 - (3 & t.length));

      for (var i, e, s, r = "", h = 0; h < t.length;) {
        i = n.indexOf(t.charAt(h++)) << 18 | n.indexOf(t.charAt(h++)) << 12 | (e = n.indexOf(t.charAt(h++))) << 6 | (s = n.indexOf(t.charAt(h++))), r += 64 === e ? String.fromCharCode(i >> 16 & 255) : 64 === s ? String.fromCharCode(i >> 16 & 255, i >> 8 & 255) : String.fromCharCode(i >> 16 & 255, i >> 8 & 255, 255 & i);
      }

      return r;
    }(t).split("").map(function (t) {
      return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  },
      c = {
    encode: function encode(t) {
      return h(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    },
    decode: function decode(t) {
      var i = (t = t.replace(/\-/g, "+").replace(/_/g, "/")).length % 4;
      return i > 0 && (t += "====".substring(i)), a(t);
    }
  },
      u = Object.prototype.toString,
      p = c,
      d = function d(t) {
    return "[object Object]" === u.call(t);
  },
      f = function f(t) {
    return "[object Array]" === u.call(t);
  },
      l = function l(t, i) {
    var e;
    void 0 === i && (i = 0);
    var s = [];
    return function () {
      for (var r = arguments, n = [], o = 0; o < arguments.length; o++) {
        n[o] = r[o];
      }

      return clearTimeout(e), e = setTimeout(function () {
        var i = t.apply(void 0, n);
        s.forEach(function (t) {
          return t(i);
        }), s = [];
      }, i), new Promise(function (t) {
        return s.push(t);
      });
    };
  },
      g = function g() {
    return Date.now() + "-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var i = 16 * Math.random() | 0;
      return ("x" == t ? i : 3 & i | 8).toString(16);
    });
  },
      v = function v() {
    for (var t = arguments, i = [], e = 0; e < arguments.length; e++) {
      i[e] = t[e];
    }

    return 0 === i.length ? {} : i.length < 2 ? i[0] : i.reduce(function (t, i) {
      if (!d(t) || !d(i)) return console.error("deepMerge arguments only access object"), t;
      var e = t || {};
      return Object.entries(i).forEach(function (i) {
        var s = i[0],
            n = i[1];
        if (void 0 !== n) if (t[s]) {
          if (f(t[s])) {
            if (!f(n)) return void (e[s] = n);
            var o = f(n) ? n : [n];
            e[s] = r(t[s], o);
          } else d(t[s]) ? e[s] = v(t[s], n) : e[s] = n;
        } else e[s] = n;
      }), e;
    });
  },
      _ = function _(t) {
    return !!/^[a-zA-Z\$_][a-zA-Z\d_]*$/.test(t);
  },
      x = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
      m = function m(t) {
    if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
    if (!x.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)");
  },
      S = function S(t) {
    return isNaN(Number(t)) ? t : Number(t);
  },
      y = function y(t) {
    var i,
        e,
        s = t.replace(/^v/, "").replace(/\+.*$/, ""),
        r = (e = "-", -1 === (i = s).indexOf(e) ? i.length : i.indexOf(e)),
        n = s.substring(0, r).split(".");
    return n.push(s.substring(r + 1)), n;
  },
      k = function k(t, i) {
    [t, i].forEach(m);

    for (var e = y(t), s = y(i), r = 0; r < Math.max(e.length - 1, s.length - 1); r++) {
      var n = parseInt(e[r] || 0, 10),
          o = parseInt(s[r] || 0, 10);
      if (n > o) return 1;
      if (o > n) return -1;
    }

    var h = e[e.length - 1],
        a = s[s.length - 1];

    if (h && a) {
      var c = h.split(".").map(S),
          u = a.split(".").map(S);

      for (r = 0; r < Math.max(c.length, u.length); r++) {
        if (void 0 === c[r] || "string" == typeof u[r] && "number" == typeof c[r]) return -1;
        if (void 0 === u[r] || "string" == typeof c[r] && "number" == typeof u[r]) return 1;
        if (c[r] > u[r]) return 1;
        if (u[r] > c[r]) return -1;
      }
    } else if (h || a) return h ? -1 : 1;

    return 0;
  },
      b = function (t) {
    function s(i) {
      var e = t.call(this, i.request) || this;
      return e.stack = [], e.initialize = function () {
        return Promise.resolve(!0);
      }, e.add = function (t) {
        e.stack.push(t);
      }, e.getItems = function () {
        return e.stack;
      }, e.unshift = function (t) {
        var i;
        return (i = e.stack).unshift.apply(i, t);
      }, e.clean = function () {
        var t = e.stack;
        return e.stack = [], t;
      }, e.option = i, e.initialize(), e;
    }

    return i(s, t), s.prototype.flush = function (t) {
      var i = this;

      if (void 0 === t && (t = {}), this.stack.length) {
        var s = this.stack.map(function (i) {
          return i.props = _e(_e({}, i.props), t), i;
        });
        this.stack = [], this.upload({
          events: s
        }).then(function (t) {
          t.success || (i.stack = s);
        }).catch(function () {
          i.stack = s;
        });
      }
    }, s;
  }(function (t) {
    this.delay = 100, this.upload = l(t, this.delay);
  }),
      I = function I(t, i, e) {
    var s = e.value;
    return e.value = function () {
      var t;

      try {
        t = s.apply(this, arguments);
      } catch (t) {
        try {
          console.error("Calling " + i + " error with", arguments), console.error(t);
          var e = this.getServerUrl();
          this.request({
            type: "sdk api exec error",
            props: {
              sr_sdk_version: this.version,
              system_info: this.getSystemInfo(),
              framework_info: this.getFrameworkInfo(),
              message: (t || {}).message || t,
              stack: (t || {}).stack
            }
          }, {
            url: e,
            method: "POST"
          });
        } catch (t) {}
      }

      return t;
    }, e;
  },
      w = function w(t, i, e) {
    var s = e.value;
    return e.value = function () {
      if (this.inited) return s.apply(this, arguments);
      console.error("\u8BF7\u5148\u5B8C\u6210\u521D\u59CB\u5316");
    }, e;
  },
      A = {
    SDK: "__SR_SDK_TRACKER__",
    TRACKS: "TRACKS",
    USER_INFO: "USER_INFO",
    LOGID_EVENTS: "LOGID_EVENTS"
  },
      C = {
    WAITING: "WAITING",
    REPORTING: "REPORTING",
    PAUSED: "PAUSED"
  },
      T = {
    MISS: "should exec cacheManagerInitialize first"
  },
      O = {};

  try {
    O = JSON.parse('{"mp":{"version":{"min":"1.3.18","max":"1.3.21"},"download":"https://mp.zhls.qq.com/sdk/sdk-weapp/index.js"},"xxx-for-git":{}}');
  } catch (t) {}

  var U = function () {
    function t() {
      var t = this;
      this.versions = O, this.env = "production", this.cachePrefix = A.SDK, this.inited = !1, this.option = {}, this.context = {}, this.reportState = C.WAITING, this.triggerFlush = l(function () {
        t.checkAndUpload();
      }, 1e3), this.eventDataFmatter = function (i) {
        var s = +new Date(),
            r = t.getPageInfo();

        if (void 0 !== t._onQueue) {
          var n = t._onQueue(i);

          d(i) ? i = n : console.warn("eventDataFmatter should return Object type");
        }

        return _e(_e(_e({}, r), i), {
          time: s
        });
      }, this.checkRequiredOptionItem = function () {
        return !!t.option.token || (t.option.skipTokenCheck ? (console.warn("token \u672A\u914D\u7F6E\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u68C0\u67E5"), !0) : (console.error("sdk.init - Option \u5FC5\u8981\u53C2\u6570\u914D\u7F6E\u7F3A\u5931\uFF0C\u8BF7\u68C0\u67E5"), !1));
      }, this.checkVersionInfo = function () {
        t.setContext({
          sr_sdk_version: t.version
        });
        var i = "https://mp.zhls.qq.com/sdk/sr-sdk-version-info.json?timesamp=" + Date.now();
        return t.request({}, {
          url: i,
          method: "GET"
        }).then(function (i) {
          var e = (i.data || {})[t.name],
              s = !0;

          if (e) {
            var r = (((t.versions || {})[t.name] || {}).version || {}).max;
            return r && (1 === k(e.version.min, r) ? (console.error("\u5F53\u524DSDK\u7248\u672C\u8FC7\u4F4E, \u8BF7\u5347\u7EA7\uFF01"), s = !1) : 1 === k(e.version.max, r) && console.warn("\u5F53\u524DSDK\u6709\u66F4\u65B0, \u63A8\u8350\u5347\u7EA7\uFF01")), {
              success: s,
              data: e,
              msg: ""
            };
          }
        }).catch(function (t) {
          return void 0 === t && (t = {}), {
            success: !1,
            data: void 0,
            msg: t.errMsg
          };
        });
      }, this.queueInitialize = function () {
        var i = t.getServerUrl();
        return t.queue = new b({
          request: function request(s) {
            var r = s.events.map(function (i) {
              return _e(_e({}, i), {
                from: "sr-sdk-wxapp",
                tracking_id: t.tracking_id,
                log_id: ++t.log_id
              });
            });
            return t.setCache(A.LOGID_EVENTS, {
              last_tracking_id: t.tracking_id,
              last_max_log_id: t.log_id
            }), t.request(r, {
              url: i,
              method: "POST"
            }).catch(function (t) {
              return console.error("APICaller error", t), "request:fail url not in domain list" === t.msg ? _e(_e({}, t), {
                success: !0
              }) : t;
            });
          }
        }), !0;
      }, this.trackLogEvents = function () {
        var i = t.getCache(A.LOGID_EVENTS) || {};
        return i.last_max_log_id ? (t.track("logid_events", i), !0) : (++t.log_id, !1);
      }, this.tracking_id = g(), this.log_id = -1, this.checkStaticMethods();
    }

    return t.prototype.init = function (t) {
      if (this.inited) return this;
      if (this.version = ((this.versions[this.name] || {}).version || {}).max, this.option = v(this.defaultOptions, this.option, t), t.autoProxy && (this.option.proxyComponent = !0, this.option.proxyPage = !0, this.option.openAutoTrackOpenId = !0, this.option.openAutoTrackUnionId = !0, this.option.autoTrack = !0, this.option.openSdkShareDepth = !0), !this.checkRequiredOptionItem()) return this;
      this.cacheManagerInitialize();

      try {
        this.proxyInitialize();
      } catch (t) {
        this.errorHandle(t);
      }

      return this.queueInitialize(), this.contextInitialize(), this.inited = !0, this.checkFallback(), this.option.autoStart && this.startReport(), this.checkVersionInfo(), this.trackLogEvents(), this;
    }, t.prototype.track = function (t, i) {
      var e = this.option.debug;
      JSON.stringify(i || {}).length > 5e3 && console.warn("\u76D1\u6D4B\u5230\u8D85\u8FC75000\u7684\u4E0A\u62A5\u65E5\u5FD7\uFF1A" + t);
      var s = this.eventDataFmatter(i);
      return e && console && "function" == typeof console.log && console.log("\u3010Track\u3011 " + t, s), this.queue.add({
        type: t,
        props: s
      }), this.triggerFlush(), this;
    }, t.prototype.setContext = function (t) {
      return console.warn("setContext \u4E0D\u5728\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u7528\u66F4\u8F7B\u4FBF\u7684 setUser\u3001setChan\u7B49\u65B9\u6CD5\u4EE3\u66FF"), this.context = _e(_e(_e({}, this.context), t), {
        wx_user: _e(_e({}, this.context.wx_user), t.wx_user || {}),
        chan: _e(_e({}, this.context.chan), t.chan || {})
      }), this;
    }, t.prototype.setUser = function (t) {
      return void 0 === t && (t = {}), this.context = Object.assign({}, this.context, {
        wx_user: _e(_e({}, this.context.wx_user), t)
      }), this.setCache(A.USER_INFO, this.context.wx_user), this;
    }, t.prototype.setChan = function (t) {
      var i = t.chan_id,
          s = (this.context.chan || {}).chan_id;
      return this.context = Object.assign({}, this.context, {
        chan: _e(_e(_e({}, this.context.chan), t), {
          chan_id: i || s || ""
        })
      }), this;
    }, t.prototype.setComponent = function (t) {
      var i = t.component_id,
          s = t.component_name;
      return this.context = Object.assign({}, this.context, {
        component: _e(_e({}, t), {
          component_id: i,
          component_name: s
        })
      }), this;
    }, t.prototype.clearComponent = function () {
      return delete this.context.component, this;
    }, t.prototype.setActivityInfo = function (t) {
      var i = t.activity_id,
          s = t.activity_name,
          r = t.activity_type,
          n = t.activity_index;
      return this.context = Object.assign({}, this.context, {
        activity_info: _e(_e({}, t), {
          activity_id: i,
          activity_name: s,
          activity_type: r,
          activity_index: n
        })
      }), this;
    }, t.prototype.clearActivityInfo = function () {
      return delete this.context.activity_info, this;
    }, t.prototype.startReport = function () {
      return this.reportState = C.REPORTING, this.triggerFlush(), this;
    }, t.prototype.resumeReport = function () {
      var t = this.getCache(A.TRACKS) || [];
      return this.queue.unshift(t), this.reportState === C.PAUSED && (this.reportState = C.REPORTING), this.triggerFlush(), this;
    }, t.prototype.pauseReport = function () {
      return this.reportState = C.PAUSED, this.setCache(A.TRACKS, this.queue.clean()), this;
    }, t.prototype.flush = function () {
      return this.queue.flush(this.context), this;
    }, t.prototype.onQueue = function (t) {
      return this._onQueue = t, this;
    }, t.prototype.getInfo = function () {
      var t = {
        option: this.option,
        tracking_id: this.tracking_id,
        context: this.context,
        is_dev: this.isDev()
      };
      return "SR_SDK_INFO=" + p.encode(JSON.stringify(t));
    }, t.prototype.checkStaticMethods = function () {
      if ("development" === this.env) try {
        var t = this.constructor;
        ["create"].forEach(function (i) {
          !t[i] && console.error("static " + i + " should be implement");
        });
      } catch (t) {
        console.error("checkStaticMethods error", t);
      }
    }, t.prototype.checkFallback = function () {
      var t = this;
      setTimeout(function () {
        t.checkAndUpload(), t.checkFallback();
      }, 1e4);
    }, t.prototype.checkAndUpload = function () {
      this.reportState === C.REPORTING && this.flush();
    }, t.prototype.contextInitialize = function () {
      var t = this.getUser(),
          i = this.getSystemInfo(),
          s = i.brand,
          r = i.model,
          n = i.version,
          o = i.environment,
          h = i.screenWidth,
          a = i.screenHeight,
          c = i.system,
          u = i.platform,
          p = i.SDKVersion,
          d = i.benchmarkLevel,
          f = i.locationReducedAccuracy,
          l = this.getFrameworkInfo();
      this.context = v(this.context, {
        wx_user: _e(_e({}, t), {
          app_id: this.option.appid
        }),
        system_info: {
          brand: s,
          model: r,
          version: n,
          environment: o,
          screenWidth: h,
          screenHeight: a,
          system: c,
          platform: u,
          SDKVersion: p,
          benchmarkLevel: d,
          LRA: f
        },
        framework_info: l,
        chan: {}
      });
    }, t.prototype.getUser = function () {
      var t = this.context.wx_user || this.getCache(A.USER_INFO) || {};
      return t.local_id && 50 === t.local_id.length || (t = {
        local_id: g()
      }, this.setCache(A.USER_INFO, t)), t;
    }, t.prototype.cacheManagerInitialize = function () {
      var t = this.getCacheManager();
      this.cacheManager = t;
    }, t.prototype.getCache = function (t) {
      return this.cacheManager ? (this.cacheManager.get(A.SDK) || {})[t] : (console.error(T.MISS), {});
    }, t.prototype.setCache = function (t, i) {
      var s;
      this.cacheManager || console.error(T.MISS);

      var r = _e(_e({}, this.cacheManager.get(A.SDK) || {}), ((s = {})[t] = i, s));

      this.cacheManager.set(A.SDK, r);
    }, t.prototype.getServerUrl = function () {
      var t = "";
      return t = "function" == typeof this.option.serverUrl ? this.option.serverUrl.call(this) : this.option.serverUrl || "https://zhls.qq.com/api/report", t += "?token=" + this.option.token;
    }, t.prototype.getTrackingId = function () {
      return this.tracking_id;
    }, s([I], t.prototype, "init", null), s([I, w], t.prototype, "track", null), s([I, w], t.prototype, "setContext", null), s([I, w], t.prototype, "setUser", null), s([I, w], t.prototype, "setChan", null), s([I, w], t.prototype, "setComponent", null), s([I, w], t.prototype, "clearComponent", null), s([I, w], t.prototype, "setActivityInfo", null), s([I, w], t.prototype, "clearActivityInfo", null), s([I, w], t.prototype, "startReport", null), s([I, w], t.prototype, "resumeReport", null), s([I, w], t.prototype, "pauseReport", null), s([I, w], t.prototype, "flush", null), s([I, w], t.prototype, "onQueue", null), s([I, w], t.prototype, "getInfo", null), t;
  }();

  function R(t, i, e, s) {
    void 0 === s && (s = !1);
    var n = t[i];

    t[i] = function () {
      for (var t = arguments, i = this, o = [], h = 0; h < arguments.length; h++) {
        o[h] = t[h];
      }

      var a = function a() {
        return n && n.apply(i, o);
      };

      return s && (a = function a() {
        return Promise.resolve().then(function () {
          return n.apply(i, o);
        });
      }), e.apply(this, r([a], o));
    };
  }

  var F = function () {
    function t() {}

    return t.AddUnsigned = function (t, i) {
      var e, s, r, n, o;
      return r = 2147483648 & t, n = 2147483648 & i, o = (1073741823 & t) + (1073741823 & i), (e = 1073741824 & t) & (s = 1073741824 & i) ? 2147483648 ^ o ^ r ^ n : e | s ? 1073741824 & o ? 3221225472 ^ o ^ r ^ n : 1073741824 ^ o ^ r ^ n : o ^ r ^ n;
    }, t.FF = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.F(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.GG = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.G(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.HH = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.H(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.II = function (t, i, e, s, r, n, o) {
      return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.I(i, e, s), r), o)), this.AddUnsigned(this.RotateLeft(t, n), i);
    }, t.ConvertToWordArray = function (t) {
      for (var i, e = t.length, s = e + 8, r = 16 * ((s - s % 64) / 64 + 1), n = Array(r - 1), o = 0, h = 0; h < e;) {
        o = h % 4 * 8, n[i = (h - h % 4) / 4] = n[i] | t.charCodeAt(h) << o, h++;
      }

      return o = h % 4 * 8, n[i = (h - h % 4) / 4] = n[i] | 128 << o, n[r - 2] = e << 3, n[r - 1] = e >>> 29, n;
    }, t.WordToHex = function (t) {
      var i,
          e = "",
          s = "";

      for (i = 0; i <= 3; i++) {
        e += (s = "0" + (t >>> 8 * i & 255).toString(16)).substr(s.length - 2, 2);
      }

      return e;
    }, t.Utf8Encode = function (t) {
      var i,
          e = "";
      t = t.replace(/\r\n/g, "\n");

      for (var s = 0; s < t.length; s++) {
        (i = t.charCodeAt(s)) < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
      }

      return e;
    }, t.init = function (t) {
      for ("string" != typeof t && (t = JSON.stringify(t)), this._string = this.Utf8Encode(t), this.x = this.ConvertToWordArray(this._string), this.a = 1732584193, this.b = 4023233417, this.c = 2562383102, this.d = 271733878, this.k = 0; this.k < this.x.length; this.k += 16) {
        this.AA = this.a, this.BB = this.b, this.CC = this.c, this.DD = this.d, this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k], this.S11, 3614090360), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 1], this.S12, 3905402710), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S13, 606105819), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 3], this.S14, 3250441966), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S11, 4118548399), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 5], this.S12, 1200080426), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S13, 2821735955), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 7], this.S14, 4249261313), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S11, 1770035416), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 9], this.S12, 2336552879), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S13, 4294925233), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 11], this.S14, 2304563134), this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S11, 1804603682), this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 13], this.S12, 4254626195), this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S13, 2792965006), this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 15], this.S14, 1236535329), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S21, 4129170786), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 6], this.S22, 3225465664), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S23, 643717713), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k], this.S24, 3921069994), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S21, 3593408605), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 10], this.S22, 38016083), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S23, 3634488961), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 4], this.S24, 3889429448), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S21, 568446438), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 14], this.S22, 3275163606), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S23, 4107603335), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 8], this.S24, 1163531501), this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S21, 2850285829), this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 2], this.S22, 4243563512), this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S23, 1735328473), this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 12], this.S24, 2368359562), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S31, 4294588738), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 8], this.S32, 2272392833), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S33, 1839030562), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 14], this.S34, 4259657740), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S31, 2763975236), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 4], this.S32, 1272893353), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S33, 4139469664), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 10], this.S34, 3200236656), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S31, 681279174), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k], this.S32, 3936430074), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S33, 3572445317), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 6], this.S34, 76029189), this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S31, 3654602809), this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 12], this.S32, 3873151461), this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S33, 530742520), this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 2], this.S34, 3299628645), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k], this.S41, 4096336452), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 7], this.S42, 1126891415), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S43, 2878612391), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 5], this.S44, 4237533241), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S41, 1700485571), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 3], this.S42, 2399980690), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S43, 4293915773), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 1], this.S44, 2240044497), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S41, 1873313359), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 15], this.S42, 4264355552), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S43, 2734768916), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 13], this.S44, 1309151649), this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S41, 4149444226), this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 11], this.S42, 3174756917), this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S43, 718787259), this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 9], this.S44, 3951481745), this.a = this.AddUnsigned(this.a, this.AA), this.b = this.AddUnsigned(this.b, this.BB), this.c = this.AddUnsigned(this.c, this.CC), this.d = this.AddUnsigned(this.d, this.DD);
      }

      return (this.WordToHex(this.a) + this.WordToHex(this.b) + this.WordToHex(this.c) + this.WordToHex(this.d)).toLowerCase();
    }, t.x = Array(), t.S11 = 7, t.S12 = 12, t.S13 = 17, t.S14 = 22, t.S21 = 5, t.S22 = 9, t.S23 = 14, t.S24 = 20, t.S31 = 4, t.S32 = 11, t.S33 = 16, t.S34 = 23, t.S41 = 6, t.S42 = 10, t.S43 = 15, t.S44 = 21, t.RotateLeft = function (t, i) {
      return t << i | t >>> 32 - i;
    }, t.F = function (t, i, e) {
      return t & i | ~t & e;
    }, t.G = function (t, i, e) {
      return t & e | i & ~e;
    }, t.H = function (t, i, e) {
      return t ^ i ^ e;
    }, t.I = function (t, i, e) {
      return i ^ (t | ~e);
    }, t;
  }(),
      G = "production";

  function H() {
    var t = getCurrentPages() || "";
    return t[t.length - 1] || "";
  }

  function D(t) {
    var i = "/";

    try {
      var e = H();
      if (!e) return e;
      var s,
          r = e.route,
          n = e.options;

      for (var o in s = e.options, i = r + "?", n) {
        if ("share" !== t || "txsrShareInfoSdk" !== o) if (_(o)) if (s[o]) i += o + "=" + n[o] + "&";
      }

      i = i.substring(0, i.length - 1);
    } catch (t) {
      console.error("getCurrentPageUrlWithArgs error", t);
    }

    return i;
  }

  function P(t) {
    try {
      var i = H();
      if (!i) return i;
      i.options;
      return i.options[t] || "";
    } catch (t) {
      console.error("getCurrentPageKey error", t);
    }

    return "/";
  }

  function E() {
    var t = H();

    try {
      var i = __wxConfig.global.window.navigationBarTitleText;
      return (t ? (__wxConfig.page[t.route + ".html"].window || {}).navigationBarTitleText : "") || i || "\u672A\u77E5";
    } catch (t) {}

    return "\u672A\u77E5";
  }

  function N() {
    return "devtools" === function () {
      try {
        return __wxConfig.platform;
      } catch (t) {
        console.error("getEnv failed: ", t);
      }

      return "";
    }();
  }

  function M(t, i, s) {
    try {
      var r = t[0],
          n = void 0 === r ? {} : r;
      if (n) switch (n.type) {
        case "tap":
        case "change":
        case "longpress":
        case "confirm":
          var o = (n.currentTarget || {}).dataset,
              h = void 0 === o ? {} : o,
              a = this || {},
              c = a.is,
              u = void 0 === c ? "" : c;
          a.data;
          i("element", _e({
            is_sdk_auto_track: !0,
            is: u,
            type: n.type,
            element_id: "#" + s
          }, h));
      }
    } catch (t) {
      console.error("elementEventTrack error", t);
    }
  }

  function q() {
    var t,
        i = "" + G,
        e = (H() || {}).route || "";

    try {
      t = wx.getStorageSync(A.SDK + "_" + i);
    } catch (t) {
      console.error("CacheManager.get error", t);
    }

    var s = t.USER_INFO || {},
        r = s.local_id,
        n = s.txsr_from_share_info,
        o = void 0 === n ? {} : n,
        h = o.mi,
        a = void 0 === h ? "" : h,
        c = o.d,
        u = void 0 === c ? 0 : c,
        p = o.o,
        d = void 0 === p ? "" : p,
        f = F.init(r + e),
        l = "" !== a && f === a ? u : u + 1;
    return a = F.init(r + e), 0 === u && (d = a), console.log("ooooo", d, u), JSON.stringify({
      mi: a,
      d: l,
      o: d
    });
  }

  var j = function j() {},
      z = {},
      L = {},
      K = function K() {
    return new Date().getTime();
  };

  var W = function W(t, i, e, s) {
    return function (r) {
      return function (t, i, e, s, r) {
        if (R(t, "onLoad", function (t, i) {
          t(), this.lauchTime = K();
        }), R(t, "onShow", function (t) {
          var s = this,
              r = function r() {
            s.showTime = K();
            var t = P.call(s, "room_id") || P.call(s, "roomId") || P.call(s, "roomid");
            t && e({
              room_id: t
            }), i("browse_wxapp_page", {
              is_sdk_auto_track: !0,
              refer_page: L.route,
              is_newly_open: !z[s.route]
            }), z[s.route] = !0;
          };

          t().then(r).catch(r);
        }, !0), R(t, "onHide", function (t) {
          t();
          var e = this.showTime ? K() - this.showTime : 0;
          e = e > 144e5 ? 0 : e, this.showTime = 0, i("leave_wxapp_page", {
            is_sdk_auto_track: !0,
            refer_page: L.route,
            stay_time: e
          }), L = this;
        }), R(t, "onUnload", function (t) {
          t();
          var e = this.showTime ? K() - this.showTime : 0;
          e = e > 144e5 ? 0 : e, i("leave_wxapp_page", {
            is_sdk_auto_track: !0,
            refer_page: L.route,
            stay_time: e
          }), L = this;
        }), R(t, "onPullDownRefresh", function (t) {
          t(), i("page_pull_down_refresh", {
            is_sdk_auto_track: !0
          });
        }), R(t, "onReachBottom", function (t) {
          t(), i("page_reach_bottom", {
            is_sdk_auto_track: !0
          });
        }), "function" == typeof t.onShareAppMessage) {
          var n = t.onShareAppMessage || j;

          if (t.onShareAppMessage = function (t) {
            void 0 === t && (t = {});
            var e = n.call(this, t) || {};

            try {
              var s = e.path || D.call(this, "share");
              -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
              var o = void 0,
                  h = void 0;
              r && (o = q(), h = JSON.parse(o), s = s + "txsrShareInfoSdk=" + encodeURIComponent(o)), i("page_share_app_message", {
                is_sdk_auto_track: !0,
                from_type: t.from || "\u672A\u77E5",
                share_to: "friends",
                share_path: s,
                share_title: e.title,
                share_image_url: e.imageUrl,
                refer_page: L.route,
                txsr_share_info_sdk: h
              }), e.path = s;
            } catch (t) {
              console.error("onShareAppMessage error", t);
            }

            return e;
          }, "function" == typeof t.onShareTimeline) {
            var o = t.onShareTimeline || j;

            t.onShareTimeline = function (t) {
              void 0 === t && (t = {});
              var e = o.call(this, t) || {};

              try {
                var s = e.path || D.call(this, "share"),
                    n = e.query || "";
                -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
                var h = void 0,
                    a = void 0;
                r && (h = q(), a = JSON.parse(h), s = s + "txsrShareInfoSdk=" + encodeURIComponent(h)), i("page_share_app_message", {
                  is_sdk_auto_track: !0,
                  from_type: t.from || "\u672A\u77E5",
                  share_to: "timeline",
                  query: n,
                  share_path: s,
                  share_title: e.title,
                  share_image_url: e.imageUrl,
                  refer_page: L.route,
                  txsr_share_info_sdk: a
                }), e.path = s;
              } catch (t) {
                console.error("onShareAppMessage error", t);
              }

              return e;
            };
          }
        }

        return s && Object.entries(t).filter(function (t) {
          var i = t[0];
          t[1];
          return !["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap"].includes(i);
        }).forEach(function (e) {
          var s = e[0];
          "function" == typeof e[1] && R(t, s, function (t) {
            for (var e = arguments, r = [], n = 1; n < arguments.length; n++) {
              r[n - 1] = e[n];
            }

            return M.call(this, r, i, s), t();
          });
        }), t;
      }(r, t, i, e, s);
    };
  },
      B = function B() {},
      J = {},
      V = {},
      Q = function Q() {
    return new Date().getTime();
  };

  var Z = function Z(t, i, e, s) {
    return function (r) {
      return function (t, i, e, s, r) {
        try {
          if (t.methods = t.methods || {}, R(t.methods, "onLoad", function (t, i) {
            t(), this.lauchTime = Q();
          }), R(t.methods, "onShow", function (t) {
            var s = this,
                r = function r() {
              s.showTime = Q();
              var t = P.call(s, "room_id") || P.call(s, "roomId") || P.call(s, "roomid");
              t && e({
                room_id: t
              }), i("browse_wxapp_page", {
                is_sdk_auto_track: !0,
                refer_page: V.route,
                is_newly_open: !J[s.route]
              }), J[s.route] = !0;
            };

            t().then(r).catch(r);
          }, !0), R(t.methods, "onUnload", function (t) {
            t();
            var e = this.showTime ? Q() - this.showTime : 0;
            e = e > 144e5 ? 0 : e, i("leave_wxapp_page", {
              is_sdk_auto_track: !0,
              refer_page: V.route,
              stay_time: e
            }), V = this;
          }), R(t.methods, "onPullDownRefresh", function (t) {
            t(), i("page_pull_down_refresh", {
              is_sdk_auto_track: !0
            });
          }), R(t.methods, "onReachBottom", function (t) {
            t(), i("page_reach_bottom", {
              is_sdk_auto_track: !0
            });
          }), R(t.methods, "onHide", function (t) {
            t();
            var e = this.showTime ? Q() - this.showTime : 0;
            e = e > 144e5 ? 0 : e, this.showTime = 0, i("leave_wxapp_page", {
              is_sdk_auto_track: !0,
              refer_page: V.route,
              stay_time: e
            }), V = this;
          }), "function" == typeof t.methods.onShareAppMessage) {
            var n = t.methods.onShareAppMessage || B;

            if (t.methods.onShareAppMessage = function (t) {
              void 0 === t && (t = {});
              var e = n.call(this, t) || {};

              try {
                var s = e.path || D.call(this, "share");
                -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
                var o = void 0,
                    h = void 0;
                r && (o = q(), h = JSON.parse(o), s = s + "txsrShareInfoSdk=" + encodeURIComponent(o)), i("page_share_app_message", {
                  is_sdk_auto_track: !0,
                  from_type: t.from || "\u672A\u77E5",
                  share_to: "friends",
                  share_path: s,
                  share_title: e.title,
                  share_image_url: e.imageUrl,
                  refer_page: V.route,
                  txsr_share_info_sdk: h
                }), e.path = s;
              } catch (t) {
                console.error("onShareAppMessage error", t);
              }

              return e;
            }, "function" == typeof t.methods.onShareTimeline) {
              var o = t.methods.onShareTimeline || B;

              t.methods.onShareTimeline = function (t) {
                void 0 === t && (t = {});
                var e = o.call(this, t) || {};

                try {
                  var s = e.path || D.call(this, "share"),
                      n = e.query || "";
                  -1 === s.indexOf("?") ? s += "?" : "&" !== s.slice(-1) && (s += "&");
                  var h = void 0,
                      a = void 0;
                  r && (h = q(), a = JSON.parse(h), s = s + "txsrShareInfoSdk=" + encodeURIComponent(h)), i("page_share_app_message", {
                    is_sdk_auto_track: !0,
                    from_type: t.from || "\u672A\u77E5",
                    share_to: "timeline",
                    share_path: s,
                    query: n,
                    share_title: e.title,
                    share_image_url: e.imageUrl,
                    refer_page: V.route,
                    txsr_share_info_sdk: a
                  }), e.path = s;
                } catch (t) {
                  console.error("onShareAppMessage error", t);
                }

                return e;
              };
            }
          }

          t.methods && s && Object.entries(t.methods).filter(function (t) {
            var i = t[0];
            t[1];
            return !["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap", "observer"].includes(i);
          }).forEach(function (e) {
            var s = e[0];
            "function" == typeof e[1] && R(t.methods, s, function (t) {
              for (var e = arguments, r = [], n = 1; n < arguments.length; n++) {
                r[n - 1] = e[n];
              }

              return M.call(this, r, i, s), t();
            });
          });
        } catch (t) {
          console.error("componentProxy error", t);
        }

        return t;
      }(r, t, i, e, s);
    };
  },
      $ = {},
      X = function X(t) {
    return t;
  },
      Y = function (t) {
    function s() {
      var i = t.call(this) || this;
      return i.name = "mp", i.component = X, i.page = X, i.proxySetNavigation = function () {
        try {
          var t = wx.setNavigationBarTitle;
          Object.defineProperty(wx, "setNavigationBarTitle", {
            get: function get() {
              return function (i) {
                void 0 === i && (i = {});

                try {
                  var e = H();
                  __wxConfig.page = __wxConfig.page || {};
                  var s = __wxConfig.page[e.route + ".html"];
                  s && ((s.window || {}).navigationBarTitleText = i.title);
                } catch (t) {}

                t.call(this, i);
              };
            }
          });
        } catch (t) {
          console.warn("proxySetNavigation failed", t);
        }
      }, i.request = function (t, e) {
        var s = function s(t) {
          return void 0 === t && (t = {}), 0 === t.code;
        };

        return "function" == typeof i.option.onUploaded && (s = i.option.onUploaded), new Promise(function (i, r) {
          wx.request({
            url: e.url,
            method: e.method || "POST",
            data: t,
            success: function success(t) {
              void 0 === t && (t = {});
              var e = t.data,
                  r = void 0 === e ? {} : e,
                  n = s(r);
              i({
                success: void 0 === n || n,
                data: r.data || r,
                msg: r.errMsg
              });
            },
            fail: function fail(t) {
              r({
                success: !1,
                data: void 0,
                msg: t.errMsg
              });
            }
          });
        });
      }, i.defaultOptions = {
        autoProxy: !1,
        autoStart: !0,
        debug: !1,
        usePlugin: !1,
        proxyPage: !1,
        proxyComponent: !1,
        autoTrack: !1,
        trackApp: !0,
        openSdkShareDepth: !1,
        installFrom: "",
        openAutoTrackOpenId: !1,
        openAutoTrackUnionId: !1
      }, i.proxySetNavigation(), i;
    }

    return i(s, t), s.prototype.getCacheManager = function () {
      var t = "" + this.env,
          i = function i(_i) {
        return _i + "_" + t;
      };

      return {
        get: function get(t) {
          var e;

          try {
            e = wx.getStorageSync(i(t));
          } catch (t) {
            return console.error("CacheManager.get error", t), e;
          }

          return e;
        },
        set: function set(t, e) {
          try {
            wx.setStorageSync(i(t), e);
          } catch (t) {
            return console.error("CacheManager.set error", t), !1;
          }

          return !0;
        }
      };
    }, s.prototype.proxyInitialize = function () {
      return Y.options = this.option, this.trackApp(), !0;
    }, s.prototype.trackApp = function () {
      var t = this,
          i = !1;
      wx.onAppShow(function (s) {
        void 0 === s && (s = {});

        var r = s,
            n = r.query,
            o = void 0 === n ? {} : n,
            h = r.path,
            a = r.shareTicket,
            c = t.option.openSdkShareDepth,
            u = t.option.openAutoTrackOpenId,
            p = t.option.openAutoTrackUnionId,
            d = t.option.appid,
            f = t.cacheManager.get(A.SDK) || {},
            l = function (t) {
          void 0 === t && (t = {});
          var i = {};

          if (t.scene) {
            try {
              var s = decodeURIComponent(t.scene);
              (s = s.replace("?", "").trim()).split("&").map(function (t) {
                if (t) {
                  var e = t.split("="),
                      s = e[0],
                      r = e[1];
                  _(s) && (i[s] = void 0 === r || r);
                }
              });
            } catch (t) {
              console.error(t);
            }

            t = _e(_e({}, t), i);
          }

          return t;
        }(o || {}),
            g = l.txsrShareInfoSdk || "{}",
            v = t,
            x = f.USER_INFO,
            m = x.open_id,
            S = x.union_id;

        if (l && "{}" !== JSON.stringify(l)) {
          var y = "?";
          Object.entries(l).forEach(function (t, i) {
            var e = t[0],
                s = t[1];
            y += (0 === i ? "" : "&") + e + "=" + s;
          }), h += y;
        }

        if (t.setChan(_e(_e({}, l), {
          chan_wxapp_scene: s.scene,
          chan_refer_app_id: (s.referrerInfo || {}).appId
        })), l.chan_id && t.setChan({
          chan_id: l.chan_id
        }), !i) {
          if (i = !0, c && "{}" !== g) try {
            t.setUser({
              txsr_from_share_info: JSON.parse(decodeURIComponent(g))
            });
          } catch (t) {}
          t.option.trackApp && t.track("app_launch", {
            is_sdk_auto_track: !0,
            page: h
          });
        }

        if (u && !m || p && !S) try {
          wx.login({
            success: function success(t) {
              var i = t.code;
              wx.request({
                url: "https://zhls.qq.com/wxlogin/getOpenId?appid=" + d + "&js_code=" + i,
                data: {},
                header: {
                  "content-type": "json"
                },
                success: function success(t) {
                  var i = t.data,
                      e = i.openId,
                      s = i.unionId,
                      r = void 0 === s ? "" : s;
                  v.setUser({
                    open_id: e,
                    union_id: r
                  }), c && a && e && v.getOpenGId(a, e);
                }
              });
            }
          });
        } catch (i) {
          t.errorHandle(i);
        }
        c && a && m && t.getOpenGId(a, m), t.option.trackApp && t.track("app_show", {
          is_sdk_auto_track: !0,
          page: h
        });
      }), wx.onAppHide(function () {
        t.option.trackApp && t.track("exit_wxapp", {
          is_sdk_auto_track: !0
        });
      });
    }, s.prototype.getOpenGId = function (t, i) {
      var e = this.option.appid,
          s = this;
      wx.getShareInfo({
        shareTicket: t,
        success: function success(t) {
          var r = t.iv,
              n = t.encryptedData;
          wx.request({
            url: "https://zhls.qq.com/wxlogin/convertData",
            data: {
              appid: e,
              openid: i,
              data: n,
              iv: r
            },
            header: {
              "content-type": "json"
            },
            success: function success(t) {
              var i = (t && t.data).openGId;
              i && s.setChan({
                openGId: i
              });
            }
          });
        },
        fail: function fail(t) {}
      });
    }, s.prototype.errorHandle = function (t) {
      try {
        var i = this.getServerUrl();
        this.request({
          type: "sdk api exec error",
          props: {
            sr_sdk_version: this.version,
            system_info: this.getSystemInfo(),
            framework_info: this.getFrameworkInfo(),
            message: t,
            stack: t
          }
        }, {
          url: i,
          method: "POST"
        });
      } catch (t) {
        console.log("errorHandle error", t);
      }
    }, s.prototype.getSystemInfo = function () {
      try {
        return wx.getSystemInfoSync();
      } catch (t) {
        return {};
      }
    }, s.prototype.getFrameworkInfo = function () {
      var t, i;

      try {
        if (process && process.env && "alipay" && (t = "taro"), this.option.installFrom) {
          var e = String(this.option.installFrom).toLowerCase(),
              s = /^((taro)|(uni[\-]?app)|(chameleon)|(wepy)|(mpvue))(@v?([\S]*))?/g.exec(e);
          s && s[1] && ("taro" === t && s[2] ? i = s[8] : "taro" !== t && (i = s[8], t = s[3] ? "uni-app" : s[4] || s[5] || s[6] || "unknown"));
        }
      } catch (i) {
        t = "unknown";
      }

      return {
        framework: t,
        version: i
      };
    }, s.prototype.getPageInfo = function () {
      var t = D(),
          i = H() || {},
          e = E,
          s = (i.data || {}).title || i.title;

      try {
        void 0 === s && t && !$[t] && ($[t] = !0, console.warn("\u9875\u9762[" + t + "]\u6CA1\u6709\u5B9E\u73B0 title \u5C5E\u6027\uFF0C\u4F1A\u5BFC\u81F4\u90E8\u5206\u673A\u578B\u4E0B\u6536\u96C6\u4E0D\u5230\u9875\u9762\u6807\u9898!")), "string" == typeof s && (e = function e() {
          return s;
        }), "function" == typeof s && (e = s);
      } catch (t) {
        console.error("curPage.data.title \u6267\u884C\u9519\u8BEF", t);
      }

      return {
        page: t,
        page_title: s || e()
      };
    }, s.prototype.isDev = function () {
      return N();
    }, s.create = function () {
      var t;

      try {
        t = new s();
      } catch (i) {
        t = s.prototype, console.error("new sr_sdk failed", i);
      }

      return t;
    }, s;
  }(U).create(),
      tt = Page,
      it = Component;

  return Page = function Page(t) {
    if (Y.option.proxyPage) {
      var i = W(Y.track.bind(Y), Y.setChan.bind(Y), Y.option.autoTrack, Y.option.openSdkShareDepth);
      tt(i(t));
    } else tt(t);
  }, Component = function Component(t) {
    if (Y.option.proxyComponent) {
      var i = Z(Y.track.bind(Y), Y.setChan.bind(Y), Y.option.autoTrack, Y.option.openSdkShareDepth);
      return it(i(t));
    }

    return it(t);
  }, Y;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app.less":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./app.ts */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");






var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createReactApp"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_2__, react_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], config))



/***/ })

},[["./src/app.ts","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map