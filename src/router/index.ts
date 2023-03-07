import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "首页"
      },
      component: () => import("../views/home/index.vue")
    },
    {
      path: "/component",
      name: "Component",
      meta: {
        title: "组件"
      },
      component: () => import("../views/component/index.vue")
    },
    {
      path: "/template",
      name: "Template",
      meta: {
        title: "模板"
      },
      component: () => import("../views/template/index.vue")
    },
    {
      path: "/about",
      name: "About",
      meta: {
        title: "关于"
      },
      component: () => import("../views/about/index.vue")
    },
    {
      path: "/comp",
      name: "Comp",
      meta: {
        title: "组件"
      },
      redirect: 'comp/action-sheet',
      children: [
        {
          path: "action-sheet",
          name: "ActionSheet",
          meta: {
            title: "操作栏"
          },
          component: () => import("../views/component/actionSheet.vue")
        },
        {
          path: "button",
          name: "Button",
          meta: {
            title: "按钮"
          },
          component: () => import("../views/component/button.vue")
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // @ts-ignore
  document.title = to.meta.title ? to.meta.title : '番茄Ui'
  next()
})

export default router
