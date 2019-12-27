the-twisted-stick
-
An adaptation of the *Spartan's Scytale* with a little twist thrown into the mix.

### The Scytale

The Spartan's Scytale is an ancient encoding system that works by writing on a slip of paper wrapped around a staff. By unwinding the writing, the text would appear scrambled! In addition, random letters are added for extra protection against decryption methods such as frequency analysis. This project takes this one step further, too, by letting the user say where the text gets "wrapped" by adding in a PIN.

So, how is this beneficial in comparison to other encryption programs? The problem with them is that when the output arrives, it can be excessively long. This is when transposition really can shine in encryption. With more words added to your message, it will be even more difficult for someone to decode the message not knowing the PIN you entered.


### Examples

```
Code: "53" (Repeats if length is short)

SENDMORE         (Random Letter)SEND
TROOPSTO         MOR 00
SOUTHERN   -->   ETROO   -->   (Random Letter)MEPOHNKSOTSSEFAERRTORLN0O0U0AD0...
FLANKAND         PST 00
                 OSOUT
                 HER 00
                 NFLAN
                 KAND 0
```

```
Code: "01234567" (last two letters trimmed off)

SENDMORE         (Random Letter)
TROOPSTO         SE 0000
SOUTHERN   -->   NDM 000   -->    (Random Letter)SNORTHENAEDROO0RFND0MEOS00LK...
FLANKAND         ORET 00
                 ROOPS 0
                 YOSOUT
                 H00000
                 ER 0000
                 NFL 000
                 ANKA 00
                 ND 0000
```

![Spartan Scytale](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png)
