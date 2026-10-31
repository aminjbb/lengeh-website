import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import womenLook1Image from '../../assets/women/look-1.jpg';
import womenLook2Image from '../../assets/women/look-2.jpg';
import womenLook3Image from '../../assets/women/look-3.jpg';
import womenLook4Image from '../../assets/women/look-4.jpg';

export interface WomenLookbookCardItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  colorway: string;
  sizes: string[];
  description: string;
  fabric: string;
  details: string[];
}

export const WOMEN_FALL_LOOKS_DATA: WomenLookbookCardItem[] = [
  {
    id: 'lengeh-women-look-01',
    title: 'پالتو پشمی دبل‌برست مدیسون',
    subtitle: 'لوک ۰۱ — پشم ویرجین ایتالیا و فلانل دست‌دوز',
    price: 545,
    image: womenLook1Image.src,
    colorway: 'قهوه‌ای اسپرسو / زیتونی جنگلی',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'پالتوی بلند دبل‌برست دوخته‌شده از پارچه پشمی ملتون ویرجین ۵۸۰ گرمی ایتالیا با یقه‌های نوک‌تیز کشیده، شانه‌های ساختارمند و جیب‌های عمیق فیلتابی.',
    fabric: '۱۰۰٪ پشم خالص ویرجین ملتون ایتالیا با آستر کوپرو بمبرگ',
    details: [
      'پشم سفارشی ۵۸۰ گرمی ملتون ایتالیا',
      'دکمه‌های شاخ طبیعی دبل‌برست با یقه نوک‌تیز شاهانه',
      'آستر ضدالکتریسیته کوپرو بمبرگ برای تن‌پوش روان',
      'چاک بلند پشت برای آزادی حرکت و وقار گام‌ها'
    ]
  },
  {
    id: 'lengeh-women-look-02',
    title: 'کت کوتاه ژاکارد کراپ کوروین',
    subtitle: 'لوک ۰۲ — ژاکارد بافت‌دار و شلوار پیلی‌دار لخت',
    price: 425,
    image: womenLook2Image.src,
    colorway: 'شتری طوسی / کرم ملانژ',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'سیلوئت مدرن و کراپ با پارچه متراکم ژاکارد فایله با گلدوزی دست‌خط هم‌رنگ و یقه برگردان ایستاده، همراه با شلوار پیلی‌دار لخت با ریزش دلنشین.',
    fabric: 'ترکیب ژاکارد فایله ساختاریافته و بافت انترلاک براش',
    details: [
      'پارچه ژاکارد فایله با تراکم و دوام بسیار بالا',
      'زیپ مخفی دوطرفه در جلو با نقاب دکمه‌های فشاری',
      'گلدوزی ظریف برند لنگه در لبه پایینی سمت چپ',
      'شلوار فاق‌بلند و آزاد با پیلی‌های نرم'
    ]
  },
  {
    id: 'lengeh-women-look-03',
    title: 'ژاکت موتورسواری جیر پالسا',
    subtitle: 'لوک ۰۳ — جیر لطیف گوساله ایتالیا و بافت کشمیر',
    price: 685,
    image: womenLook3Image.src,
    colorway: 'کهربایی کنیاک / زیتونی تیره',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'ژاکت بایکر لوکس برش‌خورده از چرم جیر مخملی گوساله ایتالیایی با یراق‌آلات نیکل صیقلی، جیب‌های زیپ‌دار مایل و کشبافت‌های پشمی متراکم.',
    fabric: '۱۰۰٪ چرم جیر طبیعی ایتالیا و ۱۰۰٪ کشمیر مغولستان',
    details: [
      'چرم جیر طبیعی ایتالیایی با سطح لطیف مخملی',
      'زیپ‌های نیکل سنگین با سرزیپ‌های چرم طبیعی',
      'جیب زیپ‌دار کج روی سینه و دو جیب کناری اسلاید',
      'کشبافت طوفان پشم طبیعی در مچ و لبه پایین'
    ]
  },
  {
    id: 'lengeh-women-look-04',
    title: 'ژاکت ورسیتی ملتون کمبل',
    subtitle: 'لوک ۰۴ — پشم ملتون گرم و دامن پیلی‌دار',
    price: 495,
    image: womenLook4Image.src,
    colorway: 'زغالی تیره / طوسی ملانژ',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'ژاکت بلوزون ورسیتی سفارشی از پشم ملتون سنگین با کشبافت‌های مینیمال و بست‌های فشاری مخفی، ست‌شده با دامن مینی پیلی‌دار پشمی و بوت‌های چرمی.',
    fabric: 'پشم ملتون ۵۲۰ گرمی و بافت پشمی مارلد',
    details: [
      'بدنه گرم ۵۲۰ گرم ملتون با سرشانه‌های افتاده مدرن',
      'دکمه‌های فشاری مینیمال با روکش لعابی مشکی مات',
      'برش پیلی‌های چاقویی در پارچه پشمی لوکس',
      'ست‌شده با بوت‌های چرم واکس‌خورده دست‌ساز سوارکاری'
    ]
  }
];

interface WomenLookbookCardsProps {
  onQuickShop: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const WomenLookbookCards: React.FC<WomenLookbookCardsProps> = ({
  onQuickShop,
  onOpenQuickView,
}) => {
  const convertToProduct = (item: WomenLookbookCardItem): Product => ({
    id: item.id,
    name: item.title,
    subtitle: item.subtitle,
    category: 'outerwear',
    price: item.price,
    colorway: item.colorway,
    image: item.image,
    badge: 'Women Fall Collection',
    sizes: item.sizes,
    description: item.description,
    details: item.details,
    fabric: item.fabric,
  });

  return (
    <section
      id="women-lookbook-product-cards-section"
      className="w-full bg-white py-6 sm:py-8 md:py-12 px-3 sm:px-5 md:px-8 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* 4 Women Editorial Cards Grid: exact same 2-column grid format */}
        <div
          id="women-product-cards-grid"
          className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6"
        >
          {WOMEN_FALL_LOOKS_DATA.map((card, idx) => {
            const product = convertToProduct(card);

            return (
              <div
                key={card.id}
                id={`women-product-card-${idx + 1}`}
                className="group relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 rounded-none overflow-hidden cursor-pointer select-none"
                onClick={() => onOpenQuickView(product)}
              >
                {/* Lookbook Editorial Model Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes(`/women/look-${idx + 1}.jpg`)) {
                      target.src = `/women/look-${idx + 1}.jpg`;
                    }
                  }}
                />

                {/* Subtle dark vignette on bottom edge for button contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating White Circular Button with Minimalist Shopping Bag Icon */}
                <button
                  type="button"
                  id={`women-card-shopping-bag-btn-${idx + 1}`}
                  aria-label={`Shop ${card.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickShop(product);
                  }}
                  className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                  title="Shop This Look"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 stroke-[1.6]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

