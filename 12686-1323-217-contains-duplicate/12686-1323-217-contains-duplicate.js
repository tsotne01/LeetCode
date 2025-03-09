/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNums = Array.from(new Set(nums));

    return nums.length !== uniqueNums.length;
};