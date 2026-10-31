import React from 'react';
import type { ProductFilter } from '../../types';
import { ChevronLeft, ArrowRight, ShieldCheck, Award, Sparkles, Feather, FileText, CheckCircle2, Bookmark, Box, Eye, Layers } from 'lucide-react';
import { toPersianDigits } from '../../utils/persianNumbers';
import { useCollectionStoryPage } from './model/useCollectionStoryPage';

interface CollectionStoryPageProps {
  onNavigateHome: () => void;
  onNavigateToProducts: (filter?: ProductFilter) => void;
}

export const CollectionStoryPage: React.FC<CollectionStoryPageProps> = ({
  onNavigateHome,
  onNavigateToProducts,
}) => {
  const { activeTab, setActiveTab } = useCollectionStoryPage();

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FDFBF7] text-neutral-900 font-tommy selection:bg-black selection:text-white"
      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
    >
      {/* 1. Sticky Editorial Top Bar */}
      <div className="bg-[#FDFBF7]/90 backdrop-blur-md border-b border-neutral-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-mono">
              LENGEH ATELIER ARCHIVE
            </span>
            <span className="text-neutral-300">•</span>
            <h1 className="text-xs sm:text-sm font-bold text-neutral-900">
              داستان کالکشن‌ها و شناسنامه اصالت
            </h1>
          </div>

          <button
            type="button"
            onClick={onNavigateHome}
            aria-label="بازگشت به صفحه اصلی"
            className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 hover:text-black py-1 px-2.5 border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <span>بازگشت به خانه</span>
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* 2. Hero Editorial Narrative Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-widest text-neutral-500 bg-neutral-100/90 border border-neutral-200/80 px-3 py-1 rounded-full mb-4">
          <Award className="w-3.5 h-3.5 text-neutral-700" />
          <span>تیراژ محدود • دست‌دوز • ثبت رسمی اصالت</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-snug sm:leading-tight mb-4">
          هر اثر، یک هویت اختصاصی
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
          در دنیای مد انبوه و سریع، ما در استودیو «لنگه» بر این باوریم که پوشاک شما باید به همان اندازه شما یکتا، اصیل و دارای هویت باشد. تمامی آثار کالکشن لنگه در تیراژهای به شدت محدود (Limited Edition) تولید می‌شوند و همراه با شناسنامه رسمی، شماره سریال انحصاری و پلمپ سنتی به شما تقدیم می‌گردند.
        </p>
      </div>

      {/* 3. The Physical Certificate of Authenticity (Interactive Visual Mockup) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="relative bg-[#FAF6EE] border-2 border-[#E5DECD] rounded-2xl p-5 sm:p-10 shadow-xl overflow-hidden">
          {/* Subtle Watermark Monogram */}
          <div className="absolute right-6 top-6 opacity-5 pointer-events-none select-none text-9xl font-serif text-black">
            L
          </div>

          {/* Certificate Inner Border Box */}
          <div className="border border-[#D8CEBA] p-5 sm:p-8 rounded-xl bg-[#FCFAF5]/80 relative backdrop-blur-xs">
            {/* Certificate Header */}
            <div className="text-center pb-5 border-b border-[#E0D7C5]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="w-6 h-px bg-neutral-400" />
                <span className="text-[10px] tracking-[0.25em] font-mono text-neutral-500 uppercase">
                  LENGEH ARCHIVE & ATELIER
                </span>
                <span className="w-6 h-px bg-neutral-400" />
              </div>

              <h3 className="text-base sm:text-xl font-bold text-neutral-900 tracking-wide mb-1">
                شناسنامه رسمی اصالت و مالکیت اثر
              </h3>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 font-mono tracking-wider">
                CERTIFICATE OF AUTHENTICITY & PROVENANCE
              </p>
            </div>

            {/* Serial Number & Limited Run Highlight Banner */}
            <div className="my-5 p-3 sm:p-4 bg-white/90 border border-[#E3D9C7] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <Bookmark className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block font-normal">
                    شماره انحصاری این قطعه در سراسر جهان
                  </span>
                  <span className="text-sm sm:text-base font-bold text-neutral-900 font-mono tracking-wide">
                    قطعه شماره {toPersianDigits(14)} از {toPersianDigits(50)} (LIMITED RUN: 14 / 50)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ثبت قطعی در بایگانی رسمی استودیو لنگه</span>
              </div>
            </div>

            {/* Certificate Field Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-xs pt-1">
              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">نام و مدل اثر:</span>
                <span className="font-bold text-neutral-900">پالتو دست‌دوز کالکشن پاییز ۲۰۲۶</span>
              </div>

              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">کد مرجع آرشیو:</span>
                <span className="font-bold text-neutral-900 font-mono">LNG-FALL26-0850</span>
              </div>

              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">متریال و پارچه:</span>
                <span className="font-semibold text-neutral-800">۱۰۰٪ پشم مرینوس ارگانیک با آستر ابریشم</span>
              </div>

              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">روش پرداخت و دوخت:</span>
                <span className="font-semibold text-neutral-800">برش دستی، کوک‌دوزی و فینیشینگ آتلیه</span>
              </div>

              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">تاریخ تکمیل اثر:</span>
                <span className="font-bold text-neutral-900 font-mono">مهرماه ۱۴۰۳ • OCTOBER 2026</span>
              </div>

              <div className="p-2.5 bg-[#F7F2E7]/60 border border-[#E6DDCA] rounded-md flex justify-between items-center">
                <span className="text-neutral-500 text-[11px]">تیراژ کل این طرح:</span>
                <span className="font-bold text-neutral-900">تنها ۵۰ نسخه در کل جهان (غیرقابل تکرار)</span>
              </div>
            </div>

            {/* Certificate Footer: Seals & Signatures */}
            <div className="mt-6 pt-5 border-t border-[#E0D7C5] flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Seal Stamp */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#B89B62] bg-[#FAF3E0] flex flex-col items-center justify-center text-center p-1 shadow-2xs rotate-[-8deg]">
                  <span className="text-[7.5px] uppercase font-bold text-[#8A7140] tracking-tighter">OFFICIAL SEAL</span>
                  <span className="text-[10px] font-bold text-[#645028]">LENGEH</span>
                  <span className="text-[7px] text-[#8A7140]">ARCHIVE</span>
                </div>
                <div className="text-right">
                  <span className="text-[10.5px] font-bold text-neutral-800 block">
                    مهر موم و اصالت کالا
                  </span>
                  <span className="text-[9.5px] text-neutral-500">
                    ضمانت اصالت فیزیکی و اعتبار مادام‌العمر
                  </span>
                </div>
              </div>

              {/* Signature */}
              <div className="text-center sm:text-left">
                <div className="font-serif italic text-base sm:text-lg text-neutral-800 tracking-wider">
                  Negin Asadi & Lengeh Atelier
                </div>
                <div className="w-36 h-px bg-neutral-300 mx-auto sm:ml-auto sm:mr-0 mt-1 mb-0.5" />
                <span className="text-[9.5px] text-neutral-400 block">
                  امضای دستی طراح و سرپرست آتلیه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Showcase of Artifacts (4 visual mockups of Certificate, Plaque, Wax Seal, Packaging) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10.5px] font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
            THE UNBOXING & PROVENANCE ARTIFACTS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
            اجزای شناسنامه و پکیجینگ که همراه لباستان دریافت می‌کنید
          </h3>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            با باز کردن جعبه اثر، تمام مدارک و المان‌های اصالت به صورت دسته‌بندی‌شده و مهر و موم شده پیش روی شما قرار می‌گیرد.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Certificate Paper */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div className="space-y-3">
              {/* Visual simulation of certificate paper */}
              <div className="aspect-[16/10] bg-[#FAF7F0] border border-[#E4DCB8] rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between border-b border-[#E3D8BA] pb-2">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#8A7140]" />
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">LENGEH CERTIFICATE</span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500">NO. 14 / 50</span>
                </div>
                <div className="space-y-1.5 py-2">
                  <div className="w-3/4 h-2 bg-[#EADFBE]/60 rounded" />
                  <div className="w-1/2 h-2 bg-[#EADFBE]/60 rounded" />
                  <div className="w-5/6 h-2 bg-[#EADFBE]/60 rounded" />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#E3D8BA]">
                  <span className="text-[9px] text-neutral-500">کاغذ کتان ۳۰۰ گرم دست‌ساز</span>
                  <div className="w-5 h-5 rounded-full bg-[#8A7140]/20 border border-[#8A7140] flex items-center justify-center text-[7px] text-[#8A7140] font-bold">
                    ✓
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  ۱. شناسنامه کتان با گرماژ بالا
                </h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  چاپ شده روی مقوای فابریانو کتان ۳۰۰ گرم با چاپ برجسته و الیاف طبیعی. روی شناسنامه نام کامل اثر، متریال، تاریخ تولید و شماره اختصاصی شما ثبت گردیده است.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1 text-[10px] text-neutral-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" />
              <span>همراه با امضای رسمی طراح با جوهر مخصوص بایگانی</span>
            </div>
          </div>

          {/* Card 2: Engraved Metal Serial Tag */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div className="space-y-3">
              {/* Visual simulation of brass/metallic engraved tag */}
              <div className="aspect-[16/10] bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="w-48 h-20 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFDF73]/40 to-[#B89428]/30 border border-[#D4AF37]/60 rounded-md p-3 flex flex-col justify-between shadow-lg text-center backdrop-blur-xs">
                  <div className="flex items-center justify-between text-[8px] text-neutral-300 font-mono">
                    <span>LENGEH ATELIER</span>
                    <span>EDITION</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white tracking-widest drop-shadow-sm">
                    № ۰۱۴ / ۰۵۰
                  </div>
                  <div className="text-[7.5px] text-neutral-400 font-mono tracking-tighter">
                    HAND-CRAFTED • TEHRAN
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  ۲. پلاک فلزی دست‌دوز با شماره سریال
                </h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  در آستر داخلی هر لباس، یک پلاک متالیک حکاکی‌شده با شماره نسخه شما با نخ موم‌زده دست‌دوزی شده است؛ تا هویت لیمیتد اثر همواره بر تن لباس جاودانه بماند.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1 text-[10px] text-neutral-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" />
              <span>ضدزنگ و مقاوم در برابر شست‌وشو و خشک‌شویی تخصصی</span>
            </div>
          </div>

          {/* Card 3: Traditional Wax Seal */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div className="space-y-3">
              {/* Visual simulation of Wax Seal */}
              <div className="aspect-[16/10] bg-neutral-100 border border-neutral-200 rounded-xl p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center shadow-xl relative group">
                    <div className="w-12 h-12 rounded-full border border-neutral-700/80 flex items-center justify-center">
                      <span className="text-base font-bold text-neutral-200 tracking-wider">
                        لنگه
                      </span>
                    </div>
                    <div className="absolute -bottom-2 w-8 h-4 bg-neutral-900 rounded-b-md shadow-xs" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-neutral-900 block">پلمپ سنتی با موم مشکی</span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">مهر شده با قالب دست‌ساز برنجی</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  ۳. موم‌پلمپ دست‌ساز و روبان ابریشمی
                </h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  بسته شناسنامه با روبان ابریشمی طبیعی بسته شده و با موم داغ مشکی و مهر برنجی لنگه پلمپ می‌شود تا حس گشایش یک اثر کلکسیونی و بی‌همتا را تداعی کند.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1 text-[10px] text-neutral-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" />
              <span>پلمپ اختصاصی نشان‌دهنده دست‌نخورده بودن قطعه قبل از شما</span>
            </div>
          </div>

          {/* Card 4: Archive Rigid Box */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div className="space-y-3">
              {/* Visual simulation of Archive Rigid Box */}
              <div className="aspect-[16/10] bg-[#161616] border border-neutral-800 rounded-xl p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="w-52 h-24 bg-neutral-900 border border-neutral-700/60 rounded-lg p-3 flex flex-col justify-between shadow-2xl relative">
                  <div className="text-[8px] tracking-[0.2em] text-neutral-400 font-mono text-center">
                    LENGEH ARCHIVE BOX
                  </div>
                  <div className="text-center font-bold text-xs text-white tracking-widest">
                    L E N G E H
                  </div>
                  <div className="flex justify-between items-center text-[7.5px] text-neutral-500 font-mono">
                    <span>ACID-FREE TISSUE</span>
                    <span>DUST-PROOF</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  ۴. جعبه آرشیو لوکس (Hard Box)
                </h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  هر لباس به همراه کاغذ بدون اسید محافظ، درون جعبه سخت مات با نشان داغی لنگه قرار می‌گیرد تا برای سال‌های متمادی در کمد لباستان محافظت شود.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1 text-[10px] text-neutral-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800" />
              <span>همراه با کاور پارچه‌ای اختصاصی برای نگهداری و سفر</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. The 3 Golden Rules of Lengeh Limited Collections */}
      <div className="bg-white border-y border-neutral-200/80 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-lg mx-auto mb-10">
            <span className="text-[10.5px] font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
              OUR UNCOMPROMISING COMMITMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              سه اصل خدشه‌ناپذیر کالکشن‌های لنگه
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-right">
            <div className="space-y-2 p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto sm:mr-0 mb-3">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                ۱. هرگز بازتولید نمی‌شود
              </h4>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                زمانی که آخرین قطعه از ۵۰ نسخه یک طرح به فروش برسد، آن مدل برای همیشه بایگانی شده و تحت هیچ شرایطی تکرار نخواهد شد.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto sm:mr-0 mb-3">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                ۲. ثبت رسمی شماره سریال
              </h4>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                شماره سریال شناسنامه لباس در دیتابیس مشتریان ثبت می‌گردد تا در آینده اصالت و قدمت لباس شما قابل استعلام و تأیید باشد.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto sm:mr-0 mb-3">
                <Feather className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                ۳. پارچه‌های خاص و دست‌چین
              </h4>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                پارچه‌های طبیعی، دکمه‌های طبیعی استخوانی و شاخ، و دوخت‌های دست‌دوز با وسواس هنرمندانه برای خلق اثری با دوام چنددهه‌ای انتخاب می‌شوند.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-base sm:text-lg font-bold text-neutral-900 text-center mb-6">
          پرسش‌های متداول درباره شناسنامه و تیراژ محدود
        </h3>

        <div className="space-y-3 text-right">
          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h4 className="text-xs font-bold text-neutral-900 mb-1.5">
              آیا می‌توانم شماره سریال خاصی (مثلاً عدد تولد یا رُند) را انتخاب کنم؟
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              سفارش‌ها به ترتیب ثبت، شماره‌گذاری و ارسال می‌شوند. در صورت تمایل به دریافت شماره خاص، می‌توانید پس از ثبت سفارش با پشتیبانی اختصاصی لنگه در تماس باشید تا در صورت آزاد بودن آن شماره، روی سفارش شما تنظیم گردد.
            </p>
          </div>

          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h4 className="text-xs font-bold text-neutral-900 mb-1.5">
              در صورت مفقود شدن شناسنامه چه اتفاقی می‌افتد؟
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              از آنجا که پلاک فلزی شماره‌دار داخل لباس دوخته شده و اطلاعات شما در پرونده مشتریان لنگه ذخیره است، با اعلام شماره تماس سفارش امکان صدور المثنی با مهر آرشیو وجود دارد.
            </p>
          </div>

          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h4 className="text-xs font-bold text-neutral-900 mb-1.5">
              بسته‌بندی ارسالی شامل چه اقلامی است؟
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              لباس دست‌دوز، شناسنامه اصالت کتان با شماره اختصاصی، پلاک متالیک دوخته‌شده در لباس، جعبه سخت آرشیو، موم‌پلمپ لنگه و کاور مخصوص ضد گردوغبار به همراه هدیه اختصاصی کالکشن.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Bottom Call to Action */}
      <div className="bg-neutral-900 text-white py-12 sm:py-16 text-center">
        <div className="max-w-md mx-auto px-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono block mb-2">
            DISCOVER THE LIMITED PIECES
          </span>
          <h3 className="text-lg sm:text-2xl font-bold mb-3">
            آثار لیمیتد کالکشن جدید را کاوش کنید
          </h3>
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
            تعداد محدود برای کسانی که زیبایی را در جزئیات و اصالت جست‌وجو می‌کنند.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                onNavigateToProducts({ gender: 'all' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-neutral-100 font-bold text-xs transition-colors cursor-pointer rounded-lg shadow-sm"
            >
              مشاهده و خرید کالکشن‌ها
            </button>
            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-6 py-3 border border-neutral-700 hover:border-white text-white font-medium text-xs transition-colors cursor-pointer rounded-lg"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
