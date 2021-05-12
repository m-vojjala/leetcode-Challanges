const backspaceCompare = function(s, t) {   
  /*The idea behind this approach is to initialize two empty arrays (one for each inputted string). Then, walk through each inputted string, checking each character. If the character is not "#", then add the character to the array. If it is "#", then pop the last element off of the array. Then, join both of the arrays (turning them into strings), and compare if those strings are equal. */ 
   const helper = (string) =>{
     let stringArr  = [];
    for(let character of string){
      if(character !== "#"){
        stringArr.push(character)
      }else{
        stringArr.pop();
      }
    }
    return stringArr.join('')
   }
  return helper(s) === helper(t);
};
console.log(backspaceCompare("a#c","b"))