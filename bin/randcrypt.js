#!/usr/bin/env node
import gen from "crypto-random-string";
import clipboardy from "clipboardy";

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

var [length, type] = args;

length = parseInt(length);

if (!length) {
  console.info("You must provide valid length argument\n");
  console.info("How to use: 'rc [length] [type]' => 'rc 32 base64'\n");
  console.info("Available types:\n", [
    "hex",
    "base64",
    "url-safe",
    "numeric",
    "distinguishable",
    "ascii-printable",
    "alphanumeric",
  ]);
} else if (
  type &&
  ![
    "hex",
    "base64",
    "url-safe",
    "numeric",
    "distinguishable",
    "ascii-printable",
    "alphanumeric",
  ].includes(type)
) {
  console.info("You must provide valid type argument");
} else {
  var randKey = gen({ length: parseInt(length), type });
  clipboardy.writeSync(randKey);

  console.info(
    "Random Key successfully generated and copied to clipboard.\n",
    randKey
  );
}
