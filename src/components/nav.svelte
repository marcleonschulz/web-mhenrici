<script lang="ts">
	export let menu = [];
	export let menuname;
	export let dropdown = [];
	export let dropdownname;
	export let svgpath;
</script>

<div class="navbar bg-white bg-opacity-40 z-10 backdrop-blur-md fixed backdrop-brightness-75">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label name="dropdown"  tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each menu as item}
					<li><a href="{item.url}">{item.name}</a></li>
				{/each}
				{#if dropdown}
					<li tabindex="0">
						<a name="dropdownname" class="justify-between">
							{dropdownname}
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
							>
						</a>
						<ul class="p-2">
							{#each dropdown as item}
								<li><a href="{item.url}">{item.name}</a></li>
							{/each}
						</ul>
					</li>
				{/if}
			</ul>
		</div>
		
		<a name="menuname" class="btn btn-ghost normal-case text-xl z-10" href="/"><img src="{svgpath}" alt="Logo" class="h-10 w-10" /></a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			{#each menu as item}
				<li><a href="{item.url}" >{item.name}</a></li>
			{/each}
			{#if dropdown}
				<li tabindex="0">
					<a name="dropdown">
						{dropdownname}
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						{#each dropdown as item}
							<li><a href="{item.url}">{item.name}</a></li>
						{/each}
					</ul>
				</li>
			{/if}
		</ul>
	</div>
</div>
