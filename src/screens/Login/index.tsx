import type {FormikErrors, FormikHelpers} from 'formik';
import {Field, Formik} from 'formik';
import {FC, useState} from 'react';
import {useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createStyles} from './styles';
import type {FormValues, LoginProps} from './types';
import validationSchema from './validationSchema';
import {Button, Container, LoadingOverlay, Text, Title} from '../../components';
import {useBoolean, useThemedStyles} from '../../hooks';
import {ErrorFeedback, PasswordField, TextField} from '../../forms/fields';
import loginLogo from '../../assets/images/logo.png';
import {useSessionStore} from '../../state/session/slice.ts';
import {useLogin} from '../../state/session/actions.tsx';
import {users} from '../../constans/users.ts';
import BooleanButtons from '../../components/BooleanButtons';
import Accordion from '../../components/Accordion';
import {GameControllerIcon} from '../../assets/icons';

const initialValues: FormValues = {username: '', password: ''};

const Login: FC<LoginProps> = () => {
  const [styles] = useThemedStyles(createStyles);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [expanded, setExpanded] = useBoolean(false);
  const {status} = useSessionStore();
  const {login} = useLogin();
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    await login(values.username, values.password);
    actions.resetForm({values});
    actions.setStatus({isSubmitted: true});
  };

  const handleAutoComplete = async (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<FormValues>>,
    id: number,
  ) => {
    const user = users[id];
    await setFieldValue('username', user.email, false);
    await setFieldValue('password', `${user.password}`, false);
    setUserId(id);
  };

  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Container accessibilityLabel="view-login-container">
      {status.isFetching && <LoadingOverlay />}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}>
        {({submitForm, dirty, status: state, setFieldValue}) => (
          <View style={styles.content}>
            <View style={styles.content}>
              <Accordion
                expanded={expanded}
                setExpanded={setExpanded}
                title={'Inicio de sessión'}
                icon={<GameControllerIcon />}
                containerStyle={{
                  width: 200,
                  marginVertical: 20,
                  alignSelf: 'center',
                  backgroundColor: undefined,
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    minWidth: 200,
                    alignSelf: 'center',
                    marginTop: -30,
                    padding: 5,
                    borderBottomEndRadius: 25,
                    borderBottomStartRadius: 25,
                    borderTopWidth: 0,
                    marginBottom: 10,
                    backgroundColor: '#fff', // Cambia el color de fondo según sea necesario
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  {users.map(user => (
                    <TouchableOpacity
                      key={user.id}
                      style={{
                        borderTopWidth: 1,
                        width: 200,
                        paddingVertical: 2,
                      }}
                      onPress={() =>
                        handleAutoComplete(setFieldValue, Number(user.id))
                      }>
                      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                        {user.rol}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Accordion>

              <Field
                accessibilityLabel="txt-login-username"
                component={TextField}
                name="username"
                config={{
                  placeholder: 'Ingrese su correo electronico',
                  label: 'Correo electronico',
                  returnKeyType: 'next',
                  keyboardType: 'email-address',
                }}
                innerRef={usernameRef}
                nextInnerRef={passwordRef}
              />
              <Field
                accessibilityLabel="txt-login-password"
                component={PasswordField}
                name="password"
                config={{
                  placeholder: 'Ingrese contraseña',
                  label: 'Contraseña',
                }}
                innerRef={passwordRef}
              />
            </View>
            {!dirty && state?.isSubmitted && status.errorMessage && (
              <ErrorFeedback config={{label: status.errorMessage}} />
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={submitForm}
                  title="Ingresar"
                  accessibilityLabel="btn-login-submit"
                  buttonStyle={styles.button}
                  titleStyle={{
                    justifyContent: 'center',
                    width: '100%',
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Login;

/*
* import * as React from "react";
import { value ButtonGroup } from "@rneui/base";

export default () => {
  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(1);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);
  return (
    <ButtonGroup
      buttonStyle={{ width: 100 }}
      buttonContainerStyle={{}}
      buttons={[
        "Hello",
        "World",
        "React",
        "Native",
        "Elements"
      ]}
      containerStyle={{}}
      disabledStyle={{}}
      disabledTextStyle={{}}
      disabledSelectedStyle={{}}
      disabledSelectedTextStyle={{}}
      innerBorderStyle={{}}
      onPress={selectedIdx =>
        setSelectedIndex(selectedIdx)
      }
      selectedButtonStyle={{}}
      selectedIndex={selectedIndex}
      selectedIndexes={selectedIndexes}
      selectedTextStyle={{}}
      textStyle={{}}
      vertical
    />
  );
}*/
