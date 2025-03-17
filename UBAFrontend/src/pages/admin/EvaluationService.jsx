import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import logoUba from '../../assets/logo-uba.png';
import profile from '../../assets/profile.png';
import home from '../../assets/home.png';

export function EvaluationService() {
    const [stats, setStats] = useState({
        servi: 120,
        nonServi: 30,
        absent: 20,
        enAttente: 50,
        tempsAttenteMoyen: 15, // en minutes
        tauxSatisfaction: 80 // en pourcentage
    });

    const data = [
        { name: 'Servi', valeur: stats.servi, fill: '#4CAF50' },
        { name: 'Non Servi', valeur: stats.nonServi, fill: '#FF5733' },
        { name: 'Absent', valeur: stats.absent, fill: '#FFC107' },
        { name: 'En Attente', valeur: stats.enAttente, fill: '#2196F3' },
        { name: 'Temps Attente (moy.)', valeur: stats.tempsAttenteMoyen, fill: '#9C27B0' },
        { name: 'Taux Satisfaction (%)', valeur: stats.tauxSatisfaction, fill: '#FF9800' }
    ];

    return (
        <div className="h-screen flex bg-customRed">
            {/* Sidebar */}
            <div className="h-screen w-96 bg-customRed flex justify-center">
                <Navbar/>
            </div>

            {/* Contenu Principal */}
            <div className="bg-white w-full p-10">
                <div className='flex justify-between items-center'>
                    <p className='text-4xl font-roboto font-bold'>Évaluation du Système</p>
                    <div className='flex items-center'>
                        <span className='pr-2 font-roboto font-bold'>Alghufar Sanajab</span>
                        <img src={profile} className='h-10'/>
                    </div>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="p-4 bg-green-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">Clients Servis</h3>
                        <p className="text-3xl font-bold">{stats.servi}</p>
                    </div>
                    <div className="p-4 bg-red-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">Non Servis</h3>
                        <p className="text-3xl font-bold">{stats.nonServi}</p>
                    </div>
                    <div className="p-4 bg-yellow-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">Absents</h3>
                        <p className="text-3xl font-bold">{stats.absent}</p>
                    </div>
                    <div className="p-4 bg-blue-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">En Attente</h3>
                        <p className="text-3xl font-bold">{stats.enAttente}</p>
                    </div>
                    <div className="p-4 bg-purple-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">Temps d'Attente Moyen</h3>
                        <p className="text-3xl font-bold">{stats.tempsAttenteMoyen} min</p>
                    </div>
                    <div className="p-4 bg-orange-500 text-white text-center rounded-lg">
                        <h3 className="text-xl font-bold">Taux de Satisfaction</h3>
                        <p className="text-3xl font-bold">{stats.tauxSatisfaction}%</p>
                    </div>
                </div>

                {/* Histogramme */}
                <div className="mt-10 bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-5">Histogramme des Statistiques</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="valeur" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
