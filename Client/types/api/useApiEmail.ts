export type FormEmailRequestBody = {
  senderName: string;
  senderAddress: string;
  subject: string;
  body: string;
};

export type FormEmailResponse = {
  message: string;
};
