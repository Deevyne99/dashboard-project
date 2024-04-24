import { useEffect, useRef } from 'react'
// import { Chart } from 'react-chartjs-2'
import { Chart } from 'chart.js'

const CandlestickChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    // Register the candlestick chart type
    Chart.defaults.candlestick = Chart.defaults.bar
    Chart.controllers.candlestick = Chart.controllers.bar.extend({
      updateElement: function (element, index) {
        var meta = this.getMeta()
        var xScale = this.getScaleForId(meta.xAxisID)
        var yScale = this.getScaleForId(meta.yAxisID)
        var dataset = this.getDataset()
        var datasetIndex = this.index
        var custom = element.custom || {}
        var barWidth = custom.barWidth || 10
        var data = dataset.data[index]

        // Update the bars
        Chart.helpers.extend(element, {
          _chart: this.chart,
          _datasetIndex: datasetIndex,
          _index: index,
          _model: {
            x: xScale.getPixelForValue(data.t),
            y: yScale.getPixelForValue(data.h),
            base: yScale.getPixelForValue(data.l),
            width: barWidth,
            open: yScale.getPixelForValue(data.o),
            close: yScale.getPixelForValue(data.c),
            backgroundColor: element.custom
              ? element.custom.backgroundColor
              : null,
            borderColor: element.custom ? element.custom.borderColor : null,
            borderWidth: element.custom ? element.custom.borderWidth : null,
          },
        })

        element.pivot()
      },
    })

    // Create the chart
    const ctx = chartRef.current.getContext('2d')
    new Chart(ctx, {
      type: 'candlestick',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Candlestick Chart',
            data: [
              { t: 'January', o: 100, h: 150, l: 90, c: 120 },
              { t: 'February', o: 120, h: 170, l: 110, c: 140 },
              { t: 'March', o: 140, h: 180, l: 120, c: 160 },
              { t: 'April', o: 160, h: 190, l: 130, c: 180 },
              { t: 'May', o: 180, h: 200, l: 140, c: 200 },
              { t: 'June', o: 200, h: 210, l: 150, c: 220 },
              { t: 'July', o: 220, h: 230, l: 160, c: 240 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
    })
  }, [])

  return (
    <div>
      <h2>Candlestick Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  )
}

export default CandlestickChart
