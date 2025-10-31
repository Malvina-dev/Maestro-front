import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactRequestList from "../../components/ContactRequestList/ContactRequestList.jsx";

function Admin() {

        // LES COMPOSANTS QUI SERONT SUR LA PAGE:
        
        // Nouvelles demandes de projets 
        // => WaitingProjectList
        // Liste des clients avec leurs informations 
        // => ClientList
        // Les projets validés (avec leur statut etc) 
        // => ProjectList (version admin)
        // Nouvelles demandes de contact 
        // => ContactRequestList

    return (
        <>
        <h1>Mon espace administrateur</h1>
        <ContactRequestList />
        </>
    )
}

export default Admin;