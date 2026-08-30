// =============================================
// CALENDAR - With Flyer Modal
// =============================================

/*
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
*/
const gigs = [
    {
        date: "Friday, October 3, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at The Salisbury Center",
        presentedBy: "Friends of Old Town",
        presentedByUrl: "https://friendsofoldtown.org/",
        venue: "The Salisbury Center",
        venueUrl: "https://wheresthemusic.us/venue/taylor-pavilion/",
        address: "119 North Loudoun Street, Winchester, VA",
        flyerMain: "flyers/20260903SalisburyCenterFlyer.png"
    },
    {
        date: "Friday, October 5, 2026",
        time: "8PM",
        title: "Black Secrets Live at Blue Fox",
        venue: "Blue Fox Billiards Bar & Grill",
        address: "1160 Millwood Pike, Winchester, VA 22602",
        flyerMain: "flyers/20260905BlueFox_Flyer.png"
    },
    {
        date: "Friday, October 2, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Taylor Pavillion",
        presentedBy: "Friends of Old Town",
        presentedByUrl: "https://friendsofoldtown.org/",
        venue: "Taylor Pavillion",
        venueUrl: "https://wheresthemusic.us/venue/taylor-pavilion/",
        address: "119 North Loudoun Street, Winchester, VA",
        flyerMain: "flyers/20261003FirstFridayFlyer-2.png"
    },
    {
        date: "Saturday, October 25, 2026",
        time: "8PM",
        title: "Black Secrets Live at Cumberland Hunting Club",
        venue: "Cumberland Hunting Club",
        address: "31 Thomas St, Cumberland, MD 21502",
        flyerMain: "flyers/20261024CumberlandOutdoorClub.png"
    }
    // Add new gigs above this line
];

// Every field except date, title, and flyerMain is optional.
function googleMapsUrl(address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

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
                    ${gig.presentedBy ? `<p class="presented-by">Presented by <strong>${gig.presentedByUrl ? `<a href="${gig.presentedByUrl}" target="_blank">${gig.presentedBy}</a>` : gig.presentedBy}</strong></p>` : ''}
                    <p class="venue-info">
                        ${gig.venueUrl ? `<a href="${gig.venueUrl}" target="_blank">${gig.venue}</a>` : gig.venue}<br>
                        <a href="${googleMapsUrl(gig.address)}" target="_blank">${gig.address}</a>
                    </p>
                </div>
                <button class="flyer-btn">Flyer</button>
            </div>
        `;
    });

    html += `</div>
    ${renderBandsintown()}
    </section>`;
    
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
                     style="border-radius:6px;">
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
