import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button,KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9fb2f0ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "black"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  }
});

export default function Index() {
  const [investimentoMensal, setInvestimentoMensal] = useState("");
  const [numMes, setNumMes] = useState("");
  const [jurosMes, setJurosMes] = useState("");
  const [montanteS, setMontanteS] = useState<string | null>(null);

  function calcular() {
     const mensal = parseFloat(investimentoMensal);
    const t = parseFloat(numMes);
    const i = parseFloat(jurosMes);

    let montanteR = 0;
    for (let j = 1; j <= t; j++) {
      montanteR += montanteR * i + mensal;
    }

    setMontanteS(`Montante acumulado: R$ ${montanteR.toFixed(2)}`);
  }
   

 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Calcular Investimento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do investimento mensal"
        value={investimentoMensal}
        onChangeText={setInvestimentoMensal}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantos meses deseja investir?"
        value={numMes}
        onChangeText={setNumMes}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a taxa de juros "
        value={jurosMes}
        onChangeText={setJurosMes}
      />

      <Button title="Calcular" onPress={calcular} />
      {montanteS && (
        <Text style={styles.text}>{montanteS}</Text>
      )}
    </KeyboardAvoidingView>
  );
}