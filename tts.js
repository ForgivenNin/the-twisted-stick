function tts () {
  // Remove non-digit characters.
  var wp = document.getElementById('wp').value
  var wp2 = wp.split('')
  // Prepare arrays.
  var i = 0
  var res = []
  var ta = document.getElementById('ta').value
  var ta1 = ta.replace(/\s/g, '')
  var txt = ta1.split('')
  console.log(txt.length)
  txt.reverse()
  // Evening out text into a square-like arrangement.
  var sl = (Math.round(Math.sqrt(txt.length)))
  console.log(sl * 2)
  // The "* 2" is for the destined set of arrays.
  for (i = 0; i < (sl * 2); i++) {
    res.push([])
  }
  for (i = 0; i < res.length; i++) {
    do {
      var x = txt.pop()
      console.log('pop text ' + i + " " + x);
      res[i].push(x)
    } while (res[i].length < sl)
  }

  function count (number) {
    for (var i = 0; i < number; i++) {
    }
  }

  // Encryption/Decryption
  var e = document.getElementById('e').checked
  if (e === true) {
    // Wrap
    // Reverses txt in wrap because ".pop()" removes last item.
    wp2.forEach(count)
  } else {
    // Unwrap
    txt.reverse()
    wp2.reverse()
    wp2.forEach(count)
  }

  // Remove possible empty array and display results.
  document.getElementById('p').innerText = res
  console.log(res);
}
