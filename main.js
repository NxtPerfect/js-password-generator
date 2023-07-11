const readlineSync = require("readline-sync");

CHAR_SET = []; // final set that's used to generate password from
LETTERS = []; // create that automatically, i won't write it myself lmao
NUMBERS = []; // ^^
SPECIAL_CHARACTERS = []; // ^^^^

function start() {
  console.log("Welcome to password generator");
  while (true) {
    const length = read_user_input();
    get_numbers();
    get_whole_alphabet();
    get_special_characters();
    const password = generate_password(length);
    if (password === -1) {
      console.log(`Password is too long, don\'t exceede ${CHAR_SET.length}`);
      continue;
    }
    console.log(`Here's your password: ${password}`);
    break;
  }
}

function read_user_input() {
  // Wait for user's response.
  return readlineSync.question("What's your desired password's length?\n");
}

function prepare_charset() {
  const found_let = LETTERS.some((r) => CHAR_SET.indexOf(r) >= 0);
  if (!found_let) {
    for (let i = 0; i < LETTERS.length; i++) {
      CHAR_SET.push(LETTERS[i]);
    }
  }
  const found_num = NUMBERS.some((r) => CHAR_SET.indexOf(r) >= 0);
  if (!found_num) {
    for (let i = 0; i < NUMBERS.length; i++) {
      CHAR_SET.push(NUMBERS[i]);
    }
  }
  const found_spec = SPECIAL_CHARACTERS.some((r) => CHAR_SET.indexOf(r) >= 0);
  if (!found_spec) {
    for (let i = 0; i < SPECIAL_CHARACTERS.length; i++) {
      CHAR_SET.push(SPECIAL_CHARACTERS[i]);
    }
  }
  return 0;
}

function generate_password(length) {
  let password = "";
  prepare_charset();
  for (let i = 0; i < length; i++) {
    password += CHAR_SET[Math.floor(Math.random() * length)].toString();
  }
  console.log(
    `LET ${LETTERS}, CHAR ${CHAR_SET}, NUMB ${NUMBERS}, SPEC ${SPECIAL_CHARACTERS}, PASS ${password}`,
  );
  return password;
}

function get_alphabet(letter) {
  for (let i = 0; i < 26; i++) {
    const character = letter.charCodeAt(0);
    LETTERS.push(String.fromCharCode(character + i));
  }
  return 0;
}

function get_whole_alphabet() {
  get_alphabet("a"); // lower letters
  get_alphabet("A"); // upper letters
  return 0;
}

function get_numbers() {
  for (let i = 0; i <= 9; i++) {
    NUMBERS.push(i);
  }
  return 0;
}

function get_special_characters() {
  for (let i = 0; i < 14; i++) {
    const character = "!".charCodeAt(0);
    SPECIAL_CHARACTERS.push(String.fromCharCode(character + i));
  }
  for (let i = 0; i < 5; i++) {
    const character = ":".charCodeAt(0);
    SPECIAL_CHARACTERS.push(String.fromCharCode(character + i));
  }
  for (let i = 0; i < 3; i++) {
    const character = "{".charCodeAt(0);
    SPECIAL_CHARACTERS.push(String.fromCharCode(character + i));
  }
  return 0;
}

start();
