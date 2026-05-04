// توثيق: مصفوفة الملفات المطلوب تخزينها للعمل بدون إنترنت
const CACHE_NAME = 'ammar-survey-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './p1_survey.html',
  './p2_stakeout.html',
  './p3_db_manager.html',
  './p4_smart_search.html',
  './p4_session_manager.html',
  './manifest.json',
  './xlsx.full.min.js' // إضافة ملف الإكسل المحلي هنا
];

// مرحلة التثبيت: حفظ الملفات في ذاكرة المتصفح (Cache)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// مرحلة الجلب: استدعاء الملفات من الذاكرة بدلاً من الشبكة
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});