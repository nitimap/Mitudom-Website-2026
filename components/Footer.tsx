import Link from 'next/link';

export function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <div><div className="footer-brand">โรงเรียนอนุบาลมิตรอุดม</div><p>Mitudom Kindergarten</p><p>Happy Childhood. Ready for What’s Next.</p></div>
      <div><strong>สำรวจเว็บไซต์</strong><Link href="/#approach">แนวทางของเรา</Link><Link href="/#learning">การเรียนรู้</Link><Link href="/#visit">นัดเยี่ยมชม</Link></div>
      <div><strong>ติดต่อโรงเรียน</strong><p>ข้อมูลที่อยู่ โทรศัพท์ และช่องทางติดต่อ<br />รอการยืนยันจากโรงเรียน</p><Link href="/#visit">ดูการนัดเยี่ยมชม ↗</Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Mitudom Kindergarten</span><span>โรงเรียนอนุบาลมิตรอุดม</span></div>
  </footer>;
}
