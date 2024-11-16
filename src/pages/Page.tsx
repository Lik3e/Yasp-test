import { Data, ParamsData } from "../features/data.slise";

import TestBar from "../components/Page/TestBar";
import NormBar from "../components/Page/NormBar";
import Lines from "../components/Page/Lines";

export interface Params extends ParamsData {
    title?: string
    height: number
    x?: number
    y?: number
}

export interface NormParams {
    norm: number
    height: number
    x: number
    y: number
    title: string
}

const Page = (props: {dataState: Data}) => {
    const dataState = props.dataState

    //Transfrom data from graph
    const maxValue = Math.max(Object.values(dataState?.dev).reduce((a, b) => a + b, 0), Object.values(dataState?.test).reduce((a, b) => a + b, 0), Object.values(dataState?.prod).reduce((a, b) => a + b, 0), dataState?.norm) || 200
    const max = 200

    const devSumm = Object.values(dataState?.dev).reduce((a, b) => a + b, 0)
    const testSumm = Object.values(dataState?.test).reduce((a, b) => a + b, 0)
    const prodSumm = Object.values(dataState?.prod).reduce((a, b) => a + b, 0)

    const dev = devSumm/(maxValue > devSumm * max ? 50 : maxValue) * max || 150
    const test = testSumm/(maxValue > testSumm * max ? 50 : maxValue) * max || 150
    const prod = prodSumm/(maxValue > prodSumm * max ? 50 : maxValue) * max || 150
    const norm = dataState.norm/(maxValue > dataState.norm * max ? 50 : maxValue) * max || 150

    const devGraph: Params = {
        title: "dev",
        x: 25,
        y: Math.abs(max - dev + max),
        height: dev === 0 ? max : dev,
        front: dataState?.dev.front/devSumm * dev || 50,
        back: dataState?.dev.back/devSumm * dev || 50,
        db: dataState?.dev.db/devSumm * dev || 50
    }

    const testGraph: Params = {
        title: "test",
        x: 145,
        y: Math.abs(max - test + max),
        height: test === 0 ? max : test,
        front: dataState?.test.front/testSumm * test || 50,
        back: dataState?.test.back/testSumm * test || 50,
        db: dataState?.test.db/testSumm * test || 50
    }

    const prodGraph: Params = {
        title: "prod",
        x: 270,
        y: Math.abs(max - prod + max),
        height: prod === 0 ? max: prod,
        front: dataState?.prod.front/prodSumm * prod || 50,
        back: dataState?.prod.back/prodSumm * prod || 50,
        db: dataState?.prod.db/prodSumm * prod || 50
    }

    const normGraph: NormParams = {
        norm: dataState.norm,
        height: norm < 50 ? 50 : norm,
        x: 395,
        y: Math.abs(max - norm + max),
        title: "норматив"
    }

    const diffDev = Math.abs(max - dev)
    const diffTest = Math.abs(max - test)
    const diffProd = Math.abs(max - prod)

    const titleDevTest = devSumm - testSumm
    const titleTestProd = testSumm - prodSumm


    const diffDevTest = dev - test
    const diffTestProd = test - prod

    const handleDownload = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(dataState)
          )}`;
          const link = document.createElement("a");
          link.href = jsonString;
          link.download = `${dataState.title}.json`;
          link.click();
    }

    return(
        <div className="container">

            <div className="test-container">
                <div className="test-header">
                    <span>
                        Колличество пройденных тестов "{dataState?.title}"
                    </span>
                    <div className="icon" onClick={() => handleDownload()}>
                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5C0.5 1.10218 0.658035 0.720644 0.93934 0.43934C1.22064 0.158035 1.60218 0 2 0C2.39782 0 2.77936 0.158035 3.06066 0.43934C3.34196 0.720644 3.5 1.10218 3.5 1.5C3.5 1.89782 3.34196 2.27936 3.06066 2.56066C2.77936 2.84196 2.39782 3 2 3ZM7 3C6.60218 3 6.22064 2.84196 5.93934 2.56066C5.65804 2.27936 5.5 1.89782 5.5 1.5C5.5 1.10218 5.65804 0.720644 5.93934 0.43934C6.22064 0.158035 6.60218 0 7 0C7.39782 0 7.77936 0.158035 8.06066 0.43934C8.34196 0.720644 8.5 1.10218 8.5 1.5C8.5 1.89782 8.34196 2.27936 8.06066 2.56066C7.77936 2.84196 7.39782 3 7 3ZM12 3C11.6022 3 11.2206 2.84196 10.9393 2.56066C10.658 2.27936 10.5 1.89782 10.5 1.5C10.5 1.10218 10.658 0.720644 10.9393 0.43934C11.2206 0.158035 11.6022 0 12 0C12.3978 0 12.7794 0.158035 13.0607 0.43934C13.342 0.720644 13.5 1.10218 13.5 1.5C13.5 1.89782 13.342 2.27936 13.0607 2.56066C12.7794 2.84196 12.3978 3 12 3Z" fill="#898290"/>
                        </svg>
                    </div>
                </div>
                <div className="test-bars-container">
                    <svg width={500} height={431}>

                        <Lines props={{max, diffDev, diffTest, diffProd, diffDevTest, diffTestProd, titleDevTest, titleTestProd}} />

                        <TestBar data={dataState?.dev} graph={devGraph} />
                        <TestBar data={dataState?.test} graph={testGraph} />
                        <TestBar data={dataState?.prod} graph={prodGraph} />

                        <NormBar props={normGraph} />

                    </svg>
                    <svg width={400} height={30} className="test-footer">
                        <rect height={16} width={16} rx={3} fill="#4AB6E8" />
                        <rect x="33%"  height={16} width={16} rx={3} fill="#AA6FAC" />
                        <rect x="66%"  height={16} width={16} rx={3} fill="#E85498" />
                        <text x="5%" y="40%" className="text-bar-secondary">Клиентская часть</text>
                        <text x="38%" y="40%" className="text-bar-secondary">Серверная часть</text>
                        <text x="71%" y="40%" className="text-bar-secondary">База данных</text>
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default Page;