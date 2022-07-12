import React from "react";
import {Text, View} from 'react-native';


/**
 * 1.export default导出组件.
 * 2.组件是一种特殊的函数,组件名字的首字母一定是大写的.
 * 3.接收入参.
 * 4.返回JSX,用来描述UI界面的,最终返回的就是视图元素,文字元素.
 */
export default function Product({product = {name: "苹果", price: "1元"}}) {

    return (
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{flex: 1}}>{product.name}</Text>
            <Text style={{width: 50}}>{product.price}</Text>
        </View>
    )
}