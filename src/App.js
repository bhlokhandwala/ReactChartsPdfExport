import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"

class App extends Component {
  cData = {
    labels: ["L 1", "L 2", "L 3", "L 4", "L 5"],
    datasets: [
      {
        label: "Label",
        data: [100, 150, 123, 170, 162],
        backgroundColor: ["red", "green", "yellow", "blue", "orange", "red"]
      }
    ]
  };

  div2PDF = e => {
    const but = e.target;
    but.style.display = "none";
    let input = window.document.getElementsByClassName("div2PDF")[0];

    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "pt");
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        input.clientWidth,
        input.clientHeight
      );
      pdf.save("chart.pdf");
      but.style.display = "block";
    });
  };

  render() {
    return (
      <div>
        <div className="div2PDF" style={{height:'400px', width:'400px'}}>
          <Bar
            data={this.cData}
            options={{
              title: {
                display: true,
                text: "Chart to PDF Demo",
                fontSize: 32
              },
              legend: {
                display: true,
                position: "right"
              }
            }}
            height={200}
          />
          <h1>burhan</h1>
        </div>
        <div>
          <button onClick={e => this.div2PDF(e)}>Export 2 PDF</button>
        </div>
      </div>
    );
  }
}

export default App;
