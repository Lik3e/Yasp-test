import { ChangeEvent, useState } from "react";
import Page from "./pages/Page";
import { useGetDataQuery } from "./features/data.api";
import { useAppSelector } from "./app/hooks";
import { Data } from "./features/data.slise";

const urlOptions = [
  {title: "First", url: 1},
  {title: "Second", url: 2},
  {title: "Third", url: 3},
  {title: "Fourth", url: 4},
  {title: "Five", url: 5}
]

function App() {
    //Select data
    const dataState = useAppSelector(state => state.dataState).data as Data
    const [url, setUrl] = useState<number>(urlOptions[0].url);

    const selectUrl = (val: ChangeEvent<HTMLSelectElement>) => {
      setUrl(Number(val.target.value))
    }

    useGetDataQuery(url, {refetchOnMountOrArgChange: url});

  if (!dataState) return <div>loading...</div>

  return (
    <div className="App">
      {/* Select url */}
      <select name="selectData" onChange={selectUrl}>
          {
              urlOptions.map(item => {
                  return(
                      <option key={item.title} value={item.url}>{item.title}</option>
                  )
              })
          }
      </select>

      {/* Page with data */}
      <Page dataState={dataState} />
    </div>
  );
}

export default App;
