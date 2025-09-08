import React, {useState} from "react";
import { StyleSheet,Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function App() {
    const [km, setkm] = useState('');
    const [metros, setMetros] = useState(null);

    const handleConvert = () => {
        if (km === '') {
            Alert.alert('Erro','Por favor, digite um valor em quilômetros.'); 
            return;
        }

        const valorEmKm = parseFloat(km);
        if (isNaN(valorEmKm)) {
            Alert.alert('Erro','Por favor, digite um número válido.');
            return;
        }

        const resultadoEmMetros = valorEmKm * 1000;
        setMetros(resultadoEmMetros);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Unidades</Text>
            <Text style={styles.subtitle}>Quilômetros para Metros</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor em km"
                    keyboardType="numeric"
                    value={km}
                    onChangeText={text => setkm(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
            
            {metros !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>
                        {km} km equivalem a: 
                    </Text>
                    <Text style={styles.resultValue}>
                        {metros} metros
                    </Text>
                </View>
            )}
        </View>

        
    )
}