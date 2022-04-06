import { ProgressArrowUp } from "@icons"
import React from "react"
import styled from "styled-components"
const tableData = [
  {
    id: "#89325",
    status: "live",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "live",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "Draft",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "Scheduled",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
]

function RecipiesTable() {
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
          {tableData.map((items: any, index: any) => {
            return (
              <tr key={index}>
                <td>
                  <a href="#">{items.id}</a>
                </td>
                <td>
                  <a href="#">{items.name}</a>
                </td>
                <td className={items.status}>
                  <a href="#">
                    <span className="statusText">{items.status}</span>
                  </a>
                </td>
                {items?.view?.map(m => {
                  return (
                    <>
                      <td className="view">
                        <a href="#">
                          <span className="ratings">{m.rateing}</span>
                          <span className="ratingsStatus">
                            {m.downrate} <ProgressArrowUp />
                          </span>
                        </a>
                      </td>
                    </>
                  )
                })}
                <td className="date">
                  <a href="#">{items.date}</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default styled(RecipiesTable)``
