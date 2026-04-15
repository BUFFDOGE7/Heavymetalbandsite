const MEMBERS = [
  {
    stage: 'Rice Reaper',
    real:  'Hiroshi Kenji Nakamura',
    role:  'Lead Guitar',
    img:   IMG_HIROSHI,
    color: '#f59e0b',
    weapon:'Electric guitar & a rice cooker',
    bio:   'Plays with a level of intensity that makes it seem like he is arguing with the guitar rather than performing, producing solos that sound chaotic but strangely precise. Off stage, Hiroshi claims to be a professional rice quality inspector and takes this role far more seriously than his music career. He insists on driving the tour bus at an extremely slow speed because he believes sudden acceleration disrupts the natural harmony of the road.',
    facts: ['Attempted to cook rice on his amp mid-show','Refuses to confirm his age','Believes time is a suggestion, not a rule','Caused a small electrical fire — not a failure']
  },
  {
    stage: 'Neon Rage',
    real:  'Ashley Brittany McThunder',
    role:  'Lead Vocals',
    img:   IMG_ASHLEY,
    color: '#ec4899',
    weapon:'Her voice & the void',
    bio:   'The loudest human being most people will ever encounter. She does not distinguish much between singing and shouting, and her voice has been known to cause technical issues during live performances. She approaches every moment with the same level of intensity, often communicating by yelling even in completely normal situations. She acts as the band\'s unofficial conflict resolver — her method involves outshouting everyone else until they stop talking entirely.',
    facts: ['Expert reviewer of energy drinks','Collapsed a merch table with a soundcheck scream','Communicates exclusively by yelling','Described the collapsed merch table as good feedback']
  },
  {
    stage: 'Vodka Tank',
    real:  'Dmitri Borisovich Ivanov',
    role:  'Drums',
    img:   IMG_DMITRI,
    color: '#ef4444',
    weapon:'Drumsticks (or cucumbers)',
    bio:   'Almost never seen without a bottle of vodka, which he treats as both a beverage and a general-purpose tool. His drumming style is aggressive and unpredictable, and he has been known to substitute drumsticks with whatever happens to be nearby, including frozen food items. Dmitri claims to handle logistics for the band, though his version of logistics mostly involves loudly giving directions that may or may not be correct.',
    facts: ['Replaced drumsticks with cucumbers mid-performance','Claims cucumbers improve freshness of sound','Handles band logistics — incorrectly','Taps rhythm on other people without asking']
  },
  {
    stage: 'El Mulchador',
    real:  'Carlos Esteban Rodriguez',
    role:  'Bass',
    img:   IMG_CARLOS,
    color: '#22c55e',
    weapon:'Bass guitar & garden clippers',
    bio:   'Maintains a permanently relaxed and cheerful attitude regardless of the situation. He treats every environment as if it were a garden, often commenting on soil quality in places where there is no soil. His bass guitar is consistently dirty because he believes that real tone comes from real earth. Outside of music, Carlos sees himself as the band\'s caretaker of plants, though any plants under his supervision tend not to survive very long.',
    facts: ['Travels with a full set of gardening tools','All plants under his care have died','Once attempted to plant Dmitri','Bass guitar covered in actual dirt']
  },
  {
    stage: 'Desert Sabre',
    real:  'Ahmed Hassan Al-Karim',
    role:  'Rhythm Guitar',
    img:   IMG_AHMED,
    color: '#a78bfa',
    weapon:'Cavalry saber & sheer intimidation',
    bio:   'Carries a cavalry saber at nearly all times and incorporates it into performances in ways that are both dramatic and completely unnecessary. His playing is steady and powerful, often providing the structure that keeps the band from collapsing entirely into chaos. Off stage, Ahmed has taken it upon himself to act as the band\'s security, despite never being officially assigned the role.',
    facts: ['Uses saber to cut food, point at things, and conduct the band','Self-appointed band security — unofficial','Attempting to conduct the band has never worked','Takes responsibilities seriously even when no one understands them']
  }
];

