export interface CategoriesDataInterface {
  _id: string;
  name: string;
  childs: SubCategoriesInterface[];
  images: string[];
}

export interface SubCategoriesInterface {
  name: string;
}
