import axios from 'axios';
// Define the function to get data from the API
const getParagraphApi = async () => {
    const options = {
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=all-meat&sentences=100'

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        if (response.status === 200) {
            console.log(response.data)
            return response.data;

        }

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

export default getParagraphApi;