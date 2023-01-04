import {Component, memo} from "react";
import {Button} from "antd";

const Child = ({number}) => {
    return (
        <div>
            {console.log('Child组件渲染了')}
            传递的数字{number},
            <br></br>
            memoTest,查看控制台看效果
        </div>
    )
}

const HOCChild = memo(Child, ((pre, next) => {
    return next.number > 10;
}))

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            number: 0
        }
    }

    render() {
        const {flag, number} = this.state

        return (
            <div className="App">
                <HOCChild number={number}/>
                <Button type={"primary"} onClick={() => {
                    this.setState({flag: !flag})
                }}>状态切换{JSON.stringify(flag)}</Button>

                <Button type={"primary"} onClick={() => {
                    this.setState({number: number + 1})
                }}>数字加一 {number}</Button>
            </div>
        )
    }
}

export default Index
