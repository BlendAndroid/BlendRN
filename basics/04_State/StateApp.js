import React from 'react';
import {SafeAreaView} from 'react-native';
import ProductTable from "./ProductTable";

export default function StateApp() {
    return (
        <SafeAreaView style={{marginHorizontal: 30}}>
            <ProductTable/>
        </SafeAreaView>
    );
}
