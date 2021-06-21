export interface IProduct {
    [x: string]: any;
    title: string;
    country: string;
    imgUrl: string;
    price: number;
    views: number;
    id?: string;
}