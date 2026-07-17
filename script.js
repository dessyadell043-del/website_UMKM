// ===========================================
// KARYA NUSANTARA — script.js
// ===========================================

// Toggle menu navigasi di layar kecil (mobile)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Filter produk berdasarkan kategori (khusus produk.html)
  var filterButtons = document.querySelectorAll('.filter-btn');
  var productCards = document.querySelectorAll('[data-category]');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var target = btn.getAttribute('data-filter');

      productCards.forEach(function (card) {
        if (target === 'semua' || card.getAttribute('data-category') === target) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Validasi sederhana form kontak (khusus kontak.html)
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nama = document.getElementById('nama').value.trim();
      var email = document.getElementById('email').value.trim();
      var pesan = document.getElementById('pesan').value.trim();

      if (!nama || !email || !pesan) {
        msg.textContent = 'Mohon lengkapi semua kolom terlebih dahulu ya.';
        msg.style.color = '#F2542D';
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        msg.textContent = 'Format email belum valid, coba periksa lagi.';
        msg.style.color = '#F2542D';
        return;
      }

      // Catatan: form ini belum terhubung ke server/email.
      // Untuk fungsi kirim sungguhan, hubungkan ke layanan seperti
      // Formspree, atau backend sendiri saat sudah di-hosting.
      msg.textContent = 'Terima kasih, ' + nama + '! Pesan kamu berhasil terkirim (simulasi).';
      msg.style.color = '#12897D';
      form.reset();
    });
  }
});
