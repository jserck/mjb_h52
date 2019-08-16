<template>
    <article style="padding-top:0.84rem">
        <TitleBar
            :title_name="$store.state.title_name"
            :isHideObshare="$store.state.isHideObshare"
            :bgColor="$store.state.bgColor"
        ></TitleBar>
        <router-view></router-view>
    </article>
</template>
<script>
import TitleBar from './titleBar'

export default {
    components: {
        TitleBar
    }
}
</script>