const CHAOS = [
  { id:'cFires',      num:47,   color:'#f87171', bar:'#b91c1c', label:'THINGS THAT CAUGHT FIRE',          note:'Amps, setlists, one pair of culottes (Ahmed\'s, 2023)' },
  { id:'cCucumbers',  num:312,  color:'#f59e0b', bar:'#f59e0b', label:'CUCUMBERS USED AS DRUMSTICKS',     note:'Dmitri insists this improves "freshness of the sound"' },
  { id:'cPlants',     num:89,   color:'#4ade80', bar:'#22c55e', label:'PLANTS KILLED BY CARLOS',          note:'He is very confident it was not his fault' },
  { id:'cKnightings', num:9,    color:'#c4b5fd', bar:'#a78bfa', label:'UNOFFICIAL KNIGHTINGS',            note:'Ahmed. Cavalry saber. None were consensual.' },
  { id:'cSpeakers',   num:203,  color:'#fca5a5', bar:'#f87171', label:'SPEAKERS DESTROYED BY ASHLEY',    note:'She considers this a success metric' },
  { id:'cVodka',      num:1847, color:'#7dd3fc', bar:'#38bdf8', label:'LITRES OF VODKA CONSUMED ON STAGE',note:'Dmitri disputes this number (he says it is higher)' }
];

const SHOWS = [
  { date:'MAR 14', venue:'TAVASTIA CLUB',      city:'HELSINKI, FINLAND · 2025',       support:'The Screaming Potatoes',                            soldOut:false },
  { date:'MAR 21', venue:'ROCK CAFÉ',           city:'TALLINN, ESTONIA · 2025',        support:'Vodka & The Consequences',                          soldOut:false },
  { date:'APR 3',  venue:'ORION',               city:'BERLIN, GERMANY · 2025',         support:'El Mulchador Fan Club (Carlos\'s cousins)',           soldOut:false },
  { date:'APR 18', venue:'PARADISO',            city:'AMSTERDAM, NETHERLANDS · 2025',  support:'The Cucumber Incidents',                            soldOut:false },
  { date:'MAY 2',  venue:'BRIXTON ACADEMY',     city:'LONDON, UK · 2025',              support:'None. They are afraid.',                            soldOut:true  },
  { date:'MAY 17', venue:"L'OLYMPIA",           city:'PARIS, FRANCE · 2025',           support:'Desert Sabre & The Unnecessary Swords',             soldOut:false },
  { date:'JUN 5',  venue:'SALA APOLO',          city:'MADRID, SPAIN · 2025',           support:"Rice Reaper's Inspection Team",                    soldOut:false },
  { date:'JUL 20', venue:'BUDOKAN',             city:'TOKYO, JAPAN · 2025',            support:'The Rice Quality Inspectors',                       soldOut:false },
  { date:'AUG 9',  venue:'SYDNEY OPERA HOUSE',  city:'SYDNEY, AUSTRALIA · 2025',       support:'TBA (still deciding if they are brave enough)',      soldOut:false }
];

document.getElementById('heroBg').style.backgroundImage = `url(${IMG_BAND})`;

function renderMembers() {
  const grid = document.getElementById('membersGrid');
  MEMBERS.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'mcard';
    card.innerHTML = `
      <img src="${m.img}" alt="${m.stage}" class="mcard-img" loading="lazy"/>
      <div class="mcard-grad"></div>
      <div class="mcard-info">
        <div class="mcard-pill" style="color:${m.color};border-color:${m.color}55;">${m.role}</div>
        <div class="mcard-stage">${m.stage}</div>
        <div class="mcard-real">${m.real}</div>
        <div class="mcard-tap">[ click to summon ]</div>
      </div>`;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

function renderChaos() {
  const grid = document.getElementById('chaosGrid');
  CHAOS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'chaos-card';
    card.innerHTML = `
      <div class="chaos-num" id="${c.id}" style="color:${c.color};">0</div>
      <div class="chaos-label">${c.label}</div>
      <div class="chaos-note">${c.note}</div>
      <div class="chaos-bar" style="background:${c.bar};"></div>`;
    grid.appendChild(card);
  });
}

