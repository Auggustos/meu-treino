import {
  View,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { router, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import {
  biceps,
  costas,
  ombros,
  peito,
  pernas,
  triceps,
} from "../constants/exercicios";

interface IExercicio {
    id: string;
    type: string;
    gif: any;
}

const renderItem = ({ item }:{item: IExercicio}) => (
  <TouchableOpacity
    onPress={() => {
          router.push({
            pathname: "../../screens/detalhesExercicios",
            params: {
              title: item.type,
              gif: item.gif,
            },
          });
        }}
    style={{
      backgroundColor: item.color,
      marginVertical: 10,
      borderRadius: 10,
      flexDirection: "row",
    }}
  >
    <Text style={{ fontSize: 20 }}>{item.type}</Text>
  </TouchableOpacity>
);

const escolherExercicios = (title: string) => {
  switch (title) {
    case "Peito":
      return peito;
      break;
    case "Triceps":
      return triceps;
      break;
    case "Costas":
      return costas;
      break;
    case "Biceps":
      return biceps;
      break;
    case "Perna":
      return pernas;
      break;
    case "Ombro":
      return ombros;
      break;
    default:
      return [];
  }
};

const ExerciciosScreen = () => {
  const [exercicios, setExercicios] = useState<{ id: string; type: string }[]>(
    []
  );
  const router = useRouter();
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    navigation.setOptions({
      title: `Exercícios de ${title}` || "Exercicios",
    });
    setExercicios(escolherExercicios(title));
  }, [title]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 10}}>
      <FlatList
        data={exercicios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
            // justifyContent: "flex-start",
            // alignItems: "flex-start",
        }}
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          backgroundColor: "#FFC54C",
          marginVertical: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "30%",
          height: width * 0.15,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExerciciosScreen;
