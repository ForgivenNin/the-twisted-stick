function tts(){

  // Remove non-digit characters & prepare arrays
  const wp = document.getElementById('wp').value
  const clean = /\d/g
  var wp1 = wp.match(clean)
  var wp2 = wp1.split("")
  if (wp2 === (null || "0" || "1")){
    // Just having 0 or 1 only is as useless as having no PIN at all.
    document.write("ERROR - NO PIN ENTERED")
    return
  }
  const sl = (Math.round(Math.sqrt(wp2)) + 1)
  // The "+ 1" is for any leftover characters.
  // If there are 16 characters, for example, then there will be four rows/arrays.
  var res = []
  for (i = 0; i < (sl); i++){res.push([])}
  const ta = document.getElementById('ta').value
  var ta1 = ta.replace("",/\s/g)
  var txt = ta1.split("")

  function count(number){
    for (i = 0; i < number; i++) {
      do {
        let x = wp2.pop()
        res[i].push(x)
      } while (res[i].length < sl);
    }
  }

  const e = document.getElementById('e').checked
  if (e === true){

    // Wrap
    for (i = 0; i < wp2.length; i++) {count(wp2[i])}

  } else {

    // Unwrap
    wp2.reverse()
    for (i = 0; i < wp2.length; i++) {count(wp2[i])}

  }

  document.write(res)

}
