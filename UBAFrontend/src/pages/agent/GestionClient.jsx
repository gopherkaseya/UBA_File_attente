import { useEffect, useState } from 'react';
import logoUba from '../../assets/logo-uba.png';
import home from '../../assets/home.png';
import management from '../../assets/campaign-management.png';
import profile from '../../assets/profile.png';
import speak from '../../assets/speaking.png';

export function GestionClient() {
    const [tickets, setTickets] = useState([]);

    
    useEffect(() => {
        fetchTickets();
        document.title = "Gestion-des-clients"
    }, []);

    const fetchTickets = () => {
        fetch('http://localhost:4000/api/tickets/en-attente') 
            .then((response) => response.json())
            .then(data => {
                console.log("Données reçues :", data);
                setTickets(Array.isArray(data) ? data : []); 
            })
            .catch((error) => console.error('Erreur chargement tickets:', error));
    };

    // Fonction pour appeler un client
    const appelerClient = (ticket) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(`Le client ${ticket.nom}, numéro ${ticket.numero}, est attendu`);
        utterance.lang = 'fr-FR';
        synth.speak(utterance);
        /*
        // 2️⃣ Mettre à jour le statut du ticket dans la base de données
        fetch(`http://localhost:3000/api/tickets/appeler/${ticket.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            // 3️⃣ Rafraîchir la liste des tickets après l’appel
            fetchTickets();
        })
        .catch(error => console.error('Erreur lors de la mise à jour du ticket:', error));*/
    };

    return (
        <div className="h-screen flex bg-customRed">
            {/* Sidebar */}
            <div className="h-screen w-72 bg-customRed flex justify-center">
                <div className='justify-center'>
                    <div className='flex justify-center'>
                        <img src={logoUba} className='h-10 mt-8' />
                    </div>
                    <button className='bg-white justify-center pt-2 pb-2 pl-5 pr-5 mt-10 w-48 rounded-lg flex items-center'>
                        <img src={home} className='h-5 pr-4'/> 
                        <span className='text-xl font-bold text-customRed font-roboto'>Acceuil</span> 
                    </button>
                    <button className='bg-white justify-center pt-2 pb-2 pl-5 pr-5 mt-10  rounded-lg flex items-center'>
                        <img src={management} className='h-5 pr-4'/> 
                        <span className='text-xl font-bold text-customRed font-roboto'>Listes clients</span> 
                    </button>   
                </div>
            </div>

            {/* Contenu Principal */}
            <div className="bg-white w-full">
                <div className='items-center justify-between flex ml-10 mr-10 mt-10'>
                    <div className='justify-start'>
                        <p className='text-4xl font-roboto font-bold'>Gestion des clients</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='pr-2 font-roboto font-bold'>Alghufar Sanajab</span> 
                        <img src={profile} className='h-10'/>
                    </div>
                </div>

                {/* Liste des tickets */}
                <div className='ml-10 mt-14'>
                    {tickets.length === 0 ? (
                        <p className='text-gray-500'>Aucun ticket en attente.</p>
                    ) : (
                        tickets.map((ticket) => (
                            <div key={ticket.id} className='flex items-center justify-center bg-customRed w-72 justify-between rounded-md p-4 mb-4'>
                                <div>
                                    <p className='text-white font-bold font-roboto text-xl'>TICKET : {ticket.numero}</p>
                                    <p className='text-white font-bold font-roboto text-md'>{ticket.nom}</p>
                                </div>
                                <div>
                                    <div className='flex justify-center mb-1'>
                                        <img src={speak} className='h-8'/>
                                    </div>
                                    <button 
                                        className='bg-white text-customRed pl-4 pr-4 pt-1 pb-1 rounded-md font-bold' 
                                        onClick={() => appelerClient(ticket)}
                                    >
                                        Appeler
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
