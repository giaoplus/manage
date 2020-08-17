<template>
    <div>
        <a-row :gutter="[16, 16]">
            <a-col :span="8">
                <a-card title="今日访问量">
                    <p>card content</p>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Card title">
                    <p>card content</p>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Card title">
                    <p>card content</p>
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="[16, 16]">
            <a-col :span="16">
                <a-card title="阅读排行">
                    <a-table size="middle" :columns="readRandColumns" :data-source="readRandDatas" :pagination="false"></a-table>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="Card title">
                    <p>card content</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>

export default {
    layout: 'main',
    data() {
        return {
            readRandColumns: [
                {
                    title: '标题',
                    dataIndex: 'title'
                },{
                    title: '作者',
                    dataIndex: 'author'
                },{
                    title: '发布时间',
                    dataIndex: 'releaseTime'
                },{
                    title: '阅读量',
                    dataIndex: 'readings'
                }
            ],
            readRandDatas: [
                {
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                },{
                    title: '今天大暴雨',
                    author: '123',
                    releaseTime: '今天',
                    readings: '221'
                }
            ]
        }
    }
};
</script>