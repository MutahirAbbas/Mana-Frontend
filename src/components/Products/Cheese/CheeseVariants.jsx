import React,{useState}  from "react";
export default function CheeseVariants(props) {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        title: "CHEDDAR",
      },
      {
        id: 2,
        title: "MOZZARELLA",
      }
    ],
  });
  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
    console.log(appState);
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "p-box p-active";
    } else {
      return "p-box p-inactive";
    }
  }
  return (
    <div className="products-boxes">
        {appState.objects.map((element, i) => (
          <div
            className={toggleActiveStyles(i)}
            onClick={() => {
              toggleActive(i);
            }}
            key={i}
          >
            <p className="p-box mb-0" onClick={()=>props.addItemHandler({title:element.title})}>{element.title}</p>
          </div>
        ))}
      </div>
  );
}
