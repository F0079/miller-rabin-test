function isPrime(n, a) {
    let exponent = n - 1;
    let s = 0;
    
    while (exponent % 2 == 0) {
        exponent /= 2;
        s++;
    }

    let x = Math.pow(a, exponent) % n;
    if (x == 1 || x == n - 1) {
        return true;
    }

    while (s > 1) {
        x = Math.pow(x, 2) % n;
        if (x == 1) {
            return false;
        }
        if (x == n -1) {
            return true;
        }
        s--;
    }

    return false;
}

let n = process.argv[2];
let a = process.argv[3];

console.log("is prim?:", isPrime(n, a));
