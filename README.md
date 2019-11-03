the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an encoding system that would work by writing text on a slip of paper wrapped around a stick. When it would be unwinded, or taken off the stick, all the characters would be disordered. What makes this project different is how it takes one step further by letting the user determine where or when the text gets "wrapped."

To use this program, you have to come up with a PIN number (0-9) to tell the machine how you want your message to be scrambled. The longer your text is, the longer you may want your password to be. Excess numbers can be "cut off" if your message is too short in ratio. This does not prevent you from choosing a short number, though, because that can simply loop until it reaches the end of the array.

**It is highly recommended that you use another layer of encryption to prevent any brute force attempts.**

### Examples

```
Code: "01234567" (7 gets trimmed off because it is not required)

SENDMORE         SSROTOA ("AEOND", the letters in the last column, are leftovers)
TROOPSTO         TFOUNSE
SOUTHERN   -->    ELAMEO   -->   SSROTOATFOUNSEELAMEONDPKNOHRDKSR
FLANKAND           NDPKN
                    OHRD
                     KS
                      R
```

```
Code: "53" (Repeats if length is short)

SENDMORE         SRONKTO ("OND", the letters in the last column, are leftovers)
TROOPSTO         TOUMORN
SOUTHERN   -->   SLAPSND   -->   SRONKTOTOUMORNSLAPSNDFNDHEEEOATR
FLANKAND         FNDHEE
                 E O A
                   T R
```

![Spartan Scytale](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png)
