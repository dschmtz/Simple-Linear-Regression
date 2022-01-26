export class SimpleLinearRegression {
    intercept: number = 0;
    slope: number = 0;

    constructor(x: any, y: any) {
        this.train(x, y);
    }

    train(x: any, y: any) {
        let n = x.length;

        if(n != y.length) {
            return;
        }

        let meanX = 0, meanY = 0;

        for(let i = 0; i < n; i++) {
            meanX += x[i];
            meanY += y[i];
        }

        meanX /= n, meanY /= n;
        let deltaXY = 0, deltaX = 0;

        for(let i = 0; i < n; i++) {
            deltaXY += (x[i] - meanX) * (y[i] - meanY);
            deltaX += Math.pow((x[i] - meanX), 2); 
        }

        this.slope = deltaXY / deltaX;
        this.intercept = meanY - this.slope * meanX;
    }

    score(x: any, y: any) {
        return 0;
    }

    predict(x:number) {
        return this.intercept + this.slope * x;
    }
}