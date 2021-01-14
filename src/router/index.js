import Vue from 'vue'
import Router from 'vue-router'
// 引入主页的组件
import ProjectManagement from '@/components/ProjectManagement/ProjectManagement';
import NetEdition from '@/components/NetEdition/NetEdition';
import PlanSettings from '@/components/PlanSettings/PlanSettings';
import SimRunning from '@/components/SimRunning/SimRunning';
import Help from '@/components/Help/Help';
// 引入项目管理的子组件
import ProjectCreation from '@/components/ProjectManagement/ProjectCreation';
import ProjectOpen from '@/components/ProjectManagement/ProjectOpen';
import ProjectClose from '@/components/ProjectManagement/ProjectClose';

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ProjectManagement',
      name: 'ProjectManagement',
      component: ProjectManagement,
      children:[{
        path: '/ProjectCreation',
        name: 'ProjectCreation',
        component: ProjectCreation,
      },
        {
          path: '/ProjectOpen',
          name: 'ProjectOpen',
          component: ProjectOpen,
        },
        {
          path: '/ProjectClose',
          name: 'ProjectClose',
          component: ProjectClose,
        },
      ]
    },
    {
      path: '/NetEdition',
      name: 'NetEdition',
      component: NetEdition
    },
    {
      path: '/PlanSettings',
      name: 'PlanSettings',
      component: PlanSettings
    },
    {
      path: '/SimRunning',
      name: 'SimRunning',
      component: SimRunning
    }
    ,
    {
      path: '/Help',
      name: 'Help',
      component: Help
    }
  ]
})