/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Popover, Transition } from '@headlessui/react';
import clsxm from "@lib/clsxm"
import React, {
  // Fragment,
  useContext,
} from "react"

const MegaMenuContext = React.createContext<any>(null)
MegaMenuContext.displayName = "MegaMenuContext"

// MegaMenu provider
function MegaMenu({ children, ...props }: any) {
  // let timeout: NodeJS.Timeout; // NodeJS.Timeout
  // const timeoutDuration = 100;

  // const buttonRef = useRef<HTMLButtonElement | null>(null); // useRef<HTMLButtonElement>(null)
  // const [openState, setOpenState] = useState(false);

  // const toggleMenu = () => {
  //   // log the current open state in React (toggle open state)
  //   setOpenState((openState) => !openState);
  //   // toggle the menu by clicking on buttonRef
  //   buttonRef?.current?.click(); // eslint-disable-line
  // };

  // // Open the menu after a delay of timeoutDuration
  // const onHover = (open: boolean, action: string) => {
  //   // if the modal is currently closed, we need to open it
  //   // OR
  //   // if the modal is currently open, we need to close it
  //   if (
  //     (!open && !openState && action === 'onMouseEnter') ||
  //     (open && openState && action === 'onMouseLeave')
  //   ) {
  //     // clear the old timeout, if any
  //     clearTimeout(timeout);
  //     // open the modal after a timeout
  //     timeout = setTimeout(() => toggleMenu(), timeoutDuration);
  //   }
  //   // else: don't click! 😁
  // };

  // const handleClick = (open: boolean) => {
  //   setOpenState(!open); // toggle open state in React state
  //   clearTimeout(timeout); // stop the hover timer if it's running
  // };
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleClickOutside = (event: any) => {
  //   if (buttonRef.current && !buttonRef.current.contains(event.target)) {
  //     // event.stopPropagation();
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // });

  // const contextValue = { buttonRef, handleClick, onHover };
  return (
    <>
      <div className="relative group">
        {/* {({ open }) => ( */}
        <MegaMenuContext.Provider
          // value={{ ...contextValue, ...{ open } }}
          {...props}
        >
          {/* <div
              onMouseEnter={() => onHover(open, 'onMouseEnter')}
              onMouseLeave={() => onHover(open, 'onMouseLeave')}
            > */}
          {children}
          {/* </div> */}
        </MegaMenuContext.Provider>
        {/* )} */}
      </div>
    </>
  )
}

export function MegaMenuButton({ children }: any) {
  // const { buttonRef } = useContext(MegaMenuContext);
  return children
  // <Popover.Button
  //   ref={buttonRef}
  //   as='button'
  //   className={clsxm(
  //     'relative flex cursor-pointer items-center focus:outline-none',
  //     className
  //   )}
  //   {...props}
  // >
  // {children}
  // {/* </button> */}
  // </Popover.Button>
}

export function MegaMenuPanel({ children, className, ...props }: any) {
  // const { open } = useContext(MegaMenuContext);
  return (
    // <Transition
    //   show={open}
    //   as={Fragment}
    //   enter='transition ease-out duration-100'
    //   enterFrom='transform opacity-0 scale-95'
    //   enterTo='transform opacity-100 scale-100'
    //   leave='transition ease-in duration-75'
    //   leaveFrom='transform opacity-100 scale-100'
    //   leaveTo='transform opacity-0 scale-95'
    // >
    <div
      // static
      className={clsxm(
        " absolute -left-44 top-11 mt-1 hidden w-[80vw] origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block xl:w-[70vw] 2xl:max-w-screen-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
    // </Transition>
  )
}
export function useMegaMenuContext() {
  const megaMenuContextValue = useContext(MegaMenuContext)
  if (!megaMenuContextValue)
    throw new Error(
      "useMegaMenuContext should be between MegaMenu context provider"
    )
  return megaMenuContextValue
}

export default MegaMenu
