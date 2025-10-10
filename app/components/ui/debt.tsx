import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MiniProfile from "@/app/components/ui/mini-profile";

type DebtAuthors = {
    id: number,
    imgUrl:string,
    username: string,
}
export default function Debt({ debtsAuthors } : { debtsAuthors: DebtAuthors[] }) {
    return(
        <View>
            <Text>You owe friends</Text>
            <Text>795 <Text>$</Text></Text>{/*$, is default devise*/}
            <View style={styles.oweAuthorsContainer}>
                {debtsAuthors.map((debtsAuthor,index ) => {
                    if(index > 4)
                        return;

                    if(index === 4) {
                        return(
                            <MiniProfile
                                key={debtsAuthor.id}
                                width={38}
                                height={38}
                                username={`+${debtsAuthors.length-5}`}
                                style={{ marginLeft:index > 0 ? -10 : 0 }} /> );
                    }

                   return(
                       <MiniProfile
                        key={debtsAuthor.id}
                        width={38}
                        height={38}
                        imgUrl={debtsAuthor.imgUrl}
                        username={debtsAuthor.username}
                        style={{ marginLeft:index > 0 ? -10 : 0 }} /> );
            })}
            </View>
        </View>
    );
}

//title:string, amount:number, currency:string, debts:[]
const styles = StyleSheet.create({
    oweAuthorsContainer: {
        flexDirection: "row",
        backgroundColor: "transparent",
    }
});