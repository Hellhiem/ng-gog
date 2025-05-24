export interface GameItem {
  id: number;
  title: string;
  imageSource: string;
  discount?: number;
  price: number;
  owned: boolean;
}
