<template>
  <div>
    <!-- Carousel -->
    <div id="cardCarousel" class="carousel slide text-center" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === currentSlide }">
          <div class="card">
            <img :src="slide.image" class="card-img-top" :alt="slide.alt" />
            <div class="card-body">
              <h5 class="card-title">{{ slide.label }}</h5>
              <p class="card-text">{{ slide.description }}</p>
              <button type="button" class="btn btn-primary btn-rounded" data-toggle="modal" data-target="#modalContactForm">
                RESERVATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#cardCarousel" role="button" data-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a class="carousel-control-next" href="#cardCarousel" role="button" data-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
    <section class="boxes">
    <!-- Contact Section -->
    <div class="container mt-5">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Contact Us</h5>
      <p class="card-text">Feel free to contact us for any inquiries or assistance. We are here to help you with prompt and friendly support.</p>
      <p class="card-text">Cell No. 09420587551</p>
    </div>
  </div>
</div>

<!-- About Section -->
<div class="container mt-5 ">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">About Us</h5>
      <p class="card-text">Learn more about our company and mission. Our story revolves around a commitment to excellence and a passion for making a positive impact.</p>
    </div>
  </div>
</div>

<!-- Comments Section -->
<div class="container mt-5">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Message Us</h5>
      <p class="card-text">Feel free to send us a message for any inquiries or feedback. We value your input and strive to address your concerns promptly and effectively.</p>
      <button type="button" class="btn btn-primary btn-rounded" data-toggle="modal" data-target="#messageModal">
        MESSAGE US
      </button>
    </div>
  </div>
</div>

  </section>
  <footer class="text-center mt-5 bg-white" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
   
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: "https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-samoa.jpg",
          alt: "Sunset Over the City",
          label: "Gilutongan Island",
          description: "Gilutongan is one of the islands comprising the Olango Island Group, a group of islands in between Mactan and the Danajon Bank in the Philippines. Most of the Olango islands are part of Lapu-Lapu City, Gilutongan, however, is under the jurisdiction of the municipality of Cordova, Cebu."
        },
        {
          image: "https://img.delicious.com.au/sidRElm9/del/2018/09/hayman-island-queensland-87363-3.jpg",
          alt: "Canyon at Night",
          label: "Nalusoan Island",
          description: "Nalusuan Island Resort and Marine Sanctuary is a pearl of Cebu, Philippines and a must-visit destination for intrepid travelers."
        },
        {
          image: "https://a.cdn-hotels.com/gdcs/production2/d723/da64fdee-5e39-4caa-bfed-0fd433777f62.jpg?impolicy=fcrop&w=800&h=533&q=medium",
          alt: "Cliff Above a Stormy Sea",
          label: "Olango Island",
          description: "Olango Island has always been known as a birdwatcher’s paradise. But there’s more to this little island in Cebu than the migratory birds."
        },
      ],
      interval: 4000,
      autoTransitionInterval: null
    };
  },
  mounted() {
    this.startAutoTransition();
  },
  beforeUnmount() {
    this.stopAutoTransition();
  },
  methods: {
    prevSlide() {
      this.stopAutoTransition();
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.stopAutoTransition();
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    startAutoTransition() {
      if (this.interval > 0) {
        this.autoTransitionInterval = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, this.interval);
      }
    },
    stopAutoTransition() {
      clearInterval(this.autoTransitionInterval);
    }
  }
};
</script>

<style scoped>
/* Add your custom styles for the card carousel */
.card {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.boxes{
  display: flex;
}
@media screen and (max-width: 767px) {
  .boxes{
    display: block;
  }
}
.card-img-top {
  width: 100%;
  height: 400px; /* Adjust the height as needed */
  object-fit: cover;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.btn-rounded {
  font-size: 16px;
}
footer {
  background-color: #f8f9fa; /* Set your desired background color */
  padding: 20px;
}


</style>
