/* ============================================================
   BAMBY LAND · 数据与交互
   数据整理自公开物料（结构与内容参考 bamby715.github.io）
   日程板块形式参考 plave.global/schedule
   ============================================================ */

/* ---------------- 安利向 · 翻唱 ---------------- */
const coversData = [
  { title: "GreatestMoment_Challenge with BAMBY", date: "2026-01-30", desc: "原唱：BTOB 徐恩光", image: "https://s2.loli.net/2026/02/02/O1e8jzU2B6axCtr.png",
    links: { weibo: "https://weibo.com/5143372154/QpwiukVxK", youtube: "https://www.youtube.com/shorts/NQAzVXsciUA" } },
  { title: "I'm Not Alone", date: "2025-07-19", desc: "原唱：徐英恩", image: "https://s2.loli.net/2026/01/27/bnpUgqP1LfR2xSQ.jpg",
    links: { weibo: "https://weibo.com/7825391749/PBNGb28Bn", bilibili: "https://www.bilibili.com/video/BV1Wou1z5EdA/" } },
  { title: "晩餐歌", date: "2025-06-03", desc: "原唱：tuki.", image: "https://s2.loli.net/2026/02/02/EST7VxkcmqlJn5z.png",
    links: { weibo: "https://weibo.com/5143372154/PuQ7L3VFP", youtube: "https://www.youtube.com/shorts/nVRsJReX2PM" } },
  { title: "The Little Prince", date: "2025-03-03", desc: "原唱：厉旭（RYEOWOOK）", image: "https://s2.loli.net/2026/01/27/yMrgH5EzLiAXdeb.jpg",
    links: { weibo: "https://weibo.com/7825391749/PgRs849eh", bilibili: "https://www.bilibili.com/video/BV1BN95Y5ENB/" } },
  { title: "Pretender", date: "2024-07-17", desc: "原唱：Official髭男dism", image: "https://s2.loli.net/2026/01/25/gPZi4UANfMchabo.jpg",
    links: { weibo: "https://weibo.com/7825391749/Oo038pXcq", bilibili: "https://www.bilibili.com/video/BV1fE421c7hq/" } },
  { title: "十二月的奇迹", date: "2024-07-03", desc: "原唱：EXO", image: "https://s2.loli.net/2026/01/25/cAzshr4LtaSFpJe.jpg",
    links: { weibo: "https://weibo.com/7825391749/OlS3N2Vqg", bilibili: "https://www.bilibili.com/video/BV1ow4m1a7bz/" } },
  { title: "Dangerously", date: "2024-06-07", desc: "原唱：Charlie Puth", image: "https://s2.loli.net/2026/01/25/cm13sfpCFGRla92.jpg",
    links: { weibo: "http://t.cn/A6HrT3Q5", bilibili: "https://www.bilibili.com/video/BV1KT421v7pT/" } },
  { title: "Square", date: "2024-05-29", desc: "原唱：白艺潾 (Yerin Baek)", image: "https://s2.loli.net/2026/01/25/8zIxCUgi2YRvfOQ.jpg",
    links: { weibo: "http://t.cn/AXyOGz1e", bilibili: "https://www.bilibili.com/video/BV17m421T79A/" } },
  { title: "I hope It's breeze", date: "2024-05-15", desc: "原唱：봉구（GilguBonggu）", image: "https://s2.loli.net/2026/01/24/qK9YhEoGyVOnjQT.jpg",
    links: { weibo: "http://t.cn/A6HcnvQa", bilibili: "https://www.bilibili.com/video/BV1vz42117D6/" } },
  { title: "Versace On The Floor", date: "2024-05-01", desc: "原唱：Bruno Mars", image: "https://s2.loli.net/2026/01/27/ELVGcexyrin5lKZ.jpg",
    links: { weibo: "https://weibo.com/7825391749/Oci8vlG0f", bilibili: "https://www.bilibili.com/video/BV1fs421N7HP/" } },
  { title: "事件的地平线", date: "2023-12-05", desc: "原唱：高润荷（YOUNHA）", image: "https://s2.loli.net/2026/01/24/U1YnDTWBfkQOmNI.jpg",
    links: { weibo: "http://t.cn/AXyOGzBh", bilibili: "https://www.bilibili.com/video/BV1PG411v7DF/" } }
];

/* ---------------- 安利向 · 翻跳 ---------------- */
const dancesData = [
  { title: "𝑷𝒖𝒕 𝒚𝒐𝒖𝒓 𝒃𝒐𝒅𝒚", date: "2025-10-04", desc: "《body》- 任多荣", image: "https://s2.loli.net/2026/02/01/oCxtwn2BdkgG8vF.png",
    links: { weibo: "https://weibo.com/7825391749/Q7zpg9UaZ", bilibili: "https://www.bilibili.com/video/BV1nixpz7EPz/" } },
  { title: "🩷 Pookie 🐿️ 🩷", date: "2025-07-16", desc: "《Pookie》- FIFTY FIFTY", image: "https://s2.loli.net/2026/02/02/Osaf6jzC4HWGThV.png",
    links: { weibo: "https://weibo.com/7825391749/PBmY6kwcg", bilibili: "https://www.bilibili.com/video/BV1iEutzjEzL/" } },
  { title: "斑比的 🌸 SUPER吸引力 🧲", date: "2024-04-26", desc: "《Magnetic》- ILLIT", image: "https://s2.loli.net/2026/02/03/AmrwhzjvkqusxXK.png",
    links: { weibo: "https://weibo.com/7825391749/Obwt4EbOT", bilibili: "https://www.bilibili.com/video/BV1dz42167DZ/" } },
  { title: "姐姐真漂亮（横版）", date: "2023-07-10", desc: "《누난너무예뻐(Replay)》- SHINee", image: "https://s2.loli.net/2026/01/25/eqTrixRBC4FIHPU.jpg",
    links: { weibo: "http://t.cn/A6041BZL", bilibili: "https://www.bilibili.com/video/BV1JW4y1o7Ri/" } },
  { title: "姐姐真漂亮（竖版）", date: "2023-07-10", desc: "《누난너무예뻐(Replay)》- SHINee", image: "https://s2.loli.net/2026/01/27/AqIafmXku7SZx9D.jpg",
    links: { weibo: "https://weibo.com/7825391749/N9ewzz7C8", bilibili: "https://www.bilibili.com/video/BV1yk4y1P7Ke/" } },
  { title: "JIKJIN", date: "2023-03-23", desc: "《JIKJIN》- TREASURE", image: "https://s2.loli.net/2026/01/27/PgieZcUdD4Sh3ys.png",
    links: { weibo: "https://weibo.com/7825391749/MyEjBw4es", bilibili: "https://www.bilibili.com/video/BV1Hg4y1W7zf/" } },
  { title: "这么可爱真是抱歉", date: "2023-03-05", desc: "宅舞翻跳", image: "https://s2.loli.net/2026/01/27/aC78AejyUz5Q1No.jpg",
    links: { bilibili: "https://www.bilibili.com/video/BV1PL41127bw/" } },
  { title: "Ditto", date: "2023-03-03", desc: "《Ditto》- NewJeans", image: "https://s2.loli.net/2026/01/25/Z1iXDGWdB6nyHeE.jpg",
    links: { weibo: "http://t.cn/A6ONqqvk", bilibili: "https://www.bilibili.com/video/BV1XM4y1R7EL/" } }
];

/* ---------------- 安利向 · 舞台直拍 ---------------- */
const stagesData = [
  { title: "왜요 왜요 왜 直拍（横版）", date: "2023-06-03", desc: "Why? Close-up Cam | Show! MusicCore", image: "https://s2.loli.net/2026/01/26/OnQfu6C2zLXZJEh.jpg",
    links: { youtube: "https://www.youtube.com/watch?v=Yo_eIeYYUp4" } },
  { title: "WAY 4 LUV 直拍（横版）", date: "2024-03-09", desc: "WAY 4 LUV | MBC", image: "https://s2.loli.net/2026/01/26/7zRfE68NhAGZl1v.jpg",
    links: { youtube: "https://www.youtube.com/watch?v=IqX2FZ-5wnI" } },
  { title: "Dash 直拍（横版）", date: "2025-02-15", desc: "Dash | MBC", image: "https://s2.loli.net/2026/01/26/eWkQsITmjtBMDSh.jpg",
    links: { youtube: "https://www.youtube.com/watch?v=Zh_LEsavI3s" } },
  { title: "Dash 直拍（竖版）", date: "2025-02-06", desc: "Dash 직캠 4K FanCam", image: "https://s2.loli.net/2026/01/26/7DWHXd4jOqLBYpJ.jpg",
    links: { youtube: "https://www.youtube.com/watch?v=kR32F9VemFg" } },
  { title: "The 6th Summer 直拍（横版）", date: "2023-08-26", desc: "여섯 번째 여름 Close-up Cam", image: "https://s2.loli.net/2026/02/02/I1hUQx5gkKoA3PB.png",
    links: { youtube: "https://www.youtube.com/watch?v=Iu_KlxLeqSk" } },
  { title: "Pink Venom 直拍（竖版）", date: "2025-03-27", desc: "Pink Venom 직캠 4K FanCam", image: "https://s2.loli.net/2026/02/02/hvtQD7JjGHR9ZWq.png",
    links: { youtube: "https://www.youtube.com/watch?v=on5so3m7Xtc" } },
  { title: "Hide and Seek 直拍（横版）", date: "2025-09-20", desc: "숨바꼭질 | 쇼! 음악중심 | MBC", image: "https://s2.loli.net/2026/02/02/TG8n5shM9dVrxHj.png",
    links: { youtube: "https://www.youtube.com/watch?v=OuvzgzZbwGY" } },
  { title: "BBUU! 直拍（横版）", date: "2025-11-15", desc: "BBUU! | 쇼! 음악중심 | MBC", image: "https://s2.loli.net/2026/02/02/dTPLJcRU1VQIiWO.png",
    links: { youtube: "https://www.youtube.com/watch?v=MwRD53JY0sg" } },
  { title: "BBUU!+Dash 直拍（竖版）", date: "2025-12-31", desc: "BBUU!+Dash FanCam | MBC", image: "https://s2.loli.net/2026/02/02/tHQuZmc67OjxnCf.png",
    links: { youtube: "https://www.youtube.com/watch?v=gg5M1LAy0zQ" } }
];

/* ---------------- 安利向 · 演唱会 / 证书 ---------------- */
const concertsData = [
  { title: "'Hello, Asterum!' ENCORE", date: "2025-04-22", desc: "BAMBY & EUNHO - 'Hold my hand' + 'LIT' + 'Next Level'（原唱：IU, aespa）", image: "https://s2.loli.net/2026/02/02/sr4tEKM9edfWNVD.png",
    links: { weibo: "https://weibo.com/7825391749/PosqBzrAm", bilibili: "https://www.bilibili.com/video/BV18L5DzLE51/", youtube: "https://www.youtube.com/watch?v=6sLCCvvg9Io" } }
];

const certsData = [
  { title: "日本語能力試験 N2", date: "2025", desc: "2025年合格 🎉", image: "https://img.cdn1.vip/i/69a86b6511d59_1772645221.webp", links: {} },
  { title: "日本語能力試験 N3", date: "2024", desc: "2024年合格 🎉", image: "https://s2.loli.net/2026/02/05/wzn4jkLV2YA5WDs.jpg", links: {} }
];

