import './Accessibility.scss';

function Accessibility() {
    return (
        <div className="container">
            <main>
                <h1>Accessibilité</h1>

                <section>
                    <h2>Engagement en faveur de l'accessibilité</h2>
                    <p>
                        Ce site respecte les normes d'accessibilité
                        internationales WCAG (Web Content Accessibility
                        Guidelines) afin de permettre à toute personne, y
                        compris les personnes en situation de handicap, de
                        naviguer facilement.
                    </p>
                    <p>
                        Nous nous engageons à améliorer continuellement
                        l’accessibilité de notre site, en appliquant les
                        recommandations suivantes :
                    </p>
                    
                    <ul>
                        <li>
                            Utilisation d’une structure HTML sémantique
                            (éléments main, header, nav, footer) pour
                            faciliter la navigation aux technologies
                            d’assistance.
                        </li>
                        <li>
                            Gestion du focus clavier pour permettre la
                            navigation sans souris.
                        </li>
                        <li>
                            Labels explicites et attributs ARIA adaptés (
                        aria-label,
                        aria-labelledby
                        aria-describedby) pour les éléments
                            interactifs.
                        </li>
                        <li>
                            Contraste suffisant entre texte et arrière-plan pour
                            les malvoyants.
                        </li>
                        <li>
                            Utilisation modérée des animations ou effets visuels
                            pouvant perturber certaines personnes.
                        </li>
                        <li>
                            Composants de navigation utilisant des éléments
                        (nav et a)
                            avec des rôles ARIA lorsque c’est nécessaire.
                        </li>
                        <li>
                            Gestion du focus dynamique avec refs et hooks React,
                            par exemple pour placer le focus dans une modale
                            ouverte.
                        </li>
                        <li>
                            Annoncer les changements dynamiques avec des régions
                            ARIA live via des composants comme
                        react-aria-live.
                        </li>
                    </ul>
                    
                </section>

                <section>
                    <h2>Tester et valider l'accessibilité</h2>
                    <p>
                        Nous utilisons des outils comme Lighthouse, ou les extensions d’inspection d’accessibilité
                        des navigateurs pour identifier et corriger les
                        problématiques d’accessibilité.
                    </p>
                    <p>
                        Des tests avec des lecteurs d’écran 
                        sont également effectués pour valider la qualité de
                        l’expérience utilisateur pour tous.
                    </p>
                </section>

return (
<div className="container">

    <h2>Accessibilité</h2>
        
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
            Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. 
            Ad litora torquent per conubia nostra inceptos himenaeos.</p>
</div>

                </section>
            </main>
            
        </div>
    );
}

export default Accessibility;
