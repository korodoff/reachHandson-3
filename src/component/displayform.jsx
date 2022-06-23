import React from "react";

function Displayform(props) {
  const { displayCard } = props;
  console.log(displayCard);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {displayCard.map((personObj, i) => {
          // console.log(kyrteng);
          const kyrteng = personObj.Name;
          const department = personObj.Department;
          const rating = personObj.Rating;
          return (
            <div className="card" key={i}>
              <h3 className="cardDisplay">
                Name:{kyrteng}|Department:{department}|Rating:{rating}
              </h3>
            </div>
          );
        })}
      </div>

      <div></div>
    </>
  );
}

export default Displayform;
