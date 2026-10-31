import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import look4Image from '../../assets/looks/fall26-look-04.jpg';
import look5Image from '../../assets/looks/fall26-look-05.jpg';
import look3Image from '../../assets/looks/look-3.jpg';
import look1Image from '../../assets/looks/look-1.jpg';

export interface LookbookCardItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  altImage?: string;
  colorway: string;
  sizes: string[];
  description: string;
  fabric: string;
  details: string[];
}

export const FALL_LOOKS_DATA: LookbookCardItem[] = [
  {
    id: 'lengeh-look-01',
    title: 'هودی زیپ‌دار ضخیم شریدان',
    subtitle: 'لوک ۰۱ — هودی بافت سنگین و شلوار راه‌راه',
    price: 295,
    image: look4Image.src,
    colorway: 'خاکی شسته‌شده / زغالی راه‌راه',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'هودی زیپ‌دار ۵۰۰ گرمی با لایه داخلی پرزدار ضخیم به همراه ژیله عایق‌دار و شلوار پشمی پیلی‌دار راه‌راه ایتالیایی.',
    fabric: '۱۰۰٪ کتان سنگین بافت لوپ‌بک و پشم خالص ویرجین ایتالیا',
    details: [
      'فلیس متراکم ۵۰۰ گرمی با فینیش نرم',
      'زیپ دوطرفه نقره‌ای اکسلا با سرزیپ اختصاصی',
      'شلوار دو پیلی راه‌راه با پشم خالص ایتالیا',
      'ست‌شده با کلاه کلاسیک و کیف چرم دوشی دست‌ساز'
    ]
  },
  {
    id: 'lengeh-look-02',
    title: 'ژاکت بمبر ورسیتی لترمن آرشیوی',
    subtitle: 'لوک ۰۲ — ورسیتی پشم و چرم با شلوار کارگو',
    price: 595,
    image: look5Image.src,
    colorway: 'سرمه‌ای تیره / اسپرسو / ملانژ',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'ژاکت ورسیتی پشمی ملتون اصیل با آستین‌ها و یقه چرم بره لطیف، نشان برجسته شنیل روی سینه و دکمه‌های فشاری فلزی.',
    fabric: 'پشم ملتون سنگین، چرم طبیعی بره، دنیم پنبه‌ای',
    details: [
      'بدنه پشم ملتون ۵۲۰ گرمی با چرم طبیعی بره',
      'نشان دست‌دوز شنیل روی سینه',
      'لایه زیرین پیراهن کار با دنیم سلویج طوسی',
      'شلوار کارگوی کژوال با پارچه توئیل سنگین'
    ]
  },
  {
    id: 'lengeh-look-03',
    title: 'بمبر ورسیتی استادیوم ملتون',
    subtitle: 'لوک ۰۳ — بمبر آرشیوی و کیف چرمی دوشی',
    price: 475,
    image: look3Image.src,
    colorway: 'زیتونی خاکی / استخوانی / زنگاری',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'ژاکت گرمابخش پشمی ملتون با آستین‌های رگلان استخوانی متضاد، کشبافت راه‌راه و کیف دوشی چرم طبیعی دست‌بافت ناپا.',
    fabric: 'پشم ملتون سنگین، چرم دست‌بافت طبیعی',
    details: [
      'بدنه گرم عایق ۵۲۰ گرم پشم ملتون',
      'آستین‌های چرم طبیعی گوساله فوق‌العاده لطیف',
      'کشبافت راه‌راه ضخیم در یقه، مچ و لبه پایین',
      'همراه با اکسسوری کیف دوشی چرم بافت ایتالیا'
    ]
  },
  {
    id: 'lengeh-look-04',
    title: 'ست بلوزون پشم-پنبه و شلوار پیلی‌دار',
    subtitle: 'لوک ۰۴ — بلوزون یقه گسترده و شلوار پشمی',
    price: 345,
    image: look1Image.src,
    colorway: 'شتری ماسه‌ای / زغالی',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'بلوزون پاییزی ساختاریافته از ترکیب پشم و پنبه دو رو با یقه گسترده و خطوط معماری روی سینه، ست‌شده با شلوار پشمی پیلی‌دار.',
    fabric: '۶۵٪ پشم طبیعی، ۳۵٪ پنبه ارگانیک',
    details: [
      'پارچه پشم-پنبه متراکم ۴۸۰ گرم',
      'زیپ دوطرفه نقره‌ای Excella',
      'درز افقی ارگونومیک با خروجی‌های هوای پنهان',
      'ایستایی راسته کلاسیک با پیلی‌های ظریف'
    ]
  }
];

interface ProductLookbookCardsProps {
  onQuickShop: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const ProductLookbookCards: React.FC<ProductLookbookCardsProps> = ({
  onQuickShop,
  onOpenQuickView,
}) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const convertToProduct = (item: LookbookCardItem): Product => ({
    id: item.id,
    name: item.title,
    subtitle: item.subtitle,
    category: 'outerwear',
    price: item.price,
    colorway: item.colorway,
    image: item.image,
    badge: 'Fall Collection',
    sizes: item.sizes,
    description: item.description,
    details: item.details,
    fabric: item.fabric,
  });

  return (
    <section
      id="lookbook-product-cards-section"
      className="w-full bg-white py-6 sm:py-8 md:py-12 px-3 sm:px-5 md:px-8 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* 4 Product Cards Grid matching the attached photo: 2 columns on mobile and desktop */}
        <div
          id="product-cards-grid"
          className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6"
        >
          {FALL_LOOKS_DATA.map((card, idx) => {
            const product = convertToProduct(card);

            return (
              <div
                key={card.id}
                id={`product-card-${idx + 1}`}
                className="group relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 rounded-none overflow-hidden cursor-pointer select-none"
                onClick={() => onOpenQuickView(product)}
                onMouseEnter={() => setActiveHoverId(card.id)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* Lookbook Editorial Model Photo */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle dark vignette on bottom edge for button contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating White Circular Button with Minimalist Shopping Bag Icon */}
                <button
                  type="button"
                  id={`card-shopping-bag-btn-${idx + 1}`}
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

