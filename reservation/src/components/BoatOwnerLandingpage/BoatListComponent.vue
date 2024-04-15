

<template>
    <section>
        <div style="padding-top: 12px;">
            <div id="card" v-if="isToastVisible">
                <div>
                    <div class="toast-header" :style="{ backgroundColor: bgcolor }">
                        <strong class="me-auto">Success</strong>
                        <small>{{ date }}</small>
                    </div>
                    <div class="toast-body">
                        {{ toastMsg }}
                    </div>
                </div>
            </div>

            <button class="btn create-button m-4" data-bs-toggle="modal" :data-bs-target="'#detailsmodal-' + id"
                style="background:#003366;">
                <span class="button-text">Create new</span>
                <span class="plus-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-plus text-white" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></span>
            </button>
            <!-- details modal -->
            <div class="modal fade" :id="'detailsmodal-' + id" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="max-height: 550px; overflow-y: auto">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Edit Information
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="detailsEdit(id)" enctype="multipart/form-data">
                                <div class="mb-3">
                                    <label for="profile" class="form-label">Photo</label>
                                    <div class="d-flex">
                                        <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                            @change="handleFileEditDetails1" />

                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                            class="bi bi-plus-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                            style="color:#003366; " @click="addImg">
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="mb-3" v-if="isImg2">
                                    <label for="profile" class="form-label">Top Photo</label>
                                    <div class="d-flex">
                                        <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                            @change="handleFileEditDetails2" />

                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                            class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                            style="color:#003366;" @click="subImg2">
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                        </svg>
                                    </div>

                                </div>
                                <div class="mb-3" v-if="isImg3">
                                    <label for="profile" class="form-label">Bottom Photo</label>
                                    <div class="d-flex">
                                        <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                            @change="handleFileEditDetails3" />

                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                            class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                            style="color:#003366;" @click="subImg3">
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mb-3" v-if="isImg4">
                                    <label for="profile" class="form-label">Left Side photo</label>
                                    <div class="d-flex">
                                        <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                            @change="handleFileEditDetails4" />

                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                            class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                            style="color:#003366;" @click="subImg4">
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mb-3" v-if="isImg5">
                                    <label for="profile" class="form-label">Right Side Photo</label>
                                    <div class="d-flex">
                                        <input type="file" id="boat_owner_img" name="profile" class="form-control"
                                            @change="handleFileEditDetails5" />

                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                            class="bi bi-x-square-fill p-1 mx-1 rounded" viewBox="0 0 16 16"
                                            style="color:#003366;" @click="subImg5">
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                        </svg>
                                    </div>
                                </div>


                                <div class="mb-3">
                                    <label for="boatName" class="form-label">Boat Name</label>
                                    <input type="text" class="form-control" id="boatName"
                                        v-model="formdetailsEdit.boatName.value" />
                                </div>
                                <div class="mb-3">
                                    <label for="Capacity" class="form-label">Boat Capacity</label>
                                    <input type="number" class="form-control" id="Capacity"
                                        v-model="formdetailsEdit.boatCapacity.value" />
                                </div>
                                <div class="mb-3">
                                    <label for="size" class="form-label">size:</label>
                                    <input type="text" class="form-control" id="size"
                                        v-model="formdetailsEdit.size.value" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end modal boat  -->
            <div class="card mx-4" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;">
                <div class="card-body">
                    <div class="table-responsive" style="max-height: 450px; overflow-y: auto">
                        <table class="listOfBoatOwners table table-striped" style="width: 100%">
                            <thead class="d-flex m-2">
                                <input type="text" class="form-control" v-model="searchQuery" placeholder="Search..."
                                    style="width: 250px; ">
                            </thead>
                            <tbody class=" d-flex  flex-wrap">
                                <template v-for="item in filteredItems" :key="item.boat_owner_id">

                                    <div class="card mb-3 mx-2 boxes">
                                        <div class="row g-2">
                                            <div class="col-md-6">
                                                <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + item.Bimag1"
                                                    class="img-fluid rounded-start" alt="Boat Image"
                                                    style="width: 100%; height: 100%;">
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{
                                                        item.boatName }}</h5>
                                                    <p class="card-text">
                                                        <span>Boat ID:</span> {{ item.boatDetails_id }}<br>
                                                        <span>Owner:</span> {{ item.boat_owner_fname }} {{
                                                            item.boat_owner_lname }}<br>
                                                        <span>Capacity:</span> {{ item.boatCapacity }}<br>
                                                        <span>Size:</span> {{ item.size }}
                                                    </p>
                                                    <!-- Add other content as needed -->
                                                    <div class="d-flex">
                                                        <div>
                                                            <!-- view btn -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                fill="currentColor" data-bs-toggle="modal"
                                                                :data-bs-target="'#viewmodal-' + item.boatDetails_id"
                                                                class="viewBtn viewImg bi bi-eye text-white bg-success p-1 mx-1 rounded"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path
                                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                            </svg>
                                                            <!-- view modal -->
                                                            <div class="modal fade" :id="'viewmodal-' + item.boatDetails_id"
                                                                tabindex="-1" aria-labelledby="exampleModalLabel"
                                                                aria-hidden="true">
                                                                <div
                                                                    class="modal-dialog modal-fullscreen modal-dialog-centered">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">
                                                                                Boat Details
                                                                            </h5>
                                                                            <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <div class="card text-center">
                                                                                <div class="card-header">
                                                                                    <!-- Bootstrap carousel for images -->
                                                                                    <div :id="'carouselExampleControls-' + item.boatDetails_id"
                                                                                        class="carousel slide"
                                                                                        data-bs-ride="carousel">
                                                                                        <div class="carousel-inner">
                                                                                            <div v-for="(image, index) in [item.Bimag1, item.Bimag2, item.Bimag3, item.Bimag4, item.Bimag5]"
                                                                                                :key="index"
                                                                                                class="carousel-item"
                                                                                                :class="{ 'active': index === 0 }">
                                                                                                <img :src="'/@fs/xampp/htdocs/reservation/src/assets/uploads/' + image"
                                                                                                    class="d-block couraselImg"
                                                                                                    alt="Image">
                                                                                            </div>
                                                                                        </div>
                                                                                        <button
                                                                                            class="carousel-control-prev"
                                                                                            type="button"
                                                                                            :data-bs-target="'#carouselExampleControls-' + item.boatDetails_id"
                                                                                            data-bs-slide="prev"
                                                                                            style="background-color: gray; opacity: 0.1;">
                                                                                            <span
                                                                                                class="carousel-control-prev-icon"
                                                                                                aria-hidden="true"></span>
                                                                                            <span
                                                                                                class="visually-hidden">Previous</span>
                                                                                        </button>
                                                                                        <button
                                                                                            class="carousel-control-next"
                                                                                            type="button"
                                                                                            :data-bs-target="'#carouselExampleControls-' + item.boatDetails_id"
                                                                                            data-bs-slide="next"
                                                                                            style="background-color: gray; opacity: 0.1;">
                                                                                            <span
                                                                                                class="carousel-control-next-icon "
                                                                                                aria-hidden="true"></span>
                                                                                            <span
                                                                                                class="visually-hidden">Next</span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="card-body mt-3">
                                                                                    <h5 class="card-title">{{ item.boatName
                                                                                    }}</h5>
                                                                                    <ul class="list-unstyled  res">
                                                                                        <p>
                                                                                            <li><strong>Boat ID:</strong> {{
                                                                                                item.boatDetails_id }}</li>
                                                                                            <li><strong>Owner:</strong> {{
                                                                                                item.boat_owner_fname }} {{
        item.boat_owner_lname }}
                                                                                            </li>
                                                                                        </p>
                                                                                        <p>
                                                                                            <li><strong>Capacity:</strong>
                                                                                                {{
                                                                                                    item.boatCapacity }}</li>
                                                                                            <li><strong>size:</strong> {{
                                                                                                item.size }}
                                                                                            </li>
                                                                                        </p>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <!-- Add footer buttons or other elements as needed -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <!--deatisl  -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                fill="currentColor"
                                                                class="editBtn bi bi-pencil-square text-white bg-primary p-1 mx-1 rounded"
                                                                viewBox="0 0 16 16" data-bs-toggle="modal"
                                                                :data-bs-target="'#editmodal-' + item.boatDetails_id"
                                                                @click="setDetails(item)">
                                                                <path
                                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fill-rule="evenodd"
                                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                            </svg>

                                                            <!-- details modal -->
                                                            <div class="modal fade" :id="'editmodal-' + item.boatDetails_id"
                                                                tabindex="-1" aria-labelledby="exampleModalLabel"
                                                                aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content"
                                                                        style="max-height: 550px; overflow-y: auto">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">
                                                                                Edit Information
                                                                            </h5>
                                                                            <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <form
                                                                                @submit.prevent="detailsEditData(item.boatDetails_id)"
                                                                                enctype="multipart/form-data">
                                                                                <div class="mb-3">
                                                                                    <label for="profile"
                                                                                        class="form-label">Profile
                                                                                        Picture</label>
                                                                                    <div class="d-flex">
                                                                                        <input type="file"
                                                                                            id="boat_owner_img"
                                                                                            name="profile"
                                                                                            class="form-control"
                                                                                            @change="handleFileUploaddetails1" />

                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="38" height="38"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-plus-square-fill p-1 mx-1 rounded"
                                                                                            viewBox="0 0 16 16"
                                                                                            style="color:#003366; "
                                                                                            @click="addImg">
                                                                                            <path
                                                                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                                                                        </svg>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="mb-3" v-if="isImg2">
                                                                                    <label for="profile"
                                                                                        class="form-label">Profile
                                                                                        Picture</label>
                                                                                    <div class="d-flex">
                                                                                        <input type="file"
                                                                                            id="boat_owner_img"
                                                                                            name="profile"
                                                                                            class="form-control"
                                                                                            @change="handleFileUploaddetails2" />

                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="38" height="38"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-x-square-fill p-1 mx-1 rounded"
                                                                                            viewBox="0 0 16 16"
                                                                                            style="color:#003366;"
                                                                                            @click="subImg2">
                                                                                            <path
                                                                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mb-3" v-if="isImg3">
                                                                                    <label for="profile"
                                                                                        class="form-label">Profile
                                                                                        Picture</label>
                                                                                    <div class="d-flex">
                                                                                        <input type="file"
                                                                                            id="boat_owner_img"
                                                                                            name="profile"
                                                                                            class="form-control"
                                                                                            @change="handleFileUploaddetails3" />

                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="38" height="38"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-x-square-fill p-1 mx-1 rounded"
                                                                                            viewBox="0 0 16 16"
                                                                                            style="color:#003366;"
                                                                                            @click="subImg3">
                                                                                            <path
                                                                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mb-3" v-if="isImg4">
                                                                                    <label for="profile"
                                                                                        class="form-label">Profile
                                                                                        Picture</label>
                                                                                    <div class="d-flex">
                                                                                        <input type="file"
                                                                                            id="boat_owner_img"
                                                                                            name="profile"
                                                                                            class="form-control"
                                                                                            @change="handleFileUploaddetails4" />

                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="38" height="38"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-x-square-fill p-1 mx-1 rounded"
                                                                                            viewBox="0 0 16 16"
                                                                                            style="color:#003366;"
                                                                                            @click="subImg4">
                                                                                            <path
                                                                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mb-3" v-if="isImg5">
                                                                                    <label for="profile"
                                                                                        class="form-label">Profile
                                                                                        Picture</label>
                                                                                    <div class="d-flex">
                                                                                        <input type="file"
                                                                                            id="boat_owner_img"
                                                                                            name="profile"
                                                                                            class="form-control"
                                                                                            @change="handleFileUploaddetails5" />

                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="38" height="38"
                                                                                            fill="currentColor"
                                                                                            class="bi bi-x-square-fill p-1 mx-1 rounded"
                                                                                            viewBox="0 0 16 16"
                                                                                            style="color:#003366;"
                                                                                            @click="subImg5">
                                                                                            <path
                                                                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="mb-3">
                                                                                    <label for="boatName"
                                                                                        class="form-label">Boat
                                                                                        Name</label>
                                                                                    <input type="text" class="form-control"
                                                                                        id="boatName"
                                                                                        v-model="formDetails.boatName.value" />
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="Capacity"
                                                                                        class="form-label">Boat
                                                                                        Capacity</label>
                                                                                    <input type="number"
                                                                                        class="form-control" id="Capacity"
                                                                                        v-model="formDetails.boatCapacity.value" />
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="size"
                                                                                        class="form-label">Boat
                                                                                        size</label>
                                                                                    <input type="text" class="form-control"
                                                                                        id="size"
                                                                                        v-model="formDetails.size.value" />
                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                    <button type="button"
                                                                                        class="btn btn-secondary"
                                                                                        data-bs-dismiss="modal">
                                                                                        Close
                                                                                    </button>
                                                                                    <button type="submit"
                                                                                        class="btn btn-primary">Save
                                                                                        changes</button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <!-- delete btn -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                fill="currentColor"
                                                                class="bi bi-trash text-white bg-danger p-1 rounded mx-1 delbtn"
                                                                viewBox="0 0 16 16" data-bs-toggle="modal"
                                                                :data-bs-target="'#deletemodal-' + item.boatDetails_id">
                                                                <path
                                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                <path
                                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                            </svg>
                                                            <!-- Delete modal -->
                                                            <div class="modal fade"
                                                                :id="'deletemodal-' + item.boatDetails_id" tabindex="-1"
                                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">
                                                                                Confirm Deletion?
                                                                            </h5>
                                                                            <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <h5>
                                                                                Are you sure you delete this item {{
                                                                                    item.boatDetails_id
                                                                                }}
                                                                                ?
                                                                            </h5>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary"
                                                                                data-bs-dismiss="modal">
                                                                                Cancel
                                                                            </button>
                                                                            <button type="button" class="btn btn-primary"
                                                                                @click="deleteData(item.boatDetails_id)">
                                                                                Yes
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--  -->
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                fill="currentColor"
                                                                class="bi bi-tools maintenance-icon text-white p-1 rounded mx-1"
                                                                viewBox="0 0 16 16"
                                                                style="background-color:#14243c ; margin-top:2px;"
                                                                data-bs-toggle="modal"
                                                                :data-bs-target="'#maintenancemodal-' + item.boatDetails_id">
                                                                <path
                                                                    d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                                                            </svg>
                                                            <div class="modal fade"
                                                                :id="'maintenancemodal-' + item.boatDetails_id"
                                                                tabindex="-1" aria-labelledby="exampleModalLabel"
                                                                aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLabel">
                                                                                Confirm Deletion?
                                                                            </h5>
                                                                            <button type="button" class="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <form
                                                                            @submit.prevent="submitMaintenance(item.boatDetails_id)">
                                                                            <div class="modal-body">
                                                                                <h5>
                                                                                    Are you sure you delete this item {{
                                                                                        item.boatDetails_id
                                                                                    }}
                                                                                    ?
                                                                                </h5>
                                                                                <textarea id="maintainance" v-model="description"></textarea>
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button type="button"
                                                                                    class="btn btn-secondary"
                                                                                    data-bs-dismiss="modal">
                                                                                    Cancel
                                                                                </button>
                                                                                <button type="submit"
                                                                                    class="btn btn-primary">
                                                                                    Yes
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from 'axios';
import '../../assets/main.css';


