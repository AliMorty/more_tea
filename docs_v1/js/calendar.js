// =============================================
// EVENTS DATA
// Add or edit events here. Date format: 'YYYY-MM-DD'
// =============================================
const EVENTS = [
  {
    date: '2026-03-04',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-03-11',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-03-18',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-03-25',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-04-01',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-04-08',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-04-15',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-04-22',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-04-29',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  }
];

// =============================================
// CALENDAR STATE
// =============================================
const today = new Date();
let currentYear  = today.getFullYear();
let currentMonth = today.getMonth(); // 0-indexed

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// =============================================
// HELPERS
// =============================================
function toDateKey(year, month, day) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

// Build a map of dateKey -> [events] for fast lookup
function buildEventMap() {
  const map = {};
  EVENTS.forEach(function(ev) {
    if (!map[ev.date]) map[ev.date] = [];
    map[ev.date].push(ev);
  });
  return map;
}

// =============================================
// RENDER CALENDAR
// =============================================
function renderCalendar(year, month) {
  const eventMap = buildEventMap();

  // Update month label
  const label = document.getElementById('month-label');
  if (label) label.textContent = MONTH_NAMES[month] + ' ' + year;

  const container = document.getElementById('calendar');
  if (!container) return;

  const firstDay  = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev  = new Date(year, month, 0).getDate();

  let html = '<table class="cal-grid"><thead><tr>';
  DAY_NAMES.forEach(function(d) {
    html += '<th>' + d + '</th>';
  });
  html += '</tr></thead><tbody>';

  let dayCount = 1;
  let nextCount = 1;

  for (let row = 0; row < 6; row++) {
    html += '<tr>';
    for (let col = 0; col < 7; col++) {
      const cellIndex = row * 7 + col;

      if (cellIndex < firstDay) {
        // Previous month day
        const prevDay = daysInPrev - firstDay + cellIndex + 1;
        html += '<td class="other-month"><span class="cal-day">' + prevDay + '</span></td>';

      } else if (dayCount > daysInMonth) {
        // Next month day
        html += '<td class="other-month"><span class="cal-day">' + nextCount + '</span></td>';
        nextCount++;

      } else {
        const dateKey = toDateKey(year, month, dayCount);
        const isToday = (
          year  === today.getFullYear() &&
          month === today.getMonth() &&
          dayCount === today.getDate()
        );
        const dayEvents = eventMap[dateKey] || [];
        const hasEvent  = dayEvents.length > 0;

        let cls = '';
        if (isToday)  cls += ' today';
        if (hasEvent) cls += ' has-event';

        const dots = hasEvent
          ? '<div class="event-dot-row">' + dayEvents.map(function() { return '<span class="event-dot"></span>'; }).join('') + '</div>'
          : '';

        const dataAttr = hasEvent ? ' data-date="' + dateKey + '"' : '';

        html += '<td class="' + cls.trim() + '"' + dataAttr + '>'
              + '<span class="cal-day">' + dayCount + '</span>'
              + dots
              + '</td>';

        dayCount++;
      }
    }
    html += '</tr>';
    if (dayCount > daysInMonth && row >= 3) break;
  }

  html += '</tbody></table>';
  container.innerHTML = html;

  // Attach click handlers to event cells
  container.querySelectorAll('td.has-event').forEach(function(cell) {
    cell.addEventListener('click', function(e) {
      const dateKey = cell.dataset.date;
      const evs = eventMap[dateKey] || [];
      showPopup(e, evs[0]);
    });
  });
}

// =============================================
// EVENT POPUP
// =============================================
function createPopup() {
  const popup = document.createElement('div');
  popup.className = 'event-popup';
  popup.id = 'event-popup';
  popup.innerHTML = '<button class="event-popup-close" id="popup-close">x</button>'
                  + '<div class="event-popup-title" id="popup-title"></div>'
                  + '<div class="event-popup-detail" id="popup-time"></div>'
                  + '<div class="event-popup-detail" id="popup-location"></div>'
                  + '<div class="event-popup-detail" id="popup-desc"></div>';
  document.body.appendChild(popup);

  document.getElementById('popup-close').addEventListener('click', function() {
    popup.classList.remove('visible');
  });

  document.addEventListener('click', function(e) {
    if (!popup.contains(e.target) && !e.target.closest('td.has-event')) {
      popup.classList.remove('visible');
    }
  });

  return popup;
}

function showPopup(e, ev) {
  let popup = document.getElementById('event-popup');
  if (!popup) popup = createPopup();

  document.getElementById('popup-title').textContent    = ev.title;
  document.getElementById('popup-time').textContent     = ev.time;
  document.getElementById('popup-location').textContent = ev.location;
  document.getElementById('popup-desc').textContent     = ev.description;

  // Position near the click
  const x = Math.min(e.clientX + 10, window.innerWidth  - 300);
  const y = Math.min(e.clientY + 10, window.innerHeight - 180);
  popup.style.left = x + 'px';
  popup.style.top  = y + 'px';

  popup.classList.add('visible');
  e.stopPropagation();
}

// =============================================
// NAVIGATION BUTTONS
// =============================================
function initCalendar() {
  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      renderCalendar(currentYear, currentMonth);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      renderCalendar(currentYear, currentMonth);
    });
  }

  renderCalendar(currentYear, currentMonth);
}

document.addEventListener('DOMContentLoaded', initCalendar);
