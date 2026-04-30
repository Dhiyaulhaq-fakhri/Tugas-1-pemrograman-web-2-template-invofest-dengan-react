import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/ui/FormInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(8, "Email minimal 8 angka"),
    password: z.string().min(8, "password minimal 8 angka"),
    password_confirm: z.string().min(8, "konfirmasi password harus diisi")
});

export default function Register(){
            const {
                register, 
                handleSubmit, 
                formState:{errors},
            } = useForm({ resolver: zodResolver(schema)});
    return (
        <div>
            <form onSubmit={handleSubmit(console.log())}>
                <FormInput 
                text="nama"
                tipe="text"
                name="nama"
                register={register}
                error={errors.nama?.message}
                />

                <FormInput 
                text="email"
                tipe="text"
                name="email"
                register={register}
                error={errors.email?.message}
                />

                <FormInput 
                text="password"
                tipe="password"
                name="password"
                register={register}
                error={errors.password?.message}
                />

                <FormInput 
                text="password_confirm"
                tipe="password"
                name="password confirm"
                register={register}
                error={errors.password_confirm?.message}
                />

                <div>
                    <Button label="Register" variant="primary"/>
                </div>

            </form>

        </div>
    )
}

