import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as T}from"./assets/vendor-77e16229.js";const p=document.getElementById("datetime-picker"),s=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]");let r,d;s.disabled=!0;const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r>=new Date?s.disabled=!1:(s.disabled=!0,T.show({tittle:"Alert",message:"Please choose a date in the future"}))}};y(p,I);s.addEventListener("click",()=>{s.disabled=!0;const e=Date.now(),n=r.getTime()-e;i(n),d=setInterval(()=>{const o=Date.now(),t=r.getTime()-o;t<=0?(clearInterval(d),u(0,0,0,0)):i(t)},1e3)});function u(e,n,o,t){S.textContent=a(e),g.textContent=a(n),D.textContent=a(o),E.textContent=a(t)}function a(e){return String(e).padStart(2,"0")}function i(e){const{days:n,hours:o,minutes:t,seconds:c}=b(e);u(n,o,t,c)}function b(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
