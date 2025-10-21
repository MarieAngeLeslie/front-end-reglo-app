import React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import MiniProfile from "@/app/components/ui/mini-profile";
import Debt from "@/app/components/ui/debt";
import Gap from "@/app/components/ui/gap";
import {MainButtonIcon} from "@/assets/icons/svg-icons";

const authors = [
    {id: 1, imgUrl: "https://picsum.photos/id/1027/200/300", username: "Alice"},
    {id: 2, imgUrl: "https://picsum.photos/id/1011/200/300", username: "Bob"},
    {id: 3, imgUrl: "https://picsum.photos/id/1012/200/300", username: "Charlie"},
    {id: 4, imgUrl: "https://picsum.photos/id/1013/200/300", username: "Diana"},
    {id: 5, imgUrl: "https://picsum.photos/id/1027/200/300", username: "Alice"},
    {id: 6, imgUrl: "https://picsum.photos/id/1011/200/300", username: "Bob"},
    {id: 7, imgUrl: "https://picsum.photos/id/1012/200/300", username: "Charlie"},
    {id: 8, imgUrl: "https://picsum.photos/id/1013/200/300", username: "Diana"},
];

const authors2 = [
    {id: 1, imgUrl: "https://picsum.photos/id/1028/200/300", username: "Alice"},
    {id: 2, imgUrl: "https://picsum.photos/id/1035/200/300", username: "Bob"},
    {id: 3, imgUrl: "https://picsum.photos/id/1076/200/300", username: "Charlie"},
    {id: 4, imgUrl: "https://picsum.photos/id/1000/200/300", username: "Diana"},
    {id: 5, imgUrl: "https://picsum.photos/id/1057/200/300", username: "Alice"},
    {id: 6, imgUrl: "https://picsum.photos/id/1056/200/300", username: "Bob"},
    {id: 7, imgUrl: "https://picsum.photos/id/1098/200/300", username: "Charlie"},
    {id: 8, imgUrl: "https://picsum.photos/id/1099/200/300", username: "Diana"},
];

export default function Index() {
    return (
        <SafeAreaView style={styles.mainPage}>
            <View style={styles.homePageMiniProfile}>
                <MiniProfile width={48} height={48} username={"Anderson"}
                             imgUrl={"https://picsum.photos/id/1011/200/300"}/>
                <View>
                    <Text style={styles.username}>Danny Anderson</Text>
                    <Text style={{color: "#BC94E2"}}>+500$ increase in debt this month</Text>
                </View>
            </View>
            <Gap size={34}/>
            <Debt debtsAuthors={authors} colorTotalDebtAmount={"#BC94E2"}/>
            <Gap size={50}/>
            <Debt debtsAuthors={authors2} colorTotalDebtAmount={"#6DDEBE"}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: "#252536",
        paddingTop: 20,
        paddingLeft: 14,
        position: 'relative',
    },
    homePageMiniProfile: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 18
    },
    username: {
        color: "#FFFFFF",
        fontWeight: 600,
        fontSize: 20,
    },
    mainButton : {
        position: "absolute",
        bottom: -36,
        left: Dimensions.get('window').width / 2.5,
        zIndex:999
    }
});