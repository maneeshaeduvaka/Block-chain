//Given two strings, return true if they are anagrams of one another. Strings are:- “Study” “Dusty”
function Anagram(a, b) {
    let l1 = a.length;
    let l2 = b.length;
    if(l1 !== l2){
       console.log('Invalid Input');
       return
    }
    let s1 = a.split('').sort().join('');
    let s2 = b.split('').sort().join('');
    if(s1 === s2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 Anagram("study","dusty")