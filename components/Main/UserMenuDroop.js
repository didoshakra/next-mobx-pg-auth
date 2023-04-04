//UserMenuDroop.js
//Саме випадаюче меню мови
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useContext, useRef, useEffect } from "react"
import { Context } from "../../pages/_app"
import { ComponentContext } from "../../context/ComponentContext"

const UserMenuDroop = ({ userMenuDroopOpen, setUserMenuDroopOpen }) => {
  const { data: session, status } = useSession()
  const { global } = useContext(Context) // Store
  const { state } = useContext(ComponentContext)
  const { theme } = state

  //    const menuSingIn = [
  //      {
  //        a: "Профіль",
  //        link: "/",
  //      },
  //      {
  //        a: "Історія покупок",
  //        link: "/",
  //      },
  //      {
  //        a: "Вийти",
  //        link: "/",
  //      },
  //    ]

  //    const menuSingOut= [
  //      {
  //        a: "Профіль",
  //        link: "/",
  //      },
  //      {
  //        a: "Історія покупок",
  //        link: "/",
  //      },
  //      {
  //        a: "Вийти",
  //        link: "/",
  //      },
  //    ]
  //  const menu = {if (status = "authenticated") menuSingIn
  //     else menuSingOut
  // }
  //    const renderMenu = () => {
  //      return menu.map((item, index) => {
  //        return (
  //          <li className="mobileMenuDroop__dropdown__item" key={index}>
  //            <Link href={`${item.link}`}>{item.a}</Link>
  //          </li>
  //        )
  //      })
  //    }

  //   const onSingIn = (e) => {
  //     console.log("UserMenuDroop.js/onSingIn")
  //     e.preventDefault()
  //     signIn()
  //   }
  //   const onSignOut = (e) => {
  //     console.log("UserMenuDroop.js/onSignOut")
  //     // setLangMenuOpen(!langMenuOpen)
  //     e.preventDefault()
  //     //  signOut()
  //   }

  return (
    <div className="userMenuDroop">
      {status === "authenticated" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Hi👋 {session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          {/* <hr className="userMenuDroop__dropdown-hr"/> */}
        </div>
      )}
      <ul className="userMenuDroop__menu">
        {status === "authenticated" ? (
          <>
            <li className="userMenuDroop__dropdown__item" onClick={() => setUserMenuDroopOpen(false)}>
              <Link href={`/auth/registrations`}>
                <p type="button" className="userMenuDroop__dropdown__item-p" onClick={() => signOut()}>
                  Профіль
                </p>
              </Link>
            </li>{" "}
            {/* <hr className="userMenuDroop__dropdown-hr" /> */}
            <li className="userMenuDroop__dropdown__item" onClick={() => setUserMenuDroopOpen(false)}>
              <Link href={`/auth/registrations`}>
                <p type="button" className="userMenuDroop__dropdown__item-p" onClick={() => signOut()}>
                  Історія покупок
                </p>
              </Link>
            </li>
            <li className="userMenuDroop__dropdown__item" onClick={() => setUserMenuDroopOpen(false)}>
              <p type="button" className="userMenuDroop__dropdown__item-p" onClick={() => signOut()}>
                Вийти
              </p>
              {/* <Link className="UserMenuDroop__dropdown__item-p" onClick={() => signOut()} href={`/auth/singout`}>
                Вийти
              </Link> */}
            </li>
          </>
        ) : (
          <>
            <li
              onClick={() => signIn()}
              className="userMenuDroop__dropdown__item"
            //   onClick={() => setUserMenuDroopOpen(false)}
            >
              {/* <button
                style={{
                  color: "red",
                  backgroundColor: "yellow",
                  border: "solid green",
                  borderRadius: " 5px",
                  width: "60px",
                  justifyContent: "center",
                }}
                type="button"
                onClick={() => signIn()}
              >
                SingIn
              </button> */}
              {/* <p type="button" className="userMenuDroop__dropdown__item-p" onClick={() => signIn()}> */}
              {/* <p type="button" className="userMenuDroop__dropdown__item-p"> */}
                Вхід
              {/* </p> */}
            </li>
            <li className="userMenuDroop__dropdown__item" onClick={() => setUserMenuDroopOpen(false)}>
              <Link className="userMenuDroop__dropdown__item-p" href={`/auth/registrations`}>
                {/* <p className="userMenuDroop__dropdown__item-p"> */}
                    Регістрація
                    {/* </p> */}
              </Link>
            </li>
          </>
        )}
      </ul>
      <style jsx>{`
        .userMenuDroop {
          //   positi   on: relative;
          //плавно проявляється (opacity 0.5s)
          position: absolute; //Щоб працювали(top,bottom,left,right) материнський блок обовязково = position: relative;
          padding: 0;
          margin: 0;
          min-width: 180px; //якщо не працює display: inline-block(переносить слова)
          top: 20px; //Від верхнього краю обох об'єктів((+)вниз,(-)вверх)
          right: 0px;
          border-radius: 5px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          //   opacity: ${userMenuDroopOpen ? "1" : "0"};
          z-index: ${userMenuDroopOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
        .userMenuDroop__menu {
          //плавно проявляється (opacity 0.5s)
          //   position: absolute; //Щоб працювали(top,bottom,left,right) материнський блок обовязково = position:
          margin: 0;
          padding: 0;
          display: inline-block; //-(сам)Блок по ширині контенту
          background: ${theme.colors.headMenuBackground};
        }
        .userMenuDroop__dropdown__item {
          display: flex;
          //   flex-direction: column:
          //position: relative;
          margin: 0;
          padding: 5px 10px;
          font-size: 18px;
          font-weight: 200;
          font-family: ${theme.fontFamily.serif};
          list-style-type: none;
          align-items: center;
          text-decoration: none;
          color: ${theme.colors.menuDroopText};
          background: ${theme.colors.menuDroopBackground};
        }

        .userMenuDroop__dropdown__item:hover {
          color: ${theme.colors.menuDroopTextHover};
          background: ${theme.colors.menuDroopBackgroundHover};
          cursor: pointer;
        }

        //при UserMenuDroop__menu__item:hover спрацьовує <.UserMenuDroop__dropdown__item-p>
        // потрібно і .userMenuDroop__dropdown__item:hover і .userMenuDroop__dropdown__item:hover .userMenuDroop__dropdown__item-p
        .userMenuDroop__dropdown__item:hover .userMenuDroop__dropdown__item-p {
          color: ${theme.colors.menuDroopTextHover};
          background: ${theme.colors.menuDroopBackgroundHover};
          cursor: pointer;
        }

        .userMenuDroop__dropdown__item-p {
          margin-left: 10px;
          padding: 0;
          display: flex;
          align-items: center; //Y Вирівнювання
          color: ${theme.colors.menuDroopText};
          //   background: ${theme.colors.menuDroopBackground};
        }
        .userMenuDroop__dropdown__item-p:hover {
          margin-left: 10px;
          padding: 0;
          display: flex;
          align-items: center;
          color: ${theme.colors.headMenuTextHover};
          background: ${theme.colors.menuDroopBackgroundHover};
        }
        .userMenuDroop__dropdown-hr {
          //   bottom: 10px;
          height: 0.5px;
          width: "100%";
          background: ${theme.colors.menuDroopHr};
        }
      `}</style>
    </div>
  )
}

export default UserMenuDroop
