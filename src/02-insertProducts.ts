export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number
  brands: string[]
};

export default function insertProducts(availableBrands: string[], products: Product): string {
  if (products.brands.every((brand) => availableBrands.includes(brand))) {
    return `${products.name} adicionado(a) com o preço de R$ ${products.price.toFixed(2)}.`;
  }
  return 'Seu produto contém marcas indisponíveis.';
}
