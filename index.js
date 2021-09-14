// Your code here
function mapToNegativize(array) {
    return array.map(
        function(element) {
            return element * -1;
        }
    )
}

function mapToNoChange(array) {
    return array.map(
        function(element) {
            return element;
        }
    )
}

function mapToDouble(array) {
    return array.map(
        function(element) {
            return element * 2;
        }
    )
}

function mapToSquare(array) {
    return array.map(
        function(element) {
            return element * element;
        }
    )
}


function reduceToTotal(array, startingPoint= 0) {
    return array.reduce(
        function(accumulator, element) {
            return accumulator + element;
        },
        startingPoint
    )
}

function reduceToAllTrue(array) {
    return array.every(item => !!item) ? true : false;
}

function reduceToAnyTrue(array) {
    return array.some(item => !!item) ? true : false;
}