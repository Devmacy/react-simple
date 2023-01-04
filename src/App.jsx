import './App.css'
import {Button} from "antd";
import {PureComponent} from "react";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                number: 0
            }
        }
    }

    render() {
        const {data} = this.state

        return (
            <div className="App">
                <div>数字 {data.number}</div>
                <Button type={"primary"} onClick={() => {
                    const {data} = this.state
                    ++data.number
                    this.setState({data: {...data}})
                }}>点击加1</Button>
            </div>
        )
    }
}

export default App
