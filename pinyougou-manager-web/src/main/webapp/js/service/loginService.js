app.service('loginService',function ($http) {
    //读取 登录人名称
    this.loginName=function () {
        return $http.get('../login/name.do')
    }
})