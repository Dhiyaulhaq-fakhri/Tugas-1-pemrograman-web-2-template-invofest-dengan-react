import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi!"),
    alamat: z.string().min(1, "Alamat wajib diisi!"),
    email: z.string().min(1, "Email wajib diisi!"),
    Bio: z.string().min(1, "Tolong isi Bio")
});

export default function Registrasievent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) })
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
                    text="alamat"
                    tipe="text"
                    name="alamat"
                    register={register}
                    error={errors.alamat?.message}
                />

                <FormInput
                    text="email"
                    tipe="text"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                />

                <FormInput
                    text="Bio"
                    tipe="text"
                    name="Bio"
                    register={register}
                    error={errors.Bio?.message}
                />

                <div className="flex justify-center p-5">
                    <Button label="Registrasi" variant="primary" />
                </div>
            </form>
        </div>
    )
}