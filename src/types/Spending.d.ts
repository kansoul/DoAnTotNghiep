export interface Spending {
  id: string;
  idDoc?: string;
  uid: string | undefined;
  title: string;
  amount: number;
  type: "INCOME" | "EXPENSES" | string;
  backgroundColor: string;
  desc: string;
  date: string;
  time: string;
}
