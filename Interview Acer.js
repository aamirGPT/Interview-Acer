let btnUpload = document.getElementById("btn-upload");
let btnUploadProceed = document.getElementById("btn-upload-proceed");
let btnUploadCancel = document.getElementById("btn-upload-cancel");
let btnList = document.getElementById("content-buttons");
let btnQuickStart = document.getElementById("btn-quickStart");
let btnQuickStartInterview = document.getElementById(
    "btn-QuickStart-Interview"
);
let btnQuickStartInterviewCancel = document.getElementById(
    "btn-QuickStart-Cancel"
);

let uploadForm = document.getElementById("upload-details-form");
let QuickStartForm = document.getElementById("quickStart-form");

let technicalRadio = document.getElementById("Technical");
let nonTechnicalRadio = document.getElementById("Non-Technical");
let technicalChoice = document.getElementById("technicalChoice");
let technicalChoiceQS = document.getElementById("technicalChoice-QuickStart");

let QuickStartTechnicalRadio = document.getElementById("quickStartTechnical");
let QuickStartNonTechnicalRadio = document.getElementById(
    "quickStartNon-Technical"
);

//Form Data Object
let formData = new FormData();

// Function to show a Element
let showElement = (element) => {
    element.style.display = "flex";
};

// Function to hide a Element
let hideElement = (element) => {
    element.style.display = "none";
};

//function to reset the form
let resetForm = (form) => {
    form.reset();
    showElement(btnList);
    hideElement(form);
    nonTechnicalRadio.checked = true;
    technicalChoice.style.display = "none";
    technicalChoiceQS.style.display = "none";
};

// Event listeners
btnUpload.addEventListener("click", () => {
    hideElement(btnList);
    showElement(uploadForm);
});

btnQuickStart.addEventListener("click", () => {
    hideElement(btnList);
    showElement(QuickStartForm);
});
//Setting Default Value to Form Data Object
formData.set("Interview Type", "Non-Technical");

btnUploadProceed.addEventListener("click", () => {
    let resumeFile = document.getElementById("optionResume").files[0];
    let jobDescription = document.getElementById("floatingTextarea2").value;
    let inputTechnicalChoice = document.getElementById(
        "inputTechnicalChoice"
    ).value;

    formData.append("Resume", resumeFile);
    formData.append("Job Description", jobDescription);
    formData.append("Technical Choice", inputTechnicalChoice);

    if (formData.get("Interview Type") === "Technical") {
        formData.append("Technical Choice", inputTechnicalChoice);
    } else {
        formData.set("Technical Choice", ""); // Clear the value if "Non-Technical" is selected
    }

    // Use the formData object as needed (e.g., send it to a server, process it further, etc.)
    let formDataObject = {};

    for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }

    console.log(formDataObject);
    // ... (additional code for handling the form data)

    alert("Form submitted successfully!");
});

btnQuickStartInterview.addEventListener("click", () => {
    let inputTechnicalChoice = document.getElementById(
        "inputTechnicalChoiceQuickStart"
    ).value;

    formData.append("Technical Choice", inputTechnicalChoice);
    if (formData.get("Interview Type") === "Technical") {
        formData.append("Technical Choice", inputTechnicalChoice);
    } else {
        formData.set("Technical Choice", ""); // Clear the value if "Non-Technical" is selected
    }

    let formDataObject = {};

    for (let [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }

    console.log(formDataObject);
    alert("Form Submitted!");
});

btnQuickStartInterviewCancel.addEventListener("click", () => {
    resetForm(QuickStartForm);
});

btnUploadCancel.addEventListener("click", () => {
    resetForm(uploadForm);
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

// Event Listener for QS Technical Radio button
QuickStartTechnicalRadio.addEventListener("change", () => {
    formData.set("Interview Type", "Technical");
    technicalChoiceQS.style.display = "flex";
});

// Event Listener for QS Non-Technical Radio button
QuickStartNonTechnicalRadio.addEventListener("change", () => {
    formData.set("Interview Type", "Non-Technical");
    technicalChoiceQS.style.display = "none";
});

// Author: Mohammed Aamir Mansoori
