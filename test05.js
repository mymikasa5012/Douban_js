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
    //hash(e);

    // cc = h_default(41405);
    console.log(cc);

    var ll = {};
    ll[cc] = a;
    res(ll);
}



function res(t) {
    var n = Object.keys(t)[0];

    // console.info(crypto.privateDecrypt(t[n], n));
    // var r = At.crypto.decrypt(t[n], n);

    let r = decrypt_r(t[n], n);

    console.info(r instanceof Uint8Array);
    // console.info(r);
    // slice()
    decrypt_t(r);
    // return e(r)
}

function decrypt_t(t) {

    //测试
    //console.log(t.length);
    let ttt = It(t);

    console.log(ttt);
    // return ee(It(t))
}

function ee() {

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


readDoubleBE = function(t, e) {
    return e || undefined,
        K.read(this, t, !1, 52, 8)
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
        return 4 === i ? a.readFloatBE(0) : 8 === i ? a.readDoubleBE(0) : void 0
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
                f = i(t.slice(a + 2, a + 2 + m))
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




main(data);


