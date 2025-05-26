import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Головна
      </NavLink>
      <NavLink 
        to="/my-recipes" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Мої рецепти
      </NavLink>
      <NavLink 
        to="/categories" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Категорії
      </NavLink>
      <NavLink 
        to="/add-recipy" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Додати рецепт
      </NavLink>
    </nav>
  );
}

export default Navigation;