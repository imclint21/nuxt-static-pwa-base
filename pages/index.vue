<template>
	<div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
		<img src="https://play.tailwindcss.com/img/beams.jpg" alt=""
			 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" width="1308"/>
		<div
			class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
		<div
			class="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
			<div class="max-w-md mx-auto">
				<h1 class="text-2xl">Hello World</h1>
				<div class="divide-y divide-gray-300/50">
					<div class="py-8 text-base leading-7 space-y-6 text-gray-600">
						<p>This is a boilerplate using Nuxt + Tailwind + PWA plugins.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	layout: 'base'
}
</script>
