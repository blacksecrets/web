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
        id: "salisbury-center-2026-10-03",
        date: "Friday, October 3, 2026",
        time: "Doors: 7PM - Show: 8PM",
        title: "Black Secrets Live at The Salisbury Center",
        withArtists: "Attica - A Nirvana Tribute",
        venue: "The Salisbury Center",
        // Venue name links to the same place as the Tickets button.
        venueUrl: "https://www.bandsintown.com/t/108837980?app_id=8c8cfd4dd08e15fcb7d6441b48d3081d&came_from=700&ticket_id=2050999819&utm_campaign=ticket_tktpp&utm_medium=web&utm_source=widget",
        address: "119 North Loudoun Street, Winchester, VA",
        flyerMain: "flyers/20260903SalisburyCenterFlyer.png",
        ticketsUrl: "https://www.bandsintown.com/t/108837980?app_id=8c8cfd4dd08e15fcb7d6441b48d3081d&came_from=700&ticket_id=2050999819&utm_campaign=ticket_tktpp&utm_medium=web&utm_source=widget"
    },
    {
        id: "blue-fox-2026-10-05",
        date: "Friday, October 5, 2026",
        time: "Time: 8PM",
        title: "Black Secrets Live at Blue Fox",
        venue: "Blue Fox Billiards Bar & Grill",
        venueUrl: "https://bluefoxbilliards.com/",
        address: "1160 Millwood Pike, Winchester, VA 22602",
        flyerMain: "flyers/20260905BlueFox_Flyer.png",
        freeAdmission: false,
        customTicketsText: "$5 door cover",
        ticketMode: "custom"
    },
    {
        id: "taylor-pavilion-2026-10-02",
        date: "Friday, October 2, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Taylor Pavilion",
        presentedBy: "Friends of Old Town",
        presentedByUrl: "https://friendsofoldtown.org/",
        venue: "Taylor Pavillion",
        venueUrl: "https://wheresthemusic.us/venue/taylor-pavilion/",
        address: "119 North Loudoun Street, Winchester, VA",
        flyerMain: "flyers/20261003FirstFridayFlyer-2.png",
        ticketMode: "free"
    },
    {
        id: "cumberland-outdoor-club-2026-10-25",
        date: "Saturday, October 25, 2026",
        time: "Time: 8PM",
        title: "Black Secrets Live at Cumberland Outdoor Club",
        venue: "Cumberland Outdoor Club",
        venueUrl: "https://www.cumberlandoutdoorclub.com/",
        address: "31 Thomas St, Cumberland, MD 21502",
        flyerMain: "flyers/20261024CumberlandOutdoorClub.png"
    },
    {
        id: "bar-xiii-2026-11-28",
        date: "Saturday, November 28, 2026",
        title: "Black Secrets Live at Bar XIII",
        venue: "Bar XIII",
        venueUrl: "https://barxiii.com/",
        address: "1706 Philadelphia Pike, Wilmington, DE 19809",
        withArtists: "Guerrilla Radio - A Tribute to Rage Against the Machine",
        withArtistsUrl: "https://www.facebook.com/GuerrillaRadioBand/"
        // time and flyerMain: TBD
    },
    {
        id: "bright-box-2027-02-14",
        date: "Sunday, February 14, 2027",
        title: "Black Secrets Live at Bright Box",
        venue: "Bright Box",
        venueUrl: "https://brightboxwinchester.com/",
        address: "15 N Loudoun St, Winchester, VA 22601",
        withArtists: "Siamese Dreamers - A Tribute to The Smashing Pumpkins",
        withArtistsUrl: "https://www.siamesedreamers.com/"
        // time and flyerMain: TBD
    }
    // Add new gigs above this line
];

