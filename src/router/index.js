import Vue from 'vue'
import Router from 'vue-router'
// 引入主页的组件
// 引入项目管理的子组件
import ProjectManagement from '@/components/ProjectManagement/ProjectManagement';
import ProjectCreation from '@/components/ProjectManagement/ProjectCreation';
import ProjectOpen from '@/components/ProjectManagement/ProjectOpen';
import ProjectClose from '@/components/ProjectManagement/ProjectClose';

// 引入路网编辑的子组件
import NetEdition from '@/components/NetEdition/NetEdition';
import VarEdition from '@/components/NetEdition/VarEdition';
import VarDisplay from '@/components/NetEdition/VarDisplay';

// 引入路网设置的子组件
import PlanSettings from '@/components/PlanSettings/PlanSettings';
import ResidentPoints from '@/components/PlanSettings/ResidentPoints';
import PublicVehicleSources from '@/components/PlanSettings/PublicVehicleSources';
import RestrictSector from '@/components/PlanSettings/RestrictSector';
import SettlementCamp from '@/components/PlanSettings/SettlementCamp';
import OtherSettings from '@/components/PlanSettings/OtherSettings';
// 引入仿真运行的子组件
import SimRunning from '@/components/SimRunning/SimRunning';
// 引入帮助的子组件
import Help from '@/components/Help/Help';



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
      component: NetEdition,
      children:[
        {
        path: '/VarEdition',
        name: 'VarEdition',
        component: VarEdition,
       },
        {
          path: '/VarDisplay',
          name: 'VarDisplay',
          component: VarDisplay,
        }
      ]
    },
    {
      path: '/PlanSettings',
      name: 'PlanSettings',
      component: PlanSettings,
      children: [
        {
          path: '/ResidentPoints',
          name: 'ResidentPoints',
          component: ResidentPoints,
        },
        {
          path: '/PublicVehicleSources',
          name: 'PublicVehicleSources',
          component: PublicVehicleSources
        },
        {
          path: '/RestrictSector',
          name: 'RestrictSector',
          component: RestrictSector
        },
        {
          path: '/SettlementCamp',
          name: 'SettlementCamp',
          component: SettlementCamp
        },
        {
          path:  '/OtherSettings',
          name:  'OtherSettings',
          component: OtherSettings
        }
      ]
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