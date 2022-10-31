function vector2D(v) {
    let magnitude = Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))
    return {Unitv: ([(v[0] / magnitude), (v[1] / magnitude)]), Unit: magnitude == 1, Magnitude: magnitude}
}

function vectorComponent(data){
    return [data.magnitude * Math.cos(data.theta), data.magnitude * Math.sin(data.theta)]
}

// vector2D[x,y]
