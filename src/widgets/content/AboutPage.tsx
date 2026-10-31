import React from 'react';

interface AboutPageProps {
  onNavigateHome?: () => void;
  onNavigateToProducts?: (filter?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-tommy selection:bg-[#171717] selection:text-white" dir="rtl">
      
      {/* Main Editorial Page Container */}
      <main className="max-w-[76ch] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-24">
        
        {/* Page Title: Centered, clean, understated uppercase/title */}
        <header className="mb-10 sm:mb-14 text-center">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 block mb-5 sm:mb-6"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            درباره لنگه • LENGEH
          </span>
          <h1
            className="text-[16px] sm:text-[19px] font-medium tracking-tight text-[#171717] leading-relaxed"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            داستان ما؛ قصه‌ی سه تا رفیق و یک دغدغه‌ی مشترک
          </h1>
          <div className="w-8 h-[1px] bg-[#171717] mx-auto mt-3.5" />
        </header>

        {/* Prose / Editorial Content */}
        <article
          className="text-right text-[12px] sm:text-[13px] text-neutral-700 leading-[2.2] font-normal space-y-5 sm:space-y-6"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
        >
          <p className="text-neutral-900 font-normal text-[13px] sm:text-[14px]">
            راستش ماجرا از همون روزمرگی‌های آشنا شروع شد. ما سه تا دوستیم که مثل خیلی از شما، هر روز صبح کارت می‌زدیم، می‌نشستیم پشت سیستم و بعدازظهر هم با خستگیِ مسیر برمی‌گشتیم خونه.
          </p>

          <p className="text-neutral-900 font-medium border-r-2 border-[#171717] pr-3 text-[13px]">
            اما بین همه‌ی این دویدن‌ها، یه چیز همیشه برامون مهم بود: چیزی که می‌پوشیم.
          </p>

          <p>
            ما جزو اون دسته‌ای بودیم که دوست داشتیم استایل روزمره‌مون شبیه بقیه نباشه؛ نه این‌که بخوایم عجیب‌وغریب و بیش از حد شلوغ بپوشیم، نه! دنبال یک تعادل بودیم: مینیمال، خاص و در عین حال راحت. دل‌مون می‌خواست لباسی که تن‌مون می‌کنیم، زبان بی‌صدای حال‌وهوامون باشه، هویت داشته باشه و پشتش یه داستان درست‌ودرمون بنشینه که خودمون باورش داریم.
          </p>

          <p>
            از طرفی خسته شده بودیم از لباس‌های تولید انبوه که می‌رفتی توی خیابون و تن ده نفر دیگه هم می‌دیدی؛ لباسی می‌خواستیم که حس کنی واقعاً برای خودِ تو ساخته شده، نه یک بازار چند هزار نفری. و البته مهم‌تر از همه: <span className="text-neutral-950 font-medium">قیمتش منطقی باشه!</span> قرار نیست برای یک تیپ روزمره و کژوال، هزینه‌ی لباس شب و مهمونی داد.
          </p>

          <p>
            دیدیم چیزی که دنبالشیم توی بازار یا نیست، یا اگر هست با معیارهای ما جور درنمیاد. این شد که دست‌به‌کار شدیم و <strong className="font-semibold text-black">«لنگه»</strong> متولد شد.
          </p>

          <p>
            ما در لنگه لباس‌هایی با تعداد محدود و با امضای مشخص تولید می‌کنیم تا خیالت راحت باشه لباسی که می‌پوشی شبیه بقیه نیست. ما اینجا تیشرت و لباس نمی‌فروشیم، داریم حس‌وحال، داستان و هویت مشترک‌مون رو باهات شریک می‌شیم.
          </p>

          {/* Last element on the page */}
          <div className="pt-5 border-t border-neutral-100">
            <p className="text-[13px] sm:text-[14px] font-medium text-[#171717] leading-relaxed">
              خوشحالیم که اینجایی. لنگه‌ی خودت رو تنت کن و بیا با هم این شهر خاکستری رو قشنگ‌تر کنیم.
            </p>
          </div>
        </article>

      </main>

    </div>
  );
};