/* ============ 以下数据整理自 bamby715.github.io ============ */
    const imageGalleries = {
      // 回归照数据
      'concept-set-10': [
        'https://img.cdn1.vip/i/69c3c4df4b744_1774437599.webp',
        'https://img.cdn1.vip/i/69c3c4e9e765f_1774437609.webp',
        'https://img.cdn1.vip/i/69c3c4f056a0f_1774437616.webp',
        'https://img.cdn1.vip/i/69cf7094185b4_1775202452.webp',
        'https://img.cdn1.vip/i/69cf70a76535e_1775202471.webp',
      ],
      'concept-set-9': [
        'https://s2.loli.net/2026/02/07/jTwQFVvqL8loUeM.png',
        'https://s2.loli.net/2026/02/07/qjBJP4WsUrae5H1.png',
        'https://s2.loli.net/2026/02/07/uTP4KcjL7xQHXSD.png',
        'https://s2.loli.net/2026/02/07/NUrqzHV6fw2Jymp.png',
        'https://s2.loli.net/2026/02/07/TCyVPQ4SkaRxG1D.png',
      ],
      'concept-set-8': [
        'https://s2.loli.net/2026/01/25/e3Kz98cW7kmAops.jpg',
        'https://s2.loli.net/2026/01/25/NtBSZe8TlLmPRFW.jpg',
        'https://s2.loli.net/2026/01/25/3LcUXRiten9gbGV.jpg',
        'https://s2.loli.net/2026/01/25/iG7NMtmCnyrfp8S.jpg',
        'https://s2.loli.net/2026/01/25/fb8KqsMSACw2NTa.jpg',
        'https://s2.loli.net/2026/01/25/Q9R6ugTX1m7jGnh.jpg',
        'https://s2.loli.net/2026/01/25/L9OIpg18oJeDFES.jpg',
        'https://s2.loli.net/2026/02/07/HkCrYZ6onlqQVGT.png'
      ],
      'concept-set-7': [
        'https://s2.loli.net/2026/01/25/CMv1Z9AoOJHbhLW.jpg',
        'https://s2.loli.net/2026/02/07/x27HWCEi5qTLpnr.png',
        'https://s2.loli.net/2026/02/07/QrI21yEjKwvFJPm.png',
        'https://s2.loli.net/2026/02/07/E9bLXfDNyqMKCYn.png',
        'https://s2.loli.net/2026/02/07/7DErtZkQf8jRXmd.png',
        'https://s2.loli.net/2026/02/07/kUiDVuC572tgxRz.png',
        'https://s2.loli.net/2026/02/07/8NkixX9KDva7QJL.png',
        'https://s2.loli.net/2026/02/07/iyK45NnFYwGZ19W.png',
        'https://s2.loli.net/2026/01/25/FTxwZkqOCK1j7rc.jpg',
        'https://s2.loli.net/2026/01/25/PyCvQT1JUF3lAhr.jpg',

      ],
      'concept-set-6': [
        'https://i.ibb.co/0LzdYXs/IMG-8067.jpg',
        'https://i.ibb.co/GQZtCkjZ/IMG-8066.jpg',
        'https://i.ibb.co/1GKp0N3C/IMG-8082.jpg'
],
      'concept-set-5': [
        'https://s2.loli.net/2026/02/03/lukeKtThLRyiG8C.jpg',
        'https://s2.loli.net/2026/02/07/B291rR4hvuZkzlL.png',
        'https://s2.loli.net/2026/02/03/hCPSIYOAfFo6adD.jpg',
        'https://s2.loli.net/2026/02/03/iDwH9FMSeNAlI6r.jpg',
        'https://img.cdn1.vip/i/698de7839eddd_1770907523.webp',
        'https://img.cdn1.vip/i/698de784e71b0_1770907524.webp'
      ],
      'concept-set-4': [
        'https://s2.loli.net/2026/02/03/JPCmaMyO4gR7ZD1.jpg',
        'https://s2.loli.net/2026/02/03/nfB7AqkVEXJ6hTC.jpg'
      ],
      'concept-set-3': [
        'https://s2.loli.net/2026/02/03/QeniRVp9hXvMa6F.jpg',
        'https://s2.loli.net/2026/02/03/72tSqW8zeTishIY.jpg',
        'https://s2.loli.net/2026/02/03/5j4bOiTPDMV67Co.jpg',
        'https://s2.loli.net/2026/02/03/FZnmatzd9yKuxgJ.jpg'
      ],
      'concept-set-2': [
        'https://s2.loli.net/2026/02/03/mvFi4npl52ck1TX.jpg'
      ],
      'concept-set-1': [
        'https://s2.loli.net/2026/01/25/dg7v5itPwUnzmLf.jpg',
        'https://s2.loli.net/2026/01/25/vEIe9qHDTkCa6gh.jpg',
        'https://s2.loli.net/2026/01/25/P7yzmhsMVf4CwEF.jpg',
        'https://s2.loli.net/2026/01/25/A5XuNMat8d6Kw7W.jpg',
        'https://s2.loli.net/2026/01/25/wfq86iubnxVagFJ.jpg'
      ],
      'concept-set-0': [
        'https://img.cdn1.vip/i/69a68a9bb344f_1772522139.webp',
        'https://img.cdn1.vip/i/69c3d25f1e96d_1774441055.webp'
      ],
      // 官方照数据
      'photos-set-0': [
        'https://s2.loli.net/2026/01/27/LyTodn5UWYj2kr6.jpg',
        'https://s2.loli.net/2026/01/27/PB3fxKVyAzvXULD.jpg',
        'https://s2.loli.net/2026/01/27/7GeWltPkJRShNq4.jpg',
        'https://s2.loli.net/2026/01/27/WqHn3iPDG7lvmLK.jpg',
        'https://s2.loli.net/2026/01/27/i7gN5hcbs6jV91l.jpg'
      ],
      'photos-set-1': [
        'https://s2.loli.net/2026/01/25/MIfmSEKOt7y6Ghr.jpg',
        'https://s2.loli.net/2026/01/25/9xhGIrSFCL8Um53.jpg',
        'https://s2.loli.net/2026/01/25/UClxQ216huqWimL.jpg',
        'https://s2.loli.net/2026/01/25/FqIj34evdLJDpl9.jpg'
      ],
      'photos-set-2': [
        'https://s2.loli.net/2026/01/25/jSgfpGxNKqluwEH.jpg',
        'https://s2.loli.net/2026/01/25/Jg9BtyNAHuWOvi7.jpg',
        'https://s2.loli.net/2026/01/25/m1v8NLuVyc9OUMk.jpg',
        'https://s2.loli.net/2026/01/25/xGJbhnQFeSYv3gz.jpg'
      ],
      'photos-set-3': [
        'https://s2.loli.net/2026/02/01/Qm2p8seZVEzC6Rj.jpg',
        'https://s2.loli.net/2026/02/01/gLCstBYHSo7wTzA.jpg',
        'https://s2.loli.net/2026/02/01/teWx1FQriqyXY37.jpg'
      ],
      'photos-set-4': [
        'https://s2.loli.net/2026/02/01/XAl482JTyYDVLaF.jpg',
        'https://s2.loli.net/2026/02/01/flmagRQ1iG4YxAV.jpg',
        'https://s2.loli.net/2026/02/01/KkCHOA1PrWz7DXh.jpg'
      ],
      'photos-set-5': [
        'https://s2.loli.net/2026/02/03/FdUglpVGmkjPOvc.jpg',
        'https://s2.loli.net/2026/02/03/RdB9J1scTuirC8q.jpg',
        'https://s2.loli.net/2026/02/03/5rpKAYguZJjOlik.jpg'
      ],
      'photos-set-6': [
        'https://s2.loli.net/2026/02/03/7qpSMG2RTxn4Uh6.jpg',
        'https://s2.loli.net/2026/02/03/LA8Ya9iCGvSnyZ4.jpg',
        'https://s2.loli.net/2026/02/03/VYMd3RLo6ZBh9gj.jpg',
        'https://s2.loli.net/2026/02/03/hGQVrIps4Pf1in5.jpg'
      ],
      'photos-set-7': [
        'https://s2.loli.net/2026/02/03/Wia8GlF7jToHPSs.jpg',
        'https://s2.loli.net/2026/02/03/H9nVBGbol1ZXkmC.jpg',
        'https://s2.loli.net/2026/02/03/Bgxs1AqM3K4XO8v.jpg'
      ],
      'photos-set-8': [
        'https://s2.loli.net/2026/02/03/V2KSRjXeUd3AzqD.jpg',
        'https://s2.loli.net/2026/02/03/k8GqIgcBMstCVOo.jpg',
        'https://s2.loli.net/2026/02/03/gdRwxY94bTvMWpa.jpg',
        'https://s2.loli.net/2026/02/03/PYJukFRljz3syZf.jpg',
        'https://s2.loli.net/2026/02/03/gwQcNdYy6nBv28j.jpg',
        'https://s2.loli.net/2026/02/03/8JVW64xAS1hZE5u.jpg'
      ],
      'photos-set-9': [
        'https://s2.loli.net/2026/02/03/EIROHghQKo1jNqY.jpg',
        'https://s2.loli.net/2026/02/03/6TpBYRt1amLekfJ.jpg',
        'https://s2.loli.net/2026/02/03/wEYsxHqtFo3M8UG.jpg',
        'https://s2.loli.net/2026/02/03/JO9plXfAGMrTL4c.jpg'
      ],
      'photos-set-10': [
        'https://s2.loli.net/2026/02/03/1SXJUGtIAvyV34Z.jpg',
        'https://s2.loli.net/2026/02/03/mXtozOZ2CEy7ik5.jpg'
      ],
      'photos-set-11': [
        'https://s2.loli.net/2026/02/03/ZrgTD9mUnIGvC4B.jpg',
        'https://s2.loli.net/2026/02/03/zNakIwAMRXZfnbm.jpg',
        'https://s2.loli.net/2026/02/03/twI7WYyplX2H6oj.jpg',
        'https://s2.loli.net/2026/02/03/bkj8zso3IgHQ9X6.jpg'
      ],
      'photos-set-12': [
        'https://s2.loli.net/2026/02/03/cGHVWxER4g2QtnN.jpg',
        'https://s2.loli.net/2026/02/03/9WsPIciHYE7AuLU.jpg',
        'https://s2.loli.net/2026/02/03/a42s1BK9kVDNPfi.jpg'
      ],
      'photos-set-13': [
        'https://s2.loli.net/2026/02/04/KUh5JVdl7znTf8a.jpg',
        'https://s2.loli.net/2026/02/04/aWVFstbGvEyrLzM.jpg',
        'https://s2.loli.net/2026/02/04/eqlmXtCFT1a2woQ.jpg',
        'https://s2.loli.net/2026/02/04/pE7eYCWJf2BZ8jG.jpg',
        'https://s2.loli.net/2026/02/04/jAfyEZrDJFLcY1l.jpg',
        'https://s2.loli.net/2026/02/04/roncCDK835vjwiZ.jpg'
      ],
      'photos-set-14': [
        'https://s2.loli.net/2026/02/04/RjAxPDsSapboFW2.jpg',
        'https://s2.loli.net/2026/02/04/xOJEnVHqLPtC86a.jpg',
        'https://s2.loli.net/2026/02/04/8AqevIKj5JnGBVD.jpg',
        'https://s2.loli.net/2026/02/04/3lzReiutcBkVZOs.jpg'
      ],
      'photos-set-15': [
        'https://s2.loli.net/2026/02/04/Earjh1gPDpYT6xk.jpg',
        'https://s2.loli.net/2026/02/04/friL6Ie24aRCwSc.jpg',
        'https://s2.loli.net/2026/02/04/Ouzjwr1Hy7LMoDJ.jpg',
        'https://s2.loli.net/2026/02/04/kKvBbaIFu648Wiz.jpg',
        'https://s2.loli.net/2026/02/04/hnqPy5c4Kav6C7L.jpg',
        'https://s2.loli.net/2026/02/04/Js5TbgAo1EWkK3L.jpg',
        'https://s2.loli.net/2026/02/04/BdH8qUEQMOZwKeD.jpg',
        'https://s2.loli.net/2026/02/04/I3tgYzSnp2yMBf9.jpg',
        'https://s2.loli.net/2026/02/04/VtFhy1GofgsaOuN.jpg',
        'https://s2.loli.net/2026/02/04/1Ot948LEgTvMBhX.jpg',
        'https://s2.loli.net/2026/02/04/eUZJ6YAmxLGDFhg.jpg',
        'https://s2.loli.net/2026/02/04/p6zut7qk9s5OneC.jpg',
        'https://s2.loli.net/2026/02/04/mqd9ltDzNIf4TP2.jpg'
      ],
      'photos-set-16': [
        'https://s2.loli.net/2026/02/04/Q4XnWCJ6HNxesTO.jpg',
        'https://s2.loli.net/2026/02/04/ahjRbg5MEQ3W4OB.jpg',
        'https://s2.loli.net/2026/02/04/X5ZT4EvLkU3GSOc.jpg',
        'https://s2.loli.net/2026/02/04/YaSA6Q9XPxWZ8Jg.jpg',
        'https://s2.loli.net/2026/02/04/W5Ji3rAIs6Dfwq4.jpg',
        'https://s2.loli.net/2026/02/04/2kOcDJ4TmjdiKHN.jpg',
        'https://s2.loli.net/2026/02/04/EIbi1oAmazNsSwu.jpg',
        'https://s2.loli.net/2026/02/04/ngedNQDbChlAkfR.jpg',
        'https://s2.loli.net/2026/02/04/gbawDCHVdqO6AL2.jpg',
        'https://s2.loli.net/2026/02/04/hsiFN9jR7Q5b38x.jpg'
      ],
      'photos-set-17': [
        'https://s2.loli.net/2026/02/04/RarSKyiEkILAUVs.jpg',
        'https://s2.loli.net/2026/02/04/4mnIqwyZc6WDGX1.jpg',
        'https://s2.loli.net/2026/02/04/34u6kNHOoLGIatA.jpg',
        'https://s2.loli.net/2026/02/04/c48EY9CUxzSWXhK.jpg'
      ],
      'photos-set-18': [
        'https://s2.loli.net/2026/02/04/z5snIVC8Wwk32fh.jpg',
        'https://s2.loli.net/2026/02/04/R3nKB9S8zTOlY2A.jpg',
        'https://s2.loli.net/2026/02/04/6yIcE1K7vRsAZXH.jpg',
        'https://s2.loli.net/2026/02/04/ElFiWLDUQP8zSn9.jpg'
      ],
      'photos-set-19': [
        'https://s2.loli.net/2026/02/04/iXuCRb8WPckKAqg.jpg',
        'https://s2.loli.net/2026/02/04/Gx82PrRos5V17lb.jpg',
        'https://s2.loli.net/2026/02/04/CdyJsMe1HOZ2WGR.jpg',
        'https://s2.loli.net/2026/02/04/4jYholtnSFBwQWH.jpg',
        'https://s2.loli.net/2026/02/04/1qKMvlW9efHAQUm.jpg'
      ],
      'photos-set-20': [
        'https://s2.loli.net/2026/02/04/DCP8F5bVMOsBoWH.png',
        'https://s2.loli.net/2026/02/04/9LubYrRBD167ITc.png'
      ],
      'photos-set-21': [
        'https://s2.loli.net/2026/02/04/omu7LptgxyUjWJA.png'
      ],
      'photos-set-22': [
        'https://s2.loli.net/2026/02/04/Ncq1MwHkOS52VlA.png',
        'https://s2.loli.net/2026/02/04/Za1vR2VEeh7Gtku.png'
      ],
      'photos-set-23': [
        'https://s2.loli.net/2026/02/04/aSnoMbyezXtL51r.png',
        'https://s2.loli.net/2026/02/04/t52BfScP84M61ZL.png',
        'https://s2.loli.net/2026/02/04/QPCw6IUeZkG7Bnq.png'
      ],
      'photos-set-24': [
        'https://s2.loli.net/2026/02/04/KB16QVpXhdj8o92.png',
        'https://s2.loli.net/2026/02/04/thxHjJyAOYGwbES.png',
        'https://s2.loli.net/2026/02/04/ztb3RAHCXdlkhqG.png'
      ],
      'photos-set-25': [
        'https://s2.loli.net/2026/02/04/COIDgQTZL7VBeEJ.png',
        'https://s2.loli.net/2026/02/04/YCJKIGgPrWDRVhj.png',
        'https://s2.loli.net/2026/02/04/kxS19XWNdYnBiTP.png'
      ],
      'photos-set-26': [
        'https://s2.loli.net/2026/02/04/EJKzXVBZYmruw63.png',
        'https://s2.loli.net/2026/02/04/xaNEbTlJKU3LduX.png',
        'https://s2.loli.net/2026/02/04/CAR7QSO5vIUz8HY.png',
        'https://s2.loli.net/2026/02/04/Uu8NJQv5ZqA7jcY.png',
        'https://s2.loli.net/2026/02/04/reMJUGIfVCaA6xu.png',
        'https://s2.loli.net/2026/02/04/8aRIrMp3Z7gdNzE.png',
        'https://s2.loli.net/2026/02/04/2YpDSCqA4GhKZPE.png',
        'https://s2.loli.net/2026/02/04/lWR8Sh4DAUNkpva.png'
      ],
      'photos-set-27': [
        'https://s2.loli.net/2026/02/08/CXIETf6weSVUBjR.png',
        'https://s2.loli.net/2026/02/08/ZsBIioGVjOud21T.png',
        'https://s2.loli.net/2026/02/08/1ElX8yhoszR4wfZ.png',
        'https://s2.loli.net/2026/02/08/CFEDmQxqXfHs81l.png',
        'https://s2.loli.net/2026/02/04/QIlmaAU5xhtTB4f.png',
        'https://s2.loli.net/2026/02/08/l78zFSmPe2UO4MB.png'
      ],
      'photos-set-28': [
        'https://s2.loli.net/2026/02/04/CnLK1XtBvHf7Jrx.png',
        'https://s2.loli.net/2026/02/04/f2ClK9JvmqB48dc.png',
        'https://s2.loli.net/2026/02/04/jzQtvN8ylWRbnY5.png',
        'https://s2.loli.net/2026/02/04/dXcexQMCHyto9wv.png',
        'https://s2.loli.net/2026/02/04/V6MRetGzLgX3rmq.png'
      ],
      'photos-set-29': [
        'https://s2.loli.net/2026/02/04/5uOLRspoPhknyDa.png',
        'https://s2.loli.net/2026/02/04/WquPrOxa4g83bH5.png',
        'https://s2.loli.net/2026/02/04/4JITzWZk53juSAP.png'
      ],
      'photos-set-30': [
        'https://s2.loli.net/2026/02/04/cBZt4hnCM3DPdSk.png',
        'https://s2.loli.net/2026/02/04/OUS5jxrgms1fzAk.png'
      ],
      'photos-set-31': [
        'https://s2.loli.net/2026/02/04/dAwEsrOq8auzZ31.png',
        'https://s2.loli.net/2026/02/04/JNXV3T5cWrUvDmn.png'
      ],
      'photos-set-32': [
        'https://s2.loli.net/2026/02/04/U3VERDqyQu1jd5F.png',
        'https://s2.loli.net/2026/02/04/kp93FHQt5Mnvfmg.png',
        'https://s2.loli.net/2026/02/04/r4yLejXRzmwsH62.jpg',
        'https://s2.loli.net/2026/02/04/vCKO9iBzRypFsUo.jpg',
        'https://s2.loli.net/2026/02/04/nRzQepyHg2Vwcq8.jpg'
      ],
      'photos-set-33': [
        'https://s2.loli.net/2026/02/05/NGOP8qK4IvkfEWo.png',
        'https://s2.loli.net/2026/02/05/EoGcgPv9WyXUKpJ.png',
        'https://s2.loli.net/2026/02/05/EUzNx86JKi4Wywa.png',
        'https://s2.loli.net/2026/02/05/ivFuNlVn9ZrgPd4.png',
        'https://s2.loli.net/2026/02/05/ufaLIcrhoe6SvYy.png',
        'https://s2.loli.net/2026/02/05/PiTZXzKyOg54tcU.png',
        'https://s2.loli.net/2026/02/05/T4PeqAzIM95rt7j.png'
      ],
      'photos-set-34': [
        'https://s2.loli.net/2026/02/05/aNcKXRzf2Y5Hk7Z.jpg',
        'https://s2.loli.net/2026/02/05/UIbuGWPoAR79mH5.jpg'
      ],
      'photos-set-35': [
        'https://s2.loli.net/2026/02/07/k8oEILFuVyJseDO.png',
        'https://s2.loli.net/2026/02/07/amKIBuDTQSLynsl.png',
        'https://s2.loli.net/2026/02/07/Iqgn7a4EbpVW6Hs.png',
        'https://s2.loli.net/2026/02/07/oJsCdFgnNaQ12MV.png',
        'https://s2.loli.net/2026/02/07/IVcENaxP5LQ13ft.png',
        'https://s2.loli.net/2026/02/07/EHny9zdiGZLvgUr.png',
        'https://s2.loli.net/2026/02/07/WBwbSM73fpQnINa.png',
        'https://s2.loli.net/2026/02/07/OghPnLVpQ8bkzRI.jpg',
        'https://s2.loli.net/2026/02/07/SAf1ezLC3yOV9qP.jpg',
        'https://s2.loli.net/2026/02/07/hKpES6cn9NjX4uC.jpg'
      ],
      'photos-set-36': [
        'https://s2.loli.net/2026/02/07/qOwhJa31f6DlU8t.png',
        'https://s2.loli.net/2026/02/07/8wlzHbeyTo6k1dI.png',
        'https://s2.loli.net/2026/02/07/UagHhYA87IQJ1DS.png',
        'https://s2.loli.net/2026/02/07/QnJkKBIqHGXhblS.png',
        'https://s2.loli.net/2026/02/07/1hTvdMqaXo8FxS4.png'
      ],
      'photos-set-37': [
        'https://s2.loli.net/2026/02/07/dTFxKVtsDQBAmGX.png',
        'https://s2.loli.net/2026/02/07/txRrF5fHsEOpcny.png',
        'https://s2.loli.net/2026/02/07/pfsVIQ5oRO2vGmC.png',
        'https://s2.loli.net/2026/02/07/I3TWymbOrhx4Cq7.png',
        'https://s2.loli.net/2026/02/07/enCZTr8woalsgpX.png',
        'https://s2.loli.net/2026/02/07/UbgAC1r78XIn4i9.png',
        'https://s2.loli.net/2026/02/07/taRLxcBl8edWHEG.png',
        'https://s2.loli.net/2026/02/07/jTXp96eMWgLBKwr.png',
        'https://s2.loli.net/2026/02/07/Jf7yY26rTkMBiXg.png'
      ],
      'photos-set-38': [
        'https://s2.loli.net/2026/02/07/gxtaFsLH1iAVwIf.png',
        'https://s2.loli.net/2026/02/07/4pre1jFa8EnXYhq.png',
        'https://s2.loli.net/2026/02/07/j5PnIzkoxEcJuC2.png',
        'https://s2.loli.net/2026/02/07/ApMl7zyB6q2QLWi.png'
      ],
      'photos-set-39': [
        'https://s2.loli.net/2026/02/07/FndcTrQZk97RgLN.png',
        'https://s2.loli.net/2026/02/07/A5Nhv8nG6uBaSMC.png',
        'https://s2.loli.net/2026/02/07/znvO3A8j1aMKkJh.png',
        'https://s2.loli.net/2026/02/07/1cKx8g54rEh2qUj.png',
        'https://s2.loli.net/2026/02/07/hkADd2pBzqGRcLC.png'
      ],
      'photos-set-40': [
        'https://s2.loli.net/2026/02/07/LUgQ5ZkDAwO1XYu.png',
        'https://s2.loli.net/2026/02/07/3M2mIeuVqxYhWwn.png',
        'https://s2.loli.net/2026/02/07/dhGM2PUxN7VogE8.png',
        'https://s2.loli.net/2026/02/07/G1VnJOsLeSNyEqm.png',
        'https://s2.loli.net/2026/02/07/Lskq7fhvQ5tCicU.png'
      ],
      'photos-set-41': [
        'https://s2.loli.net/2026/02/07/6WpKvHfDNxiVweI.png'
      ],
      'photos-set-42': [
        'https://s2.loli.net/2026/02/07/CdhiAxNTyVmqrvZ.png',
        'https://s2.loli.net/2026/02/07/SZQE4LsIOnJwGoK.png',
        'https://s2.loli.net/2026/02/07/SjLNUu9TGcZ1I2M.png',
        'https://s2.loli.net/2026/02/07/DTdLvKQ2opUE6AR.png',
        'https://s2.loli.net/2026/02/07/wQ4Ym9ZqXDhaS1E.png',
        'https://s2.loli.net/2026/02/07/zr59OEqFguHNwmj.png',
        'https://s2.loli.net/2026/02/07/HUQ38LXiamzkZlK.png',
        'https://s2.loli.net/2026/02/07/AeQGIur4sH8yfMW.png',
        'https://s2.loli.net/2026/02/07/9zwx76NqSar1CDR.png'
      ],
      'photos-set-43': [
        'https://s2.loli.net/2026/02/07/MqxUKkDjHBQGNr7.png',
        'https://s2.loli.net/2026/02/07/cGCgiwzZvHnbaxK.png',
        'https://s2.loli.net/2026/02/07/6lvfBkWS8yIcwRT.png',
        'https://s2.loli.net/2026/02/07/2oLgOFGqhZ6l1tN.png',
        'https://s2.loli.net/2026/02/07/JTMm9nDdcEW1vIi.png',
        'https://s2.loli.net/2026/02/07/KLeihXAPol5S14Y.png',
        'https://s2.loli.net/2026/02/07/qGQVn3F2Tm48YBU.png',
        'https://s2.loli.net/2026/02/07/aWPVbMonSq6Nr9j.png',
        'https://s2.loli.net/2026/02/07/z2RN7nOfH6C91V5.png',
        'https://s2.loli.net/2026/02/07/AzOe5GQLPr6iFc1.png'
      ],
      'photos-set-44': [
        'https://s2.loli.net/2026/02/07/iKPjI2mn6zo3hCb.png',
        'https://s2.loli.net/2026/02/07/h9YwN14SoPRO86i.png',
        'https://s2.loli.net/2026/02/07/9s6zGlXtJf1xMbd.png',
        'https://s2.loli.net/2026/02/07/lvwq8O1dZpIFznB.png',
        'https://s2.loli.net/2026/02/07/FGcBpVOaZn8uYI2.png',
        'https://s2.loli.net/2026/02/07/jZeVQBtN71F3bax.png',
        'https://s2.loli.net/2026/02/07/ygfZYsi2wRFh8IQ.png',
        'https://s2.loli.net/2026/02/07/EZLqglQANXx17I2.png'
      ],
      'photos-set-45': [
        'https://s2.loli.net/2026/02/07/g46R8WtJqzbBnPX.png',
        'https://s2.loli.net/2026/02/07/7szd289JLPt6eHM.png',
        'https://s2.loli.net/2026/02/07/KmXbz6YOBi4PLQC.png',
        'https://s2.loli.net/2026/02/07/svWXTzyuwPlNIdE.png',
        'https://s2.loli.net/2026/02/07/mFTEfSxDVjGhwC5.png',
        'https://s2.loli.net/2026/02/07/fudP5LDkNo7nbWz.png',
        'https://s2.loli.net/2026/02/07/16qmZDGKuEFvIlY.png',
        'https://s2.loli.net/2026/02/07/ThdQGS4iZAeKM15.png'
      ],
      'photos-set-46': [
        'https://s2.loli.net/2026/02/07/v1CguR3AEKoQaie.png',
        'https://s2.loli.net/2026/02/07/T4WLkGEeADo9XKI.png',
        'https://s2.loli.net/2026/02/07/bWvkfJ8E2dL1HT5.png',
        'https://s2.loli.net/2026/02/07/8jBhLbXHKmMDT3n.png',
        'https://s2.loli.net/2026/02/07/rMCQWLDGbu2p8aB.png'
      ],
      'photos-set-47': [
        'https://s2.loli.net/2026/02/07/sqF1DyKHOl7JtB2.png',
        'https://s2.loli.net/2026/02/07/fidDNHhE46tX92x.png',
        'https://s2.loli.net/2026/02/07/mC8Z7EFzOnLdwfQ.png',
        'https://s2.loli.net/2026/02/07/TkFNaOSExIXmjfK.png'
      ],
      'photos-set-48': [
        'https://s2.loli.net/2026/02/07/9uyWkC1sYeGcEZO.png'
      ],
      'photos-set-49': [
        'https://img.cdn1.vip/i/6990059ab8a8c_1771046298.webp',
        'https://img.cdn1.vip/i/699005a06438c_1771046304.webp',
        'https://img.cdn1.vip/i/699448fa4c6e5_1771325690.webp'
      ],
      'photos-set-50': [
        'https://img.cdn1.vip/i/6992bc1dc34c9_1771224093.webp',
        'https://img.cdn1.vip/i/6992bc05bb9bc_1771224069.webp',
        'https://img.cdn1.vip/i/6992bc0a49eed_1771224074.webp',
        'https://img.cdn1.vip/i/6992bc0f909df_1771224079.webp',
        'https://img.cdn1.vip/i/6992bc1168356_1771224081.webp'
      ],
      'photos-set-51': [
        'https://img.cdn1.vip/i/69a328778960c_1772300407.webp'
      ],
      'photos-set-52': [
        'https://img.cdn1.vip/i/69a868f0bc8e0_1772644592.webp',
        'https://img.cdn1.vip/i/69a86905c0f83_1772644613.webp',
        'https://img.cdn1.vip/i/69a8693929ce2_1772644665.webp',
        'https://img.cdn1.vip/i/69a86910c26d7_1772644624.webp'
      ],
      'photos-set-53': [
        'https://img.cdn1.vip/i/69b27ce873871_1773305064.webp',
        'https://img.cdn1.vip/i/69b27ceb52107_1773305067.webp',
      ],
      'photos-set-54': [
        'https://img.cdn1.vip/i/69cf6fa44c209_1775202212.webp',
        'https://img.cdn1.vip/i/69cf6fa929cda_1775202217.webp',
        'https://img.cdn1.vip/i/69cf6fae33a66_1775202222.webp'
      ],
      'photos-set-55': [
        'https://img.cdn1.vip/i/69d90755d5724_1775830869.webp',
        'https://img.cdn1.vip/i/69d9075b6b21f_1775830875.webp',
        'https://img.cdn1.vip/i/69d9075f2a685_1775830879.webp'
      ],
      // 官方照尾巴

      // 个人照数据
      'personal-set-1': [
        'https://img.cdn1.vip/i/6993ff0c8cd42_1771306764.webp',
        'https://s2.loli.net/2026/02/08/3Xgj5BvhfD4eJ9o.png',
        'https://s2.loli.net/2026/02/08/W1rPQqB6g9iLvh7.png',
        'https://img.cdn1.vip/i/698f54f4802a8_1771001076.webp',
        'https://img.cdn1.vip/i/698f54f3acf4a_1771001075.webp',
        'https://s2.loli.net/2026/02/04/dtG4PUEv3RaJ5LO.jpg',
        'https://s2.loli.net/2026/02/02/lMZ7tFbYIVHwixp.jpg',
        'https://s2.loli.net/2026/02/02/NKUldbtehVGgnDx.jpg',
        'https://img.cdn1.vip/i/69a1df6fc03c6_1772216175.webp',
        'https://img.cdn1.vip/i/69a1df9745d54_1772216215.webp',
        'https://img.cdn1.vip/i/69a1df93c66a2_1772216211.webp',
        'https://img.cdn1.vip/i/699ebebd2e51b_1772011197.webp',
        'https://img.cdn1.vip/i/69a1df425555a_1772216130.webp'
      ],
      'personal-set-2': [
        'https://s2.loli.net/2026/02/02/uOymGHYrfXKgEIV.jpg',
        'https://s2.loli.net/2026/02/02/tTXIo6erY9Ahdyk.jpg',
        'https://s2.loli.net/2026/01/25/J127SlwpWBZviOM.jpg',
        'https://s2.loli.net/2026/01/25/24OmhqIxXsFPLkp.jpg',
        'https://s2.loli.net/2026/01/25/VjaqsuCYdTv5JFL.jpg',
        'https://s2.loli.net/2026/01/25/IPTGe9K2ZSOnhxv.jpg',
        'https://s2.loli.net/2026/01/25/WaYRBUyHP3xwr1D.jpg',
        'https://s2.loli.net/2026/01/25/sxFKdDichwuRa35.jpg',
        'https://s2.loli.net/2026/01/25/Af1yLSp2Ksqvcib.jpg',
        'https://s2.loli.net/2026/01/25/HPyDMIz1g4ZA37n.jpg',
        'https://s2.loli.net/2026/01/25/eWuZD5KwBb2HNIy.jpg',
        'https://s2.loli.net/2026/01/25/tSTsWyoKRbic3I5.jpg',
        'https://s2.loli.net/2026/01/25/8NCMinDx1mSTu96.jpg'
      ],
      'personal-set-3': [
        'https://s2.loli.net/2026/01/25/1Gqa5694gvIRSB8.jpg',
        'https://s2.loli.net/2026/01/25/eHTF7zSQUtWi5uv.jpg',
        'https://s2.loli.net/2026/01/25/u52svHCTj8V1PER.jpg',
        'https://s2.loli.net/2026/01/25/2PoLecsj7E1OZhI.jpg',
        'https://s2.loli.net/2026/02/03/JfP5vUsczWIxmNt.jpg',
        'https://s2.loli.net/2026/01/25/w7LdWobmgkaDGzu.jpg',
        'https://s2.loli.net/2026/01/25/vjN436qlZ8wJKSB.jpg',
        'https://s2.loli.net/2026/01/25/TxesEKiqbNPlXM7.jpg',
        'https://s2.loli.net/2026/01/25/juVg3KNcXdysYQr.jpg',
        'https://s2.loli.net/2026/01/25/As6Wdet9rubxGTV.jpg',
        'https://s2.loli.net/2026/01/25/Uf9qOjbW2IkSvnw.jpg',
        'https://s2.loli.net/2026/01/25/GAH4OMQpobN9TPl.jpg',
        'https://s2.loli.net/2026/01/25/z4RvStYFM1eq28f.jpg',
        'https://s2.loli.net/2026/01/25/KP4eIhpXo8qvy9f.jpg',
        'https://s2.loli.net/2026/01/25/AlmCbzPh3BMjvYg.jpg',
        'https://s2.loli.net/2026/01/25/WF3PaXG2sIcYivB.jpg',
        'https://s2.loli.net/2026/01/25/GBTzJdHVLPWa6C5.jpg',
        'https://s2.loli.net/2026/02/03/RuZFDdmGNTSn2vO.jpg'
      ],
      'personal-set-4': [
        'https://s2.loli.net/2026/02/08/GUI7E5mPqZDWuVT.png',
        'https://s2.loli.net/2026/02/08/UO3Kfm9eFEi5xjn.png', 
        'https://i.ibb.co/4wpWhtpn/IMG-7245.jpg',
        'https://i.ibb.co/r2MvX2wt/IMG-7244.jpg',
        'https://i.ibb.co/8Lq8Tfc1/IMG-7243.jpg',
        'https://s2.loli.net/2026/02/08/cOH2fruynbxkEa8.png',
        'https://s2.loli.net/2026/02/08/9Kdu1oTvjPWHwZO.png',
        'https://s2.loli.net/2026/02/08/wxJ2hBD59AlI6io.png',
        'https://s2.loli.net/2026/02/08/kyZlpHLRxPOtrQ4.png',
        'https://s2.loli.net/2026/02/08/tuV1RWhY9xjbcB4.png',
        'https://s2.loli.net/2026/02/08/wkDJdrRM9hlZqHQ.png',
        'https://i.ibb.co/8LV80g2V/IMG-7250.jpg',
        'https://i.ibb.co/nqBjqCn4/IMG-7249.jpg',
        'https://i.ibb.co/hJqPF93Y/IMG-7248.jpg',
        'https://i.ibb.co/xSMyp29m/IMG-7247.jpg',
        'https://s2.loli.net/2026/02/08/CTpwEz9Ng8jRuP1.png',
        'https://s2.loli.net/2026/02/08/CndVmu3LFGyTfZH.png',
        'https://s2.loli.net/2026/02/08/eVXRTlk9BsPiFGY.png',
        'https://s2.loli.net/2026/02/08/DGJaL8yCkxPsOTw.png',       
        'https://s2.loli.net/2026/02/08/eUFBPkbsR5YVviC.png',
        'https://s2.loli.net/2026/02/08/EqN3DaWCbKY65lc.png',
        'https://s2.loli.net/2026/02/08/8Vy4QIzE5x3pMe7.png',
        'https://s2.loli.net/2026/02/08/mufyxhTMRdP8VAl.png',
        'https://s2.loli.net/2026/02/08/otYd9HjiK1URCkc.png',
        'https://i.ibb.co/JRrdTYHj/IMG-7242.jpg',
        'https://i.ibb.co/ZpkCFyYK/IMG-7241.jpg',
        'https://s2.loli.net/2026/02/08/Ij8vKlhYrEsCH9a.png',
      ],
      'personal-set-5': [
        'https://i.ibb.co/q3jz2zHj/IMG-7215.jpg',
        'https://i.ibb.co/N63ch7Nm/IMG-3098.jpg',
        'https://i.ibb.co/Z1zVttsB/IMG-7220.jpg',
        'https://i.ibb.co/N6c85v5T/IMG-7219.jpg',
        'https://i.ibb.co/RkhT8C2S/IMG-4084.jpg',
        'https://i.ibb.co/8LxgYnd4/IMG-7216.jpg',
        'https://i.ibb.co/8DFZFxqj/IMG-7214.jpg',
        'https://i.ibb.co/wZT5QQtD/IMG-7213.jpg',
        'https://s2.loli.net/2026/02/08/zO18iML7rmAt2EP.png'
      ],
      'personal-set-6': [
        'https://i.ibb.co/HTJc0q5z/IMG-7211.jpg',
        'https://i.ibb.co/jPP9NR6f/IMG-7210.jpg',
        'https://i.ibb.co/Kcw2yc58/IMG-7209.jpg',
        'https://i.ibb.co/1tZHKwMk/IMG-7208.jpg',
        'https://i.ibb.co/k6BXW8M6/IMG-7207.jpg',
        'https://i.ibb.co/d0qjN3fB/IMG-7206.jpg',
        'https://s2.loli.net/2026/02/08/8Y34Pf1icmZ6aWX.png',
        'https://i.ibb.co/PZ9JpXX3/IMG-7205.jpg',
        'https://i.ibb.co/MxBWBnrg/IMG-7204.jpg',
        'https://i.ibb.co/9kR3FZRt/IMG-7203.jpg'
      ],
      'personal-set-7': [
        'https://i.ibb.co/VpShbNQh/IMG-6417.jpg',
        'https://i.ibb.co/b81TxR9/IMG-7161.jpg',
        'https://i.ibb.co/TqFPvhyY/IMG-7155.jpg',
        'https://i.ibb.co/4R35py7W/IMG-7154.jpg',        
        'https://i.ibb.co/Mkp6cpP4/IMG-6416.jpg',
        'https://i.ibb.co/6RvxVGvL/IMG-6415.jpg',
        'https://i.ibb.co/8DhVQL1g/IMG-6414.jpg',
        'https://i.ibb.co/8vQtDBF/IMG-6413.jpg',
        'https://i.ibb.co/gLK3qSz5/IMG-8930.jpg',
        'https://i.ibb.co/xS0n1zq5/IMG-8929.jpg',
        'https://i.ibb.co/WWmfD12Z/IMG-9501.jpg',
        'https://i.ibb.co/C5H1x0gV/IMG-6409.jpg',
        'https://i.ibb.co/SX0NCbyB/IMG-6408.jpg',
        'https://i.ibb.co/8DTCsp8R/IMG-6407.jpg',
        'https://s2.loli.net/2026/02/08/wNUiRCof6vWMcrn.png',
        'https://i.ibb.co/Zzy0tpfV/IMG-7156.jpg'        
      ],
      'personal-set-8': [
        'https://i.ibb.co/sGZZrrK/IMG-5328.jpg',
        'https://i.ibb.co/7tfbYV06/IMG-7142.jpg',
        'https://i.ibb.co/N6SCrQp5/IMG-5327.jpg',
        'https://i.ibb.co/vCs8jFVy/IMG-7143.jpg',        
        'https://i.ibb.co/chBNSCv9/IMG-7141.jpg',
        'https://i.ibb.co/zWvRSJ9Q/IMG-7140.jpg',
        'https://i.ibb.co/nqb2Mp1B/IMG-7149.jpg',
        'https://i.ibb.co/CsJzP3P3/IMG-7148.jpg',
        'https://i.ibb.co/WvrJhZgB/IMG-5329.jpg',
        'https://i.ibb.co/spFkLJqr/IMG-7146.jpg',     
        'https://i.ibb.co/mCqHc0P5/IMG-4573.jpg',
        'https://i.ibb.co/jZMTXxcC/IMG-7150.jpg',
        'https://i.ibb.co/Y4pmvCF3/IMG-5416.jpg',
        'https://i.ibb.co/tPQxYWR2/IMG-7138.jpg',
        'https://i.ibb.co/Zp2xqRLT/IMG-7137.jpg',
        'https://i.ibb.co/jFH8WgR/IMG-7136.jpg',
        'https://i.ibb.co/fY0rzTyr/IMG-5996.jpg',
        'https://i.ibb.co/wZPSFPYT/IMG-7133.jpg',
        'https://i.ibb.co/CKQQbDcg/IMG-7132.jpg',
        'https://i.ibb.co/KjDDM3Kz/IMG-7131.jpg',
        'https://i.ibb.co/5h84bgK2/IMG-7128.jpg',
        'https://i.ibb.co/1fG5f1dP/IMG-7129.jpg',
        'https://i.ibb.co/k6Qm9cYL/IMG-7130.jpg',        
      ],
      'personal-set-9': [
        'https://s2.loli.net/2026/02/05/7xm3c1CzaYeTXyt.png',
        'https://s2.loli.net/2026/02/05/urpyXkRnmb3wC8t.jpg',
        'https://s2.loli.net/2026/02/05/6pHBCXWczPu9edw.jpg',
        'https://s2.loli.net/2026/02/05/AZ2CBhO7fHNlgJ5.jpg',
        'https://s2.loli.net/2026/02/05/IzmVi4vL5EFXafx.png',
        'https://s2.loli.net/2026/02/05/mRILQ4PjxwsNCHh.jpg',
        'https://s2.loli.net/2026/02/05/T8zrcjFsQlGnIvL.jpg',
        'https://s2.loli.net/2026/02/05/biEtqFxWoBd6J53.jpg',
        'https://s2.loli.net/2026/02/05/bwfemaHWn8uAlFN.png',
        'https://s2.loli.net/2026/02/05/ceoRyUAsMDOinGT.jpg',
        'https://s2.loli.net/2026/02/05/lRTpybrELn1CxAM.jpg',
        'https://s2.loli.net/2026/02/05/qf1Ox3lhXzsrBQD.jpg',
        'https://s2.loli.net/2026/02/05/VSOkCLPwGX9jRUY.jpg',
        'https://s2.loli.net/2026/02/05/hFbKweXkfTA52zd.jpg'
      ],
      'personal-set-10': [
        'https://i.ibb.co/0jzjg036/IMG-6146.jpg',
        'https://i.ibb.co/1fN7tVKn/IMG-6147.jpg',
        'https://i.ibb.co/zVMJpR1K/IMG-6148.jpg',
        'https://i.ibb.co/jvcbpMzB/IMG-6998.jpg',
        'https://i.ibb.co/W4swnzVB/IMG-6150.jpg',
        'https://i.ibb.co/YBSMpnPc/IMG-6151.jpg',
        'https://i.ibb.co/nqGnVCjn/IMG-6152.jpg',
        'https://i.ibb.co/nsXwb2Wt/IMG-6153.jpg',
        'https://i.ibb.co/x0NzQJ3/IMG-6154.jpg',
        'https://i.ibb.co/zTX85X6c/IMG-6155.jpg',
        'https://i.ibb.co/vCqmkfw0/IMG-6156.jpg',
        'https://i.ibb.co/gbDHgZ5q/IMG-6157.jpg',
        'https://i.ibb.co/60pm3H4f/IMG-6159.jpg',
        'https://i.ibb.co/CKHgZVhT/IMG-6158.jpg'
      ],
      'personal-set-11': [
        'https://s2.loli.net/2026/02/05/xhHw8Cg9MkPWBEc.png',
        'https://s2.loli.net/2026/02/05/pV5g2nUXSrwtvHC.png',
        'https://s2.loli.net/2026/02/05/mAirXEB3M4uhlyg.jpg',
        'https://s2.loli.net/2026/02/05/tkCPDuF2iJcpSYq.jpg',
        'https://s2.loli.net/2026/02/05/1DpmqsoGScg2ZLy.jpg',
        'https://s2.loli.net/2026/02/05/GO9sKj5WRMYql2U.jpg',
        'https://s2.loli.net/2026/02/05/dSP7N59DakJvKiE.jpg',
        'https://s2.loli.net/2026/02/05/bm4ofWXGPwthlsu.png',
        'https://s2.loli.net/2026/02/05/wiabYh9UWOp6mgq.png',
        'https://s2.loli.net/2026/02/05/Tz637VDb8oY9CFa.png',
        'https://s2.loli.net/2026/02/05/lwvaYfeRSCzG9d2.jpg',
        'https://s2.loli.net/2026/02/05/UbpHvaDnwmXKEWP.jpg',
        'https://s2.loli.net/2026/02/05/sxRVaDtHqSPv8wm.png',
        'https://s2.loli.net/2026/02/05/x8HA1S5WD2maNyM.jpg'
      ],
      'personal-set-12': [
        'https://i.ibb.co/whwbxgWj/IMG-6089.png',
        'https://i.ibb.co/KxsdYPvw/IMG-6083.jpg',
        'https://i.ibb.co/66WTSxn/IMG-6082.jpg',
        'https://i.ibb.co/jjrS0KF/IMG-6081.jpg',
        'https://i.ibb.co/jZDXLc4g/IMG-6080.jpg',
        'https://i.ibb.co/LXqQxrNm/IMG-6079.jpg',
        'https://i.ibb.co/9HTZGfrt/IMG-6078.jpg',
        'https://i.ibb.co/Ldx38Lp1/IMG-6077.png',
        'https://i.ibb.co/xqSsxVQC/IMG-6076.jpg',
        'https://i.ibb.co/pvfhzBmx/IMG-6075.jpg',
        'https://i.ibb.co/xt4tNfQs/IMG-6074.jpg',
        'https://i.ibb.co/TqtxcrYW/IMG-6073.jpg',
        'https://i.ibb.co/675zsb3x/IMG-6072.jpg',
        'https://i.ibb.co/35kjr8Cg/IMG-6071.jpg',
        'https://i.ibb.co/NdXybQqv/IMG-6070.jpg',
        'https://i.ibb.co/JRj2J63V/IMG-6069.jpg'
      ],
      'personal-set-13': [
        'https://i.ibb.co/QF5zY9Qn/IMG-6066.jpg',
        'https://i.ibb.co/TxQ7dxnx/IMG-6065.jpg',
        'https://i.ibb.co/WTdmsSX/IMG-6064.jpg',
        'https://i.ibb.co/KjrF48qt/IMG-6063.jpg',
        'https://i.ibb.co/Mx6mQV2Y/IMG-6062.jpg',
        'https://i.ibb.co/1fJd3WpT/IMG-6061.jpg',
        'https://i.ibb.co/F4Bvz91d/IMG-6060.jpg',
        'https://i.ibb.co/4nmk4Df7/IMG-6059.jpg',
        'https://i.ibb.co/8DXDmfnS/IMG-6058.jpg',
        'https://i.ibb.co/ycthgxVc/IMG-6057.jpg',
        'https://i.ibb.co/GfjpnCJj/IMG-6056.jpg',
        'https://i.ibb.co/hxgNmHSL/IMG-6055.jpg',
        'https://i.ibb.co/hxzvq6Ct/IMG-6054.jpg',
        'https://i.ibb.co/C3rCHcMd/IMG-6053.jpg',
        'https://i.ibb.co/8Lpw5Vxp/IMG-6052.jpg',
        'https://i.ibb.co/ZR9Khhw1/IMG-6051.jpg',
        'https://i.ibb.co/b5rbJvYh/IMG-6050.jpg',
        'https://i.ibb.co/Jj9JF6tn/IMG-6049.jpg',
        'https://i.ibb.co/0yBm7BW7/IMG-6048.jpg',
        'https://i.ibb.co/qYjhZXqw/IMG-6047.jpg',
        'https://i.ibb.co/fYkwpgQ0/IMG-6045.jpg',
        'https://i.ibb.co/5xSg5m7x/IMG-6043.jpg',
        'https://i.ibb.co/Cs51CKPR/IMG-6042.jpg',
        'https://i.ibb.co/3Y9nwn0v/IMG-6041.jpg',
        'https://i.ibb.co/jkKVFv0R/IMG-6040.jpg',
        'https://i.ibb.co/d4FjPYHc/IMG-6039.jpg',
        'https://i.ibb.co/mrF0sThx/IMG-6038.jpg',
        'https://i.ibb.co/9mWtM2kX/IMG-6037.jpg',
        'https://i.ibb.co/HLt1Nzb6/IMG-6036.jpg'
      ],
      'personal-set-14': [
        'https://s2.loli.net/2026/02/05/8GfIgJcoqp2Uaiw.png',
        'https://s2.loli.net/2026/02/05/XkuMVjS5emp6JaZ.jpg',
        'https://s2.loli.net/2026/02/05/f3EqUbmeWa5MsNQ.jpg',
        'https://s2.loli.net/2026/02/05/rXWlI1RyBDH4P6C.jpg',
        'https://s2.loli.net/2026/02/05/SAJrqQB1pPnaRvo.png',
        'https://s2.loli.net/2026/02/05/VsB1JzNQI2HwmiY.png',
        'https://s2.loli.net/2026/02/05/rAd2kq5B8bXlHgt.jpg',
        'https://s2.loli.net/2026/02/05/ZVYh9sxFwBN7TOg.png',
        'https://s2.loli.net/2026/02/05/vWKSp5Y8l6IZx2E.png',
        'https://s2.loli.net/2026/02/05/xuLQanTJR9AwP2I.jpg',
        'https://s2.loli.net/2026/02/05/QKZsOgJbC41RrTV.jpg',
        'https://s2.loli.net/2026/02/05/peNREda5CIiU8kl.jpg',
        'https://s2.loli.net/2026/02/05/SdBrx71iDTIZHhY.jpg',
        'https://s2.loli.net/2026/02/05/SPpCJT6AWkF5ri2.jpg',
        'https://s2.loli.net/2026/02/05/56OvS2dBxjZyVik.jpg',
        'https://s2.loli.net/2026/02/05/W8ewOAqnVJgF3Qy.jpg',
        'https://s2.loli.net/2026/02/05/F7qZfi9TBIHwb8P.jpg'
      ],
      'personal-set-15': [
        'https://i.ibb.co/1GC1Vz12/IMG-7994.jpg',
        'https://i.ibb.co/zHD03D2W/IMG-7995.jpg',
        'https://i.ibb.co/zwfJnf9/IMG-7996.jpg',
        'https://i.ibb.co/mC60dtCH/IMG-7997.jpg',
        'https://i.ibb.co/hxP00y2y/IMG-7998.jpg',
        'https://i.ibb.co/VY01tbz6/IMG-7999.jpg',
        'https://i.ibb.co/xtxTW8tc/IMG-8001.jpg',
        'https://i.ibb.co/kVhpzhzK/IMG-8002.jpg',
        'https://i.ibb.co/5hPzxYCV/IMG-8003.jpg',
        'https://i.ibb.co/gLwTc4D2/IMG-8005.jpg',
        'https://i.ibb.co/WvjHdb35/IMG-8004.jpg',
        'https://i.ibb.co/cKVHh2L0/IMG-8006.jpg',
        'https://i.ibb.co/yBgKGT7t/IMG-8007.jpg',
        'https://i.ibb.co/Ndgk6wkJ/IMG-8008.jpg',
        'https://i.ibb.co/kstvhHs6/IMG-8009.jpg',
        'https://i.ibb.co/60dvVSvZ/IMG-8010.jpg',
        'https://i.ibb.co/ynHC3ngm/IMG-8011.jpg'
      ],
      'personal-set-16': [
        'https://s2.loli.net/2026/02/07/HrVqBxh6Ll4eOcT.png',
        'https://s2.loli.net/2026/02/07/7XtLiP1KVAydzCS.png',
        'https://i.ibb.co/Kj7BwXzk/IMG-7992.jpg',
        'https://i.ibb.co/sdqqGvPW/IMG-7991.jpg',
        'https://i.ibb.co/p64BPg8k/IMG-7989.jpg',
        'https://i.ibb.co/bTHRch3/IMG-7988.jpg',
        'https://i.ibb.co/wFct8JDd/IMG-7986.jpg',
        'https://i.ibb.co/zhccLfdT/IMG-7987.jpg',
        'https://i.ibb.co/G48xjVfY/IMG-7993.jpg',        
        'https://i.ibb.co/mCGhQrQX/IMG-7990.jpg',
        'https://s2.loli.net/2026/02/07/nM2V6rQTEB9SblZ.png',  
      ],
      'personal-set-17': [
        'https://i.ibb.co/3mCsPXw9/IMG-7984.jpg',
        'https://i.ibb.co/fY62ZTMF/IMG-7983.jpg',
        'https://s2.loli.net/2026/02/07/tK4gZinOe1TBwrk.png',
        'https://s2.loli.net/2026/02/07/9o1ygUa4C2jOc6B.png',        
        'https://i.ibb.co/zVDdvMRZ/IMG-7973.jpg',
        'https://i.ibb.co/tpK9H4Br/IMG-7974.jpg',
        'https://i.ibb.co/xKs1T132/IMG-7975.jpg',
        'https://i.ibb.co/d4bZZd6C/IMG-7976.jpg',
        'https://i.ibb.co/ymzX31cT/IMG-7977.jpg',        
        'https://i.ibb.co/q3KMkn0K/IMG-7981.jpg',
        'https://i.ibb.co/wNGJwLGT/IMG-7979.jpg',
        'https://i.ibb.co/5WZC6Gk5/IMG-7980.jpg',
        'https://i.ibb.co/7xp81X8B/IMG-7969.jpg',
        'https://i.ibb.co/xqJ9FY1c/IMG-7982.jpg',
        'https://s2.loli.net/2026/02/07/cvlrneEuFqyatW9.png',
        'https://s2.loli.net/2026/02/07/ICFXT4BzKq9HQWJ.png',
        'https://s2.loli.net/2026/02/07/zcId2rHlbG6qXLC.png',
        'https://s2.loli.net/2026/02/07/GfBNgx27U8mncqs.png',
        'https://s2.loli.net/2026/02/07/9V7Ls1Dtv8NF6U4.png',
        'https://s2.loli.net/2026/02/07/eqOox9t2wKWifkd.png',
        'https://s2.loli.net/2026/02/07/zRsavhYQnV2yKIx.png',
        
      ],
          
      'personal-set-18': [
        'https://s2.loli.net/2026/02/07/vZod3qkHEnXJBwg.png',
        'https://s2.loli.net/2026/02/07/xsbrtiTgGfqEez3.png',    
        'https://i.ibb.co/Z6B1VVjD/IMG-7952.jpg',
        'https://i.ibb.co/KxssSPPt/IMG-7953.jpg',
        'https://i.ibb.co/0RzDfQr9/IMG-7954.jpg',
        'https://i.ibb.co/1S2qPFp/IMG-7962.jpg',
        'https://s2.loli.net/2026/02/07/ATS9KmjLUdNyIzg.png',
        'https://i.ibb.co/pjj3vp8F/IMG-7955.jpg',
        'https://i.ibb.co/yFc1PYrX/IMG-7956.jpg',
        'https://i.ibb.co/LsrP63H/IMG-7958.jpg',
        'https://i.ibb.co/WNnVg2dQ/IMG-7963.jpg',
        'https://i.ibb.co/1HK5tGS/IMG-7957.jpg',
        'https://i.ibb.co/YBsCNr9D/IMG-7961.jpg',
        'https://i.ibb.co/VpjcQmLn/IMG-7959.jpg',
        'https://i.ibb.co/Y4wBsBg8/IMG-7960.jpg', 
        'https://i.ibb.co/4nKMcht8/IMG-7951.jpg',
        'https://s2.loli.net/2026/02/07/iGcjVqJbrKuLXp9.png',
        'https://s2.loli.net/2026/02/07/SPxWboBuwIH452a.png',
        'https://s2.loli.net/2026/02/07/Q57fDECA2xN6pK4.png'
      ],
      'personal-set-19': [
        'https://s2.loli.net/2026/02/07/BQs59AZ7ODitE2d.png',
        'https://i.ibb.co/tTfGymDd/IMG-7940.jpg',
        'https://i.ibb.co/twMBXnNz/IMG-7941.jpg',
        'https://i.ibb.co/Ng0qv9Fc/IMG-7938.jpg',        
        'https://s2.loli.net/2026/02/07/hWtjcOZT6VEIsLu.png',
        'https://i.ibb.co/SXV81MQM/IMG-7944.jpg',
        'https://i.ibb.co/sv2tPLfV/IMG-7947.jpg',
        'https://i.ibb.co/8LBCrckK/IMG-7946.jpg',
        'https://s2.loli.net/2026/02/07/Dqiughc1Wk9P6UR.png',
        'https://s2.loli.net/2026/02/07/3Zawiqzkum4XlVN.png',
        'https://i.ibb.co/CKkS0kn3/IMG-7945.jpg',
        'https://s2.loli.net/2026/02/07/8HgxlGdmKI3uwnq.png',
        'https://i.ibb.co/TDdWZ34k/IMG-7942.jpg',
        'https://i.ibb.co/bMxjfgd4/IMG-7939.jpg',
        'https://s2.loli.net/2026/02/07/2WPhz97E5xSHkeu.png',
        'https://s2.loli.net/2026/02/07/KhWY2txU1zMmo7H.png',
        'https://s2.loli.net/2026/02/07/Qa1CMZd63uq4LBz.png',
        'https://s2.loli.net/2026/02/07/I3SBmH4qlMeYGdz.png',
        'https://s2.loli.net/2026/02/07/Z2lIveTMnNiabm3.png',
        
],
      'personal-set-20': [
        'https://i.ibb.co/HL01VXw2/IMG-4353.jpg',
        'https://i.ibb.co/JWzz3tcB/IMG-7933.jpg',
        'https://i.ibb.co/ksDqC0PJ/IMG-7927.jpg',
        'https://i.ibb.co/kVTgM9Cj/IMG-7928.jpg',
        'https://s2.loli.net/2026/02/07/LyZBgVYx7DbG4ae.png',
        'https://i.ibb.co/hFp2Brwm/IMG-7936.jpg',
        'https://i.ibb.co/SDn0xjz7/IMG-7934.jpg',
        'https://i.ibb.co/qMxHJN7p/IMG-7925.jpg',
        'https://i.ibb.co/pVFcyn1/IMG-7935.jpg',
        'https://i.ibb.co/QvHQmQpV/IMG-7923.jpg',
        'https://i.ibb.co/wZnnHPWD/IMG-7930.jpg',
        'https://s2.loli.net/2026/02/07/GCxzuyPo1peMnT5.png',
        'https://s2.loli.net/2026/02/07/DUlb7QJewh9YKSp.png',
        'https://i.ibb.co/wNW088jj/IMG-7917.jpg',
        'https://s2.loli.net/2026/02/07/ns7S1vDekV4oJUA.png',
        'https://i.ibb.co/KpYG8dqb/IMG-7931.jpg',
        'https://i.ibb.co/rf6SWJdG/IMG-7932.jpg',
            ],
      'personal-set-21': [
        'https://i.ibb.co/mrx71PP1/IMG-7906.jpg',
        'https://i.ibb.co/fd5JNVH0/IMG-7912.jpg',
        'https://i.ibb.co/jPBkg8GL/IMG-7914.jpg',
        'https://i.ibb.co/93ps5mRL/IMG-7914.jpg',
        'https://i.ibb.co/fGNV6TSy/IMG-7914.jpg',
        'https://i.ibb.co/Q3rRrhDX/IMG-7914.jpg',
        'https://i.ibb.co/5WmGbmkL/IMG-7915.jpg',
        'https://i.ibb.co/Tzs2Bcz/IMG-7913.jpg',
        'https://i.ibb.co/jsQB8p7/IMG-7911.jpg',
        'https://i.ibb.co/mFV3HNP2/IMG-7908.jpg',
        'https://i.ibb.co/3m3QswYF/IMG-7909.jpg',
        'https://i.ibb.co/Vp0Nz1Vk/IMG-7910.jpg',
        'https://i.ibb.co/rf7DXbnp/IMG-7916.jpg',
        'https://s2.loli.net/2026/02/07/vzH98U5w3pqGYgX.png',
        'https://s2.loli.net/2026/02/07/CAwSUu4hlJ7crHi.png'
        ],
      'personal-set-22': [
        'https://s2.loli.net/2026/02/07/sXZV9q4Uv2b1jYR.png',
        'https://s2.loli.net/2026/02/07/3qzpARKtwOrkQ26.png',
        'https://s2.loli.net/2026/02/07/412OWEBTC9GRSds.png',
        'https://s2.loli.net/2026/02/07/jAsnNb2Lo46SMWr.png',
        'https://i.ibb.co/V0r169cW/IMG-7896.jpg',
        'https://i.ibb.co/20L0g9y9/IMG-7897.jpg',
        'https://i.ibb.co/My990NFQ/IMG-7900.jpg',
        'https://i.ibb.co/VcBJ1HwW/IMG-7901.jpg',
        'https://i.ibb.co/qYzv03xJ/IMG-7902.jpg',
        'https://i.ibb.co/BVLXszfy/IMG-7903.jpg',
        'https://i.ibb.co/y3hjRcC/IMG-7904.jpg',
        'https://s2.loli.net/2026/02/07/vkAjW4zeiNmM3op.png',
        ],
      'personal-set-23': [
        'https://s2.loli.net/2026/02/07/YqNfVd74EeWIzlr.png',
        'https://s2.loli.net/2026/02/07/Stf94Qejv81cYhx.png',
        'https://s2.loli.net/2026/02/07/alU34Cyc8OKtHn1.png'
        ],
      'personal-set-24': [
        'https://s2.loli.net/2026/02/07/9uyWkC1sYeGcEZO.png',
        'https://s2.loli.net/2026/02/07/1XcP23xoERNnGFd.png',
        'https://s2.loli.net/2026/02/07/7H5Bi94zZSmkVDK.png',
        'https://s2.loli.net/2026/02/07/rueX6sYMlHbFwgV.png',
        'https://s2.loli.net/2026/02/07/GTb6QAghX4vMNxP.png',
        'https://s2.loli.net/2026/02/07/2cCDb47KJLfsTvo.png',
        'https://s2.loli.net/2026/02/07/DA7xRTBpfZdWGuV.png',
        'https://s2.loli.net/2026/02/07/Aq7HldtbBFZ84ch.png',
        'https://s2.loli.net/2026/02/07/WKHhQ5EueqF8d1v.png',
        'https://s2.loli.net/2026/02/07/ilr7Zksh3y2tAcI.png',
        'https://s2.loli.net/2026/02/07/sVkjgPQCHtNUiqF.png'
        ],
      'personal-set-25': [
        'https://s2.loli.net/2026/02/07/UBC81H6sbkDL5Rr.png',
        'https://s2.loli.net/2026/02/07/7mbOnZWEALqRzUC.png',
        'https://s2.loli.net/2026/02/07/TSqvsx9HbRrdjXC.png',
        'https://s2.loli.net/2026/02/07/6PtmXM32fQyH9da.png'
        ],
      'personal-set-26': [
        'https://s2.loli.net/2026/02/07/IBz26PagvEWARsU.png'
        ],
      'personal-set-27': [
        'https://i.ibb.co/GQZtCkjZ/IMG-8066.jpg',
        'https://i.ibb.co/0LzdYXs/IMG-8067.jpg',
        'https://i.ibb.co/bjSYrpmV/IMG-8068.jpg',
        'https://i.ibb.co/rRT19nVQ/IMG-8069.jpg',
        'https://i.ibb.co/jZsXQjYk/IMG-4445.jpg',
        'https://i.ibb.co/1fG4gYJX/IMG-8071.jpg',
        'https://i.ibb.co/3Ymm0T5k/IMG-8072.jpg',
        'https://i.ibb.co/21W8L6jW/IMG-8073.jpg',
        'https://i.ibb.co/chjnxw6j/IMG-8074.jpg',
        'https://i.ibb.co/tSsMTW2/IMG-8075.jpg',
        'https://i.ibb.co/3ys2WGkV/IMG-8076.jpg',
        'https://i.ibb.co/yBMmWnCq/IMG-8077.jpg',
        'https://i.ibb.co/Z1MqyRz9/IMG-8078.jpg',
        'https://i.ibb.co/5hDFQwgB/IMG-8079.jpg',
        'https://i.ibb.co/tTZcPkXz/IMG-8080.jpg',
        'https://i.ibb.co/WWjGfrC4/IMG-8081.jpg'
       ],
      'personal-set-28': [
        'https://img.cdn1.vip/i/69c1467e6b546_1774274174.webp',
        'https://img.cdn1.vip/i/69c3d2a13b368_1774441121.webp',
        'https://img.cdn1.vip/i/69c3d2a9cef62_1774441129.webp',
        'https://img.cdn1.vip/i/69bd60058ceee_1774018565.webp',
        'https://img.cdn1.vip/i/69bd600f4cd4d_1774018575.webp',
        'https://img.cdn1.vip/i/69bd601083b03_1774018576.webp',
        'https://img.cdn1.vip/i/69bd6015b22c7_1774018581.webp',
        'https://img.cdn1.vip/i/69cf709ab81c5_1775202458.webp',
        'https://img.cdn1.vip/i/69cf70a0881a3_1775202464.webp',
        'https://img.cdn1.vip/i/69c3c4b9684a8_1774437561.webp',
        'https://img.cdn1.vip/i/69c3c4b71e74e_1774437559.webp',
        'https://img.cdn1.vip/i/69c3c4b1bc074_1774437553.webp',
        'https://img.cdn1.vip/i/69c3c4aceada0_1774437548.webp',
        'https://img.cdn1.vip/i/69c3c4aa49d10_1774437546.webp',
        'https://img.cdn1.vip/i/69c146f5a4262_1774274293.webp',
        'https://img.cdn1.vip/i/69c146f22397b_1774274290.webp',
        'https://img.cdn1.vip/i/69c146e12ae35_1774274273.webp',
        'https://img.cdn1.vip/i/69c146df94746_1774274271.webp',
        'https://img.cdn1.vip/i/69c3c4bc4e606_1774437564.webp',
        'https://img.cdn1.vip/i/69b27ce3c733c_1773305059.webp',
        'https://img.cdn1.vip/i/69b27cd7b41f2_1773305047.webp',
        'https://img.cdn1.vip/i/69bd601083b03_1774018576.webp',
        'https://img.cdn1.vip/i/69bd6015b22c7_1774018581.webp',
        'https://img.cdn1.vip/i/69b27ce3c733c_1773305059.webp',
        'https://img.cdn1.vip/i/69b27cd7b41f2_1773305047.webp',
        ],
      'personal-set-29': [
        "https://img.cdn1.vip/i/69d9072364f3b_1775830819.webp",
        "https://img.cdn1.vip/i/69d90726d8ad7_1775830822.webp",
        'https://img.cdn1.vip/i/69cfe9340eb1b_1775233332.webp',
        'https://img.cdn1.vip/i/69cfe938a62d2_1775233336.webp',
        'https://img.cdn1.vip/i/69cfe93040ff2_1775233328.webp',
        ],
        // 个人照尾巴

        // 杂志照片
      'magazine-set-1': [
        'https://s2.loli.net/2026/01/25/sdg9ZGuFfJc5Y6N.jpg',
        'https://s2.loli.net/2026/01/25/yFtR6KfxoZTm7wM.jpg',
        'https://s2.loli.net/2026/01/25/fbhsR9ILqZP3KAH.jpg'
        ],
      'magazine-set-2': [
        'https://s2.loli.net/2026/02/04/Nbh47OPmrXGDHj5.png',
        'https://s2.loli.net/2026/02/04/1pMGOexlsS8njhW.png',
        'https://s2.loli.net/2026/02/04/oyuX2gYIszarbTH.png',
        'https://s2.loli.net/2026/02/04/LFbPydIHOaDzhQN.png',
        'https://s2.loli.net/2026/02/04/NGZ7txqYj8HQgoa.png',
        'https://s2.loli.net/2026/02/04/Nl15QX3TnRVOSrP.png',
        'https://s2.loli.net/2026/02/04/l6nwYNkAL7rps1o.png',
        'https://s2.loli.net/2026/02/04/ifz6dB2VKtpxO9L.png',
        'https://s2.loli.net/2026/02/04/jRfd4mklWsTxOAz.png',
        'https://s2.loli.net/2026/02/04/lsC1jKpqu2vS4Td.png',
        'https://s2.loli.net/2026/02/04/B3XPLcklqeh1URF.png'
        ],
      'magazine-set-3': [
        'https://s2.loli.net/2026/02/04/yB2sclM7uDmgWKv.jpg'
        ],
      'magazine-set-4': [
        'https://s2.loli.net/2026/02/04/PWKtu3eElBJYcry.png',
        'https://s2.loli.net/2026/02/04/2GcjBVSXZsInytm.png',
        'https://s2.loli.net/2026/02/04/JiuEfqhRZwxOYIv.png',
        'https://s2.loli.net/2026/02/04/PNMauxWUwQ7SFqX.png',
        'https://s2.loli.net/2026/02/04/fiPsdUQMrJnqtT1.png'
        ],
      'magazine-set-5': [
        'https://s2.loli.net/2026/02/04/mCuPdAvMKjsNnal.png',
        'https://s2.loli.net/2026/02/04/AHZY4PaOrXdeNBi.png'
        ],
      'magazine-set-6': [
        'https://s2.loli.net/2026/02/07/nrOMeFYCBGRcPTA.png',
        'https://s2.loli.net/2026/02/07/KGVrXTNMvu7iZzL.png',
        'https://s2.loli.net/2026/02/07/oqsNnzmM5Ad9ZTk.png',
        'https://s2.loli.net/2026/02/07/AMFjfSy5btJ7KBQ.png',
        'https://s2.loli.net/2026/02/07/hTO8K94roZJudqI.png'
        ],
      'magazine-set-7': [
        'https://s2.loli.net/2026/02/07/WZDUiIfuPoySpeO.png',
        'https://s2.loli.net/2026/02/07/19PChsU8WaFKpmE.png'
        ],
      'magazine-set-8': [
        'https://img.cdn1.vip/i/698f5cb0e432a_1771003056.webp',
        'https://img.cdn1.vip/i/698f5eeb59f41_1771003627.webp',
        'https://img.cdn1.vip/i/698f5b5b9f1eb_1771002715.webp',
        'https://img.cdn1.vip/i/698f5b5b9d91c_1771002715.webp',
        'https://img.cdn1.vip/i/698f5b19ca960_1771002649.webp',
        'https://img.cdn1.vip/i/698f5f42f2f58_1771003714.webp'
        ],
      'magazine-set-9': [
        'https://img.cdn1.vip/i/69a327561f853_1772300118.webp',
        'https://img.cdn1.vip/i/69a3270e01e96_1772300046.webp',
        'https://img.cdn1.vip/i/69a3271d008e4_1772300061.webp',
        'https://img.cdn1.vip/i/69a32714d37bb_1772300052.webp'
        ],
        // 杂志尾巴
      
        // 咪姆照片
      'mimu-set-0': [
        'https://s2.loli.net/2026/02/03/atiylur5RZvNs9K.png'
        ],
      'mimu-set-1': [
        'https://s2.loli.net/2026/01/25/pXZ5rdAtGcOe7a9.jpg',
        'https://s2.loli.net/2026/01/25/8x9tCavqpjSzKod.jpg'
        ],
      'mimu-set-2': [
        'https://s2.loli.net/2026/01/25/c7q1LkihZWAe4Hp.jpg',
        'https://s2.loli.net/2026/01/25/2fqNiPQb4LBO5t8.jpg'
        ],
      'mimu-set-3': [
        'https://s2.loli.net/2026/02/01/AG9MCPQxbv3mfia.jpg',
        'https://s2.loli.net/2026/02/01/3wCJl4GSqLENftm.jpg'
        ],
      'mimu-set-4': [
        'https://s2.loli.net/2026/02/01/gSRBtJxMjKk8hI6.jpg',
        'https://s2.loli.net/2026/02/01/AxbZEYN3avqWhQV.jpg',
        'https://s2.loli.net/2026/02/01/O3Gm9eiDpMjq2rV.jpg',
        'https://s2.loli.net/2026/02/01/jta9Lid1eb2gPIX.jpg',
        'https://s2.loli.net/2026/02/01/s4InHp5EyCW1QJl.jpg'
        ],
      'mimu-set-5': [
        'https://s2.loli.net/2026/02/04/XAbu6NT1cDysQCg.png'
        ],
      'mimu-set-6': [
        'https://s2.loli.net/2026/02/05/4cUxoY1vaSlIdCM.png',
        'https://s2.loli.net/2026/02/05/8kJWalAhOj4zR6F.png',
        'https://s2.loli.net/2026/02/05/LM1vWzVlfkUyhsS.png',
        'https://s2.loli.net/2026/02/05/FCNP8E5e2Vd7utx.png',
        'https://s2.loli.net/2026/02/05/HStVGkbuenoA19x.png',
        'https://s2.loli.net/2026/02/05/erhTICRzE8KuUbA.png',
        'https://s2.loli.net/2026/02/05/PqUHlDk7EmzprVM.png'
        ],
      'mimu-set-7': [
        'https://s2.loli.net/2026/02/05/YJFbeTD58yIEq3o.png',
        'https://s2.loli.net/2026/02/05/waCHVujlBy61nL7.png',
        'https://s2.loli.net/2026/02/05/kGvKmrzA37jMeFI.png'
        ],
      'mimu-set-8': [
        'https://s2.loli.net/2026/02/05/CMBF2aOQbmn8gli.png',
        'https://s2.loli.net/2026/02/05/DoF9wQlMx1Bbf4S.png',
        'https://s2.loli.net/2026/02/05/yQRrPhiXzot1IxM.png',
        'https://s2.loli.net/2026/02/05/DZ4XqVEuAJc5gGn.png'
        ],
      'mimu-set-9': [
        'https://s2.loli.net/2026/02/05/e8OwQSXYkTuL3fA.png',
        'https://s2.loli.net/2026/02/05/kod1mD7UZEbXV8Y.png'
        ],
      'mimu-set-10': [
        'https://s2.loli.net/2026/02/05/qdBUkbeW3m5Knjf.png',
        'https://s2.loli.net/2026/02/05/7VQWIwoL85ksUbT.png'
        ],
      'mimu-set-11': [
        'https://s2.loli.net/2026/02/05/bCUFgf1XS8xksZy.png',
        'https://s2.loli.net/2026/02/05/12fAlbLUtpk5ZGx.png',
        'https://s2.loli.net/2026/02/05/xYITCOX9lyBezWL.png',
        'https://s2.loli.net/2026/02/05/QjOJZqWx5dyo8zU.png',
        'https://s2.loli.net/2026/02/05/gEmh6WQX9RCc3kL.png',
        'https://s2.loli.net/2026/02/05/boWIpa82YL4Stsi.png',
        'https://s2.loli.net/2026/02/05/zRyfd7SmADYsGwa.png'
        ],
      'mimu-set-12': [
        'https://s2.loli.net/2026/02/05/Y5pRr2ILMEoGcFh.png'
        ],
      'mimu-set-13': [
        'https://s2.loli.net/2026/02/05/1p9QbYIxMzDNWgL.png',
        'https://s2.loli.net/2026/02/05/ZqoB9iybAUYTILv.png'
        ],
      'mimu-set-14': [
        'https://s2.loli.net/2026/02/05/1daqhUiVYO2AwFu.png',
        'https://s2.loli.net/2026/02/05/Fe3zvD6MdLWHbCq.png'
        ],
      'mimu-set-15': [
        'https://s2.loli.net/2026/02/05/GvbyEZUQjNihpJs.png',
        'https://s2.loli.net/2026/02/05/vLbmy5whfDtuxAF.png'
        ],
      'mimu-set-16': [
        'https://s2.loli.net/2026/02/05/D9m1pCIFvnqYJow.png',
        'https://s2.loli.net/2026/02/05/JEj6RZVzetkiNQS.png'
        ],
      'mimu-set-17': [
        'https://s2.loli.net/2026/02/05/QrC67jaFDRTKJpz.png',
        'https://s2.loli.net/2026/02/05/Gbznh2EMXAmf1LV.png'
        ],
      'mimu-set-18': [
        'https://s2.loli.net/2026/02/05/miB2r7HSh19jsaN.png'
        ],
      'mimu-set-19': [
        'https://s2.loli.net/2026/02/05/xUaVTXRG9rC7n4S.png',
        'https://s2.loli.net/2026/02/05/IOlbjEzyLT76Bks.png'
        ],
      'mimu-set-20': [
        'https://s2.loli.net/2026/02/05/rpacj6VyD9UBu4o.png',
        'https://s2.loli.net/2026/02/05/JirCK1paPge42Ml.png',
        'https://s2.loli.net/2026/02/05/vkXxYhsuDzWZSyF.png',
        'https://s2.loli.net/2026/02/05/yw2daTvZ8DqUeOQ.png',
        'https://s2.loli.net/2026/02/05/tfov46J9Kcb8SMU.png',
        'https://s2.loli.net/2026/02/05/oz32IR4blDerAtZ.png',
        'https://s2.loli.net/2026/02/05/AmHXg5WC7RNOQ8x.png'
        ],
      'mimu-set-21': [
        'https://s2.loli.net/2026/02/05/PauX4sHpTQIm8SV.png',
        'https://s2.loli.net/2026/02/05/VD3yawG62CjNmr1.png'
      ],
      'mimu-set-22': [
        'https://s2.loli.net/2026/02/05/ua9FnqDwfPAOSlr.png'
      ],
      'mimu-set-23': [
        'https://s2.loli.net/2026/02/05/jRcWJa8247lpNUi.png',
        'https://s2.loli.net/2026/02/05/livOw4RduWIrZbT.png'
      ],
      'mimu-set-24': [
        'https://s2.loli.net/2026/02/05/5DqWmKMJPHfEvLX.png',
        'https://s2.loli.net/2026/02/05/BlhPIUzANwEsY3e.png',
        'https://s2.loli.net/2026/02/05/EBIWAQ1bknvUfKL.png',
        'https://s2.loli.net/2026/02/05/aB8dxiGlnTOV3Io.png',
        'https://s2.loli.net/2026/02/05/WmCtivIRxXzypn6.png'
      ],
      'mimu-set-25': [
        'https://s2.loli.net/2026/02/05/Se2oJQpyE3xThuq.png',
        'https://s2.loli.net/2026/02/05/J6lvzWD1NKekhBb.png'
      ],
      'mimu-set-26': [
        'https://s2.loli.net/2026/02/05/zkbN5f1P48B3Hl2.png',
        'https://s2.loli.net/2026/02/05/ybMO1ARBmHVcFtP.png',
        'https://s2.loli.net/2026/02/05/dQemwZSLViOWhGg.png',
        'https://s2.loli.net/2026/02/05/VUbdEDajp7lkNTC.png',
        'https://s2.loli.net/2026/02/05/CeqS7cWPoXa3jh1.png'
      ],
      'mimu-set-27': [
        'https://img.cdn1.vip/i/698b19f4e8091_1770723828.webp',
        'https://img.cdn1.vip/i/698b1ae56e54d_1770724069.webp',
      ],
      'mimu-set-28': [
        'https://img.cdn1.vip/i/698dc39c3fff4_1770898332.png',
        'https://img.cdn1.vip/i/698dc3e705e5b_1770898407.webp',
      ],
      'mimu-set-29': [
        'https://img.cdn1.vip/i/698dc4a4360b5_1770898596.png',
        'https://img.cdn1.vip/i/698dc4d073459_1770898640.webp',
        'https://img.cdn1.vip/i/698dc4d95f252_1770898649.png',
        'https://img.cdn1.vip/i/698dc4f7846dc_1770898679.png'
      ],
      'mimu-set-30': [
        'https://img.cdn1.vip/i/698dc5893452b_1770898825.png',
        'https://img.cdn1.vip/i/698dc625c6a21_1770898981.webp'
      ],
      'mimu-set-31': [
        'https://img.cdn1.vip/i/698dc679524e9_1770899065.png'
      ],
      'mimu-set-32': [
        'https://img.cdn1.vip/i/698dc6b55562d_1770899125.png',
        'https://img.cdn1.vip/i/698dc6e736389_1770899175.png',
        'https://img.cdn1.vip/i/698dc8eb1cc2f_1770899691.png',
        'https://img.cdn1.vip/i/698dc9510069c_1770899793.png',
        'https://img.cdn1.vip/i/698dc95417284_1770899796.png',
        'https://img.cdn1.vip/i/698dc95aabe6d_1770899802.png'
      ],
      'mimu-set-33': [
        'https://img.cdn1.vip/i/698dcc1f05bcb_1770900511.png',
        'https://img.cdn1.vip/i/698dcc797ad27_1770900601.webp'
      ],
      'mimu-set-34': [
        'https://img.cdn1.vip/i/698dd17f11d64_1770901887.png',
        'https://img.cdn1.vip/i/698dd18b75ae1_1770901899.png',
        'https://img.cdn1.vip/i/698dd19734855_1770901911.png'
      ],
      'mimu-set-35': [
        'https://img.cdn1.vip/i/698dd26a4ae09_1770902122.webp',
        'https://img.cdn1.vip/i/698dd27b9b5c9_1770902139.webp'
      ],
      'mimu-set-36': [
        'https://img.cdn1.vip/i/698dd2ce27533_1770902222.png',
        'https://img.cdn1.vip/i/698dd88e81c18_1770903694.png',
        'https://img.cdn1.vip/i/698dd339be9f7_1770902329.png',
        'https://img.cdn1.vip/i/698dd8d930021_1770903769.png',
        'https://img.cdn1.vip/i/698dd8e20692c_1770903778.png',
        'https://img.cdn1.vip/i/698dd8f175333_1770903793.png',
        'https://img.cdn1.vip/i/698dd906199df_1770903814.webp',
        'https://img.cdn1.vip/i/698dd979dfc34_1770903929.png',
        'https://img.cdn1.vip/i/698dda58477d7_1770904152.png',
        'https://img.cdn1.vip/i/698dda5b62b1e_1770904155.png',
        'https://img.cdn1.vip/i/698dda5eaae69_1770904158.png'
      ],
      'mimu-set-37': [
        'https://img.cdn1.vip/i/698ddb497ed46_1770904393.png',
        'https://img.cdn1.vip/i/698ddb57351a9_1770904407.webp'
      ],
      'mimu-set-37': [
        'https://img.cdn1.vip/i/698ddb497ed46_1770904393.png',
        'https://img.cdn1.vip/i/698ddb57351a9_1770904407.webp'
      ],
      'mimu-set-38': [
        'https://img.cdn1.vip/i/698ddd0ec4e9b_1770904846.png',
        'https://img.cdn1.vip/i/698ddd1ea9fb1_1770904862.png',
        'https://img.cdn1.vip/i/698ddd1ea9fb1_1770904862.png',
        'https://img.cdn1.vip/i/698ddd3ff2548_1770904895.png',
        'https://img.cdn1.vip/i/698ddd487a274_1770904904.png',
        'https://img.cdn1.vip/i/698ddd5324787_1770904915.png',
        'https://img.cdn1.vip/i/698ddd5c57d65_1770904924.png',
        'https://img.cdn1.vip/i/698ddd64afbbf_1770904932.png',
        'https://img.cdn1.vip/i/698de54bdf51f_1770906955.webp',
        'https://img.cdn1.vip/i/698de54e49911_1770906958.webp',
        'https://img.cdn1.vip/i/698ddd8aa2e08_1770904970.png',
        'https://img.cdn1.vip/i/698ddd9852d96_1770904984.png',
        'https://img.cdn1.vip/i/698ddda926242_1770905001.webp',
        'https://img.cdn1.vip/i/698dddb37e210_1770905011.webp',
        'https://img.cdn1.vip/i/698dddbe67738_1770905022.png'
      ],
      'mimu-set-39': [
        'https://img.cdn1.vip/i/699000e36c874_1771045091.webp',
        'https://img.cdn1.vip/i/69900138db916_1771045176.webp',
        'https://img.cdn1.vip/i/699000efc24d2_1771045103.webp',
        'https://img.cdn1.vip/i/69900158a0d3e_1771045208.webp'
      ],
      'mimu-set-40': [
        'https://img.cdn1.vip/i/699c4f2ddcb4e_1771851565.webp',
        'https://img.cdn1.vip/i/699c4f2ff27ca_1771851567.webp',
        'https://img.cdn1.vip/i/699c4f3495b61_1771851572.png'
      ],
      'mimu-set-41': [
        'https://img.cdn1.vip/i/699ebe2155df9_1772011041.webp',
        'https://img.cdn1.vip/i/699ebe10a16bc_1772011024.webp',
        'https://img.cdn1.vip/i/699ebe23ef830_1772011043.webp',
        'https://img.cdn1.vip/i/699ebe1ea9c1d_1772011038.webp'
      ],
      'mimu-set-42': [
        'https://img.cdn1.vip/i/69a8699545df8_1772644757.webp',
        'https://img.cdn1.vip/i/69a869b18a4c3_1772644785.webp',
        'https://img.cdn1.vip/i/69a869ba14be4_1772644794.webp',
        'https://img.cdn1.vip/i/69a869cb2f9b1_1772644811.webp'
      ],
      'mimu-set-43': [
        'https://img.cdn1.vip/i/69c3e49fccede_1774445727.webp',
        'https://img.cdn1.vip/i/69c3e48fccfe3_1774445711.webp',
        'https://img.cdn1.vip/i/69c3e493668cd_1774445715.webp',
        'https://img.cdn1.vip/i/69c3e497a6bee_1774445719.webp'
      ],
      // 咪姆尾巴
    };

    const materialsData = {
      concept: [
        {
          title: "Caligo Pt.2",
          date: "2026-03-23",
          image: "https://img.cdn1.vip/i/69c3c4df4b744_1774437599.webp",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-10",
          imageCount: 5
        },
        {
          title: "PLBBUU",
          date: "2025-11-10",
          image: "https://s2.loli.net/2026/01/25/e3Kz98cW7kmAops.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-8",
          imageCount: 8
        },
        {
          title: "Hide and Seek",
          date: "2025-06-16",
          image: "https://s2.loli.net/2026/01/25/CMv1Z9AoOJHbhLW.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-7",
          imageCount: 10
        },
        {
          title: "亚巡演唱会",
          date: "2025-06-06",
          image: "https://s2.loli.net/2026/02/07/jTwQFVvqL8loUeM.png",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-9",
          imageCount: 5
        },
        {
          title: "Caligo Pt.1",
          date: "2025-02-03",
          image: "https://s2.loli.net/2026/02/03/lukeKtThLRyiG8C.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-5",
          imageCount: 6
        },
        {
          title: "Pump Up The Volume!",
          date: "2024-08-20",
          image: "https://s2.loli.net/2026/02/03/JPCmaMyO4gR7ZD1.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-4",
          imageCount: 2
        },
        {
          title: "ASTERUM : 134-1",
          date: "2024-02-26",
          image: "https://s2.loli.net/2026/02/03/QeniRVp9hXvMa6F.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-3",
          imageCount: 4
        },
        {
          title: "Merry PLLIstmas",
          date: "2023-12-12",
          image: "https://s2.loli.net/2026/02/03/mvFi4npl52ck1TX.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-2",
          imageCount: 1
        },
        {
          title: "第六个夏天",
          date: "2023-08-24",
          image: "https://i.ibb.co/0LzdYXs/IMG-8067.jpg",
          desc: "个人/团体概念照 - BAMBY",
          gallery: "concept-set-6",
          imageCount: 3
        },
        {
          title: "Why?",
          date: "2023-05-25",
          image: "https://img.cdn1.vip/i/69a68a9bb344f_1772522139.webp",
          desc: "个人概念照 - BAMBY",
          gallery: "concept-set-0",
          imageCount: 2
        },
        {
          title: "ASTERUM",
          date: "2023-03-07",
          image: "https://s2.loli.net/2026/01/25/dg7v5itPwUnzmLf.jpg",
          desc: "个人/团体概念照+ MV拍摄现场照 - BAMBY",
          gallery: "concept-set-1",
          imageCount: 5
        }
        
      ],
      photos: [
        {
          title: "Day of Asterum",
          date: "2026-04-04",
          image: "https://img.cdn1.vip/i/69d90755d5724_1775830869.webp",
          desc: "ins官方照片",
          gallery: "photos-set-55",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2026-03-29",
          image: "https://img.cdn1.vip/i/69cf6fa44c209_1775202212.webp",
          desc: "wvs官方照片",
          gallery: "photos-set-54",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2026-03-12",
          image: "https://img.cdn1.vip/i/69b27ce873871_1773305064.webp",
          desc: "wvs官方照片",
          gallery: "photos-set-53",
          imageCount: 2
        },
        {
          title: "Day of Asterum",
          date: "2026-03-03",
          image: "https://img.cdn1.vip/i/69a868f0bc8e0_1772644592.webp",
          desc: "ins官方照片",
          gallery: "photos-set-52",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2026-02-28",
          image: "https://img.cdn1.vip/i/69a328778960c_1772300407.webp",
          desc: "wvs官方照片",
          gallery: "photos-set-51",
          imageCount: 1
        },
        {
          title: "Day of Asterum",
          date: "2026-02-16",
          image: "https://img.cdn1.vip/i/6992bc1dc34c9_1771224093.webp",
          desc: "wvs官方照片",
          gallery: "photos-set-50",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2026-02-14",
          image: "https://img.cdn1.vip/i/6990059ab8a8c_1771046298.webp",
          desc: "ins官方照片",
          gallery: "photos-set-49",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2026-01-31",
          image: "https://s2.loli.net/2026/02/01/XAl482JTyYDVLaF.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-4",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2026-01-30",
          image: "https://s2.loli.net/2026/02/01/Qm2p8seZVEzC6Rj.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-3",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2026-01-27",
          image: "https://s2.loli.net/2026/01/27/LyTodn5UWYj2kr6.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-0",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2025-12-30",
          image: "https://s2.loli.net/2026/01/25/MIfmSEKOt7y6Ghr.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-1",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-12-28",
          image: "https://s2.loli.net/2026/01/25/jSgfpGxNKqluwEH.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-2",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-12-25",
          image: "https://s2.loli.net/2026/02/03/FdUglpVGmkjPOvc.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-5",
          imageCount: 3
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-12-24",
          image: "https://s2.loli.net/2026/02/04/z5snIVC8Wwk32fh.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-18",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-12-23",
          image: "https://s2.loli.net/2026/02/03/7qpSMG2RTxn4Uh6.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-6",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-11-30",
          image: "https://s2.loli.net/2026/02/03/Wia8GlF7jToHPSs.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-7",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2025-11-28",
          image: "https://s2.loli.net/2026/02/03/V2KSRjXeUd3AzqD.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-8",
          imageCount: 6
        },
        {
          title: "Day of Asterum",
          date: "2025-11-26",
          image: "https://s2.loli.net/2026/02/03/EIROHghQKo1jNqY.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-9",
          imageCount: 4
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-11-24",
          image: "https://s2.loli.net/2026/02/07/gxtaFsLH1iAVwIf.png",
          desc: "wvs官方照片",
          gallery: "photos-set-38",
          imageCount: 4
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-11-19",
          image: "https://s2.loli.net/2026/02/08/CXIETf6weSVUBjR.png",
          desc: "ins+twi官方照片",
          gallery: "photos-set-27",
          imageCount: 6
        },
        {
          title: "hanamoney_official",
          date: "2025-11-17",
          image: "https://s2.loli.net/2026/02/04/CnLK1XtBvHf7Jrx.png",
          desc: "ins官方照片",
          gallery: "photos-set-28",
          imageCount: 5
        },
        {
          title: "'PLBBUU' Wallpaper",
          date: "2025-11-16",
          image: "https://s2.loli.net/2026/02/04/DCP8F5bVMOsBoWH.png",
          desc: "wvs官方照片",
          gallery: "photos-set-20",
          imageCount: 2
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-11-14",
          image: "https://s2.loli.net/2026/02/04/omu7LptgxyUjWJA.png",
          desc: "wvs官方照片",
          gallery: "photos-set-21",
          imageCount: 1
        },
        {
          title: "MBC_entertain",
          date: "2025-10-31",
          image: "https://s2.loli.net/2026/02/04/iXuCRb8WPckKAqg.jpg",
          desc: "twi官方照片",
          gallery: "photos-set-19",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2025-10-31",
          image: "https://s2.loli.net/2026/02/03/1SXJUGtIAvyV34Z.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-10",
          imageCount: 2
        },
        {
          title: "Day of Asterum",
          date: "2025-10-30",
          image: "https://s2.loli.net/2026/02/03/ZrgTD9mUnIGvC4B.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-11",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-10-28",
          image: "https://s2.loli.net/2026/02/03/cGHVWxER4g2QtnN.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-12",
          imageCount: 3
        },
        {
          title: "wvs官方照片",
          date: "2025-09-30",
          image: "https://s2.loli.net/2026/02/04/Ncq1MwHkOS52VlA.png",
          desc: "在漫长的捉迷藏尽头 终于找到我的答案 致PLLI 满载着爱",
          gallery: "photos-set-22",
          imageCount: 2
        },
        {
          title: "Day of Asterum",
          date: "2025-09-27",
          image: "https://s2.loli.net/2026/02/04/5uOLRspoPhknyDa.png",
          desc: "ins官方照片",
          gallery: "photos-set-29",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2025-09-25",
          image: "https://s2.loli.net/2026/02/04/cBZt4hnCM3DPdSk.png",
          desc: "ins官方照片",
          gallery: "photos-set-30",
          imageCount: 2
        },
        {
          title: "Day of Asterum",
          date: "2025-09-06",
          image: "https://s2.loli.net/2026/02/04/KUh5JVdl7znTf8a.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-13",
          imageCount: 6
        },
        {
          title: "Day of Asterum",
          date: "2025-08-31",
          image: "https://s2.loli.net/2026/02/04/RjAxPDsSapboFW2.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-14",
          imageCount: 4
        },
        {
          title: "Day of Asterum",
          date: "2025-08-29",
          image: "https://s2.loli.net/2026/02/04/dAwEsrOq8auzZ31.png",
          desc: "ins官方照片",
          gallery: "photos-set-31",
          imageCount: 2
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-08-22",
          image: "https://s2.loli.net/2026/02/04/aSnoMbyezXtL51r.png",
          desc: "wvs官方照片",
          gallery: "photos-set-23",
          imageCount: 3
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-08-19",
          image: "https://s2.loli.net/2026/02/07/FndcTrQZk97RgLN.png",
          desc: "wvs官方照片",
          gallery: "photos-set-39",
          imageCount: 5
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-08-13",
          image: "https://s2.loli.net/2026/02/04/KB16QVpXhdj8o92.png",
          desc: "wvs官方照片",
          gallery: "photos-set-24",
          imageCount: 3
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-08-08",
          image: "https://s2.loli.net/2026/02/07/qOwhJa31f6DlU8t.png",
          desc: "wvs官方照片",
          gallery: "photos-set-36",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2025-08-07",
          image: "https://s2.loli.net/2026/02/07/LUgQ5ZkDAwO1XYu.png",
          desc: "wvs官方照片",
          gallery: "photos-set-40",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2025-07-31",
          image: "https://s2.loli.net/2026/02/04/Earjh1gPDpYT6xk.jpg",
          desc: "ins官方照片",
          gallery: "photos-set-15",
          imageCount: 13
        },
        {
          title: "Day of Asterum",
          date: "2025-07-28",
          image: "https://s2.loli.net/2026/02/04/Q4XnWCJ6HNxesTO.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-16",
          imageCount: 10
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-07-24",
          image: "https://s2.loli.net/2026/02/07/dTFxKVtsDQBAmGX.png",
          desc: "wvs官方照片",
          gallery: "photos-set-37",
          imageCount: 9
        },
        {
          title: "Day of Asterum",
          date: "2025-06-30",
          image: "https://s2.loli.net/2026/02/04/RarSKyiEkILAUVs.jpg",
          desc: "wvs官方照片",
          gallery: "photos-set-17",
          imageCount: 4
        },
        {
          title: "BEHIND PHOTO",
          date: "2025-06-27",
          image: "https://s2.loli.net/2026/02/05/aNcKXRzf2Y5Hk7Z.jpg",
          desc: "wb官方照片",
          gallery: "photos-set-34",
          imageCount: 2
        },
        {
          title: "Day of Asterum",
          date: "2025-06-25",
          image: "https://s2.loli.net/2026/02/05/NGOP8qK4IvkfEWo.png",
          desc: "ins官方照片",
          gallery: "photos-set-33",
          imageCount: 7
        },
        {
          title: "Day of Asterum",
          date: "2025-06-19",
          image: "https://s2.loli.net/2026/02/07/6WpKvHfDNxiVweI.png",
          desc: "wvs官方照片",
          gallery: "photos-set-41",
          imageCount: 1
        },
        {
          title: "Day of Asterum",
          date: "2025-05-30",
          image: "https://s2.loli.net/2026/02/04/COIDgQTZL7VBeEJ.png",
          desc: "wvs官方照片",
          gallery: "photos-set-25",
          imageCount: 3
        },
        {
          title: "Day of Asterum",
          date: "2025-05-07",
          image: "https://s2.loli.net/2026/02/04/U3VERDqyQu1jd5F.png",
          desc: "ins官方照片",
          gallery: "photos-set-32",
          imageCount: 5
        },
        {
          title: "Day of Asterum",
          date: "2025-01-28",
          image: "https://s2.loli.net/2026/02/07/CdhiAxNTyVmqrvZ.png",
          desc: "wvs官方照片",
          gallery: "photos-set-42",
          imageCount: 9
        },
        {
          title: "Day of Asterum",
          date: "2024-12-24",
          image: "https://s2.loli.net/2026/02/07/k8oEILFuVyJseDO.png",
          desc: "ins官方照片",
          gallery: "photos-set-35",
          imageCount: 10
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-12-18",
          image: "https://s2.loli.net/2026/02/04/EJKzXVBZYmruw63.png",
          desc: "wvs官方照片",
          gallery: "photos-set-26",
          imageCount: 8
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-10-14",
          image: "https://s2.loli.net/2026/02/07/MqxUKkDjHBQGNr7.png",
          desc: "wvs官方照片",
          gallery: "photos-set-43",
          imageCount: 10
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-10-10",
          image: "https://s2.loli.net/2026/02/07/iKPjI2mn6zo3hCb.png",
          desc: "wvs官方照片",
          gallery: "photos-set-44",
          imageCount: 8
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-10-07",
          image: "https://s2.loli.net/2026/02/07/g46R8WtJqzbBnPX.png",
          desc: "wvs官方照片",
          gallery: "photos-set-45",
          imageCount: 8
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-10-03",
          image: "https://s2.loli.net/2026/02/07/v1CguR3AEKoQaie.png",
          desc: "wvs官方照片",
          gallery: "photos-set-46",
          imageCount: 5
        },
        {
          title: "BEHIND PHOTO",
          date: "2024-09-30",
          image: "https://s2.loli.net/2026/02/07/sqF1DyKHOl7JtB2.png",
          desc: "wvs官方照片",
          gallery: "photos-set-47",
          imageCount: 4
        },
        {
          title: "1st Anniversary🎉",
          date: "2024-03-12",
          image: "https://s2.loli.net/2026/02/07/9uyWkC1sYeGcEZO.png",
          desc: "wvs官方照片",
          gallery: "photos-set-48",
          imageCount: 1
        },

        
      ],
      "personal-photos": [
        {
          title: "26年4月汇总",
          date: "2026-04",
          image: "https://img.cdn1.vip/i/69d9072364f3b_1775830819.webp",
          desc: "26年4月直播等汇总照片",
          gallery: "personal-set-29",
          imageCount: 5
        },
        {
          title: "26年3月汇总",
          date: "2026-03",
          image: "https://img.cdn1.vip/i/69c1467e6b546_1774274174.webp",
          desc: "26年3月直播等汇总照片",
          gallery: "personal-set-28",
          imageCount: 25
        },
        {
          title: "26年2月汇总",
          date: "2026-02",
          image: "https://img.cdn1.vip/i/6993ff0c8cd42_1771306764.webp",
          desc: "26年2月直播等汇总照片",
          gallery: "personal-set-1",
          imageCount: 13
        },
        {
          title: "26年1月汇总",
          date: "2026-01",
          image: "https://s2.loli.net/2026/02/02/uOymGHYrfXKgEIV.jpg",
          desc: "26年1月直播等汇总照片",
          gallery: "personal-set-2",
          imageCount: 13
        },
        {
          title: "25年12月汇总",
          date: "2025-12",
          image: "https://s2.loli.net/2026/01/25/1Gqa5694gvIRSB8.jpg",
          desc: "25年12月直播等汇总照片",
          gallery: "personal-set-3",
          imageCount: 18
        },
        {
            title: "25年11月汇总",
            date: "2025-11",
            image: "https://s2.loli.net/2026/02/08/GUI7E5mPqZDWuVT.png",
            desc: "25年11月直播等汇总照片",
            gallery: "personal-set-4",
            imageCount: 27
        },
        {
            title: "25年10月汇总",
            date: "2025-10",
            image: "https://i.ibb.co/q3jz2zHj/IMG-7215.jpg",
            desc: "25年10月直播等汇总照片",
            gallery: "personal-set-5",
            imageCount: 9
        },
        {
            title: "25年9月汇总",
            date: "2025-09",
            image: "https://i.ibb.co/HTJc0q5z/IMG-7211.jpg",
            desc: "25年9月直播等汇总照片",
            gallery: "personal-set-6",
            imageCount: 10
        },
        {
            title: "25年8月汇总",
            date: "2025-08",
            image: "https://i.ibb.co/VpShbNQh/IMG-6417.jpg",
            desc: "25年8月直播等汇总照片",
            gallery: "personal-set-7",
            imageCount: 16
        },
        {
            title: "25年7月汇总",
            date: "2025-07",
            image: "https://i.ibb.co/sGZZrrK/IMG-5328.jpg",
            desc: "25年7月直播等汇总照片",
            gallery: "personal-set-8",
            imageCount: 23
        },
        {
            title: "25年6月汇总",
            date: "2025-06",
            image: "https://s2.loli.net/2026/02/05/7xm3c1CzaYeTXyt.png",
            desc: "25年6月直播等汇总照片",
            gallery: "personal-set-9",
            imageCount: 14
        },
        {
            title: "25年5月汇总",
            date: "2025-05",
            image: "https://i.ibb.co/0jzjg036/IMG-6146.jpg",
            desc: "25年5月直播等汇总照片",
            gallery: "personal-set-10",
            imageCount: 14
        },
        {
            title: "25年4月汇总",
            date: "2025-04",
            image: "https://s2.loli.net/2026/02/05/xhHw8Cg9MkPWBEc.png",
            desc: "25年4月直播等汇总照片",
            gallery: "personal-set-11",
            imageCount: 14
        },
        {
            title: "25年3月汇总",
            date: "2025-03",
            image: "https://i.ibb.co/whwbxgWj/IMG-6089.png",
            desc: "25年3月直播等汇总照片",
            gallery: "personal-set-12",
            imageCount: 16
        },
        {
            title: "25年2月汇总",
            date: "2025-02",
            image: "https://i.ibb.co/QF5zY9Qn/IMG-6066.jpg",
            desc: "25年2月直播等汇总照片",
            gallery: "personal-set-13",
            imageCount: 29
        },
        {
            title: "25年1月汇总",
            date: "2025-01",
            image: "https://s2.loli.net/2026/02/05/8GfIgJcoqp2Uaiw.png",
            desc: "25年1月直播等汇总照片",
            gallery: "personal-set-14",
            imageCount: 17
        },
        {
            title: "24年12月汇总",
            date: "2024-12",
            image: "https://i.ibb.co/1GC1Vz12/IMG-7994.jpg",
            desc: "24年12月直播等汇总照片",
            gallery: "personal-set-15",
            imageCount: 17
        },
        {
            title: "24年11月汇总",
            date: "2024-11",
            image: "https://s2.loli.net/2026/02/07/HrVqBxh6Ll4eOcT.png",
            desc: "24年11月直播等汇总照片",
            gallery: "personal-set-16",
            imageCount: 11
        },
    {
            title: "24年10月汇总",
            date: "2024-10",
            image: "https://i.ibb.co/3mCsPXw9/IMG-7984.jpg",
            desc: "24年10月直播等汇总照片",
            gallery: "personal-set-17",
            imageCount: 21
        },
        {
            title: "24年9月汇总",
            date: "2024-09",
            image: "https://s2.loli.net/2026/02/07/vZod3qkHEnXJBwg.png",
            desc: "24年9月直播等汇总照片",
            gallery: "personal-set-18",
            imageCount: 19
        },
        {
            title: "24年8月汇总",
            date: "2024-08",
            image: "https://s2.loli.net/2026/02/07/BQs59AZ7ODitE2d.png",
            desc: "24年8月直播等汇总照片",
            gallery: "personal-set-19",
            imageCount: 19
        },
        {
            title: "24年7月汇总",
            date: "2024-07",
            image: "https://i.ibb.co/HL01VXw2/IMG-4353.jpg",
            desc: "24年7月直播等汇总照片",
            gallery: "personal-set-20",
            imageCount: 17
        },
        {
            title: "24年6月汇总",
            date: "2024-06",
            image: "https://i.ibb.co/mrx71PP1/IMG-7906.jpg",
            desc: "24年6月直播等汇总照片",
            gallery: "personal-set-21",
            imageCount: 15
        },
        {
            title: "24年5月汇总",
            date: "2024-05",
            image: "https://s2.loli.net/2026/02/07/sXZV9q4Uv2b1jYR.png",
            desc: "24年5月直播等汇总照片",
            gallery: "personal-set-22",
            imageCount: 12
        },
        {
            title: "24年4月汇总",
            date: "2024-04",
            image: "https://s2.loli.net/2026/02/07/YqNfVd74EeWIzlr.png",
            desc: "24年4月直播等汇总照片",
            gallery: "personal-set-23",
            imageCount: 3
        },
        {
            title: "24年3月汇总",
            date: "2024-03",
            image: "https://s2.loli.net/2026/02/07/9uyWkC1sYeGcEZO.png",
            desc: "24年3月直播等汇总照片",
            gallery: "personal-set-24",
            imageCount: 11
        },
        {
            title: "24年2月汇总",
            date: "2024-02",
            image: "https://s2.loli.net/2026/02/07/UBC81H6sbkDL5Rr.png",
            desc: "24年2月直播等汇总照片",
            gallery: "personal-set-25",
            imageCount: 4
        },
        {
            title: "24年1月汇总",
            date: "2024-01",
            image: "https://s2.loli.net/2026/02/07/IBz26PagvEWARsU.png",
            desc: "24年1月直播等汇总照片",
            gallery: "personal-set-26",
            imageCount: 1
        },
        {
            title: "23年汇总",
            date: "2023-12",
            image: "https://i.ibb.co/GQZtCkjZ/IMG-8066.jpg",
            desc: "23年直播等汇总照片",
            gallery: "personal-set-27",
            imageCount: 16
        }
      ],
      magazine: [
        {
          title: "Cosmo Korea杂志",
          date: "2026-01-13",
          image: "https://s2.loli.net/2026/01/25/sdg9ZGuFfJc5Y6N.jpg",
          desc: "封面/内页/相关图片",
          gallery: "magazine-set-1",
          imageCount: 3
        },
        {
          title: "anan杂志",
          date: "2025-09-26",
          image: "https://img.cdn1.vip/i/698f5cb0e432a_1771003056.webp",
          desc: "封面/内页/相关图片",
          gallery: "magazine-set-8",
          imageCount: 6
        },
        {
          title: "日杂韓流ぴあ杂志",
          date: "2025-09-17",
          image: "https://s2.loli.net/2026/02/04/yB2sclM7uDmgWKv.jpg",
          desc: "封面",
          gallery: "magazine-set-3",
          imageCount: 1
        },
        {
          title: "COSMOPOLITAN杂志",
          date: "2025-01-20",
          image: "https://s2.loli.net/2026/02/04/PWKtu3eElBJYcry.png",
          desc: "封面/内页/相关图片",
          gallery: "magazine-set-4",
          imageCount: 5
        },
        {
          title: "anan杂志",
          date: "2024-12-03",
          image: "https://s2.loli.net/2026/02/04/Nbh47OPmrXGDHj5.png",
          desc: "封面/内页/相关图片",
          gallery: "magazine-set-2",
          imageCount: 11
        },
        {
          title: "anan杂志",
          date: "2024-11-30",
          image: "https://s2.loli.net/2026/02/04/mCuPdAvMKjsNnal.png",
          desc: "封面",
          gallery: "magazine-set-5",
          imageCount: 2
        },
        {
          title: "Weverse杂志",
          date: "2024-10-21",
          image: "https://img.cdn1.vip/i/69a327561f853_1772300118.webp",
          desc: "虚拟专题/相关采访",
          gallery: "magazine-set-9",
          imageCount: 4
        },
        {
          title: "Weverse杂志",
          date: "2024-04-22",
          image: "https://s2.loli.net/2026/02/07/nrOMeFYCBGRcPTA.png",
          desc: "封面/内页/相关采访",
          gallery: "magazine-set-6",
          imageCount: 5
        },
        {
          title: "Weverse杂志",
          date: "2024-03-08",
          image: "https://s2.loli.net/2026/02/07/WZDUiIfuPoySpeO.png",
          desc: "封面/相关采访",
          gallery: "magazine-set-7",
          imageCount: 2
        }
      ],
      "personal-mimu": [
        {
          title: "咪木日记",
          date: "2026-02-10",
          image: "https://img.cdn1.vip/i/699000e36c874_1771045091.webp",
          desc: "宝宝起源介绍 cr:salinepool",
          gallery: "mimu-set-39",
          imageCount: 4
        },
        {
          title: "4月壁纸",
          date: "2026-03-25",
          image: "https://img.cdn1.vip/i/69c3e49fccede_1774445727.webp",
          desc: "咪木壁纸",
          gallery: "mimu-set-43",
          imageCount: 4
        },
        {
          title: "咪木日记",
          date: "2026-03-04",
          image: "https://img.cdn1.vip/i/69a8699545df8_1772644757.webp",
          desc: "Ep.14 泡泡",
          gallery: "mimu-set-42",
          imageCount: 4
        },
        {
          title: "3月壁纸",
          date: "2026-02-25",
          image: "https://img.cdn1.vip/i/699ebe2155df9_1772011041.webp",
          desc: "咪木壁纸",
          gallery: "mimu-set-41",
          imageCount: 4
        },
        {
          title: "咪木日记",
          date: "2026-02-23",
          image: "https://img.cdn1.vip/i/699c4f2ddcb4e_1771851565.webp",
          desc: "baby咪姆变回原始形态",
          gallery: "mimu-set-40",
          imageCount: 3
        },
        {
          title: "咪木日记",
          date: "2026-02-10",
          image: "https://img.cdn1.vip/i/698b19f4e8091_1770723828.webp",
          desc: "祝小寿星生日快乐",
          gallery: "mimu-set-27",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2026-01-30",
          image: "https://s2.loli.net/2026/02/01/gSRBtJxMjKk8hI6.jpg",
          desc: "宝宝咪木的诞生",
          gallery: "mimu-set-4",
          imageCount: 5
        },
        {
          title: "2月壁纸",
          date: "2026-01-29",
          image: "https://s2.loli.net/2026/02/01/AG9MCPQxbv3mfia.jpg",
          desc: "咪木壁纸",
          gallery: "mimu-set-3",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2026-01-07",
          image: "https://s2.loli.net/2026/02/03/atiylur5RZvNs9K.png",
          desc: "#压制靠气势",
          gallery: "mimu-set-0",
          imageCount: 1
        },
        {
          title: "1月壁纸",
          date: "2025-12-30",
          image: "https://s2.loli.net/2026/01/25/pXZ5rdAtGcOe7a9.jpg",
          desc: "咪木壁纸",
          gallery: "mimu-set-1",
          imageCount: 2
        },
        {
          title: "圣诞壁纸",
          date: "2025-12-25",
          image: "https://s2.loli.net/2026/01/25/c7q1LkihZWAe4Hp.jpg",
          desc: "圣诞特别壁纸",
          gallery: "mimu-set-2",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-12-17",
          image: "https://s2.loli.net/2026/02/05/4cUxoY1vaSlIdCM.png",
          desc: "Ep.12 健美操",
          gallery: "mimu-set-6",
          imageCount: 7
        },
        {
          title: "咪木日记",
          date: "2025-12-03",
          image: "https://s2.loli.net/2026/02/05/YJFbeTD58yIEq3o.png",
          desc: "Ep.11 消失物品的房间…！",
          gallery: "mimu-set-7",
          imageCount: 3
        },
        {
          title: "12月壁纸",
          date: "2025-11-26",
          image: "https://s2.loli.net/2026/02/05/CMBF2aOQbmn8gli.png",
          desc: "咪木壁纸",
          gallery: "mimu-set-8",
          imageCount: 4
        },
        {
          title: "Terra的征服之旅",
          date: "2025-11-18",
          image: "https://s2.loli.net/2026/02/05/e8OwQSXYkTuL3fA.png",
          desc: "首尔",
          gallery: "mimu-set-9",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-11-12",
          image: "https://s2.loli.net/2026/02/05/qdBUkbeW3m5Knjf.png",
          desc: "M生大危机",
          gallery: "mimu-set-10",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-11-12",
          image: "https://s2.loli.net/2026/02/05/Y5pRr2ILMEoGcFh.png",
          desc: "圆润小咪",
          gallery: "mimu-set-12",
          imageCount: 1
        },
        {
          title: "咪木日记",
          date: "2025-11-05",
          image: "https://s2.loli.net/2026/02/05/bCUFgf1XS8xksZy.png",
          desc: "Ep.10 不要忘记生命可贵🍀",
          gallery: "mimu-set-11",
          imageCount: 7
        },
        {
          title: "咪木日记",
          date: "2025-11-01",
          image: "https://s2.loli.net/2026/02/05/1p9QbYIxMzDNWgL.png",
          desc: "祝小寿星生日快乐",
          gallery: "mimu-set-13",
          imageCount: 2
        },
        {
          title: "Terra的征服之旅",
          date: "2025-10-31",
          image: "https://s2.loli.net/2026/02/05/1daqhUiVYO2AwFu.png",
          desc: "东京",
          gallery: "mimu-set-14",
          imageCount: 2
        },
        {
          title: "11月壁纸",
          date: "2025-10-28",
          image: "https://s2.loli.net/2026/02/05/GvbyEZUQjNihpJs.png",
          desc: "咪木壁纸",
          gallery: "mimu-set-15",
          imageCount: 2
        },
        {
          title: "Terra的征服之旅",
          date: "2025-10-23",
          image: "https://s2.loli.net/2026/02/05/D9m1pCIFvnqYJow.png",
          desc: "曼谷",
          gallery: "mimu-set-16",
          imageCount: 2
        },
        {
          title: "Terra的征服之旅",
          date: "2025-10-16",
          image: "https://s2.loli.net/2026/02/05/QrC67jaFDRTKJpz.png",
          desc: "雅加达",
          gallery: "mimu-set-17",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-11-01",
          image: "https://s2.loli.net/2026/02/05/miB2r7HSh19jsaN.png",
          desc: "咪姆挖土时用的粉色铲子～",
          gallery: "mimu-set-18",
          imageCount: 1
        },
        {
          title: "中秋贺图",
          date: "2025-12-25",
          image: "https://s2.loli.net/2026/02/05/xUaVTXRG9rC7n4S.png",
          desc: "中秋特别壁纸",
          gallery: "mimu-set-19",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-10-01",
          image: "https://s2.loli.net/2026/02/05/rpacj6VyD9UBu4o.png",
          desc: "Ep.9 睡觉也会遇见🐳💤",
          gallery: "mimu-set-20",
          imageCount: 7
        },
        {
          title: "Terra的征服之旅",
          date: "2025-09-29",
          image: "https://s2.loli.net/2026/02/05/PauX4sHpTQIm8SV.png",
          desc: "香港",
          gallery: "mimu-set-21",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-09-17",
          image: "https://img.cdn1.vip/i/698ddd0ec4e9b_1770904846.png",
          desc: "Ep.8 野餐",
          gallery: "mimu-set-38",
          imageCount: 15
        },
        {
          title: "咪木日记",
          date: "2025-09-12",
          image: "https://img.cdn1.vip/i/698ddb497ed46_1770904393.png",
          desc: "祝小寿星生日快乐",
          gallery: "mimu-set-37",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-09-10",
          image: "https://s2.loli.net/2026/02/05/ua9FnqDwfPAOSlr.png",
          desc: "超级咪木踢！",
          gallery: "mimu-set-22",
          imageCount: 1
        },
        {
          title: "咪木日记",
          date: "2025-09-03",
          image: "https://img.cdn1.vip/i/698dd2ce27533_1770902222.png",
          desc: "Ep.6 和睦相处",
          gallery: "mimu-set-36",
          imageCount: 11
        },
        {
          title: "25年9月壁纸",
          date: "2025-08-27",
          image: "https://img.cdn1.vip/i/698dd26a4ae09_1770902122.webp",
          desc: "咪木壁纸",
          gallery: "mimu-set-35",
          imageCount: 2
        },
        {
          title: "Terra的征服之旅",
          date: "2025-08-21",
          image: "https://s2.loli.net/2026/02/05/jRcWJa8247lpNUi.png",
          desc: "台北",
          gallery: "mimu-set-23",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-08-20",
          image: "https://img.cdn1.vip/i/698dd17f11d64_1770901887.png",
          desc: "Ep.6 哥哥",
          gallery: "mimu-set-34",
          imageCount: 3
        },
        {
          title: "咪木日记",
          date: "2025-08-06",
          image: "https://s2.loli.net/2026/02/05/5DqWmKMJPHfEvLX.png",
          desc: "Ep.5 吃凉的食物时小心拉肚子🧊 🍨",
          gallery: "mimu-set-24",
          imageCount: 5
        },
        {
          title: "25年8月壁纸",
          date: "2025-07-31",
          image: "https://img.cdn1.vip/i/698dcc1f05bcb_1770900511.png",
          desc: "咪木壁纸",
          gallery: "mimu-set-33",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-07-23",
          image: "https://s2.loli.net/2026/02/04/XAbu6NT1cDysQCg.png",
          desc: "初稿",
          gallery: "mimu-set-5",
          imageCount: 1
        },
        {
          title: "咪木日记",
          date: "2025-07-23",
          image: "https://img.cdn1.vip/i/698dc6b55562d_1770899125.png",
          desc: "Ep.4 被魔法变成圆滚滚的으에이우",
          gallery: "mimu-set-32",
          imageCount: 6
        },
        {
          title: "咪木日记",
          date: "2025-07-15",
          image: "https://s2.loli.net/2026/02/05/Se2oJQpyE3xThuq.png",
          desc: "生日快乐呀比ki嗒～",
          gallery: "mimu-set-25",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-06-25",
          image: "https://img.cdn1.vip/i/698dc679524e9_1770899065.png",
          desc: "特别篇",
          gallery: "mimu-set-31",
          imageCount: 1
        },
        {
          title: "咪木日记",
          date: "2025-06-19",
          image: "https://img.cdn1.vip/i/698dc5893452b_1770898825.png",
          desc: "PLLI两岁生日快乐🎂！",
          gallery: "mimu-set-30",
          imageCount: 2
        },
        {
          title: "咪木日记",
          date: "2025-06-11",
          image: "https://s2.loli.net/2026/02/05/zkbN5f1P48B3Hl2.png",
          desc: "Ep.2 噌噌",
          gallery: "mimu-set-26",
          imageCount: 5
        },
        {
          title: "咪木日记",
          date: "2025-06-04",
          image: "https://img.cdn1.vip/i/698dc4a4360b5_1770898596.png",
          desc: "Ep.1 桌上管理",
          gallery: "mimu-set-29",
          imageCount: 4
        },
        {
          title: "咪木日记",
          date: "2025-05-31",
          image: "https://img.cdn1.vip/i/698dc39c3fff4_1770898332.png",
          desc: "✨Welcome to Terra, MMMM!✨",
          gallery: "mimu-set-28",
          imageCount: 2
        }
      ]
    };

