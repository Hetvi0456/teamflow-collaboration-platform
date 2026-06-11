import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { supabase } from "../lib/supabase";

export default function TeamsScreen() {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setTeams(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        My Teams
      </Text>

      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}