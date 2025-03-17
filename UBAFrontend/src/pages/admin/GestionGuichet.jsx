import { useState } from 'react';
import logoUba from '../../assets/logo-uba.png';
import home from '../../assets/home.png';
import management from '../../assets/campaign-management.png';
import profile from '../../assets/profile.png';

export function GestionGuichets() {
    const [guichets, setGuichets] = useState([
        { id: 1, nom: "Guichet 1", status: "Ouvert" },
        { id: 2, nom: "Guichet 2", status: "Fermé" },
    ]);

    const ajouterGuichet = () => {
        const nouveauGuichet = { id: guichets.length + 1, nom: `Guichet ${guichets.length + 1}`, status: "Ouvert" };
        setGuichets([...guichets, nouveauGuichet]);
    };

    const supprimerGuichet = (id) => {
        setGuichets(guichets.filter(guichet => guichet.id !== id));
    };

    return (
        <div className="h-screen flex bg-customRed">
            {/* Sidebar */}
            <div className="h-screen w-96 bg-customRed flex justify-center">
                <div className='justify-center'>
                    <div className='flex justify-center'>
                        <img src={logoUba} className='h-10 mt-8' />
                    </div>
                    <button className='bg-white justify-center w-full pt-2 pb-2 pl-5 pr-5 mt-10 rounded-lg flex items-center'>
                        <img src={home} className='h-5 pr-4'/>
                        <span className='text-xl font-bold text-customRed font-roboto'>Accueil</span>
                    </button>
                    <button className='bg-white justify-center w-full pt-2 pb-2 pl-5 pr-5 mt-10 rounded-lg flex items-center'>
                        <img src={management} className='h-5 pr-4'/>
                        <span className='text-xl font-bold text-customRed font-roboto'>Gestion des guichets</span>
                    </button>
                </div>
            </div>

            {/* Contenu Principal */}
            <div className="bg-white w-full">
                <div className='items-center justify-between flex ml-10 mr-10 mt-10'>
                    <div className='justify-start'>
                        <p className='text-4xl font-roboto font-bold'>Gestion des Guichets</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='pr-2 font-roboto font-bold'>Alghufar Sanajab</span>
                        <img src={profile} className='h-10'/>
                    </div>
                </div>

                <div className="p-10">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-2xl font-bold">Liste des Guichets</h2>
                        <button onClick={ajouterGuichet} className="bg-customRed text-white px-4 py-2 rounded-lg">Ajouter un Guichet</button>
                    </div>

                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Nom</th>
                            <th className="border border-gray-300 p-2">Statut</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {guichets.map(guichet => (
                            <tr key={guichet.id} className="text-center">
                                <td className="border border-gray-300 p-2">{guichet.nom}</td>
                                <td className="border border-gray-300 p-2">{guichet.status}</td>
                                <td className="border border-gray-300 p-2">
                                    <button onClick={() => supprimerGuichet(guichet.id)} className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
