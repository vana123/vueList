import { createStore } from 'vuex'
import { postModule } from '@/store/postModuke'

export default createStore({

    modules: {
        post: postModule
    }
})