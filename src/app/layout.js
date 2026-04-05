import "./globals.css";

export const metadata = {
  title: "منصة تعلم البرمجة",
  description: "منصة تعليمية متكاملة لتعلم تطوير تطبيقات الهواتف الذكية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col">
        <nav className="bg-blue-700 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">منصة التعلم</h1>
            <ul className="flex gap-6 font-medium">
              <li><a href="/" className="hover:text-blue-200">الرئيسية</a></li>
              <li><a href="/about" className="hover:text-blue-200">حول المنصة</a></li>
              <li><a href="/units" className="hover:text-blue-200">الوحدات الدراسية</a></li>
              <li><a href="/exam" className="hover:text-blue-200">الاختبارات</a></li>
            </ul>
          </div>
        </nav>
        <main className="grow max-w-7xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p>© 2026 منصة التعلم الذكية. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  );
}