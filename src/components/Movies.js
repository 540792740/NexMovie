import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchMovies, fetchRec } from "../actions/movieActions";


class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies();
        this.props.fetchRec();
        // this.state = {
        //     title: '',
        //     img: ''
        // };
    }

    movieHandler(e){
        // remove
        const img = e.target.src
        const title = e.target.title
        const id = Math.random()
        const post = {
            title: title,
            img:img,
            id:id
        }
        this.props.deleteMylist(post);

        // push to rec
        this.props.pushRec(post);
    }
    imgHandler(){
        // remove
        const img = e.target.src
        const title = e.target.title
        const id = Math.random()
        const post = {
            title: title,
            img:img,
            id:id
        }
        this.props.deleteRec(post);

        // push to rec
        this.props.pushMylist(post);

    }

    render() {
        const myData = this.props.movies;
        const Recommendation = this.props.recMovies;
        return (
            <div className='container'>
                <div className='recom-block'>
                    <div className='myList-title'>myList</div>
                    <div className='reco-frame'>
                             {myData.map((value, index) => {
                                   return (
                                       <div key={index} className='Recommendation-div'>
                                           <div className='reco-title'
                                                onClick={(e)=>this.movieHandler(e)}
                                           >{value.title}</div>
                                           <img className='reco-img'
                                                src={value.img}
                                                onClick={(e)=>this.movieHandler(e)}
                                                title={value.title}
                                           />
                                       </div>
                                   )
                               })}
                    </div>
                </div>
                <div className='recom-block'>
                    <div className='myList-title'>Recommendations</div>
                    <div className='reco-frame'>
                        {Recommendation.map((value, index) => {
                               return (
                                   <div key={index} className='Recommendation-div'>
                                       <div className='reco-title'
                                            onClick={(e)=>this.imgHandler(e)}
                                       >{value.title}</div>
                                       <img className='reco-img'
                                            src={value.img}
                                            onClick={(e)=>this.imgHandler(e)}
                                       />
                                   </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    movies:state.movies.movies,
    recMovies:state.movies.recMovies
})

export default connect(mapStateToProps, {fetchMovies, fetchRec, deleteMylist, pushRec, deleteRec, pushMylist})(Movies);
