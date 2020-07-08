Vue.component('back-to-top', {
    template: '#backToTop',
    name: 'BackToTop',
    props: {
      text: {
        type: String,
        default: 'text'
      },
      visibleoffset: {
        type: [String, Number],
        default: 300
      },
      right: {
        type: String,
        default: '30px',
      },
      bottom: {
        type: String,
        default: '40px',
      },
    },
    data () {
      return {
        visible: false
      }
    },
    mounted () {
      window.smoothscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll)
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
        }
      }
      window.addEventListener('scroll', this.catchScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.catchScroll)
    },
    methods: {
      catchScroll () {
        this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
      },
      
      backToTop () {
        window.smoothscroll()
        this.$emit('scrolled');
      }
    }
  }) 
  new Vue({
    
  }).$mount('#app')