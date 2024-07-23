import axios from 'axios';
// Define the function to get data from the API
const getParagraphApi = async () => {
    const options = {
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=all-meat&sentences=3'

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message); // Improved error logging
        throw error; // Optionally re-throw the error for handling elsewhere
    }
};

export default getParagraphApi;