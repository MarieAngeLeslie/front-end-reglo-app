import React from 'react';
import { View } from 'react-native';


const Gap = ({ size }:{size:number}) => {
    return <View style={{ height: size }} />;
};

export default Gap;