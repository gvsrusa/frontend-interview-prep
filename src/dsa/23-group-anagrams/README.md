# Group Anagrams

## Description

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

## Examples

```
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
```

## Constraints

- 0 <= strs.length <= 10⁴
- 0 <= strs[i].length <= 100
- `strs[i]` consists of lowercase English letters.

## Complexity

- **Time:** O(n × k log k) where n is the number of strings and k is the max string length
- **Space:** O(n × k) for the hash map storage
