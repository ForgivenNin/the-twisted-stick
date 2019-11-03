"use strict"

function tts(){

  // Remove non-digit characters & prepare arrays
  const wp = document.getElementById('wp').value
  var clean = /\d/g
  var wp1 = wp.match(clean)
  var wp2 = wp1.split("")
  if (wp2 === (null || "0" || "1")){document.write("ERROR - NO PIN ENTERED")}
  // Just having 0 or 1 only is as useless as having no PIN at all.
  var sl = (Math.round(Math.sqrt(wp2)) + 1)
  // The "+ 1" is for any leftover characters.
  const res = []
  for (i = 0; i < (sl); i++){res.push([])}

  const e = document.getElementById('e').checked
  if (e === true){
    // Wrap

  } else {
    // Unwrap

  }

  document.write(res)

}
