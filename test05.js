const data = "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";

const i = 16;


function encrypt_str(t, e, r) {
    return from_a(null, t, e, r)
}


function from_a(t, e, r, n) {
    return f(t, e, r)
}

function f(t, e, r) {
    var n = 0 | y(e, r);
    t = o_1(t, n);
    var a = write(t, e, r);
    return a !== n && (t = t.slice(0, a)),
        t
}

function E() {

}
function write(k, t, e, r, n) {
    if (void 0 === e)
        n = "utf8",
            r = k.length,
            e = 0;
    else if (void 0 === r && "string" == typeof e)
        n = e,
            r = k.length,
            e = 0;
    else {
        if (!isFinite(e))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0,
            isFinite(r) ? (r |= 0,
            void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
    }
    var o = k.length - e;
    if ((void 0 === r || r > o) && (r = o),
    t.length > 0 && (r < 0 || e < 0) || e > k.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var i = !1; ; )
        switch (n) {
            case "hex":
                return _(k, t, e, r);
            case "utf8":
            case "utf-8":
                return E(k, t, e, r);
            case "ascii":
                return A(k, t, e, r);
            case "latin1":
            case "binary":
                return C(k, t, e, r);
            case "base64":
                return S(k, t, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return x(k, t, e, r);
            default:
                if (i)
                    throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(),
                    i = !0
        }
}


function S(t, e, r, n) {
    return X(V(e), t, r, n)
}

function X(t, e, r, n) {

    // console.log(t)
    for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
        e[o + r] = t[o];
    // console.log(o)
    return o
}
function o_1(t, e) {
    return (t = new Uint8Array(e),
        t.__proto__ = Uint8Array.prototype),
        t
}

function y(t, e) {
    "string" != typeof t && (t = "" + t);
    var r = t.length;
    if (0 === r)
        return 0;

    for (var n = !1; ; )
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return Y(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return V(t).length;
            default:
                if (n)
                    return Y(t).length;
                e = ("" + e).toLowerCase(),
                    n = !0
        }
}

function V(t) {
    return toByteArray(q(t))
}

function q(t) {
    if (t = z(t).replace(/[^+\/0-9A-Za-z-_]/ , ""),
    t.length < 2)
        return "";
    for (; t.length % 4 != 0; )
        t += "=";
    return t
}

function z(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
}


function toByteArray(t) {
    var f = {
        43: 62,
        45: 62,
        47: 63,
        48: 52,
        49: 53,
        50: 54,
        51: 55,
        52: 56,
        53: 57,
        54: 58,
        55: 59,
        56: 60,
        57: 61,
        65: 0,
        66: 1,
        67: 2,
        68: 3,
        69: 4,
        70: 5,
        71: 6,
        72: 7,
        73: 8,
        74: 9,
        75: 10,
        76: 11,
        77: 12,
        78: 13,
        79: 14,
        80: 15,
        81: 16,
        82: 17,
        83: 18,
        84: 19,
        85: 20,
        86: 21,
        87: 22,
        88: 23,
        89: 24,
        90: 25,
        95: 63,
        97: 26,
        98: 27,
        99: 28,
        100: 29,
        101: 30,
        102: 31,
        103: 32,
        104: 33,
        105: 34,
        106: 35,
        107: 36,
        108: 37,
        109: 38,
        110: 39,
        111: 40,
        112: 41,
        113: 42,
        114: 43,
        115: 44,
        116: 45,
        117: 46,
        118: 47,
        119: 48,
        120: 49,
        121: 50,
        122: 51,
    };

    var e, r, o, i, a, s, u = t.length;
    a = n_mod_4(t),
        s = new Uint8Array(3 * u / 4 - a),
        o = a > 0 ? u - 4 : u;
    var c = 0;
    for (e = 0,
             r = 0; e < o; e += 4,
             r += 3)
        i = f[t.charCodeAt(e)] << 18 | f[t.charCodeAt(e + 1)] << 12 | f[t.charCodeAt(e + 2)] << 6 | f[t.charCodeAt(e + 3)],
            s[c++] = i >> 16 & 255,
            s[c++] = i >> 8 & 255,
            s[c++] = 255 & i;
    return 2 === a ? (i = f[t.charCodeAt(e)] << 2 | f[t.charCodeAt(e + 1)] >> 4,
        s[c++] = 255 & i) : 1 === a && (i = f[t.charCodeAt(e)] << 10 | f[t.charCodeAt(e + 1)] << 4 | f[t.charCodeAt(e + 2)] >> 2,
        s[c++] = i >> 8 & 255,
        s[c++] = 255 & i),
        s
}

function n_mod_4(t) {
    var e = t.length;
    if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");


    return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
}



function slice(k, t, e) {
    var r = k.length;
    t = ~~t,
        e = void 0 === e ? r : ~~e,
        t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
        e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
    e < t && (e = t);
    var n;
    if (true)
        n = k.subarray(t, e),
            n.__proto__ = k.prototype;
    else {
        var o = e - t;
        n = new i(o,void 0);
        for (var a = 0; a < o; ++a)
            n[a] = this[a + t]
    }
    return n

}

function concat(t, e) {
    if (0 === t.length)
        return i.alloc(0);

    var r;
    if (void 0 === e)
        for (e = 0,
                 r = 0; r < t.length; ++r)
            e += t[r].length;
    var n = allocUnsafe(e)
        , o = 0;

    //  console.log(n)
    for (r = 0; r < t.length; ++r) {
        var a = t[r];
        // if (!i.isBuffer(a))
        //     throw new TypeError('"list" argument must be an Array of Buffers');
        copy(a, n, o),
            o += a.length
    }

    //console.log(n);
    return n
}


function copy(k, t, e, r, n) {
    if (r || (r = 0),
    n || 0 === n || (n = k.length),
    e >= t.length && (e = t.length),
    e || (e = 0),
    n > 0 && n < r && (n = r),
    n === r)
        return 0;
    if (0 === t.length || 0 === this.length)
        return 0;
    if (e < 0)
        throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length)
        throw new RangeError("sourceStart out of bounds");
    if (n < 0)
        throw new RangeError("sourceEnd out of bounds");
    n > k.length && (n = this.length),
    t.length - e < n - r && (n = t.length - e + r);
    var o, a = n - r;
    if (k === t && r < e && e < n)
        for (o = a - 1; o >= 0; --o)
            t[o + e] = this[o + r];
    else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
        for (o = 0; o < a; ++o)
            t[o + e] = k[o + r];
    else
        Uint8Array.prototype.set.call(t, k.subarray(r, r + a), e);
    //  console.log(a);
    return a

}
function allocUnsafe(t) {
    return c(null, t)
}

function c(t, e) {
    if (undefined,
        t = o_1(t, e < 0 ? 0 : 0 | e),
        false)
        for (var r = 0; r < e; ++r)
            t[r] = 0;
    return t
}


function main(r){
    var a = encrypt_str(r, "base64")
        , s = Math.max(Math.floor((a.length - 2 * i) / 3), 0)
        , u = slice(a, s, s + i);
    // console.log(u);

    a = concat([slice(a, 0, s), slice(a, s + i)]);
    //  console.info(a);
    let cc = concat([u, encrypt_str("")]);
    cc = c_e(cc);


    var ll = {};
    ll[cc] = a;
    return res(ll);

    console.log(res(ll));
}



function res(t) {
    var n = Object.keys(t)[0];

    // console.info(crypto.privateDecrypt(t[n], n));
    // var r = At.crypto.decrypt(t[n], n);

    let r = decrypt_r(t[n], n);

    //console.info(r instanceof Uint8Array);
    // console.info(r);
    // slice()
    return decrypt_t(r);
    // return e(r)
}

function decrypt_t(t) {

    //测试
    //console.log(t.length);
    let ttt = It(t);

    //console.log(ttt);
    return ee(ttt)
}

function ee(t) {
    var rrr = {
        type: "INIT",
        payload: Ot(t)
    };
    return rrr
}


function r_r_r(e) {
    return null !== e && "object" === (void 0 === e ? "undefined" : o(e)) && e && "function" == typeof e.then
}
var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
;

function w_f(e, t) {

    var ccc = e.assign({}, e, {
        results: t.payload
    });

    return void 0 === e && (e = {
        results: {}
    }),
    "INIT" === t.type && (e = kt({}, e, {
        results: t.payload
    })),
        e
}


function a_e(e) {
    // if (!Y(e))
    //     throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
    // if (void 0 === e.type)
    //     throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    // if (m)
    //     throw new Error("Reducers may not dispatch actions.");
    try {
        m = !0,
            p = w_f(p, e)
    } finally {
        m = !1
    }
    for (var t = h = d, n = 0; n < t.length; n++)
        (0,
            t[n])();
    return e
}


function eee(r) {
    if (!r.payload)
        return e(r);
    if (!(0,
        r_r_r)(r.payload) && !(0,
        r_r_r)(r.payload.promise))
        return a_e(r);
    var s = r.type
        , c = r.payload
        , l = r.meta
        , f = a(t, 3)
        , p = f[0]
        , h = f[1]
        , d = f[2]
        , m = function(e, t) {
        return i({
            type: s + "_" + (t ? d : h)
        }, null === e || void 0 === e ? {} : {
            payload: e
        }, void 0 !== l ? {
            meta: l
        } : {}, t ? {
            error: !0
        } : {})
    }
        , y = void 0
        , v = void 0;
    (0,
        r_r_r)(r.payload) || "object" !== o(r.payload) ? (y = c,
        v = void 0) : (y = c.promise,
        v = c.data),
        e(i({
            type: s + "_" + p
        }, void 0 !== v ? {
            payload: v
        } : {}, void 0 !== l ? {
            meta: l
        } : {}));
    var g = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
            value: e,
            action: m(e, !1)
        }
    }
        , b = function(e) {
        var t = m(e, !0);
        n(t)
    }
        , S = function(e) {
        n(e.action)
    }
        , w = y.then(g);
    return w.then(S, b).then(function() {
        return w
    }, function() {
        return w
    })
}


