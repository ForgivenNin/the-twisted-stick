the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an encoding system that works by writing on a slip of paper wrapped around a staff. By unwinding the writing, the text would appear scrambled! This project takes this one step further by letting the user say where the text gets "wrapped."

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

### Usage

To use this program, enter your message and come up with a PIN. The longer it is, the longer you may want your password to be. You can still have a short number, though, because that can loop until it reaches the end of the array.

**You should use another layer of encryption to prevent potential brute force attacks!**

![Spartan Scytale](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png)
