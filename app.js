/* ===================== มาสคอต: แมงจีนูนรวมร่างรถ (วาดเองทั้งหมด) ===================== */
let MSC_N=0;
function beetleCar(o={}){
  const mood=o.mood||'happy', id='m'+(++MSC_N), cls=o.cls||'';
  const eye=(cx,cy,rx,ry)=>{
    if(mood==='sleep') return `<path d="M${cx-rx} ${cy+1}q${rx} ${ry*.9} ${rx*2} 0" stroke="#2A1418" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    if(mood==='wink'&&cx>170) return `<path d="M${cx-rx} ${cy+2}q${rx} -${ry*.9} ${rx*2} 0" stroke="#2A1418" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    const px=mood==='sad'?0:2;
    return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" stroke="#2A1418" stroke-width="2.4"/>
      <ellipse cx="${cx+px}" cy="${cy+2}" rx="${rx*.62}" ry="${ry*.66}" fill="#2A1418"/>
      <circle cx="${cx+px+rx*.25}" cy="${cy-ry*.25}" r="${rx*.24}" fill="#fff"/><circle cx="${cx+px-rx*.2}" cy="${cy+ry*.3}" r="${rx*.11}" fill="#fff"/>`;
  };
  const mouth=mood==='sleep'?`<ellipse cx="208" cy="128" rx="5" ry="4" fill="#5A0D1A"/>`
    :mood==='sad'?`<path d="M196 133q12-8 24 0" stroke="#2A1418" stroke-width="3" fill="none" stroke-linecap="round"/>`
    :`<path d="M192 124q14 15 30 0" fill="#5A0D1A" stroke="#2A1418" stroke-width="2.6" stroke-linejoin="round"/><path d="M199 129q8 5 16 0" fill="#FF7A8A"/>
      <path d="M194 125h26" stroke="#fff" stroke-width="2" opacity=".9"/>`;
  const zz=mood==='sleep'?`<g fill="#2A1418" font-family="Mali,sans-serif" font-weight="700" opacity=".75"><text x="196" y="30" font-size="20">z</text><text x="212" y="16" font-size="14">z</text></g>`:'';
  return `<svg class="msc ${cls}" viewBox="0 0 240 200" role="img" aria-label="${o.label||'มาสคอตแมงจีนูนรถซิ่ง'}">
  <defs>
   <linearGradient id="${id}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0384F"/><stop offset=".55" stop-color="#C8102E"/><stop offset="1" stop-color="#7E0A1E"/></linearGradient>
   <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7BE3A4"/><stop offset=".35" stop-color="#25B566"/><stop offset=".7" stop-color="#0E7A45"/><stop offset="1" stop-color="#0A5A36"/></linearGradient>
   <linearGradient id="${id}w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DFF4FF"/><stop offset="1" stop-color="#9CCFEA"/></linearGradient>
   <radialGradient id="${id}s" cx=".35" cy=".3" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="122" cy="186" rx="96" ry="9" fill="#2A1418" opacity=".16"/>
  <!-- ขาแมลงเล็กๆ -->
  <g stroke="#3B2216" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path d="M106 156l-5 13 5 6"/><path d="M124 156l1 14 7 4"/><path d="M142 156l6 12 7 3"/>
  </g>
  <!-- ปีกหลังเป็นสปอยเลอร์ -->
  <path d="M30 92c-14-6-22-2-22 6 0 7 9 11 26 10z" fill="#E9F7EE" stroke="#2A1418" stroke-width="2.4" opacity=".95"/>
  <path d="M14 98c6 1 12 2 18 1" stroke="#9FD6B5" stroke-width="2" fill="none"/>
  <!-- ตัวรถ -->
  <path d="M26 112c0-14 10-22 26-23l118-2c26 0 46 10 52 30l4 14c2 8-2 16-10 18H38c-8 0-12-6-12-13z" fill="url(#${id}r)" stroke="#2A1418" stroke-width="3" stroke-linejoin="round"/>
  <path d="M40 104c40-4 110-5 160 0" stroke="#fff" stroke-width="3.5" opacity=".45" fill="none" stroke-linecap="round"/>
  <!-- ซุ้มล้อ -->
  <path d="M42 149a28 28 0 0 1 56 0z" fill="#5A0814" stroke="#2A1418" stroke-width="3" stroke-linejoin="round"/>
  <path d="M150 149a28 28 0 0 1 56 0z" fill="#5A0814" stroke="#2A1418" stroke-width="3" stroke-linejoin="round"/>
  <!-- กระดองปีกแข็ง (elytra) เป็นห้องโดยสาร -->
  <path d="M48 96c2-42 38-70 82-70 38 0 64 24 70 62l1 8z" fill="url(#${id}g)" stroke="#2A1418" stroke-width="3" stroke-linejoin="round"/>
  <path d="M130 27c-8 22-10 46-8 69" stroke="#0A4A2C" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <g stroke="#0A5A36" stroke-width="1.6" fill="none" opacity=".55" stroke-linecap="round"><path d="M70 90c2-24 14-42 34-52"/><path d="M84 92c1-20 9-36 24-46"/><path d="M98 93c0-16 6-30 16-39"/></g>
  <ellipse cx="96" cy="50" rx="30" ry="14" fill="url(#${id}s)" transform="rotate(-24 96 50)"/>
  <!-- กระจกหน้า = ใบหน้า -->
  <path d="M142 92c0-26 8-46 22-54 18 8 30 28 32 54z" fill="url(#${id}w)" stroke="#2A1418" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M158 46l-8 30M166 44l-10 38" stroke="#fff" stroke-width="3" opacity=".8" stroke-linecap="round"/>
  ${eye(160,70,9,11)}${eye(183,70,8,10.5)}
  <ellipse cx="152" cy="86" rx="6" ry="3.4" fill="#FF8FA0" opacity=".8"/><ellipse cx="192" cy="86" rx="5" ry="3" fill="#FF8FA0" opacity=".8"/>
  <!-- หนวดแมงจีนูน ปลายเป็นแผงใบ -->
  <g stroke="#3B2216" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M168 38c4-14 14-22 28-24"/><path d="M178 42c8-10 20-14 34-12"/></g>
  <g fill="#6B3B1F" stroke="#2A1418" stroke-width="1.6"><path d="M196 14c4-8 12-10 14-6-4 2-8 5-14 6z"/><path d="M196 14c6-3 14-1 14 4-5-1-9-2-14-4z"/><path d="M196 14c5 1 10 6 8 10-3-3-6-6-8-10z"/>
   <path d="M212 30c5-7 13-8 15-3-5 1-9 3-15 3z"/><path d="M212 30c7-2 14 1 13 6-5-2-9-3-13-6z"/><path d="M212 30c4 2 9 7 6 11-2-4-4-7-6-11z"/></g>
  <!-- กระจังหน้ายิ้ม ไฟหน้า -->
  ${mouth}
  <path d="M206 104l14 4c2 1 2 4 0 5l-14 1c-3 0-4-2-4-4v-3c0-2 2-3 4-3z" fill="#FFE27A" stroke="#2A1418" stroke-width="2.2"/>
  <circle cx="124" cy="120" r="7" fill="#F4F1EA" stroke="#2A1418" stroke-width="2"/><path d="M120 121c2-4 6-5 8-3-1 3-4 5-8 3z" fill="#25B566"/>
  <path d="M28 122h10" stroke="#FFB020" stroke-width="5" stroke-linecap="round"/>
  <!-- ล้อ -->
  ${[70,178].map(x=>`<g><circle cx="${x}" cy="156" r="22" fill="#231A1D" stroke="#2A1418" stroke-width="3"/><circle cx="${x}" cy="156" r="11" fill="#D9D4D6" stroke="#2A1418" stroke-width="2.2"/><circle cx="${x}" cy="156" r="3.5" fill="#25B566"/><path d="M${x} 146v4M${x} 162v4M${x-10} 156h4M${x+6} 156h4" stroke="#8A8285" stroke-width="2" stroke-linecap="round"/></g>`).join('')}
  ${zz}
 </svg>`;
}

/* ===================== เสียงกดปุ่มแบบคลิกสั้นๆ สไตล์ไอโฟน (สังเคราะห์สดด้วย Web Audio) ===================== */
const SFX=(()=>{
  let ctx=null, bus=null, nz=null;
  const ac=()=>{
    if(!ctx){ try{
      ctx=new (window.AudioContext||window.webkitAudioContext)();
      bus=ctx.createGain(); bus.gain.value=1; bus.connect(ctx.destination);
      const n=Math.floor(ctx.sampleRate*.04); nz=ctx.createBuffer(1,n,ctx.sampleRate); const d=nz.getChannelData(0); for(let i=0;i<n;i++) d[i]=Math.random()*2-1;
    }catch(e){ctx=null;} }
    if(ctx&&ctx.state==='suspended') ctx.resume(); return ctx; };
  /* คลิก: เสียงรบกวนสั้นมาก ผ่าน bandpass + ตัวสั่นความถี่สูงที่ดับเร็ว ได้เสียง "ติ๊ก" แห้งๆ แบบแป้นพิมพ์ไอโฟน */
  function click(o={}){
    const c=ac(); if(!c||!ST.sound) return;
    const {f=3200,q=1.1,vol=.55,dur=.022,tone=1750,tv=.12,delay=0}=o, t=c.currentTime+delay+.003;
    const s=c.createBufferSource(); s.buffer=nz;
    const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=f; bp.Q.value=q;
    const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=900;
    const g=c.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.0012); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    s.connect(bp).connect(hp).connect(g).connect(bus); s.start(t); s.stop(t+dur+.01);
    if(tone){ const o2=c.createOscillator(), g2=c.createGain(); o2.type='triangle'; o2.frequency.setValueAtTime(tone,t); o2.frequency.exponentialRampToValueAtTime(tone*.55,t+.012);
      g2.gain.setValueAtTime(0.0001,t); g2.gain.exponentialRampToValueAtTime(tv,t+.001); g2.gain.exponentialRampToValueAtTime(0.0001,t+.016);
      o2.connect(g2).connect(bus); o2.start(t); o2.stop(t+.03); }
  }
  function bell(f,vol=.07,delay=0,dur=.5){ const c=ac(); if(!c||!ST.sound) return; const t=c.currentTime+delay+.005;
    const o=c.createOscillator(), g=c.createGain(); o.type='sine'; o.frequency.value=f;
    g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.01); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.connect(g).connect(bus); o.start(t); o.stop(t+dur+.05); }
  return {
    unlock:ac,
    tap(){ click(); },
    soft(){ click({f:2600,vol:.4,tone:1400,tv:.08}); },
    toggle(){ click({f:2400,vol:.45,dur:.018,tone:1200}); click({f:3600,vol:.3,dur:.016,tone:0,delay:.045}); },
    ok(){ bell(1046,.06); bell(1568,.05,.09); },
    bad(){ bell(330,.07,0,.35); },
    done(){ [784,988,1175].forEach((f,i)=>bell(f,.055,i*.11)); },
    rest(){ bell(659,.05,0,.9); bell(523,.045,.35,1.1); },
    click
  };
})();

/* ===================== สถานะที่จำไว้ในเครื่อง ===================== */
const KEY='jinoon.v1';
let ST={};
try{ ST=JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ ST={}; }
ST=Object.assign({sound:true,theme:'light',bookPage:1,
  rest:{on:true,min:45},timer:{min:25,kind:'read'},startScreen:true},ST);
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(ST)); }catch(e){} }
function applyTheme(){ const r=document.documentElement; if(r.dataset.theme!==ST.theme) r.dataset.theme=ST.theme;
  const m=document.querySelector('meta[name="theme-color"]'); if(m) m.content=ST.theme==='dark'?'#16110F':'#FFF8F1'; }
applyTheme();
const LITE=(navigator.deviceMemory&&navigator.deviceMemory<=2)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2);
if(LITE) document.documentElement.classList.add('lite');

/* ===================== ไอคอนเส้น ===================== */
const sv=(p,f)=>`<svg viewBox="0 0 24 24" fill="${f||'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I={
  home:sv('<path d="M4 10.2 12 4l8 6.2V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>'),
  learn:sv('<path d="M3 8.5 12 4l9 4.5-9 4.5z"/><path d="M7 10.6v4.6c1.4 1.3 3.1 1.9 5 1.9s3.6-.6 5-1.9v-4.6M21 8.5v5"/>'),
  chart:sv('<path d="M4 20h16"/><path d="M7 16.5v-5M12 16.5V7M17 16.5v-8"/>'),
  clock:sv('<circle cx="12" cy="12" r="8.2"/><path d="M12 7.5V12l3 2"/>'),
  alert:sv('<path d="M5 5.5h14v10H10l-5 4z"/><path d="M12 8.5v3M12 13.6v.1"/>'),
  search:sv('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>'),
  reset:sv('<path d="M4.5 12a7.5 7.5 0 1 0 2.3-5.4"/><path d="M4.5 4.5V9H9"/>'),
  sOn:sv('<path d="M4.5 9.5h3L12 6v12l-4.5-3.5h-3z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/>'),
  sOff:sv('<path d="M4.5 9.5h3L12 6v12l-4.5-3.5h-3z"/><path d="m16 10 4 4M20 10l-4 4"/>'),
  chev:sv('<path d="m9.5 6 6 6-6 6"/>'),
  down:sv('<path d="m6 9.5 6 6 6-6"/>'),
  back:sv('<path d="M14.5 6 8.5 12l6 6"/>'),
  x:sv('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'),
  stop:sv('<rect x="6.5" y="6.5" width="11" height="11" rx="2"/>'),
  pause:sv('<path d="M9 6.5v11M15 6.5v11"/>'),
  arrow:sv('<path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5"/>'),
  book:sv('<path d="M4 5.8c2.7-1.2 5.3-1.1 8 .7v12.7c-2.7-1.8-5.3-1.9-8-.7zM20 5.8c-2.7-1.2-5.3-1.1-8 .7v12.7c2.7-1.8 5.3-1.9 8-.7z"/>'),
  sun:sv('<circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M5.6 5.6 7 7M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4 7 17M17 7l1.4-1.4"/>'),
  moon:sv('<path d="M19.5 14.2A7.8 7.8 0 0 1 9.8 4.5a7.8 7.8 0 1 0 9.7 9.7z"/>'),
  dice:sv('<rect x="4.5" y="4.5" width="15" height="15" rx="3.2"/><circle cx="9" cy="9" r=".9" fill="currentColor"/><circle cx="15" cy="15" r=".9" fill="currentColor"/><circle cx="15" cy="9" r=".9" fill="currentColor"/><circle cx="9" cy="15" r=".9" fill="currentColor"/><circle cx="12" cy="12" r=".9" fill="currentColor"/>'),
  plus:sv('<path d="M12 6.5v11M6.5 12h11"/>'),
  minus:sv('<path d="M6.5 12h11"/>'),
  cards:sv('<rect x="4" y="7" width="13" height="13" rx="2.2"/><path d="M8 4h9.8A2.2 2.2 0 0 1 20 6.2V16"/><path d="M7.5 12h6M7.5 15.5h4"/>'),
  expand:sv('<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/>'),
  check:sv('<path d="m6 12.5 4 4 8-9"/>'),
  play:sv('<path d="M8 5.8v12.4a.6.6 0 0 0 .9.5l9.6-6.2a.6.6 0 0 0 0-1L8.9 5.3a.6.6 0 0 0-.9.5z"/>'),
  flame:sv('<path d="M12 20.5c-3.6 0-6-2.4-6-5.7 0-3.6 3.1-5.4 3.6-9.3 2.6 1.6 4 3.6 4.2 6 .9-.6 1.5-1.6 1.7-2.8 1.6 1.6 2.5 3.6 2.5 6 0 3.4-2.4 5.8-6 5.8z"/>'),
  target:sv('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.3"/><circle cx="12" cy="12" r=".9" fill="currentColor"/>'),
  layers:sv('<path d="m12 4 8.5 4.5L12 13 3.5 8.5z"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.3 12 20.8l8.5-4.5"/>'),
  cog:sv('<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3v2.2M4.6 7.8l1.9 1.1M17.5 15.1l1.9 1.1M4.6 16.2l1.9-1.1M17.5 8.9l1.9-1.1"/><circle cx="12" cy="12" r="6.6"/>'),
  sliders:sv('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
  eye:sv('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
  timer:sv('<circle cx="12" cy="13.5" r="7"/><path d="M12 10v3.5l2.2 1.6M9.5 3.5h5M12 3.5v3"/>'),
  bulb:sv('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>'),
  dl:sv('<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14"/>'),
  user:sv('<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5"/>'),
  spark:sv('<path d="M12 3.5l1.9 5.2 5.6.3-4.4 3.5 1.5 5.4L12 14.8l-4.6 3.1 1.5-5.4-4.4-3.5 5.6-.3z" fill="currentColor" stroke="none"/>'),
  lock:sv('<rect x="5.5" y="10.5" width="13" height="9.5" rx="2.2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>'),
  quiz:sv('<rect x="5" y="3.5" width="14" height="17" rx="2.4"/><path d="M9 3.5v2h6v-2M8.5 10.5l1.5 1.5 3-3M8.5 16h7"/>'),
  calc:sv('<rect x="5" y="3" width="14" height="18" rx="2.4"/><rect x="8" y="6" width="8" height="3.5" rx=".8"/><path d="M8.5 13h.1M12 13h.1M15.5 13h.1M8.5 16.5h.1M12 16.5h.1M15.5 16.5h.1" stroke-width="2.4"/>'),
  paw:sv('<ellipse cx="12" cy="15.5" rx="4.2" ry="3.6" fill="currentColor" stroke="none"/><ellipse cx="6.3" cy="10.6" rx="1.7" ry="2.2" fill="currentColor" stroke="none"/><ellipse cx="9.6" cy="7" rx="1.7" ry="2.3" fill="currentColor" stroke="none"/><ellipse cx="14.4" cy="7" rx="1.7" ry="2.3" fill="currentColor" stroke="none"/><ellipse cx="17.7" cy="10.6" rx="1.7" ry="2.2" fill="currentColor" stroke="none"/>'),
  heart:sv('<path d="M12 19.5s-7.5-4.4-7.5-9.7A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4c0 5.3-7.5 9.7-7.5 9.7z"/>')
};
/* โลโก้: มาสคอตย่อในกรอบมน */
const MARK=`<span class="mark" aria-hidden="true">${beetleCar({label:''})}</span>`;
const WORD=`<span class="word">Jinoon<em>Calc</em></span>`;
const IMG={clip:'media/clip.mp4',poster:'img/clip-poster.webp'};

/* ===================== ตัวช่วย ===================== */
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const sp=s=>String(s).replace(/([ก-ฮะ-ฺเ-๎])([A-Za-z0-9])/g,'$1 $2').replace(/([A-Za-z0-9⁺⁻²³₂₃₄])([ก-ฮเ-ไ])/g,'$1 $2');
const tx=s=>esc(sp(s));
const CHV=ch=>`--c:var(--c${ch});--cs:var(--c${ch}s)`;
const n2=n=>String(n).padStart(2,'0');
const THM=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const thDate=t=>{const d=new Date(t);return `${d.getDate()} ${THM[d.getMonth()]} ${d.getFullYear()+543}, ${n2(d.getHours())}:${n2(d.getMinutes())} น.`;};
const mmss=s=>{s=Math.max(0,Math.round(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+':'+n2(m):m)+':'+n2(x);};
const meter=(p,cls='')=>`<span class="meter ${cls}" role="img" aria-label="${p==null?'ยังไม่เริ่ม':p+'%'}"><i style="width:${p||0}%"></i></span>`;
function ring(p,size=112,stroke=10){const r=(size-stroke)/2, c=2*Math.PI*r, v=p==null?0:p;
  return `<svg class="ring" viewBox="0 0 ${size} ${size}" style="width:${size}px;height:${size}px" aria-hidden="true"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>${!v?'':`<circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--brand)" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${(c*v/100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 ${size/2} ${size/2})"/>`}</svg>`;}
function toast(t){$$('.toast').forEach(x=>x.remove());const d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.innerHTML=I.spark+'<span>'+esc(t)+'</span>';document.body.appendChild(d);setTimeout(()=>d.remove(),2000);}

/* กด: ยุบเล็กน้อย + เสียงคลิก */
document.addEventListener('pointerdown',e=>{
  SFX.unlock();
  const b=e.target.closest('.rp'); if(!b||b.disabled) return;
  b.classList.add('pressing');
  if(!b.dataset.silent) (b.dataset.soft?SFX.soft:SFX.tap)();
});
['pointerup','pointercancel','pointerleave'].forEach(ev=>document.addEventListener(ev,()=>$$('.pressing').forEach(b=>b.classList.remove('pressing')),true));

/* ===================== หนังสือ: สรุปการคำนวณเภสัช ===================== */
const CHAPTERS=[
  {id:1,ready:true,name:'พื้นฐานที่เกี่ยวข้องกับการคำนวณทางเภสัชกรรม',en:'Roman numerals และ Significant figures',p:1,n:16,
   pdf:{f:'pdf/ch1.pdf',mb:2.0},
   toc:[{n:'สารบัญ',p:2},{n:'เรียนเรื่องอะไรบ้างในบทนี้',p:3},{n:'1. ระบบเลขโรมัน Roman numeration system',p:3},{n:'1.1 หลักการเพิ่ม',p:4,s:1},{n:'1.2 หลักการลด',p:4,s:1},{n:'1.3 การเขียนจำนวนที่มีค่ามาก',p:5,s:1},{n:'1.4 ตัวอย่างเลขโรมันพร้อมเฉลย',p:6,s:1},
    {n:'2. เลขนัยสำคัญ Significant number',p:7},{n:'2.1 หลักการนับเลขนัยสำคัญ',p:8,s:1},{n:'2.2 หลักการบันทึกข้อมูล',p:9,s:1},
    {n:'3. กฎของเลขนัยสำคัญ',p:11},{n:'3.1 การบันทึกผล',p:11,s:1},{n:'3.2 การปัดตัวเลขตัวสุดท้าย',p:11,s:1},{n:'3.3 หลักการคำนวณเลขนัยสำคัญ',p:14,s:1}]},
  {id:2},{id:3},{id:4},{id:5},{id:6}
];
const chOf=id=>CHAPTERS.find(c=>c.id===id);
const BOOK={title:'สรุปการคำนวณเภสัช PHT111',n:16,ch:CHAPTERS.filter(c=>c.ready)};
const soon=id=>{toast(`บทที่ ${id} coming soon`);};
const pageSrc=p=>`book/p-${String(p).padStart(3,'0')}.webp`;
const pageCh=p=>{let c=BOOK.ch[0].id;for(const x of BOOK.ch) if(p>=x.p) c=x.id;return c;};
let bookIO=null, bookSaveT=0;
function bookHTML(){
  const n=BOOK.n, cur=Math.min(n,Math.max(1,ST.bookPage||1)), c1=chOf(1);
  return head()+`<div class="wrap"><div class="ptitle"><div><h1>อ่านหนังสือ</h1><p>${esc(BOOK.title)} · แตะหน้าเพื่อขยาย ซูมได้</p></div>
     <a class="btn ghost rp" href="${c1.pdf.f}" download>${I.dl}PDF บทที่ 1</a></div>
   <details class="toc panel" ${UI.tocOpen?'open':''}><summary class="rp" data-soft="1">${I.layers}<b>สารบัญบทที่ 1</b>${I.down}</summary><div class="toc-l">${c1.toc.map(t=>`<button class="toc-r rp ${t.s?'sub':''}" data-pg="${t.p}" data-soft="1"><span>${esc(t.n)}</span><b class="num">${t.p}</b></button>`).join('')}</div></details></div>
   <div class="bk-top"><div class="wrap bk-bar"><div class="bk-chs" aria-label="เลือกบท">${CHAPTERS.map(c=>c.ready?`<button class="bk-ch rp on" data-bkch="${c.p}" data-soft="1">${I.book}บทที่ ${c.id}</button>`:`<button class="bk-ch soon rp" data-soon="${c.id}" data-soft="1">บทที่ ${c.id}<i>soon</i></button>`).join('')}</div><span class="bk-cnt num" id="bk-cnt">หน้า <b>${cur}</b>/${n}</span></div></div>
   <div class="wrap"><div class="bk-pages" id="bk-pages">${Array.from({length:n},(_,i)=>`<figure class="bk-pg" id="pg-${i+1}" data-p="${i+1}"><button class="bk-img rp" data-zoom="${i+1}" data-silent="1" aria-label="ขยายหน้า ${i+1}"><img alt="หน้า ${i+1}" decoding="async" width="1100" height="1557"></button><figcaption class="num">หน้า ${i+1} · บทที่ 1</figcaption></figure>`).join('')}</div>
   <div class="soon-box">${beetleCar({mood:'wink',cls:'soon-msc'})}<div><b>บทถัดไป coming soon</b><p>บทที่ 2 เป็นต้นไปกำลังเตรียมอยู่ จะเพิ่มเข้ามาในเล่มนี้เร็วๆ นี้</p></div></div></div>`;
}
function bookBind(){
  if(bookIO) bookIO.disconnect();
  const pgs=$$('.bk-pg'); const load=f=>{const im=f.querySelector('img'); if(!im.getAttribute('src')) im.src=pageSrc(+f.dataset.p);};
  if('IntersectionObserver' in window){ bookIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) load(e.target); }),{rootMargin:'1200px 0px'}); pgs.forEach(f=>bookIO.observe(f)); }
  else pgs.forEach(load);
  $$('[data-bkch]').forEach(b=>b.onclick=()=>bookGo(+b.dataset.bkch,true));
  $$('[data-pg]').forEach(b=>b.onclick=()=>bookGo(+b.dataset.pg,true));
  const td=$('.toc'); if(td) td.ontoggle=()=>{UI.tocOpen=td.open;};
  $$('[data-zoom]').forEach(b=>b.onclick=()=>bookZoom(+b.dataset.zoom));
  const p=ST.bookPage||1; if(UI.bookJump){ bookGo(UI.bookJump,false); UI.bookJump=0; } else if(p>1) bookGo(p,false);
}
function bookGo(p,smooth){
  const el=$('#pg-'+p); if(!el) return; const top=$('.bk-top'); const off=(top?top.offsetHeight:0)+16;
  window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-off,behavior:smooth&&!LITE?'smooth':'auto'});
}
function bookScroll(){
  if(UI.tab!=='book') return;
  const top=$('.bk-top'), off=(top?top.offsetHeight:0)+innerHeight*.25;
  let cur=1; $$('.bk-pg').forEach(f=>{ if(f.getBoundingClientRect().top<off) cur=+f.dataset.p; });
  const c=$('#bk-cnt'); if(c) c.innerHTML=`หน้า <b>${cur}</b>/${BOOK.n}`;
    if(cur!==ST.bookPage){ ST.bookPage=cur; clearTimeout(bookSaveT); bookSaveT=setTimeout(save,400); }
}
addEventListener('scroll',bookScroll,{passive:true});
function openBookAt(ch,p){ const c=chOf(ch); if(!c||!c.ready) return soon(ch); UI.bookJump=p||c.p; go('book'); }
function bookZoom(p){
  const n=BOOK.n; let z=1; const L=$('#layer2');
  L.innerHTML=`<div class="bz" id="bz" role="dialog" aria-modal="true" aria-label="ดูหน้าหนังสือ">
    <div class="bz-bar"><button class="ib2 rp" id="bz-x" aria-label="ปิด">${I.x}</button><b id="bz-t" class="num"></b>
     <div class="bz-z"><button class="ib2 rp" id="bz-out" aria-label="ย่อ">${I.minus}</button><button class="ib2 rp" id="bz-in" aria-label="ขยาย">${I.plus}</button></div></div>
    <div class="bz-sc" id="bz-sc"><img id="bz-img" alt=""></div>
    <div class="bz-nav"><button class="btn rp" id="bz-prev">${I.back} ก่อนหน้า</button><button class="btn rp" id="bz-next">ถัดไป ${I.chev}</button></div></div>`;
  document.body.style.overflow='hidden';
  const img=$('#bz-img'), sc=$('#bz-sc');
  const show=()=>{ img.src=pageSrc(p); img.alt=`หน้า ${p}`; $('#bz-t').textContent=`หน้า ${p}/${n} · บทที่ 1`; $('#bz-prev').disabled=p<=1; $('#bz-next').disabled=p>=n; sc.scrollTo(0,0); };
  const zoom=v=>{ const cx=(sc.scrollLeft+sc.clientWidth/2)/sc.scrollWidth, cy=(sc.scrollTop+sc.clientHeight/2)/sc.scrollHeight;
    z=Math.max(1,Math.min(3.5,v)); img.style.width=(z*100)+'%';
    requestAnimationFrame(()=>{ sc.scrollLeft=cx*sc.scrollWidth-sc.clientWidth/2; sc.scrollTop=cy*sc.scrollHeight-sc.clientHeight/2; }); };
  const close=()=>{ L.innerHTML=''; if(!$('#layer').innerHTML) document.body.style.overflow=''; removeEventListener('keydown',kh,true); if(UI.tab==='book') bookGo(p,false); };
  $('#bz-x').onclick=close; $('#bz-in').onclick=()=>zoom(z+.75); $('#bz-out').onclick=()=>zoom(z-.75);
  $('#bz-prev').onclick=()=>{ if(p>1){p--;show();} }; $('#bz-next').onclick=()=>{ if(p<n){p++;show();} };
  img.ondblclick=()=>zoom(z>1?1:2.2);
  let sx=null; sc.addEventListener('touchstart',e=>{ sx=z===1&&e.touches.length===1?e.touches[0].clientX:null; },{passive:true});
  sc.addEventListener('touchend',e=>{ if(sx==null) return; const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>60){ if(dx<0&&p<n){p++;show();} else if(dx>0&&p>1){p--;show();} } sx=null; });
  const kh=e=>{ e.stopPropagation(); if(e.key==='Escape') close(); else if(e.key==='ArrowRight'&&p<n){p++;show();} else if(e.key==='ArrowLeft'&&p>1){p--;show();} };
  addEventListener('keydown',kh,true); show();
}


