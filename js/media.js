// =============================================
// MEDIA SECTION - Full-width Overlay Modal
// =============================================

// `id` is a permanent slug, independent of title/url/thumbnail - the
// crew dashboard's editor looks an item up by this, not by title, so
// correcting a title later can't break the lookup that finds the entry
// to fix (same reasoning as the id field on gigs in calendar.js).
const mediaItems = [
    {
        id: "black-secrets-promotional-video",
        title: "Black Secrets Promotional Video",
        url: "https://www.youtube.com/embed/6TEQYge02fU",
        thumbnail: "images/BlackSecretsAiCScary.png"
    },
    {
        id: "we-die-young-live-jammin-java",
        title: "We Die Young (Live at Jammin Java)",
        url: "https://www.youtube.com/embed/GAZHo6ez3Os?si=YTX1NpbwFXcsBXfB",
        thumbnail: "https://img.youtube.com/vi/GAZHo6ez3Os/default.jpg"
    },
    {
        id: "put-you-down-live-backseat",
        title: "Put You Down (Live at Backseat)",
        url: "https://www.youtube.com/embed/ZOVBvhXhMpg",
        thumbnail: "https://img.youtube.com/vi/ZOVBvhXhMpg/default.jpg"
    },
    {
        id: "man-in-the-box-studio",
        title: "Man in the Box (Studio Recording)",
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2013239755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        thumbnail: "images/manInTheBoxLogo.png"
    }
    // Add new media items above this line
];

function renderMedia() {
    let html = `<section id="media"><h2>Media</h2><div class="media-grid">`;

    mediaItems.forEach((item, index) => {
        html += `
            <div class="media-item" data-index="${index}">
                <div class="video-container">
                    <img src="${item.thumbnail}" 
                         alt="${item.title}"
                         loading="lazy"
                         class="thumbnail">
                </div>
                <p class="media-title">${item.title}</p>
            </div>`;
    });

    html += `</div></section>`;
    
    // Add the global media modal (once)
    html += `
    <div id="media-modal" class="media-modal">
        <div class="media-modal-content">
            <button id="modal-close" class="modal-close">✕</button>
            <div id="modal-player" class="modal-player"></div>
            <p id="modal-title" class="modal-title"></p>
        </div>
    </div>`;
    
    return html;
}

// Pause and close the modal
function closeMediaModal() {
    const modal = document.getElementById('media-modal');
    const playerContainer = document.getElementById('modal-player');
    
    // Pause media
    const iframe = playerContainer.querySelector('iframe');
    if (iframe) {
        if (iframe.src.includes('youtube.com')) {
            try {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } catch (e) {}
        }
        if (iframe.src.includes('soundcloud.com')) {
            try {
                iframe.contentWindow.postMessage({ method: 'pause' }, '*');
            } catch (e) {}
        }
        
        // Full stop
        const src = iframe.src;
        iframe.src = '';
        setTimeout(() => { iframe.src = src; }, 50);
    }
    
    modal.style.display = 'none';
    playerContainer.innerHTML = '';
}

// Initialize
function initMediaPlayers() {
    const modal = document.getElementById('media-modal');
    const modalPlayer = document.getElementById('modal-player');
    const modalTitle = document.getElementById('modal-title');
    const modalClose = document.getElementById('modal-close');

    // Close button
    modalClose.addEventListener('click', closeMediaModal);

    // Click outside content to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeMediaModal();
    });

    // Thumbnail clicks
    document.querySelectorAll('.media-item').forEach(item => {
        const thumbnail = item.querySelector('.thumbnail');
        const index = parseInt(item.dataset.index);
        const itemData = mediaItems[index];

        thumbnail.addEventListener('click', () => {
            // Set title
            modalTitle.textContent = itemData.title;
            
            // Create player
            modalPlayer.innerHTML = `
                <div class="modal-video-wrapper">
                    <iframe src="${itemData.url}" 
                            frameborder="0" 
                            allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>`;
            
            modal.style.display = 'flex';
        });
    });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('dynamic-media');
    if (mediaContainer) {
        mediaContainer.innerHTML = renderMedia();
        setTimeout(initMediaPlayers, 100);
    }
});
