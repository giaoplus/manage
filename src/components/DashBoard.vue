<template>
  <v-container fluid>
		<v-row
		>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-card-title>test1</v-card-title>
					<v-card-text>123456789</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-card-title>test2</v-card-title>
					<v-card-text>123456789</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-card-title>test3</v-card-title>
					<v-card-text>123456789</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr><th>title</th><th>time</th><th>author</th></tr>
							</thead>
							<tbody>
								<td>123</td><td>今天</td><td>me</td>
							</tbody>
						</template>
					</v-simple-table>
				</v-card>
			</v-col>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr><th>title</th><th>time</th><th>author</th></tr>
							</thead>
							<tbody>
								<td>123</td><td>今天</td><td>me</td>
							</tbody>
						</template>
					</v-simple-table>
				</v-card>
			</v-col>
			<v-col cols="12" lg="4" md="6" sm="12">
				<v-card>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr><th>title</th><th>time</th><th>author</th></tr>
							</thead>
							<tbody>
								<td>123</td><td>今天</td><td>me</td>
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
	name: 'DashBoard'
}
</script>