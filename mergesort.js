const nums = [];

function seedNums(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * count & 10));
    }
}

seedNums(nums, 20);

function mergeSort(arr) {
    // base case (array of one element is sorted)
    if (arr.length <= 1) return arr;
    // find the midpoint prior to separating into two arrays
    const mid = Math.floor(arr.length / 2);
    // recursive case
    return merge(mergeSoft(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

const sortedArray = mergeSort(nums);

// to add to an array    unshift --> array <-- push
// to remove from an array  shift <-- array --> pop
// helper function (conquer)
function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
        sorted.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    sorted.push(...left, ...right);
    return sorted;
}

console.log(merge([2, 5, 9, 20], [3, 10, 25, 30]))