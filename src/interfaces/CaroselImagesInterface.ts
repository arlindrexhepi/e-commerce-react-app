export interface CarouselImagesInterface {
  desktop: CarouselImageInterface[];
  mobile: CarouselImageInterface[];
}

export interface CarouselImageInterface {
  id: string;
  path: string;
  title: string;
}
