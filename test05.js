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
    var s = i_i_a(11400714785074694791);
    var u = i_i_a(14029467366897019727);
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
        "string" == typeof t ? u.call(this, t, e) : void 0 === e ? s_s.call(this, t) : void a_a.apply(this, arguments)) : new i_i_a(t,e,r,n)
}


function u_u(t, e) {

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
        this.multiply(a < 5 ? new i_i_a(Math.pow(e, a)) : r).add(new i(s))
    }
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

        this.subtract = function (t) {
            return this.add(t.clone().negate())
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
        var t = 1 + (65535 & ~this._a00);
        return k._a00 = 65535 & t,
            t = (65535 & ~this._a16) + (t >>> 16),
            k._a16 = 65535 & t,
            t = (65535 & ~this._a32) + (t >>> 16),
            k._a32 = 65535 & t,
            k._a48 = ~this._a48 + (t >>> 16) & 65535,
            k
    };

}


function A_a(t){

}

main(data);


