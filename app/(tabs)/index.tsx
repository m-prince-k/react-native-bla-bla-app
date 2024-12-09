import { Image, StyleSheet, Platform, View, TextInput, TouchableOpacity,Text } from 'react-native';


import React, { useState } from 'react';
import { Formik } from 'formik';
import { loginValidationSchema } from '@/components/loginValidationSchema';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation=useNavigation();
  const [validation,setValidation]=useState({
    email:"",
    password:""
  });
  const handleSubmit  = () => {
    alert("asfasfasfasfasfasf")
  }
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
    <View>
    <Text style={styles.title}>How do you want to log in?</Text>
    </View>
     

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
       
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              {/* <Icon name="mail-outline" size={25} style={styles.icon} /> */}
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
       
                <Text>{errors.email}</Text>
          
              
            )}
            <View style={styles.inputContainer}>
              {/* <Icon name="lock-closed-outline" size={25} style={styles.icon} /> */}
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={() => ""}>

              <Text style={styles.forgotPassword}>Forgot Password?</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit} disabled={!isValid}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            // onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles?.signUp}>
                Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUp: {
    color: '#000',
  },
  signUpLink: {
    color: '#1E90FF',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});
