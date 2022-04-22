export interface IGetAllCustomerUseCaseOutput {
  status: boolean;
  data: ICustomerData[];
}

export interface ICustomerData {
  id: number | null;
  name: string | null;
  email: string | null;
  phone: string;
  optIn: boolean;
  valid: boolean;
  alternativeId: string | null;
  messages?: IMessageData[];
  createdAt: string;
  updatedAt: string;
}

export interface IMessageData {
  id: string;
  status: string | null;
  variableValues: object | object[] | null;
  phone: string;
  templateId: number;
  createdAt: string;
  updatedAt: string;
}
