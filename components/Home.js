//Home.js
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <section className="grid h-screen place-items-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "red",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <h2>Hi {session?.user?.name}</h2>
          <br />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ви ввійшли як {session?.user?.email}.</p>
          <button
            type="button"
            onClick={() => signOut()}
            style={{
              color: "green",
              backgroundColor: "yellow",
              // border: "solid green",
              border: "4mm ridge rgba(211, 220, 50, .6)",
              borderRadius: " 5px",
              width: "100px",
              justifyContent: "center",
              margin: "50px",
            }}
          >
            Logout
          </button>
        </div>
      </section>
    )
  }
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "red",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <h2>Welcome To LogRocket</h2>
        <br />
        <p>Зараз ви не автентифіковані. Натисніть кнопку входу, щоб почати!!</p>
        <button
          style={{
            color: "red",
            backgroundColor: "yellow",
            // border: "solid green",
            border: "4mm ridge rgba(211, 220, 50, .6)",
            borderRadius: " 5px",
            width: "100px",
            justifyContent: "center",
            margin: "50px",
          }}
          type="button"
          onClick={() => signIn()}
        >
          Login
        </button>
      </div>
    </section>
  )
}