// Every field except date, title, venue, and address is optional - `id`
// too, technically, but every gig should get one: a short, permanent
// slug (venue-date, e.g. "blue-fox-2026-10-05") that never changes even
// if the title/venue text gets corrected later. The crew dashboard's
// editor looks a gig up by this id, not by its title, specifically so
// fixing a typo in the title or venue can't break the lookup that finds
// the entry to fix in the first place.
function googleMapsUrl(address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

// A gig has at most one of: a real Tickets link, a Free Admission badge,
// or a custom-text badge ("$5 Door Cover") - `ticketMode` says which,
// explicitly, so switching between them never depends on which of
// ticketsUrl/freeAdmission/customTicketsText happens to still hold an old
// value; those stay as untouched reference data no matter which mode is
// active. Gigs from before ticketMode existed fall back to the old
// freeAdmission-then-customTicketsText-then-ticketsUrl priority.
function ticketDisplay(gig) {
    const mode = gig.ticketMode || (gig.freeAdmission ? 'free' : (gig.customTicketsText ? 'custom' : 'url'));
    if (mode === 'free') return '<span class="ticket-info-badge">Free Admission</span>';
    if (mode === 'custom' && gig.customTicketsText) return `<span class="ticket-info-badge">${gig.customTicketsText}</span>`;
    if (gig.ticketsUrl) {
        return `
                <a href="${gig.ticketsUrl}" target="_blank" class="tickets-btn">
                    <svg class="btn-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33333 4C2.59792 4 2 4.59792 2 5.33333V6.66667C2 6.85 2.15417 6.99375 2.32708 7.05417C2.71875 7.18958 3 7.5625 3 8C3 8.4375 2.71875 8.81042 2.32708 8.94583C2.15417 9.00625 2 9.15 2 9.33333V10.6667C2 11.4021 2.59792 12 3.33333 12H12.6667C13.4021 12 14 11.4021 14 10.6667V9.33333C14 9.15 13.8458 9.00625 13.6729 8.94583C13.2812 8.81042 13 8.4375 13 8C13 7.5625 13.2812 7.18958 13.6729 7.05417C13.8458 6.99375 14 6.85 14 6.66667V5.33333C14 4.59792 13.4021 4 12.6667 4H3.33333ZM10.6667 9.66667V6.33333H5.33333V9.66667H10.6667ZM4.33333 6C4.33333 5.63125 4.63125 5.33333 5 5.33333H11C11.3688 5.33333 11.6667 5.63125 11.6667 6V10C11.6667 10.3688 11.3688 10.6667 11 10.6667H5C4.63125 10.6667 4.33333 10.3688 4.33333 10V6Z" fill="currentColor"/>
                    </svg>
                    Tickets
                </a>`;
    }
    return '';
}

function renderCalendar() {
    let html = `
        <section id="calendar">
            <h2>Calendar</h2>
            <div class="events-grid">
    `;

    gigs.forEach((gig, index) => {
        const tileClass = gig.flyerMain ? 'event-tile' : 'event-tile event-tile--no-flyer';
        const tileStyle = gig.flyerMain ? ` style="background-image: url('${gig.flyerMain}');"` : '';

        html += `
            <div class="${tileClass}"${tileStyle}>
                <div class="tile-content">
                    <p><strong>${gig.date}</strong></p>
                    ${gig.time ? `<p>${gig.time}</p>` : '<p>Time-TBD</p>'}
                    <h3>${gig.title}</h3>
                    ${gig.presentedBy ? `<p class="presented-by">Presented by <strong>${gig.presentedByUrl ? `<a href="${gig.presentedByUrl}" target="_blank">${gig.presentedBy}</a>` : gig.presentedBy}</strong></p>` : ''}
                    ${gig.withArtists ? `<p class="with-artists">With: <strong>${gig.withArtistsUrl ? `<a href="${gig.withArtistsUrl}" target="_blank">${gig.withArtists}</a>` : gig.withArtists}</strong></p>` : ''}
                    <p class="venue-info">
                        ${gig.venueUrl ? `<a href="${gig.venueUrl}" target="_blank">${gig.venue}</a>` : gig.venue}<br>
                        <a href="${googleMapsUrl(gig.address)}" target="_blank">${gig.address}</a>
                    </p>
                    ${gig.flyerMain ? '' : '<p class="flyer-pending">Details coming soon</p>'}
                </div>
                ${gig.flyerMain ? `
                <button class="flyer-btn" data-index="${index}">
                    <svg class="btn-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" stroke-width="1.3"/>
                        <circle cx="5.5" cy="5.5" r="1" fill="currentColor"/>
                        <path d="M2.5 11L6 7.5L8.5 10L11 7L13.5 10.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Flyer
                </button>` : ''}
                ${ticketDisplay(gig)}
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
    document.querySelectorAll('.flyer-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const gig = gigs[parseInt(btn.dataset.index, 10)];
            
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
