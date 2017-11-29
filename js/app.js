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