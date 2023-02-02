import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';
import SignUp from './SignUp';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    const db = SQLite.openDatabase('mydb.db');
    
    const createUserTable = () => {
        db.transaction(tx => {
          tx.executeSql(
            'create table if not exists users (id integer primary key not null, email text, password text);'
          );
        });
      };
    
      createUserTable();  // Call this function to create the table
    const logIn = (email, password) => {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'select * from users where email = ? and password = ?',
            [email, password],
            (_, { rows }) => resolve(rows._array.length > 0),
            (_, error) => reject(error)
          );
        });
      });
    };

    try {
      const isLoggedIn = await logIn(username, password);
      if (isLoggedIn) {
        setErrorMessage('');
        // Perform navigation to another screen or perform other actions
      } else {
        setErrorMessage('Username or password is incorrect');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errorMessage !== '' && (
        <Text style={styles.error}>{errorMessage}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={SignUp}>
        <Text style={styles.buttonText}>Don't have an Account? Sign Up Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 12,
    margin: 8,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
