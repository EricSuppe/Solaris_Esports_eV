class generator {
    constructor() {

    }
    /**
     * Filter function with conditional return and a optional maximum size.
     * @param {array} array the array to filter.
     * @param {function} condition the condition has to be true. Can be a statement or a function.
     * @param {number} maxSize the maximum number of elements that can be returned
     */
    *filter(array, condition, maxSize) {
        if (!maxSize || maxSize > array.length) {
            maxSize = array.length;
        }
        let count = 0;
        let i = 0;
        while (count < maxSize && i < array.length) {
            if(condition(array[i])) {
                yield array[i];
                count++;
            }
            i++;
        }
    }
}

export {generator as gen}