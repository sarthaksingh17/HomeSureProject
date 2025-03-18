export interface Item {
  id: string;
  name: string;
  category: string;
  purchaseDate: string;
  warrantyEnd: string;
  nextService: string;
  insuranceEnd: string | null;
  billUrl: string;
}

export interface Complaint {
  id: string;
  itemId: string;
  description: string;
  status: 'pending' | 'processing' | 'resolved';
  createdAt: string;
}