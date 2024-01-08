// API Call Using fetch API and then-catch blocks :-
// GET Method :-
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // add any other headers as needed
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

// POST Method :-
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // add any other headers as needed
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

// PUT Method :-
fetch('https://api.example.com/data/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    // add any other headers as needed
  },
  body: JSON.stringify({ key: 'updatedValue' }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

// PATCH Method :-
fetch('https://api.example.com/data/123', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    // add any other headers as needed
  },
  body: JSON.stringify({ key: 'updatedValue' }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

// DELETE Method :-
fetch('https://api.example.com/data/123', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    // add any other headers as needed
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });


// API Call Using fetch API and async-await
// GET Method :-
async function getData(url) {
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Example usage:
  getData('https://api.example.com/data');

// POST Method :-
async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
        console.log(error);
    }
  }
  
  // Example usage:
  const postDataExample = { key: 'value' };
  postData('https://api.example.com/post-endpoint', postDataExample);

//   PUT Method :-
async function putData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
        console.log(error);
    }
  }
  
  // Example usage:
  const putDataExample = { key: 'updatedValue' };
  putData('https://api.example.com/put-endpoint', putDataExample);

//   PATCH Method :-
async function patchData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
        console.log(error);
    }
  }
  
  // Example usage:
  const patchDataExample = { key: 'patchedValue' };
  patchData('https://api.example.com/patch-endpoint', patchDataExample);

//   DELETE Method :-
async function deleteData(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const result = await response.json(); // Assuming the server sends a JSON response
      console.log(result);
    } catch (error) {
        console.log(error);
    }
  }
  
  // Example usage:
  deleteData('https://api.example.com/delete-endpoint');

// API Call using axios and then-catch method
// GET Method :-
axios.get('https://api.example.com/data')
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  //POST Method :-
const postData = { key: 'value' };

axios.post('https://api.example.com/data', postData)
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // PUT Method :-
  const putData = { key: 'updatedValue' };

  axios.put('https://api.example.com/data/1', putData)
    .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// PATCH Method :-
const patchData = { key: 'updatedValue' };

axios.patch('https://api.example.com/data/1', patchData)
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  //DELETE Method :-
  axios.delete('https://api.example.com/data/1')
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


// API Call Using axios and async-await
//GET Method :-
async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();

// POST Method :-
async function postData(data) {
    try {
        const response = await axios.post('https://api.example.com/create', data);
        console.log('Data created:', response.data);
    } catch (error) {
        console.error('Error creating data:', error);
    }
}
postData({ key: 'value' });

// PUT Method :-
async function updateData(updatedData) {
    try {
        const response = await axios.put('https://api.example.com/update/5', updatedData);
        console.log('Data updated:', response.data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
}
updateData({ key: 'updatedValue' });

// PATCH Method :-
async function patchData(patchedData) {
    try {
        const response = await axios.patch('https://api.example.com/patch/5', patchedData);
        console.log('Data patched:', response.data);
    } catch (error) {
        console.error('Error patching data:', error);
    }
}
patchData({ key: 'patchedValue' });

// DELETE Request :-
async function deleteData(id) {
    try {
        const response = await axios.delete(`https://api.example.com/delete/${id}`);
        console.log('Data deleted:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}
deleteData(789);
