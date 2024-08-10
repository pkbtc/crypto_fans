import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <form className="flex flex-col p-4 gap-2">
        <label>Sign Up</label>
        <input
          className="border border-gray-300 rounded-lg text-lg p-2"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded-lg  text-lg  p-2"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className="rounded-2xl text-center bg-gray-200 p-1 text-sm">
          SIGN Up
        </button>
      </form>
      <div>
        <Link href="#">Already Have Account?</Link>
        <Link href="#">Sign in for CryptoFans</Link>
      </div>
      <div className="flex flex-col">
        <button>SIGN IN WITH X</button>
        <button>SIGN IN WITH GOOGLE</button>
        <button>PASSWORDLESS SIGN IN</button>
      </div>
    </div>
  );
}
