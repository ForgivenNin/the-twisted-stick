function tts () {
  // Remove non-digit characters
  const wp = document.getElementById('wp').value
  const clean = /\d/g
  var wp1 = wp.match(clean)
  var wp2 = wp1.split('')
  if (wp2 === (null || '0' || '0')) {
    // Just having 0 or 1 only is as useless as having no PIN at all.
    document.write('ERROR - NO PIN ENTERED')
    return
  }
  // Prepare arrays
  var i = 0
  const sl = (Math.round(Math.sqrt(wp2)) + 1)
  // The "+ 1" is for any leftover characters.
  // If there are 16 characters, for example, then there will be four rows/arrays.
  var res = []
  for (i = 0; i < sl; i++) {
    res.push([])
  }
  const ta = document.getElementById('ta').value
  var ta1 = ta.replace(' ', '')
  var txt = ta1.split('')
  for (i = 0; i < res[i].length; i++) {
    do {
      const x = txt.pop()
      res[i].push(x)
    } while ((res[i].length < sl) || (res[i].length !== 0))
  }
  
  function count (number) {
  }
  
  // Encryption/Decryption
  const e = document.getElementById('e').checked
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
  document.write(res)
}
