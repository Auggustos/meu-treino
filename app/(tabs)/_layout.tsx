import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen
        name="screens/meusDados"
        options={{
          title: "Dados",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon
              icon="user"
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon
              icon="home"
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="screens/novoTreino"
        options={{
          title: "Treino",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon
              icon="dumbbell"
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
