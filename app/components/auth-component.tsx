import { signIn, signOut } from "@/auth"


export const SignIn = ({provider, ...props} : {provider?: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) =>{
    return(
        <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button {...props} type="submit">Sign In</button>
      </form>
    )
}

export const SignOut = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) =>{
    return(
        <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button {...props} type="submit" className="bg-red-400 text-white px-6 py-2 rounded-full cursor-pointer">Sign Out</button>
      </form>
    )
}