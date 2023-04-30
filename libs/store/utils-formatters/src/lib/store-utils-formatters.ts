/*===========================
        APP HEADER
=============================*/

export type welcomeText = string | null;
export type color = /*React.CSSProperties['color'] | string |*/ any;

export interface HeaderProps {
  welcomeText: welcomeText;
  color: color;
}

/*===========================
        APP CONTENT
=============================*/

export type id = string;
export type name = string;
export type description = string;
export type image = string;
export type price = number | null;
export type mention = string;
export type rating = number | null;

export type TParams = { id: string };

export interface GameProps {
  id: id;
  name: name;
  description?: description;
  image: image;
  price?: price;
  mention: mention;
  rating?: rating;
}

export function formatRating(rating?: number | null): string {
  return rating ? `${rating} / 10` : `no notations affected yet`;
}
