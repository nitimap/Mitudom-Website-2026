'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { VisitButton } from './EnrollmentActions';

const links = [
  ['หน้าแรก', '/'], ['แนวคิดของเรา', '/#approach'], ['หลักสูตร', '/#learning'],
  ['ทำไมมิตรอุดม', '/#why-mitudom'], ['ชีวิตที่มิตรอุดม', '/#life-at-mitudom'],
  ['การสมัครเรียน', '/#visit'], ['Open House', '/#visit'],
] as const;

export function Header() {
  const [activeLabel, setActiveLabel] = useState<string>('หน้าแรก');
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const updateFromHash = () => {
      const href = window.location.hash ? `/${window.location.hash}` : '/';
      setActiveLabel((current) => links.find(([label, link]) => label === current && link === href)?.[0] ?? links.find(([, link]) => link === href)?.[0] ?? 'หน้าแรก');
    };
    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, []);

  return <header className="site-header">
    <div className="header-inner container">
      <Link className="brand" href="/" aria-label="โรงเรียนอนุบาลมิตรอุดม หน้าหลัก">
        <span className="brand-mark"><Image src="/images/logo.png" alt="" width={60} height={60} priority /></span>
        <span><strong>โรงเรียนอนุบาลมิตรอุดม</strong><small>Mitudom Kindergarten</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="เมนูหลัก">
        {links.map(([label, href]) => <Link href={href} key={label} aria-current={activeLabel === label ? 'page' : undefined} onClick={() => setActiveLabel(label)}>{label}</Link>)}
      </nav>
      <VisitButton className="button button--small header-cta" />
      <details className="mobile-menu" ref={menuRef}>
        <summary aria-label="เปิดเมนู">เมนู <span aria-hidden="true">☰</span></summary>
        <nav aria-label="เมนูมือถือ">
          {links.map(([label, href]) => <Link href={href} key={label} aria-current={activeLabel === label ? 'page' : undefined} onClick={() => { setActiveLabel(label); menuRef.current?.removeAttribute('open'); }}>{label}</Link>)}
          <VisitButton className="button mobile-cta" />
        </nav>
      </details>
    </div>
  </header>;
}
