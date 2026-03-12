import React, { useMemo, useState } from 'react';

const listingCards = [
  { id: 1, section: 'Section 115', row: 'Row 11, 10-15', price: '$150', badge: '1 0 Amazing', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80' },
  { id: 2, section: 'Section 107', row: 'Row 5, 20-25', price: '$171', badge: '9 4 Amazing', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80' },
  { id: 3, section: 'Section 135', row: 'Row 10, 1-5', price: '$121', badge: '1 0 Amazing', image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=800&q=80' },
  { id: 4, section: 'Section 97', row: 'Row 2, 11-15', price: '$245', badge: '1 0 Amazing', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80' },
  { id: 5, section: 'Section 155', row: 'Row 35, 1-5', price: '$97', badge: '8 2 Amazing', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' }
];

const selectOptions = {
  quantity: ['1 ticket', '2 tickets', '3 tickets', '4 tickets'],
  seats: ['1,2', '3,4', '5,6'],
  merch: ['None', 'Knicks jersey', 'Cap + foam finger'],
  refresh: ['None', 'Combo meal', 'Family snacks']
};

const navItems = [
  { id: 'list', icon: '⌂' },
  { id: 'calendar', icon: '◫' },
  { id: 'search', icon: '⌕' },
  { id: 'profile', icon: '◉' },
  { id: 'settings', icon: '⚙' }
];

function App() {
  const [screen, setScreen] = useState('list');
  const [filters, setFilters] = useState({ quantity: '2 tickets', seats: '1,2', merch: 'None', refresh: 'None', loyalty: true });

  const placeholderTitles = useMemo(
    () => ({
      calendar: 'Calendar',
      search: 'Search',
      profile: 'Profile',
      settings: 'Settings',
      share: 'Share Listing',
      cart: 'Cart',
      favorites: 'Favorites',
      checkout: 'Checkout',
      filter: 'Filters',
      sort: 'Sort Listings',
      info: 'Event Details',
      price: 'Price Breakdown'
    }),
    []
  );

  const renderPrimaryScreen = () => {
    if (screen === 'list') return <ListScreen onNavigate={setScreen} />;
    if (screen === 'ticket') return <TicketScreen onNavigate={setScreen} filters={filters} setFilters={setFilters} />;
    if (screen === 'detail') return <DetailScreen onNavigate={setScreen} />;
    if (placeholderTitles[screen]) {
      return <SimpleScreen title={placeholderTitles[screen]} onBack={() => setScreen('list')} />;
    }
    return <SimpleScreen title="Screen" onBack={() => setScreen('list')} />;
  };

  return (
    <main className="app-shell">
      <div className="phone">
        <header className="status-bar">
          <strong>8:41</strong>
          <div className="status-icons">◖ ◗ ▱</div>
        </header>
        {renderPrimaryScreen()}
        <footer className="bottom-nav">
          <div className="nav-panel">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-btn ${screen === item.id ? 'active' : ''}`}
                onClick={() => setScreen(item.id)}
                aria-label={item.id}
              >
                {item.icon}
              </button>
            ))}
            <div className="home-indicator" />
          </div>
        </footer>
      </div>
    </main>
  );
}

function ListScreen({ onNavigate }) {
  return (
    <section className="screen">
      <div className="icon-row">
        <button className="circle-btn" onClick={() => onNavigate('info')}>←</button>
        <button className="circle-btn" onClick={() => onNavigate('info')}>ⓘ</button>
      </div>
      <img className="banner" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80" alt="event" />
      <div className="title-pill">New York Knicks at Utah Jazz</div>
      <div className="meta-pill">March 26 . Thu . 9:30PM . 2026</div>
      <div className="meta-pill">Madison Square Garden, New York, New York, USA</div>

      <div className="chip-row">
        <button className="chip" onClick={() => onNavigate('filter')}>⚙</button>
        <button className="chip" onClick={() => onNavigate('ticket')}>Quantity</button>
        <button className="chip" onClick={() => onNavigate('detail')}>Perks</button>
        <button className="chip" onClick={() => onNavigate('price')}>Price excl. fees</button>
        <button className="chip" onClick={() => onNavigate('ticket')}>Seat</button>
      </div>

      <img className="hero-image" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80" alt="arena" />

      <div className="listing-container">
        <div className="listing-head">
          <h2>1,165 listings</h2>
          <button onClick={() => onNavigate('sort')}>Sort by ▼</button>
        </div>
        {listingCards.map((card) => (
          <button key={card.id} className="listing-card" onClick={() => onNavigate('ticket')}>
            <img src={card.image} alt={card.section} />
            <div>
              <h3>{card.section}</h3>
              <p>{card.row} ↺</p>
              <span>{card.badge}</span>
            </div>
            <div className="price-col">
              <strong>{card.price}</strong>
              <small>incl. fees</small>
            </div>
          </button>
        ))}
      </div>

      <button className="cta" onClick={() => onNavigate('ticket')}>Confirm</button>
    </section>
  );
}

function TicketScreen({ onNavigate, filters, setFilters }) {
  const setField = (name, value) => setFilters((prev) => ({ ...prev, [name]: value }));

  return (
    <section className="screen">
      <div className="icon-row">
        <button className="circle-btn" onClick={() => onNavigate('list')}>←</button>
        <button className="circle-btn" onClick={() => onNavigate('share')}>⤴</button>
      </div>

      <div className="ticket-gallery">
        <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80" alt="seats" />
        <div>
          <img src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=800&q=80" alt="close" />
          <button className="view-all" onClick={() => onNavigate('detail')}>View all</button>
        </div>
      </div>

      <div className="detail-copy">
        <h2>Detroit Pistons at New York Knicks, Row 2</h2>
        <p className="price-row">$197 <span>each incl. fees</span></p>
        <p className="sub">as low as $21/mo or 1.2% APR with affirm</p>
        <div className="line" />
        <p>⚡ Instant purchase & delivery <span>Mobile tickets</span></p>
        <div className="line" />
        <div className="market">
          <div>
            <h3>Official Ticket Marketplace</h3>
            <small>Tickets are reviewed and verified by the NBA</small>
          </div>
          <strong>NBA</strong>
        </div>
      </div>

      <div className="line" />
      <SelectRow label="Quantity" value={filters.quantity} options={selectOptions.quantity} onChange={(e) => setField('quantity', e.target.value)} />
      <SelectRow label="Seat numbers" value={filters.seats} options={selectOptions.seats} onChange={(e) => setField('seats', e.target.value)} />
      <SelectRow label="Merchandise" value={filters.merch} options={selectOptions.merch} onChange={(e) => setField('merch', e.target.value)} />
      <SelectRow label="Refreshments" value={filters.refresh} options={selectOptions.refresh} onChange={(e) => setField('refresh', e.target.value)} />

      <label className="field-row checkbox-row">
        <span>Loyalty points</span>
        <input type="checkbox" checked={filters.loyalty} onChange={(e) => setField('loyalty', e.target.checked)} />
      </label>

      <button className="cta" onClick={() => onNavigate('detail')}>Confirm</button>
    </section>
  );
}

function DetailScreen({ onNavigate }) {
  return (
    <section className="screen">
      <div className="icon-row">
        <button className="circle-btn" onClick={() => onNavigate('list')}>←</button>
        <div className="right-icons">
          <button className="circle-btn" onClick={() => onNavigate('cart')}>🛒</button>
          <button className="circle-btn" onClick={() => onNavigate('favorites')}>♡</button>
        </div>
      </div>
      <img className="hero-image" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80" alt="section" />
      <div className="detail-copy">
        <h2>Section 115|Row 15</h2>
        <p>Seats 4 - 9</p>
        <p>Aerial Viewers</p>
        <small>See all tickets in this section</small>
        <div className="line" />
        <h3>Merchandise & Refreshments</h3>
        <div className="spacer" />
        <div className="line" />
        <h3>Perks</h3>
        <p>Mobile & Offline ticket</p>
        <p>Aerial view</p>
        <p>You’ll be seated together</p>
        <p>Can relist, sell if plans change</p>
        <div className="line" />
        <h3>Price Breakdown</h3>
        <p>Ticket price</p>
        <p>Fees</p>
        <p>Taxes</p>
        <h3>per ticket incl. fees</h3>
        <div className="line" />
        <h3>You can pay with</h3>
      </div>
      <div className="pay-grid">
        <button onClick={() => onNavigate('checkout')}>💳 Cards</button>
        <button onClick={() => onNavigate('checkout')}>🏦 Banks</button>
        <button onClick={() => onNavigate('checkout')}>👛 Wallets</button>
      </div>
      <button className="cta" onClick={() => onNavigate('checkout')}>Proceed to checkout</button>
      <button className="cta cta-gold" onClick={() => onNavigate('cart')}>Add to cart 🛒</button>
    </section>
  );
}

function SelectRow({ label, value, options, onChange }) {
  return (
    <label className="field-row">
      <span>{label}</span>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function SimpleScreen({ title, onBack }) {
  return (
    <section className="screen simple">
      <div className="icon-row">
        <button className="circle-btn" onClick={onBack}>←</button>
      </div>
      <article className="placeholder-card">
        <h2>{title}</h2>
        <p>This route is active and wired. Hook your business logic here.</p>
      </article>
    </section>
  );
}

export default App;
