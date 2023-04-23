
export type id = string;
export type name = string;
export type description = string;
export type image = string;
export type price = number | null;
export type mention = string;
export type rating = number | null;

export interface GameProps {
    id: id;
    name: name;
    description?: description;
    image: image;
    price?: price;
    mention: mention;
    rating?: rating; 
}