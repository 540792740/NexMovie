import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchMovies } from "../actions/movieActions";
import myData from '../asserts/myDate.json'

class Movies extends Component {
    componentDidMount() {
        // fetch(myData)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        const myList = myData.mylist
    }

    render() {
        const myList = myData.mylist
        return (
            <div className='container'>
                <div>
                    <div>myList</div>
                    {/*{myList.map() => {*/}
                    {/*    return (*/}
                    {/*        <div>*/}
                    {/*            value*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}}*/}
                </div>
                <div>
                    <div>Recommendations</div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {fetchMovies})(Movies);
