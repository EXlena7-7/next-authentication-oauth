import { signIn } from "@/auth"


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