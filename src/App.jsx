import React from "react";
import Login1 from "./components/Login1";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmerWrapper from "./pages/FarmerWrapper";
import Store from "./components/Farmer/Store";
import Dashboard from "./components/Farmer/Dashboard";
import SellingPrice from "./components/Farmer/SellingPrice";
import TransactionHistory from "./components/Farmer/TransactionHistory";
import TrainingPrograms from "./components/Farmer/TrainingPrograms";
import CropAdvisory from "./components/Farmer/CropAdvisory";
import Support from "./components/Farmer/Support";
import Settings from "./components/Farmer/Settings";
import Loan from "./components/Farmer/Loan";
import FpoWrapper from "./pages/FpoWrapper";

import FPO_Dashboard from "./components/FPO/Dashboard/Dashboard";
import Farmer_Information from "./components/FPO/Farmer/Farmer_Information";
import Fpo_Store from "./components/FPO/FPO_Store/Fpo_Store";
import Lac_Procurement from "./components/FPO/Lac Procurement/Lac_Procurement";
import Lac_Support from "./components/FPO/Support/Support";
import Lac_Settings from './components/FPO/Settings/Settings';
import Farmer_Loan from "./components/FPO/Farmer_Loan/Farmer_Loan";
import FOP_Loan_Information from './components/FPO/FPO_Loan/FPO_Loan_Information';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login route */}
          <Route path="/" element={<Login1 />} />
          <Route path="register" element={<Register />} />
          {/* farmer route */}
          <Route path="farmer" element={<FarmerWrapper />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="store" element={<Store />} />
            <Route path="sellingprice" element={<SellingPrice />} />
            <Route path="loan" element={<Loan />} />
            <Route
              path="transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="training" element={<TrainingPrograms />} />
            <Route path="crop-advisory" element={<CropAdvisory />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="fpo" element={<FpoWrapper />}>
            <Route index element={<FPO_Dashboard />} />
            <Route path="dashboard" element={<FPO_Dashboard />} />
            <Route path="farmer" element={<Farmer_Information />} />
            <Route path="fpo-store" element={<Fpo_Store />} />
            <Route path="lac-procurement" element={<Lac_Procurement />} />
            <Route path="farmer-loan" element={<Farmer_Loan/>} />
            <Route path="fpo-loan" element={<FOP_Loan_Information/>} />
            <Route path="support" element={<Lac_Support/>} />
            <Route path="settings" element={<Lac_Settings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
