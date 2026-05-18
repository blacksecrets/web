
// =============================================
// MAIN INITIALIZER - RELIABLE VERSION
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Black Secrets site initialized');

    // === SHARED COMPONENTS ===
    const navPlaceholder = document.getElementById('nav-placeholder');
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
            <nav>
                <a href="#about">About</a>
                <a href="#media">Media</a>
                <a href="#gallery">Gallery</a>
                <a href="#calendar">Calendar</a>
                <a href="#contact">Booking/Contact</a>
                <a href="epk.html">EPK</a>
            </nav>`;
    }

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <img src="images/bsLogoColorTransparent.gif" alt="Black Secrets Logo" class="imagecontainer">
                <p><img src="images/bsNameColorTransparent.png" alt="Black Secrets Name" class="imagecontainer"></p>
                <p><img src="images/ATributeToAliceInChainsEaterFontTransparant.png" alt="A Tribute to Alice in Chains" class="imagecontainer"></p>
            </header>`;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <table width="100%" style="border-collapse: collapse; background-color: rgba(0, 0, 0, 0.8); color: #fff;">
                    <tr>
                        <td>&copy; 2025 Black Secrets. All rights reserved.</td>
                        <td>
                            <a href="https://www.facebook.com/61556445512513" target="_blank"><img src="images/facebookLinkImageSmall.png" alt="Facebook" class="logo"></a>
                            <a href="https://www.youtube.com/@BlackSecretsBand" target="_blank"><img src="images/youtubeLinkImageSmall.png" alt="Youtube" class="logo"></a>
                        </td>
                    </tr>
                </table>
            </footer>`;
    }

    // === DYNAMIC SECTIONS ===
    if (document.getElementById('dynamic-about')) {
        document.getElementById('dynamic-about').innerHTML = renderAbout();
    }
    if (document.getElementById('dynamic-media')) {
        document.getElementById('dynamic-media').innerHTML = renderMedia();
    }
    if (document.getElementById('dynamic-gallery')) {
        document.getElementById('dynamic-gallery').innerHTML = renderGallery();
    }
    if (document.getElementById('dynamic-calendar')) {
        document.getElementById('dynamic-calendar').innerHTML = renderCalendar();
    }
});

// =============================================
// GLOBAL ESC KEY SUPPORT - ALL SECTIONS
// =============================================

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" || e.key === "Esc") {

        // 1. Close Gallery + About modals
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = "none";
        });

        // 2. Close Media Modal (the important one)
        const mediaModal = document.getElementById('media-modal');
        if (mediaModal) {
            mediaModal.style.display = 'none';

            // Clear the player to stop audio
            const playerContainer = document.getElementById('modal-player');
            if (playerContainer) {
                playerContainer.innerHTML = '';
            }
        }

        // 3. Close any Calendar modals
        document.querySelectorAll('.calendar-modal').forEach(modal => {
            modal.style.display = "none";
        });

        console.log('✅ Esc key pressed - All closed');
    }
});
