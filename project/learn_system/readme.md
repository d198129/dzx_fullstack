# 学习系统
- 客户？需求？存储同学信息，OA系统
- 学籍
    1. 同学信息登录及完善系统——原型设计表单(xoappiu)
    2. 照片上传功能——云开发文件上传
- 项目形式
    1. 小程序 用户端
    - vant + 云开发(微信/QQ小程序)
    2. pc端的Admin 后台系统
    - VUE+Elementui 分班级 分页 列表 详情
- 功能要求细分
    1. 角色区分 role -1>1>2>3>4>5>6
    - Admin/Teacher/StuAdmin/Student | TryStudnet
    - user表 _id uid( 11111) pro_num has_resume has_job shixi_danwei zhuanzheng_danwei bid ban
    can_waibao
    2. 试听功能
    - 邀请 运营 分析 分享 生成图功能
    - [小程序生成图](https://juejin.im/post/6844903663840788493)
    3. 学习跟进系统
    - github 提交 图
    - 手机用户的GitHub账号 position-relative ->图片 爬虫
    - 主动提交 
        1. 每个人都有一张图 新的覆盖旧的 gitPic _id url uid
        2. ts 标红
        3. 列表 班级
    - 文章
        1. articles _id uid title desc ts is_top
    - 项目
    - leetcode 算法
    - 外包
        1. 即时计件 倒计时2 提交代码记录 付费记录 开源出去