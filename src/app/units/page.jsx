import Link from 'next/link';

export default function UnitsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-8">الوحدات الدراسية</h1>
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* بطاقة الوحدة الأولى */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden border-r-4 border-r-blue-500 border-y border-l border-gray-100">
          
          {/* 1. صورة الرأس */}
          <div className="h-48 w-full bg-blue-50 relative">
            {/* تم استخدام صورة نائبة (Placeholder) كمثال، يمكنك استبدال الرابط بمسار الصورة الخاصة بك في مجلد public */}
            <img 
              src="/images/1.jpg" 
              alt="تطبيقات الهواتف الذكية" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 grow flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">الموضوع الأول: مقدمة عن تطبيقات الهواتف الذكية</h2>
            <p className="text-gray-600 mb-6 grow">تعرف على مفهوم التطبيقات، مراحل إنتاجها، ومعايير تصميمها.</p>
            
            {/* 3. تحويل الرابط إلى زر */}
            <Link href="/unit1" className="bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition w-max flex items-center gap-2">
              عرض الوحدة
              <span dir="ltr">←</span>
            </Link>
          </div>
        </div>

        {/* بطاقة الوحدة الثانية */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden border-r-4 border-r-green-500 border-y border-l border-gray-100">
          
          {/* 1. صورة الرأس */}
          <div className="h-48 w-full bg-green-50 relative">
            <img 
              src="https://placehold.co/600x400/f0fdf4/14532d?text=أساسيات+Dart" 
              alt="أساسيات البرمجة بلغة Dart" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 grow flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">الموضوع الثاني: أساسيات البرمجة بلغة Dart</h2>
            <p className="text-gray-600 mb-6 grow">مقدمة في لغة Dart، أنواع البيانات، المتغيرات، والمشغلات.</p>
            
            {/* 3. تحويل الرابط إلى زر متناسق مع لون الجانب */}
            <Link href="/unit2" className="bg-green-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-green-700 transition w-max flex items-center gap-2">
              عرض الوحدة
              <span dir="ltr">←</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}