var pp = {};
pp.end = 7;
pp.start = 2;

var iii = {

    "$UID": "j",
    "$defaultRootUID": 4,
    "$keys": "z",
    "$vals": "k",
    "crypto":{
        "decrypt": function n(t, e) {
            return r_decrypt(t, e)
        },
        "encrypt": function r(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hjasbdn2ih823rgwudsde7e2dhsdhas";
            "string" == typeof r && (r = [].map.call(r, function(t) {
                return t.charCodeAt(0)
            }));
            for (var n, o = [], i = 0, a = new t(e.length), s = 0; s < 256; s++)
                o[s] = s;
            for (s = 0; s < 256; s++)
                i = (i + o[s] + r[s % r.length]) % 256,
                    n = o[s],
                    o[s] = o[i],
                    o[i] = n;
            s = 0,
                i = 0;
            for (var u = 0; u < e.length; u++)
                s = (s + 1) % 256,
                    i = (i + o[s]) % 256,
                    n = o[s],
                    o[s] = o[i],
                    o[i] = n,
                    a[u] = e[u] ^ o[(o[s] + o[i]) % 256];
            return a
        }
    },
    "getRealUID": function(t) {
        if (t >= pp.start) {
            var e = pp.end - pp.start;
            if (t < pp.end)
                return t + e;
            if (t < pp.end + e)
                return t - e
        }
        return t
    },
    "getType": function o(t) {
        return Object.prototype.toString.call(t).slice(8, -1)
    }
};


