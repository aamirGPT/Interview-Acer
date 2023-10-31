let btnUpload = document.getElementById("btn-upload");
let btnUploadSubmit = document.getElementById("btn-upload-submit");
let btnUploadCancel = document.getElementById("btn-upload-cancel");
let btnList = document.getElementById("content-buttons");
// let btnBegin = document.getElementById("btn-begin");
// let btnEnd = document.getElementById("btn-end");
// let btnNext = document.getElementById("btn-next");

// let btnBackPForm2 = document.getElementById("btn-back-pform2");
// let btnNextPForm2 = document.getElementById("btn-next-pform2");
// let btnBackPForm3 = document.getElementById("btn-back-pform3");
// let btnNextPForm3 = document.getElementById("btn-next-pform3");
// let btnBackPForm4 = document.getElementById("btn-back-pform4");
// let btnNextPForm4 = document.getElementById("btn-next-pform4");

let uploadForm = document.getElementById("upload-details-form");
// let popupForm1 = document.getElementById("popup-form1");
// let popupForm2 = document.getElementById("popup-form2");
// let popupForm3 = document.getElementById("popup-form3");
// let popupForm4 = document.getElementById("popup-form4");

// // Function to validate the form before moving to the next form
// let validateForm = (form) => {
//     let requiredInputs = form.querySelectorAll("input[required]");
//     let requiredTextareas = form.querySelectorAll("textarea[required]");
//     let requiredRadios = form.querySelectorAll(".btn-check[required]");
//     let errorMessages = form.querySelectorAll(".error-message");
//     let isValid = true;

//     requiredInputs.forEach((input, index) => {
//         if (!input.value) {
//             isValid = false;
//             input.style.border = "1px solid red";
//             let errorMessage = errorMessages[index];
//             if (errorMessage) {
//                 errorMessage.innerText = "This field is required.";
//                 errorMessage.style.color = "red";
//             }
//         } else {
//             input.style.border = "1px solid green";
//             let errorMessage = errorMessages[index];
//             if (errorMessage) {
//                 errorMessage.innerText = "";
//             }
//         }
//     });

//     requiredTextareas.forEach((textarea, index) => {
//         if (!textarea.value.trim()) {
//             isValid = false;
//             textarea.style.border = "1px solid red";
//             let errorMessage = errorMessages[index + requiredInputs.length];
//             if (errorMessage) {
//                 errorMessage.innerText = "This field is required.";
//                 errorMessage.style.color = "red";
//             }
//         } else {
//             textarea.style.border = "1px solid green";
//             let errorMessage = errorMessages[index + requiredInputs.length];
//             if (errorMessage) {
//                 errorMessage.innerText = "";
//             }
//         }
//     });

//     requiredRadios.forEach((radio, index) => {
//         let radioGroup = form.querySelectorAll(
//             `[name="${radio.name}"]:checked`
//         );
//         if (radioGroup.length === 0) {
//             isValid = false;
//             let errorMessage = form.querySelector("#error-message-radio");
//             if (errorMessage) {
//                 errorMessage.innerText = "Please select an option.";
//                 errorMessage.style.color = "red";
//             }
//         } else {
//             let errorMessage = form.querySelector("#error-message-radio");
//             if (errorMessage) {
//                 errorMessage.innerText = "";
//             }
//         }
//         radio.addEventListener("change", () => {
//             let errorMessage = form.querySelector("#error-message-radio");
//             if (errorMessage) {
//                 errorMessage.innerText = "";
//             }
//         });
//     });

//     return isValid;
// };

// // Add an event listener for keydown event
// document.querySelectorAll("textarea[required]").forEach((textarea, index) => {
//     textarea.addEventListener("input", () => {
//         let errorMessages = document.querySelectorAll(".error-message");
//         textarea.style.border = ""; // Remove border on input
//         errorMessages.forEach((errorMessage) => {
//             errorMessage.innerText = ""; // Clear error messages
//         });
//     });
// });
// // Add an event listener for file input change event
// document
//     .querySelectorAll("input[type=file][required]")
//     .forEach((input, index) => {
//         input.addEventListener("change", () => {
//             let errorMessages =
//                 input.parentElement.querySelectorAll(".error-message");
//             input.style.border = ""; // Remove border on change
//             errorMessages[index].innerText = ""; // Clear error message
//         });
//     });

// Function to show a Element
let showElement = (element) => {
    element.style.display = "flex";
};

// Function to hide a Element
let hideElement = (element) => {
    element.style.display = "none";
};

// // Event listeners
// btnBegin.addEventListener("click", () => {
//     hideForm(btnBegin);
//     showForm(popupForm1);
// });

// btnEnd.addEventListener("click", () => {
//     hideForm(popupForm1);
//     showForm(btnBegin);
// });

// btnNext.addEventListener("click", () => {
//     if (validateForm(popupForm1)) {
//         hideForm(popupForm1);
//         showForm(popupForm2);
//     }
// });

// btnBackPForm2.addEventListener("click", () => {
//     hideForm(popupForm2);
//     showForm(popupForm1);
// });

// btnNextPForm2.addEventListener("click", () => {
//     if (validateForm(popupForm2)) {
//         hideForm(popupForm2);
//         showForm(popupForm3);
//     }
// });

// btnBackPForm3.addEventListener("click", () => {
//     hideForm(popupForm3);
//     showForm(popupForm2);
// });

// btnNextPForm3.addEventListener("click", () => {
//     if (validateForm(popupForm3)) {
//         hideForm(popupForm3);
//         showForm(popupForm4);
//     }
// });

// btnBackPForm4.addEventListener("click", () => {
//     hideForm(popupForm4);
//     showForm(popupForm3);
// });
// btnNextPForm4.addEventListener("click", () => {
//     hideForm(popupForm4);
//     showForm(btnBegin);
// });

btnUpload.addEventListener("click", () => {
    hideElement(btnList);
    showElement(uploadForm);
});

btnUploadSubmit.addEventListener("click", () => { 
    // showElement(btnList);
    // hideElement(uploadForm);
    alert("Still Working on It");
});
btnUploadCancel.addEventListener("click", () => { 
    showElement(btnList);
    hideElement(uploadForm);
});