const http = new easyHTTP;

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

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Post Request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
//   if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
// });

// Put Request
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
  if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
});