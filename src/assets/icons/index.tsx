import * as React from "react"
import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  SVGProps
} from "react"
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
export function Ticke() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#7b7b7b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 12L10.58 14.83L16.25 9.17"
        stroke="#7b7b7b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartFilled() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="24"
      height="24"
      fill="none"
    >
      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
    </svg>
  )
}

export function AngleRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      width="16"
      height="16"
      fill="none"
    >
      <path d="M89.45 87.5l143.1 152c4.375 4.625 6.562 10.56 6.562 16.5c0 5.937-2.188 11.87-6.562 16.5l-143.1 152C80.33 434.1 65.14 434.5 55.52 425.4c-9.688-9.125-10.03-24.38-.9375-33.94l128.4-135.5l-128.4-135.5C45.49 110.9 45.83 95.75 55.52 86.56C65.14 77.47 80.33 77.87 89.45 87.5z" />
    </svg>
  )
}

export function LampIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91672 15.0333V14.0667C5.00005 12.9083 3.42505 10.65 3.42505 8.25C3.42505 4.125 7.21672 0.891671 11.5 1.825C13.3834 2.24167 15.0334 3.49167 15.8917 5.21667C17.6334 8.71667 15.8 12.4333 13.1084 14.0583V15.025C13.1084 15.2667 13.2 15.825 12.3084 15.825H7.71672C6.80005 15.8333 6.91672 15.475 6.91672 15.0333Z"
        stroke="#7b7b7b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08337 18.3333C8.99171 17.7916 11.0084 17.7916 12.9167 18.3333"
        stroke="#7b7b7b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const StatusUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M5.08264 13.4083V11.8791"
        stroke="#7b7b7b"
        strokeLinecap="round"
      />
      <path
        d="M8.86499 13.4083V10.3499"
        stroke="#7b7b7b"
        strokeLinecap="round"
      />
      <path
        d="M12.6475 13.4083V8.81329"
        stroke="#7b7b7b"
        strokeLinecap="round"
      />
      <path
        d="M12.6474 4.32169L12.3076 4.72061C10.4238 6.92209 7.89728 8.48085 5.08264 9.18266"
        stroke="#7b7b7b"
        strokeLinecap="round"
      />
      <path
        d="M10.4829 4.32169H12.6474V6.47884"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.64879 16.2525H11.0813C14.775 16.2525 16.2525 14.775 16.2525 11.0813V6.64875C16.2525 2.955 14.775 1.4775 11.0813 1.4775H6.64879C2.95504 1.4775 1.47754 2.955 1.47754 6.64875V11.0813C1.47754 14.775 2.95504 16.2525 6.64879 16.2525Z"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Clock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.6666 7.99998C14.6666 11.68 11.68 14.6666 7.99998 14.6666C4.31998 14.6666 1.33331 11.68 1.33331 7.99998C1.33331 4.31998 4.31998 1.33331 7.99998 1.33331C11.68 1.33331 14.6666 4.31998 14.6666 7.99998Z"
        stroke="#e0464d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4734 10.12L8.40669 8.88665C8.04669 8.67332 7.75336 8.15999 7.75336 7.73999V5.00665"
        stroke="#e0464d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M11.3694 3.84889L12.4111 5.93216C12.5514 6.22027 12.9282 6.49361 13.2458 6.55271L15.1297 6.86298C16.3338 7.06244 16.6146 7.93417 15.7502 8.8059L14.2801 10.276C14.0363 10.5198 13.896 11 13.9772 11.3472L14.3983 13.1645C14.7307 14.5977 13.9624 15.1591 12.6992 14.4056L10.9336 13.3566C10.6159 13.1645 10.084 13.1645 9.76634 13.3566L8.00072 14.4056C6.73746 15.1518 5.96917 14.5977 6.3016 13.1645L6.7227 11.3472C6.80396 11.0074 6.66359 10.5272 6.41981 10.276L4.9497 8.8059C4.08536 7.94156 4.36609 7.06983 5.57025 6.86298L7.45405 6.55271C7.77171 6.50099 8.14848 6.22027 8.28884 5.93216L9.33048 3.84889C9.88455 2.7186 10.8006 2.7186 11.3694 3.84889Z"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.91004 3.69375H1.47754"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.69379 14.0362H1.47754"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.21629 8.865H1.47754"
        stroke="#7b7b7b"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Save = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9.52254 4.34385H3.77504C2.51178 4.34385 1.47754 5.37809 1.47754 6.64135V15.0336C1.47754 16.1048 2.24584 16.5628 3.18405 16.0383L6.08733 14.4204C6.39761 14.2505 6.89996 14.2505 7.20285 14.4204L10.1061 16.0383C11.0443 16.5628 11.8126 16.1048 11.8126 15.0336V6.64135C11.82 5.37809 10.7858 4.34385 9.52254 4.34385Z"
        stroke="#E0464D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.82 6.64135V15.0336C11.82 16.1048 11.0517 16.5554 10.1135 16.0383L7.21025 14.4204C6.89997 14.2505 6.39761 14.2505 6.08733 14.4204L3.18405 16.0383C2.24584 16.5554 1.47754 16.1048 1.47754 15.0336V6.64135C1.47754 5.37809 2.51178 4.34385 3.77504 4.34385H9.52254C10.7858 4.34385 11.82 5.37809 11.82 6.64135Z"
        stroke="#E0464D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2525 3.775V12.1672C16.2525 13.2384 15.4842 13.689 14.546 13.1719L11.82 11.6501V6.64136C11.82 5.37809 10.7858 4.34385 9.52253 4.34385H5.91003V3.775C5.91003 2.51174 6.94427 1.4775 8.20754 1.4775H13.955C15.2183 1.4775 16.2525 2.51174 16.2525 3.775Z"
        stroke="#E0464D"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  const { width = 18, stroke = "#7b7b7b", height = 18, ...rest } = props
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
  const { width = 12, height = 12, fill = "#7b7b7b", ...rest } = props
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
export function Loader(props: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="#F1F4FB" />
      <path
        d="M5.85786 34.1421C8.18355 36.4678 11.0469 38.1841 14.1943 39.1388C17.3417 40.0936 20.676 40.2574 23.9018 39.6157C27.1276 38.974 30.1454 37.5467 32.6879 35.4602C35.2303 33.3737 37.2189 30.6923 38.4776 27.6537C39.7362 24.615 40.2261 21.3128 39.9037 18.0397C39.5813 14.7665 38.4567 11.6233 36.6294 8.8886C34.8021 6.15388 32.3286 3.91201 29.4279 2.36158C26.5273 0.811142 23.289 2.48314e-07 20 0V2.26562C22.9164 2.26562 25.7879 2.98487 28.3599 4.35967C30.932 5.73447 33.1253 7.72238 34.7456 10.1473C36.3659 12.5722 37.3631 15.3593 37.649 18.2617C37.9348 21.1641 37.5005 24.0922 36.3844 26.7867C35.2684 29.4811 33.505 31.8587 31.2506 33.7089C28.9961 35.559 26.3202 36.8247 23.4598 37.3936C20.5994 37.9626 17.6428 37.8173 14.852 36.9707C12.0611 36.1241 9.52213 34.6023 7.4599 32.5401L5.85786 34.1421Z"
        fill="#7b7b7b"
      />
      <path
        d="M28.9664 32.0252C31.4901 30.1434 33.3578 27.5152 34.305 24.513C35.2522 21.5108 35.2307 18.2866 34.2437 15.2972C33.2568 12.3079 31.3543 9.70479 28.8057 7.85671C26.2572 6.00863 23.1917 5.00923 20.0437 5.00006L20.037 7.28752C22.705 7.29528 25.303 8.14228 27.4629 9.70853C29.6228 11.2748 31.2351 13.4809 32.0716 16.0144C32.9081 18.5479 32.9262 21.2804 32.1235 23.8248C31.3208 26.3692 29.7379 28.5965 27.599 30.1914L28.9664 32.0252Z"
        fill="#11C278"
      />
    </svg>
  )
}
export function FacebookIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7b7b7b", ...rest } = props
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
  const { width = 16, height = 16, fill = "#7b7b7b", ...rest } = props
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
  const { width = 16, height = 16, fill = "#7b7b7b", ...rest } = props
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
export function Tag(props: IconType) {
  const { width = 16, height = 16, fill = "none", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      fill={fill}
      {...rest}
    >
      <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
    </svg>
  )
}
export function InstagramIcon(props: IconType) {
  const { width = 16, height = 16, fill = "#7b7b7b", ...rest } = props
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
    stroke = "#7b7b7b",
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

    // stroke = "#7b7b7b",
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 17, height = 14, stroke = "#7b7b7b", ...rest } = props
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
export const VerticalDots = forwardRef((props: IconType, ref) => {
  const { width = 3, height = 15, fill = "#7b7b7b", ...rest } = props
  return (
    <svg
      ref={ref as any}
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
})
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
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
export const LeftSliderArrow = (props: IconType) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 443.52 443.52"
      enableBackground="new 0 0 443.52 443.52;"
      xmlSpace="preserve"
      fill="currentColor"
      {...props}
    >
      <g>
        <g>
          <path
            d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
			c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
			L143.492,221.863z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}
