import { Text, View, StyleSheet  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import MiniProfile from "@/app/components/ui/mini-profile";
import Debt from "@/app/components/ui/debt";


const authors = [
    { id: 1, imgUrl: "https://picsum.photos/id/1027/200/300", username: "Alice" },
    { id: 2, imgUrl: "https://picsum.photos/id/1011/200/300", username: "Bob" },
    { id: 3, imgUrl: "https://picsum.photos/id/1012/200/300", username: "Charlie" },
    { id: 4, imgUrl: "https://picsum.photos/id/1013/200/300", username: "Diana" },
    { id: 5, imgUrl: "https://picsum.photos/id/1027/200/300", username: "Alice" },
    { id: 6, imgUrl: "https://picsum.photos/id/1011/200/300", username: "Bob" },
    { id: 7, imgUrl: "https://picsum.photos/id/1012/200/300", username: "Charlie" },
    { id: 8, imgUrl: "https://picsum.photos/id/1013/200/300", username: "Diana" },
];

export default function Index() {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#252536" }}>
          <View>
            <MiniProfile width={48} height={48} username={"Anderson"} />
              <View>
                  <Text style={{color:"white"}}>Danny ANderson</Text>
                  <Text style={{color:"#BC94E2"}}>+ 500 increase in debt this month</Text>
              </View>
              <Debt debtsAuthors={authors} />
          </View>
      </SafeAreaView>
  );
}
//imgUrl='https://picsum.photos/id/237/200/300'
const styles = StyleSheet.create({

});