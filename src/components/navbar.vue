

<template>
	<nav id="id" class="navbar navbar-expand-md navbar-light fixed-top bg-white shadow-sm">

		<div class="container-fluid">
			<!-- brand and name -->
			<div class="d-flex flex-row align-items-center navbar-brand">
				<div class="d-block p-1 rounded-circle shadow-sm">
					<img :src="avatar" alt="avatar" width="35">
				</div>
				<span class="ms-1 lead" role="banner">{{ title }}</span>
			</div>

			<!-- collapse trigger -->
			<button class="navbar-toggler text-primary" data-bs-toggle="collapse" :data-bs-target="`#navbar-collapse__${id}`">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- collapsable -->
			<div :id="`navbar-collapse__${id}`" class="navbar-collapse collapse">
				<ul class="navbar-nav ms-auto">
					<li class="navbar-item">
						<a class="nav-link" href="#home">Home</a>
					</li>
					<li class="navbar-item">
						<a class="nav-link">About</a>
					</li>
					<li class="navbar-item">
						<a class="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</div>

	</nav>
</template>

<script>
	import avatar from "../assets/avatar.png";

	export default {
		name: "navbar",
		props: {
			id: {type: String, required: true},
			title: {type: String, required: true}
		},
		data() {
			return {avatar: avatar};
		},
	}
</script>