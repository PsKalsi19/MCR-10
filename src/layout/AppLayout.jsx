import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
    return (
            <div className="flex flex-row space-x-4">
                <div className="w-3/12">
                    <Sidebar />
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
    );
};

export default AppLayout;