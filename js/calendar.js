// =============================================
// CALENDAR - With Flyer Modal
// =============================================

const gigs = [
    {
        date: "Saturday, June 6, 2026",
        time: "11am-11pm",
        title: "Black Secrets Live at Rock on the Hill Music Festival",
        venue: "Pleasant Hill Fairgrounds",
        address: "3003 Baltimore Pike,<br>Hanover, PA 17331",
        detailsUrl: "https://rockonthehillpa.com/",
        flyerMain: "flyers/20260606RockOnTheHillFlyerMain.jpg",
        extra: "With: <strong>12 Stones, Windwalkers, Deadeyes, and MANY MORE!</strong>"
    },
    {
        date: "Sunday, June 14, 2026",
        time: "11am-6pm",
        title: "Black Secrets Live at Eagle Plaza",
        venue: "Eagle Plaza",
        address: "3790 Hedgesville Rd<br>Hedgesville, WV 25427",
        detailsUrl: "https://www.facebook.com/share/1BaumwVbro/?mibextid=wwXIfr",
        flyerMain: "flyers/20260614EagleOnePlaza.jpg",
        extra: "With: <strong>The Stares</strong> and <strong>Bobcat</strong>"
    },
    {
        date: "Saturday, June 27, 2026",
        time: "",
        title: "Black Secrets Live at Jammin Java",
        venue: "Jammin Java",
        address: "227 Maple Ave E,<br>Vienna, VA 22180",
        detailsUrl: "https://www.unionstagepresents.com/shows/siamese-dreamers-tribute-to-smashing-pumpkins-with-primemoose-tribute-to-primus-27-jun",
        flyerMain: "flyers/20260627JamminJava.jpg",
        extra: "With: <strong>Siamese Dreamers</strong>"
    },
    {
        date: "Friday, July 3, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Jim Barnett Park",
        venue: "Jim Barnett Park",
        address: "1001 E. Cork Street,<br>Winchester, VA 22601",
        detailsUrl: "https://maps.app.goo.gl/tYbDqZCHzYQfS2K98",
        flyerMain: "flyers/20260703JimBarnettParkFlyer.jpg",
        extra: ""
    },
    {
        date: "Friday, July 10, 2026",
        time: "7pm",
        title: "Black Secrets Live at The Tally Ho Theater",
        venue: "Tally Ho Theater",
        address: "19 W Market St,<br>Leesburg, VA 20176",
        detailsUrl: "https://www.ticketweb.com/event/-schism-a-tribute-to-tally-ho-theater-tickets/14850233?pl=tallyho",
        flyerMain: "flyers/20260710TallyHo.png",
        extra: "With: <strong>SCHISM</strong>"
    },
    {
        date: "Friday, October 3, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Taylor Pavillion",
        venue: "Taylor Pavillion",
        address: "119 North Loudoun Street,<br>Winchester, VA",
        detailsUrl: "https://wheresthemusic.us/venue/taylor-pavilion/",
        flyerMain: "flyers/20261003FirstFridayFlyer.jpg",
        extra: "Presented by <strong><a href='https://friendsofoldtown.org/' target='_blank'>Friends of Old Town</a></strong>"
    }
    // Add new gigs above this line
];

function renderCalendar() {
    let html = `
        <section id="calendar">
            <h2>Calendar</h2>
            <div class="events-grid">
    `;

    gigs.forEach(gig => {
        html += `
            <div class="event-tile" style="background-image: url('${gig.flyerMain}');">
                <div class="tile-content">
                    <p><strong>${gig.date}</strong></p>
                    ${gig.time ? `<p>${gig.time}</p>` : ''}
                    <h3>${gig.title}</h3>
                    ${gig.extra ? `<br>${gig.extra}<br>` : ''}
                    <a href="${gig.detailsUrl}" target="_blank">${gig.venue}<br>${gig.address}</a>
                </div>
                <button class="flyer-btn">Flyer</button>
            </div>
        `;
    });

    html += `</div></section>`;
    
    // Global Calendar Modal (added once)
    html += `
    <div id="calendar-modal" class="media-modal calendar-modal">
        <div class="media-modal-content">
            <button id="calendar-modal-close" class="modal-close">✕</button>
            <div id="calendar-modal-image" class="modal-image-container"></div>
        </div>
    </div>`;

    return html;
}

function initCalendar() {
    const modal = document.getElementById('calendar-modal');
    const modalImageContainer = document.getElementById('calendar-modal-image');
    const modalClose = document.getElementById('calendar-modal-close');

    // Close button
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImageContainer.innerHTML = '';
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImageContainer.innerHTML = '';
        }
    });

    // Flyer buttons
    document.querySelectorAll('.flyer-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const gig = gigs[index];
            
            modalImageContainer.innerHTML = `
                <img src="${gig.flyerMain}" 
                     alt="${gig.title} Flyer" 
                     style="width:100%; height:auto; border-radius:6px; display:block;">
            `;
            
            modal.style.display = 'flex';
        });
    });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('dynamic-calendar');
    if (calendarContainer) {
        calendarContainer.innerHTML = renderCalendar();
        setTimeout(initCalendar, 150);
    }
});
