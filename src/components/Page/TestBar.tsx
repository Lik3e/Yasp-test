import { FC } from "react";
import { ParamsData } from "../../features/data.slise";
import { Params } from "../../pages/Page";
import "./bar.css"

interface IProps {
  data: ParamsData
  graph: Params
}

const TestBar:FC<IProps> = ({data, graph}) => {
  if(!graph.y)  return <div>loading...</div>
  if (graph.front < 10)  { graph.front = 25; graph.y = graph.y - 25; graph.height = graph.height + 25 }
  if (graph.back < 10) { graph.back = 25; graph.y = graph.y - 25; graph.height = graph.height + 25 }
  if (graph.db < 10) { graph.db = 25; graph.y = graph.y - 25; graph.height = graph.height + 25 }

  return (

      <svg width={80} height={graph.height + 25 || 250} x={graph.x} y={graph.y || 0}>

        <rect height={graph.front || 25}  className="front-bar" />
        <rect height={graph.back || 25} y={graph.front || 0} className="back-bar" />
        <rect height={graph.db || 25} y={graph.front+graph.back || 0} className="db-bar" />

        <text dominantBaseline="middle" x="50%" textAnchor="middle" y={graph.front/2 || 0} className="text-bar">{data?.front}</text>
        <text dominantBaseline="middle" x="50%" textAnchor="middle" y={graph.front+graph.back/2 || 0} className="text-bar">{data?.back}</text>
        <text dominantBaseline="middle" x="50%" textAnchor="middle" y={graph.front+graph.back+graph.db/2 || 0} className="text-bar">{data?.db}</text>

        <text dominantBaseline="middle" x="50%" textAnchor="middle" y={graph.front+graph.back+graph.db + 20} className="text-bar-secondary">{graph?.title}</text>


      </svg>

  );
}
  
export default TestBar;