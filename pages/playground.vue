<template>
  <section class="pt-16 px-4">
    <h2 class="py-8 text-2xl md:text-3xl lg:text-4xl">Movie List</h2>
    <!-- change view list -->
    <div v-if="!isMobile" class="flex items-center gap-x-3">
      <h2 class="text-lg md:text-xl">View</h2>
      <button
        class="@btn @btn-square @btn-sm text-lg md:text-xl"
        @click="isMultiGrid = !isMultiGrid"
      >
        <ion-icon :name="[isMultiGrid ? 'menu' : 'grid']"></ion-icon>
      </button>
    </div>
    <div v-if="!isCreating">
      <div class="flex gap-x-3">
        <!-- movie genre selection -->
        <div
          class="flex flex-grow items-center justify-start gap-x-4 text-lg md:text-xl"
        >
          <h2>Genre:</h2>
          <select
            v-model="selectedQuery"
            class="@select @select-success p-2 m-0 w-full max-w-xs"
          >
            <option disabled value="">Sekect movie genre</option>
            <option>None</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Superhero</option>
            <option>Fantasy</option>
          </select>
        </div>
        <!-- add movie button -->
        <div class="flex flex-grow items-center justify-end">
          <button
            v-if="!isCreating"
            class="@btn @btn-neutral @btn-md my-5 font-bold text-lg lg:@btn-lg"
            @click="isCreating = !isCreating"
          >
            Add Movie
          </button>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
      <!-- movie list container -->
      <div
        :class="[
          'grid duration-300',
          isMultiGrid ? 'grid-cols-3' : 'grid-cols-2',
        ]"
      >
        <!-- movie list -->
        <CardItem
          v-for="(item, i) in resultQuery"
          :key="i"
          :movie="item"
          :is-multi-grid="isMultiGrid"
        />
      </div>
    </div>
    <!-- add movie form container -->
    <form v-else class="py-2 px-4" @submit.prevent="addMovie">
      <!-- add movie form -->
      <div id="movie-form">
        <div id="add-card" class="flex flex-col gap-y-6">
          <input
            id="movie-title"
            v-model="newMovie.title"
            type="text"
            placeholder="Title"
            class="border border-black mb-2 p-2 text-base md:text-lg"
            required
          />
          <input
            id="movie-genre"
            v-model="newMovie.genre"
            type="text"
            placeholder="Enter movie genre separate by space"
            class="border border-black mb-2 p-2 text-base md:text-lg"
            required
          />
          <textarea
            id="movie-synopsis"
            v-model="newMovie.desc"
            cols="30"
            rows="10"
            class="text-lg p-2 border border-slate-500"
            placeholder="Sinopsis"
            required
          ></textarea>
          <div class="flex gap-x-3">
            <label for="movie-done">Done watch?</label>
            <input id="movie-done" v-model="newMovie.isDone" type="checkbox" />
          </div>
        </div>
        <div id="confirmation-btn" class="py-2 flex gap-x-3">
          <button
            id="save-btn"
            type="submit"
            class="@btn @btn-primary font-bold text-base text-white md:text-lg"
          >
            Save
          </button>
          <button
            id="cancel-btn"
            class="@btn @btn-secondary font-bold text-base text-white md:text-lg"
            @click="isCreating = !isCreating"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import CardItem from '~/components/CardItem.vue'
export default {
  name: 'PlaygroundPage',
  components: {
    CardItem,
  },
  data() {
    // daftar task
    return {
      newMovie: {
        title: 'Title',
        desc: 'Sinopsis',
        genre: 'None',
        isDone: false,
      },
      selectedQuery: '',
      isMobile: false,
      isMultiGrid: false,
      isCreating: false,
      movies: [
        {
          title: 'Hitman',
          desc: 'Sinopsis',
          genre: 'Action',
          isDone: false,
        },
        {
          title: 'Jumanji 2022',
          desc: 'Sinopsis',
          genre: 'Action Comedy',
          isDone: false,
        },
        {
          title: 'Deadpool 2',
          desc: 'Sinopsis',
          genre: 'Superhero Action Comedy',
          isDone: false,
        },
        {
          title: 'Megaman X',
          desc: 'Sinopsis',
          genre: 'Fantasy Action',
          isDone: false,
        },
        {
          title: 'Digimon',
          desc: 'Sinopsis',
          genre: 'Fantasy Action',
          isDone: false,
        },
        {
          title: 'Superman 2',
          desc: 'Sinopsis',
          genre: 'Superhero Action',
          isDone: false,
        },
        {
          title: 'Man of Steel',
          desc: 'Sinopsis',
          genre: 'Superhero Action',
          isDone: false,
        },
        {
          title: 'Civil War',
          desc: 'Sinopsis',
          genre: 'Superhero Action Comedy',
          isDone: false,
        },
        {
          title: 'Avengers',
          desc: 'Sinopsis',
          genre: 'Superhero Action Comedy',
          isDone: false,
        },
        {
          title: 'Avengers 2: Ultron',
          desc: 'Sinopsis',
          genre: 'Superhero Action Comedy',
          isDone: false,
        },
        {
          title: 'The Boys',
          desc: 'Sinopsis',
          genre: 'Superhero Action',
          isDone: false,
        },
        {
          title: 'Breaking Bad',
          desc: 'Sinopsis',
          genre: 'Action',
          isDone: false,
        },
        {
          title: 'Blue Beetle',
          desc: 'Sinopsis',
          genre: 'Superhero Action Comedy',
          isDone: false,
        },
      ],
    }
  },

  head: {
    title: 'Playground',
  },

  computed: {
    resultQuery() {
      if (this.selectedQuery.toLowerCase() === 'none') {
        return this.movies
      } else if (this.selectedQuery) {
        return this.movies.filter((movie) => {
          return this.selectedQuery
            .toLowerCase()
            .split(' ')
            .every((item) => movie.genre.toLowerCase().includes(item))
        })
      }
      return this.movies
    },
  },

  mounted() {
    let screenWidth = window.innerWidth
    if (screenWidth < 768) {
      screenWidth = window.innerWidth
      this.isMobile = true
    } else if (screenWidth > 768) {
      screenWidth = window.innerWidth
      this.isMobile = false
    }
  },
  methods: {
    addMovie() {
      this.movies.push({ ...this.newMovie })

      this.newMovie = {
        title: '',
        desc: '',
        genre: '',
        isDone: false,
      }
      console.log(this.movies)
    },
  },
}
</script>

<style lang="scss" src="~/assets/style/playground.scss" scoped>
</style>