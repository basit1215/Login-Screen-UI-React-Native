import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false); // State to toggle between screens

  const SignUpScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Explore now</Text>
      <Text style={styles.subtitle}>Join SO today.</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Text style={styles.buttonText}>Sign up with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.createAccountButton} onPress={() => setIsSignedUp(true)}>
        <Text style={styles.createButtonText}>Create account</Text>
      </TouchableOpacity>

      <Text style={styles.alreadyText}>Already have an account?</Text>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );

  const SignInScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <View>
        <Text>
          New user? <Text>Create an account</Text>
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email address"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.4}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>---------------- or -----------------</Text>

      <TouchableOpacity style={styles.socialButton} activeOpacity={1}>
        <Image
          source={{
            uri: "https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} activeOpacity={0.1}>
        <Image
          source={{
            uri: "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} activeOpacity={1}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
          }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => setIsSignedUp(false)}>
        <Text style={styles.backButtonText}>Back to Sign Up</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png",
        }}
        style={styles.bottomImage}
      />
    </View>
  );

  return (
    <>
      {isSignedUp ? <SignInScreen /> : <SignUpScreen />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  appleButton: {
    backgroundColor: '#000',
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: '#888',
  },
  createAccountButton: {
    backgroundColor: '#1DA1F2',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  alreadyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  signInButton: {
    padding: 10,
  },
  signInText: {
    color: '#1DA1F2',
    fontSize: 16,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#000',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#1DA1F2',
  },
  bottomImage: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});