function Ot(t) {
    function n(e) {
        if (1 === Object.keys(e).length && void 0 !== e[iii.$UID])
            return o(e[iii.$UID]);
        if (iii.$vals in e) {
            var t = e[iii.$keys]
                , n = e[iii.$vals];
            return t ? t.reduce(function(e, t, i) {
                return e[o(t)] = r(n[i]),
                    e
            }, {}) : n.map(function(e) {
                return o(e)
            })
        }
        return Object.keys(e).reduce(function(t, n) {
            var o = e[n];
            return t[n] = r(o),
                t
        }, {})
    }
    function r(t) {
        return "Object" === (0,
            iii.getType)(t) ? n(t) : "Array" === (0,
            iii.getType)(t) ? t.map(function(e) {
            return r(e)
        }) : t instanceof e_update ? (0 === t[t.length - 1] && (t = t.slice(0, t.length - 1)),
            t.toString()) : t
    }
    function o(e) {
        return r(t[(0,
            iii.getRealUID)(e)])
    }
    return o(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0,
        iii.getRealUID)(iii.$defaultRootUID))
}


//-------------------------------------------Uint8Array tool begin-------------------------------
readUInt8 = function(k, t, e) {
    return e || undefined,
        k[t]
};

readUInt32BE = function(kk, t, e) {
    return e || undefined,
    16777216 * kk[t] + (this[t + 1] << 16 | kk[t + 2] << 8 | kk[t + 3])
};


function cc(t) {
    for (var e = t.length, r = 0; r < e; r += 2) {
        var n = t[r];
        t[r] = t[r + 1],
            t[r + 1] = n
    }
    return t
}

// -------------------------------tostring--------------------------------
function  tostring_16(tt) {
    var t = 0 | this.length;
    return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : g.apply(this, arguments)
}

function g(t, e, r) {
    var n = !1;
    if ((void 0 === e || e < 0) && (e = 0),
    e > this.length)
        return "";
    if ((void 0 === r || r > this.length) && (r = this.length),
    r <= 0)
        return "";
    if (r >>>= 0,
        e >>>= 0,
    r <= e)
        return "";
    for (t || (t = "utf8"); ; )
        switch (t) {
            case "hex":
                return N(this, e, r);
            case "utf8":
            case "utf-8":
                return T(this, e, r);
            case "ascii":
                return k(this, e, r);
            case "latin1":
            case "binary":
                return R(this, e, r);
            case "base64":
                return O(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return j(this, e, r);
            default:
                if (n)
                    throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(),
                    n = !0
        }
}


function j(t, e, r) {
    for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
        o += String.fromCharCode(n[i] + 256 * n[i + 1]);
    return o
}


function T(t, e, r) {
    r = Math.min(t.length, r);
    for (var n = [], o = e; o < r; ) {
        var i = t[o]
            , a = null
            , s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        if (o + s <= r) {
            var u, c, f, l;
            switch (s) {
                case 1:
                    i < 128 && (a = i);
                    break;
                case 2:
                    u = t[o + 1],
                    128 == (192 & u) && (l = (31 & i) << 6 | 63 & u) > 127 && (a = l);
                    break;
                case 3:
                    u = t[o + 1],
                        c = t[o + 2],
                    128 == (192 & u) && 128 == (192 & c) && (l = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (a = l);
                    break;
                case 4:
                    u = t[o + 1],
                        c = t[o + 2],
                        f = t[o + 3],
                    128 == (192 & u) && 128 == (192 & c) && 128 == (192 & f) && (l = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & f) > 65535 && l < 1114112 && (a = l)
            }
        }
        null === a ? (a = 65533,
            s = 1) : a > 65535 && (a -= 65536,
            n.push(a >>> 10 & 1023 | 55296),
            a = 56320 | 1023 & a),
            n.push(a),
            o += s
    }
    return P(n)
}
var Q = 4096;

function P(t) {
    var e = t.length;
    if (e <= Q)
        return String.fromCharCode.apply(String, t);
    for (var r = "", n = 0; n < e; )
        r += String.fromCharCode.apply(String, t.slice(n, n += Q));
    return r
}


function a(t, e, r) {
    return e = e || 0,
        r = r || t.length - e,
        readIntBE(t, e, r)
}


readIntBE = function(kk, t, e, r) {
    t |= 0,
        e |= 0,
    r || undefined;
    for (var n = e, o = 1, i = kk[t + --n]; n > 0 && (o *= 256); )
        i += kk[t + --n] * o;
    return o *= 128,
    i >= o && (i -= Math.pow(2, 8 * e)),
        i
};


readDoubleBE = function(kk, t, e) {
    return e || undefined,
        K.read(kk, t, !1, 52, 8)
};


var K = {};
K.read = function(t, e, r, n, o) {
    var i, a, s = 8 * o - n - 1, u = (1 << s) - 1, c = u >> 1, f = -7, l = r ? o - 1 : 0, h = r ? -1 : 1, p = t[e + l];
    for (l += h,
             i = p & (1 << -f) - 1,
             p >>= -f,
             f += s; f > 0; i = 256 * i + t[e + l],
             l += h,
             f -= 8)
        ;
    for (a = i & (1 << -f) - 1,
             i >>= -f,
             f += n; f > 0; a = 256 * a + t[e + l],
             l += h,
             f -= 8)
        ;
    if (0 === i)
        i = 1 - c;
    else {
        if (i === u)
            return a ? NaN : 1 / 0 * (p ? -1 : 1);
        a += Math.pow(2, n),
            i -= c
    }
    return (p ? -1 : 1) * a * Math.pow(2, i - n)
};

K.write = function(t, e, r, n, o, i) {
    var a, s, u, c = 8 * i - o - 1, f = (1 << c) - 1, l = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, d = n ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e),
             isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
                 a = f) : (a = Math.floor(Math.log(e) / Math.LN2),
             e * (u = Math.pow(2, -a)) < 1 && (a--,
                 u *= 2),
                 e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l),
             e * u >= 2 && (a++,
                 u /= 2),
                 a + l >= f ? (s = 0,
                     a = f) : a + l >= 1 ? (s = (e * u - 1) * Math.pow(2, o),
                     a += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, o),
                     a = 0)); o >= 8; t[r + p] = 255 & s,
             p += d,
             s /= 256,
             o -= 8)
        ;
    for (a = a << o | s,
             c += o; c > 0; t[r + p] = 255 & a,
             p += d,
             a /= 256,
             c -= 8)
        ;
    t[r + p - d] |= 128 * m
};
//--------------------------------tostring  end --------------------------------------

