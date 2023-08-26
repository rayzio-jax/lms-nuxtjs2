<template>
    <main>
        <NavBar />
        <section
            class="h-[100vh] flex flex-col justify-center items-center text-2xl md:text-3xl lg:text-4xl dark:text-white">
            <h1>Playground</h1>
        </section>
        <FooterBar />
    </main>
</template>

<script>
export default {
    name: "PlaygroundPage",
    head: {
        title: 'Playground',
    },
}
</script>