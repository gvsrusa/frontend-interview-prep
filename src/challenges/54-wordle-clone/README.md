# Wordle Clone

## Description
Build a 5-letter word guessing game with colored letter feedback, similar to Wordle.

## Requirements
- Player gets 6 attempts to guess a 5-letter word
- After each guess, show letter-by-letter feedback:
  - Green: correct letter in correct position
  - Yellow: correct letter in wrong position
  - Gray: letter not in the word
- Keyboard input or on-screen keyboard
- Show game status: win, lose, or in progress
- Display the answer on game over (loss)
- New game button to restart with a different word

## Examples
- Guessing "CRANE" when the word is "BRAIN" shows: C(gray) R(yellow) A(yellow) N(yellow) E(gray)
- Correct guess on attempt 3 shows "You Win! (3/6)"
- Using all 6 attempts without guessing shows "Game Over" and reveals the word
