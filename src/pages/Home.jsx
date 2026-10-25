import Card from "../components/Card";
import Navbar from "../components/Navbar";


function Home(){
    const products = [
        {
            id : 1,
            lp_name: 'Thinkpad',
            ram: '12gb',
            btn_text: 'Add to card'
        },
        {    
            id: 2,        
            lp_name: 'Thinkbook',
            ram: '24gb',
            btn_text: 'Add to card'
        },
        {
            id : 3,
            lp_name: 'Ideapad',
            ram: '16gb',
            btn_text: 'Add to card'
        }
    ]

    return(
        <div>
            <h1 className="font-bold text-4xl">Home Page</h1>
            {products.map((product) => (
                <Card 
                    key = {product.id}
                    {...product}
                />
            ))}
            {/* <Card lp_name='Thinkbook' ram='16GB' btn_text ='Add to cart'/>
            <Card lp_name='Ideapad' ram='8GB' btn_text ='Add to cart'/> */}
        </div>
    )  
};

export default Home;


// product =  {
//             lp_name: 'Thinkpad',
//             ram: '12gb',
//             btn_text: 'Add to card'
// }

// Data ->  array -> map() -> Components -> Props -> UI 