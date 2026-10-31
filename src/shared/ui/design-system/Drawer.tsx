import type { ReactNode } from 'react';
import { Overlay } from './Overlay';
import { useDialog } from './useDialog';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: 'left' | 'right';
  className?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function Drawer({ open, onClose, children, side = 'right', className = '', ariaLabel = 'Drawer', ariaLabelledBy }: DrawerProps) {
  const { panelRef } = useDialog(open, onClose);
  if (!open) return null;
  return <div className="fixed inset-0 z-50"><Overlay onClick={onClose} /><aside ref={panelRef} role="dialog" aria-modal="true" aria-label={ariaLabelledBy ? undefined : ariaLabel} aria-labelledby={ariaLabelledBy} className={`fixed inset-y-0 ${side === 'right' ? 'right-0' : 'left-0'} z-10 h-full bg-white shadow-2xl ${className}`}>{children}</aside></div>;
}
