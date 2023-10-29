
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    // Применяем алгоритм сортировки
    const sortedArray = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // Добавляем элементы в прямом порядке
            for (let j = 0; j < matrix[i].length; j++) {
                sortedArray.push(matrix[i][j]);
            }
        } else {
            // Добавляем элементы в обратном порядке
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                sortedArray.push(matrix[i][j]);
            }
        }
    }

    return sortedArray;
}
