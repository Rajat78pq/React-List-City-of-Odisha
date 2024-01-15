import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'Bhubaneswar',
    'Cuttack',
    'Baleswar',
    'Rourkela',
    'Keonjhar',
    'Bhadrak'
  ];

  const handleSelectItem = (items: string) => {
    console.log(items);
  }

  return <div><ListGroup items={items} heading="City of Odisha" onSelectItems={handleSelectItem} /></div>
}

export default App;
