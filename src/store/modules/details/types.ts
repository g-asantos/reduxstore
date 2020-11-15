// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addDetailRequest = 'ADD_DETAIL_REQUEST',
}

export interface IProductDetail {
  id: string;
  image: string;
  name: string;
  details: string;
  value: string;
  quantity: string;
}

export interface IDetailsState {
  details: IProductDetail[];
}
