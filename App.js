import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import car1 from "./image/car1.jpg"
import car2 from "./image/car2.jpg"
import car3 from "./image/car3.jpg"
import car4 from "./image/car4.jpg"
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Car's Showroom</Text>
    <SafeAreaView style={styles.cards}>
      <View style={styles.cardsText}>
        <Text style={{fontSize: "20px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Ferrari
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Model: FEx081
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px",  textAlign: "center"}}>
         Type: Sport
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px",  textAlign: "center"}}>
        Speed: 200Km/h
        </Text>
      </View>
      <View style={styles.cardsImage}>
        <Image source={car1} style={{width: "100%", height: "100%"}} />
      </View>
    </SafeAreaView>

    <SafeAreaView style={styles.cards}>
      <View style={styles.cardsText}>
        <Text style={{fontSize: "20px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
          Mustang
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Model: FEx081
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Type: Sport
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
        Speed: 200Km/h
        </Text>
      </View>
      <View style={styles.cardsImage}>
        <Image source={car2} style={{width: "100%", height: "100%"}} />
      </View>
    </SafeAreaView>

    
    <SafeAreaView style={styles.cards}>
      <View style={styles.cardsText}>
        <Text style={{fontSize: "20px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
          Meserati
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Model: mc20
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Type: Sport
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
        Speed: 400Km/h
        </Text>
      </View>
      <View style={styles.cardsImage}>
        <Image source={car3} style={{width: "100%", height: "100%"}} />
      </View>
    </SafeAreaView>

    <SafeAreaView style={styles.cards}>
      <View style={styles.cardsText}>
        <Text style={{fontSize: "20px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
          Audi
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Model: AudiQ300
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
         Type: Sport
        </Text>
        <Text style={{fontSize: "15px", fontWeight: "600", marginBottom: "8px", textAlign: "center"}}>
        Speed: 300Km/h
        </Text>
      </View>
      <View style={styles.cardsImage}>
        <Image source={car4} style={{width: "100%", height: "100%"}} />
      </View>
    </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  headText: {
    color: "white",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    width: "340px",
    height: "150px",
    marginBottom: "30px",
    
  },
  cardsText: {
    width: "130px",
    height: "100%",
    backgroundColor: "whitesmoke",
    paddingTop: "20px",
    paddingLeft: "5px",
    borderRadius: "8px",

  },
  cardsImage:{
    width: "210px",
    height: "100%",

  }

});
