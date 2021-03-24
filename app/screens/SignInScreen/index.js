import React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { form } from '../../styles';
import { colors } from '../../assets/colors';
import { EMAIL_REGEX } from '../../lib';

export const SignInScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ScrollView contentContainerStyle={{ flex: 1}}>
      <View style={form.container}>
        <View style={form.headerTextContainer}>
          <Text style={form.headerText}>SIGN IN</Text>
          <Text style={form.headerSubText}>To explore our collections</Text>
        </View>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={form.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              keyboardType="email-address"
              placeholder="Email Address"
            />
          )}
          name="email"
          rules={{
            required: {
              value: true,
              message: "Email Is Required"
            },
            pattern: {
              value: EMAIL_REGEX,
              message: "Email Is Invalid"
            }
          }}
          defaultValue=""
        />
        {errors.email && <Text style={form.validationError}>{errors.email?.message}</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={form.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
          name="password"
          rules={{
            required: {
              value: true,
              message: "Password Is Required"
            }
          }}
          defaultValue=""
        />
        {errors.password && <Text style={form.validationError}>{errors.password?.message}</Text>}

        <TouchableOpacity 
          title="Submit" 
          style={form.btn}
          onPress={handleSubmit(onSubmit)} 
        >
          <Text>SIGN IN</Text>
        </TouchableOpacity>

        <View style={form.footerTextContainer}>
          <Text style={form.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={form.footerTextLink}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

