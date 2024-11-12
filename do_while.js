
// 1. Check whether a given number is  a perfect number Or not?

num = prompt("enter number: ")
i = 0
sum = 0
do{
    if(num % i == 0){
        sum+=i
    }
    i++
} while(i<num);
(sum==num) ? console.log("It is a perfect number") : console.log("It is not a perfect number")



// 2:-Check whether given number is a prime number Or not

var num = prompt("enter the number:-")
if(num>1){
  prime=true
  for(i=2;i<num;i++){
    if(num%i==0){
      prime=false
      console.log("not a prime number")
      break
    }
  }
  if(prime){
    console.log("prime number")
  }
}

//3:- Print a pattern in this way

let rows = 5;
let i = 1;
do {
    let pattern = '';
    let j = 0;
    do {
        pattern += String.fromCharCode(65 + j);
        j++;
    } while (j < i);
    console.log(pattern); 
    i++;
} while(i<=rows);