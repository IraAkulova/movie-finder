import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import Loader from '../../components/loader/Loader';
import UserMenu from '../../components/userMenu/UserMenu';
import RegisterView from '../../pages/RegisterView';

const SharedLayout = () => {
  return (
    <>
      <div className={css.navigation}>
        <nav>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
        <UserMenu>
          <RegisterView />
        </UserMenu>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
