const vm = Vue.createApp({
    data(){
        return{
            firstName: "Ros",
            lastName: "Dul",
            url: 'https://itdul.blogspot.com/',
            raw_url: '<a href="https://www.google.com" target="_blank"> Google </a>',
            age: 25
        }
    },
    methods:{
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increase(){
            this.age++
        },
        updateLastName(event){
            this.lastName = event.target.value
        }
    }

}).mount("#app2")



