function tts () {
  // Get variables and remove non-digit characters in PIN.
  var pin = document.getElementById('wp').value
  var pin2 = pin.replace(/\D/g,'')
  var pin3 = pin2.split('')
  var pin4 = pin3.map(function (x) { 
    return parseInt(x, 10); 
  })

  var txt = document.getElementById('ta').value
  var txt1 = txt.replace(/\s/g, '')
  var txt2 = txt1.split('')
  var txtl = txt2.length

  // Cut
  var a = []
  var c = []
  var d = true
  do {
    // Pin loop
    for (var i = 0; i < pin4.length; i++) {
      c.push(pin4[i])
      console.log(c)
      var b = []
      // Pin # (amount) loop)
      for (var j = 0; j < pin4[i]; j++) {
        b += txt2.shift()
        var e = c.reduce((a, b) => a + b, 0)
        console.log(e)
        if (e > txtl) {
          d = false
          break
        }
      }
      if (d === false) {
          break
      }
      a.push(b)
    }
  // Leftover loop
  } while (d === true)
  document.getElementById('p').innerHTML = a
}
