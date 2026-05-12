document.addEventListener('DOMContentLoaded', () => {
    // Shared components
    if (document.getElementById('nav-placeholder')) {
        // nav code from before
    }
    if (document.getElementById('header-placeholder')) {
        // header code from before
    }
    if (document.getElementById('footer-placeholder')) {
        // footer code from before
    }

    // Dynamic content
    if (document.getElementById('dynamic-about')) document.getElementById('dynamic-about').innerHTML = renderAbout();
    if (document.getElementById('dynamic-media')) document.getElementById('dynamic-media').innerHTML = renderMedia();
    if (document.getElementById('dynamic-gallery')) document.getElementById('dynamic-gallery').innerHTML = renderGallery();
    if (document.getElementById('dynamic-calendar')) document.getElementById('dynamic-calendar').innerHTML = renderCalendar();
});

// Suppress common third-party widget errors
window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('getImageData') ||
        e.filename && e.filename.includes('widget')) {
        e.stopImmediatePropagation();
        return false;
    }
}, true);
