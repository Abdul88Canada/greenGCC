const axios = require('axios');

// Document ID you want to retrieve
const documentId = '81980101';

// API URL and authorization token
const apiUrl = `https://api.parseur.com/document/${documentId}`;
const token = '2df85231b80348435094ebfdc1e353b90daab590';

axios.get(apiUrl, {
    headers: {
        'Authorization': `Token ${token}`
    }
})
.then(response => {
    console.log('Document retrieved successfully.');

    // Parsing the 'result' field
    const result = JSON.parse(response.data.result);

    // Displaying the parsed result
    console.log('Parsed Result:', result);
})
.catch(error => {
    console.error('Error retrieving document:', error.response ? error.response.data : error.message);
});
