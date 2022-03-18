import { SearchSVG } from "@icons"
import React, {
  CSSProperties,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { InputContainer } from "./Search.styled"

export type asComp = keyof Omit<
  HTMLElementTagNameMap,
  "applet" | "dir" | "font" | "frame" | "frameset" | "marquee"
>
export type Icon = {
  icon?:
    | string
    | ReactNode
    | ReactElement
    | JSX.Element
    | React.ElementType<any>
  as?: asComp
  iconExt?: "svg" | "jpg" | "jpeg" | "png"
  styles?: CSSProperties
  className?: string
  props: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
}
export type IInputType = React.ComponentPropsWithRef<"input"> & {
  leftIcon?: Icon
  rightIcon?: Icon

  main?: {
    as?: asComp
    styles?: CSSProperties
    className?: string
    props?: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
  }

  styles?: CSSProperties
  className?: string
  props?: Omit<HTMLAttributes<HTMLElement>, "style" | "className">
}
export type ISidebarHeaderProps = IInputType & {
  onSearch?: (text: string) => void

  [key: string]: any
}
const HeaderSearch = ({
  className,
  onSearch,
  searchText = "",
  placeholder = "search",
  ...rest
}: ISidebarHeaderProps) => {
  const [textSearch, setTextSearch] = useState(searchText)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value)
    onSearch?.(e.target.value)
  }
  useEffect(() => {
    setTextSearch(searchText)
    return () => {}
  }, [searchText])
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <SearchSVG className="w-4 h-4 text-gray-500 stroke-current" />
        </div>

        <InputContainer
          className="w-full py-3 pl-8 text-xs font-light text-gray-300 bg-gray-800 border-none rounded focus:ring-1 focus:ring-gray-500 focus:outline-none placeholder:text-gray-500 focus:bg-gray-800"
          value={textSearch}
          onChange={handleSearch}
          placeholder="search..."
          {...rest}
        />
      </div>
    </div>
  )
}

export default HeaderSearch
