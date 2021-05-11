function singleNumberSortAndCheck(nums) {
  let sorted = nums.sort();
  let countObj = {};
  // console.log(sorted)
  for(let num of sorted){
    if(countObj[num]){
       delete countObj[num]
    }else{
      countObj[num] = 1;
    }
  }
  return Object.keys(countObj)

};
console.log(singleNumberSortAndCheck([4,4,4,4,2]))