/* ===================== เวลาใช้งาน: นับเฉพาะตอนเปิดหน้าเว็บอยู่ ===================== */
const AWAY_LIMIT=5*60*1000; // ออกจากเว็บเกิน 5 นาที = จบการใช้งานรอบนั้น
ST.act=Object.assign({used:0,last:0},ST.act||{});
ST.cd=Object.assign({total:0,left:0,running:false,kind:'read'},ST.cd||{});
const KIND={read:'อ่านหนังสือ',quiz:'ทำข้อสอบ'};
function sessionCheck(){
  const now=Date.now();
  if(ST.act.last&&now-ST.act.last>AWAY_LIMIT){
    const hadCd=ST.cd.total>0;
    ST.act.used=0; ST.cd={total:0,left:0,running:false,kind:ST.cd.kind};
    save();
    return hadCd?'ออกจากเว็บเกิน 5 นาที เริ่มนับเวลาใหม่และยกเลิกตัวนับถอยหลังแล้ว':'ออกจากเว็บเกิน 5 นาที เริ่มนับเวลาพักสายตาใหม่';
  }
  return '';
}
let tickN=0;
function tick(){
  if(document.visibilityState!=='visible') return;
  const now=Date.now();
  if(ST.act.last&&now-ST.act.last>AWAY_LIMIT){ const m=sessionCheck(); if(m) toast(m); }
  ST.act.last=now; ST.activeTotal=(ST.activeTotal||0)+1;
  if(ST.rest.on&&!$('#rest')&&!$('#start')){
    ST.act.used++;
    if(ST.act.used>=ST.rest.min*60){ ST.act.used=0; showRest(false); }
  }
  if(ST.cd.running&&!$('#start')){
    ST.cd.left--;
    if(ST.cd.left<=0){ ST.cd.left=0; ST.cd.running=false; save(); showTimeUp(); }
  }
  if(++tickN%10===0) save();
  timerPill(); const rl=$('#rest-left'); if(rl) rl.textContent=restLeftText();
  const td=$('#cd-big'); if(td) td.textContent=mmss(ST.cd.total?ST.cd.left:ST.timer.min*60);
}
setInterval(tick,1000);
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='hidden'){ ST.act.last=Date.now(); save(); }
  else { const m=sessionCheck(); if(m) toast(m); ST.act.last=Date.now(); timerPill(); if(UI.tab==='set'){const tp=$('#timer-panel'); if(tp){tp.innerHTML=timerPanel(); setBind();}} }
});
addEventListener('pagehide',()=>{ ST.act.last=Date.now(); save(); });
function restLeftText(){ if(!ST.rest.on) return 'ปิดอยู่'; const l=ST.rest.min*60-ST.act.used; return `อีก ${Math.max(1,Math.ceil(l/60))} นาทีจะเตือนครั้งถัดไป`; }

/* ---------- ป้ายเวลาที่หัวจอ ---------- */
function timerPill(){
  const C=ST.cd, on=C.total>0;
  const html=on?`<button class="tpill rp ${C.running?'run':'pause'}" data-silent="1" aria-label="ตัวนับถอยหลัง${KIND[C.kind]} เหลือ ${mmss(C.left)}">${C.running?I.timer:I.pause}<span class="num">${mmss(C.left)}</span></button>`:'';
  ['#tp-top','#tp-side','#tp-pl'].forEach(s=>{ const el=$(s); if(!el) return; if(el.dataset.h!==String(on)+C.running){ el.innerHTML=html; el.dataset.h=String(on)+C.running;
      const b=el.querySelector('.tpill'); if(b) b.onclick=()=>{ go('set'); }; }
    else { const n=el.querySelector('.tpill .num'); if(n) n.textContent=mmss(C.left); } });
}
/* ---------- แผงตั้งเวลา ---------- */
const PRESET=[15,25,30,45,60,90];
function timerPanel(){
  const C=ST.cd, T=ST.timer, on=C.total>0, pct=on?Math.round((1-C.left/C.total)*100):0;
  return `<div class="cd-wrap">
    <div class="cd-kind" role="radiogroup" aria-label="ประเภท">${Object.entries(KIND).map(([k,n])=>`<button class="fchip rp ${(on?C.kind:T.kind)===k?'on':''}" data-kind="${k}" role="radio" aria-checked="${(on?C.kind:T.kind)===k}" ${on?'disabled':''} data-soft="1">${k==='read'?I.book:I.quiz}${n}</button>`).join('')}</div>
    <div class="cd-face"><div class="ring-w">${ring(pct,168,12)}<span class="ring-v"><b class="num" id="cd-big">${mmss(on?C.left:T.min*60)}</b><small>${on?(C.running?'กำลังนับ':'หยุดชั่วคราว'):'นาที:วินาที'}</small></span></div></div>
    ${on?'':`<div class="cd-pre">${PRESET.map(m=>`<button class="fchip rp ${T.min===m?'on':''}" data-pre="${m}" data-soft="1"><b class="num">${m}</b> นาที</button>`).join('')}</div>
     <div class="stepper c"><button class="iconbtn rp" data-cdm="-5" aria-label="ลด 5 นาที">${I.minus}</button><b class="num">${T.min}<small>นาที</small></b><button class="iconbtn rp" data-cdm="5" aria-label="เพิ่ม 5 นาที">${I.plus}</button></div>`}
    <div class="cta-row two">${on?`<button class="btn ghost lg rp" data-cd="reset">${I.reset}ยกเลิก</button><button class="btn lg rp" data-cd="toggle">${C.running?I.pause+'หยุดชั่วคราว':I.play+'นับต่อ'}</button>`
      :`<button class="btn lg rp wide" data-cd="start">${I.play}เริ่มนับถอยหลัง${KIND[T.kind]}</button>`}</div>
    <p class="cd-note">นับเฉพาะตอนเปิดหน้าเว็บอยู่ ถ้าออกจากเว็บเกิน 5 นาที ตัวนับจะถูกยกเลิก</p></div>`;
}
function cdToggle(){ ST.cd.running=!ST.cd.running; save(); timerPill(); toast(ST.cd.running?'นับเวลาต่อ':'หยุดเวลาชั่วคราว'); const tp=$('#timer-panel'); if(tp){tp.innerHTML=timerPanel(); setBind();} }
function setBind(){
  const rf=()=>{ const tp=$('#timer-panel'); if(tp){ tp.innerHTML=timerPanel(); setBind(); } timerPill(); };
  $$('[data-kind]').forEach(b=>b.onclick=()=>{ST.timer.kind=b.dataset.kind;save();rf();});
  $$('[data-pre]').forEach(b=>b.onclick=()=>{ST.timer.min=+b.dataset.pre;save();rf();});
  $$('[data-cdm]').forEach(b=>b.onclick=()=>{ST.timer.min=Math.max(5,Math.min(240,ST.timer.min+ +b.dataset.cdm));save();rf();});
  $$('[data-cd]').forEach(b=>b.onclick=()=>{ const a=b.dataset.cd;
    if(a==='start'){ ST.cd={total:ST.timer.min*60,left:ST.timer.min*60,running:true,kind:ST.timer.kind}; toast('เริ่มนับถอยหลัง '+ST.timer.min+' นาที'); }
    else if(a==='toggle'){ ST.cd.running=!ST.cd.running; }
    else { ST.cd={total:0,left:0,running:false,kind:ST.cd.kind}; }
    save(); rf(); });
  $$('[data-rest]').forEach(b=>b.onclick=()=>{ ST.rest.min=Math.max(5,Math.min(180,ST.rest.min+ +b.dataset.rest)); if(ST.act.used>=ST.rest.min*60) ST.act.used=ST.rest.min*60-60; save();
    $('#rest-min').textContent=ST.rest.min; $('#rest-left').textContent=restLeftText(); });
}

/* ---------- ข้อความเต็มจอ: พักสายตา ---------- */
function showRest(demo){
  if($('#rest')) return;
  const d=document.createElement('div'); d.id='rest'; d.className='rest'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-labelledby','rest-t');
  d.innerHTML=`<div class="rest-in">
    <div class="rest-cat">${beetleCar({mood:"sleep",label:"แมงจีนูนรถหลับพักเครื่อง"})}</div>
    <p class="eyebrow num">${demo?'ตัวอย่าง':'ใช้งานมาแล้ว '+ST.rest.min+' นาที'}</p>
    <h2 id="rest-t">พักสายตาหน่อยนะ</h2>
    <p class="rest-tip">จอดพักเครื่องก่อน ละสายตาจากจอ มองไปไกลๆ ประมาณ 6 เมตร สัก 20 วินาที กะพริบตาช้าๆ แล้วค่อยกลับมาอ่านต่อ</p>
    <div class="rest-cd"><div class="ring-w">${ring(0,120,10)}<span class="ring-v"><b class="num" id="rest-s">20</b><small>วินาที</small></span></div></div>
    <button class="btn lg rp" id="rest-ok">${I.check}พักแล้ว ไปต่อ</button>
    <p class="rest-hint">ปัดขึ้น หรือกด Esc เพื่อปิด · จะเตือนอีกครั้งในอีก ${ST.rest.min} นาที</p></div>`;
  document.body.appendChild(d); SFX.rest();
  let s=20; const ringC=()=>{const c=d.querySelector('.ring');const r=(120-10)/2,C=2*Math.PI*r;c.innerHTML=`<circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--line)" stroke-width="10"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--brand)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(C*(20-s)/20).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 60 60)"/>`;};
  const iv=setInterval(()=>{ if(!d.isConnected) return clearInterval(iv); if(document.visibilityState!=='visible') return; s--; $('#rest-s').textContent=Math.max(0,s); ringC(); if(s<=0){clearInterval(iv); $('#rest-s').textContent='0'; d.classList.add('done'); SFX.ok();} },1000);
  const close=()=>{ clearInterval(iv); d.classList.add('out'); removeEventListener('keydown',kh,true); ST.act.used=0; save(); setTimeout(()=>d.remove(),260); };
  const kh=e=>{ if(e.key==='Escape'||e.key==='Enter'){ e.preventDefault(); e.stopPropagation(); close(); } };
  addEventListener('keydown',kh,true);
  $('#rest-ok').onclick=close;
  let sy=null; d.addEventListener('touchstart',e=>{sy=e.touches[0].clientY;},{passive:true});
  d.addEventListener('touchend',e=>{ if(sy!=null&&sy-e.changedTouches[0].clientY>90) close(); sy=null; },{passive:true});
  $('#rest-ok').focus();
}
/* ---------- หมดเวลานับถอยหลัง ---------- */
function showTimeUp(){
  if($('#rest')) $('#rest').remove();
  const k=ST.cd.kind, mins=Math.round(ST.cd.total/60);
  const d=document.createElement('div'); d.id='rest'; d.className='rest up'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-labelledby','up-t');
  d.innerHTML=`<div class="rest-in"><div class="rest-cat">${beetleCar({mood:"happy"})}</div><p class="eyebrow num">ครบ ${mins} นาที</p><h2 id="up-t">หมดเวลา${KIND[k]}แล้ว</h2>
    <p class="rest-tip">${k==='quiz'?'พักสักครู่ แล้วค่อยลุยต่อ':'เก่งมาก พักสายตาสักนิดแล้วค่อยอ่านต่อ'}</p>
    <div class="cta-row two"><button class="btn ghost lg rp" id="up-more">${I.plus}ต่ออีก 5 นาที</button><button class="btn lg rp" id="up-ok">${I.check}รับทราบ</button></div></div>`;
  document.body.appendChild(d); SFX.done();
  const close=()=>{ d.classList.add('out'); removeEventListener('keydown',kh,true); setTimeout(()=>d.remove(),260); ST.cd.total=ST.cd.running?ST.cd.total:0; save(); timerPill(); if(UI.tab==='set'){const tp=$('#timer-panel'); if(tp){tp.innerHTML=timerPanel(); setBind();}} };
  const kh=e=>{ if(e.key==='Escape'){ e.stopPropagation(); close(); } };
  addEventListener('keydown',kh,true);
  $('#up-ok').onclick=close;
  $('#up-more').onclick=()=>{ ST.cd={total:300,left:300,running:true,kind:k}; save(); close(); };
  $('#up-ok').focus();
}

/* ===================== โครงหน้า ===================== */
const UI={tab:'home',tocOpen:false};
const TABS=[['home','หน้าแรก',I.home],['book','อ่านหนังสือ',I.book],['quiz','ข้อสอบ',I.quiz],['set','ตั้งค่า',I.cog]];
function go(tab,opt){UI.tab=tab;if(opt) Object.assign(UI,opt);render();window.scrollTo(0,0);}
function render(){
  const v=$('#view');
  v.innerHTML=({home:homeHTML,book:bookHTML,quiz:quizHTML,set:setHTML}[UI.tab]||homeHTML)();
  renderNav(); bind();
  if(UI.tab==='book') bookBind();
  if(UI.tab==='set') setBind();
  timerPill();
}
function renderNav(){
  const cur=UI.tab;
  $('#tabs').innerHTML='<div>'+TABS.map(([id,l,ic])=>`<button class="tab rp ${cur===id?'on':''}" data-tab="${id}" ${cur===id?'aria-current="page"':''}><span class="ico">${ic}${id==='quiz'?'<i class="dot"></i>':''}</span>${l}</button>`).join('')+'</div>';
  const rd=readPct();
  $('#side').innerHTML=`<div class="side-in">
    <button class="brand rp" data-tab="home" aria-label="JinoonCalc หน้าแรก">${MARK}<span>${WORD}<small>Pharmaceutical Calculation</small></span></button>
    <button class="btn side-cta rp" data-read="1">${I.book}อ่านบทที่ 1 ต่อ</button>
    <nav class="snav" aria-label="เมนูหลัก">${TABS.map(([id,l,ic])=>`<button class="si rp ${cur===id?'on':''}" data-tab="${id}" ${cur===id?'aria-current="page"':''}>${ic}<span>${l}</span>${id==='quiz'?'<i class="soon-tag">เร็วๆ นี้</i>':''}</button>`).join('')}</nav>
    <div class="scard"><span class="scat">${beetleCar({mood:'wink'})}</span><div class="scard-h"><span>อ่านบทที่ 1 ไปแล้ว</span><b class="num">${rd}%</b></div>${meter(rd)}<small class="num">หน้า ${ST.bookPage||1} จาก ${BOOK.n}</small></div>
    <div class="sfoot"><button class="iconbtn rp" data-act="theme" aria-label="${ST.theme==='dark'?'เปลี่ยนเป็นโหมดสว่าง':'เปลี่ยนเป็นโหมดมืด'}">${ST.theme==='dark'?I.sun:I.moon}</button><button class="iconbtn rp" data-act="sound" data-silent="1" aria-label="${ST.sound?'ปิดเสียง':'เปิดเสียง'}">${ST.sound?I.sOn:I.sOff}</button><span id="tp-side"></span></div></div>`;
}
function head(){
  return `<header class="top"><div class="top-in">
    <button class="brand m rp" data-tab="home" aria-label="JinoonCalc หน้าแรก">${MARK}${WORD}</button>
    <span class="top-sp"></span><span id="tp-top"></span>
    <button class="iconbtn rp" data-act="theme" aria-label="${ST.theme==='dark'?'เปลี่ยนเป็นโหมดสว่าง':'เปลี่ยนเป็นโหมดมืด'}">${ST.theme==='dark'?I.sun:I.moon}</button>
    <button class="iconbtn rp" data-act="sound" data-silent="1" aria-label="${ST.sound?'ปิดเสียง':'เปิดเสียง'}">${ST.sound?I.sOn:I.sOff}</button>
    <button class="iconbtn rp ${UI.tab==='set'?'on':''}" data-tab="set" aria-label="ตั้งค่า">${I.cog}</button></div></header>`;
}
function pageHead(h,sub,act=''){return head()+`<div class="wrap"><div class="ptitle"><div><h1>${h}</h1>${sub?`<p>${sub}</p>`:''}</div>${act}</div>`;}

const readPct=()=>Math.round(((ST.bookPage||1)-1)/(BOOK.n-1)*100);
/* ---------- หน้าแรก ---------- */
function homeHTML(){
  const p=ST.bookPage||1, rd=readPct();
  return head()+`<div class="wrap">
   <section class="hero">
    <div class="hero-main">
     <p class="eyebrow num">Pharmaceutical Calculation · PHT111</p>
     <h1>คำนวณเภสัช<br><span class="hl">ขับไปกับจีนูน</span></h1>
     <p class="lede">อ่านสรุปบทที่ 1 เลขโรมัน และเลขนัยสำคัญ ซูมได้ทุกหน้า บทอื่นและข้อสอบกำลังตามมา</p>
     <div class="cta-row"><button class="btn lg rp" data-read="1">${I.book}${p>1?'อ่านต่อหน้า '+p:'เริ่มอ่านบทที่ 1'}</button>
      <button class="btn ghost lg rp" data-tab="quiz">${I.quiz}ข้อสอบ</button></div>
    </div>
    <div class="hero-side">
     <div class="hero-cat">${beetleCar({mood:'happy'})}</div>
     <div class="hero-stat"><div class="ring-w">${ring(rd,96,9)}<span class="ring-v"><b class="num">${rd}%</b><small>อ่านแล้ว</small></span></div>
      <dl class="kv"><div><dt>หน้าปัจจุบัน</dt><dd class="num">${p}</dd></div><div><dt>ทั้งบท</dt><dd class="num">${BOOK.n}</dd></div></dl></div>
     <p class="last">ความคืบหน้าเก็บไว้ในเครื่องนี้</p>
    </div>
   </section>
   <div class="sec"><div><h2>บทเรียน</h2><p>ตอนนี้เปิดให้อ่านบทที่ 1 ก่อน</p></div><button class="link rp" data-tab="book">อ่านหนังสือ ${I.chev}</button></div>
   <div class="chgrid">${CHAPTERS.map(chCard).join('')}</div>
   <div class="sec"><div><h2>เครื่องมือ</h2></div></div>
   <div class="tools">
    <button class="tool rp" data-tab="quiz"><span class="tool-ic">${I.quiz}</span><span><b>ข้อสอบ</b><small>ยังไม่พร้อมใช้งาน</small></span>${I.chev}</button>
    <button class="tool rp" data-read="1"><span class="tool-ic">${I.book}</span><span><b>อ่านหนังสือ</b><small>บทที่ 1 · ${BOOK.n} หน้า ซูมได้</small></span>${I.chev}</button>
    <button class="tool rp" data-act="timer"><span class="tool-ic">${I.timer}</span><span><b>ตั้งเวลาอ่านหนังสือ</b><small>นับถอยหลัง และเตือนพักสายตาทุก ${ST.rest.min} นาที</small></span>${I.chev}</button>
   </div></div>`;
}
function chCard(c){
  if(!c.ready) return `<button class="chc soon rp" data-soon="${c.id}"><span class="chc-top"><span class="chc-no num">บทที่ ${c.id}</span><span class="chc-ic">${I.lock}</span></span>
    <span class="chc-t">Coming soon</span><span class="chc-en">กำลังเตรียมเนื้อหา</span><span class="chc-ft"><span>เร็วๆ นี้</span></span></button>`;
  const rd=readPct();
  return `<button class="chc rp" data-read="${c.id}"><span class="chc-top"><span class="chc-no num">บทที่ ${c.id}</span><span class="chc-ic">${I.calc}</span></span>
    <span class="chc-t">${esc(c.name)}</span><span class="chc-en">${esc(c.en)}</span>
    <span class="chc-ft"><span class="num">${c.n} หน้า</span><b class="num">${rd}%</b></span>${meter(rd)}</button>`;
}

/* ---------- ข้อสอบ: ทำโครงไว้ ยังไม่เปิดใช้ ---------- */
const LVQ=[['easy','ง่าย','ความจำ ถามตรง'],['mid','ปานกลาง','คำนวณ แปลงค่า'],['hard','ยาก','วิเคราะห์ หลายขั้น']];
function quizHTML(){
  return pageHead('ข้อสอบ','โจทย์คำนวณเภสัชพร้อมเฉลย แยกระดับ ง่าย ปานกลาง ยาก')+`
   <section class="na">${beetleCar({mood:'sad',cls:'na-msc',label:'แมงจีนูนรถจอดรอ'})}
    <div><span class="na-tag">${I.lock}ยังไม่พร้อมใช้งาน</span><h2>ส่วนข้อสอบยังไม่พร้อมใช้งาน</h2><p>กำลังเตรียมโจทย์อยู่ ระหว่างนี้อ่านสรุปบทที่ 1 ไปก่อนได้เลย</p>
     <button class="btn rp" data-read="1">${I.book}ไปอ่านบทที่ 1</button></div></section>
   <div class="skel" aria-hidden="true">
    <div class="sec"><div><h2>เลือกระดับ</h2></div></div>
    <div class="lvseg">${LVQ.map(([id,n,d])=>`<button class="ls rp ls-${id}" data-na="1" tabindex="-1"><b>${n}</b><small>${d}</small></button>`).join('')}</div>
    <div class="sec"><div><h2>เลือกบท</h2></div></div>
    <div class="list">${CHAPTERS.map(c=>`<button class="trow rp" data-na="1" tabindex="-1"><span class="trow-b"><b>บทที่ ${c.id}${c.ready?' '+esc(c.name):''}</b><small>${c.ready?'เลขโรมัน · เลขนัยสำคัญ':'Coming soon'}</small></span><span class="trow-go">${I.lock}</span></button>`).join('')}</div>
   </div>
   <button class="btn lg rp wide na-go" data-na="1">${I.play}เริ่มทำข้อสอบ</button></div>`;
}
function notReady(){
  const L=$('#layer'); L.innerHTML=`<div class="scrim center" id="cf"><div class="dlg" role="dialog" aria-modal="true" aria-labelledby="nat"><div class="dlg-cat">${beetleCar({mood:'sad'})}</div><h3 id="nat">ยังไม่พร้อมใช้งาน</h3><p>ส่วนข้อสอบกำลังเตรียมอยู่ ไว้เปิดเมื่อไหร่จะใช้ได้ทันที</p><div class="btns"><button class="btn rp" id="cf-no">รับทราบ</button></div></div></div>`;
  const close=()=>{L.innerHTML='';}; $('#cf-no').onclick=close; $('#cf').onclick=e=>{if(e.target.id==='cf')close();}; $('#cf-no').focus();
}

/* ---------- ตั้งค่า ---------- */
function setHTML(){
  const R=ST.rest;
  return pageHead('ตั้งค่า','')+`
   <div class="sec"><div><h2>ตั้งเวลา</h2><p>นับถอยหลังเวลาอ่านหนังสือหรือทำข้อสอบ นับเฉพาะตอนเปิดหน้าเว็บอยู่</p></div></div>
   <div class="panel" id="timer-panel">${timerPanel()}</div>
   <div class="sec"><div><h2>พักสายตา</h2><p>ใช้งานครบตามเวลาแล้วจะมีข้อความเต็มจอเตือนให้พัก ปัดออกได้</p></div></div>
   <div class="panel">
    <div class="setrow"><span><b>เตือนพักสายตา</b><small>นับเฉพาะเวลาที่เปิดหน้าเว็บอยู่ ออกจากเว็บเกิน 5 นาทีจะเริ่มนับใหม่</small></span><button class="sw rp ${R.on?'on':''}" data-act="restOn" role="switch" aria-label="เตือนพักสายตา" aria-checked="${R.on}"></button></div>
    <div class="setrow ${R.on?'':'off'}"><span><b>เตือนทุก</b><small id="rest-left">${restLeftText()}</small></span>
     <div class="stepper"><button class="iconbtn rp" data-rest="-5" aria-label="ลด 5 นาที">${I.minus}</button><b class="num"><span id="rest-min">${R.min}</span><small>นาที</small></b><button class="iconbtn rp" data-rest="5" aria-label="เพิ่ม 5 นาที">${I.plus}</button></div></div>
    <div class="setrow"><span><b>ลองดูหน้าพักสายตา</b><small>เปิดข้อความเตือนตอนนี้เลย</small></span><button class="btn ghost sm rp" data-act="restNow">${I.eye}ดูตัวอย่าง</button></div>
   </div>
   <div class="sec"><div><h2>ทั่วไป</h2></div></div>
   <div class="panel">
    <div class="setrow"><span><b>โหมดมืด</b><small>ค่าเริ่มต้นคือโหมดสว่าง</small></span><button class="sw rp ${ST.theme==='dark'?'on':''}" data-act="theme" role="switch" aria-label="โหมดมืด" aria-checked="${ST.theme==='dark'}"></button></div>
    <div class="setrow"><span><b>เสียงกดปุ่ม</b><small>เสียงคลิกสั้นๆ แบบไอโฟนเมื่อกดปุ่ม</small></span><button class="sw rp ${ST.sound?'on':''}" data-act="sound" data-silent="1" role="switch" aria-label="เสียงกดปุ่ม" aria-checked="${ST.sound}"></button></div>
    <div class="setrow"><span><b>หน้าเริ่มเกม</b><small>แสดงหน้าเริ่มทุกครั้งที่เปิดเว็บ</small></span><button class="sw rp ${ST.startScreen?'on':''}" data-act="startOn" role="switch" aria-label="แสดงหน้าเริ่มเกม" aria-checked="${ST.startScreen}"></button></div>
    <div class="setrow"><span><b>ดูหน้าเริ่มอีกครั้ง</b></span><button class="btn ghost sm rp" data-act="start">${I.play}เปิด</button></div>
   </div></div>`;
}

function bind(){
  $$('[data-tab]').forEach(b=>b.onclick=()=>go(b.dataset.tab));
  $$('[data-read]').forEach(b=>b.onclick=()=>{ const id=+b.dataset.read; const c=chOf(id); if(!c||!c.ready) return soon(id); UI.bookJump=Math.max(1,ST.bookPage||1); go('book'); });
  $$('[data-soon]').forEach(b=>b.onclick=()=>soon(+b.dataset.soon));
  $$('[data-na]').forEach(b=>b.onclick=notReady);
  $$('[data-act]').forEach(b=>b.onclick=()=>ACT[b.dataset.act]&&ACT[b.dataset.act](b));
}
const ACT={
  theme(){ST.theme=ST.theme==='dark'?'light':'dark';save();applyTheme();const y=scrollY;render();scrollTo(0,y);},
  sound(){ST.sound=!ST.sound;save();if(ST.sound)SFX.toggle();const y=scrollY;render();scrollTo(0,y);toast(ST.sound?'เปิดเสียงแล้ว':'ปิดเสียงแล้ว');},
  timer(){go('set');},
  restOn(){ST.rest.on=!ST.rest.on;save();const y=scrollY;render();scrollTo(0,y);},
  restNow(){showRest(true);},
  startOn(){ST.startScreen=!ST.startScreen;save();const y=scrollY;render();scrollTo(0,y);},
  start(){showStart();}
};

/* ===================== หน้าเริ่มเกม (ไม่มีเสียงตอนกดเข้า) ===================== */
function showStart(){
  if($('#start')) return;
  const d=document.createElement('div'); d.id='start'; d.className='start'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-label','หน้าเริ่ม JinoonCalc');
  d.innerHTML=`<div class="st-bg" aria-hidden="true"><i class="st-rays"></i><i class="st-dots"></i><i class="st-road"></i></div>
   <div class="st-in">
    <div class="st-stage">
     <figure class="st-vid"><video id="st-v" src="${IMG.clip}" poster="${IMG.poster}" autoplay muted loop playsinline preload="auto"></video>
      <button class="st-mute rp" id="st-mute" data-silent="1" aria-label="เปิดเสียงคลิป">${I.sOff}</button></figure>
     <span class="st-bubble">มาคำนวณเภสัช<br>กันเถอะ</span>
     <div class="st-car">${beetleCar({mood:'happy'})}</div>
    </div>
    <div class="st-title"><p class="st-k num">Pharmaceutical Calculation · PHT111</p><h1>JINOON<span>CALC</span></h1><p class="st-sub">สรุปการคำนวณเภสัชกรรม · บทที่ 1 พร้อมอ่านแล้ว</p></div>
    <button class="st-go" id="st-go" data-silent="1">${I.play}<span>ENTER</span></button>
    <p class="st-hint">กดปุ่ม หรือกด Enter เพื่อเริ่ม</p>
   </div>`;
  document.body.appendChild(d); document.body.style.overflow='hidden';
  const v=$('#st-v'); const pr=v.play(); if(pr&&pr.catch) pr.catch(()=>{});
  $('#st-mute').onclick=()=>{ SFX.tap(); v.muted=!v.muted; if(!v.muted){ v.play().catch(()=>{}); } $('#st-mute').innerHTML=v.muted?I.sOff:I.sOn; $('#st-mute').setAttribute('aria-label',v.muted?'เปิดเสียงคลิป':'ปิดเสียงคลิป'); };
  const enter=()=>{
    if(d.classList.contains('out')) return;
    SFX.unlock(); v.muted=true;
    d.classList.add('out'); removeEventListener('keydown',kh,true);
    setTimeout(()=>{ v.pause(); d.remove(); if(!$('#layer').innerHTML) document.body.style.overflow=''; ST.act.last=Date.now(); },LITE?150:650);
  };
  const kh=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); e.stopPropagation(); enter(); } };
  addEventListener('keydown',kh,true);
  $('#st-go').onclick=enter; $('#st-go').focus({preventScroll:true});
}

/* ===================== เริ่มแอป ===================== */
(function boot(){
  const m=sessionCheck();
  render();
  if(ST.startScreen) showStart();
  if(m) setTimeout(()=>toast(m),ST.startScreen?900:100);
  ST.act.last=Date.now();
})();
