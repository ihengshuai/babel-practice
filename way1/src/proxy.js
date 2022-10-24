const user = {};

const userProxy = new Proxy(user, {
    get(target, k) {
        return target[k]
    }
})