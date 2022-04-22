import { ProgressArrowUp } from "@icons"
import { RecipesData } from "@redux/data"
import dayjs from "dayjs"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import React from "react"
import styled from "styled-components"



function RecipiesTable() {
  const countPerPage = 10
  const [currentPage, setCurrentPage] = React.useState(1)
  const [collection, setCollection] = React.useState(
    cloneDeep(RecipesData.slice(0, countPerPage))
  )
  const updatePage = p => {
    setCurrentPage(p)
    const to = countPerPage * p
    const from = to - countPerPage
    setCollection(cloneDeep(RecipesData.slice(from, to)))
  }
  return (
    <div className="recipiesTableParent">
      <table className="table recipiesTable">
        <thead>
          <tr>
            <th>
              <a href="#">ID</a>
            </th>
            <th>
              <a href="#">Name</a>
            </th>
            <th>
              <a href="#">Status</a>
            </th>
            <th>
              <a href="#">View</a>
            </th>
            <th>
              <a href="#">Date</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {collection.map((items: any, index: any) => {
            return (
              <tr key={index}>
                <td>
                  <a href="#" className="link-item">
                    {items._id}
                  </a>
                </td>
                <td>
                  <a href="#" className="link-item">
                    {items.name}
                  </a>
                </td>
                <td className={items.status}>
                  <a href="#">
                    <span className="statusText">{items.status}</span>
                  </a>
                </td>

                <>
                  <td className="view" key={items.views.total}>
                    <a href="#">
                      <span className="ratings">{items.views.total}</span>
                      <span className="ratingsStatus">
                        {items.views.progress} <ProgressArrowUp />
                      </span>
                    </a>
                  </td>
                </>

                <td className="date">
                  <a href="#">{dayjs(items.createdAt).format('DD/MM/YYYY')}</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
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
  )
}

export default styled(RecipiesTable)``
