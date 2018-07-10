class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
    
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
    
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => resolve('User deleted'))
        .catch(err => reject(err));
    });
  }
}