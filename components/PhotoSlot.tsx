type PhotoSlotProps = {
  label: string;
  description: string;
  ratio?: 'wide' | 'portrait' | 'landscape' | 'square';
  className?: string;
};

export function PhotoSlot({ label, description, ratio = 'landscape', className = '' }: PhotoSlotProps) {
  return (
    <div className={`photo-slot photo-slot--${ratio} ${className}`} role="img" aria-label={`พื้นที่สำหรับภาพถ่าย: ${description}`}>
      <span className="photo-slot__mark" aria-hidden="true">○</span>
      <span className="photo-slot__content">
        <strong>{label}</strong>
        <span>{description}</span>
        <small>ภาพถ่ายโรงเรียนจริง · อัตราส่วน {ratio === 'wide' ? '16:9' : ratio === 'portrait' ? '4:5' : ratio === 'square' ? '1:1' : '3:2'}</small>
      </span>
    </div>
  );
}
