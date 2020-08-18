<template>
    <a-layout id="anana-login-layout">
        <a-layout-content id="anana-login-content">
            <div class="anana-login">
                <a-form :form="form" @submit="handleSubmit">
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'userName',
                                { rules: [{ required: true, message: 'Please input your username!' }] },
                            ]"
                            placeholder="Username"
                        >
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input
                        v-decorator="[
                            'password',
                            { rules: [{ required: true, message: 'Please input your Password!' }] },
                        ]"
                        type="password"
                        placeholder="Password"
                        >
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item class="submit">
                        <a-button type="primary" html-type="submit" block class="login-form-button">
                            登 录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
export default {
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        }
    }
}
</script>

<style>
#anana-login-layout {
    display: flex;
    height: 100%;
}
#anana-login-content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.anana-login {
    width: 380px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 5px 1px 8px #d4d4d4;
}
.anana-login .submit {
    margin-bottom: 0;
}
</style>