// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import './App.css';

function App() {
    const utilisateur = { nom: 'Emma', photo: '/user.png' };
    const courses1 = ['Pommes', 'Bananes', 'Lait'];
    const courses2 = ['Pain', 'Oeufs', 'Jus d\'orange'];

    return (
        <div className="App">
            <HelloWorld />
            <Greeting prenom="Alice" />
            <Greeting prenom="Mohamed" />

            {/* Composant Profil */}
            <Profil utilisateur={utilisateur} taille={150} />

            {/* Composants Voiture */}
            <Voiture marque="Renault" modele="Clio" couleur="rouge" />
            <Voiture marque="Peugeot" modele="208" couleur="bleu" />
            <Voiture marque="Citroën" modele="C3" couleur="vert" />

            {/* Composants ListeCourses */}
            <h3>Liste de courses 1:</h3>
            <ListeCourses elements={courses1} />

            <h3>Liste de courses 2:</h3>
            <ListeCourses elements={courses2} />
        </div>
    );
}

export default App;