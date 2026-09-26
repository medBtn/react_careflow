export interface Patient {
  id: number
  firstName: string
  lastName: string
  // dateOfBirth: string
  // gender: string
  age: number
  phone: string
  // email: string
  status: 'active' | 'inactive'
  createdAt?: Date
  updatedAt?: Date
}