// Reliable pure static loader
const components = {
    nav: `
        <nav>
            <a href="#about">About</a>
            <a href="#media">Media</a>
            <a href="#gallery">Gallery</a>
            <a href="#calendar">Calendar</a>
            <a href="#contact">Booking/Contact</a>
            <a href="epk.html">EPK</a>
        </nav>
    `,
    header: `
        <header>
            <img src="images/bsLogoColorTransparent.gif" alt="Black Secrets Logo" class="imagecontainer">
            <p><img src="images/bsNameColorTransparent.png" alt="Black Secrets Name" class="imagecontainer"></p>
            <p><img src="images/ATributeToAliceInChainsEaterFontTransparant.png" alt="A Tribute to Alice in Chains" class="imagecontainer"></p>
        </header>
    `,
    footer: `
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
        </footer>
    `
};

function insertComponent(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    insertComponent('nav-placeholder', components.nav);
    insertComponent('header-placeholder', components.header);
    insertComponent('footer-placeholder', components.footer);
});
