import { ImagePropsType } from '../../types/image-props.type.ts';

export type Film = {
  poster: ImagePropsType;
  title: string;
  genre: string;
  year: number;
}
