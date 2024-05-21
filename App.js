import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Desconto UltraBlaster</Text>

      <TextInput style={styles.input} placeholder='Digite seu e-mail' />

      <TextInput style={styles.input} placeholder='Digite sua senha' />

      <Button title='Verificar' />

      <Text style={styles.status}>...</Text>

      <View style={styles.cupomArea}>
        <Text style={styles.cupomTitle}>Código de Cupom:</Text>
        <Text style={styles.cupomCode}>DS22DRM123</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 30, 
  },
  input: {
    height: 45,
    fontSize: 15,
    color: '#888',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  status: {
    margin: 50,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cupomArea: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
  },
  cupomTitle: {
    fontSize:18,
    textAlign:'center',
    marginBottom:20,
    fontWeight:600,
  },
  cupomCode: {
    textAlign:'center',
    fontSize:30,
  },
})
