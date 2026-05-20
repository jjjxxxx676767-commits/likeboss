import CreateProductDto from "./CreateProductDto";
import ProductResponseDto from "./ProductResponseDto";

export default class ProductDtoMapper {
  static toCreateDto(body) {
    return new CreateProductDto(body.name, body.description, body.price, body.image);
  }

  static toProductResponseDto(product) {
    return new ProductResponseDto(
      product._id,
      product.name,
      product.description,
      product.price,
      product.image,
      product.viewsCount
    );
  }
}