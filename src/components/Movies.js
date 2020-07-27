import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchMovies, fetchRec,  deleteMylist, pushRec, deleteRec, pushMylist } from "../actions/movieActions";


class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchRec();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.from === 'myList') {
            this.props.recMovies.unshift(nextProps.item);
            this.props.movies.map((value, index) => {
                if (value.title === nextProps.item.title) {
                    value.title = undefined;
                }
            })
    }
        else if (nextProps.item.from === 'Recommend'){
            this.props.movies.unshift(nextProps.item);
            this.props.recMovies.map((value, index) => {
                if (value.title === nextProps.item.title) {
                    value.title = undefined;
                }
            })
            console.log(nextProps.item)
        }
    }

    movieHandler(e){
        // remove
        const img = e.target.value
        const title = e.target.title
        const id = Math.random()
        const post = {
            title: title,
            img:img,
            id:id,
            from:'myList'
        }
        this.props.deleteMylist(post);

        // push to rec
        this.props.pushRec(post);
    }
    imgHandler(e){
        // remove
        const img = e.target.value
        const title = e.target.title
        const id = Math.random()
        const post = {
            title: title,
            img:img,
            id:id,
            from:'Recommend'
        }
        this.props.deleteRec(post);

        // push to rec
        this.props.pushMylist(post);
    }
    btnHandler(e){
        if(e.target.childNodes[2]){
            e.target.childNodes[2].childNodes[0].classList.add('button-on')
            e.target.childNodes[2].childNodes[0].classList.remove('button-off')
        }
    }
    btnOff(e){
        if(e.target.childNodes[2]){
            e.target.childNodes[2].childNodes[0].classList.remove('button-on')
            e.target.childNodes[2].childNodes[0].classList.add('button-off')
        }
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
                                 if (value.title !== undefined){
                                     return (
                                         <div key={index}
                                              className='Recommendation-div'
                                              onMouseEnter={(e)=>this.btnHandler(e)}
                                              onMouseLeave={e=>this.btnOff(e)}
                                         >
                                             <div className='reco-title'
                                             >{value.title}</div>
                                             <img className='reco-img'
                                                  src={value.img}
                                                  title={value.title}
                                             />
                                             <div className='button-block'>
                                                 <button className='button-off'
                                                         title={value.title}
                                                         value={value.img}
                                                         onClick={(e)=>this.movieHandler(e)}
                                                 >DELETE</button>
                                             </div>
                                         </div>
                                     )
                                 }
                               })}
                    </div>
                </div>
                <div className='recom-block'>
                    <div className='myList-title'>Recommendations</div>
                    <div className='reco-frame'>
                        {Recommendation.map((value, index) => {
                            if (value.title !== undefined) {
                                return (
                                    <div key={index}
                                         onMouseEnter={(e)=>this.btnHandler(e)}
                                         className='Recommendation-div'
                                         onMouseLeave={e=>this.btnOff(e)}
                                    >
                                        <div className='reco-title'
                                        >{value.title}</div>
                                        <img className='reco-img'
                                             src={value.img}
                                        />
                                        <div className='button-block'>
                                            <button className='button-off'
                                                    onClick={(e)=>this.imgHandler(e)}
                                                    value={value.img}
                                                    title={value.title}
                                            >ADD</button>
                                        </div>
                                    </div>
                                )
                            }
                            })}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    movies:state.movies.movies,
    recMovies:state.movies.recMovies,
    item:state.movies.item,

})

export default connect(mapStateToProps, {fetchMovies, fetchRec, deleteMylist, pushRec, deleteRec, pushMylist})(Movies);
