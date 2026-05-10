// =============================================
// MEDIA SECTION - DIV BASED + CLICK HANDLERS
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
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2013239755&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        thumbnail: "images/manInTheBoxLogo.png"
    }
];

function renderMedia() {
    let html = `<section id="media"><h2>Media</h2><div class="media-grid">`;

    mediaItems.forEach(item => {
        html += `
            <div class="media-item">
                <div class="video-container">
                    <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail">
                    <div class="video-player">
                        <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <button class="close-btn">Close</button>
                </div>
                <p class="media-title">${item.title}</p>
            </div>`;
    });

    html += `</div></section>`;
    return html;
}

// Initialize click handlers
function initMediaPlayers() {
    document.querySelectorAll('.video-container').forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');
        const player = container.querySelector('.video-player');
        const closeBtn = container.querySelector('.close-btn');

        thumbnail.addEventListener('click', () => {
            container.classList.add('active');
            player.style.display = 'block';
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            container.classList.remove('active');
            player.style.display = 'none';
        });
    });
}

// Auto-init when media is rendered
document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('dynamic-media');
    if (mediaContainer) {
        mediaContainer.innerHTML = renderMedia();
        setTimeout(initMediaPlayers, 150);   // Small delay to ensure DOM is ready
    }
});
