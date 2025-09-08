import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from 'react-native';

// Lista de Produtos com URLs de Imagens
const produtos = [
  {
    id: 1,
    nome: 'Hamburguer Clássico',
    descricao: 'Hamburguer com carne suculenta, queijo e molho especial.',
    preco: 'R$ 18,90',
    imagem: 'https://example.com/hamburguer.jpg'  // Substitua pela URL correta
  },
  {
    id: 2,
    nome: 'Pizza de Calabresa',
    descricao: 'Pizza com calabresa, cebola e azeitonas.',
    preco: 'R$ 29,90',
    imagem: 'https://example.com/pizza.jpg'  // Substitua pela URL correta
  },
  {
    id: 3,
    nome: 'Batata Frita',
    descricao: 'Batatas crocantes e douradas.',
    preco: 'R$ 12,90',
    imagem: 'https://example.com/batata.jpg'  // Substitua pela URL correta
  },
  {
    id: 4,
    nome: 'Refrigerante',
    descricao: 'Refrigerante gelado de sua escolha.',
    preco: 'R$ 7,50',
    imagem: 'https://example.com/refrigerante.jpg'  // Substitua pela URL correta
  },
  {
    id: 5,
    nome: 'Cheeseburger',
    descricao: 'Hamburguer com carne, queijo cheddar e molho especial.',
    preco: 'R$ 21,90',
    imagem: 'https://example.com/cheeseburger.jpg'  // Substitua pela URL correta
  },
  {
    id: 6,
    nome: 'Sundae de Chocolate',
    descricao: 'Sobremesa gelada com chocolate e cobertura de calda.',
    preco: 'R$ 8,90',
    imagem: 'https://example.com/sundae.jpg'  // Substitua pela URL correta
  },
];

// Função principal do App
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cardápio da Lanchonete</Text>
      <ScrollView style={styles.scrollContainer}>
        {/* Mapeando e exibindo os produtos */}
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.produtoContainer}>
            <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
            <View style={styles.textContainer}>
              <Text style={styles.produtoNome}>{produto.nome}</Text>
              <Text style={styles.produtoDescricao}>{produto.descricao}</Text>
              <Text style={styles.produtoPreco}>{produto.preco}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollContainer: {
    marginHorizontal: 10,
  },
  produtoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  produtoDescricao: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  produtoPreco: {
    fontSize: 16,
    color: '#2E8B57',
    fontWeight: 'bold',
  },
});

export default App;
