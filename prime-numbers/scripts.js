function getPrimeNumbers(number) {
    const primeNumbers = [];

    for (let i = 2; i <= number; i++) {
        if (!primeNumbers.find((primeNumber) => !(i % primeNumber))) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}
