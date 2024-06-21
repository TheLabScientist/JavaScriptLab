/* Random Passkey Generator - Copyright © TheLabScientist 2024
   With this script, you can easily generate passkeys for whatever
   needs be. More features coming soon...
*/

const RandomPasskey = class {
    constructor(length) {
        if (length > 0) {
            this.length = length;
        } else {
            console.error("Passkey length must be larger than 0");
        }

      	// Defaults
        this.includeUppercase = true;
        this.includeLowercase = true;
        this.includeDigits = true;
        this.includeSymbols = true;
    }

    // Exclude uppercase method 
    excludeUppercase(value) {
        if (typeof value !== 'boolean') {
            console.error("The method excludeUppercase() only accepts boolean values");
        } else {
            this.includeUppercase = !value;
        }
    }

    // Exclude lowercase method 
    excludeLowercase(value) {
        if (typeof value !== 'boolean') {
            console.error("The method excludeLowercase() only accepts boolean values");
        } else {
            this.includeLowercase = !value;
        }
    }

    // Exclude digits method 
    excludeDigits(value) {
        if (typeof value !== 'boolean') {
            console.error("The method excludeDigits() only accepts boolean values");
        } else {
            this.includeDigits = !value;
        }
    }

    // Exclude symbols method 
    excludeSymbols(value) {
        if (typeof value !== 'boolean') {
            console.error("The method excludeSymbols() only accepts boolean values");
        } else {
            this.includeSymbols = !value;
        }
    }

  	// Obvious method for getting passkey
    getPasskey() { 
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;;
        }

        //Character arrays
        const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const symbols = ["@", "#", "!", "*", "_", "&", "$", "%"];

        let passkey = "";

        while (passkey.length < this.length) { // Keep adding characters to the passkey until desired length is reached
          	// Prevents the script from hanging if no characters are included
            if (this.includeUppercase || this.includeLowercase || this.includeDigits || this.includeSymbols) { 
                switch (getRandomNumber(1, 4)) { // Random number determines which array a character will be snatched from
                    case 1:
                        if (this.includeUppercase) {
                            passkey += uppercaseLetters[getRandomNumber(0, uppercaseLetters.length - 1)];
                        }
                    break;

                    case 2:
                        if (this.includeLowercase) {
                            passkey += lowercaseLetters[getRandomNumber(0, lowercaseLetters.length - 1)];
                        }
                    break;

                    case 3:
                        if (this.includeDigits) {
                            passkey += digits[getRandomNumber(0, digits.length - 1)];
                        }
                    break;

                    case 4:
                        if (this.includeSymbols) {
                            passkey += symbols[getRandomNumber(0, symbols.length - 1)];
                        }
                    break;
                }
            } else {
              console.error("Atleast one character set must be included");
              break;
            }
        }

        return passkey;
    }
}

// Instance
const rp = new RandomPasskey(12);

// Methods - Omitted methods will use default value
rp.excludeUppercase(false);
rp.excludeLowercase(false);
rp.excludeDigits(false);
rp.excludeSymbols(false);

console.log(rp.getPasskey());
