/* airZoon panel mockup: Mailchimp connection.
   Everything here is sample data. Nothing is sent anywhere. */

// ---------- Icons (Lucide paths) ----------
const ICONS = {
  home: '<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
  chart: '<path d="M3 3v18h18"/><path d="M8 17v-5"/><path d="M13 17V8"/><path d="M18 17v-3"/>',
  megaphone: '<path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  alert: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  sync: '<path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  dots: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  minus: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  panel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  edit: '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.4 2.6a2 2 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>'
};
function icon(name, size = 16, color = 'currentColor') {
  return `<svg class="icon" width="${size}" height="${size}" style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
}
const hid = (w) => `<span class="hidden-data" style="width:${w}px" title="Hidden data"></span>`;

// ---------- State ----------
let timer = null;
const params = new URLSearchParams(location.search);
const S = {
  option: params.get('option') === 'b' ? 'b' : 'a',
  view: params.get('view') || 'dashboard',
  mc: 'not',            // not | setup | connected | attention | nocontacts
  busy: null,           // { kind: 'send' | 'import', done, total }
  result: null,         // 'sent' | 'imported'
  overlay: null,        // 'oauth' | 'setup' | 'settings' | 'import' | 'disconnect'
  oauthReason: 'connect', // connect | reconnect
  sendChoice: 'all',
  auto: true,
  filter: 'all',
  everSent: false,      // airZoon contacts have been sent at least once
  imported: false,      // Mailchimp contacts exist in Contacts
  lastSent: null,
  lastImport: null,
  toast: null,
  flashBlock: false,
  locTags: true,
  importOk: false,
  mcTotal: 117         // contacts imported from Mailchimp so far
};
const PRESETS = {
  not:        { mc: 'not', everSent: false, imported: false, lastSent: null, lastImport: null },
  connected:  { mc: 'connected', everSent: true, imported: true, lastSent: '2 hours ago. 25 sent, 23 skipped.', lastImport: 'Nov 19, 2026. 1 contact added to Contacts.' },
  attention:  { mc: 'attention', everSent: true, imported: true, lastSent: '3 days ago', lastImport: 'Nov 19, 2026. 1 contact added to Contacts.' },
  setup:      { mc: 'setup', everSent: false, imported: false, lastSent: null, lastImport: null },
  nocontacts: { mc: 'nocontacts', everSent: false, imported: false, lastSent: null, lastImport: null },
  noimport:   { mc: 'connected', everSent: true, imported: false, lastSent: '2 hours ago. 25 sent, 23 skipped.', lastImport: null },
  noaudience: { mc: 'setup', noAudience: true, everSent: false, imported: false, lastSent: null, lastImport: null },
  audiencegone: { mc: 'attention', attn: 'audience', everSent: true, imported: true, lastSent: '3 days ago', lastImport: 'Nov 19, 2026. 1 contact added to Contacts.' },
  sendstopped: { mc: 'connected', result: 'stopped-send', everSent: true, imported: true, lastSent: 'Today. Stopped at 12 of 25.', lastImport: 'Nov 19, 2026. 1 contact added to Contacts.' },
  importstopped: { mc: 'connected', result: 'stopped-import', mcTotal: 60, everSent: true, imported: true, lastSent: '2 hours ago. 25 sent, 23 skipped.', lastImport: 'Today. Stopped at 60 of 120.' }
};
function applyPreset(key) {
  Object.assign(S, { result: null, noAudience: false, attn: 'access', mcTotal: 117 }, PRESETS[key] || PRESETS.not, { busy: null, overlay: null, filter: 'all', preset: key });
  stopTimer();
}
applyPreset(params.get('state') || 'not');

// ---------- Sample contacts ----------
const CONTACTS = [
  { src: 'airzoon', email: 210, phone: 100, last: 90, loc: 'casademo', mc: 'in', date: 'November 19th 2026, 8:32 PM' },
  { src: 'mailchimp', email: 200, phone: 0, last: 80, loc: 'casademo', mc: 'in', onPage: true, date: 'November 19th 2026, 6:10 PM' },
  { src: 'airzoon', email: 0, phone: 110, last: 90, loc: 'casademo_restaurant', mc: 'noemail', date: 'November 19th 2026, 2:05 PM' },
  { src: 'airzoon', email: 190, phone: 0, last: 70, loc: 'casademo', mc: 'noconsent', date: 'November 18th 2026, 8:15 PM' },
  { src: 'mailchimp', email: 190, phone: 100, last: 100, loc: null, mc: 'in', date: 'November 18th 2026, 9:41 AM' },
  { src: 'mailchimp', email: 180, phone: 0, last: 70, loc: null, mc: 'unsub', date: 'November 18th 2026, 9:41 AM' },
  { src: 'airzoon', email: 200, phone: 100, last: 80, loc: 'casademo', mc: 'unsub', date: 'November 17th 2026, 7:15 PM' },
  { src: 'airzoon', email: 170, phone: 90, last: 100, loc: 'casademo_restaurant', mc: 'in', date: 'November 16th 2026, 1:20 PM' }
];

// ---------- Helpers ----------
function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
let toastTimer = null;
function toast(msg) {
  S.toast = msg; render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { S.toast = null; render(); }, 4000);
}
function go(view, opts = {}) {
  S.view = view;
  if (opts.flash) S.flashBlock = true;
  render();
  if (view === 'myinfo' && opts.flash) {
    const el = document.getElementById('mailchimp');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    window.scrollTo({ top: 0 });
  }
}
const isConnected = () => S.mc === 'connected' || S.mc === 'nocontacts';

function startJob(kind, resume) {
  stopTimer();
  S.result = null;
  const total = resume ? resume.total : (kind === 'send' ? 25 : (S.imported ? 124 : 120));
  S.sendMode = kind === 'send' ? (resume ? 'retry' : (S.everSent ? 'again' : 'first')) : S.sendMode;
  S.busy = { kind, done: resume ? resume.done : 0, total, again: kind === 'import' && S.imported && !resume };
  render();
  timer = setInterval(() => {
    S.busy.done = Math.min(S.busy.total, S.busy.done + Math.ceil(S.busy.total / 12));
    if (S.busy.done >= S.busy.total) {
      stopTimer();
      if (kind === 'send') {
        S.everSent = true;
        S.lastSent = S.sendMode === 'again' ? 'Just now. 3 new contacts sent.' : S.sendMode === 'retry' ? 'Just now. Sending complete.' : 'Just now. 25 sent, 23 skipped.';
        S.result = 'sent';
      } else {
        const again = S.busy.again;
        S.imported = true;
        const noAz = S.mc === 'nocontacts';
        S.importAdded = S.retryImport ? 57 : again ? 4 : (noAz ? 120 : 117);
        S.importSkipped = S.retryImport ? 3 : again ? 120 : (noAz ? 0 : 3);
        if (S.retryImport) { S.mcTotal = 117; S.retryImport = false; } else { S.mcTotal = again ? S.mcTotal + 4 : S.importAdded; }
        S.lastImport = `Just now. ${S.importAdded} contacts added to Contacts.`;
        S.result = 'imported';
        if (S.view !== 'myinfo') { S.busy = null; toast(`${S.importAdded} contacts imported from Mailchimp.`); return; }
      }
      S.busy = null;
    }
    render();
  }, 300);
}

// ---------- Sidebar ----------
function sidebar() {
  const item = (view, ic, label, count) => {
    const on = S.view === view ? ' on' : '';
    const action = ['dashboard', 'contacts', 'myinfo'].includes(view) ? `data-go="${view}"` : 'data-action="not-in-mockup"';
    return `<button class="nav-item${on}" ${action}>${icon(ic)}<span>${label}</span>${count ? `<span class="count">${count}</span>` : ''}</button>`;
  };
  return `
  <aside class="sidebar">
    <div class="sb-head"><div class="client-logo"></div><div><strong>casademo</strong><span>Change logo</span></div></div>
    <div class="sb-group"><h4>RESULTS</h4>${item('dashboard', 'home', 'Dashboard')}${item('contacts', 'users', 'Contacts')}${item('presence', 'chart', 'Presence')}</div>
    <div class="sb-group"><h4>CAMPAIGNS</h4>${item('campaigns', 'megaphone', 'Message campaigns')}</div>
    <div class="sb-group"><h4>YOUR PAGE</h4>${item('splash', 'layout', 'Splash pages', 2)}${item('questions', 'help', 'Feedback questions')}${item('vouchers', 'ticket', 'Vouchers')}${item('locations', 'pin', 'Locations', 2)}</div>
    <div class="sb-group"><h4>ACCOUNT</h4>${item('myinfo', 'user', 'My information')}</div>
    <div class="sb-foot">
      <button class="nav-item" data-action="not-in-mockup" style="padding:0">${icon('chat')}<span>Contact airZoon</span></button>
      <span class="muted" style="font-size:12px">Powered by airZoon</span>
      <div class="user"><div class="avatar">AR</div><div><strong>Alex Rivera</strong><span>Customer</span></div></div>
    </div>
  </aside>`;
}
const langBtn = () => `<span class="lang">${icon('globe')} ENGLISH</span>`;

// ---------- Mailchimp on the Dashboard ----------
function dashMailchimp() {
  const m = S.mc;
  const mcBadge = (size) => `<span class="badge mc-brand">${icon('mail', size, '#5C4A00')}</span>`;
  const stopped = S.result === 'stopped-send' ? { title: 'Mailchimp: sending stopped', sub: '12 of 25 contacts sent.' }
    : S.result === 'stopped-import' ? { title: 'Mailchimp: import stopped', sub: '60 of 120 contacts imported.' } : null;
  if (S.option === 'a') {
    if (m === 'not') return `<div class="mc-row">${mcBadge(16)}<div class="txt"><strong>Mailchimp</strong><span>Send your contacts to Mailchimp.</span></div><button class="link" data-action="dash-connect">Connect Mailchimp</button></div>`;
    if (m === 'setup') return `<div class="mc-row warn">${mcBadge(16)}<div class="txt"><strong><i class="dot amber"></i>Mailchimp setup not finished</strong><span>Nothing is sent yet.</span></div><button class="link" data-action="finish-setup">Finish setup</button></div>`;
    if (stopped) return `<div class="mc-row warn">${mcBadge(16)}<div class="txt"><strong><i class="dot amber"></i>${stopped.title}</strong><span>${stopped.sub}</span></div><button class="link" data-action="dash-retry">Try again</button></div>`;
    if (m === 'attention') return `<div class="mc-row warn">${mcBadge(16)}<div class="txt"><strong><i class="dot amber"></i>Mailchimp needs your attention</strong><span>Contacts are not being sent.</span></div><button class="link" data-action="dash-fix">Fix it</button></div>`;
    const sub = S.lastSent ? 'Last sent ' + (S.lastSent.startsWith('Just now') ? 'just now.' : '2 h ago.') : 'Nothing sent yet.';
    return `<div class="mc-row">${mcBadge(16)}<div class="txt"><strong><i class="dot green"></i>Mailchimp connected</strong><span>${sub}</span></div><button class="link" style="color:var(--ink)" data-action="open-mailchimp">Open Mailchimp ${icon('ext', 14)}</button></div>`;
  }
  // Option B
  const badge = (bg, ic, col) => `<span class="badge" style="background:${bg}">${icon(ic, 18, col)}</span>`;
  if (m === 'not') return `<div class="mc-bar">${mcBadge(18)}<div class="txt"><strong>Send your contacts to Mailchimp</strong><span>Use the contacts airZoon collects in your Mailchimp emails.</span></div><button class="btn outline-red" data-action="dash-connect">Connect Mailchimp</button></div>`;
  if (m === 'setup') return `<div class="mc-bar warn">${mcBadge(18)}<div class="txt"><strong><i class="dot amber"></i>Mailchimp setup not finished</strong><span>${S.noAudience ? 'Nothing is sent yet. Create an audience in Mailchimp first.' : 'Nothing is sent yet. Choose how to send your contacts.'}</span></div><button class="btn outline-red" data-action="finish-setup">Finish setup</button></div>`;
  if (stopped) return `<div class="mc-bar warn">${mcBadge(18)}<div class="txt"><strong><i class="dot amber"></i>${stopped.title}</strong><span>${stopped.sub}</span></div><button class="btn outline-red" data-action="dash-retry">Try again</button></div>`;
  if (m === 'attention') return `<div class="mc-bar warn">${mcBadge(18)}<div class="txt"><strong><i class="dot amber"></i>Mailchimp needs your attention</strong><span>Contacts are not being sent. ${S.attn === 'audience' ? 'Choose another audience to continue.' : 'Reconnect to continue.'}</span></div><button class="btn outline-red" data-action="dash-fix">Fix it</button></div>`;
  const sub = S.lastSent ? 'Audience: Casa Demo guests. Last sent ' + (S.lastSent.startsWith('Just now') ? 'just now.' : '2 h ago.') : 'Audience: Casa Demo guests. Nothing sent yet.';
  return `<div class="mc-bar">${mcBadge(18)}<div class="txt"><strong><i class="dot green"></i>Mailchimp connected</strong><span>${sub}</span></div><button class="btn" data-action="open-mailchimp">Open Mailchimp ${icon('ext', 14)}</button></div>`;
}

// ---------- Dashboard ----------
function chartSvg(stroke = '#C93A1F', fill = '#FCECE9', h = 160, alt = false) {
  const base = [12,18,15,30,22,44,26,20,14,10,16,12,20,28,18,24,30,14,22,26,18,12,16,34,22,18,14,20,26,16];
  const pts = alt ? base.map((p, i) => (i % 5 === 0 ? p * 1.4 : p * 0.4) + 2) : base;
  const w = 680, step = w / (pts.length - 1), max = Math.max(...pts);
  const line = pts.map((p, i) => `${(i * step).toFixed(1)},${(h - (p / max) * (h - 10)).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">${fill !== 'none' ? `<polygon points="0,${h} ${line} ${w},${h}" fill="${fill}"/>` : ''}<polyline points="${line}" fill="none" stroke="${stroke}" stroke-width="2"/></svg>`;
}
function dashboard() {
  const empty = S.mc === 'nocontacts';
  const tile = (ic, lbl, num, desc, link, info) => `<div class="tile"><span class="lbl">${icon(ic, 14)} ${lbl}${info ? ' ' + icon('info', 14) : ''}</span><span class="num">${num}</span><span class="desc">${desc}</span>${link ? `<button class="link" style="align-self:flex-start" data-go="contacts">${link}</button>` : ''}</div>`;
  const rc = empty
    ? `<div class="empty"><strong>No contacts yet</strong><span class="muted">They appear here when guests sign in on your page.</span></div>`
    : [[120, '16 hours ago'], [150, '18 hours ago'], [100, '18 hours ago'], [140, '24 hours ago'], [110, 'yesterday']].map(([w, t]) => `<div class="rc-row"><div class="left">${hid(w)}${hid(w - 40)}</div><div class="right">casademo<br>${t}</div></div>`).join('');
  const busiest = empty ? '<span class="num">No data yet</span>' : '<span class="num">Sat <small style="font-size:13px;font-weight:600;white-space:nowrap">7:00 PM–8:00 PM</small></span>';
  return `
  <div class="content" style="padding-top:28px">
    <div style="display:flex;align-items:center;gap:12px"><h1 class="page" style="flex:1;margin:0">casademo</h1>${langBtn()}<span class="avatar">AR</span></div>
    <span class="muted">Your results for Nov 14 – Nov 20, 2026 • all locations</span>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><span class="seg"><span>Today</span><span class="on">Last 7 days</span><span>This month</span><span>This year</span><span>Custom</span></span><span class="seg"><span class="on">All locations</span><span>casademo_restaurant</span><span>casademo</span></span></div>
    <div style="display:flex;flex-direction:column;gap:2px;margin-top:-6px"><span style="font-size:13px">Numbers and chart follow the period and location.</span><span class="muted" style="font-size:11px">Time zone: America/Buenos_Aires</span></div>
    <div class="section-h"><h2>Your results</h2><span>What airZoon has brought you.</span></div>
    <div class="card tiles t3">${tile('users', 'Total contacts', empty ? '0' : '48', 'Everyone who shared their details, since the start.', empty ? '' : 'See contacts', true)}${tile('userPlus', 'New contacts', empty ? '0' : '31', 'Joined in this period.', '', true)}${tile('mail', 'Emails collected', empty ? '0' : '31', 'Email addresses collected in this period.', '', true)}</div>
    <div class="section-h"><h2>Activity</h2><span>What happened on your page and your Wi-Fi.</span></div>
    <div class="card tiles t5">${tile('eye', 'Page views', empty ? '0' : '1,961', 'Times your page was shown to guests.')}${tile('login', 'Sign-ins', empty ? '0' : '1,104', 'Times guests signed in on your page.')}<div class="tile"><span class="lbl">${icon('clock', 14)} Busiest time</span>${busiest}<span class="desc">The hour with the most guests connected.</span></div>${tile('trend', 'Most at once', empty ? '0' : '48', 'Guests connected at the same time.')}${tile('megaphone', 'Ad spaces shown', empty ? '0' : '2,902', 'Times the ad spaces on your page were shown.')}</div>
    ${S.option === 'b'
      ? `<div class="pair-row"><div class="mc-bar"><span class="badge" style="background:var(--grey)">${icon('download', 18)}</span><div class="txt"><strong>Your stats</strong><span>The numbers for this period and location. No personal data.</span></div><button class="btn" data-action="not-in-mockup">Download stats (CSV)</button></div>${dashMailchimp()}</div>`
      : `<div class="download-row"><button class="btn" data-action="not-in-mockup">${icon('download', 16)} Download stats (CSV)</button><span class="muted">The numbers for this period and location. No personal data.</span></div>`}
    <div class="grid-mid">
      <div class="card"><div class="card-head" style="flex-direction:column;align-items:flex-start;gap:2px"><h3>Visitors and internet use</h3><span class="muted" style="font-size:13px">By day • ${empty ? '0 B' : '38.1 GB'} used in this period</span></div>
        <div class="chart">${empty ? '<div class="empty"><span class="muted">No visitors yet.</span></div>' : `<div class="legend"><i class="dot" style="background:#C93A1F"></i> Visitors</div>${chartSvg('#C93A1F', '#FCECE9', 160)}<div class="legend" style="margin-top:12px"><i class="dot" style="background:#1F6E73"></i> Internet use</div>${chartSvg('#1F6E73', 'none', 110, true)}`}</div>
        <div class="chart-foot">Times are shown in Argentina Standard Time (UTC−3). Internet use shows your network was working.</div></div>
      <div class="card"><div class="card-head"><h3>Your locations</h3><button class="link" data-action="not-in-mockup">Open locations</button></div>
        <div class="map"><span class="map-tabs"><span class="on">Map</span><span>Satellite</span></span></div>
        <div class="loc-row"><div><strong>casademo_restaurant</strong><span>5/5 access points online</span></div><span class="pill green">Collecting contacts</span></div>
        <div class="loc-row"><div><strong>casademo</strong><span>39/39 access points online</span></div><span class="pill green">Collecting contacts</span></div></div>
    </div>
    <div class="grid-bottom">
      <div class="card"><div class="card-head"><h3>Your splash page</h3><button class="link" data-action="not-in-mockup">All splash pages</button></div>
        <div style="padding:16px 20px 0"><span class="seg"><span class="on">casademo</span><span>casademo_restaurant</span></span></div>
        <div class="splash"><div class="phone">Not published yet. Guests see this page once it is published.</div><div class="splash-info"><strong>casademo</strong><span class="pill draft">• Draft</span><button class="btn" data-action="not-in-mockup">${icon('edit', 15)} Edit splash page</button><button class="link" style="color:var(--ink)" data-action="not-in-mockup">${icon('ext', 15)} Open preview</button></div></div></div>
      <div class="card"><div class="card-head"><h3>Recent contacts</h3>${empty ? '' : '<button class="link" data-go="contacts">All 48 contacts</button>'}</div>
        <div class="rc-rows">${rc}</div>${S.option === 'a' ? dashMailchimp() : ''}</div>
      <div class="card"><div class="card-head"><h3>Campaigns</h3></div><div class="camp"><span class="muted">Your balance</span><span><span class="big">0</span> messages</span><span class="muted" style="font-size:12px">Each message to one person uses 1.</span><span class="grow"></span><button class="btn primary block" data-action="not-in-mockup">${icon('megaphone', 15)} New campaign</button><button class="btn text block" style="color:var(--ink)" data-action="not-in-mockup">Buy credits</button></div></div>
    </div>
  </div>`;
}

// ---------- Contacts ----------
function mcCell(c) {
  if (c.mc === 'in') return `<span class="mcs">${icon('check', 15, '#1E8E4E')}<b style="font-weight:500">In Mailchimp</b></span>`;
  if (c.mc === 'noemail') return `<span class="mcs">${icon('minus', 15, '#999')}<span class="two"><span class="muted">Not sent</span><small>No email</small></span></span>`;
  if (c.mc === 'noconsent') return `<span class="mcs">${icon('minus', 15, '#999')}<span class="two"><span class="muted">Not sent</span><small>No consent</small></span></span>`;
  return `<span class="mcs">${icon('ban', 15, '#B7791F')}<span class="two"><span style="font-weight:500">Unsubscribed</span><small>In Mailchimp</small></span></span>`;
}
// Numbers above the list: only when Mailchimp is connected. They follow only the location filter.
function contactNumbers(noAz) {
  if (!(isConnected() || S.mc === 'attention')) return '';
  const busyImp = S.busy && S.busy.kind === 'import';
  const t = (ic, lbl, tip, num, desc, link) => `<div class="tile"><span class="lbl">${icon(ic, 14)} ${lbl} <span class="tip-icon" data-tip="${tip}" tabindex="0" aria-label="${tip}">${icon('info', 14)}</span></span><span class="num">${num}</span><span class="desc">${desc}</span>${link || ''}</div>`;
  const imp = S.imported ? S.mcTotal : 0;
  const impDesc = busyImp ? `Importing… ${S.busy.done} of ${S.busy.total}` : 'People brought in from your Mailchimp audience.';
  const impLink = !S.imported && !busyImp && S.mc !== 'attention' ? `<button class="link" style="align-self:flex-start" data-action="import">Import contacts</button>` : '';
  return `<div class="card tiles t3 ct-numbers">
    ${t('users', 'Collected by airZoon', 'All contacts, since the start. Changes with the location filter.', noAz ? '0' : '48', 'People who shared their details on your page.')}
    ${t('mail', 'In your Mailchimp', 'airZoon contacts in your Mailchimp, since the start. Changes with the location filter.', (noAz || !S.everSent) ? '0' : (S.result === 'stopped-send' ? '12' : '26'), 'airZoon contacts already in your Mailchimp.')}
    ${t('mail', 'Imported from Mailchimp', 'All imported contacts, since the start. Changes with the location filter.', String(imp), impDesc, impLink)}
  </div>`;
}
function contacts() {
  const noAz = S.mc === 'nocontacts';
  const empty = noAz && !S.imported;
  const showSource = S.imported;
  const showMc = S.everSent && (isConnected() || S.mc === 'attention');
  let rows = CONTACTS.filter(c => (c.src === 'airzoon' && !noAz) || (c.src === 'mailchimp' && S.imported));
  if (S.filter !== 'all') rows = rows.filter(c => c.src === S.filter);
  let summary = '<b>airZoon has collected 48 contacts.</b>' + (showMc ? ' <span class="muted">26 are also in your Mailchimp.</span>' : '');
  if (noAz) summary = `<b>${S.mcTotal} contacts imported from Mailchimp.</b> <span class="muted">airZoon has not collected any on your page yet.</span>`;
  if (S.filter === 'mailchimp') summary = `<b>${S.mcTotal} contacts imported from Mailchimp.</b> <span class="muted">` + (noAz ? 'airZoon has not collected any on your page yet.' : 'airZoon has collected 48 on your page.') + '</span>';
  if (S.filter === 'airzoon') summary = noAz ? '<b>airZoon has not collected any contacts on your page yet.</b>' : '<b>airZoon has collected 48 contacts on your page.</b>' + (showMc ? ' <span class="muted">26 are also in your Mailchimp.</span>' : '');
  const th = `<tr><th><span class="cbox"></span></th><th>Email</th><th>Phone</th><th>Last name</th><th>Location</th>${showSource ? `<th><span class="th-info" title="Where we first got this contact">Source ${icon('info', 13)}</span></th>` : ''}${showMc ? '<th>Mailchimp</th>' : ''}<th>Added on</th></tr>`;
  const tr = rows.map(c => `<tr><td><span class="cbox"></span></td>
    <td>${c.email ? hid(c.email) : '<span class="faint">Not given</span>'}</td>
    <td>${c.phone ? hid(c.phone) : '<span class="faint">Not given</span>'}</td>
    <td>${hid(c.last)}</td>
    <td>${c.loc ? c.loc : '<span class="faint">No location</span>'}</td>
    ${showSource ? `<td>${c.src === 'airzoon' ? `<span class="tag airzoon">${icon('layout', 13)} airZoon</span>` : `<span class="tag mailchimp">${icon('mail', 13)} Mailchimp</span>${c.onPage ? `<span class="az-mark" data-tip="Also signed in on your page (Nov 20)" tabindex="0" aria-label="Also signed in on your page (Nov 20)">${icon('layout', 12)}</span>` : ''}`}</td>` : ''}
    ${showMc ? `<td>${mcCell(c)}</td>` : ''}
    <td>${c.date}</td></tr>`).join('');
  const foot = (S.filter === 'mailchimp' || noAz) ? `<div class="table-foot">Showing ${rows.length} of ${S.mcTotal}</div>` : '';
  const body = empty
    ? `<div class="empty"><strong>No contacts yet</strong><span class="muted">They appear here when guests sign in on your page.</span></div>`
    : `<div class="table-scroll"><div class="ts-inner"><table class="list">${th}${tr}</table></div><button class="ts-btn left" data-action="scroll-table" data-dir="-1" aria-label="Scroll left">${icon('arrowLeft', 16)}</button><button class="ts-btn right" data-action="scroll-table" data-dir="1" aria-label="Scroll right to see more columns">${icon('arrowRight', 16)}</button></div>${foot}`;
  const sourceFilter = showSource ? `<label class="select${S.filter !== 'all' ? ' active' : ''}"><select data-action="filter" aria-label="Source">
      <option value="all"${S.filter === 'all' ? ' selected' : ''}>All sources</option>
      <option value="airzoon"${S.filter === 'airzoon' ? ' selected' : ''}>airZoon</option>
      <option value="mailchimp"${S.filter === 'mailchimp' ? ' selected' : ''}>Mailchimp</option></select>${icon('chev', 14)}</label>` : '';
  return `
  <div class="topbar"><div class="crumbs">Contacts</div>${langBtn()}</div>
  <div class="content">
    <h1 class="page list-title">Contacts</h1>
    <span class="muted list-sub">Only the details your page asks for are shown.</span>
    ${contactNumbers(noAz)}
    <div class="toolbar"><div class="search">${icon('search', 18)} Search by First name, Last name, Email Or Phone</div><span class="ctl">Columns ${icon('chev', 14)}</span><span class="ctl">Filters ${icon('chev', 14)}</span><span class="ctl">${icon('dots', 18)}</span></div>
    <div class="filters"><span class="muted">Added:</span><span class="chip">Today</span><span class="chip">Yesterday</span><span class="chip">This month</span><span class="chip">Last month</span>
      <label class="select"><select aria-label="Location"><option>All locations</option><option>casademo</option><option>casademo_restaurant</option></select>${icon('chev', 14)}</label>${sourceFilter}</div>
    <div class="card">${body}</div>
  </div>`;
}

// ---------- Mailchimp block (My information) ----------
function kvRows(list) { return `<div class="kv">${list.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`; }
function mcBlock() {
  const m = S.mc;
  const head = (badgeBg, ic, col, pill) => `<div class="mc-head"><span class="badge mc-brand">${icon('mail', 16, '#5C4A00')}</span><strong>Mailchimp</strong>${pill}</div>`;
  const flash = S.flashBlock ? ' flash' : '';
  if (m === 'not') {
    return `<div class="mc-block${flash}" id="mailchimp">${head('var(--red-bg)', 'mail', '#C93A1F', '<span class="pill grey">Not connected</span>')}
      <span class="muted" style="font-size:12px">Send your airZoon contacts to Mailchimp and use them in your emails.</span>
      <ul class="checks"><li>${icon('check', 15, '#1E8E4E')} You sign in to Mailchimp and allow airZoon.</li><li>${icon('check', 15, '#1E8E4E')} Only contacts with an email are sent.</li><li>${icon('check', 15, '#1E8E4E')} You can disconnect at any time.</li></ul>
      <button class="btn primary block" data-action="connect">Connect Mailchimp</button>
      <span style="font-size:12px;text-align:center"><span class="muted">No Mailchimp account?</span> <a href="https://mailchimp.com" target="_blank" rel="noopener" style="font-weight:600;text-decoration:none">Create one ${icon('ext', 13)}</a></span></div>`;
  }
  if (m === 'setup') {
    return `<div class="mc-block${flash}" id="mailchimp">${head('var(--green-bg)', 'mail', '#1E8E4E', '<span class="pill amber">Setup not finished</span>')}
      <div class="notice warn"><b>Setup not finished</b><span class="muted">${S.noAudience ? 'Your Mailchimp has no audience yet. Create one in Mailchimp to finish setup.' : 'Nothing is sent to Mailchimp yet. Choose how to send your contacts.'}</span></div>
      ${kvRows([['Account', 'Casa Demo'], ['Audience', S.noAudience ? 'None yet' : 'Casa Demo guests']])}
      <button class="btn primary block" data-action="finish-setup">Finish setup</button>
      <button class="btn text block" data-action="disconnect">Disconnect</button></div>`;
  }
  if (m === 'attention') {
    return `<div class="mc-block warn${flash}" id="mailchimp">${head('var(--amber-bg)', 'alert', '#B7791F', '<span class="pill amber">Needs attention</span>')}
      ${S.attn === 'audience'
        ? `<div class="notice warn"><b>Contacts are not being sent.</b><span class="muted">The audience “Casa Demo guests” was deleted in Mailchimp. Choose another audience to keep sending. Your airZoon contacts are safe.</span></div>
      ${kvRows([['Audience', 'Deleted in Mailchimp'], ['Last sent', S.lastSent || '3 days ago']])}
      <button class="btn primary block" data-action="choose-audience">Choose audience</button>`
        : `<div class="notice warn"><b>Contacts are not being sent.</b><span class="muted">Access to your Mailchimp account was removed. Reconnect to continue. Your airZoon contacts are safe.</span></div>
      ${kvRows([['Audience', 'Casa Demo guests'], ['Last sent', S.lastSent || '3 days ago']])}
      <button class="btn primary block" data-action="reconnect">Reconnect</button>`}
      <button class="btn text block" data-action="disconnect">Disconnect</button></div>`;
  }
  // connected / nocontacts
  const busy = !!S.busy;
  let notice = '';
  if (S.busy) {
    const pct = Math.round((S.busy.done / S.busy.total) * 100);
    notice = `<div class="notice progress"><b>${S.busy.kind === 'send' ? 'Sending to Mailchimp…' : 'Importing from Mailchimp…'} ${S.busy.done} of ${S.busy.total}</b><div class="bar"><i style="width:${pct}%"></i></div><span class="muted">You can leave this page. It keeps going in the background.</span></div>`;
  } else if (S.result === 'sent') {
    const sentMsg = S.sendMode === 'again' ? '<b>3 new contacts sent to Mailchimp.</b><span class="muted">The others were already in Mailchimp.</span>'
      : S.sendMode === 'retry' ? '<b>13 contacts sent.</b><span class="muted">All your contacts are in Mailchimp now.</span>'
      : '<b>25 contacts sent to Mailchimp.</b><span class="muted">23 skipped: 17 without email, 5 without consent, 1 unsubscribed.</span>';
    notice = `<div class="notice ok"><button class="x" data-action="dismiss" aria-label="Close">${icon('x', 14)}</button>${sentMsg}</div>`;
  } else if (S.result === 'imported') {
    notice = `<div class="notice ok"><button class="x" data-action="dismiss" aria-label="Close">${icon('x', 14)}</button><b>${S.importAdded} contacts added to Contacts.</b>${S.importSkipped ? `<span class="muted">${S.importSkipped} skipped: already in airZoon.</span>` : ''}<button class="link" style="align-self:flex-start;font-size:12px" data-action="see-imported">See them in Contacts</button></div>`;
  } else if (S.result === 'stopped-send') {
    notice = `<div class="notice warn"><b>Sending stopped at 12 of 25.</b><span class="muted">12 contacts are in Mailchimp. Try again to send the rest. Nobody is sent twice.</span><button class="btn small" style="align-self:flex-start" data-action="send-now">Try again</button></div>`;
  } else if (S.result === 'stopped-import') {
    notice = `<div class="notice warn"><b>Import stopped at 60 of 120.</b><span class="muted">60 contacts were added to Contacts. Try again to bring the rest. Nobody is added twice.</span><button class="btn small" style="align-self:flex-start" data-action="retry-import">Try again</button></div>`;
  } else if (m === 'nocontacts') {
    notice = `<div class="notice neutral"><b>No contacts to send yet</b><span class="muted">When guests leave their email on your page, they go to Mailchimp automatically.</span></div>`;
  }
  const rows = [['Account', 'Casa Demo'], ['Audience', 'Casa Demo guests'], ['Sending', S.auto ? 'Automatic. New contacts with email.' : 'Manual. You send them yourself.']];
  if (S.lastSent) rows.push(['Last sent', S.lastSent]);
  if (S.lastImport) rows.push(['Last import', S.lastImport]);
  const dis = busy ? ' disabled' : '';
  return `<div class="mc-block${flash}" id="mailchimp">${head('var(--green-bg)', 'mail', '#1E8E4E', '<span class="pill green">Connected</span>')}
    ${notice}${kvRows(rows)}
    <button class="btn block" data-action="send-now"${busy || m === 'nocontacts' ? ' disabled' : ''}>${icon('upload', 16)} Send contacts to Mailchimp</button>
    <button class="btn block" data-action="import"${dis}>${icon('download', 16)} Import contacts from Mailchimp</button>
    <div class="mc-divider"></div>
    <button class="btn subtle block" data-action="settings"${dis}>${icon('settings', 16)} Connection settings</button>
    <div class="mc-links"><button class="btn-link" data-action="open-mailchimp"${dis}>Open Mailchimp ${icon('ext', 13)}</button><button class="btn-link muted" data-action="disconnect"${dis}>Disconnect</button></div></div>`;
}

// ---------- My information ----------
function myinfo() {
  const f = (label, value, opts = {}) => `<div class="field"><label>${label}${opts.req ? '<span class="req">*</span>' : ''}</label><div class="input${opts.white ? ' white' : ''}">${value}</div>${opts.help ? `<div class="help">${opts.help}</div>` : ''}</div>`;
  const join = (title, inner) => `<div class="field"><div class="join-head"><label>${title}</label><span style="font-weight:600;font-size:13px">Add new</span><span class="ctl" style="padding:4px 8px;font-size:13px">Columns ${icon('chev', 12)}</span></div><div class="card">${inner}</div></div>`;
  const nets = `<table class="list"><tr><th style="padding-left:16px;width:auto">Network name</th><th>Customer</th><th>Access points</th></tr>
    <tr><td style="padding-left:16px;width:auto">casademo_restaurant ${icon('edit', 14)}</td><td><b>casademo</b></td><td class="muted">Not set up on the provider yet</td></tr>
    <tr><td style="padding-left:16px;width:auto">casademo ${icon('edit', 14)}</td><td><b>casademo</b></td><td class="muted">Not set up on the provider yet</td></tr></table>`;
  const none = (t) => `<div class="empty"><strong>No Results.</strong><span class="muted">No ${t} yet, or none match your search and filters.</span></div>`;
  return `
  <div class="topbar"><div class="crumbs">${icon('panel', 16, '#6B6B6B')}<span class="client-logo" style="width:20px;height:20px"></span><span class="muted">/</span><span class="muted">Customers</span><span class="muted">/</span>casademo</div>${langBtn()}</div>
  <div class="meta"><span>Last modified: <b>May 19th 2026, 2:56 PM</b></span><span>Created: <b>May 19th 2026, 2:56 PM</b></span></div>
  <div class="edit">
    <div class="fields">
      ${f('Company Name', 'casademo', { req: true })}
      <div class="field"><label>Logo</label><div class="upload"><div class="file"><span class="client-logo"></span><div><b style="font-size:13px">logo-casademo.webp</b><div class="muted" style="font-size:11px">6KB – 320x320 – image/webp</div></div></div></div><div class="help">Set by airZoon admins. Shown on the public website (Featured Customers) and used in the admin panel when no admin panel logo is set.</div></div>
      <div class="field"><label>Admin panel logo</label><div class="dashed"><span class="ghost">Create new</span>Choose from existing</div><div class="help">Shown to this customer's users in the admin sidebar and header. Uploaded by the customer. Falls back to Logo.</div></div>
      ${f('Contact name', hid(180), { req: true })}
      ${f('Contact email', hid(240), { req: true })}
      <div class="row2">${f('Country', 'Dominican Republic (DO)', { help: 'Used for billing and as the default for language and formats.' })}${f('Currency', 'DOP – Dominican peso', { help: 'The currency this customer is billed in.' })}</div>
      <div class="field"><label>Email list for statistics reports</label><div style="display:flex;gap:0"><div class="input white" style="flex:1;color:var(--faint)">name@company.com</div><span class="ctl" style="padding:8px 10px">${icon('plus')}</span></div><div class="help">Type an address and press Enter or space to add it. Paste a list to add several at once.</div></div>
      <div><label class="cb-row" style="font-size:13px"><span class="cbox"></span> Send the statistics report by email</label><div class="help">Reports are sent from 07:00 (America/Santo_Domingo time zone).</div></div>
      <div class="row2">${f('Sending frequency', `<span style="flex:1">Weekly</span>${icon('chev', 14)}`, { white: true })}${f('Day of the week', `<span style="flex:1">Monday</span>${icon('chev', 14)}`, { white: true })}</div>
      <div><button class="btn primary" data-action="not-in-mockup">Save</button></div>
      ${f('Activity area', 'Commerce')}
      ${f('Mobile number', '')}
      ${join('Networks', nets)}
      ${join('Payments', none('Payments'))}
      ${join('Payment Events', none('Payment Events'))}
    </div>
    <div class="side-fields">
      ${f('Status', 'Active', { help: "While suspended, guests on all of this customer's networks see the suspended page instead of the splash page." })}
      <div class="field"><label>Connected apps</label>${mcBlock()}</div>
    </div>
  </div>`;
}

// ---------- Overlays ----------
function setupDrawer(mode) {
  const first = mode === 'setup';
  const lockAuto = first && S.sendChoice === 'new';
  const primary = first ? (S.sendChoice === 'all' ? 'Save and send' : 'Save') : 'Save';
  const choice = first ? `<div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:10px">Which contacts to send first</label><div class="choice">
      <button class="${S.sendChoice === 'all' ? 'on' : ''}" data-action="choice" data-v="all"><b>All who agreed to be contacted</b><span>25 contacts now, then new ones</span></button>
      <button class="${S.sendChoice === 'new' ? 'on' : ''}" data-action="choice" data-v="new"><b>Only new ones</b><span>From today on</span></button></div></div>` : '';
  return `<div class="overlay" data-action="close"></div>
  <aside class="drawer" role="dialog" aria-label="${first ? 'Set up Mailchimp' : 'Connection settings'}">
    <div class="drawer-head"><div><h2>${first ? 'Set up Mailchimp' : 'Connection settings'}</h2><p>${first ? 'Connected as Casa Demo. Choose where your contacts go.' : 'Connected as Casa Demo.'}</p></div><button class="icon-btn" data-action="close" aria-label="Close">${icon('x', 20)}</button></div>
    <div class="drawer-body">
      <div class="field"><label>Audience</label>${S.noAudience
        ? `<div class="empty-aud"><b>Your Mailchimp has no audience yet.</b><span>An audience is the list where your contacts go. Create one in Mailchimp, then check again.</span><div class="row"><button class="btn small" data-action="open-mailchimp">Create an audience ${icon('ext', 13)}</button><button class="btn small subtle" data-action="check-audience">Check again</button></div></div>`
        : (S.mc === 'attention' && S.attn === 'audience')
          ? `<label class="select" style="display:block"><select style="width:100%"><option>Casa Demo newsletter</option><option>Casa Demo VIP</option></select>${icon('chev', 14)}</label><div class="help warn-text">“Casa Demo guests” was deleted in Mailchimp. Choose another audience.</div>`
          : `<label class="select" style="display:block"><select style="width:100%"><option>Casa Demo guests</option></select>${icon('chev', 14)}</label><div class="help">The list in Mailchimp where your airZoon contacts are added.</div>`}</div>
      ${choice}
      <div class="switch-row"><button class="switch${S.auto ? ' on' : ''}${lockAuto ? ' locked' : ''}" data-action="toggle-auto" aria-label="Send new contacts automatically"${lockAuto ? ' disabled' : ''}><i></i></button><div><b>Send new contacts automatically</b><span>${lockAuto ? 'Always on when you choose Only new ones.' : 'Each new contact with email goes to Mailchimp. You can also send them yourself at any time.'}</span></div></div>
      <div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:8px">What is sent</label>
        <div class="help" style="margin:-4px 0 10px">The details your pages ask for. Each contact is sent with the details they left, so some may be empty.</div>
        <div class="sent-list"><span>${icon('check', 14, '#1E8E4E')} Email</span><span>${icon('check', 14, '#1E8E4E')} Last name</span>${S.noAudience ? `<span>${icon('check', 14, '#1E8E4E')} Phone</span></div>` : `<span class="off">${icon('x', 14, '#B7791F')} Phone</span></div>
        <div class="help warn-text">Phone is not in your audience, so it isn’t sent.</div>`}</div>
      <div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:8px">Tags in Mailchimp</label><div class="help" style="margin:-4px 0 10px">Every contact gets the airZoon tag, so you can see in Mailchimp who came from airZoon, and where.</div><div class="tagchips"><span>airZoon</span></div>
        <div class="switch-row" style="margin-top:12px"><button class="switch${S.locTags ? ' on' : ''}" data-action="toggle-loctags" aria-label="Add a tag for each location"><i></i></button><div><b>Add a tag for each location</b><span>Named after the location. You can rename them.</span></div></div>
        ${S.locTags ? `<div class="loc-tags">${['casademo', 'casademo_restaurant'].map(l => `<label><span>${l}</span><input class="input-plain" value="${l}" aria-label="Tag for ${l}"></label>`).join('')}</div>` : ''}
</div>
      <div class="infobox"><div>${icon('check', 15, '#1E8E4E')} Only people who agreed to be contacted are sent.</div><div>${icon('check', 15, '#1E8E4E')} Contacts without email stay in airZoon.</div><div>${icon('check', 15, '#1E8E4E')} Unsubscribes work both ways: in Mailchimp and in airZoon.</div><div>${icon('check', 15, '#1E8E4E')} In Contacts, Source still says airZoon.</div></div>
    </div>
    <div class="drawer-foot"><button class="btn primary" data-action="save-setup"${S.noAudience ? ' disabled' : ''}>${primary}</button><button class="btn" data-action="close">Cancel</button></div>
  </aside>`;
}
function importDrawer() {
  return `<div class="overlay" data-action="close"></div>
  <aside class="drawer" role="dialog" aria-label="Import from Mailchimp">
    <div class="drawer-head"><div><h2>Import from Mailchimp</h2><p>Bring people from your Mailchimp audience into Contacts.</p></div><button class="icon-btn" data-action="close" aria-label="Close">${icon('x', 20)}</button></div>
    <div class="drawer-body">
      <div class="field"><label>From audience</label><label class="select" style="display:block"><select style="width:100%"><option>Casa Demo guests</option></select>${icon('chev', 14)}</label><div class="help">About ${S.imported ? 124 : 120} subscribed people in this audience.</div></div>
      <div class="infobox"><div>${icon('check', 15, '#1E8E4E')} Only subscribed people are imported.</div><div>${icon('check', 15, '#1E8E4E')} They appear in Contacts with Source: Mailchimp.</div><div>${icon('check', 15, '#1E8E4E')} If an email is already in airZoon, it is skipped. Your airZoon contacts don't change.</div><div>${icon('check', 15, '#1E8E4E')} You can import again at any time to bring new people.</div><div>${icon('check', 15, '#1E8E4E')} Imported contacts are not sent back to Mailchimp.</div></div>
      <button class="confirm-row${S.importOk ? ' on' : ''}" data-action="toggle-import-ok" role="checkbox" aria-checked="${S.importOk}"><span class="cbx">${S.importOk ? icon('check', 12, '#fff') : ''}</span><span>I confirm these people agreed to get emails from Casa Demo.</span></button>
      <div class="callout">${icon('info', 16, '#B7791F')}<span>Imported contacts can get email campaigns only, never SMS or WhatsApp.</span></div>
    </div>
    <div class="drawer-foot"><button class="btn primary" data-action="start-import"${S.importOk ? '' : ' disabled'}>Import</button><button class="btn" data-action="close">Cancel</button></div>
  </aside>`;
}
function disconnectModal() {
  return `<div class="overlay" data-action="close"></div>
  <div class="modal" role="dialog" aria-label="Disconnect Mailchimp"><h2>Disconnect Mailchimp?</h2>
    <p>airZoon stops sending contacts to Mailchimp and stops importing from it. Contacts already in Mailchimp stay there. Your airZoon contacts don't change.</p>
    <p class="hint">To remove all access, also remove airZoon from the connected apps in your Mailchimp account.</p>
    <div class="acts"><button class="btn" data-action="close">Cancel</button><button class="btn primary" data-action="confirm-disconnect">Disconnect</button></div></div>`;
}
function oauthScreen() {
  return `<div class="oauth" role="dialog" aria-label="Mailchimp authorization">
    <span class="sim">Simulated Mailchimp screen. The real one is made by Mailchimp.</span>
    <div class="box">
      <div class="apps"><span class="app-icon" style="background:var(--red-bg);color:var(--red)">aZ</span>${icon('sync', 18)}<span class="app-icon" style="background:#FFE01B;color:#1A1A1A">${icon('mail', 22, '#1A1A1A')}</span></div>
      <h2>Allow airZoon to access your Mailchimp account?</h2>
      <p>airZoon will be able to add contacts to your audiences and read your contacts.</p>
      <div class="acts"><button class="btn" data-action="oauth-cancel">Cancel</button><button class="btn primary" style="background:#1A1A1A;border-color:#1A1A1A" data-action="oauth-allow">Allow</button></div>
    </div></div>`;
}

// ---------- Review bar ----------
function reviewBar() {
  const p = PRESETS[S.preset];
  const stateKey = (p && p.mc === S.mc && (p.result || null) === (S.result || null) && !!p.noAudience === !!S.noAudience && (p.attn || 'access') === (S.attn || 'access')) ? S.preset : (S.mc === 'connected' ? (S.imported ? 'connected' : 'noimport') : S.mc);
  return `<div class="review-bar" role="region" aria-label="Review controls">
    <a href="index.html">← Overview</a>
    <span class="label">Review controls, not part of the panel</span>
    <span class="spacer"></span>
    <span class="label">Dashboard</span>
    <span class="seg-dark"><button class="${S.option === 'a' ? 'on' : ''}" data-action="option" data-v="a">Option A · Row</button><button class="${S.option === 'b' ? 'on' : ''}" data-action="option" data-v="b">Option B · Card</button></span>
    <span class="label">Mailchimp state</span>
    <select data-action="preset" aria-label="Mailchimp state">
      <option value="not"${stateKey === 'not' ? ' selected' : ''}>Not connected</option>
      <option value="connected"${stateKey === 'connected' ? ' selected' : ''}>Connected</option>
      <option value="setup"${stateKey === 'setup' ? ' selected' : ''}>Setup not finished</option>
      <option value="attention"${stateKey === 'attention' ? ' selected' : ''}>Needs attention</option>
      <option value="nocontacts"${stateKey === 'nocontacts' ? ' selected' : ''}>Connected, no contacts yet</option>
      <option value="noimport"${stateKey === 'noimport' ? ' selected' : ''}>Connected, nothing imported</option>
      <option value="noaudience"${stateKey === 'noaudience' ? ' selected' : ''}>No audience in Mailchimp</option>
      <option value="audiencegone"${stateKey === 'audiencegone' ? ' selected' : ''}>Audience deleted</option>
      <option value="sendstopped"${stateKey === 'sendstopped' ? ' selected' : ''}>Sending stopped part-way</option>
      <option value="importstopped"${stateKey === 'importstopped' ? ' selected' : ''}>Import stopped part-way</option>
    </select>
  </div>`;
}

// ---------- Render ----------
function render() {
  const view = S.view === 'contacts' ? contacts() : S.view === 'myinfo' ? myinfo() : dashboard();
  let over = '';
  if (S.overlay === 'setup' || S.overlay === 'settings') over = setupDrawer(S.overlay);
  if (S.overlay === 'import') over = importDrawer();
  if (S.overlay === 'disconnect') over = disconnectModal();
  if (S.overlay === 'oauth') over = oauthScreen();
  const t = S.toast ? `<div class="toast" role="status">${icon('check', 16, '#9BE3B4')}${S.toast}</div>` : '';
  document.getElementById('root').innerHTML = `${reviewBar()}<div class="app">${sidebar()}<main class="main">${view}</main></div>${over}${t}`;
  updateScrollHints();
  S.flashBlock = false;
  const u = new URL(location.href);
  u.searchParams.set('option', S.option); u.searchParams.set('view', S.view);
  history.replaceState(null, '', u);
}

// ---------- Table scroll hints: fade + arrow on the side that has more columns ----------
function updateScrollHints() {
  document.querySelectorAll('.table-scroll').forEach(w => {
    const el = w.querySelector('.ts-inner');
    const max = el.scrollWidth - el.clientWidth;
    w.classList.toggle('more-right', el.scrollLeft < max - 2);
    w.classList.toggle('more-left', el.scrollLeft > 2);
  });
}
document.addEventListener('scroll', (e) => { if (e.target.classList && e.target.classList.contains('ts-inner')) updateScrollHints(); }, true);
window.addEventListener('resize', () => requestAnimationFrame(updateScrollHints));

// ---------- Events ----------
document.addEventListener('click', (e) => {
  const goEl = e.target.closest('[data-go]');
  if (goEl) { go(goEl.dataset.go); return; }
  const el = e.target.closest('[data-action]');
  if (!el || el.tagName === 'SELECT' || el.disabled) return;
  const a = el.dataset.action;
  switch (a) {
    case 'option': S.option = el.dataset.v; render(); break;
    case 'scroll-table': { const inner = el.closest('.table-scroll').querySelector('.ts-inner'); inner.scrollBy({ left: Number(el.dataset.dir) * 320, behavior: 'smooth' }); break; }
    case 'not-in-mockup': toast('This part of the panel is not in this mockup.'); break;
    case 'dash-connect': case 'dash-fix': go('myinfo', { flash: true }); break;
    case 'dash-retry': { const imp = S.result === 'stopped-import'; go('myinfo', { flash: true }); S.result = null; if (imp) { S.retryImport = true; startJob('import', { done: 60, total: 120 }); } else startJob('send', { done: 12, total: 25 }); break; }
    case 'finish-setup': S.view = 'myinfo'; S.overlay = 'setup'; S.sendChoice = 'all'; render(); break;
    case 'open-mailchimp': toast('In the real panel, this opens Mailchimp in a new tab.'); break;
    case 'connect': S.oauthReason = 'connect'; S.overlay = 'oauth'; render(); break;
    case 'reconnect': S.oauthReason = 'reconnect'; S.overlay = 'oauth'; render(); break;
    case 'oauth-cancel':
      S.overlay = null; render();
      toast(S.oauthReason === 'reconnect' ? 'Mailchimp was not reconnected.' : 'Mailchimp was not connected.');
      break;
    case 'oauth-allow':
      if (S.oauthReason === 'reconnect') { S.mc = 'connected'; S.overlay = null; render(); toast('Mailchimp reconnected. Sending starts again.'); }
      else { S.mc = 'setup'; S.overlay = 'setup'; S.sendChoice = 'all'; S.auto = true; render(); }
      break;
    case 'choice': S.sendChoice = el.dataset.v; if (S.sendChoice === 'new') S.auto = true; render(); break;
    case 'toggle-auto': S.auto = !S.auto; render(); break;
    case 'save-setup':
      if (S.overlay === 'settings') { const fixed = S.mc === 'attention' && S.attn === 'audience'; if (fixed) { S.mc = 'connected'; S.attn = 'access'; } S.overlay = null; render(); toast(fixed ? 'Audience saved. Sending again.' : 'Connection settings saved.'); break; }
      S.mc = 'connected'; S.overlay = null;
      if (S.sendChoice === 'all') startJob('send'); else { render(); toast('Mailchimp is set up. New contacts will be sent.'); }
      break;
    case 'close':
      if (S.overlay === 'setup') { S.overlay = null; render(); toast('Setup not finished. You can finish it any time.'); }
      else { S.overlay = null; render(); }
      break;
    case 'send-now': { const retry = S.result === 'stopped-send'; S.result = null; startJob('send', retry ? { done: 12, total: 25 } : null); break; }
    case 'retry-import': S.result = null; S.retryImport = true; startJob('import', { done: 60, total: 120 }); break;
    case 'check-audience': S.noAudience = false; render(); toast('Audience found: Casa Demo guests.'); break;
    case 'choose-audience': S.overlay = 'settings'; render(); break;
    case 'settings': S.overlay = 'settings'; render(); break;
    case 'import': S.overlay = 'import'; S.importOk = false; render(); break;
    case 'toggle-import-ok': S.importOk = !S.importOk; render(); break;
    case 'toggle-loctags': S.locTags = !S.locTags; render(); break;
    case 'start-import': S.overlay = null; startJob('import'); break;
    case 'dismiss': S.result = null; render(); break;
    case 'see-imported': S.filter = 'mailchimp'; go('contacts'); break;
    case 'disconnect': S.overlay = 'disconnect'; render(); break;
    case 'confirm-disconnect':
      stopTimer(); S.overlay = null; S.mc = 'not'; S.busy = null; S.result = null; S.lastSent = null; S.lastImport = null; S.everSent = false; S.attn = 'access';
      render(); toast('Mailchimp disconnected. Your contacts stay in airZoon and in Mailchimp.');
      break;
  }
});
document.addEventListener('change', (e) => {
  const el = e.target;
  if (el.dataset.action === 'filter') { S.filter = el.value; render(); }
  if (el.dataset.action === 'preset') { clearTimeout(toastTimer); S.toast = null; applyPreset(el.value); render(); }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && S.overlay) { document.querySelector('[data-action="close"]')?.click(); } });

render();
