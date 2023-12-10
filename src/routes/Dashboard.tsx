import React from "react";
import { Form } from "react-router-dom";
import TopBar from "./Header";
import { Config, TopLevelSpec, compile } from 'vega-lite';
import embed from 'vega-embed';
import './Dashboard.css'

const Dashboard: React.FC = () => {
    const getRandomColor = () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    const infoCourse = {
        type: "Course",
        name: "IUI",
        details: <p>Streak<br />35 Days</p>,
        color: getRandomColor(),
        favorite: true,
    };

    return (
        <>
            <TopBar />
            <h1>Welcome</h1>
            <div className="courses">
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
                <CourseElement infoCourse={infoCourse} />
                <ProgressStatsElement />
            </div>
        </>
    );
}

const getRandomColor = () => `rgba(${56 + Math.floor(Math.random() * 200)},
                                    ${56 + Math.floor(Math.random() * 200)},
                                    ${56 + Math.floor(Math.random() * 200)}, 0.4)`;

function CourseElement({ infoCourse }: any) {
    let favorite = infoCourse.favorite;
    setInterval(ChangeColor, 2000)
    return (
        <div className="course-cardboard"
            style={{ backgroundColor: getRandomColor() }}
        >
            <h3>{infoCourse.type}</h3>
            <div className="title-details">
                <h2 className="title">
                    {infoCourse.name}
                </h2>
                <div className="details">
                    {infoCourse.details}
                </div>
            </div>
            <div className="button-controls">
                <Form method="post">
                    <button
                        name="start"
                    >
                        Start Now
                    </button>
                    <button
                        name="favorite"
                        value={favorite ? "false" : "true"}
                        aria-label={
                            favorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                    >
                        {infoCourse.favorite ? "★" : "☆"}
                    </button>
                </Form>
            </div>
        </div>
    );
}

function ChangeColor() {
    const cardboardCollection = document.getElementsByClassName("course-cardboard")
    const carboards = Array.from(cardboardCollection) as HTMLElement[]
    carboards.forEach(carboard => {
        carboard.style.backgroundColor = getRandomColor()
    });
}

function ProgressStatsElement() {
    VegaGraphSpec()
    return (
        <div className="stats-cardboard"
            style={{ backgroundColor: getRandomColor() }}
        >
            <h3>Progress</h3>
            <div className="title-details">
                <h2 className="title">
                    OMM
                </h2>
                <div className="details">
                    Consistent progress
                </div>
            </div>
            <div id="graph">
            </div>
        </div>
    )
}


async function VegaGraphSpec() {
    const vegaLiteSpec: TopLevelSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        background: 'none',
        data: {
            values: [
                { a: 0, b: 28 },
                { a: 1, b: 55 },
                { a: 2, b: 43 },
                { a: 3, b: 91 },
                { a: 4, b: 81 },
                { a: 5, b: 53 },
                { a: 6, b: 19 },
                { a: 7, b: 87 },
                { a: 8, b: 52 }
            ]
        },
        mark: 'line',
        encoding: {
            x: { field: 'a', type: 'quantitative', axis: { labelAngle: 0 } },
            y: { field: 'b', type: 'quantitative' },
        },
    };

    const config: Config = {
        line: {
            color: 'firebrick'
        }
    };

    const vegaSpec = compile(vegaLiteSpec, { config }).spec;
    const result = await embed('#graph', vegaSpec, { renderer: "svg", actions: true});

    console.log(result.view);
    return result.view
}

export default Dashboard;