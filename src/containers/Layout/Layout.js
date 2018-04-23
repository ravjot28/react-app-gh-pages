import React, {Component} from 'react';
import Person from '../../components/Person/Person';

class Layout extends Component{

    state = {
        persons:[{
            userName:"Ravjot",
            userInfo:"Age: 28 years"
        },{
            userName:"Divjot",
            userInfo:"Age: 23 years"
        },{
            userName:"Gurcharan",
            userInfo:"Age: 26 years"
        }]
    };

    render(){

        const persons = this.state.persons.map((person,index) => {
            return <Person key={index+person.userName+person.userInfo} userName={person.userName} userInfo={person.userInfo} />
        });

        return (
            <div>
                {persons}
            </div>
        );
    }
}

export default Layout;