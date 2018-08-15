import HelloWorld from './components/HelloWorld'
import User from './components/User'

export const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    props: true
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    props: true
  },
]