//userMenuIcon.js //
//Іконка мови окремо (випадаючий список викликається)

import { useState, useContext, useRef, useEffect } from "react"
import Image from "next/image"
import { Context } from "../../pages/_app"
import { ComponentContext } from "../../context/ComponentContext"
import NotAuthenticated from "../../raui/svg/head/IconUser_border"
import UserMenuDroop from "./UserMenuDroop"

const userMenuIcon = () => {
  const { global } = useContext(Context) // Store
  const { state, dispatch, profile } = useContext(ComponentContext)
  const { theme } = state
  const [userMenuDroopOpen, setUserMenuDroopOpen] = useState(false)
  const [iconHover, setIconHover] = useState(false) //Для тоого щоб працював hover
  const iconSize = "25"

  //Для тоого щоб працював hover
  const toggleHover = () => {
    // setIconHover(!iconHover);
    setIconHover(true)
  }
  const toggleNotHover = () => {
    setIconHover(false)
  }

  //   console.log("profile=", profile);
  const onUserMenuDroopOpen = () => {
    //   color: ${theme.colors.headIcon};
    setUserMenuDroopOpen(!userMenuDroopOpen)
    // let newUser = "admin"
    // if (profile === "admin") {
    //   newUser = "user"
    // }
    console.log("userMenuIcon.js/newUser=")
    // console.log("profile=", profile)
    // dispatch({ type: "PROFILE", payload: newUser }) //Змінюємо state.user
  }

  return (
    <div className="userMenuIcon">
      {/* іконка зміни користувача */}
      <div
        className="userMenuIcon__iconWraper"
        // title={t("headerMenu_iconTitleTheme")}
        onClick={onUserMenuDroopOpen}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleNotHover}
      >
        {global.isAuth ? (
          //   <Image className="userMenuIcon__avatar" width={40} height={40} src="/avatar/2.jpg" alt="avatar" />
          <Image
           style={{borderRadius: "50%"}}
            className="userMenuIcon__avatar"
            // width={theme.size.headIcon}
            // height={theme.size.headIcon}
            width={30}
            height={30}
            src="/avatar/2.jpg"
            alt="avatar"
          />
        ) : (
          <NotAuthenticated
            width={theme.size.headIcon}
            height={theme.size.headIcon}
            colorFill={iconHover ? theme.colors.headIconHover : theme.colors.headIcon}
          />
        )}
      </div>
      {/* Випадаюче меню */}
      {userMenuDroopOpen && (
        <UserMenuDroop userMenuDroopOpen={userMenuDroopOpen} setUserMenuDroopOpen={setUserMenuDroopOpen} />
      )}
      <style jsx>{`
        .userMenuIcon {
          position: relative;
          //margin: 0;
          //padding: 0;
          list-style-type: none; //маркери для списка.
        }

        .userMenuIcon__iconWraper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 5px; //Відступ від кожного елемента зліва
          width: 36px;
          height: 36px;
          border-radius: 36px;
          //   border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          //   color: ${theme.colors.headIcon};
          //   background-image: url("/avatar/2.jpg");
        }

        .userMenuIcon__iconWraper:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }

        .userMenuIcon__avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          // background-size: contain;
          // background-size: cover;
          // background-image: url("/avatar/2.jpg");
        }
      `}</style>
    </div>
  )
}

export default userMenuIcon
