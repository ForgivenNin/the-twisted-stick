tts = (mode) ->


  # Prepare text
  txt = document.getElementById('ta').value
  # This replace method is necessary for long texts
  txt = txt.replace(/\s/g, '`').replace(/~/g, '`')
  txt = txt.toUpperCase()
  txt = txt.split('')
  txt2 = txt.slice(0, txt.length)


  # Get variables and remove non-digit characters in PIN.
  pinO = document.getElementById('wp').value
  pin = pinO.replace(/\D/g, '')
  pin = pin.split('')
  pin2 = pin.map (x) -> parseInt(x, 10)
  pin3 = Math.max.apply(null, pin2)


  # PIN counter
  a = 0
  e = []
  while a < txt.length
    for b in [0...pin2.length]
      d = []
      a += pin2[b]
      # Split into PIN chunks
      for c in [0...pinO[b]]
        d += txt.shift()
      e.push(d)


  # Get rid of excess
  e = e.map (x) -> x.replace(/undefined/g, '')
  e = e.filter (x) -> x isnt ''
  e2 = e.slice(0, e.length)


  # Fill w/ 0s
  for j in [0...e.length]
    while e[j].length < pin3
      e2[l] += '~'


  # Arrange
  f = []
  for k in [0...e.length]
    f.push(e[k].split(''))
  g = []
  # Max array length is 9
  for l in [0...9]
    for m in [0...f.length]
      # Access & move array items within another array
      h = f[m]
      g.push(h[l])
  g = g.toString()
  g = g.replace(/,/g, '')


  # Dearrange
  n = []
  n.length = e2.length
  while txt2.length isnt 0
    for o in [0...e2.length]
      p = txt2.shift()
      n[o] += p
  n = n.toString()
  n = n.replace(/`/g, '').replace(/~/g, '').replace(/undefined/g, '').replace(/,/g, '')


  if mode is "enc"
    document.getElementById('p').innerHTML = g
  else if mode is "dec"
    document.getElementById('p').innerHTML = n
