import { NavLink } from "react-router-dom";

const pages = [
    {
        name: 'Dashboard', link: '/'
    },
    {
        name: 'Departments', link: '/departments'
    },
    {
        name: 'Products', link: '/products/all'
    }
]

const Sidebar = () => {
    return (
        <div className="fixed w-3/12 h-screen px-4 text-2xl lg:w-2/12 bg-stone-900">
                <div className="flex flex-col justify-around h-2/3">{ pages.map((ele,index)=><NavLink className={`text-stone-400 font-bold hover:text-stone-300  `} key={index} to={ele.link} >{ele.name}</NavLink>) }</div>
        </div>
    );
};

export default Sidebar;