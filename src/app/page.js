export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-blue-800">مرحباً بك في منصة تعلم تطبيقات الهواتف
        
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        ابدأ رحلتك في عالم البرمجة وتطوير تطبيقات الهواتف الذكية باستخدام إطار عمل Flutter ولغة Dart.
      </p>
      <div className="flex gap-4 mt-8">
        <a href="/units" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          ابدأ التعلم الآن
        </a>
        <a href="/about" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
          تعرف علينا
        </a>
      </div>
    </div>
  );
}