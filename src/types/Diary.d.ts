export interface Diary {
  idDoc?: string;
  id: string;
  uid: string;
  title: string;
  content: string;
  like: string[];
  date: string;
  isPublic: boolean;
}
