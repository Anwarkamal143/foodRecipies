import { useAppSelector, useOnClickOutside } from '@hooks'
import { toggleSidebar } from '@reducers'
import { useAppDispatch } from '@redux/hooks'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import React, { cloneElement, ReactElement, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'


type Props = {
  className?: string;
  children: ReactElement
}
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
// const links = [
//   { name: "Home", to: "#", id: 1 },
//   { name: "About", to: "#", id: 2 },
//   { name: "Blog", to: "#", id: 3 },
//   { name: "Contact", to: "#", id: 4 }
// ];
const SidebarAnimation = ({ className, children }: Props) => {
  const [open, cycleOpen] = useCycle(false, true);
  const isOpen = useAppSelector(state => state.sidebar.isOpen)
  const dispatch = useAppDispatch();
  const ref = useRef(null);


  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useOnClickOutside(ref, () => {
    toggleSideBar()

  })
  const toggleSideBar = () => {
    cycleOpen();
    dispatch(toggleSidebar(false));
  }
  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = 'hidden'
      cycleOpen()
    }
  }, [isOpen])
  console.log({ open, isOpen })
  return (
    <div className={className + `${open ? ' slidebar_open' : ''}`}>
      <AnimatePresence onExitComplete={() => {
        document.body.style.overflow = 'visible'
      }} >
        {open && (
          <motion.aside
            ref={ref}
            className='slider'
            initial={{ width: 0, right: 0 }}
            animate={{
              width: isMobile ? '100%' : 360
            }}
            exit={{
              width: 0,
              right: 0,
              transition: { delay: 0.3, duration: 0.3 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {cloneElement(children, { toggleSideBar })}
              {/* {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))} */}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

    </div>
  )
}
export const SidebarAnimations = styled(SidebarAnimation)`

&.slidebar_open {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
    background: rgba(0, 0, 0, 0.7);
}

.slider {
    position: fixed;
    height: 100vh;
    z-index: 99;
    background: #fff;
    padding: 50px 25px;
    overflow: auto;

    @media (max-width: 767px) {
      padding: 25px;
      height: 74.4vh;
      border-radius: 0 0 10px 10px;
      box-shadow: 0px 24px 45px rgba(0, 0, 0, 0.18);
    }
}
`