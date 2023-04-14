const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(node) {
    this.rootTree = node ? node : null;
    // this.count = 0;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootTree ? this.rootTree : null;
  }

  add(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) return false;
    const node = new Node(value);
    if (!this.rootTree) {
      this.rootTree = node;
      // this.count++;
    } else {
      function addRecurs(headNode, addNode) {
        if (headNode.data < addNode.data) {
          if (headNode.right) {
            addRecurs(headNode.right, addNode);
          } else {
            headNode.right = addNode;
            // this.count++;
            // addNode.parent = headNode;
          }
        } 
        if (headNode.data > addNode.data) {
          if (headNode.left) {
            addRecurs(headNode.left, addNode);
          } else {
            headNode.left = addNode;
            // this.count++;
            // addNode.parent = headNode;
          }
        } 
      }
      addRecurs(this.rootTree, node);
    }

  }

  has(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) return false;
    function hasRecurs(data, head) {
      if (!head) return false;
      if (data === head.data) {
        return true;
      } else {
        if (data < head.data) {
          return hasRecurs(data, head.left);
        }
        if (data > head.data) {
          return hasRecurs(data, head.right);
        }
      }
    }
    return hasRecurs(value, this.rootTree);
  }

  find(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) return null;
    function findRecurs(data, head) {
      if (!head) return null;
      if (data === head.data) {
        return head;
      } else {
        if (data < head.data) {
          return findRecurs(data, head.left);
        }
        if (data > head.data) {
          return findRecurs(data, head.right);
        }
      }
    }
    return findRecurs(value, this.rootTree);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (data === undefined) return null;
    function removeRecurs(data, head, parent) {
      if (!head) return null;
      if (data === head.data) {
        
        if (!head.left && !head.right) {
          if (parent) {
            if (parent.data > head.data) {
              parent.left = null;
            } else if (parent.data <  head.data) {
              parent.right = null;
            } 
            // else {
            //   parent.right = null;
            //   parent.left = null;
            // }

          } else {
            this.rootTree = null;
          }
        } else {
          let deepNode;
          let deepNodeParent = head;
          if (head.left) {
            deepNode = head.left;
            while (deepNode.right) {
              deepNodeParent = deepNode;
              deepNode = deepNode.right;
            }
            head.data = deepNode.data;
            if (deepNode.data === deepNodeParent.data) {
              head.left = deepNode.left;
            } else {

              removeRecurs(deepNode.data, deepNode, deepNodeParent);
            }
            // deepNode.right = head.right;
            // deepNodeParent.right = deepNode.left;
            // deepNode.left = head.left;

            // if (deepNodeParent !== head) {
            //   deepNodeParent.right = null;
            // }
            // else {
            //   deepNode.left = null;
            // }

          } else {
            deepNode = head.right;

            while (deepNode.left) {
              deepNodeParent = deepNode;
              deepNode = deepNode.left;
            }
            head.data = deepNode.data;
            if (deepNode.data === deepNodeParent.data) {
              head.right = deepNode.right;
            } else {
            removeRecurs(deepNode.data, deepNode, deepNodeParent);
            }
            // deepNodeParent.left = deepNode.right;
            // deepNode.right = head.right;
            
            // deepNode.left = head.left;

            // if (deepNodeParent !== head) {
            //   deepNodeParent.left = null;
            // } else {
            //   deepNode.right = null;
            // }

          }

          // if (parent) {
          //   if (parent.data > deepNode.data) {
          //     parent.left = deepNode;
          //   } else {
          //     parent.right = deepNode;
          //   }
          // } else {
          //   this.rootTree = deepNode;
          // }
        }
      } else {
        if (data < head.data) {
          return removeRecurs(data, head.left, head);
        }
        if (data > head.data) {
          return removeRecurs(data, head.right, head);
        }
      }
    }
    removeRecurs.call(this,data,this.rootTree, null);

    
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootTree) return null;
    let node = this.rootTree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootTree) return null;
    let node = this.rootTree;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

class Node {
  constructor(value) {
    // this.parent = null;
    this.left = null;
    this.right = null;
    this.data = value;
  }
}
module.exports = {
  BinarySearchTree
};