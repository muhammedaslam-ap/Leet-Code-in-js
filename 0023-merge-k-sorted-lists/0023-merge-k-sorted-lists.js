/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = []

    for(j=0;j<lists.length;j++){
       let node = lists[j]
       while(node){
        arr.push(node.val)
        node = node.next 
       }

    }
    
    arr.sort((a, b) => a - b);

    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};