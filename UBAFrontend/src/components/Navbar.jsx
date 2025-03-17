import { Link } from 'react-router-dom';
import logoUba from '../assets/logo-uba.png'; // Assure-toi que le chemin est correct
import home from '../assets/home.png';
import management from '../assets/campaign-management.png';

const Navbar = () => {
  return (
    <div className="h-screen w-96 bg-customRed flex justify-center">
      <div className="justify-center">
        {/* Logo UBA */}
        <div className="flex justify-center">
          <img src={logoUba} className="h-10 mt-8" alt="Logo UBA" />
        </div>

        {/* Navigation */}
        <nav>
          <Link
            to="/"
            className="link-style"
          >
            <span className='material-icons pr-4'>dashboard</span>
            <span className="text-xl font-bold font-roboto">
              Accueil
            </span>
          </Link>

          <Link
            to="/admin/gestion-service"
            className="link-style"
          >
            <span className='material-icons pr-4'>people</span>
            <span className="text-xl font-bold  font-roboto">
              Gestion des services
            </span>
          </Link>

          <Link
            to="/admin/gestion-utilisateurs"
            className="link-style"
          >
            <span className='material-icons pr-4'>card_membership</span>

            <span className="text-xl font-bold font-roboto">
              Gestion des users
            </span>
          </Link>

          <Link 
            to="/admin/evaluation-performance" 
            className="link-style"
          >
            <span className="material-icons pr-4">assessment</span>
            <span className="text-xl font-bold font-roboto">
              Évaluation du Système
            </span>
          </Link>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
