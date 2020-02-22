// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//模块化  导出
var string = "\n@keyframes respiration {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.03);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  .wrap {\n    padding: 50px 200px 0;\n    animation: respiration 10s ease-in-out infinite;\n    display: inline-block;\n  }\n  .wrap .face {\n    width: 300px;\n    height: 280px;\n    background: #f1b698;\n    position: relative;\n    border-radius: 120px 135px 0 80px;\n  }\n  .wrap .face .cheek {\n    width: 140px;\n    height: 180px;\n    background: #f1b698;\n    position: absolute;\n    bottom: 1px;\n    right: -87px;\n    border-radius: 0 50% 50% 45%;\n    transform: skew(-2deg, -6deg);\n  }\n  .wrap .face .hair {\n    position: absolute;\n    border-radius: 50% 50% 0 0;\n    left: 72px;\n    top: -20px;\n    width: 150px;\n    height: 50px;\n    background: #090909;\n    z-index: -1;\n  }\n  .wrap .face .hair:before {\n    content: '';\n    width: 200px;\n    height: 200px;\n    background: #090909;\n    position: absolute;\n    top: 20PX;\n    left: -100px;\n    display: inline-block;\n    border-radius: 50%;\n    transform: skew(-20deg);\n  }\n  .wrap .face .l_eyeblow {\n    position: absolute;\n    top: -18px;\n    width: 110px;\n    height: 60px;\n    left: 10px;\n  }\n  .wrap .face .l_eyeblow:before {\n    content: '';\n    width: 95px;\n    height: 38px;\n    background: #090909;\n    transform: rotate(-40deg);\n    display: inline-block;\n    border-radius: 50px;\n    position: absolute;\n    top: 10px;\n    left: -5px;\n  }\n  .wrap .face .l_eyeblow:after {\n    content: '';\n    width: 85px;\n    height: 38px;\n    background: #090909;\n    transform: rotate(45deg);\n    display: inline-block;\n    border-radius: 80px 50px 50px 0;\n    position: absolute;\n    right: -18px;\n    top: 3px;\n  }\n  .wrap .face .l_eyelids {\n    position: absolute;\n    width: 150px;\n    height: 50px;\n    overflow: hidden;\n    left: 3px;\n    top: 45px;\n  }\n  .wrap .face .l_eyelids:after {\n    content: '';\n    height: 400px;\n    border-radius: 50%;\n    width: 150px;\n    border-top: solid 3px #090909;\n    border-right: solid 3px #f1b698;\n    border-left: solid 3px #f1b698;\n    display: block;\n    transform: skew(-8deg) rotate(-10deg);\n  }\n  .wrap .face .l_eye {\n    position: absolute;\n    top: 80px;\n    left: 25px;\n    width: 110px;\n    height: 100px;\n    background: #090909;\n    border-radius: 50%;\n    transform: rotate(-5deg);\n  }\n  .wrap .face .l_eye:before {\n    content: '';\n    width: 48px;\n    height: 46px;\n    background: #fff;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    top: 27px;\n    left: 32px;\n  }\n  .wrap .face .r_eyeblow {\n    position: absolute;\n    top: -20px;\n    width: 110px;\n    height: 60px;\n    right: 30px;\n  }\n  .wrap .face .r_eyeblow:before {\n    content: '';\n    width: 75px;\n    height: 38px;\n    background: #090909;\n    transform: rotate(-38deg);\n    display: inline-block;\n    border-radius: 50px;\n    position: absolute;\n    top: 10px;\n    left: 5px;\n  }\n  .wrap .face .r_eyeblow:after {\n    content: '';\n    width: 85px;\n    height: 38px;\n    background: #090909;\n    transform: rotate(48deg);\n    display: inline-block;\n    border-radius: 80px 50px 50px 0;\n    position: absolute;\n    right: -17px;\n    top: 7px;\n  }\n  .wrap .face .r_eyelids {\n    position: absolute;\n    width: 150px;\n    height: 50px;\n    overflow: hidden;\n    right: -11px;\n    top: 42px;\n  }\n  .wrap .face .r_eyelids:after {\n    content: '';\n    height: 400px;\n    border-radius: 50%;\n    width: 150px;\n    border-top: solid 3px #090909;\n    border-right: solid 3px #f1b698;\n    border-left: solid 3px #f1b698;\n    display: block;\n    transform: skew(7deg) rotate(2deg);\n  }\n  .wrap .face .r_eye {\n    position: absolute;\n    top: 78px;\n    right: 28px;\n    width: 100px;\n    height: 95px;\n    background: #090909;\n    border-radius: 50%;\n    transform: rotate(5deg);\n  }\n  .wrap .face .r_eye:before {\n    content: '';\n    width: 42px;\n    height: 42px;\n    background: #fff;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    top: 27px;\n    left: 28px;\n  }\n  .wrap .face .ear {\n    width: 80px;\n    height: 100px;\n    background: #f1b698;\n    position: absolute;\n    left: -50px;\n    bottom: 50px;\n    border-radius: 180px 0 200px 200px;\n    z-index: -1;\n    transform: skew(-3deg) rotate(5deg);\n  }\n  .wrap .face .mouth {\n    width: 50px;\n    height: 70px;\n    background: #7d3a43;\n    position: absolute;\n    bottom: -15px;\n    right: 24px;\n    border-radius: 50%;\n    transform: rotate(-30deg);\n  }\n  .wrap .body .shirt {\n    position: absolute;\n    width: 320px;\n    height: 240px;\n    background: #ea4043;\n    z-index: -2;\n    top: 320px;\n    left: 210px;\n    border-radius: 60px 0 0 0;\n  }\n  .wrap .body .arm {\n    position: absolute;\n  }\n  .wrap .body .arm .l_arm {\n    width: 70px;\n    height: 210px;\n    background: #ea4043;\n    position: absolute;\n    left: -15px;\n    top: -40px;\n    border-radius: 60px 0 0 0;\n    transform: rotate(20deg);\n    z-index: -1;\n  }\n  .wrap .body .arm .r_arm {\n    width: 50px;\n    height: 190px;\n    background: #ea4043;\n    position: absolute;\n    left: 293px;\n    top: -15px;\n    transform: rotate(-5deg);\n    border-radius: 0 20px 0 0;\n    z-index: -1;\n  }\n  .wrap .body .hand .l_hand {\n    width: 55px;\n    height: 60px;\n    background: #f1b698;\n    border-radius: 50%;\n    z-index: -2;\n    position: absolute;\n    top: 495px;\n    left: 160px;\n  }\n  .wrap .body .hand .r_hand {\n    width: 50px;\n    height: 55px;\n    background: #f1b698;\n    border-radius: 50%;\n    z-index: -3;\n    position: absolute;\n    top: 500px;\n    left: 510px;\n  }\n  \n\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化 导入
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var n = 1;
var time = 30;

var run = function run() {
  n += 1; //n大于字符串长度时，停止计时器

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  time = 80;
  pause();
  id = play();
};

btnNormal.onclick = function () {
  time = 30;
  pause();
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.0b7597be.js.map