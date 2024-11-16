import { FC } from "react";

interface IProps {
    max: number
    diffDev: number
    diffTest: number
    diffProd: number
    diffDevTest: number
    diffTestProd: number
    titleDevTest: number
    titleTestProd: number
}


const Lines:FC<{props:IProps}> = ({props}) => {

  return (

      <svg>

            <line x1="65" y1={props.max + props.diffDev - 10} x2="65" y2={props.diffDev + 100} stroke="#898290" />
            <line x1="65" y1={props.diffDev + 100} x2="180" y2={props.diffDev + 100} stroke="#898290" />
            <line x1="180" y1={props.diffDev + 100} x2="180" y2={props.max + props.diffTest - 10} stroke="#898290" />
            
            <svg x={100} y={props.diffDev + 90} width={48} height={24}>
                {props.diffDevTest > 0 && <rect width={48} height={24} rx={15} fill="#FC440F" />}
                {props.diffDevTest < 0 && <rect width={48} height={24} rx={15} fill="#00CC99" />}
                {props.diffDevTest === 0 && <rect width={48} height={24} rx={15} fill="#898290" />}
                <text dominantBaseline="middle" x="50%" y={12} textAnchor="middle" className="text-bar">
                    {props.titleDevTest < 0 ? "+" + Math.abs(props.titleDevTest) : "-" + Math.abs(props.titleDevTest)}
                </text>
            </svg>

            <svg x={176.5} y={props.max + props.diffTest - 13} width="7" height="4" viewBox="0 0 7 4" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290"/>
            </svg>
            
            <line x1="200" y1={props.max + props.diffTest - 10} x2="200" y2={props.diffTest - props.diffDevTest + 100} stroke="#898290" />
            <line x1="200" y1={props.diffTest - props.diffDevTest + 100} x2="315" y2={props.diffTest - props.diffDevTest + 100} stroke="#898290" />
            <line x1="315" y1={props.diffTest - props.diffDevTest + 100} x2="315" y2={props.max + props.diffProd - 10} stroke="#898290" />

            <svg x={230} y={props.diffDev + 90} width={48} height={24}>
                {props.diffTestProd > 0 && <rect width={48} height={24} rx={15} fill="#FC440F" />}
                {props.diffTestProd < 0 && <rect width={48} height={24} rx={15} fill="#00CC99" />}
                {props.diffTestProd === 0 && <rect width={48} height={24} rx={15} fill="#898290" />}
                <text dominantBaseline="middle" x="50%" y={12} textAnchor="middle" className="text-bar">
                    {props.titleTestProd < 0 ? "+" + Math.abs(props.titleTestProd) : "-" + Math.abs(props.titleTestProd)}
                </text>
            </svg>

            <svg x={311.5} y={props.max + props.diffProd - 13} width="7" height="4" viewBox="0 0 7 4" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290"/>
            </svg>


      </svg>

  );
}
  
export default Lines;