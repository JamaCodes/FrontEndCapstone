import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { DashboardSidebar } from './components/campaignDashboard/dashboardSideBar';

import reportWebVitals from './reportWebVitals';
import { Capstone } from './components/capstone';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
    <div className="flex flex-row " > 
    
<div className="fixed"> <DashboardSidebar /> </div>
<div className=" flex justify-center mx-60">
<Capstone />
</div>
</div>
</>

    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
