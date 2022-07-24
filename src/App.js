import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import HousingPage from "./Pages/HousingPage";
import Housing from "./Pages/Housing";
// import Application from "./Pages/Application";
import LinearStepper from "./Component/LinearStepper";
import Payment from "./Pages/Payment";
import PaymentConfirmation from "./Pages/PaymentConfirmation";
import ApplicationStatus from "./Pages/ApplicationStatus";
import OrderedApplication from "./Pages/OrderedApplication";
import DraftApplications from "./Pages/DraftApplications";
import SocialHousing from "./Component/SocialHousing";
import PaymentPage from "./Pages/PaymentPage";
import ComplexDetails from "./Component/ComplexDetails";
import { HousingDesign } from "./Pages/HousingDesign";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDetailsDesign } from "./Pages/HouseDetailsDesign";
import ApplicationTable from "./Pages/ApplicationTable";
import { StepsForm } from "./Pages/StepsForm";

function App() {
  return (
    <div className="App Darkbackground DarkFontsColor">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/housingpage" element={<HousingPage />} />
        <Route path="/housingdetails/:type" element={<Housing />} />
        <Route path="/socialhousing/:type" element={<SocialHousing />} />
        <Route path="/tenancy/:id" element={<LinearStepper />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentconfirm" element={<PaymentConfirmation />} />
        <Route
          path="/status/:applicationStatus"
          element={<ApplicationStatus />}
        />
        <Route path="/applications" element={<ApplicationTable />} />
        <Route path="/draftapplications" element={<DraftApplications />} />
        <Route path="/complex-details/:type" element={<ComplexDetails />} />
        <Route
          path="/tenancy/:id/:applicationIdParams"
          element={<LinearStepper />}
        />
        <Route path="/payment-confirmation" element={<PaymentPage />} />

        {/* BELOW CHANGES ADDED BY RAVI PATHAK */}
        <Route path="/housing/:type" element={<HousingDesign />} />
        <Route path="/housinglist/:type" element={<HouseDetailsDesign />} />
        <Route path="/application-form/:type" element={<StepsForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
