module.exports = function toReadable (number) {
    const FIRST_NUMBER = 0;
    const SECOND_NUMBER = 1;
    const THIRD_NUMBER = 2;

    const arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrTwo = ['ten', 'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrThree = [' ',' ','twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arr = [];

    number.toString().split('').forEach(item => arr.push(+item));

    if (arr.length === 1) {
        return arrOne[number];
    } else if (arr.length === 2 && arr[FIRST_NUMBER] === 1) {
        return arrTwo[arr[SECOND_NUMBER]];
    } else if (arr.length === 2 && arr[SECOND_NUMBER] === 0) {
        return arrThree[arr[FIRST_NUMBER]];
    } else if (arr.length === 2 && arr[THIRD_NUMBER] !== 0) {
        return `${arrThree[arr[FIRST_NUMBER]]} ${arrOne[arr[SECOND_NUMBER]]}`
    } else if (arr.length === 3 && arr[SECOND_NUMBER] === 0 && arr[THIRD_NUMBER] === 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred`
    } else if (arr.length === 3 && arr[SECOND_NUMBER] === 1 && arr[THIRD_NUMBER] === 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred ten`
    } else if (arr.length === 3 && arr[2] === 0 && arr[SECOND_NUMBER] !== 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred ${arrThree[arr[SECOND_NUMBER]]}` 
    } else if (arr.length === 3 && arr[SECOND_NUMBER] === 1 && arr[THIRD_NUMBER] !== 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred ${arrTwo[arr[THIRD_NUMBER]]}` 
    } else if (arr.length === 3 && arr[SECOND_NUMBER] === 0 && arr[THIRD_NUMBER] !== 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred ${arrOne[arr[THIRD_NUMBER]]}`
    } else if (arr.length === 3 && arr[THIRD_NUMBER] !== 0) {
        return `${arrOne[arr[FIRST_NUMBER]]} hundred ${arrThree[arr[SECOND_NUMBER]]} ${arrOne[arr[THIRD_NUMBER]]}` 
    } 
    
   
   
 
}
