import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContainerBG from '../components/ContainerBG';
import { SaveDataProvider } from '../contexts/SaveData';

import PATHS from './paths';

const SelectSaveData = lazy(() => import('../containers/SelectSaveData'));
const EditSaveData = lazy(() => import('../containers/EditSaveData'));

const { REACT_APP_BASE_NAME = '/' } = process.env;

const Routes = () => (
  <Router basename={REACT_APP_BASE_NAME}>
    <Suspense fallback={<div>Loading... </div>}>
      <ContainerBG>
        <SaveDataProvider>
          <Switch>
            <Route exact path={PATHS.SELECT_SAVE_DATA} component={SelectSaveData} />
            <Route exact path={PATHS.EDIT_SAVE_DATA} component={EditSaveData} />
            <Route component={() => <h1> 404 </h1>} />
          </Switch>
        </SaveDataProvider>
      </ContainerBG>
    </Suspense>
  </Router>
);

export default Routes;
