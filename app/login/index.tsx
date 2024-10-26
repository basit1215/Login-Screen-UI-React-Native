// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// const AuthScreen = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to SO</Text>
//       <Text style={styles.subtitle}>Login or Sign up to access your account</Text>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity onPress={() => setIsLogin(true)} style={[styles.tab, isLogin && styles.activeTab]}>
//           <Text style={isLogin ? styles.activeTabText : styles.tabText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setIsLogin(false)} style={[styles.tab, !isLogin && styles.activeTab]}>
//           <Text style={!isLogin ? styles.activeTabText : styles.tabText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.socialButton}>
//         <AntDesign name="google" size={24} color="black" />
//         <Text style={styles.socialText}>{isLogin ? 'Login with Google' : 'Sign up with Google'}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.socialButton}>
//         <AntDesign name="apple1" size={24} color="black" />
//         <Text style={styles.socialText}>{isLogin ? 'Login with Apple' : 'Sign up with Apple'}</Text>
//       </TouchableOpacity>

//       <View style={styles.dividerContainer}>
//         <View style={styles.divider} />
//         <Text style={styles.orText}>or continue with email</Text>
//         <View style={styles.divider} />
//       </View>

//       <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="email-outline" size={20} color="#6B7280" />
//         <TextInput placeholder="Email Address" style={styles.input} />
//       </View>

//       <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="lock-outline" size={20} color="#6B7280" />
//         <TextInput placeholder="Password" style={styles.input} secureTextEntry />
//       </View>

//       {isLogin && (
//         <TouchableOpacity>
//           <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>{isLogin ? 'Login' : 'Create account'}</Text>
//       </TouchableOpacity>

//       <Text style={styles.termsText}>
//         By {isLogin ? 'signing in' : 'signing up'}, you agree to SO's{' '}
//         <Text style={styles.link}>Terms of Service</Text> and{' '}
//         <Text style={styles.link}>Privacy Policy</Text>.
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#E0F2FE',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     color: '#6B7280',
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#D1E9FE',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   activeTab: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   tabText: {
//     color: '#6B7280',
//     fontWeight: 'bold',
//   },
//   activeTabText: {
//     color: '#111827',
//     fontWeight: 'bold',
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     borderColor: '#E5E7EB',
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   socialText: {
//     marginLeft: 10,
//     color: '#111827',
//     fontWeight: 'bold',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#E5E7EB',
//   },
//   orText: {
//     marginHorizontal: 10,
//     color: '#9CA3AF',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     backgroundColor: '#F3F4F6',
//     borderColor: '#E5E7EB',
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   input: {
//     marginLeft: 10,
//     flex: 1,
//     color: '#111827',
//   },
//   forgotPasswordText: {
//     color: '#3B82F6',
//     alignSelf: 'flex-start',
//     marginBottom: 20,
//   },
//   loginButton: {
//     width: '100%',
//     height: 40,
//     backgroundColor: '#3B82F6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   termsText: {
//     color: '#9CA3AF',
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   link: {
//     color: '#3B82F6',
//   },
// });

// export default AuthScreen;





























import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>Welcome to SO</Text>
      <Text style={styles.subtitle}>Login to access your account</Text>


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

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or continue with email</Text>
        <View style={styles.divider} />
      </View>

      {/* Email and Password Inputs */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#6B7280" />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={20} color="#6B7280" />
        <TextInput
        
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Forgot password?</Text>

      {/* Main Action Button */}
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By signing in, you agree to SO's{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E5F1FB',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 10,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#111827',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#E5E7EB',
    borderWidth: 0,
    marginBottom: 12,
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
    fontSize: 14,
  },
  input: {
    width: '90%',
    height: 22,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#3B82F6',
    marginBottom: 20,
  },
  mainButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
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

export default AuthScreen;
