import React from "react";

function Contact() {
  return (
    <main className="page">
      <h1>تواصل معنا</h1>

      <form className="contact-form">
        <input placeholder="الاسم" />
        <input placeholder="الهاتف" />
        <textarea placeholder="رسالتك"></textarea>
        <button>إرسال</button>
      </form>
    </main>
  );
}

export default Contact;
