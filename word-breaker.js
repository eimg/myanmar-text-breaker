var fs = require("fs");
var syllable = require("./syllable-breaker");

var dict_words = fs.readFileSync("./dict-words.txt", "utf8").split("\n");
var stop_words = fs.readFileSync("./stop-words.txt", "utf8").split("\n");
var common_words = fs.readFileSync("./common-words.txt", "utf8").split("\n");

module.exports = function(input) {
    input = input.replace(/\s/g, '').trim();
    input = syllable(input);

    var result = [];
    var word = "";
    var swap = "";

    for(var i = 0; i < input.length; i++) {
        swap = word;
        word += input[i];

        if(! dict_words.includes(word) &&
           ! common_words.includes(word) &&
           ! stop_words.includes(word)) {

            result.push(swap);
            word = input[i];
            swap = "";
        }
    }

    result.push(word);

    return result;
}
