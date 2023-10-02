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

// import FPO_Dashboard from "./components/FPO/Dashboard/Dashboard";
import Farmer_Information from "./components/FPO/Farmer/Farmer_Information";
import Fpo_Store from "./components/FPO/FPO_Store/Fpo_Store";
import Lac_Procurement from "./components/FPO/Lac Procurement/Lac_Procurement";
import Lac_Support from "./components/FPO/Support/Support";
import Lac_Settings from "./components/FPO/Settings/Settings";
import Farmer_Loan from "./components/FPO/Farmer_Loan/Farmer_Loan";
import FOP_Loan_Information from "./components/FPO/FPO_Loan/FPO_Loan_Information";

import SamunnatiWrapper from "./pages/SamunnatiWrapper";
import FPO_Loan from "./components/Samunnati/FPO_Loan/FPO_Loan";
import FPO_Info from "./components/Samunnati/FPO_Info/FPO_Info";
import Samunnati_Farmer_Loan from "./components/Samunnati/Farmer_Loan/Farmer_Loan";
import Samunnati_Support from "./components/Samunnati/Support/Support";
import Samunnati_Settings from "./components/Samunnati/Settings/Settings";
import Input_Requirement from "./components/Farmer/Input_Requirement/Input_Requirement";
import Purchase_Authentication from "./components/Farmer/Purchase_Auth/Purchase_Authentication";
import Fpo_Details from "./components/Farmer/FPO_Details/Fpo_Details";
import Fpo_Announcements from "./components/Farmer/FPO_Announcements/Fpo_Announcements";
import Profile from "./components/FPO/Profile/Profile";
import Request_Quote from "./components/FPO/Request_Quote/Request_Quote";
import Announcement_For_Former from "./components/FPO/Announcement_For_Farmer/Announcement_For_Farmer";
import Requirement_Gathering from "./components/FPO/Requirement_Gathering/Requirement_Gathering";
import Input_Requirement_Acceptance from "./components/FPO/Input_Requirements_Acceptance/Input_Requirement_Acceptance";
import { NavbarContextProvider } from "./Context/context";
import Corporate_Customer from "./components/FPO/Corporate Customer/Corporate_Customer";
import CorporateClientWrapper from "./pages/CorporateClientWrapper";

import Corporate_Client from "./components/CorporateClient/Corporate_Client";
import CorporateClient_Support from "./components/CorporateClient/Support";
import CorporateClient_Settings from "./components/CorporateClient/Settings";
import InputSupplierWrapper from "./pages/InuptSupplierWrapper";
import Invite_Bids from "./components/FPO/Inivete_Bids/Invite_Bids";

import Invited_Bids from "./components/InputSupplier/Invited_Bids";
import Input_Supplier_Settings from "../src/components/InputSupplier/Profile";
import Input_Supplier_Support from "../src/components/InputSupplier/Support";
import Requested_Quotes from "./components/InputSupplier/Requested_Bids/Requested_Quotes";
// import Request_Quotation from "./components/FPO/Request_Quote/Request_Quotation";

import AdminWrapper from "./pages/AdminWrapper";
import Admin_Dashboard from "./components/Admin/Dashboard";
import License_Key from "./components/Admin/License_Key";
import FederationWrapper from "./pages/FederationWrapper";
import FPO_Mdemberships from "./components/Federation/FPO Membership/FPO_Mdemberships";
import Federation_Requirements_Gathering from "../src/components/Federation/Requirement_Gathering/Requirements_Gathering";

import ClusterWrapper from "./pages/ClusterWrapper";
import ViewProfiles from "./components/Cluster/ViewProfile/ViewProfiles";
import ClusterSupport from "./components/Cluster/Support/Support";
import ClusterSettings from "./components/Cluster/Settings/Settings";
import ChatWithFpo from "./components/Cluster/ChatWithFpo/ChatWithFpo";
import CustomHiringCenter from "./components/FPO/CustomHiringCenter/CustomHiringCenter";
import Equipment_List from "./components/Farmer/Equipment/Equipment_List";
import ViewBookings from "./components/Cluster/ViewBookings/ViewBookings";

