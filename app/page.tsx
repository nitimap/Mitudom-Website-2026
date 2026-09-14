import Link from 'next/link';
import { PhotoSlot } from '@/components/PhotoSlot';

const promises = [
  { word: 'HAPPY', th: 'มีความสุข', text: 'พื้นที่ให้เด็กได้เติบโตในจังหวะของตัวเอง' },
  { word: 'CARED', th: 'ได้รับการดูแล', text: 'มองเห็นและใส่ใจเด็กแต่ละคน' },
  { word: 'SAFE', th: 'รู้สึกปลอดภัย', text: 'สภาพแวดล้อมที่เด็กเล็กใช้ชีวิตได้อย่างมั่นใจ' },
  { word: 'READY', th: 'พร้อมก้าวต่อไป', text: 'วางพื้นฐานเพื่อการเรียนรู้ในวันข้างหน้า' },
];

export default function Home() {
  return <main id="main">
    <section className="hero">
      <div className="container hero-copy">
        <p className="hero-intro">Mitudom Kindergarten <span>·</span> Happy Childhood. Ready for What’s Next.</p>
        <h1>เติบโตอย่างมีความสุข<br /><em>พร้อมสำหรับก้าวต่อไป</em></h1>
        <p className="hero-lead">ช่วงเวลาแรกของการเรียนรู้ ควรเต็มไปด้วยความสุข ความเข้าใจ และพื้นที่ให้เด็กได้เป็นตัวเอง</p>
        <div className="actions"><Link className="button" href="#visit">นัดเยี่ยมชมโรงเรียน <span aria-hidden="true">↗</span></Link><Link className="text-link" href="#visit">ลงทะเบียน Open House 28 ตุลาคม 2569 <span aria-hidden="true">↗</span></Link></div>
      </div>
      <PhotoSlot className="hero-photo" ratio="wide" label="ภาพหลัก · ชีวิตในห้องเรียน" description="เด็กกำลังเรียนรู้อย่างเป็นธรรมชาติ โดยมีครูอยู่ใกล้ ๆ" />
    </section>

    <section id="approach" className="belief section container"><div className="section-side"><span className="rule-label">สิ่งที่เราเชื่อ</span></div><div><h2>วัยอนุบาลไม่ใช่ช่วงที่ต้องรีบ<br />แต่เป็นช่วงที่ต้องวางพื้นฐานให้ดี</h2><p className="large-copy">เมื่อเด็กได้ใช้เวลาเล่น สำรวจ ลองผิดลองถูก และเรียนรู้ร่วมกับคนรอบตัว สิ่งสำคัญค่อย ๆ เติบโตไปพร้อมกับเขา</p></div></section>

    <section className="promises"><div className="container"><div className="promise-heading"><p>ที่มิตรอุดม เราอยากให้ทุกวันของเด็กเป็นวันที่...</p><h2>HAPPY <span>•</span> CARED <span>•</span> SAFE <span>•</span> READY</h2></div><div className="promise-list">{promises.map((item) => <div key={item.word}><span>{item.word}</span><h3>{item.th}</h3><p>{item.text}</p></div>)}</div></div></section>

    <section id="learning" className="story section container"><div className="story-media"><PhotoSlot ratio="portrait" label="การเรียนรู้" description="เด็กกำลังทดลอง สร้าง หรือทำกิจกรรมด้วยตัวเอง" /></div><div className="story-copy"><span className="rule-label">การเรียนรู้ที่มีความหมาย</span><h2>เมื่อเด็กได้ลอง ได้คิด และได้ทำ การเรียนรู้จึงมีความหมาย</h2><p>การลงมือทำเปิดโอกาสให้เด็กตั้งคำถาม ค้นพบ และค่อย ๆ สร้างความมั่นใจในการเรียนรู้</p></div></section>

    <section className="readiness section"><div className="container readiness-copy"><span className="rule-label">พร้อมสำหรับก้าวต่อไป</span><h2>เตรียมพร้อมสำหรับ ป.1<br />โดยยังได้เป็นเด็กอนุบาล</h2><p>ความพร้อมไม่ได้มีเพียงเรื่องวิชาการ แต่รวมถึงความมั่นใจในการคิด ทำ และอยู่ร่วมกับผู้อื่น</p></div><PhotoSlot ratio="wide" label="ความพร้อมสำหรับ ป.1" description="เด็กอนุบาลโตทำงานอย่างเป็นอิสระในบรรยากาศห้องเรียนจริง" /></section>

    <section id="life-at-mitudom" className="environment section container"><div className="environment-copy"><span className="rule-label">พื้นที่ของเด็กเล็ก</span><h2>โรงเรียนที่ออกแบบจากมุมมองของเด็กเล็ก</h2><p>สภาพแวดล้อมที่ดีชวนให้เด็กอยากสำรวจ เคลื่อนไหว และเรียนรู้ด้วยความมั่นใจ</p></div><div className="environment-photos"><PhotoSlot ratio="landscape" label="พื้นที่เรียนรู้" description="เด็กใช้พื้นที่ห้องเรียนหรือมุมกิจกรรมตามวัย" /><PhotoSlot ratio="square" label="รายละเอียดด้านความปลอดภัย" description="เด็กใช้บันไดหรือราวจับ พร้อมภาพรายละเอียดสภาพแวดล้อม" /></div></section>

    <section className="partnership section"><div className="container partnership-inner"><div className="story-copy"><span className="rule-label">เดินไปด้วยกัน</span><h2>ร่วมกันดูแล เข้าใจ และติดตามพัฒนาการของลูก</h2><p>การสื่อสารระหว่างบ้านและโรงเรียนช่วยให้เราเข้าใจเด็กคนเดียวกันได้รอบด้านขึ้น</p><p className="content-note">รายละเอียดช่องทางสื่อสารและภาพ WebApp รอข้อมูลยืนยันจากโรงเรียน</p></div><PhotoSlot ratio="portrait" label="บ้านและโรงเรียน" description="ภาพหน้าจอ WebApp จริงบนโทรศัพท์ หรือผู้ปกครองพูดคุยกับครู" /></div></section>

    <section id="why-mitudom" className="heritage section container"><div><span className="heritage-number">40<span>+</span></span><span className="rule-label">ปีของประสบการณ์</span></div><div><h2>กว่า 40 ปีของประสบการณ์ ที่ยังพัฒนาและเติบโตไปพร้อมกับเด็ก</h2><p>ประสบการณ์ที่ผ่านมาเป็นส่วนหนึ่งของเรื่องราว และเรายังคงมองไปข้างหน้าพร้อมเด็กทุกคน</p><PhotoSlot ratio="landscape" label="เรื่องราวของมิตรอุดม" description="ภาพถ่ายเก่าของโรงเรียนคู่กับภาพโรงเรียนในปัจจุบัน หากมีสิทธิ์ใช้งาน" /></div></section>

    <section id="visit" className="visit"><div className="container visit-inner"><div><span className="rule-label">มาเห็นด้วยตัวเอง</span><h2>โรงเรียนแรกของลูก<br />เป็นเรื่องที่ควรได้เห็นด้วยตัวเอง</h2><p>มาทำความรู้จักบรรยากาศและพูดคุยกับโรงเรียนก่อนตัดสินใจ</p><p>ช่องทางนัดหมายและลิงก์ลงทะเบียน Open House รอข้อมูลจากโรงเรียน</p><div className="actions"><span className="button button--light" aria-disabled="true">นัดเยี่ยมชมโรงเรียน</span><span className="text-link text-link--light">ลงทะเบียน Open House 28 ตุลาคม 2569</span></div></div><PhotoSlot ratio="portrait" label="วันที่มาเยี่ยมชม" description="บรรยากาศอบอุ่นขณะเด็กและครูพบกันที่โรงเรียน" /></div></section>
  </main>;
}
