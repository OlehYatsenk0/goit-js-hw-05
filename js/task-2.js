// Оголошення стрілочної функції getUsersWithFriend
const getUsersWithFriend = (users, friendName) => 
    users.filter(user => user.friends.includes(friendName));
  
  // Масив користувачів для тестування
  const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  // Перевірка функції
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  


  // [
  //   { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
  //   { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  
  
 // [
  //   { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
  //   { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); 
  
  
  // [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []