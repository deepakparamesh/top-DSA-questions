/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => {return a-b});
    
    let left=0;
    let right=nums.length - 1;
    let tempSum
    for(let i =0; i< nums.length - 1; i++){
        if(nums[i] > 0) return result;
        if(nums[i] === nums[i-1]) continue;
        
        left=i+1;
        right = nums.length - 1;
        while(left<right){
            tempSum = nums[i] + nums[left] + nums[right];
            if(tempSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(nums[left] == nums[left - 1]) {left++}
                while(nums[right] == nums[right +1]) {right--;}
            } else if(tempSum > 0) {
                right--;
            } else if(tempSum <0 ) {
                left++;
            }
        }
    }
    return result;
};