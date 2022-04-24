export interface ProductsInterface {
  title: string;
  on_sale: boolean;
  price: number;
  new_price?: number;
  description?: string;
  category: Category;
  rating: number;
  thumbnail: string;
  images?: string[];
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

enum Category {
  Cameras = "Cameras",
  Lenses = "Lenses",
  Tripods = "Tripods",
  Consoles = "Consoles",
  Controllers = "Controllers",
  Computer_Components = "Computer Components",
  Desktops = "Desktops",
  Laptops = "Laptops",
  Headphones = "Headphones",
  Smartphones = "Smartphones",
  Smartwatches = "Smartwatches",
  Soundbars = "Soundbars",
  TVs = "TVs",
  VRGaming = "VRGaming"
}
