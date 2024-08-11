import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { auth, currentUser } from "@clerk/nextjs/server";
export default function Auth() {
  // const user=currentUser();
  // console.log(user);
  return (
    <div className="flex flex-col justify-center h-32 gap-4 items-center">
      <h1>Sign up to View More</h1>
      <div className="flex justify-evenly gap-6">
      <SignInButton>
        <Button>
        SignIn
        </Button>
      </SignInButton>
      <SignUpButton>
        <Button>
        SignUp
        </Button>
      </SignUpButton>
      </div>
    </div>
  );
}
