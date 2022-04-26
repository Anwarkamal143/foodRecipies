// import { CrossIcon, SearchIcon } from "@icons"
// import React, { useState } from "react"
// import styled from "styled-components"
// import { Input } from "../Input"

// type Props = {
//   className?: string
//   title?: string
//   onSearch?: (text?: string) => void
//   onClose?: () => void
//   header?: boolean
//   icon?: any
// }

// const HeaderSearch = (props: Props) => {
//   const {
//     className,
//     title = "Smart Search",
//     onSearch,
//     onClose,
//     header = true,
//     icon,
//   } = props
//   const [searchText, setSearchText] = useState("")

//   const handleSearch = (searchTextt: string) => {
//     setSearchText(searchTextt)
//     onSearch?.(searchTextt)
//   }
//   return (
//     <div className={className}>
//       <div className="searchHeaderForm">
//         <Input
//           value={searchText}
//           className="search_input"
//           placeholder="Smart search recipes, ingredients, cooks and more..."
//           onChange={e => {
//             handleSearch(e.target.value)
//           }}
//           onFocus={e => {
//             console.log(e)
//           }}
//           materialDesign
//           icon={<SearchIcon />}
//         />
//         {searchText && (
//           <CrossIcon
//             className="clearsearchbtn"
//             onClick={() => handleSearch("")}
//           />
//         )}
//         {icon && <img src="images/searchFilter.svg" />}
//         <span className={searchText ? "active_search" : "searchIcon"}>
//           Smart Search
//         </span>
//       </div>
//     </div>
//   )
// }
// export const SearchHeader = styled(HeaderSearch)`
//   .searchHeaderHeading {
//     overflow: hidden;
//     text-align: center;
//     position: relative;
//     margin: 0 0 25px;

//     @media (max-width: 767px) {
//       text-align: left;
//     }

//     h3 {
//       font-size: 16px;
//       line-height: 20px;
//       color: #e0464d;
//     }

//     .searchHeaderClose {
//       position: absolute;
//       right: 25px;
//       top: 5px;

//       @media (max-width: 767px) {
//         right: 0;
//       }
//     }
//   }

//   .searchHeaderForm {
//     position: relative;

//     label {
//       display: none;
//     }

//     .form-control {
//       width: 100%;
//       height: 34px;
//       font-size: 12px;
//       line-height: 18px;
//       padding: 7px 70px 7px 18px;
//       color: #8d8d96;
//       border: 1px solid #ff6067;
//       border-radius: 20px;
//     }

//     .input-active {
//       .form-control {
//         border-color: #ff6067;
//       }
//     }

//     .clearsearchbtn {
//       position: absolute;
//       right: 50px;
//       top: 50%;
//       transform: translateY(-50%);
//       width: 9px;
//       height: 9px;
//       pointer-events: none;

//       path {
//         fill: #bdbdbd;
//       }
//     }

//     .searchIcon,
//     .active_search {
//       position: absolute;
//       right: 0;
//       top: 0;
//       width: 40px;
//       height: 34px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background: #ff6067;
//       border-radius: 0 20px 20px 0;

//       svg {
//         width: 14px;
//         height: 14px;

//         path {
//           fill: #fff;
//         }
//       }
//     }
//   }
// `
