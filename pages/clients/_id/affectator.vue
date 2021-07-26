<template>
  <div class="w-4/6 mx-auto mt-2">
    <div
      class="
        h-28
        bg-blue-800
        rounded-t-lg
        px-24
        flex flex-col
        items-center
        justify-center
      "
    >
      <h3 class="text-3xl text-blue-50">Choisir la maison</h3>
      <select class="text-blue-800" @change="onChange($event)" v-model="batime">
        <option value="">Choisir maison</option>
        <option v-for="(bat, index) in batiments" :key="bat.id" :value="bat.id">
          <div class="h-24">{{ index + 1 + "  " }}{{ bat.name }}</div>
        </option>
      </select>
    </div>
    <div v-if="batiment != null">
      <div v-for="n in batiment.niveaux" :key="n.id">
        <div>
          <h3 class="py-2 font-semibold">Chambres:</h3>
          <div
            v-if="n.rooms.length == 0"
            class="h-72 flex flex-col items-center justify-center"
          >
            <Icon :iconName="`empty`" />
            <h2>Pas de chambre dans cette maison</h2>
          </div>
          <div v-for="room in n.rooms" :key="room.id">
            <div
              class="
                bg-white
                flex
                justify-between
                items-center
                border-t-2
                h-12
                px-8
                rounded-md
              "
            >
              <div class="flex items-center">
                <h3
                  class="
                    p-2
                    w-7
                    h-7
                    flex
                    items-center
                    justify-center
                    mr-5
                    bg-orange-300
                    rounded-full
                  "
                >
                  <span>{{ room.numero + " " }}</span>
                </h3>
                <h3>{{ room.category }}</h3>
              </div>

              <h3 class="text-xl font-semibold text-blue-600">
                {{ room.price + "$" }}
              </h3>
              <button
                @click.prevent="associetRoomToUser(room.id)"
                class="
                  bg-gray-100
                  rounded-md
                  px-4
                  py-1
                  text-blue-700 text-sm
                  font-semibold
                "
              >
                Selectionner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    batiments: {
      query: gql`
        query {
          batiments {
            id
            name
            niveaux {
              id
              rooms {
                id
                numero
                price
                category
              }
            }
          }
        }
      `,
    },
  },
  data() {
    return {
      batiment: null,
      batime: "",
    };
  },
  methods: {
    onChange(event) {
      event.target.value;
      this.batiment = this.batiments.find((d) => d.id === event.target.value);
    },

    async associetRoomToUser(roomId) {
      const { data } = await this.$apollo.mutate({
        mutation: gql`
          mutation affecterRoomToUser($id: ID!, $room: String!) {
            affectRoom(id: $id, room: $room) {
              id
              name
              room {
                id
              }
            }
          }
        `,
        variables() {
          return {
            room: roomId,
            id: this.$route.params.id,
          };
        },
        awaitRefetchQueries: true,
      });
      if(data){
          this.$route.redirect('/')
      }
    },
  },
};
</script>