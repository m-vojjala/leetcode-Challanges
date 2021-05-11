var maxSubArray = function(nums) {
   /*A brute-force solution to this problem would be to compile every single subarray of an input, sum its elements, and return the highest number. That approach would take O(n^2) time */
   /*a solution to this problem that uses Kadane's Algorithm, and solves this problem in O(n) time.  */


   let currentMax = nums[0];
   let globalMax = nums[0];
   console.log(-Number.MAX_VALUE)
   for (let i = 1; i < nums.length; i++){
    currentMax = Math.max(nums[i],currentMax+nums[i]);
    console.log(currentMax)
   
    globalMax = Math.max(globalMax,currentMax);
    // if(currentMax > globalMax){
    //   globalMax = currentMax
    // }
   }
   return globalMax;
};

console.log(maxSubArray([3,2,-2,1]))
