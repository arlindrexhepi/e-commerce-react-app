export interface CategoriesDataInterface {
  name: string;
  childs: ChildsType[];
  categoryId: string;
}

export interface ChildsType {
  title: string;
  image: string;
}
