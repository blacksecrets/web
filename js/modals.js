function openModal(modalId) {
	document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
	document.getElementById(modalId).style.display = 'none';
}


document.querySelectorAll('.video-container').forEach(container => {
	const thumbnail = container.querySelector('.thumbnail');
	const videoPlayer = container.querySelector('.video-player');
	const closeBtn = container.querySelector('.close-btn');
	const iframe = videoPlayer.querySelector('iframe');

	thumbnail.addEventListener('click', () => {
		thumbnail.style.display = 'none';
		videoPlayer.style.display = 'block';
		container.classList.add('active');
	});

	closeBtn.addEventListener('click', () => {
		videoPlayer.style.display = 'none';
		thumbnail.style.display = 'block';
		container.classList.remove('active');
		// Reset iframe to stop video
		const src = iframe.src;
		iframe.src = '';
		iframe.src = src.replace('?autoplay=1', '');
	});
});



// Close modal when clicking outside the image
window.onclick = function(event) {
	if (event.target.classList.contains('modal')) {
		event.target.style.display = 'none';
	}
}
