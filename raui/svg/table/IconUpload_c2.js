// IconUpload_c2r.js //Flaticon
//Глобус (border)

export default function IconUpload_c2(props) {
  const colorFill = props.colorFill || "black"
  const colorFill1 = props.colorFill1 || "black"
  const width = props.width || "64"
  const height = props.height || "64"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
      <path
        ill={colorFill}
        d="M158.7 136c11.8 10.6 24.8 3.3 28.9-1l48-51.6v297.2c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V83.3l48 51.6c7.7 8.3 20.6 8.7 28.9 1 8.3-7.7 8.7-20.6 1-28.9l-83.4-89.6c-3.9-4.1-9.3-6.5-14.9-6.5-5.7 0-11.1 2.4-14.9 6.5L157.7 107c-7.7 8.4-7.4 21.5 1 29z"
      ></path>
      <path
        fill={colorFill1}
        d="M480.6 335c-11.3 0-20.4 9.1-20.4 20.4v104.8H51.8V355.4c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v125.2c0 11.3 9.1 20.4 20.4 20.4h449.2c11.3 0 20.4-9.1 20.4-20.4V355.4c0-11.3-9.1-20.4-20.4-20.4z"
      ></path>
    </svg>
  )
}
