the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an encoding system that works by writing on a slip of paper wrapped around a staff. By unwinding the writing, the text would appear scrambled! This project takes this one step further by letting the user say where the text gets "wrapped" by adding in a PIN. When using this system, it is HIGHLY ADVISED, that you use a pin number with the size relative to your text length (because this project is still under development, and some `undefined`s could possibly show up).

**You should use another layer of encryption to prevent potential brute force attacks!**

### Examples

```
Code: "01234567" (last few letters trimmed off)
SENDMORE         S
TROOPSTO         EN
SOUTHERN   -->   DMO   -->    SEDROOENMEOSROTPONRSUFTTLHAN
FLANKAND         RETR
                 OOPST
                 OSOUTH
                 ERNFLAN
```

```
Code: "53" (Repeats if length is short)
SENDMORE         SENDM
TROOPSTO         ORE
SOUTHERN   -->   TROOP   -->   SOTSSEFAERRTORLNNEOOUNADDOTNMPHK
FLANKAND         STO
                 SOUTH
                 ERN
                 FLANK
                 AND
```

![Spartan Scytale](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png)
