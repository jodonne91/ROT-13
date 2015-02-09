## rot13

### Description

History lesson! 

One of the earliest effective uses of cryptography was the [Caesar cipher](http://en.wikipedia.org/wiki/Caesar_cipher), wherein the writer of a message rotated each of the characters forward by a certain number of positions, and the reader rotated them back to decrypt the original meaning.

So if the reader and writer had agreed on rotating by 3 places, then `At The Iron Yard` would become `Dw Wkh Lurq Bdug`.

For most Caesar ciphers, the reader has to know which direction to rotate the message's content agreed-upon number of positions, but: if you use a 13-place system (13 being half of a 26-character alphabet), encoding and decoding work in the same way. This system is referred to as [ROT13](http://en.wikipedia.org/wiki/ROT13) and is commonly used on the internet to trivially disguise information like movie plot spoilers.

We're going to make a tiny webpage that implements ROT13 -- it'll take in plaintext (either plaintext or encoded), perform the ROT13 operation, and display the ciphertext to the use.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand how to use JS to manipulate a webpage
* Understand how to use TDD to work with a webpage
* Be able to understand and talk about cryptography intelligently


### Performance Objectives

After completing this assignment, you should be able to effectively use:

* jQuery - listeners, getters, and setters
* JavaScript in the browser
* Iteration over arrays

## Details


## Normal Mode

The provided site has two important files: `index.html` and `index.js`.

Modify `index.js` so that the code

* listens for users clicking the "Encrypt" button on `index.html`
* gets the user's input from the `<textarea>`
* leverages the included `translateCharacter` function to translate all of the text with ROT13
* sets the `<div id='displayText'>` content to the translated string

## Hard Mode

Normal Mode, but use CSS to make `index.html` look pretty.

## Nightmare Mode

Hard Mode, but add an additional input field to the page that allows users to specify a rotation value, so that "13" would be the same as ROT13, but "5" would rotate things five spaces.