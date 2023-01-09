function Centers(data) {
    data.sort((a, b) => a - b)
    let median = data.length % 2 !== 0 ? data[Math.round((data.length / 2) - 1)] : (data[Math.round((data.length / 2) - 1)] + data[Math.round((data.length / 2))])/2
    
    let indexOfMedian = data.length % 2 == 0 ? (Math.round((data.length / 2) - 1) + Math.round((data.length / 2)))/2 : Math.round((data.length / 2) - 1)

    let q1d = data.filter((v,i) => {if(i < indexOfMedian) {return v}})
    
    let q1 = q1d.length % 2 !== 0 ? q1d[Math.round((q1d.length / 2) - 1)] : (q1d[Math.round((q1d.length / 2) - 1)] + q1d[Math.round((q1d.length / 2))])/2

    let q3d = data.filter((v,i) => {if(i > indexOfMedian) {return v}})
    let q3 = q3d.length % 2 !== 0 ? q3d[Math.round((q3d.length / 2) - 1)] : (q3d[Math.round((q3d.length / 2) - 1)] + q3d[Math.round((q3d.length / 2))])/2
    return [data[0], q1, median, q3, data[data.length - 1], q1d, q3d,data, indexOfMedian]
}
