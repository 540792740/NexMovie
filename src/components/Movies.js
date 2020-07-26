import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchMovies } from "../actions/movieActions";
import myData from '../asserts/Recommendations.json'

class Movies extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <div>myList</div>
                    {myData.map((value, index) => {
                        return (
                            <ul>
                                <li>{value.title}</li>
                            </ul>
                        )
                    })}
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
