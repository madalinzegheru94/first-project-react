import React from 'react';
import './UserItem.css';

class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render (){
    return (
        <div className='user-item'>
            {
              this.props.isGoldClient
                ? <img src='https://w7.pngwing.com/pngs/156/15/png-transparent-gold-diamond-golden-diamond-gold-diamond-thumbnail.png' alt='Gold Logo' width='30px' height='30px'/>
                : <img src='https://static-bebeautiful-in.unileverservices.com/profile-icon-png-clip-art_22.png' alt='Black Logo' width='30px' height='30px'/>
            }
            <h3> {this.props.name} </h3>
            <p>{this.props.email }</p>
            
            { this.props.isGoldClient 
                ? <h3>Client GOLD</h3>
                : null
            }
            
            <button id='delete-button' onClick={() => this.props.onDelete(this.props.id)} >Delete</button>
            
        </div>
    );
}
}

export default UserItem;