const danceChallengeData = [
  {
    title: "Get ready for 'Born Savage' 😈",
    date: "2026-04-09",
    image: "https://img.cdn1.vip/i/69d904a517c0f_1775830181.webp", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: "https://weibo.com/7825391749/QA1127VEg",
      bilibili: "https://www.bilibili.com/video/BV1eUDsBWEbv/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "HMPH! 想跟我一起唱吗?🎤🎶",
    date: "2026-04-06",
    image: "https://img.cdn1.vip/i/69d90435768a1_1775830069.webp", 
    desc: "💗",
    links: {
      weibo: "https://weibo.com/7825391749/Qz8C12ooZ",
      bilibili: "https://www.bilibili.com/video/BV11vSoBbE9g/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "HMPH! 🌸🎶",
    date: "2026-04-03",
    image: "https://img.cdn1.vip/i/69d903e9d5e27_1775829993.webp", 
    desc: "💗",
    links: {
      weibo: "https://weibo.com/7825391749/QyQ2ZCcWM",
      bilibili: "https://www.bilibili.com/video/BV1Xu93BWEkf/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Visual Sampler B : BAMBY",
    date: "2026-04-01",
    image: "https://img.cdn1.vip/i/69d903a5d8efb_1775829925.webp", 
    desc: "💗",
    links: {
      weibo: "https://weibo.com/7825391749/QyQ2ZCcWM",
      bilibili: "https://www.bilibili.com/video/BV1ie9jBkESk/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Visual Sampler A : BAMBY",
    date: "2026-03-26",
    image: "https://img.cdn1.vip/i/69d902a5a52b6_1775829669.webp", 
    desc: "💗",
    links: {
      weibo: "https://weibo.com/7825391749/QxVo88Iz2",
      bilibili: "https://www.bilibili.com/video/BV1wKXpBAEgS/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "💪👔🕶️",
    date: "2026-03-09",
    image: "https://img.cdn1.vip/i/69b27f1913abe_1773305625.webp", 
    desc: "💜💗🖤",
    links: {
      weibo: "https://weibo.com/7825391749/Qvj9OwmEe",
      bilibili: "https://www.bilibili.com/video/BV1D4PSzQEYw/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "PLLI！抱抱我 ❣",
    date: "2026-03-06",
    image: "https://img.cdn1.vip/i/69aacf9949d2e_1772801945.webp", 
    desc: "💙💗",
    links: {
      weibo: "https://weibo.com/7825391749/QuQSydV6C",
      bilibili: "https://www.bilibili.com/video/BV1vuPpzJE6r/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Let's 😎🤟",
    date: "2026-03-02",
    image: "https://img.cdn1.vip/i/69b27eb911088_1773305529.webp", 
    desc: "💜💗",
    links: {
      weibo: "https://weibo.com/7825391749/QucpU6NKI",
      bilibili: "https://www.bilibili.com/video/BV1bZPuzuEom/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "☝️🔄🕺🕺",
    date: "2026-02-27",
    image: "https://img.cdn1.vip/i/69a1deb54e3ac_1772215989.webp", 
    desc: "💗🖤",
    links: {
      weibo: "https://weibo.com/7825391749/QtMT6tVsk",
      bilibili: "https://www.bilibili.com/video/BV1HaA2zZEuV/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "YATAZ 偶尔（❓）吵吵闹闹 🩷❤️",
    date: "2026-02-14",
    image: "https://img.cdn1.vip/i/698ffbac235a1_1771043756.webp", 
    desc: "💗❤️",
    links: {
      weibo: "https://weibo.com/7825391749/QrLzNFejL",
      bilibili: "https://www.bilibili.com/video/BV1Ljc7zbE7q/?spm_id_from=333.337.search-card.all.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "🔴+⚪= BAMBY 🩷",
    date: "2026-02-08",
    image: "https://s2.loli.net/2026/02/08/GMhqfzHCnE9Yd1k.png", 
    desc: "💗",
    links: {
      weibo: "https://weibo.com/7825391749/QqR1blNAL",
      bilibili: "https://www.bilibili.com/video/BV1VuFzzSErM/?spm_id_from=333.337.search-card.all.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Love Love Love ·°♡",
    date: "2026-02-01",
    image: "https://s2.loli.net/2026/02/02/8ljMzvVaDhcRfeK.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: "https://weibo.com/7825391749/QoJqcjLbX",
      bilibili: "https://www.bilibili.com/video/BV1cK6yBbEWa/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "Ooh-ah-ah 💨",
    date: "2026-01-25",
    image: "https://s2.loli.net/2026/02/01/QdVU4Wb9Jx61kfC.jpg", 
    desc: "💗❤️",
    links: {
      weibo: "https://weibo.com/7825391749/QoJqcjLbX",
      bilibili: "https://www.bilibili.com/video/BV1eWzKBBEKx/?spm_id_from=333.1387.homepage.video_card.click"
    }
  },
  {
    title: "Who’s got my hat? 🧢",
    date: "2026-01-17",
    image: "https://s2.loli.net/2026/02/01/Pe2tsYbGqQBLaIu.jpg", 
    desc: "💜💗",
    links: {
      weibo: "https://weibo.com/7825391749/QnvBSq6qa",
      bilibili: "https://www.bilibili.com/video/BV1hurkBrEXL/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "🕶️🔥",
    date: "2026-01-14",
    image: "https://s2.loli.net/2026/02/01/Pldk7ZSXxUqQ16L.jpg", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Qn66jqSUt',
      bilibili: "https://www.bilibili.com/video/BV1QYrpBWEmW/?spm_id_from=333.1387.collection.video_card.click"
    }
  },
  {
    title: "Boom shakalaka 🎶",
    date: "2026-01-13",
    image: "https://s2.loli.net/2026/02/01/2GNZ8J3XqIxb4sK.jpg", 
    desc: "💙💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QmWg1pVWD',
      bilibili: "https://www.bilibili.com/video/BV1XPr6BTEHk/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "X-mas 🎅🏻💗🖤",
    date: "2025-12-25",
    image: "https://s2.loli.net/2026/02/01/O4jv3m2IMHnNxwZ.jpg", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Qk1FeERMi',
      bilibili: "https://www.bilibili.com/video/BV14MB7BsEXp/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "PLLI L-O-V-E 🎁",
    date: "2025-12-25",
    image: "https://s2.loli.net/2026/02/01/9QMXR6isJhCUnfV.jpg", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Qk0Ms5NOZ',
      bilibili: "https://www.bilibili.com/video/BV1zBB5BTEmW/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "𝙅𝙞𝙣𝙜𝙡𝙚 𝘽𝙚𝙡𝙡 𝙍𝙤𝙘𝙠 🔔❄️",
    date: "2025-12-22",
    image: "https://s2.loli.net/2026/02/01/Or7s9gIw6cPvCfl.jpg", 
    desc: "💙💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QjAR5hKjL',
      bilibili: "https://www.bilibili.com/video/BV1vPBWBHEnK/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "˗ˏˋ Opalite ˎˊ˗",
    date: "2025-12-09",
    image: "https://s2.loli.net/2026/02/01/edt7VuEgT5MrnRa.jpg", 
    desc: "💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QhCiDdMNc',
      bilibili: "https://www.bilibili.com/video/BV1di2DBXEo1/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "《Theater》challenge with BAMBY",
    date: "2025-12-04",
    image: "https://img.cdn1.vip/i/69aaeb4743610_1772809031.webp", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/5143372154/QgRX5ET1P',
      ins: "https://www.instagram.com/reel/DR1rGGOD-Ko/?igsh=b3FwaTJhdHR3cHlt"
    }
  },
  {
    title: "Just Dance 🤩🕺🎶",
    date: "2025-12-03",
    image: "https://s2.loli.net/2026/02/01/WOisKIVx5PMhoAf.jpg", 
    desc: "💜💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/QgHJF06rY',
      bilibili: "https://www.bilibili.com/video/BV171SaB1Ehk/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "和andTEAM FUMA前辈一起BBUU! 😚",
    date: "2025-12-02",
    image: "https://s2.loli.net/2026/02/01/Wx1RT9c4Qe6KMg8.jpg", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QgyTGqV84',
      bilibili: "https://www.bilibili.com/video/BV1pzSpBfEBp/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "deugeundeusi💥",
    date: "2025-12-02",
    image: "https://s2.loli.net/2026/02/01/eFAd3laoWREqyZH.jpg", 
    desc: "💙💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Qgyj9ywkJ',
      bilibili: "https://www.bilibili.com/video/BV1uUSWBrEPw/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "𝟏,𝟐,𝟑,𝟒 ♡ 𝒲𝒽𝒶𝓉 𝒾𝓈 𝐿𝑜𝓋𝑒 ♡",
    date: "2025-12-01",
    image: "https://s2.loli.net/2026/02/01/JTDh7iGKfqMBEIw.jpg", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/QgoSED4EQ',
      bilibili: "https://www.bilibili.com/video/BV1DSSqB7E7f/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "BBUU! Outfit Change 🧣🎀",
    date: "2025-11-27",
    image: "https://s2.loli.net/2026/02/01/8Y4hHalDtC3FkzM.jpg", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QfNgKyHi6',
      bilibili: "https://www.bilibili.com/video/BV1hiSMBeEJe/?spm_id_from=333.1387.collection.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "我们俩一起 BBUU! (˶˃ ᵕ ˂˶) S2 (˶˃ ᵕ ˂˶)",
    date: "2025-11-17",
    image: "https://s2.loli.net/2026/02/01/v1FdVL35rAW7ZYb.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/QefIVewS2',
      bilibili: "https://www.bilibili.com/video/BV1kKCYB6E9v/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "BBUU 🎺💗",
    date: "2025-11-12",
    image: "https://s2.loli.net/2026/02/01/y8CH5fqo9mkczI6.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/QdvLdzT46',
      bilibili: "https://www.bilibili.com/video/BV17aCEBxEMC/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "BBUU BBUU 🎺💙💗❤️",
    date: "2025-11-11",
    image: "https://s2.loli.net/2026/02/01/RMybHX153ZKgOGt.png", 
    desc: "💙💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/Qdn1l84hs',
      bilibili: "https://www.bilibili.com/video/BV1qWk6B7Esd/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "ACELERADA",
    date: "2025-10-23",
    image: "https://s2.loli.net/2026/02/01/xRfSnB8ViKyEhUv.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Qatpt48Kp',
      bilibili: "https://www.bilibili.com/video/BV1rasqzpE3j/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "🫢😉",
    date: "2025-10-21",
    image: "https://s2.loli.net/2026/02/01/UoZsbP2kcjVGmxT.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/QaaKFfl1T',
      bilibili: "https://www.bilibili.com/video/BV1d4WRzdEPp/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Ocean Eyes",
    date: "2025-10-17",
    image: "https://s2.loli.net/2026/02/01/begJQ5N9s4vntuA.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Q9yEjqSNS',
      bilibili: "https://www.bilibili.com/video/BV1kYWYzGEiP/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "🤫 & 🕺🎶",
    date: "2025-10-10",
    image: "https://s2.loli.net/2026/02/01/NHudR1fAsnSOqbx.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Q8uEQuXcG',
      bilibili: "https://www.bilibili.com/video/BV17r47zYEGX/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "❤️🩷🌳 | ू*ˊᗜˋ ) 藏好了吗 💜",
    date: "2025-09-17",
    image: "https://s2.loli.net/2026/02/01/ft9Tuzn76QMPOWL.png", 
    desc: "💜💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/Q4ZeT0Cmm',
      bilibili: "https://www.bilibili.com/video/BV1uzpxzwEYD/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "MAIN DISH (Producer Ver.)",
    date: "2025-09-16",
    image: "https://s2.loli.net/2026/02/01/M76R9oeOgHna8XK.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Q4QNh7zzJ',
      bilibili: "https://www.bilibili.com/video/BV1E9pyzeEAq/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "THIS_IS_ME_I Challenge with BAMBY",
    date: "2025-09-12",
    image: "https://img.cdn1.vip/i/69aadfc10f75c_1772806081.webp", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/5143372154/Q4eN3FhFI',
      youtube: "https://youtube.com/shorts/2ftVD6PBnEM?si=hoqn9Mo0tEakPw_N"
    }
  },
  {
    title: "Barabam 🩷🖤",
    date: "2025-09-03",
    image: "https://s2.loli.net/2026/02/02/CrcYDOFvLs3WRio.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Q2RQsF64C',
      bilibili: "https://www.bilibili.com/video/BV1qhagz9ETR/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "PLLI☝️ and only 🎶",
    date: "2025-09-02",
    image: "https://s2.loli.net/2026/02/02/V3oNzRCaXniEDMj.png", 
    desc: "💜💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/Q2IpY4Nk5',
      bilibili: "https://www.bilibili.com/video/BV1YWawz4EM9/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "君の好きなところ ♡ ⋆｡˚",
    date: "2025-08-26",
    image: "https://s2.loli.net/2026/02/02/uCUah5pHcLVtJEw.png", 
    desc: "💙💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Q1EqusQaZ',
      bilibili: "https://www.bilibili.com/video/BV1J5vwz5EAX/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "Grrr 🐾🐺🐿️",
    date: "2025-08-21",
    image: "https://s2.loli.net/2026/02/02/o6GJEzx5AvIhSfl.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/Q0Ti1hcfw',
      bilibili: "https://www.bilibili.com/video/BV1gMYXzeEKN/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "都好好评论哈~⌨️💢",
    date: "2025-08-07",
    image: "https://s2.loli.net/2026/02/02/4SgNVKevLHuGB3n.png", 
    desc: "💙💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PEILnu3rq',
      bilibili: "https://www.bilibili.com/video/BV1fWtBztEMV/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "かくれんぼ 🫣👀 with ME:I MIU",
    date: "2025-07-31",
    image: "https://s2.loli.net/2026/02/02/7rsi1jUYBnZKJ9R.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PDDZbuQMZ',
      bilibili: "https://www.bilibili.com/video/BV1DM81zzEW2/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "SODA POP 🫧 SoloCam Mix",
    date: "2025-07-25",
    image: "https://s2.loli.net/2026/02/02/cxlmRio3DkC6p9b.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PCKp6lK5g',
      bilibili: "https://www.bilibili.com/video/BV1VMbXzfEVW/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Asterum小松鼠 🐿️🩷 《Mr.》交叉编辑 🕺🎶",
    date: "2025-07-23",
    image: "https://s2.loli.net/2026/02/03/n4VCazRWY53DXeI.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PCry6CxXP',
      bilibili: "https://www.bilibili.com/video/BV1Yy8Fz7EVC/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "かくれんぼ 🫣👀 with SHINee KEY",
    date: "2025-07-22",
    image: "https://s2.loli.net/2026/02/02/Oq79buTYLGfsziy.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PCh8J9KYM',
      bilibili: "https://www.bilibili.com/video/BV1DAgJzEEJg/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "I'ma be Your Idol 😈🔮",
    date: "2025-07-15",
    image: "https://s2.loli.net/2026/02/02/OAnGRlzJrjDq3kM.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PBdVY2ZB5',
      bilibili: "https://www.bilibili.com/video/BV1FouEz8Ezi/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "Hide and Seek 🫣🫶🩷",
    date: "2025-07-11",
    image: "https://s2.loli.net/2026/02/02/Q9F5tqRg8Ka3HZ1.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PAB2UqtuW',
      bilibili: "https://www.bilibili.com/video/BV16PGgzyE98/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Hide and Seek ☝️✌️👌",
    date: "2025-07-05",
    image: "https://s2.loli.net/2026/02/02/Ni7uhEgZqD1J5tb.png", 
    desc: "💜💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PzFiS1yuF',
      bilibili: "https://www.bilibili.com/video/BV1tv37zkE7D/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "ⓈⓄⒹⒶ ⓅⓄⓅ ｡ﾟ*｡♡",
    date: "2025-07-03",
    image: "https://s2.loli.net/2026/02/02/RrY486FIU3DJMyb.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PzpcI8KM2',
      bilibili: "https://www.bilibili.com/video/BV1tE3uzHEvK/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "𝘼𝙗𝙨𝙤𝙡𝙪𝙩𝙚 𝙯𝙚𝙧𝙤 🎸",
    date: "2025-07-01",
    image: "https://s2.loli.net/2026/02/02/vtPlogWj7x89zKD.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Pz5yEmmlC',
      bilibili: "https://www.bilibili.com/video/BV1XogDzkEGJ/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "かくれんぼ 👀👋 with JO1 川尻蓮 REN",
    date: "2025-06-23",
    image: "https://s2.loli.net/2026/02/02/6LBekChT5fVsaPz.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PxRlYvVY0',
      bilibili: "https://www.bilibili.com/video/BV1DsKtzhEYf/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "かくれんぼ 🫣🩷👀💙",
    date: "2025-06-19",
    image: "https://s2.loli.net/2026/02/02/YUA9T64pjHrD28o.png", 
    desc: "💙💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Pxg2l4Ypg',
      bilibili: "https://www.bilibili.com/video/BV1gRNsznEuA/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "✨ A to TikTok 1M ✨",
    date: "2025-06-13",
    image: "https://s2.loli.net/2026/02/02/2ZWRlS54FGQdfNm.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PwlRIowQr',
      bilibili: "https://www.bilibili.com/video/BV1dJMgzZEbh/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "イライラ💢",
    date: "2025-06-10",
    image: "https://s2.loli.net/2026/02/02/9DfoNOy8d1ECRka.png", 
    desc: "💙💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/PvTYAlCxP',
      bilibili: "https://www.bilibili.com/video/BV1QHTCzkEFd/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "✧ﾟ･ 🎀 公主的规则 🎀 ･ﾟ✧",
    date: "2025-05-15",
    image: "https://s2.loli.net/2026/02/02/86WHVEYlmOJh5xa.png", 
    desc: "💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PrW4Xwqlc',
      bilibili: "https://www.bilibili.com/video/BV1wMEkzXE7s/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "大股の正社員と 👣 小股のバイト 🐾",
    date: "2025-05-12",
    image: "https://s2.loli.net/2026/02/02/XE63iFrWJK7D2cB.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PrsCp66v5',
      bilibili: "https://www.bilibili.com/video/BV1z1ELzkEXs/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "エッホエッホ みんなに伝えなきゃ",
    date: "2025-05-09",
    image: "https://s2.loli.net/2026/02/02/egr3L2auD9RvNBz.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Pr0kV4dox',
      bilibili: "https://www.bilibili.com/video/BV1J55KzMEhY/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "MMMM也向Terra Dash ⚡",
    date: "2025-04-29",
    image: "https://s2.loli.net/2026/02/02/ro5asnOX98KGLiB.png", 
    desc: "💙💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PpvPy4GRv',
      bilibili: "https://www.bilibili.com/video/BV1WjGCzyEzK/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "TWS Countdown舞蹈挑战 ✨ with BAMBY",
    date: "2025-04-25",
    image: "https://img.cdn1.vip/i/69aae7a552dc7_1772808101.webp", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/5143372154/PoTh4oiF3',
      youtube: "https://youtube.com/shorts/TuiiiKyDSms?si=mf6mpxDuxqc79sVa"
    }
  },
  {
    title: "すごい速さ 💨",
    date: "2025-04-24",
    image: "https://s2.loli.net/2026/02/02/PA8aH4EZexfjiTL.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PoJIaxSYY',
      bilibili: "https://www.bilibili.com/video/BV1GDLez3ELG/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "🎀 (ง💜)ว (ง🩷)ว 🎀",
    date: "2025-04-21",
    image: "https://s2.loli.net/2026/02/02/eIkuyct5Q9nKN4S.png", 
    desc: "💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PohP2x9Ns',
      bilibili: "https://www.bilibili.com/video/BV1UgLuzhEev/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: " ˚✧⁎彡Kawaiiミ˚✧⁎",
    date: "2025-04-12",
    image: "https://s2.loli.net/2026/02/02/ZJg9NLoQ8rmezjE.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/PmTp9Betk',
      bilibili: "https://www.bilibili.com/video/BV13bddYoEBM/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: " 没关系 ✋",
    date: "2025-04-07",
    image: "https://s2.loli.net/2026/02/02/NojHpwYbxD5aWs4.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Pm9rJeZLU',
      bilibili: "https://www.bilibili.com/video/BV1HJRyYgEW6/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "♫͙◟̊👋+🎀=🍨◞̊♫͙",
    date: "2025-04-05",
    image: "https://s2.loli.net/2026/02/02/ldfzoPQ4xpyVr6I.png", 
    desc: "💙💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PlPpG2ODB',
      bilibili: "https://www.bilibili.com/video/BV1BRRSYDEUn/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "★˚₊ ᴅɪɴɢ ᴅᴏɴɢ ᴠɪʙᴇ 🎧⋆｡˚ ꩜",
    date: "2025-04-03",
    image: "https://s2.loli.net/2026/02/02/79MBu1aQoDSU62R.png", 
    desc: "💙💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Ply86tPgZ',
      bilibili: "https://www.bilibili.com/video/BV1KJZ2YfETo/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "格外奇异却又美丽的夜晚..斑比 🖥️🩷",
    date: "2025-03-26",
    image: "https://s2.loli.net/2026/02/02/giEvMQep9OkHtTn.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PkloKcPpL',
      bilibili: "https://www.bilibili.com/video/BV1A5oeYDETr/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "𝘾𝙝𝙞𝙡𝙡...",
    date: "2025-03-08",
    image: "https://s2.loli.net/2026/02/02/cTaGrunXQL4vot3.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/PhzDWBdB6',
      bilibili: "https://www.bilibili.com/video/BV1m29mYsEGt/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "📸 ⋆⁺₊⋆ 𝙍𝙄𝙕𝙕 ⋆⁺₊⋆ 🎧",
    date: "2025-03-05",
    image: "https://s2.loli.net/2026/02/02/ChKEcDMXljaGkYN.png", 
    desc: "💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Ph856BIZW',
      bilibili: "https://www.bilibili.com/video/BV1b194YvEN6/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "⋆｡‧˚ʚ🌸 下雪啦 🐈‍⬛ɞ˚‧｡⋆",
    date: "2025-03-04",
    image: "https://s2.loli.net/2026/02/02/s8AQjKVnThMWRS5.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PgZvo2CQ3',
      bilibili: "https://www.bilibili.com/video/BV1xB9EYMEcy/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "I gotta Dash⚡with TWICE SANA",
    date: "2025-02-25",
    image: "https://s2.loli.net/2026/02/02/OJE31rnqstZwGLM.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PfW6rCS4z',
      bilibili: "https://www.bilibili.com/video/BV1dgPveoEEg/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "I gotta Dash⚡🩷❤️🖤💨",
    date: "2025-02-22",
    image: "https://s2.loli.net/2026/02/02/x6FhdXqHu3I1p7V.png", 
    desc: "💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/PfrF04ETC',
      bilibili: "https://www.bilibili.com/video/BV1vRPAeqELs/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "I gotta Dash⚡with BOYNEXTDOOR JAEHYUN",
    date: "2025-02-20",
    image: "https://s2.loli.net/2026/02/02/Nj6DanU3ErfoBbd.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PfaXY31Er',
      bilibili: "https://www.bilibili.com/video/BV1LjAHepEUh/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "UPNDOWN 銀赫 💫 with PLAVE 斑比",
    date: "2025-02-18",
    image: "https://s2.loli.net/2026/02/02/xrNKFDbXOJLvfQ9.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/6419696540/PeRV1uKBV',
      youtube: "https://www.youtube.com/watch?v=eYoSAk2ByX8"
    }
  },
  {
    title: "I gotta Dash⚡🫶🩷",
    date: "2025-02-17",
    image: "https://s2.loli.net/2026/02/02/E6fDk7iR4w1WsrB.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PeH73jGo2',
      bilibili: "https://www.bilibili.com/video/BV1RNwXeTE2A/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "I gotta Dash⚡🔄🩷",
    date: "2025-02-08",
    image: "https://s2.loli.net/2026/02/03/T7WPChN6JIbROMn.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Pdn14i252',
      bilibili: "https://www.bilibili.com/video/BV1x9NgeLEY6/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "I gotta ⚡Dash⚡",
    date: "2025-02-05",
    image: "https://s2.loli.net/2026/02/03/Pzq5RO7aVYjoF83.png", 
    desc: "💙💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/PcSRT3cwJ',
      bilibili: "https://www.bilibili.com/video/BV13RPyeUErq/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "🙏 Asterum Romance ₊˚⊹",
    date: "2025-01-07",
    image: "https://s2.loli.net/2026/02/03/Mj6qyCVnrbluwJK.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/P8tDDcSsP',
      bilibili: "https://www.bilibili.com/video/BV1J1rSYDEeF/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "°❆⛄⋆𝘾𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨 𝙛𝙤𝙧 𝙔𝙤𝙪🦌*:･❄️",
    date: "2024-12-25",
    image: "https://s2.loli.net/2026/02/03/KnS9OD157wlYxX4.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/P6uyHx7aK',
      bilibili: "https://www.bilibili.com/video/BV1LjkZYiEb2/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "𝗖𝗛𝗥𝗜𝗦𝗧𝗠𝗔𝗦 𝗜𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 .•(🎄🎧)",
    date: "2024-12-22",
    image: "https://s2.loli.net/2026/02/03/56tGIlzr2V8LTiD.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/P61yzk1Bv',
      bilibili: "https://www.bilibili.com/video/BV12YkvYxEgJ/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "🩷 ⋆⑅˚₊ 脑袋肩膀膝盖脚 ﾟ･♪⁺❤️",
    date: "2024-12-19",
    image: "https://s2.loli.net/2026/02/03/Cv87gyjWm4qe1k3.png", 
    desc: "💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/P5As8EvOY',
      bilibili: "https://www.bilibili.com/video/BV1q2kgY6Era/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "哒哒哒哒哒〰️ 跟着PLLI跑 🐾",
    date: "2024-11-16",
    image: "https://s2.loli.net/2026/02/03/fQ28SWPqKoEtUpL.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/P0yLdBPZo',
      bilibili: "https://www.bilibili.com/video/BV1F8mZYxEvh/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "朴轸永的EasyLover challenge 😍",
    date: "2024-11-11",
    image: "https://s2.loli.net/2026/02/03/JLdyPHowx147rit.png", 
    desc: "💙💜💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OFLRM7Ex2',
      bilibili: "https://www.bilibili.com/video/BV13Am2Y5ERp/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "APT APT ⚡ 和PLAVE一起 Game Start❕👾",
    date: "2024-10-26",
    image: "https://s2.loli.net/2026/02/03/LhzitYcbdeZT2m6.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/ODkDtvAgM',
      bilibili: "https://www.bilibili.com/video/BV1Ug1pYeERt/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "和宮脇咲良一起做外星人challenge 📻👀👽",
    date: "2024-08-27",
    image: "https://s2.loli.net/2026/02/03/gWhN1SFypmilJzP.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OucZLwybC',
      bilibili: "https://www.bilibili.com/video/BV1rU411S7qw/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "和脸蛋天才车银洙一起做外星人challenge 📻👀👽",
    date: "2024-08-24",
    image: "https://s2.loli.net/2026/02/03/hKvzq7teSFpLaTi.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OtKjQ8hEq',
      bilibili: "https://www.bilibili.com/video/BV1uz421q7eV/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "📻 只能看见你一人 👀💙💜🩷❤️🖤️",
    date: "2024-08-23",
    image: "https://s2.loli.net/2026/02/03/gmCn16YAD8d2GIh.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/OtCsLqmcY',
      bilibili: "https://www.bilibili.com/video/BV1eW421X7jp/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "📻 只能看见你一人 👀 🩷",
    date: "2024-08-21",
    image: "https://s2.loli.net/2026/02/03/rR2woNmscavyS6e.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OtirLu3FN',
      bilibili: "https://www.bilibili.com/video/BV1zy411i7BJ/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "斑比的 BoomBoomBass Challenge 🎧",
    date: "2024-07-17",
    image: "https://s2.loli.net/2026/02/03/2kzKYNDW4OmtGA8.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OnZ8Igbdp',
      bilibili: "https://www.bilibili.com/video/BV1Mm421G77V/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "斑比的 Supernatural Challenge 🌸",
    date: "2024-07-17",
    image: "https://s2.loli.net/2026/02/03/pZPQHuVfNsATYtv.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OnZ1YrEGf',
      bilibili: "https://www.bilibili.com/video/BV1yE421A7pg/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "斑比的 BoomBoomBass Challenge 🎸",
    date: "2024-07-17",
    image: "https://s2.loli.net/2026/02/03/ObUd6IqvNAWZiSK.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OnYSbboba',
      bilibili: "https://www.bilibili.com/video/BV1d6421Z7V1/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "斑比的 Supernatural Challenge 🍑",
    date: "2024-07-17",
    image: "https://s2.loli.net/2026/02/03/3a7ITMbFGHgBY5w.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OnYM390Eq',
      bilibili: "https://www.bilibili.com/video/BV1Um421G7J6/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "bamby✖️金云鹤 challenge挑战",
    date: "2024-04-27",
    image: "https://s2.loli.net/2026/02/07/X4NB86xtWobzElP.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/5143372154/ObG7tcSiv',
      youtube: "https://www.youtube.com/shorts/zjuKxfGg3OI"
    }
  },
  {
    title: "❄️结冰的汉江上有🐱 🩷 斑比猫在走🐾",
    date: "2024-04-21",
    image: "https://s2.loli.net/2026/02/03/Z4JIHTmXCRS8FvV.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/OaJwuie9p',
      bilibili: "https://www.bilibili.com/video/BV1jm411U7cd/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "Virtual Idol 🎶 我们是 PLAVE 💙 💜 🩷 ❤️ 🖤",
    date: "2024-03-31",
    image: "https://s2.loli.net/2026/02/03/8e71lCK6VZGjd3F.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/O7yI2x1fl',
      bilibili: "https://www.bilibili.com/video/BV1vz421f7MK/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "噗哧噗哧 🤭 多多包容 💙 🩷 ❤️",
    date: "2024-03-29",
    image: "https://s2.loli.net/2026/02/03/RthDUT5kqwVzbNs.png", 
    desc: "💙💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/O7heopSDU',
      bilibili: "https://www.bilibili.com/video/BV1cx421X7Ca/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "WAY 4 LUV 🩷 ❤️ 🖤",
    date: "2024-02-29",
    image: "https://s2.loli.net/2026/02/03/Wr1K6weBso74IyF.png", 
    desc: "💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/O2PFWDSTG',
      bilibili: "https://www.bilibili.com/video/BV1h1421f7b5/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "好像陷入了爱情 🩷",
    date: "2023-12-14",
    image: "https://s2.loli.net/2026/02/03/3XtWM41iefDraLh.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/Nx6NruWEZ',
      bilibili: "https://www.bilibili.com/video/BV1NQ4y1G735/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "Pull Up Pull Up💙💜🩷 RightNow翻跳挑战",
    date: "2023-10-14",
    image: "https://s2.loli.net/2026/02/03/O5FCynKfYbSpLGz.png", 
    desc: "💙💜💗",
    links: {
      bilibili: "https://www.bilibili.com/video/BV1xw411k7UZ/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f",
      youtube:"https://www.youtube.com/watch?v=6pzewyJ5hLc"
    }
  },
  {
    title: "Spell L.o.v.e.L.e.e 🩷 ❤️ 🖤",
    date: "2023-10-12",
    image: "https://s2.loli.net/2026/02/03/rgUmZOTbEueFIW4.png", 
    desc: "💙💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/NnvHlxEpC',
      bilibili: "https://www.bilibili.com/video/BV1484y127HR/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "😈💜🩷🖤😈 《PTTR》翻跳挑战",
    date: "2023-10-04",
    image: "https://s2.loli.net/2026/02/03/i8HhXV4N7FtuQnA.png", 
    desc: "💜💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/NmjTom3VX',
      bilibili: "https://www.bilibili.com/video/BV1Jj41147dv/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "KCON LA 2023 POPPIA 翻跳挑战 | PLAVE 诺亚 & 斑比 & 银虎",
    date: "2023-10-02",
    image: "https://s2.loli.net/2026/02/03/F5JeqgvKT2thcka.png", 
    desc: "💜💗❤️",
    links: {
      weibo: 'https://weibo.com/7825391749/Nm0Zya98O',
      bilibili: "https://www.bilibili.com/video/BV16u4y147ts/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "出来的瞬间响起的siren🚨",
    date: "2023-09-30",
    image: "https://s2.loli.net/2026/02/03/ylozJubSpqZF65x.png", 
    desc: "💗🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/NlFMqEMyk',
      bilibili: "https://www.bilibili.com/video/BV1pu411u7nR/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "在反复的季节中间 🩷",
    date: "2023-09-25",
    image: "https://s2.loli.net/2026/02/03/ZgRx7L8hy5K2fld.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/NkY0UzH2D',
      bilibili: "https://www.bilibili.com/video/BV1bu41137RH/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "I'll Be Missing You🌿",
    date: "2023-07-22",
    image: "https://s2.loli.net/2026/02/03/zqrmbV9IFeMGghZ.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/Nb1RGg9Ce',
      bilibili: "https://www.bilibili.com/video/BV1z14y1Q7kk/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "✨Run to the end of the world💫 with bamby",
    date: "2023-07-14",
    image: "https://img.cdn1.vip/i/69aae685000ab_1772807813.webp", 
    desc: "💗",
    links: {
      youtube: "https://youtube.com/shorts/MUIgstFWwro?si=EKB35xKDpLi3_cy4"
    }
  },
  {
    title: "Make you go rec rec📹 | The Wind 《Why?》翻跳",
    date: "2023-06-26",
    image: "https://s2.loli.net/2026/02/03/SEY5qNtsBJzkQ1v.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/N75yJBJFk',
      bilibili: "https://www.bilibili.com/video/BV16W4y1D7bX/?spm_id_from=333.1387.upload.video_card.click"
    }
  },
  {
    title: "왜요 왜요 왜❓🤷",
    date: "2023-06-26",
    image: "https://img.cdn1.vip/i/69aae55c28c5a_1772807516.webp", 
    desc: "💗",
    links: {
      youtube: 'https://youtube.com/shorts/0CR9hFtcoF0?si=UhgZjSMhzLwzszdL'
    }
  },
  {
    title: "PLAVE《Why?》舞蹈翻跳挑战 | 斑比🩷 ❓ WhyChallenge",
    date: "2023-05-26",
    image: "https://s2.loli.net/2026/02/03/3eamUy5LljswGZI.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/N2mTUjcRQ',
      bilibili: "https://www.bilibili.com/video/BV1ak4y1x7jA/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "LOVE YOU💖 《I don't think that I like her》舞蹈挑战",
    date: "2023-05-10",
    image: "https://s2.loli.net/2026/02/03/kbigvhAfndU19wl.png", 
    desc: "💙💜💗❤️🖤",
    links: {
      weibo: 'https://weibo.com/7825391749/MFVm2FsL3',
      bilibili: "https://www.bilibili.com/video/BV1Gk4y177Ln/?spm_id_from=333.1387.upload.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  },
  {
    title: "PLAVE成员练习生时期初直播预告影片",
    date: "2022-10-18",
    image: "https://s2.loli.net/2026/02/03/m7jTZDpibLveqhx.png", 
    desc: "💗",
    links: {
      weibo: 'https://weibo.com/7825391749/MyWA1hSbi',
      bilibili: "https://www.bilibili.com/video/BV14Y4y1Q7kj/?spm_id_from=333.337.search-card.all.click&vd_source=e230dc6164ce954968003ee48cac6c1f"
    }
  }
  // 可以继续添加更多挑战...
];

const tmiData = [
  // 直播翻唱数据
  {
    id: "cover058",
    category: "cover",
    title: "今日日记",
    image: "https://img.cdn1.vip/i/69c3d49d74e50_1774441629.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV129QmBGEJR/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=5582s",
      youtube: "https://www.youtube.com/watch?v=vddblA-wJjk&t=5582s",
      xiaohongshu: 'https://www.xiaohongshu.com/discovery/item/69bd5903000000001b022c96?source=webshare&xhsshare=pc_web&xsec_token=ABEhcPteWqhhJvKZDTeF6cC3yGIQZ879Cs_moDZ4gjW-8=&xsec_source=pc_share'
    },
    source: {
      date: "2026-03-20",
      title: "1:33:02-1：34:38",
    }
  },
  {
    id: "cover057",
    category: "cover",
    title: "0+0",
    image: "https://img.cdn1.vip/i/69c3dafdbd43b_1774443261.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV129QmBGEJR/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=5793s",
      youtube: "https://www.youtube.com/watch?v=vddblA-wJjk&t=5793s",
      xiaohongshu: 'https://www.xiaohongshu.com/discovery/item/69be19150000000023015ea6?source=webshare&xhsshare=pc_web&xsec_token=ABNcwPFYTVu4Ti36ts0VWMZB9U3VuarztLW_-v3sysipc=&xsec_source=pc_share'
    },
    source: {
      date: "2026-03-20",
      title: "1:36:33-1：39:38",
    }
  },
  {
    id: "cover008",
    category: "cover",
    title: "Flying Duck",
    image: "https://img.cdn1.vip/i/69a2ed80ebf8a_1772285312.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV1PE4m1d7GB/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3321s",
      youtube: "https://www.youtube.com/watch?v=BnXq40GANVI&t=3321s",
      weibo: 'https://weibo.com/5143372154/OoaRjvCfa'
    },
    source: {
      date: "2024-07-18",
      title: "55:21-59:15",
    }
  },
  {
    id: "cover007",
    category: "cover",
    title: "Never Ending Story",
    image: "https://img.cdn1.vip/i/69a2ef24ea2f3_1772285732.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV1PE4m1d7GB/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=6027s",
      youtube: "https://www.youtube.com/watch?v=BnXq40GANVI&t=6027s",
      weibo: 'https://weibo.com/5143372154/OokFVuF5E'
    },
    source: {
      date: "2024-07-18",
      title: "1:40:27-1:43:30",
    }
  },
  {
    id: "cover006",
    category: "cover",
    title: "方形的梦",
    image: "https://img.cdn1.vip/i/69a2ba4dd1bad_1772272205.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV1dM4m1f7H9/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=1581s",
      youtube: "https://www.youtube.com/watch?v=yWmaH6uRRwQ&t=1581s",
      weibo: 'https://weibo.com/5143372154/OcsWQi2ke'
    },
    source: {
      date: "2024-05-02",
      title: "26:21-29:39",
    }
  },
  {
    id: "cover005",
    category: "cover",
    title: "银河系咖啡厅的爱情",
  //  desc: "240424 五人直播",
    image: "https://s2.loli.net/2026/02/07/QhpENbXK8JrkC2O.png", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV1Az421r7xe/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3246s",
      youtube: "https://www.youtube.com/watch?v=Y-c-kG3Fhe0&t=3246s",
      weibo: 'https://weibo.com/5143372154/Obfh7vHRE'
    },
    source: {
      date: "2024-04-24",
      title: "54:06-56:55",
    }
  },
  {
    id: "cover004",
    category: "cover",
    title: "L-O-V-E",
    image: "https://img.cdn1.vip/i/69a2b1a5a477d_1772269989.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV1jS421K7PX/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3489s",
      youtube: "https://www.youtube.com/watch?v=k70KP0Zvzn4&t=3489s",
      weibo: 'https://weibo.com/5143372154/NBnzqzWcJ'
    },
    source: {
      date: "2024-02-14",
      title: "58:09-1:00:54",
    }
  },
  {
    id: "cover003",
    category: "cover",
    title: "大教堂时代Le Temps Des Cathedrales",
    image: "https://img.cdn1.vip/i/69a29f0edb690_1772265230.webp", 
    links: {
      bilibili: "https://www.bilibili.com/video/BV14K4y1z76u/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2079s",
      youtube: "https://www.youtube.com/watch?v=HY2EgIaC9ZE&t=2079s",
      weibo: 'https://weibo.com/5143372154/NBnzqzWcJ'
    },
    source: {
      date: "2024-01-11",
      title: "34:29-38:00",
    }
  },
  {
  id: "cover002",
  category: "cover",
  title: "My House",
  image: "https://img.cdn1.vip/i/69a7e9ff47169_1772612095.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1pL411d7na/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=4902s"
  },
  source: {
    date: "2023-02-15",
    title: "1:21:42-1:24:43 "
  }
},
{
  id: "cover001",
  category: "cover",
  title: "应急室",
  image: "https://img.cdn1.vip/i/69a7dcd6ef7dd_1772608726.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1E24y1E7iE/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2955s"
  },
  source: {
    date: "2023-01-03",
    title: "49:15-51:04"
  }
},
 
  // 直播翻跳数据
  {
  id: "dancecover026",
  category: "dance-cover",
  title: "Sugar Rush Ride",
  image: "https://img.cdn1.vip/i/69a826460f05d_1772627526.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1vM411u7rq/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3147s"
  },
  source: {
    date: "2023-02-28",
    title: "52:27-56:22 57:08-58:12"
  }
},
{
  id: "dancecover025",
  category: "dance-cover",
  title: "night dancer",
  image: "https://img.cdn1.vip/i/69a8257208c9f_1772627314.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1vM411u7rq/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3020s"
  },
  source: {
    date: "2023-02-28",
    title: "50:32-51:32"
  }
},
{
  id: "dancecover024",
  category: "dance-cover",
  title: "나문희의 첫사랑",
  image: "https://img.cdn1.vip/i/69a7f549266cb_1772614985.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1AY4y1Q7LK/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=4608s"
  },
  source: {
    date: "2023-02-21",
    title: "1:16:48-1:17:54"
  }
},
{
  id: "dancecover023",
  category: "dance-cover",
  title: "POPPY",
  image: "https://img.cdn1.vip/i/69a7f3b8646b2_1772614584.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1AY4y1Q7LK/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=4466s"
  },
  source: {
    date: "2023-02-21",
    title: "1:14:26-1:14:56"
  }
},
{
  id: "dancecover022",
  category: "dance-cover",
  title: "VIBE",
  image: "https://img.cdn1.vip/i/69a7f0e95c20d_1772613865.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1AY4y1Q7LK/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2523s"
  },
  source: {
    date: "2023-02-21",
    title: "42:03-42:54 43:23-44:00"
  }
},
{
  id: "dancecover021",
  category: "dance-cover",
  title: "Mommae",
  image: "https://img.cdn1.vip/i/69a7f09e32b54_1772613790.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1AY4y1Q7LK/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2011s"
  },
  source: {
    date: "2023-02-21",
    title: "33:31-34:16"
  }
},
{
  id: "dancecover020",
  category: "dance-cover",
  title: "电臀舞",
  image: "https://img.cdn1.vip/i/69a7ed462ad1e_1772612934.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1AY4y1Q7LK/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=1542s"
  },
  source: {
    date: "2023-02-21",
    title: "25:42-26:20 28:17-28:30"
  }
},
{
  id: "dancecover019",
  category: "dance-cover",
  title: "VIBE",
  image: "https://img.cdn1.vip/i/69a7e7b8b84fd_1772611512.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1pL411d7na/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3105s"
  },
  source: {
    date: "2023-02-15",
    title: "51:45-52:07"
  }
},
{
  id: "dancecover018",
  category: "dance-cover",
  title: "VIBE",
  image: "https://img.cdn1.vip/i/69a7e5dd34c9b_1772611037.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Vv4y1j7fu/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=6433s"
  },
  source: {
    date: "2023-01-31",
    title: "1:47:13-1:48:14 1:50:40-1:51:21 1:51:56-1:52:27"
  }
},
{
  id: "dancecover017",
  category: "dance-cover",
  title: "OMG",
  image: "https://img.cdn1.vip/i/69a7e3f50e8d1_1772610549.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Vv4y1j7fu/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=6353s"
  },
  source: {
    date: "2023-01-31",
    title: "1:45:53-1:46:13"
  }
},
{
  id: "dancecover016",
  category: "dance-cover",
  title: "Tell me",
  image: "https://img.cdn1.vip/i/69a7e39672977_1772610454.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Vv4y1j7fu/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=5979s"
  },
  source: {
    date: "2023-01-31",
    title: "1:39:39-1:40:03"
  }
},
{
  id: "dancecover015",
  category: "dance-cover",
  title: "Sorry Sorry",
  image: "https://img.cdn1.vip/i/69a7dfc1c668c_1772609473.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1xL411r7jG/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2554s"
  },
  source: {
    date: "2023-01-17",
    title: "42:34-43:03"
  }
},
{
  id: "dancecover014",
  category: "dance-cover",
  title: "Bo Peep Bo Peep",
  image: "https://img.cdn1.vip/i/69a7df2426c3a_1772609316.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1xL411r7jG/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2418s"
  },
  source: {
    date: "2023-01-17",
    title: "40:18-40:35"
  }
},
{
  id: "dancecover013",
  category: "dance-cover",
  title: "Ditto",
  image: "https://img.cdn1.vip/i/69a7df27139e7_1772609319.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1xL411r7jG/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=1970s"
  },
  source: {
    date: "2023-01-17",
    title: "32:50-33:21"
  }
},
{
  id: "dancecover012",
  category: "dance-cover",
  title: "Ditto",
  image: "https://img.cdn1.vip/i/69a7dc32ba002_1772608562.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1E24y1E7iE/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2648s"
  },
  source: {
    date: "2023-01-03",
    title: "44:08-45:20"
  }
},
{
  id: "dancecover011",
  category: "dance-cover",
  title: "被音乐攻击之这首歌很危险",
  image: "https://img.cdn1.vip/i/69a7db1513795_1772608277.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1E24y1E7iE/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2465s"
  },
  source: {
    date: "2023-01-03",
    title: "41:05-41:29"
  }
},
{
  id: "dancecover010",
  category: "dance-cover",
  title: "被音乐攻击之这歌来得太突然",
  image: "https://img.cdn1.vip/i/69a7da1fd7d64_1772608031.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1E24y1E7iE/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=1560s"
  },
  source: {
    date: "2023-01-03",
    title: "26:00-26:24"
  }
},
{
  id: "dancecover009",
  category: "dance-cover",
  title: "这么可爱对不起",
  image: "https://img.cdn1.vip/i/69a7d80c6296c_1772607500.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1MX4y1Z7FP/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=4607s"
  },
  source: {
    date: "2022-12-28",
    title: "1:16:47-1:17:33"
  }
},
{
  id: "dancecover008",
  category: "dance-cover",
  title: "Sorry Sorry",
  image: "https://img.cdn1.vip/i/69a7d7a3b41b2_1772607395.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1CX4y1o7HS/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3372s"
  },
  source: {
    date: "2022-12-20",
    title: "56:12-56:46"
  }
},
{
  id: "dancecover007",
  category: "dance-cover",
  title: "Growl(咆哮)",
  image: "https://img.cdn1.vip/i/69a7d5952957e_1772606869.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1CX4y1o7HS/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2916s"
  },
  source: {
    date: "2022-12-20",
    title: "48:36-49:48"
  }
},
{
  id: "dancecover006",
  category: "dance-cover",
  title: "My House",
  image: "https://img.cdn1.vip/i/69a7d45bba15a_1772606555.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1CX4y1o7HS/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2678s"
  },
  source: {
    date: "2022-12-20",
    title: "44:38-45:42"
  }
},
{
  id: "dancecover005",
  category: "dance-cover",
  title: "02摇",
  image: "https://img.cdn1.vip/i/69a7d2b288648_1772606130.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Ts4y1p7XF/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=3230s"
  },
  source: {
    date: "2022-10-20",
    title: "53:50-54:22"
  }
},
{
  id: "dancecover004",
  category: "dance-cover",
  title: "Shut Down",
  image: "https://img.cdn1.vip/i/69a7d216571c4_1772605974.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Ts4y1p7XF/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2790s"
  },
  source: {
    date: "2022-10-20",
    title: "46:30-47:08"
  }
},
  {
  id: "dancecover003",
  category: "dance-cover",
  title: "Love Shot",
  image: "https://img.cdn1.vip/i/69a7d1691c227_1772605801.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Ts4y1p7XF/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2712s"
  },
  source: {
    date: "2022-10-20",
    title: "45:12-45:43"
  }
},
  {
  id: "dancecover002",
  category: "dance-cover",
  title: "Hype boy",
  image: "https://img.cdn1.vip/i/69a7d049ac863_1772605513.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Ts4y1p7XF/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2561s",
  },
  source: {
    date: "2022-10-20",
    title: "42:41-43:15"
  }
},
  {
  id: "dancecover001",
  category: "dance-cover",
  title: "Rush Hour",
  image: "https://img.cdn1.vip/i/69a7d0031a3d4_1772605443.webp",
  links: {
    bilibili: "https://www.bilibili.com/video/BV1Ts4y1p7XF/?spm_id_from=333.1387.favlist.content.click&vd_source=e230dc6164ce954968003ee48cac6c1f&t=2474s",
  },
  source: {
    date: "2022-10-20",
    title: "41:14-41:51"
  }
},
  // 推荐歌单数据
  {
    id: "song002",
    category: "song",
    title: "luther",
    desc: "曲子本身就很柔和，很适合微风",
    image: "https://img.cdn1.vip/i/69a2f8ddc9463_1772288221.webp", // 专辑封面
    song: {
      artist: "Kendrick Lamar / SZA",
      link: "https://music.163.com/#/song?id=2649423776"
    },
    source: {
      date: "2025-05-04",
      title: "官方物料",
  //    platform: "YouTube",
  //    url: "https://youtu.be/xxx?t=1234"
    }
  },
  {
    id: "song001",
    category: "song",
    title: "A Dream Is A Wish Your Heart Makes",
    desc: "跟今天的天气很配",
    image: "https://img.cdn1.vip/i/69a2f4f6996ff_1772287222.webp", // 专辑封面
    song: {
      artist: "Lily James",
      link: "https://music.163.com/#/song?id=30967294"
    },
    source: {
      date: "2025-04-20",
      title: "泡泡推荐",
  //    platform: "YouTube",
  //    url: "https://youtu.be/xxx?t=1234"
    }
  },
  //物品数据
  {
    id: "snack001",
    category: "snack",
    title: "香水",
    desc: "爱马仕Vétiver Tonka 馨香芳果",
    image: "https://img.cdn1.vip/i/69aad69fef4dd_1772803743.webp",
    product: {
      name: "香水",
      brand: "爱马仕Vétiver Tonka 馨香芳果",
      note: "直播推荐"
    },
    source: {
      date: "2025-12-22",
      title: "直播",
      platform: "weibo",
      url: "https://weibo.com/7486683991/QjBYT8Pqr"
    }
  },
  {
    id: "snack001",
    category: "snack",
    title: "[平壤面屋]",
    desc: "香喷喷的荞麦面和肉汤展现不刺激，清淡的style。平冷入门者们也能轻易接受，所以推荐😊",
    image: "https://img.cdn1.vip/i/69a2fa2f6e39f_1772288559.webp",
    product: {
      name: "平壤冷面",
      brand: "[平壤面屋]",
      note: "平冷入门者的平壤冷面"
    },
    source: {
      date: "2024-04-19",
      title: "Esquire Korea 采访",
      platform: "weibo",
      url: "https://weibo.com/5143372154/OasMuiQPA"
    }
  },
  // 语录数据（含多图）
  {
    id: "letter100",
    category: "letter",
    title: "三周年wvs",
    content: "迟到了呢🥲<p>三周年快乐，我们PLLI💐<p>要看着你们长大成人，还有很久呢<p>待会儿见💙💜💗❤️🖤<p>爱你~💗<p>三周年快乐 噗哩♡<p>一直都很感谢你们，爱你们哦~ <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-斑比-",
    images: [
      "https://img.cdn1.vip/i/69b27cd21acd1_1773305042.webp",
      'https://img.cdn1.vip/i/69b27ceb52107_1773305067.webp',
    ],
    source: {
      date: "2026-03-12",
      title: "三周年wvs",
      platform: "weibo",
      url: "https://weibo.com/5143372154/QvF4i2KC0"
    }
  },
  {
    id: "letter100",
    category: "letter",
    title: "三周年来信",
    content: "你好，噗哩！<p>原以为三周年还远，回过神来却发现已经近在眼前。<p>从出道至今，不，甚至追溯到练习生时期，已经发生了太多。而所有的日子，都一点一滴积淀成我人生中最珍贵的时光。<p>人生只有一次，能遇见噗哩，和你一起创造如此美好的回忆，我真的无比感激，也深深庆幸…<p>随着时间流逝，噗哩于我而言，是更坚定的责任，也让我不断成长。<p>我永远不会忘记噗哩看我的眼神。<p>未来，我不仅会努力成为做好音乐、站在舞台上的好艺人，更会成为一个好人，永远陪在噗哩身边。<p>今后，只要我们心意相通的地方，无论在哪里，我相信我们一定比谁都更靠近。<p>非常爱你，今后也会一直爱你💓<p>让我们再一起创造数不清的美丽回忆吧。<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;丰玖…<p>外星人，外星人，外星人，外星人，外星人",
    images: [
      "https://img.cdn1.vip/i/69b286dc3ff11_1773307612.webp",
    ],
    source: {
      date: "2026-03-12",
      title: "三周年来信",
      platform: "weibo",
      url: "https://weibo.com/6312734535/QvAvOjl0Q"
    }
  },
  {
    id: "letter006",
    category: "letter",
    title: "噗哩一周年诞生日之诗",
    content: "💗\n\n某天蝴蝶飞了过来\n\n它在我身边停留了一年之久\n\n方才意识到原来我是一朵花\n\n偶尔坐在我的花蕾上安心地休息吧\n\n无论何时我都会为你守着这个位置",
    images: [
      "https://img.cdn1.vip/i/69a68d007574b_1772522752.webp",
    ],
    source: {
      date: "2024-06-18",
      title: "噗哩一周年诞生日之诗",
      platform: "weibo",
      url: "https://weibo.com/5143372154/OjHpQCcTL"
    }
  },
  {
    id: "letter005",
    category: "letter",
    title: "专辑thanks to",
    content: "噗哩们好!我是斑比!\n\n多亏了大家的厚爱 我们的声音才能再次被世人听到\n\n我觉得能认识现在的plave成员们和vlast的家人们是莫大的幸运\n\n一直很感谢总是和好的人们在一起\n\n和噗哩们在一起的此刻瞬间真的非常幸福\n\n对于大家给予我们的一切 我完全没有认为这些是理所当然的 以后也会一直抱着感恩的心走下去的\n\n非常感谢填满我内心的噗哩们\n\n无论何时我们都会在同个位置一起度过所有瞬间\n\n以后我们也一起走下去吧\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停留在噗哩们的季节里....\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ——斑比\n\n©baebaembe",
    images: [
      "https://img.cdn1.vip/i/69a677c71e5c4_1772517319.webp",
    ],
    source: {
      date: "2023-08-24",
      title: "专辑thanks to",
      platform: "weibo",
      url: "https://weibo.com/7562861850/Ng5w964H6"
    }
  },
  {
    id: "letter004",
    category: "letter",
    title: "生咖留言",
    content: "Dear.PLLI♡\n\n能和噗哩们一起度过这个瞬间特别幸福\n\n我们一起走过的每一页篇章\n\n都值得祝贺♡\n\n(为我祝贺生日真的很感谢哦)\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-斑比-<p>©BabyBooBamby<p>©HBD_Bamby0715",
    images: [
      "https://img.cdn1.vip/i/69a671e0c34c9_1772515808.webp",
      "https://img.cdn1.vip/i/69a84246110d9_1772634694.webp",
      "https://img.cdn1.vip/i/69a8424ad2719_1772634698.webp",
      "https://img.cdn1.vip/i/69a8424da4026_1772634701.webp"
    ],
    source: {
      date: "2023-07-15",
      title: "生咖留言",
      platform: "weibo",
      url: "https://weibo.com/7562861850/N9Pcb8UBG"
    }
  },
  {
    id: "letter003",
    category: "letter",
    title: "生日直播结束语",
    content: "虽然现在不能一直幸福 但就像我刚刚说的那样 不幸福也没关系的 只要宽容的度过每一天不就是幸福的吗.\n\n会一直陪在大家身边的 我们哪儿都不会去的",
    images: [
      "https://img.cdn1.vip/i/69a671039e4ea_1772515587.webp",
    ],
    source: {
      date: "2023-07-15",
      title: "生日直播结束语",
      platform: "weibo",
      url: "https://weibo.com/7562861850/Na2zWgzYB"
    }
  },
  {
    id: "letter002",
    category: "letter",
    title: "生日直播后官咖",
    content: "Dear.Plli💗\n\n一年只有一次的特别的日子🎂\n\n能够和大家一起觉得特别珍贵\n\n以后也要一直一起享受幸福的瞬间\n\n把每天都过成既平凡又特别的日子吧\n\n噗哩们给予我的爱我会一直珍藏在心里的\n\n也会怀着那些爱意成为更帅气的人的\n\n谢谢你们来到我的人生&nbsp;&nbsp;plli💓💗💖\n\n今天直播我太紧张了所以很抱歉哦😢",
    images: [
      "https://img.cdn1.vip/i/69a306b2704d5_1772291762.webp",
    ],
    source: {
      date: "2023-07-15",
      title: "生日直播后官咖",
      platform: "weibo",
      url: "https://weibo.com/5143372154/N9TbRiSlI"
    }
  },
  {
    id: "letter001",
    category: "letter",
    title: "出道100日的信",
    content: "噗宝💓\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;斑比\n\n花粉飞来了\n\n在裂开的缝隙之间\n\n保持原样地落脚了\n\n我们许下四季都要在一起的约定\n\n100天过去\n\n我们变成了花",
    images: [
      "https://img.cdn1.vip/i/69a302fe22a00_1772290814.webp",
  //    "https://example.com/letter2.jpg"
    ],
    source: {
      date: "2023-06-19",
      title: "出道100日的信",
      platform: "weibo",
      url: "https://weibo.com/5143372154/OjHpQCcTL"
    }
  },
  // 幕后TMI数据
  {
    id: "behind003",
    category: "behind",
    title: "《捉迷藏》编舞构思",
    content: "intro部分的编舞有着仿佛被吸进某个地方的表演效果，是以《爱丽丝梦游仙境》中的主人公掉进其他世界的场景为灵感编排了舞蹈。",
    source: {
      date: "2025-06-17",
      title: "UniversalMusicJapan特别舞台",
      platform: "weibo",
      url: "https://weibo.com/5143372154/PwYFjjyQP"
    }
  },
  {
    id: "behind002",
    category: "behind",
    title: "《WAY 4 LUV》编舞构思",
    content: "使用了一种我们团体特有的技术，通过消失再重新出现，来表现一种通过航行和冒险获得自由的感觉。像这样将魔法般的创意，或与歌曲歌词节奏相匹配的东西活用在演出上。",
    source: {
      date: "2024-10-21",
      title: "wvs杂志虚拟专题",
      platform: "weibo",
      url: "https://weibo.com/5143372154/OCzMnwPp2"
    }
  },
  {
    id: "behind001",
    category: "behind",
    title: "《Pretender》加词构思",
    content: "Pretender这首歌本身要表达的意思就是“跨越不同的次元和世界线 如果能再次和你相见的话会怎样 但最后的结果是只有我在单恋是我无法实现的爱情” 然后我在最后加了韩语的歌词“假若能沉陷在满溢的回忆中活下去”<p>我想表达的意思是什么呢 就是如果溢出来的话就会消失的嘛 能在那种很充实的但没有溢出来的记忆中生活的话 也会很不错的吧",
    source: {
      date: "2024-07-18",
      title: "直播",
      platform: "weibo",
      url: "https://weibo.com/7562861850/Oo9H9ypRD"
    }
  },
];


