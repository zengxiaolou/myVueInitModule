import request from "@/utils/service/request"

// 登录
export function login(data) {
    return request({
        url:'api/login/',
        method:'post',
        data
    })
}

// 获取用户信息
export function getInfo(id) {
    return request({
        url:`api/users/${id}/`,
        method: 'get',
    })
}

export function changeUserInfo(id, data) {
    return request({
        url: `api/users/${id}/`,
        method: 'patch',
        data
    })
}

// 注册用户
export function register(data) {
    return request({
        url: 'api/users/',
        method: 'post',
        data
    })
}

//登出
export function logout() {
    return request({
        url:'api/user/logout/',
        method: 'post'
    })
}

//获取图片验证码
export function captcha() {
    return request({
        url:'api/captcha/',
        method: 'post',
    })
}

// 检测图形验证码是否正确
export function checkCaptcha(data) {
    return request({
        url:'api/check-captcha/',
        method: 'post',
        data
    })
}

// 重置密码检测图形验证码是否争取
export function restCheckCaptcha(data) {
    return request({
        url:'api/reset-password/check-captcha/',
        method: 'post',
        data
    })
}

// 重置密码
export function restPassword(id,data) {
    return request({
        url:`api/rest-password/${id}/`,
        method: 'patch',
        data
    })
}

// 获取短信验证码
export function getSms(data) {
    return request({
        url: 'api/codes/',
        method: 'post',
        data
    })

}
// 获取短信验证码
export function restPasswordGetSms(data) {
    return request({
        url: 'api/forget/codes/',
        method: 'post',
        data
    })
}

//解绑&绑定手机号
export function settingMobile(id,data) {
    return request({
        url: `api/setting-mobile/${id}/`,
        method: 'patch',
        data
    })
}

// 获取邮箱验证码
export function getEmailCode(data) {
    return request({
        url:`api/get-email-code/`,
        method: 'post',
        data
    })
}

// 解绑&绑定邮箱
export function settingEmail(id, data) {
    return request({
        url: `api/setting-email/${id}/`,
        method: 'patch',
        data
    })
}

// 实名认证
export function realNameIdentify(data) {
    return request({
        url:'api/real-name/',
        method: 'post',
        data
    })

}

// 设置收款方式
export function collection(id, data) {
    return request({
        url:`api/collection/${id}/`,
        method: 'put',
        data,
    })
}
