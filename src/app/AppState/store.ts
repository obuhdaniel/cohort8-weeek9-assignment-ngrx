export interface Employer {
  id: number;
  name: string;
  userName: string;
  email: string;
}

export interface Icounter {
  counter: number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IProduct {
  id: number;
  productName: string;
  productPrice: string;
  productImagePath: string;
  quantity: number;
  rating: number;
  category: string;
}
