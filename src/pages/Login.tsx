import { useForm } from "react-hook-form";
import FormInput from "../components/ui/FormInput";
import InputText from "../components/ui/InputText";
import LabelInput from "../components/ui/LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 angka"),
});



export default function Login() {
        const {register, handleSubmit, formState:{errors}} = useForm({
            resolver: zodResolver(schema)
        })
    return (
        <div>
            <form onSubmit={handleSubmit(console.log())}>
                <FormInput 
                text="email" 
                tipe="text" 
                name="email" 
                register={register} 
                error={errors.email?.message}/>

                <FormInput
                text="text"
                tipe="password"
                name="password"
                register={register}
                error={errors.password?.message}
                />

                <div>
                    <Button label="Login" variant="primary" />
                </div>
            </form>
        </div>
    )
}