import React, {Component} from "react";
import {Text, View} from 'react-native';
import RefTest from "./RefTest";

/**
 * 通过在组建中加入ref="某个字符串",就可以定义一个组件的引用,类似于在Android布局中id
 */
export class RefTestParent extends Component {

    constructor(props) {
        super(props);
        // 创建一个ref
        this.mRefTest = React.createRef();
        this.state = {
            size: 0,
        }
    }

    render(): React.ReactNode {
        return <View>
            <Text style={{frontSize: 100}} onPress={() => {
                // var size = this.refs.refTest.getSize();
                var size = this.mRefTest.getSize();
                this.setState({size: size});
            }}>
                {this.state.size}
            </Text>
            {/*引用的第一种方式*/}
            {/*<RefTest ref="refTest"></RefTest>*/}
            {/*引用的第二种方式 类似于回调*/}
            <RefTest ref={refTest => this.mRefTest = refTest}/>

        </View>
    }


}