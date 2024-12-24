import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { returnLottieByTitle } from "../constants/exercicios";
import Checkbox from "../components/checkbox";

const DetalhesExerciciosScreen = () => {
  const [numSeries, setNumSeries] = useState(0);
  const [numRepeticoes, setNumRepeticoes] = useState(0);
  const [descanso, setDescanso] = useState(0);
  const [series, setSeries] = useState<
    { id: number; repeticoes: number; descanso: number; finalizado: boolean }[]
  >([]);
  const [exibeConfig, setExibeConfig] = useState(true);

  const [activeTimer, setActiveTimer] = useState<number | null>(null); // Qual cronômetro está ativo
  const [timeRemaining, setTimeRemaining] = useState(0); // Tempo restante do cronômetro

  const router = useRouter();
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  const criaTreino = () => {
    const series = [];
    for (let i = 0; i < numSeries; i++) {
      series.push({
        id: i,
        repeticoes: numRepeticoes,
        descanso,
        finalizado: false,
      });
    }
    setSeries(series);
    setExibeConfig(false);
  };

  const startTimer = (id: number, descanso: number) => {
    setActiveTimer(id); // Define o cronômetro ativo
    setTimeRemaining(descanso); // Define o tempo inicial do cronômetro

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Para o cronômetro quando chega a 0
          setActiveTimer(null); // Reseta o cronômetro ativo
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    navigation.setOptions({
      title: title || "Exercicio",
    });
  }, [title]);

  return (
    <SafeAreaView>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
          alignSelf: "center",
          margin: 10,
        }}
        source={returnLottieByTitle(title)}
      />

      {exibeConfig && (
        <View>
          <TextInput
            placeholder="Digite o número de séries"
            keyboardType="numeric"
            value={numSeries.toString()}
            onChangeText={(text) => setNumSeries(Number(text))}
            style={{ borderWidth: 1, borderColor: "black", margin: 10 }}
          />
          <TextInput
            placeholder="Repetições"
            keyboardType="numeric"
            value={numRepeticoes.toString()}
            onChangeText={(text) => setNumRepeticoes(Number(text))}
            style={{ borderWidth: 1, borderColor: "black", margin: 10 }}
          />
          <TextInput
            placeholder="Tempo de descanso"
            keyboardType="numeric"
            value={descanso.toString()}
            onChangeText={(text) => setDescanso(Number(text))}
            style={{ borderWidth: 1, borderColor: "black", margin: 10 }}
          />
          <Button title="gerar treino" onPress={criaTreino} />
        </View>
      )}

      {!exibeConfig && (
        <View>
          <FlatList
            data={series}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <Text>{item.id + 1}ª série</Text>
                <Text>Repetições: {item.repeticoes}</Text>
                <Checkbox
                  label=""
                  isChecked={item.finalizado}
                  onToggle={() => {
                    setSeries((prevSeries) =>
                      prevSeries.map((serie) =>
                        serie.id === item.id
                          ? { ...serie, finalizado: !serie.finalizado }
                          : serie
                      )
                    );
                    if (!item.finalizado) {
                      startTimer(item.id, item.descanso); // Inicia o cronômetro
                    }
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          {/* Exibe o cronômetro ativo */}
          {activeTimer !== null && (
            <View
              style={{
                margin: 20,
                padding: 10,
                backgroundColor: "#FFC54C",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24 }}>
                Descanso da Série {activeTimer + 1}
              </Text>
              <Text style={{ fontSize: 32 }}>{timeRemaining}s</Text>
            </View>
          )}
        </View>
      )}

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

export default DetalhesExerciciosScreen;
