//Interface for the products api response
export interface ProductsApiResponse {
  limit: number;
  products: Products[];
  skip: number;
  total: number;
}

//Product type
export type Products = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};
