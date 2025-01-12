import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [loaading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      try {
        const response = await fetch(url);
        const apiData = await response.json();

        setData(apiData);
        console.log("DATA\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchApiData();
  }, []);
  function handleToggleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          Loading Data{" "}
          <span>
            {" "}
            <i className="fa-solid fa-spinner"></i>
          </span>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer
          data={data}
          handleToggleModal={handleToggleModal}
          showModal={showModal}
        />
      )}
    </>
  );
}

export default App;
