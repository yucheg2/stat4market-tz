interface Product {
  img: string;
  name: string;
  articleWB: string;
}

export interface EditableField {
  count: number;
  editable: boolean;
}

interface Balances {
  balanceWB: EditableField;
  balanceSupplier: EditableField;
  balanceMyStock: EditableField;
  balanceInPath: EditableField;
  balanceAll: EditableField;
}

interface SizesBalance extends EditableField {
  enoughFor: number
}

interface Size extends Balances {
  size: number;
  orderInOneDay: number;
  balanceWB: SizesBalance;
  balanceSupplier: SizesBalance;
  balanceMyStock: SizesBalance;
  balanceInPath: EditableField;
  balanceAll: SizesBalance;
}

export type SizeRange = Size[]

export interface ProductStockData extends Balances {
  id: number;
  product: Product;
  sizeRange?: SizeRange;
  orderInOneDay: number;
}
