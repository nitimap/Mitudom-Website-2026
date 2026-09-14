import Image from 'next/image';
import { PhotoSlot } from '@/components/PhotoSlot';
import { OpenHouseAction, VisitButton } from '@/components/EnrollmentActions';

const promises = [
  { word: 'HAPPY', th: 'มีความสุข', text: 'ได้เล่น สำรวจ และเติบโตในจังหวะของตัวเอง' },
  { word: 'CARED', th: 'ได้รับการดูแล', text: 'ห้องเรียนไม่เกิน 25 คน มีครูประจำชั้นและพี่เลี้ยงอย่างละ 1 คน เพื่อมองเห็นและติดตามเด็กแต่ละคนอย่างใกล้ชิด' },
  { word: 'SAFE', th: 'รู้สึกปลอดภัย', text: 'CCTV ระบบป้องกันอัคคีภัยครบวงจร และเครื่องฟอกอากาศ ดูแลควบคู่กับบันไดและราวจับสำหรับเด็ก พื้นกันกระแทก และวัสดุป้องกันมุมเสา' },
  { word: 'READY', th: 'พร้อมก้าวต่อไป', text: 'ค่อย ๆ ปูพื้นฐานตั้งแต่ อ.1 โดยไม่เร่งอ่านเขียน ให้เด็กได้เรียนรู้วิชาการผ่านการลงมือทำ คิด สื่อสาร ฝึกทักษะชีวิตและความรับผิดชอบ' },
];

