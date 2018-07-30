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
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    }

    newNode.next = this.head
    this.head = newNode

    this.length++
    return this
  }

  // pop()
  //   removes and return the value of the next item according to the rules
  //   of the stack
  //   if stack is empty, return null
  pop(){
    let currentNode = this.head
    if (!this.length) {
      return null
    }

    const value = this.head.val
    this.head = this.head.next

    this.length--
    return value
    
  }

  // peek()
  //   return the value of the next item according to the rules
  //   of the stack
  //   does not change the stack
  //   if the stack is empty, return null
  peek(){
    if (this.length === 0) {
      return null
    }
    return this.head.val
  }

  // isEmpty()
  //   return true if the queue is empty, false otherwise
  isEmpty(){
    return this.length === 0
  }
}

module.exports = Stack;
