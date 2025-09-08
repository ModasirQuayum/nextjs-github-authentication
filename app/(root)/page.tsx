import { auth } from "@/auth"

export default async function Home(){
    const session = await auth()
    return(
        <>
        {session && session?.user ?(
            <h1 className="bg-orange-200 font-bold text-3xl px-5">
                {session?.user?.name}
            </h1>
        ):(
            <h1 className="bg-orange-200 font-bold text-3xl px-5">Home</h1>
        )}
        </>
    )
}