<template>
<!-- 높이 맞추기 -->
    <v-container fill-height style="max-width:450px;">
        <!-- 정 가운데로 맞추기 -->
        <v-layout align-center row wrap>
            <v-flex xs12>
                <!-- class : mb(margin bottom) -->
                <v-alert
                class="mb-3"
                :value="isLoginError"
                type="error"
                >
                    Check your ID and PW.
                </v-alert>
                <v-alert
                class="mb-3"
                :value="isLogin"
                type="success"
                >
                    Success Login.
                </v-alert>
                <v-card>
                    <v-toolbar flat height="30">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                    <v-text-field
                        v-model="email"
                        label="Enter the Email"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Enter the Password"
                        type="password"
                    >
                    </v-text-field>
                    <v-btn
                        color="primary"
                        depressed
                        block
                        large
                        @click="login({
                            email:email,
                            password:password
                        })"
                    >
                        Login

                    </v-btn>
                    </div>
                    
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    data() {
        return{
            email : null,
            password : null
            // 고객 정보

        }
    },
    computed : {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"])
        
    }
}
</script>
