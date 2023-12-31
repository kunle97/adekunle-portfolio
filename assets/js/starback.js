!(function (t, i) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define([], i)
    : "object" == typeof exports
    ? (exports.Starback = i())
    : (t.Starback = i());
})(self, function () {
  return (() => {
    "use strict";
    var t = {
        d: (i, s) => {
          for (var e in s)
            t.o(s, e) &&
              !t.o(i, e) &&
              Object.defineProperty(i, e, { enumerable: !0, get: s[e] });
        },
        o: (t, i) => Object.prototype.hasOwnProperty.call(t, i),
      },
      i = {};
    function s(t, i) {
      return Math.floor(Math.random() * (i - t) + 1) + t;
    }
    function e(t) {
      return t[Math.floor(Math.random() * t.length)];
    }
    t.d(i, { default: () => n });
    const h = class {
        stars = [];
        config = {};
        overflowSize = 10;
        defaultConfig = {
          quantity: 100,
          direction: 100,
          speed: [0.5, 0.8],
          backgroundColor: "#ccc",
          starColor: "white",
          starSize: [0, 3],
        };
        canvas = null;
        ctx = null;
        constructor(t, i) {
          (this.config = i), (this.canvas = t), (this.ctx = t.getContext("2d"));
        }
        draw() {
          for (let t = 0; t < this.stars.length; t++) {
            let i = this.stars[t];
            this.ctx.beginPath(),
              (this.ctx.fillStyle = this.config.starColor),
              this.ctx.save(),
              (this.ctx.globalAlpha = i.opacity),
              this.ctx.arc(i.x, i.y, i.size, 0, 2 * Math.PI),
              this.ctx.fill(),
              this.ctx.restore(),
              this.ctx.closePath();
          }
        }
        update() {
          let t = ((i = this.config.direction), Math.sin(i * (Math.PI / 180)));
          var i;
          let h = (function (t) {
            return Math.cos(t * (Math.PI / 180));
          })(this.config.direction);
          for (let i = 0; i < this.stars.length; i++) {
            let a = this.stars[i];
            if (
              ((a.x += t * a.speed),
              (a.y += h * a.speed),
              a.x > this.canvas.width + this.overflowSize ||
                a.x < 0 - this.overflowSize ||
                a.y > this.canvas.height + this.overflowSize ||
                a.y < 0 - this.overflowSize)
            ) {
              let a, o, n;
              this.stars.splice(i, 1),
                -1 == h || 1 == h
                  ? ((n = 0),
                    (a = s(n, this.canvas.width)),
                    (o = 1 == h ? 0 : this.canvas.height))
                  : -1 == t || 1 == t
                  ? ((n = 1 == t ? 0 : this.canvas.width),
                    (a = n + this.overflowSize * -t),
                    (o = s(0, this.canvas.height)))
                  : t > 0 && h > 0
                  ? ((n = -this.overflowSize),
                    (a = e([n, s(n, this.canvas.width - this.overflowSize)])),
                    (o =
                      a == n
                        ? s(n, this.canvas.height - this.overflowSize)
                        : -this.overflowSize))
                  : t < 0 && h > 0
                  ? ((n = -this.canvas.width + this.overflowSize),
                    (a = e([n, s(n, 0 + this.overflowSize)])),
                    (o =
                      a == n
                        ? s(n, 0 - this.canvas.height + this.overflowSize)
                        : -this.overflowSize))
                  : t < 0 && h < 0
                  ? ((n = this.canvas.width + this.overflowSize),
                    (a = e([n, s(n, 0 + this.overflowSize)])),
                    (o =
                      a == n
                        ? s(n, 0 + this.overflowSize)
                        : this.canvas.height + this.overflowSize))
                  : t > 0 &&
                    h < 0 &&
                    ((n = -this.overflowSize),
                    (a = e([n, s(n, this.canvas.width - this.overflowSize)])),
                    (o =
                      a == n
                        ? s(n, this.canvas.height - this.overflowSize)
                        : this.canvas.height + this.overflowSize));
              let r = { x: a, y: o };
              this.generate(1, r);
            }
          }
        }
        generate(t, i = null) {
          if (i) {
            let { x: t, y: s } = i,
              e = {
                x: t,
                y: s,
                size: this.randomSize(),
                opacity: this.randomOpacity(),
                speed: this.randomSpeed(),
              };
            return this.stars.push(e);
          }
          for (let i = 0; i < t; i++) {
            let t = s(0, this.canvas.width),
              i = s(0, this.canvas.height);
            this.stars.push({
              x: t,
              y: i,
              size: this.randomSize(),
              opacity: this.randomOpacity(),
              speed: this.randomSpeed(),
            });
          }
        }
        randomSize() {
          return "object" == typeof this.config.starSize
            ? s(this.config.starSize[0], this.config.starSize[1])
            : this.config.starSize;
        }
        randomOpacity() {
          let t = this.config.randomOpacity;
          return "boolean" == typeof t
            ? t
              ? (t ? Math.random() : 1).toFixed(2)
              : 1
            : (Math.random() * (t[1] - t[0]) + t[0]).toFixed(2);
        }
        randomSpeed() {
          return "object" == typeof this.config.speed
            ? Math.random() * (this.config.speed[1] - this.config.speed[0]) +
                this.config.speed[0]
            : this.config.speed;
        }
      },
      a = class {
        stars = [];
        config = null;
        direction = 225;
        canvas = null;
        ctx = null;
        defaultConfig = {
          slope: { x: 1, y: 1 },
          frequency: 10,
          speed: 2,
          starSize: 100,
          starColor: ["#fb00ff", "#00dde0"],
          spread: 1,
          directionY: -1,
          directionX: 1,
          distanceX: 0.1,
          quantity: 200,
        };
        constructor(t, i) {
          (this.config = i),
            (this.direction = this.config.direction),
            (this.canvas = t),
            (this.ctx = t.getContext("2d"));
        }
        draw() {
          (this.ctx.strokeStyle = "white"),
            this.stars.forEach((t) => {
              let i;
              "object" == typeof this.config.starColor
                ? ((i = this.ctx.createLinearGradient(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  )),
                  this.config.starColor.forEach((t, s) =>
                    i.addColorStop(s / this.config.starColor.length, t)
                  ))
                : (i = this.config.starColor),
                this.ctx.save(),
                (this.ctx.strokeStyle = i),
                this.ctx.beginPath(),
                this.ctx.moveTo(t.start.x, t.start.y),
                this.ctx.setLineDash([
                  this.config.starSize,
                  t.startPoint * this.config.frequency,
                ]),
                (this.ctx.lineDashOffset =
                  this.config.directionY * (t.progress + t.length)),
                this.ctx.quadraticCurveTo(
                  t.curve.x,
                  t.curve.y,
                  t.end.x,
                  t.end.y
                ),
                this.ctx.stroke(),
                this.ctx.closePath(),
                this.ctx.restore();
            });
        }
        update() {
          this.stars.map((t, i) => {
            t.progress += t.speed;
          });
        }
        generate() {
          for (let t = 0; t < this.config.quantity; t++) {
            const t = s(-20, this.canvas.width),
              i = t <= 0 ? s(0, this.canvas.height) : 0,
              h = 100,
              a =
                t +
                (this.canvas.width * this.config.distanceX +
                  this.config.spread * t * this.config.directionX),
              o = a - t,
              n = this.canvas.height;
            this.stars.push({
              x: t,
              y: i,
              length: n,
              height: h,
              progress: 0,
              speed: this.config.speed + Math.random() / 5,
              lineDash: s(50, 100),
              filter: { opacity: e([s(20, 100) + "%", !1]) },
              start: { x: t, y: i },
              curve: {
                x: t + o * this.config.slope.x,
                y: i + this.canvas.height * this.config.slope.y,
              },
              startPoint: s(10, 100),
              end: { x: a, y: this.canvas.height },
            });
          }
          return this.stars;
        }
      },
      o = {
        width: 800,
        height: 600,
        randomOpacity: !0,
        showFps: !1,
        type: "dot",
      },
      n = class {
        static DefaultConfig = o;
        config = {};
        stars = null;
        starTypes = { dot: h, line: a };
        constructor(t, i = {}) {
          (this.canvas =
            t instanceof HTMLElement ? t : document.querySelector(t)),
            (this.ctx = this.canvas.getContext("2d")),
            this.mergeConfig(i),
            (this.repeat = 0),
            (this.frontCallbacks = []),
            (this.behindCallbacks = []),
            (this.fps = 0),
            (this.lastCalledTime = 0),
            (this.lastGenerated = 0),
            this.init();
        }
        mergeConfig(t) {
          let i = Object.assign(o, t);
          this.config = i;
        }
        init() {
          this.canvas.setAttribute("width", this.config.width),
            this.canvas.setAttribute("height", this.config.height),
            (this.stars = new this.starTypes[this.config.type](
              canvas,
              this.config
            )),
            (this.config = Object.assign(
              this.stars.defaultConfig,
              this.config
            )),
            (this.stars.config = this.config),
            this.generateStar(),
            requestAnimationFrame((t) => this.render(t));
        }
        setBackground() {
          let t;
          "string" == typeof this.config.backgroundColor
            ? (t = this.config.backgroundColor)
            : "object" == typeof this.config.backgroundColor &&
              ((t = this.ctx.createLinearGradient(
                this.canvas.width / 2,
                0,
                this.canvas.width / 2,
                this.canvas.height
              )),
              this.config.backgroundColor.forEach((i, s) => {
                t.addColorStop(s / this.config.backgroundColor.length, i);
              })),
            (this.ctx.fillStyle = t),
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        draw() {
          this.behindCallbacks.forEach((t) => t(this.ctx)),
            this.stars.draw(),
            this.frontCallbacks.forEach((t) => t(this.ctx)),
            this.config.showFps && this.drawFps();
        }
        update() {
          this.stars.update();
        }
        addToFront(t) {
          this.frontCallbacks.push(t);
        }
        addToBehind(t) {
          this.behindCallbacks.push(t);
        }
        generateStar() {
          this.stars.generate(this.config.quantity);
        }
        drawFps() {
          (this.ctx.fillStyle = "white"),
            console.log(this.fps),
            this.ctx.fillText(`${this.fps} fps`, 10, 10);
        }
        render(t) {
          this.lastCalledTime || (this.lastCalledTime = t);
          let i = t - this.lastCalledTime;
          (this.fps = Math.round(1e3 / i)),
            (this.lastCalledTime = t),
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.setBackground(),
            this.draw(),
            this.update(),
            requestAnimationFrame((t) => this.render(t));
        }
      };
    return i.default;
  })();
});
