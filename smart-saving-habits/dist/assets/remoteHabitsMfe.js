function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const g="modulepreload",p=function(t){return"/"+t},h={},w=function(o,i,l){let c=Promise.resolve();if(i&&i.length>0){const n=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),r=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.all(i.map(s=>{if(s=p(s),s in h)return;h[s]=!0;const f=s.endsWith(".css"),b=f?'[rel="stylesheet"]':"";if(!!l)for(let _=n.length-1;_>=0;_--){const d=n[_];if(d.href===s&&(!f||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${b}`))return;const a=document.createElement("link");if(a.rel=f?"stylesheet":g,f||(a.as="script",a.crossOrigin=""),a.href=s,r&&a.setAttribute("nonce",r),document.head.appendChild(a),f)return new Promise((_,d)=>{a.addEventListener("load",_),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return c.then(()=>o()).catch(n=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=n,window.dispatchEvent(e),!e.defaultPrevented)throw n})},y=new Set(["Module","__esModule","default","_export_sfc"]);let u={"./HabitsMfe":()=>(E("./__federation_expose_HabitsMfe-RvCqqD-d.js").then(t=>Object.keys(t).every(o=>y.has(o))?()=>t.default:()=>t))};const m={},v=(t,o,i)=>{const l=import.meta.url;if(typeof l>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const c=l.substring(0,l.lastIndexOf("remoteHabitsMfe.js"));t.forEach(n=>{const e=c+n;if(!(e in m))if(m[e]=!0,o){const r="css__remoteHabitsMfe__"+i;window[r]==null&&(window[r]=[]),window[r].push(e)}else{const r=document.head.appendChild(document.createElement("link"));r.href=e,r.rel="stylesheet"}})};async function E(t){return w(()=>import(t),__vite__mapDeps([]))}const T=t=>{if(!u[t])throw new Error("Can not find remote module "+t);return u[t]()},O=t=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(t).forEach(([o,i])=>{const l=Object.keys(i)[0],c=Object.values(i)[0],n=c.scope||"default";globalThis.__federation_shared__[n]=globalThis.__federation_shared__[n]||{};const e=globalThis.__federation_shared__[n];(e[o]=e[o]||{})[l]=c})};export{v as dynamicLoadingCss,T as get,O as init};
