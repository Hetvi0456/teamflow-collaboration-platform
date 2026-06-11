import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignup = async () => {
  //   console.log("EMAIL:", email);
  //   console.log("PASSWORD:", password);

  //   const { data, error } = await supabase.auth.signUp({
  //     email: email.trim(),
  //     password: password.trim(),
  //   });

  //   // if (error) {
  //   //   Alert.alert("Error", error.message);
  //   //   return;
  //   // }

  //   if (error) {
  //     console.log("SUPABASE ERROR:", error);
  //     Alert.alert("Error", JSON.stringify(error));
  //     return;
  //   }

  //   Alert.alert("Success", "Account created successfully");
  //   console.log(data);
  // };

  const handleSignup = async () => {
    const { data, error } = await supabase
      .from("teams")
      .insert([
        {
          name: "Team Alpha",
          description: "First TeamFlow test team",
        },
      ])
      .select();

    if (error) {
      console.log(error);
      Alert.alert("Error", JSON.stringify(error));
      return;
    }

    console.log(data);
    Alert.alert("Success", "Team created");
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
          fontSize: 24,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        TeamFlow Signup
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
      />

      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}