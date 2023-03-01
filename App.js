import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [lotto, setLotto] = useState([]);

  function loadingLotto() {

    let lotto_num_list = [];
    let random_num = 0;

    for (let i = 0; i < 6; i++) {
      random_num = Math.floor(Math.random() * 45 + 1);
      if (lotto_num_list.includes(random_num) == false) {
        lotto_num_list.push(random_num);

      }
      else {
        //for문 반복 중에 중복 되는 숫자가 list 안에 있으면 계속 i 카운트를 다운시켜 
        //중복 안 되는 숫자가 나와서 i가 5가 될때까지 for문이 열일하게 만든다
        i -= 1
      }

    }
    // 6개 뽑아낸 로또 숫자 정렬
    lotto_num_list.sort((a, b) => a - b)

    setLotto(lotto_num_list);

  }
  useEffect(() => {
    loadingLotto();

  }, []);


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>Centumjoonho</Text>
      <Button title='로또번호 생성' onPress={() => { loadLotto() }}></Button>
      <Text style={{ fontSize: 25, marginTop: 30 }}>{lotto.join(", ")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
