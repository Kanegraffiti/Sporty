# 🏀 NBA Ticket Marketplace App

A fully functional mobile ticketing app with 6 screens, smooth navigation, and complete booking flow.

---

## 📱 Screens Included

1. **Event Details** — Knicks schedule with filter tabs (Events / Parking / Premium)
2. **Seat & Ticket Booking** — Interactive venue map + 8 seat listings with sort
3. **Ticket Booking (Merch)** — Quantity, seat, merchandise & refreshment selectors
4. **Ticket Booking Screen** — Aerial seat view with perks breakdown
5. **Payment Authentication** — Secure card form with validation
6. **Payment Success** — Booking confirmation with scannable barcode ticket

---

## 🛠️ How to Run in Termux (Lenovo TB128FU)

### Step 1: Install Termux
Make sure you have Termux installed from **F-Droid** (not Play Store).
- F-Droid link: https://f-droid.org/en/packages/com.termux/

### Step 2: Install Required Packages
Open Termux and run:
```bash
pkg update && pkg upgrade -y
pkg install python -y
```

### Step 3: Copy the App to Your Tablet
Either:
- **Option A**: Transfer the `ticketing-app` folder via USB from your PC
- **Option B**: Download it directly in Termux:
  ```bash
  # If you have the zip file in Downloads:
  cp /sdcard/Download/ticketing-app.zip ~/
  pkg install unzip -y
  unzip ~/ticketing-app.zip -d ~/ticketing-app
  ```

### Step 4: Run the Local Server
```bash
cd ~/ticketing-app
python -m http.server 8080
```

You should see:
```
Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/) ...
```

### Step 5: Open in Browser
1. Open **Chrome** or any browser on your tablet
2. Go to: `http://localhost:8080`
3. The app loads as a full mobile UI

### Step 6 (Optional): Add to Home Screen as PWA
1. In Chrome, tap the **⋮ menu** (3 dots)
2. Tap **"Add to Home screen"**
3. Name it "NBA Tickets" and tap Add
4. It will appear as an app icon on your home screen!

---

## 🎮 How to Use the App

| Action | What to do |
|--------|-----------|
| Browse games | Scroll the game list on home screen |
| Select a game | Tap any game card |
| Choose seats | Tap a listing row, then "Confirm Seats" |
| Add merchandise | Use the dropdown selectors |
| Checkout | "Proceed to Checkout" → "Proceed to Payment" |
| Pay | Fill in card details (use any test data) and tap "Pay Now" |
| Go back | Tap the ← arrow in the header |

### 💳 Test Payment Details
Use any of these to test the payment screen:
- **Name**: Any name (e.g., `John Smith`)
- **Card**: `4242 4242 4242 4242`
- **Expiry**: `12/28`
- **CVV**: `123`

---

## 🔧 Troubleshooting

**"python not found"**
```bash
pkg install python
```

**Port 8080 already in use**
```bash
python -m http.server 9090
# Then visit http://localhost:9090
```

**Fonts not loading (offline)**
The app uses Google Fonts. If offline, it gracefully falls back to system fonts — the UI still works perfectly.

**Want to keep the server running when Termux is in background?**
```bash
pkg install tmux
tmux new-session -s tickets
cd ~/ticketing-app && python -m http.server 8080
# Press Ctrl+B then D to detach — server keeps running!
```

---

## 📁 File Structure
```
ticketing-app/
└── index.html     ← Everything in one file (HTML + CSS + JS)
```

No build tools, no npm, no dependencies — just open and run!

