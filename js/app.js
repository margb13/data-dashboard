/* Funcionalidad de tu producto*/
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Saca sede y generacion para el select
var selector = document.getElementById('select');
for (var sede in data) {
  for (var generation in data[sede]) {
    // Crea option al select con sus respectivos atributos
    var elOption = document.createElement('option');
    elOption.setAttribute('sede', sede);
    elOption.setAttribute('value', generation);
    elOption.setAttribute('id', 'op-' + generation);
    elOption.textContent = sede + '-' + generation;
    selector.appendChild(elOption);
  }
}

window.addEventListener('load', function (event) {
  var select = document.getElementById('select');
  // Jalar la data al momento de seleccionar option de select
  select.addEventListener('change', function (event) {
    var generationX = event.target.value;
    var opSede = document.getElementById('op-' + generationX);
    var sedeX = opSede.getAttribute('sede');
    var contentData = data[sedeX][generationX];

    // Llenando datos del ACHIEVEMENT
    /* op3 - N° de students que superan la meta de puntos en promedio de los sprints(70%) del total de puntos en HSE y en tech.*/
    /* op4 - El porcentaje que representa el dato anterior en relación al total de estudiantes.*/

    /* var ach1 = document.getElementById('ach1');
    var ach2 = document.getElementById('ach2');

    console.log(' Estudiantes: ');
    var totalTotal = 0;
    console.log(contentData['students']);
    for (var indiceStudent in contentData['students']) {
      var student = contentData['students'][indiceStudent];
      console.log(' Estudiante: ' + student['name']);
      console.log(student);
      var totalByStudent = 0;
      for (var indiceSprint in student['sprints']) {
        var sprint = student['sprints'][indiceSprint];
        console.log(' Sprint number: ' + sprint['number']);
        console.log(sprint);
        totalByStudent += sprint['score']['tech'];
      }
      console.log('Total del alumno: ' + student['name'] + '=' + totalByStudent);
      totalTotal += totalByStudent;
    }
    ach1.innerHTML = totalTotal; */

    /*
    var divAch1 = document.getElementById('ach1');
    var divAch2 = document.getElementById('ach2');
    var byStudentCumple = contentData['ratings'][event.target.value]['student']['cumple'];
    var byStudentNoCumple = contentData['ratings'][event.target.value]['student']['no-cumple'];
    var byStudentSupera = contentData['ratings'][event.target.value]['student']['supera'];
    var totalByStudents = byStudentCumple + byStudentCumple;
    var PercentByStudents = parseFloat((byStudentCumple + byStudentSupera * 100 / totalByStudents).toFixed(0) + ' %');
    divAch1.innerHTML = totalByStudents;
    divAch2.innerHTML = PercentByStudents;*/

    var divSatisfaction = document.getElementById('satis1');
    var total = 0;
    var totalSatisfaccion = 0;
    for (var i in contentData['ratings']) {
      var byTotalCumple = 0;
      var byTotalSupera = 0;
      var ratingS = contentData['ratings'][i];
      var nSprint = contentData['ratings'].length;
      console.log(nSprint);
      var byCumple = ratingS['student']['cumple'];
      var bySupera = ratingS['student']['supera'];
      console.log(byCumple);
      console.log(bySupera);
      total += byCumple + bySupera;
      console.log(total);
      totalPercentSatisfaction = (total / nSprint).toFixed(0) + ' %';
    }
    console.log(totalPercentSatisfaction);
    divSatisfaction.innerHTML = totalPercentSatisfaction;


    /* op6 - La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.*/
    /* op7 - La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos HSE en promedio y por sprint.*/
  });

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
});

/* AREQUIPA
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
console.log(data.LIM.students);*/

