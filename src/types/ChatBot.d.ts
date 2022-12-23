export interface ChatBot {
  id: string;
  uid: string;
  idDoc: string;
  message: {
    userMessage: boolean;
    botMessage: boolean;
    text: string;
    sendAt: string;
  }[];
}
