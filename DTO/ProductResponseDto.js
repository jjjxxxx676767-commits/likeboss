export default class ProductResponseDto {
  constructor(id, name, description, price, image, viewsCount) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.viewsCount = viewsCount;
  }
}