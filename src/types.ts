export interface IValueWithUnit {
  value: Number;
  unit: string;
}

export interface IMethod {
  temp: IValueWithUnit;
  duration?: Number;
}

export interface IMethods {
  [methodName: string]: IMethod | null;
}

export interface IIngredient {
  name: String;
  amount: IValueWithUnit;
  add?: string;
  attribute?: string;
}

export interface IIngredients {
  [ingredientType: string]: IIngredient[] | string;
}

export interface IBeer {
  id: Number,
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: IIngredients;
}

export interface IBeerStore {
  fetchBeers: () => void;
  saveBeer: (beer: IBeer) => void;
  
  fetchingBeers: boolean,
  beers: IBeer[];
  myBeers: IBeer[];

  showingAddBeerModal: boolean;
  toggleAddBeerModal: () => void;
}

export interface IBeersProps { 
  beers: IBeerStore
}