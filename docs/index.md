---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "cvnert"
  text: "记录学习笔记"
  tagline: 前端后端运维😵等等太多了,根本学不过来
  image: "https://cn.vitejs.dev/logo-with-shadow.png"
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
    title: '首席前端开发工程师,资深程序员',
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
      我们的团队
    </template>
    <template #lead>
我们团队的文化是鼓励创造力和创新的。我们鼓励大家展示自己的想法和独特的观点，相信每个人都有能力为团队带来新的灵感和突破。我们相信通过不断探索和尝试，我们能够突破传统的框架，创造出令人惊叹的成果。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
