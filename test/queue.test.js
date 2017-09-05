const Queue = require('../src/queue.js');
const expect = require('chai').expect;


describe('queue', function(){
  beforeEach(function(){
    queue = new Queue();
  })

  describe('length', function(){
    it('should return the size of the stack', function(){
      expect(queue.length()).to.equal(0)
    })
  })

  describe('enqueue',function(){
    it('should return self for chaining', function(){
      let self = queue.enqueue(1)
      expect(queue).to.equal(self)
    })

    it('should enqueue items in the queue', function(){
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
      expect(queue.length()).to.equal(4);
    })
  })

  describe('dequeue', function(){
    it('should remove the first item of the queue', function(){
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);

      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.dequeue()).to.equal(3);
      expect(queue.dequeue()).to.equal(4);
    });

    it('should return undefined if the queue is empty', function(){
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);

      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.dequeue()).to.equal(3);
      expect(queue.dequeue()).to.equal(4);
      expect(queue.dequeue()).to.equal(undefined);

    })
  })

  describe('peek', function(){
    it('should return the value of the top item of the queue', function(){
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
      expect(queue.peek()).to.equal(1);
      queue.dequeue()
      expect(queue.peek()).to.equal(2);
      queue.dequeue()
      expect(queue.peek()).to.equal(3);
      queue.dequeue()
      expect(queue.peek()).to.equal(4);
    })

    it('should return undefined if the queue is empty', function(){
      expect(queue.peek()).to.equal(undefined)
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      expect(queue.peek()).to.equal(undefined)
    })
  })

  describe('isEmpty', function(){
    it('should return true if the queue is empty', function(){
      expect(queue.isEmpty()).to.equal(true);
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      expect(queue.isEmpty()).to.equal(true)
      // this is making sure that dequeueing on an empty queue is
      // not causing some wierd behaviors.
      queue.dequeue()
      expect(queue.isEmpty()).to.equal(true)
    })

    it('should return false of the queue is not empty', function(){
      queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
      expect(queue.isEmpty()).to.equal(false);
    })
  })
})
