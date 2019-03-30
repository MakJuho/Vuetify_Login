<template>
    <div>
        <h1>Welcome {{userInfo.name}}!</h1>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed :{
        ...mapState(["userInfo"])
    }
}
</script>
