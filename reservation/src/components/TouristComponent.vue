<template>
  <section>
    <!-- Button trigger modal -->
    <div class="pt-5">
      <div id="card" v-if="isToastVisible">
        <div>
          <div class="toast-header" :style="{ backgroundColor: bgcolor, color: changeColor }">
            <strong class="me-auto">Success</strong>
            <small>{{ date }}</small>
          </div>
          <div class="toast-body">
            {{ toastMsg }}
          </div>
        </div>
      </div>


      <button class="btn create-button m-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
        style="background:#003366;">
        <span class="button-text">Create new</span>
        <span class="plus-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-plus text-white" viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg></span>
      </button>


      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" style="max-height: 550px; overflow-y: auto">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form enctype="multipart/form-data">

                <div class="mb-3">
                  <label for="profile" class="form-label">Profile Picture</label>
                  <input type="file" id="profilePicture" name="profile" class="form-control" @change="handleFileUpload" />
                </div>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.firstName.value" />
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.lastName.value" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control email" v-model="formData.email.value" />
                  <small class="text-danger d-none showmsg">Email already been used.</small>
                </div>
                <div class="mb-3">
                  <label for="Date" class="form-label">Date of Birth</label>
                  <input type="date" class="form-control" id="Date" v-model="formData.dateOfBirth.value" />
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <select class="form-select" id="gender" v-model="formData.gender.value">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="formData.phone.value" />
                </div>
                <div class="mb-3">
                  <label for="Address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="Address" v-model="formData.address.value" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

      <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <div class="card-body">
          <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
            <table class="list table table-striped" style="width: 100%">
              <thead>
                <tr>

                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Book</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <template v-if="item.tourist_del !== undefined && item.tourist_del === 1">

                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.phone }}</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-calendar-check-fill" viewBox="0 0 16 16" data-bs-toggle="modal"
                        :data-bs-target="'#bookmodal-' + item.Tourist_id" style="color:#003366;" @click="setRes(item)">
                        <path
                          d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                      </svg>
                      <div class="modal fade" :id="'bookmodal-' + item.Tourist_id" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                          <div class="modal-content" style=" overflow-y: auto;">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Boat Reservation</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form >
                                <main class="d-flex justify-content-between">
                                <section style="width:48%;">
                               
                                <div class="mb-3 " style="width:100%">
                                  <label for="firstName" class="form-label">First Name</label>
                                  <input type="text" class="form-control " id="firstName"
                                    v-model="reserve.fname.value" />
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="lastName" class="form-label">Last Name</label>
                                  <input type="text" class="form-control " id="lastName"
                                    v-model="reserve.lname.value" />
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="Date" class="form-label">Date</label>
                                  <input type="date" class="form-control " id="Date"
                                    v-model="reserve.reservationDate.value" @change="findDate" />
                                </div>
                               

                                <div class="mb-3 " style="width:100%">
                                  <label for="gender" class="form-label">Destination</label>
                                  <select class="form-select border " id="gender"
                                    v-model="reserve.destination.value" @change="findBoat">
                                    <option disabled>Route:</option>
                                    <option :value="JSON.stringify({ name: 'Gilutongan', price: 500 })">Gilutongan
                                    </option>

                                    <option :value="JSON.stringify({ name: 'Nalusoan', price: 500 })">Nalusoan</option>

                                    <option :value="JSON.stringify({ name: 'Olango', price: 500 })">Olango</option>
                                    <option disabled>Package:</option>
                                    <option :value="JSON.stringify({ name: 'Spackage1', price: 1000 })">Can select 2
                                      island
                                      destination.</option>
                                    <option :value="JSON.stringify({ name: 'Spackage2', price: 2000 })">Gilutonga,
                                      nalusoan, and Olanggo.</option>
                                  </select>
                                </div>
                                <div class="mb-3" style="width:100%">
                                  <label for="gender" class="form-label">Time</label>
                                  <select class="form-select " id="duration"
                                    v-model="reserve.duration.value" @change="findBoat">
                                    <option value="6hrs">6 hours</option>
                                    <option value="8hrs">8 hours</option>
                                    <option value="wholeday">Whole day</option>
                                  </select>
                                </div>

                                <div class="mb-3 ">
                                  <label for="boatType" class="form-label">Tour guide</label>
                                  <select class="form-select" id="tourguide" v-model="reserve.tourguide.value"
                                    @change="findBoat">

                                    <option v-for="guide in guides" :key="guide.tg_id"
                                      :value="[guide.tg_id, guide.tg_fname, 500]">{{
                                        guide.tg_fname }}</option>
                                  </select>
                                </div>
                                <!-- </section> -->
                                <!-- <section class="d-block d-md-flex"> -->
                                </section>
                                <section style="width:48%;">
                                  <div class="mb-3 " style="width:100%" v-if="samedate">
                                  <div class="alert alert-warning" role="alert">
                                    Unfortunately, the chosen date is not available as it has already been reserved.
                                    Please select alternative dates or explore other available boats for your reservation
                                  </div>
                                </div>
                                <div class="mb-3 " style="width:100%">
                                  <label for="boatType" class="form-label">Boat Type</label>
                                  <select class="form-select" id="boatType" v-model="reserve.boatName.value"
                                    @change="findBoat">

                                    <option v-for="boat in boats" :key="boat.boatDetails_id"
                                      :value="[boat.boat_owner_id, boat.boatName, boat.size]"
                                      style="display:flex; justify-content: space-between;">
                                      <div>{{ boat.boatName }}</div>
                                    </option>
                                  </select>
                                </div>
                                <div class='desc'>
                                  <div v-if="reserve.boatName.value">
                                    <template v-for="boat in boats" :key="boat.boatDetails_id">
                                      <div v-if="reserve.boatName.value[1] === boat.boatName" class="card "
                                        style="margin-top:10px;">
                                        <section>
                                          <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + boat.Bimag1" style="height:350px; width:500px;"
                                            >
                                            <!-- <img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag2" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag3" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag4" style="height:350px; width:500px;"
                                            ><img :src="'/@fs/reservation/src/assets/uploads/' + boat.Bimag5" style="height:350px; width:500px;"
                                            > -->
                                        </section>
                                        <section>
                                          <div>{{ boat.boatName }}</div>
                                          <div>{{ boat.boatCapacity }}</div>
                                          <div>{{ boat.size }}</div>
                                        </section>
                                      </div>
                                    </template>
                                  </div>
                                </div>
                                </section>
                              </main>
                                Total amount: {{ reserve.totalPrice.value }}
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                  </button>
                                  
                                  <button class="btn btn-primary" type="button" data-bs-toggle="modal"
                                    :data-bs-target="'#paymentModal' + item.Tourist_id"
                                    @click="shouldDisplayRedirect(item.email)">
                                    Proceed
                                  </button>

                                  <!-- Payment Method Modal -->
                                  <div class="modal fade" :id="'paymentModal' + item.Tourist_id" tabindex="-1"
                                    aria-labelledby="paymentModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-fullscreen modal-dialog-centered">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="paymentModalLabel">Select Payment Method</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                          Total Amount: {{ reserve.totalPrice.value }}
                                          <div>
                                            <button v-if="display == true" type="button"
                                              class="btn btn-outline-primary w-100 mb-3" @click="pay">
                                              Pay with GCash
                                            </button>
                                            <a v-if="display == false"
                                              href="https://m.gcash.com/gcash-login-web/index.html#/" type="button"
                                              class="btn btn-outline-primary w-100 mb-3" @click="redirect">
                                              Pay with Gcash
                                            </a>
                                          </div>
                                          <div style="z-index:99;position:fixed;top:0;left:0; height: 100%; "
                                            v-if="gcash">
                                            <div class="modal-dialog  modal-fullscreen modal-dialog-centered">
                                              <div class="modal-content">
                                                <div class="modal-header">

                                                  <h5 class="modal-title text-primary" id="paymentModalLabel">Gcash
                                                  </h5>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                                </div>
                                                <div style="height:300px; ">
                                                  <div class="modal-body"
                                                    style="width:300px;margin-inline: auto; margin-top:50px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">

                                                    <div class="d-flex pt-3 pl-3">
                                                      <div><img
                                                          src="https://www.brodneil.com/wp-content/uploads/2022/05/gcash-logo-1.png"
                                                          width="120" height="60" style="margin-top:8px;" /></div>
                                                      <div class="mt-3 pl-2"><span class="name">{{ item.firstName
                                                      }}***</span>
                                                        <div><span class="cross"></span><span class="pin ml-2">{{
                                                          item.phone }}</span>
                                                        </div>
                                                      </div>
                                                    </div>


                                                    <div class="py-2  px-3">
                                                      <div class="first pl-2 d-flex py-2">
                                                        <div class="form-check">

                                                        </div>
                                                        <div class="border-left pl-2"><span class="head">Balance </span>
                                                          <div><span class="dollar">₱ </span>
                                                            <template v-for="gcash in Gcash" :key="gcash.id">
                                                              <span class="amount"
                                                                v-if="gcash.accountHolderName == item.email">
                                                                {{ gcash.balance
                                                                }} </span>

                                                            </template>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="py-2  px-3 text-center">
                                                      <div class="second pl-2 d-flex py-2">
                                                        <div class="form-check">
                                                        </div>
                                                        <div class="border-left pl-2  ">
                                                          <p class="head" style="text-align: left;">
                                                            amount</p>
                                                          <div class="d-flex"><span class="dollar">₱</span><input
                                                              type="text" name="text" class="form-control ml-1"
                                                              placeholder="0" v-model="reserve.totalPrice.value" disabled></div>
                                                        </div>

                                                      </div>
                                                      <template v-for="gcash in Gcash" :key="gcash.id">
                                                        <span v-if="gcash.accountHolderName == item.email">
                                                          <button type="button" class="btn btn-primary"
                                                            @click="reservation(item.Tourist_id,item.email)"
                                                            :disabled="gcash.balance < reserve.totalPrice.value">
                                                            Pay Now
                                                          </button>
                                                        </span>
                                                      </template>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>



                                          <!-- PayMaya Payment Button -->
                                          <button class="btn btn-outline-success w-100" @click="handlePayment('PayMaya')">
                                            Pay with PayMaya
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <!-- view btn -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        data-bs-toggle="modal" :data-bs-target="'#viewmodal-' + item.Tourist_id"
                        class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded" viewBox="0 0 16 16">
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path
                          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <!-- view modal -->

                      <div class="modal fade" :id="'viewmodal-' + item.Tourist_id" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Tourist Information</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div class="card text-center">
                                <div class="card-header"
                                  style="background: url('/@fs/xampp/htdocs/reservation/src/assets/Gilutongan.png');  height: 250px;padding-top:100px;  background-repeat: no-repeat; background-size:100%; ">
                                  <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.profilePicture"
                                    alt="Profile Picture" class="card-img-top img-fluid rounded-circle hoverImg"
                                    style="width:160px;height:160px; border:5px solid white;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
                                    @click="image">
                                </div>
                                <div v-if="isImage"
                                  style="position: fixed; background-color:rgba(0, 0, 0, 0.5);  top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height:100vh;"
                                  @click="image2">
                                  <img v-if="isImage2"
                                    :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.profilePicture" class="wide">
                                </div>
                                <div class="card-body">
                                  <h5 class="card-title">{{ item.firstName }} {{ item.lastName }}</h5>
                                  <p class="card-text text-muted">{{ item.email }}</p>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <strong>ID:</strong>
                                      <span class="m-2">{{ item.Tourist_id }}</span>
                                    </div>
                                    <div class="col-md-6">
                                      <strong>Gender:</strong>
                                      <span class="m-2">{{ item.gender }}</span>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <strong>Phone:</strong>
                                      <span class="m-2">{{ item.phone }}</span>
                                    </div>
                                    <div class="col-md-6">
                                      <strong>Date Of Birth:</strong>
                                      <span class="m-2">{{ new Date(item.dateOfBirth).toLocaleDateString() }}</span>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <strong>Address:</strong>
                                      <span class="m-2">{{ item.address }}</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-footer">
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">

                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- <div class="modal fade" :id="'viewmodal-' + item.Tourist_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tourist Information</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="z-index:5;"></button>
            </div>
            <div class="modal-body">
                <div class="card text-center">
                    <div class="card-header" style="background: url('/@fs/reservation/src/assets/Gilutongan.png');  height: 250px;padding-top:105px;  background-repeat: no-repeat; background-size:100%; ">
                        
                        <img :src="'/@fs/D:/reservation/src/assets/uploads/' + item.profilePicture" alt="Profile Picture" class="card-img-top img-fluid rounded-circle hoverImg" style="width: 160px; height: 160px; border-radius: 50%; object-fit: cover; border:5px solid white;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"  @click="image">
                      </div>
                    <div v-if="isImage" style="position: fixed; background-color:rgba(0, 0, 0, 0.5);  top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height:100vh;" @click="image2">
    <img  v-if="isImage2" :src="'/@fs/D:/reservation/src/assets/uploads/' + item.profilePicture" class="wide">
