import { Banner } from "@components"
import { useOnClickOutside, useOpenClose } from "@hooks"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useRef, useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/components/SearchBar"
import Footer from "src/pages/NewPage/footer/footer"
import styled from "styled-components"
import Card from "../NewScreen7/components/Card"
import VideosModal from "../PanCake/model/VideosModal"

interface Props {
  className?: string
}

const NewScreen8 = ({ className }: Props) => {
  const countPerPage = 10
  const [isOpen, onOpen, onClose] = useOpenClose()
  const [currentPage, setCurrentPage] = useState(1)
  const [collection, setCollection] = useState(
    cloneDeep(RecipesData.slice(0, countPerPage))
  )
  const ref = useRef(null)
  const updatePage = (p: any) => {
    setCurrentPage(p)
    const to = countPerPage * p
    const from = to - countPerPage
    setCollection(cloneDeep(RecipesData.slice(from, to)))
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CookAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  useOnClickOutside(ref, () => {
    onClose()
  })
  return (
    <div className={classNames(className)}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pb-80">
        <Banner
          title="Recipe Video Tutorials"
          subTitle="Browse recipes from your favorite cooks organized by type. Want to start your day off right? Check out popular breakfast recipes or end the night with some incredible dessert. Not sure what you want? Browse recipes via your Food Feed +"
          lottieAnimation={
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          }
        />
        <header className="food-sectionHeader">
          <ul className="organizedByList">
            <li>
              <strong className="title">Organized By:</strong>
            </li>
            <li>
              <a href="#">Recipes By Cuisine</a>
            </li>
          </ul>
          <SearchBar
            placeholder="Search Video Tutorials..."
            options={{
              showSearchBar: true,
              showSwitchBox: false,
              showFilter: true,
              showSortBy: true,
            }}
          />
        </header>
        <div className="cards-frame">
          <div className="cards-row">
            {[10, 2].map((c, i) => (
              <Card
                onClick={() => {
                  onOpen()
                }}
                className="card-item"
                key={i}
                type="secondary"
                cardImg="/images/cardImg.jpg"
                profImg="/images/profile-img.png"
                title="GoPro HERO 10 Black: The Million Dollar Challenge"
                category="Nick Digiovanni"
              />
            ))}
          </div>
          <VideosModal
            ref={ref}
            isOpen={isOpen}
            onClose={onClose}
            showHeader={false}
          />
          <Pagination
            pageSize={countPerPage}
            onChange={updatePage}
            current={currentPage}
            total={RecipesData.length}
            showPrevNextJumpers={true}
            nextIcon="Next"
            prevIcon="Previous"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen8 = styled(NewScreen8)`
  .pb-80 {
    padding-bottom: 80px;
  }

  .cards-frame {
    padding: 0 2rem;

    @media (max-width: 1279px) {
      padding: 0;
    }
  }

  .food-sectionHeader {
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  .cards-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-item {
      padding: 0 12px;
      margin: 0 0 38px;
      width: 25%;

      @media (max-width: 1279px) {
        padding: 0 8px;
      }

      @media (max-width: 1023px) {
        width: 33.333%;
      }

      @media (max-width: 767px) {
        width: 50%;
        margin: 0 0 25px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
