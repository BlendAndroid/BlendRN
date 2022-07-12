import React from 'react';
import {Text, View} from 'react-native';
import Category from './Category';
import Product from './Product';

//入参就是products
export default function ProductTable({products}) {
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (product.category !== lastCategory) {
            //显示种类
            rows.push(
                <Category category={product.category} key={product.category}/>,
            );
        }
        //显示水果
        rows.push(<Product product={product} key={product.name}/>);
        lastCategory = product.category;
    });

    return (
        <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex: 1, fontWeight: 'bold'}}>名称</Text>
                <Text style={{width: 50, fontWeight: 'bold'}}>价格</Text>
            </View>
            <View>{rows}</View>
        </View>
    );
}