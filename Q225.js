// Implement Stack using Queues
var MyStack = function() {
  this.topNode = null;
  this.size = 0;

};

var Node = function(data){
  this.data = data;
  this.previousNode = null;
  };
  
/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  var node = new Node(x);
  node.previousNode = this.topNode;
  this.topNode = node;
  this.size +=1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.topNode) {
    return this.topNode.data; 
  } 
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topNode;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  if (this.size === 0)
    return true;
  else 
    return false;
};

var myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.top());
myStack.empty();
console.log(myStack.pop());

myStack.empty();

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */