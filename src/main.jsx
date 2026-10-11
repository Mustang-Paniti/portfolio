import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ArrowDown, Menu, X, Camera, BriefcaseBusiness, GraduationCap, Download, Mail, Instagram, ExternalLink, Phone, MessageCircle, QrCode } from 'lucide-react'
import { profile, projects, experience, education } from './data'
import './index.css'
const translations = {
 th: { nav:['หน้าแรก','ผลงาน','เกี่ยวกับ','ติดต่อ'], available:'GRAPHIC DESIGN & PHOTOGRAPHY', eyebrow:'ออกแบบเพื่อสร้างความแตกต่าง', hero1:'DESIGN', hero2:'WITH', hero3:'PURPOSE.', intro:'ผสานกลยุทธ์ ความคิดสร้างสรรค์ และการเล่าเรื่องผ่านภาพ\nด้วยประสบการณ์สายงานสร้างสรรค์โดยรวมกว่า 12 ปี ครอบคลุมกราฟิกดีไซน์ การถ่ายภาพ และการตกแต่งภาพ', explore:'สำรวจผลงาน', selected:'ผลงานที่คัดสรร', works:'ตัวอย่างผลงาน', filter:['ทั้งหมด','สื่อโฆษณา','สื่อดิจิทัล','แบรนดิ้ง','ถ่ายภาพ','วิดีโอและโมชั่น'], about:'เกี่ยวกับฉัน', aboutTitle:'มากกว่าแค่ความสวยงาม', aboutBody:'ผมทำงานด้านสื่อสร้างสรรค์มาตั้งแต่ปี 2014 ผ่านบทบาทช่างภาพ ผู้ตกแต่งภาพ และกราฟิกดีไซเนอร์ มีประสบการณ์ออกแบบสื่อประชาสัมพันธ์ทั้งออนไลน์และสิ่งพิมพ์ รวมถึงงานถ่ายภาพ วิดีโอ และรีทัช', expertise:'ความเชี่ยวชาญ', skills:['Graphic Design for Digital & Print','Visual Communication & PR Materials','Photography & Photo Retouching','Video & Production','Adobe Photoshop · Illustrator · Lightroom','Premiere Pro · After Effects (Basic)'], years:'ปีในสายงานสร้างสรรค์', photo:'การถ่ายภาพ', contact:'มาร่วมสร้างผลงานที่น่าจดจำ', contactText:'สนใจร่วมงานหรือมีโปรเจกต์ที่อยากพูดคุย ติดต่อมาได้เลย', sayHello:'ส่งอีเมล', resume:'ดาวน์โหลด Resume', back:'กลับไปดูผลงาน', next:'เลื่อนดูผลงาน', demo:'รายการโปรเจกต์เป็นช่องตัวอย่างสำหรับเพิ่มผลงานจริง ยังไม่มีการแนบภาพผลงาน', detail:'รายละเอียดโปรเจกต์' },
 en: { nav:['Home','Work','About','Contact'], available:'GRAPHIC DESIGN & PHOTOGRAPHY', eyebrow:'Design that makes a difference', hero1:'DESIGN', hero2:'WITH', hero3:'PURPOSE.', intro:'Blending strategy, creativity, and visual storytelling with 12+ years across creative production, graphic design, photography and image editing.', explore:'Explore my work', selected:'A curated selection', works:'SELECTED WORKS', filter:['All Works','Advertising & Key Visual','Digital & Social Media','Branding & Campaign','Photography & Retouching','Video & Motion'], about:'About me', aboutTitle:'Beyond aesthetics', aboutBody:'I have worked across creative production since 2014, with experience as a cameraman, photo editor and graphic designer. My background spans digital and print communications, photography, video production and retouching.', expertise:'Expertise', skills:['Graphic Design for Digital & Print','Visual Communication & PR Materials','Photography & Photo Retouching','Video & Production','Adobe Photoshop · Illustrator · Lightroom','Premiere Pro · After Effects (Basic)'], years:'Years in creative work', photo:'Photography', contact:'LET’S MAKE SOMETHING MEMORABLE.', contactText:'Have a project or opportunity in mind? I would love to hear from you.', sayHello:'Say hello', resume:'Download resume', back:'Back to work', next:'Explore work', demo:'Project cards are placeholders awaiting your real work and images.', detail:'Project details' }
}
const cats=['all','campaign','digital','branding','photography','video']
function App(){
 const [lang,setLang]=useState('th'),[filter,setFilter]=useState('all'),[menu,setMenu]=useState(false),[selected,setSelected]=useState(null)
const [lightbox, setLightbox] = useState(null)
const [linePopup, setLinePopup] = useState(false)
 useEffect(() => {
    if (lightbox === null) return
  
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setLightbox(null)
        }
      
        if (e.key === 'ArrowRight') {
          setLightbox((i) =>
            (i + 1) % selected.gallery.length
          )
        }
      
        if (e.key === 'ArrowLeft') {
          setLightbox((i) =>
            (i - 1 + selected.gallery.length) % selected.gallery.length
          )
        }
      }
  
    window.addEventListener('keydown', handleKeyDown)
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox, selected])
  useEffect(() => {
    if (lightbox === null) return
  
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox])
  const t=translations[lang]
 document.documentElement.lang=lang
 const anchors=['home','work','about','contact']
 const visible=projects.filter(p=>filter==='all'||p.category===filter)
 return <div className="min-h-screen overflow-x-hidden bg-ink text-cream">
  <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-ink/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10"><a href="#home" className="text-sm font-extrabold tracking-tighter sm:text-xl">{profile.name}</a><nav className="hidden gap-9 md:flex">{t.nav.map((n,i)=><a key={n} href={'#'+anchors[i]} className="text-sm text-white/65 transition hover:text-acid">{n}</a>)}</nav><div className="flex items-center gap-4"><button aria-label="Switch language" onClick={()=>setLang(lang==='th'?'en':'th')} className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-bold hover:border-acid">TH / EN <span className="text-acid">{lang.toUpperCase()}</span></button><button aria-label="Toggle navigation" className="md:hidden" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></div>{menu&&<nav className="flex flex-col gap-4 border-t border-white/10 bg-ink px-6 py-6 md:hidden">{t.nav.map((n,i)=><a key={n} href={'#'+anchors[i]} onClick={()=>setMenu(false)}>{n}</a>)}</nav>}</header>
  <main>
  <section
  id="home"
  className="noise relative flex min-h-[90vh] flex-col justify-start px-6 pb-24 pt-36 md:px-10 lg:min-h-[calc(100vh-96px)]"
