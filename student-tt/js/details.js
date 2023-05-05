$(document).ready(async function () {
  const url = "https://student-tt.herokuapp.com/sd";
  let result = await fetch(url);
  let details = await result.json();

  function loadDetails() {
    $("#student-number").html(details[0].studentNumber);
    $("#lName").html(details[0].lName);
    $("#fName").html(details[0].fName);
    $("#mi").html(details[0].MI);
    $("#gender").html(details[0].gender);
    $("#civil-status").html(details[0].civilStatus);
    $("#pedigree").html(details[0].pedigree);
    $("#coc").html(details[0].COC);
    $("#stud-type").html(details[0].studType);
    $("#reg-status").html(details[0].regStatus);
    $("#deg-prog").html(details[0].degProg);
    $("#year").html(details[0].year);
    $("#plm-email").html(details[0].plmEmail);
    $("#personal-email").html(details[0].personalEmail);
    $("#num").html(details[0].num);

    $(".i-sn").val(details[0].studentNumber);
    $(".i-ln").val(details[0].lName);
    $(".i-fn").val(details[0].fName);
    $(".i-mi").val(details[0].MI);
    $(".i-g").val(details[0].gender);
    $(".i-cs").val(details[0].civilStatus);
    $(".i-p").val(details[0].pedigree);
    $(".i-c").val(details[0].COC);
    $(".i-st").val(details[0].studType);
    $(".i-rs").val(details[0].regStatus);
    $(".i-dp").val(details[0].degProg);
    $(".i-yr").val(details[0].year);
    $(".i-ple").val(details[0].plmEmail);
    $(".i-pee").val(details[0].personalEmail);
    $(".i-num").val(details[0].num);
  }

  $(".edit-btn").click(function () {
    $(".last-btn").addClass("display");
    $(".last-btn").removeClass("hide");
    $("input").addClass("display");
    $("input").removeClass("hide");
    $("h3").addClass("hide");
    $("h3").removeClass("display");
  });

  $(".btn-save").click(function () {
    $(".last-btn").addClass("hide");
    $(".last-btn").removeClass("display");
    $("input").addClass("hide");
    $("input").removeClass("display");
    $("h3").addClass("display");
    $("h3").removeClass("hide");
    let sn = $(".i-sn").val();
    let ln = $(".i-ln").val();
    let fn = $(".i-fn").val();
    let mi = $(".i-mi").val();
    let g = $(".i-g").val();
    let cs = $(".i-cs").val();
    let p = $(".i-p").val();
    let c = $(".i-c").val();
    let st = $(".i-st").val();
    let rs = $(".i-rs").val();
    let dp = $(".i-dp").val();
    let yr = $(".i-yr").val();
    let ple = $(".i-ple").val();
    let pee = $(".i-pee").val();
    let num = $(".i-num").val();
    details[0].studentNumber = sn;
    details[0].lName = ln;
    details[0].fName = fn;
    details[0].MI = mi;
    details[0].gender = g;
    details[0].civilStatus = cs;
    details[0].pedigree = p;
    details[0].COC = c;
    details[0].studType = st;
    details[0].regStatus = rs;
    details[0].degProg = dp;
    details[0].year = yr;
    details[0].plmEmail = ple;
    details[0].personalEmail = pee;
    details[0].num = num;
    let id = details[0]._id;
    loadDetails();

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentNumber: sn,
        lName: ln,
        fName: fn,
        MI: mi,
        gender: g,
        civilStatus: cs,
        pedigree: p,
        COC: c,
        studType: st,
        regStatus: rs,
        degProg: dp,
        year: yr,
        plmEmail: ple,
        personalEmail: pee,
        num: num,
      }),
    });
  });

  $(".btn-discard").click(function () {
    $(".last-btn").addClass("hide");
    $(".last-btn").removeClass("display");
    $("input").addClass("hide");
    $("input").removeClass("display");
    $("h3").addClass("display");
    $("h3").removeClass("hide");
  });

  loadDetails();
});