const bgcolor = ref('white');
const toastMsg = ref('');
const changeColor = ref('black');

const items = ref([]);

const searchQuery = ref('');

const filteredItems = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return items.value.filter(item =>
        item.boatName.toLowerCase().includes(query) ||
        item.boatCapacity.toString().includes(query) ||
        item.size.toString().includes(query)
    );
});

let API_URL = '';
const serverURL = `${window.location.protocol}//${window.location.host.replace(/:\d+$/, '')}`;
API_URL = `${serverURL}:3000/`;


const id = ref('');
const description = ref('');
const submitMaintenance = async (id) => {
    const formMaintenance = {
        description: description.value,
        boat_id: id
    };

    try {
        const response = await axios.post(API_URL + 'api/maintenance', formMaintenance);
        $(`#maintenance-${id}`).modal('hide');
        toastMsg.value = 'Your data successfully submitted!';
        toastMsg.value = 'Your data successfully Inserted!.';
            bgcolor.value = '#d4edda';
            showAndHideToast();
        fetchData();
    } catch (error) {
        console.error(error);
    }
};

const fetchData = async () => {

    try {
        const response = await axios.get(`${API_URL}api/getBoatDetails`);
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    id.value = localStorage.getItem('Id')
    console.log("boat owner: " + id.value);

};

// boat details

const isImg2 = ref(false);
const isImg3 = ref(false);
const isImg4 = ref(false);
const isImg5 = ref(false);
let i = 1;

const addImg = () => {
    if (i !== 5) {
        i++;

        switch (i) {
            case 2:
                isImg2.value = true;
                break;
            case 3:
                isImg3.value = true;
                break;
            case 4:
                isImg4.value = true;
                break;
            case 5:
                isImg5.value = true;
                break;
            default:
                break;
        }
    }

    console.log(i);
};



const subImg2 = () => {
    isImg2.value = !isImg2.value;
    i--;
}
const subImg3 = () => {
    isImg3.value = !isImg3.value;
    i--;
}

const subImg4 = () => {
    isImg4.value = !isImg4.value;
    i--;
}

const subImg5 = () => {
    isImg5.value = !isImg5.value;
    i--;
}
// insert boat

const formdetailsEdit = {
    boatName: ref(''),
    boatCapacity: ref(''),
    boat_owner_id: ref(''),
    size: ref(''),
    soft_delete: ref(''),
};
const handleFileEditDetails1 = (event) => {
    formdetailsEdit.Bimag1 = event.target.files[0];
};
const handleFileEditDetails2 = (event) => {
    formdetailsEdit.Bimag2 = event.target.files[0];
};
const handleFileEditDetails3 = (event) => {
    formdetailsEdit.Bimag3 = event.target.files[0];
};
const handleFileEditDetails4 = (event) => {
    formdetailsEdit.Bimag4 = event.target.files[0];
};
const handleFileEditDetails5 = (event) => {
    formdetailsEdit.Bimag5 = event.target.files[0];
};

const detailsEdit = (id) => {
    console.log(id);
    const formDataObject = new FormData();
    formdetailsEdit.boat_owner_id = id;
    formdetailsEdit.soft_delete = 1;
    formDataObject.append("boat_owner_id", formdetailsEdit.boat_owner_id);
    formDataObject.append("boatName", formdetailsEdit.boatName.value);
    formDataObject.append("boatCapacity", formdetailsEdit.boatCapacity.value);
    formDataObject.append("Bimag1", formdetailsEdit.Bimag1);
    formDataObject.append("Bimag2", formdetailsEdit.Bimag2);
    formDataObject.append("Bimag3", formdetailsEdit.Bimag3);
    formDataObject.append("Bimag4", formdetailsEdit.Bimag4);
    formDataObject.append("Bimag5", formdetailsEdit.Bimag5);
    formDataObject.append("size", formdetailsEdit.size.value);
    formDataObject.append("soft_delete", formdetailsEdit.soft_delete);

    axios.post(API_URL + 'api/insert/boatdetails', formDataObject)
        .then((response) => {
            $(`#detailsmodal-${id}`).modal('hide');
            toastMsg.value = 'Your data successfully Inserted!.';
            bgcolor.value = '#d4edda';
            showAndHideToast();

            fetchData();
        })
        .catch((error) => {
            console.log(error);

        });
}


// update boat
const formDetails = {
    boatName: ref(''),
    boatCapacity: ref(''),
    size: ref(''),
    boatDetails_id: ref(''),
};
const setDetails = async (item) => {
    formDetails.boatName.value = item.boatName;
    formDetails.boatCapacity.value = item.boatCapacity;
    formDetails.size.value = item.size;

};
const handleFileUploaddetails1 = (event) => {
    formDetails.Bimag1 = event.target.files[0];
};
const handleFileUploaddetails2 = (event) => {
    formDetails.Bimag2 = event.target.files[0];
};
const handleFileUploaddetails3 = (event) => {
    formDetails.Bimag3 = event.target.files[0];
};
const handleFileUploaddetails4 = (event) => {
    formDetails.Bimag4 = event.target.files[0];
};
const handleFileUploaddetails5 = (event) => {
    formDetails.Bimag5 = event.target.files[0];
};

const detailsEditData = (id) => {
    console.log(id);
    const formDataObject = new FormData();
    formDetails.boatDetails_id = id;
    formDataObject.append("boatName", formDetails.boatName.value);
    formDataObject.append("boatCapacity", formDetails.boatCapacity.value);
    formDataObject.append("Bimag1", formDetails.Bimag1);
    formDataObject.append("Bimag2", formDetails.Bimag2);
    formDataObject.append("Bimag3", formDetails.Bimag3);
    formDataObject.append("Bimag4", formDetails.Bimag4);
    formDataObject.append("Bimag5", formDetails.Bimag5);
    formDataObject.append("size", formDetails.size.value);
    formDataObject.append("boatDetails_id", formDetails.boatDetails_id);

    axios.post(API_URL + 'api/boatEditdetails', formDataObject)
        .then((response) => {
            $(`#editmodal-${id}`).modal('hide');
            toastMsg.value = 'Your data successfully Updated!.';
            bgcolor.value = '#d1ecf1';
            showAndHideToast();
            fetchData();
        })
        .catch((error) => {
            console.log(error);

        });
}



const deleteData = (id) => {
    axios
        .post(API_URL + 'api/deleteboatDetails/' + id)
        .then((response) => {
            $(`#deletemodal-${id}`).modal('hide');
            toastMsg.value = 'Your data successfully Deleted!.';
            bgcolor.value = '#dc3545';
            changeColor.value = 'white';
            showAndHideToast();
            fetchData();
        })
        .catch((error) => {
            console.log(error);
        });
}

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



onMounted(async () => {

    console.log('Component mounted');
    await fetchData();
});
</script>
  
<style scoped>
.couraselImg {
    margin-inline: auto;
    width: 55%;
}

.res {
    display: flex;
    justify-content: space-between;
}

.boxes {
    width: 48%;
}

@media screen and (max-width: 992px) {
    .boxes {
        width: 100%;
    }
}

@media screen and (max-width: 767px) {
    .couraselImg {
        margin-inline: auto;
        width: 100%;
    }

    .res {
        display: block;
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

.card-td {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}</style>
