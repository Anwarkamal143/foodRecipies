import * as React from "react"
import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  SVGProps,
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
export const Information = () => {
  return (
    <svg
      id="bold"
      enableBackground="new 0 0 24 24"
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm2.25 14h-4.5c-.553 0-1-.448-1-1s.447-1 1-1h1.25v-6h-.75c-.553 0-1-.448-1-1s.447-1 1-1h1.75c.553 0 1 .448 1 1v7h1.25c.553 0 1 .448 1 1s-.447 1-1 1z" />
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
export function RightAngle(props: IconType) {
  const { width = "1em", height = "1em", ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        d="M8.85474 4.94971H1.41416"
        stroke="#DDD9D9"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.07868 1.12897L9.89941 4.94971L6.07868 8.77044"
        stroke="#DDD9D9"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function Minus(props: IconType) {
  const { width = "1em", height = "1em", ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      {...rest}
    >
      <path
        d="M11.8684 0.935547C9.52108 0.935547 7.22644 1.63301 5.27469 2.93974C3.32293 4.24647 1.80173 6.10378 0.903435 8.27679C0.00514236 10.4498 -0.229892 12.8409 0.228054 15.1478C0.685999 17.4546 1.81636 19.5736 3.47619 21.2368C5.13601 22.8999 7.25077 24.0325 9.55301 24.4914C11.8553 24.9503 14.2416 24.7148 16.4103 23.8147C18.5789 22.9146 20.4325 21.3903 21.7367 19.4347C23.0408 17.479 23.7369 15.1798 23.7369 12.8277C23.7369 9.67373 22.4864 6.6489 20.2607 4.41869C18.0349 2.18847 15.0161 0.935547 11.8684 0.935547ZM11.8684 23.2334C9.8145 23.2334 7.80669 22.6231 6.0989 21.4797C4.39112 20.3363 3.06007 18.7112 2.27406 16.8098C1.48805 14.9084 1.2824 12.8162 1.6831 10.7977C2.0838 8.77919 3.07287 6.92507 4.52522 5.46982C5.97757 4.01456 7.82797 3.02352 9.84244 2.62201C11.8569 2.22051 13.945 2.42657 15.8425 3.21415C17.7401 4.00173 19.362 5.33545 20.5031 7.04665C21.6442 8.75786 22.2533 10.7697 22.2533 12.8277C22.2533 15.5875 21.1592 18.2342 19.2116 20.1856C17.2641 22.1371 14.6227 23.2334 11.8684 23.2334Z"
        fill="#FE585F"
      />
      <path
        d="M16.3199 12.0845H7.41855C7.22182 12.0845 7.03314 12.1628 6.89403 12.3022C6.75492 12.4415 6.67677 12.6306 6.67677 12.8277C6.67677 13.0248 6.75492 13.2139 6.89403 13.3533C7.03314 13.4926 7.22182 13.5709 7.41855 13.5709H16.3199C16.5166 13.5709 16.7053 13.4926 16.8444 13.3533C16.9835 13.2139 17.0616 13.0248 17.0616 12.8277C17.0616 12.6306 16.9835 12.4415 16.8444 12.3022C16.7053 12.1628 16.5166 12.0845 16.3199 12.0845Z"
        fill="#FE585F"
      />
    </svg>
  )
}
export function PlusBtn(props: IconType) {
  const { width = "1em", height = "1em", ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      {...rest}
    >
      <path
        d="M11.5 22.5C8.83126 22.5 6.27182 21.3938 4.38474 19.4246C2.49765 17.4555 1.4375 14.7848 1.4375 12C1.4375 9.21523 2.49765 6.54451 4.38474 4.57538C6.27182 2.60625 8.83126 1.5 11.5 1.5C14.1687 1.5 16.7282 2.60625 18.6153 4.57538C20.5023 6.54451 21.5625 9.21523 21.5625 12C21.5625 14.7848 20.5023 17.4555 18.6153 19.4246C16.7282 21.3938 14.1687 22.5 11.5 22.5ZM11.5 24C14.55 24 17.4751 22.7357 19.6317 20.4853C21.7884 18.2348 23 15.1826 23 12C23 8.8174 21.7884 5.76516 19.6317 3.51472C17.4751 1.26428 14.55 0 11.5 0C8.45001 0 5.52494 1.26428 3.36827 3.51472C1.2116 5.76516 0 8.8174 0 12C0 15.1826 1.2116 18.2348 3.36827 20.4853C5.52494 22.7357 8.45001 24 11.5 24Z"
        fill="#11C278"
      />
      <path
        d="M11.5 6C11.6906 6 11.8734 6.07902 12.0082 6.21967C12.143 6.36032 12.2188 6.55109 12.2188 6.75V11.25H16.5312C16.7219 11.25 16.9047 11.329 17.0395 11.4697C17.1743 11.6103 17.25 11.8011 17.25 12C17.25 12.1989 17.1743 12.3897 17.0395 12.5303C16.9047 12.671 16.7219 12.75 16.5312 12.75H12.2188V17.25C12.2188 17.4489 12.143 17.6397 12.0082 17.7803C11.8734 17.921 11.6906 18 11.5 18C11.3094 18 11.1266 17.921 10.9918 17.7803C10.857 17.6397 10.7812 17.4489 10.7812 17.25V12.75H6.46875C6.27813 12.75 6.09531 12.671 5.96052 12.5303C5.82573 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82573 11.6103 5.96052 11.4697C6.09531 11.329 6.27813 11.25 6.46875 11.25H10.7812V6.75C10.7812 6.55109 10.857 6.36032 10.9918 6.21967C11.1266 6.07902 11.3094 6 11.5 6Z"
        fill="#11C278"
      />
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
      fill="currentColor"
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

    stroke = "#4b4b4b",
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
export function TimeDuraion(props: IconType) {
  const { width = 18, height = 18, stroke = "#7b7b7b", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7 0C3.14005 0 0 3.14005 0 7C0 10.86 3.14005 14 7 14C10.86 14 14 10.86 14 7C14 3.14005 10.86 0 7 0ZM10.3291 10.6207C10.2153 10.7345 10.066 10.7917 9.9167 10.7917C9.76738 10.7917 9.61795 10.7345 9.5043 10.6207L6.5876 7.7041C6.47791 7.59505 6.4167 7.44679 6.4167 7.2917V3.5C6.4167 3.17743 6.67796 2.9167 7 2.9167C7.32204 2.9167 7.5833 3.17743 7.5833 3.5V7.0502L10.3291 9.7959C10.5571 10.024 10.5571 10.3927 10.3291 10.6207Z"
        fill="#11C278"
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
  const { width = 10, height = 20, stroke = "#4b4b4b", ...rest } = props
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
  const { width = 19, height = 19, fill = "#4b4b4b", ...rest } = props
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
  const { width = 15, height = 3, fill = "#4b4b4b", ...rest } = props
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

export function SearchIcon(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.6301 4.48762C5.35255 4.20985 4.90226 4.20985 4.62472 4.48762C3.59424 5.51811 3.08776 6.95363 3.23495 8.42637C3.27167 8.79325 3.58075 9.06674 3.94169 9.06674C3.96541 9.06674 3.98931 9.06553 4.01303 9.06317C4.40386 9.02408 4.68896 8.67542 4.64987 8.28485C4.54511 7.23824 4.90253 6.22057 5.6301 5.49296C5.90786 5.21546 5.90786 4.76513 5.6301 4.48762Z"
        fill={fill}
      />
      <path
        d="M8.01856 0C3.59711 0 0 3.59711 0 8.01856C0 12.44 3.59711 16.0371 8.01856 16.0371C12.44 16.0371 16.0371 12.44 16.0371 8.01856C16.0371 3.59711 12.44 0 8.01856 0ZM8.01856 14.6344C4.37047 14.6344 1.40268 11.6667 1.40268 8.01856C1.40268 4.37047 4.37047 1.40268 8.01856 1.40268C11.6664 1.40268 14.6344 4.37047 14.6344 8.01856C14.6344 11.6667 11.6667 14.6344 8.01856 14.6344Z"
        fill={fill}
      />
      <path
        d="M17.7978 16.8284L13.8294 12.86C13.5603 12.5909 13.1247 12.5909 12.8556 12.86C12.5866 13.1288 12.5866 13.5649 12.8556 13.8337L16.8241 17.8022C16.9586 17.9367 17.1347 18.0039 17.311 18.0039C17.4873 18.0039 17.6633 17.9367 17.7978 17.8022C18.0668 17.5334 18.0668 17.0972 17.7978 16.8284Z"
        fill={fill}
      />
    </svg>
  )
}
export function GlutenFree(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M5.19943 4.06098C5.77936 4.64091 5.87939 5.48298 5.62143 5.74095C5.36347 5.9989 4.56939 5.85088 3.98946 5.27094C3.40953 4.69101 3.23946 3.9209 3.51946 3.63897C3.79931 3.35703 4.61139 3.48105 5.19943 4.06098Z"
        fill="#7474A9"
      />
      <path
        d="M7.85062 4.98029C7.90657 5.84426 7.46266 6.64437 7.12058 6.71426C6.77865 6.7843 6.30458 6.16823 6.24865 5.30229C6.19271 4.43636 6.5426 3.65425 6.91465 3.58032C7.28658 3.50624 7.80055 4.11422 7.85062 4.98029Z"
        fill="#7474A9"
      />
      <path
        d="M9.57332 6.70488C9.62926 7.56885 9.18728 8.36896 8.84535 8.43885C8.50341 8.50888 8.02742 7.89281 7.97131 7.02688C7.91537 6.16095 8.26526 5.37884 8.63731 5.30491C9.00938 5.23097 9.51539 5.83895 9.57328 6.70488H9.57332Z"
        fill="#7474A9"
      />
      <path
        d="M11.3114 8.44152C11.3695 9.30745 10.9254 10.1075 10.5835 10.1755C10.2415 10.2434 9.76747 9.62945 9.70943 8.76352C9.6514 7.89759 10.0034 7.11744 10.3754 7.04155C10.7475 6.96552 11.2535 7.57559 11.3114 8.44152H11.3114Z"
        fill="#7474A9"
      />
      <path
        d="M13.1672 10.2961C13.2232 11.1601 12.7812 11.9621 12.4392 12.0301C12.0973 12.098 11.6232 11.484 11.5652 10.6181C11.5072 9.75218 11.8592 8.97007 12.2312 8.89614C12.5731 8.82611 13.1091 9.43004 13.1672 10.2961H13.1672Z"
        fill="#7474A9"
      />
      <path
        d="M4.88901 7.93917C5.75494 7.99721 6.55502 7.55314 6.62505 7.21121C6.69509 6.86913 6.07705 6.39913 5.21308 6.33717C4.34897 6.27509 3.56504 6.63111 3.49097 6.99913C3.42108 7.34512 4.02501 7.8811 4.88901 7.93914V7.93917Z"
        fill="#7474A9"
      />
      <path
        d="M6.61225 9.66314C7.47819 9.72118 8.27826 9.27711 8.3483 8.93518C8.41819 8.5931 7.80015 8.11903 6.93618 8.06099C6.07222 8.00296 5.28814 8.35494 5.21421 8.727C5.14027 9.09907 5.74825 9.59907 6.61225 9.66311V9.66314Z"
        fill="#7474A9"
      />
      <path
        d="M8.35191 11.3993C9.21588 11.4573 10.0179 11.0132 10.0859 10.6713C10.154 10.3292 9.53999 9.85728 8.67391 9.79924C7.80798 9.74121 7.02587 10.0953 6.95194 10.4652C6.87801 10.8352 7.48598 11.3453 8.35191 11.3993V11.3993Z"
        fill="#7474A9"
      />
      <path
        d="M10.1986 13.2568C11.0646 13.3148 11.8647 12.8707 11.9347 12.5288C12.0046 12.1867 11.3985 11.7128 10.5266 11.6547C9.65454 11.5967 8.87857 11.9487 8.7985 12.3207C8.71856 12.6927 9.33854 13.2008 10.1986 13.2567L10.1986 13.2568Z"
        fill="#7474A9"
      />
      <path
        d="M12.5494 12.6186L12.6158 12.5522C12.7814 12.3866 13.0812 12.418 13.2154 12.5522L14.3568 13.6935C14.5224 13.8591 14.5224 14.1275 14.3568 14.2931L14.2904 14.3595C14.1248 14.5251 13.825 14.4937 13.6908 14.3595L12.5494 13.2182C12.3838 13.0526 12.3838 12.7842 12.5494 12.6186Z"
        fill="#7474A9"
      />
      <path
        d="M15.364 2.63605C13.6762 0.948111 11.3868 0 9 0C6.6132 0 4.32391 0.948111 2.63605 2.63605C0.948111 4.32384 0 6.6132 0 9C0 11.3868 0.948111 13.6761 2.63605 15.364C4.32384 17.0519 6.6132 18 9 18C11.3868 18 13.6761 17.0519 15.364 15.364C17.0519 13.6762 18 11.3868 18 9C18 6.6132 17.0519 4.32391 15.364 2.63605ZM9 0.811967C11.0062 0.810851 12.9422 1.54929 14.4382 2.88605L2.88605 14.4382C1.47783 12.8582 0.73661 10.7939 0.81811 8.67893C0.899582 6.5641 1.79747 4.56284 3.32316 3.09605C4.84884 1.62926 6.88356 0.810467 8.99996 0.812003L9 0.811967ZM9 17.1881V17.1882C6.98017 17.1896 5.03177 16.4413 3.53176 15.0882L15.0879 3.53208C16.507 5.1087 17.2584 7.17495 17.1836 9.2946C17.1088 11.4146 16.2136 13.4225 14.6868 14.8953C13.16 16.3678 11.1211 17.19 9 17.1883V17.1881Z"
        fill="#7474A9"
      />
    </svg>
  )
}
export function Vegan(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9.68833 7.67406C9.68833 7.67406 10.1851 6.48021 11.0478 6.36689C11.0478 6.36689 10.9186 6.50855 10.7165 6.76679C10.1185 7.53103 8.88074 9.31999 8.4509 11.5084C8.4509 11.5084 7.82342 6.31461 5 5.02492C5 5.02492 7.49234 7.7787 8.05007 13.4953H8.85176C8.85176 13.4953 9.02604 10.1141 10.5599 8.16202C10.5599 8.16202 11.7451 8.26662 12.1634 7.46487C12.5817 6.66318 12.477 5.82664 13 5.02489C9.1191 4.69942 9.6885 7.67396 9.6885 7.67396L9.68833 7.67406Z"
        fill="#62626C"
      />
      <circle cx="9" cy="9" r="8.625" stroke="#62626C" strokeWidth="0.75" />
    </svg>
  )
}
export function Vegetarian(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="8.625" stroke="#62626C" strokeWidth="0.75" />
      <path
        d="M11.4652 8.28569C11.4652 8.28569 10.1605 9.12464 9.48015 11.8159C9.86874 11.9961 10.6973 12.2291 11.5353 11.5024C12.8076 10.399 12.3172 8.3555 14 7.36151C14 7.36151 12.0035 6.12686 10.0651 8.22331C10.0651 8.22331 8.91024 9.39272 9.22464 11.5254C9.40943 10.6022 9.94037 9.08953 11.4652 8.2857L11.4652 8.28569ZM6.46477 11.5024C7.30275 12.2293 8.13147 11.9961 8.51989 11.8159C7.83968 9.12502 6.53485 8.28568 6.53485 8.28568C8.05947 9.08951 8.59057 10.6022 8.77536 11.5252C9.08978 9.3927 7.93485 8.22309 7.93485 8.22309C5.99647 6.12625 4 7.36129 4 7.36129C5.68271 8.35529 5.19248 10.399 6.46473 11.5024L6.46477 11.5024Z"
        fill="#62626C"
      />
    </svg>
  )
}
export function NutFree(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M13.7582 6.93801C13.554 6.69935 13.3133 6.55743 13.0532 6.54235L12.4146 7.09474C12.1093 7.35692 11.9395 7.73744 11.95 8.12652C11.9629 8.47046 12.0595 8.78651 12.21 9.0359C12.309 8.97145 12.41 8.91766 12.5239 8.87259L13.3732 8.53525C13.414 8.51595 13.4699 8.51593 13.5172 8.52885C13.7086 8.5912 13.8719 8.68153 14.0116 8.82134C14.0998 8.59131 14.145 8.31405 14.1321 8.02593C14.1279 7.61314 13.9946 7.22612 13.7582 6.938L13.7582 6.93801Z"
        fill="#62626C"
      />
      <path
        d="M9.0846 8.61048C8.83099 8.45999 8.70634 8.17182 8.77305 7.89028L8.91936 7.27975C9.09788 6.55105 8.84006 5.7642 8.22746 5.32768C8.1995 5.29974 8.16296 5.28466 8.12428 5.25886L8.07057 5.21369C7.89644 5.06961 7.85354 4.79873 7.98683 4.62683C8.09217 4.48282 7.99553 4.27859 7.81923 4.29144C7.29684 4.30639 6.80453 4.52773 6.45619 4.91031L6.24549 5.14243C6.24549 5.14243 5.02207 6.46004 5.21537 7.42742C5.30988 7.9004 5.54627 8.30025 5.87301 8.5927C6.09226 8.79481 6.1567 9.1173 6.01908 9.37951C5.73733 9.92767 5.33953 10.8455 5.47269 11.5119C5.7691 12.9953 7.11681 13.978 8.48194 13.7052C9.84707 13.4324 10.7137 12.0073 10.4173 10.5239C10.2366 9.67698 9.73155 8.99543 9.08458 8.61047L9.0846 8.61048ZM7.67386 11.3963C7.69748 11.5145 7.62008 11.6306 7.50185 11.6542C7.3836 11.6778 7.26756 11.6004 7.24393 11.4822L7.11505 10.8372C7.09143 10.719 7.16882 10.6029 7.28706 10.5793C7.4053 10.5557 7.52135 10.6331 7.54498 10.7513L7.67386 11.3963ZM7.33019 9.67641C7.35382 9.79465 7.27642 9.9107 7.15818 9.93433C7.03994 9.95795 6.92389 9.88055 6.90027 9.76232L6.77139 9.11734C6.74776 8.99909 6.82516 8.88305 6.94339 8.85942C7.06164 8.83579 7.17768 8.91319 7.20131 9.03143L7.33019 9.67641ZM6.98654 7.9566C7.01017 8.07485 6.93277 8.19089 6.81453 8.21452C6.69629 8.23814 6.58024 8.16075 6.55662 8.04251L6.42774 7.39753C6.40411 7.27928 6.48151 7.16324 6.59974 7.13961C6.71799 7.11599 6.83403 7.19338 6.85766 7.31162L6.98654 7.9566ZM8.96355 12.2564C8.98717 12.3747 8.90978 12.4907 8.79154 12.5143C8.67329 12.538 8.55725 12.4606 8.53362 12.3423L8.40474 11.6973C8.38112 11.5791 8.45851 11.4631 8.57675 11.4394C8.69499 11.4158 8.81104 11.4932 8.83467 11.6114L8.96355 12.2564ZM8.61988 10.5365C8.64351 10.6548 8.56611 10.7708 8.44787 10.7944C8.32963 10.8181 8.21358 10.7407 8.18996 10.6224L8.06108 9.97745C8.03745 9.85921 8.11485 9.74317 8.23309 9.71954C8.35133 9.69591 8.46737 9.77331 8.491 9.89155L8.61988 10.5365ZM8.27623 8.81672C8.29986 8.93496 8.22246 9.05101 8.10422 9.07464C7.98598 9.09826 7.86993 9.02086 7.84631 8.90263L7.71743 8.25765C7.6938 8.1394 7.7712 8.02336 7.88944 7.99973C8.00768 7.9761 8.12372 8.0535 8.14735 8.17174L8.27623 8.81672ZM7.93256 7.09683C7.95619 7.21508 7.87879 7.33112 7.76056 7.35475C7.64231 7.37838 7.52627 7.30098 7.50264 7.18274L7.37376 6.53776C7.35013 6.41952 7.42753 6.30347 7.54577 6.27985C7.66401 6.25622 7.78006 6.33362 7.80369 6.45185L7.93256 7.09683Z"
        fill="#62626C"
      />
      <path
        d="M13.4732 8.97352L12.695 9.27437C12.3209 9.41618 12.0242 9.72139 11.9188 10.089C11.8005 10.5039 11.7918 10.908 11.9185 11.2627C12.0389 11.5852 12.2516 11.811 12.5139 11.8927C12.7869 11.9723 13.0857 11.9014 13.3587 11.7015C13.6512 11.4866 13.8834 11.1384 14.0038 10.7343C14.2512 9.95829 14.0085 9.19079 13.4732 8.97352L13.4732 8.97352Z"
        fill="#62626C"
      />
      <circle cx="9" cy="9" r="8.625" stroke="#62626C" strokeWidth="0.75" />
      <line
        x1="15.2652"
        y1="3.26517"
        x2="3.26517"
        y2="15.2652"
        stroke="#62626C"
        strokeWidth="0.75"
      />
    </svg>
  )
}
export function DairyFree(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="8.625" stroke="#62626C" strokeWidth="0.75" />
      <line
        x1="15.2652"
        y1="3.26517"
        x2="3.26517"
        y2="15.2652"
        stroke="#62626C"
        strokeWidth="0.75"
      />
      <path
        d="M8.5 7.5L6.5 8V12.5L7 13.5H11L11.5 12.5V9L11 7.5H8.5Z"
        fill="white"
      />
      <path
        d="M8.94745 8.22975C9.50443 8.41229 10.1547 8.50247 11.0253 8.17007C11.0881 8.38049 11.136 8.61903 11.1593 8.90569L11.1453 12.587C11.1442 12.8138 11.0594 12.963 10.9231 13.0649C10.7883 13.1662 10.5872 13.2267 10.3078 13.2267H7.69275C7.41257 13.2267 7.21256 13.1663 7.07772 13.0649C6.94176 12.9629 6.85697 12.8137 6.85557 12.587L6.84155 8.90569C6.86482 8.61914 6.91233 8.38049 6.97526 8.17007C7.63246 7.85017 8.08814 7.94962 8.94745 8.22975H8.94745ZM7.06748 4C6.80692 4 6.59669 4.16359 6.59669 4.36584V4.81676C6.59669 4.99462 6.75815 5.14209 6.97329 5.17552V5.49452C6.97329 6.00862 6.78282 6.35104 6.55352 6.80106C6.32422 7.25089 5.99655 7.79501 6.00003 8.63987L6.01615 12.8515C6.01727 13.1957 6.16261 13.4932 6.43495 13.6972C6.70713 13.9006 7.08837 14 7.51277 14H10.4884C10.9128 14 11.2941 13.9006 11.5662 13.6972C11.8384 13.4932 11.9834 13.1957 11.9848 12.8515L12 8.63987C12.0035 7.79512 11.6766 7.25108 11.4475 6.80106C11.2186 6.35123 11.0266 6.00859 11.0266 5.49452V5.17552C11.2419 5.14208 11.4035 4.99461 11.4035 4.81676L11.4036 4.36584C11.4036 4.16337 11.1931 4 10.9328 4H7.06748Z"
        fill="#62626C"
      />
    </svg>
  )
}
// export function SearchIcon(props: IconType) {
//   const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
//   return (

//   )
// }

export function SearchIconAlt(props: IconType) {
  const { width = 16, height = 16, fill = "#1E1E2D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33334 3.33337H13.3333"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33334 5.33337H11.3333"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7.66671C14 11.1667 11.1667 14 7.66668 14C4.16668 14 1.33334 11.1667 1.33334 7.66671C1.33334 4.16671 4.16668 1.33337 7.66668 1.33337"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 14.6667L13.3333 13.3334"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Bell(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.6467 14.6673H3.31334C1.31334 14.6673 1.31334 13.7673 1.31334 12.6673V12.0007C1.31334 11.634 1.61334 11.334 1.98001 11.334H13.98C14.3467 11.334 14.6467 11.634 14.6467 12.0007V12.6673C14.6467 13.7673 14.6467 14.6673 12.6467 14.6673Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8133 8.66732V11.334H2.17999V8.66732C2.17999 6.10732 3.98666 3.96732 6.39333 3.45398C6.75333 3.37398 7.12666 3.33398 7.51333 3.33398H8.47999C8.86666 3.33398 9.24666 3.37398 9.60666 3.45398C12.0133 3.97398 13.8133 6.10732 13.8133 8.66732Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66666 3.00065C9.66666 3.16065 9.64666 3.30732 9.60666 3.45398C9.24666 3.37398 8.86666 3.33398 8.48 3.33398H7.51333C7.12666 3.33398 6.75333 3.37398 6.39333 3.45398C6.35333 3.30732 6.33333 3.16065 6.33333 3.00065C6.33333 2.08065 7.07999 1.33398 7.99999 1.33398C8.91999 1.33398 9.66666 2.08065 9.66666 3.00065Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.33398H6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function Calander(props: IconType) {
  const { width = 18, height = 19, fill = "#ffffff", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M6 1.5V3.75"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.5V3.75"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.625 6.81836H15.375"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.771 10.2754H11.7778"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.771 12.5254H11.7778"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99661 10.2754H9.00335"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99661 12.5254H9.00335"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.22073 10.2754H6.22747"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.22073 12.5254H6.22747"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function CrossIcon(props: IconType) {
  const { width = 12, height = 12, fill = "#292D32", ...rest } = props
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
        fill={fill}
        d="M0.8,11.8c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1L10.5,0.3c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1
		L1.3,11.6C1.2,11.7,1,11.8,0.8,11.8z"
      />
      <path
        fill={fill}
        d="M11,11.8c-0.2,0-0.4-0.1-0.5-0.2L0.3,1.3C0,1,0,0.6,0.3,0.3S1,0,1.3,0.3l10.3,10.3c0.3,0.3,0.3,0.8,0,1.1
		C11.4,11.7,11.2,11.8,11,11.8z"
      />
    </svg>
  )
}
export function LinkArrowIcon(props: IconType) {
  const { width = 9, height = 9, fill = "#fff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 1L1 8"
        stroke="#DEDEDE"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.865 1L8 1V6.135"
        stroke="#DEDEDE"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function ChevronRightIcon(props: IconType) {
  const { width = 12, height = 12, fill = "#fff", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.20316 2.8889C4.0079 3.08417 4.0079 3.40075 4.20316 3.59602L6.06615 5.45903L4.25785 7.26732C4.06259 7.46259 4.06259 7.77917 4.25785 7.97443L4.47882 8.1954C4.67409 8.39066 4.99067 8.39066 5.18593 8.1954L7.57242 5.80892C7.76768 5.61366 7.76768 5.29707 7.57242 5.10181L7.35145 4.88084C7.3341 4.86349 7.31579 4.84768 7.29669 4.83341L5.13124 2.66793C4.93597 2.47267 4.61939 2.47267 4.42413 2.66793L4.20316 2.8889Z"
        fill="#8D8D96"
      />
    </svg>
  )
}

export function FlashCircle(props: IconType) {
  const { width = 16, height = 16, fill = "#3D3D3D", ...rest } = props
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.97917 1.3335C4.29917 1.3335 1.3125 4.32016 1.3125 8.00016C1.3125 11.6802 4.29917 14.6668 7.97917 14.6668C11.6592 14.6668 14.6458 11.6802 14.6458 8.00016C14.6458 4.32016 11.6658 1.3335 7.97917 1.3335ZM10.4792 8.2335L7.99917 11.0535L7.70583 11.3868C7.29917 11.8468 6.96583 11.7268 6.96583 11.1068V8.46683H5.8325C5.31917 8.46683 5.17917 8.1535 5.51917 7.76683L7.99917 4.94683L8.2925 4.6135C8.69917 4.1535 9.0325 4.2735 9.0325 4.8935V7.5335H10.1658C10.6792 7.5335 10.8192 7.84683 10.4792 8.2335Z"
        fill="#3D3D3D"
      />
    </svg>
  )
}

export function ChevronDownIndicator(props: IconType) {
  const { width = 9, height = 6, fill = "#E0464D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4.5 6L0.602886 0.750001L8.39711 0.75L4.5 6Z" fill={fill} />
    </svg>
  )
}

export function ChevronUpIndicator(props: IconType) {
  const { width = 9, height = 6, fill = "#11C278", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4.5 0L8.39711 5.25H0.602886L4.5 0Z" fill="#11C278" />
    </svg>
  )
}

export function CircleTick(props: IconType) {
  const { width = 15, height = 15, fill = "#E0464D", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0C3.3675 0 0 3.3675 0 7.5C0 11.6325 3.3675 15 7.5 15C11.6325 15 15 11.6325 15 7.5C15 3.3675 11.6325 0 7.5 0ZM11.085 5.775L6.8325 10.0275C6.7275 10.1325 6.585 10.1925 6.435 10.1925C6.285 10.1925 6.1425 10.1325 6.0375 10.0275L3.915 7.905C3.6975 7.6875 3.6975 7.3275 3.915 7.11C4.1325 6.8925 4.4925 6.8925 4.71 7.11L6.435 8.835L10.29 4.98C10.5075 4.7625 10.8675 4.7625 11.085 4.98C11.3025 5.1975 11.3025 5.55 11.085 5.775Z"
        fill="#E0464D"
      />
    </svg>
  )
}

export function ArrowRight(props: IconType) {
  const { width = 5, height = 5, fill = "#7B7B7B", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331"
        stroke="#7B7B7B"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.62156 2.49956H0.378924"
        stroke="#7B7B7B"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CircleProgress(props: IconType) {
  const { width = 40, height = 40, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#F1F4FB" />
      <path
        d="M5.85786 34.1421C8.18355 36.4678 11.0469 38.1841 14.1943 39.1388C17.3417 40.0936 20.676 40.2574 23.9018 39.6157C27.1276 38.974 30.1454 37.5467 32.6879 35.4602C35.2303 33.3737 37.2189 30.6923 38.4776 27.6537C39.7362 24.615 40.2261 21.3128 39.9037 18.0397C39.5813 14.7665 38.4567 11.6233 36.6294 8.8886C34.8021 6.15388 32.3286 3.91201 29.4279 2.36158C26.5273 0.811142 23.289 2.48314e-07 20 0V2.26562C22.9164 2.26562 25.7879 2.98487 28.3599 4.35967C30.932 5.73447 33.1253 7.72238 34.7456 10.1473C36.3659 12.5722 37.3631 15.3593 37.649 18.2617C37.9348 21.1641 37.5005 24.0922 36.3844 26.7867C35.2684 29.4811 33.505 31.8587 31.2506 33.7089C28.9961 35.559 26.3202 36.8247 23.4598 37.3936C20.5994 37.9626 17.6428 37.8173 14.852 36.9707C12.0611 36.1241 9.52213 34.6023 7.4599 32.5401L5.85786 34.1421Z"
        fill="#E0464D"
      />
    </svg>
  )
}

export function DietIcon(props: IconType) {
  const { width = 16, height = 16, fill = "currentColor", ...rest } = props
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
        d="M15.4285 7.42697H13.6209C13.1994 4.48028 11.3775 2.63008 8.3356 3.87912C8.06198 3.99124 7.79513 4.09525 7.51354 4.16645C7.67075 3.08026 8.07076 2.46948 9.23489 2.27752C9.54638 2.22584 9.75675 1.93188 9.70545 1.62052C9.65455 1.30915 9.36552 1.10019 9.04856 1.15001C8.26025 1.28006 7.70372 1.57866 7.3081 1.95939C6.93493 0.736636 5.79526 -0.0217312 4.60497 0.000474703C3.91113 1.47827 4.77202 3.27022 6.42518 3.71087C6.39275 3.87426 6.36856 4.03273 6.35129 4.18389C6.06517 4.11482 5.7885 4.0047 5.50331 3.88488C1.04737 2.01523 -0.553949 6.99044 0.165233 10.0678C0.569357 11.7943 1.65109 14.8457 4.35922 15.8876C5.29915 16.2492 6.17435 15.6206 6.87152 15.6206C7.30422 15.6206 8.14526 16 8.76429 16C9.58543 16 11.2529 15.1383 12.4303 13.1404L15.4284 13.1403C15.7443 13.1403 16 12.8846 16 12.569V7.99856C16 7.68308 15.7443 7.42723 15.4284 7.42723L15.4285 7.42697ZM3.17419 4.64844C3.9059 4.45424 4.4162 4.6681 5.0607 4.93842C6.29233 5.4549 6.87213 5.39723 6.87213 5.39723C7.64714 5.3971 8.24395 5.15228 8.77021 4.93614C9.38628 4.68349 9.87361 4.48424 10.5836 4.65187C11.6773 4.9109 12.2582 6.19928 12.4712 7.42683H1.24053C1.49994 6.04959 2.22446 4.89937 3.17409 4.64844L3.17419 4.64844ZM8.97256 14.8213C8.73827 14.9118 8.40936 14.8134 8.02929 14.6985C7.68429 14.5951 7.2932 14.4776 6.87114 14.4776C6.44855 14.4776 6.05786 14.5951 5.713 14.6985C5.33348 14.8123 5.00522 14.9105 4.76973 14.8209C3.8912 14.483 3.21849 13.8605 2.70142 13.14H11.0642C10.5764 13.8031 9.89637 14.4658 8.97239 14.8213L8.97256 14.8213ZM14.857 11.9975H13.1425V11.4262C13.1425 11.1107 12.8868 10.8548 12.5709 10.8548C12.255 10.8548 11.9993 11.1105 11.9993 11.4262V11.9975H10.2848V10.2837C10.2848 9.96819 10.0291 9.71234 9.71321 9.71234C9.39732 9.71234 9.14164 9.96805 9.14164 10.2837V11.9975H7.4271V11.4262C7.4271 11.1107 7.17142 10.8548 6.85553 10.8548C6.53964 10.8548 6.28396 11.1105 6.28396 11.4262V11.9975H4.56942V10.2837C4.56942 9.96819 4.31374 9.71234 3.99785 9.71234C3.68196 9.71234 3.42628 9.96805 3.42628 10.2837V11.9975H2.03306C1.60676 11.1025 1.14256 9.73387 1.13551 8.56971H14.8571L14.857 11.9975Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TimeIcon(props: IconType) {
  const { width = 16, height = 16, fill = "currentColor", ...rest } = props
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
        d="M13.75 7.5C13.75 10.95 10.95 13.75 7.5 13.75C4.05 13.75 1.25 10.95 1.25 7.5C1.25 4.05 4.05 1.25 7.5 1.25C10.95 1.25 13.75 4.05 13.75 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.81874 9.48711L7.88124 8.33086C7.54374 8.13086 7.26874 7.64961 7.26874 7.25586V4.69336"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Check = () => {
  return (
    <svg
      height="20"
      viewBox="0 -46 417.81333 417"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" />
    </svg>
  )
}
export const Cancel = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="20px"
      height="20px"
      viewBox="0 0 511.76 511.76"
      enableBackground="new 0 0 511.76 511.76;"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            fill="currentColor"
            d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048
			c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z
			 M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165
			c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0
			c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
          />
        </g>
      </g>
    </svg>
  )
}
export function AddCookIcon(props: IconType) {
  const { width = 17, height = 17, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.50002 1.41602C6.64419 1.41602 5.13544 2.92477 5.13544 4.7806C5.13544 6.60102 6.55919 8.07435 8.41502 8.1381C8.47169 8.13102 8.52835 8.13102 8.57085 8.1381C8.58502 8.1381 8.5921 8.1381 8.60627 8.1381C8.61335 8.1381 8.61335 8.1381 8.62044 8.1381C10.4338 8.07435 11.8575 6.60102 11.8646 4.7806C11.8646 2.92477 10.3559 1.41602 8.50002 1.41602Z"
        fill="currentColor"
      />
      <path
        d="M12.0983 10.0233C10.1221 8.70578 6.89914 8.70578 4.90872 10.0233C4.00914 10.6254 3.51331 11.4399 3.51331 12.3112C3.51331 13.1824 4.00914 13.9899 4.90164 14.5849C5.89331 15.2508 7.19664 15.5837 8.49997 15.5837C9.80331 15.5837 11.1066 15.2508 12.0983 14.5849C12.9908 13.9829 13.4866 13.1754 13.4866 12.297C13.4796 11.4258 12.9908 10.6183 12.0983 10.0233ZM9.91664 12.8424H9.03122V13.7279C9.03122 14.0183 8.79039 14.2591 8.49997 14.2591C8.20956 14.2591 7.96872 14.0183 7.96872 13.7279V12.8424H7.08331C6.79289 12.8424 6.55206 12.6016 6.55206 12.3112C6.55206 12.0208 6.79289 11.7799 7.08331 11.7799H7.96872V10.8945C7.96872 10.6041 8.20956 10.3633 8.49997 10.3633C8.79039 10.3633 9.03122 10.6041 9.03122 10.8945V11.7799H9.91664C10.2071 11.7799 10.4479 12.0208 10.4479 12.3112C10.4479 12.6016 10.2071 12.8424 9.91664 12.8424Z"
        fill="currentColor"
      />
    </svg>
  )
}
export function likeIcon(props: IconType) {
  const { width = 17, height = 17, fill = "currentColor", ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.23328 15.292L8.81661 17.292C9.14994 17.6254 9.89994 17.792 10.3999 17.792H13.5666C14.5666 17.792 15.6499 17.042 15.8999 16.042L17.8999 9.95871C18.3166 8.79205 17.5666 7.79205 16.3166 7.79205H12.9833C12.4833 7.79205 12.0666 7.37538 12.1499 6.79205L12.5666 4.12538C12.7333 3.37538 12.2333 2.54205 11.4833 2.29205C10.8166 2.04205 9.98328 2.37538 9.64994 2.87538L6.23328 7.95871"
        stroke="#424E66"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M1.98328 15.292V7.12533C1.98328 5.95866 2.48328 5.54199 3.64994 5.54199H4.48328C5.64994 5.54199 6.14994 5.95866 6.14994 7.12533V15.292C6.14994 16.4587 5.64994 16.8753 4.48328 16.8753H3.64994C2.48328 16.8753 1.98328 16.4587 1.98328 15.292Z"
        stroke="#424E66"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function PencilIcon(props: IconType) {
  const { width = 16, height = 16, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PrintIcon(props: IconType) {
  const { width = 15, height = 15, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_281_3372)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.548866 5.27961V11.4131C0.548866 11.9755 1.09681 12.5234 1.6592 12.5234H3.04711C2.98676 13.093 2.94086 13.6507 2.92879 14.1527C2.92879 14.3796 3.02534 14.5823 3.17739 14.732C3.32458 14.8768 3.52502 14.9734 3.74226 14.9952L3.82912 15H11.3626L11.4736 14.9928C11.6787 14.9686 11.8742 14.8721 12.019 14.7296C12.1687 14.5824 12.2652 14.3845 12.2652 14.1624L12.2604 14.0731L12.0721 12.5234H13.4383C14.0007 12.5234 14.5486 11.9755 14.5486 11.4131V5.27961C14.5486 4.71721 14.0007 4.1669 13.4383 4.1669H11.7294L11.6159 2.1876C11.599 1.87144 11.4952 1.57931 11.3335 1.36692C11.1621 1.13998 10.9231 1 10.6455 1H4.45192C4.17435 1 3.93532 1.13998 3.76398 1.36692C3.60224 1.57931 3.49847 1.87144 3.48156 2.1876L3.36809 4.1669H1.65916C1.09677 4.1669 0.548828 4.71721 0.548828 5.27961L0.548866 5.27961ZM4.71987 13.3127C4.58711 13.3127 4.47849 13.204 4.47849 13.0713C4.47849 12.9385 4.58711 12.8299 4.71987 12.8299H10.3778C10.5105 12.8299 10.6191 12.9385 10.6191 13.0713C10.6191 13.204 10.5105 13.3127 10.3778 13.3127H4.71987ZM4.71987 11.1934C4.58711 11.1934 4.47849 11.0848 4.47849 10.952C4.47849 10.8193 4.58711 10.7106 4.71987 10.7106H10.3778C10.5105 10.7106 10.6191 10.8193 10.6191 10.952C10.6191 11.0848 10.5105 11.1934 10.3778 11.1934H4.71987ZM3.58302 12.3858C3.62408 12.2965 3.62645 12.1565 3.63852 11.9441L3.78819 10.3534C3.80026 10.1579 3.8147 9.90451 3.9161 9.76203L3.92332 9.75481L3.92569 9.74996L3.94261 9.73067L3.95468 9.71861C3.96675 9.70654 3.97881 9.69684 3.99088 9.68962C4.04886 9.65341 4.24196 9.62442 4.52914 9.60029H10.6047C10.834 9.6172 10.9885 9.63649 11.0415 9.65826C11.0729 9.67033 11.1019 9.68477 11.126 9.70417L11.1453 9.72346C11.1815 9.76203 11.2129 9.81031 11.237 9.86343V9.8658C11.2804 9.98412 11.2829 10.1289 11.2997 10.2689L11.4928 11.862C11.529 12.1419 11.5193 12.3062 11.5701 12.4051L11.7825 14.1623C11.7825 14.2468 11.7439 14.3264 11.6811 14.3868C11.611 14.4543 11.517 14.5026 11.4132 14.5147H3.78814C3.68437 14.505 3.58534 14.4592 3.51541 14.3891C3.4527 14.3264 3.41164 14.2467 3.40916 14.1622L3.58297 12.3857L3.58302 12.3858ZM11.2467 4.16688H3.85088L3.96187 2.21409C3.97394 1.99448 4.0415 1.79652 4.14527 1.65893C4.22976 1.55031 4.336 1.48274 4.45184 1.48274H10.6454C10.7613 1.48274 10.8675 1.55031 10.952 1.65893C11.0558 1.79653 11.1233 1.99448 11.1354 2.21409L11.2464 4.16688H11.2467ZM2.30607 6.17031C2.17331 6.17031 2.06469 6.06169 2.06469 5.92893C2.06469 5.79617 2.17331 5.68755 2.30607 5.68755H3.4623C3.59506 5.68755 3.70368 5.79617 3.70368 5.92893C3.70368 6.06169 3.59506 6.17031 3.4623 6.17031H2.30607Z"
          fill="#B6B6B6"
        />
      </g>
      <defs>
        <clipPath id="clip0_281_3372">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.52002)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function QuestionCommentIcon(props: IconType) {
  const { width = 22, height = 16, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 640 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7zM416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM208.5 288C194.7 288 184 277.3 184 263.5c0-13.77 10.71-24.47 24.47-24.47c13.77 0 24.47 10.71 24.47 24.47C232.9 277.3 222.2 288 208.5 288zM261.1 171.4L226.8 192.8v1.529c0 9.941-8.412 18.35-18.35 18.35S190.1 204.3 190.1 194.4V182.1c0-6.117 3.059-12.23 9.176-16.06l43.59-26C248.2 137 251.3 131.6 251.3 125.5c0-9.178-7.648-16.82-16.82-16.82H194.7c-9.178 0-16.82 7.646-16.82 16.82c0 9.941-8.412 18.35-18.35 18.35c-9.941 0-18.35-8.412-18.35-18.35C141.2 95.71 164.9 72 194.7 72h39.76C264.3 72 288 95.71 288 125.5C288 143.9 278.1 161.5 261.1 171.4z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PlayIcon(props: IconType) {
  const { width = 16, height = 16, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M228.5 147.5C224.7 145.2 220.3 144 216 144C202.2 144 192 155.3 192 168v176c0 12.8 10.31 24 24 24c4.344 0 8.68-1.18 12.52-3.523l144-88C379.6 272.1 384 264.4 384 256c0-8.359-4.352-16.12-11.48-20.48L228.5 147.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
        fill="currentColor"
      />
    </svg>
  )
}

export function AvatarIcon(props: IconType) {
  const { width = 16, height = 16, fill = "currentColor", ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
        fill="currentColor"
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
