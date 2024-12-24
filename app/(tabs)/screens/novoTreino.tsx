import {grupoMuscularList} from "@/app/constants/exercicios";
import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface IGrupoMuscularList {
  id: string;
  type: string;
  color: string;
  icon: any;
  route: string;
}

const DATA: IGrupoMuscularList[] = grupoMuscularList;

const renderItem = ({ item }: { item: IGrupoMuscularList }) => (
  <TouchableOpacity
    style={{
      margin: 10,
      backgroundColor: "#FFC54C",
      width: width * 0.4,
      height: height * 0.27,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    }}
    onPress={() => {
      router.push({
        pathname: item.route,
        params: {
          title: item.type,
        },
      });
    }}
  >
    <Image source={item.icon} style={{ width: 150, height: 150 }} />
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        padding: 3,
      }}
    >
      {item.type}
    </Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
