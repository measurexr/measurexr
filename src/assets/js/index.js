var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  )
}
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj
    return this
  }
}
{
  let window = _____WB$wombat$assign$function_____('window')
  let self = _____WB$wombat$assign$function_____('self')
  let document = _____WB$wombat$assign$function_____('document')
  let location = _____WB$wombat$assign$function_____('location')
  let top = _____WB$wombat$assign$function_____('top')
  let parent = _____WB$wombat$assign$function_____('parent')
  let frames = _____WB$wombat$assign$function_____('frames')
  let opener = _____WB$wombat$assign$function_____('opener')

  /**The MIT License

Copyright © 2010-2020 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
  !(function a(o, s, c) {
    function l(e, t) {
      if (!s[e]) {
        if (!o[e]) {
          var n = 'function' == typeof require && require
          if (!t && n) return n(e, !0)
          if (h) return h(e, !0)
          var r = new Error("Cannot find module '" + e + "'")
          throw ((r.code = 'MODULE_NOT_FOUND'), r)
        }
        var i = (s[e] = { exports: {} })
        o[e][0].call(
          i.exports,
          function (t) {
            return l(o[e][1][t] || t)
          },
          i,
          i.exports,
          a,
          o,
          s,
          c,
        )
      }
      return s[e].exports
    }
    for (
      var h = 'function' == typeof require && require, t = 0;
      t < c.length;
      t++
    )
      l(c[t])
    return l
  })(
    {
      1: [
        function (t, e, n) {
          var r = Object.prototype.toString
          e.exports = function (t) {
            return (
              (t.BYTES_PER_ELEMENT &&
                '[object ArrayBuffer]' === r.call(t.buffer)) ||
              Array.isArray(t)
            )
          }
        },
        {},
      ],
      2: [
        function (t, e, n) {
          e.exports = function (t, e) {
            return 'number' == typeof t ? t : 'number' == typeof e ? e : 0
          }
        },
        {},
      ],
      3: [
        function (t, e, n) {
          'use strict'
          ;(n.byteLength = function (t) {
            var e = u(t),
              n = e[0],
              r = e[1]
            return (3 * (n + r)) / 4 - r
          }),
            (n.toByteArray = function (t) {
              var e,
                n,
                r = u(t),
                i = r[0],
                a = r[1],
                o = new h(
                  (function (t, e) {
                    return (3 * (t + e)) / 4 - e
                  })(i, a),
                ),
                s = 0,
                c = 0 < a ? i - 4 : i
              for (n = 0; n < c; n += 4)
                (e =
                  (l[t.charCodeAt(n)] << 18) |
                  (l[t.charCodeAt(n + 1)] << 12) |
                  (l[t.charCodeAt(n + 2)] << 6) |
                  l[t.charCodeAt(n + 3)]),
                  (o[s++] = (e >> 16) & 255),
                  (o[s++] = (e >> 8) & 255),
                  (o[s++] = 255 & e)
              2 === a &&
                ((e =
                  (l[t.charCodeAt(n)] << 2) | (l[t.charCodeAt(n + 1)] >> 4)),
                (o[s++] = 255 & e))
              1 === a &&
                ((e =
                  (l[t.charCodeAt(n)] << 10) |
                  (l[t.charCodeAt(n + 1)] << 4) |
                  (l[t.charCodeAt(n + 2)] >> 2)),
                (o[s++] = (e >> 8) & 255),
                (o[s++] = 255 & e))
              return o
            }),
            (n.fromByteArray = function (t) {
              for (
                var e, n = t.length, r = n % 3, i = [], a = 0, o = n - r;
                a < o;
                a += 16383
              )
                i.push(
                  (function (t, e, n) {
                    for (var r, i = [], a = e; a < n; a += 3)
                      (r =
                        ((t[a] << 16) & 16711680) +
                        ((t[a + 1] << 8) & 65280) +
                        (255 & t[a + 2])),
                        i.push(
                          (function (t) {
                            return (
                              s[(t >> 18) & 63] +
                              s[(t >> 12) & 63] +
                              s[(t >> 6) & 63] +
                              s[63 & t]
                            )
                          })(r),
                        )
                    return i.join('')
                  })(t, a, o < a + 16383 ? o : a + 16383),
                )
              1 == r
                ? ((e = t[n - 1]), i.push(s[e >> 2] + s[(e << 4) & 63] + '=='))
                : 2 == r &&
                  ((e = (t[n - 2] << 8) + t[n - 1]),
                  i.push(
                    s[e >> 10] + s[(e >> 4) & 63] + s[(e << 2) & 63] + '=',
                  ))
              return i.join('')
            })
          for (
            var s = [],
              l = [],
              h = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
              r =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              i = 0,
              a = r.length;
            i < a;
            ++i
          )
            (s[i] = r[i]), (l[r.charCodeAt(i)] = i)
          function u(t) {
            var e = t.length
            if (0 < e % 4)
              throw new Error('Invalid string. Length must be a multiple of 4')
            var n = t.indexOf('=')
            return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)]
          }
          ;(l['-'.charCodeAt(0)] = 62), (l['_'.charCodeAt(0)] = 63)
        },
        {},
      ],
      4: [
        function (t, e, n) {
          var r = t('buffer').Buffer
          e.exports = function (t, e) {
            if (r.isBuffer(t) && r.isBuffer(e)) {
              if ('function' == typeof t.equals) return t.equals(e)
              if (t.length !== e.length) return !1
              for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1
              return !0
            }
          }
        },
        { buffer: 5 },
      ],
      5: [
        function (t, e, P) {
          ;(function (u) {
            'use strict'
            var s = t('base64-js'),
              a = t('ieee754')
            ;(P.Buffer = u),
              (P.SlowBuffer = function (t) {
                ;+t != t && (t = 0)
                return u.alloc(+t)
              }),
              (P.INSPECT_MAX_BYTES = 50)
            var n = 2147483647
            function o(t) {
              if (n < t)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"',
                )
              var e = new Uint8Array(t)
              return (e.__proto__ = u.prototype), e
            }
            function u(t, e, n) {
              if ('number' != typeof t) return r(t, e, n)
              if ('string' == typeof e)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number',
                )
              return i(t)
            }
            function r(t, e, n) {
              if ('string' == typeof t)
                return (function (t, e) {
                  ;('string' == typeof e && '' !== e) || (e = 'utf8')
                  if (!u.isEncoding(e))
                    throw new TypeError('Unknown encoding: ' + e)
                  var n = 0 | p(t, e),
                    r = o(n),
                    i = r.write(t, e)
                  i !== n && (r = r.slice(0, i))
                  return r
                })(t, e)
              if (ArrayBuffer.isView(t)) return l(t)
              if (null == t)
                throw TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof t,
                )
              if (R(t, ArrayBuffer) || (t && R(t.buffer, ArrayBuffer)))
                return (function (t, e, n) {
                  if (e < 0 || t.byteLength < e)
                    throw new RangeError('"offset" is outside of buffer bounds')
                  if (t.byteLength < e + (n || 0))
                    throw new RangeError('"length" is outside of buffer bounds')
                  var r
                  r =
                    void 0 === e && void 0 === n
                      ? new Uint8Array(t)
                      : void 0 === n
                        ? new Uint8Array(t, e)
                        : new Uint8Array(t, e, n)
                  return (r.__proto__ = u.prototype), r
                })(t, e, n)
              if ('number' == typeof t)
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number',
                )
              var r = t.valueOf && t.valueOf()
              if (null != r && r !== t) return u.from(r, e, n)
              var i = (function (t) {
                if (u.isBuffer(t)) {
                  var e = 0 | h(t.length),
                    n = o(e)
                  return 0 === n.length ? n : (t.copy(n, 0, 0, e), n)
                }
                if (void 0 !== t.length)
                  return 'number' != typeof t.length || C(t.length)
                    ? o(0)
                    : l(t)
                if ('Buffer' === t.type && Array.isArray(t.data))
                  return l(t.data)
              })(t)
              if (i) return i
              if (
                'undefined' != typeof Symbol &&
                null != Symbol.toPrimitive &&
                'function' == typeof t[Symbol.toPrimitive]
              )
                return u.from(t[Symbol.toPrimitive]('string'), e, n)
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof t,
              )
            }
            function c(t) {
              if ('number' != typeof t)
                throw new TypeError('"size" argument must be of type number')
              if (t < 0)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"',
                )
            }
            function i(t) {
              return c(t), o(t < 0 ? 0 : 0 | h(t))
            }
            function l(t) {
              for (
                var e = t.length < 0 ? 0 : 0 | h(t.length), n = o(e), r = 0;
                r < e;
                r += 1
              )
                n[r] = 255 & t[r]
              return n
            }
            function h(t) {
              if (n <= t)
                throw new RangeError(
                  'Attempt to allocate Buffer larger than maximum size: 0x' +
                    n.toString(16) +
                    ' bytes',
                )
              return 0 | t
            }
            function p(t, e) {
              if (u.isBuffer(t)) return t.length
              if (ArrayBuffer.isView(t) || R(t, ArrayBuffer))
                return t.byteLength
              if ('string' != typeof t)
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof t,
                )
              var n = t.length,
                r = 2 < arguments.length && !0 === arguments[2]
              if (!r && 0 === n) return 0
              for (var i = !1; ; )
                switch (e) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return n
                  case 'utf8':
                  case 'utf-8':
                    return T(t).length
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 2 * n
                  case 'hex':
                    return n >>> 1
                  case 'base64':
                    return A(t).length
                  default:
                    if (i) return r ? -1 : T(t).length
                    ;(e = ('' + e).toLowerCase()), (i = !0)
                }
            }
            function e(t, e, n) {
              var r,
                i,
                a,
                o = !1
              if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                return ''
              if (
                ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
              )
                return ''
              if ((n >>>= 0) <= (e >>>= 0)) return ''
              for (t = t || 'utf8'; ; )
                switch (t) {
                  case 'hex':
                    return (function (t, e, n) {
                      var r = t.length
                      ;(!e || e < 0) && (e = 0)
                      ;(!n || n < 0 || r < n) && (n = r)
                      for (var i = '', a = e; a < n; ++a)
                        i += (function (t) {
                          return t < 16 ? '0' + t.toString(16) : t.toString(16)
                        })(t[a])
                      return i
                    })(this, e, n)
                  case 'utf8':
                  case 'utf-8':
                    return y(this, e, n)
                  case 'ascii':
                    return (function (t, e, n) {
                      var r = ''
                      n = Math.min(t.length, n)
                      for (var i = e; i < n; ++i)
                        r += String.fromCharCode(127 & t[i])
                      return r
                    })(this, e, n)
                  case 'latin1':
                  case 'binary':
                    return (function (t, e, n) {
                      var r = ''
                      n = Math.min(t.length, n)
                      for (var i = e; i < n; ++i) r += String.fromCharCode(t[i])
                      return r
                    })(this, e, n)
                  case 'base64':
                    return (
                      (r = this),
                      (a = n),
                      0 === (i = e) && a === r.length
                        ? s.fromByteArray(r)
                        : s.fromByteArray(r.slice(i, a))
                    )
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return (function (t, e, n) {
                      for (
                        var r = t.slice(e, n), i = '', a = 0;
                        a < r.length;
                        a += 2
                      )
                        i += String.fromCharCode(r[a] + 256 * r[a + 1])
                      return i
                    })(this, e, n)
                  default:
                    if (o) throw new TypeError('Unknown encoding: ' + t)
                    ;(t = (t + '').toLowerCase()), (o = !0)
                }
            }
            function d(t, e, n) {
              var r = t[e]
              ;(t[e] = t[n]), (t[n] = r)
            }
            function f(t, e, n, r, i) {
              if (0 === t.length) return -1
              if (
                ('string' == typeof n
                  ? ((r = n), (n = 0))
                  : 2147483647 < n
                    ? (n = 2147483647)
                    : n < -2147483648 && (n = -2147483648),
                C((n = +n)) && (n = i ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length)
              ) {
                if (i) return -1
                n = t.length - 1
              } else if (n < 0) {
                if (!i) return -1
                n = 0
              }
              if (('string' == typeof e && (e = u.from(e, r)), u.isBuffer(e)))
                return 0 === e.length ? -1 : m(t, e, n, r, i)
              if ('number' == typeof e)
                return (
                  (e &= 255),
                  'function' == typeof Uint8Array.prototype.indexOf
                    ? i
                      ? Uint8Array.prototype.indexOf.call(t, e, n)
                      : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                    : m(t, [e], n, r, i)
                )
              throw new TypeError('val must be string, number or Buffer')
            }
            function m(t, e, n, r, i) {
              var a = 1,
                o = t.length,
                s = e.length
              if (
                void 0 !== r &&
                ('ucs2' === (r = String(r).toLowerCase()) ||
                  'ucs-2' === r ||
                  'utf16le' === r ||
                  'utf-16le' === r)
              ) {
                if (t.length < 2 || e.length < 2) return -1
                ;(o /= a = 2), (s /= 2), (n /= 2)
              }
              function c(t, e) {
                return 1 === a ? t[e] : t.readUInt16BE(e * a)
              }
              if (i)
                for (var l = -1, h = n; h < o; h++)
                  if (c(t, h) === c(e, -1 === l ? 0 : h - l)) {
                    if ((-1 === l && (l = h), h - l + 1 === s)) return l * a
                  } else -1 !== l && (h -= h - l), (l = -1)
              else
                for (o < n + s && (n = o - s), h = n; 0 <= h; h--) {
                  for (var u = !0, p = 0; p < s; p++)
                    if (c(t, h + p) !== c(e, p)) {
                      u = !1
                      break
                    }
                  if (u) return h
                }
              return -1
            }
            function v(t, e, n, r) {
              return L(
                (function (t) {
                  for (var e = [], n = 0; n < t.length; ++n)
                    e.push(255 & t.charCodeAt(n))
                  return e
                })(e),
                t,
                n,
                r,
              )
            }
            function g(t, e, n, r) {
              return L(
                (function (t, e) {
                  for (
                    var n, r, i, a = [], o = 0;
                    o < t.length && !((e -= 2) < 0);
                    ++o
                  )
                    (n = t.charCodeAt(o)),
                      (r = n >> 8),
                      (i = n % 256),
                      a.push(i),
                      a.push(r)
                  return a
                })(e, t.length - n),
                t,
                n,
                r,
              )
            }
            function y(t, e, n) {
              n = Math.min(t.length, n)
              for (var r = [], i = e; i < n; ) {
                var a,
                  o,
                  s,
                  c,
                  l = t[i],
                  h = null,
                  u = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1
                if (i + u <= n)
                  switch (u) {
                    case 1:
                      l < 128 && (h = l)
                      break
                    case 2:
                      128 == (192 & (a = t[i + 1])) &&
                        127 < (c = ((31 & l) << 6) | (63 & a)) &&
                        (h = c)
                      break
                    case 3:
                      ;(a = t[i + 1]),
                        (o = t[i + 2]),
                        128 == (192 & a) &&
                          128 == (192 & o) &&
                          2047 <
                            (c =
                              ((15 & l) << 12) | ((63 & a) << 6) | (63 & o)) &&
                          (c < 55296 || 57343 < c) &&
                          (h = c)
                      break
                    case 4:
                      ;(a = t[i + 1]),
                        (o = t[i + 2]),
                        (s = t[i + 3]),
                        128 == (192 & a) &&
                          128 == (192 & o) &&
                          128 == (192 & s) &&
                          65535 <
                            (c =
                              ((15 & l) << 18) |
                              ((63 & a) << 12) |
                              ((63 & o) << 6) |
                              (63 & s)) &&
                          c < 1114112 &&
                          (h = c)
                  }
                null === h
                  ? ((h = 65533), (u = 1))
                  : 65535 < h &&
                    ((h -= 65536),
                    r.push(((h >>> 10) & 1023) | 55296),
                    (h = 56320 | (1023 & h))),
                  r.push(h),
                  (i += u)
              }
              return (function (t) {
                var e = t.length
                if (e <= x) return String.fromCharCode.apply(String, t)
                var n = '',
                  r = 0
                for (; r < e; )
                  n += String.fromCharCode.apply(String, t.slice(r, (r += x)))
                return n
              })(r)
            }
            ;(P.kMaxLength = n),
              (u.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var t = new Uint8Array(1)
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42
                      },
                    }),
                    42 === t.foo()
                  )
                } catch (t) {
                  return !1
                }
              })()) ||
                'undefined' == typeof console ||
                'function' != typeof console.error ||
                console.error(
                  'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
                ),
              Object.defineProperty(u.prototype, 'parent', {
                enumerable: !0,
                get: function () {
                  if (u.isBuffer(this)) return this.buffer
                },
              }),
              Object.defineProperty(u.prototype, 'offset', {
                enumerable: !0,
                get: function () {
                  if (u.isBuffer(this)) return this.byteOffset
                },
              }),
              'undefined' != typeof Symbol &&
                null != Symbol.species &&
                u[Symbol.species] === u &&
                Object.defineProperty(u, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1,
                }),
              (u.poolSize = 8192),
              (u.from = r),
              (u.prototype.__proto__ = Uint8Array.prototype),
              (u.__proto__ = Uint8Array),
              (u.alloc = function (t, e, n) {
                return (
                  (i = e),
                  (a = n),
                  c((r = t)),
                  r <= 0 || void 0 === i
                    ? o(r)
                    : 'string' == typeof a
                      ? o(r).fill(i, a)
                      : o(r).fill(i)
                )
                var r, i, a
              }),
              (u.allocUnsafe = i),
              (u.allocUnsafeSlow = i),
              (u.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
              }),
              (u.compare = function (t, e) {
                if (
                  (R(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
                  R(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
                  !u.isBuffer(t) || !u.isBuffer(e))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                  )
                if (t === e) return 0
                for (
                  var n = t.length, r = e.length, i = 0, a = Math.min(n, r);
                  i < a;
                  ++i
                )
                  if (t[i] !== e[i]) {
                    ;(n = t[i]), (r = e[i])
                    break
                  }
                return n < r ? -1 : r < n ? 1 : 0
              }),
              (u.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return !0
                  default:
                    return !1
                }
              }),
              (u.concat = function (t, e) {
                if (!Array.isArray(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers',
                  )
                if (0 === t.length) return u.alloc(0)
                if (void 0 === e)
                  for (i = e = 0; i < t.length; ++i) e += t[i].length
                for (
                  var n = u.allocUnsafe(e), r = 0, i = 0;
                  i < t.length;
                  ++i
                ) {
                  var a = t[i]
                  if ((R(a, Uint8Array) && (a = u.from(a)), !u.isBuffer(a)))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers',
                    )
                  a.copy(n, r), (r += a.length)
                }
                return n
              }),
              (u.byteLength = p),
              (u.prototype._isBuffer = !0),
              (u.prototype.swap16 = function () {
                var t = this.length
                if (t % 2 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 16-bits',
                  )
                for (var e = 0; e < t; e += 2) d(this, e, e + 1)
                return this
              }),
              (u.prototype.swap32 = function () {
                var t = this.length
                if (t % 4 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 32-bits',
                  )
                for (var e = 0; e < t; e += 4)
                  d(this, e, e + 3), d(this, e + 1, e + 2)
                return this
              }),
              (u.prototype.swap64 = function () {
                var t = this.length
                if (t % 8 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 64-bits',
                  )
                for (var e = 0; e < t; e += 8)
                  d(this, e, e + 7),
                    d(this, e + 1, e + 6),
                    d(this, e + 2, e + 5),
                    d(this, e + 3, e + 4)
                return this
              }),
              (u.prototype.toLocaleString = u.prototype.toString =
                function () {
                  var t = this.length
                  return 0 === t
                    ? ''
                    : 0 === arguments.length
                      ? y(this, 0, t)
                      : e.apply(this, arguments)
                }),
              (u.prototype.equals = function (t) {
                if (!u.isBuffer(t))
                  throw new TypeError('Argument must be a Buffer')
                return this === t || 0 === u.compare(this, t)
              }),
              (u.prototype.inspect = function () {
                var t = '',
                  e = P.INSPECT_MAX_BYTES,
                  t = this.toString('hex', 0, e)
                    .replace(/(.{2})/g, '$1 ')
                    .trim()
                return this.length > e && (t += ' ... '), '<Buffer ' + t + '>'
              }),
              (u.prototype.compare = function (t, e, n, r, i) {
                if (
                  (R(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
                  !u.isBuffer(t))
                )
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof t,
                  )
                if (
                  (void 0 === e && (e = 0),
                  void 0 === n && (n = t ? t.length : 0),
                  void 0 === r && (r = 0),
                  void 0 === i && (i = this.length),
                  e < 0 || n > t.length || r < 0 || i > this.length)
                )
                  throw new RangeError('out of range index')
                if (i <= r && n <= e) return 0
                if (i <= r) return -1
                if (n <= e) return 1
                if (this === t) return 0
                for (
                  var a = (i >>>= 0) - (r >>>= 0),
                    o = (n >>>= 0) - (e >>>= 0),
                    s = Math.min(a, o),
                    c = this.slice(r, i),
                    l = t.slice(e, n),
                    h = 0;
                  h < s;
                  ++h
                )
                  if (c[h] !== l[h]) {
                    ;(a = c[h]), (o = l[h])
                    break
                  }
                return a < o ? -1 : o < a ? 1 : 0
              }),
              (u.prototype.includes = function (t, e, n) {
                return -1 !== this.indexOf(t, e, n)
              }),
              (u.prototype.indexOf = function (t, e, n) {
                return f(this, t, e, n, !0)
              }),
              (u.prototype.lastIndexOf = function (t, e, n) {
                return f(this, t, e, n, !1)
              }),
              (u.prototype.write = function (t, e, n, r) {
                if (void 0 === e) (r = 'utf8'), (n = this.length), (e = 0)
                else if (void 0 === n && 'string' == typeof e)
                  (r = e), (n = this.length), (e = 0)
                else {
                  if (!isFinite(e))
                    throw new Error(
                      'Buffer.write(string, encoding, offset[, length]) is no longer supported',
                    )
                  ;(e >>>= 0),
                    isFinite(n)
                      ? ((n >>>= 0), void 0 === r && (r = 'utf8'))
                      : ((r = n), (n = void 0))
                }
                var i = this.length - e
                if (
                  ((void 0 === n || i < n) && (n = i),
                  (0 < t.length && (n < 0 || e < 0)) || e > this.length)
                )
                  throw new RangeError('Attempt to write outside buffer bounds')
                r = r || 'utf8'
                for (var a, o, s, c, l, h, u = !1; ; )
                  switch (r) {
                    case 'hex':
                      return (function (t, e, n, r) {
                        n = Number(n) || 0
                        var i = t.length - n
                        ;(!r || i < (r = Number(r))) && (r = i)
                        var a = e.length
                        a / 2 < r && (r = a / 2)
                        for (var o = 0; o < r; ++o) {
                          var s = parseInt(e.substr(2 * o, 2), 16)
                          if (C(s)) return o
                          t[n + o] = s
                        }
                        return o
                      })(this, t, e, n)
                    case 'utf8':
                    case 'utf-8':
                      return (
                        (l = e),
                        (h = n),
                        L(T(t, (c = this).length - l), c, l, h)
                      )
                    case 'ascii':
                      return v(this, t, e, n)
                    case 'latin1':
                    case 'binary':
                      return v(this, t, e, n)
                    case 'base64':
                      return (a = this), (o = e), (s = n), L(A(t), a, o, s)
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return g(this, t, e, n)
                    default:
                      if (u) throw new TypeError('Unknown encoding: ' + r)
                      ;(r = ('' + r).toLowerCase()), (u = !0)
                  }
              }),
              (u.prototype.toJSON = function () {
                return {
                  type: 'Buffer',
                  data: Array.prototype.slice.call(this._arr || this, 0),
                }
              })
            var x = 4096
            function b(t, e, n) {
              if (t % 1 != 0 || t < 0)
                throw new RangeError('offset is not uint')
              if (n < t + e)
                throw new RangeError('Trying to access beyond buffer length')
            }
            function _(t, e, n, r, i, a) {
              if (!u.isBuffer(t))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance',
                )
              if (i < e || e < a)
                throw new RangeError('"value" argument is out of bounds')
              if (n + r > t.length) throw new RangeError('Index out of range')
            }
            function w(t, e, n, r) {
              if (n + r > t.length) throw new RangeError('Index out of range')
              if (n < 0) throw new RangeError('Index out of range')
            }
            function M(t, e, n, r, i) {
              return (
                (e = +e),
                (n >>>= 0),
                i || w(t, 0, n, 4),
                a.write(t, e, n, r, 23, 4),
                n + 4
              )
            }
            function S(t, e, n, r, i) {
              return (
                (e = +e),
                (n >>>= 0),
                i || w(t, 0, n, 8),
                a.write(t, e, n, r, 52, 8),
                n + 8
              )
            }
            ;(u.prototype.slice = function (t, e) {
              var n = this.length
              ;(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n),
                (e = void 0 === e ? n : ~~e) < 0
                  ? (e += n) < 0 && (e = 0)
                  : n < e && (e = n),
                e < t && (e = t)
              var r = this.subarray(t, e)
              return (r.__proto__ = u.prototype), r
            }),
              (u.prototype.readUIntLE = function (t, e, n) {
                ;(t >>>= 0), (e >>>= 0), n || b(t, e, this.length)
                for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                  r += this[t + a] * i
                return r
              }),
              (u.prototype.readUIntBE = function (t, e, n) {
                ;(t >>>= 0), (e >>>= 0), n || b(t, e, this.length)
                for (var r = this[t + --e], i = 1; 0 < e && (i *= 256); )
                  r += this[t + --e] * i
                return r
              }),
              (u.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || b(t, 1, this.length), this[t]
              }),
              (u.prototype.readUInt16LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                )
              }),
              (u.prototype.readUInt16BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                )
              }),
              (u.prototype.readUInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                )
              }),
              (u.prototype.readUInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                )
              }),
              (u.prototype.readIntLE = function (t, e, n) {
                ;(t >>>= 0), (e >>>= 0), n || b(t, e, this.length)
                for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
                  r += this[t + a] * i
                return (i *= 128) <= r && (r -= Math.pow(2, 8 * e)), r
              }),
              (u.prototype.readIntBE = function (t, e, n) {
                ;(t >>>= 0), (e >>>= 0), n || b(t, e, this.length)
                for (var r = e, i = 1, a = this[t + --r]; 0 < r && (i *= 256); )
                  a += this[t + --r] * i
                return (i *= 128) <= a && (a -= Math.pow(2, 8 * e)), a
              }),
              (u.prototype.readInt8 = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 1, this.length),
                  128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                )
              }),
              (u.prototype.readInt16LE = function (t, e) {
                ;(t >>>= 0), e || b(t, 2, this.length)
                var n = this[t] | (this[t + 1] << 8)
                return 32768 & n ? 4294901760 | n : n
              }),
              (u.prototype.readInt16BE = function (t, e) {
                ;(t >>>= 0), e || b(t, 2, this.length)
                var n = this[t + 1] | (this[t] << 8)
                return 32768 & n ? 4294901760 | n : n
              }),
              (u.prototype.readInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  this[t] |
                    (this[t + 1] << 8) |
                    (this[t + 2] << 16) |
                    (this[t + 3] << 24)
                )
              }),
              (u.prototype.readInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  (this[t] << 24) |
                    (this[t + 1] << 16) |
                    (this[t + 2] << 8) |
                    this[t + 3]
                )
              }),
              (u.prototype.readFloatLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  a.read(this, t, !0, 23, 4)
                )
              }),
              (u.prototype.readFloatBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 4, this.length),
                  a.read(this, t, !1, 23, 4)
                )
              }),
              (u.prototype.readDoubleLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 8, this.length),
                  a.read(this, t, !0, 52, 8)
                )
              }),
              (u.prototype.readDoubleBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || b(t, 8, this.length),
                  a.read(this, t, !1, 52, 8)
                )
              }),
              (u.prototype.writeUIntLE = function (t, e, n, r) {
                ;(t = +t),
                  (e >>>= 0),
                  (n >>>= 0),
                  r || _(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                var i = 1,
                  a = 0
                for (this[e] = 255 & t; ++a < n && (i *= 256); )
                  this[e + a] = (t / i) & 255
                return e + n
              }),
              (u.prototype.writeUIntBE = function (t, e, n, r) {
                ;(t = +t),
                  (e >>>= 0),
                  (n >>>= 0),
                  r || _(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                var i = n - 1,
                  a = 1
                for (this[e + i] = 255 & t; 0 <= --i && (a *= 256); )
                  this[e + i] = (t / a) & 255
                return e + n
              }),
              (u.prototype.writeUInt8 = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                )
              }),
              (u.prototype.writeUInt16LE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                )
              }),
              (u.prototype.writeUInt16BE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                )
              }),
              (u.prototype.writeUInt32LE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                )
              }),
              (u.prototype.writeUInt32BE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                )
              }),
              (u.prototype.writeIntLE = function (t, e, n, r) {
                var i
                ;(t = +t),
                  (e >>>= 0),
                  r || _(this, t, e, n, (i = Math.pow(2, 8 * n - 1)) - 1, -i)
                var a = 0,
                  o = 1,
                  s = 0
                for (this[e] = 255 & t; ++a < n && (o *= 256); )
                  t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1),
                    (this[e + a] = (((t / o) >> 0) - s) & 255)
                return e + n
              }),
              (u.prototype.writeIntBE = function (t, e, n, r) {
                var i
                ;(t = +t),
                  (e >>>= 0),
                  r || _(this, t, e, n, (i = Math.pow(2, 8 * n - 1)) - 1, -i)
                var a = n - 1,
                  o = 1,
                  s = 0
                for (this[e + a] = 255 & t; 0 <= --a && (o *= 256); )
                  t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1),
                    (this[e + a] = (((t / o) >> 0) - s) & 255)
                return e + n
              }),
              (u.prototype.writeInt8 = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 1, 127, -128),
                  t < 0 && (t = 255 + t + 1),
                  (this[e] = 255 & t),
                  e + 1
                )
              }),
              (u.prototype.writeInt16LE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 2, 32767, -32768),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                )
              }),
              (u.prototype.writeInt16BE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 2, 32767, -32768),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                )
              }),
              (u.prototype.writeInt32LE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                )
              }),
              (u.prototype.writeInt32BE = function (t, e, n) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  n || _(this, t, e, 4, 2147483647, -2147483648),
                  t < 0 && (t = 4294967295 + t + 1),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                )
              }),
              (u.prototype.writeFloatLE = function (t, e, n) {
                return M(this, t, e, !0, n)
              }),
              (u.prototype.writeFloatBE = function (t, e, n) {
                return M(this, t, e, !1, n)
              }),
              (u.prototype.writeDoubleLE = function (t, e, n) {
                return S(this, t, e, !0, n)
              }),
              (u.prototype.writeDoubleBE = function (t, e, n) {
                return S(this, t, e, !1, n)
              }),
              (u.prototype.copy = function (t, e, n, r) {
                if (!u.isBuffer(t))
                  throw new TypeError('argument should be a Buffer')
                if (
                  ((n = n || 0),
                  r || 0 === r || (r = this.length),
                  e >= t.length && (e = t.length),
                  (e = e || 0),
                  0 < r && r < n && (r = n),
                  r === n)
                )
                  return 0
                if (0 === t.length || 0 === this.length) return 0
                if (e < 0) throw new RangeError('targetStart out of bounds')
                if (n < 0 || n >= this.length)
                  throw new RangeError('Index out of range')
                if (r < 0) throw new RangeError('sourceEnd out of bounds')
                r > this.length && (r = this.length),
                  t.length - e < r - n && (r = t.length - e + n)
                var i = r - n
                if (
                  this === t &&
                  'function' == typeof Uint8Array.prototype.copyWithin
                )
                  this.copyWithin(e, n, r)
                else if (this === t && n < e && e < r)
                  for (var a = i - 1; 0 <= a; --a) t[a + e] = this[a + n]
                else Uint8Array.prototype.set.call(t, this.subarray(n, r), e)
                return i
              }),
              (u.prototype.fill = function (t, e, n, r) {
                if ('string' == typeof t) {
                  if (
                    ('string' == typeof e
                      ? ((r = e), (e = 0), (n = this.length))
                      : 'string' == typeof n && ((r = n), (n = this.length)),
                    void 0 !== r && 'string' != typeof r)
                  )
                    throw new TypeError('encoding must be a string')
                  if ('string' == typeof r && !u.isEncoding(r))
                    throw new TypeError('Unknown encoding: ' + r)
                  var i
                  1 === t.length &&
                    ((i = t.charCodeAt(0)),
                    (('utf8' === r && i < 128) || 'latin1' === r) && (t = i))
                } else 'number' == typeof t && (t &= 255)
                if (e < 0 || this.length < e || this.length < n)
                  throw new RangeError('Out of range index')
                if (n <= e) return this
                var a
                if (
                  ((e >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  'number' == typeof (t = t || 0))
                )
                  for (a = e; a < n; ++a) this[a] = t
                else {
                  var o = u.isBuffer(t) ? t : u.from(t, r),
                    s = o.length
                  if (0 === s)
                    throw new TypeError(
                      'The value "' + t + '" is invalid for argument "value"',
                    )
                  for (a = 0; a < n - e; ++a) this[a + e] = o[a % s]
                }
                return this
              })
            var E = /[^+/0-9A-Za-z-_]/g
            function T(t, e) {
              var n
              e = e || 1 / 0
              for (var r = t.length, i = null, a = [], o = 0; o < r; ++o) {
                if (55295 < (n = t.charCodeAt(o)) && n < 57344) {
                  if (!i) {
                    if (56319 < n) {
                      ;-1 < (e -= 3) && a.push(239, 191, 189)
                      continue
                    }
                    if (o + 1 === r) {
                      ;-1 < (e -= 3) && a.push(239, 191, 189)
                      continue
                    }
                    i = n
                    continue
                  }
                  if (n < 56320) {
                    ;-1 < (e -= 3) && a.push(239, 191, 189), (i = n)
                    continue
                  }
                  n = 65536 + (((i - 55296) << 10) | (n - 56320))
                } else i && -1 < (e -= 3) && a.push(239, 191, 189)
                if (((i = null), n < 128)) {
                  if (--e < 0) break
                  a.push(n)
                } else if (n < 2048) {
                  if ((e -= 2) < 0) break
                  a.push((n >> 6) | 192, (63 & n) | 128)
                } else if (n < 65536) {
                  if ((e -= 3) < 0) break
                  a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
                } else {
                  if (!(n < 1114112)) throw new Error('Invalid code point')
                  if ((e -= 4) < 0) break
                  a.push(
                    (n >> 18) | 240,
                    ((n >> 12) & 63) | 128,
                    ((n >> 6) & 63) | 128,
                    (63 & n) | 128,
                  )
                }
              }
              return a
            }
            function A(t) {
              return s.toByteArray(
                (function (t) {
                  if (
                    (t = (t = t.split('=')[0]).trim().replace(E, '')).length < 2
                  )
                    return ''
                  for (; t.length % 4 != 0; ) t += '='
                  return t
                })(t),
              )
            }
            function L(t, e, n, r) {
              for (
                var i = 0;
                i < r && !(i + n >= e.length || i >= t.length);
                ++i
              )
                e[i + n] = t[i]
              return i
            }
            function R(t, e) {
              return (
                t instanceof e ||
                (null != t &&
                  null != t.constructor &&
                  null != t.constructor.name &&
                  t.constructor.name === e.name)
              )
            }
            function C(t) {
              return t != t
            }
          }).call(this, t('buffer').Buffer)
        },
        { 'base64-js': 3, 'buffer': 5, 'ieee754': 8 },
      ],
      6: [
        function (t, e, n) {
          e.exports = function (t) {
            switch (t) {
              case 'int8':
                return Int8Array
              case 'int16':
                return Int16Array
              case 'int32':
                return Int32Array
              case 'uint8':
                return Uint8Array
              case 'uint16':
                return Uint16Array
              case 'uint32':
                return Uint32Array
              case 'float32':
                return Float32Array
              case 'float64':
                return Float64Array
              case 'array':
                return Array
              case 'uint8_clamped':
                return Uint8ClampedArray
            }
          }
        },
        {},
      ],
      7: [
        function (t, n, e) {
          ;(function (t) {
            var e =
              'undefined' != typeof window
                ? window
                : void 0 !== t
                  ? t
                  : 'undefined' != typeof self
                    ? self
                    : {}
            n.exports = e
          }).call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                  ? window
                  : {},
          )
        },
        {},
      ],
      8: [
        function (t, e, n) {
          ;(n.read = function (t, e, n, r, i) {
            var a,
              o,
              s = 8 * i - r - 1,
              c = (1 << s) - 1,
              l = c >> 1,
              h = -7,
              u = n ? i - 1 : 0,
              p = n ? -1 : 1,
              d = t[e + u]
            for (
              u += p, a = d & ((1 << -h) - 1), d >>= -h, h += s;
              0 < h;
              a = 256 * a + t[e + u], u += p, h -= 8
            );
            for (
              o = a & ((1 << -h) - 1), a >>= -h, h += r;
              0 < h;
              o = 256 * o + t[e + u], u += p, h -= 8
            );
            if (0 === a) a = 1 - l
            else {
              if (a === c) return o ? NaN : (1 / 0) * (d ? -1 : 1)
              ;(o += Math.pow(2, r)), (a -= l)
            }
            return (d ? -1 : 1) * o * Math.pow(2, a - r)
          }),
            (n.write = function (t, e, n, r, i, a) {
              var o,
                s,
                c,
                l = 8 * a - i - 1,
                h = (1 << l) - 1,
                u = h >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = r ? 0 : a - 1,
                f = r ? 1 : -1,
                m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((s = isNaN(e) ? 1 : 0), (o = h))
                    : ((o = Math.floor(Math.log(e) / Math.LN2)),
                      e * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                      2 <=
                        (e += 1 <= o + u ? p / c : p * Math.pow(2, 1 - u)) *
                          c && (o++, (c /= 2)),
                      h <= o + u
                        ? ((s = 0), (o = h))
                        : 1 <= o + u
                          ? ((s = (e * c - 1) * Math.pow(2, i)), (o += u))
                          : ((s = e * Math.pow(2, u - 1) * Math.pow(2, i)),
                            (o = 0)));
                8 <= i;
                t[n + d] = 255 & s, d += f, s /= 256, i -= 8
              );
              for (
                o = (o << i) | s, l += i;
                0 < l;
                t[n + d] = 255 & o, d += f, o /= 256, l -= 8
              );
              t[n + d - f] |= 128 * m
            })
        },
        {},
      ],
      9: [
        function (t, e, n) {
          'function' == typeof Object.create
            ? (e.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })))
              })
            : (e.exports = function (t, e) {
                var n
                e &&
                  ((t.super_ = e),
                  ((n = function () {}).prototype = e.prototype),
                  (t.prototype = new n()),
                  (t.prototype.constructor = t))
              })
        },
        {},
      ],
      10: [
        function (t, e, n) {
          function r(t) {
            return (
              !!t.constructor &&
              'function' == typeof t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            )
          }
          e.exports = function (t) {
            return (
              null != t &&
              (r(t) ||
                ('function' == typeof (e = t).readFloatLE &&
                  'function' == typeof e.slice &&
                  r(e.slice(0, 0))) ||
                !!t._isBuffer)
            )
            var e
          }
        },
        {},
      ],
      11: [
        function (t, e, n) {
          e.exports = function (t) {
            if (!t) return !1
            var e = r.call(t)
            return (
              '[object Function]' === e ||
              ('function' == typeof t && '[object RegExp]' !== e) ||
              ('undefined' != typeof window &&
                (t === window.setTimeout ||
                  t === window.alert ||
                  t === window.confirm ||
                  t === window.prompt))
            )
          }
          var r = Object.prototype.toString
        },
        {},
      ],
      12: [
        function (t, e, n) {
          var o = t('word-wrapper'),
            s = t('xtend'),
            c = t('as-number'),
            l = [
              'x',
              'e',
              'a',
              'o',
              'n',
              's',
              'r',
              'c',
              'u',
              'm',
              'v',
              'w',
              'z',
            ],
            i = ['m', 'w'],
            b = [
              'H',
              'I',
              'N',
              'E',
              'F',
              'K',
              'L',
              'T',
              'U',
              'V',
              'W',
              'X',
              'Y',
              'Z',
            ],
            r = '\t'.charCodeAt(0),
            a = ' '.charCodeAt(0)
          function h(t) {
            ;(this.glyphs = []),
              (this._measure = this.computeMetrics.bind(this)),
              this.update(t)
          }
          function u(t, e) {
            if (!t.chars || 0 === t.chars.length) return null
            var n = w(t.chars, e)
            return 0 <= n ? t.chars[n] : null
          }
          function _(t, e, n) {
            if (!t.kernings || 0 === t.kernings.length) return 0
            for (var r = t.kernings, i = 0; i < r.length; i++) {
              var a = r[i]
              if (a.first === e && a.second === n) return a.amount
            }
            return 0
          }
          function w(t, e, n) {
            for (var r = (n = n || 0); r < t.length; r++)
              if (t[r].id === e) return r
            return -1
          }
          ;(e.exports = function (t) {
            return new h(t)
          }),
            (h.prototype.update = function (t) {
              if (
                ((t = s({ measure: this._measure }, t)),
                (this._opt = t),
                (this._opt.tabSize = c(this._opt.tabSize, 4)),
                !t.font)
              )
                throw new Error('must provide a valid bitmap font')
              var h = this.glyphs,
                u = t.text || '',
                p = t.font
              this._setupSpaceGlyphs(p)
              var e = o.lines(u, t),
                n = t.width || 0
              h.length = 0
              var d = e.reduce(function (t, e) {
                  return Math.max(t, e.width, n)
                }, 0),
                f = 0,
                m = 0,
                v = c(t.lineHeight, p.common.lineHeight),
                r = p.common.base,
                i = v - r,
                g = t.letterSpacing || 0,
                a = v * e.length - i,
                y = (function (t) {
                  {
                    if ('center' === t) return 1
                    if ('right' === t) return 2
                  }
                  return 0
                })(this._opt.align)
              ;(m -= a),
                (this._width = d),
                (this._height = a),
                (this._descender = v - r),
                (this._baseline = r),
                (this._xHeight = (function (t) {
                  for (var e = 0; e < l.length; e++) {
                    var n = l[e].charCodeAt(0),
                      r = w(t.chars, n)
                    if (0 <= r) return t.chars[r].height
                  }
                  return 0
                })(p)),
                (this._capHeight = (function (t) {
                  for (var e = 0; e < b.length; e++) {
                    var n = b[e].charCodeAt(0),
                      r = w(t.chars, n)
                    if (0 <= r) return t.chars[r].height
                  }
                  return 0
                })(p)),
                (this._lineHeight = v),
                (this._ascender = v - i - this._xHeight)
              var x = this
              e.forEach(function (t, e) {
                for (
                  var n, r = t.start, i = t.end, a = t.width, o = r;
                  o < i;
                  o++
                ) {
                  var s,
                    c = u.charCodeAt(o),
                    l = x.getGlyph(p, c)
                  l &&
                    (n && (f += _(p, n.id, l.id)),
                    (s = f),
                    1 === y ? (s += (d - a) / 2) : 2 === y && (s += d - a),
                    h.push({ position: [s, m], data: l, index: o, line: e }),
                    (f += l.xadvance + g),
                    (n = l))
                }
                ;(m += v), (f = 0)
              }),
                (this._linesTotal = e.length)
            }),
            (h.prototype._setupSpaceGlyphs = function (t) {
              var e, n
              ;(this._fallbackSpaceGlyph = null),
                (this._fallbackTabGlyph = null),
                t.chars &&
                  0 !== t.chars.length &&
                  ((e =
                    u(t, a) ||
                    (function (t) {
                      for (var e = 0; e < i.length; e++) {
                        var n = i[e].charCodeAt(0),
                          r = w(t.chars, n)
                        if (0 <= r) return t.chars[r]
                      }
                      return 0
                    })(t) ||
                    t.chars[0]),
                  (n = this._opt.tabSize * e.xadvance),
                  (this._fallbackSpaceGlyph = e),
                  (this._fallbackTabGlyph = s(e, {
                    x: 0,
                    y: 0,
                    xadvance: n,
                    id: r,
                    xoffset: 0,
                    yoffset: 0,
                    width: 0,
                    height: 0,
                  })))
            }),
            (h.prototype.getGlyph = function (t, e) {
              var n = u(t, e)
              return (
                n ||
                (e === r
                  ? this._fallbackTabGlyph
                  : e === a
                    ? this._fallbackSpaceGlyph
                    : null)
              )
            }),
            (h.prototype.computeMetrics = function (t, e, n, r) {
              var i,
                a = this._opt.letterSpacing || 0,
                o = this._opt.font,
                s = 0,
                c = 0,
                l = 0
              if (!o.chars || 0 === o.chars.length)
                return { start: e, end: e, width: 0 }
              n = Math.min(t.length, n)
              for (var h = e; h < n; h++) {
                var u,
                  p = t.charCodeAt(h)
                if ((u = this.getGlyph(o, p))) {
                  u.xoffset
                  var d = (s += i ? _(o, i.id, u.id) : 0) + u.xadvance + a,
                    f = s + u.width
                  if (r <= f || r <= d) break
                  ;(s = d), (c = f), (i = u)
                }
                l++
              }
              return i && (c += i.xoffset), { start: e, end: e + l, width: c }
            }),
            [
              'width',
              'height',
              'descender',
              'ascender',
              'xHeight',
              'baseline',
              'capHeight',
              'lineHeight',
            ].forEach(function (t) {
              Object.defineProperty(h.prototype, t, {
                get: (function (t) {
                  return new Function(
                    [
                      'return function ' + t + '() {',
                      '  return this._' + t,
                      '}',
                    ].join('\n'),
                  )()
                })(t),
                configurable: !0,
              })
            })
        },
        { 'as-number': 2, 'word-wrapper': 25, 'xtend': 28 },
      ],
      13: [
        function (e, i, t) {
          ;(function (h) {
            function u() {}
            var t = e('xhr'),
              p = e('parse-bmfont-ascii'),
              d = e('parse-bmfont-xml'),
              f = e('parse-bmfont-binary'),
              m = e('./lib/is-binary'),
              n = e('xtend'),
              r =
                self.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
            i.exports = function (c, l) {
              ;(l = 'function' == typeof l ? l : u),
                (c = 'string' == typeof c ? { uri: c } : c || {}).binary &&
                  (c = (function (t) {
                    if (r) return n(t, { responseType: 'arraybuffer' })
                    if (void 0 === self.XMLHttpRequest)
                      throw new Error(
                        'your browser does not support XHR loading',
                      )
                    var e = new self.XMLHttpRequest()
                    return (
                      e.overrideMimeType('text/plain; charset=x-user-defined'),
                      n({ xhr: e }, t)
                    )
                  })(c)),
                t(c, function (t, e, n) {
                  if (t) return l(t)
                  if (!/^2/.test(e.statusCode))
                    return l(new Error('http status code: ' + e.statusCode))
                  if (!n) return l(new Error('no body result'))
                  var r,
                    i,
                    a = !1
                  ;(i = n),
                    '[object ArrayBuffer]' ===
                      Object.prototype.toString.call(i) &&
                      ((r = new Uint8Array(n)), (n = h.from(r, 'binary'))),
                    m(n) &&
                      ((a = !0),
                      'string' == typeof n && (n = h.from(n, 'binary'))),
                    a ||
                      (h.isBuffer(n) && (n = n.toString(c.encoding)),
                      (n = n.trim()))
                  try {
                    var o = e.headers['content-type'],
                      s = a
                        ? f(n)
                        : /json/.test(o) || '{' === n.charAt(0)
                          ? JSON.parse(n)
                          : (/xml/.test(o) || '<' === n.charAt(0) ? d : p)(n)
                  } catch (t) {
                    l(new Error('error parsing font ' + t.message)), (l = u)
                  }
                  l(null, s)
                })
            }
          }).call(this, e('buffer').Buffer)
        },
        {
          './lib/is-binary': 14,
          'buffer': 5,
          'parse-bmfont-ascii': 15,
          'parse-bmfont-binary': 16,
          'parse-bmfont-xml': 17,
          'xhr': 26,
          'xtend': 28,
        },
      ],
      14: [
        function (r, i, t) {
          ;(function (t) {
            var e = r('buffer-equal'),
              n = t.from([66, 77, 70, 3])
            i.exports = function (t) {
              return 'string' == typeof t
                ? 'BMF' === t.substring(0, 3)
                : 4 < t.length && e(t.slice(0, 4), n)
            }
          }).call(this, r('buffer').Buffer)
        },
        { 'buffer': 5, 'buffer-equal': 4 },
      ],
      15: [
        function (t, e, n) {
          function c(t) {
            return t && 0 !== t.length
              ? 0 === t.indexOf('"') || 0 === t.indexOf("'")
                ? t.substring(1, t.length - 1)
                : -1 !== t.indexOf(',')
                  ? t.split(',').map(function (t) {
                      return parseInt(t, 10)
                    })
                  : parseInt(t, 10)
              : ''
          }
          e.exports = function (t) {
            if (!t) throw new Error('no data provided')
            var e = { pages: [], chars: [], kernings: [] },
              n = (t = t.toString().trim()).split(/\r\n?|\n/g)
            if (0 === n.length) throw new Error('no data in BMFont file')
            for (var r = 0; r < n.length; r++) {
              var i = (function (t, e) {
                if (!(t = t.replace(/\t+/g, ' ').trim())) return null
                var n = t.indexOf(' ')
                if (-1 === n) throw new Error('no named row at line ' + e)
                var r = t.substring(0, n)
                t = (t = (t = (t = t.substring(n + 1)).replace(
                  /letter=[\'\"]\S+[\'\"]/gi,
                  '',
                )).split('=')).map(function (t) {
                  return t.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)
                })
                for (var i = [], a = 0; a < t.length; a++) {
                  var o = t[a]
                  0 === a
                    ? i.push({ key: o[0], data: '' })
                    : a === t.length - 1
                      ? (i[i.length - 1].data = c(o[0]))
                      : ((i[i.length - 1].data = c(o[0])),
                        i.push({ key: o[1], data: '' }))
                }
                var s = { key: r, data: {} }
                return (
                  i.forEach(function (t) {
                    s.data[t.key] = t.data
                  }),
                  s
                )
              })(n[r], r)
              if (i)
                if ('page' === i.key) {
                  if ('number' != typeof i.data.id)
                    throw new Error(
                      'malformed file at line ' + r + ' -- needs page id=N',
                    )
                  if ('string' != typeof i.data.file)
                    throw new Error(
                      'malformed file at line ' +
                        r +
                        ' -- needs page file="path"',
                    )
                  e.pages[i.data.id] = i.data.file
                } else
                  'chars' === i.key ||
                    'kernings' === i.key ||
                    ('char' === i.key
                      ? e.chars.push(i.data)
                      : 'kerning' === i.key
                        ? e.kernings.push(i.data)
                        : (e[i.key] = i.data))
            }
            return e
          }
        },
        {},
      ],
      16: [
        function (t, e, n) {
          var i = [66, 77, 70]
          function c(t, e) {
            for (var n = e; n < t.length && 0 !== t[n]; n++);
            return t.slice(e, n)
          }
          e.exports = function (n) {
            if (n.length < 6)
              throw new Error('invalid buffer length for BMFont')
            if (
              !i.every(function (t, e) {
                return n.readUInt8(e) === t
              })
            )
              throw new Error('BMFont missing BMF byte header')
            var t = 3
            if (3 < n.readUInt8(t++))
              throw new Error(
                'Only supports BMFont Binary v3 (BMFont App v1.10)',
              )
            for (var e = { kernings: [], chars: [] }, r = 0; r < 5; r++)
              t += (function (t, e, n) {
                if (n > e.length - 1) return 0
                var r = e.readUInt8(n++),
                  i = e.readInt32LE(n)
                switch (((n += 4), r)) {
                  case 1:
                    t.info = (function (t, e) {
                      var n = {}
                      n.size = t.readInt16LE(e)
                      var r = t.readUInt8(e + 2)
                      ;(n.smooth = (r >> 7) & 1),
                        (n.unicode = (r >> 6) & 1),
                        (n.italic = (r >> 5) & 1),
                        (n.bold = (r >> 4) & 1),
                        (r >> 3) & 1 && (n.fixedHeight = 1)
                      return (
                        (n.charset = t.readUInt8(e + 3) || ''),
                        (n.stretchH = t.readUInt16LE(e + 4)),
                        (n.aa = t.readUInt8(e + 6)),
                        (n.padding = [
                          t.readInt8(e + 7),
                          t.readInt8(e + 8),
                          t.readInt8(e + 9),
                          t.readInt8(e + 10),
                        ]),
                        (n.spacing = [t.readInt8(e + 11), t.readInt8(e + 12)]),
                        (n.outline = t.readUInt8(e + 13)),
                        (n.face = (function (t, e) {
                          return c(t, e).toString('utf8')
                        })(t, e + 14)),
                        n
                      )
                    })(e, n)
                    break
                  case 2:
                    t.common = (function (t, e) {
                      var n = {}
                      ;(n.lineHeight = t.readUInt16LE(e)),
                        (n.base = t.readUInt16LE(e + 2)),
                        (n.scaleW = t.readUInt16LE(e + 4)),
                        (n.scaleH = t.readUInt16LE(e + 6)),
                        (n.pages = t.readUInt16LE(e + 8))
                      t.readUInt8(e + 10)
                      return (
                        (n.packed = 0),
                        (n.alphaChnl = t.readUInt8(e + 11)),
                        (n.redChnl = t.readUInt8(e + 12)),
                        (n.greenChnl = t.readUInt8(e + 13)),
                        (n.blueChnl = t.readUInt8(e + 14)),
                        n
                      )
                    })(e, n)
                    break
                  case 3:
                    t.pages = (function (t, e, n) {
                      for (
                        var r = [],
                          i = c(t, e),
                          a = i.length + 1,
                          o = n / a,
                          s = 0;
                        s < o;
                        s++
                      )
                        (r[s] = t.slice(e, e + i.length).toString('utf8')),
                          (e += a)
                      return r
                    })(e, n, i)
                    break
                  case 4:
                    t.chars = (function (t, e, n) {
                      for (var r = [], i = n / 20, a = 0; a < i; a++) {
                        var o = {},
                          s = 20 * a
                        ;(o.id = t.readUInt32LE(e + 0 + s)),
                          (o.x = t.readUInt16LE(e + 4 + s)),
                          (o.y = t.readUInt16LE(e + 6 + s)),
                          (o.width = t.readUInt16LE(e + 8 + s)),
                          (o.height = t.readUInt16LE(e + 10 + s)),
                          (o.xoffset = t.readInt16LE(e + 12 + s)),
                          (o.yoffset = t.readInt16LE(e + 14 + s)),
                          (o.xadvance = t.readInt16LE(e + 16 + s)),
                          (o.page = t.readUInt8(e + 18 + s)),
                          (o.chnl = t.readUInt8(e + 19 + s)),
                          (r[a] = o)
                      }
                      return r
                    })(e, n, i)
                    break
                  case 5:
                    t.kernings = (function (t, e, n) {
                      for (var r = [], i = n / 10, a = 0; a < i; a++) {
                        var o = {},
                          s = 10 * a
                        ;(o.first = t.readUInt32LE(e + 0 + s)),
                          (o.second = t.readUInt32LE(e + 4 + s)),
                          (o.amount = t.readInt16LE(e + 8 + s)),
                          (r[a] = o)
                      }
                      return r
                    })(e, n, i)
                }
                return 5 + i
              })(e, n, t)
            return e
          }
        },
        {},
      ],
      17: [
        function (t, e, n) {
          var l = t('./parse-attribs'),
            h = t('xml-parse-from-string'),
            r = {
              scaleh: 'scaleH',
              scalew: 'scaleW',
              stretchh: 'stretchH',
              lineheight: 'lineHeight',
              alphachnl: 'alphaChnl',
              redchnl: 'redChnl',
              greenchnl: 'greenChnl',
              bluechnl: 'blueChnl',
            }
          function u(t) {
            return (function (t) {
              for (var e = [], n = 0; n < t.attributes.length; n++)
                e.push(t.attributes[n])
              return e
            })(t).reduce(function (t, e) {
              var n
              return (
                (t[((n = e.nodeName), r[n.toLowerCase()] || n)] = e.nodeValue),
                t
              )
            }, {})
          }
          e.exports = function (t) {
            t = t.toString()
            var o = h(t),
              s = { pages: [], chars: [], kernings: [] }
            ;['info', 'common'].forEach(function (t) {
              var e = o.getElementsByTagName(t)[0]
              e && (s[t] = l(u(e)))
            })
            var e = o.getElementsByTagName('pages')[0]
            if (!e) throw new Error('malformed file -- no <pages> element')
            for (
              var n = e.getElementsByTagName('page'), r = 0;
              r < n.length;
              r++
            ) {
              var i = n[r],
                a = parseInt(i.getAttribute('id'), 10),
                c = i.getAttribute('file')
              if (isNaN(a))
                throw new Error('malformed file -- page "id" attribute is NaN')
              if (!c)
                throw new Error('malformed file -- needs page "file" attribute')
              s.pages[parseInt(a, 10)] = c
            }
            return (
              ['chars', 'kernings'].forEach(function (t) {
                var e = o.getElementsByTagName(t)[0]
                if (e)
                  for (
                    var n = t.substring(0, t.length - 1),
                      r = e.getElementsByTagName(n),
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    var a = r[i]
                    s[t].push(l(u(a)))
                  }
              }),
              s
            )
          }
        },
        { './parse-attribs': 18, 'xml-parse-from-string': 27 },
      ],
      18: [
        function (t, e, n) {
          var r = 'chasrset'
          e.exports = function (t) {
            for (var e in (r in t && ((t.charset = t[r]), delete t[r]), t))
              'face' !== e &&
                'charset' !== e &&
                (t[e] =
                  'padding' === e || 'spacing' === e
                    ? t[e].split(',').map(function (t) {
                        return parseInt(t, 10)
                      })
                    : parseInt(t[e], 10))
            return t
          }
        },
        {},
      ],
      19: [
        function (t, e, n) {
          function l(t) {
            return t.replace(/^\s+|\s+$/g, '')
          }
          e.exports = function (t) {
            if (!t) return {}
            for (
              var e, n = {}, r = l(t).split('\n'), i = 0;
              i < r.length;
              i++
            ) {
              var a = r[i],
                o = a.indexOf(':'),
                s = l(a.slice(0, o)).toLowerCase(),
                c = l(a.slice(o + 1))
              void 0 === n[s]
                ? (n[s] = c)
                : ((e = n[s]),
                  '[object Array]' === Object.prototype.toString.call(e)
                    ? n[s].push(c)
                    : (n[s] = [n[s], c]))
            }
            return n
          }
        },
        {},
      ],
      20: [
        function (t, e, n) {
          var f = t('dtype'),
            m = t('an-array'),
            v = t('is-buffer'),
            g = [0, 2, 3],
            y = [2, 1, 3]
          e.exports = function (t, e) {
            ;(t && (m(t) || v(t))) || ((e = t || {}), (t = null))
            for (
              var n =
                  'string' ==
                  typeof (e = 'number' == typeof e ? { count: e } : e || {})
                    .type
                    ? e.type
                    : 'uint16',
                r = 'number' == typeof e.count ? e.count : 1,
                i = e.start || 0,
                a = !1 !== e.clockwise ? g : y,
                o = a[0],
                s = a[1],
                c = a[2],
                l = 6 * r,
                h = t || new (f(n))(l),
                u = 0,
                p = 0;
              u < l;
              u += 6, p += 4
            ) {
              var d = u + i
              ;(h[d + 0] = p + 0),
                (h[d + 1] = p + 1),
                (h[d + 2] = p + 2),
                (h[d + 3] = p + o),
                (h[d + 4] = p + s),
                (h[d + 5] = p + c)
            }
            return h
          }
        },
        { 'an-array': 1, 'dtype': 6, 'is-buffer': 10 },
      ],
      21: [
        function (t, e, n) {
          var h = t('layout-bmfont-text'),
            r = t('inherits'),
            u = t('quad-indices'),
            p = t('./lib/vertices'),
            i = t('./lib/utils'),
            a = THREE.BufferGeometry
          function o(t) {
            a.call(this),
              'string' == typeof t && (t = { text: t }),
              (this._opt = Object.assign({}, t)),
              t && this.update(t)
          }
          ;(e.exports = function (t) {
            return new o(t)
          }),
            r(o, a),
            (o.prototype.update = function (t) {
              if (
                ('string' == typeof t && (t = { text: t }),
                !(t = Object.assign({}, this._opt, t)).font)
              )
                throw new TypeError('must specify a { font } in options')
              this.layout = h(t)
              var e = !1 !== t.flipY,
                n = t.font,
                r = n.common.scaleW,
                i = n.common.scaleH,
                a = this.layout.glyphs.filter(function (t) {
                  var e = t.data
                  return 0 < e.width * e.height
                })
              this.visibleGlyphs = a
              var o,
                s = p.positions(a),
                c = p.uvs(a, r, i, e),
                l = u([], { clockwise: !0, type: 'uint16', count: a.length })
              this.setIndex(l),
                this.setAttribute('position', new THREE.BufferAttribute(s, 2)),
                this.setAttribute('uv', new THREE.BufferAttribute(c, 2)),
                !t.multipage && 'page' in this.attributes
                  ? this.removeAttribute('page')
                  : t.multipage &&
                    ((o = p.pages(a)),
                    this.setAttribute('page', new THREE.BufferAttribute(o, 1)))
            }),
            (o.prototype.computeBoundingSphere = function () {
              null === this.boundingSphere &&
                (this.boundingSphere = new THREE.Sphere())
              var t = this.attributes.position.array,
                e = this.attributes.position.itemSize
              if (!t || !e || t.length < 2)
                return (
                  (this.boundingSphere.radius = 0),
                  void this.boundingSphere.center.set(0, 0, 0)
                )
              i.computeSphere(t, this.boundingSphere),
                isNaN(this.boundingSphere.radius) &&
                  console.error(
                    'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                  )
            }),
            (o.prototype.computeBoundingBox = function () {
              null === this.boundingBox && (this.boundingBox = new THREE.Box3())
              var t = this.boundingBox,
                e = this.attributes.position.array,
                n = this.attributes.position.itemSize
              !e || !n || e.length < 2 ? t.makeEmpty() : i.computeBox(e, t)
            })
        },
        {
          './lib/utils': 22,
          './lib/vertices': 23,
          'inherits': 9,
          'layout-bmfont-text': 12,
          'quad-indices': 20,
        },
      ],
      22: [
        function (t, e, n) {
          var s = { min: [0, 0], max: [0, 0] }
          function c(t) {
            var e = t.length / 2
            ;(s.min[0] = t[0]),
              (s.min[1] = t[1]),
              (s.max[0] = t[0]),
              (s.max[1] = t[1])
            for (var n = 0; n < e; n++) {
              var r = t[2 * n + 0],
                i = t[2 * n + 1]
              ;(s.min[0] = Math.min(r, s.min[0])),
                (s.min[1] = Math.min(i, s.min[1])),
                (s.max[0] = Math.max(r, s.max[0])),
                (s.max[1] = Math.max(i, s.max[1]))
            }
          }
          ;(e.exports.computeBox = function (t, e) {
            c(t),
              e.min.set(s.min[0], s.min[1], 0),
              e.max.set(s.max[0], s.max[1], 0)
          }),
            (e.exports.computeSphere = function (t, e) {
              c(t)
              var n = s.min[0],
                r = s.min[1],
                i = s.max[0] - n,
                a = s.max[1] - r,
                o = Math.sqrt(i * i + a * a)
              e.center.set(n + i / 2, r + a / 2, 0), (e.radius = o / 2)
            })
        },
        {},
      ],
      23: [
        function (t, e, n) {
          ;(e.exports.pages = function (t) {
            var n = new Float32Array(4 * t.length * 1),
              r = 0
            return (
              t.forEach(function (t) {
                var e = t.data.page || 0
                ;(n[r++] = e), (n[r++] = e), (n[r++] = e), (n[r++] = e)
              }),
              n
            )
          }),
            (e.exports.uvs = function (t, c, l, h) {
              var u = new Float32Array(4 * t.length * 2),
                p = 0
              return (
                t.forEach(function (t) {
                  var e = t.data,
                    n = e.x + e.width,
                    r = e.y + e.height,
                    i = e.x / c,
                    a = e.y / l,
                    o = n / c,
                    s = r / l
                  h && ((a = (l - e.y) / l), (s = (l - r) / l)),
                    (u[p++] = i),
                    (u[p++] = a),
                    (u[p++] = i),
                    (u[p++] = s),
                    (u[p++] = o),
                    (u[p++] = s),
                    (u[p++] = o),
                    (u[p++] = a)
                }),
                u
              )
            }),
            (e.exports.positions = function (t) {
              var o = new Float32Array(4 * t.length * 2),
                s = 0
              return (
                t.forEach(function (t) {
                  var e = t.data,
                    n = t.position[0] + e.xoffset,
                    r = t.position[1] + e.yoffset,
                    i = e.width,
                    a = e.height
                  ;(o[s++] = n),
                    (o[s++] = r),
                    (o[s++] = n),
                    (o[s++] = r + a),
                    (o[s++] = n + i),
                    (o[s++] = r + a),
                    (o[s++] = n + i),
                    (o[s++] = r)
                }),
                o
              )
            })
        },
        {},
      ],
      24: [
        function (t, e, n) {
          e.exports = THREE
        },
        {},
      ],
      25: [
        function (t, n, e) {
          var u = /\n/,
            r = /\s/
          function d(t) {
            return r.test(t)
          }
          function s(t, e, n, r) {
            return { start: e, end: e + Math.min(r, n - e) }
          }
          ;(n.exports = function (e, t) {
            return n.exports
              .lines(e, t)
              .map(function (t) {
                return e.substring(t.start, t.end)
              })
              .join('\n')
          }),
            (n.exports.lines = function (t, e) {
              if (0 === (e = e || {}).width && 'nowrap' !== e.mode) return []
              t = t || ''
              var n = 'number' == typeof e.width ? e.width : Number.MAX_VALUE,
                r = Math.max(0, e.start || 0),
                i = 'number' == typeof e.end ? e.end : t.length,
                a = e.mode,
                o = e.measure || s
              return 'pre' === a
                ? (function (t, e, n, r, i) {
                    for (var a = [], o = n, s = n; s < r && s < e.length; s++) {
                      var c,
                        l = e.charAt(s),
                        h = u.test(l)
                      ;(!h && s !== r - 1) ||
                        ((c = t(e, o, h ? s : s + 1, i)),
                        a.push(c),
                        (o = s + 1))
                    }
                    return a
                  })(o, t, r, i, n)
                : (function (t, e, n, r, i, a) {
                    var o = [],
                      s = i
                    'nowrap' === a && (s = Number.MAX_VALUE)
                    for (; n < r && n < e.length; ) {
                      for (
                        var c = (function (t, e, n, r) {
                          var i = t.indexOf(e, n)
                          return -1 === i || r < i ? r : i
                        })(e, '\n', n, r);
                        n < c && d(e.charAt(n));

                      )
                        n++
                      var l,
                        h = t(e, n, c, s),
                        u = n + (h.end - h.start),
                        p = u + '\n'.length
                      if (u < c) {
                        for (; n < u && !d(e.charAt(u)); ) u--
                        if (u === n) n + '\n'.length < p && p--, (u = p)
                        else
                          for (p = u; n < u && d(e.charAt(u - '\n'.length)); )
                            u--
                      }
                      n <= u && ((l = t(e, n, u, s)), o.push(l)), (n = p)
                    }
                    return o
                  })(o, t, r, i, n, a)
            })
        },
        {},
      ],
      26: [
        function (t, e, n) {
          'use strict'
          var r = t('global/window'),
            i = t('is-function'),
            g = t('parse-headers'),
            a = t('xtend')
          function o(t, e, n) {
            var r = t
            return (
              i(e)
                ? ((n = e), 'string' == typeof t && (r = { uri: t }))
                : (r = a(e, { uri: t })),
              (r.callback = n),
              r
            )
          }
          function y(t, e, n) {
            return s((e = o(t, e, n)))
          }
          function s(r) {
            if (void 0 === r.callback)
              throw new Error('callback argument missing')
            var i = !1,
              a = function (t, e, n) {
                i || ((i = !0), r.callback(t, e, n))
              }
            function o() {
              var t = void 0,
                t = l.response
                  ? l.response
                  : l.responseText ||
                    (function (t) {
                      try {
                        if ('document' === t.responseType) return t.responseXML
                        var e =
                          t.responseXML &&
                          'parsererror' ===
                            t.responseXML.documentElement.nodeName
                        if ('' === t.responseType && !e) return t.responseXML
                      } catch (t) {}
                      return null
                    })(l)
              if (m)
                try {
                  t = JSON.parse(t)
                } catch (t) {}
              return t
            }
            function e(t) {
              return (
                clearTimeout(c),
                t instanceof Error ||
                  (t = new Error('' + (t || 'Unknown XMLHttpRequest Error'))),
                (t.statusCode = 0),
                a(t, v)
              )
            }
            function t() {
              if (!s) {
                var t
                clearTimeout(c),
                  (t =
                    r.useXDR && void 0 === l.status
                      ? 200
                      : 1223 === l.status
                        ? 204
                        : l.status)
                var e = v,
                  n = null
                return (
                  0 !== t
                    ? ((e = {
                        body: o(),
                        statusCode: t,
                        method: u,
                        headers: {},
                        url: h,
                        rawRequest: l,
                      }),
                      l.getAllResponseHeaders &&
                        (e.headers = g(l.getAllResponseHeaders())))
                    : (n = new Error('Internal XMLHttpRequest Error')),
                  a(n, e, e.body)
                )
              }
            }
            var n,
              s,
              c,
              l = r.xhr || null,
              h = ((l =
                l ||
                (r.cors || r.useXDR
                  ? new y.XDomainRequest()
                  : new y.XMLHttpRequest())).url = r.uri || r.url),
              u = (l.method = r.method || 'GET'),
              p = r.body || r.data,
              d = (l.headers = r.headers || {}),
              f = !!r.sync,
              m = !1,
              v = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: u,
                url: h,
                rawRequest: l,
              }
            if (
              ('json' in r &&
                !1 !== r.json &&
                ((m = !0),
                d.accept || d.Accept || (d.Accept = 'application/json'),
                'GET' !== u &&
                  'HEAD' !== u &&
                  (d['content-type'] ||
                    d['Content-Type'] ||
                    (d['Content-Type'] = 'application/json'),
                  (p = JSON.stringify(!0 === r.json ? p : r.json)))),
              (l.onreadystatechange = function () {
                4 === l.readyState && setTimeout(t, 0)
              }),
              (l.onload = t),
              (l.onerror = e),
              (l.onprogress = function () {}),
              (l.onabort = function () {
                s = !0
              }),
              (l.ontimeout = e),
              l.open(u, h, !f, r.username, r.password),
              f || (l.withCredentials = !!r.withCredentials),
              !f &&
                0 < r.timeout &&
                (c = setTimeout(function () {
                  var t
                  s ||
                    ((s = !0),
                    l.abort('timeout'),
                    ((t = new Error('XMLHttpRequest timeout')).code =
                      'ETIMEDOUT'),
                    e(t))
                }, r.timeout)),
              l.setRequestHeader)
            )
              for (n in d) d.hasOwnProperty(n) && l.setRequestHeader(n, d[n])
            else if (
              r.headers &&
              !(function (t) {
                for (var e in t) if (t.hasOwnProperty(e)) return
                return 1
              })(r.headers)
            )
              throw new Error(
                'Headers cannot be set on an XDomainRequest object',
              )
            return (
              'responseType' in r && (l.responseType = r.responseType),
              'beforeSend' in r &&
                'function' == typeof r.beforeSend &&
                r.beforeSend(l),
              l.send(p || null),
              l
            )
          }
          ;(e.exports = y),
            ((e.exports.default = y).XMLHttpRequest =
              r.XMLHttpRequest || function () {}),
            (y.XDomainRequest =
              'withCredentials' in new y.XMLHttpRequest()
                ? y.XMLHttpRequest
                : r.XDomainRequest),
            (function (t, e) {
              for (var n = 0; n < t.length; n++) e(t[n])
            })(['get', 'put', 'post', 'patch', 'head', 'delete'], function (r) {
              y['delete' === r ? 'del' : r] = function (t, e, n) {
                return ((e = o(t, e, n)).method = r.toUpperCase()), s(e)
              }
            })
        },
        {
          'global/window': 7,
          'is-function': 11,
          'parse-headers': 19,
          'xtend': 28,
        },
      ],
      27: [
        function (t, e, n) {
          e.exports =
            void 0 !== self.DOMParser
              ? function (t) {
                  return new self.DOMParser().parseFromString(
                    t,
                    'application/xml',
                  )
                }
              : void 0 !== self.ActiveXObject &&
                  new self.ActiveXObject('Microsoft.XMLDOM')
                ? function (t) {
                    var e = new self.ActiveXObject('Microsoft.XMLDOM')
                    return (e.async = 'false'), e.loadXML(t), e
                  }
                : function (t) {
                    var e = document.createElement('div')
                    return (e.innerHTML = t), e
                  }
        },
        {},
      ],
      28: [
        function (t, e, n) {
          e.exports = function () {
            for (var t = {}, e = 0; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n) i.call(n, r) && (t[r] = n[r])
            }
            return t
          }
          var i = Object.prototype.hasOwnProperty
        },
        {},
      ],
      29: [
        function (t, e, n) {
          'use strict'
          var r = t('three')
          ;(n.canvas = null),
            (n.gl = null),
            (n.renderer = null),
            (n.camera = null),
            (n.scene = null),
            (n.width = 0),
            (n.height = 0),
            (n.pinCanShow = !1),
            (n.instructionShowRatio = 0),
            (n.instructionHideRatio = 0),
            (n.ringShowRatio = 0),
            (n.hasInitialized = !1),
            (n.showRatio = 0),
            (n.aboutRatio = 0),
            (n.licensesRatio = 0),
            (n.unitIsInch = !1),
            (n.unitMultiplier = 1),
            (n.darkColor = new r.Color()),
            (n.brightColor = new r.Color()),
            (n.accentColor = new r.Color()),
            (n.domOverlaySupported = !0),
            (n.isPredefinedMode = !1),
            (n.isSupportWebGL = null),
            (n.isSupportWebXR = null)
        },
        { three: 24 },
      ],
      30: [
        function (t, e, n) {
          'use strict'
          ;(n.IMAGES_PATH = 'assets/images/'),
            (n.MODELS_PATH = 'assets/models/'),
            (n.VIDEOS_PATH = 'assets/videos/'),
            (n.USE_WEBGL2 = !0),
            (n.WEBGL_OPTION = {
              antialias: !0,
              alpha: !0,
              xrCompatible: !0,
              powerPreference: 'high-performance',
            }),
            (n.IS_MOBILE =
              document.documentElement.classList.contains('is-mobile')),
            (n.IS_DESKTOP = !n.IS_MOBILE),
            (n.SHOW_DURATION = 1),
            (n.ABOUT_DURATION = 0),
            (n.LICENSES_DURATION = 0),
            (n.XR_INSTRUCTION_SHOW_DURATION = 1.75),
            (n.XR_INSTRUCTION_HIDE_DURATION = 0.8),
            (n.XR_BUTTONS_SHOW_DURATION = 0.25),
            (n.COLOR_BRIGHT_HEX = '#fcfcfc'),
            (n.COLOR_DARK_HEX = '#211A1C'),
            (n.COLOR_ACCENT_HEX = '#21E240')
        },
        {},
      ],
      31: [
        function (t, e, n) {
          'use strict'
          var r = t('./core/settings'),
            a = t('./core/properties'),
            o = t('./xr/xr'),
            s = t('./ui/ui'),
            i = t('three'),
            c = t('./visuals/visuals'),
            l = void 0,
            h = void 0,
            u = void 0,
            p = 0
          function d() {
            a.darkColor.setStyle(r.COLOR_DARK_HEX),
              a.brightColor.setStyle(r.COLOR_BRIGHT_HEX),
              a.accentColor.setStyle(r.COLOR_ACCENT_HEX),
              a.isSupportWebXR &&
                ((l = a.renderer =
                  new i.WebGLRenderer({
                    canvas: a.canvas,
                    context: a.gl,
                  })).setClearColor(16777215, 0),
                l.setPixelRatio(window.devicePixelRatio),
                (l.xr.enabled = !0),
                l.xr.setFramebufferScaleFactor(1),
                (u = a.scene = new i.Scene()),
                (h = a.camera = new i.PerspectiveCamera(70, 1, 0.05, 100)),
                u.add(h),
                c.init(),
                u.add(c.container)),
              s.init(),
              window.addEventListener('resize', f),
              f(),
              a.isSupportWebXR
                ? l.setAnimationLoop(m)
                : (function t() {
                    m(), requestAnimationFrame(t)
                  })()
          }
          function f() {
            var t = (a.width = window.innerWidth),
              e = (a.height = window.innerHeight)
            document.documentElement.style.setProperty('--vh', 0.01 * e + 'px'),
              a.isSupportWebXR &&
                (o.isActive ||
                  ((h.aspect = t / e),
                  h.updateProjectionMatrix(),
                  l.setSize(t, e))),
              s.onResize(t, e)
          }
          function m(t, e) {
            var n,
              r = +new Date(),
              i = Math.min(2 / 60, (r - p) / 1e3)
            ;(p = r),
              s.update(i),
              a.isSupportWebXR &&
                (o.isActive
                  ? ((n = l.xr.getCamera(a.camera)),
                    (h.matrixAutoUpdate = !1),
                    n.matrixWorld.decompose(n.position, n.quaternion, n.scale),
                    n.updateMatrixWorld(!0),
                    o.hitTest(e, n),
                    c.update(i))
                  : (h.matrixAutoUpdate = !0),
                (a.canvas.style.visibility = o.isActive
                  ? 'visible'
                  : 'hidden')),
              a.isSupportWebXR && o.isActive && l.render(u, h)
          }
          ;(a.canvas = document.getElementById('gl-canvas')),
            (a.isSupportWebGL = (function () {
              if (r.USE_WEBGL2 && window.WebGL2RenderingContext)
                try {
                  return (
                    (a.gl = a.canvas.getContext('webgl2', r.WEBGL_OPTION)), !0
                  )
                } catch (t) {}
              if (((r.USE_WEBGL2 = !1), window.WebGLRenderingContext))
                try {
                  a.gl =
                    a.canvas.getContext('webgl', r.WEBGL_OPTION) ||
                    a.canvas.getContext('experimental-webgl', r.WEBGL_OPTION)
                  return !0
                } catch (t) {
                  return !1
                }
              return !1
            })()),
            a.isSupportWebGL
              ? o.checkCompatibility(function (t) {
                  ;(a.isSupportWebXR = t), d()
                })
              : ((a.isSupportWebXR = !1), d())
        },
        {
          './core/properties': 29,
          './core/settings': 30,
          './ui/ui': 53,
          './visuals/visuals': 66,
          './xr/xr': 67,
          'three': 24,
        },
      ],
      32: [
        function (t, e, n) {
          'use strict'
          var r = t('three'),
            i = t('../core/properties')
          function a() {
            o.constructor.call(this), (this.enabled = !1), (this.visible = !1)
          }
          var o = r.Object3D.prototype,
            s = (a.prototype = Object.create(o))
          e.exports = s.constructor = a
          ;(s.reset = function () {}),
            (s.enable = function (t) {
              ;(this.enabled = void 0 === t || !!t),
                this.enabled ? this._show() : this._hide()
            }),
            (s._getCamera = function () {
              var t = i.renderer.xr
              return t.enabled && t.isPresenting
                ? t.getCamera(i.camera).cameras[0]
                : i.camera
            }),
            (s._getCameraPosition = function () {
              var t = i.renderer.xr
              return t.enabled && t.isPresenting
                ? t.getCamera(i.camera).position
                : i.camera.position
            }),
            (s._getResolution = function (t) {
              var e = i.renderer.xr
              {
                var n
                e.enabled && e.isPresenting
                  ? ((n = e.getSession().renderState.baseLayer),
                    t.set(n.framebufferWidth, n.framebufferHeight))
                  : i.renderer.getSize(t)
              }
            }),
            (s._show = function () {
              this.visible = !0
            }),
            (s._hide = function () {
              this.visible = !1
            }),
            (s.update = function (t) {})
        },
        { '../core/properties': 29, 'three': 24 },
      ],
      33: [
        function (n, t, e) {
          'use strict'
          var r = n('../../core/properties'),
            i = n('../Component'),
            a = n('../line/Line'),
            o = n('../rect/Rect'),
            s = n('three')
          function c() {
            l.constructor.call(this),
              (this.pointerIsInsideBox = !1),
              (this.rect = new o()),
              (this.rect2 = new o({ hasText: !1 })),
              this.add(this.rect),
              this.add(this.rect2),
              (this.lineCD = new a({ isVerticalLine: !0 })),
              this.add(this.lineCD),
              (this.lineEDbis = new a({ isVerticalLine: !0, hasText: !1 })),
              this.add(this.lineEDbis),
              (this.lineFA = new a({ isVerticalLine: !0, hasText: !1 })),
              this.add(this.lineFA),
              (this.lineGB = new a({ isVerticalLine: !0, hasText: !1 })),
              this.add(this.lineGB),
              (this.rawPointC = new s.Vector3()),
              (this.rawPointD = new s.Vector3()),
              (this.raycaster = new s.Raycaster()),
              (this.pointA = new s.Vector3()),
              (this.pointB = new s.Vector3()),
              (this.pointC = new s.Vector3()),
              (this.pointD = new s.Vector3()),
              (this.pointE = new s.Vector3()),
              (this.pointF = new s.Vector3()),
              (this.pointG = new s.Vector3()),
              (this.distanceAB = null),
              (this.distanceBC = null),
              (this.distanceCD = null)
            var t = (this.geometry = new s.BoxBufferGeometry(1, 1, 1)),
              e = (this.material = new s.ShaderMaterial({
                uniforms: {
                  u_colorInner: { value: r.accentColor },
                  u_opacity: { value: 0.5 },
                },
                vertexShader: n('./box.vert'),
                fragmentShader: n('./box.frag'),
                transparent: !0,
              }))
            ;(this.mesh = new s.Mesh(t, e)), this.add(this.mesh)
          }
          var l = i.prototype,
            h = (c.prototype = Object.create(l))
          t.exports = h.constructor = c
          ;(h.reset = function () {
            ;(this.hasPointA = !1),
              (this.hasPointB = !1),
              (this.hasPointC = !1),
              (this.hasPointD = !1),
              (this.isPointDFromCamera = !1),
              d.set(0, 0, 0),
              this.rawPointC.copy(d),
              this.rawPointD.copy(d),
              this.pointA.copy(d),
              this.pointB.copy(d),
              this.pointC.copy(d),
              this.pointD.copy(d),
              this.pointE.copy(d),
              this.pointF.copy(d),
              this.pointG.copy(d),
              this.rect.reset(),
              this.rect2.reset(),
              this.lineCD.reset(),
              this.lineEDbis.reset(),
              this.lineFA.reset(),
              this.lineGB.reset(),
              (this.distanceAB = null),
              (this.distanceBC = null),
              (this.distanceCD = null),
              (this.visible = !1)
          }),
            (h.setPointA = function (t, e) {
              this.pointA.copy(t),
                this.rect.setPointA(t, e),
                this.rect2.setPointA(t, e),
                this.lineCD.setPointC(t),
                this.lineFA.setPointB(t),
                (this.hasPointA = !0)
            }),
            (h.setPointB = function (t, e) {
              this.pointB.copy(t),
                this.rect.setPointB(t, e),
                this.rect2.setPointB(t, e),
                this.lineGB.setPointB(t),
                (this.hasPointB = !0)
            }),
            (h.setPointC = function (t, e) {
              this.rawPointC.copy(t),
                this.rect.setPointC(t, e),
                this.rect2.setPointC(t, e),
                this.lineCD.setPointA(t),
                (this.hasPointC = !0)
            }),
            (h.setPointD = function (t, e) {
              ;(this.isPointDFromCamera = !1),
                this.rawPointD.copy(t),
                (this.hasPointD = !0)
            }),
            (h.setPointDFromCamera = function () {
              ;(this.isPointDFromCamera = !0),
                this.raycaster.setFromCamera(p, this._getCamera()),
                (this.hasPointD = !0)
            }),
            (h.update = function (t) {
              {
                var e, n, r
                this.rect.update(),
                  this.rect2.update(),
                  this.lineCD.update(),
                  this.lineEDbis.update(),
                  this.lineFA.update(),
                  this.lineGB.update(),
                  (this.mesh.scale.z = 0),
                  this.enabled && this.hasPointA && this.hasPointB
                    ? ((this.distanceAB =
                        this.rect.lineAB.distanceInCentimeters),
                      this.hasPointC
                        ? (this.pointC.copy(this.rect.pointC),
                          (this.distanceBC =
                            this.rect.lineBC.distanceInCentimeters),
                          this.hasPointD
                            ? (this.mesh.position.copy(this.rect.mesh.position),
                              this.mesh.quaternion.copy(
                                this.rect.mesh.quaternion,
                              ),
                              this.mesh.scale.copy(this.rect.mesh.scale),
                              (e = 0),
                              (this.pointerIsInsideBox = !1),
                              this.isPointDFromCamera
                                ? ((this.mesh.scale.z = 1e5),
                                  (n = []),
                                  (this.mesh.visible = !0),
                                  this.mesh.updateMatrix(!0),
                                  this.mesh.updateWorldMatrix(!1, !1),
                                  this.mesh.raycast(this.raycaster, n),
                                  (this.mesh.visible = !1),
                                  n.length
                                    ? ((this.pointerIsInsideBox = !0),
                                      (r = n[0].point).sub(this.pointC),
                                      (e = u
                                        .set(this.rect.normal, 0)
                                        .distanceToPoint(r)),
                                      this.pointD
                                        .copy(this.rect.normal)
                                        .multiplyScalar(e)
                                        .add(this.pointC),
                                      this.rect.isFlipped
                                        ? this.mesh.translateZ(-0.5 * e)
                                        : this.mesh.translateZ(0.5 * e),
                                      (this.mesh.scale.z = Math.abs(e)),
                                      this.lineCD.setPointA(this.pointC),
                                      this.lineCD.setPointB(this.pointD),
                                      this.lineCD.enable(!0),
                                      this.lineEDbis.enable(!0),
                                      this.lineFA.enable(!0),
                                      this.lineGB.enable(!0),
                                      (this.mesh.visible = !0),
                                      (this.rect.mesh.visible = !1),
                                      (this.rect2.mesh.visible = !1))
                                    : (this.lineCD.enable(!1),
                                      (this.mesh.visible = !1),
                                      (this.rect.mesh.visible = !0),
                                      (this.rect2.mesh.visible = !0),
                                      this.lineEDbis.enable(!1),
                                      this.lineFA.enable(!1),
                                      this.lineGB.enable(!1)))
                                : ((this.pointerIsInsideBox = !0),
                                  (e = this.rawPointC.distanceTo(
                                    this.rawPointD,
                                  )),
                                  this.pointD
                                    .copy(this.rect.normal)
                                    .negate()
                                    .multiplyScalar(e)
                                    .add(this.pointC),
                                  this.rect.isFlipped
                                    ? this.mesh.translateZ(0.5 * e)
                                    : this.mesh.translateZ(-0.5 * e),
                                  (this.mesh.scale.z = Math.abs(e)),
                                  this.lineCD.setPointA(this.pointC),
                                  this.lineCD.setPointB(this.pointD),
                                  this.lineCD.setPointC(this.pointA),
                                  this.lineCD.enable(!0),
                                  (this.mesh.visible = !0),
                                  (this.rect.mesh.visible = !1),
                                  (this.rect2.mesh.visible = !1)),
                              this.pointerIsInsideBox
                                ? ((this.distanceCD =
                                    this.lineCD.distanceInCentimeters),
                                  this.rect2.enable(!0),
                                  this.rect2.position.copy(this.rect.position),
                                  this.rect2.position
                                    .copy(this.rect.normal)
                                    .multiplyScalar(e),
                                  this.pointE.copy(this.rect.pointD),
                                  this.pointE.add(this.pointD).sub(this.pointC),
                                  this.pointF.copy(this.pointA),
                                  this.pointF
                                    .add(this.pointE)
                                    .sub(this.rect.pointD),
                                  this.pointG.copy(this.pointB),
                                  this.pointG.add(this.pointD).sub(this.pointC),
                                  this.lineEDbis.setPointA(this.pointE),
                                  this.lineEDbis.setPointB(this.rect.pointD),
                                  this.lineFA.setPointA(this.pointF),
                                  this.lineFA.setPointB(this.pointA),
                                  this.lineGB.setPointA(this.pointG),
                                  this.lineGB.setPointB(this.pointB))
                                : this.rect2.enable(!1))
                            : (this.lineCD.enable(!1),
                              (this.mesh.visible = !1),
                              this.rect2.enable(!1)))
                        : (this.lineCD.enable(!1),
                          this.lineEDbis.enable(!1),
                          this.lineFA.enable(!1),
                          this.lineGB.enable(!1),
                          (this.mesh.visible = !1)),
                      this.rect.enable(!0),
                      this._show())
                    : (this.lineEDbis.enable(!1),
                      this.lineFA.enable(!1),
                      this.lineGB.enable(!1),
                      this.lineCD.enable(!1),
                      this.rect.enable(!1),
                      this.rect2.enable(!1),
                      this._hide())
              }
            })
          var u = new s.Plane(),
            p = new s.Vector2(),
            d = new s.Vector3()
        },
        {
          '../../core/properties': 29,
          '../Component': 32,
          '../line/Line': 36,
          '../rect/Rect': 43,
          './box.frag': 34,
          './box.vert': 35,
          'three': 24,
        },
      ],
      34: [
        function (t, e, n) {
          e.exports =
            'uniform vec3 u_colorInner;\r\nuniform float u_opacity;\r\n\r\nvarying vec3 v_viewNormal;\r\n\r\nvoid main () {\r\n\tvec3 viewNormal = normalize(v_viewNormal);\r\n\t// gl_FragColor = vec4(vec3(0.26, 0.8, 1.0) + max(0.0, dot(vec3(0.577), viewNormal) * 0.25), u_opacity);\r\n\tgl_FragColor = vec4(u_colorInner, u_opacity);\r\n}'
        },
        {},
      ],
      35: [
        function (t, e, n) {
          e.exports =
            'varying vec3 v_viewNormal;\r\n\r\nvoid main () {\r\n\tv_viewNormal = normalMatrix * normal;\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}'
        },
        {},
      ],
      36: [
        function (r, t, e) {
          'use strict'
          var n = r('../Component'),
            i = r('../point/Point'),
            a = r('three'),
            o = r('../text/Text3D'),
            s = r('../../core/properties')
          function c() {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            l.constructor.call(this),
              (this.hasText = !1),
              (this.hasPointA = !1),
              (this.hasPointB = !1),
              (this.pointA = new i()),
              (this.pointB = new i()),
              this.add(this.pointA),
              this.add(this.pointB),
              this.pointA.enable(),
              this.pointB.enable(),
              (this.isVerticalLine = t.isVerticalLine || !1),
              this.isVerticalLine && (this.pointC = new a.Vector3()),
              (this.opacity = 1),
              (this.dashOffset = 0),
              (this.distance = 0)
            var e = (this.geometry = new a.BufferGeometry())
            e.setAttribute(
              'position',
              new a.BufferAttribute(
                new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                3,
              ),
            ),
              e.setAttribute(
                'a_offsetAngle',
                new a.BufferAttribute(
                  new Float32Array([
                    1.5 * Math.PI,
                    0.5 * Math.PI,
                    1.5 * Math.PI,
                    0.5 * Math.PI,
                  ]),
                  1,
                ),
              ),
              e.setAttribute(
                'a_side',
                new a.BufferAttribute(new Float32Array([0, 0, 1, 1]), 1),
              ),
              e.setIndex(
                new a.BufferAttribute(new Uint8Array([0, 2, 1, 1, 2, 3]), 1),
              )
            var n = (this.material = new a.ShaderMaterial({
              uniforms: {
                u_angle: { value: 0 },
                u_thickness: { value: 4 },
                u_distance: { value: 0 },
                u_dash: { value: 100 },
                u_dashGap: { value: -50 },
                u_dashOffset: { value: 0 },
                u_opacity: { value: 1 },
                u_resolution: { value: new a.Vector2() },
              },
              vertexShader: r('./line.vert'),
              fragmentShader: r('./line.frag'),
              transparent: !0,
              depthTest: !1,
              depthWrite: !1,
            }))
            ;(n.extensions.derivatives = !0),
              (this.mesh = new a.Mesh(e, n)),
              this.add(this.mesh),
              (this.mesh.renderOrder = 1e3),
              this.hasText && (this.text3D = new o(this))
          }
          var l = n.prototype,
            h = (c.prototype = Object.create(l))
          t.exports = h.constructor = c
          ;(h.reset = function () {
            ;(this.hasPointA = !1),
              (this.hasPointB = !1),
              p.set(0, 0, 0),
              this.pointA.position.copy(p),
              this.pointB.position.copy(p),
              this.pointC && this.pointC.copy(p)
            this._updatePositionAttribute(p, 0),
              this._updatePositionAttribute(p, 6),
              (this.visible = !1)
          }),
            (h.setPointA = function (t) {
              this.pointA.position.copy(t),
                this._updatePositionAttribute(t, 0),
                (this.hasPointA = !0)
            }),
            (h.setPointB = function (t) {
              this.pointB.position.copy(t),
                this._updatePositionAttribute(t, 6),
                (this.hasPointB = !0)
            }),
            (h.setPointC = function (t) {
              this.pointC.copy(t), (this.hasPointC = !0)
            }),
            (h._updatePositionAttribute = function (t, e) {
              for (
                var n = this.geometry.attributes.position,
                  r = n.array,
                  i = 0,
                  a = 0;
                i < 2;
                i++
              )
                (r[a + 0 + e] = t.x),
                  (r[a + 1 + e] = t.y),
                  (r[a + 2 + e] = t.z),
                  (a += 3)
              {
                var o
                ;(n.needsUpdate = !0),
                  (this.distance = this.pointA.position.distanceTo(
                    this.pointB.position,
                  )),
                  (this.distanceInCentimeters = 100 * this.distance),
                  this.hasText &&
                    ((o = void 0),
                    (o = s.unitIsInch
                      ? (this.distanceInCentimeters * s.unitMultiplier).toFixed(
                          1,
                        ) + 'in'
                      : this.distance < 1
                        ? this.distanceInCentimeters.toFixed(1) + 'cm'
                        : this.distance.toFixed(2) + 'm'),
                    this.text3D.setText(o))
              }
            }),
            (h.update = function (t) {
              {
                var e, n, r, i, a, o
                this.enabled && this.hasPointA && this.hasPointB
                  ? ((e = this.material.uniforms.u_resolution.value),
                    (n = this._getCamera()),
                    this._getResolution(e),
                    (this.material.uniforms.u_thickness.value =
                      (u * e.y) / s.height),
                    p.copy(this.pointA.position),
                    p.project(n),
                    (r = (0.5 * p.x + 0.5) * e.x),
                    (i = (0.5 * p.y + 0.5) * e.y),
                    p.copy(this.pointB.position),
                    p.project(n),
                    (a = (0.5 * p.x + 0.5) * e.x),
                    (o = (0.5 * p.y + 0.5) * e.y),
                    (this.material.uniforms.u_angle.value =
                      Math.atan2(o - i, a - r) || 0),
                    (this.material.uniforms.u_distance.value = Math.sqrt(
                      Math.pow(a - r, 2) + Math.pow(o - i, 2),
                    )),
                    this.hasText &&
                      (this.text3D.container.position
                        .copy(this.pointB.position)
                        .sub(this.pointA.position)
                        .normalize(),
                      this.text3D.container.quaternion.setFromUnitVectors(
                        d,
                        this.text3D.container.position,
                      ),
                      this.text3D.container.position
                        .copy(this.pointA.position)
                        .add(this.pointB.position)
                        .multiplyScalar(0.5),
                      this.text3D.update(this._getCameraPosition(), t)),
                    this.geometry.computeBoundingBox(),
                    this.geometry.computeBoundingSphere(),
                    (this.material.uniforms.u_dashOffset.value =
                      this.dashOffset),
                    (this.material.uniforms.u_opacity.value = this.opacity),
                    this.pointA.update(t),
                    this.pointB.update(t),
                    this._show())
                  : this._hide()
              }
            })
          var u = 3,
            p = new a.Vector3(),
            d = new a.Vector3(0, 0, 1)
        },
        {
          '../../core/properties': 29,
          '../Component': 32,
          '../point/Point': 40,
          '../text/Text3D': 44,
          './line.frag': 37,
          './line.vert': 38,
          'three': 24,
        },
      ],
      37: [
        function (t, e, n) {
          e.exports =
            'uniform float u_dash;\r\nuniform float u_dashGap;\r\nuniform float u_opacity;\r\n\r\nvarying float v_dist;\r\n\r\nfloat aastep (float a, float b) {\r\n\tfloat delta = b - a;\r\n\treturn clamp(delta / fwidth(delta), 0.0, 1.0);\r\n}\r\n\r\nvoid main () {\r\n\tfloat d = mod(v_dist, u_dash + u_dashGap);\r\n\tgl_FragColor = vec4(1.0, 1.0, 1.0, aastep(u_dashGap, d) * u_opacity);\r\n}'
        },
        {},
      ],
      38: [
        function (t, e, n) {
          e.exports =
            'attribute float a_offsetAngle;\r\nattribute float a_side;\r\n\r\nuniform float u_thickness;\r\nuniform float u_angle;\r\nuniform vec2 u_resolution;\r\n\r\nuniform float u_distance;\r\nuniform float u_dashOffset;\r\n\r\nvarying float v_dist;\r\n\r\nvoid main () {\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n\r\n\tv_dist = a_side * u_distance + u_dashOffset;\r\n\t\r\n\tfloat angle = a_offsetAngle + u_angle;\r\n\tgl_Position.xy += vec2(\r\n\t\tcos(angle),\r\n\t\tsin(angle)\r\n\t) * u_thickness / u_resolution * gl_Position.w;\r\n\r\n\tgl_Position.xyz /= gl_Position.w;\r\n\tgl_Position.w = 1.0;\r\n\r\n}'
        },
        {},
      ],
      39: [
        function (t, e, y) {
          'use strict'
          var x = t('../core/properties'),
            n = (t('../visuals/visuals'), t('./line/Line')),
            r = t('./rect/Rect'),
            i = t('./box/Box'),
            b = t('../xr/xr'),
            a = t('../ui/xrUI'),
            o = t('three')
          ;(y.init = function () {
            ;(M = new o.Matrix4()),
              (S = new o.Vector3()),
              (E = new o.Quaternion()),
              (T = new o.Vector3()),
              (D = new o.Matrix4()),
              (B = new o.Vector3()),
              (s = new o.Vector3(1, 1, 1)),
              (c = new o.Quaternion().setFromEuler(new o.Euler(0, 0, 0))),
              (l = new o.Quaternion()),
              (N = new o.Quaternion()),
              (u = new o.Vector3(0, 1, 0)),
              (y.container = new o.Object3D()),
              (_ = new o.Object3D()),
              y.container.add(_)
            for (var t = 0; t < 4; t++)
              A.push(new o.Matrix4()),
                L.push(new o.Matrix4()),
                R.push({
                  position: new o.Vector3(),
                  quaternion: new o.Quaternion(),
                })
            ;(P = new n()),
              _.add(P),
              (O = new r()),
              _.add(O),
              (I = new i()),
              _.add(I),
              b.eventDispatcher.addEventListener('start', f),
              a.inputEventDispatcher.addEventListener('up', p),
              a.inputEventDispatcher.addEventListener('multimove', d),
              a.btnClickEventDispatcher.addEventListener('pin', g),
              a.btnClickEventDispatcher.addEventListener('undo', m),
              a.btnClickEventDispatcher.addEventListener('done', v)
          }),
            (y.update = function (t) {
              var e = x.isPredefinedMode ? L : A,
                n =
                  (x.isPredefinedMode && (!!b.isHit || C)) ||
                  !x.isPredefinedMode
              if (
                ((_.visible = n),
                (window.step = y.step),
                (window.distances = y.distances),
                (window.isEditMode = y.isEditMode),
                n)
              ) {
                x.isPredefinedMode
                  ? (C || M.copy(b.hitMatrix),
                    M.decompose(S, N, T),
                    H(E, !1),
                    M.compose(S, E, T))
                  : M.identity()
                for (
                  var r, i, a, o, s, c, l, h, u, p, d, f, m, v, g = 0;
                  g < 4;
                  g++
                )
                  D.copy(e[g]).premultiply(M),
                    D.decompose(R[g].position, R[g].quaternion, B)
                0 === y.step &&
                  ((y.distances.AB = null),
                  (y.distances.BC = null),
                  (y.distances.CD = null)),
                  'line' == w && 0 < y.step
                    ? ((r = R[0].position),
                      (i = 1 < y.step ? R[1].position : b.hitPos),
                      P.setPointA(r),
                      P.setPointB(i),
                      P.enable(!0),
                      (y.distances.AB = P.distanceInCentimeters),
                      (y.distances.BC = null),
                      (y.distances.CD = null))
                    : (P.reset(), P.enable(!1)),
                  P.update(),
                  'rect' == w && 0 < y.step
                    ? ((a = R[0].position),
                      (o = R[0].quaternion),
                      (s = 1 < y.step ? R[1].position : b.hitPos),
                      (c = 1 < y.step ? R[1].quaternion : b.hitQuat),
                      O.setPointA(a, o),
                      O.setPointB(s, c),
                      1 < y.step &&
                        ((l = 2 < y.step ? R[2].position : b.hitPos),
                        (h = 2 < y.step ? R[2].quaternion : b.hitQuat),
                        O.setPointC(l, h)),
                      O.enable(!0),
                      (y.distances.AB = O.lineAB.distanceInCentimeters),
                      (y.distances.BC = O.lineBC.distanceInCentimeters),
                      (y.distances.CD = null))
                    : (O.reset(), O.enable(!1)),
                  O.update(),
                  'box' == w && 0 < y.step
                    ? ((u = R[0].position),
                      (p = R[0].quaternion),
                      (d = 1 < y.step ? R[1].position : b.hitPos),
                      (f = 1 < y.step ? R[1].quaternion : b.hitQuat),
                      I.setPointA(u, p),
                      I.setPointB(d, f),
                      1 < y.step &&
                        ((m = 2 < y.step ? R[2].position : b.hitPos),
                        (v = 2 < y.step ? R[2].quaternion : b.hitQuat),
                        I.setPointC(m, v),
                        x.isPredefinedMode
                          ? I.setPointD(R[3].position, R[3].quaternion)
                          : (3 !== y.step && (4 !== y.step || I.hasPointD)) ||
                            I.setPointDFromCamera()),
                      I.enable(!0),
                      (y.distances.AB = I.distanceAB),
                      (y.distances.BC = I.distanceBC),
                      (y.distances.CD = I.distanceCD))
                    : (I.reset(), I.enable(!1)),
                  I.update()
              }
            }),
            (y.step = 0),
            (y.isEditMode = !0),
            (y.distances = { AB: null, BC: null, CD: null }),
            (y.container = null),
            (y.predefinedLength = 200),
            (y.predefinedWidth = 100),
            (y.predefinedHeight = 100)
          var _ = void 0,
            w = 'box',
            M = void 0,
            S = void 0,
            E = void 0,
            T = void 0,
            A = [],
            L = [],
            R = [],
            C = !1,
            P = void 0,
            O = void 0,
            I = void 0,
            D = void 0,
            B = void 0,
            s = void 0,
            c = void 0,
            l = void 0,
            h = 0,
            N = void 0,
            u = void 0
          function p(t) {
            H(l, !0)
          }
          function d(t) {
            h = t.angle - t.downAngle
          }
          function f() {
            U(),
              x.isPredefinedMode &&
                (function () {
                  y.step = 4
                  var t = 0.01 * y.predefinedLength,
                    e = 0.01 * y.predefinedWidth,
                    n = 0.01 * y.predefinedHeight,
                    r = 0
                  0 < e && r++
                  0 < n && r++
                  0 < t && r++
                  0 === r &&
                    console.error(
                      'error, at least one value is needed',
                      e,
                      n,
                      t,
                    )
                  switch ((w = 2 < r ? 'box' : 1 < r ? 'rect' : 'line')) {
                    case 'line':
                      F(L[0], 0.5 * -t, 0, 0), F(L[1], 0.5 * t, 0, 0)
                      break
                    case 'rect':
                      F(L[0], 0.5 * -e, 0, 0.5 * -t),
                        F(L[1], 0.5 * e, 0, 0.5 * -t),
                        F(L[2], 0.5 * e, 0, 0.5 * t)
                      break
                    case 'box':
                      F(L[0], 0.5 * -e, 0, 0.5 * -t),
                        F(L[1], 0.5 * e, 0, 0.5 * -t),
                        F(L[2], 0.5 * e, 0, 0.5 * t),
                        F(L[3], 0.5 * e, n, 0.5 * t)
                  }
                })()
          }
          function m() {
            ;(y.step = 0 < y.step ? y.step - 1 : 0),
              I.reset(),
              a.togglePinButton(!1)
          }
          function v() {
            if (!y.isEditMode || 3 !== y.step || !1 !== I.pointerIsInsideBox) {
              var t = y.step,
                e = z()
              if (((y.isEditMode = !1), a.togglePinButton(!0), t !== e))
                return t === e - 1
                  ? ((w = 'rect'),
                    void (y.distances.BC = O.lineBC.distanceInCentimeters))
                  : t === e - 2
                    ? ((w = 'line'),
                      void (y.distances.AB = P.distanceInCentimeters))
                    : void (1 !== t || (w = 'point'))
            }
          }
          function g() {
            var t
            ;(y.isEditMode && 3 === y.step && !1 === I.pointerIsInsideBox) ||
              ((y.isEditMode = !0),
              x.isPredefinedMode
                ? C
                  ? ((C = !1), (x.isPredefinedMode = !1), (w = 'line'), U())
                  : b.isHit &&
                    ((C = !0), M.copy(b.hitMatrix), a.togglePinButton(!0))
                : ((t = z()),
                  y.step === t
                    ? U()
                    : (y.step === t - 1
                        ? a.togglePinButton(!0)
                        : a.togglePinButton(!1),
                      'box' == w && 3 === y.step
                        ? y.step++
                        : b.isHit && (A[y.step].copy(b.hitMatrix), y.step++))))
          }
          function U() {
            ;(y.step = 0), (C = !1), P.reset(), O.reset(), I.reset()
            for (var t = 0; t < 4; t++)
              A[t].identity(),
                L[t].identity(),
                R[t].position.set(0, 0, 0),
                R[t].quaternion.set(0, 0, 0, 1)
            x.isPredefinedMode || (w = 'box'), a.togglePinButton(!1)
          }
          function z(t) {
            switch (void 0 === t ? w : t) {
              case 'line':
                return 2
              case 'rect':
                return 3
              case 'box':
                return 4
              default:
                return 2
            }
          }
          function F(t, e, n, r) {
            B.set(e, n, r), t.compose(B, c, s)
          }
          function H(t, e) {
            N.setFromAxisAngle(u, h), t.premultiply(N), e && (h = 0)
          }
        },
        {
          '../core/properties': 29,
          '../ui/xrUI': 55,
          '../visuals/visuals': 66,
          '../xr/xr': 67,
          './box/Box': 33,
          './line/Line': 36,
          './rect/Rect': 43,
          'three': 24,
        },
      ],
      40: [
        function (t, e, n) {
          'use strict'
          var r = t('../../core/properties'),
            i = t('../Component'),
            a = t('three'),
            o = void 0,
            s = void 0,
            c = new a.Vector2()
          function l() {
            h.constructor.call(this),
              o ||
                (o = new a.BufferGeometry()).setAttribute(
                  'position',
                  new a.BufferAttribute(new Float32Array([0, 0, 0]), 3),
                ),
              s ||
                ((s = new a.ShaderMaterial({
                  uniforms: {
                    u_colorInner: { value: r.darkColor },
                    u_colorOuter: { value: new a.Color(16777215) },
                    u_outerThreshold: { value: 0.5 },
                    u_pointSize: { value: 1 },
                  },
                  vertexShader: t('./point.vert'),
                  fragmentShader: t('./point.frag'),
                  transparent: !0,
                  depthTest: !1,
                  depthWrite: !1,
                })).extensions.derivatives = !0),
              (this.center = new a.Points(o, s)),
              (this.center.renderOrder = 1001),
              this.add(this.center)
          }
          var h = i.prototype,
            u = (l.prototype = Object.create(h))
          e.exports = u.constructor = l
          u.update = function (t) {
            this.enabled &&
              (this._getCamera(),
              this._getResolution(c),
              (s.uniforms.u_pointSize.value = (14 * c.y) / r.height))
          }
        },
        {
          '../../core/properties': 29,
          '../Component': 32,
          './point.frag': 41,
          './point.vert': 42,
          'three': 24,
        },
      ],
      41: [
        function (t, e, n) {
          e.exports =
            'uniform vec3 u_colorInner;\r\nuniform vec3 u_colorOuter;\r\nuniform float u_outerThreshold;\r\n\r\nvoid main () {\r\n\tfloat d = length(gl_PointCoord.xy - 0.5) * 2.0;\r\n\tfloat fd = fwidth(d);\r\n\r\n\tvec3 color = mix(u_colorInner, u_colorOuter, smoothstep(u_outerThreshold - fd, u_outerThreshold, d));\r\n\tfloat alpha = 1.0 - smoothstep(1.0 - fd, 1.0, d);\r\n\r\n\tgl_FragColor = vec4(color, alpha);\r\n}'
        },
        {},
      ],
      42: [
        function (t, e, n) {
          e.exports =
            'uniform float u_pointSize;\r\n\r\nvoid main () {\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n\tgl_PointSize = u_pointSize;\r\n}'
        },
        {},
      ],
      43: [
        function (t, e, n) {
          'use strict'
          var r = t('../Component'),
            i = t('../line/Line'),
            a = t('three')
          function o() {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            s.constructor.call(this),
              (this.isFlipped = !1),
              (this.hasText = void 0 === t.hasText || t.hasText),
              (this.lineAB = new i({ hasText: this.hasText })),
              this.add(this.lineAB),
              (this.lineBC = new i({ hasText: this.hasText })),
              this.add(this.lineBC),
              (this.lineCD = new i({ hasText: !1 })),
              this.add(this.lineCD),
              (this.lineAD = new i({ hasText: !1 })),
              this.add(this.lineAD),
              (this.normal = new a.Vector3()),
              (this.rawPointC = new a.Vector3()),
              (this.pointA = new a.Vector3()),
              (this.pointADir = new a.Vector3()),
              (this.pointB = new a.Vector3()),
              (this.pointBDir = new a.Vector3()),
              (this.pointC = new a.Vector3()),
              (this.pointCDir = new a.Vector3()),
              (this.pointD = new a.Vector3())
            var e = (this.geometry = new a.PlaneBufferGeometry(1, 1)),
              n = (this.material = new a.MeshBasicMaterial({
                color: 16777215,
                opacity: 0.35,
                transparent: !0,
              }))
            ;(this.mesh = new a.Mesh(e, n)), this.add(this.mesh)
          }
          var s = r.prototype,
            c = (o.prototype = Object.create(s))
          e.exports = c.constructor = o
          ;(c.reset = function () {
            ;(this.hasPointA = !1),
              (this.hasPointB = !1),
              (this.hasPointC = !1),
              (this.isFlipped = !1),
              this.pointC.set(0, 0, 0),
              this.pointD.set(0, 0, 0),
              this.pointADir.set(0, 0, 0),
              this.pointBDir.set(0, 0, 0),
              this.pointCDir.set(0, 0, 0),
              this.lineAB.reset(),
              this.lineBC.reset(),
              this.lineCD.reset(),
              this.lineAD.reset(),
              (this.mesh.visible = !1)
          }),
            (c.setPointA = function (t, e) {
              this.pointA.copy(t),
                this.pointADir.set(0, 1, 0).applyQuaternion(e),
                this.lineAB.setPointA(t),
                (this.hasPointA = !0)
            }),
            (c.setPointB = function (t, e) {
              this.pointB.copy(t),
                this.pointBDir.set(0, 1, 0).applyQuaternion(e),
                this.lineAB.setPointB(t),
                this.lineBC.setPointA(t),
                (this.hasPointB = !0)
            }),
            (c.setPointC = function (t, e) {
              this.rawPointC.copy(t),
                this.pointCDir.set(0, 1, 0).applyQuaternion(e),
                (this.hasPointC = !0)
            }),
            (c.update = function (t) {
              this.enabled &&
                (this.lineAB.update(),
                this.lineBC.update(),
                this.lineCD.update(),
                this.lineAD.update(),
                this.hasPointA && this.hasPointB
                  ? (this.lineAB.enable(!0),
                    this.hasPointC
                      ? (h.copy(this.pointA).sub(this.pointB).normalize(),
                        u.copy(this.rawPointC).sub(this.pointB).normalize(),
                        p.crossVectors(h, u).normalize(),
                        l.set(h, 0),
                        l.projectPoint(
                          h.copy(this.rawPointC).sub(this.pointB),
                          u,
                        ),
                        l.set(p, 0),
                        l.projectPoint(u, this.pointC),
                        this.pointC.add(this.pointB),
                        this.lineBC.setPointB(this.pointC),
                        this.mesh.position
                          .copy(this.pointA)
                          .add(this.pointC)
                          .multiplyScalar(0.5),
                        this.mesh.scale.set(
                          this.pointA.distanceTo(this.pointB),
                          this.pointB.distanceTo(this.pointC),
                          1,
                        ),
                        h.copy(this.pointA).sub(this.pointB).normalize(),
                        u.copy(this.pointC).sub(this.pointB).normalize(),
                        this.normal.crossVectors(h, u).normalize(),
                        this.mesh.matrix.set(
                          h.x,
                          u.x,
                          this.normal.x,
                          0,
                          h.y,
                          u.y,
                          this.normal.y,
                          0,
                          h.z,
                          u.z,
                          this.normal.z,
                          0,
                          0,
                          0,
                          0,
                          1,
                        ),
                        (this.isFlipped = 0 < h.cross(this.pointCDir).dot(u)),
                        this.isFlipped && this.mesh.matrix.multiply(d),
                        this.mesh.matrix.decompose(h, this.mesh.quaternion, u),
                        this.lineBC.enable(!0),
                        (this.mesh.visible = !0),
                        this.pointD.copy(this.pointA),
                        this.pointD.add(this.pointC).sub(this.pointB),
                        this.lineCD.setPointA(this.pointC),
                        this.lineCD.setPointB(this.pointD),
                        this.lineCD.enable(!0),
                        this.lineAD.setPointA(this.pointA),
                        this.lineAD.setPointB(this.pointD),
                        this.lineAD.enable(!0))
                      : (this.lineBC.enable(!1),
                        this.lineCD.enable(!1),
                        this.lineAD.enable(!1),
                        (this.mesh.visible = !1)),
                    this._show())
                  : (this.lineAB.enable(!1),
                    this.lineBC.enable(!1),
                    this.lineCD.enable(!1),
                    this.lineAD.enable(!1),
                    this._hide()))
            })
          var l = new a.Plane(),
            h = new a.Vector3(),
            u = new a.Vector3(),
            p = new a.Vector3(),
            d = new a.Matrix4().makeRotationX(Math.PI)
        },
        { '../Component': 32, '../line/Line': 36, 'three': 24 },
      ],
      44: [
        function (s, c, t) {
          ;(function (t) {
            'use strict'
            var r = s('three')
            t.THREE = r
            var i = s('three-bmfont-text'),
              e = s('load-bmfont')
            s('../../core/properties')
            function n(t) {
              ;(this.hasInit = !1),
                (this.baseScale = 8e-4),
                (this.scale = 0),
                (this.container = new r.Object3D()),
                t.add(this.container)
              var n = this
              e('./assets/fonts/roboto-msdf.json', function (t, e) {
                ;(n.geometry = i({
                  width: 150,
                  font: e,
                  align: 'center',
                  text: '59.16cm',
                })),
                  new r.TextureLoader().load(
                    './assets/fonts/roboto-msdf.png',
                    a.bind(n),
                  )
              })
            }
            function a(t) {
              var e = new r.ShaderMaterial({
                transparent: !0,
                side: r.DoubleSide,
                depthTest: !1,
                uniforms: {
                  opacity: { value: 1 },
                  map: { value: t },
                  color: { value: new r.Color(16777215) },
                },
                vertexShader: s('./msdf.vert'),
                fragmentShader: s('./msdf.frag'),
              })
              ;(e.extensions.derivatives = !0),
                (this.mesh = new r.Mesh(this.geometry, e)),
                this.mesh.position.set(-0.02, 0, 0),
                (this.mesh.renderOrder = 1002),
                this.container.add(this.mesh),
                (this.hasInit = !0)
            }
            var o = n.prototype
            ;(c.exports = n),
              (o.setText = function (t) {
                this.geometry.update(t)
              }),
              (o._onTextureLoad = a),
              (o.update = function (t, e) {
                this.hasInit &&
                  t &&
                  (this.mesh.position.distanceTo(t),
                  (this.scale = 0.005),
                  this.mesh.scale.set(this.scale, -this.scale, this.scale))
              })
          }).call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                  ? window
                  : {},
          )
        },
        {
          '../../core/properties': 29,
          './msdf.frag': 45,
          './msdf.vert': 46,
          'load-bmfont': 13,
          'three': 24,
          'three-bmfont-text': 21,
        },
      ],
      45: [
        function (t, e, n) {
          e.exports =
            '#ifdef GL_OES_standard_derivatives\r\n#extension GL_OES_standard_derivatives : enable\r\n#endif\r\n\r\nprecision highp float;\r\nuniform float opacity;\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nvarying vec2 vUv;\r\n\r\nfloat median(float r, float g, float b) {\r\n  return max(min(r, g), min(max(r, g), b));\r\n}\r\n\r\nvoid main() {\r\n  vec3 msdfSample = 1.0 - texture2D(map, vUv).rgb;\r\n  float sigDist = median(msdfSample.r, msdfSample.g, msdfSample.b) - 0.5;\r\n  float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);\r\n  gl_FragColor = vec4(color.xyz, alpha * opacity);\r\n  \r\n  if (gl_FragColor.a < 0.0001) discard;\r\n}'
        },
        {},
      ],
      46: [
        function (t, e, n) {
          e.exports =
            'varying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = projectionMatrix * modelViewMatrix *  vec4(position, 1.0);\r\n}'
        },
        {},
      ],
      47: [
        function (t, e, n) {
          'use strict'
          t('../core/settings')
          var s = t('../core/properties'),
            r = (t('./landing'), t('./licenses')),
            c = t('../utils/math'),
            l = t('../utils/ease')
          ;(n.init = function () {
            ;(h = document.getElementById('about-inner')),
              (u = document.getElementById('about-btn')),
              (p = document.getElementById('about-desc')),
              (i = document.getElementById('about-licenses-btn')),
              u.addEventListener('click', a),
              i.addEventListener('click', o)
          }),
            (n.onResize = function (t, e) {}),
            (n.update = function (t) {
              s.width
              var e = s.height,
                n = void 0,
                r = void 0,
                i = void 0
              ;(h.style.pointerEvents = 0.5 < s.aboutRatio ? 'auto' : 'none'),
                (h.style.visibility =
                  0 === s.aboutRatio ? 'hidden' : 'visible'),
                (n = l.easeInOutCubic(c.crange(0, 0.8, s.showRatio))),
                (r = l.easeInOutCubic(c.crange(0, 0.75, s.aboutRatio))),
                (i = l.easeInOutCubic(c.crange(0, 0.6, s.licensesRatio)))
              var a = c.lerp((-80 / 1140) * e, 0, 1 - i)
              {
                var o
                ;(u.style.transform = 'translate3d(0,' + a + 'px,0)'),
                  (u.style.opacity = n * (1 - i)),
                  0 < s.aboutRatio &&
                    ((r = l.easeOutCubic(
                      c.crange(0.35, 1, s.aboutRatio) * (1 - i),
                    )),
                    (o = c.lerp((-80 / 1140) * e, 0, r)),
                    (p.style.transform =
                      'translate3d(-50%, -50%, 0) translate3d(0,' +
                      o +
                      'px,0)'),
                    (p.style.opacity = r))
              }
            }),
            (n.isActive = !1)
          var h = void 0,
            u = void 0,
            p = void 0,
            i = void 0
          function a() {
            ;(n.isActive = !n.isActive),
              document.documentElement.classList.toggle('is-about', n.isActive)
          }
          function o() {
            r.show()
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/ease': 56,
          '../utils/math': 58,
          './landing': 50,
          './licenses': 51,
        },
      ],
      48: [
        function (t, e, n) {
          'use strict'
          n.init = function () {
            ;(r = document.querySelector('.cookies')),
              (i = document.querySelector('.cookies__button--ok')),
              (function (t) {
                for (
                  var e = t + '=', n = document.cookie.split(';'), r = 0;
                  r < n.length;
                  r++
                ) {
                  for (var i = n[r]; ' ' == i.charAt(0); )
                    i = i.substring(1, i.length)
                  if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
                }
                return
              })('hasAcceptedCookies') ||
                (i.addEventListener('click', a), setTimeout(o, 1500))
          }
          var r = void 0,
            i = void 0
          function a() {
            !(function (t, e, n) {
              var r = ''
              {
                var i
                n &&
                  ((i = new Date()).setTime(
                    i.getTime() + 24 * n * 60 * 60 * 1e3,
                  ),
                  (r = '; expires=' + i.toUTCString()))
              }
              document.cookie = t + '=' + (e || '') + r + '; path=/'
            })('hasAcceptedCookies', !0, 30),
              o(!1)
          }
          function o() {
            var t =
              !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
            r.classList.toggle('is-visible', t)
          }
        },
        {},
      ],
      49: [
        function (t, e, n) {
          'use strict'
          var r = t('../core/settings'),
            i = t('../core/properties'),
            a = (t('./landing'), t('../utils/math')),
            o = t('../utils/ease')
          ;(n.init = function () {
            s = document.getElementById('footer')
          }),
            (n.show = function () {}),
            (n.onResize = function (t, e) {
              n.HEIGHT = r.IS_MOBILE ? 40 : 78
            }),
            (n.update = function (t) {
              var e = void 0
              ;(e = o.easeInOutCubic(a.crange(0, 0.4, i.showRatio))),
                (s.style.transform =
                  'translate3d(0,' + (1 - e) * n.HEIGHT + 'px,0)')
            }),
            (n.HEIGHT = 100)
          var s = void 0
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/ease': 56,
          '../utils/math': 58,
          './landing': 50,
        },
      ],
      50: [
        function (t, e, n) {
          'use strict'
          t('../core/settings')
          var f = t('../core/properties'),
            r = (t('./uiBG'), t('./prompt')),
            i = t('../xr/xr'),
            m = t('../utils/math'),
            v = t('../utils/ease')
          ;(n.init = function () {
            document.getElementById('landing'),
              (g = document.getElementById('landing-title')),
              (y = document.getElementById('landing-desc')),
              (x = document.getElementById('landing-ar-btn')),
              (b = document.getElementById('landing-bottom-text')),
              (o = document.getElementById('xr-ui')),
              (a.domOverlay.root = o),
              x.addEventListener('click', s),
              i.eventDispatcher.addEventListener('start', c),
              i.eventDispatcher.addEventListener('end', l)
          }),
            (n.onResize = function (t, e) {}),
            (n.update = function (t) {
              f.width
              var e = f.height,
                n = void 0,
                r = void 0,
                i = void 0,
                a = void 0
              ;(n = v.easeInOutCubic(m.crange(0, 0.8, f.showRatio))),
                (i = v.easeInOutCubic(m.crange(0.15, 0.75, f.aboutRatio))),
                (a = v.easeInOutCubic(m.crange(0.15, 0.75, f.licensesRatio))),
                (r = Math.max(i, a))
              var o = m.lerp(0.95, 1, v.easeOutBack(n)),
                s = m.lerp(0, (80 / 1140) * e, i)
              ;(g.style.transform =
                'translate3d(0,' + s + 'px,0) scale(' + o + ',' + o + ')'),
                (g.style.opacity = Math.min(m.cfit(n, 0, 0.75, 0, 1), 1 - r)),
                (n = v.easeInOutCubic(m.crange(0.1, 0.9, f.showRatio))),
                (i = v.easeInOutCubic(m.crange(0.075, 0.7, f.aboutRatio))),
                (a = v.easeInOutCubic(m.crange(0.075, 0.7, f.licensesRatio))),
                (r = Math.max(i, a))
              var c = m.lerp(0.95, 1, v.easeOutBack(n)),
                l = m.lerp(0, (80 / 1140) * e, i)
              ;(y.style.transform =
                'translate3d(0,' + l + 'px,0) scale(' + c + ',' + c + ')'),
                (y.style.opacity = Math.min(m.cfit(n, 0, 0.75, 0, 1), 1 - r)),
                (n = v.easeInOutCubic(m.crange(0.2, 1, f.showRatio))),
                (i = v.easeInOutCubic(m.crange(0, 0.65, f.aboutRatio))),
                (a = v.easeInOutCubic(m.crange(0, 0.65, f.licensesRatio))),
                (r = Math.max(i, a))
              var h = m.lerp(0.95, 1, v.easeOutBack(n)),
                u = m.lerp(0, (80 / 1140) * e, i)
              ;(x.style.transform =
                'translate3d(0,' + u + 'px,0) scale(' + h + ',' + h + ')'),
                (x.style.opacity = Math.min(m.cfit(n, 0, 0.75, 0, 1), 1 - r)),
                (n = v.easeInOutCubic(m.crange(0.2, 1, f.showRatio))),
                (i = v.easeInOutCubic(m.crange(0, 0.65, f.aboutRatio))),
                (a = v.easeInOutCubic(m.crange(0, 0.65, f.licensesRatio))),
                (r = Math.max(i, a))
              var p = m.lerp(0.95, 1, v.easeOutBack(n)),
                d = m.lerp(0, (80 / 1140) * e, i)
              ;(b.style.transform =
                'translate3d(0,' + d + 'px,0) scale(' + p + ',' + p + ')'),
                (b.style.opacity = Math.min(m.cfit(n, 0, 0.75, 0, 1), 1 - r))
            })
          var a = {
              requiredFeatures: ['hit-test', 'dom-overlay'],
              domOverlay: { root: null },
            },
            g = void 0,
            y = void 0,
            x = void 0,
            o = void 0,
            b = void 0
          function s(t) {
            t.preventDefault(), f.isSupportWebXR ? i.start(a) : r.show()
          }
          function c() {
            document.body.classList.add('is-webxr')
          }
          function l() {
            document.body.classList.remove('is-webxr')
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/ease': 56,
          '../utils/math': 58,
          '../xr/xr': 67,
          './prompt': 52,
          './uiBG': 54,
        },
      ],
      51: [
        function (t, e, n) {
          'use strict'
          t('../core/settings')
          var o = t('../core/properties'),
            s = t('../utils/math'),
            c = t('../utils/ease')
          ;(n.init = function () {
            ;(l = document.getElementById('licenses')),
              (h = document.getElementById('licenses-title')),
              (u = document.getElementById('licenses-content-inner')),
              (p = document.getElementById('licenses-btn')).addEventListener(
                'click',
                r,
              )
          }),
            (n.show = function () {
              n.isActive = !0
            }),
            (n.onResize = function (t, e) {}),
            (n.update = function (t) {
              o.width
              var e = o.height,
                n = void 0
              {
                var r, i, a
                ;(l.style.display = 0 < o.licensesRatio ? 'block' : 'none'),
                  0 < o.licensesRatio &&
                    ((n = c.easeOutCubic(s.crange(0.55, 1, o.licensesRatio))),
                    (r = s.lerp((40 / 1140) * e, 0, n)),
                    (h.style.transform = 'translate3d(0,' + r + 'px,0)'),
                    (h.style.opacity = n),
                    (n = c.easeOutCubic(s.crange(0.5, 1, o.licensesRatio))),
                    (i = s.lerp((80 / 1140) * e, 0, n)),
                    (u.style.transform = 'translate3d(0,' + i + 'px,0)'),
                    (u.style.opacity = n),
                    (n = c.easeOutCubic(s.crange(0.4, 1, o.licensesRatio))),
                    (a = s.lerp((80 / 1140) * e, 0, n)),
                    (p.style.transform = 'translate3d(0,' + a + 'px,0)'),
                    (p.style.opacity = n))
              }
            }),
            (n.isActive = !1)
          var l = void 0,
            h = void 0,
            u = void 0,
            p = void 0
          function r() {
            ;(n.isActive = !n.isActive),
              document.documentElement.classList.toggle(
                'is-licenses',
                n.isActive,
              )
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/ease': 56,
          '../utils/math': 58,
        },
      ],
      52: [
        function (t, e, n) {
          'use strict'
          t('../xr/xr')
          ;(n.init = function () {
            const isAndroidChrome = document.documentElement.classList.contains('is-android-chrome')
            document.getElementById('prompt-btn').addEventListener('click', r),
                isAndroidChrome
                ? (document.querySelector(
                    '.prompt-msg.is-browser',
                  ).style.display = 'block')
                : (document.querySelector(
                    '.prompt-msg.is-device',
                  ).style.display = 'block')
          }),
            (n.show = function () {
              document.documentElement.classList.add('is-prompt')
            }),
            (n.hide = i)
          function r() {
            i()
          }
          function i() {
            document.documentElement.classList.remove('is-prompt')
          }
        },
        { '../xr/xr': 67 },
      ],
      53: [
        function (t, e, n) {
          'use strict'
          var r = t('../core/settings'),
            i = t('../core/properties'),
            a = t('../utils/math'),
            o = t('./uiBG'),
            s = t('./xrUI'),
            c = t('./footer'),
            l = t('./landing'),
            h = t('./about'),
            u = t('./licenses'),
            p = t('./prompt'),
            d = t('./cookies')
          ;(n.init = function () {
            c.init(),
              l.init(),
              h.init(),
              u.init(),
              p.init(),
              d.init(),
              i.isSupportWebXR && s.init()
            o.init()
          }),
            (n.onResize = function (t, e) {
              c.onResize(t, e),
                l.onResize(t, e),
                h.onResize(t, e),
                u.onResize(t, e),
                o.onResize(t, e)
            }),
            (n.update = function (t) {
              ;(i.showRatio = a.saturate(
                i.showRatio + 1 / r.SHOW_DURATION / 60,
              )),
                document.documentElement.classList.toggle(
                  'is-ready',
                  1 === i.showRatio,
                ),
                (i.aboutRatio = a.saturate(
                  i.aboutRatio + (h.isActive ? 1 : -1) / r.ABOUT_DURATION / 60,
                )),
                (i.licensesRatio = a.saturate(
                  i.licensesRatio +
                    (u.isActive ? 1 : -1.3) / r.LICENSES_DURATION / 60,
                )),
                i.isSupportWebXR && s.update(t)
              c.update(t), l.update(t), h.update(t), u.update(t), o.update(t)
            })
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/math': 58,
          './about': 47,
          './cookies': 48,
          './footer': 49,
          './landing': 50,
          './licenses': 51,
          './prompt': 52,
          './uiBG': 54,
          './xrUI': 55,
        },
      ],
      54: [
        function (t, e, x) {
          'use strict'
          var i = t('../core/settings'),
            b = t('../core/properties'),
            _ = t('../utils/math'),
            w = t('../utils/ease'),
            M = t('./footer'),
            S = t('../xr/xr'),
            n = t('three')
          ;(x.init = function () {
            ;(r = document.getElementById('bg-canvas')),
              (A = r.getContext('2d')),
              (B = new n.Color()),
              (N = new n.Color()),
              (U = new n.Color(i.COLOR_ACCENT_HEX)),
              (function () {
                var t = document.createElement('canvas'),
                  e = t.getContext('2d')
                ;(t.width = 35 * L),
                  (t.height = 16 * L),
                  (e.fillStyle = i.COLOR_DARK_HEX),
                  e.scale(L, L)
                for (var n = 4, r = 0; r < 5; r++)
                  e.fillRect(n, 0, 1, 2 == r ? 15 : 7), (n += 7)
                D = A.createPattern(t, 'repeat')
              })(),
              (function () {
                for (var t = 0; t < 8; t++) z[t] = new n.Vector2()
              })(),
              (R = new n.Vector3()),
              (C = new n.Vector3()),
              (P = new n.Vector3()),
              (O = new n.Vector3()),
              (I = new n.Vector3())
          }),
            (x.onResize = function (t, e) {
              ;(r.width = t * L), (r.height = e * L)
            }),
            (x.update = function (t) {
              if (S.isActive) return
              var e = void 0
              e = w.easeInOutCubic(_.crange(0.35, 0.85, b.showRatio))
              var n = b.width,
                r = b.height
              B.copy(b.darkColor).lerp(
                b.brightColor,
                Math.max(b.licensesRatio, b.aboutRatio),
              ),
                N.copy(b.brightColor).lerp(
                  b.darkColor,
                  Math.max(b.licensesRatio, b.aboutRatio),
                ),
                A.clearRect(0, 0, n * L, r * L),
                A.save(),
                (A.fillStyle = D),
                A.save(),
                A.translate(20 * L, -15 * (1 - e) * L),
                A.fillRect(0, 0, (n - 40) * L, 15 * L),
                A.restore(),
                A.save(),
                A.translate(20 * L, (r - M.HEIGHT * e + 15 * (1 - e)) * L),
                A.scale(1, -1),
                A.fillRect(0, 0, (n - 40) * L, 15 * L),
                A.restore(),
                A.save(),
                A.translate(n * L + 15 * (1 - e) * L, 0),
                A.rotate(0.5 * Math.PI),
                A.fillRect(0, 0, (r - M.HEIGHT) * L, 15 * L),
                A.restore(),
                A.save(),
                A.translate(-15 * (1 - e) * L, 0),
                A.scale(-1, 1),
                A.rotate(0.5 * Math.PI),
                A.fillRect(0, 0, (r - M.HEIGHT) * L, 15 * L),
                A.restore(),
                (A.globalCompositeOperation = 'source-in'),
                (A.fillStyle = B.getStyle()),
                A.fillRect(0, 0, n * L, r * L),
                A.restore(),
                A.save(),
                A.scale(L, L),
                A.save(),
                (A.fillStyle = N.getStyle()),
                (A.globalCompositeOperation = 'destination-over'),
                A.fillRect(0, 0, n, r),
                A.restore()
              var i = 1 - Math.max(b.licensesRatio, b.aboutRatio)
              {
                var a, o, s, c, l, h, u, p, d, f, m, v, g, y
                0 < i &&
                  ((a =
                    'rgba(' +
                    Math.round(255 * U.r) +
                    ',' +
                    Math.round(255 * U.g) +
                    ',' +
                    Math.round(255 * U.b) +
                    ',' +
                    i +
                    ')'),
                  (o = ((G += t) / H) % 10),
                  (s = void 0),
                  E.set(0.6, 1, 0.2),
                  (x.depthAngle = 1),
                  3 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 3) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    I.set(1, 0.5, 0.2),
                    E.lerp(I, s),
                    (x.depthAngle = _.lerp(x.depthAngle, -1, s))),
                  4 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 4) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    I.set(0.5, 0.5, 0.2),
                    E.lerp(I, s),
                    (x.depthAngle = _.lerp(x.depthAngle, -1, s))),
                  5 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 5) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    I.set(0.6, 0.7, 0.8),
                    E.lerp(I, s),
                    (x.depthAngle = _.lerp(x.depthAngle, -0.5, s))),
                  T.set(-1, 1, 1),
                  (s = _.saturate(1.5 * (Math.min(1, o) - 0.5) + 0.5)),
                  (s = w.easeInOutCubic(s)),
                  (T.x = s - 1),
                  1 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 1) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    (T.y = 1 - s)),
                  2 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 2) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    (T.z = 1 - s)),
                  6 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 6) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    (T.z = -s)),
                  7 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 7) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    (T.y = -s)),
                  8 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 8) - 0.5) + 0.5)),
                    (s = w.easeInOutCubic(s)),
                    (T.x = s)),
                  A.translate(0.5 * n, 0.4 * r),
                  (c = 0.6 * Math.min(850, Math.min(n, r))),
                  (R.x = T.x < 0 ? 0 : 1),
                  (R.y = T.y < 0 ? 0 : 1),
                  (R.z = T.z < 0 ? 0 : 1),
                  (l = Math.PI * (0.25 * x.depthAngle)),
                  O.set(1, 1, 1 / Math.cos(l)).multiplyScalar(0.8 * c),
                  P.copy(O).multiply(E),
                  C.set(
                    1 - Math.abs(T.x),
                    1 - Math.abs(T.y),
                    1 - Math.abs(T.z),
                  ).multiply(P),
                  (h = Math.sin(l) * C.z),
                  (u = Math.cos(-l) * C.z),
                  (p = Math.sin(l) * P.z),
                  (d = Math.cos(-l) * P.z),
                  (f = 0.5 * -p),
                  3 < o &&
                    ((s = _.saturate(1.5 * (Math.min(1, o - 3) - 0.5) + 0.5)),
                    (f = (1 - w.easeInOutCubic(s)) * -p * 0.5)),
                  A.translate(f, 0),
                  A.translate(
                    P.x * (-0.5 + R.x) + p * (-0.5 + R.z),
                    P.y * (-0.5 + R.y) + d * (-0.5 + R.z),
                  ),
                  z[0].set(0, C.y * (1 - 2 * R.y)),
                  z[1].set(C.x * (1 - 2 * R.x), C.y * (1 - 2 * R.y)),
                  z[2].set(0, 0),
                  z[3].set(C.x * (1 - 2 * R.x), 0),
                  z[4].set(
                    h * (1 - 2 * R.z),
                    C.y * (1 - 2 * R.y) + u * (1 - 2 * R.z),
                  ),
                  z[5].set(
                    C.x * (1 - 2 * R.x) + h * (1 - 2 * R.z),
                    C.y * (1 - 2 * R.y) + u * (1 - 2 * R.z),
                  ),
                  z[6].set(h * (1 - 2 * R.z), u * (1 - 2 * R.z)),
                  z[7].set(
                    C.x * (1 - 2 * R.x) + h * (1 - 2 * R.z),
                    u * (1 - 2 * R.z),
                  ),
                  (m = 1),
                  o < 0.15
                    ? (m = o / 0.15)
                    : 8.85 < o && (m = Math.max(0, (9 - o) / 0.15)),
                  (A.fillStyle = a),
                  k(z[0], m),
                  (v = Math.abs(T.x) < 1),
                  (g = Math.abs(T.y) < 1),
                  (y = Math.abs(T.z) < 1),
                  v && k(z[1], m),
                  g && (k(z[2], m), v && k(z[3], m)),
                  y &&
                    (k(z[4], m),
                    v && k(z[5], m),
                    g && (k(z[6], m), v && k(z[7], m))),
                  (A.strokeStyle = a),
                  (A.lineWidth = F),
                  V(z[0], z[1]),
                  V(z[2], z[3]),
                  V(z[0], z[2]),
                  V(z[1], z[3]),
                  V(z[0], z[4]),
                  V(z[1], z[5]),
                  V(z[2], z[6]),
                  V(z[3], z[7]),
                  V(z[4], z[5]),
                  V(z[6], z[7]),
                  V(z[4], z[6]),
                  V(z[5], z[7]))
              }
              A.restore()
            })
          var E = (x.sizes = new n.Vector3(1, 1, 0.5)),
            T = (x.sides = new n.Vector3(0, 0, 0))
          x.depthAngle = 0.75
          var r = void 0,
            A = void 0,
            L = window.devicePixelRatio ? window.devicePixelRatio : 1,
            R = void 0,
            C = void 0,
            P = void 0,
            O = void 0,
            I = void 0,
            D = void 0,
            B = void 0,
            N = void 0,
            U = void 0,
            z = [],
            a = 5,
            F = 1.5,
            H = 0.7,
            G = 0
          function k(t, e) {
            A.beginPath(),
              A.arc(t.x, t.y, a * e, 0, 2 * Math.PI),
              A.closePath(),
              A.fill()
          }
          function V(t, e) {
            2 < t.distanceTo(e) &&
              (A.beginPath(),
              A.moveTo(t.x, t.y),
              A.lineTo(e.x, e.y),
              A.closePath(),
              A.stroke())
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../utils/ease': 56,
          '../utils/math': 58,
          '../xr/xr': 67,
          './footer': 49,
          'three': 24,
        },
      ],
      55: [
        function (t, e, o) {
          'use strict'
          var n = t('../core/settings'),
            r = t('../core/properties'),
            i = t('three'),
            a = t('../xr/xr'),
            s = t('../ui/prompt'),
            c = t('../visuals/visuals'),
            l = t('../measurement/measurement'),
            h = t('../utils/math'),
            u = t('../utils/ease')
          ;(o.init = function () {
            ;(G = ht(nt, ot)),
              (k = ht(rt, st)),
              (V = ht(it)),
              (p = document.getElementById('xr-ui')),
              (d = document.querySelector('.xr__close')),
              (f = document.querySelector('.xr__how-to')),
              (m = document.querySelector('.xr__pin')),
              (v = document.querySelector('.xr__pin-spotlight')),
              (g = document.querySelector('.xr__pin-triangle')),
              (b = document.querySelector('.xr__unit-text')),
              (_ = document.querySelector('.xr__unit-btn')),
              (y = document.querySelector('.xr__undo')),
              (x = document.querySelector('.xr__done')),
              a.eventDispatcher.addEventListener('start', ut),
              a.eventDispatcher.addEventListener('end', pt),
              a.eventDispatcher.addEventListener('error', dt)
          }),
            (o.onResize = function (t, e) {}),
            (o.togglePinButton = function (t) {
              m.classList.toggle('is-refresh', !!t)
            }),
            (o.update = function (t) {
              ;(M += t),
                document.body.classList.toggle('reticle-is-visible', !!a.isHit),
                (R = a.isActive
                  ? ((I =
                      r.pinCanShow &&
                      ((l.isEditMode && !!a.isHit) ||
                        (l.isEditMode && 3 <= l.step) ||
                        !l.isEditMode)),
                    (E = 0 < l.step && l.isEditMode),
                    1 < l.step && l.step < 4 && l.isEditMode)
                  : (E = I = !1))
              ;(D = h.saturate(
                D + (I ? 1 : -1) / n.XR_BUTTONS_SHOW_DURATION / 60,
              )),
                (T = h.saturate(
                  T + (E ? 1 : -1) / n.XR_BUTTONS_SHOW_DURATION / 60,
                )),
                (C = h.saturate(
                  C + (R ? 1 : -1) / n.XR_BUTTONS_SHOW_DURATION / 60,
                )),
                (U = h.saturate(
                  U + (S ? -1 : 1) / n.XR_BUTTONS_SHOW_DURATION / 60,
                )),
                (c.reticle.visible = 0 < D),
                (c.reticle.ring.material.uniforms.u_opacity.value = 0.5 * D),
                (B = u.easeOutCubic(h.crange(0.35, 1, D))),
                (N = 1 - B),
                (A = u.easeOutCubic(h.crange(0.35, 1, T))),
                (L = 1 - A),
                (P = u.easeOutCubic(h.crange(0.35, 1, C))),
                (O = 1 - P),
                (z = u.easeOutCubic(h.crange(0.35, 1, U))),
                (F = h.cfit(Math.sin(3 * M), -1, 1, 0.85, 1)),
                (H = h.cfit(Math.sin(3 * M), -1, 1, 0, -35)),
                (m.style.pointerEvents = 0 < I ? 'all' : 'none'),
                (y.style.pointerEvents = 0 < E ? 'all' : 'none'),
                (x.style.pointerEvents = 0 < R ? 'all' : 'none'),
                (m.style.opacity = B),
                (y.style.opacity = A),
                (x.style.opacity = P),
                (v.style.opacity = z),
                (g.style.opacity = z),
                (m.style.transform = 'translate3d(0,' + 10 * N + 'px,0)'),
                (y.style.transform = 'translate3d(0,' + 10 * L + 'px,0)'),
                (x.style.transform = 'translate3d(0,' + 10 * O + 'px,0)'),
                (v.style.transform = 'scale(' + F + ')'),
                (g.style.transform = 'translate3d(0,' + H + 'px,0)'),
                (w = ''),
                l.distances.AB &&
                  ((w += (l.distances.AB * r.unitMultiplier).toFixed(1)),
                  l.distances.BC &&
                    ((w +=
                      ' x ' + (l.distances.BC * r.unitMultiplier).toFixed(1)),
                    l.distances.CD &&
                      (w +=
                        ' x ' +
                        (l.distances.CD * r.unitMultiplier).toFixed(1))))
              ;(b.innerHTML = w),
                (b.style.opacity = null !== l.distances.AB ? 1 : 0)
              var e =
                h.cfit(r.instructionShowRatio, 0.35, 0.55, 0, 1) *
                h.cfit(r.instructionHideRatio, 0, 0.3, 1, 0)
              ;(f.style.opacity = e),
                (f.style.transform =
                  'translateY(' +
                  40 * (1 - e) +
                  'px) translate3d(-50%, -50%, 0)')
            }),
            (o.inputEventDispatcher = new i.EventDispatcher()),
            (o.btnClickEventDispatcher = new i.EventDispatcher())
          var p = void 0,
            d = void 0,
            f = void 0,
            m = void 0,
            v = void 0,
            g = void 0,
            y = void 0,
            x = void 0,
            b = void 0,
            _ = void 0,
            w = '',
            M = 0,
            S = !1,
            E = !1,
            T = 0,
            A = 0,
            L = 0,
            R = !1,
            C = 0,
            P = 0,
            O = 0,
            I = !1,
            D = 0,
            B = 0,
            N = 0,
            U = 0,
            z = 0,
            F = 0,
            H = 0,
            G = void 0,
            k = void 0,
            V = void 0,
            j = !1,
            W = { x: -1, y: -1 },
            q = { x: -1, y: -1 },
            X = { x: -1, y: -1 },
            Y = { x: -1, y: -1 },
            Z = { x: -1, y: -1 },
            J = { x: -1, y: -1 }
          function Q() {
            d.removeEventListener('click', a.end),
              m.removeEventListener('click', K),
              y.removeEventListener('click', $),
              p.removeEventListener('mousedown', nt),
              p.removeEventListener('touchstart', G),
              p.removeEventListener('mousemove', rt),
              p.removeEventListener('touchmove', k),
              p.removeEventListener('mouseup', it),
              p.removeEventListener('touchend', V)
          }
          function K(t) {
            ;(S = !0),
              o.btnClickEventDispatcher.dispatchEvent({ type: 'pin', evt: t })
          }
          function $(t) {
            o.btnClickEventDispatcher.dispatchEvent({ type: 'undo', evt: t })
          }
          function tt(t) {
            o.btnClickEventDispatcher.dispatchEvent({ type: 'done', evt: t })
          }
          function et(t) {
            ;(r.unitIsInch = !r.unitIsInch),
              (_.innerHTML = r.unitIsInch ? 'in' : 'cm'),
              (r.unitMultiplier = r.unitIsInch ? 0.3937 : 1)
          }
          function nt(t) {
            ;(W = at(t)),
              (q = at(t)),
              (j = !0),
              o.inputEventDispatcher.dispatchEvent({
                type: 'down',
                evt: t,
                xy: W,
              }),
              rt(t)
          }
          function rt(t) {
            j &&
              ((q = at(t)),
              o.inputEventDispatcher.dispatchEvent({
                type: 'move',
                evt: t,
                xy: q,
              }))
          }
          function it(t) {
            ;(j = !1),
              o.inputEventDispatcher.dispatchEvent({
                type: 'up',
                evt: t,
                xy: q,
              })
          }
          function at(t) {
            var e = p.getBoundingClientRect()
            return {
              x: ((t.clientX - e.left) / e.width) * 2 - 1,
              y: 1 - ((t.clientY - e.top) / e.height) * 2,
            }
          }
          function ot(t, e) {
            ;(X = at(t)), (Y = at(e)), 0
            var n = ct(X, Y),
              r = lt(X, Y)
            o.inputEventDispatcher.dispatchEvent({
              type: 'multidown',
              evt: evt,
              xy1: X,
              xy2: Y,
              angle: n,
              distance: r,
            }),
              st(t, e)
          }
          function st(t, e) {
            ;(Z = at(t)), (J = at(e))
            var n = ct(X, Y),
              r = lt(X, Y),
              i = ct(Z, J),
              a = lt(Z, J)
            o.inputEventDispatcher.dispatchEvent({
              type: 'multimove',
              evt: evt,
              xy1: Z,
              xy2: J,
              downAngle: n,
              downDistance: r,
              angle: i,
              distance: a,
            })
          }
          function ct(t, e) {
            return Math.atan2(e.y - t.y, e.x - t.x)
          }
          function lt(t, e) {
            var n = e.x - t.x,
              r = e.y - t.y
            return Math.sqrt(n * n + r * r)
          }
          function ht(e, n) {
            return function (t) {
              n && 2 == t.touches.length
                ? n.call(this, t.touches[0], t.touches[1])
                : e.call(this, t.changedTouches[0] || t.touches[0])
            }
          }
          function ut() {
            d.addEventListener('click', a.end),
              m.addEventListener('click', K),
              y.addEventListener('click', $),
              x.addEventListener('click', tt),
              _.addEventListener('click', et),
              p.addEventListener('mousedown', nt),
              p.addEventListener('touchstart', G),
              p.addEventListener('mousemove', rt),
              p.addEventListener('touchmove', k),
              p.addEventListener('mouseup', it),
              p.addEventListener('touchend', V)
          }
          function pt() {
            ;(S = !1), Q()
          }
          function dt(t) {
            Q(), s.show()
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../measurement/measurement': 39,
          '../ui/prompt': 52,
          '../utils/ease': 56,
          '../utils/math': 58,
          '../visuals/visuals': 66,
          '../xr/xr': 67,
          'three': 24,
        },
      ],
      56: [
        function (t, e, n) {
          'use strict'
          var r = {
            Linear: {
              None: function (t) {
                return t
              },
            },
            Quad: {
              In: function (t) {
                return t * t
              },
              Out: function (t) {
                return t * (2 - t)
              },
              InOut: function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
              },
            },
            Cubic: {
              In: function (t) {
                return t * t * t
              },
              Out: function (t) {
                return --t * t * t + 1
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t
                  : 0.5 * ((t -= 2) * t * t + 2)
              },
            },
            Quart: {
              In: function (t) {
                return t * t * t * t
              },
              Out: function (t) {
                return 1 - --t * t * t * t
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t
                  : -0.5 * ((t -= 2) * t * t * t - 2)
              },
            },
            Quint: {
              In: function (t) {
                return t * t * t * t * t
              },
              Out: function (t) {
                return --t * t * t * t * t + 1
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t * t
                  : 0.5 * ((t -= 2) * t * t * t * t + 2)
              },
            },
            Sine: {
              In: function (t) {
                return 1 - Math.cos((t * Math.PI) / 2)
              },
              Out: function (t) {
                return Math.sin((t * Math.PI) / 2)
              },
              InOut: function (t) {
                return 0.5 * (1 - Math.cos(Math.PI * t))
              },
            },
            Expo: {
              In: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
              },
              Out: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
              },
              InOut: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : (t *= 2) < 1
                      ? 0.5 * Math.pow(1024, t - 1)
                      : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
              },
            },
            Circular: {
              In: function (t) {
                return 1 - Math.sqrt(1 - t * t)
              },
              Out: function (t) {
                return Math.sqrt(1 - --t * t)
              },
              InOut: function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
              },
            },
            Elastic: {
              In: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : -Math.pow(2, 10 * (t - 1)) *
                      Math.sin(5 * (t - 1.1) * Math.PI)
              },
              Out: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : Math.pow(2, -10 * t) * Math.sin(5 * (t - 0.1) * Math.PI) +
                      1
              },
              InOut: function (t) {
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : (t *= 2) < 1
                      ? -0.5 *
                        Math.pow(2, 10 * (t - 1)) *
                        Math.sin(5 * (t - 1.1) * Math.PI)
                      : 0.5 *
                          Math.pow(2, -10 * (t - 1)) *
                          Math.sin(5 * (t - 1.1) * Math.PI) +
                        1
              },
            },
            Back: {
              In: function (t) {
                return t * t * (2.70158 * t - 1.70158)
              },
              Out: function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
              },
              InOut: function (t) {
                var e = 2.5949095
                return (t *= 2) < 1
                  ? t * t * ((1 + e) * t - e) * 0.5
                  : 0.5 * ((t -= 2) * t * ((1 + e) * t + e) + 2)
              },
            },
            Bounce: {
              In: function (t) {
                return 1 - r.Bounce.Out(1 - t)
              },
              Out: function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
              },
              InOut: function (t) {
                return t < 0.5
                  ? 0.5 * r.Bounce.In(2 * t)
                  : 0.5 * r.Bounce.Out(2 * t - 1) + 0.5
              },
            },
          }
          n.linear = r.Linear.None
          var i = void 0,
            a = void 0
          for (i in r)
            'Linear' !== i &&
              ((a = r[i]),
              (n['easeIn' + i] = a.In),
              (n['easeOut' + i] = a.Out),
              (n['easeInOut' + i] = a.InOut),
              (n['easeOutIn' + i] = a.OutIn =
                (function (e, n) {
                  return function (t) {
                    return t < 0.5 ? 0.5 * n(2 * t) : 0.5 * e(2 * t - 1) + 0.5
                  }
                })(a.In, a.Out)))
        },
        {},
      ],
      57: [
        function (t, e, n) {
          'use strict'
          n.parseBuf = function (t) {
            for (
              var e = new Uint32Array(t, 0, 1)[0],
                n = JSON.parse(
                  String.fromCharCode.apply(null, new Uint8Array(t, 4, e)),
                ),
                r = n.vertexCount,
                i = n.indexCount,
                a = 4 + e,
                o = new THREE.BufferGeometry(),
                s = n.attributes,
                c = 0,
                l = s.length;
              c < l;
              c++
            ) {
              var h = s[c],
                u = h.id,
                p = 'indices' === u ? i : r,
                d = h.componentSize,
                f = window[h.storageType],
                m = new f(t, a, p * d),
                v = f.BYTES_PER_ELEMENT,
                g = void 0
              if (h.needsPack) {
                var y = h.packedComponents,
                  x = y.length,
                  b = 0 === h.storageType.indexOf('Int'),
                  _ = 1 << (8 * v),
                  w = b ? 0.5 * _ : 0,
                  M = 1 / _
                g = new Float32Array(p * d)
                for (var S = 0, E = 0; S < p; S++)
                  for (var T = 0; T < x; T++) {
                    var A = y[T]
                    ;(g[E] = (m[E] + w) * M * A.delta + A.from), E++
                  }
              } else g = m
              'indices' === u
                ? o.setIndex(new THREE.BufferAttribute(g, 1))
                : o.setAttribute(u, new THREE.BufferAttribute(g, d)),
                (a += p * d * v)
            }
            return o
          }
        },
        {},
      ],
      58: [
        function (t, e, n) {
          'use strict'
          function r(t, e, n) {
            return Math.min(n, Math.max(e, t))
          }
          function i(t) {
            return r(t, 0, 1)
          }
          function o(t, e, n) {
            return n * (e - t) + t
          }
          function s(t, e, n) {
            return (n - t) / (e - t)
          }
          function c(t, e, n) {
            return i(s(t, e, n))
          }
          ;(n.clamp = r),
            (n.saturate = i),
            (n.lerp = o),
            (n.range = s),
            (n.crange = c),
            (n.fit = function (t, e, n, r, i, a) {
              ;(t = s(e, n, t)), a && (t = a(t))
              return o(r, i, t)
            }),
            (n.cfit = function (t, e, n, r, i, a) {
              ;(t = c(e, n, t)), a && (t = a(t))
              return o(r, i, t)
            })
        },
        {},
      ],
      59: [
        function (t, e, n) {
          e.exports =
            'uniform float u_opacity;\r\n\r\nvarying vec3 v_viewNormal;\r\nvarying vec3 v_color;\r\nvarying float v_ao;\r\n\r\nvoid main () {\r\n\r\n\tfloat diff = smoothstep(-2.0, 1.0, dot(normalize(v_viewNormal), vec3(0.57735))) + 0.1;\r\n\r\n\tvec3 color = v_color * diff * (0.85 + v_ao * 0.15);\r\n\tgl_FragColor = vec4(color, u_opacity);\r\n}'
        },
        {},
      ],
      60: [
        function (r, t, e) {
          'use strict'
          var n = r('../../../core/settings'),
            i = r('../../../core/properties'),
            a = r('../../../utils/geom'),
            o = r('../../../xr/xr'),
            s = r('../../../utils/math'),
            c = r('../../../utils/ease')
          ;(e.init = function () {
            ;(u = { value: 0 }),
              (l = e.container = new THREE.Object3D()),
              (h = new THREE.Object3D()),
              l.add(h)

            if (1) {
              var t = new XMLHttpRequest()
              t.open('GET', n.MODELS_PATH + 'hand.buf'),
                (t.responseType = 'arraybuffer'),
                (t.onload = function () {
                    var t, e, n;
                    200 === this.status && (t = a.parseBuf(this.response),
                    e = new THREE.ShaderMaterial({
                        uniforms: {
                            u_handColor: {
                                value: new THREE.Color(16579836)
                            },
                            u_screenColor: {
                                value: new THREE.Color(2169372)
                            },
                            u_opacity: u
                        },
                        transparent: !0,
                        vertexShader: r("./hand.vert"),
                        fragmentShader: r("./hand.frag")
                    }),
                    (n = new THREE.Mesh(t,e)).scale.set(1, 1, 1).multiplyScalar(.3),
                    h.add(n),
                    n.renderOrder = 4096)
                }),
                t.send()
            } else {

              ;(function () {
                var t, e, n
                ;(e = new THREE.ShaderMaterial({
                  uniforms: {
                    u_handColor: { value: new THREE.Color(16579836) },
                    u_screenColor: { value: new THREE.Color(2169372) },
                    u_opacity: u,
                  },
                  transparent: !0,
                  vertexShader: r('./hand.vert'),
                  fragmentShader: r('./hand.frag'),
                })),
                  (t = new THREE.BoxGeometry(1, 1, 1)),
                  (n = new THREE.Mesh(t, e)).scale
                    .set(1, 1, 1)
                    .multiplyScalar(0.3),
                  h.add(n),
                  (n.renderOrder = 4096)
              })()
            }
          }),
            (e.reset = function () {
              p = 0
            }),
            (e.update = function (t) {
              var e = o.getCamera()
              ;(p += t),
                (h.rotation.x = 0.2 * Math.sin(5 * -p) + 0.3),
                (h.rotation.y = 0.3 * Math.cos(3 * p)),
                (h.rotation.z = 0.1 * Math.cos(2 * p))
              var n =
                s.cfit(i.instructionShowRatio, 0.35, 0.55, 0, 1) *
                s.cfit(i.instructionHideRatio, 0, 0.3, 1, 0)
              ;(u.value = n),
                l.position.copy(e.position),
                l.quaternion.copy(e.quaternion),
                l.translateZ(-0.2),
                l.translateY(0.05 * c.easeOutSine(n) - 0.03),
                (l.visible = 0 < n)
            })
          var l = (e.container = null),
            h = void 0,
            u = void 0,
            p = 0
        },
        {
          '../../../core/properties': 29,
          '../../../core/settings': 30,
          '../../../utils/ease': 56,
          '../../../utils/geom': 57,
          '../../../utils/math': 58,
          '../../../xr/xr': 67,
          './hand.frag': 59,
          './hand.vert': 61,
        },
      ],
      61: [
        function (t, e, n) {
          e.exports =
            'attribute float occlusion;\r\n\r\nuniform vec3 u_handColor;\r\nuniform vec3 u_screenColor;\r\n\r\nvarying vec3 v_viewNormal;\r\nvarying vec3 v_color;\r\nvarying float v_ao;\r\n\r\nvoid main () {\r\n\tfloat isHand = occlusion > 0.05 ? 1.0 : 0.0;\r\n\tv_ao = mix(1.0, (occlusion - 0.1) * 1.11111, isHand);\r\n\tv_color = mix(u_screenColor, u_handColor, isHand);\r\n\r\n\tv_viewNormal = normalMatrix * normalize(normal);\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}'
        },
        {},
      ],
      62: [
        function (e, t, n) {
          'use strict'
          var r = e('three'),
            i = e('../../../xr/xr'),
            a = e('./reticleData'),
            o = e('../../../utils/math'),
            s = e('../../../utils/ease')
          function c() {
            l.constructor.call(this),
              (this.ratio = 0),
              (this.innerRadius = 0.08),
              (this.outerRadius = 0.1),
              (this.spikeRadius = 0.12),
              (this.visible = !1)
            var t = new r.BufferGeometry()
            t.addAttribute('position', new r.BufferAttribute(a.position, 3)),
              t.setIndex(new r.BufferAttribute(a.indices, 1)),
              (this.ring = new r.Mesh(
                t,
                new r.ShaderMaterial({
                  uniforms: {
                    u_innerRadius: { value: 0.08 },
                    u_outerRadius: { value: 0.1 },
                    u_spikeRadius: { value: 0.12 },
                    u_opacity: { value: 0.5 },
                  },
                  vertexShader: e('./reticle.vert'),
                  fragmentShader: e('./reticle.frag'),
                  transparent: !0,
                  side: r.BackSide,
                  depthTest: !1,
                  depthWrite: !1,
                }),
              )),
              this.add(this.ring),
              (this.center = new r.Mesh(
                new r.CircleBufferGeometry(0.01, 16).rotateX(-Math.PI / 2),
                new r.MeshBasicMaterial({
                  transparent: !0,
                  opacity: 1,
                  depthTest: !1,
                  depthWrite: !1,
                }),
              )),
              this.add(this.center),
              (this.renderOrder = 1e4)
          }
          var l = r.Object3D.prototype,
            h = (c.prototype = Object.create(l))
          t.exports = c
          h.update = function (t) {
            this.visible || (this.ratio = 0)
            this.ratio = Math.min(1, this.ratio + 1.5 * t)
            var e = this.ring.material.uniforms
            ;(e.u_innerRadius.value = o.cfit(
              this.ratio,
              0.2,
              0.85,
              0,
              this.innerRadius,
              s.easeInOutSine,
            )),
              (e.u_outerRadius.value = o.cfit(
                this.ratio,
                0,
                0.65,
                0,
                this.outerRadius,
                s.easeInOutSine,
              )),
              (e.u_spikeRadius.value = o.cfit(
                this.ratio,
                0.5,
                1,
                0,
                this.spikeRadius,
                s.easeInOutSine,
              )),
              this.position.copy(i.hitPos),
              this.quaternion.copy(i.hitQuat)
          }
        },
        {
          '../../../utils/ease': 56,
          '../../../utils/math': 58,
          '../../../xr/xr': 67,
          './reticle.frag': 63,
          './reticle.vert': 64,
          './reticleData': 65,
          'three': 24,
        },
      ],
      63: [
        function (t, e, n) {
          e.exports =
            'uniform float u_opacity;\r\nvoid main () {\r\n\tgl_FragColor = vec4(1.0, 1.0, 1.0, u_opacity);\r\n}'
        },
        {},
      ],
      64: [
        function (t, e, n) {
          e.exports =
            'uniform float u_innerRadius;\r\nuniform float u_outerRadius;\r\nuniform float u_spikeRadius;\r\n\r\nfloat PI = 3.141592653589793;\r\nfloat PI2 = 6.283185307179586;\r\n\r\nvoid main () {\r\n\tvec3 pos = position;\r\n\tfloat radius = length(pos);\r\n\r\n\tvec3 isSpike = step(vec3(1.5), abs(position));\r\n\tvec3 spike = isSpike * sign(position);\r\n\r\n\tvec3 basePos = position - spike;\r\n\tfloat angle = atan(basePos.z, basePos.x);\r\n\r\n\tradius = radius < 0.75 ? u_innerRadius : u_outerRadius;\r\n\tpos = vec3(\r\n\t\tcos(angle),\r\n\t\t0.0,\r\n\t\tsin(angle)\r\n\t) * radius;\r\n\r\n\tpos = mix(pos, spike * u_spikeRadius, isSpike);\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r\n}'
        },
        {},
      ],
      65: [
        function (t, e, n) {
          'use strict'
          ;(n.position = new Float32Array([
            -0.980785012, 0, 0.195089996, -0.995037973, 0, 0.0990089998, -2, 0,
            0.100000001, -2, 0, 0, -2, 0, -0.100000001, 0.100000001, 0, 2, 0, 0,
            2, -0.0990080014, 0, 0.995037973, -0.100000001, 0, 2, 0.995037973,
            0, -0.0990089998, 0.0990089998, 0, -0.995037973, 0, 0, -2,
            -0.0990089998, 0, -0.995037973, 0.0990089998, 0, 0.995037973,
            -0.995037973, 0, -0.0990089998, 0.100000001, 0, -2, -0.100000001, 0,
            -2, 0.995037973, 0, 0.0990080014, 2, 0, 0.100000001, 2, 0, 0, 2, 0,
            -0.100000001, -0.0975449979, 0, 0.490393013, -0.145142004, 0,
            0.478469998, -0.0490080006, 0, 0.497592002, 0, 0, 0.5, -0.191341996,
            0, 0.461939991, -0.195089996, 0, 0.980785012, -0.235698, 0,
            0.440961003, -0.277785003, 0, 0.415735006, -0.290284991, 0,
            0.956939995, -0.317196995, 0, 0.386505008, -0.353552997, 0,
            0.353552997, -0.382683009, 0, 0.923879981, -0.386505008, 0,
            0.317196995, -0.415735006, 0, 0.277785003, -0.440961003, 0,
            0.235698, -0.461939991, 0, 0.191341996, -0.471397012, 0,
            0.881920993, -0.478469998, 0, 0.145142004, -0.490393013, 0,
            0.0975449979, -0.497592002, 0, 0.049008999, -0.5, 0, 0,
            -0.555570006, 0, 0.831470013, -0.471397012, 0, -0.881920993,
            -0.497592002, 0, -0.049008999, -0.490393013, 0, -0.0975449979,
            -0.478469998, 0, -0.145142004, -0.461939991, 0, -0.191341996,
            -0.382683992, 0, -0.923879981, -0.440961003, 0, -0.235698,
            -0.415735006, 0, -0.277785003, -0.386505008, 0, -0.317196995,
            -0.353552997, 0, -0.353552997, -0.290284991, 0, -0.956939995,
            -0.317196995, 0, -0.386505008, -0.277785003, 0, -0.415735006,
            -0.195089996, 0, -0.980785012, -0.235698, 0, -0.440961003,
            -0.191341996, 0, -0.461939991, -0.145142004, 0, -0.478469998,
            -0.0975449979, 0, -0.490393013, -0.049008999, 0, -0.497592002, 0, 0,
            -0.5, 0.049008999, 0, -0.497592002, 0.0975449979, 0, -0.490393013,
            0.145142004, 0, -0.478469998, 0.195089996, 0, -0.980785012,
            0.191341996, 0, -0.461939991, 0.235698, 0, -0.440961003,
            0.290284991, 0, -0.956939995, 0.277785003, 0, -0.415735006,
            0.317196995, 0, -0.386505008, 0.382683009, 0, -0.923879981,
            0.353552997, 0, -0.353552997, 0.386505008, 0, -0.317196995,
            0.471397012, 0, -0.881920993, 0.415735006, 0, -0.277785003,
            0.440961003, 0, -0.235698, 0.461939991, 0, -0.191341996,
            0.478469998, 0, -0.145142004, 0.555570006, 0, -0.831470013,
            0.490393013, 0, -0.0975449979, 0.497592002, 0, -0.049008999, 0.5, 0,
            0, 0.555570006, 0, 0.831468999, 0.634392977, 0, -0.773010015,
            0.634392977, 0, 0.773010015, 0.707107008, 0, -0.707107008,
            0.707107008, 0, 0.707107008, 0.773010015, 0, -0.634392977,
            0.773011029, 0, 0.634392977, 0.831470013, 0, 0.555570006,
            0.881920993, 0, 0.471397012, 0.923879981, 0, 0.382683009,
            0.956939995, 0, 0.290284008, 0.980785012, 0, 0.195089996,
            0.831470013, 0, -0.555570006, 0.881920993, 0, -0.471397012,
            0.923879981, 0, -0.382683009, 0.956939995, 0, -0.290284991,
            0.980785012, 0, -0.195089996, 0.497592002, 0, 0.0490080006,
            0.490393013, 0, 0.0975449979, 0.478469998, 0, 0.145142004,
            0.471397012, 0, 0.881920993, 0.461939991, 0, 0.191341996,
            0.440961003, 0, 0.235698, 0.415735006, 0, 0.277785003, 0.386505008,
            0, 0.317196995, 0.382683992, 0, 0.923879027, 0.35355401, 0,
            0.353552997, 0.317196995, 0, 0.386505008, 0.290284991, 0,
            0.956939995, 0.277785003, 0, 0.415735006, 0.235698, 0, 0.440961003,
            0.195089996, 0, 0.980785012, 0.191341996, 0, 0.461939991,
            0.145143002, 0, 0.478469998, 0.0975449979, 0, 0.490393013,
            0.049008999, 0, 0.497592002, -0.555570006, 0, -0.831470013,
            -0.634392977, 0, -0.773010015, -0.634392977, 0, 0.773010015,
            -0.707107008, 0, 0.707107008, -0.707107008, 0, -0.707107008,
            -0.773010015, 0, 0.634392977, -0.773010015, 0, -0.634392977,
            -0.831470013, 0, 0.555570006, -0.831470013, 0, -0.555570006,
            -0.881920993, 0, 0.471397012, -0.881920993, 0, -0.471397012,
            -0.923879981, 0, 0.382683009, -0.923879981, 0, -0.382683009,
            -0.956939995, 0, 0.290284991, -0.956939995, 0, -0.290284991,
            -0.980785012, 0, -0.195089996,
          ])),
            (n.indices = new Uint8Array([
              62, 10, 63, 118, 13, 119, 79, 80, 81, 80, 70, 75, 75, 68, 72, 80,
              73, 71, 72, 67, 69, 69, 65, 66, 10, 16, 15, 15, 16, 11, 68, 67,
              72, 66, 64, 10, 79, 78, 80, 71, 70, 80, 78, 77, 80, 77, 76, 80,
              76, 74, 80, 10, 12, 16, 12, 60, 56, 56, 59, 53, 58, 48, 53, 48,
              50, 49, 48, 51, 50, 10, 62, 12, 53, 59, 58, 52, 51, 48, 74, 73,
              80, 48, 54, 52, 48, 55, 54, 70, 68, 75, 48, 57, 55, 48, 58, 57,
              67, 65, 69, 65, 64, 66, 56, 60, 59, 63, 10, 64, 12, 61, 60, 12,
              62, 61, 47, 130, 49, 49, 43, 48, 120, 43, 49, 120, 49, 121, 121,
              49, 124, 124, 49, 126, 126, 49, 128, 49, 130, 128, 130, 47, 132,
              46, 134, 132, 134, 45, 135, 45, 14, 135, 14, 2, 4, 4, 2, 3, 45,
              44, 14, 132, 47, 46, 46, 45, 134, 14, 1, 2, 1, 39, 0, 0, 39, 133,
              1, 40, 39, 133, 38, 131, 131, 36, 129, 129, 35, 127, 127, 34, 125,
              125, 31, 123, 123, 30, 122, 28, 42, 122, 42, 27, 37, 27, 25, 37,
              37, 25, 32, 32, 25, 29, 29, 22, 26, 26, 21, 7, 29, 25, 22, 7, 13,
              8, 8, 5, 6, 13, 5, 8, 13, 118, 115, 115, 118, 112, 13, 7, 24, 112,
              117, 109, 109, 116, 104, 104, 114, 84, 84, 113, 86, 86, 110, 88,
              88, 108, 90, 107, 91, 90, 91, 106, 92, 105, 93, 92, 93, 103, 94,
              102, 95, 94, 95, 102, 17, 101, 83, 17, 17, 20, 18, 18, 20, 19, 20,
              17, 9, 9, 81, 100, 100, 81, 99, 9, 83, 82, 99, 81, 98, 98, 81, 97,
              97, 81, 96, 96, 81, 89, 89, 81, 87, 87, 81, 85, 85, 81, 80, 81, 9,
              82, 94, 103, 102, 17, 102, 101, 90, 108, 107, 92, 106, 105, 118,
              117, 112, 116, 114, 104, 7, 23, 24, 24, 119, 13, 21, 23, 7, 17,
              83, 9, 122, 30, 28, 39, 38, 133, 36, 35, 129, 14, 41, 1, 41, 14,
              44, 40, 1, 41, 42, 28, 27, 93, 105, 103, 26, 22, 21, 38, 36, 131,
              35, 34, 127, 91, 107, 106, 88, 110, 108, 33, 125, 34, 31, 125, 33,
              86, 111, 110, 30, 123, 31, 86, 113, 111, 113, 84, 114, 116, 109,
              117,
            ]))
        },
        {},
      ],
      66: [
        function (t, e, n) {
          'use strict'
          var r = t('../core/settings'),
            i = t('../core/properties'),
            a = t('../utils/math'),
            o = (t('../utils/ease'), t('../xr/xr')),
            s = t('./objects/hand/hand'),
            c = t('three'),
            l = t('../measurement/measurement'),
            h = t('./objects/reticle/Reticle')
          ;(n.container = null),
            (n.reticle = null),
            (n.init = function () {
              ;(n.container = new c.Object3D()),
                l.init(),
                n.container.add(l.container),
                (n.reticle = new h()),
                n.container.add(n.reticle),
                s.init(),
                n.container.add(s.container),
                o.eventDispatcher.addEventListener('start', v),
                o.eventDispatcher.addEventListener('end', g)
            }),
            (n.update = function (t) {
              o.isActive &&
                (u
                  ? (i.instructionShowRatio = a.saturate(
                      i.instructionShowRatio +
                        1 / r.XR_INSTRUCTION_SHOW_DURATION / 60,
                    ))
                  : o.isHit &&
                    !m &&
                    (function () {
                      d && clearTimeout(d)
                      f && clearTimeout(f)
                      ;(m = !0), (i.pinCanShow = !0)
                    })(),
                p &&
                  ((i.instructionHideRatio = a.saturate(
                    i.instructionHideRatio +
                      (o.hasHit ? 1 : -1) / r.XR_INSTRUCTION_HIDE_DURATION / 60,
                  )),
                  (i.pinCanShow = 0.5 < i.instructionHideRatio)),
                n.reticle.update(t),
                l.update(t),
                s.update(t))
            }),
            (n.eventDispatcher = new c.EventDispatcher())
          var u = !1,
            p = !1,
            d = void 0,
            f = void 0,
            m = !1
          function v(t) {
            ;(m = p = u = !1), s.reset(), (d = setTimeout(y, 2500))
          }
          function g(t) {
            ;(i.instructionShowRatio = 0),
              (i.instructionHideRatio = 0),
              (i.pinCanShow = !1)
          }
          function y() {
            ;(u = !0), (f = setTimeout(x, 4e3))
          }
          function x() {
            p = !0
          }
        },
        {
          '../core/properties': 29,
          '../core/settings': 30,
          '../measurement/measurement': 39,
          '../utils/ease': 56,
          '../utils/math': 58,
          '../xr/xr': 67,
          './objects/hand/hand': 60,
          './objects/reticle/Reticle': 62,
          'three': 24,
        },
      ],
      67: [
        function (t, e, s) {
          'use strict'
          var n = t('three'),
            c = t('../core/properties')
          ;(s.checkCompatibility = function (e) {
            null !== s.isSupportAR
              ? e(s.isSupportAR)
              : navigator.xr && navigator.xr.isSessionSupported
                ? navigator.xr
                    .isSessionSupported('immersive-ar')
                    .then(function (t) {
                      ;(s.isSupportAR = t),
                        requestAnimationFrame(function () {
                          e(s.isSupportAR)
                        })
                    })
                    .catch(function () {
                      ;(s.isSupportAR = !1), e(!1)
                    })
                : e(!1)
          }),
            (s.start = function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              {
                s.isSupportAR &&
                  !s.isActive &&
                  navigator.xr
                    .requestSession('immersive-ar', t)
                    .then(i)
                    .catch(function (t) {
                      s.eventDispatcher.dispatchEvent({
                        type: 'error',
                        error: 1,
                        caughtError: t,
                      })
                    })
              }
              s.isSupportAR ||
                s.eventDispatcher.dispatchEvent({
                  type: 'error',
                  error: 0,
                  caughtError: null,
                })
            }),
            (s.end = function () {
              s.isSupportAR && s.isActive && s.session.end()
            }),
            (s.getResolution = function (t) {
              var e = c.renderer.xr
              {
                var n
                e.enabled && e.isPresenting
                  ? ((n = e.getSession().renderState.baseLayer),
                    t.set(n.framebufferWidth, n.framebufferHeight))
                  : c.renderer.getSize(t)
              }
            }),
            (s.getCamera = function () {
              var t = c.renderer.xr
              return t.enabled && t.isPresenting
                ? t.getCamera(c.camera)
                : c.camera
            }),
            (s.hitTest = function (t, e) {
              {
                var n, r, i, a, o
                ;(s.wasHit = s.isHit),
                  t && s.isActive
                    ? ((n = c.renderer.xr.getReferenceSpace()),
                      (r = c.renderer.xr.getSession()),
                      !1 === l &&
                        (r.requestReferenceSpace('viewer').then(function (t) {
                          r.requestHitTestSource({ space: t }).then(
                            function (t) {
                              h = t
                            },
                          )
                        }),
                        (l = !0)),
                      h &&
                        ((i = t.getHitTestResults(h)).length
                          ? ((a = i[0]),
                            (o = !0),
                            f.fromArray(a.getPose(n).transform.matrix),
                            f.decompose(u, d, p),
                            p.set(0, 1, 0),
                            p.applyQuaternion(d).normalize(),
                            s.isHorizontalOnly &&
                              (o = p.y > s.isHorizontalOnlyNormalYThreshold),
                            o &&
                              ((s.hasHit = !0),
                              (s.isHit = !0),
                              s.hitMatrix.copy(f),
                              s.hitPos.copy(u),
                              s.hitQuat.copy(d),
                              s.hitPlane.setFromNormalAndCoplanarPoint(
                                p,
                                s.hitPos,
                              )))
                          : (s.isHit = !1)))
                    : (s.isHit = null)
              }
            }),
            (s.isActive = !1),
            (s.session = null),
            (s.isSupportAR = null),
            (s.eventDispatcher = new n.EventDispatcher()),
            (s.hitPos = new n.Vector3()),
            (s.hitQuat = new n.Quaternion()),
            (s.hitMatrix = new n.Matrix4()),
            (s.hitPlane = new n.Plane()),
            (s.isHit = null),
            (s.wasHit = null),
            (s.hasHit = !1),
            (s.isHorizontalOnly = !0)
          var l = !(s.isHorizontalOnlyNormalYThreshold = 0.75),
            h = void 0,
            r = void 0,
            u = new n.Vector3(),
            p = new n.Vector3(),
            d = new n.Quaternion(),
            f = new n.Matrix4()
          function i(t) {
            t.addEventListener('end', o),
              (s.session = t),
              c.renderer.xr.setReferenceSpaceType('local'),
              c.renderer.xr.setSession(t),
              (s.isActive = !0),
              s.eventDispatcher.dispatchEvent({ type: 'start' }),
              r ||
                ((r = c.renderer.xr.getController(0)).addEventListener(
                  'select',
                  a,
                ),
                c.scene.add(r))
          }
          function a() {}
          function o() {
            s.session.removeEventListener('end', o),
              (s.session = null),
              (s.isActive = !1),
              (s.hasHit = !1),
              (s.isHit = !1),
              (l = !1),
              (h = null),
              s.eventDispatcher.dispatchEvent({ type: 'end' })
          }
        },
        { '../core/properties': 29, 'three': 24 },
      ],
    },
    {},
    [31],
  )
}
/*
     FILE ARCHIVED ON 09:55:32 Jun 22, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:11:13 Jan 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.783
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.027
  esindex: 0.019
  cdx.remote: 31.101
  LoadShardBlock: 234.15 (3)
  PetaboxLoader3.datanode: 133.554 (4)
  PetaboxLoader3.resolve: 223.418 (2)
  load_resource: 131.519
*/
