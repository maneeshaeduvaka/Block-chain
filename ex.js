let number = 5; 
let string = '';
for(let i = 1; i <= number; i++){
  for(let j = 1; j <= i; j++){
    string += '*';
  }
  string += "\n";
}
console.log(string);