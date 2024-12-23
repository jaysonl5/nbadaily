import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const fetchSheet = async () => {
    const response = await axios.get(`${API_URL}/sheets`)
    return response.data;
}