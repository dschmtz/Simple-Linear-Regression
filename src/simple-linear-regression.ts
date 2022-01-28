export class SimpleLinearRegression {
    intercept: number = 0;
    slope: number = 0;

    constructor(x: number[], y: number[]) {
        this.train(x, y);
    }

    train(x: number[], y: number[]) {
        let n = x.length;

        if(n != y.length) {
            throw new Error("Arrays have to be of same size");
        }

        let meanX = 0, meanY = 0;

        for(let i = 0; i < n; i++) {
            meanX += x[i];
            meanY += y[i];
        }

        meanX /= n, meanY /= n;
        let sigmaXY = 0, sigmaX = 0;

        for(let i = 0; i < n; i++) {
            sigmaXY += (x[i] - meanX) * (y[i] - meanY);
            sigmaX += Math.pow((x[i] - meanX), 2); 
        }

        this.slope = sigmaXY / sigmaX;
        this.intercept = meanY - this.slope * meanX;
    }

    score(x: number[], y: number[]) {
        let n = y.length;
        let meanY = 0;

        if(n != x.length) {
            throw new Error("Arrays have to be of same size");
        }

        for(let i = 0; i < n; i++) {
            meanY += y[i];
        }

        meanY /= n;
        let sse = 0, sst = 0;

        for(let i = 0; i < n; i++) {
            sse += Math.pow((y[i] - this.predict(x[i])), 2);
            sst += Math.pow((y[i] - meanY), 2);
        }

        return 1 - sse / sst;
    }

    predict(x: number) {
        return this.intercept + this.slope * x;
    }
}
