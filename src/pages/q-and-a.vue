<template>
  <div class="q-and-a-page d-flex flex-column justify-start">
    <div>Q & A</div>
    <div class="q-and-a px-10">
      <v-row v-for="({ question, answer }, i) in questions" :key="i" class="d-flex flex-row justify-center my-10 qa-row" :class="{ 'ga-8': !isMobile, 'ga-2': isMobile  }">
        <v-col col="4" class="col d-flex flex-column justify-center question font-weight-bold">{{ question }}</v-col>
        <v-divider :vertical="!isMobile" :thickness="2"></v-divider>
        <v-col col="4" class="col d-flex flex-column justify-center text-left answer">{{ answer }}</v-col>
      </v-row>
      <alt-logo width="70px"></alt-logo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useIsMobile from '@/composables/useIsMobile';

  const questions = ref([
    {
      question: "When does the ceremony actually start?",
      answer: "4:00pm. Please arrive by 3:45pm to ensure you have time to park and find a seat."
    },
    {
      question: "What is the dress code?",
      answer: "Formal Cocktail Attire: Mid or full length dresses, jumpsuit or dressy pants suit for women and a suit with tie for men."
    },
    {
      question: "Where is the cocktail hour/reception?",
      answer: "Cocktail hour is located at the Southfield Westin and the reception will take place in the Garden Atrium at the Westin."
    },
    {
      question: "Where do I park for the ceremony?",
      answer: "Genesis the Church: Park in the lot across the street from the church, at the corners of W University Ave and N Center St. Enter the church off N Main Street."
    },
    {
      question: "Where do I park for the reception?",
      answer: "If you are staying overnight at the Westin, please park in the parking garage.If you are not staying at the hotel, you can park on the far left side of the building, marked “2 hour Visitor  Parking” past the CBRE Building."
    },
    {
      question: "Are children invited to the wedding?",
      answer: "Only those who are on the RSVP should be attending the wedding and reception."
    },
    {
      question: "When will the cocktail hour start?",
      answer: "6:00pm"
    },
    {
      question: "When do we eat dinner?",
      answer: "The reception will begin at 7:00pm"
    },
  ]);

  const { isMobile } = useIsMobile();
</script>
<style scoped>
.q-and-a-page {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.q-and-a {
  position: relative;
  padding-bottom: 50px;
}
.mobile .q-and-a {
  padding-bottom: 100px;
}

.qa-row {
  min-height: 140px;
  padding: 20px 0;
}
.qa-row:last-child {
  margin-bottom: 100px !important;
}

.mobile .qa-row {
  padding: 0;
  margin-top: 0 !important;
  margin-bottom: -10px !important;
}
.qa-row > .col {
  text-align: center;
  padding: 15px;
  vertical-align: middle;
}
.qa-row .question {
  font-family: 'Great Vibes';
}
.qa-row .answer {
  font-family: 'Josefin Sans';
  font-size: 40px;
  font-weight: 200;
}
</style>
