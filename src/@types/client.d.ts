interface IClient {
  readonly id?: number;
  name: string;
  document: string;
  email: string;
  phone: string;
  dateofbirth?: Date;
  address: Array<IAddres>;
  password: String;
}

export interface IAddres {
  zipcode?: string;
  publicPlace?: string;
  neighborhood?: string;
  complement?: string;
  number?: string;
  city?: string;
  state?: string;
}
