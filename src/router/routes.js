
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        component: () => import('pages/index'),
        children: [
          {path: '', component: () => import('components/Keypad')},
          {path: 'keypad', component: () => import('components/Keypad')},
          {path: 'menulist', component: () => import('components/MenuList')},
          // {path: 'cart', component: () => import('components/Cart')},
          // {path: 'edit-items', component: () => import('components/ModalEditMenuList')}
        ]
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
