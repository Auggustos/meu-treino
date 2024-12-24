import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import theme from "../theme";
import { router, useRouter } from "expo-router";

library.add(fas);

interface HomeParams {
  id: string;
  title: string;
  route: string;
  icon: IconProp;
  iconColor?: string;
  buttonColor?: string;
}

const DATA: HomeParams[] = [
  {
    id: "1",
    title: "Novo treino",
    route: "screens/novoTreino",
    icon: "dumbbell",
    iconColor: "#033427",
    buttonColor: "#3EFEC9",
  },
  {
    id: "2",
    title: "Meus dados",
    route: "screens/meusDados",
    icon: "clipboard",
    iconColor: "#27017D",
    buttonColor: "#D9D4FF",
  },
];

const renderItem = ({ item }: { item: HomeParams }) => (
  <TouchableOpacity
    onPress={() => router.push(item.route)}
    style={{
      flex: 1,
      padding: 10,
      backgroundColor: item.buttonColor,
      margin: 5,
      borderRadius: 10,
      height: 50,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    }}
  >
    <FontAwesomeIcon
      icon={item.icon}
      color={item.iconColor}
      size={32}
      style={{ flex: 1 }}
    />
    <Text
      style={{
        color: "#1C1C1E",
        fontSize: 16,
        fontFamily: theme.fonts.bold,
        flex: 2,
        textAlign: "center",
      }}
    >
      {item.title}
    </Text>
  </TouchableOpacity>
);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
      }}
    >
      <Text style={{ fontSize: 20, padding: 5 }}>
      App Meu Treino
      </Text>
      <Text style={{ fontSize: 16, padding: 5 }}>
        Escolha uma opção abaixo:
      </Text>
      <FlatList
        style={{ width: "90%" }}
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
