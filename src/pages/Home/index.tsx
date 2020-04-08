import * as React from 'react';
import Header from '../../components/Header/index.tsx';
import SavingGoal from './components/SavingGoal';

import './index.scss';

const HomePage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">
            Let's plan your <span>saving goal.</span>
          </h1>
          <SavingGoal />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
