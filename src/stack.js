const LinkedList = require('../lib/linked-list.js')


class Stack {
  constructor(){
    this.stack = new LinkedList()
  }

  length(){
    return this.stack.length;
  }
  
  push(val){
    this.stack.push(val);
    return this;
  }

  pop(){
    return this.stack.pop()
  }

  peek(){
    return this.stack.get(this.stack.length - 1);
  }

  isEmpty(){
    return this.stack.length === 0;
  }
}

module.exports = Stack;
