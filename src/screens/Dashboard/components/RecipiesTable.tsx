import React from "react"
export const tableData = [
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
            <th>name</th>
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
                <td>{items.status}</td>
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

export default RecipiesTable
