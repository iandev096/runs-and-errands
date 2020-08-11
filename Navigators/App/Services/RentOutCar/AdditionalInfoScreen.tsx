import React, { useContext, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { ThemeContext } from 'react-native-elements';
import { additionalInfoFormControls } from '../../../../constants/form/rentOutCar/additionalInfo/data';
import { AdditionalInfoFormData } from '../../../../constants/form/rentOutCar/additionalInfo/types';
import { RenderFormControls } from '../../../../util/form/RenderFormControls';
import { FormScreen } from '../../../../UIComponents/FormScreen';
import { RentOutCarNavigationProp } from './types';
import { uploadUserServiceImage, getBlobFromUri } from '../../../../util/firebase/storage';
import { SERVICE_NAME } from '../../../../data/services/data';
import { objType } from '../../../../constants/firebase/storage';
import { Alert } from 'react-native';
import { Loader } from '../../../../UIComponents/Loader';

interface AdditionalInfoScreenProps {
  navigation: RentOutCarNavigationProp<'AdditionalInfo'>;
}

const schema = yup.object().shape({
  additionalInfo: yup.array(),
  description: yup.string().required('Required field'),
  vehicleImage: yup.object().shape({
    uri: yup.string().required(),
    base64: yup.string()
  })
});

const ctrlNames = additionalInfoFormControls.map(fc => fc.name);
export const AdditionalInfoScreen: React.FC<AdditionalInfoScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, errors, setValue, clearErrors } = useForm<AdditionalInfoFormData>({
    defaultValues: {
      additionalInfo: [],
      description: '',
      vehicleImage: { uri: '' }
    },
    resolver: yupResolver(schema)
  });
  const [isLoading, setIsLoading] = useState(false);
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

  const submitHandler = async (f: AdditionalInfoFormData) => {
    try {
      setIsLoading(true);

      await uploadUserServiceImage(
        SERVICE_NAME.RentOutCar,
        objType.Vehicle,
        f.vehicleImage.uri
      );

      Alert.alert('Success', 'We have received your details', [{
        text: 'OK',
        onPress: () => navigation.navigate('Tabs')
      }])
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      Alert.alert('Error', 'Error uploading image. Please try again', [
        {
          text: 'Go HOME',
          onPress: () => navigation.navigate('Tabs')
        }, {
          style: 'default',
          text: 'Try Again'
        }
      ]);

    }
  }

  const renderedControls = RenderFormControls<AdditionalInfoFormData>({
    control,
    controls: additionalInfoFormControls,
    errors,
    setValue,
    clearErrors,
    theme
  });

  return (
    <>
      <Loader theme={theme} isLoading={isLoading} transparent={true} />
      <FormScreen
        heading='ENTER ADDITIONAL INFO'
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
        isLoading={isLoading}
      >
        {renderedControls}
      </FormScreen>
    </>
  );
};
