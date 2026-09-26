import { mockPatients } from "../data/patients";
import type { Patient } from "../types/Patient";

export async function getPatients(): Promise<Patient[]> {
  await  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return mockPatients
}
