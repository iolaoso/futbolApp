
// https://app.quicktype.io/ para crear las interfaces

export interface Login {
  email:    string;
  password: string;
}

export interface ResponseLogin {
  status:   boolean;
  result?:   User;
  token?:    string;
  message?: string;
}

export interface User {
  nombre:  string;
  email:   string;
  image:   string;
  estado:  boolean;
  isAdmin: boolean;
  uid:     string;
}

