import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {postsUsers} = this.props
        
        return(
            
            <div>
                {postsUsers.map((post,index)=>{

                return <PostItem
                title={post.title}
                body={post.body}
                key={index}/>
                })}
                
                    
            </div>
        )
    }


}

export default PostList;