
import { SignInButton,SignUpButton } from "@clerk/nextjs"


export default function Auth(){
    return (
        <>
        
        <SignInButton>
            <button>SignIn</button>
        </SignInButton>
        <SignUpButton>
            <button>SignUp</button>
        </SignUpButton>
        </>
    )
}