function App() {
  return (
    <>
      <NavbarContextProvider>
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
              <Route path="input-requirement" element={<Input_Requirement />} />
              <Route path="custom-hiring-center" element={<Equipment_List />} />
              <Route
                path="purchase-authentication"
                element={<Purchase_Authentication />}
              />
              <Route path="fpo-details" element={<Fpo_Details />} />
              <Route path="fpo-announcements" element={<Fpo_Announcements />} />
            </Route>

            {/* FPO routes */}
            <Route path="fpo" element={<FpoWrapper />}>
              <Route index element={<Farmer_Information />} />
              <Route path="farmer" element={<Farmer_Information />} />
              <Route path="fpo-store" element={<Fpo_Store />} />
              <Route path="lac-procurement" element={<Lac_Procurement />} />
              <Route path="farmer-loan" element={<Farmer_Loan />} />
              <Route path="fpo-loan" element={<FOP_Loan_Information />} />
              <Route path="support" element={<Lac_Support />} />
              <Route path="settings" element={<Lac_Settings />} />
              <Route path="profile" element={<Profile />} />
              <Route path="Invite-bids" element={<Invite_Bids />} />
              <Route path="request-quote" element={<Request_Quote />} />
              <Route path="chat-with-fpo" element={<ChatWithFpo />} />
              <Route
                path="custom-hiring-center"
                element={<CustomHiringCenter />}
              />
              <Route
                path="corporate-customer"
                element={<Corporate_Customer />}
              />
              <Route
                path="announcement-for-farmer"
                element={<Announcement_For_Former />}
              />
              <Route
                path="requirement-gathering"
                element={<Requirement_Gathering />}
              />
              <Route
                path="requirement-acceptance"
                element={<Input_Requirement_Acceptance />}
              />
            </Route>

            {/* Samunnati Routes */}

            <Route path="samunnati" element={<SamunnatiWrapper />}>
              <Route index element={<FPO_Loan />} />
              <Route path="fpo-loan" element={<FPO_Loan />} />
              <Route path="fpo-info" element={<FPO_Info />} />
              <Route path="farmer-loan" element={<Samunnati_Farmer_Loan />} />
              <Route path="support" element={<Samunnati_Support />} />
              <Route path="settings" element={<Samunnati_Settings />} />
            </Route>

            {/* Corporate Client */}

            <Route path="corporate-client" element={<CorporateClientWrapper />}>
              <Route index element={<Corporate_Client />} />
              <Route path="corporate-client" element={<Corporate_Client />} />
              <Route path="support" element={<CorporateClient_Support />} />
              <Route path="settings" element={<CorporateClient_Settings />} />
            </Route>

            {/* Federation Routes */}

            <Route path="Federation" element={<FederationWrapper />}>
              <Route index element={<FPO_Mdemberships />} />
              <Route
                path="requirement-gathering"
                element={<Federation_Requirements_Gathering />}
              />
              <Route path="invite-bids" element={<Invite_Bids />} />
              <Route path="request-quote" element={<Request_Quote />} />
              <Route path="Federation" element={<FPO_Mdemberships />} />
              <Route path="support" element={<Input_Supplier_Support />} />
              <Route path="settings" element={<Input_Supplier_Settings />} />
            </Route>

            {/* Cluster Routes */}
            <Route path="Cluster" element={<ClusterWrapper />}>
              <Route index element={<ViewProfiles />} />
              <Route path="Profile" element={<ViewProfiles />} />
              <Route
                path="requirement-gathering"
                element={<Requirement_Gathering />}
              />
              <Route path="view-bookings" element={<ViewBookings />} />
              <Route path="support" element={<ClusterSupport />} />
              <Route path="settings" element={<ClusterSettings />} />
              <Route path="chat-with-fpo" element={<ChatWithFpo />} />
            </Route>

            {/* Admin */}
            <Route path="admin" element={<AdminWrapper />}>
              <Route index element={<Admin_Dashboard />} />
              <Route path="admin" element={<Admin_Dashboard />} />
              <Route path="license-key" element={<License_Key />} />
            </Route>

            {/* Input Supplier */}
            <Route path="input-supplier" element={<InputSupplierWrapper />}>
              <Route index element={<Invited_Bids />} />
              <Route path="Invited-bids" element={<Invited_Bids />} />
              <Route path="Requested-quote" element={<Requested_Quotes />} />
              <Route path="support" element={<Input_Supplier_Support />} />
              <Route path="settings" element={<Input_Supplier_Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NavbarContextProvider>
    </>
  );
}

export default App;
