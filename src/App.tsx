import { useState } from "react";
import "./App.css";
import { ICar } from "./interface/car";
import Form from "./components/Form";
import List from "./components/List";
import Table from "./components/Table/index";
import ListContext from "./components/ListContext/index";

function App() {
  // const carData = [
  //   { id: 1, name: "Car1" },
  //   { id: 2, name: "Car2" },
  //   { id: 3, name: "Car3" },
  // ];
  // const columns = [
  //   { tilte: "Name", columnIndex: "name" },
  //   { tilte: "Price", columnIndex: "price" },
  // ];
  // const data = [
  //   { id: 1, name: "Car1", price: 200 },
  //   { id: 2, name: "Car2", price: 500 },
  //   { id: 3, name: "Car3", price: 600 },
  //   // ...Thêm dữ liệu khác tại đây
  // ];
  // const [cars, setCar] = useState<ICar[]>(carData);
  // const addCar = (car: ICar) => {
  //   setCar([...cars, car]);
  // };

  // const removeCar = (id: number) => {
  //   setCar(cars.filter((car) => car.id !== id));
  // };
  return (
    <>
      {/* <h1 className="text-2xl text-red-600 font-bold underline">
        Hello world!
      </h1>
      <div className="w-96 mx-auto border border-black rounded px-2">
        <Form onAdd={addCar} />
        <List data={cars} onRemove={removeCar} />
      </div>
      table
      <div className="mx-auto">
        <Table cols={columns} data={data} />
      </div> */}
      <ListContext></ListContext>
    </>
  );
}
//closure currying
export default App;
