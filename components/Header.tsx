import Link from 'next/link';

const links = [
  ['หน้าหลัก', '/'], ['แนวทางของเรา', '/#approach'], ['หลักสูตร', '/#learning'],
  ['ทำไมมิตรอุดม', '/#why-mitudom'], ['ชีวิตที่มิตรอุดม', '/#life-at-mitudom'],
  ['การสมัครเรียน', '/#visit'], ['Open House', '/#visit'], ['ติดต่อเรา', '/#visit'],
] as const;

export function Header() {
  return <header className="site-header">
    <div className="header-inner container">
      <Link className="brand" href="/" aria-label="โรงเรียนอนุบาลมิตรอุดม หน้าหลัก">
        <span className="brand-symbol" aria-hidden="true">ม</span>
        <span><strong>โรงเรียนอนุบาลมิตรอุดม</strong><small>Mitudom Kindergarten</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="เมนูหลัก">
        {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="button button--small header-cta" href="/#visit">นัดเยี่ยมชมโรงเรียน <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="เปิดเมนู">เมนู <span aria-hidden="true">☰</span></summary>
        <nav aria-label="เมนูมือถือ">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="button" href="/#visit">นัดเยี่ยมชมโรงเรียน ↗</Link>
        </nav>
      </details>
    </div>
  </header>;
}
