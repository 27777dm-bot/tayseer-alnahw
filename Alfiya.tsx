import React, { useState } from 'react';

export default function ALfiya() {
  const [currentPage, setCurrentPage] = useState<'home' | 'alfiya'>('home');

  // بيانات أبيات ألفية ابن مالك مع الشرح وروابط البحث التلقائي المرئي
  const alfiyaVerses = [
    {
      id: 1,
      verse: "كَلَامُنَا لَفْظٌ مُفِيدٌ كَاسْتَقِمْ ** وَاسْمٌ وَفِعْلٌ ثُمَّ حَرْفٌ الكَلِمْ",
      explanation: "الشرح الموجز: يوضح الإمام ابن مالك أن الكلام في اصطلاح النحاة هو اللفظ المركب المفيد فائدة يحسن السكوت عليها، وأنه ينقسم إلى ثلاثة أقسام: اسم، وفعل، وحرف.",
      searchQuery: "شرح بيت كلامنا لفظ مفيد كاستقم ابن عقيل"
    },
    {
      id: 2,
      verse: "وَوَاحِدٌ وَكِلْمَةٌ بِهَا كَلَمْ ** وَزُمْمَةُ الكَلِمَةِ قَوْلٌ عَمَّ",
      explanation: "الشرح الموجز: الكلمة هي اللفظ المفرد، وقد تطلق على الكلم المراد به الجملة المفيدة مجازاً، وأما القول فهو أعم الشروط لأنه يشمل المفرد والمركب.",
      searchQuery: "شرح وواحِدٌ وكلمة بها كلم ابن مالك"
    },
    {
      id: 3,
      verse: "بِالرَّسْمِ وَالتَّنْوِينِ وَالنِّدَا وَأَلْ ** وَحُسْنِ إِسْنَادٍ لِلأَسْمِ تَمْيِيزٌ حَصَلْ",
      explanation: "الشرح الموجز: يذكر الناظم علامات الاسم التي تميزه عن الفعل والحرف، وهي: الجر، التنوين، النداء، دخول أل التعريف، والإسناد إليه.",
      searchQuery: "شرح بالرسم والتنوين والندا والل ابن مالك"
    }
  ];

  // إذا كان المستخدم في الصفحة الرئيسية
  if (currentPage === 'home') {
    return (
      <div style={{ 
        backgroundColor: '#faf8f5', 
        minHeight: '100vh', 
        padding: '40px 20px', 
        fontFamily: 'inherit', 
        direction: 'rtl',
        color: '#3d352e' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2c2520', marginBottom: '10px' }}>
              موقع ضاد لتيسير النحو
            </h1>
            <p style={{ fontSize: '14px', color: '#7a6e62' }}>الأبواب والسنوات الدراسية والشروح المعتمدة</p>
          </header>

          {/* شبكة الأبواب والسنوات الدراسية مع إضافة باب شرح ألفية ابن مالك بنفس الطراز */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            
            {/* زر شرح ألفية ابن مالك المضاف حديثاً بنفس الطراز تماماً */}
            <div 
              onClick={() => setCurrentPage('alfiya')}
              style={{
                border: '1px solid #d4c5b9',
                borderRadius: '8px',
                padding: '24px',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '13px', color: '#8c7a6b', fontWeight: '600' }}>باب خاص</span>
                <span style={{ fontSize: '18px' }}>📚</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#3d352e', marginBottom: '8px' }}>
                شرح ألفية ابن مالك
              </h3>
              <p style={{ fontSize: '12px', color: '#7a6e62', lineHeight: '1.5' }}>
                الأبواب النحوية المتقدمة مع الشرح والشروحات المرئية.
              </p>
            </div>

            {/* باقي الأبواب أو السنوات الافتراضية يمكن أن توضع هنا بنفس الطريقة */}
          </div>
        </div>
      </div>
    );
  }

  // صفحة شرح ألفية ابن مالك المنفردة والمصممة بالتفصيل
  return (
    <div style={{ 
      backgroundColor: '#faf8f5', 
      minHeight: '100vh', 
      padding: '40px 20px', 
      fontFamily: 'inherit', 
      direction: 'rtl',
      color: '#3d352e' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* زر العودة للرئيسية */}
        <button 
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none',
            border: '1px solid #d4c5b9',
            padding: '6px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '30px',
            fontSize: '13px',
            color: '#594d42',
            fontWeight: '600'
          }}
        >
          ← العودة للرئيسية
        </button>

        {/* عنوان الباب بخط كبير وبنفس طراز الموقع */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: '#2c2520' }}>
            ألفية ابن مالك
          </h1>
          {/* تعريف المؤلف والشارح أسفل العنوان */}
          <p style={{ fontSize: '14px', color: '#7a6e62', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto' }}>
            نظمها الإمام الحافظ محمد جمال الدين ابن مالك الأندلسي، وقام بشرحها وإيضاح قواعدها العلامة ابن عقيل — لتكون المرجع الأساسي الرصين لطلبة النحو العربي.
          </p>
        </div>

        {/* قائمة الأبيات والشروحات التفصيلية بالترتيب */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {alfiyaVerses.map((item) => (
            <div 
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e2db',
                borderRadius: '10px',
                padding: '28px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.01)',
              }}
            >
              {/* البيت الشعري بالحركات وبخط واضح ومميز */}
              <p style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#1a1512', 
                marginBottom: '16px', 
                textAlign: 'center',
                letterSpacing: '0.5px',
                lineHeight: '1.6'
              }}>
                {item.verse}
              </p>

              {/* الشرح الموجز للبيت */}
              <p style={{ 
                fontSize: '14px', 
                color: '#594d42', 
                lineHeight: '1.9', 
                marginBottom: '20px',
                backgroundColor: '#faf8f5',
                padding: '14px 18px',
                borderRadius: '6px',
                borderRight: '3px solid #b5a495'
              }}>
                {item.explanation}
              </p>

              {/* زر الشروحات المرئية أسفل كل بيت */}
              <div style={{ textAlign: 'left' }}>
                <a 
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.searchQuery)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '8px 18px',
                    backgroundColor: '#f2ede4',
                    color: '#3d352e',
                    border: '1px solid #d4c5b9',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  عرض الشروحات المرئية 🎥
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
