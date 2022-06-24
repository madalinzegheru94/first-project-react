import React from 'react';

import UserList from '../components/UserList';
import '../App.css';
import UserAddForm from '../components/UserAddForm';
import PostList from '../components/PostList';
import Layout from '../components/Layout';





class Home extends React.Component {
  constructor() {
    
    console.log('Constructor called!');
    super();
    
    this.state = {
      background: 'white',
      color:'black',
     
      users: [],
      postsUsers:[],
      displayUsers:true
     
    };
  }

  
  componentDidMount() {
    console.log('App component finished mounting!');
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
     
      this.setState({users: data});
      


      fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json()) 
    .then(data=>{
     
       this.setState({postsUsers:data});
    })
    
    
      
    })
     
     
  }

  renderUsers(){
    this.setState({displayUsers:true})
    
  }

  

   renderPosts(){
    this.setState({displayUsers:false})
   } 

  
  componentDidUpdate() {
    console.log('App component was updated!');
    
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  
  
  changeTextColor(event){
    const userText = event.target.value;
    this.setState({color:userText});
  }

  updateUsersList(user){
    this.setState((previousState)=>{
      return{
        users:[
          ...previousState.users,
          user
        ]
      }
    })
  }

  
  removeItemList(items){
    this.setState({users:items})
  }
  usersListLenght(){
     const usersList=this.state.users;
     const lenghtList = usersList.length;
     console.log(lenghtList);
     
    
     
  }
  
  
  
  render() {
    this.usersListLenght();
    
    console.log('App component rendered!');
    return(
      <div> 
        <Layout>
      <div className="app" style={{background: this.state.background} }>
      
        <h1>First Project</h1>
        
      
        <div className='background-img'>

        
       
        
        <div className="users-list" style={{color: this.state.color}}>
        <div className="add-form">
        <img id="form-img" src='http://www.bardfieldacademy.org/wp-content/uploads/2016/08/00106-3D-company-logos-design-free-logo-online-02.png' alt='form'/>
        {
          

          <UserAddForm updateUsersList={(user)=>{this.updateUsersList(user)}}
                        usersLenght={() =>{this.usersListLenght()}}
                        theUsers={this.state.users}/>
        }
        </div>
        
        
        {
          this.state.displayUsers
            ? this.state.background !== '#000000'
              ? <UserList users={this.state.users}
              removeItemList={(event) => this.removeItemList(event)}/>
              : null
            :  <PostList
              postsUsers={this.state.postsUsers}/>
        }

        
        <button id='render-users' onClick={()=>{this.renderUsers()}}>Render Users</button>
        <button id='render-posts' onClick={()=>{this.renderPosts()}}>Render Posts</button>
        
        <div className='color-buttons'>
        <div className='text-color'>
        <p>Change Text Color</p>
        <input type="color" onChange={(event)=>this.changeTextColor(event)} />
        </div>
        <div className='background-color'>
        <p>Change Background Color</p>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </Layout>
        </div> 
      
    );
  }
}

export default Home;