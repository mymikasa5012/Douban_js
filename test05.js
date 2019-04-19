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
    return a(this, t, e, r)
}

function c_e_update(t, e) {

    function o(t, e) {
        return (t = new Uint8Array(e),
            t.__proto__ = e_update.prototype),
            t
    }
    if (undefined,
        t = o(t, e < 0 ? 0 : 0 | e),
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
//
// function i_i_a(t, e, r, n) {
//     return this instanceof i_i_a ? (this.remainder = null,
//         "string" == typeof t ? u_u.call(this, t, e) : void 0 === e ? s_s.call(this, t) : void a_a.apply(this, arguments)) : new i_i_a(t,e,r,n)
//
// }


// function u_u(t, e) {
//     let tool = new Tool();
//     var c = {
//         16: i_i_a(Math.pow(16, 5)),
//         10: i_i_a(Math.pow(10, 5)),
//         2: i_i_a(Math.pow(2, 5))
//     };
//     console.log(c);
//     e = e || 10,
//     this._a00 = 0,
//     this._a16 = 0,
//     this._a32 = 0,
//     this._a48 = 0;
//     for (var r = c[e] || new i_i_a(Math.pow(e, 5)), n = 0, o = t.length; n < o; n += 5) {
//         var a = Math.min(5, o - n)
//             , s = parseInt(t.slice(n, n + a), e);
//         tool.add(tool.multiply(this, a < 5 ? new i_i_a(Math.pow(e, a)) : r), new i_i_a(s))
//     }
//
//     this.clone = function () {
//         return new i_i_a(this._a00,this._a16,this._a32,this._a48)
//     };
//     return this
// }
// function a_a(t, e, r, n) {
//
//     // 返回一个this对象
//     return void 0 === r ? (this._a00 = 65535 & t,
//         this._a16 = t >>> 16,
//         this._a32 = 65535 & e,
//         this._a48 = e >>> 16,
//         this) : (this._a00 = 0 | t,
//         this._a16 = 0 | e,
//         this._a32 = 0 | r,
//         this._a48 = 0 | n,
//         this)
// }
//
// function s_s(t) {
//     return this._a00 = 65535 & t,
//         this._a16 = t >>> 16,
//         this._a32 = 0,
//         this._a48 = 0,
//         this.clone = function () {
//             return new i_i_a(this._a00,this._a16,this._a32,this._a48)
//         },
//         this
// }

//---------------------------------------------------tool begin-----------------------------------------

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
// function add() {
//
// }
// function Tool() {
//     this.add = function (k, t) {
//         var e = k._a00 + t._a00
//             , r = e >>> 16;
//         r += k._a16 + t._a16;
//         var n = r >>> 16;
//         n += k._a32 + t._a32;
//         var o = n >>> 16;
//         return o += k._a48 + t._a48,
//             k._a00 = 65535 & e,
//             k._a16 = 65535 & r,
//             k._a32 = 65535 & n,
//             k._a48 = 65535 & o,
//             k
//     };
//
//     this.subtract = function (k, t) {
//         return this.add(k, this.negate(t.clone()))
//     };
//
//     this.negate = function(k) {
//         var t = 1 + (65535 & ~k._a00);
//         return k._a00 = 65535 & t,
//             t = (65535 & ~k._a16) + (t >>> 16),
//             k._a16 = 65535 & t,
//             t = (65535 & ~k._a32) + (t >>> 16),
//             k._a32 = 65535 & t,
//             k._a48 = ~k._a48 + (t >>> 16) & 65535,
//             k
//     };
//     this.multiply = function(k, t) {
//         var e = k._a00
//             , r = k._a16
//             , n = k._a32
//             , o = k._a48
//             , i = t._a00
//             , a = t._a16
//             , s = t._a32
//             , u = t._a48
//             , c = e * i
//             , f = c >>> 16;
//         f += e * a;
//         var l = f >>> 16;
//         f &= 65535,
//             f += r * i,
//             l += f >>> 16,
//             l += e * s;
//         var h = l >>> 16;
//         return l &= 65535,
//             l += r * a,
//             h += l >>> 16,
//             l &= 65535,
//             l += n * i,
//             h += l >>> 16,
//             h += e * u,
//             h &= 65535,
//             h += r * s,
//             h &= 65535,
//             h += n * a,
//             h &= 65535,
//             h += o * i,
//             k._a00 = 65535 & c,
//             k._a16 = 65535 & f,
//             k._a32 = 65535 & l,
//             k._a48 = 65535 & h,
//             k
//     };
//
//     this.rotl = function(t) {
//         if (0 == (t %= 64))
//             return this;
//         if (t >= 32) {
//             var e = this._a00;
//             if (this._a00 = this._a32,
//                 this._a32 = e,
//                 e = this._a48,
//                 this._a48 = this._a16,
//                 this._a16 = e,
//             32 == t)
//                 return this;
//             t -= 32
//         }
//         var r = this._a48 << 16 | this._a32
//             , n = this._a16 << 16 | this._a00
//             , o = r << t | n >>> 32 - t
//             , i = n << t | r >>> 32 - t;
//         return this._a00 = 65535 & i,
//             this._a16 = i >>> 16,
//             this._a32 = 65535 & o,
//             this._a48 = o >>> 16,
//             this
//     };
//
//     this.xor = function(kkk, t) {
//         return kkk._a00 ^= t._a00,
//             kkk._a16 ^= t._a16,
//             kkk._a32 ^= t._a32,
//             kkk._a48 ^= t._a48,
//             kkk
//     };
//
//     this.shiftRight = function (kkk, t) {
//         return t %= 64,
//             t >= 48 ? (kkk._a00 = kkk._a48 >> t - 48,
//                 kkk._a16 = 0,
//                 kkk._a32 = 0,
//                 kkk._a48 = 0) : t >= 32 ? (t -= 32,
//                 kkk._a00 = 65535 & (kkk._a32 >> t | kkk._a48 << 16 - t),
//                 kkk._a16 = kkk._a48 >> t & 65535,
//                 kkk._a32 = 0,
//                 kkk._a48 = 0) : t >= 16 ? (t -= 16,
//                 kkk._a00 = 65535 & (kkk._a16 >> t | kkk._a32 << 16 - t),
//                 kkk._a16 = 65535 & (kkk._a32 >> t | kkk._a48 << 16 - t),
//                 kkk._a32 = kkk._a48 >> t & 65535,
//                 kkk._a48 = 0) : (kkk._a00 = 65535 & (kkk._a00 >> t | kkk._a16 << 16 - t),
//                 kkk._a16 = 65535 & (kkk._a16 >> t | kkk._a32 << 16 - t),
//                 kkk._a32 = 65535 & (kkk._a32 >> t | kkk._a48 << 16 - t),
//                 kkk._a48 = kkk._a48 >> t & 65535),
//             kkk
//     };
// }



main(data);


