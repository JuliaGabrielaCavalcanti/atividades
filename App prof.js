import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'; // Importa Image

import lanchoneteimg from './assets/favicon.png';

// Componente principal do aplicativo
export default function App() {
return (
// SafeAreaView para garantir que o conteúdo não se sobreponha à barra de status ou entalhes
<SafeAreaView style={styles.container}>
{/* Adiciona um espaço para a barra de status em dispositivos Android */}
<StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />

{/* Seção do menu superior */}
<View style={styles.header}>
<Text style={styles.headerText}>Menu do Aplicativo</Text>
</View>

{/* Corpo principal do aplicativo */}
<View style={styles.body}>
<Text style={styles.bodyText}>Bem-vindo ao corpo do seu aplicativo!</Text>
<Text style={styles.bodyText}>Aqui você pode adicionar o conteúdo principal.</Text>
<Text style={styles.bodyText}>Este é um exemplo de layout básico.</Text>
{/* Adiciona uma imagem no meio da tela */}
<Image
source={lanchoneteimg} // Caminho relativo para a imagem
style={styles.image} // Estilo para a imagem
/>
<Text style={styles.bodyText}>Esta é uma imagem de exemplo.</Text>
</View>
</SafeAreaView>
);
}

// Estilos para os componentes
const styles = StyleSheet.create({
container: {
flex: 1, // Ocupa todo o espaço disponível
backgroundColor: '#f8f8f8', // Cor de fundo suave
},
header: {
height: 60, // Altura fixa do cabeçalho
backgroundColor: '#6200ee', // Cor primária para o cabeçalho
justifyContent: 'center', // Centraliza o texto verticalmente
alignItems: 'center', // Centraliza o texto horizontalmente
borderBottomWidth: 1, // Borda inferior para separação
borderBottomColor: '#ccc', // Cor da borda
elevation: 4, // Sombra para Android
shadowColor: '#000', // Sombra para iOS
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
},
headerText: {
color: '#ffffff', // Cor do texto do cabeçalho
fontSize: 20, // Tamanho da fonte do cabeçalho
fontWeight: 'bold', // Negrito
},
body: {
flex: 1, // Ocupa o restante do espaço após o cabeçalho
justifyContent: 'center', // Centraliza o conteúdo verticalmente
alignItems: 'center', // Centraliza o conteúdo horizontalmente
padding: 20, // Preenchimento interno
},
bodyText: {
fontSize: 18, // Tamanho da fonte do texto do corpo
textAlign: 'center', // Alinhamento do texto
marginBottom: 10, // Margem inferior entre os textos
color: '#333', // Cor do texto
},
image: {
width: 300, // Largura da imagem
height: 300, // Altura da imagem
borderRadius: 10, // Bordas arredondadas
marginTop: 20, // Margem superior
marginBottom: 20, // Margem inferior
},
});