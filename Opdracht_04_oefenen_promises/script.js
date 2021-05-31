const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10`);
        }
        else {
            reject(`${num} is smaller than 10`);
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (
            array.every(word => {
                return typeof word === 'string';
            })
        ) {
            resolve(sortWords(
                array.map(word => {
                    return word.toUpperCase();
                })
            )
            );
        } else {
            reject('not a string')
        }
    })
};

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort());
        }
        else {
            reject('not a string')
        }
    });
};

testNum(9).then(result => console.log(result)).catch(error => console.log(error));

makeAllCaps(arrayOfWords).then(sortWords(arrayOfWords)).then(result => console.log(result)).catch(error => console.log(error));