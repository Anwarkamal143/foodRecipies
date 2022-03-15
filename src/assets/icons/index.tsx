import { DetailedHTMLProps, ImgHTMLAttributes, SVGProps } from "react"
export type IconType = SVGProps<SVGSVGElement>
// import Profile from "../images/profile.jpg"

export const Spinner = ({
  color = "#fff",
  width = "64px",
  height = "64px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.0"
      width={width}
      height={height}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M64 128A64 64 0 0 1 18.34 19.16L21.16 22a60 60 0 1 0 52.8-17.17l.62-3.95A64 64 0 0 1 64 128z"
          fill={color}
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1800ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  )
}
export function Loading(props: IconType) {
  const { width = "1em", height = "1em", ...rest } = props

  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      width={width}
      height={width}
      fill="currentColor"
      {...rest}
    >
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
    </svg>
  )
}

export function EnvelopIcon(props: IconType) {
  const { width = 30, height = 20, fill = "AEAEAE", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 20"
      fill="none"
      {...rest}
    >
      <path
        d="M29.4499 16.0567C29.4452 18.2914 27.7644 19.9492 25.5222 19.9499C18.3344 19.9499 11.1471 19.9499 3.9602 19.9499C1.72545 19.9499 0.0324513 18.3571 0.017553 16.1136C-0.0149525 12.0124 0.00536341 7.91065 0.017553 3.80954C0.017553 3.44453 0.11236 3.07952 0.176017 2.61903L14.731 14.7497L29.2908 2.61768C29.3517 3.10323 29.4465 3.51225 29.4472 3.92128C29.4571 7.96641 29.4581 12.0115 29.4499 16.0567Z"
        fill={fill}
      />
      <path
        d="M28.1413 0.991697L14.7327 12.1702C10.2673 8.44742 5.79779 4.72283 1.32422 0.996438C1.9425 0.461452 2.62444 0.111341 3.40795 0.0828987C4.73526 0.0354949 6.06595 0.0463288 7.39462 0.0456516C13.4108 0.0424913 19.4268 0.0411371 25.4426 0.0415886C26.3121 0.0415886 27.1146 0.234591 27.8277 0.745198C27.9252 0.815627 28.0214 0.896889 28.1413 0.991697Z"
        fill={fill}
      />
    </svg>
  )
}
export function RoundArrowIcon(props: IconType) {
  const { width = 44, height = 42, ...rest } = props
  return (
    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" {...rest}>
      <path
        d="M35.0036 35.3074L41.0623 40.7802C40.6322 40.8955 40.1943 40.9794 39.7521 41.0314C33.9573 41.0314 28.1626 41.0314 22.3903 41.0314C21.4793 41.0314 20.8386 40.9766 20.8451 39.7984C20.8708 34.4414 20.8451 29.0813 20.8451 23.7243C20.901 23.4786 20.9943 23.243 21.1219 23.0257L26.2084 27.5006C31.2145 24.9058 33.1203 19.8032 30.7476 15.544C28.9577 12.3247 25.6289 10.8728 21.8591 11.6487C18.5626 12.328 16.0096 15.4153 15.8422 19.4491C15.6233 24.6386 15.6684 29.8378 15.6104 35.0338C15.5911 36.5887 15.5686 38.1436 15.6104 39.6953C15.6459 40.703 15.3271 41.1569 14.2487 41.1408C11.4586 41.0936 8.66852 41.0936 5.87845 41.1408C4.7871 41.1601 4.49415 40.6837 4.51024 39.6921C4.54887 37.3356 4.46839 34.9758 4.54887 32.6096C4.59394 31.3444 4.17545 30.839 2.89738 30.9646C2.02817 31.0483 1.14286 30.9806 0 30.9806C1.03984 27.903 2.00883 25.1859 2.85873 22.4623C3.96296 18.8986 4.74203 15.2157 6.07805 11.7356C8.50219 5.37102 15.4366 -0.700606 25.7899 0.0655908C33.0398 0.599997 40.1062 6.1533 42.1698 13.4933C44.4233 21.5803 42.3983 28.4921 36.0981 34.0969C35.7762 34.3802 35.4543 34.6603 35.1324 34.9468C35.1163 34.9984 35.1098 35.0595 35.0036 35.3074Z"
        fill="white"
      />
    </svg>
  )
}
export function AddIcon(props: IconType) {
  const { width = 24, height = 24, stroke = "#E0464D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6 12H18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function FilterIcon(props: IconType) {
  const { width = 18, stroke = "#7474A9", height = 18, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.5 4.875H12"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 4.875H1.5"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5C8.94975 7.5 10.125 6.32475 10.125 4.875C10.125 3.42525 8.94975 2.25 7.5 2.25C6.05025 2.25 4.875 3.42525 4.875 4.875C4.875 6.32475 6.05025 7.5 7.5 7.5Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 13.125H13.5"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13.125H1.5"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 15.75C11.9497 15.75 13.125 14.5747 13.125 13.125C13.125 11.6753 11.9497 10.5 10.5 10.5C9.05025 10.5 7.875 11.6753 7.875 13.125C7.875 14.5747 9.05025 15.75 10.5 15.75Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function DownArrowIcon(props: IconType) {
  const { width = 12, height = 12, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9337 4.03919C8.73843 3.84393 8.42185 3.84393 8.22659 4.03919L6.0465 6.21925L3.92892 4.10167C3.73366 3.90641 3.41708 3.90641 3.22182 4.10167L2.86826 4.45522C2.673 4.65049 2.673 4.96707 2.86826 5.16233L5.69669 7.99076C5.89195 8.18602 6.20853 8.18602 6.4038 7.99076L6.75735 7.63721C6.77489 7.61966 6.79086 7.60114 6.80525 7.58181L9.28725 5.09984C9.48252 4.90458 9.48252 4.588 9.28725 4.39274L8.9337 4.03919Z"
        fill={fill}
      />
    </svg>
  )
}
export function FacebookIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.93133 13.9981V8.53411H10.7747L11.0487 6.39478H8.93133V5.03211C8.93133 4.41478 9.10333 3.99211 9.98933 3.99211H11.112V2.08478C10.5658 2.02624 10.0167 1.99797 9.46733 2.00011C7.838 2.00011 6.71933 2.99478 6.71933 4.82078V6.39078H4.888V8.53011H6.72333V13.9981H8.93133Z"
        fill={fill}
      />
    </svg>
  )
}
export function YoutubeIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.3953 4.80217C14.3194 4.52044 14.171 4.2635 13.9649 4.05695C13.7588 3.85039 13.5022 3.70141 13.2207 3.62483C12.1767 3.33817 8.00001 3.3335 8.00001 3.3335C8.00001 3.3335 3.82401 3.32883 2.77934 3.60283C2.49796 3.68293 2.24189 3.83402 2.03572 4.04159C1.82955 4.24916 1.6802 4.50625 1.60201 4.78817C1.32667 5.83217 1.32401 7.9975 1.32401 7.9975C1.32401 7.9975 1.32134 10.1735 1.59467 11.2068C1.74801 11.7782 2.19801 12.2295 2.77001 12.3835C3.82467 12.6702 7.99001 12.6748 7.99001 12.6748C7.99001 12.6748 12.1667 12.6795 13.2107 12.4062C13.4923 12.3297 13.7492 12.1811 13.9558 11.975C14.1624 11.7688 14.3116 11.5123 14.3887 11.2308C14.6647 10.1875 14.6667 8.02283 14.6667 8.02283C14.6667 8.02283 14.68 5.84617 14.3953 4.80217ZM6.66401 10.0035L6.66734 6.0035L10.1387 8.00683L6.66401 10.0035Z"
        fill={fill}
      />
    </svg>
  )
}
export function TwitterIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.0887 5.3312C13.0973 5.44787 13.0973 5.56387 13.0973 5.67987C13.0973 9.22987 10.3953 13.3205 5.45734 13.3205C3.93601 13.3205 2.52268 12.8799 1.33334 12.1145C1.54934 12.1392 1.75734 12.1479 1.98201 12.1479C3.19067 12.1508 4.36511 11.7466 5.31601 11.0005C4.75562 10.9904 4.21239 10.8055 3.76217 10.4717C3.31194 10.1379 2.9772 9.6718 2.80468 9.13853C2.97068 9.1632 3.13734 9.17987 3.31201 9.17987C3.55268 9.17987 3.79468 9.14653 4.01934 9.08853C3.41118 8.96574 2.86433 8.6361 2.47176 8.15566C2.07919 7.67521 1.86514 7.07363 1.86601 6.4532V6.41987C2.22401 6.6192 2.63934 6.74387 3.07934 6.76053C2.71074 6.51559 2.40849 6.18322 2.19957 5.79306C1.99065 5.40291 1.88155 4.9671 1.88201 4.52453C1.88201 4.02587 2.01468 3.56853 2.24734 3.16987C2.9221 3.99988 3.76368 4.67891 4.71757 5.16297C5.67146 5.64704 6.71638 5.92534 7.78468 5.97987C7.74334 5.77987 7.71801 5.57253 7.71801 5.36453C7.71783 5.01184 7.78717 4.66257 7.92206 4.33669C8.05695 4.01081 8.25474 3.71472 8.50414 3.46532C8.75353 3.21593 9.04962 3.01814 9.3755 2.88325C9.70138 2.74836 10.0507 2.67902 10.4033 2.6792C11.1767 2.6792 11.8747 3.0032 12.3653 3.5272C12.9665 3.41094 13.543 3.19148 14.0693 2.87853C13.869 3.49908 13.4492 4.02527 12.8887 4.35853C13.4219 4.29772 13.943 4.1575 14.4347 3.94253C14.0674 4.47793 13.6124 4.94743 13.0887 5.3312Z"
        fill={fill}
      />
    </svg>
  )
}
export function InstagramIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.9647 5.53664C13.9579 5.03172 13.8634 4.53182 13.6853 4.0593C13.5309 3.66074 13.295 3.29877 12.9928 2.99653C12.6905 2.69428 12.3286 2.45841 11.93 2.30397C11.4635 2.12888 10.9708 2.0342 10.4727 2.02397C9.83132 1.9953 9.62799 1.9873 7.99999 1.9873C6.37199 1.9873 6.16332 1.9873 5.52665 2.02397C5.02876 2.03427 4.53622 2.12895 4.06999 2.30397C3.67136 2.4583 3.30933 2.69413 3.00707 2.99639C2.70482 3.29865 2.46898 3.66068 2.31465 4.0593C2.13921 4.52539 2.04473 5.01804 2.03532 5.51597C2.00665 6.15797 1.99799 6.3613 1.99799 7.9893C1.99799 9.6173 1.99799 9.8253 2.03532 10.4626C2.04532 10.9613 2.13932 11.4533 2.31465 11.9206C2.46924 12.3191 2.70525 12.681 3.00761 12.9832C3.30997 13.2853 3.67203 13.521 4.07065 13.6753C4.53561 13.8574 5.02823 13.9589 5.52732 13.9753C6.16932 14.004 6.37265 14.0126 8.00065 14.0126C9.62865 14.0126 9.83732 14.0126 10.474 13.9753C10.9721 13.9655 11.4649 13.871 11.9313 13.696C12.3298 13.5414 12.6917 13.3054 12.9939 13.0032C13.2961 12.701 13.532 12.3391 13.6867 11.9406C13.862 11.474 13.956 10.982 13.966 10.4826C13.9947 9.8413 14.0033 9.63797 14.0033 8.0093C14.002 6.3813 14.002 6.17464 13.9647 5.53664ZM7.99599 11.068C6.29332 11.068 4.91399 9.68864 4.91399 7.98597C4.91399 6.2833 6.29332 4.90397 7.99599 4.90397C8.81338 4.90397 9.5973 5.22868 10.1753 5.80667C10.7533 6.38466 11.078 7.16857 11.078 7.98597C11.078 8.80337 10.7533 9.58729 10.1753 10.1653C9.5973 10.7433 8.81338 11.068 7.99599 11.068ZM11.2007 5.50864C11.1063 5.50873 11.0128 5.4902 10.9255 5.45411C10.8383 5.41803 10.759 5.36509 10.6923 5.29834C10.6255 5.23159 10.5726 5.15233 10.5365 5.0651C10.5004 4.97786 10.4819 4.88437 10.482 4.78997C10.482 4.69564 10.5006 4.60223 10.5367 4.51508C10.5728 4.42792 10.6257 4.34874 10.6924 4.28203C10.7591 4.21533 10.8383 4.16242 10.9254 4.12632C11.0126 4.09022 11.106 4.07164 11.2003 4.07164C11.2947 4.07164 11.3881 4.09022 11.4752 4.12632C11.5624 4.16242 11.6416 4.21533 11.7083 4.28203C11.775 4.34874 11.8279 4.42792 11.864 4.51508C11.9001 4.60223 11.9187 4.69564 11.9187 4.78997C11.9187 5.1873 11.5973 5.50864 11.2007 5.50864Z"
        fill={fill}
      />
      <path
        d="M7.99602 9.98789C9.10169 9.98789 9.99802 9.09156 9.99802 7.98589C9.99802 6.88021 9.10169 5.98389 7.99602 5.98389C6.89034 5.98389 5.99402 6.88021 5.99402 7.98589C5.99402 9.09156 6.89034 9.98789 7.99602 9.98789Z"
        fill={fill}
      />
    </svg>
  )
}
export function HeartIcon(props: IconType) {
  const {
    width = 30,
    height = 30,
    fill = "none",
    stroke = "#7474A9",
    ...rest
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_d_158_3957)">
        <path
          d="M15.62 20.8096C15.28 20.9296 14.72 20.9296 14.38 20.8096C11.48 19.8196 5 15.6896 5 8.68961C5 5.59961 7.49 3.09961 10.56 3.09961C12.38 3.09961 13.99 3.97961 15 5.33961C16.01 3.97961 17.63 3.09961 19.44 3.09961C22.51 3.09961 25 5.59961 25 8.68961C25 15.6896 18.52 19.8196 15.62 20.8096Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_158_3957"
          x="-1"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_3957"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_3957"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export function ExportIcon(props: IconType) {
  const {
    width = 16,
    height = 16,

    stroke = "#1E1E2D",
    ...rest
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.21333 4.33362L7.92 2.62695L9.62667 4.33362"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.92 9.45285V2.67285"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66667 8C2.66667 10.9467 4.66667 13.3333 8 13.3333C11.3333 13.3333 13.3333 10.9467 13.3333 8"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function LikeIcon(props: IconType) {
  const {
    width = 16,
    height = 16,

    stroke = "#11C278",
    ...rest
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.98666 12.2336L7.05333 13.8336C7.32 14.1003 7.92 14.2336 8.32 14.2336H10.8533C11.6533 14.2336 12.52 13.6336 12.72 12.8336L14.32 7.96697C14.6533 7.03364 14.0533 6.23364 13.0533 6.23364H10.3867C9.98666 6.23364 9.65333 5.9003 9.72 5.43364L10.0533 3.3003C10.1867 2.7003 9.78666 2.03364 9.18666 1.83364C8.65333 1.63364 7.98666 1.9003 7.72 2.3003L4.98666 6.36697"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M1.58667 12.2336V5.70026C1.58667 4.76693 1.98667 4.43359 2.92 4.43359H3.58667C4.52 4.43359 4.92 4.76693 4.92 5.70026V12.2336C4.92 13.1669 4.52 13.5003 3.58667 13.5003H2.92C1.98667 13.5003 1.58667 13.1669 1.58667 12.2336Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function DisLikeIcon(props: IconType) {
  const {
    width = 16,
    height = 16,

    stroke = "#E0464D",
    ...rest
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.0133 3.7666L8.94665 2.1666C8.67998 1.89993 8.07998 1.7666 7.67998 1.7666H5.14665C4.34665 1.7666 3.47998 2.3666 3.27998 3.1666L1.67998 8.03327C1.34665 8.9666 1.94665 9.7666 2.94665 9.7666H5.61332C6.01332 9.7666 6.34665 10.0999 6.27998 10.5666L5.94665 12.6999C5.81332 13.2999 6.21332 13.9666 6.81332 14.1666C7.34665 14.3666 8.01332 14.0999 8.27998 13.6999L11.0133 9.63327"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M14.4133 3.76667V10.3C14.4133 11.2333 14.0133 11.5667 13.08 11.5667H12.4133C11.48 11.5667 11.08 11.2333 11.08 10.3V3.76667C11.08 2.83333 11.48 2.5 12.4133 2.5H13.08C14.0133 2.5 14.4133 2.83333 14.4133 3.76667Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function StarFillIcon(props: IconType) {
  const {
    width = 14,
    height = 15,

    // stroke = "#7474A9",
    fill = "#EFA330",
    ...rest
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.20918 1.73493L9.42805 4.12782C9.59503 4.45626 10.0312 4.77772 10.3971 4.83162L12.5739 5.18082C13.9678 5.40137 14.295 6.40706 13.307 7.41517L11.624 9.12271C11.343 9.40889 11.1832 9.96767 11.2789 10.3582L11.7769 12.4528C12.1685 14.1066 11.2948 14.7567 9.82737 13.9011L7.77752 12.7055C7.40421 12.487 6.79912 12.4964 6.43398 12.715L4.40239 13.934C2.9481 14.8053 2.06321 14.169 2.43222 12.5114L2.90391 10.4138C2.99198 10.0217 2.83175 9.46488 2.54556 9.1839L0.828442 7.49801C-0.173417 6.50666 0.139506 5.49705 1.52772 5.25503L3.69526 4.8787C4.06117 4.81216 4.49344 4.49353 4.65275 4.15979L5.83883 1.74571C6.48649 0.445344 7.55123 0.439908 8.20918 1.73493Z"
        fill={fill}
      />
    </svg>
  )
}
export function ChevronDownSVG(props: IconType) {
  // const { width = 30, height = 30, ...rest } = props
  return (
    <svg
      className="w-5 h-5 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 10.75L12 14.25L8.75 10.75"
      ></path>
    </svg>
  )
}
export function SearchSVG(props: IconType) {
  // const { width = 30, height = 30, ...rest } = props
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
      ></path>
    </svg>
  )
}

export function NavHeaderBtnSVG(props: IconType) {
  // const { width = 30, height = 30, ...rest } = props
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
export function NavHeaderToggleSVG(props: IconType) {
  // const { width = 30, height = 30, ...rest } = props
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.25 6.75L4.75 12L10.25 17.25"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.25 12H5"
      ></path>
    </svg>
  )
}
export function DashboardIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  // const { width = 18, height = 18, stroke = "#E0464D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function PerformanceIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.5 9.75V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H9.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4975 10.8675L7.2825 8.55C7.5375 8.22 8.01 8.16 8.34 8.415L9.71252 9.495C10.0425 9.75 10.515 9.69 10.77 9.3675L12.5025 7.1325"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.61 11.865L14.82 12.2925C14.925 12.5025 15.1875 12.6975 15.42 12.7425L15.705 12.7875C16.56 12.93 16.7625 13.56 16.1475 14.1825L15.885 14.445C15.7125 14.625 15.615 14.97 15.6675 15.21L15.705 15.3675C15.9375 16.4025 15.39 16.8 14.49 16.26L14.295 16.1475C14.0625 16.0125 13.6875 16.0125 13.455 16.1475L13.26 16.26C12.3525 16.8075 11.805 16.4025 12.045 15.3675L12.0825 15.21C12.135 14.97 12.0375 14.625 11.865 14.445L11.6025 14.1825C10.9875 13.56 11.19 12.93 12.045 12.7875L12.33 12.7425C12.555 12.705 12.825 12.5025 12.93 12.2925L13.14 11.865C13.545 11.0475 14.205 11.0475 14.61 11.865Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function NotificationsIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 4.83V7.3275"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M9.01502 1.5C6.25502 1.5 4.02001 3.735 4.02001 6.495V8.07C4.02001 8.58 3.81001 9.345 3.54751 9.78L2.59501 11.37C2.01001 12.3525 2.41501 13.4475 3.49501 13.8075C7.08001 15 10.9575 15 14.5425 13.8075C15.555 13.47 15.99 12.285 15.4425 11.37L14.49 9.78C14.2275 9.345 14.0175 8.5725 14.0175 8.07V6.495C14.01 3.75 11.76 1.5 9.01502 1.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M11.4975 14.115C11.4975 15.4875 10.3725 16.6125 9 16.6125C8.3175 16.6125 7.6875 16.3275 7.2375 15.8775C6.7875 15.4275 6.5025 14.7975 6.5025 14.115"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  )
}
export function RecipesIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.3425 7.8525V13.3425C13.3425 15.09 11.925 16.5 10.185 16.5H4.6575C2.9175 16.5 1.5 15.0825 1.5 13.3425V7.8525C1.5 6.105 2.9175 4.695 4.6575 4.695H10.185C11.925 4.695 13.3425 6.1125 13.3425 7.8525Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.125 3V1.6875"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 3V1.6875"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.125 3V1.6875"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 9.87C16.5 11.61 15.0825 13.0275 13.3425 13.0275V6.7125C15.0825 6.7125 16.5 8.1225 16.5 9.87Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9H13.1325"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function AddCircleIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9H12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12V6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function UserTick(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5575 16.5C2.5575 13.5975 5.44499 11.25 8.99999 11.25C9.71999 11.25 10.4175 11.3475 11.07 11.5275"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 13.5C16.5 14.0625 16.3425 14.595 16.065 15.045C15.9075 15.315 15.705 15.555 15.4725 15.75C14.9475 16.2225 14.2575 16.5 13.5 16.5C12.405 16.5 11.4525 15.915 10.935 15.045C10.6575 14.595 10.5 14.0625 10.5 13.5C10.5 12.555 10.935 11.7075 11.625 11.16C12.1425 10.7475 12.795 10.5 13.5 10.5C15.1575 10.5 16.5 11.8425 16.5 13.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.33 13.5L13.0725 14.2425L14.67 12.765"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function ReserveIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.2275 16.5H3.72751C1.47751 16.5 1.47751 15.4875 1.47751 14.25V13.5C1.47751 13.0875 1.81501 12.75 2.22751 12.75H15.7275C16.14 12.75 16.4775 13.0875 16.4775 13.5V14.25C16.4775 15.4875 16.4775 16.5 14.2275 16.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.54 9.75V12.75H2.45251V9.75C2.45251 6.87 4.48501 4.4625 7.19251 3.885C7.59751 3.795 8.01751 3.75 8.45251 3.75H9.54002C9.97502 3.75 10.4025 3.795 10.8075 3.885C13.515 4.47 15.54 6.87 15.54 9.75Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.875 3.375C10.875 3.555 10.8525 3.72 10.8075 3.885C10.4025 3.795 9.975 3.75 9.54 3.75H8.4525C8.0175 3.75 7.5975 3.795 7.1925 3.885C7.1475 3.72 7.125 3.555 7.125 3.375C7.125 2.34 7.965 1.5 9 1.5C10.035 1.5 10.875 2.34 10.875 3.375Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 8.25H6.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function ProfileCircleIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9.09001 9.58499C9.03751 9.57749 8.97001 9.57749 8.91001 9.58499C7.59001 9.53999 6.54001 8.45999 6.54001 7.13249C6.54001 5.77499 7.63501 4.67249 9.00001 4.67249C10.3575 4.67249 11.46 5.77499 11.46 7.13249C11.4525 8.45999 10.41 9.53999 9.09001 9.58499Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.055 14.535C12.72 15.7575 10.95 16.5 9.00001 16.5C7.05001 16.5 5.28001 15.7575 3.94501 14.535C4.02001 13.83 4.47001 13.14 5.27251 12.6C7.32751 11.235 10.6875 11.235 12.7275 12.6C13.53 13.14 13.98 13.83 14.055 14.535Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function PeoplesIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.5 5.37C13.455 5.3625 13.4025 5.3625 13.3575 5.37C12.3225 5.3325 11.4975 4.485 11.4975 3.435C11.4975 2.3625 12.36 1.5 13.4325 1.5C14.505 1.5 15.3675 2.37 15.3675 3.435C15.36 4.485 14.535 5.3325 13.5 5.37Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7275 10.83C13.755 11.0025 14.8875 10.8225 15.6825 10.29C16.74 9.585 16.74 8.43 15.6825 7.725C14.88 7.1925 13.7325 7.01249 12.705 7.19249"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.47752 5.37C4.52252 5.3625 4.57502 5.3625 4.62002 5.37C5.65502 5.3325 6.48002 4.485 6.48002 3.435C6.48002 2.3625 5.61752 1.5 4.54502 1.5C3.47252 1.5 2.61002 2.37 2.61002 3.435C2.61752 4.485 3.44252 5.3325 4.47752 5.37Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25002 10.83C4.22252 11.0025 3.09002 10.8225 2.29502 10.29C1.23752 9.585 1.23752 8.43 2.29502 7.725C3.09752 7.1925 4.24502 7.01249 5.27252 7.19249"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.9725C8.955 10.965 8.9025 10.965 8.8575 10.9725C7.8225 10.935 6.9975 10.0875 6.9975 9.03751C6.9975 7.96501 7.86 7.10251 8.9325 7.10251C10.005 7.10251 10.8675 7.97251 10.8675 9.03751C10.86 10.0875 10.035 10.9425 9 10.9725Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.81751 13.335C5.76001 14.04 5.76001 15.195 6.81751 15.9C8.01751 16.7025 9.98251 16.7025 11.1825 15.9C12.24 15.195 12.24 14.04 11.1825 13.335C9.99001 12.54 8.01751 12.54 6.81751 13.335Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function SettingsIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9.66001V8.34001C1.5 7.56001 2.1375 6.91501 2.925 6.91501C4.2825 6.91501 4.8375 5.95501 4.155 4.77751C3.765 4.10251 3.9975 3.22501 4.68 2.83501L5.9775 2.09251C6.57 1.74001 7.335 1.95001 7.6875 2.54251L7.77 2.68501C8.445 3.86251 9.555 3.86251 10.2375 2.68501L10.32 2.54251C10.6725 1.95001 11.4375 1.74001 12.03 2.09251L13.3275 2.83501C14.01 3.22501 14.2425 4.10251 13.8525 4.77751C13.17 5.95501 13.725 6.91501 15.0825 6.91501C15.8625 6.91501 16.5075 7.55251 16.5075 8.34001V9.66001C16.5075 10.44 15.87 11.085 15.0825 11.085C13.725 11.085 13.17 12.045 13.8525 13.2225C14.2425 13.905 14.01 14.775 13.3275 15.165L12.03 15.9075C11.4375 16.26 10.6725 16.05 10.32 15.4575L10.2375 15.315C9.5625 14.1375 8.4525 14.1375 7.77 15.315L7.6875 15.4575C7.335 16.05 6.57 16.26 5.9775 15.9075L4.68 15.165C3.9975 14.775 3.765 13.8975 4.155 13.2225C4.8375 12.045 4.2825 11.085 2.925 11.085C2.1375 11.085 1.5 10.44 1.5 9.66001Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function LogoutIcon(props: IconType) {
  const { width = 17, height = 14, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.5 7.3501H2.12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.35 4L1 7.35L4.35 10.7"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.60626 12.1827C6.3627 12.5546 6.46515 13.0583 6.8626 13.2575C7.75724 13.7061 8.74065 13.959 9.74702 13.9954C11.0225 14.0416 12.2863 13.7381 13.4017 13.1179C14.5172 12.4976 15.4418 11.5842 16.0757 10.4765C16.7096 9.36872 17.0285 8.10874 16.998 6.83282C16.9675 5.55689 16.5888 4.31358 15.9027 3.23735C15.2167 2.16112 14.2495 1.29293 13.1057 0.726672C11.9619 0.160419 10.6851 -0.0823454 9.41326 0.0246339C8.40977 0.109044 7.43956 0.408657 6.56736 0.899425C6.17988 1.11745 6.1016 1.62539 6.36264 1.98529C6.62369 2.34519 7.12505 2.41918 7.51979 2.21459C8.14839 1.8888 8.83746 1.68881 9.54821 1.62902C10.5275 1.54665 11.5106 1.73357 12.3914 2.16958C13.2721 2.6056 14.0168 3.2741 14.5451 4.10279C15.0733 4.93148 15.3649 5.88882 15.3884 6.87127C15.4119 7.85372 15.1663 8.8239 14.6782 9.67687C14.1902 10.5298 13.4782 11.2331 12.6193 11.7107C11.7604 12.1883 10.7873 12.4219 9.80521 12.3864C9.09241 12.3606 8.39458 12.1938 7.75114 11.8984C7.34708 11.7129 6.84983 11.8107 6.60626 12.1827Z"
        fill={stroke}
      />
    </svg>
  )
}
export function ProfileTogglerIcon(props: IconType) {
  const { width = 10, height = 20, stroke = "#1D2129", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.29998 13.7292L5.58331 16.4458C5.26248 16.7667 4.73748 16.7667 4.41665 16.4458L1.69998 13.7292"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.7 6.27083L4.41667 3.55416C4.7375 3.23333 5.2625 3.23333 5.58334 3.55416L8.3 6.27083"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function VerticalDots(props: IconType) {
  const { width = 3, height = 15, fill = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 3 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="rotate(90 1.5 1.5)"
        fill={fill}
      />
      <circle
        cx="1.5"
        cy="7.5"
        r="1.5"
        transform="rotate(90 1.5 7.5)"
        fill={fill}
      />
      <circle
        cx="1.5"
        cy="13.5"
        r="1.5"
        transform="rotate(90 1.5 13.5)"
        fill={fill}
      />
    </svg>
  )
}
export function ProgressArrowUp(props: IconType) {
  const { width = 5, height = 5, stroke = "#0E8521", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.75265 1H4V3.25265"
        stroke={stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 1L1 4"
        stroke={stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function ProgressArrowDown(props: IconType) {
  const { width = 5, height = 5, stroke = "#BD0F2E", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4 1.75265L4 4L1.74735 4"
        stroke={stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L1 1"
        stroke={stroke}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function CalendarIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6 1.5V3.75"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.5V3.75"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.625 6.8175H15.375"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.771 10.275H11.7778"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.771 12.525H11.7778"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99661 10.275H9.00335"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99661 12.525H9.00335"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.22073 10.275H6.22747"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.22073 12.525H6.22747"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function EyeIcon(props: IconType) {
  const { width = 18, height = 18, stroke = "#7474A9", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.5097 8.865C11.5097 10.3277 10.3277 11.5097 8.865 11.5097C7.40228 11.5097 6.22028 10.3277 6.22028 8.865C6.22028 7.40228 7.40228 6.22028 8.865 6.22028C10.3277 6.22028 11.5097 7.40228 11.5097 8.865Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86499 14.9745C11.4728 14.9745 13.9033 13.4379 15.595 10.7784C16.2599 9.73673 16.2599 7.98589 15.595 6.94425C13.9033 4.28475 11.4728 2.74815 8.86499 2.74815C6.2572 2.74815 3.82672 4.28475 2.13498 6.94425C1.4701 7.98589 1.4701 9.73673 2.13498 10.7784C3.82672 13.4379 6.2572 14.9745 8.86499 14.9745Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>
export function ProfileImage(props: ImageProps) {
  const { width = 25, height = 25, alt = "Profile img", ...rest } = props
  return (
    <img width={width} height={height} src={props.src} alt={alt} {...rest} />
  )
}
