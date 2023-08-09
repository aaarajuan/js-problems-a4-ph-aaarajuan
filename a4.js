// Problem-1
function cubeNumber(number) {
    const cube = number * number * number;
    if (typeof number !== 'number') {
        return 'Please Enter a Valid Number!!!';
    }
    return cube;
}

const cube = cubeNumber(3);
console.log(cube);

// Problem-2
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please Enter a Valid String!!!';
    }
    else if (string1 === string2) {
        console.log('The words in the strings are matches completly', string1, string2);
        return true;
    }
    else if (string1 !== string2) {
        console.log('The words in the strings aren\'t matches', string1, string2);
        return false;
    }
}

const string1 = 'JavaScript';
const string2 = 'Code';
const text = matchFinder(string1, string2);
console.log(text);

// Problem-3
function sortMaker(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        const elements = arr[index];

        if (arr[0] <= 0 || arr[1] <= 0) {
            console.log('Invalid Input');
            break;
        }
        else if (elements > largest) {
            largest = elements;
            console.log(largest, arr);
        }
        else if (arr[0] == arr[1]) {
            console.log('equal');
            break;
        }
    }
    return largest;
}

const array = [4, 4];
sortMaker(array);

// Problem-4 
function findAddress(obj) {
    if (typeof obj !== 'object') {
        console.log('Please enter a valid object');
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        console.log(street + ', ' + house + ', ' + society);
    }
    return obj;
}

const object = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
const address = findAddress(object);
console.log(address);

// Problem-5
function canPay(changeArray, totalDue) {
    let totalMoney = 0;
    let largest = 0;
    // const emptyArray = [];
    for(let i = 0; i < changeArray.length; i++){
        totalMoney += changeArray[0] + changeArray[1] + changeArray[2];

        /* 
        console.log(changeArray, totalMoney);
        if(changeArray[i] === emptyArray){
            return 'empty';
        }

        * tried using this method to using this method to make it return emptly but failed everyway to return it. (unsuccessfull code)
        */

        if(totalMoney >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
    return canPay;
}

const moneyHave = [1, 2, 5];
const chipsPrice = 10;
const outPut = canPay(moneyHave, chipsPrice);
console.log(outPut);