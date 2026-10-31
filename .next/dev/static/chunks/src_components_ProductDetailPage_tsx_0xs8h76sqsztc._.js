(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProductDetailPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailPage",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/persianNumbers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ProductDetailPage = ({ product: initialProduct, currency: _currency, onBack, onAddToCart, onUpdateQuantity, onRemoveItem, cartItems, onSelectProduct, garderobIds, onToggleGarderob })=>{
    _s();
    // Fallback to the classic cashmere crew knit if no product provided
    const currentProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[currentProduct]": ()=>{
            if (initialProduct) return initialProduct;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].find({
                "ProductDetailPage.useMemo[currentProduct]": (p)=>p.id === 'lengeh-cashmere-crew-knit'
            }["ProductDetailPage.useMemo[currentProduct]"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"][0];
        }
    }["ProductDetailPage.useMemo[currentProduct]"], [
        initialProduct
    ]);
    // Selected size state (default to first size or 'S')
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProductDetailPage.useState": ()=>{
            if (currentProduct.sizes?.includes('S')) return 'S';
            return currentProduct.sizes?.[0] || 'S';
        }
    }["ProductDetailPage.useState"]);
    // Accordion open states (closed by default matching reference image)
    const [openAccordion, setOpenAccordion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Size guide modal state
    const [isSizeGuideOpen, setIsSizeGuideOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lightbox modal state
    const [lightboxImage, setLightboxImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Cart item quantity for current product and selected size
    const cartItemForCurrentSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[cartItemForCurrentSize]": ()=>{
            return cartItems?.find({
                "ProductDetailPage.useMemo[cartItemForCurrentSize]": (item)=>item.product.id === currentProduct.id && item.selectedSize === selectedSize
            }["ProductDetailPage.useMemo[cartItemForCurrentSize]"]);
        }
    }["ProductDetailPage.useMemo[cartItemForCurrentSize]"], [
        cartItems,
        currentProduct.id,
        selectedSize
    ]);
    const currentQuantity = cartItemForCurrentSize?.quantity || 0;
    // Added-to-cart temporary button feedback state
    const [isShowingToastFeedback, setIsShowingToastFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const feedbackTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            return ({
                "ProductDetailPage.useEffect": ()=>{
                    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
                }
            })["ProductDetailPage.useEffect"];
        }
    }["ProductDetailPage.useEffect"], []);
    // Active image index for mobile carousel
    const [activeImageIndex, setActiveImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Ref and visibility state for main inline "Add to Bag" button
    const mainAddToCartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMainButtonVisible, setIsMainButtonVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Observe whether the inline "Add to Bag" button is currently in the viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            const target = mainAddToCartRef.current;
            if (!target) return;
            const observer = new IntersectionObserver({
                "ProductDetailPage.useEffect": ([entry])=>{
                    setIsMainButtonVisible(entry.isIntersecting);
                }
            }["ProductDetailPage.useEffect"], {
                root: null,
                threshold: 0.1
            });
            observer.observe(target);
            return ({
                "ProductDetailPage.useEffect": ()=>observer.disconnect()
            })["ProductDetailPage.useEffect"];
        }
    }["ProductDetailPage.useEffect"], [
        currentProduct.id
    ]);
    // Ref and drag-scroll state for Similar Products row
    const similarScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPointerDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pointerStartXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pointerStartScrollLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasDraggedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Wheel listener: enables horizontal scroll with mouse wheel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            const el = similarScrollRef.current;
            if (!el) return;
            const onWheel = {
                "ProductDetailPage.useEffect.onWheel": (e)=>{
                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                        e.preventDefault();
                        // In RTL, scrolling wheel down (deltaY > 0) scrolls left towards subsequent cards
                        el.scrollBy({
                            left: -e.deltaY * 1.2,
                            behavior: 'auto'
                        });
                    }
                }
            }["ProductDetailPage.useEffect.onWheel"];
            const updateProgress = {
                "ProductDetailPage.useEffect.updateProgress": ()=>{
                    const maxScroll = el.scrollWidth - el.clientWidth;
                    if (maxScroll <= 0) {
                        setScrollProgress(0);
                        return;
                    }
                    const currentScroll = Math.abs(el.scrollLeft);
                    const prog = Math.min(100, Math.max(0, currentScroll / maxScroll * 100));
                    setScrollProgress(prog);
                }
            }["ProductDetailPage.useEffect.updateProgress"];
            el.addEventListener('wheel', onWheel, {
                passive: false
            });
            el.addEventListener('scroll', updateProgress, {
                passive: true
            });
            updateProgress();
            return ({
                "ProductDetailPage.useEffect": ()=>{
                    el.removeEventListener('wheel', onWheel);
                    el.removeEventListener('scroll', updateProgress);
                }
            })["ProductDetailPage.useEffect"];
        }
    }["ProductDetailPage.useEffect"], []);
    const handlePointerDown = (e)=>{
        if (!similarScrollRef.current) return;
        isPointerDownRef.current = true;
        hasDraggedRef.current = false;
        pointerStartXRef.current = e.clientX;
        pointerStartScrollLeftRef.current = similarScrollRef.current.scrollLeft;
    };
    const handlePointerMove = (e)=>{
        if (!isPointerDownRef.current || !similarScrollRef.current) return;
        const deltaX = e.clientX - pointerStartXRef.current;
        if (Math.abs(deltaX) > 4) {
            hasDraggedRef.current = true;
            similarScrollRef.current.scrollLeft = pointerStartScrollLeftRef.current - deltaX;
        }
    };
    const handlePointerUp = ()=>{
        isPointerDownRef.current = false;
        setTimeout(()=>{
            hasDraggedRef.current = false;
        }, 50);
    };
    // Reset states when currentProduct changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            if (currentProduct.sizes?.includes('S')) {
                setSelectedSize('S');
            } else {
                setSelectedSize(currentProduct.sizes?.[0] || 'S');
            }
            setActiveImageIndex(0);
            setIsShowingToastFeedback(false);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }["ProductDetailPage.useEffect"], [
        currentProduct.id
    ]);
    // Prepare full gallery images
    const galleryImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[galleryImages]": ()=>{
            if (currentProduct.galleryImages && currentProduct.galleryImages.length > 0) {
                return currentProduct.galleryImages;
            }
            const imgs = [
                currentProduct.image
            ];
            if (currentProduct.secondaryImage) imgs.push(currentProduct.secondaryImage);
            // Add realistic lifestyle/detail shots if needed
            imgs.push('/women/look-1.jpg');
            imgs.push('/women/look-3.jpg');
            imgs.push('/looks/look-4.jpg');
            return imgs;
        }
    }["ProductDetailPage.useMemo[galleryImages]"], [
        currentProduct
    ]);
    const isSavedInGarderob = garderobIds.includes(currentProduct.id);
    const handleAddToCartClick = ()=>{
        if (!selectedSize) return;
        onAddToCart(currentProduct, selectedSize);
        setIsShowingToastFeedback(false);
    };
    const handleIncrement = ()=>{
        if (onUpdateQuantity) {
            onUpdateQuantity(currentProduct.id, selectedSize, 1);
        } else {
            onAddToCart(currentProduct, selectedSize);
        }
    };
    const handleDecrement = ()=>{
        if (currentQuantity > 1) {
            if (onUpdateQuantity) {
                onUpdateQuantity(currentProduct.id, selectedSize, -1);
            }
        } else if (currentQuantity === 1) {
            if (onRemoveItem) {
                onRemoveItem(currentProduct.id, selectedSize);
            } else if (onUpdateQuantity) {
                onUpdateQuantity(currentProduct.id, selectedSize, -1);
            }
        }
    };
    // Toggle accordion item
    const toggleAccordion = (key)=>{
        setOpenAccordion((prev)=>prev === key ? null : key);
    };
    // 5 similar products for the horizontal scroll section
    const similarProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[similarProducts]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].filter({
                "ProductDetailPage.useMemo[similarProducts]": (p)=>p.id !== currentProduct.id
            }["ProductDetailPage.useMemo[similarProducts]"]).slice(0, 5);
        }
    }["ProductDetailPage.useMemo[similarProducts]"], [
        currentProduct.id
    ]);
    // Category label in Persian
    const categoryLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailPage.useMemo[categoryLabel]": ()=>{
            switch(currentProduct.category){
                case 'knitwear':
                    return 'بافت';
                case 'outerwear':
                    return 'کت و پالتو';
                case 'shirting':
                    return 'پیراهن و شومیز';
                case 'bottoms':
                    return 'شلوار';
                case 'footwear':
                    return 'کفش و اکسسوری';
                case 'accessories':
                    return 'اکسسوری';
                default:
                    return 'پوشاک';
            }
        }
    }["ProductDetailPage.useMemo[categoryLabel]"], [
        currentProduct.category
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white text-neutral-900 min-h-screen font-tommy selection:bg-black selection:text-white",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-center pt-5 sm:pt-8 pb-4 sm:pb-6 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center justify-center gap-2 text-[10.5px] sm:text-[11px] tracking-wide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onBack,
                            className: "text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer font-normal",
                            style: {
                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                            },
                            children: currentProduct.collection ? `کالکشن ${currentProduct.collection}` : 'پوشاک آماده'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-neutral-300 text-[9px]",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-neutral-800 font-medium",
                            style: {
                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                            },
                            children: categoryLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1600px] mx-auto px-0 sm:px-6 lg:px-10 pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 xl:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 xl:col-span-7 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex flex-col gap-3 lg:gap-4",
                                    children: galleryImages.map((imgUrl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setLightboxImage(imgUrl),
                                            className: "relative group bg-[#f7f7f7] cursor-zoom-in overflow-hidden aspect-[3/4] w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imgUrl,
                                                    alt: `${currentProduct.name} - نما ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPersianDigits"])(idx + 1)}`,
                                                    loading: idx === 0 ? 'eager' : 'lazy',
                                                    className: "w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-xs p-2 text-black shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:hidden relative aspect-[3/4] w-full bg-[#f7f7f7] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: galleryImages[activeImageIndex],
                                            alt: currentProduct.name,
                                            className: "w-full h-full object-cover object-center transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveImageIndex((prev)=>prev === 0 ? galleryImages.length - 1 : prev - 1),
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-800 hover:text-black transition-colors cursor-pointer",
                                            "aria-label": "عکس قبلی",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-5 h-5 drop-shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveImageIndex((prev)=>prev === galleryImages.length - 1 ? 0 : prev + 1),
                                            className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 text-neutral-800 hover:text-black transition-colors cursor-pointer",
                                            "aria-label": "عکس بعدی",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-5 h-5 drop-shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:hidden flex items-center gap-2 px-4 py-3 overflow-x-auto border-b border-neutral-100",
                                    children: galleryImages.map((imgUrl, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveImageIndex(idx),
                                            className: `w-14 h-18 shrink-0 overflow-hidden border transition-all cursor-pointer ${activeImageIndex === idx ? 'border-black' : 'border-transparent opacity-60'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imgUrl,
                                                alt: "",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, idx, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 xl:col-span-5 px-5 sm:px-0 pt-6 sm:pt-2 pb-0 lg:sticky lg:top-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11.5px] text-neutral-500 font-normal tracking-wide",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: currentProduct.collection ? `کالکشن ${currentProduct.collection}` : 'کالکشن دائمی لنگه'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onToggleGarderob(currentProduct),
                                                className: "p-1.5 -mr-1 text-neutral-500 hover:text-black transition-colors cursor-pointer",
                                                title: isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'افزودن به علاقمندی‌ها',
                                                "aria-label": isSavedInGarderob ? 'حذف از علاقمندی‌ها' : 'افزودن به علاقمندی‌ها',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                    className: `w-4 h-4 transition-transform hover:scale-110 ${isSavedInGarderob ? 'fill-black stroke-black text-black' : 'stroke-[1.6] text-neutral-600 hover:text-black'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-neutral-900 leading-tight tracking-tight text-right",
                                        style: {
                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                        },
                                        children: currentProduct.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pb-4 border-b border-neutral-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[18px] sm:text-[20px] font-medium text-neutral-900",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTomanPrice"])(currentProduct.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-4 border-b border-neutral-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] font-medium text-neutral-800",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: "انتخاب سایز:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsSizeGuideOpen(true),
                                                        className: "flex items-center gap-1 text-[11.5px] text-neutral-500 hover:text-black underline underline-offset-4 transition-colors cursor-pointer",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                                className: "w-3.5 h-3.5 stroke-[1.5]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "راهنمای سایز"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-5 gap-2",
                                                children: currentProduct.sizes.map((size)=>{
                                                    const isSelected = selectedSize === size;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSelectedSize(size),
                                                        className: `py-2.5 text-center text-[12px] font-sans tracking-wide transition-all cursor-pointer border ${isSelected ? 'bg-black text-white border-black font-medium' : 'bg-white text-neutral-800 border-neutral-200 hover:border-black'}`,
                                                        children: size
                                                    }, size, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            "موجودی محدود برای سایز ",
                                                            selectedSize,
                                                            " — تحویل فوری با پیک"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: mainAddToCartRef,
                                        className: "pt-5 flex items-center gap-2.5",
                                        children: [
                                            isShowingToastFeedback ? /* Immediate Toast feedback on button */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-[52px] bg-neutral-900 text-white flex items-center justify-center gap-2 px-6 text-[13px] font-medium animate-in fade-in duration-200 select-none shadow-md",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-emerald-400 stroke-[2.5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tracking-wide",
                                                        children: "به سبد خرید افزوده شد"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : currentQuantity > 0 ? /* Counter: Right = +, Center = 1, Left = Trash icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-[52px] bg-black text-white flex items-center justify-between px-2 sm:px-3 shadow-sm select-none border border-black animate-in fade-in duration-200",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleIncrement,
                                                        className: "w-12 h-10 flex items-center justify-center hover:bg-white/15 active:scale-90 transition-all text-white cursor-pointer",
                                                        "aria-label": "افزایش تعداد",
                                                        title: "افزایش تعداد",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5 stroke-[2.2]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[18px] font-bold text-white tracking-widest text-center",
                                                            style: {
                                                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPersianDigits"])(currentQuantity)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleDecrement,
                                                        className: "w-12 h-10 flex items-center justify-center hover:bg-white/15 active:scale-90 transition-all text-white cursor-pointer",
                                                        "aria-label": currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد',
                                                        title: currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد',
                                                        children: currentQuantity === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4 text-neutral-300 hover:text-red-400 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                            className: "w-4 h-4 stroke-[2.2]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /* Standard Add to Cart Button */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleAddToCartClick,
                                                className: "flex-1 h-[52px] px-6 text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 bg-black text-white hover:bg-neutral-800 active:scale-[0.99]",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "افزودن به سبد خرید"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onToggleGarderob(currentProduct),
                                                className: `h-[52px] w-[52px] shrink-0 border transition-all flex items-center justify-center cursor-pointer ${isSavedInGarderob ? 'border-black bg-black text-white shadow-xs' : 'border-neutral-300 bg-white text-neutral-700 hover:border-black hover:text-black'}`,
                                                title: isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'ذخیره در علاقمندی‌ها',
                                                "aria-label": isSavedInGarderob ? 'حذف از علاقمندی‌ها' : 'افزودن به علاقمندی‌ها',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                    className: `w-5 h-5 transition-transform hover:scale-110 ${isSavedInGarderob ? 'fill-white stroke-white' : 'stroke-[1.7]'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 mb-7 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12.5px] sm:text-[13px] text-neutral-700 leading-relaxed font-normal",
                                            style: {
                                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-neutral-900",
                                                    children: "یادداشت طراح: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "«",
                                                currentProduct.description,
                                                "»"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-neutral-200 divide-y divide-neutral-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleAccordion('details'),
                                                        className: "w-full flex items-center justify-between text-right cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors",
                                                                style: {
                                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                                },
                                                                children: "جزئیات و جنس (Details)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: `w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${openAccordion === 'details' ? '-rotate-90 text-black' : 'rotate-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    openAccordion === 'details' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc list-inside space-y-1.5 text-neutral-600",
                                                                children: currentProduct.details.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: item
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            currentProduct.fabric && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "pt-2 text-neutral-700 font-medium",
                                                                children: [
                                                                    "ترکیب الیاف: ",
                                                                    currentProduct.fabric
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            currentProduct.styleNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-400 font-mono text-[11px]",
                                                                children: [
                                                                    "کد مدل (Style ID): ",
                                                                    currentProduct.styleNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            currentProduct.care && currentProduct.care.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-2 border-t border-neutral-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-neutral-800 block mb-1",
                                                                        children: "دستورالعمل شستشو و مراقبت:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc list-inside space-y-1 text-neutral-500 text-[11.5px]",
                                                                        children: currentProduct.care.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: c
                                                                            }, i, false, {
                                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                                lineNumber: 616,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 573,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleAccordion('garderob'),
                                                        className: "w-full flex items-center justify-between text-right cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors",
                                                                style: {
                                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                                },
                                                                children: "کمد لباس (Garderob)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: `w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${openAccordion === 'garderob' ? '-rotate-90 text-black' : 'rotate-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    openAccordion === 'garderob' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2.5 animate-in fade-in duration-200",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "این قطعه بخشی از فلسفه «کمد لباس ماندگار» برند لنگه است؛ لباسی با ماندگاری بالا، متریال طبیعی اعلا و تن‌خور همه‌کاره که به‌سادگی با دیگر تکه‌های استایل کپسولی ترکیب می‌شود."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onToggleGarderob(currentProduct),
                                                                className: "inline-flex items-center gap-1.5 text-[11.5px] text-neutral-800 hover:text-black font-medium underline underline-offset-4 pt-1 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                                        className: `w-3.5 h-3.5 ${isSavedInGarderob ? 'fill-black stroke-black' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                        lineNumber: 655,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: isSavedInGarderob ? 'ذخیره شده در کمد لباس شخصی شما' : 'افزودن به کمد لباس شخصی شما'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                        lineNumber: 656,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 626,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleAccordion('size-fit'),
                                                        className: "w-full flex items-center justify-between text-right cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors",
                                                                style: {
                                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                                },
                                                                children: "سایز و تن‌خور (Size & Fit)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: `w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${openAccordion === 'size-fit' ? '-rotate-90 text-black' : 'rotate-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    openAccordion === 'size-fit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            currentProduct.modelInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: currentProduct.modelInfo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "قد مدل ۱۸۰ سانتی‌متر است و سایز S به تن دارد."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            currentProduct.fitNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-500",
                                                                children: currentProduct.fitNotes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-500",
                                                                children: "برش راحت و استاندارد؛ برای استایل معمول سایز همیشگی خود را انتخاب فرمایید."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setIsSizeGuideOpen(true),
                                                                    className: "text-[11.5px] text-neutral-800 hover:text-black underline underline-offset-4 font-medium cursor-pointer",
                                                                    children: "مشاهده جدول دقیق راهنمای سایز"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleAccordion('certificates'),
                                                        className: "w-full flex items-center justify-between text-right cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors",
                                                                style: {
                                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                                },
                                                                children: "گواهینامه‌ها و اصالت (Certificates & Traceability)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: `w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${openAccordion === 'certificates' ? '-rotate-90 text-black' : 'rotate-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    openAccordion === 'certificates' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "پشم کشمیر این محصول تحت گواهینامه بین‌المللی The Good Cashmere Standard® از مزارع پایدار مغولستان تهیه شده است که رفاه بزهای کشمیری، رفتار اخلاقی با دام‌ها و حفاظت از خاک مراتع را به شکل سالانه راستی‌آزمایی می‌کند."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-500",
                                                                children: "کارگاه سازنده: Dongguan Competent Knitting Co. Ltd با استانداردهای سخت‌گیرانه ایمنی و دستمزد منصفانه برای تمامی صنعتگران."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleAccordion('returns'),
                                                        className: "w-full flex items-center justify-between text-right cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors",
                                                                style: {
                                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                                },
                                                                children: "ارسال و تعویض (Returns & Exchanges)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 746,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: `w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${openAccordion === 'returns' ? '-rotate-90 text-black' : 'rotate-0'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    openAccordion === 'returns' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200",
                                                        style: {
                                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "ارسال اکسپرس رایگان برای تمامی خریدهای بالای ۱٫۵۰۰٫۰۰۰ تومان. تحویل در شهر تهران ظرف مدت حداکثر ۴ ساعت و سایر استان‌ها ظرف ۲ الی ۳ روز کاری از طریق پست ویژه یا تیپاکس انجام می‌شود."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-neutral-500",
                                                                children: "شما می‌توانید تا ۱۴ روز پس از دریافت سفارش در صورت عدم تطابق سایز یا سلیقه، کالا را بدون هرگونه هزینه مازاد در وضعیت نو با بسته‌بندی اصلی تعویض یا مرجوع فرمایید."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 740,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-neutral-200 mt-[48px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                    lineNumber: 780,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-7 sm:pt-9 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-5 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[14.5px] sm:text-[16px] font-medium text-neutral-900 tracking-tight",
                            style: {
                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                            },
                            children: "محصولات مشابه"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 786,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 785,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: similarScrollRef,
                                onPointerDown: handlePointerDown,
                                onPointerMove: handlePointerMove,
                                onPointerUp: handlePointerUp,
                                onPointerCancel: handlePointerUp,
                                className: "flex gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing",
                                style: {
                                    WebkitOverflowScrolling: 'touch'
                                },
                                children: similarProducts.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            if (hasDraggedRef.current) return;
                                            onSelectProduct(prod);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        },
                                        className: "shrink-0 flex-none group cursor-pointer flex flex-col text-right select-none transition-transform active:scale-[0.99]",
                                        style: {
                                            width: 'calc((100% - 24px) / 2.32)',
                                            minWidth: 'calc((100% - 24px) / 2.32)',
                                            maxWidth: '185px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-square w-full overflow-hidden bg-neutral-100 mb-2 border border-neutral-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: prod.image,
                                                        alt: prod.name,
                                                        className: "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none",
                                                        loading: "lazy",
                                                        draggable: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 821,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[12px] font-normal text-[#333333] group-hover:text-black transition-colors leading-snug line-clamp-1",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                title: prod.name,
                                                children: prod.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 831,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-normal text-[#777777] mt-0.5",
                                                style: {
                                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTomanPrice"])(prod.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 838,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, prod.id, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 807,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 797,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[180px] h-[1.5px] bg-neutral-100 mt-2 relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 bottom-0 bg-[#171717] transition-all duration-150",
                                    style: {
                                        width: '40%',
                                        right: `${scrollProgress * 0.6}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 850,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 796,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 784,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSizeGuideOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-4 border-b border-neutral-200 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] sm:text-[18px] font-medium text-neutral-900",
                                            style: {
                                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                            },
                                            children: "راهنمای سایز (Size Guide)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 867,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-neutral-500 mt-0.5",
                                            children: "تمام اندازه‌ها بر حسب سانتی‌متر (CM) و بر اساس تن‌خور آزاد طراحی شده‌اند."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 866,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsSizeGuideOpen(false),
                                    className: "p-1.5 text-neutral-400 hover:text-black cursor-pointer",
                                    "aria-label": "بستن",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 883,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 877,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 865,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-center text-[12px] font-sans border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-neutral-200 text-neutral-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium text-right",
                                                    style: {
                                                        fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                    },
                                                    children: "سایز"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 891,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    children: "EU"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    children: "US"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    children: "UK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    style: {
                                                        fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                    },
                                                    children: "دور سینه"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    style: {
                                                        fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                    },
                                                    children: "قد لباس"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2.5 px-3 font-medium",
                                                    style: {
                                                        fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                                    },
                                                    children: "طول آستین"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 890,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 889,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-neutral-100 text-neutral-800",
                                        style: {
                                            fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: selectedSize === 'XS' ? 'bg-neutral-100 font-semibold' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-right font-medium",
                                                        children: "XS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۳۴"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۲"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۰۶ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۰ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۱ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 908,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 901,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: selectedSize === 'S' ? 'bg-neutral-100 font-semibold' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-right font-medium",
                                                        children: "S"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۳۶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۴"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۱۲ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۲ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 916,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۲ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 910,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: selectedSize === 'M' ? 'bg-neutral-100 font-semibold' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-right font-medium",
                                                        children: "M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۳۸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۱۸ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۴ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۳ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 919,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: selectedSize === 'L' ? 'bg-neutral-100 font-semibold' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-right font-medium",
                                                        children: "L"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۴۰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۲"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۲۴ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 933,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۶ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۴ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: selectedSize === 'XL' ? 'bg-neutral-100 font-semibold' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-right font-medium",
                                                        children: "XL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 938,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۴۲"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 939,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۴"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۱۳۰ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۸ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: "۶۵ سانتی‌متر"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                                lineNumber: 937,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 900,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 888,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 887,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-4 border-t border-neutral-100 text-[11.5px] text-neutral-500 leading-relaxed",
                            style: {
                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-1.5 font-medium text-neutral-800 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-3.5 h-3.5 text-neutral-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 952,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "مشاوره سایز آنلاین:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 951,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "اگر بین دو سایز تردید دارید یا به دنبال تن‌خور دقیق‌تر هستید، تیم پشتیبانی استایل لنگه آماده راهنمایی شماست."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 950,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                    lineNumber: 864,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 863,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            lightboxImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6",
                onClick: ()=>setLightboxImage(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLightboxImage(null),
                        className: "absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10 cursor-pointer",
                        "aria-label": "بستن تصویر",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                            lineNumber: 973,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: lightboxImage,
                        alt: "",
                        className: "max-h-[92vh] max-w-[92vw] object-contain shadow-2xl animate-in zoom-in-90 duration-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 975,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 963,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sm:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 z-40 flex items-center justify-between gap-3 shadow-lg transition-all duration-300 ease-in-out ${isMainButtonVisible ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] font-medium text-neutral-900 truncate",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                },
                                children: currentProduct.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 992,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-neutral-500",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                },
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTomanPrice"])(currentProduct.price),
                                    " · سایز ",
                                    selectedSize
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 995,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 991,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onToggleGarderob(currentProduct),
                                className: `w-10 h-10 border transition-colors flex items-center justify-center cursor-pointer ${isSavedInGarderob ? 'border-black bg-black text-white' : 'border-neutral-300 bg-white text-neutral-700'}`,
                                title: isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'ذخیره در علاقمندی‌ها',
                                "aria-label": "ذخیره در علاقمندی‌ها",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                    className: `w-4 h-4 ${isSavedInGarderob ? 'fill-white stroke-white' : 'stroke-[1.7]'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetailPage.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 1000,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isShowingToastFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 px-4 bg-neutral-900 text-white flex items-center justify-center gap-1.5 text-[11px] font-medium select-none shadow-xs",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3.5 h-3.5 text-emerald-400 stroke-[2.5]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "افزوده شد"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 1013,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : currentQuantity > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 bg-black text-white flex items-center justify-between px-1 shadow-xs min-w-[124px] select-none",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleIncrement,
                                        className: "w-9 h-8 flex items-center justify-center hover:bg-white/15 active:scale-90 text-white cursor-pointer",
                                        "aria-label": "افزایش تعداد",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4 stroke-[2.2]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 1032,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center justify-center px-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[15px] font-bold text-white text-center",
                                            style: {
                                                fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$persianNumbers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPersianDigits"])(currentQuantity)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 1036,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDecrement,
                                        className: "w-9 h-8 flex items-center justify-center hover:bg-white/15 active:scale-90 text-white cursor-pointer",
                                        "aria-label": currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد',
                                        children: currentQuantity === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5 text-neutral-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            className: "w-3.5 h-3.5 stroke-[2.2]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetailPage.tsx",
                                            lineNumber: 1055,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAddToCartClick,
                                className: "py-2.5 px-4 text-[12px] font-medium tracking-wider uppercase transition-colors cursor-pointer bg-black text-white hover:bg-neutral-800",
                                style: {
                                    fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                                },
                                children: "افزودن به سبد"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductDetailPage.tsx",
                                lineNumber: 1060,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductDetailPage.tsx",
                        lineNumber: 999,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductDetailPage.tsx",
                lineNumber: 984,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductDetailPage.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductDetailPage, "J6knGhac9PCdnpHP8GuS3Dn+SII=");
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ProductDetailPage_tsx_0xs8h76sqsztc._.js.map