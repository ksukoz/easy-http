// const http = new easyHTTP;
const http = new EasyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
  //   if (err) {
    //     console.log(err);
    //   } else {
      //     console.log(res);
      //   }
      // });

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Create Data
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };
const data = {
  name: 'John Doe',
  username: 'johnDoe',
  email: 'jdoe@gmail.com'
};

// Post Request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
//   if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
// });

// Post User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Put Request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
//   if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
// });

// Put request
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete Request 
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Delete request
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));