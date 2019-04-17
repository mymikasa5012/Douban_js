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


// function s() {
//    
// }

function hash(e) {
    return "string" == typeof e && (e = encrypt_str(e)),(0, o_default)(e, 41405).toString(16).replace(/^0+/, "")

}

// 待补充
function o_default() {
    return 2 == arguments.length ? new o_default(arguments[1]).update(arguments[0]).digest() : this instanceof o_default ? void o_default_i.call(this, arguments[0]) : new o_default(arguments[0])
}

function n_n(t) {
    for (var e = [], r = 0, n = t.length; r < n; r++) {
        var o = t.charCodeAt(r);
        o < 128 ? e.push(o) : o < 2048 ? e.push(192 | o >> 6, 128 | 63 & o) : o < 55296 || o >= 57344 ? e.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o) : (r++,
            o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(r)),
            e.push(240 | o >> 18, 128 | o >> 12 & 63, 128 | o >> 6 & 63, 128 | 63 & o))
    }
    return new Uint8Array(e)
}

function update_i(t, e, r) {
    if ("number" == typeof t) {
        return c(this, t)
    }
    return a(this, t, e, r)
}
function update(kk, t) {

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
        return kk;
    if (kk.total_len += c,
    0 == kk.memsize && (kk.memory = o ? "" : r ? new Uint8Array(32) : new update_i(32)),
    kk.memsize + c < 32)
        return o ? kk.memory += t : r ? kk.memory.set(t.subarray(0, c), kk.memsize) : copy(t, kk.memory, kk.memsize, 0, c),
            kk.memsize += c,
            kk;
    if (kk.memsize > 0) {
        o ? kk.memory += t.slice(0, 32 - kk.memsize) : r ? kk.memory.set(t.subarray(0, 32 - kk.memsize), kk.memsize) : copy(t, kk.memory, kk.memsize, 0, 32 - kk.memsize);
        var l = 0;
        if (o) {
            var h;
            h = a(kk.memory.charCodeAt(l + 1) << 8 | kk.memory.charCodeAt(l), kk.memory.charCodeAt(l + 3) << 8 | kk.memory.charCodeAt(l + 2), kk.memory.charCodeAt(l + 5) << 8 | kk.memory.charCodeAt(l + 4), kk.memory.charCodeAt(l + 7) << 8 | kk.memory.charCodeAt(l + 6)),
                kk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory.charCodeAt(l + 1) << 8 | kk.memory.charCodeAt(l), kk.memory.charCodeAt(l + 3) << 8 | kk.memory.charCodeAt(l + 2), kk.memory.charCodeAt(l + 5) << 8 | kk.memory.charCodeAt(l + 4), kk.memory.charCodeAt(l + 7) << 8 | kk.memory.charCodeAt(l + 6)),
                kk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory.charCodeAt(l + 1) << 8 | kk.memory.charCodeAt(l), kk.memory.charCodeAt(l + 3) << 8 | kk.memory.charCodeAt(l + 2), kk.memory.charCodeAt(l + 5) << 8 | kk.memory.charCodeAt(l + 4), kk.memory.charCodeAt(l + 7) << 8 | kk.memory.charCodeAt(l + 6)),
                kk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory.charCodeAt(l + 1) << 8 | kk.memory.charCodeAt(l), kk.memory.charCodeAt(l + 3) << 8 | kk.memory.charCodeAt(l + 2), kk.memory.charCodeAt(l + 5) << 8 | kk.memory.charCodeAt(l + 4), kk.memory.charCodeAt(l + 7) << 8 | kk.memory.charCodeAt(l + 6)),
                kk.v4.add(h.multiply(u)).rotl(31).multiply(s)
        } else {
            var h;
            h = a(kk.memory[l + 1] << 8 | kk.memory[l], kk.memory[l + 3] << 8 | kk.memory[l + 2], kk.memory[l + 5] << 8 | kk.memory[l + 4], kk.memory[l + 7] << 8 | kk.memory[l + 6]),
                kk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory[l + 1] << 8 | kk.memory[l], kk.memory[l + 3] << 8 | kk.memory[l + 2], kk.memory[l + 5] << 8 | kk.memory[l + 4], kk.memory[l + 7] << 8 | kk.memory[l + 6]),
                kk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory[l + 1] << 8 | kk.memory[l], kk.memory[l + 3] << 8 | kk.memory[l + 2], kk.memory[l + 5] << 8 | kk.memory[l + 4], kk.memory[l + 7] << 8 | kk.memory[l + 6]),
                kk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                l += 8,
                h = a(kk.memory[l + 1] << 8 | kk.memory[l], kk.memory[l + 3] << 8 | kk.memory[l + 2], kk.memory[l + 5] << 8 | kk.memory[l + 4], kk.memory[l + 7] << 8 | kk.memory[l + 6]),
                kk.v4.add(h.multiply(u)).rotl(31).multiply(s)
        }
        i += 32 - kk.memsize,
            kk.memsize = 0,
        o && (kk.memory = "")
    }
    if (i <= f - 32) {
        var p = f - 32;
        do {
            if (o) {
                var h;
                h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t.charCodeAt(i + 1) << 8 | t.charCodeAt(i), t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2), t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4), t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6)),
                    kk.v4.add(h.multiply(u)).rotl(31).multiply(s)
            } else {
                var h;
                h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kk.v1.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kk.v2.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kk.v3.add(h.multiply(u)).rotl(31).multiply(s),
                    i += 8,
                    h = a(t[i + 1] << 8 | t[i], t[i + 3] << 8 | t[i + 2], t[i + 5] << 8 | t[i + 4], t[i + 7] << 8 | t[i + 6]),
                    kk.v4.add(h.multiply(u)).rotl(31).multiply(s)
            }
            i += 8
        } while (i <= p)
    }
    return i < f && (o ? kk.memory += t.slice(i) : r ? kk.memory.set(t.subarray(i, f), kk.memsize) : copy(t, kk.memory, kk.memsize, i, f),
        kk.memsize = f - i),
        kk
}


