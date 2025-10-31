import api_axios from "./axiosConfig";

// GET /api/message-contact
//messageContactRoute.get('/message-contact', messageContactController.findAll);

export async function findAll() {
    return api_axios
        .get(`/message-contact`)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}


// POST /api/message-contact
// messageContactRoute.post('/message-contact', messageContactController.create);
export async function create(contactData) {
    return api_axios
        .post(`/message-contact`, contactData)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}