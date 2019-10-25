
import Vue from 'vue';

export default Vue.directive('anchor', {
     inserted: function (el, binding) {
          el.addEventListener('click', function (event) {
               event.stopPropagation();
               if (document.documentElement.scrollTop) {
                    document.documentElement.scrollTop = $('#anchor-' + binding.value).offset().top - $(el).height()
               } else {
                    document.body.scrollTop = $('#anchor-' + binding.value).offset().top - $(el).height()
               }
               console.log($('#anchor-' + binding.value));

          }, true);
     }
})
