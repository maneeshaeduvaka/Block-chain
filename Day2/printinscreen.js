const prompt = require("prompt-sync")({sigint:true});
let n = prompt("enter number");
for(let i=1; i<=n; i++){
    console.log(i);
}
//Reference error:prompt is not defined - npm install prompt-sync