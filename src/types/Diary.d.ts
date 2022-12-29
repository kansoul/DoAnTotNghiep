export interface Diary {
  idDoc?: string;
  id: string;
  uid: string;
  title: string;
  content: string;
  like: string[];
  comment: {
    uid: string;
    content: string;
    datetime: string;
  }[];
  date: string;
  isPublic: boolean;
}
