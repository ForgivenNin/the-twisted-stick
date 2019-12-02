the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an encoding system that works by writing on a slip of paper wrapped around a staff. By unwinding the writing, the text would appear scrambled! This project takes this one step further by letting the user say where the text gets "wrapped" by adding in a PIN (it is recommended that you do not include any zeroes). For extra protection, this program adds a random letter to your message since the first letter would remain unshifted without it.

**You should use another layer of encryption to prevent potential brute force attacks!**

### Examples

```
Code: "53" (Repeats if length is short)

SENDMORE         (Random Letter)SEND
TROOPSTO         MOR
SOUTHERN   -->   ETROO   -->   (Random Letter)MEPOHNKSOTSSEFAERRTORLNNOUADOTN
FLANKAND         PST
                 OSOUT
                 HER
                 NFLAN
                 KAND
```

```
Code: "01234567" (last two letters trimmed off)

SENDMORE         (Random Letter)
TROOPSTO         SE
SOUTHERN   -->   NDM   -->    (Random Letter)SNORTHENAEDROORFNMEOSLKTPOASUT
FLANKAND         ORET
                 ROOPS
                 YOSOUT
                 H
                 ER
                 NFL
                 ANKA
```

![Spartan Scytale](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png)
