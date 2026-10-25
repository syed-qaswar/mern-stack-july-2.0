import { Link } from "react-router-dom";
import {Camera, Home, ToolCase, Phone} from 'lucide-react';

function Navbar(){
    return(
        <div className="bg-amber-300 px-4 py-2 flex justify-between items-center">
            <div className="font-bold text-2xl">ReactApp</div>
            <nav className="flex gap-5 font-semibold text-blue-500">
                <Home color="black" strokeWidth={1}/>
                <Link to={'/'}>Home </Link>
                <ToolCase />
                <Link to={'/services'}>Services</Link>
                <Phone />
                <Link to={'/contact'}>Contact</Link>
            </nav>
            <a href="#" className="bg-white px-4 py-2 rounded-lg">Get in touch</a>
        </div>
    ) 
}

export default Navbar;