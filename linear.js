class Vector {
    constructor(coordinates) {
        this.val = coordinates;
        this.dim = coordinates.length;
        var sumOfSquares = 0;
        for (var i = 0; i < this.dim; i++) {
            sumOfSquares += this.val[i] * this.val[i];
        }
        this.magnitude = Math.sqrt(sumOfSquares);
    }
}

var vm = {
    add: function(v1, v2) {
        if (v1.dim === v2.dim) {
            var v3 = [];
            for (var i = 0; i < v1.dim; i++) {
                v3[i] = v1.val[i] + v2.val[i];
            }
            return new Vector(v3);
        } else {
            return null;
        }
    },
    subtract: function(v1, v2) {
        if (v1.dim === v2.dim) {
            var v3 = [];
            for (var i = 0; i < v1.dim; i++) {
                v3[i] = v2.val[i] - v1.val[i];
            }
            return new Vector(v3);
        } else {
            return null;
        }
    },
    scalarX: function(c, v1) {
        var v2 = [];
        for (var i = 0; i < v1.dim; i++) {
            v2[i] = c * v1.val[i];
        }
        return new Vector(v2);
    },
    direction: function(v1) {
        if (v1.magnitude !== 0) {
            v1.direction = this.scalarX((1/v1.magnitude), v1).val;
            return v1;
        } else {
            return null;
        }
    },
    dotProduct: function(v1, v2) {
        if (v1.dim === v2.dim) {
            var dotProduct = 0;
            for (var i = 0; i < v1.dim; i++) {
                dotProduct += v1.val[i] * v2.val[i];
            }
            return dotProduct;
        } else {
            return null;
        }
    },
    angleBetweenRad: function(v1, v2) {
        //in radians
        if (v1.magnitude !== 0 && v2.magnitude !== 0) {
            return Math.acos((this.dotProduct(v1,v2)) / (v1.magnitude * v2.magnitude));
        } else {
            return 0
        }
    },
    angleBetweenDeg: function(v1,v2) {
        return this.angleBetweenRad(v1,v2) * 180 / Math.PI;
    },
    isOrthogonal: function(v1,v2) {

        if (Math.abs(this.dotProduct(v1,v2)) < 0.00000000000000000001) {
            return true;
        } else {
            return false;
        }
    },
    isParallel: function(v1, v2) {
        console.log(this.angleBetweenRad(v1,v2));
        if (this.angleBetweenRad(v1,v2) === 0 || this.angleBetweenRad(v1,v2).toFixed(5) === Math.PI.toFixed(5)) {
            return true;
        } else {
            return false;
        }
    }
}
