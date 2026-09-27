import { mockPatients } from "../data/patients";
import type { Patient } from "../types/Patient";

function simulateRequest(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export async function getPatients(): Promise<Patient[]> {
  await simulateRequest(700);
  return mockPatients;
}

export async function getPatientById(patientId: number): Promise<Patient> {
  await simulateRequest(700);
  const patient = mockPatients.find((patient) => patient.id === patientId);

  if (!patient) throw new Error("patient not found");

  return patient;
}
