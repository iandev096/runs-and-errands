import { VehicleCategoryCard, CATEGORIES, Vehicle, ADDITIONAL_INFO } from './types';

export const VEHICLE_CATEGORIES: VehicleCategoryCard[] = [
  {
    name: CATEGORIES.Economy,
    title: 'Economic Vehicles only',
    imageUrl: require('../../assets/img/vc-economy.png')
  },
  {
    name: CATEGORIES.Business,
    title: 'Business purposes',
    imageUrl: require('../../assets/img/vc-business.png')
  },
  {
    name: CATEGORIES.Trucks,
    title: 'Trucks only',
    imageUrl: require('../../assets/img/vc-truck.png')
  },
  {
    name: CATEGORIES.Pickups,
    title: 'Pickups and 4x4s',
    imageUrl: require('../../assets/img/vc-pickup.png')
  },
  {
    name: CATEGORIES.Vans,
    title: 'Vans',
    imageUrl: require('../../assets/img/vc-wagon.png')
  },
  {
    name: CATEGORIES.Minivans,
    title: 'Economic Minivan only',
    imageUrl: require('../../assets/img/vc-minivan.png')
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'v1',
    make: 'Bentley',
    categories: [CATEGORIES.Business, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'Green',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Green Bentley with sleek leather interior, digital dashboard and comfortable seats',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-bentley-green.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
      ADDITIONAL_INFO.ABS
    ])
  },
  {
    id: 'v2',
    make: 'Bentley',
    categories: [CATEGORIES.Business],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'Silver',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Silver Bentley with sleek leather interior, digital dashboard and comfortable seats',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-bentley-silver.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  },
  {
    id: 'v3',
    make: 'Benz Truck',
    categories: [CATEGORIES.Trucks],
    gearbox: 'Manual',
    deposit: 0,
    fuel: 'Diesel',
    color: 'White',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Huge benz truck with a million horse power.',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-benz-truck.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
    ])
  },
  {
    id: 'v4',
    make: 'Benz Van',
    categories: [CATEGORIES.Trucks, CATEGORIES.Economy],
    gearbox: 'Manual',
    deposit: 0,
    fuel: 'Petrol',
    color: 'White',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great Benz van with durable parts. Very strong and solid.',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-benz-van-white.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  },
  {
    id: 'v5',
    make: 'BMW',
    categories: [CATEGORIES.Business, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'White',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-bmw-orange.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
    ])
  },
  {
    id: 'v6',
    make: 'Ford Pickup',
    categories: [CATEGORIES.Pickups],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'Silver',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Green Bentley with sleek leather interior, digital dashboard and comfortable seats',
    isAvailable: false,
    imageUrl: require('../../assets/img/vl-ford-pickup-silver.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
      ADDITIONAL_INFO.ABS
    ])
  },
  {
    id: 'v7',
    make: 'Ford Van',
    categories: [CATEGORIES.Vans, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'White',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: false,
    imageUrl: require('../../assets/img/vl-ford-van-white.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  },
  {
    id: 'v8',
    make: 'GMC Van Truck',
    categories: [CATEGORIES.Vans, CATEGORIES.Trucks],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'White',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: false,
    imageUrl: require('../../assets/img/vl-gmc-van-white.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl
    ])
  },
  {
    id: 'v9',
    make: 'Honda Minivan',
    categories: [CATEGORIES.Minivans, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Diesel',
    color: 'Ash',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: false,
    imageUrl: require('../../assets/img/vl-honda-minivan-ash.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  },
  {
    id: 'v10',
    make: 'Isuzu Pickup',
    categories: [CATEGORIES.Pickups, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Diesel',
    color: 'Red',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-isuzu-pickup-red.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  },
  {
    id: 'v11',
    make: 'Isuzu Truck',
    categories: [CATEGORIES.Trucks, CATEGORIES.Economy],
    gearbox: 'Automatic',
    deposit: 0,
    fuel: 'Petrol',
    color: 'Green',
    pricePerDay: { min: 100 },
    pricePerHalf: { min: 90 },
    mileage: 30000,
    description: 'Great, fast, strong and solid vehicle with awesome interior.',
    isAvailable: true,
    imageUrl: require('../../assets/img/vl-isuzu-truck.jpg'),
    additionalInfo: new Set([
      ADDITIONAL_INFO.AirBag,
      ADDITIONAL_INFO.AirConditioning,
      ADDITIONAL_INFO.AudioSystem,
      ADDITIONAL_INFO.FourWheel,
      ADDITIONAL_INFO.ElectricWindows,
      ADDITIONAL_INFO.CentralLocking,
      ADDITIONAL_INFO.CruiseControl,
    ])
  }
]

