export type HomeScreenProps = {};

export enum Animals {
  DOG = 'dog',
  CAT = 'cat',
  HORSE = 'horse',
}
export interface Data {
  image: any;
  id: number;
  key: Animals;
  found: boolean;
  visible: boolean;
}
