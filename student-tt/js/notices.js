$(document).ready(async function () {
  const url = "https://student-tt.herokuapp.com/ntc";
  let output = "";
  let numberOfNotices = 0;
  let i = 1;

  const renderNotices = (notices) => {
    notices.forEach((notice) => {
      output += `
      <div class="notif">
      <div class="notif-header">
        <h3><i class="fas fa-bell fa-lg"></i>Notice #${i}</h3>
      </div>
      <div class="notif-content">
        <h4>${notice.title}</h4>
        <p>${notice.content}</p>
      </div>
    </div>
      `;
      i++;
    });
    $(".notif-container").html(output);
  };

  let result = await fetch(url);
  let notices = await result.json();
  renderNotices(notices);
});
