const arr = [1,2,3,4,5];
const response = {
    data: {
        id:1,
        title: "Destructuring in JavaScript",
        author:{
            name:"Dev",
            email: "Dev@gmail.com"
        },
    },
}
const {
  data: {
    title,
    author: { name: authorName, email: authorEmail }
  }
} = response;
console.log(title);
console.log(authorName);
console.log(authorEmail);