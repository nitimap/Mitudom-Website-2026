import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'โรงเรียนอนุบาลมิตรอุดม | Mitudom Kindergarten', template: '%s | โรงเรียนอนุบาลมิตรอุดม' },
  description: 'โรงเรียนอนุบาลมิตรอุดม — เติบโตอย่างมีความสุข พร้อมสำหรับก้าวต่อไป นัดเยี่ยมชมโรงเรียนและทำความรู้จักแนวทางการเรียนรู้ของเรา',
  keywords: ['โรงเรียนอนุบาลมิตรอุดม', 'Mitudom Kindergarten', 'โรงเรียนอนุบาล', 'อนุบาล สำโรง', 'อนุบาล สมุทรปราการ', 'โรงเรียนเด็กเล็ก', 'โรงเรียนเตรียมอนุบาล'],
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body><a className="skip-link" href="#main">ข้ามไปยังเนื้อหา</a><Header />{children}<Footer /></body></html>;
}
