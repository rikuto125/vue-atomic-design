import HelloWorld from '@/components/pages/HelloWorld'
import IndexPage from '@/components/pages/IndexPage'
import AtomsPage from '@/components/pages/AtomsPage'
import MoleculesPage from '@/components/pages/MoleculesPage'
import OrganismsPage from '@/components/pages/OrganismsPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/atoms',
    name: 'AtomsPage',
    component: AtomsPage
  },
  {
    path: '/molecules',
    name: 'MoleculesPage',
    component: MoleculesPage
  },
  {
    path: '/organisms',
    name: 'OrganismsPage',
    component: OrganismsPage
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router



