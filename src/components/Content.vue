<template>
  <v-container class="fill-height" fluid>
		<v-row>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-text-box-plus</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>分类名称</v-card-title>
          <v-simple-table class="table-pd">
            <template v-slot:default>
              <thead>
                <tr>
                  <th><v-checkbox></v-checkbox></th>
                  <th>标题</th>
                  <th>发布时间</th>
                  <th>发布者</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><v-checkbox></v-checkbox></td><td>123</td><td>今天</td><td>me</td><td><v-btn color="primary">编辑</v-btn><v-btn color="error">删除</v-btn></td></tr>
                <tr><td><v-checkbox></v-checkbox></td><td>123</td><td>今天</td><td>me</td><td><v-btn color="primary">编辑</v-btn><v-btn color="error">删除</v-btn></td></tr>
                <tr><td><v-checkbox></v-checkbox></td><td>123</td><td>今天</td><td>me</td><td><v-btn color="primary">编辑</v-btn><v-btn color="error">删除</v-btn></td></tr>
                <tr><td><v-checkbox></v-checkbox></td><td>123</td><td>今天</td><td>me</td><td><v-btn color="primary">编辑</v-btn><v-btn color="error">删除</v-btn></td></tr>
                <tr><td><v-checkbox></v-checkbox></td><td>123</td><td>今天</td><td>me</td><td><v-btn color="primary">编辑</v-btn><v-btn color="error">删除</v-btn></td></tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </v-row>
	</v-container>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      category: this.$route.params.category,
      page: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.table-pd {
  padding: 16px;
}
</style>