//-------------------------------------------Uint8Array tool end ---------------------
function It(t) {

    var e = {};
    e.maxObjectSize = 1e8, e.maxObjectCount = 32768;
    function r(e) {
        var r = x[e]
            , n = t[r]
            , o = (240 & n) >> 4
            , i = 15 & n
            , a = {
            offset: r,
            type: n,
            objType: o,
            objInfo: i,
            tableOffset: e
        };
        switch (o) {
            case 0:
                return f(a);
            case 1:
                return h(a);
            case 8:
                return p(a);
            case 2:
                return d(a);
            case 3:
                return m(a);
            case 6:
                return y(a);
            case 4:
                return g(a);
            case 5:
                return g(a, !0);
            case 10:
                return v(a);
            case 13:
                return b(a);
            default:
                throw new Error(2,o.toString(16))
        }
    }
    function f(t) {
        var e = t.objInfo
            , r = t.objType;
        switch (e) {
            case 0:
                return null;
            case 8:
                return !1;
            case 9:
                return !0;
            case 15:
                return null;
            default:
                throw new Error(3,r.toString(16))
        }
    }
    function h(r) {
        var n = r.offset
            , o = r.objInfo
            , i = Math.pow(2, o);
        if (i > 4)
            return u(t.slice(n + 1, n + 1 + i));
        if (i < e.maxObjectSize)
            return a(t.slice(n + 1, n + 1 + i));
        throw new Error("4 " + i + " " + e.maxObjectSize)
    }
    function p(r) {
        var n = r.offset
            , a = r.objInfo
            , s = a;
        if (s < e.maxObjectSize)
            return o({}, l, i(t.slice(n + 1, n + 1 + s)));
        throw new Error("4 " + s + " " + e.maxObjectSize)
    }
    function d(r) {
        var n = r.offset
            , o = r.objInfo
            , i = Math.pow(2, o);
        if (!(i < e.maxObjectSize))
            throw new Error("4 " + i + " " + e.maxObjectSize);
        var a = t.slice(n + 1, n + 1 + i);
        return 4 === i ? a.readFloatBE(0) : 8 === i ? readDoubleBE(a, 0) : void 0
    }
    function m(e) {
        var r = e.offset
            , n = e.objInfo;
        3 != n && console.error(5, n);
        var o = t.slice(r + 1, r + 9);
        return new Date(9783072e5 + 1e3 * o.readDoubleBE(0))
    }
    function y(r) {
        var n = r.offset
            , o = r.objInfo
            , a = 1
            , s = o;
        if (15 == o) {
            var u = t[n + 1]
                , c = (240 & u) / 16;
            1 != c && console.error(6, c);
            var f = 15 & u
                , l = Math.pow(2, f);
            a = 2 + l,
                s = i(t.slice(n + 2, n + 2 + l))
        }
        if (s < e.maxObjectSize)
            return t.slice(n + a, n + a + s);
        throw new Error("4 " + s + " " + e.maxObjectSize)
    }
    function g(r, o) {
        var a = r.offset
            , s = r.objInfo;
        o = o || 0;
        var u = "utf8"
            , f = s
            , l = 1;
        if (15 == s) {
            var h = t[a + 1]
                , p = (240 & h) / 16;
            if (1 != p)
                throw new Error("7 " + p);
            var d = 15 & h
                , m = Math.pow(2, d);
            l = 2 + m,
                f = ii(t.slice(a + 2, a + 2 + m))
        }
        if ((f *= o + 1) < e.maxObjectSize) {
            var y = new e_update(t.slice(a + l, a + l + f));
            return o && (y = cc(y),
                u = "ucs2"),
                tostring_16.call(y, u)
        }
        throw new Error("4 " + f + " " + e.maxObjectSize)
    }
    function v(n) {
        var o = n.offset
            , a = n.objInfo
            , s = a
            , u = 1;
        if (15 == a) {
            var c = t[o + 1]
                , f = (240 & c) / 16;
            1 != f && console.error(8, f);
            var l = 15 & c
                , h = Math.pow(2, l);
            u = 2 + h,
                s = ii(t.slice(o + 2, o + 2 + h))
        }

        for (var p = [], d = 0; d < s; d++) {
            var m = ii(t.slice(o + u + d * E, o + u + (d + 1) * E));
            p[d] = r(m)
        }
        return p
    }
    function b(n) {
        var o = n.offset
            , a = n.objInfo
            , s = (n.tableOffset,
            a)
            , u = 1;
        if (15 == a) {
            var c = t[o + 1]
                , f = (240 & c) / 16;
            1 != f && console.error(9, f);
            var l = 15 & c
                , h = Math.pow(2, l);
            u = 2 + h,
                s = ii(t.slice(o + 2, o + 2 + h))
        }
        if (2 * s * E > e.maxObjectSize)
            throw new Error(4);
        for (var p = {}, d = 0; d < s; d++) {
            var m = ii(t.slice(o + u + d * E, o + u + (d + 1) * E))
                , y = ii(t.slice(o + u + s * E + d * E, o + u + s * E + (d + 1) * E))
                , g = r(m)
                , v = r(y);
            p[g] = v
        }
        return p
    }
    var w = t.slice(t.length - 32, t.length)
        , _ = readUInt8(w, 6)
        , E = readUInt8(w, 7)
        , A = s(w, 8)
        , C = s(w, 16)
        , S = s(w, 24);

    for (var x = [], O = 0; O < A; O++) {
        var T = t.slice(S + O * _, S + (O + 1) * _);
        x[O] = ii(T, 0)
    }
    return r(C)
}


function ii(t, e) {
    e = e || 0;
    for (var r = 0, n = e; n < t.length; n++)
        r <<= 8,
            r |= 255 & t[n];
    return r
}

function s(t, e) {
    return readUInt32BE(t.slice(e, e + 8), 4, 8)
}

function decrypt_r(t, e) {
    return decrypt(t, e)
}