export default function Home() {
  return <main id="main">
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-intro">Mitudom Kindergarten <span>·</span> Happy Childhood. Ready for What’s Next.</p>
        <h1><span className="headline-phrase">เติบโตอย่างมีความสุข</span>{' '}<em className="headline-phrase">พร้อมสำหรับก้าวต่อไป</em></h1>
        <p className="hero-lead">ช่วงเวลาแรกของการเรียนรู้ ควรเต็มไปด้วยความสุข ความเข้าใจ และพื้นที่ให้เด็กได้เป็นตัวเอง</p>
        <div className="actions"><VisitButton /><OpenHouseAction /></div>
      </div>
      <div className="hero-photo">
        <Image src="/images/home/hero-puppet-teacher-edited.png" alt="ครูและเด็ก ๆ เรียนรู้ร่วมกันผ่านการเล่นหุ่นมือในห้องเรียน" fill priority sizes="(min-width: 1000px) 54vw, (min-width: 761px) 85vw, 100vw" />
      </div>
    </section>

    <section id="approach" className="belief section container"><div className="section-side"><span className="rule-label">สิ่งที่เราเชื่อ</span></div><div><h2><span className="headline-phrase">วัยอนุบาลไม่ใช่ช่วงที่ต้องรีบ</span>{' '}<span className="headline-phrase">แต่เป็นช่วงที่ต้องวางพื้นฐานให้ดี</span></h2><p className="large-copy">เมื่อเด็กได้ใช้เวลาเล่น สำรวจ ลองผิดลองถูก และเรียนรู้ร่วมกับคนรอบตัว สิ่งสำคัญค่อย ๆ เติบโตไปพร้อมกับเขา</p></div></section>

    <section className="promises"><div className="container"><div className="promise-heading"><p>ที่มิตรอุดม เราอยากให้ทุกวันของเด็กเป็นวันที่...</p><h2>HAPPY <span>•</span> CARED <span>•</span> SAFE <span>•</span> READY</h2></div><div className="promise-list">{promises.map((item) => <div key={item.word}><span>{item.word}</span><h3>{item.th}</h3><p>{item.text}</p></div>)}</div></div></section>

    <section id="learning" className="story section container"><div className="story-media"><PhotoSlot ratio="portrait" label="การเรียนรู้" description="เด็กกำลังทดลอง สร้าง หรือทำกิจกรรมด้วยตัวเอง" /></div><div className="story-copy"><span className="rule-label">การเรียนรู้ที่มีความหมาย</span><h2><span className="headline-phrase">เมื่อเด็กได้ลอง <span className="phrase-together">ได้คิด</span> <span className="phrase-together">และได้ทำ</span></span>{' '}<span className="headline-phrase"><span className="phrase-together">การเรียนรู้</span>จึงมีความหมาย</span></h2><p>เด็กได้ตั้งคำถาม ทดลอง แก้ปัญหา และสร้างสรรค์ผ่านการลงมือทำ ก่อนค้นพบคำตอบด้วยตัวเอง</p></div></section>

    <section className="readiness section"><div className="container readiness-copy"><span className="rule-label">พร้อมสำหรับก้าวต่อไป</span><h2><span className="headline-phrase">เตรียมพร้อมสำหรับ ป.1</span>{' '}<span className="headline-phrase">โดยยังได้เป็นเด็กอนุบาล</span></h2><p>ความพร้อมไม่ได้หมายถึงการอ่านเขียนให้เร็วที่สุด แต่คือการค่อย ๆ สร้างพื้นฐานภาษา คณิตศาสตร์ การคิด การสื่อสาร และสมาธิตั้งแต่ อ.1 พร้อมฝึกความรับผิดชอบ การช่วยเหลือตัวเอง และการอยู่ร่วมกับผู้อื่น</p></div><PhotoSlot ratio="wide" label="ความพร้อมสำหรับ ป.1" description="เด็กอนุบาลโตทำงานอย่างเป็นอิสระในบรรยากาศห้องเรียนจริง" /></section>

    <section id="life-at-mitudom" className="environment section container"><div className="environment-copy"><span className="rule-label">พื้นที่ของเด็กเล็ก</span><h2>โรงเรียนที่ออกแบบจาก<span className="phrase-together">มุมมอง</span>ของเด็กเล็ก</h2><p>สภาพแวดล้อมที่ดีชวนให้เด็กอยากสำรวจ เคลื่อนไหว และเรียนรู้ด้วยความมั่นใจ</p></div><div className="environment-photos"><PhotoSlot ratio="landscape" label="พื้นที่เรียนรู้" description="เด็กใช้พื้นที่ห้องเรียนหรือมุมกิจกรรมตามวัย" /><PhotoSlot ratio="square" label="รายละเอียดด้านความปลอดภัย" description="เด็กใช้บันไดหรือราวจับ พร้อมภาพรายละเอียดสภาพแวดล้อม" /></div></section>

    <section className="partnership section"><div className="container partnership-inner"><div className="story-copy"><span className="rule-label">เดินไปด้วยกัน</span><h2>ร่วมกันดูแล เข้าใจ และติดตาม<span className="phrase-together phrase-together--wide">พัฒนาการของลูก</span></h2><p>ผู้ปกครองเปิดดูรายงานพัฒนาการรายสัปดาห์บน WebApp ของโรงเรียนได้หลังจบแต่ละสัปดาห์ และติดตามภาพรวมผ่านรายงานพัฒนาการรายภาคเรียน</p><p>แต่ละระดับชั้นยังสื่อสารเรื่องการเรียนรู้ประจำสัปดาห์ เพื่อให้บ้านและโรงเรียนเข้าใจและดูแลเด็กไปด้วยกัน</p></div><PhotoSlot ratio="portrait" label="บ้านและโรงเรียน" description="ภาพหน้าจอ WebApp จริงบนโทรศัพท์ หรือผู้ปกครองพูดคุยกับครู" /></div></section>

    <section id="why-mitudom" className="heritage section container"><div><span className="heritage-number">40<span>+</span></span><span className="rule-label">ปีของประสบการณ์</span></div><div><h2><span className="headline-phrase">กว่า 40 ปีของประสบการณ์</span>{' '}<span className="headline-phrase">ที่ยังพัฒนาและเติบโตไปพร้อมกับเด็ก</span></h2><p>มิตรอุดมนำประสบการณ์ที่สั่งสมมาผสานกับการพัฒนาวิธีเรียนรู้ การดูแล เทคโนโลยี และสภาพแวดล้อมอย่างต่อเนื่อง ให้เหมาะกับเด็กและครอบครัวในวันนี้</p><PhotoSlot ratio="landscape" label="เรื่องราวของมิตรอุดม" description="ภาพถ่ายเก่าของโรงเรียนคู่กับภาพโรงเรียนในปัจจุบัน หากมีสิทธิ์ใช้งาน" /></div></section>

    <section id="visit" className="visit"><div className="container visit-inner"><div><span className="rule-label">มาเห็นด้วยตัวเอง</span><h2><span className="headline-phrase">โรงเรียนแรกของลูก</span>{' '}<span className="headline-phrase">เป็นเรื่องที่ควร<span className="phrase-together">ได้เห็น</span>ด้วยตัวเอง</span></h2><p>มาทำความรู้จักบรรยากาศและพูดคุยกับโรงเรียนก่อนตัดสินใจ</p><div className="actions"><VisitButton className="button button--light" /><OpenHouseAction className="text-link text-link--light" /></div></div><PhotoSlot ratio="portrait" label="วันที่มาเยี่ยมชม" description="บรรยากาศอบอุ่นขณะเด็กและครูพบกันที่โรงเรียน" /></div></section>
  </main>;
}
