// =============================================
// EVENTS DATA
// Add or edit events here. Date format: 'YYYY-MM-DD'
// =============================================
const EVENTS = [
  {
    date: '2026-02-25',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 2:00 PM',
    description: 'We, a group of grad students, decided to start a weekly tea event on Wednesdays from 12pm to 2pm in ECS 668. The idea is to have a place where people can gather. I decided to take the initiative and now I want to invite you to the first of these events, which happens this week, February 25, 2026.\n\nI will provide tea and cups!\n\nIf you are a Grad Student, Staff, or Faculty, or a researcher, or inspired to do research someday, you are very welcome to come by.'
  },
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
    date: '2026-05-14',
    title: 'More Tea Thursday',
    location: 'ECS 668',
    time: '4:30 PM - 5:30 PM',
    description: "We've moved our gatherings to Thursdays at 4:30pm for this summer (at least the month of May) due to TA duties this semester for Ali More Tea."
  },
  {
    date: '2026-05-21',
    title: 'More Tea Thursday',
    location: 'ECS 668',
    time: '4:30 PM - 5:30 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-05-28',
    title: 'More Tea Thursday',
    location: 'ECS 668',
    time: '4:30 PM - 5:30 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-06-03',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: "We're back to Wednesdays! This time, it's from 12pm to 1pm."
  },
  {
    date: '2026-06-10',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-06-17',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-06-24',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-07-08',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-07-15',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-07-22',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-07-29',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-08-05',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-08-12',
    title: 'More Tea Wednesday',
    location: 'ECS 668',
    time: '12:00 PM - 1:00 PM',
    description: 'All students, faculty, and researchers welcome. Caffeinated and Decaf tea provided!'
  },
  {
    date: '2026-08-20',
    title: 'Frisbee + Tea Picnic',
    location: 'UVic Quad',
    locationUrl: 'https://maps.app.goo.gl/qpaAQGCGBjCQjxqP6',
    time: '4:30 PM - 6:00 PM',
    description: "We don't have regular tea this week, however, we will have a frisbee + tea picnic outside the building. Ali will bring some tea (in his thermos) and some cups as well. Come by!"
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
  var popupPinned = false;

  container.querySelectorAll('td.has-event').forEach(function(cell) {
    cell.addEventListener('mouseenter', function(e) {
      if (popupPinned) return;
      hoverTimer = setTimeout(function() {
        const dateKey = cell.dataset.date;
        const evs = eventMap[dateKey] || [];
        showPopup(e, evs[0], false);
      }, 300);
    });
    cell.addEventListener('mouseleave', function() {
      if (popupPinned) return;
      clearTimeout(hoverTimer);
      const popup = document.getElementById('event-popup');
      if (popup) popup.classList.remove('visible');
    });
    cell.addEventListener('click', function(e) {
      clearTimeout(hoverTimer);
      const dateKey = cell.dataset.date;
      const evs = eventMap[dateKey] || [];
      popupPinned = true;
      showPopup(e, evs[0], true);
      e.stopPropagation();
    });
  });

  function unpinPopup() {
    popupPinned = false;
    const popup = document.getElementById('event-popup');
    if (popup) popup.classList.remove('visible');
  }

  document._moreteaUnpin = unpinPopup;
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
    if (document._moreteaUnpin) document._moreteaUnpin();
    else popup.classList.remove('visible');
  });

  document.addEventListener('click', function(e) {
    if (!popup.contains(e.target) && !e.target.closest('td.has-event')) {
      if (document._moreteaUnpin) document._moreteaUnpin();
      else popup.classList.remove('visible');
    }
  });

  return popup;
}

function showPopup(e, ev, pinned) {
  let popup = document.getElementById('event-popup');
  if (!popup) popup = createPopup();

  popup.classList.toggle('pinned', !!pinned);

  document.getElementById('popup-title').textContent = ev.title;
  document.getElementById('popup-time').textContent  = ev.time;

  const locEl = document.getElementById('popup-location');
  if (ev.locationUrl) {
    locEl.innerHTML = '<a href="' + ev.locationUrl + '" target="_blank" rel="noopener" style="color:var(--gold)">' + ev.location + ' ↗</a>';
  } else {
    locEl.textContent = ev.location;
  }

  document.getElementById('popup-desc').textContent = ev.description;

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

// =============================================
// EVENT LIST (for announcements page)
// =============================================
function renderEventList() {
  const container = document.getElementById('event-list');
  if (!container) return;

  const todayKey = toDateKey(today.getFullYear(), today.getMonth(), today.getDate());

  const sorted = EVENTS.slice().sort(function(a, b) { return a.date < b.date ? 1 : -1; });
  const upcoming = sorted.filter(function(ev) { return ev.date >= todayKey; }).reverse();
  const past     = sorted.filter(function(ev) { return ev.date  < todayKey; });

  function makeItem(ev, isPast) {
    const parts = ev.date.split('-');
    const day   = parseInt(parts[2], 10);
    const mon   = MONTH_SHORT[parseInt(parts[1], 10) - 1];
    const year  = parts[0];
    const locHtml = ev.locationUrl
      ? '<a href="' + ev.locationUrl + '" target="_blank" rel="noopener">' + ev.location + ' ↗</a>'
      : ev.location;
    return '<div class="event-list-item' + (isPast ? ' event-list-past' : '') + '">'
         +   '<div class="event-list-badge">'
         +     '<span class="g-day">' + day + '</span>'
         +     '<span class="g-month">' + mon + '</span>'
         +     '<span class="g-year">' + year + '</span>'
         +   '</div>'
         +   '<div class="event-list-info">'
         +     '<strong>' + ev.title + '</strong>'
         +     '<span>' + ev.time + ' &bull; ' + locHtml + '</span>'
         +   '</div>'
         + '</div>';
  }

  let html = '';
  if (upcoming.length > 0) {
    html += '<h3 class="event-list-heading">Upcoming</h3>';
    html += upcoming.map(function(ev) { return makeItem(ev, false); }).join('');
  }
  if (past.length > 0) {
    html += '<h3 class="event-list-heading event-list-heading-past">Past Events</h3>';
    html += past.map(function(ev) { return makeItem(ev, true); }).join('');
  }
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  initCalendar();
  renderEventList();
});
