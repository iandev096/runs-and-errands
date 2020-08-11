import React, { useContext, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { ThemeContext } from 'react-native-elements';
import { cargoDetailsFormControls } from '../../../../constants/form/cargoDetails/data';
import { CargoDetailsFormData, EsQUANTITY } from '../../../../constants/form/cargoDetails/types';
import { RenderFormControls } from '../../../../util/form/RenderFormControls';
import { FormScreen } from '../../../../UIComponents/FormScreen';
import { CargoGoodsNavigationProp } from './types';

interface CargoDetailsScreenProps {
  navigation: CargoGoodsNavigationProp<'CargoDetails'>;
}

const schema = yup.object().shape({
  cargoNature: yup.string().required(),
  estimatedQuatity: yup.string().required(),
  from: yup.object().typeError('Choose a location').shape({lat: yup.number().required(), lng: yup.number().required()}),
  to: yup.object().typeError('Choose a location').shape({lat: yup.number().required(), lng: yup.number().required()})
});

const ctrlNames = cargoDetailsFormControls.map(fc => fc.name);
export const CargoDetailsScreen: React.FC<CargoDetailsScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, errors, setValue, clearErrors } = useForm<CargoDetailsFormData>({
    defaultValues: {
      cargoNature: '',
      estimatedQuatity: EsQUANTITY.less100,
      from: null,
      to: null
    },
    resolver: yupResolver(schema)
  });

  console.log(errors)

  const { theme } = useContext(ThemeContext);
  const [formValid, setFormValid] = useState(false);

  const formValidDependencies = [...ctrlNames.map(name => errors[name])];
  useEffect(() => {
    for (let name of ctrlNames) {
      if (errors[name]) {
        setFormValid(false);
        break
      } else {
        setFormValid(true);
      }
    }
  }, formValidDependencies);

  const submitHandler = (f: any) => {
    console.log(f);
    navigation.navigate('Tabs');
  }

  const renderedControls = RenderFormControls<CargoDetailsFormData>({
    control,
    controls: cargoDetailsFormControls,
    errors,
    setValue,
    clearErrors,
    theme
  });

  return (
    <FormScreen
      heading={'CARGO DETAILS'}
      theme={theme}
      leftFooterButton={{
        title: 'BACK',
        onPress: () => { navigation.goBack() }
      }}
      rightFooterButton={{
        title: 'NEXT',
        onPress: handleSubmit(submitHandler),
        disabled: !formValid
      }}
    >
      {renderedControls}
    </FormScreen>
  );
};
