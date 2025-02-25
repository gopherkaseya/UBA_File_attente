import { Input } from "../components/forms/Input";
import logoUba from '../assets/logo-uba.png'
import { Button } from "../components/forms/Button";

export function Login(){
    
    const OButton = () =>{
        console.log('hola')
    }

    return <div className="justify-center items-center bg-white h-screen flex">
        <div>
            <div className="flex justify-center">
                <img src={logoUba} className="h-12 "/>
            </div>
            <div className="flex justify-center text-black font-roboto font-bold text-xl">
                <p>Login</p>
            </div>
            <form action="" method="post" className="bg-white p-5 rounded-lg drop-shadow-lg lg:w-96 md:w-96">
                <Input type={"email"} placeholder={"email"} label={"Addresse mail"}/>
                <Input type={"password"} placeholder={"Mot de passe"} label={"Mot de passe"}/>
                <Button text={"Se connecter"}  color={'bg-customRed'} />
            </form>
        </div>
        
    </div>
}