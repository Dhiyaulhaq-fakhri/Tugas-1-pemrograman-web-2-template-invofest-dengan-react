import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon } from "lucide-react";

export default function DashboardLayout() {
    const logout = useAuthStore((state: { logout: any; }) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        navigate("/login");
    }

    return (
        <div className="flex min-h-screen">

            {/* kiri */}
            <div className="min-h-screen bg-pink-200 w-64 flex flex-col justify-between p-5">
                {/* satu */}
                <div className="border-b border-gray-500 py-4">
                    <h1 className="text-gray-500 text-2xl font-semibold">Invofest Dashboard</h1>
                </div>

                {/* dua */}
                <div>
                    <nav className="flex flex-col gap-5">
                        <Link to="/dashboard" className="p-4 text-gray-500 text-lg hover:bg-white rounded-lg transition ease-in duration-150 flex items-center gap-3">
                            <span>
                                <HomeIcon size={18} />
                            </span>Dashboard
                        </Link>
                        <Link to="/dashboard/category/create" className="p-4 text-gray-500 text-lg hover:bg-white rounded-lg transition ease-in duration-150">Kategori</Link>
                        <Link to="/dashboard/events/create" className="p-4 text-gray-500 text-lg hover:bg-white rounded-lg transition ease-in duration-150">Events</Link>
                        <Link to="/dashboard/speaker/create" className="p-4 text-gray-500 text-lg hover:bg-white rounded-lg transition ease-in duration-150">Pembicara</Link>
                    </nav>
                </div>

                {/* tiga */}
                <div className="bg-red-900 p-4 w-full text-white text-center rounded-lg cursor-pointer">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

            {/* kanan */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}