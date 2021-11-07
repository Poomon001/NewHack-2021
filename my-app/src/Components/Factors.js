import React, {useState} from "react"
import {Bar, Doughnut, Line, Pie} from "react-chartjs-2";

const Factors = (props) => {
    const {sender, subject, cc, date, body, attachments, total} = props.todo
    const [type, setType] = useState(1)
    console.log(attachments)
    const graph = {
        labels: ["Sender", "Subject", "CC", "Date", "Body Content", "Attachments"],
        datasets: [{
            label: 'Pfishing inspection',
            data: [sender, subject, cc, date, body, attachments],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    const onClickHandler = () => {
        if (type === 4) {
            setType(1)
        } else {
            setType(type + 1)
        }
    }
    const renderGraph = () =>{
        if (type === 1) {
            return (<div>
                <Pie
                    data={graph
                    }/>
            </div>)
        } else if (type === 2) {
            return (<div>
                <Line
                    data={graph}/>
            </div>)
        } else if (type === 3) {
            return (<div>
                <Bar
                    data={graph
                    }/>
            </div>)
        } else if (type === 4) {
            return (<div>
                <Doughnut data={graph}/>
            </div>)
        }

    }
    return (<div>
        {renderGraph()}
        <div className="dropdown-content" id="myDropdown">
            <button onClick={onClickHandler}>Change</button>
        </div>
    </div>)
}

export default Factors