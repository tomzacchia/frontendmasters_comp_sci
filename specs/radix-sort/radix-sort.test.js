/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

//  number = 1391, place = 0th place, longestNumber = 4 (number of digits of biggest number)
// 0th place => 1, 10th's place => 9
// longestNumber --> used to return zero when number, say 1, does not have a 10th or 100th's digit
//  returns 1
function getDigitAtPlaceValue(number, placeValue, longestNumber) {
  // handle default case, current number of digits < longestNumber
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;

  // placeValue starts at longestNumber and decrements with each for loop
  // if we try to get the 10th place digit of a single digit number, string[-negative] returns 0
  return string[placeValue - mod] || 0;
}

// returns 4 in this example
function getLongestNumber(array) {
  let longestNumber;

  array.forEach((number) => {
    const numberLength = number.toString().length;

    if (!longestNumber) longestNumber = numberLength;

    if (numberLength > longestNumber) longestNumber = numberLength;
  });

  return longestNumber;
}

function radixSort(array) {
  // code goes here

  // find longestNumber
  const longestNumber = getLongestNumber(array);

  // create buckets (10 buckets since we're in base 10)
  let buckets = [];

  for (let i = 0; i < 10; i++) {
    buckets.push([]);
  }

  // for loop for number of interations, based on longestNumber
  for (let placeValue = longestNumber - 1; placeValue >= 0; placeValue--) {
    // enqueue numbers into buckets
    while (array.length) {
      const number = array.shift();
      const bucketIndexofNumber = getDigitAtPlaceValue(
        number,
        placeValue,
        longestNumber
      );
      buckets[bucketIndexofNumber].push(number);
    }

    // dequeue numbers
    for (let i = 0; i < buckets.length; i++) {
      const bucketsSubarray = buckets[i];

      while (bucketsSubarray.length) {
        const number = bucketsSubarray.shift();
        array.push(number);
      }
    }
  }

  // return sorted away
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
