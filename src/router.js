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
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
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
        // Post Category Add
        {
          name: 'Add Post Category',
          path: 'category/add',
          component: () => import('./components/base/Category/Add'),
        },
        // Login Form
        {
          name: 'Login Form',
          path: 'login',
          component: () => import('./components/base/Login'),
        },
        // Registration Form
        // {
        //   name: 'Registration Form',
        //   path: 'registration',
        //   component: () => import('./components/base/Registration'),
        // },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/front/Index'),

    }
  ],
})
