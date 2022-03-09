import { AnimatePresence, motion } from "framer-motion"
import {
  cloneElement,
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  isValidElement,
  useState,
} from "react"
import { useLayer } from "react-laag"
import PostSliderForm from "./PostSliderForm"
export type IFiltersProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>
  className?: string
}
export default function Filters(props: IFiltersProps) {
  const { children } = props
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
  console.log(isValidElement(children))
  // Again, we're using framer-motion for the transition effect
  return (
    <>
      {cloneElement(children as any, {
        ...triggerProps,
        onClick: () => setOpen(!isOpen),
      })}

      {/* <button {...triggerProps} onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button> */}
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div {...layerProps}>
              <PostSliderForm />
              {/* <Arrow {...arrowProps} /> */}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
