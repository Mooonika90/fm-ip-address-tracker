import "./index.css";
import arrow from "./assets/icon-arrow.svg";

function App() {
  return (
    <main>
      <section>
        <h1>IP Address Tracker</h1>

        <form>
          <input value="" placeholder="Search for any IP address or domain" />
          <button>
            <img src={arrow} alt="icon-arrow" />
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
