import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/SingleBeer.css';
import IMG_2908 from '../images/IMG_2908.jpg'

import axios from 'axios';;


class SingleBeer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        beer:[]
    }
    this.getSingleBeer=this.getSingleBeer.bind(this);
	}
    componentDidMount() {
        this.getSingleBeer();
    }
    getSingleBeer(){
        axios({
            method: "GET",
            url: `http://localhost:3000/beer/${this.props.match.params.id}/?withBreweries=Y&key=659d5c6b8f3d2447f090119e48202fdb`
        })
        .then(res => {
            this.setState({
                beer: res.data.data
            })
            console.log(this.state.beer);
        })
        .catch((err)=> {
            console.log( "Error")
        })
    }
    render () { 
        let beer=this.state.beer    
        if(beer) {
        return (
            <div className="beerDetailsWrapper">
                <div className="beerDetailsContainer">
                    <h1>{beer.name}</h1>  
                    {beer.style ? (
                        <div>
                            <p><b>Style: </b>{beer.style.name}</p>
                            <p><b>Brewed by:</b>&nbsp;
                            <Link to={`/breweries/brewery/${beer.breweries[0].id}`}>{beer.breweries[0].name}</Link> in {beer.breweries[0].locations[0].country.displayName}</p>
                            <div className="abv-ibu">
                                <p><b>ABV:</b> {beer.abv}%</p>
                                <p><b>IBU:</b> {beer.style.ibuMin} - {beer.style.ibuMax}</p>  
                            </div>         
                        </div>
                    ):(
                        <h2>Loading...</h2>
                    )}
                    <div>
                    {beer.style ? (
                            <p>{beer.style.description}</p>
                    ):(
                        <p></p>
                    )}
                </div>
                </div>
                <div className="beerLabelWrapper">
                <div>
                        {beer.labels ? (      
                            <img src={beer.labels.medium} alt="beer-label"/>
                        ) : (
                            <img src={require('../images/IMG_2908.jpg')} className="beerBrandImage"alt="replacement-picture"/>
                            // <p></p>
                        )}  
                    </div>
                </div>
            </div>
        )
        } else {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
        }
    }
}
export default SingleBeer