import { Link } from "react-router-dom";
import categories from "../db/categories";

const Departments = () => {
    return (
        <div className="w-auto">
        <div className="flex flex-row justify-center gap-8 my-8">
           { categories.map(name=><Link to={`/products/${name}`} key={name} className="flex flex-col items-center px-16 py-12 bg-gray-100 rounded-lg shadow-md">
                <p className="text-sm font-bold text-gray-950 lg:text-lg ">{name}</p>
            </Link>) }
          
        </div>
    </div>
    );
};

export default Departments;