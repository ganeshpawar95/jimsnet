import React from 'react';
import {
  LoginScreen,
  ForgotPasswordScreen,
  SignupScreen,
} from '../index';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPasswordScreen}
      />

    </>
  )
}
