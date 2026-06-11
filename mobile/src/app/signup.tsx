import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      Alert.alert("Signup Error", error.message);
      return;
    }

    Alert.alert(
      "Success",
      "Account created successfully"
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Sign Up
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 8,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
          borderRadius: 8,
        }}
      />

      <Button
        title="Create Account"
        onPress={handleSignup}
      />
    </View>
  );
}