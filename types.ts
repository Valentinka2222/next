export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  title: string;
  body: string;
};
export type headingType = {
  tag?: string;
  text?: string;
};

export interface navType {
  id: number;
  title: string;
  path: string;
}

export interface socialsType {
  id: string;
  icon: string;
  path: string;
}
