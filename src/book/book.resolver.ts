import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    // return books
    return [
      { id: 1, title: 'harry potter', price: 500 },
      { id: 2, title: 'avengers', price: 600 },
      { id: 3, title: 'super man', price: 900 },
    ];
  }
}
