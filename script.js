document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default tautan

            const article = this.closest('article');
            const fullContent = article.querySelector('.content-full');
            const previewContent = article.querySelector('.content-preview');

            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                previewContent.style.display = 'none';
                this.textContent = 'Baca Lebih Sedikit'; // Ubah teks tombol
            } else {
                fullContent.style.display = 'none';
                previewContent.style.display = 'block';
                this.textContent = 'Baca Selengkapnya'; // Ubah teks tombol
            }
        });
    });
});
