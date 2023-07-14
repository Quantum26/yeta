//var fs = require('fs')
import React from 'react'
import { Component } from 'react';
import CategoryGallery from './CategoryGallery';

const MongoClient = require('mongodb').MongoClient;

var mongoose_token = require('../secrets/mongoose') ;
MongoClient.connect(mongoose_token.connection);

const nominations = [
    ["Worst Drip", "dripped ian.PNG", "sad ian.JPG", "thumbs up ian.PNG", "dat hoe.JPG"],
    ["Best Bestest", "akul.PNG", "arjuyn.PNG", "hoodie girl.PNG", "Wooloo.gif"],
    ["Best Bestest", "akul.PNG", "arjuyn.PNG", "hoodie girl.PNG", "Wooloo.gif"],
    ["category 'v'", "ben.PNG", "blond.PNG", "colin.PNG", "corrin.PNG"]
]
class CategoryPage extends Component {
    constructor(props){
      super(props);
      this.state={
        votes: new Array(nominations.length).fill(0),
        loggedIn: false
      };
    }
    setUser(username, password){

        this.setState({username:username, loggedIn:true})
    }
    updateVote(index,vote){
        let tempVotes = this.state.votes;
        tempVotes[index] = vote;
        this.setState({votes:tempVotes});
    }
    render(){
        return (
        <main>
            <span>{this.state.votes}</span>
            {nominations.map((item, index)=>{
                return <CategoryGallery category={item[0]} c1={item[1]} c2={item[2]} c3={item[3]} c4={item[4]} active={this.state.votes[index]} voteFunc = {(vote)=>{this.updateVote(index, vote)}}/>
            })
            }
        </main>
        )
    }
}

export default CategoryPage;