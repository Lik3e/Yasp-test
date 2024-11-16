import { FC } from "react"
import { NormParams } from "../../pages/Page";
import "./bar.css";

const NormBar:FC<{props: NormParams}> = ({props}) => {

    return (
        <svg width={80} height={props.height + 25 || 40} x={props.x} y={props.y}>
            <svg height={props.height} rx="10">
                <path  fillRule="evenodd" clipRule="evenodd" d="M20.7031 0H10C4.47715 0 0 4.47715 0 10V45.934L41.9436 0H28.9482L0.0733177 31.6219L0.0733178 22.5925L20.7031 0ZM50.1886 0L0 54.9634V185C0 185.412 0.0249141 185.818 0.0733178 186.217V185.983L80 98.4525V84.1404L0.0733177 171.671L0.0733178 162.642L80 75.1109V60.7989L0.0733177 148.33L0.0733178 139.3L80 51.7694V37.4573L0.0733177 124.988L0.0733178 115.959L80 28.4279V14.1158L0.0733177 101.646L0.0733178 92.617L79.1672 5.99837C77.8126 2.89956 74.9328 0.619879 71.4769 0.108297L0.0733177 78.305L0.0733178 69.2755L63.3307 0H50.1886ZM80 107.482L2.8408 191.982C4.65697 193.844 7.19347 195 10 195H13.1536L80 121.794V107.482ZM80 130.823L21.3986 195H34.4674L80 145.135V130.823ZM80 154.165L42.7124 195H55.7811L80 168.477V154.165ZM80 177.506L64.0262 195H70C75.5229 195 80 190.523 80 185V177.506Z" fill="#4AB6E8"/>
            </svg>
            <rect x="20%" y={props.height/2 - 12} height={24} width={48} fill="#FFF" rx={5} />
            <text dominantBaseline="middle" textAnchor="middle" x="50%"  y={props.height/2} className="text-norm-bar">{props.norm}</text>
            <text dominantBaseline="middle" x="50%" textAnchor="middle" y={props.height + 20 || 12} className="text-bar-secondary">{props.title}</text>
        </svg>
    );
}

export default NormBar;