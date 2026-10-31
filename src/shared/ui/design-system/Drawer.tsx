import type { ReactNode } from 'react';
import { Overlay } from './Overlay';
import { useDialog } from './useDialog';

type DrawerProps = { open: boolean; onClose: () => void; children: ReactNode; side?: 'left' | 'right'; className?: string };

export function Drawer({ open, onClose, children, side = 'right', className = '' }: DrawerProps) {
  const { panelRef } = useDialog(open, onClose);
  if (!open) return null;
  return <div className="fixed inset-0 z-50"><Overlay onClick={onClose} /><aside ref={panelRef} role="dialog" aria-modal="true" className={`fixed inset-y-0 ${side === 'right' ? 'right-0' : 'left-0'} z-10 h-full bg-white shadow-2xl ${className}`}>{children}</aside></div>;
}
