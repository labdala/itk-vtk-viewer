if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return t[e]||(r=new Promise((async r=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},r=(r,t)=>{Promise.all(r.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(r)};self.define=(r,s,i)=>{t[r]||(t[r]=Promise.resolve().then((()=>{let t={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return t;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return t.default||(t.default=r),t}))})))}}define("./serviceWorker.js",["./workbox-505c02de"],(function(e){"use strict";e.setCacheNameDetails({prefix:"itk-vtk-viewer-"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"itkVtkViewer.js",revision:"9000fa806583ef4d00327be6fd97f5c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/(\.js|\.png|\.wasm)$/,new e.StaleWhileRevalidate({cacheName:"itk-vtk-viewer-StaleWhileRevalidate",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:1209600,purgeOnQuotaError:!0})]}),"GET")}));
