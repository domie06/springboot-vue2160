const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm43131/",
            name: "ssm43131",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm43131/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线测试管理系统"
        } 
    }
}
export default base
