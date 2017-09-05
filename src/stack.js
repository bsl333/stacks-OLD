const LinkedList = require('../lib/linked-list.js')


class Stack {
  // constructor()
  //   create a new LinkedList to be the stack
  constructor(){
    this.stack = new LinkedList()
  }

  // length()
  //   returns the length of the stack
  length(){
    return this.stack.length;
  }

  // push(val)
  //   takes a value to store in the stack
  //   returns a reference to self for chaining
  push(val){
    this.stack.push(val);
    return this;
  }

  // pop()
  //   removes and return the value of the next item according to the rules
  //   of the stack
  pop(){
    return this.stack.pop()
  }

  // peek()
  //   return the value of the next item according to the rules
  //   of the stack
  //   does not change the stack
  peek(){
    return this.stack.get(this.stack.length - 1);
  }

  // isEmpty()
  //   return true if the queue is empty, false otherwise
  isEmpty(){
    return this.stack.length === 0;
  }
}

module.exports = Stack;
