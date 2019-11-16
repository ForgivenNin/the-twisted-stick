function tts () {

  // Get variables and remove non-digit characters in PIN.
  var pin = document.getElementById('wp').value
  var pin2 = pin.replace(/\D/g,'')
  var pin3 = pin2.split('')

  var txt = document.getElementById('ta').value
  var txt1 = txt.replace(/\s/g, '')
  var txt2 = txt1.split('')

  // Cut
  var a = []
  do {
    // Pin loop
    for (var i = 0; i < pin3.length; i++) {
      var b = []
      // Pin # (amount) loop)
      for (var j = 0; j < pin3[i]; j++) {
        b += txt2.shift()
      }
      a.push(b)
    }
  // Leftover loop
  } while (a.length < txt.length)
  console.log(a.length)
  console.log(txt.length)

  // Arrange

  // Clean up
  document.getElementById('p').innerHTML = a

}
