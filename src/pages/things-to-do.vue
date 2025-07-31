<template>
  <div class="things-to-do-page poiret-one">
    <v-container class="things-container px-10" fluid>
      <v-row v-for="({ title, sections }, i) in activities" :key="i" class="todo-row ga-5" justify="center">
        <v-col cols="8">
          <h5 class="great-vibes font-weight-bold text-center header">{{ title }}</h5>
        </v-col>

        <div class="d-flex flex-column w-100" v-for="({ title, type, locations }, j) in sections" :key="j">
          <h5 class="josefin-sans font-weight-bold section-header">{{ title }}</h5>

          <div class="pl-3 d-flex flex-row flex-wrap ga-8 " :class="{ 'justify-center': isMobile }">
            <LocationCell
              v-for="(location, k) in locations"
              :key="k"
              :type
              :location
            ></LocationCell>
          </div>
        </div>
      </v-row>
      <alt-logo width="70px"></alt-logo>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import LocationCell from '@/components/LocationCell.vue';
import useIsMobile from '@/composables/useIsMobile';

export interface LocationItem {
  name: string;
  url: string;
  img: string;
  description: string;
  hoverImg?: string;
}

interface Section {
  title: string;
  type: 'event' | 'food' | 'cafe';
  locations: LocationItem[];
}

interface Activity {
  title: string;
  sections: Section[];
}

const { isMobile } = useIsMobile();

