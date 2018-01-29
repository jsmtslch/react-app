import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {"id":1,"name":"Foo"},{"id":2,"name":"Bar"},{"id":3,"name":"Woo"}
            ],
            header:"State Header",
            headerPropSample:"Header Props Sample",
            tempEmptyArr:[]
        }
        this.setStateMethod = this.setStateMethod.bind(this);
    }

    setStateMethod(){
        var tempEmptyArr = [];
        tempEmptyArr.push('Hello');
        this.setState({tempEmptyArr: tempEmptyArr});
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