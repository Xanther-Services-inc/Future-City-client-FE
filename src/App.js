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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/housingpage" element={<HousingPage />} />
        <Route path="/housingdetails/:type" element={<Housing />} />
        <Route path="/tenancy/:id" element={<LinearStepper />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentconfirm" element={<PaymentConfirmation />} />
        <Route path="/status" element={<ApplicationStatus />} />
        <Route path="/orderedapplication" element={<OrderedApplication />} />
        <Route path="/draftapplications" element={<DraftApplications />} />
        <Route
          path="/tenancy/:id/:applicationIdParams"
          element={<LinearStepper />}
        />
      </Routes>
    </div>
  );
}

export default App;
