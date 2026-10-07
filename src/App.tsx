import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Cairo, sans-serif', direction: 'rtl', padding: '40px', textAlign: 'center' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>منصة ض - تيسير النحو</h1>
        <p style={{ color: '#4b5563', fontSize: '1.2rem' }}>منصتكِ التعليمية المتقدمة لقواعد اللغة العربية</p>
      </header>
      <main style={{ background: '#f3f4f6', padding: '30px', borderRadius: '12px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: '#1f2937' }}>أهلاً بكِ يا دانا في منصتكِ!</h2>
        <p style={{ color: '#374151', marginTop: '10px' }}>تم إعداد وتجهيز المنصة بنجاح تام لتكون جاهزة لخدمة طلاب العلم وقواعد النحو.</p>
      </main>
    </div>
  );
}
