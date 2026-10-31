import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, X, MapPin, Mail } from 'lucide-react';
import type { ProductFilter } from '../../types';

interface SubmenuItem {
  id: string;
  label: string;
  type?: 'modal' | 'link' | 'action';
  url?: string;
}

interface FooterSection {
  id: string;
  title: string;
  submenus: SubmenuItem[];
}

interface FooterProps {
  onOpenCloserLook?: () => void;
  onSelectCategory?: (category: string) => void;
  onNavigateToProducts?: (filter?: ProductFilter) => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCloserLook,
  onNavigateToProducts,
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  // Inside LENGEH is open by default, exactly matching the expanded section
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'inside-lnegeh': true,
    'follow-us': false,
    'shop': false,
  });

  const [activeModal, setActiveModal] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections: FooterSection[] = [
    {
      id: 'inside-lnegeh',
      title: 'درباره لنگه',
      submenus: [
        { id: 'our-story', label: 'داستان ما', type: 'modal' },
        { id: 'contact-us', label: 'تماس با ما', type: 'modal' },
      ],
    },
    {
      id: 'follow-us',
      title: 'ما را دنبال کنید',
      submenus: [
        { id: 'instagram', label: 'اینستاگرام', type: 'link', url: 'https://instagram.com' },
        { id: 'twitter-x', label: 'توییتر / اکس', type: 'link', url: 'https://x.com' },
      ],
    },
    {
      id: 'shop',
      title: 'خرید کالکشن',
      submenus: [
        { id: 'fudoshin', label: 'فودوشین (Fudōshin)', type: 'action' },
        { id: 'natsukashi', label: 'ناتسوکاشی (Natsukashi)', type: 'action' },
        { id: 'chowa', label: 'چووا (Chōwa)', type: 'action' },
        { id: 'akatsuki-fuji', label: 'آکاتسوکی فوجی (Akatsuki Fuji)', type: 'action' },
      ],
    },
  ];

  const handleSubmenuClick = (sectionId: string, item: SubmenuItem) => {
    if (item.type === 'link' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.type === 'action') {
      if (onNavigateToProducts) {
        onNavigateToProducts({ collection: item.label });
      } else if (onOpenCloserLook) {
        onOpenCloserLook();
      }
      return;
    }

    // Modal dialogs or page navigation for story, contact, location
    if (item.id === 'our-story') {
      if (onNavigateToAbout) {
        onNavigateToAbout();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setActiveModal({
        title: 'داستان برند لنگه',
        content: (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light text-right">
            <p>
              برند لنگه متولد از اشتیاقی تزلزل‌ناپذیر برای آفرینش پوشاک روزمره بااصالت و پرمعنا است؛
              پلی میان سادگی بی‌روح و اغراق‌های گذرا.
            </p>
            <p>
              تمامی قطعات در استودیوی طراحی اختصاصی لنگه خلق شده و در تیراژهای محدود و انحصاری با همکاری کهن‌ترین کارخانجات نساجی در بیلا ایتالیا و واکایامای ژاپن به مرحله تولید می‌رسند. ما تعادلی پایدار میان خیاطی اصیل کلاسیک و خطوط کاربردی مدرن برقرار می‌سازیم.
            </p>
            <p className="italic text-neutral-500 text-sm">
              «اعتماد به نفس خاموش، از مسیر مهندسی بی‌نقص منسوجات.»
            </p>
          </div>
        ),
      });
    } else if (item.id === 'contact-us') {
      if (onNavigateToContact) {
        onNavigateToContact();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setActiveModal({
        title: 'تماس با پشتیبانی لنگه',
        content: (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light text-right">
            <p>
              تیم مشاوره و خدمات مشتریان لنگه همه‌روزه از ساعت ۹:۰۰ الی ۲۱:۰۰ پاسخگوی شما عزیزان است.
            </p>
            <div className="border-t border-b border-neutral-200 py-3 my-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-600" />
                <span className="font-medium text-black">concierge@lengeh.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-600" />
                <span>دفتر استودیو: ۰۲۱ - ۲۲۰۰۰۰۰۰</span>
              </div>
            </div>
          </div>
        ),
      });
    } else if (item.id === 'location') {
      setActiveModal({
        title: 'شعبه‌های اصلی و بوتیک‌های پرچمدار',
        content: (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light text-right">
            <div className="space-y-1">
              <h5 className="font-bold text-black text-xs">توکیو — شیبویا</h5>
              <p className="text-neutral-600 text-xs">۵-۷-۲۲ مینامی آئویاما، میناتو-کو، توکیو</p>
              <p className="text-[11px] text-neutral-400">همه‌روزه: ۱۱:۰۰ الی ۲۰:۰۰</p>
            </div>
            <div className="border-t border-neutral-200 pt-3 space-y-1">
              <h5 className="font-bold text-black text-xs">پاریس — سنت اونوره</h5>
              <p className="text-neutral-600 text-xs">خیابان سنت اونوره ۲۳۱، پاریس، فرانسه</p>
              <p className="text-[11px] text-neutral-400">دوشنبه تا شنبه: ۱۰:۳۰ الی ۱۹:۳۰</p>
            </div>
            <div className="border-t border-neutral-200 pt-3 space-y-1">
              <h5 className="font-bold text-black text-xs">نیویورک — سوهو</h5>
              <p className="text-neutral-600 text-xs">خیابان لافایت ۳۳۷، نیویورک</p>
              <p className="text-[11px] text-neutral-400">همه‌روزه: ۱۱:۰۰ الی ۱۹:۰۰</p>
            </div>
          </div>
        ),
      });
    }
  };

  return (
    <>
      <footer
        id="lengeh-accordion-footer"
        dir="rtl"
        className="w-full bg-[#f2f2f2] text-black border-t border-neutral-200/80 px-6 sm:px-10 py-10 sm:py-14 transition-colors font-tommy"
      >
        <div className="max-w-xl mx-auto">
          {/* Accordion list matching reference layout */}
          <div className="space-y-4 sm:space-y-4.5">
            {sections.map((section) => {
              const isOpen = !!openSections[section.id];

              return (
                <div
                  key={section.id}
                  id={`footer-section-${section.id}`}
                  className="accordion-item select-none"
                >
                  {/* Header row: 10px Bold Title on right/start, Chevron on left/end */}
                  <button
                    type="button"
                    id={`footer-toggle-${section.id}`}
                    aria-expanded={isOpen}
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-1 text-right cursor-pointer group focus:outline-none transition-opacity hover:opacity-80"
                  >
                    <span
                      className="text-[10px] font-bold text-[#333333]"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 700, fontSize: '10px', color: '#333333' }}
                    >
                      {section.title}
                    </span>

                    <span className="flex items-center justify-center w-3 h-3 text-[#555555]">
                      {isOpen ? (
                        <ChevronDown className="w-2.5 h-2.5 text-[#555555] stroke-[1.8]" />
                      ) : (
                        <ChevronLeft className="w-2.5 h-2.5 text-[#555555] stroke-[1.8]" />
                      )}
                    </span>
                  </button>

                  {/* Expanded Content: 10px regular subtitles followed by clean divider */}
                  {isOpen && (
                    <div
                      id={`footer-content-${section.id}`}
                      className="pt-2 animate-fadeIn"
                    >
                      <ul className="flex flex-col space-y-3 pt-2 pb-4 border-b border-[#333333]">
                        {section.submenus.map((item) => (
                          <li key={item.id}>
                            <button
                              type="button"
                              id={`footer-submenu-${section.id}-${item.id}`}
                              onClick={() => handleSubmenuClick(section.id, item)}
                              className="text-[10px] font-normal text-[#333333] hover:text-black text-right block w-full cursor-pointer transition-colors"
                              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 400, fontSize: '10px', color: '#333333' }}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Minimal Brand Signature at bottom */}
          <div className="pt-8 mt-6 text-[10px] sm:text-[10.5px] text-neutral-500 text-center font-tommy">
            <span>© ۲۰۲۶ تمامی حقوق برای برند لنگه (LENGEH) محفوظ است.</span>
          </div>
        </div>
      </footer>

      {/* Informational Modal for Submenu Clicks */}
      {activeModal && (
        <div
          dir="rtl"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 font-tommy"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 sm:p-8 rounded-none shadow-2xl relative border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 text-neutral-400 hover:text-black p-1 cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-[13px] font-bold text-black mb-4 pb-2 border-b border-neutral-200 text-right">
              {activeModal.title}
            </h3>
            {activeModal.content}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-start">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-black text-white text-[11px] font-bold px-5 py-2 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