function decrypt(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hjasbdn2ih823rgwudsde7e2dhsdhas";
    "string" == typeof r && (r = [].map.call(r, function(t) {
        return t.charCodeAt(0)
    }));

    for (var n, o = [], i = 0, a = new e_update(e.length), s = 0; s < 256; s++)
        o[s] = s;
    for (s = 0; s < 256; s++)
        i = (i + o[s] + r[s % r.length]) % 256,
            n = o[s],
            o[s] = o[i],
            o[i] = n;
    s = 0,
        i = 0;
    for (var u = 0; u < e.length; u++)
        s = (s + 1) % 256,
            i = (i + o[s]) % 256,
            n = o[s],
            o[s] = o[i],
            o[i] = n,
            a[u] = e[u] ^ o[(o[s] + o[i]) % 256];
    return a
}



//var c = Object(o.hash)(e.concat([u, e.from(t)]));

// e
function c_e(e){
    return "string" == typeof e && (e = encrypt_str(e)),
        (0, h_default)(e, 41405).toString(16).replace(/^0+/, "")
    // 待定
    //    h_default(e, 41405)
}

function h_default(){
    // 根据参数的个数， 执行具体的步骤
    // 参数有两个   new h_default(arguments[1]).update(arguments[0]).digest()
    // 参数一个，首先判断是不是h_default的实例     this instanceof h_default ? void i_i.call(this, arguments[0]) : new h_default(arguments[0])
    // return 2 == arguments.length ? new h_default(arguments[1]).update(arguments[0]).digest() : this instanceof h_default ? void i_i.call(this, arguments[0]) : new h_default(arguments[0])


    // 测试：
    return 2 == arguments.length ? digest(update(new h_default(arguments[1]), arguments[0])) : this instanceof h_default ? void i_i.call(this, arguments[0]) : new h_default(arguments[0])

}

function n_n(t) {

    // update 中调用， 返回一个Uint8Array 对象
    for (var e = [], r = 0, n = t.length; r < n; r++) {
        var o = t.charCodeAt(r);
        o < 128 ? e.push(o) : o < 2048 ? e.push(192 | o >> 6, 128 | 63 & o) : o < 55296 || o >= 57344 ? e.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o) : (r++,
            o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(r)),
            e.push(240 | o >> 18, 128 | o >> 12 & 63, 128 | o >> 6 & 63, 128 | 63 & o))
    }
    return new Uint8Array(e)
}




function e_update(t, e, r) {
    if (!(true || this instanceof i))
        return new e_update(t,e,r);
    if ("number" == typeof t) {
        if ("string" == typeof e)
            throw new Error("If encoding is specified then the first argument must be a string");
        return c_e_update(this, t)
    }
    return aa(this, t, e, r)
}

function aa(t, e, r, n) {
    if ("number" == typeof e)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, r, n) : "string" == typeof e ? ff(t, e, r) : p(t, e)
}

function p(t, e) {
    if (true) {
        var r = 0 | e.length;
        return t = o_1(t, r),
            0 === t.length ? t : (copy(e, t, 0, 0, r),
                t)
    }
    if (e) {
        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
            return "number" != typeof e.length || G(e.length) ? o(t, 0) : l(t, e);
        if ("Buffer" === e.type && J(e.data))
            return l(t, e.data)
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
}

function ff(t, e, r) {
    if ("string" == typeof r && "" !== r || (r = "utf8"),
        !i.isEncoding(r))
        throw new TypeError('"encoding" must be a valid string encoding');
    var n = 0 | y(e, r);
    t = o(t, n);
    var a = t.write(e, r);
    return a !== n && (t = t.slice(0, a)),
        t
}

function h(t, e, r, n) {
    if (e.byteLength,
    r < 0 || e.byteLength < r)
        throw new RangeError("'offset' is out of bounds");
    if (e.byteLength < r + (n || 0))
        throw new RangeError("'length' is out of bounds");
    return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,r) : new Uint8Array(e,r,n),
        i.TYPED_ARRAY_SUPPORT ? (t = e,
            t.__proto__ = i.prototype) : t = l(t, e),
        t
}


function o_o(t, e) {
    return (t = new Uint8Array(e)),
        // t.__proto__ = e_update.prototype),
        t
}
function c_e_update(t, e) {

    if (undefined,
        t = o_o(t, e < 0 ? 0 : 0 | e),
        false)
        for (var r = 0; r < e; ++r)
            t[r] = 0;
    return t
}



// ------------------------------------digest---start-----------------------------------------

function digest(kkk) {
    var s = i_i_a("11400714785074694791")
        , u = i_i_a("14029467366897019727")
        , c = i_i_a("1609587929392839161")
        , f = i_i_a("9650029242287828579")
        , l = i_i_a("2870177450012600261");
    var t, e, r = kkk.memory, n = "string" == typeof r, o = 0, i = kkk.memsize, h = new i_i_a();
    for (kkk.total_len >= 32 ? (t = kkk.v1.clone().rotl(1),
        t.add(kkk.v2.clone().rotl(7)),
        t.add(kkk.v3.clone().rotl(12)),
        t.add(kkk.v4.clone().rotl(18)),
        t.xor(kkk.v1.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kkk.v2.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kkk.v3.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kkk.v4.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f)) : t = kkk.seed.clone().add(l),
             t.add(h.fromNumber(kkk.total_len)); o <= i - 8; )
        n ? h.fromBits(r.charCodeAt(o + 1) << 8 | r.charCodeAt(o), r.charCodeAt(o + 3) << 8 | r.charCodeAt(o + 2), r.charCodeAt(o + 5) << 8 | r.charCodeAt(o + 4), r.charCodeAt(o + 7) << 8 | r.charCodeAt(o + 6)) : h.fromBits(r[o + 1] << 8 | r[o], r[o + 3] << 8 | r[o + 2], r[o + 5] << 8 | r[o + 4], r[o + 7] << 8 | r[o + 6]),
            h.multiply(u).rotl(31).multiply(s),
            t.xor(h).rotl(27).multiply(s).add(f),
            o += 8;
    for (o + 4 <= i && (n ? h.fromBits(r.charCodeAt(o + 1) << 8 | r.charCodeAt(o), r.charCodeAt(o + 3) << 8 | r.charCodeAt(o + 2), 0, 0) : h.fromBits(r[o + 1] << 8 | r[o], r[o + 3] << 8 | r[o + 2], 0, 0),
        t.xor(h.multiply(s)).rotl(23).multiply(u).add(c),
        o += 4); o < i; )
        h.fromBits(n ? r.charCodeAt(o++) : r[o++], 0, 0, 0),
            t.xor(h.multiply(l)).rotl(11).multiply(s);
    return e = t.clone().shiftRight(33),
        t.xor(e).multiply(u),
        e = t.clone().shiftRight(29),
        t.xor(e).multiply(c),
        e = t.clone().shiftRight(32),
        t.xor(e),
        i_i.call(kkk, kkk.seed),
        // kkk.init(kkk.seed),
        t
}

