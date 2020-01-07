function tts (mode) {
  // Prepare text
  var txt0 = document.getElementById('ta').value
  var txt1 = txt0.replace(/\s/g, '`')
  // ^ This replace method is necessary for long texts
  var txt = txt1.toUpperCase()
  var txt23 = txt.slice(0, txt.length)
  var txt33 = txt23.split('')
  var txt2 = txt.replace(/~/g, '')
  var txt3 = txt2.split('')
  var txt4 = txt3.length

  // Get variables and remove non-digit characters in PIN.
  var pin = document.getElementById('wp').value
  var pin2 = pin.replace(/\D/g, '')
  var pin3 = pin2.split('')
  var pin4 = pin3.map(function (x) {
    return parseInt(x, 10)
  })
  var pin5 = Math.max.apply(null, pin4)

  // PIN counter
  var a = 0
  var e = []
  while (a < txt4) {
    for (var b = 0; b < pin4.length; b++) {
      var d = []
      a += pin4[b]
      // Split into PIN chunks
      for (var c = 0; c < pin[b]; c++) {
        d += txt3.shift()
      }
      e.push(d)
    }
  }
  // Get rid of excess
  var e1 = e.map(function (x) {
    return x.replace(/undefined/g, '')
  })
  var e2 = e1.filter(function (x) {
    return x !== ''
  })
  var e3 = e2.slice(0, e2.length)
  // Fill w/ 0s
  for (var l = 0; l < e2.length; l++) {
    while (e2[l].length < pin5) {
      e2[l] += '~'
    }
  }
  // Arrange
  var f = []
  for (var k = 0; k < e2.length; k++) {
    // Break up chunks
    f.push(e2[k].split(''))
  }
  var g = []
  // Max array length is 9
  for (var i = 0; i < 9; i++) {
    // For each array
    for (var j = 0; j < f.length; j++) {
      // Access & move array items within another array
      var h = f[j]
      g.push(h[i])
    }
  }
  var g1 = g.toString()
  var g2 = g1.replace(/,/g, '')

  // Dearrange
  var n = []
  n.length = e3.length
  while (txt33.length !== 0) {
    for (var m = 0; m < e3.length; m++) {
      var o = txt33.shift()
      n[m] += o
    }
  }
  var n1 = n.toString()
  var n2 = n1.replace(/,/g, '')
  var n3 = n2.replace(/~/g, '')
  var n4 = n3.replace(/undefined/g, '')
  var n5 = n4.replace(/`/g, ' ')

  if (mode === "enc") {
    document.getElementById('p').innerHTML = g2
  } else if (mode === "dec") {
    document.getElementById('p').innerHTML = n5
  }
}
