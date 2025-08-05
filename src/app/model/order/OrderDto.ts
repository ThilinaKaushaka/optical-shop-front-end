import { OrderDetailsDto } from "./OrderDetailsDto";

export class OrderDto {
  id: number | null = null;
  date: string | null = null; // Use ISO 8601 string (e.g. "2025-08-01")
  time: string | null = null; // Use "HH:mm:ss" string
  total: number | null = null;
  customerId: number | null = null;
  orderDetails: OrderDetailsDto[] = [];

  constructor(
    id: number | null,
    date: string | null,
    time: string | null,
    total: number | null,
    customerId: number | null,
    orderDetails: OrderDetailsDto[] | null
  ) {
    this.id = id ?? null;
    this.date = date ?? null;
    this.time = time ?? null;
    this.total = total ?? null;
    this.customerId = customerId ?? null;
    this.orderDetails = orderDetails ?? [];
  }
}
