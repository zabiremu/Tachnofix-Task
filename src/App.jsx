import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="w-full h-lvh App">
        <div className="h-full mx-auto lg:w-4/5">
          <div className="flex flex-wrap items-center justify-center h-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
