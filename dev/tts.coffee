tts = (mode) ->


  # Prepare text
  txt = document.getElementById('ta').value;
  # This replace method is necessary for long texts
  txt = txt.replace(/\s/g, '`')
  txt = txt.toUpperCase();
  txt2 = txt.slice(0, txt.length);
  txt3 = txt2.split('');
  txt4 = txt.replace(/~/g, '');
  txt5 = txt4.split('')
  txt6 = txt5.length


  # Get variables and remove non-digit characters in PIN.
  pinO = document.getElementById('wp').value
  pin = pinO.replace(/\D/g, '')
  pin = pin.split('')
  pin2 = pin.map (x) -> parseInt(x, 10)
  pin3 = Math.max.apply(null, pin2)


  # PIN counter
  a = 0
  e = []
  while a < txt6
    for b in [0...pin2.length]
      d = []
      a += pin2[b]
      # Split into PIN chunks
      for c in [0...pinO[b]]
        d += txt5.shift()
      e.push(d)

  # Get rid of excess
  e1 = e.map (x) -> x.replace(/undefined/g, '')
  e2 = e1.filter (x) -> x isnt ''
  e3 = e2.slice(0, e.length)


  # Fill
  for j in [0...e2.length]
    while e2[j].length < pin3
      e2[j] += '~'


  # Arrange
  f = []
  for k in [0...e2.length]
    f.push(e2[k].split(''))
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
  n.length = e3.length
  while txt3.length isnt 0
    for o in [0...e3.length]
      p = txt3.shift()
      n[o] += p
  n = n.toString()
  n = n.replace(/`/g, ' ').replace(/~/g, '').replace(/undefined/g, '').replace(/,/g, '')


  if mode is "enc"
    document.getElementById('p').innerHTML = g
  else if mode is "dec"
    document.getElementById('p').innerHTML = n
