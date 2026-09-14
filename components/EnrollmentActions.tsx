import { OPEN_HOUSE_REGISTRATION_URL, VISIT_BOOKING_URL } from '@/lib/actions';

export function VisitButton({ className = 'button' }: { className?: string }) {
  return <a className={className} href={VISIT_BOOKING_URL}>นัดเยี่ยมชมโรงเรียน <span aria-hidden="true">↗</span></a>;
}

export function OpenHouseAction({ className = 'text-link' }: { className?: string }) {
  return <a className={className} href={OPEN_HOUSE_REGISTRATION_URL}>ลงทะเบียน Open House 28 ตุลาคม 2569 <span aria-hidden="true">↗</span></a>;
}
