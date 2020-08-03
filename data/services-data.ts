type ServiceCard = {
  title: string,
  imageUrl: any,
  description: string,
  name: string,
}

export enum SERVICE_NAME {
  RentCar = 'RentCar',
  ErrandDelivery = 'ErrandDelivery',
  HireDriver = 'HireDriver',
  RentOutCar = 'RentOutCar',
  BecomeDriver = 'BecomeDriver',
  CargoGoods = 'CargoGoods'
}
export const SERVICES: ServiceCard[] = [
  {
    title: 'Rent a car',
    description: 'Allows users to rent vehicles of various classes',
    imageUrl: require('../assets/img/st-car-rent.png'),
    name: SERVICE_NAME.RentCar
  },
  {
    title: 'Errand / Delivery Services',
    description: 'Employ our errand services',
    imageUrl: require('../assets/img/st-errand.png'),
    name: SERVICE_NAME.ErrandDelivery
  },
  {
    title: 'Cargo / Goods Services',
    description: 'Employ our delivery services.',
    imageUrl: require('../assets/img/st-pickup.png'),
    name: SERVICE_NAME.CargoGoods
  },
  {
    title: 'Hire a Driver',
    description: 'Allows users to rent vehicles of various classes',
    imageUrl: require('../assets/img/st-hire-driver.png'),
    name: SERVICE_NAME.HireDriver
  },
  {
    title: 'Rent out your Car',
    description: 'Put out your car for other user to rent at a fee payable to you.',
    imageUrl: require('../assets/img/st-rent-car.png'),
    name: SERVICE_NAME.RentOutCar
  },
  {
    title: 'Become a Driver',
    description: 'Sign up on the platform as a driver',
    imageUrl: require('../assets/img/st-become-driver.png'),
    name: SERVICE_NAME.BecomeDriver
  }
];
