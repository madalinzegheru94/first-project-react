import React from 'react';
// nu uitai sa importati componentele folosite!
import UserItem from './UserItem';
import './UserList.css';

// ATENTIE! Singurul motiv pentru care am facut componenta UserList sa fie clasa este pentru
// a avea acces la lyfecycle methods. Acestea nu sunt disponibile in cadrul unei componente
// declarate cu function!!
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    // ATENTIE! O componenta declarata cu class poate sa nu aiba constructor sau state,
    // dar trebuie neaparta sa aiba metoda render.

    // UNMOUNTING: cand o componenta nu mai trebuie sa fie afisata pe ecran, de cele mai multe
    // ori ea este demontata. In cazul exemplului nostru, daca utilizatorul selecteaza orice alta culoare
    // decat negru, componenta UserList trebuie sa fie afisata pe ecran. ATENTIE! O data ce aceasta componenta
    // este montata, ea ramane montata pana cand este selectata culoarea negru(#000000). Atunci ea este demontata
    // si se apeleaza metoda componentWillUnmount. Cand se reselecteaza o culoare diferita de negru, componenta
    // UserList va fi din nou montata.
    componentWillUnmount() {
        console.log('UserList Component was unmounted...');
    }

    componentDidMount() {
        console.log('UserList component was mounted!');
        
    }

    handleDelete=(userId)=>{
        
        const {users} = this.props;
        
        const items = users.filter(item => item.id !==userId );
        // this.setState({users:items});
        console.log(items);
        this.props.removeItemList(items);
    
        
    }
    
    
    

    render() {
        console.log('UserList component rendered!');
        
        // preluam informatiile despre useri
        const { users } = this.props;
        console.log(users);

        
        

        return (
            <div>
                <h2>Lista Utilizatori:</h2>
                <div className='page-view'>
                <div className='user-list'>
                {users.map((user, index) => {
                    
                    return <UserItem
                       
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        onDelete={this.handleDelete}
                        id={user.id}
                        
                       
                        key={index}
                    />
                })}
               
            </div>
            
            </div>
            </div>
        );
    }
}

export default UserList;