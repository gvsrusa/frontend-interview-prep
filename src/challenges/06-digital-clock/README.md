# Digital Clock

## Description

Build a real-time digital clock that updates every second and supports toggling between 12-hour and 24-hour formats.

## Requirements

- Display the current time, updating every second
- Default to 24-hour format (e.g., "14:30:45")
- Provide a button to toggle between 12h and 24h format
- 12h format should show AM/PM (e.g., "02:30:45 PM")
- Pad hours, minutes, and seconds with leading zeros
- Clean up the timer interval on component unmount

## Examples

- 24h mode at 2:30 PM → "14:30:45"
- 12h mode at 2:30 PM → "02:30:45 PM"
- 12h mode at midnight → "12:00:00 AM"
