import Vue from 'vue'
export default Vue.directive('scroll', {
    inserted: function(el, binding) {
        el.addEventListener('click', function(event) {
            let elOffsetTop = document.getElementById(binding.value.id).offsetTop
            document.body.scrollTop = elOffsetTop
            document.documentElement.scrollTop = elOffsetTop
          //   binding.value.fn(binding.value.index);
        }, true);
    },

})