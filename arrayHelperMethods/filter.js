//  create a function called reject. Reject should work in the opposite
//way of filter, if a function returns true the item should not be included in the array
// hint: you can reuse filter

// const numbers = [10, 20, 30];

// function reject(number) {
//   return number.filter((num) => {
//     return num < 15;
//   });
// }

// const lessThanFifteen = reject(numbers);

// console.log(lessThanFifteen);

// const users = [
//   { id: 1, admin: true },
//   { id: 2, admin: false },
//   { id: 3, admin: false },
//   { id: 4, admin: false },
//   { id: 5, admin: true },
// ];

// const filteredUsers = users.filter((user) => {
//   return user.admin === true;
// });

// console.log(filteredUsers);

// const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// const filteredNumbers = numbers.filter((number) => {
//   return number > 50;
// });

// console.log(filteredNumbers);

// console.log(filteredNumbers);

// const posts = { id: 4, title: "new post" };

// const comments = [
//   { postId: 4, content: "awesome post" },
//   { postId: 3, content: "it was ok" },
//   { postId: 4, content: "neat" },
// ];

// function commentsForPosts(comments, posts) {
//   return comments.filter((comment) => {
//     return comment.postId === posts.id;
//   });
// }

// console.log(commentsForPosts(comments, posts ));

// const products = [
//   { name: "cucumber", type: "vegetable", quantity: 1, price: 1 },
//   { name: "banana", type: "fruit", quantity: 30, price: 9 },
//   { name: "celery", type: "vegetable", quantity: 12, price: 90 },
//   { name: "orange", type: "fruit", quantity: 4, price: 31 },
// ];

// const filteredProducts = products.filter((product) => {
//   return (
//     product.type === "vegetable" && product.quantity > 0 && product.price < 10
//   );
// });
// console.log(filteredProducts);

// filteredProducts(array,parameters){
//   return array.filter((arr) => {
//     return product.type === "vegetable" && product.quantity > 0 && product.price < 10
//   })
// }
// const filteredProducts = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === "fruit") {
//     filteredProducts.push(products[i].type);
//   }
// }
