import * as e from "shiki";
import * as r from "@/showdown";
var t,
  o,
  a,
  n,
  u = {
    457: (e, r, t) => {
      t.a(
        e,
        async (e, o) => {
          try {
            t.d(r, { A: () => c });
            var a = t(903),
              n = t(908);
            function i(e) {
              var r = { nbsp: " ", amp: "&", quot: '"', lt: "<", gt: ">" };
              return e
                .replace(/&(nbsp|amp|quot|lt|gt);/g, function (e, t) {
                  return r[t];
                })
                .replace(/&#(\d+);/gi, function (e, r) {
                  var t = parseInt(r, 10);
                  return String.fromCharCode(t);
                });
            }
            var u = await n.createHighlighter({
              langs: Object.keys(n.bundledLanguages),
              themes: Object.keys(n.bundledThemes),
            });
            function l(e, r, t) {
              var o, a, n, i, l;
              if (t && t.darkMode) {
                var d =
                    null !==
                      (a =
                        null === (o = t.theme) || void 0 === o
                          ? void 0
                          : o.dark) && void 0 !== a
                      ? a
                      : "github-dark",
                  c =
                    null !==
                      (i =
                        null === (n = t.theme) || void 0 === n
                          ? void 0
                          : n.light) && void 0 !== i
                      ? i
                      : "github-light";
                return u.codeToHtml(e, {
                  lang: r,
                  themes: { light: c, dark: d },
                });
              }
              var p =
                null !== (l = null == t ? void 0 : t.theme) && void 0 !== l
                  ? l
                  : "github-light";
              return u.codeToHtml(e, { lang: r, theme: p });
            }
            function d(e) {
              return [
                {
                  type: "output",
                  filter: function (r) {
                    return a.default.helper.replaceRecursiveRegExp(
                      r,
                      function (r, t, o) {
                        var a,
                          n = i(t),
                          u =
                            (null === (a = o.match(/class=\"([^ \"]+)/)) ||
                            void 0 === a
                              ? void 0
                              : a[1]) || "";
                        return u && "" !== u
                          ? l(n, u, null == e ? void 0 : e.themes)
                          : r;
                      },
                      "<pre><code\\b[^>]*>",
                      "</code></pre>",
                      "g"
                    );
                  },
                },
              ];
            }
            a.default.extension("showdown-shiki", d);
            const c = d;
            o();
          } catch (p) {
            o(p);
          }
        },
        1
      );
    },
    908: (r, t, o) => {
      var a, n;
      r.exports =
        ((a = {
          bundledLanguages: () => e.bundledLanguages,
          bundledThemes: () => e.bundledThemes,
          createHighlighter: () => e.createHighlighter,
        }),
        (n = {}),
        o.d(n, a),
        n);
    },
    903: (e, t, o) => {
      var a, n;
      e.exports = ((a = { default: () => r.default }), (n = {}), o.d(n, a), n);
    },
  },
  i = {};
function l(e) {
  var r = i[e];
  if (void 0 !== r) return r.exports;
  var t = (i[e] = { exports: {} });
  return u[e](t, t.exports, l), t.exports;
}
(t =
  "function" == typeof Symbol
    ? Symbol("webpack queues")
    : "__webpack_queues__"),
  (o =
    "function" == typeof Symbol
      ? Symbol("webpack exports")
      : "__webpack_exports__"),
  (a =
    "function" == typeof Symbol
      ? Symbol("webpack error")
      : "__webpack_error__"),
  (n = (e) => {
    e &&
      e.d < 1 &&
      ((e.d = 1),
      e.forEach((e) => e.r--),
      e.forEach((e) => (e.r-- ? e.r++ : e())));
  }),
  (l.a = (e, r, u) => {
    var i;
    u && ((i = []).d = -1);
    var l,
      d,
      c,
      p = new Set(),
      s = e.exports,
      h = new Promise((e, r) => {
        (c = r), (d = e);
      });
    (h[o] = s),
      (h[t] = (e) => (i && e(i), p.forEach(e), h.catch((e) => {}))),
      (e.exports = h),
      r(
        (e) => {
          var r;
          l = ((e) =>
            e.map((e) => {
              if (null !== e && "object" == typeof e) {
                if (e[t]) return e;
                if (e.then) {
                  var r = [];
                  (r.d = 0),
                    e.then(
                      (e) => {
                        (u[o] = e), n(r);
                      },
                      (e) => {
                        (u[a] = e), n(r);
                      }
                    );
                  var u = {};
                  return (u[t] = (e) => e(r)), u;
                }
              }
              var i = {};
              return (i[t] = (e) => {}), (i[o] = e), i;
            }))(e);
          var u = () =>
              l.map((e) => {
                if (e[a]) throw e[a];
                return e[o];
              }),
            d = new Promise((e) => {
              (r = () => e(u)).r = 0;
              var o = (e) =>
                e !== i &&
                !p.has(e) &&
                (p.add(e), e && !e.d && (r.r++, e.push(r)));
              l.map((e) => e[t](o));
            });
          return r.r ? d : u();
        },
        (e) => (e ? c((h[a] = e)) : d(s), n(i))
      ),
      i && i.d < 0 && (i.d = 0);
  }),
  (l.d = (e, r) => {
    for (var t in r)
      l.o(r, t) &&
        !l.o(e, t) &&
        Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
  }),
  (l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r));
var d = l(457),
  c = (d = await d).A;
export { c as default };
