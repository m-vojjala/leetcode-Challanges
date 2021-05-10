var lengthOfLongestSubstring = (s) => {
  let mySet =  new Set();
  let maxLength =0;
  let left = 0;
  let right = 0;
 while(right < s.length){
   if(!mySet.has(s.charAt(right))){
     mySet.add(s.charAt(right));
   
     maxLength = Math.max(maxLength,mySet.size);
     right++;
   }else{
    mySet.delete(s.charAt(left));
    left++;
   }
 }
return maxLength;
};

console.log(lengthOfLongestSubstring("abcdabcbb"))