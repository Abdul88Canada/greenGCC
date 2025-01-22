const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Path to the PDF file you want to upload
const filePath = path.resolve(__dirname, './invoice.pdf');

// Read the file and prepare the form data
const form = new FormData();
form.append('file', fs.createReadStream(filePath));

// API URL and authorization token
const apiUrl = 'https://api.parseur.com/parser/76440/upload';
const token = '2df85231b80348435094ebfdc1e353b90daab590';

axios.post(apiUrl, form, {
    headers: {
        'Authorization': `Token ${token}`,
        ...form.getHeaders()
    }
})
.then(response => {
    console.log('File uploaded successfully:', response.data);
})
.catch(error => {
    console.error('Error uploading file:', error.response ? error.response.data : error.message);
});