function digest(kk) {
    var t, e, r = kk.memory, n = "string" == typeof r, o = 0, i = kk.memsize, h = new o_default_a_i;
    for (kk.total_len >= 32 ? (t = kk.v1.clone().rotl(1),
        t.add(kk.v2.clone().rotl(7)),
        t.add(kk.v3.clone().rotl(12)),
        t.add(kk.v4.clone().rotl(18)),
        t.xor(kk.v1.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kk.v2.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kk.v3.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f),
        t.xor(kk.v4.multiply(u).rotl(31).multiply(s)),
        t.multiply(s).add(f)) : t = kk.seed.clone().add(l),
             t.add(h.fromNumber(kk.total_len)); o <= i - 8; )
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
        kk.init(kk.seed),
        t
}

function o_default_a_i(t, e, r, n) {
    return this instanceof o_default_a_i ? (this.remainder = null,
        "string" == typeof t ? u_u.call(this, t, e) : void 0 === e ? s_s.call(this, t) : void a_a.apply(this, arguments)) : new o_default_a_i(t,e,r,n)
}
//t instanceof a ? t.clone() : a(t)
function o_default_a(t, e, r, n) {
    return this._a00 = 65535 & t,
        this._a16 = t >>> 16,
        this._a32 = 0,
        this._a48 = 0,
        this.clone = function () {
            return new o_default_a_i(this._a00, this._a16, this._a32, this._a48)
        },
        this.add = function(t) {
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
        },

        this.subtract = function (t) {
            return this.add(t.clone().negate())
        },

        this.negate = function() {
            var t = 1 + (65535 & ~this._a00);
            return this._a00 = 65535 & t,
                t = (65535 & ~this._a16) + (t >>> 16),
                this._a16 = 65535 & t,
                t = (65535 & ~this._a32) + (t >>> 16),
                this._a32 = 65535 & t,
                this._a48 = ~this._a48 + (t >>> 16) & 65535,
                this
        },
        this.xor = function (t) {
            return this._a00 ^= t._a00,
                this._a16 ^= t._a16,
                this._a32 ^= t._a32,
                this._a48 ^= t._a48,
                this

        },

        this
}










function o_default_i(t) {
    var s = {'remainder': null, '_a00': 51847, '_a16': 34283, '_a32': 31153, '_a48': 40503, 'clone': function() { return new o_default_a_i(this._a00,this._a16,this._a32,this._a48)}}
    var u = {'remainder': null, '_a00': 60239, '_a16': 10196, '_a32': 44605, '_a48': 49842};
    return this.seed = o_default_a(t),
        this.v1 = this.seed.clone().add(s).add(u),
        this.v2 = this.seed.clone().add(u),
        this.v3 = this.seed.clone(),
        this.v4 = this.seed.clone().subtract(s),
        this.total_len = 0,
        this.memsize = 0,
        this.memory = null,
        this
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
    return 2 == arguments.length ? new h_default(arguments[1]): this instanceof h_default ? void i_i.call(this, arguments[0]) : new h_default(arguments[0])

}


function i_i(t){

    // s, u 为固定值
    var s = i_i_a("11400714785074694791");
    var u = i_i_a("14029467366897019727");
    let tool = new Tool();
    return this.seed = t instanceof i_i_a ? t.clone() : i_i_a(t),
        this.v1 = tool.add(tool.add(this.seed.clone(), s), u),
            //this.seed.clone().add(s).add(u),
        this.v2 = tool.add(this.seed.clone(), u),
        this.v3 = this.seed.clone(),
        this.v4 = tool.subtract(this.seed.clone(), s),
        this.total_len = 0,
        this.memsize = 0,
        this.memory = null,
        this
}

function i_i_a(t, e, r, n) {
    return this instanceof i_i_a ? (this.remainder = null,
        "string" == typeof t ? u_u.call(this, t, e) : void 0 === e ? s_s.call(this, t) : void a_a.apply(this, arguments)) : new i_i_a(t,e,r,n)
}


function u_u(t, e) {
    let tool = new Tool();
    var c = {
        16: i_i_a(Math.pow(16, 5)),
        10: i_i_a(Math.pow(10, 5)),
        2: i_i_a(Math.pow(2, 5))
    };
    console.log(c);
    e = e || 10,
    this._a00 = 0,
    this._a16 = 0,
    this._a32 = 0,
    this._a48 = 0;
    for (var r = c[e] || new i_i_a(Math.pow(e, 5)), n = 0, o = t.length; n < o; n += 5) {
        var a = Math.min(5, o - n)
            , s = parseInt(t.slice(n, n + a), e);
        tool.add(tool.multiply(this, a < 5 ? new i_i_a(Math.pow(e, a)) : r), new i_i_a(s))
    }

    this.clone = function () {
        return new i_i_a(this._a00,this._a16,this._a32,this._a48)
    };
    return this
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
        this.clone = function () {
            return new i_i_a(this._a00,this._a16,this._a32,this._a48)
        },
        this
}

function Tool() {
    this.add = function (k, t) {
        var e = k._a00 + t._a00
            , r = e >>> 16;
        r += k._a16 + t._a16;
        var n = r >>> 16;
        n += k._a32 + t._a32;
        var o = n >>> 16;
        return o += k._a48 + t._a48,
            k._a00 = 65535 & e,
            k._a16 = 65535 & r,
            k._a32 = 65535 & n,
            k._a48 = 65535 & o,
            k
    };

    this.subtract = function (k, t) {
        return this.add(k, this.negate(t.clone()))
    };

    this.negate = function(k) {
        var t = 1 + (65535 & ~k._a00);
        return k._a00 = 65535 & t,
            t = (65535 & ~k._a16) + (t >>> 16),
            k._a16 = 65535 & t,
            t = (65535 & ~k._a32) + (t >>> 16),
            k._a32 = 65535 & t,
            k._a48 = ~k._a48 + (t >>> 16) & 65535,
            k
    };
    this.multiply = function(k, t) {
        var e = k._a00
            , r = k._a16
            , n = k._a32
            , o = k._a48
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
            k._a00 = 65535 & c,
            k._a16 = 65535 & f,
            k._a32 = 65535 & l,
            k._a48 = 65535 & h,
            k
    };

}

main(data);


