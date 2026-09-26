import type { Patient } from "../types/Patient";

export const mockPatients: Patient[] = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'Benali',
    age: 34,
    phone: '0550 12 34 56',
    status: 'active',
  },
  {
    id: 2,
    firstName: 'Amine',
    lastName: 'Mansouri',
    age: 42,
    phone: '0661 45 67 89',
    status: 'active',
  },
  {
    id: 3,
    firstName: 'Nadia',
    lastName: 'Kaci',
    age: 29,
    phone: '0770 98 76 54',
    status: 'inactive',
  },
]