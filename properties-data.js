const STORAGE_KEY = 'j3-properties-v3';

export const NCR_CITIES = ['Faridabad', 'Gurugram', 'Delhi', 'Noida', 'Greater Noida', 'Ghaziabad', 'Sonipat', 'Panipat', 'Rohtak', 'Bahadurgarh', 'Manesar'];

export const DEFAULT_PROPERTIES = [
  { id: 'deck', photo: './assets/prop-deck.jpg', title: 'BPTP The Deck', location: 'Faridabad', area: 'Sector 88', type: 'Apartment', bhk: 3, sqft: 2450, budgetValue: 2.5, budgetUnit: 'Cr', bullets: ['Cantilevered balconies', 'Sky-lounge and rooftop deck', 'Private elevator lobbies'] },
  { id: 'skynest', photo: './assets/prop-discovery-skynest.jpg', title: 'BPTP Discovery Park Skynest', location: 'Faridabad', area: 'Sector 80', type: 'Apartment', bhk: 3, sqft: 1850, budgetValue: 2.2, budgetUnit: 'Cr', bullets: ['Iconic G+44 towers', 'Luxury clubhouse', '5-star hotel-style lobby'] },
  { id: 'parkland', photo: './assets/prop-parklands-pride.jpg', title: 'BPTP Parklands Pride Phase 2', location: 'Faridabad', area: 'Sector 77', type: 'Plot', bhk: 0, sqft: 1650, budgetValue: 95, budgetUnit: 'L', bullets: ['Park-facing plots', 'Gated 1000+ family community'] },
  { id: 'imperial', photo: './assets/prop-imperial-heights.jpg', title: 'The Imperial Heights', location: 'Faridabad', area: 'Neharpar', type: 'Apartment', bhk: 4, sqft: 2850, budgetValue: 3.2, budgetUnit: 'Cr', bullets: ['Sculptural facades', 'Double-height lobbies'] },
  { id: 'kst', photo: './assets/prop-kst-whispering.jpg', title: 'KST Whispering Heights', location: 'Faridabad', area: '', type: 'Builder Floor', bhk: 3, sqft: 1450, budgetValue: 85, budgetUnit: 'L', bullets: ['Quiet, tree-lined residences', 'Independent living'] },
  { id: 'shivsai', photo: './assets/prop-shiv-sai-ozone.jpg', title: 'Shiv Sai Ozone', location: 'Faridabad', area: '', type: 'Builder Floor', bhk: 2, sqft: 1150, budgetValue: 62, budgetUnit: 'L', bullets: ['Open, green courtyards', 'Well-ventilated homes'] },
  { id: 'savana', photo: './assets/prop-rps-savana.jpg', title: 'RPS Savana', location: 'Faridabad', area: '', type: 'Villa', bhk: 4, sqft: 3100, budgetValue: 3.8, budgetUnit: 'Cr', bullets: ['Resort-style low-rise living', 'Expansive landscaped grounds'] },
  { id: 'auria', photo: './assets/prop-rps-auria.jpg', title: 'RPS Auria', location: 'Faridabad', area: '', type: 'Apartment', bhk: 3, sqft: 1780, budgetValue: 2.1, budgetUnit: 'Cr', bullets: ['Contemporary high-rise towers', 'Resort-grade amenities'] },
  { id: 'omaxe', photo: './assets/prop-omaxe-royal.jpg', title: 'Omaxe Royal Residency', location: 'Faridabad', area: '', type: 'Apartment', bhk: 3, sqft: 1650, budgetValue: 1.9, budgetUnit: 'Cr', bullets: ['Established township living', 'Full-scale retail infrastructure'] },
  { id: 'piyush', photo: './assets/prop-piyush-heights.jpg', title: 'Piyush Heights', location: 'Faridabad', area: '', type: 'Apartment', bhk: 3, sqft: 1600, budgetValue: 1.75, budgetUnit: 'Cr', bullets: ['Landscaped high-rise living', 'Generously proportioned homes'] },
  { id: 'prosper', photo: './assets/prop-prosper.jpg', title: 'Prosper', location: 'Faridabad', area: '', type: 'Apartment', bhk: 4, sqft: 2600, budgetValue: 3.4, budgetUnit: 'Cr', bullets: ['Striking tower silhouette', 'Thoughtfully planned residences'] },
  { id: 'tdi-grand', photo: './assets/prop-tdi-grand-retreat.jpg', title: 'TDI Grand Retreat', location: 'Faridabad', area: '', type: 'Villa', bhk: 4, sqft: 3300, budgetValue: 4.1, budgetUnit: 'Cr', bullets: ['Gated green-living community', 'Sculptural entrance'] },
  { id: 'tdi-retreat', photo: './assets/prop-tdi-the-retreat.jpg', title: 'TDI The Retreat', location: 'Faridabad', area: '', type: 'Builder Floor', bhk: 3, sqft: 1700, budgetValue: 1.6, budgetUnit: 'Cr', bullets: ['Low-rise residences', 'Open courtyards and greenery'] },
  { id: 'district', photo: './assets/prop-district.jpg', title: 'District', location: 'Faridabad', area: 'Sector 81', type: 'Apartment', bhk: 3, sqft: 1900, budgetValue: 2.3, budgetUnit: 'Cr', bullets: ['Gated luxury enclave', 'Distinctive contemporary entrance'] },
  { id: 'puri-kohinoor', photo: './assets/prop-puri-kohinoor.jpg', title: 'Puri Kohinoor Emporium', location: 'Faridabad', area: 'Sector 66', type: 'Commercial', bhk: 0, sqft: 850, budgetValue: 75, budgetUnit: 'L', bullets: ['Illuminated commercial address', 'Ornamental facade'] },
  { id: 'palm-drive', photo: './assets/prop-rps-palm-drive.jpg', title: 'RPS Palm Drive', location: 'Faridabad', area: '', type: 'Villa', bhk: 3, sqft: 2400, budgetValue: 3.1, budgetUnit: 'Cr', bullets: ['Row residences', 'Private balconies along a palm-lined drive'] },
];

export function loadProperties() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {}
  return DEFAULT_PROPERTIES;
}

export function saveProperties(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function budgetInCr(p) {
  const v = parseFloat(p.budgetValue) || 0;
  return p.budgetUnit === 'L' ? v / 100 : v;
}

export function budgetBucket(p) {
  const cr = budgetInCr(p);
  if (cr < 1) return 'under1';
  if (cr < 3) return '1-3';
  if (cr < 5) return '3-5';
  return '5plus';
}

export function priceLabel(p) {
  const v = parseFloat(p.budgetValue) || 0;
  const unit = p.budgetUnit === 'L' ? 'L' : 'Cr';
  const num = Number.isInteger(v) ? v : v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  return '\u20b9' + num + ' ' + unit + ' onwards';
}

export function sqftLabel(p) {
  const n = parseFloat(p.sqft) || 0;
  return n.toLocaleString('en-IN') + ' sq.ft.';
}
