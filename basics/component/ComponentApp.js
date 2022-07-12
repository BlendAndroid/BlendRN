import React from 'react';
import {SafeAreaView} from 'react-native';
import ProductTable from './ProductTable';

const PRODUCTS = [
    {category: '水果', price: '￥1', name: 'PingGuo'},
    {category: '水果', price: '￥1', name: 'HuoLongGuo'},
    {category: '水果', price: '￥2', name: 'BaiXiangGuo'},
    {category: '蔬菜', price: '￥2', name: 'BoCai'},
    {category: '蔬菜', price: '￥4', name: 'NanGua'},
    {category: '蔬菜', price: '￥1', name: 'WanDou'},
];

/*
 *  用于表示商品信息的数据变量 PRODUCTS，在被调用时会通过 ProductTable 组件的 products 属性传递下去；
 */
export default function ComponentApp() {
    return (
        <SafeAreaView style={{marginHorizontal: 30}}>
            <ProductTable products={PRODUCTS}/>
        </SafeAreaView>
    );
}
