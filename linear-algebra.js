function vector2D(v) {
    let magnitude = Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))
    return {Unitv: ([(v[0] / magnitude), (v[1] / magnitude)]), Unit: magnitude == 1, Magnitude: magnitude}
}

// vector2D([x,y]) // {Unitv: [x,y], Unit: true/false, Magnitude: int}

function vectorComponent(data){
    return [data.magnitude * Math.cos(data.theta), data.magnitude * Math.sin(data.theta)]
}

// vectorComponent({magnitude, theta}) // [x,y] (component form)

function parametricVectorLine(v) {
    let slope = `${v[1]}/${v[0]}`
    return {text: `{[1,0] + t[${v.toString()}] | t∈R}`, slope, LaTeX: `\\{ {\\hat{\\textbf{\\i}}} + t \\begin{bmatrix} ${v[0]}\n \\\\ \n ${v[1]} \\end{bmatrix}  | t \\in \\mathbb{R}\\}
`, altLaTeX: `\\{ {\\hat{\\textbf{\\i}}} + t  \\vec{v} | t \\in \\mathbb{R}\\}`, equation: 'y=' + slope + 'x'}
}

function parametricVectorPoint(v,mag) {
    return (v*mag) + [1,0]
}

// parametricVectorLine([x,y]) // {text: {'[1,0] + t[x,y] | t∈R', [y,x], LateX: 'Latex code', altLaTeX: 'alternate Latex code', equation: 'y=mx'}
