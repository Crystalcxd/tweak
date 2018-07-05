Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
<div class="blog-post">
<h3>{{ post.title }}</h3>
<button v-on:click="$emit('enlarge')">
Enlarge text
</button>      
<div v-html="post.title"></div>
</div>`
})

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize: 1
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})

new Vue({
    el: '#example-3',
    data: {
        checkedNames: ''
    }
})

new Vue({
    el:'#example-4',
    data: {
        message:""
    }
})

new Vue({
    el: '#example-6',
    data: {
        selected: []
    }
})
