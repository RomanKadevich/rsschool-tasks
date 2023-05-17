export function creatFieldWithItemObj(rowLength, colLength) {
    for (let i = 0; i < rowLength; i++) {
        fieldMatrix[i] = [];
        for (let j = 0; j < colLength; j++) {
            fieldMatrix[i][j] = {
                open: false,
                withFlaf: false,
                withMine: false,
                neighborWithMine: 0,
            };
        }
    }
    return fieldMatrix;
}