function renderShows() {
  const grid = document.getElementById('showsGrid');
  SHOWS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'show-card';
    const btn = s.soldOut
      ? `<div class="sold-out">💀 SOLD OUT</div>`
      : `<button class="ticket-btn" onclick="buyTicket('${s.city.split(',')[0]}')">⚡ BUY TICKETS</button>`;
    card.innerHTML = `
      <div class="show-date">${s.date}</div>
      <div class="show-venue">${s.venue}</div>
      <div class="show-city">${s.city}</div>
      <div class="show-support">${s.support}</div>
      ${btn}`;
    grid.appendChild(card);
  });
}

function openModal(i) {
  const m = MEMBERS[i];
  document.getElementById('mImg').src        = m.img;
  document.getElementById('mRole').textContent      = m.role;
  document.getElementById('mRole').style.color      = m.color;
  document.getElementById('mStage').textContent     = m.stage;
  document.getElementById('mStage').style.textShadow= `2px 2px 0 ${m.color}70`;
  document.getElementById('mReal').textContent      = m.real;
  document.getElementById('mWeapon').textContent    = m.weapon;
  document.getElementById('mBio').textContent       = m.bio;
  document.getElementById('mBar').style.background  = m.color;
  document.getElementById('mFacts').innerHTML       = m.facts
    .map(f => `<span class="fpill" style="color:${m.color};border-color:${m.color}44;">${f}</span>`)
    .join('');
  document.getElementById('memberModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('memberModal').classList.remove('open');
  document.body.style.overflow = '';
}

let currentCity = '';
function buyTicket(city) {
  currentCity = city;
  document.getElementById('tktCity').textContent = city.toUpperCase();
  document.getElementById('ticketModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTicket() {
  document.getElementById('ticketModal').classList.remove('open');
  document.body.style.overflow = '';
}
function confirmTicket(type) {
  closeTicket();
  const msgs = {
    'General Admission': `Your General Admission ticket for ${currentCity} is confirmed. Bring ear protection, closed-toe shoes, and the will to survive Ashley's opening scream.`,
    'VIP Front Row':     `VIP Front Row confirmed for ${currentCity}. You will receive a complimentary cucumber. Stand slightly to the left of Ahmed.`,
    'Apocalypse Package':`APOCALYPSE PACKAGE confirmed for ${currentCity}! Your meet & greet includes a rice quality inspection with Hiroshi, a garden tour with Carlos (bring a shovel), and a commemorative knighting from Ahmed. Duration: ~47 minutes or until something catches fire.`
  };
  document.getElementById('confirmMsg').textContent = msgs[type] || 'Ticket confirmed. Good luck.';
  document.getElementById('confirmModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeConfirm() {
  document.getElementById('confirmModal').classList.remove('open');
  document.body.style.overflow = '';
}

function animateCounters() {
  CHAOS.forEach(c => {
    const el = document.getElementById(c.id);
    if (!el) return;
    let current = 0;
    const step = Math.ceil(c.num / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, c.num);
      el.textContent = current.toLocaleString();
      if (current >= c.num) clearInterval(timer);
    }, 28);
  });
}
const chaosObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { animateCounters(); chaosObs.disconnect(); }
}, { threshold: 0.15 });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeTicket(); closeConfirm(); }
});

function lightning() {
  document.body.style.background = '#111';
  setTimeout(() => { document.body.style.background = '#000'; }, 55);
  setTimeout(lightning, 5000 + Math.random() * 15000);
}
setTimeout(lightning, 2500);

document.addEventListener('DOMContentLoaded', () => {
  renderMembers();
  renderChaos();
  renderShows();
  const chaosSection = document.getElementById('chaos');
  if (chaosSection) chaosObs.observe(chaosSection);
});