import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../../../components/ui/ListItem";

interface CategoryType {
    id: number;
    name: string;
    createdAt?: string;
}

export default function Listcategory() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // 1. Ambil data dari backend
    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Gagal mengambil kategori:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // 2. Fungsi Hapus Kategori
    const handleDelete = async (id : number) => {
        if (window.confirm("Apakah kamu yakin ingin menghapus kategori ini?")) {
            try {
                const response = await fetch(`http://localhost:3000/categories/${id}`, {
                    method: "DELETE",
                });
                
                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    // Refresh data di layar setelah berhasil dihapus
                    fetchCategories(); 
                } else {
                    alert(result.message); // Akan memunculkan peringatan jika kategori sedang dipakai di Event
                }
            } catch (error) {
                console.error("Gagal menghapus kategori:", error);
            }
        }
    };

    return (
        <div className="p-5">
            <h2 className="font-semibold text-xl mb-2">Ini Laman List Kategori</h2>
            <p className="text-gray-500 mb-5">Daftar kategori event yang tersimpan di database.</p>

            {loading ? (
                <p className="text-gray-600">Memuat kategori...</p>
            ) : categories.length === 0 ? (
                <p className="text-gray-500 italic">Belum ada data kategori.</p>
            ) : (
                // 3. Render data dinamis menggunakan .map()
                <div className="flex flex-col gap-4 max-w-2xl">
                    {categories.map((category) => (
                        <div 
                            key={category.id} 
                            className="flex items-center justify-between p-3 border rounded-lg bg-amber-50 shadow-sm"
                        >
                            {/* Menggunakan ListItem bawaanmu */}
                            <ListItem title={category.name} />
                            
                            {/* Tombol Aksi: Edit & Hapus */}
                            <div className="flex gap-2">
                                <Link 
                                    to={`/dashboard/category/editcategory/${category.id}`}
                                    className="px-3 py-1 bg-amber-500 text-white text-sm rounded hover:bg-amber-600 transition"
                                >
                                    Edit
                                </Link>
                                <button 
                                    onClick={() => handleDelete(category.id)}
                                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Tombol Buat Kategori Baru */}
            <div className="py-5">
                <div className="flex justify-center p-3 bg-blue-900 max-w-50 rounded-lg text-white hover:bg-blue-800 transition ease-in duration-75 text-center">
                    <Link to="/dashboard/category/create" className="w-full">Buat Category baru</Link>
                </div>
            </div>
        </div>
    );
}