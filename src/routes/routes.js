import React from "react";
import { Switch, Route } from "react-router-dom";

import AppRoutes from "./appRoutes";

//Layouts
import LoginLayout from '../components/layout/loginLayout/loginLayout';
import MainLayout from '../components/layout/mainLayout/mainLayout';

//Pages- components
import WelcomePage from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import LoginFormik from '../pages/login/loginFormik';
import GuestDashboard from '../pages/dashboard/guestDashboard';
import AdminDashboard from '../pages/dashboard/adminDashboard';
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
        component={LoginFormik}
      />
      <AppRoutes
        exact
        path="/"
        layout={LoginLayout}
        component={WelcomePage}
      />
      <AppRoutes
        exact
        path="/admindash"
        layout={MainLayout}
        component={AdminDashboard}
      />
      <AppRoutes
        exact
        path="/guestdash"
        layout={MainLayout}
        component={GuestDashboard}
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
