import React from 'react';
import { RequestQuoteScreen, ProfileScreen,ServiceSecondScreen,ServiceScreen } from '../index';
import BottamMenuNavigations from '../navigations/BottamMenuNavigations'
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        name="service"
        component={BottamMenuNavigations}
      />
      <Stack.Screen
        name="service-second"
        options={{
          title: "Select Services - 2/4"
        }}
        component={ServiceSecondScreen}
      />
      <Stack.Screen
        name="request"
        options={{
          title: "Request A Quote"
        }}
        component={RequestQuoteScreen}
      />
      <Stack.Screen
        name="profle"
        options={{
          title: "Edit Profile"
        }}
        component={ProfileScreen}
      />


    </>
  )
}
