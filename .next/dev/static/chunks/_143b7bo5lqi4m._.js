(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/src/app-shell/AppShell.tsx [app-client] (ecmascript) <export default as App>");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@mynaui/icons-react/dist/esm/createReactComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createReactComponent
]);
/**
 * @mynaui/icons-react v0.4.11 - MIT
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
;
var createReactComponent = (iconName, iconNamePascal, iconNode, variant = "outline")=>{
    const isSolid = variant === "solid";
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, children, ...rest }, ref)=>{
        let attrs;
        if (isSolid) {
            attrs = {
                ref,
                width: size,
                height: size,
                fill: color,
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                ...rest
            };
        } else {
            const { stroke = "1.5", ...outlineRest } = rest;
            attrs = {
                ref,
                width: size,
                height: size,
                fill: "none",
                stroke: color,
                strokeWidth: stroke,
                viewBox: "0 0 24 24",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                xmlns: "http://www.w3.org/2000/svg",
                ...outlineRest
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", attrs, [
            ...iconNode.map(([tag, elementAttrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, elementAttrs)),
            ...children || []
        ]);
    });
    Component.propTypes = {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
        ]),
        // `stroke` only affects outline icons, so it is not advertised for solid.
        ...isSolid ? {} : {
            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
            ])
        }
    };
    Component.displayName = `${iconNamePascal}`;
    return Component;
};
;
}),
"[project]/node_modules/@mynaui/icons-react/dist/esm/icons/Check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Check
]);
/**
 * @mynaui/icons-react v0.4.11 - MIT
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mynaui/icons-react/dist/esm/createReactComponent.js [app-client] (ecmascript)");
;
var Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("check", "Check", [
    [
        "path",
        {
            "d": "m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7",
            "key": "svg-0"
        }
    ]
]);
;
}),
"[project]/node_modules/@mynaui/icons-react/dist/esm/icons/Check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mynaui/icons-react/dist/esm/icons/Check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports;
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app-shell/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/layout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/home/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/home/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$catalog$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/catalog/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$catalog$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/catalog/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$account$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/account/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$account$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/account/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$checkout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/checkout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$checkout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/checkout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/content/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/content/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$product$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/entities/product/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$cart$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/entities/cart/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$cart$2f$model$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/entities/cart/model/useCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppShellUi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/model/useAppShellUi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/model/useAppNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/model/useAppSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useGarderob$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/model/useGarderob.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/@mynaui/icons-react/dist/esm/icons/Check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$cart$2f$model$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const ui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppShellUi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellUi"])();
    const navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppNavigation"])();
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSession"])();
    const garderob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useGarderob$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGarderob"])();
    const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen, isAccountOpen, setIsAccountOpen, isSearchOpen, setIsSearchOpen, isCloserLookOpen, setIsCloserLookOpen, quickViewProduct, setQuickViewProduct, currency, setCurrency, isScrolled, toastMessage, showToast } = ui;
    const { currentView, selectedProduct, productFilter, profileSubView, setProfileSubView } = navigation;
    const { userPhone, userName, updateName, login, logout } = session;
    const garderobIds = garderob.ids;
    const handleUpdateUserName = updateName;
    /* Navigation, session, and garderob state live in their owning hooks. */ /* legacy declarations removed */ const handleLoginSuccess = (phone)=>{
        login(phone);
        setIsAccountOpen(false);
        showToast('شما با موفقیت وارد شدید');
        navigation.goTo('profile');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleLogout = ()=>{
        logout();
        setIsAccountOpen(false);
        navigation.goHome();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        showToast('از حساب کاربری خارج شدید');
    };
    const handleOpenAccount = ()=>{
        if (userPhone) {
            setProfileSubView('menu');
            navigation.goTo('profile');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            setIsAccountOpen(true);
        }
    };
    const handleToggleGarderob = (product)=>{
        const exists = garderob.ids.includes(product.id);
        garderob.toggle(product);
        showToast(exists ? `${product.name} removed from garderob` : `${product.name} added to garderob`);
    };
    const handleAddToCart = (product, size)=>{
        cart.add(product, size);
        showToast(`${product.name} (سایز ${size}) به سبد خرید اضافه شد`);
    };
    const handleAddAllHeroPieces = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PRODUCTS"].forEach((product)=>{
            const defaultSize = product.sizes[0];
            handleAddToCart(product, defaultSize);
        });
        showToast('ست کامل استایل پاییز ۲۰۲۶ به سبد خرید اضافه شد');
    };
    const handleUpdateQuantity = (productId, size, delta)=>{
        cart.updateQuantity(productId, size, delta);
    };
    const handleRemoveItem = (productId, size)=>{
        cart.remove(productId, size);
    };
    const handleNavigateToProducts = (filter)=>{
        navigation.goProducts(filter);
        setIsMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleNavigateToHome = ()=>{
        navigation.goHome();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleNavigateToAbout = ()=>{
        navigation.goTo('about');
        setIsMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleNavigateToContact = ()=>{
        navigation.goTo('contact');
        setIsMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleOpenProductDetail = (product)=>{
        navigation.openProduct(product);
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleProceedToCheckout = ()=>{
        setIsCartOpen(false);
        navigation.goTo('checkout');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleOpenCollectionStory = ()=>{
        navigation.goTo('collection-story');
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleOrderCompleted = (goToProfile)=>{
        cart.clear();
        if (goToProfile) {
            if (!userPhone) {
                const phone = '۰۹۱۲۳۴۵۶۷۸۹';
                login(phone);
            }
            setProfileSubView('orders');
            navigation.goTo('profile');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            showToast('سفارش شما با موفقیت ثبت شد');
        } else {
            navigation.goHome();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            showToast('سفارش شما با موفقیت ثبت شد');
        }
    };
    const totalCartCount = cart.count;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: "rtl",
        className: "min-h-screen bg-white text-neutral-900 font-tommy relative selection:bg-black selection:text-white",
        children: [
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none px-3 max-w-[95vw]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `pointer-events-auto px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-medium shadow-xl flex items-center gap-2 whitespace-nowrap animate-in fade-in slide-in-from-top-4 duration-250 select-none ${toastMessage.includes('موفقیت') ? 'bg-[#eaf7ee] text-[#1b5e20] border border-[#bfe7ca]' : 'bg-black/95 text-white border border-white/20'}`,
                    style: {
                        fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mynaui$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$Check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: `w-4 h-4 shrink-0 ${toastMessage.includes('موفقیت') ? 'text-[#2e7d32]' : 'text-emerald-400'}`
                        }, void 0, false, {
                            fileName: "[project]/src/app-shell/AppShell.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "whitespace-nowrap",
                            children: toastMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app-shell/AppShell.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app-shell/AppShell.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                cartCount: totalCartCount,
                onOpenMenu: ()=>setIsMenuOpen(true),
                onOpenCart: ()=>setIsCartOpen(true),
                onOpenAccount: handleOpenAccount,
                onOpenSearch: ()=>setIsSearchOpen(true),
                onNavigateHome: handleNavigateToHome,
                isScrolled: isScrolled,
                isLightBackground: currentView === 'products' || currentView === 'product-detail' || currentView === 'about' || currentView === 'contact' || currentView === 'profile' || currentView === 'checkout' || currentView === 'collection-story',
                currency: currency,
                onCurrencyChange: setCurrency
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: currentView === 'products' || currentView === 'product-detail' || currentView === 'about' || currentView === 'contact' || currentView === 'profile' || currentView === 'checkout' || currentView === 'collection-story' ? 'pt-12 sm:pt-14' : '',
                children: [
                    currentView === 'checkout' ? /* Dedicated Address & Delivery Time Checkout Page */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$checkout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckoutPage"], {
                        items: cart.items,
                        userPhone: userPhone,
                        userName: userName,
                        onBackToCart: ()=>{
                            navigation.goHome();
                            setIsCartOpen(true);
                        },
                        onOrderCompleted: handleOrderCompleted
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this) : currentView === 'profile' ? /* Dedicated Profile Page matching image_b4781195.png */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$account$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilePage"], {
                        userPhone: userPhone || '',
                        userName: userName,
                        onUpdateUserName: handleUpdateUserName,
                        onLogout: handleLogout,
                        onNavigateHome: handleNavigateToHome,
                        onNavigateToProducts: handleNavigateToProducts,
                        garderobIds: garderobIds,
                        onOpenProductDetail: handleOpenProductDetail,
                        onToggleGarderob: handleToggleGarderob,
                        initialSubView: profileSubView
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this) : currentView === 'about' ? /* Dedicated About Us Page (Kith About Layout) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutPage"], {
                        onNavigateHome: handleNavigateToHome,
                        onNavigateToProducts: handleNavigateToProducts
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this) : currentView === 'contact' ? /* Dedicated Contact & FAQ Page */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactPage"], {
                        onNavigateHome: handleNavigateToHome,
                        onNavigateToProducts: handleNavigateToProducts
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this) : currentView === 'product-detail' ? /* Dedicated Luxury Product Detail Page (Toteme PDP Layout) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$catalog$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductDetailPage"], {
                        product: selectedProduct,
                        currency: currency,
                        onBack: ()=>{
                            navigation.goProducts();
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        },
                        onAddToCart: handleAddToCart,
                        onUpdateQuantity: handleUpdateQuantity,
                        onRemoveItem: handleRemoveItem,
                        cartItems: cart.items,
                        onSelectProduct: handleOpenProductDetail,
                        garderobIds: garderobIds,
                        onToggleGarderob: handleToggleGarderob
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this) : currentView === 'products' ? /* Dedicated Minimalist Product List Page matching reference picture */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$catalog$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductListPage"], {
                        initialGender: productFilter.gender,
                        initialCollection: productFilter.collection,
                        initialCategory: productFilter.category,
                        initialBadge: productFilter.badge,
                        currency: currency,
                        onBackToHome: handleNavigateToHome,
                        onSelectProduct: handleOpenProductDetail,
                        garderobIds: garderobIds,
                        onToggleGarderob: handleToggleGarderob
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this) : currentView === 'collection-story' ? /* Dedicated Collection Story & Certificate of Authenticity Page */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollectionStoryPage"], {
                        onNavigateHome: handleNavigateToHome,
                        onNavigateToProducts: ()=>handleNavigateToProducts({
                                gender: 'all'
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this) : /* Homepage */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                                onShopNowClick: ()=>handleNavigateToProducts({
                                        gender: 'men'
                                    }),
                                onCloserLookClick: handleOpenCollectionStory,
                                onQuickAdd: handleAddToCart
                            }, void 0, false, {
                                fileName: "[project]/src/app-shell/AppShell.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductLookbookCards"], {
                                onQuickShop: (product)=>handleOpenProductDetail(product),
                                onOpenQuickView: (product)=>handleOpenProductDetail(product)
                            }, void 0, false, {
                                fileName: "[project]/src/app-shell/AppShell.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WomenHeroSection"], {
                                onShopNowClick: ()=>handleNavigateToProducts({
                                        gender: 'women'
                                    }),
                                onCloserLookClick: handleOpenCollectionStory
                            }, void 0, false, {
                                fileName: "[project]/src/app-shell/AppShell.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WomenLookbookCards"], {
                                onQuickShop: (product)=>handleOpenProductDetail(product),
                                onOpenQuickView: (product)=>handleOpenProductDetail(product)
                            }, void 0, false, {
                                fileName: "[project]/src/app-shell/AppShell.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                        onOpenCloserLook: handleOpenCollectionStory,
                        onNavigateToProducts: handleNavigateToProducts,
                        onNavigateToAbout: handleNavigateToAbout,
                        onNavigateToContact: handleNavigateToContact
                    }, void 0, false, {
                        fileName: "[project]/src/app-shell/AppShell.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationDrawer"], {
                isOpen: isMenuOpen,
                onClose: ()=>setIsMenuOpen(false),
                onSelectCategory: ()=>setIsMenuOpen(false),
                onNavigateToProducts: handleNavigateToProducts,
                onOpenCloserLook: handleOpenCollectionStory,
                currency: currency,
                onCurrencyChange: setCurrency,
                onSelectProduct: (product)=>{
                    setIsMenuOpen(false);
                    handleOpenProductDetail(product);
                },
                onNavigateToAbout: handleNavigateToAbout,
                onNavigateToContact: handleNavigateToContact
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false),
                items: cart.items,
                onUpdateQuantity: handleUpdateQuantity,
                onRemoveItem: handleRemoveItem,
                onStartShopping: ()=>{
                    setIsCartOpen(false);
                    handleNavigateToProducts();
                },
                onProceedToCheckout: handleProceedToCheckout
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloserLookModal"], {
                isOpen: isCloserLookOpen,
                onClose: ()=>setIsCloserLookOpen(false),
                onQuickAdd: handleAddToCart,
                onAddAllHeroPieces: handleAddAllHeroPieces
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickViewModal"], {
                product: quickViewProduct,
                onClose: ()=>setQuickViewProduct(null),
                onAddToCart: handleAddToCart
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$account$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountModal"], {
                isOpen: isAccountOpen,
                onClose: ()=>setIsAccountOpen(false),
                userPhone: userPhone,
                onLoginSuccess: handleLoginSuccess,
                onLogout: handleLogout
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchModal"], {
                isOpen: isSearchOpen,
                onClose: ()=>setIsSearchOpen(false),
                onSelectProduct: (p)=>{
                    setIsSearchOpen(false);
                    handleOpenProductDetail(p);
                }
            }, void 0, false, {
                fileName: "[project]/src/app-shell/AppShell.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app-shell/AppShell.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(App, "cq5RlPomyeO+c9QXBlGTX9wNIw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$cart$2f$model$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppShellUi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellUi"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useAppSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$model$2f$useGarderob$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGarderob"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app-shell/AppShell.tsx [app-client] (ecmascript) <export default as App>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/AppShell.tsx [app-client] (ecmascript)");
}),
"[project]/src/app-shell/model/useAppNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppNavigation",
    ()=>useAppNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$product$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/entities/product/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useAppNavigation() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"][0] ?? null);
    const [productFilter, setProductFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gender: 'all'
    });
    const [profileSubView, setProfileSubView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu');
    const currentView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAppNavigation.useMemo[currentView]": ()=>{
            if (pathname === '/products' || pathname === '/products/') return 'products';
            if (pathname.startsWith('/products/')) return 'product-detail';
            if (pathname === '/about') return 'about';
            if (pathname === '/contact') return 'contact';
            if (pathname === '/profile') return 'profile';
            if (pathname === '/checkout') return 'checkout';
            if (pathname === '/collection-story') return 'collection-story';
            return 'home';
        }
    }["useAppNavigation.useMemo[currentView]"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAppNavigation.useEffect": ()=>{
            if (currentView !== 'products') return;
            const params = new URLSearchParams(window.location.search);
            setProductFilter({
                gender: params.get('gender') || 'all',
                collection: params.get('collection') || 'all',
                category: params.get('category') || 'all',
                badge: params.get('badge') || undefined
            });
        }
    }["useAppNavigation.useEffect"], [
        currentView,
        pathname
    ]);
    const routeProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAppNavigation.useMemo[routeProduct]": ()=>{
            const id = pathname.startsWith('/products/') ? pathname.split('/')[2] : undefined;
            return id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].find({
                "useAppNavigation.useMemo[routeProduct]": (product)=>product.id === decodeURIComponent(id)
            }["useAppNavigation.useMemo[routeProduct]"]) : undefined;
        }
    }["useAppNavigation.useMemo[routeProduct]"], [
        pathname
    ]);
    const scrollTop = ()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    const goHome = ()=>{
        router.push('/');
        scrollTop();
    };
    const goProducts = (filter)=>{
        setProductFilter({
            gender: filter?.gender || 'all',
            collection: filter?.collection || 'all',
            category: filter?.category || 'all',
            badge: filter?.badge
        });
        const params = new URLSearchParams();
        if (filter?.gender && filter.gender !== 'all') params.set('gender', filter.gender);
        if (filter?.collection && filter.collection !== 'all') params.set('collection', filter.collection);
        if (filter?.category && filter.category !== 'all') params.set('category', filter.category);
        if (filter?.badge) params.set('badge', filter.badge);
        router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`);
        scrollTop();
    };
    const goTo = (view)=>{
        const paths = {
            about: '/about',
            contact: '/contact',
            profile: '/profile',
            checkout: '/checkout',
            'collection-story': '/collection-story'
        };
        if (view === 'home') return goHome();
        if (view === 'products') return goProducts();
        if (view === 'product-detail') return;
        router.push(paths[view]);
        scrollTop();
    };
    const openProduct = (product)=>{
        setSelectedProduct(product);
        router.push(`/products/${encodeURIComponent(product.id)}`);
        scrollTop();
    };
    return {
        currentView,
        selectedProduct: routeProduct ?? selectedProduct,
        productFilter,
        profileSubView,
        setProfileSubView,
        goHome,
        goProducts,
        goTo,
        openProduct
    };
}
_s(useAppNavigation, "NNTTeIArRmQnGUNmrKToRVKJysQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app-shell/model/useAppSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppSession",
    ()=>useAppSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useAppSession() {
    _s();
    const [userPhone, setUserPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAppSession.useEffect": ()=>{
            setUserPhone(window.localStorage.getItem('lengeh_user_phone'));
            setUserName(window.localStorage.getItem('lengeh_user_name') || '');
        }
    }["useAppSession.useEffect"], []);
    const updateName = (name)=>{
        setUserName(name);
        window.localStorage.setItem('lengeh_user_name', name);
    };
    const login = (phone)=>{
        setUserPhone(phone);
        window.localStorage.setItem('lengeh_user_phone', phone);
    };
    const logout = ()=>{
        setUserPhone(null);
        window.localStorage.removeItem('lengeh_user_phone');
    };
    return {
        userPhone,
        userName,
        updateName,
        login,
        logout
    };
}
_s(useAppSession, "7BMn5ND+Xd1K6LIlIict3Z63GMs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app-shell/model/useAppShellUi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppShellUi",
    ()=>useAppShellUi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useAppShellUi() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAccountOpen, setIsAccountOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCloserLookOpen, setIsCloserLookOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quickViewProduct, setQuickViewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EUR');
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAppShellUi.useEffect": ()=>{
            const onScroll = {
                "useAppShellUi.useEffect.onScroll": ()=>setIsScrolled(window.scrollY > 40)
            }["useAppShellUi.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "useAppShellUi.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["useAppShellUi.useEffect"];
        }
    }["useAppShellUi.useEffect"], []);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAppShellUi.useCallback[showToast]": (message)=>{
            setToastMessage(message);
            window.setTimeout({
                "useAppShellUi.useCallback[showToast]": ()=>setToastMessage({
                        "useAppShellUi.useCallback[showToast]": (current)=>current === message ? null : current
                    }["useAppShellUi.useCallback[showToast]"])
            }["useAppShellUi.useCallback[showToast]"], 3000);
        }
    }["useAppShellUi.useCallback[showToast]"], []);
    return {
        isMenuOpen,
        setIsMenuOpen,
        isCartOpen,
        setIsCartOpen,
        isAccountOpen,
        setIsAccountOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCloserLookOpen,
        setIsCloserLookOpen,
        quickViewProduct,
        setQuickViewProduct,
        currency,
        setCurrency,
        isScrolled,
        toastMessage,
        showToast
    };
}
_s(useAppShellUi, "psucNdHpsrulIkpp9I+s9K1YaDA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app-shell/model/useGarderob.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGarderob",
    ()=>useGarderob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useGarderob() {
    _s();
    const [ids, setIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGarderob.useEffect": ()=>{
            try {
                setIds(JSON.parse(window.localStorage.getItem('lengeh_garderob') || '[]'));
            } catch  {
                setIds([]);
            }
        }
    }["useGarderob.useEffect"], []);
    const toggle = (product)=>{
        setIds((current)=>{
            const next = current.includes(product.id) ? current.filter((id)=>id !== product.id) : [
                ...current,
                product.id
            ];
            window.localStorage.setItem('lengeh_garderob', JSON.stringify(next));
            return next;
        });
    };
    return {
        ids,
        toggle
    };
}
_s(useGarderob, "EnfQASC+5WpWlxgwezrX3rKK9FY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/App.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2d$shell$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app-shell/AppShell.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/App.tsx [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_PRODUCTS",
    ()=>ALL_PRODUCTS,
    "CATEGORIES",
    ()=>CATEGORIES,
    "HERO_PRODUCTS",
    ()=>HERO_PRODUCTS,
    "LOOKBOOK_STORIES",
    ()=>LOOKBOOK_STORIES
]);
const HERO_PRODUCTS = [
    {
        id: 'lengeh-sheridan-blouson',
        name: 'بلوزون پشمی زیپ‌دار لنگه',
        englishName: 'Sheridan wool blouson jacket',
        subtitle: 'کالکشن پاییز ۲۰۲۶ — پارت اول',
        category: 'outerwear',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 325,
        colorway: 'شتری ماسه‌ای',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
        badge: 'استایل شاخص لوک‌بوک',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        description: 'شاهکار کالکشن پاییز ۲۰۲۶. بلوزونی ساختاریافته از ترکیب پشم و پنبه مرغوب دو رو با یقه گسترده کلاسیک، برش‌های معماری در سینه و کمر کشبافت ظریف.',
        details: [
            'پارچه پشم-پنبه سنگین با گرماژ ۴۸۰ گرم',
            'زیپ فلزی دوطرفه Excella نقره‌ای مات',
            'برش افقی ارگونومیک با دریچه‌های مخفی عبور هوا',
            'کشبافت متراکم در لبه کمر و مچ',
            'سرزیپ‌های اختصاصی حکاکی‌شده برند لنگه',
            'تنها خشک‌شویی شود — ساخت پرتغال'
        ],
        fabric: '۶۵٪ پشم خالص، ۳۵٪ پنبه ارگانیک',
        isHeroPiece: true
    },
    {
        id: 'lengeh-pleated-trouser',
        name: 'شلوار پشمی پیلی‌دار سفارشی لنگه',
        englishName: 'Tailored pleated wool trouser',
        subtitle: 'خیاطی کلاسیک سفارشی',
        category: 'bottoms',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 265,
        colorway: 'دودی زغالی ملانژ',
        colorsCount: 3,
        colorsLabel: '3 colors',
        image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
        badge: 'استایل شاخص لوک‌بوک',
        sizes: [
            '28',
            '30',
            '32',
            '34',
            '36'
        ],
        description: 'طراحی‌شده با ایستایی آزاد و چشم‌نواز. دوخته‌شده از پارچه پشمی ویرجین ایتالیایی با دو پیلی رو به داخل در جلو، خط اتوی تیز و جیب‌های فیلتابی مینیمال.',
        details: [
            'فالنل پشمی مرغوب کارخانجات ایتالیا ۳۲۰ گرم',
            'دو پیلی رو به داخل با خط اتوی بادوام',
            'بست کمر کشیده با دکمه شاخ طبیعی در داخل',
            'جیب‌های مورب جلو و جیب‌های برشی پشت',
            'برش راسته راحت با باریک‌شدگی بسیار ملایم در دمپا'
        ],
        fabric: '۸۵٪ پشم طبیعی، ۱۳٪ پلی‌آمید، ۲٪ الاستین',
        isHeroPiece: true
    },
    {
        id: 'lengeh-woven-duffel',
        name: 'ساک مسافرتی چرم دست‌بافت لنگه',
        englishName: 'Woven leather weekender duffel',
        subtitle: 'صنایع چرم دست‌ساز ایتالیا',
        category: 'accessories',
        gender: 'unisex',
        collection: 'پاییز ۲۰۲۶',
        price: 695,
        colorway: 'قهوه‌ای تافی',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85',
        badge: 'تعداد محدود',
        sizes: [
            'تک‌سایز'
        ],
        description: 'دست‌ساز استادکاران فلورانس با چرم ناپای دباغی‌شده گیاهی با بافت سه‌بعدی لوزی. دارای دسته‌های گرد دوبل و بند شانه قابل تنظیم.',
        details: [
            'چرم طبیعی دانه کامل ناپای ایتالیایی بافت دست',
            'دسته‌های چرمی تقویت‌شده و دست‌دوز',
            'بند دوشی مستحکم کتان با قابلیت جداسازی',
            'زیپ دوتایی روان با زبانه چرمی',
            'آستر میکروجیر با جیب زیپ‌دار ایمن',
            'ابعاد: ۵۰ سانتی‌متر طول × ۲۹ عرض × ۲۵ ارتفاع'
        ],
        fabric: '۱۰۰٪ چرم طبیعی ایتالیا، یراق‌آلات برنجی خالص',
        isHeroPiece: true
    },
    {
        id: 'lengeh-needles-boot',
        name: 'نیم‌بوت چرم و جیر فیلد لنگه',
        englishName: 'Field boot in waxed split suede',
        subtitle: 'کپسول مشارکتی پاییز',
        category: 'footwear',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 345,
        colorway: 'زیتونی خاکی / مشکی',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85',
        badge: 'طراحی ویژه',
        sizes: [
            '40',
            '41',
            '42',
            '43',
            '44',
            '45'
        ],
        description: 'طراحی‌شده با همکاری استودیوهای صنایع دستی توکیو. چرم جیر ضدآب روغنی سنگین، زیره گریپ‌دار ویبرام Morflex و نشان فلزی نشان‌دار لنگه در پاشنه.',
        details: [
            'رویه جیر روغنی ضدآب با ضخامت ۲.۲ میلی‌متر',
            'ساختار دوخت مقاوم گودیر برای ماندگاری مادام‌العمر',
            'زیره آج‌دار کوهستانی Vibram اصل',
            'حک لوگوی لنگه روی پاشنه',
            'شامل دو جفت بند مومی گرد باکیفیت'
        ],
        fabric: 'رویه جیر طبیعی روغنی، زیره لاستیکی Vibram',
        isHeroPiece: true
    }
];
const ALL_PRODUCTS = [
    {
        id: 'lengeh-cashmere-crew-knit',
        name: 'پلیور بافت کشمیر کلاسیک',
        englishName: 'Classic cashmere crew knit mid grey melange',
        subtitle: 'کالکشن دائمی Garderob — ۱۰۰٪ پشم کشمیر طبیعی',
        category: 'knitwear',
        gender: 'women',
        collection: 'GARDEROB',
        price: 550,
        colorway: 'خاکستری ملانژ (Mid grey melange)',
        colorsCount: 4,
        colorsLabel: '4 colors',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=85',
        badge: 'Garderob',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'پلیور بافت نمادین و بی‌انتها (Quintessential cashmere sweater) بافته‌شده از پشم خالص کشمیر فوق‌العاده لطیف و سبک با سیلوئت آزاد و یقه گرد الهام‌گرفته از ژاکت‌های مردانه کلاسیک. دارای لبه‌های کشبافت ظریف در یقه، سرآستین و لبه پایینی.',
        details: [
            '۱۰۰٪ پشم خالص کشمیر مغولستانی طبیعی و فوق‌العاده نرم',
            'بافت متراکم ۱۲ گیج سبک و گرمابخش بدون ایجاد حس سنگینی',
            'یقه گرد متراکم، سرشانه‌های اندکی افتاده و لبه‌های کشبافت فلت',
            'برش آزاد و رها (Relaxed fit) برای لایه‌بندی راحت در تمامی فصول',
            'دارای گواهی استاندارد بین‌المللی The Good Cashmere Standard®'
        ],
        fabric: '۱۰۰٪ پشم کشمیر خالص',
        styleNumber: '261-WRT0613-YA0016',
        modelInfo: 'قد مدل ۱۸۰ سانتی‌متر (5’11”) است و سایز S به تن دارد.',
        fitNotes: 'فرم آزاد و رها (Relaxed fit). تن‌خور این لباس بر اساس قواره‌های کلاسیک اسکاندیناوی طراحی شده است؛ برای استایل فیت‌تر پیشنهاد می‌کنیم یک سایز کوچک‌تر انتخاب کنید.',
        care: [
            'شستشوی بسیار ملایم با دست در آب خنک (حداکثر ۲۰ درجه سانتی‌گراد) با شوینده مخصوص پشم',
            'از چلاندن یا پیچاندن لباس خودداری فرمایید',
            'آبگیری با حوله تمیز و خشک‌کردن به‌صورت افقی روی سطح صاف دور از نور مستقیم خورشید',
            'خشک‌شویی تخصصی سازگار با محیط زیست (Dry clean mild process)',
            'اتوکشی با بخار غیرمستقیم در دمای پایین'
        ],
        colorOptions: [
            {
                name: 'Mid grey melange',
                nameFa: 'خاکستری ملانژ',
                hex: '#8e8e8e',
                inStock: true,
                image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=85'
            },
            {
                name: 'Black',
                nameFa: 'مشکی کربنی',
                hex: '#171717',
                inStock: true,
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85'
            },
            {
                name: 'Camel melange',
                nameFa: 'شتری / بژ ملانژ',
                hex: '#c5b59b',
                inStock: true,
                image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
            },
            {
                name: 'Off-white / Creme',
                nameFa: 'شیری / اکرو',
                hex: '#ede8dd',
                inStock: true,
                image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1200&q=85'
            }
        ],
        galleryImages: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=85',
            '/women/look-1.jpg',
            '/women/look-3.jpg',
            '/looks/look-4.jpg'
        ]
    },
    {
        id: 'lengeh-slouch-blouse-ecru',
        name: 'بلوز یقه ایستاده دراپه اکرو',
        englishName: 'Slouch-neck blouse ecru',
        subtitle: 'کالکشن پاییز ۲۰۲۶ — کرپ ابریشم طبیعی',
        category: 'shirting',
        gender: 'women',
        collection: 'پاییز ۲۰۲۶',
        price: 470,
        colorway: 'اکرو / کرم استخوانی (Ecru)',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1000&q=85',
        badge: 'جدید',
        sizes: [
            '34',
            '36',
            '38',
            '40'
        ],
        description: 'بلوز ظریف و سیال با یقه بلند دراپه نرم. دوخته‌شده از کرپ ابریشم با وقار بی‌انتها و افتادگی طبیعی بر اندام.',
        details: [
            'کرپ ابریشم توت خالص با فینیش مات شیک',
            'یقه ایستاده نرم با دراپه طبیعی بدون دکمه مزاحم',
            'زیپ مخفی روان در پشت گردن',
            'سرآستین‌های آزاد مینی‌مال'
        ],
        fabric: '۱۰۰٪ کرپ ابریشم طبیعی'
    },
    {
        id: 'lengeh-croco-skirt-black',
        name: 'دامن چرمی با طرح کروکودیل',
        englishName: 'Paneled croco-embossed skirt d...',
        subtitle: 'کالکشن پاییز ۲۰۲۶ — چرم طبیعی برجسته',
        category: 'bottoms',
        gender: 'women',
        collection: 'پاییز ۲۰۲۶',
        price: 1700,
        colorway: 'مشکی چرم کروکودیل (Deep Black)',
        colorsCount: 1,
        colorsLabel: '1 color',
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=85',
        badge: 'تعداد محدود',
        sizes: [
            '34',
            '36',
            '38',
            '40'
        ],
        description: 'دامن کوتاه پنل‌بندی‌شده A-Line از چرم طبیعی با بافت برجسته تمساح/کروکودیل. برش هندسی مدرن با خطوط خیاطی دقیق.',
        details: [
            '۱۰۰٪ چرم گوساله طبیعی با نقش برجسته کروکودیل دست‌ساز',
            'پنل‌های برش‌خورده ارگونومیک با دوخت تونال محکم',
            'آستر ابریشم کوپرو تنفس‌پذیر و نرم',
            'زیپ فلزی نقره‌ای مات در پشت'
        ],
        fabric: '۱۰۰٪ چرم طبیعی، آستر ابریشم کوپرو'
    },
    {
        id: 'lengeh-slingback-shoes-black',
        name: 'کفش چرمی پاشنه‌دار اسلینگ‌بک',
        englishName: 'Classic leather slingbacks black',
        subtitle: 'کالکشن پاییز ۲۰۲۶ — چرم دست‌دوز ایتالیا',
        category: 'footwear',
        gender: 'women',
        collection: 'پاییز ۲۰۲۶',
        price: 600,
        colorway: 'مشکی براق کلاسیک (Classic Black)',
        colorsCount: 1,
        colorsLabel: '1 color',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1000&q=85',
        badge: 'طراحی ویژه',
        sizes: [
            '36',
            '37',
            '38',
            '39',
            '40',
            '41'
        ],
        description: 'کفش اسلینگ‌بک نوک‌تیز کلاسیک با پاشنه باریک کیتن ۴.۵ سانتی‌متر. ساخت دست استادکاران فلورانس با چرم نرم دست‌چین.',
        details: [
            'چرم نرم طبیعی دانه کامل ایتالیا',
            'پاشنه متناسب کیتن ۴.۵ سانتی‌متری بسیار راحت',
            'بند پشت پا با کشسانی مخفی برای فیت ایده‌آل',
            'کفی بالشتک‌دار ضدخستگی چرمی'
        ],
        fabric: '۱۰۰٪ چرم طبیعی ایتالیا'
    },
    {
        id: 'lengeh-fudoshin-tee',
        name: 'تیشرت fudoshin',
        englishName: 'Fudoshin heavy cotton tee',
        subtitle: 'کالکشن SHIBUI — پنبه سنگین ژاپنی',
        category: 'shirting',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 185,
        colorway: 'مشکی دودی / زغالی مات',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85',
        badge: 'طراحی شاخص',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'تیشرت نخی گرماژ سنگین با مفهوم سنتی ژاپنی فودوشین (Fudoshin — ذهن آرام و تزلزل‌ناپذیر). دوخت مقاوم دوطرفه و تناسب مدرن جعبه‌ای.',
        details: [
            'پنبه شانه شده ۱۰۰٪ خالص ۳۲۰ گرم',
            'یقه گرد متراکم و کشبافت ضدپیچش',
            'برش باکس کات آزاد و مدرن',
            'رنگرزی طبیعی معدنی با ماندگاری بالا'
        ],
        fabric: '۱۰۰٪ پنبه ارگانیک ژاپنی'
    },
    {
        id: 'lengeh-fuji-unisex-tee',
        name: 'تیشرت یونیسکس FUJI',
        englishName: 'FUJI unisex heavy tee',
        subtitle: 'کالکشن SHIBUI — پنبه سنگین ژاپنی',
        category: 'shirting',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 185,
        colorway: 'سفید گچی / مشکی کربنی',
        colorsCount: 3,
        colorsLabel: '3 colors',
        image: '/looks/look-4.jpg',
        secondaryImage: '/looks/look-alt-3.jpg',
        badge: 'پیشنهاد ویژه',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'تیشرت یونیسکس با سیلوئت آزاد و افتاده (Oversized) دوخته‌شده از پنبه خالص گرماژ سنگین ۳۲۰ گرم با بافت سنتی ژاپنی. الهام‌گرفته از مینیمالیسم کوه فوجی و زیبایی‌شناسی Shibui.',
        details: [
            'پنبه سنگین ارگانیک ۳۲۰ گرم با بافت فشرده',
            'یقه گرد کشبافت دوتایی مقاوم در برابر دفرمه شدن',
            'برش سرشانه افتاده یونیسکس مناسب خانم‌ها و آقایان',
            'چاپ دست‌ساز مینیمال نشان لنگه در پشت یقه',
            'تولید محدود در توکیو، ژاپن'
        ],
        fabric: '۱۰۰٪ پنبه ارگانیک ژاپنی'
    },
    {
        id: 'lengeh-deflated-sweatshirt',
        name: 'دورس زنانه DEFLATED',
        englishName: 'DEFLATED women sweatshirt',
        subtitle: 'کالکشن OUTSPOKEN — پارچه دورس براش',
        category: 'knitwear',
        gender: 'women',
        collection: 'OUTSPOKEN',
        price: 260,
        colorway: 'سرمه‌ای اقیانوسی عمیق',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: '/women/look-4.jpg',
        secondaryImage: '/women/look-3.jpg',
        badge: 'پیشنهاد ویژه',
        sizes: [
            'XS',
            'S',
            'M',
            'L'
        ],
        description: 'دورس ساختاریافته زنانه با فرم منحصر‌به‌فرد دوانفلاته‌شده در لبه‌ها و مچ دست. دوخته‌شده از ترکیب پنبه براش فرانسوی و الیاف طبیعی نرم با لطافت و ماندگاری مثال‌زدنی.',
        details: [
            'پارچه دورس سه نخ پنبه فرانسوی براش‌خورده',
            'برش پف‌دار آرنج و آستین با کشسانی کنترل‌شده',
            'دوخت دوبل در درزهای اصلی برای حفظ فرم در درازمدت',
            'مچ و پایین لباس دارای کشبافت ظریف فلت',
            'طراحی اختصاصی استودیوی لنگه'
        ],
        fabric: '۹۲٪ پنبه پریمیوم، ۸٪ الاستین طبیعی'
    },
    {
        id: 'lengeh-kura-oversized-hoodie',
        name: 'هودی اورسایز KURA',
        englishName: 'KURA oversized hoodie',
        subtitle: 'کالکشن SHIBUI — پنبه دو رو گرماژ سنگین',
        category: 'knitwear',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 240,
        colorway: 'مشکی کربنی مات',
        colorsCount: 3,
        colorsLabel: '3 colors',
        image: '/looks/look-alt-1.jpg',
        secondaryImage: '/looks/look-alt-4.jpg',
        badge: 'پیشنهاد ویژه',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'هودی اورسایز با کلاه دوبل ساختاریافته و جیب‌های پنهان کانگورویی. الهام‌گرفته از معماری مینیمال ژاپن.',
        details: [
            'پنبه دو رو سنگین ۴۲۰ گرم',
            'کلاه دولایه با ایستایی بدون بند کشی',
            'سرآستین‌های فلت با بافت فشرده',
            'تولید محدود در توکیو'
        ],
        fabric: '۱۰۰٪ پنبه سنگین ژاپنی'
    },
    {
        id: 'lengeh-arch-wool-coat',
        name: 'پالتو پشمی ARCH',
        englishName: 'ARCH tailored wool coat',
        subtitle: 'کالکشن OUTSPOKEN — پشم بکر ایتالیا',
        category: 'outerwear',
        gender: 'women',
        collection: 'OUTSPOKEN',
        price: 480,
        colorway: 'خاکستری سنگی ملانژ',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: '/looks/look-1.jpg',
        secondaryImage: '/looks/look-2.jpg',
        badge: 'تعداد محدود',
        sizes: [
            'XS',
            'S',
            'M',
            'L'
        ],
        description: 'پالتوی کانسپچوال بلند با برش‌های زاویه‌دار و آستر ابریشمی تنفس‌پذیر.',
        details: [
            'پشم ویرجین دوطرفه ۵۰۰ گرم',
            'برش شانه ساختاریافته بدون اپل مصنوعی',
            'دوخت دستی لبه‌ها و یقه مینیمال'
        ],
        fabric: '۹۰٪ پشم خالص، ۱۰٪ کشمیر'
    },
    ...HERO_PRODUCTS,
    {
        id: 'lengeh-mohair-cardigan',
        name: 'کاردیگان موهر پاییزی لنگه',
        englishName: 'Tokyo gradient mohair cardigan',
        subtitle: 'همکاری ویژه طراحان توکیو',
        category: 'collaborations',
        gender: 'unisex',
        collection: 'پاییز ۲۰۲۶',
        price: 380,
        colorway: 'آمبره کهربایی و زنگاری',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85',
        badge: 'دست‌بافت ویژه',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'بافت انحصاری از الیاف موهر بز کید موهر فوق‌العاده لطیف. بافته‌شده در ژاپن با گرادیان رنگی گرم فصلی و دکمه‌های صدف طبیعی تراش‌خورده.',
        details: [
            'بافته‌شده در ژاپن',
            '۵۵٪ کید موهر، ۳۰٪ نایلون، ۱۵٪ پشم مرینوس',
            'دکمه‌های صدف طبیعی صددرصد اصیل',
            'کشبافت متراکم در سرآستین و لبه پایین'
        ],
        fabric: 'ترکیب موهر اعلا و پشم'
    },
    {
        id: 'lengeh-nfl-varsity',
        name: 'ژاکت ورسیتی پشمی و آستین چرم لنگه',
        englishName: 'Melton wool varsity jacket',
        subtitle: 'کپسول پرچمدار پاییز',
        category: 'collaborations',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 895,
        colorway: 'سرمه‌ای عمیق / استخوانی',
        colorsCount: 1,
        colorsLabel: '1 color',
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=85',
        badge: 'طراحی آرشیوی',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'تلفیقی از سنت ورسیتی با استانداردهای لوکس. بدنه پشمی ملتون سنگین، آستین‌های چرم طبیعی گوساله، گلدوزی‌های نمدی برجسته و آستر ساتن لحاف‌دوزی.',
        details: [
            'بدنه پشمی ملتون فوق‌العاده سنگین',
            'آستین‌های چرم طبیعی گوساله نرم',
            'پچ‌های دست‌دوز شنیل و دوخت زنجیره‌ای',
            'دکمه‌های فشاری فلزی منقوش به برند لنگه'
        ],
        fabric: 'بدنه پشم خالص، آستین‌های ۱۰۰٪ چرم طبیعی'
    },
    {
        id: 'lengeh-cashmere-mockneck',
        name: 'پلیور کشمیر موک‌نک پیچ‌بافت لنگه',
        englishName: 'Cable-knit cashmere mockneck',
        subtitle: 'بافت اصیل و ماندگار',
        category: 'knitwear',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 440,
        colorway: 'جو دوسر ملانژ روشن',
        colorsCount: 3,
        colorsLabel: '3 colors',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
        badge: '۱۰۰٪ کشمیر خالص',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'کشمیر خالص درجه یک مغولستان با بافت کابلی برجسته و یقه کوتاه موک‌نک با نهایت لطافت و گرمای بی‌وزن.',
        details: [
            '۱۰۰٪ کشمیر طبیعی درجه یک مغولستان',
            'طرح بافت کابل سه‌بعدی چندجهته',
            'فینیش براشینگ‌شده برای نهایت لطافت'
        ],
        fabric: '۱۰۰٪ کشمیر مغولستان'
    },
    {
        id: 'lengeh-striped-poplin-shirt',
        name: 'پیراهن پوپلین راه‌راه کتان لنگه',
        englishName: 'Striped organic poplin shirt',
        subtitle: 'پیراهن چهارفصل مینیمال',
        category: 'shirting',
        gender: 'men',
        collection: 'پاییز ۲۰۲۶',
        price: 195,
        colorway: 'آبی سنگی / راه‌راه استخوانی',
        colorsCount: 2,
        colorsLabel: '2 colors',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        description: 'پوپلین کتان ارگانیک ۱۲۰ دولا با یقه کشیده اتوکشیده، لبه منحنی پایین و گلدوزی نامحسوس نشان لنگه بر سینه.',
        details: [
            'کتان ارگانیک فشرده ۱۲۰/۲',
            'دکمه‌های صدفی طبیعی با دوخت ضربدری',
            'جیب روی سینه با محل اختصاصی قلم'
        ],
        fabric: '۱۰۰٪ پنبه ارگانیک اعلا'
    },
    {
        id: 'lengeh-corduroy-overshirt',
        name: 'اورشرت کبریتی درشت لنگه',
        subtitle: 'پیراهن و کت کژوال پاییزه',
        category: 'shirting',
        price: 220,
        colorway: 'قهوه‌ای اسپرسو',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'پارچه کبریتی ضخیم ۸ خط کتان با شستشوی وینتیج برای نهایت نرمی. قابل پوشیدن به عنوان کت سبک یا پیراهن رویی فصلی.',
        details: [
            'مخمل کبریتی کتان سنگین ۸ خط',
            'دکمه‌های فشاری فلزی با روکش لعابی مات',
            'دو جیب پاکتی سرپوش‌دار روی سینه'
        ],
        fabric: '۱۰۰٪ کتان کبریتی طبیعی'
    },
    {
        id: 'lengeh-aviator-sunglasses',
        name: 'عینک آفتابی تیتانیوم خلبانی لنگه',
        subtitle: 'دست‌ساز سابائه، ژاپن',
        category: 'accessories',
        price: 245,
        colorway: 'طلایی مات / عدسی گرادیان عسلی',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'تک‌سایز'
        ],
        description: 'دست‌ساز در شهر تاریخی سابائه ژاپن با فریم سیمی بتا-تیتانیوم فوق‌العاده سبک، کنده‌کاری ظریف روی پل بینی و عدسی‌های محافظت ۱۰۰٪ اشعه UV.',
        details: [
            'ساختار قاب بتا تیتانیوم ضدحساسیت',
            'هسته دسته با حکاکی‌های هنری اختصاصی',
            'پوشش آنتی‌رفلکس داخلی عدسی',
            'همراه با جلد چرمی هاردکیس نشان‌دار'
        ],
        fabric: 'بتا تیتانیوم و عدسی‌های نایلونی ژاپنی'
    },
    {
        id: 'lengeh-shibui-kimono-jacket',
        name: 'کیمونو ژاکت مینیمال SHIBUI',
        englishName: 'Shibui minimal kimono wrap jacket',
        subtitle: 'کالکشن SHIBUI — پشم و کتان ژاپنی',
        category: 'outerwear',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 320,
        colorway: 'مشکی زغالی ملانژ',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'S',
            'M',
            'L'
        ],
        description: 'ژاکت کیمونویی مدرن بدون دکمه با برش ارگونومیک، خطوط تمیز و افتادگی طبیعی پارچه.',
        details: [
            'بافت تلفیقی پشم و لینن با وزن ۳۸۰ گرم',
            'برش شانه افتاده ژاپنی',
            'جیب‌های مخفی در درز پهلو'
        ],
        fabric: '۶۰٪ پشم ویرجین، ۴۰٪ کتان ارگانیک'
    },
    {
        id: 'lengeh-shibui-wide-trouser',
        name: 'شلوار واید کتان SHIBUI',
        englishName: 'Shibui pleated wide-leg trouser',
        subtitle: 'کالکشن SHIBUI — خیاطی مینیمال توکیو',
        category: 'bottoms',
        gender: 'men',
        collection: 'SHIBUI',
        price: 285,
        colorway: 'خاکی سنگی مات',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '30',
            '32',
            '34',
            '36'
        ],
        description: 'شلوار واید با دو پیلی عمیق رو به جلو و خط اتوی ساختاریافته الهام‌گرفته از لباس‌های سنتی سامورایی.',
        details: [
            'کتان ۱۰۰٪ توئیل فشرده ژاپنی',
            'خط اتوی بادوام و پیلی‌های دوبل',
            'تنظیم‌کننده کمری مخفی'
        ],
        fabric: '۱۰۰٪ کتان سنگین ژاپنی'
    },
    {
        id: 'lengeh-shibui-linen-shirt',
        name: 'پیراهن لینن یقه کوبایی SHIBUI',
        englishName: 'Shibui relaxed camp-collar shirt',
        subtitle: 'کالکشن SHIBUI — لینن دست‌بافت',
        category: 'shirting',
        gender: 'men',
        collection: 'SHIBUI',
        price: 195,
        colorway: 'سفید استخوانی طبیعی',
        colorsCount: 3,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'پیراهن یقه کوبایی آزاد از جنس کتان و لینن تنفس‌پذیر با دکمه‌های چوبی خراطی‌شده.',
        details: [
            'لینن طبیعی نرم‌شده با آنزیم',
            'دکمه‌های چوب گردو',
            'لبه صاف پایین پیراهن'
        ],
        fabric: '۱۰۰٪ لینن ارگانیک'
    },
    {
        id: 'lengeh-shibui-canvas-tote',
        name: 'کیف توت کرباس موم‌زده SHIBUI',
        englishName: 'Shibui heavy waxed canvas tote',
        subtitle: 'کالکشن SHIBUI — کرباس سنتی کوراشیکی',
        category: 'accessories',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 160,
        colorway: 'زیتونی نظامی مات',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'تک‌سایز'
        ],
        description: 'کیف دست‌ساز از پارچه کرباس سنگین کوراشیکی با موم طبیعی پارافین و دسته‌های چرم طبیعی گاو.',
        details: [
            'کرباس نمره ۱۶ موم‌زده ضدآب',
            'دسته‌های چرم طبیعی ایتالیایی',
            'پرچ‌های مسی چکش‌خورده'
        ],
        fabric: 'کرباس پنبه‌ای موم‌خورده و چرم طبیعی'
    },
    {
        id: 'lengeh-shibui-pleated-culotte',
        name: 'دامن شلواری پیلی‌دار SHIBUI',
        englishName: 'Shibui pleated culotte skirt',
        subtitle: 'کالکشن SHIBUI — پشم و ابریشم راسته',
        category: 'bottoms',
        gender: 'women',
        collection: 'SHIBUI',
        price: 275,
        colorway: 'خاکستری سنگی زغالی',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '34',
            '36',
            '38',
            '40'
        ],
        description: 'سیلوئت مدرن با حجم هندسی آزاد و پیلی‌های دقیق که در حرکت به زیبایی جریان پیدا می‌کنند.',
        details: [
            'ترکیب پشم و ابریشم سبک',
            'کمر کشی الاستیک مخفی در پشت',
            'آستر کامل کوپرو'
        ],
        fabric: '۷۰٪ پشم، ۳۰٪ ابریشم طبیعی'
    },
    {
        id: 'lengeh-shibui-knit-vest',
        name: 'جلیقه بافت اورسایز SHIBUI',
        englishName: 'Shibui oversized wool vest',
        subtitle: 'کالکشن SHIBUI — پشم مرینوس دست‌بافت',
        category: 'knitwear',
        gender: 'women',
        collection: 'SHIBUI',
        price: 210,
        colorway: 'کرم خاکی جوی دوسر',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'XS/S',
            'M/L'
        ],
        description: 'جلیقه بدون آستین یقه هفت عمیق با بافت درشت و برش سرشانه افتاده برای لایه‌بندی در پاییز.',
        details: [
            'پشم مرینوس خالص استرالیایی',
            'بافت متراکم ۷ گیج',
            'یقه هفت لبه‌دوزی شده'
        ],
        fabric: '۱۰۰٪ پشم مرینوس خالص'
    },
    {
        id: 'lengeh-shibui-leather-mules',
        name: 'مول چرمی دست‌دوز SHIBUI',
        englishName: 'Shibui handcrafted leather mules',
        subtitle: 'کالکشن SHIBUI — چرم دباغی گیاهی',
        category: 'footwear',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 350,
        inStock: false,
        colorway: 'مشکی کربنی مات',
        colorsCount: 1,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '38',
            '39',
            '40',
            '41',
            '42',
            '43'
        ],
        description: 'کفش مول جلو بسته با لبه‌های فرم‌یافته چرم طبیعی بدون درز مزاحم برای حداکثر راحتی و زیبایی بی‌تکلف.',
        details: [
            'چرم طبیعی گاو دباغی گیاهی',
            'کفی آناتومیک چرمی قالب‌گیری شده',
            'زیره سبک لاستیکی'
        ],
        fabric: '۱۰۰٪ چرم طبیعی اصل'
    },
    {
        id: 'lengeh-shibui-raglan-sweat',
        name: 'سوییشرت رگلان نخی SHIBUI',
        englishName: 'Shibui loopback raglan sweatshirt',
        subtitle: 'کالکشن SHIBUI — پنبه لوپ‌بک ژاپنی',
        category: 'knitwear',
        gender: 'men',
        collection: 'SHIBUI',
        price: 220,
        colorway: 'طوسی سیمانی ملانژ',
        colorsCount: 3,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'سوییشرت آستین رگلان با درزهای فلت‌لاک چهارسوزنه و پارچه نخی تنفس‌پذیر سنگین.',
        details: [
            'پنبه لوپ‌بک ۴۲۰ گرم',
            'درزهای مسطح فلت‌لاک',
            'کشبافت ارتجاعی در مچ و کمر'
        ],
        fabric: '۱۰۰٪ پنبه ارگانیک'
    },
    {
        id: 'lengeh-shibui-wool-beanie',
        name: 'کلاه بینه پشم مرینوس SHIBUI',
        englishName: 'Shibui ribbed merino watch cap',
        subtitle: 'کالکشن SHIBUI — بافت ریب متراکم',
        category: 'accessories',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 95,
        colorway: 'خاکستری تیره گرانیت',
        colorsCount: 3,
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'تک‌سایز'
        ],
        description: 'کلاه کوتاه واچ‌کپ کلاسیک با بافت ریب کشی فشرده و عایق گرمایی عالی.',
        details: [
            '۱۰۰٪ پشم مرینوس فوق‌باریک',
            'دوخت یکپارچه بدون درز',
            'لبه تاخورده دولایه'
        ],
        fabric: '۱۰۰٪ پشم مرینوس فوق‌العاده لطیف'
    },
    {
        id: 'lengeh-shibui-minimal-belt',
        name: 'کمربند چرمی دست‌ساز SHIBUI',
        englishName: 'Shibui brass buckle leather belt',
        subtitle: 'کالکشن SHIBUI — چرم چرخ‌دوز سنگین',
        category: 'accessories',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 130,
        colorway: 'قهوه‌ای گردویی کهنه',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '85',
            '90',
            '95',
            '100'
        ],
        description: 'کمربند باریک ۳ سانتی‌متری با سگک برنجی ریخته‌گری دستی مات و چرم طبیعی ضخیم ۴ میلی‌متر.',
        details: [
            'چرم طبیعی ۴ میلی‌متری',
            'سگک برنجی مات ژاپنی',
            'لبه‌های صیقل‌خورده دستی'
        ],
        fabric: 'چرم طبیعی گاو و برنج ریخته‌گری'
    },
    {
        id: 'lengeh-shibui-tailored-shorts',
        name: 'شورت تیلورد کتان SHIBUI',
        englishName: 'Shibui tailored pleat shorts',
        subtitle: 'کالکشن SHIBUI — توئیل کتان سنگین',
        category: 'bottoms',
        gender: 'men',
        collection: 'SHIBUI',
        price: 175,
        colorway: 'مشکی دودی',
        colorsCount: 2,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '30',
            '32',
            '34',
            '36'
        ],
        description: 'شورت نیمه‌بلند راسته با پیلی‌های ظریف جلو و خط برش تمیز بالای زانو.',
        details: [
            'توئیل کتان ۲۸۰ گرم',
            'جیب‌های فیلتابی پشت با دکمه مخفی',
            'بند کمر داخلی'
        ],
        fabric: '۱۰۰٪ پنبه توئیل فشرده'
    },
    {
        id: 'lengeh-shibui-structured-coat',
        name: 'بارانی ساختاریافته SHIBUI',
        englishName: 'Shibui structural trench mac',
        subtitle: 'کالکشن SHIBUI — گاباردین ضدآب ژاپنی',
        category: 'outerwear',
        gender: 'women',
        collection: 'SHIBUI',
        price: 580,
        colorway: 'کرم سنگی خنثی',
        colorsCount: 1,
        image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            '36',
            '38',
            '40'
        ],
        description: 'بارانی تک‌ردیف دکمه با یقه متحرک، برش سرشانه رگلان و پارچه گاباردین متراکم با دفع قطرات آب.',
        details: [
            'گاباردین کتان ضدآب ژاپنی',
            'دکمه‌های شاخ طبیعی',
            'چاک بلند پشت با دکمه'
        ],
        fabric: '۱۰۰٪ گاباردین پنبه ضدآب'
    },
    {
        id: 'lengeh-shibui-pocket-tee',
        name: 'تیشرت تک‌جیب بیسیک SHIBUI',
        englishName: 'Shibui relaxed pocket tee',
        subtitle: 'کالکشن SHIBUI — پنبه شانه شده خالص',
        category: 'shirting',
        gender: 'unisex',
        collection: 'SHIBUI',
        price: 150,
        colorway: 'سفید مینیمال خام',
        colorsCount: 3,
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=85',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        description: 'تیشرت راحتی با جیب زاویه‌دار ظریف روی سینه و بافت نرم و بدون گره پنبه.',
        details: [
            'پنبه شانه شده ۲۴۰ گرم',
            'جیب پاکتی بدون دوخت روی سینه',
            'یقه گرد ۱.۵ سانتی‌متری'
        ],
        fabric: '۱۰۰٪ پنبه ارگانیک'
    }
];
const LOOKBOOK_STORIES = [
    {
        id: 'look-1',
        title: 'لوک ۰۱ — ست بلوزون شریدان',
        season: 'پاییز ۲۰۲۶',
        model: 'مالیک ونس',
        photographer: 'آستین هارگریو',
        image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=85',
        productIds: [
            'lengeh-sheridan-blouson',
            'lengeh-pleated-trouser',
            'lengeh-woven-duffel',
            'lengeh-needles-boot'
        ],
        quote: 'تمرینی در انضباط سیلوئت و فرم: پیوند راحتی پوشاک ورزشی اصیل با شکوه معماری خیاطی سفارشی سویل رو.'
    },
    {
        id: 'look-2',
        title: 'لوک ۰۴ — کپسول موهر میراث کهن',
        season: 'پاییز ۲۰۲۶',
        model: 'کنزو ام.',
        photographer: 'تاکاشی شیبویا',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85',
        productIds: [
            'lengeh-mohair-cardigan',
            'lengeh-pleated-trouser'
        ],
        quote: 'آمریکانای کلاسیک با عبور از خیابان‌های توکیو و نگاه معاصر و شهری.'
    },
    {
        id: 'look-3',
        title: 'لوک ۰۸ — میراث پشم و کتان شهری',
        season: 'پاییز ۲۰۲۶',
        model: 'جردن لی',
        photographer: 'آستین هارگریو',
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=85',
        productIds: [
            'lengeh-nfl-varsity',
            'lengeh-striped-poplin-shirt'
        ],
        quote: 'ارتقای پوشاک ورزشی سنتی با پشم‌های نفیس ایتالیا و چرم‌های نرم دست‌ساز دباغی‌شده.'
    }
];
const CATEGORIES = [
    {
        id: 'all',
        label: 'همه محصولات'
    },
    {
        id: 'outerwear',
        label: 'کاپشن و کت'
    },
    {
        id: 'shirting',
        label: 'پیراهن و شومیز'
    },
    {
        id: 'knitwear',
        label: 'پلیور و بافت'
    },
    {
        id: 'bottoms',
        label: 'شلوارهای پیلی‌دار'
    },
    {
        id: 'collaborations',
        label: 'کالکشن‌های مشترک'
    },
    {
        id: 'footwear',
        label: 'کفش و بوت'
    },
    {
        id: 'accessories',
        label: 'اکسسوری و کیف'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/entities/cart/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$entities$2f$cart$2f$model$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/entities/cart/model/useCart.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/entities/cart/model/useCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const STORAGE_KEY = 'kith_cart';
function useCart() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCart.useEffect": ()=>{
            try {
                const saved = window.localStorage.getItem(STORAGE_KEY);
                if (saved) setItems(JSON.parse(saved));
            } catch  {
            // Corrupt or unavailable browser storage falls back to an empty cart.
            }
            hydrated.current = true;
        }
    }["useCart.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCart.useEffect": ()=>{
            if (!hydrated.current) return;
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
            } catch  {
            // Storage is optional; the in-memory cart remains usable.
            }
        }
    }["useCart.useEffect"], [
        items
    ]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[add]": (product, size)=>{
            setItems({
                "useCart.useCallback[add]": (previous)=>{
                    const existing = previous.find({
                        "useCart.useCallback[add].existing": (item)=>item.product.id === product.id && item.selectedSize === size
                    }["useCart.useCallback[add].existing"]);
                    return existing ? previous.map({
                        "useCart.useCallback[add]": (item)=>item === existing ? {
                                ...item,
                                quantity: item.quantity + 1
                            } : item
                    }["useCart.useCallback[add]"]) : [
                        ...previous,
                        {
                            product,
                            selectedSize: size,
                            quantity: 1
                        }
                    ];
                }
            }["useCart.useCallback[add]"]);
        }
    }["useCart.useCallback[add]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[updateQuantity]": (productId, size, delta)=>{
            setItems({
                "useCart.useCallback[updateQuantity]": (previous)=>previous.flatMap({
                        "useCart.useCallback[updateQuantity]": (item)=>{
                            if (item.product.id !== productId || item.selectedSize !== size) return [
                                item
                            ];
                            const quantity = item.quantity + delta;
                            return quantity > 0 ? [
                                {
                                    ...item,
                                    quantity
                                }
                            ] : [];
                        }
                    }["useCart.useCallback[updateQuantity]"])
            }["useCart.useCallback[updateQuantity]"]);
        }
    }["useCart.useCallback[updateQuantity]"], []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[remove]": (productId, size)=>{
            setItems({
                "useCart.useCallback[remove]": (previous)=>previous.filter({
                        "useCart.useCallback[remove]": (item)=>!(item.product.id === productId && item.selectedSize === size)
                    }["useCart.useCallback[remove]"])
            }["useCart.useCallback[remove]"]);
        }
    }["useCart.useCallback[remove]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[clear]": ()=>setItems([])
    }["useCart.useCallback[clear]"], []);
    const count = items.reduce((total, item)=>total + item.quantity, 0);
    return {
        items,
        count,
        add,
        updateQuantity,
        remove,
        clear
    };
}
_s(useCart, "qT27izej4Ud1j5Ii3kBeU8JPez0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/entities/product/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/account/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$account$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/account/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/ProfilePage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/AccountModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/account/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the account route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/ProfilePage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/AccountModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/catalog/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$catalog$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/catalog/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/ProductListPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ProductDetailPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/catalog/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the catalog route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/ProductListPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ProductDetailPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/checkout/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$checkout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/checkout/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/CheckoutPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/checkout/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the checkout route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/CheckoutPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/content/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/content/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/AboutPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ContactPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CollectionStoryPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/content/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the content route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/AboutPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ContactPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CollectionStoryPage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/home/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/home/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/HeroSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ProductLookbookCards'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/WomenHeroSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/WomenLookbookCards'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/home/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the home route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/HeroSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/ProductLookbookCards'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/WomenHeroSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/WomenLookbookCards'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/layout/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/widgets/layout/index.ts [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../../components/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/NavigationDrawer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CartDrawer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CloserLookModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/QuickViewModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/SearchModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/widgets/layout/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Public widget API for the layout route family. */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '../../components/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/NavigationDrawer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CartDrawer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/CloserLookModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/QuickViewModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/SearchModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
]);

//# sourceMappingURL=_143b7bo5lqi4m._.js.map