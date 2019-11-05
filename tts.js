function tts () {
  // Remove non-digit characters
  var wp = document.getElementById('wp').value
  var clean = /\d/g
  var wp1 = wp.match(clean)
  var wp2 = wp1.split('')
  if (wp2 === (null || '0' || '0')) {
    // Just having 0 or 1 only is as useless as having no PIN at all.
    document.getElementById('p').innerText = 'ERROR - NO PIN ENTERED'
    return
  }
  // Prepare arrays
  var i = 0
  var sl = ((Math.round(Math.sqrt(wp2)) + 1) * 2)
  // The "+ 1" is for any leftover characters.
  // If there are 16 characters, for example, then there will be four rows/arrays.
  var res = []
  for (i = 0; i < sl; i++) {
    res.push([])
  }
  var ta = document.getElementById('ta').value
  var ta1 = ta.replace(' ', '')
  var txt = ta1.split('')
  // Sort characters
  for (i = 0; i < res.length; i++) {
    do {
      const x = txt.pop()
      res[i].push(x)
    } while (res[i].length < sl)
  }
  
  function count (number) {
  }
  
  // Encryption/Decryption
  var e = document.getElementById('e').checked
  if (e === true) {
    // Wrap
    txt.reverse()
    // Reverses txt in wrap because ".pop()" removes last item.
    wp2.foreach(count())
  } else {
    // Unwrap
    wp2.reverse()
    wp2.foreach(count())
  }

  // Remove possible empty array and display results.
  if (res[res.length] === 0) {
    res[res.length] = null
  }
  document.getElementById('p').innerText = res
}
