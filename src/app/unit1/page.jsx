import Link from 'next/link';

export default function Unit1Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">الموضوع الأول: مقدمة عن تطبيقات الهواتف الذكية</h1>
      <p className="text-lg text-gray-700 mb-8">
        في هذه الوحدة سنتعرف على الأسس النظرية لتطبيقات الهواتف الذكية، بدءاً من المفهوم وحتى مراحل الإنتاج ومعايير التصميم[cite: 3].
      </p>
      
      <div className="space-y-4">
        <Link href="/unit1/lesson1" className="block bg-white p-5 rounded-lg shadow border-r-4 border-blue-500 hover:bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800">الدرس الأول: المفهوم ومراحل الإنتاج</h3>
          <p className="text-gray-600 mt-2">دراسة مفهوم تطبيقات الهواتف الذكية والخطوات السبع لإنتاجها.</p>
        </Link>

        <Link href="/unit1/lesson2" className="block bg-white p-5 rounded-lg shadow border-r-4 border-green-500 hover:bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800">الدرس الثاني: معايير تصميم التطبيقات</h3>
          <p className="text-gray-600 mt-2">معايير قابلية الاستخدام، واجهة المستخدم، وتجربة المستخدم.</p>
        </Link>
      </div>
    </div>
  );
}