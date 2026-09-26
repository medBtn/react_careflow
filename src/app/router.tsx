import { createBrowserRouter } from "react-router";
import App from "../App";
import { Dashboard } from "../components/Dashboard/components/Dashboard";
import { PatientDetailsPage } from "../features/patients/pages/PatientDetailsPage";
import { PatientsPage } from "../features/patients/pages/PatientPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "patients",
        Component: PatientsPage,
      },
      {
        path: "patients/:patientId",
        Component: PatientDetailsPage,
      },
    ],
  },
]);
