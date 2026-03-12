# NBA Ticket Marketplace App

This project is a simple web-based demo for browsing NBA events and completing a ticket booking flow.

## What the app includes

The app contains six connected screens:

1. Event details
2. Seat and ticket booking
3. Ticket booking with merchandise and refreshment options
4. Seat overview and booking summary
5. Payment form
6. Payment success confirmation

## How to run

1. Open a terminal in the project folder.
2. Start a local server:

```bash
python -m http.server 8080
```

3. Open your browser and visit:

```text
http://localhost:8080
```

## How to use

1. Browse and select a game.
2. Choose seats and confirm your selection.
3. Add optional merchandise or refreshments.
4. Continue to checkout and payment.
5. Submit payment details to complete the flow.

## Test payment data

You can use sample values on the payment page:

- Name: Any name
- Card: 4242 4242 4242 4242
- Expiry: 12/28
- CVV: 123

## Notes

- The app runs as static files (no build process required).
- Main file: `index.html`.
