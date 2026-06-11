import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default function CreateTeamScreen() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTeam = async () => {
    if (!teamName.trim()) {
      Alert.alert("Error", "Team name is required");
      return;
    }

    const { error } = await supabase
      .from("teams")
      .insert([
        {
          name: teamName,
          description,
        },
      ]);

    if (error) {
      Alert.alert("Error", error.message);
      console.log(error);
      return;
    }

    Alert.alert("Success", "Team created");

    setTeamName("");
    setDescription("");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Create Team
      </Text>

      <TextInput
        placeholder="Team Name"
        value={teamName}
        onChangeText={setTeamName}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <Button
        title="Create Team"
        onPress={handleCreateTeam}
      />
    </View>
  );
}