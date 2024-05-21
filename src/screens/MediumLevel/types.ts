export type HomeScreenProps = {};

export enum Tools {
  FIXED_WRENCH = 'fixedWrench',
  NAIL = 'nails',
  SAW = 'saw',
  NUTS = 'nuts',
  METER = 'meter',
}
export interface Data {
  image: any;
  id: number;
  key: Tools;
  found: boolean;
  visible: boolean;
}
