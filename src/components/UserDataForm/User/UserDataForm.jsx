import DataFormComponent from "../DataFormComponent/DataFormComponent.jsx";
import "./UserDataForm.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getMyProfile } from "../../../api/apiUser.js";
// import { updateMyProfile } from "../../api/apiUser.js";

function UserDataForm() {
    // Voir mes informations
    const [setting, setSetting] = useState({});

    async function getMySetting() {
        const myProfile = await getMyProfile();
        setSetting(myProfile);
        // console.log("setting log :", myProfile);
    }

    useEffect(() => {
        getMySetting();
    }, []);

    // // Modifier mes informations
    // const [newLastname, setNewLastname] = useState("");
    // const [newFirstname, setNewFirstname] = useState("");
    // const [newEmail, setNewEmail] = useState("");
    // const [newLocalisation, setNewLocalisation] = useState("");
    // const [newPhonenumber, setNewPhonenumber] = useState("");
    return (
        <>
            <DataFormComponent headertitle="Mon profil utilisateur" />
        </>
    );
}

export default UserDataForm;
