var tts;

tts = function(mode) {
  var a, b, c, d, e, e1, e2, e3, f, g, h, i, j, k, l, m, n, o, p, pin, pin2, pin3, pinO, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, txt, txt2, txt3, txt4, txt5, txt6, u, v;
  // Prepare text
  txt = document.getElementById('ta').value;
  txt = txt.replace(/\s/g, '`');
  txt = txt.toUpperCase();
  txt2 = txt.slice(0, txt.length);
  txt3 = txt2.split('');
  txt4 = txt.replace(/~/g, '');
  txt5 = txt4.split('');
  txt6 = txt5.length;
  // Get variables and remove non-digit characters in PIN.
  pinO = document.getElementById('wp').value;
  pin = pinO.replace(/\D/g, '');
  pin = pin.split('');
  pin2 = pin.map(function(x) {
    return parseInt(x, 10);
  });
  pin3 = Math.max.apply(null, pin2);
  // PIN counter
  a = 0;
  e = [];
  while (a < txt6) {
    for (b = i = 0, ref = pin2.length; (0 <= ref ? i < ref : i > ref); b = 0 <= ref ? ++i : --i) {
      d = [];
      a += pin2[b];
// Split into PIN chunks
      for (c = q = 0, ref1 = pinO[b]; (0 <= ref1 ? q < ref1 : q > ref1); c = 0 <= ref1 ? ++q : --q) {
        d += txt5.shift();
      }
      e.push(d);
    }
  }
  // Get rid of excess
  e1 = e.map(function(x) {
    return x.replace(/undefined/g, '');
  });
  e2 = e1.filter(function(x) {
    return x !== '';
  });
  e3 = e2.slice(0, e.length);
// Fill
  for (j = r = 0, ref2 = e2.length; (0 <= ref2 ? r < ref2 : r > ref2); j = 0 <= ref2 ? ++r : --r) {
    while (e2[j].length < pin3) {
      e2[j] += '~';
    }
  }
  // Arrange
  f = [];
  for (k = s = 0, ref3 = e2.length; (0 <= ref3 ? s < ref3 : s > ref3); k = 0 <= ref3 ? ++s : --s) {
    f.push(e2[k].split(''));
  }
  g = [];
// Max array length is 9
  for (l = t = 0; t < 9; l = ++t) {
    for (m = u = 0, ref4 = f.length; (0 <= ref4 ? u < ref4 : u > ref4); m = 0 <= ref4 ? ++u : --u) {
      // Access & move array items within another array
      h = f[m];
      g.push(h[l]);
    }
  }
  g = g.toString();
  g = g.replace(/,/g, '');
  // Dearrange
  n = [];
  n.length = e3.length;
  while (txt3.length !== 0) {
    for (o = v = 0, ref5 = e3.length; (0 <= ref5 ? v < ref5 : v > ref5); o = 0 <= ref5 ? ++v : --v) {
      p = txt3.shift();
      n[o] += p;
    }
  }
  n = n.toString();
  n = n.replace(/`/g, ' ').replace(/~/g, '').replace(/undefined/g, '').replace(/,/g, '');
  if (mode === "enc") {
    return document.getElementById('p').innerHTML = g;
  } else if (mode === "dec") {
    return document.getElementById('p').innerHTML = n;
  }
};
