import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signIn,signOut,useSession } from "next-auth/react"


export default function Home() {

  const {data: session,status } = useSession()

  return (
    <main>
        
        {!session && (
          <div>
            <p>You are not signed in</p>
            <a href={`/api/auth/signin`}
              onClick={(e)=>{
                e.preventDefault()
                signIn()
              }}
              
            >
              SignIn
            </a>
          </div>
        )}

        {session?.user &&(
          <div>
            <p>Signed in as {session.user.email ?? session.user.name}</p>
            <p>username is {session.user.name}</p>
            <a href={`/api/auth/signout`}
              onClick={(e)=>{
                e.preventDefault()
                signOut()
              }}
            >Sign Out</a>
          </div>
        )}

    </main>
  )
}
