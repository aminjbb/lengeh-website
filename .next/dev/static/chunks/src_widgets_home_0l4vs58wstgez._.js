(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/widgets/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$HeroVisual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/HeroVisual.tsx [app-client] (ecmascript)");
;
;
const HeroSection = ({ onShopNowClick, onCloserLookClick, onQuickAdd })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero-section",
        className: "relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-end overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$HeroVisual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroVisual"], {
                onQuickAdd: onQuickAdd,
                onOpenCloserLook: onCloserLookClick
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/HeroSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-lg mx-auto px-5 pb-8 sm:pb-12 text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        id: "hero-title",
                        className: "font-tommy text-[20px] text-white font-medium tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-2 sm:mb-2.5",
                        style: {
                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                            fontWeight: 500,
                            fontSize: '20px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                        },
                        children: "کالکشن پاییزه لنگه"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/HeroSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "hero-description",
                        className: "font-tommy text-[11px] text-white font-light text-center leading-relaxed max-w-xs sm:max-w-md mx-auto mb-5 sm:mb-6 tracking-normal",
                        style: {
                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                            fontWeight: 300,
                            fontSize: '11px',
                            textShadow: '0 1px 6px rgba(0,0,0,0.95)'
                        },
                        children: "متولد از اشتیاق برای پوشاک روزمره بااصالت، پلی میان سادگی مینیمال و وقار چشم‌نواز."
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/HeroSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "hero-shop-now-btn",
                                onClick: onShopNowClick,
                                className: "w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '12px'
                                },
                                children: "خرید آنلاین"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/HeroSection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "hero-closer-look-btn",
                                onClick: onCloserLookClick,
                                className: "w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '12px'
                                },
                                children: "مشاهده جزئیات"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/HeroSection.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/home/HeroSection.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/home/HeroSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/home/HeroSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/HeroVisual.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroVisual",
    ()=>HeroVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const HeroVisual = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 w-full h-full overflow-hidden select-none bg-[#524233] flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full",
                style: {
                    background: `
            radial-gradient(ellipse at 50% 40%, rgba(109, 92, 76, 0.65) 0%, rgba(86, 70, 55, 0.95) 60%, rgba(46, 36, 28, 1) 100%)
          `
                }
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/HeroVisual.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full w-full max-w-[620px] aspect-[9/16] flex items-center justify-center pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/Homepage_Mobile_137d3140-2bc8-427c-8786-a93a5532047a.jpg",
                    alt: "Kith Fall 2026 Editorial Model",
                    referrerPolicy: "no-referrer",
                    className: "w-full h-full object-cover object-top select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]",
                    onError: (e)=>{
                        const target = e.currentTarget;
                        if (!target.src.includes('hero-campaign.jpg')) {
                            target.src = '/hero-campaign.jpg';
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/widgets/home/HeroVisual.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/HeroVisual.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/HeroVisual.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/HeroVisual.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/home/HeroVisual.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroVisual;
var _c;
__turbopack_context__.k.register(_c, "HeroVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/ProductLookbookCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALL_LOOKS_DATA",
    ()=>FALL_LOOKS_DATA,
    "ProductLookbookCards",
    ()=>ProductLookbookCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$04$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/looks/fall26-look-04.jpg.mjs { IMAGE => "[project]/src/assets/looks/fall26-look-04.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$05$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/looks/fall26-look-05.jpg.mjs { IMAGE => "[project]/src/assets/looks/fall26-look-05.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/looks/look-3.jpg.mjs { IMAGE => "[project]/src/assets/looks/look-3.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/looks/look-1.jpg.mjs { IMAGE => "[project]/src/assets/looks/look-1.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const FALL_LOOKS_DATA = [
    {
        id: 'lengeh-look-01',
        title: 'هودی زیپ‌دار ضخیم شریدان',
        subtitle: 'لوک ۰۱ — هودی بافت سنگین و شلوار راه‌راه',
        price: 295,
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$04$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$04$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'خاکی شسته‌شده / زغالی راه‌راه',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$05$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$fall26$2d$look$2d$05$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'سرمه‌ای تیره / اسپرسو / ملانژ',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'زیتونی خاکی / استخوانی / زنگاری',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$looks$2f$look$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'شتری ماسه‌ای / زغالی',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
const ProductLookbookCards = ({ onQuickShop, onOpenQuickView })=>{
    _s();
    const [activeHoverId, setActiveHoverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const convertToProduct = (item)=>({
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
            fabric: item.fabric
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lookbook-product-cards-section",
        className: "w-full bg-white py-6 sm:py-8 md:py-12 px-3 sm:px-5 md:px-8 border-t border-neutral-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "product-cards-grid",
                className: "grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6",
                children: FALL_LOOKS_DATA.map((card, idx)=>{
                    const product = convertToProduct(card);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `product-card-${idx + 1}`,
                        className: "group relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 rounded-none overflow-hidden cursor-pointer select-none",
                        onClick: ()=>onOpenQuickView(product),
                        onMouseEnter: ()=>setActiveHoverId(card.id),
                        onMouseLeave: ()=>setActiveHoverId(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.image,
                                alt: card.title,
                                loading: "lazy",
                                className: "w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                                lineNumber: 144,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                id: `card-shopping-bag-btn-${idx + 1}`,
                                "aria-label": `Shop ${card.title}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onQuickShop(product);
                                },
                                className: "absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer",
                                title: "Shop This Look",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 stroke-[1.6]"
                                }, void 0, false, {
                                    fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                                    lineNumber: 166,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, card.id, true, {
                        fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                        lineNumber: 135,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/widgets/home/ProductLookbookCards.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductLookbookCards, "RIViJV0tq69FgOAdjZCPW0gfXLU=");
_c = ProductLookbookCards;
var _c;
__turbopack_context__.k.register(_c, "ProductLookbookCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/WomenHeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WomenHeroSection",
    ()=>WomenHeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$women$2d$hero$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$women$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/women/women-hero.jpg.mjs { IMAGE => "[project]/src/assets/women/women-hero.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
const WomenHeroSection = ({ onShopNowClick, onCloserLookClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "women-hero-section",
        className: "relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-end overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full overflow-hidden select-none bg-[#46392a] flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$women$2d$hero$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$women$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "LENGEH Women Fall Editorial",
                        referrerPolicy: "no-referrer",
                        className: "w-full h-full object-cover object-[center_35%] select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]",
                        onError: (e)=>{
                            const target = e.currentTarget;
                            if (!target.src.includes('/women/women-hero.jpg')) {
                                target.src = '/women/women-hero.jpg';
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-lg mx-auto px-5 pb-8 sm:pb-12 text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "women-hero-title",
                        className: "font-tommy text-[20px] text-white font-medium tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-2 sm:mb-2.5",
                        style: {
                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                            fontWeight: 500,
                            fontSize: '20px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                        },
                        children: "کالکشن پاییزه زنانه لنگه"
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "women-hero-description",
                        className: "font-tommy text-[11px] text-white font-light text-center leading-relaxed max-w-xs sm:max-w-md mx-auto mb-5 sm:mb-6 tracking-normal",
                        style: {
                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                            fontWeight: 300,
                            fontSize: '11px',
                            textShadow: '0 1px 6px rgba(0,0,0,0.95)'
                        },
                        children: "متولد از اشتیاق برای پوشاک روزمره بااصالت، پلی میان سادگی مینیمال و وقار چشم‌نواز."
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "women-hero-shop-now-btn",
                                onClick: onShopNowClick,
                                className: "w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '12px'
                                },
                                children: "خرید آنلاین"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "women-hero-closer-look-btn",
                                onClick: onCloserLookClick,
                                className: "w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '12px'
                                },
                                children: "مشاهده جزئیات"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/home/WomenHeroSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WomenHeroSection;
var _c;
__turbopack_context__.k.register(_c, "WomenHeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/WomenLookbookCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WOMEN_FALL_LOOKS_DATA",
    ()=>WOMEN_FALL_LOOKS_DATA,
    "WomenLookbookCards",
    ()=>WomenLookbookCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/women/look-1.jpg.mjs { IMAGE => "[project]/src/assets/women/look-1.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/women/look-2.jpg.mjs { IMAGE => "[project]/src/assets/women/look-2.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/women/look-3.jpg.mjs { IMAGE => "[project]/src/assets/women/look-3.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/women/look-4.jpg.mjs { IMAGE => "[project]/src/assets/women/look-4.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
const WOMEN_FALL_LOOKS_DATA = [
    {
        id: 'lengeh-women-look-01',
        title: 'پالتو پشمی دبل‌برست مدیسون',
        subtitle: 'لوک ۰۱ — پشم ویرجین ایتالیا و فلانل دست‌دوز',
        price: 545,
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'قهوه‌ای اسپرسو / زیتونی جنگلی',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'شتری طوسی / کرم ملانژ',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'کهربایی کنیاک / زیتونی تیره',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$women$2f$look$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        colorway: 'زغالی تیره / طوسی ملانژ',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
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
const WomenLookbookCards = ({ onQuickShop, onOpenQuickView })=>{
    const convertToProduct = (item)=>({
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
            fabric: item.fabric
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "women-lookbook-product-cards-section",
        className: "w-full bg-white py-6 sm:py-8 md:py-12 px-3 sm:px-5 md:px-8 border-t border-neutral-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "women-product-cards-grid",
                className: "grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6",
                children: WOMEN_FALL_LOOKS_DATA.map((card, idx)=>{
                    const product = convertToProduct(card);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `women-product-card-${idx + 1}`,
                        className: "group relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 rounded-none overflow-hidden cursor-pointer select-none",
                        onClick: ()=>onOpenQuickView(product),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.image,
                                alt: card.title,
                                loading: "lazy",
                                className: "w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                                onError: (e)=>{
                                    const target = e.currentTarget;
                                    if (!target.src.includes(`/women/look-${idx + 1}.jpg`)) {
                                        target.src = `/women/look-${idx + 1}.jpg`;
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                                lineNumber: 153,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                id: `women-card-shopping-bag-btn-${idx + 1}`,
                                "aria-label": `Shop ${card.title}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onQuickShop(product);
                                },
                                className: "absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer",
                                title: "Shop This Look",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-neutral-900 stroke-[1.6]"
                                }, void 0, false, {
                                    fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                                    lineNumber: 167,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                                lineNumber: 156,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, card.id, true, {
                        fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                        lineNumber: 132,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/widgets/home/WomenLookbookCards.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WomenLookbookCards;
var _c;
__turbopack_context__.k.register(_c, "WomenLookbookCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/** Public widget API for the home route family. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$ProductLookbookCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/ProductLookbookCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$WomenHeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/WomenHeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$WomenLookbookCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/WomenLookbookCards.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_widgets_home_0l4vs58wstgez._.js.map