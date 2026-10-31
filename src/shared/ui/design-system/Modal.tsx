import type { ReactNode } from 'react';
import { Overlay } from './Overlay';
import { useDialog } from './useDialog';

type ModalProps = { open: boolean; onClose: () => void; children: ReactNode; className?: string };

export function Modal({ open, onClose, children, className = '' }: ModalProps) {
  const { panelRef } = useDialog(open, onClose);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4"><Overlay onClick={onClose} /><div ref={panelRef} role="dialog" aria-modal="true" className={`relative z-10 w-full bg-white shadow-2xl ${className}`}>{children}</div></div>;
}
