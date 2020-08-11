import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { ThemeContext } from 'react-native-elements';
import { licenseInfoFormControls } from '../../../../constants/form/becomeDriver/licenseInfo/data';
import { LicenseInfoFormData } from '../../../../constants/form/becomeDriver/licenseInfo/type';
import { FormScreen } from '../../../../UIComponents/FormScreen';
import { BecomeDriverNavigationProp } from './types';
import { RenderFormControls } from '../../../../util/form/RenderFormControls';

interface LicenseInfoScreenProps {
  navigation: BecomeDriverNavigationProp<'LicenseInfo'>;
}

const schema = yup.object().shape({
  nameOnLicense: yup.string(),
  year: yup.number().typeError('Enter an appropriate value').moreThan(1900).lessThan(
    new Date().getFullYear()
  ),

  drivingSince: yup.number().typeError('Enter an appropriate value').moreThan(1900).lessThan(
    new Date().getFullYear() + 1
  ),

  imageOfLicense: yup.object().shape({
    uri: yup.string().required(),
    base64: yup.string()
  }),
});

const ctrlNames = licenseInfoFormControls.map(fc => fc.name);
export const LicenseInfoScreen: React.FC<LicenseInfoScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, errors, setValue, clearErrors } = useForm<LicenseInfoFormData>({
    defaultValues: {
      drivingSince: 0,
      imageOfLicense: { uri: '' },
      nameOnLicense: '',
      year: 0
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

  const nextHandler = (f: any) => {
    navigation.navigate('ContactAddress');
  }

  const renderedControls = RenderFormControls<LicenseInfoFormData>({
    control,
    controls: licenseInfoFormControls,
    errors,
    setValue,
    clearErrors,
    theme
  });

  return (
    <FormScreen
      heading='ENTER LICENSE INFO'
      theme={theme}
      leftFooterButton={{
        title: 'BACK',
        onPress: () => { navigation.goBack() }
      }}
      rightFooterButton={{
        title: 'NEXT',
        onPress: handleSubmit(nextHandler),
        disabled: !formValid
      }}
    >
      {renderedControls}
    </FormScreen>
  );
};
