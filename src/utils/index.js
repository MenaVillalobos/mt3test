export function uniqueId() {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(16).toString().replace('.',''));
}