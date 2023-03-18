//UserMenuDroop.js
//Саме випадаюче меню мови
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useContext, useRef, useEffect } from "react"
import { Context } from "../../pages/_app"
import { ComponentContext } from "../../context/ComponentContext"
// import { useSession, signIn, signOut } from "next-auth"

const UserMenuDroop = ({ userMenuDroopOpen,setUserMenuDroopOpen }) => {
  const { global } = useContext(Context) // Store
  const { state } = useContext(ComponentContext)
  const { theme } = state
  //    const [session] = useSession()

  const onSingIn = (e) => {
    console.log("UserMenuDroop.js/onSingIn")
    e.preventDefault()
    signIn()
  }
  const onSignOut = (e) => {
    console.log("UserMenuDroop.js/onSignOut")
    // setLangMenuOpen(!langMenuOpen)
    e.preventDefault()
    //  signOut()
  }
  return (
    <div className="UserMenuDroop">
      <ul className="UserMenuDroop__menu">
        <li onClick={() => setUserMenuDroopOpen(false)} className="UserMenuDroop__dropdown__item">
          {global.isAuth ? (
            // <Link className="UserMenuDroop__dropdown__item-p" href={`/auth/singout`}>
            <Link className="UserMenuDroop__dropdown__item-p" href={`/auth/singout`}>
              Вийти
            </Link>
          ) : (
            // <Link className="UserMenuDroop__dropdown__item-p" href={`auth/singin`}>
            <Link
              className="UserMenuDroop__dropdown__item-p"
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign In/Вхід
            </Link>
          )}
        </li>
        <li className="UserMenuDroop__dropdown__item" onClick={() => setUserMenuDroopOpen(false)}>
          {/* <a className="UserMenuDroop__dropdown__item-p">Registration</a> */}
          <Link className="UserMenuDroop__dropdown__item-p" href={`/auth/registrations`}>
            Регістрація
          </Link>
        </li>
      </ul>
      <style jsx global>{`
        .UserMenuDroop__dropdown__item {
          display: flex;
          //position: relative;
          margin: 0;
          padding: 5px 10px;
          font-size: 18px;
          font-weight: 100;
          font-family: ${theme.fontFamily.serif};
          list-style-type: none;
          align-items: center;
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headMenuBackground};
        }
        .UserMenuDroop__dropdown__item:hover {
          color: ${theme.colors.headMenuTextHover};
          background: ${theme.colors.headMenuBackgroundHover};
          cursor: pointer;
        }

        //при UserMenuDroop__menu__item:hover спрацьовує <a><.UserMenuDroop__dropdown__item-p>
        // .UserMenuDroop__dropdown__item:hover a {
        .UserMenuDroop__dropdown__item:hover .UserMenuDroop__dropdown__item-p {
          color: ${theme.colors.headMenuTextHover};
          background: ${theme.colors.headMenuTextBackgroundHover};
        }

        .UserMenuDroop__dropdown__item-p {
          margin-left: 10px;
          padding: 0;
          display: flex;
          align-items: center; //Y Вирівнювання
          color: ${theme.colors.headMenuText};
          background: ${theme.colors.headMenuTextBackground};
        }
        .UserMenuDroop__dropdown__item-p:hover {
          color: ${theme.colors.headMenuTextHover};
          background: ${theme.colors.headMenuTextBackgroundHover};
        }
      `}</style>
      <style jsx>{`
        .UserMenuDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .UserMenuDroop__menu {
          //плавно проявляється (opacity 0.5s)
          position: absolute; //Щоб працювали(top,bottom,left,right) материнський блок обовязково = position: relative;
          display: inline-block; //-(сам)Блок по ширині контенту
          //display: block; //+(з float: left;) Блок по ширині контенту
          //float: left; //+(з display: block)Блок по ширині контенту
          padding: 0;
          margin: 0;
          min-width: 180px; //якщо не працює display: inline-block(переносить слова)
          //bottom: -220px; //Від нижнього краю обох об'єктів()((+)вверх,(-)вниз)
          top: -0px; //Від верхнього краю обох об'єктів((+)вниз,(-)вверх)
          right: 0px;
          border-radius: 5px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          //   opacity: ${userMenuDroopOpen ? "1" : "0"};
          z-index: ${userMenuDroopOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  )
}

export default UserMenuDroop
