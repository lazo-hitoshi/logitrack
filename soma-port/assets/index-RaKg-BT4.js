(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _E(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sy={exports:{}},nu={},Ay={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),vE=Symbol.for("react.portal"),wE=Symbol.for("react.fragment"),EE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),IE=Symbol.for("react.provider"),SE=Symbol.for("react.context"),AE=Symbol.for("react.forward_ref"),CE=Symbol.for("react.suspense"),xE=Symbol.for("react.memo"),kE=Symbol.for("react.lazy"),Vp=Symbol.iterator;function RE(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var Cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,ky={};function ts(t,e,n){this.props=t,this.context=e,this.refs=ky,this.updater=n||Cy}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ry(){}Ry.prototype=ts.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=ky,this.updater=n||Cy}var sd=id.prototype=new Ry;sd.constructor=id;xy(sd,ts.prototype);sd.isPureReactComponent=!0;var Mp=Array.isArray,Py=Object.prototype.hasOwnProperty,od={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Dy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Py.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:od.current}}function PE(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function NE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function Zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NE(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case vE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zu(o,0):r,Mp(i)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),Ga(i,e,n,"",function(h){return h})):i!=null&&(ad(i)&&(i=PE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Zu(s,l);o+=Ga(s,e,n,u,i)}else if(u=RE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Zu(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Wa={transition:null},OE={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:od};function Oy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ts;ne.Fragment=wE;ne.Profiler=TE;ne.PureComponent=id;ne.StrictMode=EE;ne.Suspense=CE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OE;ne.act=Oy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Py.call(e,u)&&!Ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:SE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IE,_context:t},t.Consumer=t};ne.createElement=Dy;ne.createFactory=function(t){var e=Dy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:AE,render:t}};ne.isValidElement=ad;ne.lazy=function(t){return{$$typeof:kE,_payload:{_status:-1,_result:t},_init:DE}};ne.memo=function(t,e){return{$$typeof:xE,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};ne.unstable_act=Oy;ne.useCallback=function(t,e){return dt.current.useCallback(t,e)};ne.useContext=function(t){return dt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return dt.current.useEffect(t,e)};ne.useId=function(){return dt.current.useId()};ne.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return dt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ne.useRef=function(t){return dt.current.useRef(t)};ne.useState=function(t){return dt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return dt.current.useTransition()};ne.version="18.3.1";Ay.exports=ne;var te=Ay.exports;const bE=_E(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=te,ME=Symbol.for("react.element"),LE=Symbol.for("react.fragment"),FE=Object.prototype.hasOwnProperty,jE=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UE={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FE.call(e,r)&&!UE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ME,type:t,key:s,ref:o,props:i,_owner:jE.current}}nu.Fragment=LE;nu.jsx=by;nu.jsxs=by;Sy.exports=nu;var I=Sy.exports,zc={},Vy={exports:{}},Rt={},My={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Q=B.length;B.push(K);e:for(;0<Q;){var me=Q-1>>>1,ce=B[me];if(0<i(ce,K))B[me]=K,B[Q]=ce,Q=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Q=B.pop();if(Q!==K){B[0]=Q;e:for(var me=0,ce=B.length,ve=ce>>>1;me<ve;){var Nt=2*(me+1)-1,Bt=B[Nt],Dt=Nt+1,Et=B[Dt];if(0>i(Bt,Q))Dt<ce&&0>i(Et,Bt)?(B[me]=Et,B[Dt]=Q,me=Dt):(B[me]=Bt,B[Nt]=Q,me=Nt);else if(Dt<ce&&0>i(Et,Q))B[me]=Et,B[Dt]=Q,me=Dt;else break e}}return K}function i(B,K){var Q=B.sortIndex-K.sortIndex;return Q!==0?Q:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,_=!1,C=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function O(B){if(N=!1,x(B),!C)if(n(u)!==null)C=!0,fn(j);else{var K=n(h);K!==null&&zt(O,K.startTime-B)}}function j(B,K){C=!1,N&&(N=!1,A(y),y=-1),_=!0;var Q=m;try{for(x(K),p=n(u);p!==null&&(!(p.expirationTime>K)||B&&!k());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var ce=me(p.expirationTime<=K);K=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),x(K)}else r(u);p=n(u)}if(p!==null)var ve=!0;else{var Nt=n(h);Nt!==null&&zt(O,Nt.startTime-K),ve=!1}return ve}finally{p=null,m=Q,_=!1}}var U=!1,E=null,y=-1,w=5,S=-1;function k(){return!(t.unstable_now()-S<w)}function R(){if(E!==null){var B=t.unstable_now();S=B;var K=!0;try{K=E(!0,B)}finally{K?T():(U=!1,E=null)}}else U=!1}var T;if(typeof v=="function")T=function(){v(R)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,dn=Je.port2;Je.port1.onmessage=R,T=function(){dn.postMessage(null)}}else T=function(){b(R,0)};function fn(B){E=B,U||(U=!0,T())}function zt(B,K){y=b(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||_||(C=!0,fn(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return B()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=m;m=B;try{return K()}finally{m=Q}},t.unstable_scheduleCallback=function(B,K,Q){var me=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?me+Q:me):Q=me,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,B={id:f++,callback:K,priorityLevel:B,startTime:Q,expirationTime:ce,sortIndex:-1},Q>me?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(N?(A(y),y=-1):N=!0,zt(O,Q-me))):(B.sortIndex=ce,e(u,B),C||_||(C=!0,fn(j))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var K=m;return function(){var Q=m;m=K;try{return B.apply(this,arguments)}finally{m=Q}}}})(Ly);My.exports=Ly;var zE=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE=te,kt=zE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,uo={};function ti(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(uo[t]=e,t=0;t<e.length;t++)Fy.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,$E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},jp={};function HE(t){return Bc.call(jp,t)?!0:Bc.call(Fp,t)?!1:$E.test(t)?jp[t]=!0:(Fp[t]=!0,!1)}function qE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GE(t,e,n,r){if(e===null||typeof e>"u"||qE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GE(e,n,i,r)&&(n=null),r||i===null?HE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),yi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),Up=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ec;function Fs(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function WE(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case yi:return"Portal";case $c:return"Profiler";case hd:return"StrictMode";case Hc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case jy:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function KE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QE(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=QE(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Kc(t,e){Hy(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(js(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function qy(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Wy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YE=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){YE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function Ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function Qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XE=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(XE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,Ni=null,Di=null;function qp(t){if(t=zo(t)){if(typeof th!="function")throw Error(F(280));var e=t.stateNode;e&&(e=au(e),th(t.stateNode,t.type,e))}}function Yy(t){Ni?Di?Di.push(t):Di=[t]:Ni=t}function Xy(){if(Ni){var t=Ni,e=Di;if(Di=Ni=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var rc=!1;function e_(t,e,n){if(rc)return t(e,n);rc=!0;try{return Jy(t,e,n)}finally{rc=!1,(Ni!==null||Di!==null)&&(Zy(),Xy())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var nh=!1;if(An)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{nh=!1}function JE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ks=!1,ml=null,gl=!1,rh=null,ZE={onError:function(t){Ks=!0,ml=t}};function eT(t,e,n,r,i,s,o,l,u){Ks=!1,ml=null,JE.apply(ZE,arguments)}function tT(t,e,n,r,i,s,o,l,u){if(eT.apply(this,arguments),Ks){if(Ks){var h=ml;Ks=!1,ml=null}else throw Error(F(198));gl||(gl=!0,rh=h)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(ni(t)!==t)throw Error(F(188))}function nT(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gp(i),t;if(s===r)return Gp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function n_(t){return t=nT(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var i_=kt.unstable_scheduleCallback,Wp=kt.unstable_cancelCallback,rT=kt.unstable_shouldYield,iT=kt.unstable_requestPaint,Ne=kt.unstable_now,sT=kt.unstable_getCurrentPriorityLevel,md=kt.unstable_ImmediatePriority,s_=kt.unstable_UserBlockingPriority,yl=kt.unstable_NormalPriority,oT=kt.unstable_LowPriority,o_=kt.unstable_IdlePriority,ru=null,rn=null;function aT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:cT,lT=Math.log,uT=Math.LN2;function cT(t){return t>>>=0,t===0?32:31-(lT(t)/uT|0)|0}var ka=64,Ra=4194304;function Us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Us(l):(s&=o,s!==0&&(r=Us(s)))}else o=n&~i,o!==0?r=Us(o):s!==0&&(r=Us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function hT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function fT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,yd,c_,h_,d_,sh=!1,Pa=[],nr=null,rr=null,ir=null,fo=new Map,po=new Map,Wn=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mT(t,e,n,r,i){switch(e){case"focusin":return nr=Ps(nr,t,e,n,r,i),!0;case"dragenter":return rr=Ps(rr,t,e,n,r,i),!0;case"mouseover":return ir=Ps(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,Ps(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,Ps(po.get(s)||null,t,e,n,r,i)),!0}return!1}function f_(t){var e=Mr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=zo(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){Ka(t)&&n.delete(e)}function gT(){sh=!1,nr!==null&&Ka(nr)&&(nr=null),rr!==null&&Ka(rr)&&(rr=null),ir!==null&&Ka(ir)&&(ir=null),fo.forEach(Qp),po.forEach(Qp)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,gT)))}function mo(t){function e(i){return Ns(i,t)}if(0<Pa.length){Ns(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ns(nr,t),rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),fo.forEach(e),po.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&Wn.shift()}var Oi=Vn.ReactCurrentBatchConfig,vl=!0;function yT(t,e,n,r){var i=he,s=Oi.transition;Oi.transition=null;try{he=1,_d(t,e,n,r)}finally{he=i,Oi.transition=s}}function _T(t,e,n,r){var i=he,s=Oi.transition;Oi.transition=null;try{he=4,_d(t,e,n,r)}finally{he=i,Oi.transition=s}}function _d(t,e,n,r){if(vl){var i=oh(t,e,n,r);if(i===null)pc(t,e,r,wl,n),Kp(t,r);else if(mT(i,t,e,n,r))r.stopPropagation();else if(Kp(t,r),e&4&&-1<pT.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&u_(s),s=oh(t,e,n,r),s===null&&pc(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pc(t,e,r,null,n)}}var wl=null;function oh(t,e,n,r){if(wl=null,t=pd(r),t=Mr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sT()){case md:return 1;case s_:return 4;case yl:case oT:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Zn=null,vd=null,Qa=null;function m_(){if(Qa)return Qa;var t,e=vd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qa=i.slice(t,1<r?1-r:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Yp(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Yp,this.isPropagationStopped=Yp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=Pt(ns),Uo=Ae({},ns,{view:0,detail:0}),vT=Pt(Uo),sc,oc,Ds,iu=Ae({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(sc=t.screenX-Ds.screenX,oc=t.screenY-Ds.screenY):oc=sc=0,Ds=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Xp=Pt(iu),wT=Ae({},iu,{dataTransfer:0}),ET=Pt(wT),TT=Ae({},Uo,{relatedTarget:0}),ac=Pt(TT),IT=Ae({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),ST=Pt(IT),AT=Ae({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CT=Pt(AT),xT=Ae({},ns,{data:0}),Jp=Pt(xT),kT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PT[t])?!!e[t]:!1}function Ed(){return NT}var DT=Ae({},Uo,{key:function(t){if(t.key){var e=kT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OT=Pt(DT),bT=Ae({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Pt(bT),VT=Ae({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),MT=Pt(VT),LT=Ae({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),FT=Pt(LT),jT=Ae({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UT=Pt(jT),zT=[9,13,27,32],Td=An&&"CompositionEvent"in window,Qs=null;An&&"documentMode"in document&&(Qs=document.documentMode);var BT=An&&"TextEvent"in window&&!Qs,g_=An&&(!Td||Qs&&8<Qs&&11>=Qs),em=" ",tm=!1;function y_(t,e){switch(t){case"keyup":return zT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function __(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function $T(t,e){switch(t){case"compositionend":return __(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return t=e.data,t===em&&tm?null:t;default:return null}}function HT(t,e){if(vi)return t==="compositionend"||!Td&&y_(t,e)?(t=m_(),Qa=vd=Zn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var qT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qT[t.type]:e==="textarea"}function v_(t,e,n,r){Yy(r),e=El(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,go=null;function GT(t){P_(t,0)}function su(t){var e=Ti(t);if($y(e))return t}function WT(t,e){if(t==="change")return e}var w_=!1;if(An){var lc;if(An){var uc="oninput"in document;if(!uc){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),uc=typeof rm.oninput=="function"}lc=uc}else lc=!1;w_=lc&&(!document.documentMode||9<document.documentMode)}function im(){Ys&&(Ys.detachEvent("onpropertychange",E_),go=Ys=null)}function E_(t){if(t.propertyName==="value"&&su(go)){var e=[];v_(e,go,t,pd(t)),e_(GT,e)}}function KT(t,e,n){t==="focusin"?(im(),Ys=e,go=n,Ys.attachEvent("onpropertychange",E_)):t==="focusout"&&im()}function QT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(go)}function YT(t,e){if(t==="click")return su(e)}function XT(t,e){if(t==="input"||t==="change")return su(e)}function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:JT;function yo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bc.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var n=sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sm(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZT(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(r!==null&&Id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=om(n,s);var o=om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eI=An&&"documentMode"in document&&11>=document.documentMode,wi=null,ah=null,Xs=null,lh=!1;function am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||wi==null||wi!==pl(r)||(r=wi,"selectionStart"in r&&Id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&yo(Xs,r)||(Xs=r,r=El(ah,"onSelect"),0<r.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},cc={},S_={};An&&(S_=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function ou(t){if(cc[t])return cc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S_)return cc[t]=e[n];return t}var A_=ou("animationend"),C_=ou("animationiteration"),x_=ou("animationstart"),k_=ou("transitionend"),R_=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){R_.set(t,e),ti(e,[t])}for(var hc=0;hc<lm.length;hc++){var dc=lm[hc],tI=dc.toLowerCase(),nI=dc[0].toUpperCase()+dc.slice(1);wr(tI,"on"+nI)}wr(A_,"onAnimationEnd");wr(C_,"onAnimationIteration");wr(x_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(k_,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rI=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tT(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,h),s=u}}}if(gl)throw t=rh,gl=!1,rh=null,t}function ye(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var r=t+"__bubble";n.has(r)||(N_(e,t,2,!1),n.add(r))}function fc(t,e,n){var r=0;e&&(r|=4),N_(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Oa]){t[Oa]=!0,Fy.forEach(function(n){n!=="selectionchange"&&(rI.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,fc("selectionchange",!1,e))}}function N_(t,e,n,r){switch(p_(e)){case 1:var i=yT;break;case 4:i=_T;break;default:i=_d}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}e_(function(){var h=s,f=pd(n),p=[];e:{var m=R_.get(t);if(m!==void 0){var _=wd,C=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":_=OT;break;case"focusin":C="focus",_=ac;break;case"focusout":C="blur",_=ac;break;case"beforeblur":case"afterblur":_=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ET;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=MT;break;case A_:case C_:case x_:_=ST;break;case k_:_=FT;break;case"scroll":_=vT;break;case"wheel":_=UT;break;case"copy":case"cut":case"paste":_=CT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Zp}var N=(e&4)!==0,b=!N&&t==="scroll",A=N?m!==null?m+"Capture":null:m;N=[];for(var v=h,x;v!==null;){x=v;var O=x.stateNode;if(x.tag===5&&O!==null&&(x=O,A!==null&&(O=ho(v,A),O!=null&&N.push(vo(v,O,x)))),b)break;v=v.return}0<N.length&&(m=new _(m,C,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==eh&&(C=n.relatedTarget||n.fromElement)&&(Mr(C)||C[Cn]))break e;if((_||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=h,C=C?Mr(C):null,C!==null&&(b=ni(C),C!==b||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=h),_!==C)){if(N=Xp,O="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Zp,O="onPointerLeave",A="onPointerEnter",v="pointer"),b=_==null?m:Ti(_),x=C==null?m:Ti(C),m=new N(O,v+"leave",_,n,f),m.target=b,m.relatedTarget=x,O=null,Mr(f)===h&&(N=new N(A,v+"enter",C,n,f),N.target=x,N.relatedTarget=b,O=N),b=O,_&&C)t:{for(N=_,A=C,v=0,x=N;x;x=hi(x))v++;for(x=0,O=A;O;O=hi(O))x++;for(;0<v-x;)N=hi(N),v--;for(;0<x-v;)A=hi(A),x--;for(;v--;){if(N===A||A!==null&&N===A.alternate)break t;N=hi(N),A=hi(A)}N=null}else N=null;_!==null&&cm(p,m,_,N,!1),C!==null&&b!==null&&cm(p,b,C,N,!0)}}e:{if(m=h?Ti(h):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var j=WT;else if(nm(m))if(w_)j=XT;else{j=QT;var U=KT}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=YT);if(j&&(j=j(t,h))){v_(p,j,n,f);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Qc(m,"number",m.value)}switch(U=h?Ti(h):window,t){case"focusin":(nm(U)||U.contentEditable==="true")&&(wi=U,ah=h,Xs=null);break;case"focusout":Xs=ah=wi=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,am(p,n,f);break;case"selectionchange":if(eI)break;case"keydown":case"keyup":am(p,n,f)}var E;if(Td)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else vi?y_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(g_&&n.locale!=="ko"&&(vi||y!=="onCompositionStart"?y==="onCompositionEnd"&&vi&&(E=m_()):(Zn=f,vd="value"in Zn?Zn.value:Zn.textContent,vi=!0)),U=El(h,y),0<U.length&&(y=new Jp(y,t,null,n,f),p.push({event:y,listeners:U}),E?y.data=E:(E=__(n),E!==null&&(y.data=E)))),(E=BT?$T(t,n):HT(t,n))&&(h=El(h,"onBeforeInput"),0<h.length&&(f=new Jp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}P_(p,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ho(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=ho(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iI=/\r\n?/g,sI=/\u0000|\uFFFD/g;function hm(t){return(typeof t=="string"?t:""+t).replace(iI,`
`).replace(sI,"")}function ba(t,e,n){if(e=hm(e),hm(t)!==e&&n)throw Error(F(425))}function Tl(){}var uh=null,ch=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,oI=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,aI=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(t){return dm.resolve(null).then(t).catch(lI)}:dh;function lI(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),tn="__reactFiber$"+rs,wo="__reactProps$"+rs,Cn="__reactContainer$"+rs,fh="__reactEvents$"+rs,uI="__reactListeners$"+rs,cI="__reactHandles$"+rs;function Mr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[tn])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[tn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function au(t){return t[wo]||null}var ph=[],Ii=-1;function Er(t){return{current:t}}function _e(t){0>Ii||(t.current=ph[Ii],ph[Ii]=null,Ii--)}function pe(t,e){Ii++,ph[Ii]=t.current,t.current=e}var gr={},at=Er(gr),_t=Er(!1),Hr=gr;function zi(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Il(){_e(_t),_e(at)}function pm(t,e,n){if(at.current!==gr)throw Error(F(168));pe(at,e),pe(_t,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,KE(t)||"Unknown",i));return Ae({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Hr=at.current,pe(at,t),pe(_t,_t.current),!0}function mm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=D_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(at),pe(at,t)):_e(_t),pe(_t,n)}var yn=null,lu=!1,gc=!1;function O_(t){yn===null?yn=[t]:yn.push(t)}function hI(t){lu=!0,O_(t)}function Tr(){if(!gc&&yn!==null){gc=!0;var t=0,e=he;try{var n=yn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,lu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),i_(md,Tr),i}finally{he=e,gc=!1}}return null}var Si=[],Ai=0,Al=null,Cl=0,bt=[],Vt=0,qr=null,_n=1,vn="";function Dr(t,e){Si[Ai++]=Cl,Si[Ai++]=Al,Al=t,Cl=e}function b_(t,e,n){bt[Vt++]=_n,bt[Vt++]=vn,bt[Vt++]=qr,qr=t;var r=_n;t=vn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Qt(e)+i|n<<i|r,vn=s+t}else _n=1<<s|n<<i|r,vn=t}function Sd(t){t.return!==null&&(Dr(t,1),b_(t,1,0))}function Ad(t){for(;t===Al;)Al=Si[--Ai],Si[Ai]=null,Cl=Si[--Ai],Si[Ai]=null;for(;t===qr;)qr=bt[--Vt],bt[Vt]=null,vn=bt[--Vt],bt[Vt]=null,_n=bt[--Vt],bt[Vt]=null}var xt=null,At=null,we=!1,Kt=null;function V_(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,At=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,At=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(we){var e=At;if(e){var n=e;if(!gm(t,e)){if(mh(t))throw Error(F(418));e=sr(n.nextSibling);var r=xt;e&&gm(t,e)?V_(r,n):(t.flags=t.flags&-4097|2,we=!1,xt=t)}}else{if(mh(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,xt=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Va(t){if(t!==xt)return!1;if(!we)return ym(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=At)){if(mh(t))throw M_(),Error(F(418));for(;e;)V_(t,e),e=sr(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=xt?sr(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=At;t;)t=sr(t.nextSibling)}function Bi(){At=xt=null,we=!1}function Cd(t){Kt===null?Kt=[t]:Kt.push(t)}var dI=Vn.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _m(t){var e=t._init;return e(t._payload)}function L_(t){function e(A,v){if(t){var x=A.deletions;x===null?(A.deletions=[v],A.flags|=16):x.push(v)}}function n(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function r(A,v){for(A=new Map;v!==null;)v.key!==null?A.set(v.key,v):A.set(v.index,v),v=v.sibling;return A}function i(A,v){return A=ur(A,v),A.index=0,A.sibling=null,A}function s(A,v,x){return A.index=x,t?(x=A.alternate,x!==null?(x=x.index,x<v?(A.flags|=2,v):x):(A.flags|=2,v)):(A.flags|=1048576,v)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,v,x,O){return v===null||v.tag!==6?(v=Ic(x,A.mode,O),v.return=A,v):(v=i(v,x),v.return=A,v)}function u(A,v,x,O){var j=x.type;return j===_i?f(A,v,x.props.children,O,x.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&_m(j)===v.type)?(O=i(v,x.props),O.ref=Os(A,v,x),O.return=A,O):(O=rl(x.type,x.key,x.props,null,A.mode,O),O.ref=Os(A,v,x),O.return=A,O)}function h(A,v,x,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Sc(x,A.mode,O),v.return=A,v):(v=i(v,x.children||[]),v.return=A,v)}function f(A,v,x,O,j){return v===null||v.tag!==7?(v=zr(x,A.mode,O,j),v.return=A,v):(v=i(v,x),v.return=A,v)}function p(A,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ic(""+v,A.mode,x),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return x=rl(v.type,v.key,v.props,null,A.mode,x),x.ref=Os(A,null,v),x.return=A,x;case yi:return v=Sc(v,A.mode,x),v.return=A,v;case Hn:var O=v._init;return p(A,O(v._payload),x)}if(js(v)||ks(v))return v=zr(v,A.mode,x,null),v.return=A,v;Ma(A,v)}return null}function m(A,v,x,O){var j=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:l(A,v,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return x.key===j?u(A,v,x,O):null;case yi:return x.key===j?h(A,v,x,O):null;case Hn:return j=x._init,m(A,v,j(x._payload),O)}if(js(x)||ks(x))return j!==null?null:f(A,v,x,O,null);Ma(A,x)}return null}function _(A,v,x,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return A=A.get(x)||null,l(v,A,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Aa:return A=A.get(O.key===null?x:O.key)||null,u(v,A,O,j);case yi:return A=A.get(O.key===null?x:O.key)||null,h(v,A,O,j);case Hn:var U=O._init;return _(A,v,x,U(O._payload),j)}if(js(O)||ks(O))return A=A.get(x)||null,f(v,A,O,j,null);Ma(v,O)}return null}function C(A,v,x,O){for(var j=null,U=null,E=v,y=v=0,w=null;E!==null&&y<x.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var S=m(A,E,x[y],O);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(A,E),v=s(S,v,y),U===null?j=S:U.sibling=S,U=S,E=w}if(y===x.length)return n(A,E),we&&Dr(A,y),j;if(E===null){for(;y<x.length;y++)E=p(A,x[y],O),E!==null&&(v=s(E,v,y),U===null?j=E:U.sibling=E,U=E);return we&&Dr(A,y),j}for(E=r(A,E);y<x.length;y++)w=_(E,A,y,x[y],O),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=s(w,v,y),U===null?j=w:U.sibling=w,U=w);return t&&E.forEach(function(k){return e(A,k)}),we&&Dr(A,y),j}function N(A,v,x,O){var j=ks(x);if(typeof j!="function")throw Error(F(150));if(x=j.call(x),x==null)throw Error(F(151));for(var U=j=null,E=v,y=v=0,w=null,S=x.next();E!==null&&!S.done;y++,S=x.next()){E.index>y?(w=E,E=null):w=E.sibling;var k=m(A,E,S.value,O);if(k===null){E===null&&(E=w);break}t&&E&&k.alternate===null&&e(A,E),v=s(k,v,y),U===null?j=k:U.sibling=k,U=k,E=w}if(S.done)return n(A,E),we&&Dr(A,y),j;if(E===null){for(;!S.done;y++,S=x.next())S=p(A,S.value,O),S!==null&&(v=s(S,v,y),U===null?j=S:U.sibling=S,U=S);return we&&Dr(A,y),j}for(E=r(A,E);!S.done;y++,S=x.next())S=_(E,A,y,S.value,O),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),v=s(S,v,y),U===null?j=S:U.sibling=S,U=S);return t&&E.forEach(function(R){return e(A,R)}),we&&Dr(A,y),j}function b(A,v,x,O){if(typeof x=="object"&&x!==null&&x.type===_i&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:e:{for(var j=x.key,U=v;U!==null;){if(U.key===j){if(j=x.type,j===_i){if(U.tag===7){n(A,U.sibling),v=i(U,x.props.children),v.return=A,A=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&_m(j)===U.type){n(A,U.sibling),v=i(U,x.props),v.ref=Os(A,U,x),v.return=A,A=v;break e}n(A,U);break}else e(A,U);U=U.sibling}x.type===_i?(v=zr(x.props.children,A.mode,O,x.key),v.return=A,A=v):(O=rl(x.type,x.key,x.props,null,A.mode,O),O.ref=Os(A,v,x),O.return=A,A=O)}return o(A);case yi:e:{for(U=x.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(A,v.sibling),v=i(v,x.children||[]),v.return=A,A=v;break e}else{n(A,v);break}else e(A,v);v=v.sibling}v=Sc(x,A.mode,O),v.return=A,A=v}return o(A);case Hn:return U=x._init,b(A,v,U(x._payload),O)}if(js(x))return C(A,v,x,O);if(ks(x))return N(A,v,x,O);Ma(A,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(A,v.sibling),v=i(v,x),v.return=A,A=v):(n(A,v),v=Ic(x,A.mode,O),v.return=A,A=v),o(A)):n(A,v)}return b}var $i=L_(!0),F_=L_(!1),xl=Er(null),kl=null,Ci=null,xd=null;function kd(){xd=Ci=kl=null}function Rd(t){var e=xl.current;_e(xl),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){kl=t,xd=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(kl===null)throw Error(F(308));Ci=t,kl.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Lr=null;function Pd(t){Lr===null?Lr=[t]:Lr.push(t)}function j_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(m=e,_=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(_,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,m=typeof C=="function"?C.call(_,p,m):C,m==null)break e;p=Ae({},p,m);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=_,u=p):f=f.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=p}}function wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Bo={},sn=Er(Bo),Eo=Er(Bo),To=Er(Bo);function Fr(t){if(t===Bo)throw Error(F(174));return t}function Dd(t,e){switch(pe(To,e),pe(Eo,t),pe(sn,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}_e(sn),pe(sn,e)}function Hi(){_e(sn),_e(Eo),_e(To)}function z_(t){Fr(To.current);var e=Fr(sn.current),n=Xc(e,t.type);e!==n&&(pe(Eo,t),pe(sn,n))}function Od(t){Eo.current===t&&(_e(sn),_e(Eo))}var Ie=Er(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function bd(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var Ja=Vn.ReactCurrentDispatcher,_c=Vn.ReactCurrentBatchConfig,Gr=0,Se=null,be=null,Ue=null,Nl=!1,Js=!1,Io=0,fI=0;function tt(){throw Error(F(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Md(t,e,n,r,i,s){if(Gr=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?yI:_I,t=n(r,i),Js){s=0;do{if(Js=!1,Io=0,25<=s)throw Error(F(301));s+=1,Ue=be=null,e.updateQueue=null,Ja.current=vI,t=n(r,i)}while(Js)}if(Ja.current=Dl,e=be!==null&&be.next!==null,Gr=0,Ue=be=Se=null,Nl=!1,e)throw Error(F(300));return t}function Ld(){var t=Io!==0;return Io=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?Se.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(F(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?Se.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function So(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Gr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=f,Wr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B_(){}function $_(t,e){var n=Se,r=Ut(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Fd(G_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ao(9,q_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));Gr&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q_(t,e,n,r){e.value=n,e.getSnapshot=r,W_(e)&&K_(t)}function G_(t,e,n){return n(function(){W_(e)&&K_(t)})}function W_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function K_(t){var e=xn(t,1);e!==null&&Yt(e,t,1,-1)}function Em(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=gI.bind(null,Se,t),[e.memoizedState,t]}function Ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return Ut().memoizedState}function Za(t,e,n,r){var i=en();Se.flags|=t,i.memoizedState=Ao(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Vd(r,o.deps)){i.memoizedState=Ao(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Ao(1|e,n,s,r)}function Tm(t,e){return Za(8390656,8,t,e)}function Fd(t,e){return uu(2048,8,t,e)}function Y_(t,e){return uu(4,2,t,e)}function X_(t,e){return uu(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,J_.bind(null,e,t),n)}function jd(){}function ev(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return Gr&21?(Jt(n,e)||(n=a_(),Se.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function pI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{he=n,_c.transition=r}}function rv(){return Ut().memoizedState}function mI(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))sv(e,n);else if(n=j_(t,e,n,r),n!==null){var i=ht();Yt(n,t,r,i),ov(n,e,r)}}function gI(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))sv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,Pd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=j_(t,e,i,r),n!==null&&(i=ht(),Yt(n,t,r,i),ov(n,e,r))}}function iv(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function sv(t,e){Js=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var Dl={readContext:jt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},yI={readContext:jt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mI.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Em,useDebugValue:jd,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Em(!1),e=t[0];return t=pI.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=en();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));Gr&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tm(G_.bind(null,r,s,t),[t]),r.flags|=2048,Ao(9,q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=ze.identifierPrefix;if(we){var n=vn,r=_n;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_I={readContext:jt,useCallback:ev,useContext:jt,useEffect:Fd,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tv,useReducer:vc,useRef:Q_,useState:function(){return vc(So)},useDebugValue:jd,useDeferredValue:function(t){var e=Ut();return nv(e,be.memoizedState,t)},useTransition:function(){var t=vc(So)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1},vI={readContext:jt,useCallback:ev,useContext:jt,useEffect:Fd,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tv,useReducer:wc,useRef:Q_,useState:function(){return wc(So)},useDebugValue:jd,useDeferredValue:function(t){var e=Ut();return be===null?e.memoizedState=t:nv(e,be.memoizedState,t)},useTransition:function(){var t=wc(So)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Yt(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Yt(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=lr(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Yt(e,t,r,n),Xa(e,t,r))}};function Im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function av(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=vt(e)?Hr:at.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=vt(e)?Hr:at.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cu.enqueueReplaceState(i,i.state,null),Rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=WE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wI=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,Ph=r),wh(t,e)},n}function uv(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bI.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var EI=Vn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?F_(e,null,n,r):$i(e,t.child,n,r)}function km(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=Md(t,e,n,r,s,i),n=Ld(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(we&&n&&Sd(e),e.flags|=1,ct(t,e,r,i),e.child)}function Rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cv(t,e,s,r,i)):(t=rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return Eh(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(ki,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(ki,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(ki,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(ki,St),St|=r;return ct(t,e,i,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,r,i){var s=vt(n)?Hr:at.current;return s=zi(e,s),bi(e,i),n=Md(t,e,n,r,s,i),r=Ld(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(we&&r&&Sd(e),e.flags|=1,ct(t,e,n,i),e.child)}function Pm(t,e,n,r,i){if(vt(n)){var s=!0;Sl(e)}else s=!1;if(bi(e,i),e.stateNode===null)el(t,e),av(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=vt(n)?Hr:at.current,h=zi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Sm(e,o,r,h),qn=!1;var m=e.memoizedState;o.state=m,Rl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||_t.current||qn?(typeof f=="function"&&(_h(e,n,f,r),u=e.memoizedState),(l=qn||Im(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Gt(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=vt(n)?Hr:at.current,u=zi(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Sm(e,o,r,u),qn=!1,m=e.memoizedState,o.state=m,Rl(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||_t.current||qn?(typeof _=="function"&&(_h(e,n,_,r),C=e.memoizedState),(h=qn||Im(e,n,h,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,s,i)}function Th(t,e,n,r,i,s){dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mm(e,n,!1),kn(t,e,s);r=e.stateNode,EI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&mm(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(t,e.context,!1),Dd(t,e.containerInfo)}function Nm(t,e,n,r,i){return Bi(),Cd(i),e.flags|=256,ct(t,e,n,r),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Ih,t):Ud(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ud(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&Cd(r),$i(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(F(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fu({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return La(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Ec(s,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Yt(r,t,i,-1))}return Gd(),r=Ec(Error(F(421))),La(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=sr(i.nextSibling),xt=e,we=!0,Kt=null,t!==null&&(bt[Vt++]=_n,bt[Vt++]=vn,bt[Vt++]=qr,_n=t.id,vn=t.overflow,qr=e),e=Ud(e,r.children),e.flags|=4096,e)}function Dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function Tc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,n,e);else if(t.tag===19)Dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function II(t,e,n){switch(e.tag){case 3:fv(e),Bi();break;case 5:z_(e);break;case 1:vt(e.type)&&Sl(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(pe(Ie,Ie.current&1),t=kn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return kn(t,e,n)}var gv,Ah,yv,_v;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};yv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(sn.current);var s=null;switch(n){case"input":i=Wc(t,i),r=Wc(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Yc(t,i),r=Yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}Jc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};_v=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SI(t,e,n){var r=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return vt(e.type)&&Il(),nt(e),null;case 3:return r=e.stateNode,Hi(),_e(_t),_e(at),bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Oh(Kt),Kt=null))),Ah(t,e),nt(e),null;case 5:Od(e);var i=Fr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=Fr(sn.current),Va(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)ye(zs[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":zp(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":$p(r,s),ye("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ca(r),Bp(r,s,!0);break;case"textarea":Ca(r),Hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[wo]=r,gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)ye(zs[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":zp(t,r),i=Wc(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ye("invalid",t);break;case"textarea":$p(t,r),i=Yc(t,r),ye("invalid",t);break;default:i=r}Jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Qy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&cd(t,s,u,o))}switch(n){case"input":Ca(t),Bp(t,r,!1);break;case"textarea":Ca(t),Hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)_v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Fr(To.current),Fr(sn.current),Va(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&At!==null&&e.mode&1&&!(e.flags&128))M_(),Bi(),e.flags|=98560,s=!1;else if(s=Va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[tn]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Kt!==null&&(Oh(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Me===0&&(Me=3):Gd())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Hi(),Ah(t,e),t===null&&_o(e.stateNode.containerInfo),nt(e),null;case 10:return Rd(e.type._context),nt(e),null;case 17:return vt(e.type)&&Il(),nt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Gi&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return nt(e),null}else 2*Ne()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function AI(t,e){switch(Ad(e),e.tag){case 1:return vt(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),_e(_t),_e(at),bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return Hi(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Fa=!1,st=!1,CI=typeof WeakSet=="function"?WeakSet:Set,H=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Om=!1;function xI(t,e){if(uh=vl,t=I_(),Id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},vl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,b=C.memoizedState,A=e.stateNode,v=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:Gt(e.type,N),b);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Re(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=Om,Om=!1,C}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[wo],delete e[fh],delete e[uI],delete e[cI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var He=null,Wt=!1;function zn(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:st||xi(n,e);case 6:var r=He,i=Wt;He=null,zn(t,e,n),He=r,Wt=i,He!==null&&(Wt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Wt?(t=He,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),mo(t)):mc(He,n.stateNode));break;case 4:r=He,i=Wt,He=n.stateNode.containerInfo,Wt=!0,zn(t,e,n),He=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!st&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,zn(t,e,n),st=r):zn(t,e,n);break;default:zn(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CI),e.forEach(function(r){var i=MI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Wt=!1;break e;case 3:He=l.stateNode.containerInfo,Wt=!0;break e;case 4:He=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(He===null)throw Error(F(160));Ev(s,o,i),He=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Re(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),Zt(t),r&4){try{Zs(3,t,t.return),hu(3,t)}catch(N){Re(t,t.return,N)}try{Zs(5,t,t.return)}catch(N){Re(t,t.return,N)}}break;case 1:qt(e,t),Zt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(qt(e,t),Zt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(N){Re(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hy(i,s),Zc(l,o);var h=Zc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Qy(i,p):f==="dangerouslySetInnerHTML"?Wy(i,p):f==="children"?co(i,p):cd(i,f,p,h)}switch(l){case"input":Kc(i,s);break;case"textarea":qy(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Pi(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(N){Re(t,t.return,N)}}break;case 6:if(qt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Re(t,t.return,N)}}break;case 3:if(qt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(N){Re(t,t.return,N)}break;case 4:qt(e,t),Zt(t);break;case 13:qt(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($d=Ne())),r&4&&Vm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||f,qt(e,t),st=h):qt(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Zs(4,m,m.return);break;case 1:xi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Re(r,n,N)}}break;case 5:xi(m,m.return);break;case 22:if(m.memoizedState!==null){Lm(p);continue}}_!==null?(_.return=m,H=_):Lm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ky("display",o))}catch(N){Re(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Re(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),Zt(t),r&4&&Vm(t);break;case 21:break;default:qt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=bm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bm(t);kh(t,l,o);break;default:throw Error(F(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kI(t,e,n){H=t,Iv(t)}function Iv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=Fa;var h=st;if(Fa=o,(st=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):u!==null?(u.return=o,H=u):Fm(i);for(;s!==null;)H=s,Iv(s),s=s.sibling;H=i,Fa=l,st=h}Mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Mm(t)}}function Mm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&xh(e)}catch(m){Re(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Lm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Fm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{xh(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{xh(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var RI=Math.ceil,Ol=Vn.ReactCurrentDispatcher,zd=Vn.ReactCurrentOwner,Lt=Vn.ReactCurrentBatchConfig,oe=0,ze=null,Oe=null,We=0,St=0,ki=Er(0),Me=0,Co=null,Wr=0,du=0,Bd=0,eo=null,pt=null,$d=0,Gi=1/0,gn=null,bl=!1,Ph=null,ar=null,ja=!1,er=null,Vl=0,to=0,Nh=null,tl=-1,nl=0;function ht(){return oe&6?Ne():tl!==-1?tl:tl=Ne()}function lr(t){return t.mode&1?oe&2&&We!==0?We&-We:dI.transition!==null?(nl===0&&(nl=a_()),nl):(t=he,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function Yt(t,e,n,r){if(50<to)throw to=0,Nh=null,Error(F(185));jo(t,n,r),(!(oe&2)||t!==ze)&&(t===ze&&(!(oe&2)&&(du|=n),Me===4&&Kn(t,We)),wt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Gi=Ne()+500,lu&&Tr()))}function wt(t,e){var n=t.callbackNode;dT(t,e);var r=_l(t,t===ze?We:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?hI(jm.bind(null,t)):O_(jm.bind(null,t)),aI(function(){!(oe&6)&&Tr()}),n=null;else{switch(l_(r)){case 1:n=md;break;case 4:n=s_;break;case 16:n=yl;break;case 536870912:n=o_;break;default:n=yl}n=Nv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(tl=-1,nl=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=_l(t,t===ze?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=oe;oe|=2;var s=Cv();(ze!==t||We!==e)&&(gn=null,Gi=Ne()+500,Ur(t,e));do try{DI();break}catch(l){Av(t,l)}while(!0);kd(),Ol.current=s,oe=i,Oe!==null?e=0:(ze=null,We=0,e=Me)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=Co,Ur(t,0),Kn(t,r),wt(t,Ne()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!PI(i)&&(e=Ml(t,r),e===2&&(s=ih(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=Co,Ur(t,0),Kn(t,r),wt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Or(t,pt,gn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=$d+500-Ne(),10<e)){if(_l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(Or.bind(null,t,pt,gn),e);break}Or(t,pt,gn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RI(r/1960))-r,10<r){t.timeoutHandle=dh(Or.bind(null,t,pt,gn),r);break}Or(t,pt,gn);break;case 5:Or(t,pt,gn);break;default:throw Error(F(329))}}}return wt(t,Ne()),t.callbackNode===n?Sv.bind(null,t):null}function Dh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=pt,pt=n,e!==null&&Oh(e)),t}function Oh(t){pt===null?pt=t:pt.push.apply(pt,t)}function PI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Bd,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function jm(t){if(oe&6)throw Error(F(327));Vi();var e=_l(t,0);if(!(e&1))return wt(t,Ne()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Co,Ur(t,0),Kn(t,e),wt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,pt,gn),wt(t,Ne()),null}function Hd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Gi=Ne()+500,lu&&Tr())}}function Kr(t){er!==null&&er.tag===0&&!(oe&6)&&Vi();var e=oe;oe|=1;var n=Lt.transition,r=he;try{if(Lt.transition=null,he=1,t)return t()}finally{he=r,Lt.transition=n,oe=e,!(oe&6)&&Tr()}}function qd(){St=ki.current,_e(ki)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oI(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Hi(),_e(_t),_e(at),bd();break;case 5:Od(r);break;case 4:Hi();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Rd(r.type._context);break;case 22:case 23:qd()}n=n.return}if(ze=t,Oe=t=ur(t.current,null),We=St=e,Me=0,Co=null,Bd=du=Wr=0,pt=eo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function Av(t,e){do{var n=Oe;try{if(kd(),Ja.current=Dl,Nl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(Gr=0,Ue=be=Se=null,Js=!1,Io=0,zd.current=null,n===null||n.return===null){Me=1,Co=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Cm(o);if(_!==null){_.flags&=-257,xm(_,o,l,s,e),_.mode&1&&Am(s,h,e),e=_,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Am(s,h,e),Gd();break e}u=Error(F(426))}}else if(we&&l.mode&1){var b=Cm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),xm(b,o,l,s,e),Cd(qi(u,l));break e}}s=u=qi(u,l),Me!==4&&(Me=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=lv(s,u,e);vm(s,A);break e;case 1:l=u;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ar===null||!ar.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=uv(s,l,e);vm(s,O);break e}}s=s.return}while(s!==null)}kv(n)}catch(j){e=j,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Cv(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function Gd(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(Wr&268435455)&&!(du&268435455)||Kn(ze,We)}function Ml(t,e){var n=oe;oe|=2;var r=Cv();(ze!==t||We!==e)&&(gn=null,Ur(t,e));do try{NI();break}catch(i){Av(t,i)}while(!0);if(kd(),oe=n,Ol.current=r,Oe!==null)throw Error(F(261));return ze=null,We=0,Me}function NI(){for(;Oe!==null;)xv(Oe)}function DI(){for(;Oe!==null&&!rT();)xv(Oe)}function xv(t){var e=Pv(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?kv(t):Oe=e,zd.current=null}function kv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AI(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}else if(n=SI(n,e,St),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Me===0&&(Me=5)}function Or(t,e,n){var r=he,i=Lt.transition;try{Lt.transition=null,he=1,OI(t,e,n,r)}finally{Lt.transition=i,he=r}return null}function OI(t,e,n,r){do Vi();while(er!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fT(t,s),t===ze&&(Oe=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Nv(yl,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=he;he=1;var l=oe;oe|=4,zd.current=null,xI(t,n),Tv(n,t),ZT(ch),vl=!!uh,ch=uh=null,t.current=n,kI(n),iT(),oe=l,he=o,Lt.transition=s}else t.current=n;if(ja&&(ja=!1,er=t,Vl=i),s=t.pendingLanes,s===0&&(ar=null),aT(n.stateNode),wt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,t=Ph,Ph=null,t;return Vl&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===Nh?to++:(to=0,Nh=t):to=0,Tr(),null}function Vi(){if(er!==null){var t=l_(Vl),e=Lt.transition,n=he;try{if(Lt.transition=null,he=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Vl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,_=f.return;if(vv(f),f===h){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,H=A;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,H=x;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(j){Re(l,l.return,j)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(oe=i,Tr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{he=n,Lt.transition=e}}return!1}function Um(t,e,n){e=qi(n,e),e=lv(t,e,1),t=or(t,e,1),e=ht(),t!==null&&(jo(t,1,e),wt(t,e))}function Re(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=qi(n,t),t=uv(e,t,1),e=or(e,t,1),t=ht(),e!==null&&(jo(e,1,t),wt(e,t));break}}e=e.return}}function bI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Me===4||Me===3&&(We&130023424)===We&&500>Ne()-$d?Ur(t,0):Bd|=n),wt(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=ht();t=xn(t,e),t!==null&&(jo(t,e,n),wt(t,n))}function VI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function MI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Rv(t,n)}var Pv;Pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,II(t,e,n);yt=!!(t.flags&131072)}else yt=!1,we&&e.flags&1048576&&b_(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var i=zi(e,at.current);bi(e,n),i=Md(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nd(e),i.updater=cu,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Th(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Sd(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FI(r),t=Gt(r,t),i){case 0:e=Eh(null,e,r,t,n);break e;case 1:e=Pm(null,e,r,t,n);break e;case 11:e=km(null,e,r,t,n);break e;case 14:e=Rm(null,e,r,Gt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Pm(t,e,r,i,n);case 3:e:{if(fv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U_(t,e),Rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qi(Error(F(423)),e),e=Nm(t,e,r,n,i);break e}else if(r!==i){i=qi(Error(F(424)),e),e=Nm(t,e,r,n,i);break e}else for(At=sr(e.stateNode.containerInfo.firstChild),xt=e,we=!0,Kt=null,n=F_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=kn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:s!==null&&hh(r,s)&&(e.flags|=32),dv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return pv(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),km(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(xl,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!_t.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=In(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=jt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),Rm(t,e,r,i,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),el(t,e),e.tag=1,vt(r)?(t=!0,Sl(e)):t=!1,bi(e,n),av(e,r,i),vh(e,r,i,n),Th(null,e,r,!0,t,n);case 19:return mv(t,e,n);case 22:return hv(t,e,n)}throw Error(F(156,e.tag))};function Nv(t,e){return i_(t,e)}function LI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new LI(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FI(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return zr(n.children,i,s,e);case hd:o=8,i|=8;break;case $c:return t=Mt(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Hc:return t=Mt(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case qc:return t=Mt(19,n,e,i),t.elementType=qc,t.lanes=s,t;case zy:return fu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jy:o=10;break e;case Uy:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,l,u){return t=new jI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function UI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dv(t){if(!t)return gr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(vt(n))return D_(t,n,e)}return e}function Ov(t,e,n,r,i,s,o,l,u){return t=Kd(n,r,!0,t,i,s,o,l,u),t.context=Dv(null),n=t.current,r=ht(),i=lr(n),s=In(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,jo(t,i,r),wt(t,r),t}function pu(t,e,n,r){var i=e.current,s=ht(),o=lr(i);return n=Dv(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Yt(t,i,o,s),Xa(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){zm(t,e),(t=t.alternate)&&zm(t,e)}function zI(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}mu.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));pu(t,e,null,null)};mu.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){pu(null,t,null,null)}),e[Cn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&f_(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function BI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ll(o);s.call(h)}}var o=Ov(e,r,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[Cn]=o.current,_o(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ll(u);l.call(h)}}var u=Kd(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=u,t[Cn]=u.current,_o(t.nodeType===8?t.parentNode:t),Kr(function(){pu(e,u,n,r)}),u}function yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ll(o);l.call(u)}}pu(e,o,t,i)}else o=BI(n,e,t,i,r);return Ll(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Us(e.pendingLanes);n!==0&&(gd(e,n|1),wt(e,Ne()),!(oe&6)&&(Gi=Ne()+500,Tr()))}break;case 13:Kr(function(){var r=xn(t,1);if(r!==null){var i=ht();Yt(r,t,1,i)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=ht();Yt(e,t,134217728,n)}Qd(t,134217728)}};c_=function(t){if(t.tag===13){var e=lr(t),n=xn(t,e);if(n!==null){var r=ht();Yt(n,t,e,r)}Qd(t,e)}};h_=function(){return he};d_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};th=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=au(r);if(!i)throw Error(F(90));$y(r),Kc(r,i)}}}break;case"textarea":qy(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Jy=Hd;Zy=Kr;var $I={usingClientEntryPoint:!1,Events:[zo,Ti,au,Yy,Xy,Hd]},Vs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HI={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||zI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{ru=Ua.inject(HI),rn=Ua}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(F(200));return UI(t,e,null,n)};Rt.createRoot=function(t,e){if(!Xd(t))throw Error(F(299));var n=!1,r="",i=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,_o(t.nodeType===8?t.parentNode:t),new Yd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Kr(t)};Rt.hydrate=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ov(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mu(e)};Rt.render=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!gu(t))throw Error(F(40));return t._reactRootContainer?(Kr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Hd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return yu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(t){console.error(t)}}Vv(),Vy.exports=Rt;var qI=Vy.exports,$m=qI;zc.createRoot=$m.createRoot,zc.hydrateRoot=$m.hydrateRoot;const GI="modulepreload",WI=function(t){return"/soma-port/"+t},Hm={},qm=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=WI(u),u in Hm)return;Hm[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":GI,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mv=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>te.createElement("svg",{ref:u,...QI,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Mv("lucide",i),...l},[...o.map(([h,f])=>te.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(t,e)=>{const n=te.forwardRef(({className:r,...i},s)=>te.createElement(YI,{ref:s,iconNode:e,className:Mv(`lucide-${KI(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=Fe("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=Fe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=Fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Fe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=Fe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Fe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=Fe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Fe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Fe("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=Fe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Fe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=Fe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=Fe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Fe("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Fe("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;u||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new fS;const m=s<<2|l>>4;if(r.push(m),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pS=function(t){const e=Lv(t);return Fv.encodeByteArray(e,!0)},Fl=function(t){return pS(t).replace(/\./g,"")},jv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=()=>mS().__FIREBASE_DEFAULTS__,yS=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_S=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jv(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return gS()||yS()||_S()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uv=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vS=t=>{const e=Uv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zv=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},Bv=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function IS(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xS(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kS(){return!IS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function PS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NS,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function DS(t,e){return t.replace(OS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OS=/\{\$([^}]+)}/g;function bS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ym(s)&&Ym(o)){if(!jl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function VS(t,e){const n=new MS(t,e);return n.subscribe.bind(n)}class MS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cc),i.error===void 0&&(i.error=Cc),i.complete===void 0&&(i.complete=Cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(US(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(t){return t===br?void 0:t}function US(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const BS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},$S=ie.INFO,HS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},qS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=$S,this._logHandler=qS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const GS=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function WS(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KS(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,bh=new WeakMap,Hv=new WeakMap,xc=new WeakMap,Zd=new WeakMap;function QS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$v.set(n,t)}).catch(()=>{}),Zd.set(e,t),e}function YS(t){if(bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XS(t){Vh=t(Vh)}function JS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return Hv.set(r,e.sort?e.sort():[e]),cr(r)}:KS().includes(t)?function(...e){return t.apply(kc(this),e),cr($v.get(this))}:function(...e){return cr(t.apply(kc(this),e))}}function ZS(t){return typeof t=="function"?JS(t):(t instanceof IDBTransaction&&YS(t),GS(t,WS())?new Proxy(t,Vh):t)}function cr(t){if(t instanceof IDBRequest)return QS(t);if(xc.has(t))return xc.get(t);const e=ZS(t);return e!==t&&(xc.set(t,e),Zd.set(e,t)),e}const kc=t=>Zd.get(t);function eA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const tA=["get","getKey","getAll","getAllKeys","count"],nA=["put","add","delete","clear"],Rc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Rc.set(e,s),s}XS(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",eg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Jd("@firebase/app"),sA="@firebase/app-compat",oA="@firebase/analytics-compat",aA="@firebase/analytics",lA="@firebase/app-check-compat",uA="@firebase/app-check",cA="@firebase/auth",hA="@firebase/auth-compat",dA="@firebase/database",fA="@firebase/data-connect",pA="@firebase/database-compat",mA="@firebase/functions",gA="@firebase/functions-compat",yA="@firebase/installations",_A="@firebase/installations-compat",vA="@firebase/messaging",wA="@firebase/messaging-compat",EA="@firebase/performance",TA="@firebase/performance-compat",IA="@firebase/remote-config",SA="@firebase/remote-config-compat",AA="@firebase/storage",CA="@firebase/storage-compat",xA="@firebase/firestore",kA="@firebase/vertexai-preview",RA="@firebase/firestore-compat",PA="firebase",NA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="[DEFAULT]",DA={[Mh]:"fire-core",[sA]:"fire-core-compat",[aA]:"fire-analytics",[oA]:"fire-analytics-compat",[uA]:"fire-app-check",[lA]:"fire-app-check-compat",[cA]:"fire-auth",[hA]:"fire-auth-compat",[dA]:"fire-rtdb",[fA]:"fire-data-connect",[pA]:"fire-rtdb-compat",[mA]:"fire-fn",[gA]:"fire-fn-compat",[yA]:"fire-iid",[_A]:"fire-iid-compat",[vA]:"fire-fcm",[wA]:"fire-fcm-compat",[EA]:"fire-perf",[TA]:"fire-perf-compat",[IA]:"fire-rc",[SA]:"fire-rc-compat",[AA]:"fire-gcs",[CA]:"fire-gcs-compat",[xA]:"fire-fst",[RA]:"fire-fst-compat",[kA]:"fire-vertex","fire-js":"fire-js",[PA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,OA=new Map,Fh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Fh.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of xo.values())tg(n,t);for(const n of OA.values())tg(n,t);return!0}function ef(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new $o("app","Firebase",bA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=NA;function qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=zv()),!n)throw hr.create("no-options");const s=xo.get(i);if(s){if(jl(n,s.options)&&jl(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new zS(i);for(const u of Fh.values())o.addComponent(u);const l=new VA(n,r,o);return xo.set(i,l),l}function tf(t=Lh){const e=xo.get(t);if(!e&&t===Lh&&zv())return qv();if(!e)throw hr.create("no-app",{appName:t});return e}function MA(){return Array.from(xo.values())}function dr(t,e,n){var r;let i=(r=DA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}Wi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="firebase-heartbeat-database",FA=1,ko="firebase-heartbeat-store";let Pc=null;function Gv(){return Pc||(Pc=eA(LA,FA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function jA(t){try{const n=(await Gv()).transaction(ko),r=await n.objectStore(ko).get(Wv(t));return await n.done,r}catch(e){if(e instanceof Mn)Rn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function ng(t,e){try{const r=(await Gv()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,Wv(t)),await r.done}catch(n){if(n instanceof Mn)Rn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function Wv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=1024,zA=30*24*60*60*1e3;class BA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:i}=$A(this._heartbeatsCache.heartbeats),s=Fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rn.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function $A(t,e=UA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ig(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?PS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ig(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){Wi(new Qr("platform-logger",e=>new rA(e),"PRIVATE")),Wi(new Qr("heartbeat",e=>new BA(e),"PRIVATE")),dr(Mh,eg,t),dr(Mh,eg,"esm2017"),dr("fire-js","")}qA("");var GA="firebase",WA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(GA,WA,"app");function nf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KA=Kv,Qv=new $o("auth","Firebase",Kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Jd("@firebase/auth");function QA(t,...e){Ul.logLevel<=ie.WARN&&Ul.warn(`Auth (${is}): ${t}`,...e)}function il(t,...e){Ul.logLevel<=ie.ERROR&&Ul.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw rf(t,...e)}function on(t,...e){return rf(t,...e)}function Yv(t,e,n){const r=Object.assign(Object.assign({},KA()),{[e]:n});return new $o("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return Yv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qv.create(t,...e)}function Y(t,e,...n){if(!t)throw rf(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function Nn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YA(){return sg()==="http:"||sg()==="https:"}function sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YA()||AS()||"connection"in navigator)?navigator.onLine:!0}function JA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=TS()||CS()}get(){return XA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new qo(3e4,6e4);function Go(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ss(t,e,n,r,i={}){return Jv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return SS()||(h.referrerPolicy="no-referrer"),Xv.fetch()(Zv(t,t.config.apiHost,n,l),h)})}async function Jv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZA),e);try{const i=new t1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yv(t,f,h);Pn(t,f)}}catch(i){if(i instanceof Mn)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function of(t,e,n,r,i={}){const s=await ss(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sf(t.config,i):`${t.config.apiScheme}://${i}`}class t1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),e1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function e0(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=af(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(Nc(i.auth_time)),issuedAtTime:no(Nc(i.iat)),expirationTime:no(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const i=jv(n);return i?JSON.parse(i):(il("Failed to decode base64 JWT payload"),null)}catch(i){return il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function og(t){const e=af(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&i1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ro(t,e0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t0(s.providerUserInfo):[],l=a1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function o1(t){const e=Ye(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t0(t){return t.map(e=>{var{providerId:n}=e,r=nf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){const n=await Jv(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function u1(t,e){return ss(t,"POST","/v2/accounts:revokeToken",Go(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Ro(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:E}=n;Y(x&&E,e,"internal-error");const y=Mi.fromJSON(this.name,E);Y(typeof x=="string",e,"internal-error"),Bn(p,e.name),Bn(m,e.name),Y(typeof O=="boolean",e,"internal-error"),Y(typeof j=="boolean",e,"internal-error"),Bn(_,e.name),Bn(C,e.name),Bn(N,e.name),Bn(b,e.name),Bn(A,e.name),Bn(v,e.name);const w=new En({uid:x,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:j,photoURL:C,phoneNumber:_,tenantId:N,stsTokenManager:y,createdAt:A,lastLoginAt:v});return U&&Array.isArray(U)&&(w.providerData=U.map(S=>Object.assign({},S))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mi;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?t0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mi;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Map;function Tn(t){Nn(t instanceof Function,"Expected a class definition");let e=ag.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ag.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n0.type="NONE";const lg=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sl(this.userKey,i.apiKey,s),this.fullPersistenceKey=sl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(Tn(lg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Tn(lg);const o=sl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=En._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Li(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l0(e))return"Blackberry";if(u0(e))return"Webos";if(i0(e))return"Safari";if((e.includes("chrome/")||s0(e))&&!e.includes("edge/"))return"Chrome";if(a0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(t=lt()){return/firefox\//i.test(t)}function i0(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s0(t=lt()){return/crios\//i.test(t)}function o0(t=lt()){return/iemobile/i.test(t)}function a0(t=lt()){return/android/i.test(t)}function l0(t=lt()){return/blackberry/i.test(t)}function u0(t=lt()){return/webos/i.test(t)}function lf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c1(t=lt()){var e;return lf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h1(){return xS()&&document.documentMode===10}function c0(t=lt()){return lf(t)||a0(t)||u0(t)||l0(t)||/windows phone/i.test(t)||o0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e=[]){let n;switch(t){case"Browser":n=ug(lt());break;case"Worker":n=`${ug(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e={}){return ss(t,"GET","/v2/passwordPolicy",Go(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=6;class m1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:p1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await e0(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Sn(this));const n=e?Ye(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f1(this),n=new m1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await u1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wo(t){return Ye(t)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VS(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(t){uf=t}function _1(t){return uf.loadJS(t)}function v1(){return uf.gapiScript}function w1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e){const n=ef(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jl(s,e??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function T1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I1(t,e,n){const r=Wo(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=d0(e),{host:o,port:l}=S1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),A1()}function d0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S1(t){const e=d0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function A1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return of(t,"POST","/v1/accounts:signInWithIdp",Go(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="http://localhost";class Yr extends f0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=nf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:C1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends p0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ko{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ko{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ko{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e){return of(t,"POST","/v1/accounts:signUp",Go(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=dg(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dg(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t){var e;if(nn(t.app))return Promise.reject(Sn(t));const n=Wo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await x1(n,{returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function m0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function R1(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await Ro(t,m0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=af(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e,n=!1){if(nn(t.app))return Promise.reject(Sn(t));const r="signIn",i=await m0(t,r,e),s=await Dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e){return of(t,"POST","/v1/accounts:signInWithCustomToken",Go(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){if(nn(t.app))return Promise.reject(Sn(t));const n=Wo(t),r=await D1(n,{token:e,returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function b1(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function V1(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function M1(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}const $l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=1e3,F1=10;class y0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);h1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,F1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const j1=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_0.type="SESSION";const v0=_0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await U1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=cf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function B1(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function $1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q1(){return w0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebaseLocalStorageDb",G1=1,Hl="firebaseLocalStorage",T0="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function W1(){const t=indexedDB.deleteDatabase(E0);return new Qo(t).toPromise()}function zh(){const t=indexedDB.open(E0,G1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:T0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await W1(),e(await zh()))})})}async function fg(t,e,n){const r=wu(t,!0).put({[T0]:e,value:n});return new Qo(r).toPromise()}async function K1(t,e){const n=wu(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function pg(t,e){const n=wu(t,!0).delete(e);return new Qo(n).toPromise()}const Q1=800,Y1=3;class I0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Y1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await fg(e,$l,"1"),await pg(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>K1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wu(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I0.type="LOCAL";const X1=I0;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e){return e?Tn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends f0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z1(t){return N1(t.auth,new hf(t),t.bypassAuthState)}function eC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),P1(n,new hf(t),t.bypassAuthState)}async function tC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),R1(n,new hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z1;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return eC;default:Pn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new qo(2e3,1e4);class Ri extends S0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nC.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="pendingRedirect",ol=new Map;class iC extends S0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const r=await sC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sC(t,e){const n=lC(e),r=aC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function oC(t,e){ol.set(t._key(),e)}function aC(t){return Tn(t._redirectPersistence)}function lC(t){return sl(rC,t.config.apiKey,t.name)}async function uC(t,e,n=!1){if(nn(t.app))return Promise.reject(Sn(t));const r=Wo(t),i=J1(r,e),o=await new iC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=10*60*1e3;class hC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cC&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function gC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fC(t);for(const n of e)try{if(yC(n))return}catch{}Pn(t,"unauthorized-domain")}function yC(t){const e=jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mC.test(n))return!1;if(pC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new qo(3e4,6e4);function gg(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vC(t){return new Promise((e,n)=>{var r,i,s;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(on(t,"network-request-failed"))},timeout:_C.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const l=w1("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},_1(`${v1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw al=null,e})}let al=null;function wC(t){return al=al||vC(t),al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new qo(5e3,15e3),TC="__/auth/iframe",IC="emulator/auth/iframe",SC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CC(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sf(e,IC):`https://${t.config.authDomain}/${TC}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=AC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function xC(t){const e=await wC(t),n=an().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:CC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},EC.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RC=500,PC=600,NC="_blank",DC="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OC(t,e,n,r=RC,i=PC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=lt().toLowerCase();n&&(l=s0(h)?NC:n),r0(h)&&(e=e||DC,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(c1(h)&&l!=="_self")return bC(e||"",l),new yg(null);const p=window.open(e||"",l,f);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new yg(p)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="__/auth/handler",MC="emulator/auth/handler",LC=encodeURIComponent("fac");async function _g(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof p0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${LC}=${encodeURIComponent(u)}`:"";return`${FC(t)}?${Ho(l).slice(1)}${h}`}function FC({config:t}){return t.emulator?sf(t,MC):`https://${t.authDomain}/${VC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=uC,this._overrideRedirectResult=oC}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _g(e,n,r,jh(),i);return OC(e,o,cf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _g(e,n,r,jh(),i);return B1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xC(e),r=new hC(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c0()||i0()||lf()}}const UC=jC;var vg="@firebase/auth",wg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $C(t){Wi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h0(t)},h=new g1(r,i,s,u);return T1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new Qr("auth-internal",e=>{const n=Wo(e.getProvider("auth").getImmediate());return(r=>new zC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(vg,wg,BC(t)),dr(vg,wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=5*60,qC=Bv("authIdTokenMaxAge")||HC;let Eg=null;const GC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const i=n==null?void 0:n.token;Eg!==i&&(Eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WC(t=tf()){const e=ef(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E1(t,{popupRedirectResolver:UC,persistence:[X1,j1,v0]}),r=Bv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GC(s.toString());V1(n,o,()=>o(n.currentUser)),b1(n,l=>o(l))}}const i=Uv("auth");return i&&I1(n,`http://${i}`),n}function KC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}y1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",KC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$C("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,C0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(S,k,R){for(var T=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)T[Je-2]=arguments[Je];return y.prototype[k].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var S=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)S[k]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(k=0;16>k;++k)S[k]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],k=E.g[2];var R=E.g[3],T=y+(R^w&(k^R))+S[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=R+(k^y&(w^k))+S[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(w^R&(y^w))+S[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(y^k&(R^y))+S[3]+3250441966&4294967295,w=k+(T<<22&4294967295|T>>>10),T=y+(R^w&(k^R))+S[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(k^y&(w^k))+S[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(w^R&(y^w))+S[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(y^k&(R^y))+S[7]+4249261313&4294967295,w=k+(T<<22&4294967295|T>>>10),T=y+(R^w&(k^R))+S[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(k^y&(w^k))+S[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(w^R&(y^w))+S[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(y^k&(R^y))+S[11]+2304563134&4294967295,w=k+(T<<22&4294967295|T>>>10),T=y+(R^w&(k^R))+S[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(k^y&(w^k))+S[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(w^R&(y^w))+S[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(y^k&(R^y))+S[15]+1236535329&4294967295,w=k+(T<<22&4294967295|T>>>10),T=y+(k^R&(w^k))+S[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(y^w))+S[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^w&(R^y))+S[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(k^R))+S[0]+3921069994&4294967295,w=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(w^k))+S[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(y^w))+S[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^w&(R^y))+S[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(k^R))+S[4]+3889429448&4294967295,w=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(w^k))+S[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(y^w))+S[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^w&(R^y))+S[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(k^R))+S[8]+1163531501&4294967295,w=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(w^k))+S[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(y^w))+S[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^w&(R^y))+S[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(k^R))+S[12]+2368359562&4294967295,w=k+(T<<20&4294967295|T>>>12),T=y+(w^k^R)+S[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^k)+S[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^w)+S[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^y)+S[14]+4259657740&4294967295,w=k+(T<<23&4294967295|T>>>9),T=y+(w^k^R)+S[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^k)+S[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^w)+S[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^y)+S[10]+3200236656&4294967295,w=k+(T<<23&4294967295|T>>>9),T=y+(w^k^R)+S[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^k)+S[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^w)+S[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^y)+S[6]+76029189&4294967295,w=k+(T<<23&4294967295|T>>>9),T=y+(w^k^R)+S[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^k)+S[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^w)+S[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^y)+S[2]+3299628645&4294967295,w=k+(T<<23&4294967295|T>>>9),T=y+(k^(w|~R))+S[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~k))+S[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~w))+S[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~y))+S[5]+4237533241&4294967295,w=k+(T<<21&4294967295|T>>>11),T=y+(k^(w|~R))+S[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~k))+S[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~w))+S[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~y))+S[1]+2240044497&4294967295,w=k+(T<<21&4294967295|T>>>11),T=y+(k^(w|~R))+S[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~k))+S[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~w))+S[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~y))+S[13]+1309151649&4294967295,w=k+(T<<21&4294967295|T>>>11),T=y+(k^(w|~R))+S[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~k))+S[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~w))+S[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~y))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,S=this.B,k=this.h,R=0;R<y;){if(k==0)for(;R<=w;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(S[k++]=E.charCodeAt(R++),k==this.blockSize){i(this,S),k=0;break}}else for(;R<y;)if(S[k++]=E[R++],k==this.blockSize){i(this,S),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var S=0;32>S;S+=8)E[w++]=this.g[y]>>>S&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],S=!0,k=E.length-1;0<=k;k--){var R=E[k]|0;S&&R==y||(w[k]=R,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return b(h(-E));for(var y=[],w=1,S=0;E>=w;S++)y[S]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return b(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),S=p,k=0;k<E.length;k+=8){var R=Math.min(8,E.length-k),T=parseInt(E.substring(k,k+R),y);8>R?(R=h(Math.pow(y,R)),S=S.j(R).add(h(T))):(S=S.j(w),S=S.add(h(T)))}return S}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var S=this.i(w);E+=(0<=S?S:4294967296+S)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+b(this).toString(E);for(var y=h(Math.pow(E,6)),w=this,S="";;){var k=O(w,y).g;w=A(w,k.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=k,C(w))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=A(this,E),N(E)?-1:C(E)?0:1};function b(E){for(var y=E.g.length,w=[],S=0;S<y;S++)w[S]=~E.g[S];return new o(w,~E.h).add(m)}t.abs=function(){return N(this)?b(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0,k=0;k<=y;k++){var R=S+(this.i(k)&65535)+(E.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);S=T>>>16,R&=65535,T&=65535,w[k]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(E,y){return E.add(b(y))}t.j=function(E){if(C(this)||C(E))return p;if(N(this))return N(E)?b(this).j(b(E)):b(b(this).j(E));if(N(E))return b(this.j(b(E)));if(0>this.l(_)&&0>E.l(_))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],S=0;S<2*y;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<E.g.length;k++){var R=this.i(S)>>>16,T=this.i(S)&65535,Je=E.i(k)>>>16,dn=E.i(k)&65535;w[2*S+2*k]+=T*dn,v(w,2*S+2*k),w[2*S+2*k+1]+=R*dn,v(w,2*S+2*k+1),w[2*S+2*k+1]+=T*Je,v(w,2*S+2*k+1),w[2*S+2*k+2]+=R*Je,v(w,2*S+2*k+2)}for(S=0;S<y;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=y;S<2*y;S++)w[S]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function x(E,y){this.g=E,this.h=y}function O(E,y){if(C(y))throw Error("division by zero");if(C(E))return new x(p,p);if(N(E))return y=O(b(E),y),new x(b(y.g),b(y.h));if(N(y))return y=O(E,b(y)),new x(b(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=y;0>=S.l(E);)w=j(w),S=j(S);var k=U(w,1),R=U(S,1);for(S=U(S,2),w=U(w,2);!C(S);){var T=R.add(S);0>=T.l(E)&&(k=k.add(w),R=T),S=U(S,1),w=U(w,1)}return y=A(E,k.j(y)),new x(k,y)}for(k=p;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=h(w),T=R.j(y);N(T)||0<T.l(E);)w-=S,R=h(w),T=R.j(y);C(R)&&(R=m),k=k.add(R),E=A(E,T)}return new x(k,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function j(E){for(var y=E.g.length+1,w=[],S=0;S<y;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function U(E,y){var w=y>>5;y%=32;for(var S=E.g.length-w,k=[],R=0;R<S;R++)k[R]=0<y?E.i(R+w)>>>y|E.i(R+w+1)<<32-y:E.i(R+w);return new o(k,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,C0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Br=o}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x0,Bs,k0,ll,Bh,R0,P0,N0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ba=="object"&&Ba];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return c.prototype[P].apply(g,z)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function b(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let z=0;z<D;z++)a[P+z]=g[z]}else a.push(g)}}class A{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Je{constructor(){this.h=this.g=null}add(c,d){const g=dn.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var dn=new A(()=>new fn,a=>a.reset());class fn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,B=!1,K=new Je,Q=()=>{const a=l.Promise.resolve(void 0);zt=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){R(d)}var c=dn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Nt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Bt(a,c){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Bt.aa.h.call(this)}}C(Bt,ve);var Dt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),ra=0;function ia(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++ra,this.da=this.fa=!1}function Sr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ar(a){this.src=a,this.g={},this.h=0}Ar.prototype.add=function(a,c,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=us(a,c,g,P);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new ia(c,this.src,D,!!g,P),c.fa=d,a.push(c)),c};function si(a,c){var d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Sr(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function us(a,c,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return P}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),cs={};function sa(a,c,d,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)sa(a,c[D],d,g,P);return null}return d=aa(d),a&&a[Et]?a.K(c,d,h(g)?!!g.capture:!1,P):Mu(a,c,d,!1,g,P)}function Mu(a,c,d,g,P,D){if(!c)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,fe=ds(a);if(fe||(a[Cr]=fe=new Ar(a)),d=fe.add(c,d,g,z,D),d.proxy)return d;if(g=Lu(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Nt||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(hs(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Lu(){function a(d){return c.call(a.src,a.listener,d)}const c=Fu;return a}function oa(a,c,d,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)oa(a,c[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=aa(d),a&&a[Et]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=us(D,d,g,P),-1<d&&(Sr(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=ds(a))&&(c=a.g[c.toString()],a=-1,c&&(a=us(c,d,g,P)),(d=-1<a?c[a]:null)&&xr(d))}function xr(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Et])si(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(hs(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=ds(c))?(si(d,a),d.h==0&&(d.src=null,c[Cr]=null)):Sr(a)}}}function hs(a){return a in cs?cs[a]:cs[a]="on"+a}function Fu(a,c){if(a.da)a=!0;else{c=new Bt(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&xr(a),a=d.call(g,c)}return a}function ds(a){return a=a[Cr],a instanceof Ar?a:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(a){return typeof a=="function"?a:(a[fs]||(a[fs]=function(c){return a.handleEvent(c)}),a[fs])}function V(){ce.call(this),this.i=new Ar(this),this.M=this,this.F=null}C(V,ce),V.prototype[Et]=!0,V.prototype.removeEventListener=function(a,c,d,g){oa(this,a,c,d,g)};function $(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ve(c,a);else if(c instanceof ve)c.target=c.target||a;else{var P=c;c=new ve(g,a),S(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var z=c.g=d[D];P=ee(z,g,!0,c)&&P}if(z=c.g=a,P=ee(z,g,!0,c)&&P,P=ee(z,g,!1,c)&&P,d)for(D=0;D<d.length;D++)z=c.g=d[D],P=ee(z,g,!1,c)&&P}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Sr(d[g]);delete a.g[c],a.h--}}this.F=null},V.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},V.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function ee(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==d){var fe=z.listener,$e=z.ha||z.src;z.fa&&si(a.i,z),P=fe.call($e,g)!==!1&&P}}return P&&!g.defaultPrevented}function ae(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Te(a){a.g=ae(()=>{a.g=null,a.i&&(a.i=!1,Te(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class $t extends ce{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Te(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(a){ce.call(this),this.h=a,this.g={}}C(Ot,ce);var oi=[];function ps(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&xr(c)},a),a.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),ps(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Be=l.JSON.stringify,xe=l.JSON.parse,la=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ln(){}Ln.prototype.h=null;function ms(a){return a.h||(a.h=a.i())}function qf(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ju(){ve.call(this,"d")}C(ju,ve);function Uu(){ve.call(this,"c")}C(Uu,ve);var kr={},Gf=null;function ua(){return Gf=Gf||new V}kr.La="serverreachability";function Wf(a){ve.call(this,kr.La,a)}C(Wf,ve);function ys(a){const c=ua();$(c,new Wf(c))}kr.STAT_EVENT="statevent";function Kf(a,c){ve.call(this,kr.STAT_EVENT,a),this.stat=c}C(Kf,ve);function ut(a){const c=ua();$(c,new Kf(c,a))}kr.Ma="timingevent";function Qf(a,c){ve.call(this,kr.Ma,a),this.size=c}C(Qf,ve);function _s(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function vs(){this.g=!0}vs.prototype.xa=function(){this.g=!1};function Qw(a,c,d,g,P,D){a.info(function(){if(a.g)if(D)for(var z="",fe=D.split("&"),$e=0;$e<fe.length;$e++){var le=fe[$e].split("=");if(1<le.length){var Ze=le[0];le=le[1];var et=Ze.split("_");z=2<=et.length&&et[1]=="type"?z+(Ze+"="+le+"&"):z+(Ze+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function Yw(a,c,d,g,P,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+z})}function ai(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jw(a,d)+(g?" "+g:"")})}function Xw(a,c){a.info(function(){return"TIMEOUT: "+c})}vs.prototype.info=function(){};function Jw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Be(d)}catch{return c}}var ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zu;function ha(){}C(ha,Ln),ha.prototype.g=function(){return new XMLHttpRequest},ha.prototype.i=function(){return{}},zu=new ha;function Fn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xf}function Xf(){this.i=null,this.g="",this.h=!1}var Jf={},Bu={};function $u(a,c,d){a.L=1,a.v=ma(pn(c)),a.m=d,a.P=!0,Zf(a,null)}function Zf(a,c){a.F=Date.now(),da(a),a.A=pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),fp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Xf,a.g=Np(a.j,d?c:null,!a.m),0<a.O&&(a.M=new $t(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(oi[0]=P.toString()),P=oi);for(var D=0;D<P.length;D++){var z=sa(d,P[D],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ys(),Qw(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const c=this.M;c&&mn(a)==3?c.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const et=mn(this.g);var c=this.g.Ba();const ci=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||wp(this.g)))){this.J||et!=4||c==7||(c==8||0>=ci?ys(3):ys(2)),Hu(this);var d=this.g.Z();this.X=d;t:if(ep(this)){var g=wp(this.g);a="";var P=g.length,D=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),ws(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Yw(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,$e=this.g;if((fe=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(fe)){var le=fe;break t}}le=null}if(d=le)ai(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qu(this,d);else{this.o=!1,this.s=3,ut(12),Rr(this),ws(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<z.length;)if(Ht=Zw(this,z),Ht==Bu){et==4&&(this.s=4,ut(14),d=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Jf){this.s=4,ut(15),ai(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else ai(this.i,this.l,Ht,null),qu(this,Ht);if(ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||z.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)ai(this.i,this.l,z,"[Invalid Chunked Response]"),Rr(this),ws(this);else if(0<z.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Xu(Ze),Ze.M=!0,ut(11))}}else ai(this.i,this.l,z,null),qu(this,z);et==4&&Rr(this),this.o&&!this.J&&(et==4?xp(this.j,this):(this.o=!1,da(this)))}else gE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Rr(this),ws(this)}}}catch{}finally{}};function ep(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Zw(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Bu:(d=Number(c.substring(d,g)),isNaN(d)?Jf:(g+=1,g+d>c.length?Bu:(c=c.slice(g,g+d),a.C=g+d,c)))}Fn.prototype.cancel=function(){this.J=!0,Rr(this)};function da(a){a.S=Date.now()+a.I,tp(a,a.I)}function tp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(m(a.ba,a),c)}function Hu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Xw(this.i,this.A),this.L!=2&&(ys(),ut(17)),Rr(this),this.s=2,ws(this)):tp(this,this.S-a)};function ws(a){a.j.G==0||a.J||xp(a.j,a)}function Rr(a){Hu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ps(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function qu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Gu(d.h,a))){if(!a.K&&Gu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ea(d),va(d);else break e;Yu(d),ut(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=_s(m(d.Za,d),6e3));if(1>=ip(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((a.K||d.g==a)&&Ea(d),!v(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let le=P[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Ze=le[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=le[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const ci=le[5];ci!=null&&typeof ci=="number"&&0<ci&&(g=1.5*ci,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=a.g;if(Ht){const Ia=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var D=g.h;D.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Wu(D,D.h),D.h=null))}if(g.D){const Ju=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ju&&(g.ya=Ju,ge(g.I,g.D,Ju))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=Pp(g,g.J?g.ia:null,g.W),z.K){sp(g.h,z);var fe=z,$e=g.L;$e&&(fe.I=$e),fe.B&&(Hu(fe),da(fe)),g.g=z}else Ap(g);0<d.i.length&&wa(d)}else le[0]!="stop"&&le[0]!="close"||Nr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nr(d,7):Qu(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}ys(4)}catch{}}var eE=class{constructor(a,c){this.g=a,this.map=c}};function np(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ip(a){return a.h?1:a.g?a.g.size:0}function Gu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Wu(a,c){a.g?a.g.add(c):a.h=c}function sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}np.prototype.cancel=function(){if(this.i=op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function tE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function nE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function ap(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=nE(a),g=tE(a),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],d&&d[D],a)}var lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,fa(this,a.j),this.o=a.o,this.g=a.g,pa(this,a.s),this.l=a.l;var c=a.i,d=new Is;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),up(this,d),this.m=a.m}else a&&(c=String(a).match(lp))?(this.h=!1,fa(this,c[1]||"",!0),this.o=Es(c[2]||""),this.g=Es(c[3]||"",!0),pa(this,c[4]),this.l=Es(c[5]||"",!0),up(this,c[6]||"",!0),this.m=Es(c[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}Pr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ts(c,cp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ts(c,cp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ts(d,d.charAt(0)=="/"?oE:sE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ts(d,lE)),a.join("")};function pn(a){return new Pr(a)}function fa(a,c,d){a.j=d?Es(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function pa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function up(a,c,d){c instanceof Is?(a.i=c,uE(a.i,a.h)):(d||(c=Ts(c,aE)),a.i=new Is(c,a.h))}function ge(a,c,d){a.i.set(c,d)}function ma(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Es(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,iE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cp=/[#\/\?@]/g,sE=/[#\?:]/g,oE=/[#\?]/g,aE=/[#\?@]/g,lE=/#/g;function Is(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&rE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(a,c){jn(this),this.i=null,a=li(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function hp(a,c){jn(a),c=li(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function dp(a,c){return jn(a),c=li(a,c),a.g.has(c)}t.forEach=function(a,c){jn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(c[g])}return d},t.V=function(a){jn(this);let c=[];if(typeof a=="string")dp(this,a)&&(c=c.concat(this.g.get(li(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return jn(this),this.i=null,a=li(this,a),dp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function fp(a,c,d){hp(a,c),0<d.length&&(a.i=null,a.g.set(li(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function li(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function uE(a,c){c&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(hp(this,g),fp(this,P,d))},a)),a.j=c}function cE(a,c){const d=new vs;if(l.Image){const g=new Image;g.onload=_(Un,d,"TestLoadImage: loaded",!0,c,g),g.onerror=_(Un,d,"TestLoadImage: error",!1,c,g),g.onabort=_(Un,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=_(Un,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function hE(a,c){const d=new vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Un(d,"TestPingServer: error",!1,c)})}function Un(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function dE(){this.g=new la}function fE(a,c,d){const g=d||"";try{ap(a,function(P,D){let z=P;h(P)&&(z=Be(P)),c.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function ga(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ga,Ln),ga.prototype.g=function(){return new ya(this.l,this.j)},ga.prototype.i=function(a){return function(){return a}}({});function ya(a,c){V.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ya,V),t=ya.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,As(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ss(this):As(this),this.readyState==3&&pp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},t.Qa=function(a){this.g&&(this.response=a,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,As(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mp(a){let c="";return U(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ku(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=mp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ge(a,c,d))}function ke(a){V.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ke,V);var pE=/^https?$/i,mE=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zu.g(),this.v=this.o?ms(this.o):ms(zu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){gp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(mE,c,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){gp(this,D)}};function gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,yp(a),_a(a)}function yp(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$(this,"complete"),$(this,"abort"),_a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_a(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_p(this):this.bb())},t.bb=function(){_p(this)};function _p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)ae(a.Ea,0,a);else if($(a,"readystatechange"),mn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=z===0){var P=String(a.D).match(lp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!pE.test(P?P.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.m=6;try{var D=2<mn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",yp(a)}}finally{_a(a)}}}}function _a(a,c){if(a.g){vp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||$(a,"ready");try{d.onreadystatechange=g}catch{}}}function vp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),xe(c)}};function wp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gE(a){const c={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=k(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ep(a){this.Aa=0,this.i=[],this.j=new vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,a),this.cb=Cs("retryDelaySeedMs",1e4,a),this.Wa=Cs("forwardChannelMaxRetries",2,a),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new np(a&&a.concurrentRequestLimit),this.Da=new dE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ep.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){ut(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Pp(this,null,this.W),wa(this)};function Qu(a){if(Tp(a),a.G==3){var c=a.U++,d=pn(a.I);if(ge(d,"SID",a.K),ge(d,"RID",c),ge(d,"TYPE","terminate"),xs(a,d),c=new Fn(a,a.j,c),c.L=2,c.v=ma(pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Np(c.j,null),c.g.ea(c.v)),c.F=Date.now(),da(c)}Rp(a)}function va(a){a.g&&(Xu(a),a.g.cancel(),a.g=null)}function Tp(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function wa(a){if(!rp(a.h)&&!a.s){a.s=!0;var c=a.Ga;zt||Q(),B||(zt(),B=!0),K.add(c,a),a.B=0}}function yE(a,c){return ip(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(m(a.Ga,a,c),kp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Fn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Sp(this,P,c),d=pn(this.I),ge(d,"RID",a),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),xs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(mp(D)))+"&"+c:this.m&&Ku(d,this.m,D)),Wu(this.h,P),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",c),ge(d,"SID","null"),P.T=!0,$u(P,d,null)):$u(P,d,c),this.G=2}}else this.G==3&&(a?Ip(this,a):this.i.length==0||rp(this.h)||Ip(this))};function Ip(a,c){var d;c?d=c.l:d=a.U++;const g=pn(a.I);ge(g,"SID",a.K),ge(g,"RID",d),ge(g,"AID",a.T),xs(a,g),a.m&&a.o&&Ku(g,a.m,a.o),d=new Fn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Sp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wu(a.h,d),$u(d,g,c)}function xs(a,c){a.H&&U(a.H,function(d,g){ge(c,g,d)}),a.l&&ap({},function(d,g){ge(c,g,d)})}function Sp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let fe=!0;for(let $e=0;$e<d;$e++){let le=P[$e].g;const Ze=P[$e].map;if(le-=D,0>le)D=Math.max(0,P[$e].g-100),fe=!1;else try{fE(Ze,z,"req"+le+"_")}catch{g&&g(Ze)}}if(fe){g=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function Ap(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;zt||Q(),B||(zt(),B=!0),K.add(c,a),a.v=0}}function Yu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(m(a.Fa,a),kp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),va(this),Cp(this))};function Xu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cp(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=pn(a.qa);ge(c,"RID","rpc"),ge(c,"SID",a.K),ge(c,"AID",a.T),ge(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(c,"TO",a.ja),ge(c,"TYPE","xmlhttp"),xs(a,c),a.m&&a.o&&Ku(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ma(pn(c)),d.m=null,d.P=!0,Zf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),Yu(this),ut(19))};function Ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xp(a,c){var d=null;if(a.g==c){Ea(a),Xu(a),a.g=null;var g=2}else if(Gu(a.h,c))d=c.D,sp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=ua(),$(g,new Qf(g,d)),wa(a)}else Ap(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&yE(a,c)||g==2&&Yu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function kp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Pr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fa(g,"https"),ma(g),P?cE(g.toString(),d):hE(g.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),Rp(a),Tp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Rp(a){if(a.G=0,a.ka=[],a.l){const c=op(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Pp(a,c,d){var g=d instanceof Pr?pn(d):new Pr(d);if(g.g!="")c&&(g.g=c+"."+g.g),pa(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Pr(null);g&&fa(D,g),c&&(D.g=c),P&&pa(D,P),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&ge(g,d,c),ge(g,"VER",a.la),xs(a,g),g}function Np(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new ga({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dp(){}t=Dp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ta(){}Ta.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){V.call(this),this.g=new Ep(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ui(this)}C(Tt,V),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Qu(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Be(a),a=d);c.i.push(new eE(c.Ya++,a)),c.G==3&&wa(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Qu(this.g),delete this.g,Tt.aa.N.call(this)};function Op(a){ju.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Op,ju);function bp(){Uu.call(this),this.status=1}C(bp,Uu);function ui(a){this.g=a}C(ui,Dp),ui.prototype.ua=function(){$(this.g,"a")},ui.prototype.ta=function(a){$(this.g,new Op(a))},ui.prototype.sa=function(a){$(this.g,new bp)},ui.prototype.ra=function(){$(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,N0=function(){return new Ta},P0=function(){return ua()},R0=kr,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,ll=ca,Yf.COMPLETE="complete",k0=Yf,qf.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",V.prototype.listen=V.prototype.K,Bs=qf,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,x0=ke}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Jd("@firebase/firestore");function Ms(){return Xr.logLevel}function q(t,...e){if(Xr.logLevel<=ie.DEBUG){const n=e.map(df);Xr.debug(`Firestore (${os}): ${t}`,...n)}}function On(t,...e){if(Xr.logLevel<=ie.ERROR){const n=e.map(df);Xr.error(`Firestore (${os}): ${t}`,...n)}}function Ki(t,...e){if(Xr.logLevel<=ie.WARN){const n=e.map(df);Xr.warn(`Firestore (${os}): ${t}`,...n)}}function df(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function de(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new D0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new it(e)}}class JC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ex{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new ex(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Le(0,0))}static max(){return new J(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Po{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Po{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return rx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ee.fromString(e))}static fromName(e){return new W(Ee.fromString(e).popFirst(5))}static empty(){return new W(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ee(e.slice()))}}function ix(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new yr(i,W.empty(),e)}function sx(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(J.min(),W.empty(),-1)}static max(){return new yr(J.max(),W.empty(),-1)}}function ox(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==ax)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ux(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ff.oe=-1;function Eu(t){return t==null}function ql(t){return t===0&&1/t==-1/0}function cx(t){return typeof t=="number"&&Number.isInteger(t)&&!ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ke(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new V0("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const hx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(de(!!t),typeof t=="string"){let e=0;const n=hx.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mf(t){const e=t.mapValue.fields.__previous_value__;return pf(e)?mf(e):e}function No(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Do{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={mapValue:{}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pf(t)?4:px(t)?9007199254740991:fx(t)?10:11:X()}function cn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?ql(o)===ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Sg(o)!==Sg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Oo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(No(t),No(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Jr(s),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Pe(s.latitude),Pe(o.latitude));return l!==0?l:ue(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,N=ue(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:xg(_,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ha.mapValue&&o===Ha.mapValue)return 0;if(s===Ha.mapValue)return 1;if(o===Ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=ue(u[p],f[p]);if(m!==0)return m;const _=Yi(l[u[p]],h[f[p]]);if(_!==0)return _}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=_r(t),r=_r(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function xg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Yi(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Xi(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$h(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Hh(t){return!!t&&"integerValue"in t}function gf(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function fx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function px(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ro(this.value))}}function M0(t){const e=[];return ri(t.fields,(n,r)=>{const i=new Ge([n]);if(ul(r)){const s=M0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function Pg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ng(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n="asc"){this.field=e,this.dir=n}}function mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{}class Ve extends L0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yx(e,n,r):n==="array-contains"?new wx(e,r):n==="in"?new Ex(e,r):n==="not-in"?new Tx(e,r):n==="array-contains-any"?new Ix(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _x(e,r):new vx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends L0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return F0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function F0(t){return t.op==="and"}function j0(t){return gx(t)&&F0(t)}function gx(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function qh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(j0(t))return t.filters.map(e=>qh(e)).join(",");{const e=t.filters.map(n=>qh(n)).join(",");return`${t.op}(${e})`}}function U0(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&U0(o,i.filters[l]),!0):!1}(t,e):void X()}function z0(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(z0).join(" ,")+"}"}(t):"Filter"}class yx extends Ve{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class _x extends Ve{constructor(e,n){super(e,"in",n),this.keys=B0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vx extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=B0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function B0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class wx extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gf(n)&&Oo(n.arrayValue,this.value)}}class Ex extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class Tx extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oo(this.value.arrayValue,n)}}class Ix extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Sx(t,e,n,r,i,s,o)}function yf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.ue=n}return e.ue}function _f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ng(t.startAt,e.startAt)&&Ng(t.endAt,e.endAt)}function Gh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ax(t,e,n,r,i,s,o,l){return new Tu(t,e,n,r,i,s,o,l)}function vf(t){return new Tu(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cx(t){return t.collectionGroup!==null}function io(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Wl(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Wl(Ge.keyField(),r))}return e.ce}function ln(t){const e=Z(t);return e.le||(e.le=xx(e,io(t))),e.le}function xx(t,e){if(t.limitType==="F")return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wl(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e,n){return new Tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return _f(ln(t),ln(e))&&t.limitType===e.limitType}function $0(t){return`${yf(ln(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>z0(i)).join(", ")}]`),Eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Su(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,io(r),i))}(t,e)}function kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H0(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=Rx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rx(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Yi(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return b0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Ce(W.comparator);function bn(){return Px}const q0=new Ce(W.comparator);function $s(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return so()}function W0(){return so()}function so(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nx=new Ce(W.comparator),Dx=new Ke(W.comparator);function re(...t){let e=Dx;for(const n of t)e=e.add(n);return e}const Ox=new Ke(ue);function bx(){return Ox}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ql(e)?"-0":e}}function K0(t){return{integerValue:""+t}}function Vx(t,e){return cx(e)?K0(e):wf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function Mx(t,e,n){return t instanceof Kl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pf(s)&&(s=mf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof bo?Y0(t,e):t instanceof Vo?X0(t,e):function(i,s){const o=Q0(i,s),l=bg(o)+bg(i.Pe);return Hh(o)&&Hh(i.Pe)?K0(l):wf(i.serializer,l)}(t,e)}function Lx(t,e,n){return t instanceof bo?Y0(t,e):t instanceof Vo?X0(t,e):n}function Q0(t,e){return t instanceof Ql?function(r){return Hh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Kl extends Au{}class bo extends Au{constructor(e){super(),this.elements=e}}function Y0(t,e){const n=J0(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vo extends Au{constructor(e){super(),this.elements=e}}function X0(t,e){let n=J0(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Ql extends Au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function bg(t){return Pe(t.integerValue||t.doubleValue)}function J0(t){return gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Fx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof bo&&i instanceof bo||r instanceof Vo&&i instanceof Vo?Qi(r.elements,i.elements,cn):r instanceof Ql&&i instanceof Ql?cn(r.Pe,i.Pe):r instanceof Kl&&i instanceof Kl}(t.transform,e.transform)}class jx{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cu{}function Z0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ef(t.key,Xt.none()):new Jo(t.key,t.data,Xt.none());{const n=t.data,r=mt.empty();let i=new Ke(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new Ct(i.toArray()),Xt.none())}}function Ux(t,e,n){t instanceof Jo?function(i,s,o){const l=i.value.clone(),u=Mg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ew(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Jo?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=s.value.clone(),f=Lg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=Lg(s.fieldTransforms,u,o),f=o.data;return f.setAll(ew(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function zx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qi(r,i,(s,o)=>Fx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ew(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mg(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Lx(o,l,n[i]))}return r}function Lg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Mx(s,o,e))}return r}class Ef extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bx extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ux(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Z0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,r)=>Vg(n,r))&&Qi(this.baseMutations,e.baseMutations,(n,r)=>Vg(n,r))}}class Tf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return Nx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function Gx(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function tw(t){if(t===void 0)return On("GRPC error has no .code"),M.UNKNOWN;switch(t){case De.OK:return M.OK;case De.CANCELLED:return M.CANCELLED;case De.UNKNOWN:return M.UNKNOWN;case De.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case De.INTERNAL:return M.INTERNAL;case De.UNAVAILABLE:return M.UNAVAILABLE;case De.UNAUTHENTICATED:return M.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case De.NOT_FOUND:return M.NOT_FOUND;case De.ALREADY_EXISTS:return M.ALREADY_EXISTS;case De.PERMISSION_DENIED:return M.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case De.ABORTED:return M.ABORTED;case De.OUT_OF_RANGE:return M.OUT_OF_RANGE;case De.UNIMPLEMENTED:return M.UNIMPLEMENTED;case De.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=new Br([4294967295,4294967295],0);function Fg(t){const e=Wx().encode(t),n=new C0;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class If{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(Kx)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new If(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xu(J.min(),i,new Ce(ue),bn(),re())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class nw{constructor(e,n){this.targetId=e,this.me=n}}class rw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ug{constructor(){this.fe=0,this.ge=Bg(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Bg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qx{constructor(e){this.Le=e,this.Be=new Map,this.ke=bn(),this.qe=zg(),this.Qe=new Ce(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Gh(s))if(r===0){const o=new W(s.path);this.Ue(n,o,ot.newNoDocument(o,J.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof V0)return Ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new If(o,i,s)}catch(u){return Ki(u instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Gh(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ot.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new xu(e,n,this.Qe,this.ke,r);return this.ke=bn(),this.qe=zg(),this.Qe=new Ce(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ug,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ug),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zg(){return new Ce(W.comparator)}function Bg(){return new Ce(W.comparator)}const Yx={asc:"ASCENDING",desc:"DESCENDING"},Xx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jx={and:"AND",or:"OR"};class Zx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kh(t,e){return t.useProto3Json||Eu(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ek(t,e){return Yl(t,e.toTimestamp())}function un(t){return de(!!t),J.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function Sf(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sw(t){const e=Ee.fromString(t);return de(cw(e)),e}function Yh(t,e){return Sf(t.databaseId,e.path)}function Oc(t,e){const n=sw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(aw(n))}function ow(t,e){return Sf(t.databaseId,e)}function tk(t){const e=sw(t);return e.length===4?Ee.emptyPath():aw(e)}function Xh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aw(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $g(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function nk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string"),Xe.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:tw(h.code);return new G(f,h.message||"")}(o);n=new rw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new hl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?un(r.readTime):J.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qx(i,s),l=r.targetId;n=new nw(l,o)}}return n}function rk(t,e){let n;if(e instanceof Jo)n={update:$g(t,e.key,e.value)};else if(e instanceof Ef)n={delete:Yh(t,e.key)};else if(e instanceof Ir)n={update:$g(t,e.key,e.data),updateMask:dk(e.fieldMask)};else{if(!(e instanceof Bx))return X();n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ek(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function ik(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(J.min())&&(o=un(s)),new jx(o,i.transformResults||[])}(n,e))):[]}function sk(t,e){return{documents:[ow(t,e.path)]}}function ok(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ow(t,i);const s=function(h){if(h.length!==0)return uw(hn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:mi(m.field),direction:uk(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function ak(t){let e=tk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=lw(p);return m instanceof hn&&j0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Wl(gi(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Eu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new Gl(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new Gl(_,m)}(n.endAt)),Ax(e,i,o,s,l,"F",u,h)}function lk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>lw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function uk(t){return Yx[t]}function ck(t){return Xx[t]}function hk(t){return Jx[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return Ge.fromServerFormat(t.fieldPath)}function uw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Rg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:ck(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>uw(i));return r.length===1?r[0]:{compositeFilter:{op:hk(n.op),filters:r}}}(t):X()}function dk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.ct=e}}function pk(t){const e=ak({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.un=new gk}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(yr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class gk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ji(0)}static kn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oo(r.mutation,i,Ct.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=bn();const o=so(),l=function(){return so()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ir)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),oo(f.mutation,h,f.mutation.getFieldMask(),Le.now())):o.set(h.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new _k(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let i=new Ce((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ct.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=W0();f.forEach(m=>{if(!s.has(m)){const _=Z0(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(jr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:G0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$s();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,m){return new Tu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=$s();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&oo(f.mutation,h,Ct.empty(),Le.now()),Su(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:pk(i.bundledQuery),readTime:un(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.overlays=new Ce(W.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=jr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=jr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hx(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Tr=new Ke(je.Er),this.dr=new Ke(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new Ee([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new Ee([])),r=new je(n,e),i=new je(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(je.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $x(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ue);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new je(new W(s),0);let l=new Ke(ue);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.Mr=e,this.docs=function(){return new Ce(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ox(sx(f),r)<=0||(i.has(f.key)||Su(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ak(this)}getSize(e){return L.resolve(this.size)}}class Ak extends yk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.persistence=e,this.Nr=new as(n=>yf(n),_f),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Af,this.targetCount=0,this.kr=Ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ff(0),this.Kr=!1,this.Kr=!0,this.$r=new Tk,this.referenceDelegate=e(this),this.Ur=new Ck(this),this.indexManager=new mk,this.remoteDocumentCache=function(i){return new Sk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fk(n),this.Gr=new wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ek,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Ik(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new kk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kk extends lx{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.Jr=new Af,this.Yr=null}static Zr(e){return new Cf(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kS()?8:ux(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Rk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ms()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ms()<=ie.DEBUG&&q("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ms()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):L.resolve())}Yi(e,n){if(Og(n))return L.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Wh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Og(n)||i.isEqual(J.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ms()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.rs(e,o,n,ix(i,-1)).next(l=>l))})}ts(e,n){let r=new Ke(H0(e));return n.forEach((i,s)=>{Su(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ms()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",pi(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ue),this._s=new as(s=>yf(s),_f),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Dk(t,e,n,r){return new Nk(t,e,n,r)}async function hw(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Ok(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach(C=>{_=_.next(()=>f.getEntry(u,C)).next(N=>{const b=h.docVersions.get(C);de(b!==null),N.version.compareTo(b)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bk(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Xe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(p,_),function(N,b,A){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,_,f)&&l.push(n.Ur.updateTargetData(s,_))});let u=bn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Vk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function Vk(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Mk(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Lk(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Hg(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Z(u),m=p._s.get(f);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(l=>(Fk(r,kx(e),l),{documents:l,Ts:s})))}function Fk(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class qg{constructor(){this.activeTargetIds=bx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jk{constructor(){this.so=new qg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa=null;function bc(){return qa===null?qa=function(){return 268435456+Math.round(2147483648*Math.random())}():qa++,"0x"+qa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class $k extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=bc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ki("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=zk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=bc();return new Promise((o,l)=>{const u=new x0;u.setWithCredentials(!0),u.listenOnce(k0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ll.NO_ERROR:const f=u.getResponseJson();q(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ll.TIMEOUT:q(rt,`RPC '${e}' ${s} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const p=u.getStatus();if(q(rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(A)>=0?A:M.UNKNOWN}(_.status);l(new G(C,_.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(rt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(rt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=bc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=N0(),l=P0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,_=!1;const C=new Bk({Io:b=>{_?q(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(q(rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(rt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),N=(b,A,v)=>{b.listen(A,x=>{try{v(x)}catch(O){setTimeout(()=>{throw O},0)}})};return N(p,Bs.EventType.OPEN,()=>{_||(q(rt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(p,Bs.EventType.CLOSE,()=>{_||(_=!0,q(rt,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(p,Bs.EventType.ERROR,b=>{_||(_=!0,Ki(rt,`RPC '${e}' stream ${i} transport errored:`,b),C.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,Bs.EventType.MESSAGE,b=>{var A;if(!_){const v=b.data[0];de(!!v);const x=v,O=x.error||((A=x[0])===null||A===void 0?void 0:A.error);if(O){q(rt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let U=function(w){const S=De[w];if(S!==void 0)return tw(S)}(j),E=O.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+j+" with message "+O.message),_=!0,C.So(new G(U,E)),p.close()}else q(rt,`RPC '${e}' stream ${i} received:`,v),C.bo(v)}}),N(l,R0.STAT_EVENT,b=>{b.stat===Bh.PROXY?q(rt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Bh.NOPROXY&&q(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){return new Zx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hk extends pw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=nk(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Gh(u)?{documents:sk(s,u)}:{query:ok(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=iw(s,o.resumeToken);const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Yl(s,o.snapshotVersion.toTimestamp());const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=lk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.a_(n)}}class qk extends pw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ik(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(On(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ii(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await ea(h),h.q_.set("Unknown"),h.L_.delete(4),await Ru(h)}(this))})}),this.q_=new Wk(r,i)}}async function Ru(t){if(ii(t))for(const e of t.B_)await e(!0)}async function ea(t){for(const e of t.B_)await e(!1)}function mw(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nf(n)?Pf(n):ls(n).r_()&&Rf(n,e))}function kf(t,e){const n=Z(t),r=ls(n);n.N_.delete(e),r.r_()&&gw(n,e),n.N_.size===0&&(r.r_()?r.o_():ii(n)&&n.q_.set("Unknown"))}function Rf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).A_(e)}function gw(t,e){t.Q_.xe(e),ls(t).R_(e)}function Pf(t){t.Q_=new Qx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.q_.v_()}function Nf(t){return ii(t)&&!ls(t).n_()&&t.N_.size>0}function ii(t){return Z(t).L_.size===0}function yw(t){t.Q_=void 0}async function Qk(t){t.q_.set("Online")}async function Yk(t){t.N_.forEach((e,n)=>{Rf(t,e)})}async function Xk(t,e){yw(t),Nf(t)?(t.q_.M_(e),Pf(t)):t.q_.set("Unknown")}async function Jk(t,e,n){if(t.q_.set("Online"),e instanceof rw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof hl?t.Q_.Ke(e):e instanceof nw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await dw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),gw(s,u);const p=new tr(f.target,u,h,f.sequenceNumber);Rf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!Xo(e))throw e;t.L_.add(1),await ea(t),t.q_.set("Offline"),n||(n=()=>dw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ru(t)})}function _w(t,e){return e().catch(n=>Xl(t,n,e))}async function Pu(t){const e=Z(t),n=vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Zk(e);)try{const i=await Mk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,eR(e,i)}catch(i){await Xl(e,i)}vw(e)&&ww(e)}function Zk(t){return ii(t)&&t.O_.length<10}function eR(t,e){t.O_.push(e);const n=vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vw(t){return ii(t)&&!vr(t).n_()&&t.O_.length>0}function ww(t){vr(t).start()}async function tR(t){vr(t).p_()}async function nR(t){const e=vr(t);for(const n of t.O_)e.m_(n.mutations)}async function rR(t,e,n){const r=t.O_.shift(),i=Tf.from(r,e,n);await _w(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Pu(t)}async function iR(t,e){e&&vr(t).V_&&await async function(r,i){if(function(o){return Gx(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();vr(r).s_(),await _w(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pu(r)}}(t,e),vw(t)&&ww(t)}async function Wg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.L_.add(3),await ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ru(n)}async function sR(t,e){const n=Z(t);e?(n.L_.delete(2),await Ru(n)):e||(n.L_.add(2),await ea(n),n.q_.set("Unknown"))}function ls(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new Hk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Qk.bind(null,t),Ro:Yk.bind(null,t),mo:Xk.bind(null,t),d_:Jk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nf(t)?Pf(t):t.q_.set("Unknown")):(await t.K_.stop(),yw(t))})),t.K_}function vr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new qk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tR.bind(null,t),mo:iR.bind(null,t),f_:nR.bind(null,t),g_:rR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Pu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Df(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Of(t,e){if(On("AsyncQueue",`${e}: ${t}`),Xo(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.W_=new Ce(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zi(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class aR{constructor(){this.queries=Qg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Qg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function Qg(){return new as(t=>$0(t),Iu)}async function lR(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new oR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Of(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&bf(n)}async function uR(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cR(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&bf(n)}function hR(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function bf(t){t.Y_.forEach(e=>{e.next()})}var Zh,Yg;(Yg=Zh||(Zh={})).ea="default",Yg.Cache="cache";class dR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.key=e}}class Tw{constructor(e){this.key=e}}class fR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=H0(e),this.Ra=new ji(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Kg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),_=Su(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?C!==N&&(r.track({type:3,doc:_}),b=!0):this.ga(m,_)||(r.track({type:2,doc:_}),b=!0,(u&&this.Aa(_,u)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),b=!0):m&&!_&&(r.track({type:1,doc:m}),b=!0,(u||h)&&(l=!0)),b&&(_?(o=o.add(_),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,C){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return N(_)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Zi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Kg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Tw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Ew(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Zi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class pR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mR{constructor(e){this.key=e,this.va=!1}}class gR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new as(l=>$0(l),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(W.comparator),this.Na=new Map,this.La=new Af,this.Ba={},this.ka=new Map,this.qa=Ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function yR(t,e,n=!0){const r=kw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Iw(r,e,n,!0),i}async function _R(t,e){const n=kw(t);await Iw(n,e,!0,!1)}async function Iw(t,e,n,r){const i=await Lk(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await vR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mw(t.remoteStore,i),l}async function vR(t,e,n,r,i){t.Ka=(p,m,_)=>async function(N,b,A,v){let x=b.view.ma(A);x.ns&&(x=await Hg(N.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,x)));const O=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(x,N.isPrimaryClient,O,j);return Jg(N,b.targetId,U.wa),U.snapshot}(t,p,m,_);const s=await Hg(t.localStore,e,!0),o=new fR(e,s.Ts),l=o.ma(s.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Jg(t,n,h.wa);const f=new pR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function wR(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Iu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&kf(r.remoteStore,i.targetId),ed(r,i.targetId)}).catch(Yo)):(ed(r,i.targetId),await Jh(r.localStore,i.targetId,!0))}async function ER(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),kf(n.remoteStore,r.targetId))}async function TR(t,e,n){const r=RR(t);try{const i=await function(o,l){const u=Z(o),h=Le.now(),f=l.reduce((_,C)=>_.add(C.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=bn(),N=re();return u.cs.getEntries(_,f).next(b=>{C=b,C.forEach((A,v)=>{v.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,C)).next(b=>{p=b;const A=[];for(const v of l){const x=zx(v,p.get(v.key).overlayedDocument);x!=null&&A.push(new Ir(v.key,x,M0(x.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,h,A,l)}).next(b=>{m=b;const A=b.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(_,b.batchId,A)})}).then(()=>({batchId:m.batchId,changes:G0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ue)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ta(r,i.changes),await Pu(r.remoteStore)}catch(i){const s=Of(i,"Failed to persist write");n.reject(s)}}async function Sw(t,e){const n=Z(t);try{const r=await bk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await ta(n,r,e)}catch(r){await Yo(r)}}function Xg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&bf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IR(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(W.comparator);o=o.insert(s,ot.newNoDocument(s,J.min()));const l=re().add(s),u=new xu(J.min(),new Map,new Ce(ue),o,l);await Sw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Vf(r)}else await Jh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(Yo)}async function SR(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await Ok(n.localStore,e);Cw(n,r,null),Aw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await Yo(i)}}async function AR(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(de(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Cw(r,e,n),Aw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await Yo(i)}}function Aw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Cw(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xw(t,r)})}function xw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(kf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Vf(t))}function Jg(t,e,n){for(const r of n)r instanceof Ew?(t.La.addReference(r.key,e),CR(t,r)):r instanceof Tw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xw(t,r.key)):X()}function CR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Vf(t))}function Vf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new mR(n)),t.Oa=t.Oa.insert(n,r),mw(t.remoteStore,new tr(ln(vf(n.path)),r,"TargetPurposeLimboResolution",ff.oe))}}async function ta(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=xf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.$i,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.Ui,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Xo(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.os.get(m),C=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,N)}}}(r.localStore,s))}async function xR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await hw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.hs)}}function kR(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function kw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IR.bind(null,e),e.Ca.d_=cR.bind(null,e.eventManager),e.Ca.$a=hR.bind(null,e.eventManager),e}function RR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AR.bind(null,e),e}class Jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Dk(this.persistence,new Pk,e.initialUser,this.serializer)}Ga(e){return new xk(Cf.Zr,this.serializer)}Wa(e){return new jk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jl.provider={build:()=>new Jl};class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xR.bind(null,this.syncEngine),await sR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aR}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=function(s){return new $k(s)}(e.databaseInfo);return function(s,o,l,u){return new Gk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Kk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return Gg.D()?new Gg:new Uk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new gR(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}td.provider={build:()=>new td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=O0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Of(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DR(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wg(e.remoteStore,i)),t._onlineComponents=e}async function DR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Jl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new Jl);return t._offlineComponents}async function Rw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Zg(t,new td))),t._onlineComponents}function OR(t){return Rw(t).then(e=>e.syncEngine)}async function ey(t){const e=await Rw(t),n=e.eventManager;return n.onListen=yR.bind(null,e.syncEngine),n.onUnlisten=wR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_R.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ER.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bR(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!W.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(W.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function ao(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QC;switch(r.type){case"firstParty":return new ZC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ty.get(n);r&&(q("ComponentProvider","Removing Datastore"),ty.delete(n),r.terminate())}(this),Promise.resolve()}}function VR(t,e,n,r={}){var i;const s=(t=ao(t,Nu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=ES(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(h)}t._authCredentials=new YC(new D0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Du(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class fr extends Du{constructor(e,n,r){super(e,n,vf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new W(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Lc(t,e,...n){if(t=Ye(t),Nw("collection","path",e),t instanceof Nu){const r=Ee.fromString(e,...n);return ry(r),new fr(t,null,r)}{if(!(t instanceof Ft||t instanceof fr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ry(r),new fr(t.firestore,null,r)}}function di(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=O0.newId()),Nw("doc","path",e),t instanceof Nu){const r=Ee.fromString(e,...n);return ny(r),new Ft(t,null,new W(r))}{if(!(t instanceof Ft||t instanceof fr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ny(r),new Ft(t.firestore,t instanceof fr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fw(this,"async_queue_retry"),this.Vu=()=>{const r=Vc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new $r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Df.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function oy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Zl extends Nu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function MR(t,e){const n=typeof t=="object"?t:tf(),r=typeof t=="string"?t:"(default)",i=ef(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vS("firestore");s&&VR(i,...s)}return i}function Lf(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LR(t),t._firestoreClient}function LR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new dx(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Pw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new NR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new es(Xe.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new es(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^__.*__$/;class jR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class Dw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ow(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class zf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ow(this.Cu)&&FR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class UR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}Qu(e,n,r,i=!1){return new zf({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zR(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new UR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Bf("Data must be an object, but it was:",o,r);const l=bw(r,o);let u,h;if(s.merge)u=new Ct(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=nd(e,p,n);if(!o.contains(m))throw new G(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Mw(f,m)||f.push(m)}u=new Ct(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new jR(new mt(l),u,h)}class bu extends Ff{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function $R(t,e,n,r){const i=t.Qu(1,e,n);Bf("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();ri(r,(u,h)=>{const f=$f(e,u,n);h=Ye(h);const p=i.Nu(f);if(h instanceof bu)s.push(f);else{const m=Vu(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Ct(s);return new Dw(o,l,i.fieldTransforms)}function HR(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[nd(e,r,n)],u=[i];if(s.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(nd(e,s[m])),u.push(s[m+1]);const h=[],f=mt.empty();for(let m=l.length-1;m>=0;--m)if(!Mw(h,l[m])){const _=l[m];let C=u[m];C=Ye(C);const N=o.Nu(_);if(C instanceof bu)h.push(_);else{const b=Vu(C,N);b!=null&&(h.push(_),f.set(_,b))}}const p=new Ct(h);return new Dw(f,p,o.fieldTransforms)}function Vu(t,e){if(Vw(t=Ye(t)))return Bf("Unsupported field value:",e,t),bw(t,e);if(t instanceof Ff)return function(r,i){if(!Ow(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof jf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof es)return{bytesValue:iw(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Uf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return wf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Mf(r)}`)}(t,e)}function bw(t,e){const n={};return b0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,i)=>{const s=Vu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof jf||t instanceof es||t instanceof Ft||t instanceof Ff||t instanceof Uf)}function Bf(t,e,n){if(!Vw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function nd(t,e,n){if((e=Ye(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return $f(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const qR=new RegExp("[~\\*/\\[\\]]");function $f(t,e,n){if(e.search(qR)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function Mw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GR extends Lw{data(){return super.data()}}function Fw(t,e){return typeof e=="string"?$f(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class KR{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new Uf(s)}convertGeoPoint(e){return new jf(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);de(cw(r));const i=new Do(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jw extends Lw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends jw{data(e={}){return super.data(e)}}class YR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:XR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class Uw extends KR{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function JR(t,...e){var n,r,i;t=Ye(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||oy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(oy(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Ft)h=ao(t.firestore,Zl),f=vf(t._key.path),u={next:p=>{e[o]&&e[o](eP(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ao(t,Du);h=ao(p.firestore,Zl),f=p._query;const m=new Uw(h);u={next:_=>{e[o]&&e[o](new YR(h,m,p,_))},error:e[o+1],complete:e[o+2]},WR(t._query)}return function(m,_,C,N){const b=new PR(N),A=new dR(_,b,C);return m.asyncQueue.enqueueAndForget(async()=>lR(await ey(m),A)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>uR(await ey(m),A))}}(Lf(h),f,l,u)}function ZR(t,e){return function(r,i){const s=new $r;return r.asyncQueue.enqueueAndForget(async()=>TR(await OR(r),i,s)),s.promise}(Lf(t),e)}function eP(t,e,n){const r=n.docs.get(e._key),i=new Uw(t);return new jw(t,i,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=zR(e)}set(e,n,r){this._verifyNotCommitted();const i=Fc(e,this._firestore),s=QR(i.converter,n,r),o=BR(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Xt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Fc(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof Ou?HR(this._dataReader,"WriteBatch.update",s._key,n,r,i):$R(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Xt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Fc(e,this._firestore);return this._mutations=this._mutations.concat(new Ef(n._key,Xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fc(t,e){if((t=Ye(t)).firestore!==e)throw new G(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return Lf(t=ao(t,Zl)),new tP(t,e=>ZR(t,e))}(function(e,n=!0){(function(i){os=i})(is),Wi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Zl(new XC(r.getProvider("auth-internal")),new tx(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dr(Ig,"4.7.3",e),dr(Ig,"4.7.3","esm2017")})();var ay;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(ay||(ay={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ly;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(ly||(ly={}));var uy;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(uy||(uy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=["user","model","function","system"];var hy;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(hy||(hy={}));var dy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(dy||(dy={}));var fy;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(fy||(fy={}));var py;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(py||(py={}));var lo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(lo||(lo={}));var my;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(my||(my={}));var gy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(gy||(gy={}));var yy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(yy||(yy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class fi extends gt{constructor(e,n){super(e),this.response=n}}class zw extends gt{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class pr extends gt{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="https://generativelanguage.googleapis.com",rP="v1beta",iP="0.21.0",sP="genai-js";var ei;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(ei||(ei={}));class oP{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||rP;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||nP}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function aP(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${sP}/${iP}`),e.join(" ")}async function lP(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",aP(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new pr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new pr(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new pr(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function uP(t,e,n,r,i,s){const o=new oP(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},fP(s)),{method:"POST",headers:await lP(o),body:i})}}async function na(t,e,n,r,i,s={},o=fetch){const{url:l,fetchOptions:u}=await uP(t,e,n,r,i,s);return cP(l,u,o)}async function cP(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){hP(i,t)}return r.ok||await dP(r,t),r}function hP(t,e){let n=t;throw t instanceof zw||t instanceof pr||(n=new gt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function dP(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new zw(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function fP(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),fl(t.candidates[0]))throw new fi(`${Gn(t)}`,t);return pP(t)}else if(t.promptFeedback)throw new fi(`Text not available. ${Gn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),fl(t.candidates[0]))throw new fi(`${Gn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),_y(t)[0]}else if(t.promptFeedback)throw new fi(`Function call not available. ${Gn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),fl(t.candidates[0]))throw new fi(`${Gn(t)}`,t);return _y(t)}else if(t.promptFeedback)throw new fi(`Function call not available. ${Gn(t)}`,t)},t}function pP(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function _y(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const mP=[lo.RECITATION,lo.SAFETY,lo.LANGUAGE];function fl(t){return!!t.finishReason&&mP.includes(t.finishReason)}function Gn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];fl(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function Mo(t){return this instanceof Mo?(this.v=t,this):new Mo(t)}function gP(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(m){r[m]&&(i[m]=function(_){return new Promise(function(C,N){s.push([m,_,C,N])>1||l(m,_)})})}function l(m,_){try{u(r[m](_))}catch(C){p(s[0][3],C)}}function u(m){m.value instanceof Mo?Promise.resolve(m.value.v).then(h,f):p(s[0][2],m)}function h(m){l("next",m)}function f(m){l("throw",m)}function p(m,_){m(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function yP(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=wP(e),[r,i]=n.tee();return{stream:vP(r),response:_P(i)}}async function _P(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Hf(EP(e));e.push(i)}}function vP(t){return gP(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield Mo(n.read());if(i)break;yield yield Mo(Hf(r))}})}function wP(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:l})=>{if(l){if(i.trim()){r.error(new gt("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(vy),h;for(;u;){try{h=JSON.parse(u[1])}catch{r.error(new gt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(h),i=i.substring(u[0].length),u=i.match(vy)}return s()})}}})}function EP(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e,n,r){const i=await na(e,ei.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return yP(i)}async function $w(t,e,n,r){const s=await(await na(e,ei.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Hf(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Lo(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return TP(e)}function TP(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new gt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new gt("No content is provided for sending chat message.");return r?e:n}function IP(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new pr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=Lo(t);r.contents=[s]}return{generateContentRequest:r}}function wy(t){let e;return t.contents?e=t:e={contents:[Lo(t)]},t.systemInstruction&&(e.systemInstruction=Hw(t.systemInstruction)),e}function SP(t){return typeof t=="string"||Array.isArray(t)?{content:Lo(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],AP={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function CP(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new gt(`First content should be with role 'user', got ${r}`);if(!cy.includes(r))throw new gt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(cy)}`);if(!Array.isArray(i))throw new gt("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new gt("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const u of Ey)u in l&&(s[u]+=1);const o=AP[r];for(const l of Ey)if(!o.includes(l)&&s[l]>0)throw new gt(`Content with role '${r}' can't contain '${l}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="SILENT_ERROR";class xP{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(CP(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const h=Lo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,h]},p=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>$w(this._apiKey,this.model,f,p)).then(_=>{var C;if(_.response.candidates&&_.response.candidates.length>0){this._history.push(h);const N=Object.assign({parts:[],role:"model"},(C=_.response.candidates)===null||C===void 0?void 0:C[0].content);this._history.push(N)}else{const N=Gn(_.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}m=_}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const h=Lo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,h]},p=Object.assign(Object.assign({},this._requestOptions),n),m=Bw(this._apiKey,this.model,f,p);return this._sendPromise=this._sendPromise.then(()=>m).catch(_=>{throw new Error(Ty)}).then(_=>_.response).then(_=>{if(_.candidates&&_.candidates.length>0){this._history.push(h);const C=Object.assign({},_.candidates[0].content);C.role||(C.role="model"),this._history.push(C)}else{const C=Gn(_);C&&console.warn(`sendMessageStream() was unsuccessful. ${C}. Inspect response object for details.`)}}).catch(_=>{_.message!==Ty&&console.error(_)}),m}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e,n,r){return(await na(e,ei.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e,n,r){return(await na(e,ei.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function PP(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await na(e,ei.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Hw(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=wy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return $w(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=wy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return Bw(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new xP(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=IP(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return kP(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=SP(e),i=Object.assign(Object.assign({},this._requestOptions),n);return RP(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return PP(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new gt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Iy(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new pr("Cached content must contain a `name` field.");if(!e.model)throw new pr("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new pr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Iy(this.apiKey,s,r)}}let Uc,$n,It,Gs="soma-port-demo";const DP={apiKey:"AIzaSyDDi3s1qJnNL_k8FtPPfAACCsCorj1XL1g",authDomain:"unkou-final.firebaseapp.com",projectId:"unkou-final",storageBucket:"unkou-final.firebasestorage.app",messagingSenderId:"841308334866",appId:"1:841308334866:web:dea92056a618686a5561cb"};function Vr(t){var e,n,r,i;try{const s=window,o=(n=(e=s==null?void 0:s.importMeta)==null?void 0:e.env)==null?void 0:n[t];return typeof o=="string"?o:""}catch{}try{const s=window,o=(i=(r=s==null?void 0:s.process)==null?void 0:r.env)==null?void 0:i[t];return typeof o=="string"?o:""}catch{return""}}function OP(){const t={apiKey:Vr("VITE_FIREBASE_API_KEY"),authDomain:Vr("VITE_FIREBASE_AUTH_DOMAIN"),projectId:Vr("VITE_FIREBASE_PROJECT_ID"),storageBucket:Vr("VITE_FIREBASE_STORAGE_BUCKET"),messagingSenderId:Vr("VITE_FIREBASE_MESSAGING_SENDER_ID"),appId:Vr("VITE_FIREBASE_APP_ID")};return!t.apiKey||!t.projectId?null:t}function bP(t){return!!t&&typeof t=="object"&&typeof t.apiKey=="string"&&t.apiKey.length>10}function VP(){try{let t=null;typeof __firebase_config<"u"&&__firebase_config&&(t=JSON.parse(__firebase_config)),typeof __app_id<"u"&&__app_id&&(Gs=__app_id),!t&&bP(window.firebaseConfig)&&(t=window.firebaseConfig),t||(t=OP()),t||(t=DP),Uc=MA().length>0?tf():qv(t),$n=WC(Uc),It=MR(Uc)}catch(t){console.error("Firebase initialization failed:",t)}}VP();Array.isArray(window.SCANNED_FULL_DATA)&&window.SCANNED_FULL_DATA.filter(Boolean);const Ls=({children:t,className:e=""})=>I.jsx("div",{className:`bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden ${e}`,children:t}),MP=({schedules:t,onDateSelect:e,currentDate:n})=>{const r=new Date("2026-01-11"),i=new Date("2026-02-07"),s=[];let o=new Date(r);for(;o<=i;)s.push(new Date(o)),o.setDate(o.getDate()+1);const l=u=>{const h=u.toISOString().split("T")[0];return t.filter(f=>f.date===h)};return I.jsxs("div",{className:"w-full",children:[I.jsx("div",{className:"grid grid-cols-7 gap-1 mb-1",children:["日","月","火","水","木","金","土"].map((u,h)=>I.jsx("div",{className:`text-center text-xs font-bold py-2 ${h===0?"text-rose-500":h===6?"text-blue-500":"text-slate-500"}`,children:u},h))}),I.jsx("div",{className:"grid grid-cols-7 gap-1 auto-rows-fr",children:s.map((u,h)=>{const f=u.toISOString().split("T")[0],p=f===n,m=l(u),_=u.getMonth()===0;return I.jsxs("button",{onClick:()=>e(f),className:`
                min-h-[90px] p-2 rounded-xl border text-left flex flex-col transition-all
                ${p?"ring-2 ring-indigo-500 bg-indigo-50 border-indigo-200":"border-slate-100 bg-white hover:bg-slate-50"}
                ${_?"":"opacity-40"}
              `,children:[I.jsxs("div",{className:"flex justify-between items-start mb-1",children:[I.jsx("span",{className:`text-sm font-bold ${u.getDay()===0?"text-rose-500":u.getDay()===6?"text-blue-500":"text-slate-700"}`,children:u.getDate()}),m.length>0&&I.jsx("span",{className:"text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-full text-slate-500 font-bold",children:m.length})]}),I.jsxs("div",{className:"space-y-1 flex-1 w-full overflow-hidden",children:[m.slice(0,3).map((C,N)=>I.jsxs("div",{className:"text-[9px] truncate w-full flex items-center bg-white border border-slate-100 rounded px-1 text-slate-600",children:[I.jsx("div",{className:`w-1 h-1 rounded-full mr-1 ${C.status==="作業中"?"bg-indigo-500":C.status==="完了"?"bg-slate-300":"bg-emerald-500"}`}),C.shipName]},N)),m.length>3&&I.jsxs("div",{className:"text-[9px] text-slate-400 pl-1 font-bold",children:["+他",m.length-3,"件"]})]})]},h)})})]})},LP=({schedules:t,onSelect:e,date:n})=>{const[r,i]=te.useState(!1),s=[0,4,8,12,16,20,24],o=[{name:"1号埠頭",berths:["1-1","1-2","1-3A","1-3B","1-4","1-5","1-6","1-7","1-8"]},{name:"2号埠頭",berths:["2-1","2-2","2-3","2-4(西)","2-4(東)"]},{name:"3号埠頭",berths:["3-1(西)","3-1(東)","3-4"]},{name:"4号埠頭",berths:["4-1","4-2"]},{name:"5号埠頭",berths:["5-1","5-2","5-3","5-4"]}],l=h=>{if(h==="-"||!h)return 0;const[f,p]=h.split(":").map(Number);return(f+(p||0)/60)*(100/24)},u=(h,f)=>{if(h==="-"||!h)return 0;const p=l(h);let _=l(f)-p;return _<=0&&(_=100-p),_};return I.jsxs("div",{className:"w-full",children:[I.jsxs("div",{className:"flex items-center justify-between mb-4",children:[I.jsxs("div",{className:"text-sm font-bold text-slate-500",children:[n," の詳細計画"]}),I.jsx("button",{onClick:()=>i(!r),className:`flex items-center text-xs px-3 py-1.5 rounded-full border transition-colors ${r?"bg-indigo-50 border-indigo-200 text-indigo-700 font-medium":"bg-white border-slate-200 text-slate-500 hover:bg-slate-50"}`,children:r?"予定ありのみ表示":"全バース表示"})]}),I.jsx("div",{className:"w-full overflow-x-auto border border-slate-200 rounded-xl shadow-sm",children:I.jsxs("div",{className:"min-w-[800px] bg-white",children:[I.jsxs("div",{className:"flex border-b border-slate-200 bg-slate-50 sticky top-0 z-10 h-10",children:[I.jsx("div",{className:"w-24 flex-shrink-0 text-[10px] font-bold text-slate-400 uppercase pl-4 flex items-center border-r border-slate-200",children:"バース"}),I.jsx("div",{className:"flex-1 relative",children:s.map(h=>I.jsxs("div",{className:"absolute text-[9px] font-bold text-slate-400 transform -translate-x-1/2 top-3",style:{left:`${h/24*100}%`},children:[h,":00"]},h))})]}),I.jsx("div",{className:"divide-y divide-slate-100",children:o.map(h=>{const f=h.berths.some(p=>t.find(m=>m.berthName===p));return r&&!f?null:I.jsxs("div",{children:[I.jsx("div",{className:"bg-slate-50/80 px-4 py-1.5 text-[10px] font-bold text-slate-600 border-l-4 border-l-indigo-500",children:h.name}),h.berths.map((p,m)=>{const _=t.find(C=>C.berthName===p);return r&&!_?null:I.jsxs("div",{className:`flex items-center group relative h-12 ${m%2===0?"bg-white":"bg-slate-50/20"}`,children:[I.jsx("div",{className:"w-24 flex-shrink-0 border-r border-slate-200 h-full flex items-center pl-4 text-[10px] font-bold text-slate-500",children:p}),I.jsxs("div",{className:"flex-1 relative h-full",children:[s.map(C=>I.jsx("div",{className:"absolute top-0 bottom-0 border-l border-slate-100",style:{left:`${C/24*100}%`}},C)),_&&I.jsxs("button",{onClick:()=>e(_),title:`${_.shipName} ${_.eta}-${_.etd} ${_.cargo}`,className:`absolute top-1.5 bottom-1.5 rounded-lg shadow-sm border text-left px-3 flex flex-col justify-center transition-all hover:scale-[1.02] z-10 overflow-hidden ${_.status==="作業中"?"bg-indigo-600 text-white border-indigo-700":_.status==="完了"?"bg-slate-200 border-slate-300 text-slate-600":"bg-emerald-500 text-white border-emerald-600"}`,style:{left:`${l(_.eta)}%`,width:`${Math.max(10,u(_.eta,_.etd))}%`},children:[I.jsx("div",{className:"font-bold text-[10px] truncate leading-tight",children:_.shipName}),I.jsxs("div",{className:"text-[8px] opacity-80 font-mono mt-0.5",children:[_.eta,"-",_.etd]})]})]})]},p)})]},h.name)})})]})})]})};function rd(t){const e=t.trim(),n=e.match(/```(?:json)?\s*([\s\S]*?)\s*```/i),r=n?n[1]:e;try{const i=JSON.parse(r);return Array.isArray(i)?i:null}catch{return null}}function tu(t){const e=new Set(["予定","作業中","完了","未定"]),n=[];for(const r of t){if(!r||typeof r!="object")continue;const i=String(r.date||"").trim(),s=String(r.berthName||"").trim();let o=String(r.shipName||"").trim();o||(o="未定");const l=i||new Date().toISOString().split("T")[0];if(!l||!s)continue;const u=String(r.eta??"-").trim()||"-",h=String(r.etd??"-").trim()||"-",f=String(r.cargo||"").trim(),p=e.has(String(r.status))?String(r.status):"未定",m=Number.isFinite(Number(r.trucksPlanned))?Number(r.trucksPlanned):0,_=Number.isFinite(Number(r.trucksArrived))?Number(r.trucksArrived):0;n.push({date:l,berthName:s,shipName:o,eta:u,etd:h,cargo:f,status:p,trucksPlanned:m,trucksArrived:_})}return n}function qw(t){return`${t.date||""}_${t.berthName||""}_${t.shipName||""}`.replace(/[\s\/\\,:()\[\]{}"'<>@#%\^\*\+\=\?\|]+/g,"_").replace(/__+/g,"_").slice(0,180)}function FP(t,e,n){const r=new Map,i=s=>`${s.date}||${s.berthName}||${s.shipName}`;for(const s of t)try{r.set(i(s),s)}catch{}for(const s of e){const o=i(s),l=qw(s);r.set(o,{id:l,...s,createdAt:n})}return Array.from(r.values())}function Gw(t){const e=String(t||"").match(/^data:([^;]+);base64,(.+)$/);return e?{mimeType:e[1],base64:e[2]}:{base64:"",mimeType:"application/octet-stream"}}async function Ww(t,e=1600,n=.72){const r=await zP(t),i=new Image;i.decoding="async",i.src=r,await new Promise((_,C)=>{i.onload=()=>_(),i.onerror=()=>C(new Error("画像の読み込みに失敗しました"))});const s=i.naturalWidth||i.width,o=i.naturalHeight||i.height,l=Math.min(1,e/Math.max(s,o)),u=Math.max(1,Math.round(s*l)),h=Math.max(1,Math.round(o*l)),f=document.createElement("canvas"),p=f.getContext("2d");if(!p)throw new Error("canvas context error");f.width=u,f.height=h,p.drawImage(i,0,0,u,h);const m=f.toDataURL("image/jpeg",n);return Gw(m).base64}async function jP(t){if(t.type==="application/pdf"||typeof t.name=="string"&&t.name.toLowerCase().endsWith(".pdf")){const r=await Kw(t,1);if(!r||r.length===0)throw new Error("PDFの画像化に失敗しました");const i=[];for(const m of r){const _=new Image;_.src=m,await new Promise((C,N)=>{_.onload=()=>C(),_.onerror=()=>N(new Error("画像の読み込みに失敗しました"))}),i.push(_)}let s=0,o=0;for(const m of i)s+=m.naturalWidth||m.width,o=Math.max(o,m.naturalHeight||m.height);const l=document.createElement("canvas");l.width=Math.max(1,Math.floor(s)),l.height=Math.max(1,Math.floor(o));const u=l.getContext("2d");if(!u)throw new Error("canvas context error");let h=0;for(const m of i){const _=m.naturalWidth||m.width,C=m.naturalHeight||m.height;u.drawImage(m,0,0,_,C,h,0,_,C),h+=_}const f=l.toDataURL("image/jpeg",.78),{base64:p}=Gw(f);if(!p)throw new Error("PDFの画像化に失敗しました");return console.debug("[debug] fileToGeminiInlineData: merged pdf -> jpeg size bytes",Math.floor(p.length*3/4),"mime=image/jpeg"),{data:p,mimeType:"image/jpeg"}}const n=await Ww(t,1200,.65);if(console.debug("[debug] fileToGeminiInlineData: image -> jpeg size bytes",Math.floor(n.length*3/4),"mime=image/jpeg"),!n)throw new Error("画像の変換に失敗しました");return{data:n,mimeType:"image/jpeg"}}async function UP(t,e){const n=await jP(t),r=`
この港湾スケジュールの資料（PDF/JPG）からデータを抽出し、**JSON配列のみ**で返してください（説明文やコードフェンスは禁止）。

スキーマ（配列の各要素）:
{
  "date": "YYYY-MM-DD",
  "berthName": "1-3A など",
  "shipName": "船名（未定なら未定）",
  "eta": "HH:mm または '-'",
  "etd": "HH:mm または '-'",
  "cargo": "貨物内容（不明/未定も可）",
  "status": "予定|作業中|完了|未定",
  "trucksPlanned": number,
  "trucksArrived": number
}

注意:
- 日付が「1月17日」等の場合は、年（2026）を補完してください
- 時刻が「0800」等なら「08:00」に変換してください
- 時刻が不明なら '-' にしてください
- trucksPlanned/trucksArrived が読めない場合は 0
- 可能な限り表の全行を抽出してください
`.trim(),i=new NP(e),s=["gemini-1.5-flash","gemini-1.5-pro","gemini-2.0-flash","gemini-2.0-flash-lite"],o={inlineData:{data:n.data,mimeType:n.mimeType}};let l=null,u="";for(const p of s)try{u=(await i.getGenerativeModel({model:p}).generateContent([r,o])).response.text(),l=null;break}catch(m){l=m;const _=String((m==null?void 0:m.message)||m||"");if(_.includes("404")||_.toLowerCase().includes("not found")||_.includes("429")||_.toLowerCase().includes("quota")||_.toLowerCase().includes("resource_exhausted"))continue;throw m}if(l){const p=String((l==null?void 0:l.message)||l||"");throw p.includes("429")||p.toLowerCase().includes("quota")?new Error("Geminiの利用上限（429: Quota exceeded）に達しています。時間を置くか、別プロジェクト/別APIキーで実行してください（無料枠の場合は特に発生しやすいです）。"):new Error(`Geminiモデルが見つかりませんでした（モデル名/提供APIの不一致の可能性）。APIキーの発行元（AI StudioのGemini API / Generative Language API）と利用可能モデルを確認してください。元エラー: ${p}`)}const h=rd(u);if(!h)throw new Error("Gemini response is not a JSON array");const f=tu(h);if(f.length===0)throw new Error("No rows parsed from Gemini response");return f}async function zP(t){const e=await t.arrayBuffer(),n=new Uint8Array(e);let r="";const i=32768;for(let l=0;l<n.length;l+=i)r+=String.fromCharCode(...n.subarray(l,l+i));const s=btoa(r);return`data:${t.type||"application/octet-stream"};base64,${s}`}async function Kw(t,e=1){const n=await qm(()=>import("./pdf-BnPRJEQ6.js"),[]),r=await qm(()=>import("./pdf.worker-CE3EuEaK.js"),[]);n.GlobalWorkerOptions.workerSrc=r.default;const i=new Uint8Array(await t.arrayBuffer()),s=await n.getDocument({data:i}).promise,o=Math.min(e,s.numPages||1),l=[],u=f=>{const p=f.indexOf(","),m=p>=0?f.slice(p+1):f;return Math.floor(m.length*3/4)},h=async(f,p,m)=>{const _=f.getViewport({scale:p}),C=document.createElement("canvas"),N=C.getContext("2d");if(!N)throw new Error("canvas context error");C.width=Math.floor(_.width),C.height=Math.floor(_.height),await f.render({canvasContext:N,viewport:_}).promise;const b=Math.floor(C.width*.06),A=Math.floor(C.height*.1),v=Math.max(1,C.width-b*2),x=Math.max(1,C.height-A*2),O=Math.floor(v*.06),j=Math.floor(v/2)+O,U=(S,k)=>{const R=document.createElement("canvas"),T=R.getContext("2d");if(!T)throw new Error("canvas context error");return R.width=k,R.height=x,T.drawImage(C,S,A,k,x,0,0,k,x),R.toDataURL("image/jpeg",m)},E=U(b,Math.min(v,j)),y=b+Math.max(0,v-j),w=U(y,Math.min(v,j));return{left:E,right:w}};for(let f=1;f<=o;f++){const p=await s.getPage(f),m=8*1024*1024,_=[{scale:2.2,quality:.86},{scale:2,quality:.84},{scale:1.8,quality:.82},{scale:1.6,quality:.8}];let C=null;for(const N of _){const{left:b,right:A}=await h(p,N.scale,N.quality);if(u(b)+u(A)<=m){C={left:b,right:A};break}}if(!C){const{left:N}=await h(p,1.4,.75);l.push(N);break}l.push(C.left),l.push(C.right)}return l.slice(0,2)}async function BP(t){if(t.type==="application/pdf"||typeof t.name=="string"&&t.name.toLowerCase().endsWith(".pdf"))return await Kw(t,1);const n=await Ww(t,2e3,.88);return console.debug("[debug] fileToVisionImagesForOpenAi: image -> dataUrl size bytes",Math.floor(n.length*3/4)),[`data:image/jpeg;base64,${n}`]}async function $P(t){const e=await BP(t);try{const i=e.map(s=>{const o=s.indexOf(","),l=o>=0?s.slice(o+1):s;return Math.floor(l.length*3/4)});console.debug("[debug] callOpenAiScheduleApiViaFunction: prepared images count",e.length,"sizesBytes",i)}catch(i){console.debug("[debug] callOpenAiScheduleApiViaFunction: unable to measure image sizes",i)}const n=3,r=1e3;for(let i=1;i<=n;i++){const s=new AbortController,l=setTimeout(()=>s.abort(),6e4);try{const u=await fetch("/api/extract-schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({images:e}),signal:s.signal});if(clearTimeout(l),u.ok){const f=await u.json(),p=tu(Array.isArray(f==null?void 0:f.rows)?f.rows:[]);if(p.length===0)throw new Error("OpenAI解析結果が0件でした");return p}const h=await u.text().catch(()=>"");if(u.status===502){if(i<n){await new Promise(f=>setTimeout(f,r*Math.pow(2,i-1)));continue}throw h.includes("<title>502")||h.includes("google.com/images/branding/googlelogo")?new Error("OpenAI解析APIエラー: 502（サーバ一時エラー）。30秒ほど待ってから再実行してください。"):new Error(`OpenAI解析APIエラー: 502 ${h}`)}throw u.status===404?new Error("OpenAI解析APIが見つかりません（/api/extract-schedule）。Firebase Functionsが未デプロイの可能性があります。 ※Functionsのデプロイには Firebase のプランを Blaze（従量課金）へアップグレードし、OPENAI_API_KEY secret を設定する必要があります。"):new Error(`OpenAI解析APIエラー: HTTP ${u.status} ${h}`)}catch(u){clearTimeout(l);const h=String((u==null?void 0:u.message)||u||"");if(u&&(u.name==="AbortError"||h.toLowerCase().includes("network"))){if(i<n){await new Promise(f=>setTimeout(f,r*Math.pow(2,i-1)));continue}throw new Error("OpenAI解析APIタイムアウト。ネットワークまたはサーバの状態を確認してください。")}if(i<n){await new Promise(f=>setTimeout(f,r*Math.pow(2,i-1)));continue}throw u}}throw new Error("OpenAI解析APIへの接続に失敗しました（リトライ上限到達）")}function HP(){const[t,e]=te.useState(null),[n,r]=te.useState("schedule"),[i,s]=te.useState("monthly"),[o,l]=te.useState(null),[u,h]=te.useState(null),[f,p]=te.useState(""),[m,_]=te.useState(null),[C,N]=te.useState("2026-01-19"),[b,A]=te.useState([]),[v,x]=te.useState(()=>{try{const V=localStorage.getItem("soma_port_local_schedule");if(!V)return[];const $=JSON.parse(V);return Array.isArray($)?$:[]}catch{return[]}}),[O,j]=te.useState(!1),[U,E]=te.useState(!1),[y,w]=te.useState(1),[S,k]=te.useState(()=>{const V=Vr("VITE_GEMINI_API_KEY");try{return localStorage.getItem("gemini_api_key")||V}catch{return V}}),[R,T]=te.useState(""),[Je,dn]=te.useState(!1),[fn,zt]=te.useState(!1),[B,K]=te.useState(!1),[Q,me]=te.useState(()=>{try{return localStorage.getItem("ai_provider")==="openai"?"openai":"gemini"}catch{return"gemini"}}),[ce,ve]=te.useState(!1),[Nt,Bt]=te.useState(!1),[Dt,Et]=te.useState(""),[ra,ia]=te.useState(!1),[Sr,Ar]=te.useState(""),si=te.useRef(!1);te.useEffect(()=>{if(!$n)return;const V=M1($n,ee=>{e(ee),si.current&&K(!!ee)});return(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await O1($n,__initial_auth_token):await k1($n)}catch(ee){console.error("Auth error:",ee);try{const ae=window.location.hostname;T(`Firebase Authでログインできませんでした。Firebase Console → Authentication → Sign-in method で「匿名」を有効化し、Authentication → Settings → Authorized domains に「${ae}」を追加してください。`)}catch{T("Firebase Authでログインできませんでした（Anonymous有効化 / Authorized domains を確認してください）。")}}finally{si.current=!0,zt(!0);try{K(!!($n!=null&&$n.currentUser))}catch{K(!1)}}})(),()=>V()},[]);const us=(()=>{try{return window.location.hostname}catch{return""}})();te.useEffect(()=>{if(!fn||!B||!t||!It)return;const V=Lc(It,"artifacts",Gs,"public","data","schedules");return JR(V,$=>{const ee=[];$.forEach(ae=>ee.push({id:ae.id,...ae.data()})),A(ee)},$=>{console.error("Firestore snapshot error:",$),String(($==null?void 0:$.code)||"").includes("permission-denied")?T("Firestore権限エラー（permission-denied）: Anonymousログインが必要です。上の案内どおり Authorized domains / 匿名ログイン設定を確認してください。"):T(`Firestore接続エラー: ${String(($==null?void 0:$.message)||$)}`)})},[fn,B,t]);const Cr=te.useMemo(()=>t&&It?b:v,[t,b,v]);te.useEffect(()=>{try{localStorage.setItem("soma_port_local_schedule",JSON.stringify(v))}catch{}},[v]);const cs=te.useMemo(()=>Cr.filter(V=>V.date===C),[C,Cr]),sa=async()=>{if(!m){T("先にPDF/JPGを選択してください。");return}T(""),j(!0);try{const V=Q==="openai"?await $P(m):await UP(m,S.trim()),$=new Date;if(Je){const ae=FP(v||[],V,$);x(ae)}else x(V.map((ee,ae)=>({id:`local-${$.getTime()}-${ae}`,...ee,createdAt:$})));if(It&&t){const ee=jc(It),ae=Lc(It,"artifacts",Gs,"public","data","schedules");Je?V.forEach(Te=>{const $t=qw(Te);ee.set(di(ae,$t),{...Te,createdAt:$})}):(b.forEach(Te=>{Te.id&&ee.delete(di(ae,Te.id))}),V.forEach(Te=>ee.set(di(ae),{...Te,createdAt:$}))),await ee.commit()}else T("注意: まだSign-in requiredのため、今回はローカル反映のみです（Firestoreへ保存されません）。上の案内どおり認証設定後に再実行してください。");j(!1),E(!0),s("daily"),setTimeout(()=>r("schedule"),300)}catch(V){console.error(V),T(String((V==null?void 0:V.message)||V||"unknown error")),j(!1)}},Mu=async()=>{if(!confirm("全消去しますか？")||(x([]),!It||!t))return;const V=jc(It);b.forEach($=>{$.id&&V.delete(di(It,"artifacts",Gs,"public","data","schedules",$.id))}),await V.commit()},Lu=V=>{_(V),h(URL.createObjectURL(V)),p(V.type||""),E(!1),w(1)},oa=V=>{k(V);try{localStorage.setItem("gemini_api_key",V)}catch{}},xr=V=>{me(V);try{localStorage.setItem("ai_provider",V)}catch{}};function hs(V,$){const ee=[];let ae="",Te=!1;for(let $t=0;$t<V.length;$t++){const Ot=V[$t];if(Ot==='"'){const oi=V[$t+1];if(Te&&oi==='"'){ae+='"',$t++;continue}Te=!Te;continue}if(!Te&&Ot===$){ee.push(ae.trim()),ae="";continue}ae+=Ot}return ee.push(ae.trim()),ee}function Fu(V){const $=String(V||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map(Be=>Be.trim()).filter(Be=>Be.length>0);if($.length===0)return[];const ee=$[0].includes("	")?"	":",",ae=hs($[0],ee).map(Be=>Be.replace(/^\uFEFF/,"").trim()),Te=ae.some(Be=>/date|日付|バース|船|eta|etd|status|状況/i.test(Be)),$t=Be=>{const xe=Be.replace(/\s+/g,"").toLowerCase();return xe==="date"||xe.includes("日付")?"date":xe==="berthname"||xe.includes("バース")?"berthName":xe==="shipname"||xe.includes("船名")?"shipName":xe==="eta"?"eta":xe==="etd"?"etd":xe==="cargo"||xe.includes("貨物")||xe.includes("積荷")?"cargo":xe==="status"||xe.includes("状況")?"status":xe==="trucksplanned"||xe.includes("予定台数")?"trucksPlanned":xe==="trucksarrived"||xe.includes("到着台数")?"trucksArrived":""},Ot=Te?ae.map($t):["date","berthName","shipName","eta","etd","cargo","status","trucksPlanned","trucksArrived"],oi=Te?1:0,ps=[];for(let Be=oi;Be<$.length;Be++){const xe=hs($[Be],ee),la={};for(let Ln=0;Ln<Math.min(Ot.length,xe.length);Ln++){const ms=Ot[Ln];ms&&(la[ms]=xe[Ln])}ps.push(la)}return ps}async function ds(V){const $=new Date;if(x(V.map((ee,ae)=>({id:`local-${$.getTime()}-${ae}`,...ee,createdAt:$}))),It&&t){const ee=jc(It),ae=Lc(It,"artifacts",Gs,"public","data","schedules");b.forEach(Te=>{Te.id&&ee.delete(di(ae,Te.id))}),V.forEach(Te=>ee.set(di(ae),{...Te,createdAt:$})),await ee.commit()}else T("注意: まだSign-in requiredのため、今回はローカル反映のみです（Firestoreへ保存されません）。");E(!0),s("daily"),setTimeout(()=>r("schedule"),200)}const fs=async()=>{const V=(Dt||"").trim();if(!V){T("手動インポート: まずJSON/CSVを貼り付けるか、ファイルを選択してください。");return}T("");try{const $=rd(V)||rd(V.replace(/^window\.SCANNED_FULL_DATA\s*=\s*/i,"")),ee=tu($||Fu(V));if(ee.length===0)throw new Error("手動インポート: 0件でした（形式を確認してください）");await ds(ee.map(ae=>({...ae})))}catch($){console.error($),T(String(($==null?void 0:$.message)||$||"手動インポートに失敗しました"))}},aa=async V=>{try{Ar(V.name||"");const $=await V.text();Et($),ia(!0)}catch($){T(String(($==null?void 0:$.message)||$||"ファイルの読み込みに失敗しました"))}};return I.jsxs("div",{className:"flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden",children:[I.jsxs("aside",{className:"w-72 bg-[#0F172A] text-white flex flex-col flex-shrink-0 shadow-2xl z-20",children:[I.jsx("div",{className:"w-full h-1 bg-indigo-500"}),I.jsxs("div",{className:"p-8 flex items-center space-x-4 border-b border-slate-800/50",children:[I.jsx("div",{className:"bg-indigo-500 p-2.5 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center",children:I.jsx(XI,{size:24})}),I.jsxs("div",{children:[I.jsx("h1",{className:"text-sm font-black leading-tight tracking-tight",children:"相馬港バース管理"}),I.jsx("p",{className:"text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1",children:"Berth Management System"})]})]}),I.jsxs("nav",{className:"flex-1 p-6 space-y-3 overflow-y-auto",children:[I.jsxs("button",{onClick:()=>r("schedule"),className:`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all font-black text-sm ${n==="schedule"?"bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2":"text-slate-400 hover:bg-slate-800/50 hover:text-white"}`,children:[I.jsx(JI,{size:18}),I.jsx("span",{children:"バース計画"})]}),I.jsxs("button",{onClick:()=>r("source"),className:`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all font-black text-sm ${n==="source"?"bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2":"text-slate-400 hover:bg-slate-800/50 hover:text-white"}`,children:[I.jsx(Gm,{size:18}),I.jsx("span",{children:"資料・自動読取"})]})]}),I.jsx("div",{className:"p-6",children:I.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-[1.5rem] border border-slate-800/50",children:[I.jsx("p",{className:"text-[10px] text-slate-500 font-black uppercase mb-1 tracking-[0.2em]",children:"Connected Account"}),I.jsxs("div",{className:"flex items-center space-x-2",children:[I.jsx("div",{className:`w-2 h-2 rounded-full ${t?"bg-emerald-500 animate-pulse":"bg-amber-400"}`}),I.jsx("span",{className:"text-[11px] font-mono text-slate-300 truncate w-full",children:(t==null?void 0:t.uid)||"Sign-in required"})]})]})})]}),I.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[I.jsxs("header",{className:"h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-10 z-10",children:[I.jsxs("div",{className:"flex items-center space-x-2",children:[I.jsx(sS,{size:20,className:"text-slate-300"}),I.jsx("span",{className:"text-xs font-black text-slate-400 uppercase tracking-widest",children:"Dashboard"}),I.jsx("span",{className:"text-slate-200 text-xl",children:"/"}),I.jsx("span",{className:"text-sm font-black text-slate-900",children:n==="schedule"?"バース計画":"資料読取"})]}),I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsxs("div",{className:"flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-md",children:[I.jsx("button",{onClick:()=>xr("gemini"),className:`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${Q==="gemini"?"bg-white shadow-lg shadow-indigo-500/10 text-indigo-600":"text-slate-500 hover:text-slate-700"}`,title:"Gemini（無料）",children:"GEMINI (FREE)"}),I.jsx("button",{onClick:()=>xr("openai"),className:`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${Q==="openai"?"bg-white shadow-lg shadow-emerald-500/10 text-emerald-600":"text-slate-500 hover:text-slate-700"}`,title:"OpenAI（Functions経由 / Blazeが必要）",children:"OPENAI (BLAZE)"})]}),I.jsxs("button",{onClick:()=>ve(V=>!V),className:`relative p-3 rounded-2xl transition-all ${ce?"bg-indigo-100 text-indigo-600":"text-slate-400 hover:bg-slate-100 hover:text-indigo-600"}`,title:"設定（解析エンジン/キー）",children:[I.jsx(Wm,{size:20}),!S&&Q==="gemini"&&I.jsx("span",{className:"absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"})]}),I.jsx("a",{href:"https://unkou-final.web.app",className:"flex items-center px-3 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-black transition-colors",title:"LogiTrack（トップ）へ戻る",children:"LogiTrackへ戻る"}),I.jsxs("button",{onClick:Mu,className:"flex items-center px-3 py-2 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl text-xs font-black transition-colors",children:[I.jsx(lS,{className:"w-4 h-4 mr-2"}),"データ全消去"]})]})]}),I.jsxs("main",{className:"flex-1 overflow-y-auto p-10",children:[ce&&I.jsx("div",{className:"max-w-6xl mx-auto mb-6",children:I.jsxs("div",{className:"p-6 bg-white rounded-3xl border-2 border-indigo-100 shadow-2xl flex flex-col gap-4",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{className:"text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center",children:[I.jsx(Wm,{size:14,className:"mr-2"})," 設定（解析エンジン / APIキー）"]}),I.jsx("button",{onClick:()=>ve(!1),className:"text-slate-400 hover:text-rose-600",children:I.jsx(uS,{size:18})})]}),I.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-3 flex-wrap",children:[I.jsx("div",{className:"text-xs text-slate-500 font-black",children:"解析エンジン"}),I.jsxs("select",{value:Q,onChange:V=>xr(V.target.value==="openai"?"openai":"gemini"),className:"border border-slate-200 rounded-2xl px-4 py-2 text-xs font-black",title:"Geminiが429（上限）の場合はOpenAIに切替できます（Functionsが必要）",children:[I.jsx("option",{value:"gemini",children:"Gemini（フロント直）"}),I.jsx("option",{value:"openai",children:"ChatGPT(OpenAI)（Functions経由）"})]}),Q==="gemini"?I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"text-xs text-slate-500 font-black",children:"Gemini API Key"}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("input",{type:Nt?"text":"password",value:S,onChange:V=>oa(V.target.value),placeholder:"AIzaSy...",className:"border border-slate-200 rounded-2xl px-4 py-2 text-xs font-mono w-80"}),I.jsx("button",{onClick:()=>Bt(V=>!V),className:"px-3 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700",children:Nt?"隠す":"表示"})]}),I.jsxs("div",{className:"text-[11px] text-slate-500 font-bold leading-relaxed",children:["Geminiが ",I.jsx("b",{children:"429（Quota exceeded）"})," の場合は、解析エンジンを ",I.jsx("b",{children:"ChatGPT(OpenAI)"})," に切り替えてください。"]})]}):I.jsxs("div",{className:"text-[11px] text-slate-500 font-bold leading-relaxed",children:["OpenAIは ",I.jsx("b",{children:"/api/extract-schedule"}),"（Firebase Functions）経由です。Functionsが未デプロイの場合はエラーになります。 ※Functionsデプロイには Firebase のプランを ",I.jsx("b",{children:"Blaze（従量課金）"})," へアップグレードし、",I.jsx("b",{children:"OPENAI_API_KEY"})," secret を設定する必要があります。"]})]})]})}),fn&&!t&&I.jsx("div",{className:"max-w-6xl mx-auto mb-4",children:I.jsxs("div",{className:"text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2",children:[I.jsx(Ac,{className:"w-4 h-4 mt-0.5"}),I.jsxs("div",{children:[I.jsx("div",{className:"font-bold",children:"サインインできていません（Sign-in required）"}),I.jsxs("div",{className:"text-xs mt-1 leading-relaxed",children:["Firebase Console → Authentication → Sign-in method で ",I.jsx("b",{children:"匿名（Anonymous）"})," を有効化し、 Authentication → Settings → Authorized domains に ",I.jsx("b",{children:us||"（このドメイン）"})," を追加してください。 その後、ページを ",I.jsx("b",{children:"Ctrl+F5"})," で更新してください。"]})]})]})}),n==="schedule"&&I.jsxs("div",{className:"space-y-6",children:[I.jsxs("div",{className:"flex justify-between items-end flex-wrap gap-3",children:[I.jsxs("div",{children:[I.jsx("h2",{className:"text-2xl font-black text-slate-900 tracking-tight",children:"バース入港スケジュール"}),I.jsx("p",{className:"text-slate-500 text-sm font-medium mt-1",children:"リアルタイムに同期された港湾状況を確認できます"})]}),I.jsxs("div",{className:"flex space-x-3",children:[I.jsxs("div",{className:"flex items-center bg-white rounded-xl border border-slate-200 p-1 shadow-sm",children:[I.jsx("button",{onClick:()=>{const V=new Date(C);V.setDate(V.getDate()-1),N(V.toISOString().split("T")[0])},className:"p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all",children:I.jsx(ZI,{size:20})}),I.jsx("span",{className:"text-sm font-mono font-black w-40 text-center text-slate-700",children:C}),I.jsx("button",{onClick:()=>{const V=new Date(C);V.setDate(V.getDate()+1),N(V.toISOString().split("T")[0])},className:"p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all",children:I.jsx(eS,{size:20})})]}),I.jsxs("div",{className:"flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm font-bold",children:[I.jsx("button",{onClick:()=>s("monthly"),className:`px-4 py-1.5 rounded-lg text-xs transition-all ${i==="monthly"?"bg-indigo-600 text-white shadow-md":"text-slate-500 hover:bg-slate-50"}`,children:"月間"}),I.jsx("button",{onClick:()=>s("daily"),className:`px-4 py-1.5 rounded-lg text-xs transition-all ${i==="daily"?"bg-indigo-600 text-white shadow-md":"text-slate-500 hover:bg-slate-50"}`,children:"日次"})]})]})]}),I.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-4 gap-8 min-h-[600px]",children:[I.jsx("div",{className:"xl:col-span-3",children:I.jsx(Ls,{className:"p-6 border-none shadow-xl bg-white/80 backdrop-blur-sm h-full",children:i==="daily"?I.jsx(LP,{schedules:cs,onSelect:l,date:C}):I.jsx(MP,{schedules:Cr,currentDate:C,onDateSelect:V=>{N(V),s("daily")}})})}),I.jsx("div",{className:"xl:col-span-1 flex flex-col space-y-6",children:o?I.jsxs(Ls,{className:"p-6 border-none shadow-2xl bg-slate-900 text-white",children:[I.jsxs("div",{className:"flex justify-between items-start mb-6 border-b border-slate-800 pb-4",children:[I.jsxs("div",{children:[I.jsx("p",{className:"text-[10px] text-indigo-400 font-black uppercase mb-1 tracking-widest",children:"Ship Details"}),I.jsx("h3",{className:"font-black text-xl",children:o.shipName})]}),I.jsx("button",{onClick:()=>l(null),className:"text-slate-400 hover:text-white transition-colors",children:"×"})]}),I.jsxs("div",{className:"space-y-4 text-sm",children:[I.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[I.jsxs("div",{children:[I.jsx("p",{className:"text-[10px] text-slate-500 font-bold uppercase mb-1",children:"Berth"}),I.jsx("p",{className:"font-black text-sm bg-slate-800 px-3 py-2 rounded-lg text-indigo-300",children:o.berthName})]}),I.jsxs("div",{children:[I.jsx("p",{className:"text-[10px] text-slate-500 font-bold uppercase mb-1",children:"Status"}),I.jsx("p",{className:"font-black text-sm bg-slate-800 px-3 py-2 rounded-lg text-emerald-300",children:o.status})]})]}),I.jsxs("div",{children:[I.jsx("p",{className:"text-[10px] text-slate-500 font-bold uppercase mb-1",children:"Time"}),I.jsxs("p",{className:"font-mono text-lg font-black",children:[o.eta," - ",o.etd]})]}),I.jsxs("div",{children:[I.jsx("p",{className:"text-[10px] text-slate-500 font-bold uppercase mb-1",children:"Cargo"}),I.jsx("p",{className:"text-slate-200 font-medium bg-slate-800/50 p-3 rounded-xl border border-slate-800",children:o.cargo})]}),I.jsxs("div",{className:"flex justify-between items-center bg-slate-800/50 p-3 rounded-xl border border-slate-800",children:[I.jsx("div",{className:"text-slate-300 font-bold",children:"配車進捗"}),I.jsxs("div",{className:"text-emerald-300 font-black",children:[o.trucksArrived," / ",o.trucksPlanned]})]})]})]}):I.jsxs("div",{className:"h-full flex flex-col items-center justify-center p-12 text-center border-4 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400",children:[I.jsx("div",{className:"bg-white p-6 rounded-full shadow-lg mb-6",children:I.jsx(iS,{size:40,className:"text-slate-200"})}),I.jsx("h4",{className:"font-black text-slate-400",children:"日付/船を選択"}),I.jsx("p",{className:"text-xs mt-2 font-bold leading-relaxed",children:"カレンダーやタイムラインから選択すると詳細が表示されます"})]})})]})]}),n==="source"&&I.jsxs("div",{className:"max-w-6xl mx-auto space-y-4",children:[I.jsxs(Ls,{className:"p-5 border-none shadow-xl bg-white",children:[I.jsxs("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-3",children:[I.jsxs("div",{children:[I.jsxs("h2",{className:"text-lg font-black text-slate-900 flex items-center",children:[I.jsx(Gm,{className:"w-5 h-5 mr-2 text-indigo-600"}),"資料・自動読取"]}),I.jsx("p",{className:"text-slate-500 text-sm font-medium mt-1",children:"PDF/JPG を選んで「AIで上書き反映」を押すと、Firestoreへ洗い替え保存します。"})]}),I.jsxs("div",{className:"text-xs text-slate-500 font-bold",children:["解析エンジン: ",I.jsx("b",{className:"text-slate-700",children:Q==="openai"?"ChatGPT(OpenAI)":"Gemini"}),I.jsx("span",{className:"text-slate-300 mx-2",children:"/"}),"設定は右上の ",I.jsx("b",{children:"鍵アイコン"})," から変更できます。"]})]}),R&&I.jsxs("div",{className:"mt-3 text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-xl p-3 flex items-start gap-2",children:[I.jsx(Ac,{className:"w-4 h-4 mt-0.5"}),I.jsx("div",{children:R})]})]}),I.jsxs(Ls,{className:"p-5 border-none shadow-xl bg-white",children:[I.jsxs("div",{className:"flex items-center justify-between gap-3",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-sm font-black text-slate-900",children:"手動インポート（AIが429でも運用できます）"}),I.jsxs("div",{className:"text-xs text-slate-500 font-bold mt-1",children:["JSON配列（SCANNED_FULL_DATA形式）またはCSVを貼り付けて反映します。",Sr?I.jsxs("span",{className:"text-slate-400",children:["（選択中: ",Sr,"）"]}):null]})]}),I.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[I.jsxs("label",{className:"cursor-pointer px-4 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700",children:["ファイル選択（.json/.csv/.txt）",I.jsx("input",{type:"file",className:"hidden",accept:".json,.csv,.txt,text/plain,application/json,text/csv",onChange:V=>{var ee;const $=(ee=V.target.files)==null?void 0:ee[0];$&&aa($)}})]}),I.jsx("button",{onClick:()=>ia(V=>!V),className:"px-4 py-2 rounded-2xl text-xs font-black bg-indigo-50 hover:bg-indigo-100 text-indigo-700",children:ra?"閉じる":"貼り付け/編集"}),I.jsx("button",{onClick:fs,className:"px-5 py-2 rounded-2xl text-xs font-black bg-indigo-600 hover:bg-indigo-500 text-white",title:"既存データは洗い替え（全削除→登録）です",children:"手動で反映（洗い替え）"})]})]}),ra&&I.jsxs("div",{className:"mt-4",children:[I.jsx("textarea",{value:Dt,onChange:V=>Et(V.target.value),placeholder:`例（JSON）:
[
  { "date": "2026-01-19", "berthName": "1-3B", "shipName": "第18住若丸", "eta": "08:00", "etd": "17:00", "cargo": "未定", "status": "予定", "trucksPlanned": 0, "trucksArrived": 0 }
]

例（CSV）:
date,berthName,shipName,eta,etd,cargo,status,trucksPlanned,trucksArrived
2026-01-19,1-3B,第18住若丸,08:00,17:00,未定,予定,0,0`,className:"w-full min-h-[180px] border border-slate-200 rounded-2xl p-4 text-xs font-mono bg-slate-50"}),I.jsxs("div",{className:"mt-2 flex items-center justify-between flex-wrap gap-2",children:[I.jsx("div",{className:"text-[11px] text-slate-500 font-bold",children:"形式: JSON配列 / `window.SCANNED_FULL_DATA = [...]` / CSV（ヘッダあり/なし）に対応"}),I.jsx("button",{onClick:()=>{Et(""),Ar("")},className:"px-4 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700",children:"クリア"})]})]})]}),I.jsxs(Ls,{className:"p-0 border-none shadow-2xl bg-slate-900 min-h-[700px] flex flex-col rounded-[2.5rem] overflow-hidden relative",children:[I.jsx("div",{className:"absolute top-0 right-0 p-10 pointer-events-none opacity-20",children:I.jsx(nS,{size:260,className:"text-indigo-500"})}),u?I.jsxs("div",{className:"flex flex-col h-[750px]",children:[I.jsxs("div",{className:"bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10",children:[I.jsx("div",{className:"flex items-center space-x-4",children:f==="application/pdf"?I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsx("span",{className:"bg-rose-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",children:"PDF"}),I.jsxs("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"text-indigo-300 text-xs font-bold flex items-center hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-xl",children:[I.jsx(rS,{size:14,className:"mr-2"})," 別タブで開く"]})]}):I.jsxs("div",{className:"flex bg-slate-800 p-1.5 rounded-2xl items-center",children:[I.jsx("button",{onClick:()=>w(V=>Math.max(.5,V-.2)),className:"p-2 text-slate-400 hover:text-white",children:I.jsx(hS,{size:20})}),I.jsxs("span",{className:"text-xs font-black text-white w-16 text-center",children:[Math.round(y*100),"%"]}),I.jsx("button",{onClick:()=>w(V=>Math.min(3,V+.2)),className:"p-2 text-slate-400 hover:text-white",children:I.jsx(cS,{size:20})})]})}),I.jsxs("div",{className:"flex items-center space-x-3",children:[O?I.jsxs("div",{className:"flex items-center px-6 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-[0_0_30px_rgba(99,102,241,0.5)]",children:[I.jsx(oS,{className:"animate-spin mr-3",size:18})," AI解析中..."]}):U?I.jsxs("div",{className:"flex items-center px-6 py-3 bg-emerald-500 text-white rounded-2xl font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.5)]",children:[I.jsx(tS,{className:"mr-3",size:18})," 反映完了"]}):I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsxs("label",{className:"text-xs text-slate-300 flex items-center space-x-2",children:[I.jsx("input",{type:"checkbox",className:"form-checkbox",checked:Je,onChange:V=>dn(V.target.checked)}),I.jsx("span",{className:"text-[11px]",children:"既存データにマージして反映"})]}),I.jsxs("button",{onClick:sa,className:"bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black shadow-xl hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all flex items-center border-b-4 border-indigo-800",children:[I.jsx(aS,{size:18,className:"mr-3"})," AIで上書き反映"]})]}),I.jsx("button",{onClick:()=>{h(null),_(null),E(!1)},className:"text-slate-500 p-2 hover:text-white transition-colors bg-slate-800 rounded-full",children:"×"})]})]}),I.jsxs("div",{className:"flex-1 bg-slate-800 relative overflow-hidden flex justify-center items-start",children:[f==="application/pdf"?I.jsx("iframe",{src:u,className:"w-full h-full border-none",title:"PDF Viewer"}):I.jsx("div",{className:"w-full h-full overflow-auto p-10 flex justify-center items-start scrollbar-hide",children:I.jsx("div",{className:"transition-transform duration-200 origin-top shadow-2xl",style:{transform:`scale(${y})`},children:I.jsx("img",{src:u,className:"max-w-4xl bg-white rounded-xl"})})}),O&&I.jsx("div",{className:"absolute inset-0 bg-indigo-900/30 pointer-events-none overflow-hidden z-20",children:I.jsx("div",{className:"w-full h-1.5 bg-indigo-400 shadow-[0_0_30px_#818cf8,0_0_60px_#818cf8] absolute animate-[scan_2s_infinite]"})})]})]}):I.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-20 text-center",children:[I.jsx("div",{className:"bg-indigo-500/20 p-10 rounded-full text-indigo-400 mb-10 shadow-[0_0_50px_rgba(99,102,241,0.2)]",children:I.jsx(Km,{size:64})}),I.jsx("h3",{className:"text-2xl font-black text-white mb-4",children:"入出港予定表をアップロード"}),I.jsx("p",{className:"text-slate-400 max-w-md mx-auto font-medium mb-10 leading-relaxed",children:"港湾サイトからダウンロードした最新の PDF / 画像を選択してください。"}),I.jsxs("label",{className:"cursor-pointer group relative overflow-hidden bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center",children:[I.jsxs("span",{className:"relative z-10 flex items-center",children:[I.jsx(Km,{size:20,className:"mr-3"})," ファイルを選択"]}),I.jsx("input",{type:"file",className:"hidden",accept:"image/*,application/pdf",onChange:V=>{var ee;const $=(ee=V.target.files)==null?void 0:ee[0];$&&Lu($)}})]}),I.jsxs("p",{className:"mt-4 text-xs text-amber-300 flex items-center justify-center",children:[I.jsx(Ac,{className:"w-3 h-3 mr-1"})," 注意: 反映するとスケジュールは洗い替え（全削除→登録）です"]})]})]})]})]})]}),I.jsx("style",{children:`
        @keyframes scan { 0% { top: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `})]})}try{window.importMeta=import.meta}catch{}zc.createRoot(document.getElementById("root")).render(I.jsx(bE.StrictMode,{children:I.jsx(HP,{})}));
