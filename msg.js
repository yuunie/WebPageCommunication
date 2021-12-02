window.msg = (function() {
    const storage = window.localStorage
    const _getStamp = () => {
        return Date.now()
    }
    const onmessage = (type = 'default', fun = () => {}) => {
        window.addEventListener('storage', () => {
            const port = window.location.port || '0000'
            const json = storage.getItem(`$msg_${port}_${type}`) || ''
            if (json === '') {
                return
            } 
            const data = JSON.parse(json)
            if ((_getStamp() - 1) <= data.stamp) {
                fun(data.msg)
            }
        })
    }
    const send = (type = 'default', msg = '') => {
        const port = window.location.port || '0000'
        storage.setItem(`$msg_${port}_${type}`, JSON.stringify({
            msg: msg,
            stamp: _getStamp()
        }))
    }
    return msg = {
        onmessage,
        send
    }
})()
