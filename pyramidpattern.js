let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);