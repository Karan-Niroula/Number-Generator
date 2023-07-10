let mainContainer = document.querySelector(".mainContainer")

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

for(i=0; i<=101; i++){
    let numbers = document.createElement("p")
   numbers.textContent=i
   
   if(isPrime(i)){
    numbers.style.backgroundColor="red"
   }
   else if(i%2==1){
    numbers.style.backgroundColor="yellow"
   }
   else{
    numbers.style.backgroundColor="green"
   }
   
    mainContainer.appendChild(numbers)
}

