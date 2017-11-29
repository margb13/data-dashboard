/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/* console.log(data.AQP);
console.log(data.LIM);
console.log(data.CDMX);
console.log(data.SCL);
/* var AQP = data.AQP["2017-2"];*/
/* var arequipa = data.AQP;
var lima = data.LIM;
var mexico = data.CDMX;
var chile = data.SCL;
/* console.log(AQP); */
console.log(data);

window.addEventListener('load', function (event) {
  var students = document.getElementById('students');
  students.addEventListener('click', function (event) {
    var sectionEstudents = document.getElementById('section-students');
    var sectionData = document.getElementById('section-data');
    var section = document.getElementById('teachers-ratings');
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
    sectionData.classList.add('display-none');
    sectionEstudents.classList.remove('display-none');
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
  arrow.addEventListener('click', function showSedes(event) {
    var select = document.getElementById('select');
    // Agregar funcion para mostrar la data al select
    select.addEventListener('change', function (event) {
      if (select.value === 'original') {
      }  
    }); 
  });

  teachers.addEventListener('click', function showData(event) {
    // Creando el contenedor del promedio de los Teachers.
    var sectionEstudents = document.getElementById('section-students');
    var sectionData = document.getElementById('section-data');
    var section = document.getElementById('teachers-ratings');
    var teachersOption = document.getElementById('teachers');
    var containerData = document.createElement('div');
    var containerTeacher = document.createElement('div');
    var titleData = document.createElement('h1');
    titleData.textContent = 'Overall Teacher Rating';
    containerData.appendChild(containerTeacher);
    containerTeacher.appendChild(titleData);
    containerTeacher.setAttribute('id', 'teacher-data');
    section.appendChild(containerData);
    containerTeacher.classList.add('average-container');
    containerData.classList.add('teachers-data');
    titleData.classList.add('average-title');

    // Creando el contenedor del promedio de los Jedis-masters 
    var containerJedis = document.createElement('div');
    var titleJedi = document.createElement('h1');
    titleJedi.textContent = 'Jedi Master Rating';
    containerData.appendChild(containerJedis);
    containerJedis.appendChild(titleJedi);
    containerJedis.classList.add('average-container');
    titleJedi.classList.add('average-title');
  });

  teachers.addEventListener('click', function averageTeachers(event) {
    // Promedio general Arequipa
    // var containerAverageAqp = document.createElement('div');
    var aqp = data.AQP;
    var average2016Aqp = function (data) {
      for (var i in aqp) {
        return console.log(aqp);
      }
    }
  });

});

/* AREQUIPA*/
var sedeArequipa = 'AQP';
var generacion1 = '2016-2';
var generacion2 = '2017-1';


for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        console.log(data[sede][semestre1].students);
      }
    }
  }
}
for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre2 in data[sede]) {
      if (semestre2 == generacion2) {
        console.log(data[sede][semestre2].students);
      }
    }
  }
}

for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        let array = data[sede][semestre1].ratings;
        for (var i = 0; i < array.length; i++) {
          console.log(array[i]);
        }
      }
    }
  }
}
for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        let array = data[sede][semestre1].ratings;
        for (var i = 0; i < array.length; i++) {
          console.log('sprint ->' + array[i]['sprint']);
          console.log(array[i]['nps']);
          console.log('Jedi ->' + array[i]['jedi']);
        }
      }
    }
  }
}
console.log(data.LIM.students);

