import React, { useState } from 'react';

export default function AlFiya() {
    const [currentPage, setCurrentPage] = useState<'home' | 'alfiya'>('home');

    // بيانات أبيات ألفية ابن مالك مع الشرح وروابط البحث التلقائي المرئي //
    const alfiyaVerses = [
        {
            id: 1,
            verse: "كَكَلاَمِنَا لَفْظٌ مُفِيدٌ كَاسْتَقِيمْ ... وَأَسْمٍ وَفِعْلٍ ثُمَّ حَرْفٍ الْكَلِمْ",
            explanation: "يوضح الإمام ابن مالك أن الكلام في اصطلاح النحاة هو اللفظ المركب المفيد فائدة يحسن السكوت عليها، وأنه ينقسم إلى ثلاثة أقسام: اسم، وفعل، وحرف.",
            searchQuery: "شرح بيت كلامنا لفظ مفيد كاستقيم وابن عقيل"
        },
        {
            id: 2,
            verse: "وَوَاحِدٌ كِلْمَةٌ بِهَا كَلَمْ ... وَزَأْمَمَةُ الْكَلِمَةِ قَوْلٌ عَمّْ",
            explanation: "الكلمة: هي اللفظ المفرد، وقد تطلق على الكلام المراد به الجملة المفيدة مجازاً، وأما القول فهو أعم الشروط لأنه يشمل المفرد والمركب.",
            searchQuery: "شرح واواحد كلمة بها كلم وابن مالك"
        },
        {
            id: 3,
            verse: "وَبِالرَّسْمِ وَالتَّنْوِينِ وَالْبَا وَأَنْ ... وَحُسْنِ إِسْنَادٍ لِلْاسْمِ تَمْيِيزٌ حَصَلْ",
            explanation: "وهي: الجر، التوين، النداء، دخول أل التعريف، والإسناد إليه.",
            searchQuery: "شرح بالرسم والتنوين والبا وأن واللَّل ابن مالك"
        }
    ];

    if (currentPage === 'home') {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>ألفية ابن مالك</h1>
                <p>مرحباً بكِ في واجهة شرح الألفية بمنصة ضاد</p>
                <button 
                    onClick={() => setCurrentPage('alfiya')}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                    استعرض الأبيات
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <button 
                onClick={() => setCurrentPage('home')}
                style={{ marginBottom: '1rem', padding: '5px 10px', cursor: 'pointer' }}
            >
                ← عودة للرئيسية
            </button>
            <h2>قائمة الأبيات والشروح</h2>
            {alfiyaVerses.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.verse}</p>
                    <p>{item.explanation}</p>
                    <a 
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.searchQuery)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#2563eb', textDecoration: 'underline' }}
                    >
                        شرح مرئي على اليوتيوب
                    </a>
                </div>
            ))}
        </div>
    );
}
