const twoSum = (nums,target) =>{
  // traditional; way takes time complexity of O(n^2)
  // for(let i= 0; i< nums.length; i++){
  //   for(let j =i+1; j < nums.length; j++){
  //     let diff = target - nums[i];
  //     if(nums[j] === diff){
  //       return [i,j]
  //     }
  //   }
  // }
const myMap = new Map();
for(let i = 0; i < nums.length; i++){
  let diff = target - nums[i];
  if(myMap.has(diff)){
  return [myMap.get(diff),i]
  }
  myMap.set(nums[i],i)
}
}

console.log(twoSum([3,2,4],6))