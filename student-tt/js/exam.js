$(document).ready(async function () {
  const url = "https://student-tt.herokuapp.com/es";
  let buttonFlag = false;
  let editButtonCount;
  let deleteButtonCount;
  let result = await fetch(url);
  let classSchedule = await result.json();

  function displayData() {
    for (var i = 0; i < classSchedule.length; i++) {
      $(".p-date" + [i]).html(classSchedule[i].date);
      $(".p-code" + [i]).html(classSchedule[i].code);
      $(".p-subject" + [i]).html(classSchedule[i].subject);
      $(".p-time" + [i]).html(classSchedule[i].time);
      $(".i-date" + [i]).val(classSchedule[i].date);
      $(".i-code" + [i]).val(classSchedule[i].code);
      $(".i-subject" + [i]).val(classSchedule[i].subject);
      $(".i-time" + [i]).val(classSchedule[i].time);
    }
  }

  function editSave() {
    if (buttonFlag === false) {
      //edit
      buttonFlag = true;
      $(".edit" + [editButtonCount]).html("Save");
      $(".input" + [editButtonCount]).addClass("display");
      $(".input" + [editButtonCount]).removeClass("hide");
      $(".p" + [editButtonCount]).addClass("hide");
    } else if (buttonFlag === true) {
      //save
      buttonFlag = false;
      $(".edit" + [editButtonCount]).html("Edit");
      $(".input" + [editButtonCount]).removeClass("display");
      $(".input" + [editButtonCount]).addClass("hide");
      $(".p" + [editButtonCount]).removeClass("hide");
      $(".p" + [editButtonCount]).addClass("display");
      let date = $(".i-date" + [editButtonCount]).val();
      let code = $(".i-code" + [editButtonCount]).val();
      let subject = $(".i-subject" + [editButtonCount]).val();
      let time = $(".i-time" + [editButtonCount]).val();
      classSchedule[editButtonCount].date = date;
      classSchedule[editButtonCount].code = code;
      classSchedule[editButtonCount].subject = subject;
      classSchedule[editButtonCount].time = time;
      let id = classSchedule[editButtonCount]._id;

      fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          code: code,
          subject: subject,
          time: time,
        }),
      });

      displayData();
    }
  }

  function emptyData() {
    classSchedule[deleteButtonCount].date = "";
    classSchedule[deleteButtonCount].code = "";
    classSchedule[deleteButtonCount].subject = "";
    classSchedule[deleteButtonCount].time = "";
    let id = classSchedule[deleteButtonCount]._id;

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: "",
        code: "",
        subject: "",
        time: "",
      }),
    });
    displayData();
  }

  for (let i = 0; i < classSchedule.length; i++) {
    $(".edit" + [i]).click(function () {
      editButtonCount = i;
      editSave();
    });
  }

  for (let i = 0; i < classSchedule.length; i++) {
    $(".delete" + [i]).click(function () {
      deleteButtonCount = i;
      emptyData();
    });
  }

  displayData();
});
