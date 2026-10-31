import React from 'react';
import { ChevronLeft, Check, Copy, Clock } from 'lucide-react';
import { useContactPage } from './model/useContactPage';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigateToProducts?: (filter?: any) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateToProducts,
}) => {
  // Questions are always closed by default as requested
  const { openFaqId, copiedKey, toggleFaq, copyContact } = useContactPage();

  const handleCopy = (text: string, key: string) => {
    copyContact(key, text);
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'سفارشم کجاست و کی به دستم می‌رسه؟',
      answer:
        'ارسال سفارش‌ها در شهر تهران از طریق پیک اختصاصی ظرف ۲۴ تا ۴۸ ساعت کاری و برای سایر شهرهای کشور از طریق پست پیشتاز ظرف ۲ الی ۴ روز کاری صورت می‌گیرد. به محض تحویل بسته به مامور ارسال، کد رهگیری مرسوله برای شما پیامک خواهد شد.',
    },
    {
      id: 'faq-2',
      question: 'شرایط و قوانین مرجوعی کالا چیست؟',
      answer:
        'شما تا ۷ روز کاری پس از تحویل سفارش فرصت دارید تا در صورت عدم تطابق سایز یا سلیقه، درخواست تعویض یا مرجوعی خود را ثبت فرمایید. شرط پذیرش، دست‌نخورده بودن کالا، عدم استفاده و وجود تمام تگ‌ها و بسته‌بندی اصلی لنگه است.',
    },
    {
      id: 'faq-3',
      question: 'چطور درخواست تعویض یا مرجوعی ثبت کنم؟',
      answer:
        'کافی است شماره سفارش به همراه تصویر اتیکت لباس را در یکی از پیام‌رسان‌های پشتیبانی (تلگرام، واتس‌اپ یا بله) ارسال کنید. تیم ما هماهنگی‌های لازم جهت دریافت مرسوله و ارسال کالای جایگزین را انجام خواهد داد.',
    },
    {
      id: 'faq-4',
      question: 'آیا می‌تونم سفارشم رو تغییر بدم یا لغو کنم؟',
      answer:
        'تا قبل از آماده‌سازی نهایی و تحویل سفارش به واحد بسته‌بندی، امکان تغییر سایز، نشانی گیرنده یا لغو سفارش از طریق تماس یا پیام فوری به پشتیبانی وجود دارد.',
    },
    {
      id: 'faq-5',
      question: 'چطور سایز مناسب خودم رو انتخاب کنم؟',
      answer:
        'در صفحه هر محصول، جدول راهنمای اندازه با جزئیات کامل بر حسب سانتی‌متر (عرض سینه، سرشانه، قد آستین و طول لباس) آورده شده است. اگر همچنان در انتخاب سایز مردد هستید، قد و وزن خود را از طریق تلگرام یا واتس‌اپ برای پشتیبان‌های ما ارسال کنید تا بهترین سایز را به شما پیشنهاد دهند.',
    },
    {
      id: 'faq-6',
      question: 'کالکشن‌های تولید محدود و شارژ مجدد به چه صورت است؟',
      answer:
        'سیاست برند لنگه بر پایه تولید محدود و با امضای متمایز است تا لباس شما تن افراد زیادی دیده نشود؛ از این رو اکثر محصولات پس از اتمام موجودی بازتولید نخواهند شد. پیشنهاد می‌کنیم در زمان رونمایی هر دراپ، سفارش خود را نهایی کنید.',
    },
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen font-tommy selection:bg-[#171717] selection:text-white" dir="rtl">
      
      {/* Main Container */}
      <main className="max-w-[760px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24">
        
        {/* Page Header: Exactly matches AboutPage title size and subtle minimal styling */}
        <header className="mb-8 sm:mb-10 text-center">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 block mb-3 sm:mb-4"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            پشتیبانی لنگه • LENGEH
          </span>
          <h1
            className="text-[16px] sm:text-[19px] font-medium tracking-tight text-[#171717] leading-relaxed"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            اول سوالات رو بخون
          </h1>
          <div className="w-8 h-[1px] bg-[#171717] mx-auto mt-3.5" />
        </header>

        {/* SECTION 1: FAQ Cards (Individual rounded cards matching user reference photo) */}
        <section className="mb-14 sm:mb-16">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white border rounded-[10px] transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#171717] shadow-sm'
                      : 'border-neutral-200/90 hover:border-neutral-400 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between gap-4 text-right cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[12px] sm:text-[12.5px] transition-colors leading-relaxed ${
                        isOpen ? 'font-semibold text-black' : 'font-medium text-neutral-900 group-hover:text-black'
                      }`}
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow chevron pointing left in RTL matching the reference card arrow */}
                    <span className="shrink-0 transition-transform duration-200">
                      <ChevronLeft
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen
                            ? '-rotate-90 text-black'
                            : 'text-neutral-400 group-hover:text-neutral-700'
                        }`}
                      />
                    </span>
                  </button>

                  {/* Expanded Answer */}
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-3.5 pt-1 text-[11.5px] sm:text-[12px] text-neutral-600 leading-[2.2] font-normal border-t border-neutral-100 animate-in fade-in duration-200"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      <p className="pt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Exact Persian Working Hours Prompt & Social Channels Box */}
        <section className="mb-14 sm:mb-16">
          
          {/* Header Title & Working Hours */}
          <div className="mb-5 sm:mb-6 text-right">
            <h3
              className="text-[14px] sm:text-[15.5px] font-semibold text-[#171717] leading-snug"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              اگر جواب سوالت رو پیدا نکردی، ما هستیم که جوابت رو بدیم
            </h3>

            {/* Working Hours Badge */}
            <div className="inline-flex items-center gap-2 mt-2.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-[#171717] text-[11px] sm:text-[11.5px] font-normal">
              <Clock className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              <span style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                تمام روزهای هفته ۹:۰۰ صبح الی ۹:۰۰ شب
              </span>
            </div>
          </div>

          {/* 4 Requested Channels Box in exact order matching reference photo: واتس‌اپ, تلگرام, بله, اینستاگرام */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            
            {/* 1. واتس‌اپ (WhatsApp) */}
            <div className="bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group overflow-hidden">
              <div className="py-3.5 px-4 sm:px-5 flex items-center justify-between gap-3">
                <a
                  href="https://wa.me/989120000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 text-right cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-[#171717] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[12px] sm:text-[12.5px] font-semibold text-neutral-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      واتس‌اپ (WhatsApp)
                    </span>
                    <span className="text-[10.5px] text-neutral-500 font-mono" dir="ltr">
                      +98 912 000 0000
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy('+989120000000', 'wa')}
                    className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                    title="کپی شماره واتس‌اپ"
                  >
                    {copiedKey === 'wa' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://wa.me/989120000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all p-1"
                    title="باز کردن واتس‌اپ"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. تلگرام (Telegram) */}
            <div className="bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group overflow-hidden">
              <div className="py-3.5 px-4 sm:px-5 flex items-center justify-between gap-3">
                <a
                  href="https://t.me/lengeh_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 text-right cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-[#171717] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[12px] sm:text-[12.5px] font-semibold text-neutral-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      تلگرام (Telegram)
                    </span>
                    <span className="text-[10.5px] text-neutral-500 font-mono" dir="ltr">
                      @lengeh_support
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy('@lengeh_support', 'tg')}
                    className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                    title="کپی آیدی تلگرام"
                  >
                    {copiedKey === 'tg' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://t.me/lengeh_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all p-1"
                    title="باز کردن تلگرام"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. بله (Bale) */}
            <div className="bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group overflow-hidden">
              <div className="py-3.5 px-4 sm:px-5 flex items-center justify-between gap-3">
                <a
                  href="https://ble.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 text-right cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-[#171717] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.82.83 5.446 2.26 7.649L2.5 29.5l6.096-1.713A13.935 13.935 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 4.5c5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-1.986 0-3.834-.61-5.362-1.654l-.423-.288-3.715 1.044 1.043-3.618-.29-.434A9.458 9.458 0 0 1 6.5 16c0-5.247 4.253-9.5 9.5-9.5zm-3.5 5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-4.5v-4.5A1.5 1.5 0 0 0 12.5 11.5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[12px] sm:text-[12.5px] font-semibold text-neutral-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      پیام‌رسان بله (Bale)
                    </span>
                    <span className="text-[10.5px] text-neutral-500 font-mono" dir="ltr">
                      ble.ir/lengeh_support
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy('ble.ir/lengeh_support', 'bale')}
                    className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                    title="کپی آیدی بله"
                  >
                    {copiedKey === 'bale' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://ble.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all p-1"
                    title="باز کردن بله"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4. اینستاگرام (Instagram) */}
            <div className="bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group overflow-hidden">
              <div className="py-3.5 px-4 sm:px-5 flex items-center justify-between gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 text-right cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-[#171717] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[12px] sm:text-[12.5px] font-semibold text-neutral-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      اینستاگرام (Instagram)
                    </span>
                    <span className="text-[10.5px] text-neutral-500 font-mono" dir="ltr">
                      @lengeh.studio
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy('@lengeh.studio', 'ig')}
                    className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                    title="کپی آیدی اینستاگرام"
                  >
                    {copiedKey === 'ig' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all p-1"
                    title="باز کردن اینستاگرام"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

