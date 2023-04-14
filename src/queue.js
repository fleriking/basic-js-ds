const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.end = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = {
      value: value,
      next: null,
    }
    if (!this.head) {
      this.head = node;
    } else {
      this.end.next = node;
    }
    this.end = node;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = null;
    if (this.head) {
      result = this.head.value;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.end = null;
      }
    }
    return result;
  }
}

module.exports = {
  Queue
};
