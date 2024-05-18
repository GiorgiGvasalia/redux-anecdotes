import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error('ERROR OCCURRED:', response.statusText);
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('NETWORK ERROR:', error.message);
        throw error;
    }
}




export default { getAll};
