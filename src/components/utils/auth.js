function isLogin (){
    return document.cookie.includes('login=true')
}
// 添加记录
function addLogin(){
    const date = new Date()
    const expiresTime = 147;
    date.setTime(date.getTime() + 147 * 24 * 60 * 60 *1000)
    document.cookie = `login=true;expires=${date.toGMTString()}`
}
// 删除记录
function deleteLogin(){
    const date = new Date()
    date.setTime(date.getTime() - 100000000)
    console.log(date.toGMTString())
    document.cookie = `login=true;expires=${date.toGMTString()}`
}
export default{
    isLogin,
    addLogin,
    deleteLogin,
}