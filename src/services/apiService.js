import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const detailPost = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const createPost = async (post) => {
    const response = await axios.post(API_URL, post);
    return response.data;
};