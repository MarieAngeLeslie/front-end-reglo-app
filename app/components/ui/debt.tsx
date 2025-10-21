import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MiniProfile from "@/app/components/ui/mini-profile";
import Gap from "@/app/components/ui/gap";

type DebtAuthors = {
    id: number,
    imgUrl:string,
    username: string,
}
export default function Debt({ debtsAuthors, colorTotalDebtAmount } : { debtsAuthors: DebtAuthors[], colorTotalDebtAmount:string }) {
    return(
        <View>
            <Text style={styles.debtTitle}>You owe friends</Text>
            <Gap size={2}/>
            <Text style={[styles.debtTotalAmount, {color:colorTotalDebtAmount}]}>795 <Text>$</Text></Text>{/*$, is default devise*/}
            <Gap size={19}/>
            <View style={styles.oweAuthorsContainer}>
                {debtsAuthors.map((debtsAuthor,index ) => {
                    if(index > 5)
                        return;
                    if(index === 5) {
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
                        style={{ marginLeft:index > 0 ? -15 : 0 }} /> );
            })}
            </View>
        </View>
    );
}

//title:string, amount:number, currency:string, debts:[], colors de debt amount
const styles = StyleSheet.create({
    oweAuthorsContainer: {
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    debtTitle: {
        fontSize: 24,
        color:"#FFFFFF"
    },
    debtTotalAmount:{
        fontSize: 60,
        fontWeight: "bold",
    }
});