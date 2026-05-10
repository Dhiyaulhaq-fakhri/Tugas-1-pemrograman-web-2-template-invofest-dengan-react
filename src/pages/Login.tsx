import { useForm } from "react-hook-form";
import Forminput from "../components/Forminput"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

// tentukan data
type FormData = {
    email: string;
    password: string;
};

// scema validasi
const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 angka"),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Forminput
                    label="Masukan Email"
                    tipe="text"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                    placeholder="Email"
                />

                <Forminput
                    label="Masukan Password"
                    tipe="password"
                    name="password"
                    register={register}
                    error={errors.password?.message}
                    placeholder="password"
                />

                <div>
                    <Button label="Login" variant="primary" />
                </div>
            </form>

            <p className="mt-6">
                Belum punya akun?
                <Link to="/register" className="text-blue-500">
                    Daftar di sini
                </Link>
            </p>
        </div>
    )
}