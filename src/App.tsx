import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <img src="/logo.png" alt="logo" className="h-48 invert absolute top-0" />
      <p>WE'RE STILL</p>
      <h1 className="text-5xl font-bold my-5 text-blue-700">
        Cooking Our Website.
      </h1>

      <p className="opacity-70">Launching Soon. Stay Tuned.</p>

      <p className="opacity-70 absolute bottom-10 text-xs">
        Meanwhile, checkout{" "}
        <a href="https://www.anuragsawant.in" target="_blank" className="underline">
          https://www.anuragsawant.in
        </a>
      </p>
    </div>
  );
}

export default App;
