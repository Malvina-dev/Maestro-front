import React from "react";
import "./Header.scss";

//tableaux d'objet de lien de menu
const links = [
    { label: "Accueil", href: "#" },
    { label: "Compositions", href: "#" },
    { label: "Inscription/Connexion", href: "#" },
];

// boucle sur le tableau links avec .map pour le rendu dynamique 
// propriété key={index} pour identifié chaque élément de ma liste 
function Header() {
    return (
        <header>
            <img src="logo.png" alt="logo maestro" />
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
