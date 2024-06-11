"use strict";exports.id=526,exports.ids=[526],exports.modules={9526:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var l=t(326),s=t(7577);let n=(e,r)=>[...e,...r],a=(0,s.memo)(({identifierID:e,sliderData:r,containerWidth:t,containerHeight:a,renderComponent:i})=>{let m=(0,s.useRef)(null),o=`animateScroll-${e}`,d=(0,s.useMemo)(()=>n(r,r),[r]),c=(0,s.useMemo)(()=>({keyframes:`
        @keyframes ${o} {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${t}px * ${r.length}));
          }
        }
      `,animateScroll:`
        .${o} {
          animation: ${o} ${5*r.length}s linear infinite;
        }
      `}),[]);return(0,s.useEffect)(()=>{let e=m.current;if(!e)return;let r=()=>e.style.width=`${t*d.length}px`;return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),(0,l.jsxs)(s.Fragment,{children:[l.jsx("style",{children:`${c.keyframes} ${c.animateScroll}`}),l.jsx("section",{className:`w-full h-${a} mx-auto overflow-hidden`,children:l.jsx("article",{ref:m,children:l.jsx("div",{className:`${o} flex relative`,children:d.map((e,r)=>l.jsx(s.Fragment,{children:i(e,r)},r))})})})]})})}};