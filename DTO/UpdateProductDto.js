export default class UpdateProductDto {
  constructor(body) {
    if (body.name !== undefined) {
      this.name = body.name;
    }
    if (body.description !== undefined) {
      this.description = body.description;
    }
    if (body.price !== undefined) {
      this.price = body.price;
    }
    if (body.image !== undefined) {
      this.image = body.image;
    }
  }
  
}