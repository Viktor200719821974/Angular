export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    }
    street: string;
    suite: string;
    zipcode: string;
  }
  company: {
    bs: string;
    name: string;
    catchPhrase: string;
  }
}
