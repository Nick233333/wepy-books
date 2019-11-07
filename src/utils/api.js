import wepy from 'wepy'

const host = __BASE_URL__

const request = async (options, showLoading = true) => {
    if (typeof options === 'string') {
        options = {
            url: options
        }
    }
    if (showLoading) {
        wepy.showLoading({title: '加载中'})
    }
    options.url = host + '/' + options.url
    let response = await wepy.request(options)

    if (showLoading) {
        wepy.hideLoading()
    }

    if (response.statusCode === 500) {
        wepy.showModal({
            title: '提示',
            content: '服务器错误，请联系管理员或重试'
        })
    }
    return response
}

export default {
    request
}
