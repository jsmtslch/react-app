import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {"id":1,"name":"Foo"},{"id":2,"name":"Bar"},{"id":3,"name":"Woo"}
                ],
            header:"State Header",
            headerPropSample:"Header Props Sample",
            tempEmptyArr:[],
            testNumber:1
        }
        this.setStateMethod = this.setStateMethod.bind(this);

        this.forceUpdaterButton = this.forceUpdaterButton.bind(this);

        this.findAndColorNode = this.findAndColorNode.bind(this);

        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber(){
        this.setState({testNumber: this.state.testNumber++});
    }

    setStateMethod(){
        var tempEmptyArr = [];
        tempEmptyArr.push('Hello');
        this.setState({tempEmptyArr: tempEmptyArr});
    }

    forceUpdaterButton(){
        this.forceUpdate();
    }

    findAndColorNode(){
        var colorchanging = document.getElementById("colorchanging");
        ReactDOM.findDOMNode(colorchanging).style.color = 'green';
    }

    render(){
        var styleIcon={
            fontSize:100,
            color: '#FF0000'
        }
        return(
            <div>
                <p>Sample code will show the data from the state:{this.state.header}</p>
            <Header />
            <HeaderProps headerProps={this.state.headerPropSample} />
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                </tbody>
            </table>
            <button onClick={this.setStateMethod}>Set State</button>
            <p>{this.state.tempEmptyArr}</p>
            <div>
                <span>This button Force Updates</span><button onClick={this.forceUpdaterButton}>Force Update</button>
                <span>This will Force Change the value here:</span><span>{Math.random()}</span>
            </div>
            <div>
                <h2>findNodeDOM Example</h2>
                <button onClick={this.findAndColorNode}>Find Node DOM</button>
                <p id="colorchanging">Change this color</p>
            </div>
                <div>
                    <p>This will show the event called in the console. Please open console</p>
                    <button onClick={this.setNewNumber}>Incremental Click</button>
                    <Content testNumber={this.state.testNumber}></Content>
                </div>
            </div>
        );
    }
}
//THis component is state less
class Header extends React.Component{
    render(){
        return(
        <div>Header of the page</div>
        )
    }
}

class Content extends React.Component{
    componentWillMount(){
        console.log('Component will Mount');
    }componentDidMount(){
        console.log('Component mounted');
    }componentWillReceiveProps(){
        console.log('Component received props');
    }shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }

     render(){
         return(
             <div>{this.props.testNumber}</div>
         )
     }
}

//This component is stateful//Goal is to have simple states and less stateful components
class TableRow  extends React.Component{
    render(){
        return(
                <tr>
                    <td>{this.props.data.id}</td><td>{this.props.data.name}</td>
                </tr>
        )
    }
}

class HeaderProps extends React.Component{
    render(){
        return(
            <div><div>This is Header using the </div><b>props:</b><div>{this.props.headerProps}</div></div>
        )
    }
}

export default App;