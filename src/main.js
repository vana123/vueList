import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'

import components from '@/components/UI'
import router from '@/router/router';
import VIntersection from '@/directives/VIntersection';
import VFocus from '@/directives/VFocus';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.directive('intersection', VIntersection)
app.directive('focus', VFocus)

app
    .use(store)
    .use(router)
    .mount('#app')
