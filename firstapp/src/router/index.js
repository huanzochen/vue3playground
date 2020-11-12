import  { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home component</div>' }
const About = { template: '<div>About component</div>' }
const Google = { template: '<div> Google OAuth </div>' }

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/oauth/google/callback', component: Google}
    // {path: '/google/oauth',
    //  redirect: to => {
    // // the function receives the target route as the argument
    //   // we return a redirect path/location here.
    //   return { path: '/search', query: { q: to.params.searchText } }
    //  },
    // }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router