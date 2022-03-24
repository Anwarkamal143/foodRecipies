import { AnimatePresence, motion } from "framer-motion"
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  ReactElement,
  ReactNode,
  useState
} from "react"
import { useLayer } from "react-laag"

export type IStickyDropdownProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  //   children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>

  renderItems?: (props: any) => ReactElement | ReactNode
  className?: string
  items: any[]
  button?: (...args: any) => ReactElement | ReactNode
}
// type IDropDownProps = {
//   renderItem?: (props: ItemProps) => ReactElement | ReactNode
//   className?: string
//   items: any[]
//   button?: (...args: any) => ReactElement | ReactNode
// }
export function StikcyDropDown(props: IStickyDropdownProps) {
  const { renderItems, button, className, ...rest } = props
  const [isOpen, setOpen] = useState(false)

  // helper function to close the menu
  function close() {
    setOpen(false)
  }

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: "bottom-start", // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  })
  const handleToggle = () => {
    setOpen(!isOpen)
  }
  // Again, we're using framer-motion for the transition effect
  return (
    <>
      <div className={className}>
        {/* {cloneElement(children as any, {
        ...triggerProps,
        onClick: () => setOpen(!isOpen),
      })} */}
        {button?.({ isOpen, setOpen, handleToggle, ...triggerProps })}
        {/* <button {...triggerProps} onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button> */}
        {renderLayer(
          <AnimatePresence>
            {isOpen && (
              <motion.div {...layerProps}>
                {renderItems?.({ setOpen, isOpen, handleToggle, ...rest })}
                {/* <Arrow {...arrowProps} /> */}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  )
}
