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
    description: 'This week we have strawberries, goat cheese and bread crisps as well as caffeinated and decaf tea. All students, faculty, and researchers welcome. ECS 668, UVic.'
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
  },
  {
    date: '2026-05-05',
    title: 'More Tea Tuesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: "We've moved our gatherings to Tuesdays for this summer (at least the month of May) due to TA duties this semester for Ali More Tea. All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!"
  },
  {
    date: '2026-05-12',
    title: 'More Tea Tuesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-05-19',
    title: 'More Tea Tuesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-05-26',
    title: 'More Tea Tuesday',
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
let currentMonth = today.getMonth();

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const MONTH_SHORT = [
  'Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec'
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

  const label = document.getElementById('month-label');
  if (label) label.textContent = MONTH_NAMES[month] + ' ' + year;

  const container = document.getElementById('calendar');
  if (!container) return;

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev  = new Date(year, month, 0).getDate();

  let html = '<table class="cal-grid"><thead><tr>';
  DAY_NAMES.forEach(function(d) {
    html += '<th>' + d + '</th>';
  });
  html += '</tr></thead><tbody>';

  let dayCount  = 1;
  let nextCount = 1;

  for (let row = 0; row < 6; row++) {
    html += '<tr>';
    for (let col = 0; col < 7; col++) {
      const cellIndex = row * 7 + col;

      if (cellIndex < firstDay) {
        const prevDay = daysInPrev - firstDay + cellIndex + 1;
        html += '<td class="other-month"><span class="cal-day">' + prevDay + '</span></td>';

      } else if (dayCount > daysInMonth) {
        html += '<td class="other-month"><span class="cal-day">' + nextCount + '</span></td>';
        nextCount++;

      } else {
        const dateKey  = toDateKey(year, month, dayCount);
        const isToday  = (
          year     === today.getFullYear() &&
          month    === today.getMonth()    &&
          dayCount === today.getDate()
        );
        const dayEvents = eventMap[dateKey] || [];
        const hasEvent  = dayEvents.length > 0;

        let cls = '';
        if (isToday)  cls += ' today';
        if (hasEvent) cls += ' has-event';

        const dataAttr = hasEvent ? ' data-date="' + dateKey + '"' : '';

        html += '<td class="' + cls.trim() + '"' + dataAttr + '>'
              + '<span class="cal-day">' + dayCount + '</span>'
              + '</td>';

        dayCount++;
      }
    }
    html += '</tr>';
    if (dayCount > daysInMonth && row >= 3) break;
  }

  html += '</tbody></table>';
  container.innerHTML = html;

  var hoverTimer = null;

  container.querySelectorAll('td.has-event').forEach(function(cell) {
    cell.addEventListener('mouseenter', function(e) {
      hoverTimer = setTimeout(function() {
        const dateKey = cell.dataset.date;
        const evs = eventMap[dateKey] || [];
        showPopup(e, evs[0]);
      }, 300);
    });
    cell.addEventListener('mouseleave', function() {
      clearTimeout(hoverTimer);
      const popup = document.getElementById('event-popup');
      if (popup) popup.classList.remove('visible');
    });
    cell.addEventListener('click', function(e) {
      clearTimeout(hoverTimer);
      const dateKey = cell.dataset.date;
      const evs = eventMap[dateKey] || [];
      showPopup(e, evs[0]);
      e.stopPropagation();
    });
  });
}

// =============================================
// FEATURED GATHERINGS
// =============================================
function renderFeaturedGatherings() {
  const container = document.getElementById('featured-gatherings');
  if (!container) return;

  const todayKey = toDateKey(today.getFullYear(), today.getMonth(), today.getDate());

  const upcoming = EVENTS
    .filter(function(ev) { return ev.date >= todayKey; })
    .slice(0, 5);

  if (upcoming.length === 0) {
    container.innerHTML = '<p style="color:var(--text-light);font-size:0.85rem;">No upcoming events.</p>';
    return;
  }

  container.innerHTML = upcoming.map(function(ev) {
    const parts = ev.date.split('-');
    const day   = parseInt(parts[2], 10);
    const mon   = MONTH_SHORT[parseInt(parts[1], 10) - 1];

    return '<div class="gathering-item">'
         +   '<div class="gathering-date-badge">'
         +     '<span class="g-day">' + day + '</span>'
         +     '<span class="g-month">' + mon + '</span>'
         +   '</div>'
         +   '<div class="gathering-info">'
         +     '<strong>' + ev.title + '</strong>'
         +     '<span>' + ev.time + ' &bull; ' + ev.location + '</span>'
         +   '</div>'
         + '</div>';
  }).join('');
}

// =============================================
// EVENT POPUP
// =============================================
function createPopup() {
  const popup = document.createElement('div');
  popup.className = 'event-popup';
  popup.id = 'event-popup';
  popup.innerHTML = '<button class="event-popup-close" id="popup-close">&times;</button>'
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

  const x = Math.min(e.clientX + 10, window.innerWidth  - 310);
  const y = Math.min(e.clientY + 10, window.innerHeight - 190);
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
  renderFeaturedGatherings();
}

document.addEventListener('DOMContentLoaded', initCalendar);
