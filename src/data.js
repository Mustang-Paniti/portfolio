// ข้อมูลจาก Resume PDF; รายการผลงานด้านล่างเป็นช่องสำหรับใส่ผลงานจริง ไม่ใช่การอ้างว่าเป็นงานที่ทำแล้ว
// แก้ไขภาพโดยวางไฟล์ใน public/images แล้วใช้ path ./images/filename.webp
export const profile = {
  name: 'PANITI NARKCHAREON',
  nameTh: 'ปณิธิ นาคเจริญ',
  role: 'Senior Graphic Designer',
  years: '12+', // ประสบการณ์สายงานสร้างสรรค์โดยรวม ตั้งแต่ปี 2014 ไม่ใช่ Graphic Design อย่างเดียว
  email: 'mustang.paniti@gmail.com',
  instagram: '',
  behance: '',
  resume: '/resume-ปณิธิ-นาคเจริญ.pdf',
}
export const experience = [
  {
  years: '2024–2026',
  company: 'XingXing Mala Shabu',
  role: 'Senior Graphic Designer',
  detailTh: 'รับผิดชอบออกแบบสื่อโฆษณาและประชาสัมพันธ์สำหรับแบรนด์ ทั้งสื่อ POSM ณ จุดขาย และสื่อออนไลน์บน Social Media โดยเน้นการสื่อสารภาพลักษณ์แบรนด์ การนำเสนอสินค้า และการออกแบบสื่อส่งเสริมการขายให้มีความโดดเด่นและสอดคล้องกับแนวทางของแบรนด์',
  detailEn: 'Designed advertising and promotional materials for the brand, including in-store POSM and social media content, focusing on brand identity, product presentation, and engaging marketing visuals.'
},
 {years:'2023–2024',company:'Romrawin Clinic Co., Ltd.',role:'Graphic Designer',detailTh:'ออกแบบสื่อกราฟิกสำหรับการสื่อสารและประชาสัมพันธ์ ทั้งสื่อออนไลน์และสื่อสิ่งพิมพ์',detailEn:'Designed visual communications and promotional materials for digital and print channels.'},
 {years:'2016–2023',company:'SOS Children’s Villages Thailand',role:'Graphic Designer',detailTh:'ออกแบบสื่อประชาสัมพันธ์และสื่อกราฟิกสำหรับการสื่อสารขององค์กร',detailEn:'Created graphic and public-relations materials for organizational communications.'},
 {years:'2015–2016',company:'Japin (Bangkok) Co., Ltd.',role:'Graphic Designer',detailTh:'ออกแบบและจัดเตรียมงานกราฟิกสำหรับสื่อประชาสัมพันธ์',detailEn:'Produced graphic designs and promotional communication assets.'},
 {years:'2015',company:'Diakrit International Ltd.',role:'Photo Editor',detailTh:'ปรับแต่งและตกแต่งภาพถ่ายเพื่อการใช้งานเชิงพาณิชย์',detailEn:'Edited and retouched photographs for commercial use.'},
 {years:'2014–2015',company:'The Studio Production Co., Ltd.',role:'Cameraman',detailTh:'ปฏิบัติงานถ่ายภาพและวิดีโอ รวมถึงงานโปรดักชันและบันทึกภาพกิจกรรม',detailEn:'Worked on photography, video capture and production assignments.'},
]
export const education = [
 {years:'2010–2014',th:'มหาวิทยาลัยบูรพา — สาขาวารสารศาสตร์และนิเทศศาสตร์',en:'Burapha University — Journalism and Communication Arts'},
 {years:'2006–2010',th:'โรงเรียนสมุทรปราการ — แผนการเรียนภาษาอังกฤษ–ฝรั่งเศส',en:'Samut Prakan School — English–French Program'},
]

