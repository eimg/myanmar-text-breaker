# Myanmar Text Breaker

Syllable and word, breaker/boundary-segmentation for Myanmar text in JavaScript.

## Usage
```Javascript
var syllable = require("./syllable-breaker");
var word = require("./word-breaker");

console.log( syllable('အင်္ဂါနေ့၏ဂြိုဟ်ကောင်သည်ခြင်္သေ့ဖြစ်သည်') );
// => [ 'အင်္ဂါ', 'နေ့', '၏', 'ဂြိုဟ်', 'ကောင်', 'သည်', 'ခြင်္သေ့', 'ဖြစ်', 'သည်' ]

console.log( word('ဘယ်အရာမဆိုအရာရာတိုင်းအဆိုးအကောင်းယှဉ်တွဲနေတယ်') );
// => [ 'ဘယ်အရာမဆို', 'အရာရာတိုင်း', 'အဆိုးအကောင်း', 'ယှဉ်တွဲ', 'နေ', 'တယ်' ]
```
## Credit
* Syllable breaker is a JavaScript port of [MyanmarParser-Py](https://github.com/thantthet/MyanmarParser-Py).
* Word breaker is based on following data
    * dict-words.txt -> [mydict-mmnlp-words.txt](https://github.com/trhura/pango-myanmar/tree/master/data)
    * common-words.txt -> [mydict-common-words.txt](https://github.com/trhura/pango-myanmar/tree/master/data)
    * stop-words.txt -> [stop_words.txt](https://github.com/swanhtet1992/myanmar-data)
