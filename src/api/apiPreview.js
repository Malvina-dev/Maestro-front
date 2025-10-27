import axios from "axios";

const API_URL = "http://localhost:3000/api";

export async function getAllPreviews() {
    return axios
        .get(`${API_URL}/preview`)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}