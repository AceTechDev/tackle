import { useEffect, useState } from "react";

import Layout from "../components/layout";
import List from "../components/BestPlayerPage/List";
import Footer from "../components/Navigations/Footer/Footer";
import Searchbar from "../components/Searchbar";
import LoadMore from "../components/BestPlayerPage/LoadMore";
import ListButton from "../components/BestPlayerPage/ListButton";
import FilterModal from "../components/BestPlayerPage/FilterModal";
import RequestsUtils from "../utils/RequestsUtils";
import MyLoader from "../components/Common/Loading";
import { useCookies } from "react-cookie";

export default function BestPlayer({}) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useCookies(["token"]);

  const [input, setInput] = useState({
    text: "",
    preferedFoot: "",
    week: "",
    age: "",
    currentClub: "",
    weight: "",
    desiredLeague: "",
    currentLeague: "",
    Height: "",
    desiredPayment: "",
  });

  useEffect(() => {
    setLoading(true);
    RequestsUtils.players(token?.token).then((res) => {
      if (res.isDone) {
        setPlayers(res.result.data);
        setLoading(false);
      }
    });
  }, []);
  const [filter, setFilter] = useState(false);
  const [limit, setLimit] = useState(12);
  const [row, setRow] = useState(true);
  const onLoadMore = () => {
    setLimit((prev) => prev + 12);
  };
  const showFilter = () => {
    setFilter((prev) => !prev);
  };
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInput((prev) => ({ ...prev, text: lowerCase }));
  };

  return (
    <Layout title={"Best Player"}>
      <main className="main pt-36 pb-14 body2">
        <FilterModal show={filter} showFunc={showFilter} />
        <Searchbar
          Handler={inputHandler}
          Class="m-auto w-[70%] sm:w-[50%] sm:h-[38px] lg:w-[459px] lg:h-[42px]"
          func={showFilter}>
          {/* <ListButton
            firstfunc={() => setRow(false)}
            secfunc={() => setRow(true)}
            row={row}
          /> */}
        </Searchbar>
        {loading ? (
          <MyLoader />
        ) : (
          <div
            className={`grid ${
              row
                ? "md:grid-cols-1 m-auto"
                : "sm:grid-cols-2 lg:grid-cols-4 justify-items-center"
            } sm:grid-col-2 gap-8 md:gap-9 pt-6 p-2 sm:p-4 md:p-8 lg:p-12 sm:pt-8 md:pt-10 lg:w-[1008px] m-auto justify-center`}>
            <List Items={players} Limit={limit} Input={input} />
          </div>
        )}
        <LoadMore func={onLoadMore} length={players.length} limit={limit} />
      </main>
      <Footer />
    </Layout>
  );
}
// export async function getStaticProps() {
//   const players = await fetch(
//     ""
//   ).then((res) => res.json());
//   return {
//     props: {
//       players,
//     },
//   };
// }
