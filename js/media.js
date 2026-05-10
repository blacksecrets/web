// =============================================
// MEDIA SECTION DATA - EASY TO MAINTAIN
// =============================================

const mediaItems = [
    {
        title: "Black Secrets Promotional Video",
        type: "youtube",
        url: "https://www.youtube.com/embed/6TEQYge02fU",
        thumbnail: "images/BlackSecretsAiCScary.png"
    },
    {
        title: "We Die Young (Live at Backseat)",
        type: "youtube",
        url: "https://www.youtube.com/embed/AC_vJPMMapo",
        thumbnail: "https://img.youtube.com/vi/AC_vJPMMapo/default.jpg"
    },
    {
        title: "Put You Down (Live at Backseat)",
        type: "youtube",
        url: "https://www.youtube.com/embed/ZOVBvhXhMpg",
        thumbnail: "https://img.youtube.com/vi/ZOVBvhXhMpg/default.jpg"
    },
    {
        title: "Man in the Box (Studio Recording)",
        type: "soundcloud",
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2013239755&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        thumbnail: "images/manInTheBoxLogo.png"
    }
];

function renderMedia() {
    let html = `<section id="media"><h2>Media</h2><table width="100%" style="border-collapse: collapse; background-color: rgba(0, 0, 0, 0.8); color: #fff;">`;

    mediaItems.forEach((item, index) => {
        html += `
            <tr>
                <td width="30%">
                    <br>
                    ${item.title}
                    <br>
                </td>
                <td>
                    <div class="video-container" data-index="${index}">
                        <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail">
                        <div class="video-player">
                            <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <button class="close-btn">Close</button>
                    </div>
                </td>
            </tr>`;
    });

    html += `</table></section>`;
    return html;
}

// Re-attach click handlers after rendering
function initMediaPlayers() {
    document.querySelectorAll('.video-container').forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');
        const player = container.querySelector('.video-player');
        const closeBtn = container.querySelector('.close-btn');

        if (thumbnail && player) {
            thumbnail.addEventListener('click', () => {
                container.classList.add('active');
                player.style.display = 'block';
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                container.classList.remove('active');
                player.style.display = 'none';
            });
        }
    });
}

// Call initialization after rendering
document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('dynamic-media');
    if (mediaContainer) {
        mediaContainer.innerHTML = renderMedia();
        // Small delay to ensure DOM is updated
        setTimeout(initMediaPlayers, 100);
    }
});
