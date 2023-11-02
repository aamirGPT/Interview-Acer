let btnUpload = document.getElementById("btn-upload");
let btnUploadProceed = document.getElementById("btn-upload-proceed");
let btnUploadCancel = document.getElementById("btn-upload-cancel");
let btnList = document.getElementById("content-buttons");

let uploadForm = document.getElementById("upload-details-form");
let technicalRadio = document.getElementById("Technical");
let nonTechnicalRadio = document.getElementById("Non-Technical");
let technicalChoice = document.getElementById("technicalChoice");

// Function to show a Element
let showElement = (element) => {
    element.style.display = "flex";
};

// Function to hide a Element
let hideElement = (element) => {
    element.style.display = "none";
};

// Event listeners
btnUpload.addEventListener("click", () => {
    hideElement(btnList);
    showElement(uploadForm);
});

//Form Data Object
let formData = new FormData();

//Setting Default Value to Form Data Object
formData.set("Interview Type", "Non-Technical");

btnUploadProceed.addEventListener("click", () => {
    let resumeFile = document.getElementById("optionResume").files[0];
    let jobDescription = document.getElementById("floatingTextarea2").value;
    let inputTechnicalChoice = document.getElementById("inputTechnicalChoice").value;


    formData.append("Resume", resumeFile);
    formData.append("Job Description", jobDescription);
    formData.append("Technical Choice", inputTechnicalChoice);

    // Use the formData object as needed (e.g., send it to a server, process it further, etc.)
    let formDataObject = {};

    for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }

    console.log(formDataObject);
    // ... (additional code for handling the form data)

    alert("Form submitted successfully!");
});
btnUploadCancel.addEventListener("click", () => {
    uploadForm.reset();
    showElement(btnList);
    hideElement(uploadForm);
});

// Event listener for Technical radio button
technicalRadio.addEventListener("change", () => {
    formData.set("Interview Type", "Technical");
    technicalChoice.style.display = "flex";
});

// Event listener for Non-Technical radio button
nonTechnicalRadio.addEventListener("change", () => {
    formData.set("Interview Type", "Non-Technical");
    technicalChoice.style.display = "none";
});

// Event listener for the resume input field
// let optionResume = document.getElementById("optionResume");
// optionResume.addEventListener("input", () => {
//     let fileErr = document.getElementById("fileErr");
//     fileErr.textContent = "";
// });

// Event listener for the job description textarea
// let floatingTextarea2 = document.getElementById("floatingTextarea2");
// floatingTextarea2.addEventListener("input", () => {
//     let jobDescriptionErr = document.getElementById("jobDescriptionErr");
//     jobDescriptionErr.textContent = "";
// });


// Function to validate form fields
// let validateForm = () => {
//     let resumeFile = document.getElementById("optionResume");
//     let jobDescription = document.getElementById("floatingTextarea2");
//     let fileErr = document.getElementById("fileErr");
//     let jobDescriptionErr = document.getElementById("jobDescriptionErr");
//     let valid = true;

//     // Reset error messages
//     fileErr.textContent = "";
//     jobDescriptionErr.textContent = "";

//     if (resumeFile.value === "") {
//         fileErr.textContent = "Please upload a resume.*";
//         valid = false;
//     }

//     if (jobDescription.value === "") {
//         jobDescriptionErr.textContent = "Please enter a job description.*";
//         valid = false;
//     }
//     return valid;
// };
