//doubleValuesWithMap

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

//valTimesIndex

function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return index * value;
    });
}

//extractKey

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

//extractFullName

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}