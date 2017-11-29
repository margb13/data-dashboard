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

window.addEventListener('load', function() {  
  arrow.addEventListener('click', function showSedes(event) {
    var arrow = document.getElementById('arrow');  
    var sedes = document.getElementById('sedes-container');
    sedes.classList.toggle('hidden');
    sedes.style.marginTop = '170px';
    sedes.style.marginLeft = '170px';
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + 'px';
  });

  teachers.addEventListener('click', function showData(event) {
    // Creando el contenedor del promedio de los Teachers.
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
    var average2016Aqp = function(data) {
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
    for (var semestre1 in data [sede]) {
      if (semestre1 == generacion1) {
        console.log(data[sede][semestre1].students);
        	}
    	}
  }
}
for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre2 in data [sede]) {
      if (semestre2 == generacion2) {
        console.log(data[sede][semestre2].students);
      }
    }
  }
}

for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data [sede]) {
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
      for (var semestre1 in data [sede]) {
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
