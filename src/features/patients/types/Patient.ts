export interface Patient {
  id: number
  firstName: string
  lastName: string
  age: number
  phone: string
  status: 'active' | 'inactive'
}