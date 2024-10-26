import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore now</Text>
      <Text style={styles.subtitle}>Join SO today.</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../../assets/images/gooogle.jpeg')} // Replace with your image path
          style={styles.googleicon}
        />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../../assets/images/apple9.png')} // Replace with your image path
          style={styles.appleicon}
        />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Already have an account?</Text>
      <TouchableOpacity>
        <Link href={'/login'} style={styles.signInText}>Sign in</Link>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By signing up, you agree to the{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>, including{' '}
        <Text style={styles.link}>Cookie Use</Text>.
      </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: 'black',
    marginBottom: 50,
    fontSize: 26,
    fontWeight: 'bold',

  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    marginBottom: 10,
  },
   googleicon: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: 'white'
  },
  appleicon: {
    width: 25,
    height: 30,
    marginRight: 10,
    backgroundColor: 'white'
  },
  socialText: {
    color: '#111827',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    color: 'gray',
    fontSize: 18
  },
  createAccountButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 20,
  },
  createAccountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'black',
    paddingTop: 24,
    paddingBottom: 12,
    fontSize: 16,
    fontWeight: '500', 
    paddingLeft: 5,
  },
  signInText: {
    color: '#3B82F6',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 16,


    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 35,
    borderColor: '#b5b5b5',
    borderWidth: 1,
    textAlign: 'center'
  },
  termsText: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
  },
  link: {
    color: '#3B82F6',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
