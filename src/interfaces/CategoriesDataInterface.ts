export interface CategoriesDataInterface {
  name: string;
  childs: SubCategoriesInterface[];
  images: string[];
}

export interface SubCategoriesInterface {
  name: string;
  subChilds: string[];
}
