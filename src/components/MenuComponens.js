
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
                    name:'Zucchipakoda',
                    image: 'assets/image/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep ss Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                  
                      },
                 {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/image/vadonut.png',
                    category: 'appetizer',
                    
                    label:'New fod',
                    price:'1.99',
                    description:'A quintessential ConFusion , is it a vada or is it a donut?'           
                             },
                 {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/image/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }

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
