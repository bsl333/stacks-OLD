const LinkedList = require('../lib/linked-list.js')


class Queue {
  constructor(){
    this.queue = new LinkedList()
  }

  length(){
    return this.queue.length;
  }

  enqueue(val){
    this.queue.unshift(val);
    return this;
  }

  dequeue(){
    return this.queue.pop()
  }

  peek(){
    return this.queue.get(this.queue.length - 1);
  }

  isEmpty(){
    return this.queue.length === 0;
  }
}

module.exports = Queue;