export const projects = [
  {
    id: 1,
  category: 'campaign',
  year: '',
  title: 'Food Advertising / Campaign',
  titleTh: 'สื่อโฆษณาอาหาร',
  client: 'Food Advertising',
  image: './images/xingxing-keyvisual.webp',
gallery: [
  '/images/food-gallery-01.webp',
  '/images/food-gallery-02.webp',
  '/images/food-gallery-03.webp',
  '/images/food-gallery-04.webp',
  '/images/food-gallery-05.webp',
  '/images/food-gallery-06.webp',
  '/images/food-gallery-07.webp',
  '/images/food-gallery-08.webp',
  '/images/food-gallery-09.jpg',
  '/images/food-gallery-10.jpg',
  '/images/food-gallery-11.jpg',
  '/images/food-gallery-12.jpg',
  '/images/food-gallery-13.jpg',
  '/images/food-gallery-14.jpg',
  '/images/food-gallery-15.jpg',
  '/images/food-gallery-16.jpg',
  '/images/food-gallery-17.jpg',
  '/images/food-gallery-18.jpg',
  '/images/food-gallery-19.jpg',
  '/images/food-gallery-20.jpg',
  '/images/food-gallery-21.jpg'
],

  description: 'Food photography, photo retouching, and advertising design. Creating appetizing food visuals and impactful advertising campaigns through photography, visual composition, and graphic design.',
  descriptionTh: 'ผลงานออกแบบสื่อโฆษณาอาหาร ครอบคลุมการถ่ายภาพอาหาร การรีทัชภาพ และการออกแบบกราฟิก โดยเน้นการนำเสนออาหารให้น่ารับประทาน ผ่านการจัดองค์ประกอบภาพและการสร้างสรรค์สื่อโฆษณาที่โดดเด่น'
  },
  {
    id: 2,
    category: 'digital',
    year: '',
    title: 'Beauty & Aesthetic Design',
    titleTh: 'สื่อโฆษณาความงาม',
    client: 'Beauty & Aesthetic',
    image: '/images/beauty-keyvisual.webp',

    gallery: [
      '/images/beauty-gallery-01.jpg',
      '/images/beauty-gallery-02.jpg',
      '/images/beauty-gallery-03.jpg',
      '/images/beauty-gallery-04.jpg',
      '/images/beauty-gallery-05.jpg',
      '/images/beauty-gallery-06.jpg',
      '/images/beauty-gallery-07.jpg',
      '/images/beauty-gallery-08.jpg',
      '/images/beauty-gallery-09.jpg',
      '/images/beauty-gallery-10.jpg'
    ],

    description: 'Digital advertising and promotional design for beauty and aesthetic services, focusing on graphic design, visual composition, and photo retouching.',
    descriptionTh: 'ผลงานออกแบบสื่อโฆษณาดิจิทัลสำหรับธุรกิจความงามและคลินิก โดยรับผิดชอบงานออกแบบกราฟิก จัดองค์ประกอบภาพ และรีทัชภาพเพื่อใช้ในการสื่อสารทางการตลาด'
  },
  {
    id: 3,
  category: 'digital',
  year: '',
  title: 'Cosmetic & Skincare Advertising',
  titleTh: 'สื่อโฆษณาสกินแคร์',
  client: 'Cosmetic & Skincare',
  image: '/images/skincare-keyvisual.webp',
  gallery: [
  '/images/skincare-gallery-01.jpg',
  '/images/skincare-gallery-02.jpg',
  '/images/skincare-gallery-03.jpg',
  '/images/skincare-gallery-04.jpg',
  '/images/skincare-gallery-05.jpg',
  '/images/skincare-gallery-06.jpg',
  '/images/skincare-gallery-07.jpg',
  '/images/skincare-gallery-08.jpg',
  '/images/skincare-gallery-09.jpg',
  '/images/skincare-gallery-10.jpg',
  '/images/skincare-gallery-11.jpg'
],
  description: 'Digital advertising and promotional design for cosmetic and skincare products, focusing on visual composition, graphic design, and photo retouching to create engaging product visuals.',
  descriptionTh: 'ผลงานออกแบบสื่อโฆษณาดิจิทัลสำหรับผลิตภัณฑ์เครื่องสำอางและสกินแคร์ โดยเน้นการออกแบบกราฟิก การจัดองค์ประกอบภาพ และการรีทัชภาพ เพื่อสร้างสื่อโฆษณาที่น่าสนใจและนำเสนอสินค้าได้อย่างโดดเด่น'
  },

  {
    id: 4,
    category: 'branding',
    year: '',
    title: 'Website Banner & Campaign',
    titleTh: 'สื่อโฆษณาเว็บไซต์',
    client: 'Website & Campaign Design',
    image: '/images/website-cover.jpg',
    gallery: [
  '/images/website-gallery-01.jpg',
  '/images/website-gallery-02.jpg',
  '/images/website-gallery-03.jpg',
  '/images/website-gallery-04.jpg',
  '/images/website-gallery-05.jpg',
  '/images/website-gallery-06.jpg',
  '/images/website-gallery-07.jpg',
  '/images/website-gallery-08.jpg',
  '/images/website-gallery-09.jpg',
  '/images/website-gallery-10.jpg',
  '/images/website-gallery-11.jpg',
  '/images/website-gallery-12.jpg',
  '/images/website-gallery-13.jpg',
  '/images/website-gallery-14.jpg',
  '/images/website-gallery-15.jpg',
  '/images/website-gallery-16.jpg',
  '/images/website-gallery-17.jpg',
  '/images/website-gallery-18.jpg',
  '/images/website-gallery-19.jpg',
  '/images/website-gallery-20.jpg',
  '/images/website-gallery-21.jpg',
  '/images/website-gallery-22.jpg',
  '/images/website-gallery-23.jpg',
  '/images/website-gallery-24.jpg',
  '/images/website-gallery-25.jpg',
  '/images/website-gallery-26.jpg',
  '/images/website-gallery-27.jpg',
  '/images/website-gallery-28.jpg',
  '/images/website-gallery-29.jpg',
  '/images/website-gallery-30.jpg',
  '/images/website-gallery-31.jpg',
  '/images/website-gallery-32.jpg',
  '/images/website-gallery-33.jpg'
],
    description: 'Website banner and campaign design, combining graphic design, photography, and photo retouching to create effective promotional visuals for digital platforms.',
    descriptionTh: 'ผลงานออกแบบแบนเนอร์เว็บไซต์และสื่อแคมเปญออนไลน์ โดยใช้ทักษะการออกแบบกราฟิก การถ่ายภาพ และการรีทัชภาพ เพื่อสร้างสื่อโฆษณาที่โดดเด่นและเหมาะกับช่องทางดิจิทัล'
  },
  
{
  id: 5,
  category: 'photography',
  year: '',
  title: 'Product Photography',
  titleTh: 'ตัวอย่างผลงานภาพถ่าย',
  client: 'Product Photography',
  image: '/images/photo-cover.webp',
  description: 'Product photography and professional photo retouching, focusing on lighting, composition, product presentation, and image enhancement for advertising and commercial use.',
  descriptionTh: 'ตัวอย่างผลงานถ่ายภาพและรีทัชภาพ โดยเน้นการจัดแสง การจัดองค์ประกอบ และการนำเสนอรายละเอียดสินค้า เพื่อสร้างภาพที่เหมาะสำหรับงานโฆษณาและการใช้งานเชิงพาณิชย์',
  gallery: [
  '/images/photo-01.jpg',
  '/images/photo-02.jpg',
  '/images/photo-03.jpg',
  '/images/photo-04.jpg',
  '/images/photo-05.jpg',
  '/images/photo-06.jpg',
  '/images/photo-07.jpg',
],
},
 
{
  id: 6,
  category: 'video',
  year: '',
  title: 'Video & Motion',
  titleTh: 'วิดีโอและโมชั่น',
  client: 'Video Production',
  image: '/images/video-cover.jpg',
  description: 'Selected video and motion projects from YouTube and TikTok.',
  descriptionTh: 'รวมตัวอย่างผลงานวิดีโอและโมชั่นจาก YouTube และ TikTok',
  videos: [
    {
      id: 'youtube-Rf8JFb6tJRE',
      platform: 'YouTube',
      title: 'YouTube Video 1',
      url: 'https://youtu.be/Rf8JFb6tJRE',
      embedUrl: 'https://www.youtube-nocookie.com/embed/Rf8JFb6tJRE',
      thumbnail: 'https://img.youtube.com/vi/Rf8JFb6tJRE/hqdefault.jpg'
    },
    {
      id: 'youtube-zQXv_QfuQzU',
      platform: 'YouTube',
      title: 'YouTube Video 2',
      url: 'https://youtu.be/zQXv_QfuQzU',
      embedUrl: 'https://www.youtube-nocookie.com/embed/zQXv_QfuQzU',
      thumbnail: 'https://img.youtube.com/vi/zQXv_QfuQzU/hqdefault.jpg'
    },
    {
      id: 'youtube-UCWmtwVe3tA',
      platform: 'YouTube',
      title: 'YouTube Video 3',
      url: 'https://youtu.be/UCWmtwVe3tA',
      embedUrl: 'https://www.youtube-nocookie.com/embed/UCWmtwVe3tA',
      thumbnail: 'https://img.youtube.com/vi/UCWmtwVe3tA/hqdefault.jpg'
    },
    {
      id: 'youtube-QVOGmH40odQ',
      platform: 'YouTube',
      title: 'YouTube Video 4',
      url: 'https://youtu.be/QVOGmH40odQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/QVOGmH40odQ',
      thumbnail: 'https://img.youtube.com/vi/QVOGmH40odQ/hqdefault.jpg'
    },
    {
      id: 'youtube-uT19BcZugdQ',
      platform: 'YouTube',
      title: 'YouTube Video 5',
      url: 'https://youtu.be/uT19BcZugdQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/uT19BcZugdQ',
      thumbnail: 'https://img.youtube.com/vi/uT19BcZugdQ/hqdefault.jpg'
    },
    {
      id: 'tiktok-7306042796106910981',
      platform: 'TikTok',
      title: 'TikTok Video',
      url: 'https://www.tiktok.com/@knr_xyz/video/7306042796106910981',
      embedUrl: 'https://www.tiktok.com/player/v1/7306042796106910981?autoplay=0',
      thumbnail: ''
    }
  ]
},
];
