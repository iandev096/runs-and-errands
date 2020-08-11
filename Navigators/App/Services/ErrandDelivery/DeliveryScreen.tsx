import React, { useContext, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { ThemeContext } from 'react-native-elements';
import { errandFormControls } from '../../../../constants/form/errandDelivery/errand/data';
import { ErrandFormData } from '../../../../constants/form/errandDelivery/errand/type';
import { RenderFormControls } from '../../../../util/form/RenderFormControls';
import { FormScreen } from '../../../../UIComponents/FormScreen';
import { ErrandDeliveryNavigationProp } from './types';
import { deliveryFormControls } from '../../../../constants/form/errandDelivery/delivery/data';
import { DeliveryFormData } from '../../../../constants/form/errandDelivery/delivery/type';

interface DeliveryScreenProps {
  navigation: ErrandDeliveryNavigationProp<'Errand'>;
}

const schema = yup.object().shape({
  contactNumber: yup.string().required(),
  from: yup.object().typeError('Choose a location').shape({ lat: yup.number().required(), lng: yup.number().required() }),
  to: yup.object().typeError('Choose a location').shape({ lat: yup.number().required(), lng: yup.number().required() }),
  instructions: yup.string().required()
});

const ctrlNames = deliveryFormControls.map(fc => fc.name);
export const DeliveryScreen: React.FC<DeliveryScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, errors, setValue, clearErrors } = useForm<DeliveryFormData>({
    defaultValues: {
      contactNumber: '',
      from: null,
      to: null,
      instructions: ''
    },
    resolver: yupResolver(schema)
  });

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
  }

  const renderedControls = RenderFormControls<ErrandFormData>({
    control,
    controls: errandFormControls,
    errors,
    setValue,
    clearErrors,
    theme
  });

  return (
    <FormScreen
      heading='Errand Details'
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
