// IconVegetable.js //Flaticon
// Рослини-овочі(морква,)

export default function IconVegetable(props) {
  const color = props.colorFill || "black"
  const color1 = props.colorFill2 || "#fff"
  const width = props.width || "64"
  const height = props.height || "64"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
      <g>
        <path
          fill={color}
          d="M63 35.949c0-4.354-2.111-8.512-5.647-11.122A4.255 4.255 0 0054.837 24a4.21 4.21 0 00-2.961 1.218c-.145-.121-.277-.254-.427-.369-.555-.424-1.221-.676-1.905-.78l.441-4.849A3.874 3.874 0 0046.13 15h-.26a3.874 3.874 0 00-3.854 4.221l.443 4.87a4.28 4.28 0 00-1.765.751c-.179.134-.338.288-.51.429a4.06 4.06 0 00-.28-.261c.057-.333.096-.67.096-1.01a5.95 5.95 0 00-1.13-3.5A5.948 5.948 0 0040 17c0-3.424-2.897-6.199-6.349-5.989a5.975 5.975 0 00-3.979-3.762c-1.218-1.519-3.054-2.362-5.021-2.238A5.98 5.98 0 0019 1a5.992 5.992 0 00-5.198 3.003c-2.648.089-4.937 1.958-5.593 4.504C5.113 9.662 3 12.659 3 16a7.955 7.955 0 003.499 6.608A5.952 5.952 0 006 25c0 1.8.8 3.473 2.173 4.606A5.79 5.79 0 008 31a6.01 6.01 0 005.28 5.957l2.212 6.195a11.057 11.057 0 00-2.841 3.08l-5.239-1.164A2.805 2.805 0 004 47.802v.396c0 .28.054.546.131.802H4c-1.654 0-3 1.346-3 3s1.346 3 3 3h.131a2.771 2.771 0 00-.131.802v.396a2.805 2.805 0 003.41 2.735l5.241-1.165C14.592 60.902 18.051 63 22 63h.235c.556 0 1.119-.043 1.672-.128l34.291-5.275A5.634 5.634 0 0063 52a5.613 5.613 0 00-3.243-5.101C61.829 44.424 63 41.284 63 38.051zm-12.767-9.511C53.218 28.72 55 32.355 55 36.164v3.673c0 2.05-.511 4.057-1.474 5.848l-8.019-1.234A19.94 19.94 0 0145 40.03v-4.06c0-1.008.101-2.015.254-3.013.245.021.489.043.746.043 2.851 0 5-1.29 5-3 0-.944-.653-1.782-1.784-2.332l.147-1.618c.312.063.612.189.87.388zM45.87 17h.261a1.872 1.872 0 011.862 2.04l-.908 9.987.763.245c.876.28 1.152.649 1.152.728 0 .249-1.064 1-3 1s-3-.751-3-1c0-.079.276-.448 1.152-.729l.763-.245-.908-9.986A1.872 1.872 0 0145.87 17zm-3.23 9.083l.144 1.585C41.653 28.218 41 29.056 41 30c0 1.102.899 2.023 2.296 2.543-.179 1.135-.296 2.281-.296 3.427v4.06c0 1.374.132 2.746.388 4.095l-5.895-.907A12.041 12.041 0 0137 39.836v-3.673c0-3.803 1.828-7.437 4.89-9.719.223-.166.48-.288.75-.361zM31.833 42.347A11.63 11.63 0 0131 38.051v-2.103c0-3.722 1.808-7.278 4.835-9.514.38-.28.852-.434 1.328-.434.604 0 1.16.243 1.567.65-2.358 2.584-3.73 5.978-3.73 9.514v3.673c0 1.031.123 2.051.346 3.051zm.094-30.046l.182 1.029 1.02-.227A3.98 3.98 0 0134 13c2.206 0 4 1.794 4 4a3.976 3.976 0 01-1.148 2.799l-.688.701.688.701A3.976 3.976 0 0138 24c0 .03-.006.06-.006.091a4.238 4.238 0 00-.831-.091 4.26 4.26 0 00-2.516.826 13.94 13.94 0 00-4.225 5.079 66.233 66.233 0 00-1.187-3.383c.925-4.886 4.356-7.714 4.391-7.743L33 18l-.625-.781c-.139.111-2.844 2.32-4.363 6.305-2.081-4.778-4.045-7.869-4.171-8.065l-1.683 1.082c.027.041 1.552 2.44 3.327 6.259-2.991-1.126-6.39-.815-6.585-.795l.199 1.99c1.504-.151 5.764-.078 7.754 1.953a63.906 63.906 0 012.002 5.636C25.815 30.025 22.188 30 22 30v2c.047 0 4.499.03 7.134 2.125-.082.602-.134 1.21-.134 1.824v2.103c0 1.351.208 2.672.594 3.952l-5.687-.875c-.3-.046-.603-.077-.907-.099-2.206 0-4-1.808-4-4.029 0-.466.093-.944.275-1.423l.292-.765-.693-.438a3.98 3.98 0 01-1.206-5.583l.623-.936-1.002-.509A5.976 5.976 0 0114 22a6.023 6.023 0 014.349-5.764l.621-.178.093-.639C19.348 13.47 21.041 12 23 12c.037 0 .073.008.109.013.07.01.141.019.212.024l.717.058.282-.662A3.997 3.997 0 0128 9a3.985 3.985 0 013.927 3.301zM14.705 35H14c-2.206 0-4-1.794-4-4 0-.467.093-.945.275-1.422l.293-.765-.693-.438a3.98 3.98 0 01-1.207-5.583l.623-.936-1.002-.509A5.976 5.976 0 015 16a6.023 6.023 0 014.348-5.764l.621-.178.093-.639C10.348 7.47 12.041 6 14 6c.038 0 .075.008.112.013.068.009.136.018.206.024l.72.06.283-.665A3.995 3.995 0 0119 3a3.985 3.985 0 013.927 3.301l.182 1.029 1.02-.227A3.98 3.98 0 0125 7c.46 0 .897.101 1.315.247a5.987 5.987 0 00-3.513 2.756c-2.648.089-4.937 1.958-5.593 4.504C14.113 15.662 12 18.659 12 22a7.955 7.955 0 003.499 6.608A5.952 5.952 0 0015 31c0 1.8.8 3.473 2.173 4.607-.115.464-.173.93-.173 1.393 0 1.757.756 3.336 1.953 4.438-.594.172-1.165.395-1.713.66zM6 48.198v-.396c0-.502.486-.889.977-.783l4.759 1.058c-.116.302-.22.609-.309.923H6.802A.803.803 0 016 48.198zM3 52c0-.551.449-1 1-1H11.05c-.029.33-.05.662-.05 1s.021.67.051 1H4c-.551 0-1-.449-1-1zm3.975 4.981c-.474.102-.975-.282-.975-.783v-.396c0-.442.36-.802.802-.802h4.624c.089.314.194.621.309.923zM61 52a3.643 3.643 0 01-3.105 3.62l-34.29 5.275a9.02 9.02 0 01-1.37.105H22c-4.962 0-9-4.038-9-9s4.038-9 9-9h.235c.455 0 .916.035 1.369.104l34.29 5.275c1.8.278 3.106 1.8 3.106 3.621zm0-13.949c0 3.076-1.245 6.052-3.411 8.258l-1.987-.306A14.344 14.344 0 0057 39.836v-3.673c0-3.554-1.354-6.965-3.68-9.553a2.21 2.21 0 012.845-.174C59.192 28.67 61 32.227 61 35.949z"
        ></path>
        <path fill={color1} d="M21 47h2v10h-2zM29 47h2v10h-2zM37 47h2v10h-2zM45 49h2v6h-2zM53 50h2v4h-2z"></path>
      </g>
    </svg>
  )
}
