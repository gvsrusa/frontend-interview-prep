function isValid(s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };
  for (const char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
export {
  isValid
};
