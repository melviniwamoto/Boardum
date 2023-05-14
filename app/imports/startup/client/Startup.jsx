import React from 'react';
import ReactDOM from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.jsx';
import { WebSite } from '../both/WebSite';

// Startup the application by rendering the App layout component.
Meteor.startup(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root'),
  );
  document.getElementById('websiteTitleLabel').innerText = WebSite.name;
  root.render(<App />);
});
