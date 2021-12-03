export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children: Child[] | null
}

export interface Child {
  name: string,
  age: number,
}
