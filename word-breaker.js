var fs = require("fs");
var syllable = require("./syllable-breaker");

var dict_words = fs.readFileSync("./dict-words.txt", "utf8").split("\n");
var stop_words = fs.readFileSync("./stop-words.txt", "utf8").split("\n");
var common_words = fs.readFileSync("./common-words.txt", "utf8").split("\n");

module.exports = function(input) {
    input = input.replace(/\s/g, '').trim();

    // Breaking up words to syllable
    input = syllable(input);

    var result = [];
    var offset = 0;

    // Max limit of syllable in each word
    var LIMIT = 6;

    while(offset < input.length) {
        var chunk_end = offset + LIMIT;
        var chunk_found = false;

        // Breakning down a chunk of syllable from input, then
        // checking backward from longest to shortest
        for(var i = chunk_end; i > offset; i--) {
            var chunk = input.slice(offset, i).join('');

            if(dict_words.includes(chunk)
                || common_words.includes(chunk)
                || stop_words.includes(chunk)) {

                // Found the word in data
                chunk_found = true;
                result.push(chunk);

                // Resetting offset to resume
                offset = i;
                break;
            }
        }

        // Didn't found the word of any
        // long-short combination in the chunk
        if(!chunk_found) {
            // Now, the current syllable is a word
            result.push( input[offset] );
            offset++;
        }
    }

    return result;
}
