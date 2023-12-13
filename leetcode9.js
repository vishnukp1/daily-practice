// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of
//  positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], 
// where % is the modulo operation.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
// Example 2:

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
 


function check(nums) {
    let rotated = false;
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            if (rotated) {
                return false;
            }
            rotated = true;
        }
    }

    if (nums[0] < nums[n - 1] && rotated) {
        return false;
    }

    return true;
}

// Example usage:
const nums1 = [3, 4, 5, 1, 2];
console.log(check(nums1)); // Output: true

const nums2 = [2, 1, 3, 4];
console.log(check(nums2)); // Output: false

const nums3 = [1, 2, 3];
console.log(check(nums3)); // Output: true