function s_this(t, k) {
    if (k)
        return k._a00 = 65535 & t,
            k._a16 = t >>> 16,
            k._a32 = 0,
            k._a48 = 0,
            k
    return this._a00 = 65535 & t,
        this._a16 = t >>> 16,
        this._a32 = 0,
        this._a48 = 0,
        this
}

function clone() {
    return new i_i_a(this._a00,this._a16,this._a32,this._a48)
}
//-------------------------------------digest---end-------------------------------------------
function update(kkk, t) {

    var r, o = "string" == typeof t;
    o && (t = n_n(t),
        o = !1,
        r = !0),
    "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && (r = !0,
        t = new Uint8Array(t));
    var i = 0
        , c = t.length
        , f = i + c;
    if (0 == c)
        return kkk;
    if (kkk.total_len += c,

        //  e_update
    0 == kkk.memsize && (kkk.memory = o ? "" : r ? new Uint8Array(32) : new e_update(32)),
    kkk.memsize + c < 32)
        return o ? kkk.memory += t : r ? kkk.memory.set(t.subarray(0, c), kkk.memsize) : copy(t, kkk.memory, kkk.memsize, 0, c),
            kkk.memsize += c,
            kkk;
    if (kkk.memsize > 0) {
        o ? kkk.memory += t.slice(0, 32 - kkk.memsize) : r ? kkk.memory.set(t.subarray(0, 32 - kkk.memsize), kkk.memsize) : t.copy(kkk.memory, kkk.memsize, 0, 32 - kkk.memsize);
        var l = 0;
        if (o) {
            var h;
            h = a(kkk.memory.charCodeAt(l + 1) << 8 | kkk.memory.charCodeAt(l), kkk.memory.charCodeAt(l + 3) << 8 | kkk.memory.charCodeAt(l + 2), kkk.memory.charCodeAt(l + 5) << 8 | kkk.memory.charCodeAt(l + 4), kkk.memory.charCodeAt(l + 7) << 8 | kkk.memory.charCodeAt(l + 6)),
                kkk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory.charCodeAt(l + 1) << 8 | kkk.memory.charCodeAt(l), kkk.memory.charCodeAt(l + 3) << 8 | kkk.memory.charCodeAt(l + 2), kkk.memory.charCodeAt(l + 5) << 8 | kkk.memory.charCodeAt(l + 4), kkk.memory.charCodeAt(l + 7) << 8 | kkk.memory.charCodeAt(l + 6)),
                kkk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory.charCodeAt(l + 1) << 8 | kkk.memory.charCodeAt(l), kkk.memory.charCodeAt(l + 3) << 8 | kkk.memory.charCodeAt(l + 2), kkk.memory.charCodeAt(l + 5) << 8 | kkk.memory.charCodeAt(l + 4), kkk.memory.charCodeAt(l + 7) << 8 | kkk.memory.charCodeAt(l + 6)),
                kkk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory.charCodeAt(l + 1) << 8 | kkk.memory.charCodeAt(l), kkk.memory.charCodeAt(l + 3) << 8 | kkk.memory.charCodeAt(l + 2), kkk.memory.charCodeAt(l + 5) << 8 | kkk.memory.charCodeAt(l + 4), kkk.memory.charCodeAt(l + 7) << 8 | kkk.memory.charCodeAt(l + 6)),
                kkk.v4.add(h.multiply(u)).rotl(31).multiply(s)
        } else {
            var h;
            h = a(kkk.memory[l + 1] << 8 | kkk.memory[l], kkk.memory[l + 3] << 8 | kkk.memory[l + 2], kkk.memory[l + 5] << 8 | kkk.memory[l + 4], kkk.memory[l + 7] << 8 | kkk.memory[l + 6]),
                kkk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory[l + 1] << 8 | kkk.memory[l], kkk.memory[l + 3] << 8 | kkk.memory[l + 2], kkk.memory[l + 5] << 8 | kkk.memory[l + 4], kkk.memory[l + 7] << 8 | kkk.memory[l + 6]),
                kkk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory[l + 1] << 8 | kkk.memory[l], kkk.memory[l + 3] << 8 | kkk.memory[l + 2], kkk.memory[l + 5] << 8 | kkk.memory[l + 4], kkk.memory[l + 7] << 8 | kkk.memory[l + 6]),
                kkk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kkk.memory[l + 1] << 8 | kkk.memory[l], kkk.memory[l + 3] << 8 | kkk.memory[l + 2], kkk.memory[l + 5] << 8 | kkk.memory[l + 4], kkk.memory[l + 7] << 8 | kkk.memory[l + 6]),
                kkk.v4.add(h.multiply(u)).rotl(31).multiply(s)
        }
        i += 32 - kkk.memsize,
            kkk.memsize = 0,
        o && (kkk.memory = "")
    }
    if (i <= f - 32) {
        var p = f - 32;
        do {
            if (o) {
                var h;
                h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kkk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kkk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kkk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kkk.v4.add(h.multiply(u)).rotl(31).multiply(s)
            } else {
                var h;
                h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kkk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kkk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kkk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kkk.v4.add(h.multiply(u)).rotl(31).multiply(s)
            }
            i += 8
        } while (i <= p)
    }
    return i < f && (o ? kkk.memory += t.slice(i) : r ? kkk.memory.set(t.subarray(i, f), kkk.memsize) : t.copy(kkk.memory, kkk.memsize, i, f),
        kkk.memsize = f - i),
        kkk

}
function i_i(t){

    // s, u 为固定值
    var s = i_i_a("11400714785074694791");
    var u = i_i_a("14029467366897019727");
//    let tool = new Tool();
    return this.seed = t instanceof i_i_a ? t.clone() : i_i_a(t),
        this.v1 = this.seed.clone().add(s).add(u),
        this.v2 = this.seed.clone().add(u),
        this.v3 = this.seed.clone(),
        this.v4 = this.seed.clone().subtract(s),
        this.total_len = 0,
        this.memsize = 0,
        this.memory = null,
        this
}

