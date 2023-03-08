! function(n) {
	function t(t) {
		for (var e, a, l = t[0], u = t[1], c = t[2], p = 0, d = []; p < l.length; p++) a = l[p], Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), r[a] = 0;
		for (e in u) Object.prototype.hasOwnProperty.call(u, e) && (n[e] = u[e]);
		for (f && f(t); d.length;) d.shift()();
		return i.push.apply(i, c || []), o()
	}

	function o() {
		for (var n, t = 0; t < i.length; t++) {
			for (var o = i[t], e = !0, l = 1; l < o.length; l++) {
				var u = o[l];
				0 !== r[u] && (e = !1)
			}
			e && (i.splice(t--, 1), n = a(a.s = o[0]))
		}
		return n
	}
	var e = {},
		r = {
			0: 0
		},
		i = [];

	function a(t) {
		if (e[t]) return e[t].exports;
		var o = e[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(o.exports, o, o.exports, a), o.l = !0, o.exports
	}
	a.m = n, a.c = e, a.d = function(n, t, o) {
		a.o(n, t) || Object.defineProperty(n, t, {
			enumerable: !0,
			get: o
		})
	}, a.r = function(n) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(n, "__esModule", {
			value: !0
		})
	}, a.t = function(n, t) {
		if (1 & t && (n = a(n)), 8 & t) return n;
		if (4 & t && "object" == typeof n && n && n.__esModule) return n;
		var o = Object.create(null);
		if (a.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: n
			}), 2 & t && "string" != typeof n)
			for (var e in n) a.d(o, e, function(t) {
				return n[t]
			}.bind(null, e));
		return o
	}, a.n = function(n) {
		var t = n && n.__esModule ? function() {
			return n.default
		} : function() {
			return n
		};
		return a.d(t, "a", t), t
	}, a.o = function(n, t) {
		return Object.prototype.hasOwnProperty.call(n, t)
	}, a.p = "/";
	var l = window.webpackJsonp = window.webpackJsonp || [],
		u = l.push.bind(l);
	l.push = t, l = l.slice();
	for (var c = 0; c < l.length; c++) t(l[c]);
	var f = u;
	i.push([11, 1]), o()
}([, , , , function(n, t, o) {
	"use strict";
	(function(n) {
		var t = o(1),
			e = o.n(t);
		o(2);
		void 0 === n.fn.iziModal && (n.fn.iziModal = e.a);
		var r = n("#profile-auth-modal");
		r.length > 0 && (r.iziModal({
			overlayColor: "rgba(2, 14, 32, 0.9)",
			background: "transparent",
			width: "100%"
		}), n(document).on("click", ".profile-auth-button", (function(n) {
			n.preventDefault(), r.iziModal("open")
		})))
	}).call(this, o(0))
}, , , function(n, t, o) {
	"use strict";
	(function(n) {
		var t = o(1),
			e = o.n(t);
		o(2);
		void 0 === n.fn.iziModal && (n.fn.iziModal = e.a);
		var r = n("#mobile-menu-modal");
		r.length > 0 && (r.iziModal({
			overlayColor: "rgba(2, 14, 32, 0.9)",
			background: "transparent"
		}), n(document).on("click", "#mobile-menu-button", (function(n) {
			n.preventDefault(), r.iziModal("open")
		})))
	}).call(this, o(0))
}, function(n, t, o) {
	"use strict";
	(function(n) {
		var t = o(1),
			e = o.n(t);
		o(2);
		void 0 === n.fn.iziModal && (n.fn.iziModal = e.a);
		var r = n("#payment-modal");
		r.length > 0 && (r.iziModal({
			overlayColor: "rgba(2, 14, 32, 0.9)",
			background: "transparent",
			width: "100%"
		}), n(document).on("click", ".payment-modal-button", (function(n) {
			n.preventDefault(), r.iziModal("open")
		})))
	}).call(this, o(0))
}, function(n, t, o) {
	var e = o(3),
		r = o(10);
	"string" == typeof(r = r.__esModule ? r.default : r) && (r = [
		[n.i, r, ""]
	]);
	var i = {
		insert: "head",
		singleton: !1
	};
	e(r, i);
	n.exports = r.locals || {}
}, function(n, t, o) {}, function(n, t, o) {
	"use strict";
	o.r(t);
	var e = o(0),
		r = o.n(e),
		i = (o(4), o(7), o(8), r()(".how-play__title"));
	if (i.length > 0) {
		var a = i.position().top;
		r()(document).on("click", ".how-to-start", (function(n) {
			console.log("click"), n.preventDefault(), r()("html").animate({
				scrollTop: a
			}, 500)
		}))
	}
	o(9)
}]);