<template>
  <section>
    <div class="container" style="padding-top: 100px;">

      <!-- Boat Cards Section -->
      <div class="cons">
        <div class="row row-cols-1 row-cols-md-3 g-4 flex-wrap">
          <!-- Small Boat Card -->
          <div class="col">
            <div class="card boat-card">
              <div class="card-body text-center boat-info">
                <h5 class="card-title">Small Boat</h5>
                <p class="card-text">Ideal for intimate trips.</p>
                <p class="card-text">Rent: 2000 PHP - 8 hours</p>
                <p class="card-text">Rent: 3000 PHP - 6 hours</p>
                <p class="card-text">Rent: 4000 PHP - Whole day</p>
              </div>
            </div>
          </div>

          <!-- Medium Boat Card -->
          <div class="col">
            <div class="card boat-card">
              <div class="card-body text-center boat-info">
                <h5 class="card-title">Medium Boat</h5>
                <p class="card-text">Perfect for a moderate-sized group.</p>
                <p class="card-text">Rent: 3000 PHP - 8 hours</p>
                <p class="card-text">Rent: 4000 PHP - 6 hours</p>
                <p class="card-text">Rent: 5000 PHP - Whole day</p>
              </div>
            </div>
          </div>

          <!-- Large Boat Card -->
          <div class="col">
            <div class="card boat-card">
              <div class="card-body text-center boat-info">
                <h5 class="card-title">Large Boat</h5>
                <p class="card-text">Spacious vessel for big groups.</p>
                <p class="card-text">Rent: 4000 PHP - 8 hours</p>
                <p class="card-text">Rent: 5000 PHP - 6 hours</p>
                <p class="card-text">Rent: 6000 PHP - Whole day</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Charges and Tour Guide Section -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="additional-charges">
              <h4 class="mb-3">Additional Charges:</h4>
              <ul>
                <li>One Route Island: 500 PHP</li>
                <li>Two Routes Island: 1000 PHP</li>
                <li>Three Routes Island: 1500 PHP</li>
                <li>Additional Hours (per hour):</li>
                <ul>
                  <li>8 hours - 2000 PHP</li>
                  <li>6 hours - 1000 PHP</li>
                  <li>Whole day - 3500 PHP</li>
                </ul>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="optional-tour-guide">
              <h4 class="mb-3">Optional Tour Guide:</h4>
              <ul>
                <li>Half day - 1000 PHP</li>
                <li>Whole day - 2000 PHP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.boat-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px; /* Updated box-shadow */
  transition: transform 0.2s;
}

.boat-info {
  background-color: #fff; /* White background color */
  border-radius: 0 0 15px 15px;
}

.additional-charges,
.optional-tour-guide {
  padding: 20px;
  background-color: #fff; /* White background color */
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px; /* Updated box-shadow */
  transition: transform 0.2s;
  font-family: 'Arial', sans-serif; /* Use a professional font */
  color: #333; /* Dark text color */
}

/* Add media query for small screens */
@media (max-width: 767px) {
  .boat-card {
    max-height: 300px; /* Set your preferred max-height */
    overflow-y: auto;
  }
  .cons {
    max-height: 550px; /* Set your preferred max-height */
    overflow-y: auto;
  }
  .additional-charges,
  .optional-tour-guide {
    max-height: 300px; /* Set your preferred max-height */
    overflow-y: auto;
  }
}
</style>

<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>
