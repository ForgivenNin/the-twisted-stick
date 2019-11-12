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
  txt.reverse()
  // Evening out text into a square-like arrangement.
  var sl = (Math.round(Math.sqrt(txt.length)))
  // The "* 2" is for the destined set of arrays.
  for (i = 0; i < (sl * 2); i++) {
    res.push([])
  }
  for (i = 0; i < res.length; i++) {
    do {
      var x = txt.pop()
      res[i].push(x)
    } while (res[i].length < sl)
  }

  function count (number) {
    var y
    for (var i = 0; i < number; i++) {
      if ((i < res.length) || (res[i] !== null) || (res[i + sl].length < sl)) {
        y = res[i].shift()
        console.log(y)
        res[i + sl].unshift(y)
      }
    }
    var res1 = res.toString()
  }

  // Encryption/Decryption
  var e = document.getElementById('e').checked
  if (e === true) {
    // Wrap
    wp2.forEach(count)
  } else {
    // Unwrap
    txt.reverse()
    wp2.reverse()
    wp2.forEach(count)
  }

  // Remove empty arrays & display results.
  document.getElementById('p').innerText = res1
  console.log(res1);
}
