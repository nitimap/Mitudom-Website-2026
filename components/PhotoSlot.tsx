type PhotoSlotProps = {
  label: string;
  description: string;
  ratio?: 'wide' | 'portrait' | 'landscape' | 'square';
  className?: string;
};

export function PhotoSlot({ ratio = 'landscape', className = '' }: PhotoSlotProps) {
  return (
    <div className={`photo-slot photo-slot--${ratio} ${className}`} aria-hidden="true">
      <span className="photo-slot__mark" aria-hidden="true">○</span>
    </div>
  );
}
