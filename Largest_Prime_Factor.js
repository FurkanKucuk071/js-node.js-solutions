function largestPrimeFactor(number) {
    let prime = 2,
      max = 1;
    while (prime <= number) {
      if (number % prime == 0) {
        max = prime;
        number = number / prime;
      } else prime++;
    return max;
  }
  
  console.log(largestPrimeFactor(600851475143));
