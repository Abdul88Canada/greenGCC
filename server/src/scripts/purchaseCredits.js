import fetch from 'node-fetch'; // Ensure you have node-fetch installed

const makeRequest = async () => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer CM0-a10689caf6df0ec70818d7d362137d20',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount_kg: 445,          // Replace with actual amount
      description: "offset logistics operations", // Replace with actual description
    }),
  };

  try {
    const response = await fetch('https://test-carbon-engine.onrender.com/v1/orders', options);
    const data = await response.json();

    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Call the function
makeRequest();