const activities = ref<Activity[]>([
  {
    title: 'Activities',
    sections: [
      {
        title: 'Downtown Detroit',
        type: 'event',
        locations: [
          {
            name: 'Belle Isle Park and Conservatory',
            url: 'https://maps.app.goo.gl/WKWgLBcpSAPowELE8',
            img: 'https://www.midwestliving.com/thmb/4Bcp7D-oxsqYg1xoGqKnxIx48PQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/102666833_preview-2000-2cb4e516ae7140f4a881146e8100c037.jpg',
            description: 'Detroit River island & park'
          },
          {
            name: 'Detroit Riverfront Walk',
            url: 'https://maps.app.goo.gl/rZcyBjTqT1jwNVCL7',
            img: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPtfeabmHuHOKJGHNm_G06Coycl6LLkrOmGJ--K5JerqBhx9IJ4Qpe87TTMgJHqXdb7xbEx_nBra5EGzXus2JtDZgZdNwNQ0yJ39xi7RFjMHGpoWUb3texlal5hJrzB7RpjlGM=w520-h350-n-k-no',
            description: 'Riverside park'
          },
          {
            name: 'Motown Museum',
            url: 'https://maps.app.goo.gl/zGi4HYTsuKkvx3TSA',
            img: 'https://www.motownmuseum.org/wp-content/uploads/2020/12/mm_hitsville_house-1-1024x768.jpg',
            description: 'Motown studio museum'
          },
          {
            name: 'Henry Ford Museum',
            url: 'https://maps.app.goo.gl/eRtFHiRNdpcRHvmn6',
            img: 'https://travelbloggers.ca/wp-content/uploads/2025/01/007_ford-museum-of-american-innovation-1200.jpg?w=840',
            description: 'Museum'
          },
          {
            name: 'Eastern Market',
            url: 'https://maps.app.goo.gl/qbqthgpEidTmZhbXA',
            img: 'https://cdn.prod.website-files.com/631a26d1af96df4849a92885/631a26d1af96df6c5fa92a79_Thumbnail-Mian.jpg',
            description: 'Commercial district'
          }
        ]
      },
      {
        title: 'Ann Arbor',
        type: 'event',
        locations: [
          {
            name: 'U of M Campus (Law Quad, the Diag)',
            url: 'https://maps.app.goo.gl/TGH7fGtD1zuVU8Cp8',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/02/38/c6/caption.jpg?w=1200&h=1200&s=1',
            description: 'Sprawling University Campus',
            hoverImg: 'BlockM.png'
          },
          {
            name: 'Nichols Arboretum',
            url: 'https://maps.app.goo.gl/hV9EsXcdwrZB1nmV9',
            img: 'https://i.pinimg.com/736x/bc/ac/6b/bcac6b6c89fcf1bac0641d0298cfb6e2.jpg',
            description: 'The best natural experience in Ann Arbor'
          },
          {
            name: 'Pinball Pete\'s',
            url: 'https://maps.app.goo.gl/S5pxTmmyVGUK94Fq8',
            img: 'https://static.wixstatic.com/media/da95f6_99293008888945b1a6e959923c7d3b43~mv2_d_3415_3137_s_4_2.jpg/v1/fill/w_3415,h_3137,al_c/da95f6_99293008888945b1a6e959923c7d3b43~mv2_d_3415_3137_s_4_2.jpg',
            description: 'Arcade w/ pinball machines and video games'
          },
          {
            name: 'Matthaei Botanical Gardens',
            url: 'https://maps.app.goo.gl/vUa2AoDcJHTztkU16',
            img: 'https://mbgna.umich.edu/sites/default/files/styles/layout_section_listing_image/public/dxpr_builder_images/tropical.jpg',
            description: 'UofM botanical gardens'
          },
          {
            name: 'Kerrytown',
            url: 'https://maps.app.goo.gl/iud3z7PHgr4Jc7Fc7',
            img: 'https://kerrytown.com/wp-content/uploads/2023/07/Kerrytown_Market_Shops_2023_By_Off_Main_Studio-42.jpg',
            description: 'Downtown shopping & restaurants'
          },
          {
            name: 'Main Street Downtown',
            url: 'https://maps.app.goo.gl/5DmjQFwKRLVd8frD8',
            img: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_640/v1/media/gmg/JFKR3GRYQVC3ZHA44GZ7BVRBAA?_a=DAJHqpE+ZAAA',
            description: 'Downtown shopping & restaurants'
          },
          {
            name: 'Michigan Stadium',
            url: 'https://maps.app.goo.gl/9vFQaK7jggu36yhK7',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNEyWyajWuiDpn3RQRVDr67LjE5Onh--bpPlnkZ=w408-h271-k-no',
            description: 'The Team! The Team! The Team!',
            hoverImg: 'BlockM.png'
          },
          {
            name: 'Graffiti Alley',
            url: 'https://maps.app.goo.gl/iyyMaitC2J81DZuo7',
            img: 'https://img.atlasobscura.com/0g1yo6j_gIdjCWbYBvnq-9rXcERsagwhX-hL9dXJZp4/rt:fit/h:400/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8yOTVj/OWEwOC01MGExLTQ4/ZDAtYmZjMi0wOWRi/MTdjNGZhYWE0Yjc5/OTQyMmRkZDIzNDZl/NDNfR3JhZi4gQWxs/eSBXaW5kb3dzIGVk/aXQuanBn.jpg',
            description: 'Art center'
          }
        ]
      }
    ]
  },
  {
    title: 'Food',
    sections: [
      {
        title: 'Downtown Detroit',
        type: 'food',
        locations: [
          {
            name: 'Johnny Noodle King',
            url: 'https://maps.app.goo.gl/NcTT5v7uigUyed4y8',
            img: 'https://platform.detroit.eater.com/wp-content/uploads/sites/13/chorus/uploads/chorus_asset/file/699598/JohnnyNoodleKing-117.0.jpg?quality=90&strip=all',
            description: 'Ramen noodle shop'
          },
          {
            name: 'Detroit Shipping Co.',
            url: 'https://maps.app.goo.gl/GpDbMXGnN6XpbZ9D6',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dD4tJMn7N7cgwPX7rtg9Swqw5cyyQxy6yQ&s',
            description: 'Unique bar & food court'
          },
          {
            name: 'Mad Nice',
            url: 'https://maps.app.goo.gl/QpDpuhTWz2UnC2bw6',
            img: 'https://images.squarespace-cdn.com/content/v1/638931dddf47a848a9e6fa5b/1728676860456-JOW9R3A6B2L928XYQDPY/MadNice2-Restaurant-Bar-Detroit-Michigan.jpg?format=1000w',
            description: 'Italian restaurant'
          },
          {
            name: 'The Apparatus Room',
            url: 'https://maps.app.goo.gl/NctM1kbvC3EpaVij7',
            img: 'https://detroitfoundationhotel.com/wp-content/uploads/2024/02/ApparatusRoom2.jpg',
            description: 'New American restaurant'
          },
          {
            name: 'Ima Izakaya',
            url: 'https://maps.app.goo.gl/u6DS8ztUbcRJmVbP7',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIsbIF6WOnc3CALubEb7eq0nK_Yq8-TCUrg&s',
            description: 'Modern Japanese Izakaya restaurant'
          },
          {
            name: 'Olin',
            url: 'https://maps.app.goo.gl/mGKPsTYZdBC7Vqqk9',
            img: 'https://hospitalitysnapshots.com/wp-content/uploads/sites/3/2021/11/02-MP-Olin-JustinMaconochie2314-A-700x476-compact.jpg',
            description: 'Bar & restaurant'
          }
        ]
      },
      {
        title: 'Ann Arbor',
        type: 'food',
        locations: [
          {
            name: "Zingerman's Delicatessen",
            url: 'https://maps.app.goo.gl/PATjXXbSgywrTVZ48',
            img: 'https://www.zingermansdeli.com/app/uploads/2022/11/Deli_Front_Winter_WEB_2020.jpeg',
            description: 'Sandwich shop'
          },
          {
            name: 'Slurping Turtle',
            url: 'https://maps.app.goo.gl/fbpq2ppkjZWg8jUM8',
            img: 'https://fartleyfarms.com/wp-content/uploads/2021/02/slurping-turtle-spicy-miso-scaled-e1612529365603.jpg',
            description: 'Japanese restaurant'
          },
          {
            name: 'Jolly Pumpkin',
            url: 'https://maps.app.goo.gl/V2CzWMuRyRzmcYuY6',
            img: 'https://www.hrwc.org/wp-content/uploads/2010/05/untitled.bmp',
            description: 'Cafe & Brewery'
          },
          {
            name: 'HOMES Brewery',
            url: 'https://maps.app.goo.gl/aTVYsfNBjAgcmQdM9',
            img: 'https://hopsmash.com/wp-content/uploads/2023/05/Photo_Apr_23_2023_5_04_40_PM-scaled.jpg',
            description: 'Brewery'
          },
          {
            name: "Sava's",
            url: 'https://maps.app.goo.gl/SY2juC9rQMkqhkFM9',
            img: 'https://images.happycow.net/venues/1024/11/78/hcmp117808_1249256.jpeg',
            description: 'Contemporary eatery'
          },
          {
            name: 'Mani Osteria and Bar',
            url: 'https://maps.app.goo.gl/4rR2gPYaKkUVfED56',
            img: 'https://annarborfamily-com-images.s3.amazonaws.com/wp-content/uploads/2016/09/ffIMG_3894.jpg',
            description: 'Italian Restaurant'
          },
          {
            name: 'Adventura',
            url: 'https://maps.app.goo.gl/zCo4bajWYPaTk4Px9',
            img: 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/annarbor/AVENTURA_-363_BFCD12B8-3173-4F30-8C77F69A23C9D75D_33e207ec-a5e4-498b-ab4edf2ab9783ab8.jpg',
            description: 'Tapas Restaurant'
          },
          {
            name: "Café Zola",
            url: 'https://maps.app.goo.gl/paRvqVzoJKYBndBn7',
            img: 'https://ecurrent-com-images.s3.amazonaws.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-03-at-3.21.02-PM.png',
            description: 'Eclectic restaurant'
          }
        ]
      }
    ]
  },
  {
    title: 'Our Favorite Cafes',
    sections: [
      {
        title: 'Downtown Detroit',
        type: 'cafe',
        locations: [
          {
            name: 'Madcap Coffee Company',
            url: 'https://maps.app.goo.gl/ZqjzerATvDHZCxQs7',
            img: 'https://visit-detroit-proxy.imgix.net/https%3A%2F%2Ffiles.idss.com%2FC412%2Fimport_images%2Fmadcap.webp?auto=compress%2Cformat&fit=max&h=1080&q=80&w=1920&s=5c179624930977ea2fed7e56c1a363fb',
            description: 'Bougie coffee shop'
          },
          {
            name: 'Anthology Coffee',
            url: 'https://maps.app.goo.gl/kPGpsYNSo1MuHJJn8',
            img: 'https://s3-media0.fl.yelpcdn.com/bphoto/aRY_mymn4_yUbZyAcXCFNA/348s.jpg',
            description: 'Minimalist, industrial coffee shop'
          }
        ]
      },
      {
        title: 'Ann Arbor & Ypsilanti',
        type: 'cafe',
        locations: [
          {
            name: 'Comet Coffee',
            url: 'https://maps.app.goo.gl/GbripzKfPTFcy8in9',
            img: 'https://s3-media0.fl.yelpcdn.com/bphoto/kd5-1KYrGDX2Ky9ZU65lPA/258s.jpg',
            description: 'Hip java house'
          },
          {
            name: 'Vertex',
            url: 'https://maps.app.goo.gl/tC6fBnaWdjejVXse6',
            img: 'https://images.happycow.net/venues/1024/42/44/hcmp424490_3188700.jpeg',
            description: 'Cafe & roaster'
          },
          {
            name: 'Hyperion',
            url: 'https://maps.app.goo.gl/rsEKXUCGBWmCSLDs8',
            img: 'https://dailycoffeenews.com/wp-content/uploads/2022/01/Hyperion-Coffee-W-Liberty.jpg',
            description: 'Coffee shop'
          },
          {
            name: 'The Boro',
            url: 'https://maps.app.goo.gl/nqWvbm6rWRKvPyC28',
            img: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/MWZN52OB2BACZE7MOAOYPPIPXM.JPG',
            description: 'Bakery'
          },
          {
            name: 'Drip House',
            url: 'https://maps.app.goo.gl/Nh99jQUPB3qf48CZA',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8Iwb_CYXtdBzJ1SQ1x0DXZAIkSXpNptH2N4njuDNZWjDyc0ba9_oolEUlgt4LjjJ40g&usqp=CAU',
            description: 'Stadium side coffee shop'
          }
        ]
      }
    ]
  }
]);
</script>
<style scoped>
.things-to-do-page {
  min-width: 100%;
  min-height: 100%;
  font-size: 40px;
  height: calc(100vh - 80px);
  overflow-y: auto;
}

.header {
  font-size: 50px;
}

.header,
.section-header {
  user-select: none;
}

.mobile .section-header {
  font-size: 28px;
}

.todo-row:last-child {
  margin-bottom: 80px;
}

.things-container {
  position: relative;
}

.things-container {
  padding-bottom: 120px;
}
</style>
