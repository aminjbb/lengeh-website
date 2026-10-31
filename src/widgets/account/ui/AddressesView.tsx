import { ChevronLeft, Edit3, Plus, Trash2 } from 'lucide-react';
import type { AddressFormValue, AddressItem } from '../model/accountTypes';
import { SignpostIcon } from './SignpostIcon';

type AddressesViewProps = {
  addresses: AddressItem[];
  form: AddressFormValue;
  editingId: string | null;
  notice?: string | null;
  formOpen: boolean;
  onBack: () => void;
  onAdd: () => void;
  onEdit: (address: AddressItem) => void;
  onDelete: (id: string) => void;
  onChange: (value: AddressFormValue) => void;
  onSave: (event: React.FormEvent) => void;
  onCancel: () => void;
};

export function AddressesView({ addresses, form, editingId, notice, formOpen, onBack, onAdd, onEdit, onDelete, onChange, onSave, onCancel }: AddressesViewProps) {
  const update = (key: keyof AddressFormValue, value: string | boolean) => onChange({ ...form, [key]: value });
  return <div className="min-h-screen bg-white text-neutral-900 font-tommy" dir="rtl"><main className="max-w-[620px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-24"><div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-6"><h2 className="text-[12.5px] font-bold">آدرس‌ها</h2><button type="button" onClick={onBack} className="inline-flex items-center gap-1 text-[11px] text-neutral-600"><span>بازگشت</span><ChevronLeft className="w-4 h-4" /></button></div>{notice && <p role="status" className="mb-5 p-2.5 bg-green-50 border border-green-200 text-green-800 text-[11px]">{notice}</p>}{!formOpen ? <div className="space-y-4"><div className="flex items-center justify-between"><span className="text-[11.5px]">آدرس‌های ثبت‌شده ({addresses.length})</span><button type="button" onClick={onAdd} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10.5px] bg-[#171717] text-white"><Plus className="w-3.5 h-3.5" />افزودن آدرس</button></div>{addresses.length === 0 ? <div className="py-12 text-center border border-dashed border-neutral-300 bg-neutral-50/60"><SignpostIcon /><p className="text-[12px] mt-2">هنوز آدرسی ثبت نکرده‌اید</p><button type="button" onClick={onAdd} className="mt-3 px-4 py-2 bg-black text-white text-[11px]">افزودن آدرس</button></div> : <div className="space-y-3">{addresses.map((address) => <article key={address.id} className="border border-neutral-200 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-[12px] font-semibold">{address.title}{address.isDefault && <span className="mr-2 text-[10px] text-green-700">پیش‌فرض</span>}</h3><p className="text-[11px] text-neutral-600 mt-1">{address.province}، {address.city}، {address.fullAddress}</p><p className="text-[10px] text-neutral-500 mt-1">{address.recipientName} · {address.recipientPhone}</p></div><div className="flex gap-2"><button type="button" onClick={() => onEdit(address)} aria-label="ویرایش آدرس"><Edit3 className="w-3.5 h-3.5" /></button><button type="button" onClick={() => onDelete(address.id)} aria-label="حذف آدرس" className="text-red-600"><Trash2 className="w-3.5 h-3.5" /></button></div></div></article>)}</div>}</div> : <form onSubmit={onSave} className="space-y-3"><h3 className="text-sm font-semibold">{editingId ? 'ویرایش آدرس' : 'افزودن آدرس'}</h3>{(['title','province','city','fullAddress','postalCode','plaque','unit','recipientName','recipientPhone'] as const).map((key) => <label key={key} className="block text-[11px] text-neutral-600"><span>{key}</span><input value={form[key]} onChange={(event) => update(key, event.target.value)} className="mt-1 w-full h-10 border border-neutral-300 px-3 text-sm" /></label>)}<label className="flex items-center gap-2 text-[11px]"><input type="checkbox" checked={form.isDefault} onChange={(event) => update('isDefault', event.target.checked)} /> آدرس پیش‌فرض</label><div className="flex gap-2"><button type="submit" className="px-4 py-2 bg-black text-white text-[11px]">ذخیره</button><button type="button" onClick={onCancel} className="px-4 py-2 border border-neutral-300 text-[11px]">انصراف</button></div></form>}</main></div>;
}
