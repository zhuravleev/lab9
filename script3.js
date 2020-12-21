console.log("Задание №3");

function Palindrome(Str){
    if (Str == Str.split("").reverse().join("")){
        console.log(`Is palindrome ${Str}? true`);
    }
    else{
        console.log(`Is palindrome ${Str}? false`);
    }
}

Palindrome("кошка"); 
Palindrome("шалаш");
