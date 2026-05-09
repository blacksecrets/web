// =============================================
// CALENDAR - EASY TO UPDATE
// =============================================

const gigs = [
    {
        date: "Saturday, June 6, 2026",
        time: "11am-11pm",
        title: "Black Secrets Live at Rock on the Hill Music Festival",
        venue: "Pleasant Hill Fairgrounds",
        address: "3003 Baltimore Pike, Hanover, PA 17331",
        detailsUrl: "https://rockonthehillpa.com/",
        flyer: "flyers/20260606RockOnTheHillFlyer.jpg",
        flyerMain: "flyers/20260606RockOnTheHillFlyerMain.jpg",
        extra: "With: <strong>12 Stones, Windwalkers, Deadeyes, and MANY MORE!</strong>"
    },
    {
        date: "Saturday, June 27, 2026",
        time: "",
        title: "Black Secrets Live at Jammin Java",
        venue: "Jammin Java",
        address: "227 Maple Ave E, Vienna, VA 22180",
        detailsUrl: "https://www.unionstagepresents.com/shows/siamese-dreamers-tribute-to-smashing-pumpkins-with-primemoose-tribute-to-primus-27-jun",
        flyer: "flyers/20260627JamminJava.jpg",
        flyerMain: "flyers/20260627JamminJava.jpg",
        extra: "With: <strong>Siamese Dreamers</strong>"
    },
    {
        date: "Friday, July 3, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Jim Barnett Park",
        venue: "Jim Barnett Park",
        address: "1001 E. Cork Street, Winchester, VA 22601",
        detailsUrl: "https://maps.app.goo.gl/tYbDqZCHzYQfS2K98",
        flyer: "flyers/20260703JimBarnettParkFlyer.jpg",
        flyerMain: "flyers/20260703JimBarnettParkFlyer.jpg",
        extra: ""
    },
    {
        date: "Friday, October 3, 2026",
        time: "Time-TBD",
        title: "Black Secrets Live at Taylor Pavillion",
        venue: "Taylor Pavillion",
        address: "119 North Loudoun Street, Winchester, VA",
        detailsUrl: "https://wheresthemusic.us/venue/taylor-pavilion/",
        flyer: "flyers/20261003FirstFridayFlyer.jpg",
        flyerMain: "flyers/20261003FirstFridayFlyer.jpg",
        extra: "Presented by <strong><a href='https://friendsofoldtown.org/' target='_blank'>Friends of Old Town</a></strong>"
    },
    {
        date: "Friday, July 10, 2026",
        time: "7pm",
        title: "Black Secrets Live at The Tally Ho Theater",
        venue: "Tally Ho Theater",
        address: "19 W Market St, Leesburg, VA 20176",
        detailsUrl: "https://www.ticketweb.com/event/-schism-a-tribute-to-tally-ho-theater-tickets/14850233?pl=tallyho",
        flyer: "flyers/20260710TallyHo.png",
        flyerMain: "flyers/20260710TallyHo.png",
        extra: "With: <strong>SCHISM</strong>"
    }
    // Add new gigs above this line
];

function renderCalendar() {
    let html = `
        <section id="calendar">
            <h2>Calendar</h2>
            <div class="events-grid">   <!-- Single wrapper for all gigs -->
    `;

    gigs.forEach(gig => {
        html += `
            <div class="event-tile" style="background-image: url('${gig.flyer}');">
                <div class="tile-content">
                    <p><strong>${gig.date}</strong></p>
                    ${gig.time ? `<p>${gig.time}</p>` : ''}
                    <h3>${gig.title}</h3>
                    ${gig.extra ? `<br>${gig.extra}<br>` : ''}
                    <a href="${gig.detailsUrl}" target="_blank">${gig.venue}<br>${gig.address}</a>
                </div>
                <a href="${gig.flyerMain}" target="_blank" class="get-details-btn">Details</a>
            </div>
        `;
    });

    html += `</div></section>`;
    return html;
}
