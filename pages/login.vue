<template>
    <div>
        <a-layout>
            <a-layout-header>welcome</a-layout-header>
            <a-layout-content>
                <div class="login">
                    <a-form :form="form" @submit="handleSubmit">
                        <a-form-item label="用户名">
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
                        <a-form-item label="密码">
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
                        <a-form-item>
                            <a-button type="primary" html-type="submit" class="login-form-button">
                                Log in
                            </a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
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