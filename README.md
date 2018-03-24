# Myanmar Syllable Breaker

This is a **JavaScript** port of [MyanmarParser-Py](https://github.com/thantthet/MyanmarParser-Py). The repo name is called Myanmar Syllable Breaker instead of Burmese Syllable Breaker because this should also work on other Myanmar ethnic scripts as well.

## Usage
```Javascript
var breaker = require("./breaker");

console.log( breaker('အင်္ဂါနေ့၏ဂြိုဟ်ကောင်သည်ခြင်္သေ့ဖြစ်သည်') );

// => [ 'အင်္ဂါ', 'နေ့', '၏', 'ဂြိုဟ်', 'ကောင်', 'သည်', 'ခြင်္သေ့', 'ဖြစ်', 'သည်' ]
```
