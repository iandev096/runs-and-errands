import { formControl } from "../types";
import { CargoDetailsFormData, EsQUANTITY } from "./types";

export const cargoDetailsFormControls: formControl<keyof CargoDetailsFormData>[] = [
  {
    name: 'cargoNature',
    controlType: 'TextInput',
    input: {
      placeholder: '',
      label: 'Nature of Cargo',
    },
    keyboardType: 'default',
    icon: {
      name: 'ios-bus',
      type: 'ionicon'
    }
  },
  {
    name: 'estimatedQuatity',
    label: 'Estimated Quantity',
    controlType: 'PickerInput',
    items: [
      { label: EsQUANTITY.less100, value: EsQUANTITY.less100 },
    ]
  },
  {
    name: 'from',
    label: 'From',
    controlType: 'LocationInput',
    location: {
      lat: 0,
      lng: 0
    }
  },
  {
    name: 'to',
    label: 'To',
    controlType: 'LocationInput',
    location: {
      lat: 0,
      lng: 0
    }
  },
];
