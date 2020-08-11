export enum CATEGORIES {
  Personal = 'Personal',
  Pickup = 'Pickup',
}
export type DriverCategoryCard = {
  name: CATEGORIES,
  desc: string,
  imageUrl: any,
}

export enum VEHICLE_TYPE {
  Cars = 'Cars',
  Buses = 'Buses',
  LongVehicle = 'LongVehicle',
  Trucks = 'Trucks',
}

export type Driver = {
  id: string,
  firstName: string,
  lastName: string,
  about: string,
  skills: Set<string>,
  typesOfVehicles: Set<VEHICLE_TYPE>,
  imageUrl: any,
  nameOnLicense: string,
  drivingSince: number,
  isAvailable: boolean,
  categories: CATEGORIES[],
}