export const RightSliderArrow = (props: IconType) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 443.52 443.52"
      enableBackground="new 0 0 443.52 443.52;"
      xmlSpace="preserve"
      fill="currentColor"
      {...props}
    >
      <g>
        <g>
          <path
            d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734
			L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8
			C342.889,227.058,342.889,216.255,336.226,209.591z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

export function AttachmentIcon(props: IconType) {
  const { width = 19, height = 19, fill = "#1E1E2D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.32238 4.99979C9.04831 4.27386 9.77214 3.55003 10.4981 2.8241C10.6806 2.64157 10.8652 2.46113 11.0709 2.30169C11.0142 2.34575 10.9576 2.38981 10.9009 2.43387C11.1842 2.21777 11.4905 2.03733 11.8178 1.89887C11.7506 1.92615 11.6835 1.95552 11.6163 1.98279C11.9646 1.83593 12.3297 1.73732 12.7031 1.68487C12.6297 1.69536 12.5542 1.70585 12.4807 1.71424C12.8626 1.66389 13.2465 1.66389 13.6284 1.71424C13.5549 1.70375 13.4794 1.69326 13.406 1.68487C13.7794 1.73732 14.1445 1.83593 14.4928 1.98279C14.4256 1.95552 14.3585 1.92614 14.2914 1.89887C14.6187 2.03944 14.9271 2.21778 15.2082 2.43387C15.1515 2.38981 15.0949 2.34575 15.0382 2.30169C15.3215 2.52199 15.5775 2.77584 15.7978 3.05908C15.7537 3.00243 15.7096 2.94579 15.6656 2.88914C15.888 3.17867 16.0726 3.49338 16.2153 3.82907C16.188 3.76193 16.1586 3.69479 16.1313 3.62766C16.2782 3.97803 16.3768 4.34308 16.4272 4.71867C16.4167 4.64524 16.4062 4.56971 16.3978 4.49627C16.446 4.86973 16.446 5.24738 16.3978 5.62082C16.4083 5.54738 16.4188 5.47185 16.4272 5.39842C16.3747 5.77398 16.2761 6.14112 16.1292 6.48943C16.1565 6.4223 16.1859 6.35516 16.2132 6.28802C16.0684 6.62371 15.8838 6.93842 15.6614 7.22795C15.7054 7.1713 15.7495 7.11466 15.7935 7.05801C15.4914 7.44403 15.118 7.77972 14.7718 8.12593C14.3228 8.57491 13.8759 9.02182 13.4269 9.4708C13.3199 9.5778 13.215 9.6827 13.108 9.7897C12.7975 10.1002 12.7744 10.6709 13.108 10.9772C13.4437 11.2856 13.964 11.3087 14.2955 10.9772C14.9522 10.3205 15.6089 9.66383 16.2635 9.00921C16.6684 8.60427 17.0629 8.20145 17.3671 7.70842C17.9503 6.76431 18.2147 5.59776 18.0762 4.49627C17.9986 3.87315 17.8349 3.29826 17.5538 2.73599C17.3041 2.23663 16.9537 1.77296 16.5488 1.39112C15.8271 0.709261 14.8935 0.220381 13.9074 0.0756315C13.6325 0.0357668 13.3598 9.91275e-05 13.0828 9.91275e-05C12.8059 -0.00199892 12.531 0.0294719 12.2562 0.0693358C11.7631 0.138572 11.2995 0.295925 10.8484 0.505733C10.261 0.776384 9.76161 1.18759 9.30841 1.6429C8.60135 2.34996 7.8964 3.05491 7.18938 3.76193C7.1705 3.78081 7.15161 3.79969 7.13273 3.81858C6.82222 4.12909 6.79914 4.69977 7.13273 5.00608C7.47052 5.3082 7.99083 5.33128 8.32234 4.99978L8.32238 4.99979Z"
        fill={fill}
      />
      <path
        d="M9.79946 13.1003C9.07352 13.8263 8.3497 14.5501 7.62376 15.276C7.44123 15.4585 7.2566 15.639 7.05098 15.7984C7.10763 15.7544 7.16427 15.7103 7.22092 15.6663C6.93768 15.8824 6.63137 16.0628 6.30408 16.2012C6.37122 16.174 6.43836 16.1446 6.5055 16.1173C6.15722 16.2642 5.79426 16.3628 5.4187 16.4152C5.49214 16.4048 5.56767 16.3943 5.6411 16.3859C5.25925 16.4362 4.87531 16.4362 4.49346 16.3859C4.5669 16.3964 4.64242 16.4069 4.71586 16.4152C4.3424 16.3628 3.97734 16.2642 3.62907 16.1173C3.6962 16.1446 3.76334 16.174 3.83048 16.2012C3.50318 16.0607 3.19685 15.8823 2.91364 15.6663C2.97029 15.7103 3.02694 15.7544 3.08359 15.7984C2.79405 15.5739 2.5339 15.3138 2.30939 15.0242C2.35345 15.0809 2.39751 15.1375 2.44157 15.1942C2.22547 14.9109 2.04714 14.6046 1.90657 14.2773C1.93385 14.3445 1.96322 14.4116 1.99049 14.4788C1.84363 14.1305 1.74502 13.7675 1.69257 13.392C1.70306 13.4654 1.71355 13.5409 1.72194 13.6144C1.67159 13.2325 1.67159 12.8486 1.72194 12.4667C1.71145 12.5401 1.70096 12.6157 1.69257 12.6891C1.74502 12.3157 1.84363 11.9506 1.99049 11.6023C1.96322 11.6695 1.93384 11.7366 1.90657 11.8037C2.04714 11.4764 2.22548 11.1701 2.44157 10.8869C2.39751 10.9435 2.35345 11.0002 2.30939 11.0568C2.60731 10.6729 2.97448 10.3414 3.31646 9.99943C3.76962 9.54627 4.22493 9.09096 4.6781 8.6378C4.7872 8.5287 4.89839 8.4175 5.00749 8.3084C5.31801 7.99789 5.34108 7.42721 5.00749 7.1209C4.6718 6.81249 4.1515 6.78941 3.81999 7.1209C3.14443 7.79647 2.46883 8.47207 1.79115 9.14974C1.37363 9.56726 0.972914 9.99315 0.674975 10.5114C0.175621 11.3821 -0.0719458 12.4269 0.0182878 13.4298C0.0644443 13.9354 0.160958 14.4284 0.353978 14.8984C0.578472 15.446 0.863805 15.9265 1.24987 16.3776C1.91285 17.1559 2.85907 17.7224 3.85356 17.9595C4.82917 18.1903 5.89709 18.1483 6.83702 17.7811C7.10557 17.6762 7.36994 17.5608 7.61751 17.4161C7.86928 17.2692 8.10217 17.0951 8.32664 16.9104C8.4798 16.7867 8.61827 16.6503 8.75675 16.5118L10.922 14.3466C10.9409 14.3277 10.9618 14.3067 10.9807 14.2878C11.2912 13.9773 11.3143 13.4066 10.9807 13.1003C10.6513 12.794 10.131 12.7688 9.79951 13.1003L9.79946 13.1003Z"
        fill={fill}
      />
      <path
        d="M5.57414 13.7238C5.84479 13.4531 6.11753 13.1804 6.3882 12.9097C7.03859 12.2593 7.6911 11.6068 8.34149 10.9564C9.12616 10.1717 9.91083 9.38706 10.6955 8.60239C11.3732 7.92472 12.0508 7.24705 12.7306 6.56726C13.06 6.23787 13.3957 5.91269 13.7209 5.577C13.7251 5.5728 13.7293 5.5686 13.7356 5.56231C14.0461 5.25179 14.0692 4.68111 13.7356 4.37481C13.3999 4.06639 12.8796 4.04332 12.5481 4.37481C12.2774 4.64546 12.0047 4.91821 11.734 5.18887C11.0836 5.83926 10.4311 6.49177 9.78073 7.14216C8.99606 7.92684 8.21139 8.71151 7.42672 9.49618C6.74905 10.1739 6.07137 10.8515 5.39159 11.5313C5.0622 11.8607 4.7265 12.1859 4.40132 12.5216C4.39713 12.5258 4.39293 12.53 4.38664 12.5363C4.07612 12.8468 4.05305 13.4175 4.38664 13.7238C4.72233 14.0322 5.24263 14.0553 5.57414 13.7238Z"
        fill={fill}
      />
    </svg>
  )
}
export function MessageIcon(props: IconType) {
  const { width = 20, height = 20, stroke = "#ffffff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.08317 15.8337H6.6665C3.33317 15.8337 1.6665 15.0003 1.6665 10.8337V6.66699C1.6665 3.33366 3.33317 1.66699 6.6665 1.66699H13.3332C16.6665 1.66699 18.3332 3.33366 18.3332 6.66699V10.8337C18.3332 14.167 16.6665 15.8337 13.3332 15.8337H12.9165C12.6582 15.8337 12.4082 15.9587 12.2498 16.167L10.9998 17.8337C10.4498 18.567 9.54984 18.567 8.99984 17.8337L7.74984 16.167C7.6165 15.9837 7.30817 15.8337 7.08317 15.8337Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3305 9.16667H13.338"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 9.16667H10.0036"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66209 9.16667H6.66957"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function PhoneIcon(props: IconType) {
  const { width = 22, height = 22, fill = "#ffffff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.0027 2.00003C8.61607 2.00242 6.32787 2.95115 4.64011 4.63806C2.95235 6.32498 2.00288 8.61231 2.00001 10.9982C1.9982 12.697 2.47545 14.3524 3.37572 15.7855L3.58903 16.1253L2.67973 19.4452L6.08737 18.5524L6.41457 18.7476C7.80206 19.5686 9.38496 20.0012 10.9973 20H10.9991C13.3849 19.9967 15.6721 19.0478 17.3593 17.3614C19.0465 15.6751 19.9961 13.3888 19.9999 11.0036C20.0041 9.82138 19.7736 8.65006 19.3218 7.55748C18.87 6.46491 18.2058 5.47279 17.3678 4.63858C16.5342 3.79975 15.5423 3.13461 14.4497 2.68169C13.3571 2.22878 12.1855 1.99708 11.0027 2.00003ZM16.2958 14.8639C16.0699 15.4964 14.9888 16.0711 14.47 16.1488C13.9012 16.2468 13.3174 16.2103 12.7653 16.0422C12.2415 15.88 11.7267 15.69 11.2232 15.4729C8.50797 14.3018 6.73636 11.5711 6.59897 11.3886C6.46519 11.2078 5.49623 9.9211 5.49623 8.59098C5.49623 7.25905 6.19403 6.60484 6.44169 6.33376C6.53263 6.23104 6.64378 6.14817 6.76819 6.09033C6.89261 6.0325 7.02763 6.00093 7.1648 5.99761C7.34557 5.99761 7.52454 5.99942 7.68363 6.00665C7.84994 6.01388 8.0723 5.94339 8.29104 6.4711C8.51701 7.01327 9.05934 8.34339 9.12622 8.47893C9.19311 8.61267 9.2383 8.7717 9.14972 8.95243C9.05934 9.13496 9.01595 9.2452 8.87856 9.40423C8.74478 9.56327 8.59474 9.75664 8.47362 9.87953C8.33804 10.0133 8.19703 10.1597 8.35431 10.4307C8.51339 10.7 9.05572 11.5874 9.85837 12.3048C10.8924 13.2265 11.7656 13.5102 12.0349 13.6476C12.3061 13.7813 12.4634 13.7615 12.6224 13.5789C12.7797 13.3964 13.2986 12.7892 13.4793 12.5199C13.6601 12.2488 13.8391 12.294 14.0885 12.3825C14.3362 12.4747 15.6667 13.1271 15.9361 13.2627C16.2036 13.3964 16.3862 13.4651 16.4549 13.5789C16.52 13.691 16.52 14.2313 16.2958 14.8639Z"
        fill={fill}
      />
    </svg>
  )
}

export function CheckCircle(props: IconType) {
  const { width = 16, height = 17, fill = "#D7D7D7", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.912109C3.58182 0.912109 0 4.49393 0 8.91211C0 13.3303 3.58182 16.9121 8 16.9121C12.4182 16.9121 16 13.3303 16 8.91211C16 4.49393 12.4182 0.912109 8 0.912109ZM11.4676 7.55938C11.5315 7.48639 11.5801 7.40137 11.6106 7.30932C11.6411 7.21727 11.6529 7.12005 11.6453 7.02337C11.6377 6.9267 11.6108 6.83252 11.5662 6.74638C11.5217 6.66025 11.4604 6.5839 11.3859 6.52181C11.3114 6.45973 11.2252 6.41317 11.1324 6.38488C11.0397 6.35659 10.9422 6.34714 10.8457 6.35708C10.7493 6.36701 10.6558 6.39614 10.5707 6.44275C10.4857 6.48936 10.4108 6.55251 10.3505 6.62847L7.22327 10.3805L5.60509 8.76156C5.46793 8.62909 5.28422 8.55578 5.09353 8.55744C4.90284 8.55909 4.72043 8.63558 4.58559 8.77042C4.45074 8.90527 4.37426 9.08768 4.3726 9.27836C4.37094 9.46905 4.44425 9.65276 4.57673 9.78993L6.75855 11.9717C6.83001 12.0432 6.91556 12.0989 7.00976 12.1354C7.10395 12.1719 7.20473 12.1884 7.30565 12.1839C7.40657 12.1793 7.50544 12.1537 7.59594 12.1088C7.68643 12.0639 7.76658 12.0006 7.83127 11.923L11.4676 7.55938Z"
        fill={fill}
      />
    </svg>
  )
}

export function TelegramIcon(props: IconType) {
  const { width = 22, height = 22, fill = "#ffffff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18.9427 3.40684L2.69022 9.67409C1.58105 10.1196 1.58747 10.7383 2.48672 11.0143L6.65938 12.3159L16.3137 6.22467C16.7702 5.94692 17.1873 6.09634 16.8445 6.40067L9.02255 13.4599H9.02072L9.02255 13.4608L8.73472 17.7618C9.15638 17.7618 9.34247 17.5684 9.57897 17.3402L11.6057 15.3693L15.8215 18.4833C16.5988 18.9113 17.1571 18.6913 17.3505 17.7637L20.1179 4.72134C20.4011 3.58559 19.6843 3.07134 18.9427 3.40684Z"
        fill={fill}
      />
    </svg>
  )
}

function SvgExclamationCircle(
  props: IconType,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      ref={svgRef}
      {...props}
    >
      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
    </svg>
  )
}

export const ExclamationCircleIcon = React.forwardRef(SvgExclamationCircle)

export function HorizontalDotsIcon(props: IconType) {
  const { width = 15, height = 3, fill = "#1E1E2D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill={fill} />
      <circle cx="7.5" cy="1.5" r="1.5" fill={fill} />
      <circle cx="13.5" cy="1.5" r="1.5" fill={fill} />
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
