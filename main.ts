const form = document.getElementById("resume-form") as HTMLFormElement
const resumedisplayelement = document.getElementById("resume-display") as HTMLDivElement


form.addEventListener(`submit`, (event: Event) => {
    event.preventDefault();

    const Name = (document.getElementById('name') as HTMLInputElement). value
    const Email = (document.getElementById('email') as HTMLInputElement). value
    const Phone = (document.getElementById('phone') as HTMLInputElement). value
    const Education = (document.getElementById('education') as HTMLInputElement). value
    const Experience = (document.getElementById('experience') as HTMLInputElement). value
    const Skills = (document.getElementById('skills') as HTMLInputElement). value

    const resumeHTML = `
    <h2><b>editable Resume</b></h2>
    <h3>Personal information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${Email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${Phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>
    
    <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>
    
    <h3>Skills/h3>
    <p contenteditable="true">${Skills}</p>
    `
    if(resumedisplayelement){
        resumedisplayelement.innerHTML = resumeHTML
    }else {
        console.error(`The resume display element is missing`)
    }
    

})