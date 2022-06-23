import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:0,
            name:'',
            email:'',
            isGoldClient:false
            

        };
    }
    containsSpecialChars() {
        const specialChars1 = /[@]/;
        const specialChars2 = /[.]/;

        const result1 = specialChars1.test(this.state.email);
        const result2 = specialChars2.test(this.state.email);
        
         return ((result1 === true) && (result2===true))? true:false;
      }
     
     emplyNameImput(){

        const nameImput = (this.state.name !== '')  ? true : false;

        return (nameImput===true)? true:false;
     } 
      

    handleNameChange(event){
        console.log(event.target.value);
        const inputValue = event.target.value;
        this.setState({name:inputValue});
    }
    handleEmailChange(event){
        const inputValue = event.target.value;
        this.setState({email:inputValue});
    }
    handleIsGoldClientChange(event){
        const inputValue = event.target.checked;
        this.setState({isGoldClient:inputValue});
    }
    handleFormSubmit(event){
        event.preventDefault();
        const {theUsers} = this.props;
        const idValue=theUsers.length +1;
        
        const  newUser = {
            id:idValue ,
            name:this.state.name,
            email:this.state.email,
            isGoldClient:this.state.isGoldClient
        };
        this.props.updateUsersList(newUser);
    }

    noSubmitForm(event){
        event.preventDefault();
        alert('Corpul "Nume" nu trebuie sa fie gol si corpul "Email trebuie sa contina obligatoriu "@"  ,  "."')
        
       

    }
    

    render(){
        console.log(this.emplyNameImput())
        console.log(this.containsSpecialChars())  
        return(
            <form 
                className='user-add-form'
                onSubmit={((this.containsSpecialChars() === false) || (this.emplyNameImput() === false) )?(event)=>this.noSubmitForm(event):(event)=>this.handleFormSubmit(event)}>
                
                   


                <h2 >Adauga un utilizator nou:</h2>
                <label htmlFor="name">Nume:</label>
                <input 
                    id='name-id'
                    type="text" 
                    name='name' 
                    value={this.state.name} 
                    placeholder='Username'
                    onChange={(event)=>{this.handleNameChange(event)}} />

                <label htmlFor="email">Email:</label>
                <input 
                    id='email-id'
                    type="text" 
                    name='email' 
                    value={this.state.email} 
                    placeholder='Email'
                    onChange={(event)=>{this.handleEmailChange(event)}} />

                <label id='gold-client' htmlFor="gold-client">E client gold?</label>
                <input 
                    id='box'
                    type="checkbox" 
                    name='gold-client' 
                    checked={this.state.isGoldClient} 
                    onChange={(event)=>{this.handleIsGoldClientChange(event)}}/>

                <input id='button' type="submit" value="Submite formularul" />

            </form>
        )
    }
}
export default UserAddForm;