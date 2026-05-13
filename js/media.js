// =============================================
// MEDIA SECTION - Improved with proper pause/stop
// =============================================

const mediaItems = [
    {
        title: "Black Secrets Promotional Video",
        url: "https://www.youtube.com/embed/6TEQYge02fU",
        thumbnail: "images/BlackSecretsAiCScary.png"
    },
    {
        title: "We Die Young (Live at Backseat)",
        url: "https://www.youtube.com/embed/AC_vJPMMapo",
        thumbnail: "https://img.youtube.com/vi/AC_vJPMMapo/default.jpg"
    },
    {
        title: "Put You Down (Live at Backseat)",
        url: "https://www.youtube.com/embed/ZOVBvhXhMpg",
        thumbnail: "https://img.youtube.com/vi/ZOVBvhXhMpg/default.jpg"
    },
    {
        title: "Man in the Box (Studio Recording)",
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2013239755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        thumbnail: "images/manInTheBoxLogo.png"
    }
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
                    <div class="video-player" style="display: none;">
                        <iframe src="${item.url}"
                                frameborder="0"
                                allowfullscreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                        </iframe>
                    </div>
                    <button class="close-btn" style="display: none;">Close</button>
                </div>
                <p class="media-title">${item.title}</p>
            </div>`;
    });

    html += `</div></section>`;
    return html;
}

// Helper to pause a specific container's media
function pauseMedia(container) {
    const iframe = container.querySelector('iframe');
    const playerDiv = container.querySelector('.video-player');
    const closeBtn = container.querySelector('.close-btn');
    
    if (!iframe) return;

    // YouTube pause via postMessage (most reliable)
    if (iframe.src.includes('youtube.com')) {
        try {
            iframe.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}', 
                '*'
            );
        } catch (e) {}
    }
    
    // SoundCloud pause (via URL reload trick or postMessage)
    if (iframe.src.includes('soundcloud.com')) {
        try {
            iframe.contentWindow.postMessage(
                { method: 'pause' }, 
                '*'
            );
        } catch (e) {}
    }

    // Fallback: reload iframe src to fully stop (resets to start)
    const currentSrc = iframe.src;
    iframe.src = '';
    setTimeout(() => {
        iframe.src = currentSrc;
    }, 10);

    // Hide UI
    playerDiv.style.display = 'none';
    closeBtn.style.display = 'none';
    container.classList.remove('active');
}

// Initialize click handlers
function initMediaPlayers() {
    document.querySelectorAll('.video-container').forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');
        const playerDiv = container.querySelector('.video-player');
        const closeBtn = container.querySelector('.close-btn');
        const iframe = container.querySelector('iframe');

        // Open media
        thumbnail.addEventListener('click', () => {
            // Close/pause ALL others first
            document.querySelectorAll('.video-container').forEach(other => {
                if (other !== container) {
                    pauseMedia(other);
                }
            });

            // Open this one
            container.classList.add('active');
            playerDiv.style.display = 'block';
            closeBtn.style.display = 'block';
            
            // Optional: auto-play (YouTube/SoundCloud usually start on load)
        });

        // Close button
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            pauseMedia(container);
        });
    });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('dynamic-media');
    if (mediaContainer) {
        mediaContainer.innerHTML = renderMedia();
        // Small delay for DOM elements
        setTimeout(initMediaPlayers, 100);
    }
});

// Public function to stop everything (useful elsewhere)
window.stopAllMedia = function() {
    document.querySelectorAll('.video-container').forEach(container => {
        pauseMedia(container);
    });
};
