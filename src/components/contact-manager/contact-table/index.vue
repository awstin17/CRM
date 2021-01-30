<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
    height=400
    fixed-header
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        label="Search Contacts"
        class="mx-4"
        clearable
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Address', value: 'address' },
      ],
      desserts: [{
        name: 'Audi Yegorev',
        email: 'ayegorev0@arstechnica.com',
        address: '8 Reinke Lane',
      }, {
        name: 'Gael Gleader',
        email: 'ggleader1@cnn.com',
        address: '3 Dovetail Plaza',
      }, {
        name: 'Roanna Akeherst',
        email: 'rakeherst2@so-net.ne.jp',
        address: '44018 Northland Trail',
      }, {
        name: 'Gordon Pendlebury',
        email: 'gpendlebury3@ebay.co.uk',
        address: '23 5th Junction',
      }, {
        name: 'Mireille Furtado',
        email: 'mfurtado4@archive.org',
        address: '98 Thierer Circle',
      }, {
        name: 'Chanda Cuer',
        email: 'ccuer5@rambler.ru',
        address: '85 Kensington Pass',
      }, {
        name: 'Emmalynn McGrirl',
        email: 'emcgrirl6@ezinearticles.com',
        address: '745 Hanson Place',
      }, {
        name: 'Janie Rodman',
        email: 'jrodman7@csmonitor.com',
        address: '2983 Amoth Pass',
      }, {
        name: 'Towny Pol',
        email: 'tpol8@privacy.gov.au',
        address: '4 East Road',
      }, {
        name: 'Annelise Bellanger',
        email: 'abellanger9@typepad.com',
        address: '84 Shopko Place',
      }, {
        name: 'Roarke Hurdedge',
        email: 'rhurdedgea@nifty.com',
        address: '35870 Pleasure Lane',
      }, {
        name: 'Felipa Athey',
        email: 'fatheyb@wsj.com',
        address: '519 2nd Plaza',
      }, {
        name: 'Shelia Ege',
        email: 'segec@cbsnews.com',
        address: '6 2nd Place',
      }, {
        name: 'Ellen Learmont',
        email: 'elearmontd@jimdo.com',
        address: '43 Eagan Road',
      }, {
        name: 'Inessa Escala',
        email: 'iescalae@gravatar.com',
        address: '54422 Morning Road',
      }, {
        name: 'Cristian Milkins',
        email: 'cmilkinsf@list-manage.com',
        address: '06900 Del Sol Park',
      }, {
        name: 'Cross Quartley',
        email: 'cquartleyg@blinklist.com',
        address: '5 Lawn Point',
      }, {
        name: 'Rayner Elks',
        email: 'relksh@google.com',
        address: '386 Truax Place',
      }, {
        name: 'Nataniel Heasly',
        email: 'nheaslyi@imdb.com',
        address: '01331 Glendale Junction',
      }, {
        name: 'Iolande Fossord',
        email: 'ifossordj@wordpress.com',
        address: '0257 Lakewood Gardens Trail',
      }],
    }
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
