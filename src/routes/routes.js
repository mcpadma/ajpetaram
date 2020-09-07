import React from "react";
import { Switch, Route } from "react-router-dom";

import AppRoutes from "./appRoutes";

//Layouts
import LoginLayout from '../components/layout/loginLayout/loginLayout';
import MainLayout from '../components/layout/mainLayout/mainLayout';

//Pages- components
import Dashboard from '../pages/dashboard/dashboard';
import ComplaintsComponent from '../pages/complaints/complaintsComponent';
import EventsComponent from '../pages/events/eventsComponent';
import SuggestionsComponent from '../pages/suggestions/suggComponent';

const Routes = () => (
  <main>
    <Switch>
      <AppRoutes
        exact
        path="/login"
        layout={LoginLayout}
        component={LoginLayout}
      />
      <AppRoutes
        exact
        path="/"
        layout={MainLayout}
        component={Dashboard}
      />
      <AppRoutes
        path="/complaints"
        exact
        layout={MainLayout}
        component={ComplaintsComponent}
      ></AppRoutes>
      <AppRoutes
        path="/events"
        exact
        layout={MainLayout}
        component={EventsComponent}
      ></AppRoutes>
      <AppRoutes
        path="/suggestions"
        exact
        layout={MainLayout}
        component={SuggestionsComponent}
      ></AppRoutes>
    </Switch>
  </main>
);

export default Routes;
