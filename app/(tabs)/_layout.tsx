import {Tabs} from 'expo-router';
import {WalletIcon, DebtsIcon, ProfileIcon, TransactionsIcon, MainButtonIcon} from "@/assets/icons/svg-icons";
import {Dimensions, StyleSheet, View} from "react-native";
import React from "react";

export default function TabLayout() {
    return (
        <>
            <View style={styles.mainButton}>
                <MainButtonIcon/>
            </View>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#ffd33d',
                    tabBarStyle: {
                        zIndex: 1
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Balance",
                        headerShown: false,
                        tabBarIcon: ({}) => (
                            <WalletIcon/>
                        ),
                    }}

                />
                <Tabs.Screen
                    name="debts"
                    options={{
                        title: "Debts",
                        headerShown: false,
                        tabBarIcon: ({}) => (
                            <DebtsIcon/>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="spacer"
                    options={{
                        tabBarIcon: () => null,
                        title: '',
                    }}
                    listeners={{
                        tabPress: (e) => e.preventDefault(),
                    }}
                />

                <Tabs.Screen
                    name="transactions"
                    options={{
                        title: "Transactions",
                        headerShown: false,
                        tabBarIcon: ({}) => (
                            <TransactionsIcon/>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({}) => (
                            <ProfileIcon/>
                        ),
                    }}
                />

            </Tabs>
        </>
    );
}


const styles = StyleSheet.create({
    mainButton : {
        position: "absolute",
        bottom: 62,
        left: Dimensions.get('window').width / 2.5,
        zIndex:999
    }
});