export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  icon?: string;
  color?: string;
}

export interface Transaction {
  id: string;
  userId?: string;     
  type: TransactionType;
  amount: number;      
  categoryId: string;  
  note: string;        
  date: string;        
  createdAt: number;   
}