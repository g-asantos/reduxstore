// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addDetailRequest = 'ADD_DETAIL_REQUEST',
}

export interface IProductDetail {
  id: number;
  image: string;
  name: string;
  details: string;
  value: number;
}

export interface IDetailsState {
  details: IProductDetail[];
}