/* ============================================================
   日程数据（形式参考 plave.global/schedule，🩷 = 斑比相关）
   ============================================================ */
const scheduleMonths = [
  {
    key: "2026-11", label: "2026年11月 · PLAVE", entries: [
      { date: "2026-11-15", type: "event", time: "12:00", title: "[KEEP IT MANIC] in U.S." },
      { date: "2026-11-01", type: "anniversary", time: "", title: "Happy HAMIN's Day" },
      { date: "2026-11-01", type: "event", time: "17:00", title: "[KEEP IT MANIC] in Macao" },
    ]
  }
,
  {
    key: "2026-10", label: "2026年10月 · PLAVE", entries: [
      { date: "2026-10-31", type: "event", time: "19:00", title: "[KEEP IT MANIC] in Macao" },
      { date: "2026-10-24", type: "event", time: "19:00", title: "[KEEP IT MANIC] in Taipei" },
      { date: "2026-10-23", type: "event", time: "20:30", title: "[KEEP IT MANIC] in Taipei" },
      { date: "2026-10-19", type: "live", time: "20:00", title: "PLAVE LIVE" },
      { date: "2026-10-17", type: "event", time: "16:00", title: "[KEEP IT MANIC] in Singapore" },
      { date: "2026-10-15", type: "media", time: "18:00", title: "Mnet M COUNTDOWN💙💜🩷❤️🖤", bamby: true },
      { date: "2026-10-13", type: "release", time: "", title: "‘HYPERDRIVE’ ALBUM RELEASE" },
      { date: "2026-10-13", type: "media", time: "22:00", title: "MBC 아이돌 라디오 시즌4 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-10-12", type: "release", time: "", title: "‘HYPERDRIVE’ DIGITAL RELEASE" },
      { date: "2026-10-12", type: "live", time: "20:00", title: "COMEBACK LIVE 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-10-10", type: "event", time: "20:00", title: "[KEEP IT MANIC] in Bangkok" },
      { date: "2026-10-06", type: "live", time: "18:24", title: "WEVERSE LIVE 🩷❤️", bamby: true, links: { weverse: "https://weverse.io/plave/live/3-242207435?hl=ko" } },
      { date: "2026-10-04", type: "live", time: "21:21", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/4-242062029?hl=ko" } },
      { date: "2026-10-03", type: "event", time: "19:00", title: "[KEEP IT MANIC] in Kaohsiung" },
    ]
  }
,
  {
    key: "2026-09", label: "2026年9月 · PLAVE", entries: [
      { date: "2026-09-28", type: "live", time: "23:19", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/1-180595408?hl=ko" } },
      { date: "2026-09-27", type: "event", time: "16:00", title: "[KEEP IT MANIC] in Kanagawa" },
      { date: "2026-09-26", type: "event", time: "18:00", title: "[KEEP IT MANIC] in Kanagawa" },
      { date: "2026-09-24", type: "media", time: "17:00", title: "V+ 음악중심 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtu.be/NdRqZ50bIJ8" } },
      { date: "2026-09-21", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/qj4fsjBDbXg?si=3Cizg44zN6IHijaS" } },
      { date: "2026-09-21", type: "release", time: "18:00", title: "'Heart Stage' OST" },
      { date: "2026-09-20", type: "live", time: "17:17", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/3-241531309?hl=ko" } },
      { date: "2026-09-17", type: "live", time: "20:00", title: "YEJUN B-DAY LIVE 💙", links: { youtube: "https://www.youtube.com/live/287Wg1m8me8?si=VCeFATpvT-s9CjOm" } },
      { date: "2026-09-16", type: "live", time: "21:15", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/4-241393454" } },
      { date: "2026-09-14", type: "live", time: "22:13", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/2-180324051?hl=ko" } },
      { date: "2026-09-14", type: "live", time: "20:40", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/2-180322470?hl=ko" } },
      { date: "2026-09-14", type: "live", time: "20:03", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/3-241329012?hl=ko" } },
      { date: "2026-09-13", type: "event", time: "19:00", title: "[KEEP IT MANIC] in Incheon" },
      { date: "2026-09-12", type: "anniversary", time: "", title: "Happy YEJUN's Day" },
      { date: "2026-09-12", type: "event", time: "19:00", title: "[KEEP IT MANIC] in Incheon" },
      { date: "2026-09-12", type: "live", time: "01:02", title: "WEVERSE LIVE 💜🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/3-241161391" } },
      { date: "2026-09-10", type: "live", time: "18:16", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/4-241062249?hl=ko" } },
      { date: "2026-09-08", type: "live", time: "01:05", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/3-240949825" } },
      { date: "2026-09-08", type: "live", time: "00:29", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/1-180140203" } },
      { date: "2026-09-05", type: "live", time: "14:29", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/3-240716197" } },
      { date: "2026-09-03", type: "release", time: "", title: "'Flame (feat. milet)' RELEASE" },
      { date: "2026-09-03", type: "live", time: "23:16", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/4-240639611?hl=ko" } },
      { date: "2026-09-03", type: "release", time: "18:00", title: "'Flame (feat. milet)' M/V", links: { youtube: "https://www.youtube.com/watch?v=pOmJ65UnPEY" } },
      { date: "2026-09-02", type: "live", time: "14:44", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/1-179961302?hl=ko" } },
      { date: "2026-09-01", type: "content", time: "10:00", title: "[PLAVE BIRTHDAY GIFT] YEJUN's Playlist 🎶💙", links: { youtube: "https://www.youtube.com/watch?v=Z0y1joJzNrM" } },
    ]
  }
,
  {
    key: "2026-08", label: "2026年8月 · PLAVE", entries: [
      { date: "2026-08-31", type: "content", time: "20:00", title: "[플레젠트] 같이 야근 할래?｜WORK WITH ME 🖥️", links: { youtube: "https://www.youtube.com/watch?v=g74LouSoQ-M" } },
      { date: "2026-08-27", type: "live", time: "23:44", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/0-179740227?hl=ko" } },
      { date: "2026-08-27", type: "live", time: "22:44", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/4-240178312?hl=ko" } },
      { date: "2026-08-24", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/EiXpu_fgZ6A?si=muXT6G7Yekvn9npl" } },
      { date: "2026-08-23", type: "media", time: "18:00", title: "2026 TMElive International Music Awards (TIMA) 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-08-21", type: "media", time: "21:00", title: "YouTube Music Weekend 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/RLosnREjB-Q?si=goAYjpdy-5anZSVS" } },
      { date: "2026-08-21", type: "live", time: "01:15", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/0-179407573?hl=ko" } },
      { date: "2026-08-18", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/2Y-McTC9PBg?si=lvLvi7deFU2GzXzZ" } },
      { date: "2026-08-14", type: "live", time: "07:01", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/1-179109863?hl=ko" } },
      { date: "2026-08-08", type: "live", time: "02:00", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/4-238372445" } },
      { date: "2026-08-08", type: "live", time: "00:56", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/1-178852672?hl=ko" } },
      { date: "2026-08-06", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtube.com/live/Np-_6V8eM68" } },
      { date: "2026-08-01", type: "live", time: "20:15", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/3-237773443?hl=ko" } },
    ]
  }
,
  {
    key: "2026-07", label: "2026年7月 · PLAVE", entries: [
      { date: "2026-07-30", type: "live", time: "21:50", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/4-237570475?hl=ko" } },
      { date: "2026-07-28", type: "live", time: "23:52", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/3-237390833?hl=ko" } },
      { date: "2026-07-28", type: "live", time: "21:25", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/2-178348935?hl=ko" } },
      { date: "2026-07-28", type: "live", time: "19:36", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/4-237360180?hl=ko" } },
      { date: "2026-07-27", type: "live", time: "20:00", title: "PLAVE LIVE ❤️🖤", links: { youtube: "https://youtube.com/live/t0LNjGQKbKM" } },
      { date: "2026-07-25", type: "live", time: "20:42", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/0-178164721?hl=ko" } },
      { date: "2026-07-24", type: "live", time: "20:00", title: "PLAVE LIVE 💜🩷", bamby: true, links: { youtube: "https://youtube.com/live/QowfT5GZ29I" } },
      { date: "2026-07-21", type: "live", time: "00:39", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/0-177920546?hl=ko" } },
      { date: "2026-07-20", type: "live", time: "20:00", title: "PLAVE LIVE 💙❤️🖤", links: { youtube: "https://youtube.com/live/5Vn9-DflIq0" } },
      { date: "2026-07-18", type: "content", time: "20:00", title: "[COVER] '好きすぎて滅！(Sukisugite METSU!)' (원곡 : M!LK) Covered by PLAVE", links: { youtube: "https://youtu.be/kH_wiFwqpXA?si=y_bFloTfiLeMunK7" } },
      { date: "2026-07-16", type: "content", time: "20:00", title: "[PLAVE BIRTHDAY GIFT] 変わらないもの (Kawaranai Mono) (원곡 : Oku Hanako) Covered by BAMBY", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=Yhm3gQdXisA" } },
      { date: "2026-07-15", type: "anniversary", time: "", title: "Happy BAMBY's Day", bamby: true },
      { date: "2026-07-15", type: "live", time: "20:00", title: "BAMBY B-DAY LIVE 🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/99nR8UeN76M?si=u6P3L4creKjRHr48" } },
      { date: "2026-07-14", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/-jsSfOBUtAI?si=naD5OqmXjBpW5JIT" } },
      { date: "2026-07-11", type: "live", time: "20:28", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/1-177393451" } },
      { date: "2026-07-10", type: "live", time: "00:08", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/4-235240588?hl=ko" } },
      { date: "2026-07-08", type: "live", time: "20:30", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/3-235109745" } },
      { date: "2026-07-07", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜❤️", links: { youtube: "https://youtube.com/live/I05J9qhc8AM" } },
      { date: "2026-07-02", type: "live", time: "23:23", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/4-234683643?hl=ko" } },
      { date: "2026-07-01", type: "content", time: "10:00", title: "[PLAVE BIRTHDAY GIFT] BAMBY's Playlist 🎶🩷", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=frB11QiC_wk" } },
    ]
  }
,
  {
    key: "2026-06", label: "2026年6月 · PLAVE", entries: [
      { date: "2026-06-29", type: "live", time: "20:00", title: "PLAVE LIVE 🩷🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/56IvdSggoFg?si=HhFoTId6Im6Xos0R" } },
      { date: "2026-06-28", type: "live", time: "17:45", title: "WEVERSE LIVE 💙💜❤️", links: { weverse: "https://weverse.io/plave/live/2-176744054?hl=ko" } },
      { date: "2026-06-25", type: "live", time: "09:40", title: "네이버 치지직 X PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { chzzk: "https://chzzk.naver.com/d86e5f6225418bc0749c13ac29e3a09c" } },
      { date: "2026-06-23", type: "live", time: "20:00", title: "PLAVE LIVE 💜❤️", links: { youtube: "https://www.youtube.com/live/Sq9mSS5CVr8?si=RlnFhzKjvi7eq5Oh" } },
      { date: "2026-06-19", type: "anniversary", time: "", title: "Happy PLLI Day" },
      { date: "2026-06-19", type: "content", time: "23:10", title: "[플레젠트] Dear. 2026 PLAVE From. 2025 PLAVE 💫", links: { youtube: "https://www.youtube.com/watch?v=KfZKHVqJS-0" } },
      { date: "2026-06-19", type: "live", time: "20:00", title: "PLLI 3RD ANNIVERSARY LIVE 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-06-16", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/9cJsEa_6YUQ?si=jXKnMmnqFTqIGj2w" } },
      { date: "2026-06-12", type: "live", time: "10:40", title: "네이버 치지직 X PLAVE LIVE 💜🩷❤️", bamby: true, links: { chzzk: "https://chzzk.naver.com/d86e5f6225418bc0749c13ac29e3a09c" } },
      { date: "2026-06-10", type: "media", time: "20:00", title: "MBC FM4U 별이 빛나는 밤에 💙" },
      { date: "2026-06-08", type: "live", time: "20:00", title: "PLAVE LIVE 💙🖤", links: { youtube: "https://youtube.com/live/yT5NPxMKovc" } },
      { date: "2026-06-06", type: "media", time: "18:00", title: "2026 Weverse Con Festival 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-06-05", type: "live", time: "23:24", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/4-232078455" } },
      { date: "2026-06-02", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtube.com/live/QXWEwVWLhU0" } },
    ]
  }
,
  {
    key: "2026-05", label: "2026年5月 · PLAVE", entries: [
      { date: "2026-05-29", type: "live", time: "20:00", title: "PLAVE LIVE 💜❤️", links: { youtube: "https://youtube.com/live/FJgYDi6GwKw" } },
      { date: "2026-05-27", type: "live", time: "20:00", title: "PLAVE LIVE 💙🩷🖤", bamby: true, links: { youtube: "https://youtube.com/live/VmHM6nY6Y5s" } },
      { date: "2026-05-25", type: "live", time: "22:38", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/4-231019520?hl=ko" } },
      { date: "2026-05-25", type: "content", time: "20:00", title: "[PLAVE BIRTHDAY GIFT] Red Eye (원곡 : Justin Bieber (Feat. TroyBoi)) Covered by EUNHO", links: { youtube: "https://www.youtube.com/watch?v=Qj_nflP1g-U" } },
      { date: "2026-05-24", type: "anniversary", time: "", title: "Happy EUNHO's Day" },
      { date: "2026-05-24", type: "live", time: "20:00", title: "EUNHO B-DAY LIVE ❤️", links: { youtube: "https://www.youtube.com/watch?v=-w7uhHvRvzY" } },
      { date: "2026-05-21", type: "live", time: "23:01", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/0-174904653" } },
      { date: "2026-05-21", type: "live", time: "20:00", title: "PLAVE LIVE 💜🖤", links: { youtube: "https://youtube.com/live/-e6EshC05w8" } },
      { date: "2026-05-20", type: "release", time: "18:00", title: "'괜찮아 사랑이니까 (Original)' OST" },
      { date: "2026-05-19", type: "live", time: "20:00", title: "PLAVE LIVE 💙🩷❤️", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=VZE7ehczgWU" } },
      { date: "2026-05-14", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtube.com/live/_nvy5qRTGIU" } },
      { date: "2026-05-14", type: "live", time: "00:17", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/2-174467933" } },
      { date: "2026-05-08", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtube.com/live/l6zykIFzJv8" } },
      { date: "2026-05-01", type: "content", time: "10:00", title: "[PLAVE BIRTHDAY GIFT] EUNHO's Playlist 🎶❤️", links: { youtube: "https://www.youtube.com/watch?v=AzYKEWB6a4w" } },
    ]
  }
,
  {
    key: "2026-04", label: "2026年4月 · PLAVE", entries: [
      { date: "2026-04-29", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-04-27", type: "live", time: "22:05", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/4-228229350?hl=ko" } },
      { date: "2026-04-25", type: "media", time: "15:15", title: "MBC 쇼! 음악중심 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=3zvHS4-C4uo" } },
      { date: "2026-04-23", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜❤️", links: { youtube: "https://www.youtube.com/watch?v=A7MXWavYrik" } },
      { date: "2026-04-21", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=Rm5JIMPl2r8" } },
      { date: "2026-04-20", type: "release", time: "20:00", title: "'Born Savage' M/V (Performance Ver.)", links: { youtube: "https://youtu.be/n-sIvDbeGb0?si=sIUCa74MQV0ziuBd" } },
      { date: "2026-04-20", type: "media", time: "18:15", title: "이쪽으로 올래 💙🩷", bamby: true, links: { youtube: "https://youtu.be/SmZCOEB1wRM?si=2vJAPWxJ_eTpwXBL" } },
      { date: "2026-04-19", type: "media", time: "22:00", title: "MBC FM4U 스포왕 고영배 💜", links: { youtube: "https://www.youtube.com/watch?v=KXk-Jgf15hQ" } },
      { date: "2026-04-19", type: "media", time: "21:00", title: "스포티파이 아이돌잔치 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtu.be/C5grba_u9Kc?si=_9U55rzXOCTPAeIs" } },
      { date: "2026-04-18", type: "media", time: "22:00", title: "M2 팅글인터뷰 🩷❤️", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=HbwL3Mr5ZrY" } },
      { date: "2026-04-18", type: "media", time: "15:20", title: "MBC 쇼! 음악중심 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=LR-1p5cVjE4" } },
      { date: "2026-04-17", type: "media", time: "22:00", title: "KBS Cool FM 한해의 키스 더 라디오 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/watch?v=uwKqQzOlRqI" } },
      { date: "2026-04-17", type: "live", time: "20:00", title: "PLAVE LIVE 🩷🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/E7JNyTRt4WE?si=zmdS64Qg-OwZXR9v" } },
      { date: "2026-04-17", type: "media", time: "19:00", title: "스포티파이 K-Pop ON! RECORD 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtu.be/DAgd4dmsb20?si=3X-n3uIKOG-n6tQg" } },
      { date: "2026-04-16", type: "media", time: "21:00", title: "MBC 아이돌 라디오 시즌4 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/CJeYQh2QQPs?si=OTDj_DE2x-UUUAmV" } },
      { date: "2026-04-16", type: "media", time: "18:00", title: "Mnet 엠카운트다운 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtu.be/jzF16MqTIPk?si=7woSUlaY0fviXScm" } },
      { date: "2026-04-16", type: "media", time: "12:00", title: "MBC FM4U 정오의 희망곡 김신영입니다 💙🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/PoMkXN7A8oM" } },
      { date: "2026-04-15", type: "media", time: "18:00", title: "아이돌 인간극장 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://youtu.be/s7BT8gxLM9k?si=kITgoNgoAUR43Klh" } },
      { date: "2026-04-14", type: "release", time: "", title: "‘Caligo Pt.2’ ALBUM RELEASE" },
      { date: "2026-04-14", type: "event", time: "", title: "Pop-up Store 'Caligo Pt.2'", links: { info: "https://caligopt2popup.oopy.io/" } },
      { date: "2026-04-14", type: "media", time: "20:00", title: "MBC FM4U 김이나의 별이 빛나는 밤에 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/KK70JWEC2LY?si=jnoW0hsI95yGke2p" } },
      { date: "2026-04-14", type: "media", time: "18:00", title: "개인기디자인스쿨 💜🖤", links: { youtube: "https://youtu.be/sd5Gp0i8fF8?si=OaIRc2TyiUfi8Ckm" } },
      { date: "2026-04-13", type: "release", time: "", title: "‘Caligo Pt.2’ DIGITAL RELEASE" },
      { date: "2026-04-13", type: "live", time: "20:00", title: "COMEBACK LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/y1KuyYaGcW8?si=U6RNzK6cx3zFEv4U" } },
      { date: "2026-04-13", type: "release", time: "18:00", title: "'Born Savage' M/V", links: { youtube: "https://youtu.be/XukB7ZG8CDQ?si=XCPw4VdZGDIUiSBP" } },
      { date: "2026-04-11", type: "live", time: "23:50", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/1-172887969" } },
      { date: "2026-04-09", type: "live", time: "20:00", title: "PLAVE LIVE 💙🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/R0bxmegTRLw?si=BdzdBXg2Z6Rx4SA0" } },
      { date: "2026-04-08", type: "event", time: "", title: "Pop-up Store 'Caligo Pt.2'", links: { info: "https://caligopt2popup.oopy.io/" } },
      { date: "2026-04-06", type: "live", time: "20:00", title: "PLAVE LIVE 💜❤️🖤", links: { youtube: "https://www.youtube.com/live/EP5Eg_qWYPw?si=EYy9QLmCxF4aKjz0" } },
      { date: "2026-04-04", type: "content", time: "20:00", title: "[플레젠트] 흥흥흥 듀엣 노래방 🎤🎼 with PLLI 🫶", links: { youtube: "https://www.youtube.com/watch?v=Qzn1BcDDo20" } },
      { date: "2026-04-03", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/jYA8CVc3cVI?si=FXqgaLJtNmWijc4i" } },
    ]
  }
,
  {
    key: "2026-03", label: "2026年3月 · PLAVE", entries: [
      { date: "2026-03-30", type: "live", time: "20:00", title: "PLAVE LIVE 💜🩷🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/4FCfta-yUdY?si=DoGzVmkSWFbNPf-t" } },
      { date: "2026-03-26", type: "live", time: "20:00", title: "PLAVE LIVE 💜", links: { youtube: "https://www.youtube.com/live/W5haD7mHLMg?si=1gK30aQO_cunE0m2" } },
      { date: "2026-03-23", type: "live", time: "20:00", title: "PLAVE LIVE ❤️", links: { youtube: "https://www.youtube.com/live/502AIgaU3Xc?si=9ZaDcCEYiL_10W2D" } },
      { date: "2026-03-20", type: "live", time: "20:00", title: "PLAVE LIVE 🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/vddblA-wJjk?si=zzOpKpSaxJ8kvbOB" } },
      { date: "2026-03-18", type: "live", time: "22:55", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/3-223707062?hl=ko" } },
      { date: "2026-03-17", type: "live", time: "20:00", title: "PLAVE LIVE 💙", links: { youtube: "https://www.youtube.com/live/gH4HuwYHz3U?si=RuqrK-anST7OEMWP" } },
      { date: "2026-03-16", type: "live", time: "20:00", title: "PLAVE LIVE 🖤", links: { youtube: "https://www.youtube.com/live/1f0hpxqaRP0?si=vlHVUer8hIKOhqJP" } },
      { date: "2026-03-14", type: "live", time: "17:28", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/3-223124154?hl=ko" } },
      { date: "2026-03-13", type: "media", time: "15:00", title: "SBS 컬쳐클럽K 💙💜🩷❤️🖤", bamby: true },
      { date: "2026-03-12", type: "anniversary", time: "", title: "Happy PLAVE Day" },
      { date: "2026-03-12", type: "live", time: "20:00", title: "PLAVE 3RD ANNIVERSARY LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/NJGnK5DC2-c?si=P6iCObYge4IlOTRl" } },
      { date: "2026-03-05", type: "live", time: "20:00", title: "PLAVE LIVE 💙❤️", links: { youtube: "https://www.youtube.com/live/hxPtDXulvpM?si=zAJ6x3lJxKHgJvke" } },
    ]
  }
,
  {
    key: "2026-02", label: "2026年2月 · PLAVE", entries: [
      { date: "2026-02-26", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/FGrQvtg1lgs?si=PeIJhQwcp-Cz9cQ5" } },
      { date: "2026-02-25", type: "live", time: "12:00", title: "WEVERSE LIVE 💙💜❤️", links: { weverse: "https://weverse.io/plave/live/0-170377442?hl=ko" } },
      { date: "2026-02-23", type: "live", time: "23:24", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/2-170334658?hl=ko" } },
      { date: "2026-02-20", type: "live", time: "23:28", title: "WEVERSE LIVE 🩷", bamby: true, links: { weverse: "https://weverse.io/plave/live/4-221137673?hl=ko" } },
      { date: "2026-02-19", type: "live", time: "20:00", title: "PLAVE LIVE 🖤", links: { youtube: "https://youtube.com/live/L1Kz0W3dKPI" } },
      { date: "2026-02-18", type: "content", time: "12:00", title: "[플레젠트] 2026 아스테룸 동계 외계체전 👽❄️ VCR & 비하인드", links: { youtube: "https://www.youtube.com/watch?v=5ZLX1PLErWQ" } },
      { date: "2026-02-16", type: "live", time: "20:30", title: "WEVERSE LIVE 💙💜🩷❤️🖤", bamby: true, links: { weverse: "https://weverse.io/plave/live/2-170031469?hl=ko" } },
      { date: "2026-02-14", type: "live", time: "23:40", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/3-220583777" } },
      { date: "2026-02-13", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/Xm5QIEoV8TU?si=ZIw4TREhblEolsby" } },
      { date: "2026-02-11", type: "content", time: "20:00", title: "[PLAVE BIRTHDAY GIFT] When I Was Your Man (원곡 : Bruno Mars) Covered by NOAH", links: { youtube: "https://youtu.be/LYm5M9fWy-4?si=AUauc4RM7_nv9hxx" } },
      { date: "2026-02-10", type: "anniversary", time: "", title: "Happy NOAH's Day" },
      { date: "2026-02-10", type: "live", time: "20:00", title: "NOAH B-DAY LIVE 💜", links: { youtube: "https://www.youtube.com/live/OyzcBQqoixg?si=eqUtvrWouTf7eTEJ" } },
      { date: "2026-02-09", type: "live", time: "23:25", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/4-220173558?hl=ko" } },
      { date: "2026-02-03", type: "content", time: "10:00", title: "[PLAVE BIRTHDAY GIFT] NOAH's Playlist 🎶💜", links: { youtube: "https://youtu.be/B2RWZ_sw0G8?si=mn8x8FiGtnrEdF8y" } },
      { date: "2026-02-02", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/xdz0eKgsxYU?si=OyRzjvk7sdKPhAiJ" } },
    ]
  }
,
  {
    key: "2026-01", label: "2026年1月 · PLAVE", entries: [
      { date: "2026-01-29", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/f5KabjD3A5o?si=W98Mo74d9AkCFdEY" } },
      { date: "2026-01-26", type: "live", time: "20:00", title: "PLAVE LIVE ❤️🖤", links: { youtube: "https://www.youtube.com/live/BznUcDlvFFI?si=bIpSZMuN789hHcNS" } },
      { date: "2026-01-22", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🖤", links: { youtube: "https://www.youtube.com/live/qLkJC4r2qs4?si=GEb-6_WcOLuwN0Va" } },
      { date: "2026-01-20", type: "live", time: "23:22", title: "WEVERSE LIVE 💙", links: { weverse: "https://weverse.io/plave/live/1-169027736?hl=ko" } },
      { date: "2026-01-20", type: "live", time: "22:00", title: "WEVERSE LIVE 🖤", links: { weverse: "https://weverse.io/plave/live/3-218719935?hl=ko" } },
      { date: "2026-01-19", type: "live", time: "20:00", title: "PLAVE LIVE 🩷❤️", bamby: true, links: { youtube: "https://www.youtube.com/live/1yPQ0b2yWBE?si=krt0ntcIl3Hs58U9" } },
      { date: "2026-01-19", type: "live", time: "01:06", title: "WEVERSE LIVE 💜", links: { weverse: "https://weverse.io/plave/live/2-168963014?hl=ko" } },
      { date: "2026-01-15", type: "live", time: "20:00", title: "PLAVE LIVE 💙❤️🖤", links: { youtube: "https://www.youtube.com/live/HOuPgVBBHPg?si=lke-M2iMl1iLhMRP" } },
      { date: "2026-01-12", type: "live", time: "20:00", title: "PLAVE LIVE 💜🩷", bamby: true, links: { youtube: "https://www.youtube.com/live/4xhX3zS9Ru0?si=PRNOPHUjy8lF3RB7" } },
      { date: "2026-01-10", type: "live", time: "12:50", title: "WEVERSE LIVE ❤️", links: { weverse: "https://weverse.io/plave/live/3-218017460" } },
      { date: "2026-01-09", type: "media", time: "18:00", title: "M2 우쥬레코드 💙💜", links: { youtube: "https://youtu.be/HvKi-PUT8oE?si=VW7Ae9OTz4PEh4bR" } },
      { date: "2026-01-08", type: "live", time: "20:00", title: "PLAVE LIVE 💜🩷❤️", bamby: true, links: { youtube: "https://www.youtube.com/live/qBgE3D-6adI?si=VSHjA0DwJ-3i948O" } },
      { date: "2026-01-07", type: "content", time: "20:00", title: "[플레젠트] 푸른 밤의 파노라마｜PLAVE 2025 RECAP", links: { youtube: "https://youtu.be/Bdfom-FdY80?si=uGyMpyIFBN-8Sa9-" } },
      { date: "2026-01-05", type: "live", time: "20:00", title: "PLAVE LIVE 💙🖤", links: { youtube: "https://www.youtube.com/live/WYqd1lqgeQs?si=0J4_-Q0uH5MZrrD0" } },
      { date: "2026-01-02", type: "live", time: "20:00", title: "PLAVE LIVE 💙💜🩷❤️🖤", bamby: true, links: { youtube: "https://www.youtube.com/live/u8PcPaFzeco?si=DGroOxbigBDX0fD9" } },
    ]
  }
,
  {
    key: "2025-12", label: "2025年12月 · 斑比相关", entries: [
      { date: "2025-12-31", type: "media", time: "19:50", title: "🎤 2025 MBC歌谣大祭典", bamby: true },
      { date: "2025-12-29", type: "live", time: "19:00", title: "💙💜🩷❤️🖤 五人直播", bamby: true, linkLabel: "回放", links: { bilibili: "https://www.bilibili.com/video/BV1fhvdBGEgP/", youtube: "https://www.youtube.com/watch?v=_SMm6lJWk7g" } },
      { date: "2025-12-25", type: "live", time: "19:51", title: "💗 单人直播（wvs）", bamby: true },
      { date: "2025-12-22", type: "live", time: "19:00", title: "💗 单人直播", bamby: true, linkLabel: "回放", links: { bilibili: "https://www.bilibili.com/video/BV17AB5BwEuz/", youtube: "https://www.youtube.com/watch?v=4xhX3zS9Ru0" } }
    ]
  }
];

/* ============================================================
   渲染
   ============================================================ */
const linkLabels = {
  weibo: "📕 微博", bilibili: "📺 B站", youtube: "▶️ YouTube", xiaohongshu: "📖 小红书", netease: "🎧 网易云", source: "📄 来源",
  weverse: "💙 Weverse", chzzk: "🎫 Chzzk", info: "🔗 相关链接"
};

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function linksHTML(links) {
  if (!links) return "";
  return Object.entries(links)
    .filter(([, url]) => url)
    .map(([key, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${linkLabels[key] || esc(key)}</a>`)
    .join("");
}

function contentHTML(str) {
  return esc(String(str).replace(/<\/?p>/gi, "\n")).replace(/\n{3,}/g, "\n\n").replace(/\n/g, "<br>");
}

/* 动态图库（语录多图等） */
const dynGalleries = {};
let dynGalleryN = 0;

function workCardHTML(item, { badge, badgeColor, zoom = true } = {}) {
  const badgeHTML = badge ? `<span class="work-card-badge ${badgeColor || ""}">${esc(badge)}</span>` : "";
  const coverImg = item.image || (item.images && item.images[0]) || "";

  let lightboxAttrs = "";
  if (item.gallery) {
    lightboxAttrs = `data-gallery="${esc(item.gallery)}" data-caption="${esc(item.title)}"`;
  } else if (item.images && item.images.length > 1) {
    const key = "__dyn" + (dynGalleryN++);
    dynGalleries[key] = item.images;
    lightboxAttrs = `data-gallery="${key}" data-caption="${esc(item.title)}"`;
  } else if (coverImg && zoom) {
    lightboxAttrs = `data-lightbox data-src="${esc(coverImg)}" data-caption="${esc(item.title)}"`;
  }

  const countHTML = item.imageCount
    ? `<p class="work-desc">🖼️ 共 ${item.imageCount} 张 · 点击翻看</p>`
    : (item.count ? `<p class="work-desc">🖼️ 共 ${item.count} 张</p>` : "");
  const srcHTML = item.source
    ? `<p class="work-author">🗓️ ${esc(item.source.date || "")}${item.source.title ? " · " + esc(item.source.title) : ""}</p>` : "";
  const timeHTML = item.time ? `<p class="work-author">⏱️ ${esc(item.time)}</p>` : "";
  const artistHTML = item.song ? `<p class="work-author">🎧 ${esc(item.song.artist || "")}</p>` : "";
  const productHTML = item.product ? `<p class="work-author">🏷️ ${esc(item.product.note || item.product.brand || "")}</p>` : "";
  const quoteHTML = item.content ? `<blockquote class="letter-content">${contentHTML(item.content)}</blockquote>` : "";

  const links = Object.assign({}, item.links);
  if (item.song && item.song.link) links.netease = item.song.link;
  if (item.source && item.source.url && !Object.values(links).includes(item.source.url)) links.source = item.source.url;
  const linksHTMLBlock = Object.keys(links).length ? `<div class="work-links">${linksHTML(links)}</div>` : "";

  const isLetter = !!item.content;
  const imgBlock = coverImg
    ? `<img class="work-card-img" src="${esc(coverImg)}" alt="${esc(item.title)}" loading="lazy" onerror="this.classList.add('broken')">`
    : `<div class="work-card-img letter-noimg">💌</div>`;

  return `
    <article class="work-card${isLetter ? " letter-card" : ""}">
      <div class="work-card-img-wrap${coverImg ? "" : " no-img"}" ${lightboxAttrs}>
        ${badgeHTML}
        ${imgBlock}
      </div>
      <div class="work-card-body">
        <h3 class="work-title">${esc(item.title)}</h3>
        ${item.date ? `<span class="work-date">${esc(item.date)}</span>` : ""}
        <p class="work-desc">${esc(item.desc || "")}</p>
        ${countHTML}
        ${item.author ? `<p class="work-author">✍️ ${esc(item.author)}${item.platform ? " · " + esc(item.platform) : ""}</p>` : ""}
        ${timeHTML}
        ${artistHTML}
        ${productHTML}
        ${quoteHTML}
        ${srcHTML}
        ${linksHTMLBlock}
      </div>
    </article>`;
}

function renderGrid(gridKey, data, opts) {
  const grid = document.querySelector(`[data-grid="${gridKey}"]`);
  if (grid) grid.innerHTML = data.map(item => workCardHTML(item, opts)).join("");
}

/* 安利向 */
renderGrid("covers", coversData, { badge: "🎤 翻唱", badgeColor: "pink" });
renderGrid("dances", dancesData, { badge: "💃 翻跳", badgeColor: "mint" });
renderGrid("stages", stagesData, { badge: "🎬 直拍", badgeColor: "sky" });
renderGrid("concerts", concertsData, { badge: "🎡 演唱会", badgeColor: "pink" });
renderGrid("certs", certsData, { badge: "🏆 证书", badgeColor: "mint" });

/* 物料汇总（全分类） */
const MAT_GRIDS = [
  { key: "concept",   data: materialsData.concept,            badge: "💿 回归照",   color: "pink" },
  { key: "photos",    data: materialsData.photos,             badge: "📷 官方照片", color: "sky" },
  { key: "personal",  data: materialsData["personal-photos"], badge: "🤳 个人照",   color: "mint" },
  { key: "magazine",  data: materialsData.magazine,           badge: "📰 杂志",     color: "pink" },
  { key: "mimu",      data: materialsData["personal-mimu"],   badge: "⭐ 咪姆",     color: "mint" },
  { key: "challenge", data: danceChallengeData,               badge: "💃 挑战",     color: "sky" }
];
MAT_GRIDS.forEach(g => renderGrid(g.key, g.data || [], { badge: g.badge, badgeColor: g.color }));

/* 斑比拾光（全分类） */
const TMI_META = {
  "cover":       { badge: "🎤 直播翻唱",  color: "pink" },
  "dance-cover": { badge: "🕺 直播翻跳",  color: "mint" },
  "song":        { badge: "🎧 推荐歌单",  color: "sky" },
  "snack":       { badge: "🍰 推荐物品",  color: "pink" },
  "letter":      { badge: "💌 语录·信件", color: "mint" },
  "behind":      { badge: "🎬 幕后花絮",  color: "sky" }
};
const tmiGrid = document.getElementById("tmi-grid");
function renderTMI(filter) {
  const list = filter === "all" ? tmiData : tmiData.filter(t => t.category === filter);
  tmiGrid.innerHTML = list.map(t => {
    const meta = TMI_META[t.category] || { badge: t.category, color: "" };
    return workCardHTML(t, { badge: meta.badge, badgeColor: meta.color });
  }).join("");
}
renderTMI("all");

/* ---------------- 日程渲染（plave.global 形式） ---------------- */
const scheduleTypes = {
  live:        { label: "直播",      icon: "🎤", cls: "tag-live" },
  release:     { label: "发行",      icon: "💿", cls: "tag-release" },
  media:       { label: "演出·放送", icon: "🎬", cls: "tag-perf" },
  event:       { label: "活动",      icon: "🎡", cls: "tag-event" },
  anniversary: { label: "纪念日",    icon: "🎂", cls: "tag-anni" },
  content:     { label: "官方内容",  icon: "📺", cls: "tag-content" }
};
const WEEK_CN = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
let schedMonthIdx = scheduleMonths.findIndex(m => m.key === (() => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0"); })());
if (schedMonthIdx < 0) schedMonthIdx = 0;
let schedFilter = "all";
const schedDays = document.getElementById("scheduleDays");
const schedMonthEl = document.getElementById("schedMonth");
const schedPrev = document.getElementById("schedPrev");
const schedNext = document.getElementById("schedNext");

function renderSchedule() {
  const month = scheduleMonths[schedMonthIdx];
  schedMonthEl.textContent = month.label;
  schedPrev.disabled = schedMonthIdx === scheduleMonths.length - 1;
  schedNext.disabled = schedMonthIdx === 0;
  const entries = month.entries
    .filter(en => schedFilter === "all" || en.type === schedFilter)
    .sort((a, b) => b.date.localeCompare(a.date) || String(b.time || "99").localeCompare(String(a.time || "99")));
  if (!entries.length) { schedDays.innerHTML = `<p class="sched-empty">🍭 这个月暂时没有相关行程～</p>`; return; }
  let html = "", cur = "";
  for (const en of entries) {
    if (en.date !== cur) {
      cur = en.date;
      const dt = new Date(en.date + "T12:00:00");
      html += `<div class="sched-day-head"><span class="sched-day-date">${dt.getMonth() + 1}月${dt.getDate()}日</span><span class="sched-day-week">${WEEK_CN[dt.getDay()]}</span></div>`;
    }
    const t = scheduleTypes[en.type] || { label: en.type, icon: "⭐", cls: "" };
    const links = en.links ? Object.entries(en.links).filter(([, u]) => u).map(([k, u]) =>
      `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${linkLabels[k] || esc(k)}${en.linkLabel ? " · " + esc(en.linkLabel) : ""}</a>`).join("") : "";
    html += `<div class="sched-item${en.bamby ? " is-bamby" : ""}">
      ${en.bamby ? `<span class="bamby-flag">🩷 斑比</span>` : ""}
      <span class="schedule-tag ${t.cls}">${t.icon} ${t.label}</span>
      <span class="sched-time">${esc(en.time || "--:--")}</span>
      <span class="sched-title">${esc(en.title)}</span>
      ${links ? `<span class="sched-links">${links}</span>` : `<span class="sched-links"></span>`}
    </div>`;
  }
  schedDays.innerHTML = html;
}
schedPrev.addEventListener("click", () => { if (schedMonthIdx < scheduleMonths.length - 1) { schedMonthIdx++; renderSchedule(); } });
schedNext.addEventListener("click", () => { if (schedMonthIdx > 0) { schedMonthIdx--; renderSchedule(); } });
document.getElementById("sched-chips").addEventListener("click", e => {
  const btn = e.target.closest(".chip[data-filter]");
  if (!btn) return;
  document.querySelectorAll("#sched-chips .chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  schedFilter = btn.dataset.filter;
  renderSchedule();
});
renderSchedule();

/* ---------------- 首屏 Q版小人轮换 ---------------- */
const heroGifs = [
  "https://img.cdn1.vip/i/6996a1e6ebb31_1771479526.webp",
  "https://s2.loli.net/2026/02/04/yGAfJciW98KC7Ok.gif",
  "https://s2.loli.net/2026/02/05/4cUxoY1vaSlIdCM.png",
  "https://s2.loli.net/2026/02/01/AG9MCPQxbv3mfia.jpg",
  "https://s2.loli.net/2026/02/03/atiylur5RZvNs9K.png"
];
const heroGif = document.getElementById("heroGif");
let gifIdx = 0;
try {
  gifIdx = Math.abs(+localStorage.getItem("bambyGifIdx") || 0) % heroGifs.length;
  localStorage.setItem("bambyGifIdx", (gifIdx + 1) % heroGifs.length);
} catch (err) {
  gifIdx = Math.floor(Math.random() * heroGifs.length);
}
heroGif.src = heroGifs[gifIdx];
heroGif.addEventListener("click", () => {
  gifIdx = (gifIdx + 1) % heroGifs.length;
  heroGif.src = heroGifs[gifIdx];
  try { localStorage.setItem("bambyGifIdx", (gifIdx + 1) % heroGifs.length); } catch (err) {}
});

/* ============================================================
   交互
   ============================================================ */
/* 通用选项卡（安利向 / 物料汇总） */
document.querySelectorAll(".sub-nav").forEach(nav => {
  nav.addEventListener("click", e => {
    const btn = e.target.closest(".chip[data-tab]");
    if (!btn) return;
    nav.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    const panels = document.getElementById(nav.id.replace("-tabs", "-panels"));
    if (panels) {
      panels.querySelectorAll(".tab-panel").forEach(p =>
        p.classList.toggle("active", p.dataset.panel === btn.dataset.tab));
    }
  });
});

/* 斑比拾光筛选 */
document.getElementById("tmi-chips").addEventListener("click", e => {
  const btn = e.target.closest(".chip[data-filter]");
  if (!btn) return;
  document.querySelectorAll("#tmi-chips .chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderTMI(btn.dataset.filter);
});

/* 灯箱（支持整套图翻页） */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbCounter = document.getElementById("lbCounter");
let lbList = [], lbIdx = 0;

function openLightbox(list, caption) {
  lbList = (list || []).filter(Boolean);
  lbIdx = 0;
  lightboxCaption.dataset.cap = caption || "";
  showLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function showLightbox() {
  if (!lbList.length) return;
  const cap = lightboxCaption.dataset.cap || "";
  lightboxImg.src = lbList[lbIdx];
  lightboxCaption.textContent = cap + (lbList.length > 1 ? ` · ${lbIdx + 1}/${lbList.length}` : "");
  lbCounter.textContent = lbList.length > 1 ? `${lbIdx + 1} / ${lbList.length}` : "";
  const multi = lbList.length > 1;
  lbPrev.style.display = multi ? "grid" : "none";
  lbNext.style.display = multi ? "grid" : "none";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.addEventListener("click", e => {
  const g = e.target.closest("[data-gallery]");
  if (g) {
    openLightbox(imageGalleries[g.dataset.gallery] || dynGalleries[g.dataset.gallery] || [], g.dataset.caption || "");
    return;
  }
  const t = e.target.closest("[data-lightbox]");
  if (t) {
    openLightbox([t.dataset.src], t.dataset.caption || "");
    return;
  }
  if (e.target === lightbox || e.target.closest(".lightbox-close")) closeLightbox();
});
lbPrev.addEventListener("click", e => { e.stopPropagation(); if (lbList.length) { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; showLightbox(); } });
lbNext.addEventListener("click", e => { e.stopPropagation(); if (lbList.length) { lbIdx = (lbIdx + 1) % lbList.length; showLightbox(); } });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbPrev.click();
  if (e.key === "ArrowRight") lbNext.click();
});

/* 滚动显现 */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* 导航高亮 + 折叠 */
const navLinks = document.querySelectorAll(".nav-link");
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
const navIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
sections.forEach(s => navIO.observe(s));

const navToggle = document.getElementById("navToggle");
const navLinksBox = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinksBox.classList.toggle("open"));
navLinksBox.addEventListener("click", e => { if (e.target.closest(".nav-link")) navLinksBox.classList.remove("open"); });

/* 回到顶部 */
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 600);
}, { passive: true });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
