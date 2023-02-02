//doubleValues

function doubleValues(arr){
    var newArray = [];
    arr.forEach(function(val) {
        newArray.push(val * 2);
    });
    return newArray;
    }
    
//onlyEvenValues

function onlyEvenValues(arr){
    var newArray = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }
    });
    return newArray;
}

//showFirstAndLast

function showFirstAndLast(arr){
    var newArray = [];
   arr.forEach(function(val) {
        newArray.push(val[0] + val[val.length - 1]);
    });
    return newArray;
}

//addKeyAndValue

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

//vowelCount

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}