>
  <div className="mx-auto w-full max-w-7xl">

    {/* ข้อความด้านบน: ล็อกความสูงให้เท่ากันทุกภาษา */}
    <div className="h-[132px]">

      <div className="mb-4 flex h-5 items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-acid">
        <span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
        {t.available}
      </div>

      <div className="mb-3 flex h-8 items-center text-sm uppercase tracking-[.35em] text-white/50">
        {t.eyebrow} / SENIOR GRAPHIC DESIGNER
      </div>

      <p className="flex h-10 -translate-y-[10px] items-center text-lg font-bold text-acid">
        {lang === 'th' ? profile.nameTh : profile.name}
      </p>

    </div>

    {/* หัวข้อหลัก: ใช้ตำแหน่ง ขนาด และระยะห่างเดียวกัน */}
    <h1 className={`display m-0 text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.9] lg:text-[clamp(5rem,9vw,10rem)] ${lang === 'th' ? '-translate-y-[20px]' : ''}`}>
      <span className="block">{t.hero1}</span>
      <span className="block text-acid">{t.hero2}</span>
      <span className="block">{t.hero3}</span>
    </h1>

    <div className="mt-6 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end">
      <p className="max-w-xl whitespace-pre-line text-base leading-relaxed text-white/65 md:text-xl">
  {t.intro}
</p>

      <a
        href="#work"
        className="inline-flex items-center gap-4 self-start rounded-full bg-acid px-6 py-4 font-bold text-ink transition hover:scale-105"
      >
        {t.explore}
        <ArrowDown size={19} />
      </a>
    </div>

  </div>

  <div className="pointer-events-none absolute right-5 top-44 hidden rotate-90 text-xs tracking-[.3em] text-white/30 lg:block">
    PORTFOLIO — 2026
  </div>
