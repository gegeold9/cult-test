const puppeteer = require('puppeteer');

// URL referral Anda
const referralUrl = 'http://cult.world?r=nclapwjv2yoq';

(async () => {
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // Set true jika tidak ingin melihat browser terbuka
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Buka halaman baru
  const page = await browser.newPage();

  try {
    // Buka URL referral
    await page.goto(referralUrl, { waitUntil: 'networkidle2' });

    console.log('Halaman referral berhasil dibuka!');

    // Tunggu beberapa detik (opsional)
    await page.waitForTimeout(5000);

    // Contoh: Klik tombol atau lakukan tindakan tertentu
    // Misalnya, jika ada tombol "Daftar" atau "Join"
    // await page.click('button[text="Daftar"]');

    console.log('Tindakan referral berhasil dilakukan!');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  } finally {
    // Tutup browser
    await browser.close();
  }
})();
