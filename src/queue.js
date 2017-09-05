const LinkedList = require('../lib/linked-list.js')


class Queue {

  // constructor()
  //   create a new LinkedList to be the queue
  constructor(){
    this.queue = new LinkedList()
  }

  // length()
  //   returns the length of the queue
  length(){
    return this.queue.length;
  }

  // enqueue(val)
  //   takes a value to store in the queue
  //   returns a reference to self for chaining
  enqueue(val){
    this.queue.unshift(val);
    return this;
  }

  // dequeue()
  //   removes and return the value of the next item according to the rules
  //   of the queue
  dequeue(){
    return this.queue.pop()
  }

  // peek()
  //   return the value of the next item according to the rules
  //   of the queue
  //   does not change the queue
  peek(){
    return this.queue.get(this.queue.length - 1);
  }


  // isEmpty()
  //   return true if the queue is empty, false otherwise
  isEmpty(){
    return this.queue.length === 0;
  }
}

module.exports = Queue;