</section>
  <section id="work" className="bg-cream px-6 py-24 text-ink md:px-10"><div className="mx-auto max-w-7xl"><div className="mb-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-center"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-neutral-500">01 / {t.selected}</p><h2 className="display text-4xl font-extrabold md:text-6xl xl:text-7xl">
  {t.works}
</h2></div><div className="flex flex-wrap gap-2">{cats.map((cat,i)=><button key={cat} onClick={()=>setFilter(cat)} className={'rounded-full border px-3 py-1.5 text-xs md:text-sm lg:px-2.5 lg:py-1 lg:text-xs transition '+(filter===cat?'border-ink bg-ink text-white':'border-neutral-300 hover:border-ink')}>{t.filter[i]}</button>)}</div></div><div className="grid gap-10 md:gap-6 md:grid-cols-2">{visible.map((p,i)=><button key={p.id} onClick={()=>setSelected(p)} className="project-card group text-left"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-300">{p.image?<img src={p.image} alt={lang==='th'?p.titleTh:p.title} loading="lazy" className="h-full w-full object-cover"/>:<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400 p-8 text-center text-sm font-bold tracking-widest text-neutral-600">{lang==='th'?'เพิ่มภาพผลงานจริงที่นี่':'ADD YOUR PROJECT IMAGE'}</div>}<span className="absolute right-5 top-5 rounded-full bg-acid p-3 text-ink transition group-hover:rotate-45"><ArrowUpRight size={20}/></span></div><div className="mt-3 flex items-start justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-neutral-500">{p.client} / {p.category}</p><h3 className="text-xl font-bold md:text-3xl">{lang==='th'?p.titleTh:p.title}</h3></div><span className="text-sm text-neutral-500">{p.year}</span></div></button>)}</div></div></section>
  <section id="about" className="px-6 py-28 md:px-10"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2"><div><p className="mb-6 text-sm uppercase tracking-[.2em] text-acid">02 / {t.about}</p><h2 className="display mb-9 text-6xl font-extrabold md:text-8xl">{t.aboutTitle}</h2><p className="max-w-xl text-base leading-8 text-white/65 md:text-lg md:leading-9">{t.aboutBody}</p><div className="mt-12 flex flex-wrap gap-4"><div className="flex min-h-[172px] min-w-[215px] flex-col justify-between rounded-2xl border border-white/20 p-6">
  <div className="text-6xl font-extrabold text-acid">{profile.years}</div>
  <div className="text-sm text-white/60">{t.years}</div>
</div><div className="flex min-h-[172px] min-w-[215px] flex-col justify-between rounded-2xl border border-white/20 p-6">
  <div className="flex items-center gap-3">
    <span className="text-6xl font-extrabold text-acid">5+</span>
    <Camera className="text-acid" size={35} />
  </div>
  <div className="text-sm text-white/60">{t.photo}</div>
</div></div></div><div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12"><p className="mb-10 text-xs font-semibold uppercase tracking-[.2em] text-acid">{t.expertise}</p>{t.skills.map((s,i)=><div key={s} className="flex items-center gap-5 border-b border-white/15 py-5"><span className="text-xs text-acid">0{i+1}</span><span className="text-base font-medium md:text-xl">{s}</span><ArrowUpRight size={18} className="ml-auto text-white/40"/></div>)}</div></div></section>
  <section
  id="experience"
  className="bg-cream px-6 py-24 text-ink md:px-10"
