/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data.LIM.students);

window.addEventListener('load', function (event) {
  var students = document.getElementById('students');
  students.addEventListener('click', function (event) {
    var sectionEstudents = document.getElementById('section-students');
    var formSearch = document.getElementById('search');
    /* Creando el contenedor-data de students.*/
    var containerData = document.createElement('div');
    /* Creando elementos para la foto del estudiante.*/
    var photoProfile = document.createElement('div');
    var img = document.createElement('img');
    /* Creando elementos para la nombre y status del estudiante.*/
    var infoProfile = document.createElement('div');
    var name = document.createElement('div');
    // var textName = document.createElement('p');
    var status = document.createElement('div');
    // var texStatus = document.createElement('p');
    /* Creando elementos para skills del estudiante.*/
    var skillsProfile = document.createElement('div');
    var skillTech = document.createElement('div');
    // var percentT = document.createElement('p');
    // var textSkillt = document.createElement('p');
    var skillHse = document.createElement('div');
    // var percentH = document.createElement('p');
    // var textSkillh = document.createElement('p');
    var divButton = document.createElement('div');
    var buttonRemove = document.createElement('button');

    sectionEstudents.appendChild(containerData);
    sectionEstudents.insertBefore(formSearch, containerData);
    containerData.appendChild(photoProfile);
    containerData.appendChild(infoProfile);
    infoProfile.appendChild(name);
    infoProfile.appendChild(status);
    infoProfile.insertBefore(name, status);
    containerData.appendChild(skillsProfile);
    skillsProfile.appendChild(skillTech);
    skillsProfile.appendChild(skillHse);
    skillsProfile.appendChild(divButton);
    skillsProfile.insertBefore(skillTech, skillHse);
    skillsProfile.insertBefore(skillHse, divButton);
    divButton.appendChild(buttonRemove);
    buttonRemove.textContent = 'Remove';
    buttonRemove.setAttribute('type', 'submit');
    containerData.classList.add('container-data');
    photoProfile.classList.add('photo-profile');
    infoProfile.classList.add('info-profile');
    name.classList.add('name-profile');
    status.classList.add('status-profile');
    skillsProfile.classList.add('skills-profile');
    skillTech.classList.add('skill');
    skillHse.classList.add('skill');
    divButton.classList.add('button');
    buttonRemove.classList.add('remove');
  });
});

