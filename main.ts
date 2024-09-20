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
    <h2><b>resume</b></h2>
    <h3>Personal information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${Email}</p>
    <p><b>Phone:</b>${Phone}</p>
    
    <h3>Education</h3>
    <p>${Education}</p>
    
    <h3>Experience</h3>
    <p>${Experience}</p>
    
    <h3>Skills/h3>
    <p>${Skills}</p>
    `
    if(resumedisplayelement){
        resumedisplayelement.innerHTML = resumeHTML
    }else {
        console.error(`The resume display element is missing`)
    }
    

})