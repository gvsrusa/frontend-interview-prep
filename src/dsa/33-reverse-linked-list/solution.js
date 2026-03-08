class ListNode {
  val;
  next;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
export {
  ListNode,
  reverseList
};
