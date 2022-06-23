import React from 'react';

class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        
        return(
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.body}</p>
            </div>
        )
    }

}

export default PostItem;