import Link from 'next/link';

export function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <div><div className="footer-brand">โรงเรียนอนุบาลมิตรอุดม</div><p>Mitudom Kindergarten</p><p>Happy Childhood. Ready for What’s Next.</p></div>
      <div><strong>สำรวจเว็บไซต์</strong><Link href="/#approach">แนวทางของเรา</Link><Link href="/#learning">การเรียนรู้</Link><Link href="/#visit">นัดเยี่ยมชม</Link></div>
      <div><strong>ติดต่อโรงเรียน</strong><a href="tel:027484854">02-748-4854</a><a href="tel:027484855">02-748-4855</a><a href="https://line.me/R/ti/p/@mitudom">LINE Official: @mitudom</a><a href="http://www.mitudom.com/">www.mitudom.com</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Mitudom Kindergarten</span><span>โรงเรียนอนุบาลมิตรอุดม</span></div>
  </footer>;
}
