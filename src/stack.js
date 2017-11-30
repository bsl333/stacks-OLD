class Node {
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.length = 0;
  }


  // push(val)
  //   takes a value to store in the stack
  //   returns a reference to self for chaining
  push(val){

  }

  // pop()
  //   removes and return the value of the next item according to the rules
  //   of the stack
  //   if stack is empty, return null
  pop(){

  }

  // peek()
  //   return the value of the next item according to the rules
  //   of the stack
  //   does not change the stack
  //   if the stack is empty, return null
  peek(){

  }

  // isEmpty()
  //   return true if the queue is empty, false otherwise
  isEmpty(){
    
  }
}

module.exports = Stack;
