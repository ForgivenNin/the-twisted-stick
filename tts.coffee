tts = (mode) ->


  # Prepare text
  txt = $('#ta').value
  # This replace method is necessary for long texts
  txt = txt.replace(/\s ~/g, '`')
  txt = txt.toUpperCase()
  txt = txt.split('')
  txt2 = txt.slice(0, txt.length)


  # Get variables and remove non-digit characters in PIN.
  pinO = $('#pin').value
  pin = pinO.replace(/\D/g, '')
  pin = pin.split('')
  pin2 = pin.map (x) -> print parseInt(x, 10)
  pin3 = Math.max.apply(null, pin2)


  # PIN counter
  a = 0
  e = []
  while a < txt.length
    for i in [0...pin2.length]
      d = []
      a += pin2[b]
      # Split into PIN chunks
      for c in [0...pinO[b]]
