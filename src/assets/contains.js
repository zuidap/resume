const KEYS = [
  "HTML5",
  "HTML",
  "CSS3",
  "CSS",
  "position",
  "flex",
  "Grid",
  "JavaScript",
  "TypeScript",
  "Objective-C",
  "Swift",
  "JS",
  "Ts",
  "Vue",
  "reactNative",
  "Taro",
  "flutter",
  "React",
  "Next",
  "Node",
  "Express",
  "AntDesign",
  "Bootstrap",
  "jQuery",
  "ES6",
  "小程序开发",
  "Vscode",
  "Git",
  "SVN",
  "DevTools",
  "scss",
  "less",
  "Tailwind",
  "cij",
  "Next",
];

function createItem(item) {
  return { hvIcon: true, ...item };
}

const PENG = {
  userData: {
    user: {
      name: "李子鹏",
      enName: "Zipeng li",
      sex: "男",
      bir: "1992.09",
      native: "河北",
      school: "邢台学院",
      schoolUrl:
        "https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd=%E9%82%A2%E5%8F%B0%E5%AD%A6%E9%99%A2",
      professional: "计算机科学与技术",
      degree: "本科",
      endTime: "2015",
    },
    job: {
      postName: "前端开发工程师",
      city: "北京",
      salary: "18K",
    },
    connects: [
      { name: "主页:zuidap.cool", url: "https://zuidap.cool", isBlank: true },
      { name: "电话:13699209161", url: "tel:13699209161" },
      { name: "邮箱:13699209161@163.com", url: "mailto:13699209161@163.com" },
    ],
  },
  sectionJob: {
    title: "工作经历",
    items: [
      createItem({
        name: "越亮传奇科技股份有限公司",
        time: "2015.7~2022.9",
        content:
          "公司性质：私营·民企 | 公司规模：500~1000人 | 公司行业：软件开发/移动互联网/电子商务",
      }),
      createItem({
        name: "主要职责:",
        childrens: [
          createItem({ content: "1、负责公司项目移动端iOS开发与迭代维护工作" }),
          createItem({ content: "2、负责前端UI、业务的开发与维护工作" }),
          createItem({
            content: "3、负责开发中架构设计、技术升级、新技术预研",
          }),
          createItem({
            content:
              "4、参与前端产品需求评审、功能设计、实现、维护以及文档编等工作",
          }),
        ],
      }),
    ],
  },
  sectionSkills: {
    title: "专业技能",
    items: [
      createItem({ content: "熟练掌握 HTML，CSS 和 JavaScript;" }),
      createItem({ content: "熟练掌握 flex、position等布局方案;" }),
      createItem({ content: "熟练掌握React、Next、AntDesign、等前端框架;" }),
      createItem({ content: "熟练掌握 cij、less、Tailwind、等css方案;" }),
      createItem({ content: "熟练掌握TypeScript、Dart等静态语言;" }),
      createItem({ content: "熟悉Vue、Bootstrap、jQuery、等前端热门框架;" }),
      createItem({ content: "熟练pc端、后台管理、H5项目开发;" }),
      createItem({
        content: "熟练掌握 Objective-C、Swift、Dart 移动端开发语言;",
      }),
      createItem({ content: "熟悉 reactNative、flutter等跨平台解决方案;" }),
      createItem({ content: "了解Linux、Nginx等服务端技术" }),
      createItem({ content: "熟练使用Git、SVN、Vscode、DevTools等开发工具" }),
      createItem({
        content:
          "掌握数据结构、算法和计算机网络等软件开发必备知识，具备良好的计算机和操作系统基础",
      }),
      createItem({
        content:
          "具备良好的沟通协调能力和团队合作精神，良好的学习、动手以及解决问题的能力",
      }),
    ],
  },
  sectionAssessment: {
    title: "自我评价",
    items: [
      createItem({
        content:
          "本人热爱软件开发事业，对程序开发有浓厚的兴趣，熟练app、网页开发用到工具、语言、常用架构和常用第三方库。工作至今参与过多个完整的app、web项目的开发到上线的过程。关注前端新出现的新技术技术，积极学习与研究。有良好的团队精神与沟通能力，也能独立进行问题的分析，并解决遇到问题。乐观向上，有恒心有毅力富有责任感。",
      }),
    ],
  },
  sectionProject: {
    title: "项目经历",
    items: [
      createItem({
        name: "电信OA办公系统",
        time: "2018.5~2021.9",
        childrens: [
          createItem({
            content:
              "项目描述：一款公司内部OA办公的系统，包含web端、移动端(iOS设备、安卓设备、iPad)。主要功能，实现多端在线办公，在线流程发起、审批、退回等，人员管理、内部应用管理、外部系统对接、签到打卡，企业通讯录等",
          }),
          createItem({
            content: "技术栈：h5原生、app原生混合开发、flex布局",
          }),
          createItem({
            content: "项目职责：",
            childrens: [
              createItem({
                content: "1、参与web端的开发，页面布局实现与功能的实现;",
                hvIcon: false,
              }),
              createItem({
                content: "2、参与H5页面的开发与移动原生的对接;",
                hvIcon: false,
              }),
              createItem({
                content: "3、负责web的维护与新功能的添加;",
                hvIcon: false,
              }),
              createItem({
                content:
                  "4、参与移动端产品需求评审、功能设计、实现、维护等工作;",
                hvIcon: false,
              }),
              createItem({
                content: "5、负责移动端的项目搭建和具体实现;",
                hvIcon: false,
              }),
            ],
          }),
        ],
      }),
      createItem({
        name: "电信大屏",
        time: "2021.1~2021.12",
        childrens: [
          createItem({
            content:
              "项目描述：电信数字化大屏系统，实现可视化信息监测，动态值班安排，服务器信息预警等功能",
          }),
          createItem({
            content: "项目职责：",
            childrens: [
              createItem({
                content:
                  "1、根据UI图，实现显示效果，使用ajax请求与后台交互调试接口;",
                hvIcon: false,
              }),
              createItem({
                content: "2、兼容各主流浏览器，优化网站前端性能;",
                hvIcon: false,
              }),
              createItem({
                content: "4、负责web的维护与新功能的添加;",
                hvIcon: false,
              }),
            ],
          }),
        ],
      }),
    ],
  },
};

export { KEYS, PENG };
