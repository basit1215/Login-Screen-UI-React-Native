// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

// export default function App() {
//   const [isSignedUp, setIsSignedUp] = useState(false); // State to toggle between screens

//   const SignUpScreen = () => (
//     <View style={styles.container}>
//       <Text style={styles.title}>Explore now</Text>
//       <Text style={styles.subtitle}>Join SO today.</Text>

//       <TouchableOpacity style={styles.googleButton}>
//         <Text style={styles.buttonText}>Sign up with Google</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.appleButton}>
//         <Text style={styles.buttonText}>Sign up with Apple</Text>
//       </TouchableOpacity>

//       <Text style={styles.orText}>or</Text>

//       <TouchableOpacity style={styles.createAccountButton} onPress={() => setIsSignedUp(true)}>
//         <Text style={styles.createButtonText}>Create account</Text>
//       </TouchableOpacity>

//       <Text style={styles.alreadyText}>Already have an account?</Text>

//       <TouchableOpacity style={styles.signInButton}>
//         <Text style={styles.signInText}>Sign in</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const SignInScreen = () => (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign in</Text>
//       <View>
//         <Text>
//           New user? <Text>Create an account</Text>
//         </Text>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Email address"
//       />

//       <TouchableOpacity style={styles.button} activeOpacity={0.4}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>

//       <Text style={styles.orText}>---------------- or -----------------</Text>

//       <TouchableOpacity style={styles.socialButton} activeOpacity={1}>
//         <Image
//           source={{
//             uri: "https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png",
//           }}
//           style={styles.socialIcon}
//         />
//         <Text style={styles.socialButtonText}>Continue with Google</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.socialButton} activeOpacity={0.1}>
//         <Image
//           source={{
//             uri: "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png",
//           }}
//           style={styles.socialIcon}
//         />
//         <Text style={styles.socialButtonText}>Continue with Facebook</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.socialButton} activeOpacity={1}>
//         <Image
//           source={{
//             uri: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
//           }}
//           style={styles.socialIcon}
//         />
//         <Text style={styles.socialButtonText}>Continue with Apple</Text>
//       </TouchableOpacity>

//       {/* Back button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => setIsSignedUp(false)}>
//         <Text style={styles.backButtonText}>Back to Sign Up</Text>
//       </TouchableOpacity>

//       <Image
//         source={{
//           uri: "https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png",
//         }}
//         style={styles.bottomImage}
//       />
//     </View>
//   );

//   return (
//     <>
//       {isSignedUp ? <SignInScreen /> : <SignUpScreen />}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 30,
//   },
//   googleButton: {
//     backgroundColor: '#4285F4',
//     width: '80%',
//     padding: 15,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   appleButton: {
//     backgroundColor: '#000',
//     width: '80%',
//     padding: 15,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   orText: {
//     marginVertical: 10,
//     fontSize: 16,
//     color: '#888',
//   },
//   createAccountButton: {
//     backgroundColor: '#1DA1F2',
//     width: '80%',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   createButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   alreadyText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   signInButton: {
//     padding: 10,
//   },
//   signInText: {
//     color: '#1DA1F2',
//     fontSize: 16,
//   },
//   input: {
//     width: '90%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#000',
//     width: '90%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     width: '90%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 30,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   socialIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   socialButtonText: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   backButton: {
//     marginTop: 20,
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: '#1DA1F2',
//   },
//   bottomImage: {
//     width: 50,
//     height: 50,
//     marginTop: 20,
//   },
// });








































import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar, } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SignInScreen = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <StatusBar barStyle='dark-content'  />
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>
          New user? <Link href={'/signup'} style={styles.link}>Create an account</Link>
        </Text>
        <TextInput style={styles.input} placeholder="Email address" />
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/gooogle.jpeg')} // Replace with your image path
            style={styles.googleicon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/facebook.png')} // Replace with your image path
            style={styles.fbicon}
          />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/apple9.png')} // Replace with your image path
            style={styles.appleicon}
          />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#d5d5d5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'black',
    marginBottom: 20,
    fontSize: 14,
  },
  link: {
    color: '#0098FF',
    fontSize: 16,
    fontWeight: '600'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  continueButton: {
    width: '35%',
    height: 32,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 203,
  },
  continueText: {
    color: '#fff',
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
    fontSize: 18,
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
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 10,
  },
  googleicon: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: 'white'
  },
  fbicon: {
    width: 28,
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
  illustration: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});

export default SignInScreen;
