# Multi-Step Form

## Description

Build a multi-step form with a stepper, validation on each step, back/next navigation, and a summary page before final submission.

## Requirements

- Three steps: Personal Info (name, email), Address (address, city), Summary
- Show current step indicator (e.g., "Step 1 of 3")
- Validate required fields before allowing navigation to the next step
- Show validation errors inline
- Allow navigating back to previous steps (preserving data)
- Final step shows a summary of all entered data
- Submit button on the final step

## Examples

1. Fill in name and email → click Next → moves to step 2
2. Leave fields empty → click Next → shows validation errors, stays on step
3. Complete all steps → summary shows all data → click Submit
4. Click Back → returns to previous step with data preserved
