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
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>name</th>
            <th>View</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((items: any, index: any) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td className={items.status}>{items.status}</td>
                <td>{items.name}</td>
                {items?.view?.map(m => {
                  return (
                    <>
                      <td>
                        <span>{m.rateing}</span>
                        <span>{m.downrate}</span>
                      </td>
                    </>
                  )
                })}
                <td>{items.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default styled(RecipiesTable)``
