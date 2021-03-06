import React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { form } from '../../styles';
import { EMAIL_REGEX } from '../../lib';

export const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={form.container}>
        <View style={form.headerTextContainer}>
          <Text style={form.headerText}>SIGN UP</Text>
          <Text style={form.headerSubText}>To explore all our collections</Text>
        </View>

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={form.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="First Name"
            />
          )}
          name="firstName"
          rules={{ 
            required: {
              value: true,
              message: "First Name Is Required"
            },
            minLength: {
              value: 2,
              message: "Use Altleast 2 Characters"
            }
          }}
          defaultValue=""
        />
        {errors.firstName && <Text style={form.validationError}>{errors.firstName?.message}</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={form.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Last Name"
            />
          )}
          name="lastName"
          rules={{ 
            required: {
              value: true,
              message: "Last Name Is Required"
            },
            minLength: {
              value: 2,
              message: "Use Altleast 2 Characters"
            }
          }}
          defaultValue=""
        />
        {errors.lastName && <Text style={form.validationError}>{errors.lastName?.message}</Text>}

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
          defaultValue=""
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
            },
            minLength: {
              value: 2,
              message: "Use Altleast 2 Characters"
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
          <Text>SIGN UP</Text>
        </TouchableOpacity>

        <View style={form.footerTextContainer}>
          <Text style={form.footerText}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={form.footerTextLink}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
