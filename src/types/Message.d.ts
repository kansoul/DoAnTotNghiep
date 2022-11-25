export interface Message {
  id: string;
  idDoc: string;
  relationMessage: string[];
  message: {
    send: {
      uid: string;
      imgUrl: string;
      firstName: string;
      lastName: string;
    };
    received: {
      uid: string;
      imgUrl: string;
      firstName: string;
      lastName: string;
    };
    text: string;
    type: string;
    sendAt: Date;
    status: string;
  }[];
}
