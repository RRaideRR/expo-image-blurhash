import React, { StyleSheet, useWindowDimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image'

const DATA = [
  {image: require('./assets/e1.webp'), placeholder: "y#IPC@WBa{fQfRayfQ_Nazf6fQfQfQfQIUj[j[j[j[j[fQM{j[j[fQf7fQaytRkCayfQayfQfQt7jtWBj[fQa|fQayayayayj[fQfQ"},
  {image: require('./assets/e2.gif'), placeholder: "y45EBK-AI;AENxj[oK}Y,;I;EhNvoJoJ^4,?NbEhJ8j@sn^3-9NdEhJ8j[s.=a$hNdEhNcoeoL=c$iNbEhNvoLso-8$hNbJ8S3oLoK"},
  {image: require('./assets/e3.gif'), placeholder: "yUIE%_-;ogxuxuM|xu-;IURjt7WVj?j[~qf+WAIUWBoeRj%MoLWBofWBa|j[j[WBj[t7R*s:fkt7t7ayRjofWBoeIUoft7ofofWCWB"},
  {image: require('./assets/e4.gif'), placeholder: "yoE3-jRkoyfkbHj[ofb~WCj[a#a}aza}tTj]ayf7j@fPWCoHj]f6axjsayafR5fPj?ayayj@oJacWBf7j[azfQazoeayj[bHj[aza#"},
  {image: require('./assets/e5.gif'), placeholder: "yPFiDJ01-;kCj?ofs:?b9FRkxuWBofj[-;%MIUxuoLayoLM{WCWBRkxuWBWC%MofoLWBofofRkM{a{WBs:j[t7ayxuofWBayoffRof"},
  {image: require('./assets/e6.gif'), placeholder: "ySK0]8%3DjaLRQofaL9GxtbuoLofV@of0Movx]oyoyofWnIojFs:RkoeWEbF%eRlRja}jGWCof%Ms.M{kBRQoeV[E1nijboMofada#"},
  {image: require('./assets/e7.gif'), placeholder: "yXMQq*xuxuRjoft7Rj0JkBxua#jsWBt74nofj[j[ofRjayIVWCWBofa|ofaybIRjRkofWBj[ofofWBNGjtayayWBofWBWBayWBofay"},
]

function shuffle(arrParam){
  let arr = arrParam.slice(),
    length = arr.length,
    temp,
    i;

  while(length){
    i = Math.floor(Math.random() * length--);

    temp = arr[length];
    arr[length] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

const VERTICAL_LIST_DATA = [
  {id: 1, examples: shuffle(DATA)},
  {id: 2, examples: shuffle(DATA)},
  {id: 3, examples: shuffle(DATA)},
  {id: 4, examples: shuffle(DATA)},
  {id: 5, examples: shuffle(DATA)},
  {id: 6, examples: shuffle(DATA)},
  {id: 7, examples: shuffle(DATA)},
  {id: 8, examples: shuffle(DATA)},
  {id: 9, examples: shuffle(DATA)},
  {id: 10, examples: shuffle(DATA)},
  {id: 11, examples: shuffle(DATA)},
  {id: 12, examples: shuffle(DATA)},
  {id: 13, examples: shuffle(DATA)},
  {id: 14, examples: shuffle(DATA)},
  {id: 15, examples: shuffle(DATA)},
  {id: 16, examples: shuffle(DATA)},
  {id: 17, examples: shuffle(DATA)},
  {id: 18, examples: shuffle(DATA)},
  {id: 19, examples: shuffle(DATA)},
  {id: 20, examples: shuffle(DATA)},
  {id: 21, examples: shuffle(DATA)},
  {id: 22, examples: shuffle(DATA)},
  {id: 23, examples: shuffle(DATA)},
  {id: 24, examples: shuffle(DATA)},
  {id: 25, examples: shuffle(DATA)},
  {id: 26, examples: shuffle(DATA)},
  {id: 27, examples: shuffle(DATA)},
  {id: 28, examples: shuffle(DATA)},
  {id: 29, examples: shuffle(DATA)},
  {id: 30, examples: shuffle(DATA)},
]

export default function App() {
  const {height: screenHeight, width: screenWidth}= useWindowDimensions();

  return (
    <View style={{height: screenHeight, width: screenWidth}}>
      <FlashList
        estimatedItemSize={screenHeight}
        keyExtractor={(item) => item.id}
        data={VERTICAL_LIST_DATA}
        drawDistance={100}
        renderItem={({item}) => {
          return (
            <FlashList
              estimatedItemSize={142}
              data={item.examples}
              horizontal
              drawDistance={30}
              keyExtractor={(i) => i.placeholder}
              renderItem={({item}) => {
              return (
                <Image
                  source={item.image}
                  placeholder={item.placeholder}
                  style={{width: 104, height: 138, margin: 2}}
                  recyclingKey={item.placeholder}
                />
              )}}
            />
          )
      }} />
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
