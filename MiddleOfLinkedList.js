const middleNode = function(head) {
  /* One approach to this problem involve iterating through the linked list, putting each node value in a new array, and then finding the middle element of the array. This approach does have a time complexity of O(n), and a space complexity of O(n), since all of the nodes are put into a new array */  

  let slow = head;
  let fast = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
return slow;
};
