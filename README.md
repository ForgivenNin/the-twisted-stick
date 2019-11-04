the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an encoding system that works by writing on a slip of paper wrapped around a staff. By unwinding the writing, the text would appear scrambled! This project takes this one step further by letting the user say where the text gets "wrapped" by adding in a PIN.

**You should use another layer of encryption to prevent potential brute force attacks!**

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
