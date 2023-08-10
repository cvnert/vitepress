export default {
  themeConfig: {
    siteTitle: "cvnert的学习笔记",
    logo: "https://cvnert.oss-cn-beijing.aliyuncs.com/%E6%AD%A3%E5%8D%97.jpeg",
    nav: [
      {
        text: "前端",
        items: [
          { text: "html", link: "../html/index" },
          { text: "css", link: "../css/index" },
          { text: "js", link: "../js/index" },
          { text: "vue", link: "../vue/index" },
          { text: "react", link: "../react/index" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "express", link: "../express/index" },
          { text: "nest", link: "../nest/index" },
          { text: "java", link: "../java/index" },
          { text: "python", link: "../python/index" },
          { text: "go", link: "../go/index" },
        ],
      },
      {
        text: "运维",
        items: [
          { text: "docker", link: "../docker/index" },
          { text: "...持续更新", link: "/ContinuouSupdates" },
        ],
      },
      {
        text: "408",
        items: [
          { text: "数据结构", link: " " },
          { text: "计算机网络", link: " " },
          { text: "操作系统", link: " " },
          { text: "计算机组成原理", link: " " },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cvnert",
      },
      {
        icon: {
          svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>',
          link: "https://space.bilibili.com/123811533?spm_id_from=333.1007.0.0",
        },
      },
    ],
    sidebar: {
      "/html/": [
        {
          text: "html",
          collapsed: true,
          items: [
            { text: "常用标签", link: "/html/base" },
            { text: "h5新增标签", link: "/html/h5" },
          ],
        },
      ],
      "/css/": [
        {
          text: "css",
          collapsed: true,
          items: [
            { text: "常用css", link: "/css/base" },
            { text: "css3", link: "/css/css3" },
            { text: "不常见的css", link: "/css/unusual" },
            { text: "炫酷的css", link: "/css/example" },
          ],
        },
      ],
      "/js/": [
        {
          text: "js",
          collapsed: true,
          items: [
            { text: "基础", link: "/js/foundation" },
            { text: "进阶", link: "/js/intermediate" },
            { text: "高级", link: "/js/senior" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "vue",
          collapsed: true,
          items: [
            { text: "基础", link: "/vue/foundation" },
            { text: "进阶", link: "/vue/intermediate" },
            { text: "高级", link: "/vue/senior" },
          ],
        },
      ],
      "/react/": [
        {
          text: "react",
          collapsed: true,
          items: [
            { text: "基础", link: "/react/foundation" },
            { text: "进阶", link: "/react/intermediate" },
            { text: "高级", link: "/react/senior" },
          ],
        },
      ],
      "/express/": [
        {
          text: "express",
          collapsed: true,
          items: [
            { text: "基础", link: "/express/foundation" },
            { text: "进阶", link: "/express/intermediate" },
            { text: "高级", link: "/express/senior" },
          ],
        },
      ],
      "/nest/": [
        {
          text: "nest",
          collapsed: true,
          items: [
            { text: "基础", link: "/nest/foundation" },
            { text: "进阶", link: "/nest/intermediate" },
            { text: "高级", link: "/nest/senior" },
          ],
        },
      ],
      "/java/": [
        {
          text: "Java",
          items: [
            {
              text: "基础",
              collapsed: true,
              items: [
                { text: "java基础", link: "/java/foundation" },
                {
                  text: "java基础语法",
                  link: "/java/base",
                },
              ],
            },
            { text: "进阶", link: "/java/intermediate" },
            { text: "高级", link: "/java/senior" },
          ],
        },
      ],
      "/python/": [
        {
          text: "python",
          collapsed: true,
          items: [
            { text: "基础", link: "/python/foundation" },
            { text: "进阶", link: "/python/intermediate" },
            { text: "高级", link: "/python/senior" },
          ],
        },
      ],
      "/go/": [
        {
          text: "go",
          collapsed: true,
          items: [
            { text: "基础", link: "/go/foundation" },
            { text: "进阶", link: "/go/intermediate" },
            { text: "高级", link: "/go/senior" },
          ],
        },
      ],
      "/docker/": [
        {
          text: "docker",
          collapsed: true,
          items: [
            { text: "基础", link: "/docker/foundation" },
            { text: "进阶", link: "/docker/intermediate" },
            { text: "高级", link: "/docker/senior" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Cvnert",
    },
  },
  base: "/vitepress/",
};
