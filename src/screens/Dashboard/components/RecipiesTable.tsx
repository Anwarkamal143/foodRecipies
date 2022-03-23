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
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>View</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((items: any, index: any) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td className={items.status}><span className="statusText">{items.status}</span></td>
                {items?.view?.map(m => {
                  return (
                    <>
                      <td className="view">
                        <span className="ratings">{m.rateing}</span>
                        <span  className="ratingsStatus">{m.downrate}</span>
                      </td>
                    </>
                  )
                })}
                <td className="date">{items.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default styled(RecipiesTable)``
