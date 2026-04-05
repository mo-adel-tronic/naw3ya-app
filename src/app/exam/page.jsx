"use client";

import { useState } from 'react';

export default function ExamPage() {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "ما هي نقطة الانطلاق الإلزامية لتشغيل الكود في لغة Dart؟ [cite: 3]",
      options: ["الدالة print()", "الدالة main()", "الدالة start()"],
      correct: 1
    },
    {
      question: "أي من التالي يُعتبر من معايير واجهة المستخدم في تصميم التطبيقات؟ [cite: 3]",
      options: [
        "إمكانية تشغيل التطبيق دون اتصال",
        "استخدام المساحات البيضاء للتركيز على المحتوى",
        "تسجيل التطبيق في متجر جوجل"
      ],
      correct:0
    },
    {
      question: 'يتم بناء مواقع الويب باستخدام .......',
      options: [
        "java",
        "HTML",
        "visual basic"
      ],
      correct: 1
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let currentScore = 0;
    
    questions.forEach((q, index) => {
      if (parseInt(formData.get(`q${index}`)) === q.correct) {
        currentScore += 1;
      }
    });

    setScore(currentScore);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">اختبار تقييم المعرفة</h1>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-bold text-lg mb-4">{q.question}</h3>
              <div className="space-y-2">
                {q.options.map((opt, optIndex) => (
                  <label key={optIndex} className="flex items-center space-x-3 space-x-reverse cursor-pointer">
                    <input type="radio" name={`q${qIndex}`} value={optIndex} required className="form-radio h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            إرسال الإجابات
          </button>
        </form>
      ) : (
        <div className="text-center py-10 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-2">اكتمل الاختبار!</h2>
          <p className="text-lg">نتيجتك هي: {score} من {questions.length}</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
            إعادة الاختبار
          </button>
        </div>
      )}
    </div>
  );
}