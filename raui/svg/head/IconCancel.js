// IconArrowRight.js //Flaticon

export default function IconCancel(props) {
  const colorFill = props.colorFill || "black";
  // const colorFill = props.colorFill || "red";
  const width = props.width || "64";
  const height = props.height || "64";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      enableBackground="new 0 0 512.001 512.001"
      version="1.1"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
    >
      <path
        fill={colorFill}
        d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z"
      ></path>
    </svg>
  );
}
