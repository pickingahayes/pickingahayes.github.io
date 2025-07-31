<template>
  <div class="accommodations-page d-flex flex-column justify-start">
    <a :href="bookingLink">
      <img
        class="hotel-img elevation-10"
        src="https://cache.marriott.com/content/dam/marriott-renditions/DTWWI/dtwwi-entrance-4074-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
      />
    </a>

    <div class="prompt" :class="{ 'text-body-1': isMobile, 'text-h5': !isMobile }">
      Click the link below to reserve a room in our block!
    </div>

    <v-row class="fill-width row">
      <v-col cols="12" class="d-flex flex-column justify-start align-center">
        <div class="d-flex align-center ga-3">
          <v-icon :icon="mdiBed" size="small"></v-icon>
          <a :href="bookingLink" :class="{ 'text-h5': isMobile, 'text-h6': !isMobile }">
            <p class="hotel-name">The Westin Southfield Detroit</p>
          </a>
        </div>
        <p class="address mt-n2" :class="{ 'text-h6': isMobile }">
          1500 Town Center, Southfield, MI 48075
        </p>
        <p class="phone">+1 (888) 627-8558</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.682649279673!2d-83.24955477320056!3d42.47551993953511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c82eb51018e9%3A0x3d61cc8970e8aa1b!2sThe%20Westin%20Southfield%20Detroit!5e0!3m2!1sen!2sus!4v1751819770043!5m2!1sen!2sus"
          class="maps-frame elevation-10"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    <alt-logo width="70px"></alt-logo>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import useIsMobile from '@/composables/useIsMobile';
import { mdiBed } from '@mdi/js';

const { isMobile } = useIsMobile();

const bookingLink =
  'https://www.marriott.com/event-reservations/reservation-link.mi?id=1745334227274&key=GRP&guestreslink2=true&app=resvlink';
</script>
<style scoped>
.accommodations-page {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.row {
  position: relative;
}

.mobile .accommodations-page {
  font-size: 8vw;
  text-align: center;
}

.mobile .accommodations-page a {
  font-size: 7.5vw;
}

.hotel-img {
  min-height: 200px;
  height: calc(40vh);
  border-radius: 25px;
}

.mobile .hotel-img {
  width: calc(95vw);
  object-fit: cover;
}

.prompt {
  font-size: 45px;
}
.hotel-name {
  font-size: 32px;
}
.address {
  font-size: 25px;
}
.phone {
  font-size: 20px;
  margin-top: -10px;
}
.mobile .phone {
  margin-top: -5px;
  margin-bottom: 5px;
}
.maps-frame {
  width: calc(40vw);
  height: calc(40vh);
  margin-bottom: 110px;
  border: 0;
  border-radius: 25px;
}

.mobile .maps-frame {
  width: 95vw;
}
</style>
