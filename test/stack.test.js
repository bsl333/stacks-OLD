const Stack = require('../src/stack.js');
const expect = require('chai').expect;


describe('stack', function(){
  beforeEach(function(){
    stack = new Stack();
  })

  describe('length', function(){
    it('should return the size of the stack', function(){
      expect(stack.length()).to.equal(0)
    })
  })

  describe('push',function(){
    it('should return self for chaining', function(){
      let self = stack.push(1)
      expect(stack).to.equal(self)
    })

    it('should push items in the stack', function(){
      stack.push(1).push(2).push(3).push(4)
      expect(stack.length()).to.equal(4);
    })
  })

  describe('pop', function(){
    it('should remove the last item of the stack', function(){
      stack.push(1).push(2).push(3).push(4);

      expect(stack.pop()).to.equal(4);
      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);
    });

    it('should return undefined if the stack is empty', function(){
      stack.push(1).push(2).push(3).push(4);

      expect(stack.pop()).to.equal(4);
      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);
      expect(stack.pop()).to.equal(undefined);

    })
  })

  describe('peek', function(){
    it('should return the value of the top item of the stack', function(){
      stack.push(1).push(2).push(3).push(4);
      expect(stack.peek()).to.equal(4);
      stack.pop()
      expect(stack.peek()).to.equal(3);
      stack.pop()
      expect(stack.peek()).to.equal(2);
      stack.pop()
      expect(stack.peek()).to.equal(1);
    })

    it('should return undefined if the stack is empty', function(){
      expect(stack.peek()).to.equal(undefined)
      stack.push(1).push(2).push(3).push(4);
      stack.pop()
      stack.pop()
      stack.pop()
      stack.pop()
      expect(stack.peek()).to.equal(undefined)
    })
  })

  describe('isEmpty', function(){
    it('should return true if the stack is empty', function(){
      expect(stack.isEmpty()).to.equal(true);
      stack.push(1).push(2).push(3).push(4);
      stack.pop()
      stack.pop()
      stack.pop()
      stack.pop()
      expect(stack.isEmpty()).to.equal(true)
      // this is making sure that popping on an empty stack is
      // not causing some wierd behaviors.
      stack.pop()
      expect(stack.isEmpty()).to.equal(true)
    })

    it('should return false of the stack is not empty', function(){
      stack.push(1).push(2).push(3).push(4);
      expect(stack.isEmpty()).to.equal(false);
    })
  })
})
