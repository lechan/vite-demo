/**
 * 给vue3的reactive对象赋值新的对象
 * @param { Object } reactiveObject 
 * @param { Object } data 
 */
export const setReactiveObject = (reactiveObject, data) => {
    const reactiveObjectKeyArr = Object.keys(reactiveObject)
    const keyArr = Object.keys(data)
    if (keyArr.length > 0) {
        keyArr.forEach(key => {
            reactiveObject[key] = data[key]
        })
    } else {
        reactiveObjectKeyArr.forEach(key => {
            reactiveObject[key] = ''
        })
    }
}
