function Card(props){
    return(
        <div>
            <img src="#" alt="" />
            <h2>Lenovo {props.lp_name} Laptop with {props.ram} RAM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus non sunt quisquam,</p>
            <button></button>
        </div>
    )
}

export default Card;

// props ={
//     lp_name = 'Thinkpad',
//     ram = 12gb 
// }
// props.lp_name