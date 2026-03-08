# Word Break

## Description

Given a string `s` and a dictionary of words `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words. The same word may be reused multiple times.

## Examples

```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: "leet" + "code"

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```

## Constraints

- `0 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of lowercase English letters.

## Complexity

- **Time:** O(n² × m) where n = s.length and m = average word length (for substring comparison)
- **Space:** O(n)
