import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState<{ email: string; password: string } | null>(null);

  const handleLoginSignup = () => {
    if (isLogin) {
      // Store login information in a constant (userData state)
      const loginData = { email, password };
      setUserData(loginData);
      console.log('Logging in with', loginData);
    } else {
      // Store signup information in a constant (userData state)
      const signupData = { email, password };
      setUserData(signupData);
      console.log('Signing up with', signupData);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Image */}
      <Image
        source={require('./img/logo.jpg')} // Replace with your logo URL or local image path
        style={styles.logo}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLoginSignup}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchTextContainer}>
        <Text style={styles.switchText}>
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </Text>
      </TouchableOpacity>

      {userData && (
        <View style={styles.userDataContainer}>
          <Text style={styles.userDataText}>
            {isLogin ? 'Logged in as: ' : 'Signed up as: '}
            {userData.email}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image round
    marginBottom: 30, // Space between logo and header
  },
  header: {
    marginBottom: 40,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#D32F2F',  // Red color
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#D32F2F', // Red color
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchTextContainer: {
    marginTop: 10,
  },
  switchText: {
    color: '#D32F2F',  // Red color
    fontSize: 16,
  },
  userDataContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  userDataText: {
    fontSize: 16,
    color: '#D32F2F', // Red color
  },
});

export default LoginSignupScreen;
