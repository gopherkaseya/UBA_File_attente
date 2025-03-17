import { useEffect, useState } from 'react';
import logoUba from '../../assets/logo-uba.png';
import home from '../../assets/home.png';
import management from '../../assets/campaign-management.png';
import profile from '../../assets/profile.png';
import speak from '../../assets/speaking.png';
import Navbar from '../../components/Navbar';
import {Input} from "../../components/forms/Input.jsx";

export function GestionUtilisateur() {

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nomservice: '',
        descriptionService: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulation de l'envoi du formulaire
        setTimeout(() => {
            console.log("Données envoyées :", formData);
            setLoading(false);
            setShowForm(false);
        }, 2000);
    };


    return (
        <div className="h-screen flex bg-customRed">
            <div className="h-screen w-96 bg-customRed flex justify-center">
                <Navbar/>
            </div>
            {/* Contenu Principal */}
            {showForm && (
                <>
                    <div className="fixed inset-0 bg-black opacity-70 z-10"></div>
                    <div className="fixed bg-white w-96 z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="nom"
                                placeholder="nom"
                                label="Nom agent"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="postnom"
                                placeholder="postnom"
                                label="Postnom"
                                value={formData.postnom}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                type="text"
                                name="descriptionService"
                                placeholder="Description"
                                label="Description du service"
                                value={formData.prenom}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full font-comfortaa rounded-lg h-10 mt-5 text-white bg-green-600"
                                disabled={loading}
                            >
                                {loading ? "Ajout..." : "Valider"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="w-full font-comfortaa rounded-lg h-10 mt-5 text-white bg-customRed"
                            >
                                Annuler
                            </button>
                        </form>
                    </div>
                </>
            )}
            <div className="bg-white w-full">
                <div className='items-center justify-between flex ml-10 mr-10 mt-10'>
                    <div className='justify-start'>
                        <p className='text-4xl font-roboto font-bold'>Gestion des agents</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='pr-2 font-roboto font-bold'>Alghufar Sanajab</span>
                        <img src={profile} className='h-10'/>
                    </div>
                </div>
                <div className="p-10">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-2xl font-bold">Liste des utilisateurs</h2>
                        <button onClick={() => setShowForm(true)}  className="bg-customRed text-white px-4 py-2 rounded-lg">Ajouter un utilisateur</button>
                    </div>

                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Nom</th>
                            <th className="border border-gray-300 p-2">Email</th>
                            <th className="border border-gray-300 p-2">Service</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-center">
                            <td className="border border-gray-300 p-2">Jean Dupont</td>
                            <td className="border border-gray-300 p-2">jean.dupont@email.com</td>
                            <td className="border border-gray-300 p-2">Carte bancaire</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Modifier</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border border-gray-300 p-2">Marie Curie</td>
                            <td className="border border-gray-300 p-2">marie.curie@email.com</td>
                            <td className="border border-gray-300 p-2">Compte Bancaire</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Modifier</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
