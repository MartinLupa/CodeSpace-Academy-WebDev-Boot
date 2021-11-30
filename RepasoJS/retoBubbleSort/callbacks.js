class UpgradedArray extends Array {
    constructor(array) {
        super(...array);
    }

    upgradedMap(callbackFn) {
        let auxArray = [];
        this.forEach(element => {
            auxArray.push(callbackFn(element))
        })
        /* This will return normal array */
        // return auxArray;

        /* This will return UpgradedArray class*/
        return new this.constructor(auxArray);
    }

    upgradedFind(callbackFn) {
        for (let i = 0; this.length > i; i++) {
            if (callbackFn(this[i], i)) {
                return i;
            }
        }
        return -1;
    }

    bubbleSort(callbackFn) {
        // TODO
    }
}

const arrayTest = new UpgradedArray([1, 2, 2, 4, 5]);
console.log(arrayTest.upgradedMap(e => e + 10));
console.log(arrayTest.upgradedMap(e => e - 10));

console.log(arrayTest.upgradedFind(element => element === 2))
console.log(arrayTest.upgradedFind(element => element === 10))

/*
console.log(array.upgradedFind((element, index) => {
    console.log(index);
    return element === 4;
}));
 */