</div>


                    
                    <div class="card-body">
                        <h5 class="card-title">{{ item.firstName }} {{ item.lastName }}</h5>
                        <p class="card-text text-muted">{{ item.email }}</p>
                        <div class="row">
                            <div class="col-md-6">
                                <strong>ID:</strong>
                                <span class="m-2">{{ item.Tourist_id }}</span>
                            </div>
                            <div class="col-md-6">
                                <strong>Gender:</strong>
                                <span class="m-2">{{ item.gender }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <strong>Phone:</strong>
                                <span class="m-2">{{ item.phone }}</span>
                            </div>
                            <div class="col-md-6">
                                <strong>Date Of Birth:</strong>
                                <span class="m-2">{{ new Date(item.dateOfBirth).toLocaleDateString() }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <strong>Address:</strong>
                                <span class="m-2">{{ item.address }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div> -->


                    </td>
                    <td>
                      <!-- Edit btn-->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded" viewBox="0 0 16 16"
                        data-bs-toggle="modal" :data-bs-target="'#editmodal-' + item.Tourist_id"
                        @click="setTourist(item)">
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                      <!-- Edit modal -->
                      <div class="modal fade" :id="'editmodal-' + item.Tourist_id" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Edit Information
                              </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form enctype="multipart/form-data">

                                <div class="mb-3">
                                  <label for="profile" class="form-label">Profile Picture</label>
                                  <input type="file" id="profilePictures" name="profile" class="form-control"
                                    @change="handleUpdateFileUpload" />
                                </div>
                                <div class="mb-3">
                                  <label for="firstName" class="form-label">First Name</label>
                                  <input type="text" class="form-control" id="firstName"
                                    v-model="formDataEdit.firstName.value" />
                                </div>
                                <div class="mb-3">
                                  <label for="lastName" class="form-label">Last Name</label>
                                  <input type="text" class="form-control" id="lastName"
                                    v-model="formDataEdit.lastName.value" />
                                </div>
                                <div class="mb-3">
                                  <label for="email" class="form-label">Email</label>
                                  <input type="email" class="form-control" id="email"
                                    v-model="formDataEdit.email.value" />
                                </div>
                                <div class="mb-3">
                                  <label for="Date" class="form-label">Date of Birth</label>
                                  <input type="date" class="form-control" id="Date"
                                    v-model="formDataEdit.dateOfBirth.value" />
                                </div>
                                <div class="mb-3">
                                  <label for="gender" class="form-label">Gender</label>
                                  <select class="form-select" id="gender" v-model="formDataEdit.gender.value">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div class="mb-3">
                                  <label for="phone" class="form-label">Phone</label>
                                  <input type="text" class="form-control" id="phone" v-model="formDataEdit.phone.value" />
                                </div>
                                <div class="mb-3">
                                  <label for="Address" class="form-label">Address</label>
                                  <input type="text" class="form-control" id="Address"
                                    v-model="formDataEdit.address.value" />
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary"
                                    @click="saveChangesUpdate(item.Tourist_id)">Save
                                    changes</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <!-- delete btn -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn" viewBox="0 0 16 16"
                        data-bs-toggle="modal" :data-bs-target="'#deletemodal-' + item.Tourist_id">
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                      <!-- Delete modal -->
                      <div class="modal fade" :id="'deletemodal-' + item.Tourist_id" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Confirm Deletion?
                              </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>
                                Are you sure you delete this item {{ item.Tourist_id }} ?
                              </h5>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                              </button>
                              <button type="button" class="btn btn-primary" @click="deleteData(item.Tourist_id)">
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
const gcash = ref(false);



const bgcolor = ref('white');
const changeColor = ref('black');
const toastMsg = ref('');
const isImage = ref(false);
const isImage2 = ref(false);

const image = () => {
  isImage.value = !isImage.value;
  isImage2.value = !isImage2.value;

};

const image2 = () => {
  isImage2.value = !isImage2.value;
  isImage.value = !isImage.value;

};

const items = ref([]);
const boats = ref([]);
let API_URL = '' || 'http://localhost:3000/';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;
console.log(API_URL);

const Gcash = ref([]);
const fetchGcash = async () => {
  try {
    const response = await axios.get(API_URL + 'api/Gcash');
    Gcash.value = response.data;
    console.log(Gcash.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const getReserve = ref([]);
const fetchReservation = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getReservation');
    getReserve.value = response.data;
    // console.log("reserve: " + getReserve.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const display = ref(false);

const shouldDisplayRedirect = (item) => {
  Gcash.value.forEach((gcash) => {
    if (gcash.accountHolderName === item) {

      display.value = true;

      return;
    }
  });
};



const reserve = {
  Tourist_id: ref(''),
  email: ref(''),
  fname: ref(''),
  lname: ref(''),
  destination: ref(''),
  boatName: ref(''),
  tourguide: ref(''),
  reservationDate: ref(''),
  duration: ref(''),
  status: ref(''),
  tg_id: ref(''),
  boat_owner_id: ref(''),
  totalPrice: ref(''),
  show_me: ref(''),
}
const selectedBoat = ref('');
let samedate = ref(false);

const findDate = () => {
  const inputDate = new Date(reserve.reservationDate.value);
  const formattedDate = inputDate.toLocaleDateString();

  let i = 0;
  getReserve.value.forEach((getReserve,index) => {
    const dateTimeString = getReserve.reservationDate;
    const dateOnlyString = new Date(dateTimeString).toLocaleDateString();
    i++;
    
    console.log(i + ' reserve: ' + dateOnlyString + ' format: ' + formattedDate);
    console.log(i + ' boat reserve: ' + getReserve.boatName + ' boat: ' +reserve.boatName.value[1]);
    console.log(i + ' tourguide reserve: ' + getReserve.tourguide + ' tourguide: ' + reserve.tourguide.value[1]);



    if (dateOnlyString === formattedDate && getReserve.boatName==reserve.boatName.value[1]) {
      samedate.value = true;

      setTimeout(() => {
        samedate.value = false;

      }, 10000);
    }
    return { samedate };
  });
};

const findBoat = () => {
  findDate();
  selectedBoat.value = reserve.boatName.value[2];
  const additionalPrices = {
    '6hrs': 1000,
    '8hrs': 2000,
    'wholeday': 4000
  };
  const boatRent = {
    'small': 1000,
    'medium': 2000,
    'large': 3000
  };
  const destinationObject = JSON.parse(reserve.destination.value);

  const destinationPrice = destinationObject.price; // 1000

  reserve.totalPrice.value = (
    (boatRent[reserve.boatName.value[2]] ?? 0) +
    (reserve.tourguide.value[2] ?? 0) +
    (destinationPrice ?? 0) +
    (additionalPrices[reserve.duration.value] ?? 0)
  );
  fetchData();
};
const setRes = async (item) => {
  reserve.fname.value = item.firstName;
  reserve.lname.value = item.lastName;
}
const pay = () => {
  gcash.value = !gcash.value;
  console.log(reserve.totalPrice.value);
}
const reservation = async (id,email) => {
  reserve.Tourist_id.value = id;
  reserve.email.value=email;
  reserve.boat_owner_id.value = reserve.boatName.value[0];
  reserve.tg_id.value = reserve.tourguide.value[0];
  reserve.show_me.value = "1";
  reserve.status.value = "reserve";
  const destinationObject = JSON.parse(reserve.destination.value);
  const destinationName = destinationObject.name;
  const dataToSend = {
    Tourist_id: reserve.Tourist_id.value,
    email:reserve.email.value,
    fname: reserve.fname.value,
    lname: reserve.lname.value,
    destination: destinationName,
    boatName: reserve.boatName.value[1],
    tourguide: reserve.tourguide.value[1],
    reservationDate: reserve.reservationDate.value,
    duration: reserve.duration.value,
    status: reserve.status.value,
    tg_id: reserve.tg_id.value,
    boat_owner_id: reserve.boat_owner_id.value,
    totalPrice: reserve.totalPrice.value,
    show_me: reserve.show_me.value,
  };
  console.log("Gana mann:"+reserve.email.value);
  const response = await axios.post(API_URL + 'api/insert/reservation', dataToSend);
  gcash.value = !gcash.value;
  $(`#bookmodal-${id}`).modal('hide');
  $(`#paymentModal${id}`).modal('hide');



  for (const key in reserve) {
    if (Object.prototype.hasOwnProperty.call(reserve, key) && reserve[key]?.value !== undefined) {
      if (Array.isArray(reserve[key].value)) {
        reserve[key].value = [];
      } else {
        reserve[key].value = '';
      }
    }
  }

  toastMsg.value = 'Your data successfully inserted!';
  bgcolor.value = '#d4edda';
  showAndHideToast();

  fetchData();

};
const fetchBoat = async () => {
  try {
    const response = await axios.get(API_URL + 'api/getBoatDetails');
    boats.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/get');
    items.value = response.data;
    // console.log(items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



const guides = ref([]);
const fetchTourguide = async () => {
  try {
    const response = await axios.get(API_URL + 'api/gettourguide');
    guides.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const formData = {
  firstName: ref(''),
  lastName: ref(''),
  email: ref(''),
  dateOfBirth: ref(''),
  gender: ref(''),
  phone: ref(''),
  address: ref(''),
  profilePicture: null,
  tourist_del: ref(''),
};

const handleFileUpload = (event) => {
  formData.profilePicture = event.target.files[0];
};

const email_auth=ref(true);
const saveChanges = async () => {

  const formDataObject = new FormData();
  formData.tourist_del.value = 1;
  formDataObject.append("firstName", formData.firstName.value);
  formDataObject.append("lastName", formData.lastName.value);
  formDataObject.append("email", formData.email.value);
  formDataObject.append("dateOfBirth", formData.dateOfBirth.value);
  formDataObject.append("gender", formData.gender.value);
  formDataObject.append("phone", formData.phone.value);
  formDataObject.append("address", formData.address.value);
  formDataObject.append("profilePicture", formData.profilePicture);
  formDataObject.append("tourist_del", formData.tourist_del.value);
 
  
  for (let i = 0; i < items.value.length; i++) {
  let item = items.value[i];

  if (item.email== formData.email.value) {
    email_auth.value = false;
    console.log("Email already exists: " +  email_auth.value);
    break;
  }
}

  if(email_auth.value){
  try {
    const response = await axios.post(API_URL + 'api/insert', formDataObject);

    formData.firstName.value = '';
    formData.lastName.value = '';
    formData.email.value = '';
    formData.dateOfBirth.value = '';
    formData.gender.value = '';
    formData.phone.value = '';
    formData.address.value = '';
    formData.profilePicture = null;
    formData.tourist_del.value = '';
    document.getElementById('profilePicture').value = '';

    $('#exampleModal').modal('hide');

    toastMsg.value = 'Your data successfully Inserted!.';
    bgcolor.value = '#d4edda';
    showAndHideToast();

    fetchData();
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
else{
$('.email').addClass('btn-outline-danger');
$('.showmsg').removeClass('d-none');

$('.email').addClass('shake');
setTimeout(() => {
  $('.email').removeClass('shake');
}, 500);

setTimeout(() => {
  $('.email').removeClass('btn-outline-danger');
  $('.showmsg').addClass('d-none');
  $('.email').removeClass('shake');
}, 5000);

}
email_auth.value=true;

};


const formDataEdit = {
  firstName: ref(''),
  lastName: ref(''),
  email: ref(''),
  dateOfBirth: ref(''),
  gender: ref(''),
  phone: ref(''),
  address: ref(''),
  profilePicture: null,
  Tourist_id: ref(''),
};

const setTourist = async (item) => {
  formDataEdit.firstName.value = item.firstName;
  formDataEdit.lastName.value = item.lastName;
  formDataEdit.email.value = item.email;
  formDataEdit.gender.value = item.gender;
  formDataEdit.phone.value = item.phone;
  formDataEdit.address.value = item.address;
  formDataEdit.profilePicture = item.profilePicture;
};
const handleUpdateFileUpload = (event) => {
  formDataEdit.profilePicture = event.target.files[0];
  console.log('formDataEdit:', formDataEdit.profilePicture);
};

const saveChangesUpdate = async (id) => {
  const formDataObject = new FormData();
  formDataEdit.Tourist_id = id;
  formDataObject.append("firstName", formDataEdit.firstName.value);
  formDataObject.append("lastName", formDataEdit.lastName.value);
  formDataObject.append("email", formDataEdit.email.value);
  formDataObject.append("dateOfBirth", formDataEdit.dateOfBirth.value);
  formDataObject.append("gender", formDataEdit.gender.value);
  formDataObject.append("phone", formDataEdit.phone.value);
  formDataObject.append("address", formDataEdit.address.value);
  formDataObject.append("profilePicture", formDataEdit.profilePicture);
  formDataObject.append("Tourist_id", formDataEdit.Tourist_id);

  try {
    const response = await axios.put(API_URL + 'api/editTourist', formDataObject);

    $(`#editmodal-${id}`).modal('hide');

    toastMsg.value = 'Your data successfully Updated!.';
    bgcolor.value = '#d1ecf1';
    showAndHideToast();
    fetchData();

  } catch (error) {
    console.error('Error updating data:', error);
  }
};
const deleteData = (tourist_del) => {
  axios
    .post(API_URL + 'api/delete/' + tourist_del)
    .then((response) => {
      $(`#deletemodal-${tourist_del}`).modal('hide');
      toastMsg.value = 'Your data successfully Deleted!.';
      bgcolor.value = '#dc3545';
      changeColor.value = 'white';
      showAndHideToast();
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};
// toast 
const date = ref('');
date.value = new Date();
date.value = date.value.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

const isToastVisible = ref(false);

const showAndHideToast = () => {
  isToastVisible.value = true;
  setTimeout(() => {
    hideToast();
  }, 5000);
};

const hideToast = () => {
  isToastVisible.value = false;
};
const datatable = async () => {
  $(".list").DataTable();
};

onMounted(async () => {
  // await fetchClientIP();
  await fetchReservation();
  await fetchBoat();
  await fetchTourguide();
  console.log('Component mounted');
  await fetchData()
  datatable();
  await fetchGcash();
  shouldDisplayRedirect();
});


</script>
<style scoped>
.hoverImg:hover {
  opacity: 0.9;
}

.wide {
  width: 70%;
  height: auto;
  margin: 100px auto;
}


@media screen and (max-width: 767px) {
  .wide {
    width: 100%;
    margin: 50px auto;
    margin-top: 150px;
  }
}

#card {
  position: fixed;
  right: 40px;
  z-index: 99;
  opacity: 0;
  animation: slideIn 0.5s forwards;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: white;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.toast-header {
  color: black;
  padding: 8px;
  padding-inline: 12px;
}

.toast-body {
  padding: 8px;
  padding-inline: 12px;
  background-color: white;
}
.shake {
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
}

</style>