function i_i_a(t, e, r, n) {
    return this instanceof i_i_a ? (this.remainder = null,
        "string" == typeof t ? u_u.call(this, t, e) : void 0 === e ? s_s.call(this, t) : void a_a.apply(this, arguments)) : new i_i_a(t,e,r,n)
}

function a_a(t, e, r, n) {
    return void 0 === r ? (this._a00 = 65535 & t,
        this._a16 = t >>> 16,
        this._a32 = 65535 & e,
        this._a48 = e >>> 16,
        this) : (this._a00 = 0 | t,
        this._a16 = 0 | e,
        this._a32 = 0 | r,
        this._a48 = 0 | n,
        this)
}
function s_s(t) {
    return this._a00 = 65535 & t,
        this._a16 = t >>> 16,
        this._a32 = 0,
        this._a48 = 0,
        this
}
function u_u(t, e) {
    e = e || 10,
        this._a00 = 0,
        this._a16 = 0,
        this._a32 = 0,
        this._a48 = 0;
    for (var r = c_c[e] || new i_i_a(Math.pow(e, 5)), n = 0, o = t.length; n < o; n += 5) {
        var a = Math.min(5, o - n)
            , s = parseInt(t.slice(n, n + a), e);
        this.multiply(a < 5 ? new i_i_a(Math.pow(e, a)) : r).add(new i_i_a(s))
    }
    return this
}
var c_c = {
    16: i_i_a(Math.pow(16, 5)),
    10: i_i_a(Math.pow(10, 5)),
    2: i_i_a(Math.pow(2, 5))
}
    , f_f = {
    16: i_i_a(16),
    10: i_i_a(10),
    2: i_i_a(2)
};


