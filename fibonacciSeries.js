function fibonacciSeries(n){
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    let series = [0, 1, 1]; // Initialize the series with the first three numbers

    for (let i = 3; i < n; i++) {
        let next = series[i - 1] + series[i - 2];
        series.push(next);
    }
    return series;
        
}
console.log(fibonacciSeries(10))