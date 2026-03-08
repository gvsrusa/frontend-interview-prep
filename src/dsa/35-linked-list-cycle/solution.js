class ListNode {
  val;
  next;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
export {
  ListNode,
  hasCycle
};