i_i_a.prototype.fromBits = a_a,
    i_i_a.prototype.fromNumber = s_s,
    i_i_a.prototype.fromString = u_u,
    i_i_a.prototype.toNumber = function() {
        return 65536 * this._a16 + this._a00
    }
    ,
    i_i_a.prototype.toString = function(t) {
        t = t || 10;
        var e = f_f[t] || new i_i_a(t);
        if (!this.gt(e))
            return this.toNumber().toString(t);
        for (var r = this.clone(), n = new Array(64), o = 63; o >= 0 && (r.div(e),
            n[o] = r.remainder.toNumber().toString(t),
            r.gt(e)); o--)
            ;
        return n[o - 1] = r.toNumber().toString(t),
            n.join("")
    }
    ,
    i_i_a.prototype.add = function(t) {
        var e = this._a00 + t._a00
            , r = e >>> 16;
        r += this._a16 + t._a16;
        var n = r >>> 16;
        n += this._a32 + t._a32;
        var o = n >>> 16;
        return o += this._a48 + t._a48,
            this._a00 = 65535 & e,
            this._a16 = 65535 & r,
            this._a32 = 65535 & n,
            this._a48 = 65535 & o,
            this
    }
    ,
    i_i_a.prototype.subtract = function(t) {
        return this.add(t.clone().negate())
    }
    ,
    i_i_a.prototype.multiply = function(t) {
        var e = this._a00
            , r = this._a16
            , n = this._a32
            , o = this._a48
            , i = t._a00
            , a = t._a16
            , s = t._a32
            , u = t._a48
            , c = e * i
            , f = c >>> 16;
        f += e * a;
        var l = f >>> 16;
        f &= 65535,
            f += r * i,
            l += f >>> 16,
            l += e * s;
        var h = l >>> 16;
        return l &= 65535,
            l += r * a,
            h += l >>> 16,
            l &= 65535,
            l += n * i,
            h += l >>> 16,
            h += e * u,
            h &= 65535,
            h += r * s,
            h &= 65535,
            h += n * a,
            h &= 65535,
            h += o * i,
            this._a00 = 65535 & c,
            this._a16 = 65535 & f,
            this._a32 = 65535 & l,
            this._a48 = 65535 & h,
            this
    }
    ,
    i_i_a.prototype.div = function(t) {
        if (0 == t._a16 && 0 == t._a32 && 0 == t._a48) {
            if (0 == t._a00)
                throw Error("division by zero");
            if (1 == t._a00)
                return this.remainder = new i(0),
                    this
        }
        if (t.gt(this))
            return this.remainder = this.clone(),
                this._a00 = 0,
                this._a16 = 0,
                this._a32 = 0,
                this._a48 = 0,
                this;
        if (this.eq(t))
            return this.remainder = new i(0),
                this._a00 = 1,
                this._a16 = 0,
                this._a32 = 0,
                this._a48 = 0,
                this;
        for (var e = t.clone(), r = -1; !this.lt(e); )
            e.shiftLeft(1, !0),
                r++;
        for (this.remainder = this.clone(),
                 this._a00 = 0,
                 this._a16 = 0,
                 this._a32 = 0,
                 this._a48 = 0; r >= 0; r--)
            e.shiftRight(1),
            this.remainder.lt(e) || (this.remainder.subtract(e),
                r >= 48 ? this._a48 |= 1 << r - 48 : r >= 32 ? this._a32 |= 1 << r - 32 : r >= 16 ? this._a16 |= 1 << r - 16 : this._a00 |= 1 << r);
        return this
    }
    ,
    i_i_a.prototype.negate = function() {
        var t = 1 + (65535 & ~this._a00);
        return this._a00 = 65535 & t,
            t = (65535 & ~this._a16) + (t >>> 16),
            this._a16 = 65535 & t,
            t = (65535 & ~this._a32) + (t >>> 16),
            this._a32 = 65535 & t,
            this._a48 = ~this._a48 + (t >>> 16) & 65535,
            this
    }
    ,
    i_i_a.prototype.equals = i_i_a.prototype.eq = function(t) {
        return this._a48 == t._a48 && this._a00 == t._a00 && this._a32 == t._a32 && this._a16 == t._a16
    }
    ,
    i_i_a.prototype.greaterThan = i_i_a.prototype.gt = function(t) {
        return this._a48 > t._a48 || !(this._a48 < t._a48) && (this._a32 > t._a32 || !(this._a32 < t._a32) && (this._a16 > t._a16 || !(this._a16 < t._a16) && this._a00 > t._a00))
    }
    ,
    i_i_a.prototype.lessThan = i_i_a.prototype.lt = function(t) {
        return this._a48 < t._a48 || !(this._a48 > t._a48) && (this._a32 < t._a32 || !(this._a32 > t._a32) && (this._a16 < t._a16 || !(this._a16 > t._a16) && this._a00 < t._a00))
    }
    ,
    i_i_a.prototype.or = function(t) {
        return this._a00 |= t._a00,
            this._a16 |= t._a16,
            this._a32 |= t._a32,
            this._a48 |= t._a48,
            this
    }
    ,
    i_i_a.prototype.and = function(t) {
        return this._a00 &= t._a00,
            this._a16 &= t._a16,
            this._a32 &= t._a32,
            this._a48 &= t._a48,
            this
    }
    ,
    i_i_a.prototype.xor = function(t) {
        return this._a00 ^= t._a00,
            this._a16 ^= t._a16,
            this._a32 ^= t._a32,
            this._a48 ^= t._a48,
            this
    }
    ,
    i_i_a.prototype.not = function() {
        return this._a00 = 65535 & ~this._a00,
            this._a16 = 65535 & ~this._a16,
            this._a32 = 65535 & ~this._a32,
            this._a48 = 65535 & ~this._a48,
            this
    }
    ,
    i_i_a.prototype.shiftRight = i_i_a.prototype.shiftr = function(t) {
        return t %= 64,
            t >= 48 ? (this._a00 = this._a48 >> t - 48,
                this._a16 = 0,
                this._a32 = 0,
                this._a48 = 0) : t >= 32 ? (t -= 32,
                this._a00 = 65535 & (this._a32 >> t | this._a48 << 16 - t),
                this._a16 = this._a48 >> t & 65535,
                this._a32 = 0,
                this._a48 = 0) : t >= 16 ? (t -= 16,
                this._a00 = 65535 & (this._a16 >> t | this._a32 << 16 - t),
                this._a16 = 65535 & (this._a32 >> t | this._a48 << 16 - t),
                this._a32 = this._a48 >> t & 65535,
                this._a48 = 0) : (this._a00 = 65535 & (this._a00 >> t | this._a16 << 16 - t),
                this._a16 = 65535 & (this._a16 >> t | this._a32 << 16 - t),
                this._a32 = 65535 & (this._a32 >> t | this._a48 << 16 - t),
                this._a48 = this._a48 >> t & 65535),
            this
    }
    ,
    i_i_a.prototype.shiftLeft = i_i_a.prototype.shiftl = function(t, e) {
        return t %= 64,
            t >= 48 ? (this._a48 = this._a00 << t - 48,
                this._a32 = 0,
                this._a16 = 0,
                this._a00 = 0) : t >= 32 ? (t -= 32,
                this._a48 = this._a16 << t | this._a00 >> 16 - t,
                this._a32 = this._a00 << t & 65535,
                this._a16 = 0,
                this._a00 = 0) : t >= 16 ? (t -= 16,
                this._a48 = this._a32 << t | this._a16 >> 16 - t,
                this._a32 = 65535 & (this._a16 << t | this._a00 >> 16 - t),
                this._a16 = this._a00 << t & 65535,
                this._a00 = 0) : (this._a48 = this._a48 << t | this._a32 >> 16 - t,
                this._a32 = 65535 & (this._a32 << t | this._a16 >> 16 - t),
                this._a16 = 65535 & (this._a16 << t | this._a00 >> 16 - t),
                this._a00 = this._a00 << t & 65535),
        e || (this._a48 &= 65535),
            this
    }
    ,
    i_i_a.prototype.rotateLeft = i_i_a.prototype.rotl = function(t) {
        if (0 == (t %= 64))
            return this;
        if (t >= 32) {
            var e = this._a00;
            if (this._a00 = this._a32,
                this._a32 = e,
                e = this._a48,
                this._a48 = this._a16,
                this._a16 = e,
            32 == t)
                return this;
            t -= 32
        }
        var r = this._a48 << 16 | this._a32
            , n = this._a16 << 16 | this._a00
            , o = r << t | n >>> 32 - t
            , i = n << t | r >>> 32 - t;
        return this._a00 = 65535 & i,
            this._a16 = i >>> 16,
            this._a32 = 65535 & o,
            this._a48 = o >>> 16,
            this
    }
    ,
    i_i_a.prototype.rotateRight = i_i_a.prototype.rotr = function(t) {
        if (0 == (t %= 64))
            return this;
        if (t >= 32) {
            var e = this._a00;
            if (this._a00 = this._a32,
                this._a32 = e,
                e = this._a48,
                this._a48 = this._a16,
                this._a16 = e,
            32 == t)
                return this;
            t -= 32
        }
        var r = this._a48 << 16 | this._a32
            , n = this._a16 << 16 | this._a00
            , o = r >>> t | n << 32 - t
            , i = n >>> t | r << 32 - t;
        return this._a00 = 65535 & i,
            this._a16 = i >>> 16,
            this._a32 = 65535 & o,
            this._a48 = o >>> 16,
            this
    }
    ,
    i_i_a.prototype.clone = function() {
        return new i_i_a(this._a00,this._a16,this._a32,this._a48)
    };




console.log(main(data));


