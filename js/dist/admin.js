(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const r=flarum.core.compat["admin/app"];var n=t.n(r);n().initializers.add("blomstra/turnstile",(function(){n().extensionData.for("blomstra-turnstile").registerSetting({setting:"blomstra-turnstile.site_key",type:"text",label:n().translator.trans("blomstra-turnstile.admin.settings.site_key")}).registerSetting({setting:"blomstra-turnstile.secret_key",type:"text",label:n().translator.trans("blomstra-turnstile.admin.settings.secret_key")})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map