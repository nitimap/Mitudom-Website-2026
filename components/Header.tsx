import Link from 'next/link';
import Image from 'next/image';
import { VisitButton } from './EnrollmentActions';

const links = [
  ['หน้าหลัก', '/'], ['แนวทางของเรา', '/#approach'], ['หลักสูตร', '/#learning'],
  ['ทำไมมิตรอุดม', '/#why-mitudom'], ['ชีวิตที่มิตรอุดม', '/#life-at-mitudom'],
  ['การสมัครเรียน', '/#visit'], ['Open House', '/#visit'], ['ติดต่อเรา', '/#visit'],
] as const;

export function Header() {
  return <header className="site-header">
    <div className="header-inner container">
      <Link className="brand" href="/" aria-label="โรงเรียนอนุบาลมิตรอุดม หน้าหลัก">
        <span className="brand-mark"><Image src="/images/logo.png" alt="" width={50} height={50} priority /></span>
        <span><strong>โรงเรียนอนุบาลมิตรอุดม</strong><small>Mitudom Kindergarten</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="เมนูหลัก">
        {links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <VisitButton className="button button--small header-cta" />
      <details className="mobile-menu">
        <summary aria-label="เปิดเมนู">เมนู <span aria-hidden="true">☰</span></summary>
        <nav aria-label="เมนูมือถือ">
          {links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
          <VisitButton />
        </nav>
      </details>
    </div>
  </header>;
}
