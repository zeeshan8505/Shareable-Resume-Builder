var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>editable Resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(Phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n    \n    <h3>Skills/h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n    ");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
