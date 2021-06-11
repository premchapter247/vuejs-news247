import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/admin',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Post
        {
          name: 'AddPost',
          path: 'post/add',
          component: () => import('./components/base/Post'),
        },
        {
          name: 'Post List',
          path: 'post/list',
          component: () => import('./components/base/PostList'),
        },
        // Post Edit
        {
          name: 'Post Edit',
          path: 'post/edit/:id',
          component: () => import('./components/base/PostEdit'),
        },
        // Post Category list
        {
          name: 'Post Category',
          path: 'category/list',
          component: () => import('./components/base/Category/List'),
        },
        // Admin setting section
        {
          name: 'Website Setting',
          path: 'setting',
          component: () => import('./components/base/Setting'),
        },
        // Post Category Add
        {
          name: 'Add Post Category',
          path: 'category/add',
          component: () => import('./components/base/Category/Add'),
        },
        {
          name: 'Social Media Links',
          path: 'setting',
          component: () => import('./components/base/Setting'),
        },

      ],
    },
    {
      path: '/auth',
      component: () => import('@/views/dashboard/Login'),
      children: [
        // Login Form
        {
          name: 'Login Form',
          path: 'login',
          component: () => import('./components/base/Login'),
        },
        // Social Media
        // {
        //   name: 'Social Media Links',
        //   path: 'setting',
        //   component: () => import('./components/base/Setting'),
        // },
        // Registration Form
        {
          name: 'Registration Form',
          path: 'registration',
          component: () => import('./components/base/Registration'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/front/Index'),

    }
  ],
})
