<template>
  <div class="wedding-party-page">
    <div class="wedding-party text-center pb-15 mb-15">
      <div class="title" :class="{ 'text-h1': !isMobile, 'text-h2': isMobile }">Wedding Party</div>
      <div class="hint">Click the pictures below to see more~</div>
      <v-row>
        <v-col class="bridesmaids-col d-flex flex-column ga-5 pr-5" sm="12" md="6">
          <h5>Bridesmaids</h5>
          <wedding-party-card v-for="person in bridesmaids" :member="person"></wedding-party-card>
        </v-col>
        <v-col class="groomsmen-col d-flex flex-column ga-5 pl-5" sm="12" md="6">
          <h5>Groomsmen</h5>
          <component
            :is="getComponent(person)"
            v-for="person in groomesmen"
            :member="person"
          ></component>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PeterCard from '@/components/weddingparty/PeterCard.vue';
import WeddingPartyCard, { type MemberInfo } from '@/components/weddingparty/WeddingPartyCard.vue';
import useIsMobile from '@/composables/useIsMobile';
import type { Component } from 'vue';

const { isMobile } = useIsMobile();

const bridesmaids = ref<MemberInfo[]>([
  {
    name: 'Amy Etz',
    description:
      'Lindsey met Amy their first years at EMU and became friends fast. We spent most of our free time together in a larger group of friends and connected over meals and church events. In our third year, we lived together in a one bedroom apartment which really solidified our friendship and we have always joked that we should live together again because it was so much fun. We spent hours on our love seat watching The OC, Dawson’s Creek and Dexter. It is hard to believe we have know each other for 16 years and have been through many chapters of life together, from college, to our first jobs, church drama and trauma, to dating and relationships. Amy, you have been with me through it all and I am so thankful for your friendship, and for embracing Robert and our relationship. You are truly the best and I am so grateful to have you stand with me as my Matron of Honor.',
    status: 'Matron of Honor'
  },
  {
    name: 'Cassie Wooley',
    description:
      'Lindsey and Cassie met through Gretchen’s House. We have become closer over our years of working together as we both lead teams and see each other almost everyday at work. We have attended trainings and retreats and helped each other grow as teachers and coworkers. Cassie, you have helped me gain confidence as a Lead teacher and been so supportive as a friend. I love how fierce and protective you are and I am so thankful I found a friend I get to work with everyday. I always joke that you manifested my relationship with Robert when you invited me to your wedding with a plus one, and we were only newly dating! I’m forever grateful!'
  },
  {
    name: 'Alyssa Hyde',
    description:
      'Lindsey and Alyssa met through Gretchen’s House. We became closer over the years of leading teams and we began spending time together outside of work. Alyssa has always been so welcoming and kind and has encouraged me through times of struggle at work. Alyssa, I am so glad we have become friends and I am thankful you have cheered on my relationship with Robert from the beginning. I also love that I get to be Ella’s teacher and help her grown and learn everyday. Thank you for standing with me on the Big day.'
  },
  {
    name: 'Sarah Britt',
    description:
      'Lindsey and Sarah also met through Gretchen’s House. We became very close when Sarah became Lindsey’s co-teacher during the pandemic and we were stuck together working in an infant room for several years. I will always cherish those memories, as our days felt like therapy sessions and brought deep connections. We talked about every topic under the sun, and helped each other grow and survive the pandemic. We even spent several holidays together that year since traveling and visiting family seemed too risky. We have walked together through big life changes and I am so thankful for her guidance and support. Thank you for your love, light and laughter Sarah, it has been a blessing in my life.'
  },
  {
    name: 'Sara Hayes',
    description:
      'Lindsey and Sara met when Nate, Lindsey’s brother, began dating Sara. From the moment we met, we became friends and now she’s my sister! I am so thankful that you have come into my life and become apart of our family, Sara. You are so kind, joyful and generous and you bring laughter wherever you go. Thank you for supporting Robert and I and cheering us on.'
  },
  {
    name: 'Anne Stephan',
    description:
      'Anne is Robert’s younger Sister and Lindsey and Anne met a few months after Robert and Lindsey started dating. There was some competition between their dad and Anne when David met me before Anne, but soon after we went for drinks with Anne, Chris and Robert’s Mom, Jackie. Since our first meeting, Anne was so welcoming, kind and as we spent more time together we became closer friends. I am so glad to have Anne as a friend and now another sister. Thank you for being so generous and welcoming me into your family, Anne. I am so thankful to have another wonderful sister.',
    status: 'Favorite Sister'
  },
  {
    name: 'Jenni Byrd',
    description:
      'Jenni is Robert’s older sister and I am so thrilled I get another sister! We have spent time together in Michigan and visited Jenni and her family in Nashville. You have been so warm and graciously welcomed me into the family. I am so glad we have become friends and you are standing with us! And thanks for helping convince Robert that comforter was ugly!',
    status: 'Favorite Sister'
  },
  {
    name: 'Savannah Dodgen',
    description:
      'Savannah and Lindsey are cousins, and although they have lived across the country from each other their whole lives, they have become closer over the last few years. I have visited Savannah in Australia and California and Savannah has come to Ohio to visit with family. We have formed a beautiful friendship and try to catch up on facetime every so often. I am so glad to have a cousin and friend who is so kind and empathetic. Thanks for helping welcome Robert into the family and celebrating with us!'
  },
  {
    name: 'Ella Hyde',
    description:
      'Ella is Alyssa’s daughter and in Lindsey’s class at school! Ella is sweet, kind, smart and so funny! She loves to say “Go Lions!” and chant “Jared Goff” during football games! ',
    status: 'Flower Girl',
    expandable: false
  }
]);

