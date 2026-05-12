// =============================================
// ABOUT SECTION - CLEAN & MAINTAINABLE
// =============================================

const aboutContent = {
    intro: `
        <p><strong>Black Secrets</strong> is a tribute to the great <strong>Alice in Chains</strong>.
        Formed in 2024 in Winchester VA, they deliver an authentic and powerful recreation of the legendary Seattle sound.</p>
        
        <p>In a recent interview, guitarist Bobby Steelman stated "This has been a dream of mine, to find a group of talented musicians and put togther a show consisting of the early years of <strong>Alice in Chains</strong> music." </p>
        
        <p>All four members have a great love for, and are deeply inspired by, the original line up of <strong>Alice in Chains</strong>.
        They have incorporated the same elements of heavy metal music and tight harmonies.</p>
    `,

    members: [
        { name: "Reed Personius",  role: "Vocals", image: "images/Reed.jpg" },
        { name: "Bobby Steelman", role: "Guitar", image: "images/Bobby.jpg" },
        { name: "Rich Burns",     role: "Bass",   image: "images/Rich.jpg" },
        { name: "Zach Johnson",   role: "Drums",  image: "images/Zach.jpg" }
    ]
};

function renderAbout() {
    let html = `<section id="about"><h2>About the Band</h2>`;

    html += aboutContent.intro;

	  html += `<div class="member-grid">`;

    aboutContent.members.forEach(m => {
        html += `
            <div class="member-item">
                <img src="${m.image}"
									alt="${m.name}"
									class="stockimage" 
									loading="lazy" 
									onclick="openModalFromSrc('${m.image}')">
                <strong>${m.name}</strong><br>
                ${m.role}
            </div>`;
    });

    html += `</div>`;

    html += `
        <a href="https://www.facebook.com/wickedphotographybyjess" target="_blank">
            Photos courtesy of Wicked Photography by Jess
        </a>
    </section>`;

    return html;
}

// Click handler for member photos
window.openModalFromSrc = function(src) {
    const modalId = 'memberModal_' + Date.now();
    const modalHTML = `
        <div id="${modalId}" class="modal">
            <span class="close" onclick="closeModal('${modalId}')">&times;</span>
            <img class="modal-content" src="${src}">
        </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById(modalId).style.display = "flex";
};
