// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Ambil elemen tombol
  const btnMessage = document.getElementById('btn-message');
  const btnGallery = document.getElementById('btn-gallery');
  const btnMusic = document.getElementById('btn-music');
  const btnTetris = document.getElementById('btn-tetris');
  const btnStart = document.querySelector('.btn-start');

  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const screenContent = document.getElementById('screen-content');

  // Fungsi untuk menutup modal
  function closeModal() {
    modalOverlay.classList.add('hidden');
    modalBody.innerHTML = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // START button: hanya clear layar dan tunjukkan menu (opsional)
  btnStart.addEventListener('click', () => {
    screenContent.innerHTML = `
      <div class="welcome-screen">
        <p>Select an option:</p>
        <p class="subtitle">Use MENU buttons below</p>
      </div>
    `;
  });

  // MESSAGE: Tampilkan ucapan/teks
  btnMessage.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    modalBody.innerHTML = `
      <h2>Pesan Spesial</h2>
      <p>Selamat ulang tahun! Semoga hari kamu menyenangkan dan penuh kejutan. 🎂🎉</p>
      <p>Semoga semua impianmu tercapai dan selalu diberikan kesehatan.</p>
    `;
  });

  // GALLERY: Tampilkan kumpulan gambar
  btnGallery.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    // Contoh: menampilkan beberapa gambar (pastikan path sesuai)
    modalBody.innerHTML = `
      <h2>Galeri Kenangan</h2>
      <div class="gallery-grid">
        <img src="assets/images/photo1.jpg" alt="Foto 1" />
        <img src="assets/images/photo2.jpg" alt="Foto 2" />
        <img src="assets/images/photo3.jpg" alt="Foto 3" />
        <!-- Tambahkan lebih banyak img sesuai kebutuhan -->
      </div>
    `;
  });

  // MUSIC: Memutar musik ulangtahun
  btnMusic.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    modalBody.innerHTML = `
      <h2>Play Music</h2>
      <audio controls autoplay>
        <source src="assets/audio/happy_birthday.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>
    `;
  });

  // TETRIS: Muat skrip Tetris (misal file tetris.js sudah tersedia)
  btnTetris.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    // Kita asumsikan ada folder assets/tetris dengan file index.html Tetris atau skrip JS
    modalBody.innerHTML = `
      <h2>Play Tetris</h2>
      <canvas id="tetris-canvas" width="240" height="400"></canvas>
      <p style="font-size:12px; color:#aaa; margin-top:8px;">Gunakan keyboard arrow untuk bergerak.</p>
    `;
    // Setelah elemen canvas muncul, kita jalankan fungsi inisialisasi Tetris
    initTetris('tetris-canvas');
  });

  // Contoh fungsi initTetris (Anda perlu membuat tetris.js terpisah)
  function initTetris(canvasId) {
    // Misalnya, kita load file tetris.js yang berisi logika game Tetris.
    // Di sini, anggap script Tetris sudah di-bundle dalam satu file tetris.js.
    const script = document.createElement('script');
    script.src = 'assets/tetris/tetris.js';
    script.onload = () => {
      // Panggil fungsi startGame() atau inisialisasi di tetris.js
      if (typeof startGame === 'function') {
        startGame(document.getElementById(canvasId));
      }
    };
    document.body.appendChild(script);
  }
});
