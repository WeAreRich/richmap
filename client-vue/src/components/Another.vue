<template>
    <div>
        <input v-model="msg">
        <p>prop: {{propMessage}}</p>
        <p>msg: {{msg}}</p>
        <p>helloMsg: {{helloMsg}}</p>
        <p>computed msg: {{computedMsg}}</p>
        <button @click="greet">Greet</button>
    </div>
</template>

<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

  @Component
  export class App extends Vue {
    // initial data
    @Prop()
    propMessage: string;

    msg: number = 123

    // use prop values for initial data
    helloMsg: string = 'Hello, ' + this.msg;

    // lifecycle hook
    mounted() {
      this.greet()
    }

    // computed
    get computedMsg(): string {
      return 'computed ' + this.msg
    }

    // method
    greet(): void {
      alert('greeting: ' + this.msg)
    }
  }
</script>