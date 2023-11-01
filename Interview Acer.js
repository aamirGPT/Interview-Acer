let btnUpload = document.getElementById("btn-upload");
let btnUploadProceed = document.getElementById("btn-upload-proceed");
let btnUploadCancel = document.getElementById("btn-upload-cancel");
let btnList = document.getElementById("content-buttons");

let uploadForm = document.getElementById("upload-details-form");
let interviewOptionsForm = document.getElementById("interviewOptions");

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

btnUploadProceed.addEventListener("click", () => {
    if (validateForm()) {
        let resumeFile = document.getElementById("optionResume").value;
        let jobDescription = document.getElementById("floatingTextarea2").value;

        let formData = {
            resume: resumeFile,
            jobDescription: jobDescription,
        };
        hideElement(uploadForm);
        showElement(interviewOptionsForm);
        // Use the formData object as needed (e.g., send it to a server, process it further, etc.)
        console.log(formData);
        // ... (additional code for handling the form data)

        alert("Form submitted successfully!");
    }
});
btnUploadCancel.addEventListener("click", () => {
    uploadForm.reset();
    showElement(btnList);
    hideElement(uploadForm);
});

// Event listener for the resume input field
let optionResume = document.getElementById("optionResume");
optionResume.addEventListener("input", () => {
    let fileErr = document.getElementById("fileErr");
    fileErr.textContent = "";
});

// Event listener for the job description textarea
let floatingTextarea2 = document.getElementById("floatingTextarea2");
floatingTextarea2.addEventListener("input", () => {
    let jobDescriptionErr = document.getElementById("jobDescriptionErr");
    jobDescriptionErr.textContent = "";
});

// Function to validate form fields
let validateForm = () => {
    let resumeFile = document.getElementById("optionResume");
    let jobDescription = document.getElementById("floatingTextarea2");
    let fileErr = document.getElementById("fileErr");
    let jobDescriptionErr = document.getElementById("jobDescriptionErr");
    let valid = true;

    // Reset error messages
    fileErr.textContent = "";
    jobDescriptionErr.textContent = "";

    if (resumeFile.value === "") {
        fileErr.textContent = "Please upload a resume.*";
        valid = false;
    }

    if (jobDescription.value === "") {
        jobDescriptionErr.textContent = "Please enter a job description.*";
        valid = false;
    }
    return valid;
};
