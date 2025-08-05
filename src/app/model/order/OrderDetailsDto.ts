export class OrderDetailsDto {
  orderId: number | null = null;
  itemId: number | null = null;
  quantity: number | null = null;
  unitPrice: number | null = null;

  constructor(
    orderId: number | null,
    itemId: number | null,
    quantity: number | null,
    unitPrice: number | null
  ) {
    this.orderId = orderId ?? null;
    this.itemId = itemId ?? null;
    this.quantity = quantity ?? null;
    this.unitPrice = unitPrice ?? null;
  }
}
