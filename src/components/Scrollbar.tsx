import React, { ReactElement, useEffect, useRef } from "react"
import { ScrollbarProps, Scrollbars } from "react-custom-scrollbars-2"
import Measure from "react-measure"
import { useRouter } from "next/router"

interface Props extends ScrollbarProps {
  children?: React.ReactChild | React.ReactChildren | React.ReactNode
  scrollRef?: any
}

export const  Scrollbar = ({
  children,
  scrollRef,

  ...rest
}: Props): ReactElement => {
    const {universal = true, ...restp} = rest;
  const ref = useRef<any>()
//   const location = useLocation()
const {pathname} = useRouter()

  useEffect(() => {
    setTimeout(() => ref?.current?.forceUpdate(), 700)
  }, [pathname])

  return (
    <Scrollbars universal={universal} {...restp} ref={scrollRef || ref}>
      <Measure
        bounds
        onResize={() => {
          ref.current && ref.current.forceUpdate()
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className="rc-scollbar">
            {children}
          </div>
        )}
      </Measure>
    </Scrollbars>
  )
}
