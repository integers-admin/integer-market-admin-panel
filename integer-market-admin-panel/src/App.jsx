import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import PrivateComponent from "./auth/PrivateComponent";

const Login = lazy(() => import("./auth/Login"));
const Dash = lazy(() => import("./admin/Dash"));
const AllReports = lazy(() => import("./admin/AllReports"));
const SingleReport = lazy(() => import("./admin/SingleReport"));
const MultiStepForm = lazy(() => import("./admin/addData/MultiStepForm"));
const Error = lazy(() => import("./components/Error"));
const Navbar = lazy(() => import("./admin/Navbar"));

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Dash />} />
              <Route path="/all" element={<AllReports />} />
              <Route path="/add" element={<MultiStepForm />} />
              <Route path="/add/:id" element={<MultiStepForm />} />
              <Route path="/single-report/:id" element={<SingleReport />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;

const Loader = () => (
  <div className="h-screen w-screen flex justify-center items-center">
    <div className="h-10 w-10 border-4 border-[#5FC4BE] border-t-transparent rounded-full animate-spin"></div>
  </div>
);
