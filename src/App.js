import './App.css';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Movies from "./components/Movies";
import Header from './components/Header'
import Content from "./components/Content";

class App extends Component {
    componentDidMount() {
        console.log()
    }
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <Header/>
                    <Content/>
                    <Movies/>
                </div>
            </Provider>
        );
    }
}

export default App;
