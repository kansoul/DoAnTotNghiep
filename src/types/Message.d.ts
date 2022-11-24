export interface Message {
  id: string;
  relationMessage: string[];
  message: {
    send: string;
    received: string;
    text: string;
    type: string;
    sendAt: string;
    status: string;
  }[];
}
