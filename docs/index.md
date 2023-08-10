---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "cvnert"
  text: "记录学习笔记"
  tagline: 前端后端运维😵等等太多了,根本学不过来
  actions:
    - theme: brand
      text: 开始前端
      link: /html/index
    - theme: alt
      text: 开始后端
      link: /java/index

features:
  - title: 前端
    details: 没想好这一块写什么
  - title: 后端
    details: 没想好这一块写什么
  - title: 运维
    details: 没想好这一块写什么
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cvnert.oss-cn-beijing.aliyuncs.com/niu.jpg',
    name: 'Huan Niu',
    title: 'vue4创始人',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
   {
    avatar: 'https://cvnert.oss-cn-beijing.aliyuncs.com/ling.jpg',
    name: 'Ling Wang',
    title: '高级前端开发工程师,资深大厂程序员',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
   {
    avatar: 'https://cvnert.oss-cn-beijing.aliyuncs.com/ming.jpg',
    name: 'Ming Zhang',
    title: '前端开发专家,资深程序员,团队首席架构师',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
