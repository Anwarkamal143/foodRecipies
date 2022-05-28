import { Banner } from "@components"
import { useOnClickOutside, useOpenClose } from "@hooks"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import { ourCooks } from "data"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useRef, useState } from "react"
import SearchBar from "src/components/SearchBar"
import Footer from "src/pages/NewPage/footer/footer"
import MobileSwiperModal from "src/pages/NewPage/model/galleryModal"
import styled from "styled-components"
import Card from "../NewScreen7/components/Card"
interface Props {
  className?: string
}

const NewScreen8 = ({ className }: Props) => {
  const countPerPage = 10
  const [activeSlide, setActiveSlide] = useState(0)
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
  useOnClickOutside(ref, () => {
    onClose()
  })
  return (
    <div className={classNames(className)}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pb-80">
        <Banner
          title={<p>Recipe Video Tutorials</p>}
          subTitle={
            <p>
              Browse recipes from your favorite cooks organized by type. Want to
              start your day off right? Check out popular breakfast recipes or
              end the night with some{" "}
              <strong
                onClick={e => {
                  console.log("mahad")
                }}
              >
                incredible dessert.
              </strong>{" "}
              Not sure what you want? Browse recipes via your Food Feed +
            </p>
          }
          lottieAnimation={<img src="/images/banner-image.png" />}
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
          <MobileSwiperModal
            isOpen={isOpen}
            items={ourCooks}
            onClose={onClose}
            currentSlideIndex={activeSlide}
          />
          {/* <VideosModal
            ref={ref}
            isOpen={isOpen}
            onClose={onClose}
            showHeader={false}
          /> */}
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

  .organizedByList {
    @media (max-width: 767px) {
      width: 100%;
      margin: 0 0 10px;
    }
  }

  .sortByFilter {
    display: flex;
    align-items: center;
  }

  .cards-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
    justify-content: center;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-item {
      margin: 0 12px 38px;
      width: 216px;

      @media (max-width: 1279px) {
        margin: 0 8px 38px;
      }

      @media (max-width: 767px) {
        width: 147px;
        margin: 0 8px 25px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
