# Polling Dashboard

## Description
Build a dashboard that auto-refreshes data at configurable intervals with start/stop/interval controls.

## Requirements
- Fetch mock data from a simulated API at regular intervals
- Start/Stop buttons to control polling
- Configurable polling interval (e.g., 1s, 3s, 5s, 10s)
- Display the data and last-updated timestamp
- Show how many times data has been fetched
- Clean up intervals on unmount

## Examples
- Dashboard starts polling every 3 seconds by default
- Clicking "Stop" halts auto-refresh; "Start" resumes it
- Changing interval to 5s restarts polling at the new rate
- Each fetch increments the request counter
