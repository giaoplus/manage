<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card
          class="mt-4 mx-auto"
          max-width="auto"
        >
          <v-sheet
            class="v-sheet--offset max-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="label"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">用户浏览量</div>
            <div class="subheading font-weight-light grey--text">过去24小时中的访问形势</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card
          class="mt-4 mx-auto"
          max-width="auto"
        >
          <v-sheet
            class="v-sheet--offset max-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="label"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">用户浏览量</div>
            <div class="subheading font-weight-light grey--text">过去24小时中的访问形势</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card
          class="mt-4 mx-auto"
          max-width="auto"
        >
          <v-sheet
            class="v-sheet--offset max-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="label"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">用户浏览量</div>
            <div class="subheading font-weight-light grey--text">过去24小时中的访问形势</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card>
          <v-simple-table class="table-pd">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>title</th>
                  <th>time</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card>
          <v-simple-table class="table-pd">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>title</th>
                  <th>time</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-card>
          <v-simple-table class="table-pd">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>title</th>
                  <th>time</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
                <tr><td>123</td><td>今天</td><td>me</td></tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      label: ['12am','12am','12am','12am','12am','12am'],
      value: [300,220,100,154,360,200]
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
    margin: 0 auto;
  }
  .table-pd {
    padding: 16px;
  }
</style>