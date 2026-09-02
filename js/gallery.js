// =============================================
// GALLERY DATA - Easy to maintain
// =============================================

// `id` is a permanent slug, independent of thumb/full/alt - the crew
// dashboard's editor looks an image up by this, not by any of its other
// fields (same reasoning as the id field on gigs in calendar.js and
// media items in media.js).
const galleryImages = [
    {
        id: "backseat2025-3",
        thumb: "images/gallery/thumbs/Backseat2025 (3) thumb.jpg",
        full:  "images/gallery/Backseat2025 (3).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "backseat2025-4",
        thumb: "images/gallery/thumbs/Backseat2025 (4) thumb.jpg",
        full:  "images/gallery/Backseat2025 (4).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "backseat2025-8",
        thumb: "images/gallery/thumbs/Backseat2025 (8) thumb.jpg",
        full:  "images/gallery/Backseat2025 (8).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "backseat2025-1",
        thumb: "images/gallery/thumbs/Backseat2025 (1) thumb.jpg",
        full:  "images/gallery/Backseat2025 (1).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "backseat2024-2",
        thumb: "images/gallery/thumbs/Backseat2024 (2) thumb.jpg",
        full:  "images/gallery/Backseat2024 (2).jpg",
        alt:   "Backseat 2024"
    },
    {
        id: "backseat2024-3",
        thumb: "images/gallery/thumbs/Backseat2024 (3) thumb.jpg",
        full:  "images/gallery/Backseat2024 (3).jpg",
        alt:   "Backseat 2024"
    },
    {
        id: "backseat2024-4",
        thumb: "images/gallery/thumbs/Backseat2024 (4) thumb.jpg",
        full:  "images/gallery/Backseat2024 (4).jpg",
        alt:   "Backseat 2024"
    },
    {
        id: "backseat2024-5",
        thumb: "images/gallery/thumbs/Backseat2024 (5) thumb.jpg",
        full:  "images/gallery/Backseat2024 (5).jpg",
        alt:   "Backseat 2024"
    },
    {
        id: "backseat2025-21",
        thumb: "images/gallery/thumbs/Backseat2025 (21) thumb.jpg",
        full:  "images/gallery/Backseat2025 (21).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "backseat2025-22",
        thumb: "images/gallery/thumbs/Backseat2025 (22) thumb.jpg",
        full:  "images/gallery/Backseat2025 (22).jpg",
        alt:   "Backseat 2025"
    },
    {
        id: "laurenpix-15",
        thumb: "images/gallery/thumbs/LaurenPix (15) thumb.jpg",
        full:  "images/gallery/LaurenPix (15).jpg",
        alt:   "LaurenPix"
    },
    {
        id: "laurenpix-28",
        thumb: "images/gallery/thumbs/LaurenPix (28) thumb.jpg",
        full:  "images/gallery/LaurenPix (28).jpg",
        alt:   "LaurenPix"
    }
    // Add new gallery images above this line
];

// =============================================
// RENDER GALLERY FUNCTION
// =============================================

function renderGallery() {
    let html = `
        <section id="gallery">
            <h2>Gallery</h2>
            <div class="gallery2">
    `;

    galleryImages.forEach((img, index) => {
        const modalId = `modal${index + 1}`;
        html += `
            <img src="${img.thumb}" 
                 alt="${img.alt}" 
								loading="lazy"
                 onclick="openModal('${modalId}')">
        `;
    });

    html += `</div>`;   // End gallery2

    // Generate all modals
    galleryImages.forEach((img, index) => {
        const modalId = `modal${index + 1}`;
        html += `
        <div id="${modalId}" class="modal">
            <span class="close" onclick="closeModal('${modalId}')">&times;</span>
            <img class="modal-content" src="${img.full}" alt="${img.alt}">
        </div>`;
    });

    html += `</section>`;
    return html;
}

// Global functions for onclick handlers
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
};
