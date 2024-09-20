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
    var resumeHTML = "\n    <h2><b>resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(Email, "</p>\n    <p><b>Phone:</b>").concat(Phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n    \n    <h3>Skills/h3>\n    <p>").concat(Skills, "</p>\n    ");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
