<template>
    <main>
        <NavBar />
        <section
            class="h-[100vh] flex flex-col justify-center items-center px-12 text-2xl md:text-3xl lg:text-4xl dark:text-white">
            <p class="text-justify">I'm Rayhan a Junior Web Developer as Front End, my dream is become a Fullstack Web
                Developer.
                I have been learning about web development as a front end for more than 1 years and now I'm trying to learn
                back end.
                For now, I'm still on progress learning about Back-End (API, DB Relation, Setup SQL & NoSQL DB, etc) and
                such
                of back end frameworks (ExpressJS, RESTX, Flask Restful, etc).
                Wish I can accomplish my dream within a short time.
            </p>
        </section>
        <FooterBar />
    </main>
</template>

<script>
export default {
    name: "AboutPage",
    head: {
        title: 'About',
    },
}
</script>