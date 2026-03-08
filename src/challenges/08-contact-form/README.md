# Contact Form

## Description

Build a contact form with client-side validation and a mock submission. The form should validate inputs and display appropriate error messages.

## Requirements

- Three fields: **Name** (text), **Email** (email), **Message** (textarea)
- All fields are required
- Email must be in a valid email format
- Message must be at least 10 characters long
- Show inline error messages for invalid fields on submit
- On successful validation, show a "Thank you for your message!" confirmation
- Use controlled form inputs
- Labels should be properly associated with inputs (using `htmlFor`)

## Examples

- Submit with empty fields → shows "Name is required", "Email is required", "Message is required"
- Submit with "bad-email" → shows "Email is invalid"
- Submit with valid data → form is replaced with a thank you message
