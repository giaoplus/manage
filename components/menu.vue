<template>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
            <a-icon type="dashboard" />
            <span>仪表盘</span>
        </a-menu-item>
        <a-menu-item key="2">
            <a-icon type="profile" />
            <span>文章管理</span>
        </a-menu-item>
        <a-menu-item key="3">
            <a-icon type="apartment" />
            <span>栏目分类</span>
        </a-menu-item>
        <a-menu-item key="4">
            <a-icon type="tags" />
            <span>标签管理</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
export default {
    name: 'nav-menu'
}
</script>