>
  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-500">
      03 / {lang === 'th' ? 'ประสบการณ์และการศึกษา' : 'Experience & Education'}
    </p>

    <h2 className="mb-12 text-4xl font-extrabold md:text-6xl">
      {lang === 'th' ? 'เส้นทางการทำงาน' : 'Career Journey'}
    </h2>

    <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">

      {/* WORK EXPERIENCE */}
      <div className="rounded-3xl bg-ink p-6 text-white md:p-10">

        <div className="mb-6 flex items-center gap-3">
          <BriefcaseBusiness size={30} className="text-acid" />
          <h3 className="text-xl font-bold">
            {lang === 'th' ? 'ประสบการณ์ทำงาน' : 'Work Experience'}
          </h3>
        </div>

        {experience.map((job, i) => (
          <div
            key={i}
            className="grid gap-3 border-t border-white/20 py-6 md:grid-cols-[130px_1fr]"
          >
            <span className="text-lg font-extrabold text-white">
              {job.years}
            </span>

            <div>
              <h3 className="text-2xl font-extrabold text-acid">
                {job.role}
              </h3>

              <p className="mt-1 text-lg font-extrabold">
                {job.company}
              </p>

              <p className="mt-3 leading-7 text-white">
                {lang === 'th' ? job.detailTh : job.detailEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <div className="rounded-3xl bg-acid p-6 text-ink md:p-8">

        <div className="mb-6 flex items-center gap-3">
          <GraduationCap size={30} className="text-ink" />
          <h3 className="text-xl font-extrabold">
            {lang === 'th' ? 'การศึกษา' : 'Education'}
          </h3>
        </div>

        {education.map((ed, i) => (
          <div
            key={i}
            className="border-t border-black/15 py-6"
          >
            <p className="text-lg font-extrabold text-ink">
              {ed.years}
            </p>

            <p className="mt-2 text-lg font-bold leading-7 text-ink">
              {lang === 'th' ? ed.th : ed.en}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  <section
  id="contact"
  className="bg-acid px-6 py-12 text-ink md:px-10 md:py-24"
>
  <div className="mx-auto max-w-7xl">

    <p className="mb-7 text-xs font-bold uppercase tracking-[.2em]">
      04 / CONTACT
    </p>

    <h2 className="display max-w-5xl text-6xl font-extrabold md:text-[clamp(4rem,8vw,8rem)]">
      {t.contact}
    </h2>

    <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed lg:text-2xl">
      {t.contactText}
    </p>

    <div className="mt-10 flex flex-wrap gap-4">

      {/* EMAIL */}
      {profile.email && (
        <a
          href={'mailto:' + profile.email}
          className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white"
        >
          <Mail size={19} />
          {t.sayHello}
          <ArrowUpRight size={18} />
        </a>
      )}

      {/* LINE */}
      <button
        type="button"
        onClick={() => setLinePopup(true)}
        className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white transition hover:scale-105"
      >
        <MessageCircle size={19} />
        LINE ID
        <QrCode size={18} />
      </button>

      {/* PHONE — DISPLAY ONLY */}
      <div className="inline-flex cursor-default items-center gap-3 rounded-full bg-ink px-7 py-4 font-bold text-white">
        <Phone size={19} />
        092-919-9655
      </div>

      {/* RESUME */}
      {profile.resume && (
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-3 rounded-full border border-ink px-7 py-4 font-bold"
        >
          <Download size={19} />
          {t.resume}
        </a>
      )}

    </div>

    <div className="mt-12 flex flex-col justify-between gap-6 border-t border-ink/30 pt-7 text-sm md:flex-row">
      <span>
        © {new Date().getFullYear()} {profile.name} — {profile.role}
      </span>

      <div className="flex gap-6">
        {profile.behance && (
          <a href={profile.behance} target="_blank" rel="noreferrer" className="flex items-center gap-1">
            Behance <ExternalLink size={13} />
          </a>
        )}

        {profile.instagram && (
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-1">
            <Instagram size={15} /> Instagram
          </a>
        )}

        <a href="#home">↑ TOP</a>
      </div>
    </div>

  </div>

  {/* LINE QR CODE POP-UP */}
  {linePopup && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={() => setLinePopup(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="LINE QR Code"
        className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center text-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close LINE QR Code"
          onClick={() => setLinePopup(false)}
          className="absolute right-4 top-4 rounded-full bg-neutral-100 p-2"
        >
          <X size={22} />
        </button>

        <h3 className="mb-2 text-2xl font-extrabold">
          LINE QR CODE
        </h3>

        <p className="mb-5 text-sm text-neutral-500">
          สแกนเพื่อเพิ่มเพื่อนใน LINE
        </p>

        <img
          src={`${import.meta.env.BASE_URL}images/lineqrpaniti.jpg`}
          alt="LINE QR Code"
          className="mx-auto w-full max-w-[260px]"
        />

        <p className="mt-5 text-lg font-extrabold">
          LINE ID: memrzmon
        </p>

        <button
          type="button"
          onClick={() => setLinePopup(false)}
          className="mt-6 w-full rounded-full bg-ink px-6 py-3 font-bold text-white"
        >
          ปิดหน้าต่าง
        </button>
      </div>
    </div>
  )}
</section>
  </main>
  {selected&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={()=>setSelected(null)}><div 
  role="dialog" aria-modal="true" aria-label={t.detail} className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-cream text-ink" onClick={e=>e.stopPropagation()}><button aria-label="Close project" onClick={()=>setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full bg-acid p-3"><X size={20}/></button>{selected.image?<img src={selected.image} alt="" className="aspect-[16/9] w-full object-cover"/>:<div className="flex aspect-video items-center justify-center bg-neutral-300 text-neutral-600">{lang==='th'?'รอเพิ่มภาพผลงานจริง':'Awaiting project image'}</div>}<div className="p-7 md:p-10"><p className="mb-3 text-xs uppercase tracking-[.2em] text-neutral-500">{selected.client} · {selected.year}</p><h3 className="mb-5 text-4xl font-extrabold">{lang==='th'?selected.titleTh:selected.title}</h3><p className="text-lg leading-8 text-neutral-600">{lang==='th'?selected.descriptionTh:selected.description}</p>
  {selected.videos?.length > 0 && (
    <div className="mt-8">
      <h4 className="mb-5 text-xl font-bold">
        {lang === 'th' ? 'วิดีโอและโมชั่น' : 'Video & Motion Gallery'}
      </h4>
      <div className="flex flex-col gap-8">
        {selected.videos.map((video) => (
          <div key={video.id} className="rounded-2xl border border-black/10 bg-white p-4 md:p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h5 className="font-extrabold">{video.title}</h5>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{video.platform}</span>
            </div>
            <div className={video.platform === 'TikTok'
              ? 'mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-xl bg-black'
              : 'aspect-video w-full overflow-hidden rounded-xl bg-black'}>
              <iframe
                src={video.platform === 'TikTok' ? 'https://www.tiktok.com/player/v1/7306042796106910981?autoplay=0' : video.embedUrl}
                title={video.title}
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold underline">
              {lang === 'th' ? 'เปิดต้นฉบับบน ' : 'Open original on '}{video.platform} ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  )}
  {selected.gallery?.length > 0 && (
  <div className="mt-10">
    <h4 className="mb-6 text-xl font-bold">
      {lang === 'th'
        ? 'ภาพผลงานเพิ่มเติม'
        : 'Project Gallery'}
    </h4>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
    {selected.gallery.map((img, i) => (
  <button
    key={i}
    type="button"
    onClick={() => setLightbox(i)}
    className="group relative aspect-square overflow-hidden rounded-xl"
    aria-label={`View image ${i + 1}`}
  >
    <img
      src={img}
      alt={`${selected.title} - ${i + 1}`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </button>
))}
    </div>
  </div>
)}
<button className="mt-8 inline-flex items-center gap-2 font-bold underline" onClick={()=>setSelected(null)}>{t.back}</button>
{lightbox !== null && selected.gallery?.[lightbox] && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
    onClick={() => setLightbox(null)}
  >
    <button
      type="button"
      aria-label="Close image"
      onClick={() => setLightbox(null)}
      className="absolute right-5 top-5 z-10 rounded-full bg-white p-3 text-black"
    >
      <X size={22} />
    </button>

    
<button
  type="button"
  aria-label="Previous image"
  onClick={(e) => {
    e.stopPropagation()
    setLightbox((i) =>
      (i - 1 + selected.gallery.length) % selected.gallery.length
    )
  }}
  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black hover:bg-white"
>
  <span className="text-2xl">‹</span>
</button>

<img
      src={selected.gallery[lightbox]}
      alt={`${selected.title} - ${lightbox + 1}`}
      className="max-h-[75vh] max-w-[85vw] rounded-lg object-contain md:max-h-[85vh] md:max-w-full"
      onClick={(e) => e.stopPropagation()}
    />
    
<button
  type="button"
  aria-label="Next image"
  onClick={(e) => {
    e.stopPropagation()
    setLightbox((i) =>
      (i + 1) % selected.gallery.length
    )
  }}
  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black hover:bg-white"
>
  <span className="text-2xl">›</span>
</button>


    <p className="absolute bottom-5 text-sm text-white">
    {lightbox + 1} / {selected.gallery.length} · ← → เปลี่ยนภาพ · Esc ปิด
    </p>
  </div>
)}
</div></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
