import axios from 'axios';

const getTokenDetails = async () => {
    try {
        const response = await axios.get(
            'https://api.moyasar.com/v1/tokens/token_STr3p3vf6jyoRoMuC53UzWmmY3',
            {
                auth: {
                    username: 'pk_test_u6cdvWTHBpRc9srnTVgtbQXdK1KvcUHXzNELSsHf',
                    password: '' // Password is left empty for basic auth
                }
            }
        );

        console.log('Token Details:', response.data);
    } catch (error) {
        console.error('Error fetching token details:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
};

getTokenDetails();
