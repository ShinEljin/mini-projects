$(document).ready(async function () {
  const url = "https://student-tt.herokuapp.com/cs";
  let result = await fetch(url);
  let classSchedule = await result.json();
  let d = new Date().getDay();
  let day;

  if (d == 0) {
    day = "Sunday";
  } else if (d == 1) {
    day = "Monday";
  } else if (d == 2) {
    day = "Tuesday";
  } else if (d == 3) {
    day = "Wednesday";
  } else if (d == 4) {
    day = "Thursday";
  } else if (d == 5) {
    day = "Friday";
  } else if (d == 6) {
    day = "Saturday";
  }

  console.log(day);
  $(".today").append(day);

  function displayData() {
    let j = 0;
    for (var i = 0; i < classSchedule.length; i++) {
      if (classSchedule[i].day === day) {
        $(".p-code" + [j]).html(classSchedule[i].code);
        $(".p-subject" + [j]).html(classSchedule[i].subject);
        $(".p-time" + [j]).html(classSchedule[i].time);
        j++;
      }
    }
    if (j === 0) {
      $(".p-subject" + [j]).append(" NO CLASSES TODAY");
    }
  }

  displayData();
});
