import { gifsExercicios, iconesGrupoMuscular, lottiesExercicios } from "@/assets";
import { ImageSourcePropType } from "react-native";
import { Image } from "react-native-reanimated/lib/typescript/Animated";

const grupoMuscularList = [
  {
    id: "1",
    type: "Peito",
    color: "red",
    icon: iconesGrupoMuscular.peito,
    route: "../../screens/exercicios",
  },
  {
    id: "2",
    type: "Triceps",
    color: "blue",
    icon: iconesGrupoMuscular.triceps,
    route: "../../screens/exercicios",
  },
  {
    id: "3",
    type: "Costas",
    color: "green",
    icon: iconesGrupoMuscular.costas,
    route: "../../screens/exercicios",
  },
  {
    id: "4",
    type: "Biceps",
    color: "brown",
    icon: iconesGrupoMuscular.biceps,
    route: "../../screens/exercicios",
  },
  {
    id: "5",
    type: "Perna",
    color: "yellow",
    icon: iconesGrupoMuscular.pernas,
    route: "../../screens/exercicios",
  },
  {
    id: "6",
    type: "Ombro",
    color: "purple",
    icon: iconesGrupoMuscular.ombros,
    route: "../../screens/exercicios",
  },
];

const peito = [
  {
    id: "1",
    type: "Supino reto",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Supino inclinado",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Supino declinado",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Crucifixo",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Peck deck",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Flexão",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "7",
    type: "Pullover",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Crossover",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const triceps = [
  {
    id: "1",
    type: "Testa",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Frances",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Pulley corda",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Pulley barra",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Banco",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Coice",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "7",
    type: "supino fechado",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Triceps corda",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const costas = [
  {
    id: "1",
    type: "Puxada frontal",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Puxada atras",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Remada baixa",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Remada alta",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Puxada unilateral",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Pullover",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "7",
    type: "Remada cavalinho",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Pull down",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const biceps = [
  {
    id: "1",
    type: "Rosca direta",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Rosca martelo",
    gif: lottiesExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Rosca inversa",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Rosca scott",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Rosca 21",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Rosca concentrada",
    gif: require('../../assets/lotties/rosca-concentrada.json'),
  },
  {
    id: "7",
    type: "Rosca punho",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Rosca cross",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const pernas = [
  {
    id: "1",
    type: "Agachamento",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Leg press",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Cadeira extensora",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Cadeira flexora",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Adutor",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Abdutor",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "7",
    type: "Panturrilha",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Stiff",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const ombros = [
  {
    id: "1",
    type: "Desenvolvimento",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "2",
    type: "Elevação lateral",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "3",
    type: "Elevação frontal",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "4",
    type: "Elevação posterior",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "5",
    type: "Desenvolvimento arnold",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "6",
    type: "Crucifixo invertido",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "7",
    type: "Encolhimento",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
  {
    id: "8",
    type: "Remada alta",
    gif: gifsExercicios.biceps.roscaMartelo,
  },
];

const returnLottieByTitle = (title: string) => {
    switch (title) {
        case "Rosca concentrada":
            return lottiesExercicios.biceps.roscaConcentrada;
            break;
        case "Rosca martelo":
            return lottiesExercicios.biceps.roscaMartelo;
            break;
        default:
            return lottiesExercicios.biceps.roscaMartelo;
            break;
    }
}

export { peito, triceps, costas, biceps, pernas, ombros, grupoMuscularList, returnLottieByTitle };
