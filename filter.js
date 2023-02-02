//filterByValue

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

//find

function find(arr, findValue) {
    return arr.filter(function(val) {
        return val === findValue;
    })[0];
}

//findInOdj

function findInObj(arr, key, findValue) {
    return arr.filter(function(val) {
        return val[key] === findValue;
    })[0];
}

//removeVowels

function removeVowels(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val) {
            return vowels.indexOf(val) === -1;
        }).join("");
}

//doubleOddNumbers

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 !== 0;
    }).map(function(val) {
        return val * 2;
    });
}