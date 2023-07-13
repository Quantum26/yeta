import React from 'react';
import './CategoryGallery.css';
import { Component } from 'react';

function Nominee(prefix, name, active){
  let activeStr = "cat-container"
  if(active){
    activeStr = "cat-container active"
  }
  return(
      <figure class={activeStr}>
        <img class="cat-image" src={prefix + name} alt={name}/>
        <figcaption class="cat-title">{name.split(".")[0]}</figcaption>
      </figure>
  );

}

class CategoryGallery extends Component{
    constructor(props){
      super(props);
      let prefix = "voting-images/" + props.category + "/";
      this.state={
        category: props.category,
        prefix: prefix,
        c1 : props.c1,
        c2 : props.c2,
        c3 : props.c3,
        c4 : props.c4,
        active : props.active,
        voteFunc : props.voteFunc
      };
    }
    updateVote(vote){
      this.state.voteFunc(vote)
      this.setState({active:vote})
    }
    render(){
    return (
      <div id={"category-" + this.state.category.replace(/\s/g, '-')}>
        <h3 class="category-title">{this.state.category}</h3>
        <div class="cat-images">
          <div onClick={()=>this.updateVote(1)}>{Nominee(this.state.prefix, this.state.c1, (this.state.active===1))}</div>
          <div onClick={()=>this.updateVote(2)}>{Nominee(this.state.prefix, this.state.c2, (this.state.active===2))}</div>
          <div onClick={()=>this.updateVote(3)}>{Nominee(this.state.prefix, this.state.c3, (this.state.active===3))}</div>
          <div onClick={()=>this.updateVote(4)}>{Nominee(this.state.prefix, this.state.c4, (this.state.active===4))}</div>
        </div>
      </div>
    );
    }
}
export default CategoryGallery;