const groomesmen = ref<MemberInfo[]>([
  {
    name: 'Aaron Smith',
    description:
      "Aaron and Robert met a long, long time ago, in a city not too far away. An unapologetic coffee connoisseur, Aaron introduced Robert to many of life's greatest joys, like spinach artichoke dip, a crippling coffee addiction, sim racing and vines. Aaron is the kind of guy that has always been there for me, and I couldn't ask for a better Best Man. I have so many amazingly fond memories with Aaron, a lot of us being idiots together; like annoying his family with my dumb humor on a trip to Hilton Head, many many many nights gaming with The Boys, trips, chats, drinks and so much more. We shared a hilarious drunken night at a Night Market in Hualien, Taiwan finishing a bottle cognac, singing Despacito and hanging with some locals. And yes, incase anyone was wondering that is a bottle of sun screen 😉🤣",
    status: 'Best Man'
  },
  {
    name: 'Cooper Riehl',
    description:
      "Sometimes it feels like I share the same brain cell with Cooper. We have a shared goofy, ironic, sometimes stupid sense of humor that I love. Cooper and I have been friends since High School, and lived a chaotic year together in college in a shared room (to make space for the PC gaming room 🤣). Cooper is someone that I know I can always come to and have a chat about anything, whether it be life, religion, random nonsense, our passion for one day making a video game, or our team's performance in the golf league that we did last year. I'm so lucky to have a great guy like Cooper in my life, and can't wait to see what next we'll get mixed up in!",
    status: 'Big Dawg'
  },
  {
    name: 'Brian Portelli',
    description:
      "Brian and Robert share a passion for travel, good food, and great deals! Meeting in High School and spending an untold amount of time online playing AoE and Civ IV with our friend group! I know I can always count on Brian to be game for an exciting international adventure, or putting away an incredible amount of food for a man his size. On my 30th birthday, Brian rented a car which we have since nicknamed 'The Portuber' as he drove us around the Las Vegas strip at incredible speeds, blasting music. A man with a flare for fashion and international intrigue, I count myself lucky to have a friend like him to share life's excitement with and am always counting down the days until our next adventure.",
    status: 'The PORTUBER'
  },
  {
    name: 'Cody Wilson',
    description:
      "When you want to ensure you have a good meal at a restaurant, always check with Cody what he is planning on ordering first. Cody and I first bonded over his intriguing Coca-Cola shirt in high school and despite my annoyances, we bonded over computers and video games, playing CoD MW2 with our friend group till the wee hours of the morning. Listening to 'Mr. Crispy' (his brother) yell about quick scopes and no scopes in the background over Cody's mic was a hilariously fond memory that I have. Cody is a smart, thoughtful man who is an incredible Chef. His olive tapenade is something I still dream about to this day! The last few years for his birthday Cody has hosted a BBQ at his house making the most incredible food that I look forward to every year! It has been a joy first getting to know his wife Mary Ann and their son Eli our ring bearer!",
    status: 'Big Dawg'
  },
  {
    name: 'Anthony Giacopelli',
    description:
    "Anthony and Robert first met through their mutual friends Aaron and Cody who were roommates at MSU (omg they were roommates) and from there trauma bonded over League of Legends. He is a guy I know I can always count on and is always there for his friends and family. He is a smart, thoughtful, hilarious man who makes fast friends with anyone he meets and is someone I know that I can come to for advice wiser than his years, or a hilarious story. It is never a dule moment with Anthony around! While I don't get to see him in person anywhere near as much as I'd like, I cherish every moment we've had together. He is an incredible story teller and I could listen to his endless Navy stories for hours, just make sure you've got plenty of time to spare 🤣 On my 30th birthday our friend group made a trip to Las Vegas and Anthony surprised everyone making the trip out there and then also being at our New Years Eve party later that month. It was a highlight for myself and a lot of our friends because we still talk about getting a double dose of Anthony in one month. There is always a reoccurring theme for a group trip or event that we get to do with Anthony and it's always something like \"Man that was a lot of fun, I'm so happy we got to hang with Anthony!\" and that's not just coming from me. Seeing him is always a highlight of any trip and I pray that things can line up in the future that we see each other much more regularly.",
    status: 'Gen Z Translator'
  },
  {
    name: 'Peter Stephan',
    description:
      "What to say about Peter. Peter is the younger brother of Chris (Robert's younger brother in law). Anne and Chris tried their best to keep us apart, knowing that together our powers of intellectually superior humor and flare for the dramatic would be too much for the world to handle. They were right. Peter and I share a love for 3D Printing and gaming. I have spent many, many hours beating Peter (and Chris) at video games, just ask them! Despite the epic beatdowns that he has received at my hands, Peter still manages to be go-getter and I'm always impressed with the projects that he comes up with from 3D printing, including making custom metal trading cards to his own version of board games! Looking forward to the fun that we will get up to when he moves to Ann Arbor for his new job at Michigan Medicine! Go Blue!",
    status: 'Hey Peter',
    component: markRaw(PeterCard)
  },
  {
    name: 'Chris Stephan',
    description:
      "Chris is the proper definition of a Michigan Man. He is a great cook, stand up guy, lowkey hilarious and goes by many names. Most recently 'Crit Chris' due to his unnatural luck at rolling crits when battling Peter and myself in Star Wars Legion. I've enjoy countless hours playing board games/wargames, movies, golfing and watching Meeeeechigan football with him. I look forward to every fall, when the air gets a little crisp, the leaves start to change and I get to enjoy gameday at the Big House with Chris and my Dad! I'll never forget The Game in 2021, Chris, my Dad and I bundled up and storming the field after Michigan finally broke the streak and defeated the Buckeyes! Just like with his brother Peter, I have enjoyed delivering countless beatdowns in video games and would be victories in Star Wars Legion if not for the hilarious ineptitude of my Arc Troopers. While I might not have many victories over him playing board games, the fun and challenge of facing him keeps me coming back! Living just down the street from Chris and Anne has been an absolute joy and I look forward to more fun together in the years to come!",
    status: 'Crit Chris'
  },
  {
    name: 'Nate Hayes',
    description:
      "Nate is Lindsey's younger brother and is a chill, motivated, do-it-all kind of guy. He was put through the ringer on the guys Bachelor trip and impressed Robert and all of his friends with the ease at which he melded into the group! I've enjoyed getting to know him, and have greatly appreciated how he has welcome me into the family. It's always an exciting time with Lindsey and I get to hangout with Nate and his wife Sara! We had a blast skiing and visiting them over Christmas at their home in Colorado.",
    status: 'NaterSkater'
  },
  {
    name: 'Eli Wilson',
    description:
      'Eli is the son of Cody and Mary Ann Wilson. I will never forget the first time we met, I could fit him in the crook of my arm. It has already be a joy watching him grow. I can already see the Cody and Mary Ann in him! He is a sweet, silly, energetic little boy, and I always love hearing stories about his love for fruit and whipping his finished dishes off the table!',
    status: 'Ring Bearer'
  }
]);

const getComponent = (person: MemberInfo): Component => {
  return person.component ?? WeddingPartyCard;
};
</script>
<style scoped>
.wedding-party-page {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}

.hint {
  font-size: 20px;
  font-style: italic;
  margin-top: 9px;
}

.title {
  font-family: inherit;
  font-weight: bold;
}
</style>
