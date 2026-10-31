export interface AddressItem {
  id: string;
  title: string;
  province: string;
  city: string;
  fullAddress: string;
  postalCode: string;
  plaque: string;
  unit: string;
  recipientName: string;
  recipientPhone: string;
  isDefault: boolean;
}

export type AddressFormValue = Omit<AddressItem, 'id'>;
