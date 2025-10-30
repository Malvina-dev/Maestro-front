import api_axios from "./axiosConfig";

// Lister tous les project
// GET /api/project
// projectRouter.get('/project', projectsController.listProjects)

export async function getAllProjectList() {
    return api_axios
        .get(`/project`)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}