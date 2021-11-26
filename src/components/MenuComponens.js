import React,{ Component } from 'react';
import {Media} from 'reactstrap'


class Menu extends Component{

    constructor (props){
        super(props);
        this.state ={
            dishes:[
                {
                    id: 0,
                    name:'Pittu',
                    image: 'assets/image/pittu.jpg',
                    category: 'mains',
                    label:'New',
                    price:'Rs.200',
                    description:'Puttu is a breakfast dish eaten in the South Indian states of Kerala, Tamil Nadu and parts of Karnataka, as well as Sri Lanka. Puttu means "portioned" in Tamil and Malayalam. It is made of steamed cylinders of ground rice layered with coconut shavings, sometimes with a sweet or savory filling on the inside.'
                  },
                 {
                    id: 1,
                    name:'Pakoda',
                    image: 'assets/image/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Pakora is a spiced fritter originating from the Indian subcontinent, sold by street vendors and served in restaurants in South Asia and worldwide. It consists of items, often vegetables such as potatoes and onions, coated in seasoned gram flour batter and deep fried'                  
                      },
                 {
                    id: 2,
                    name:'Vadai',
                    image: 'assets/image/vadonut.png',
                    category: 'appetizer',
                    label:'New fod',
                    price:'1.99',
                    description:'Vada or bada is a category of savoury fried snacks from India. Different types of vadas can be described variously as fritters, cutlets, doughnuts, or dumplings. Alternative names for this food include wada, vade, vadai, wadeh and bara. In North India and Pakistan, Bhalla is a similar food.'           
                             },
                 {
                    id: 3,
                    name:'Cheese Cake',
                    image: 'assets/image/elaicheesecake.png',
                    category: 'new desert',
                    label:'',
                    price:'2.99',
                    description:'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.'                        }

            ],
        };

    }
    render(){
        const menu =this.state.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src = {dish.image} alt = {dish.name}/>
                    </Media>
                    <Media body className ="ml-5">
                    <Media heading >{dish.name}</Media>
                    <p>{dish.description}</p>
                    </Media>
                        
                </Media>

            </div>
        );
        });

        return(
            <div className ="container">
                <div className ="Row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
            
        );
    }
}

export default Menu;
