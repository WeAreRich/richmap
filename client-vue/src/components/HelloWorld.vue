<template>
  <div>
     <Another propMessage="1323">

     </Another>
  </div>
</template>

<script lang="ts">
import {Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component'
import Another from '@/components/Another.vue'
@Component({
  components: {
    Another
  }
})
export default class App extends Vue {
  
}
</script>