/*
  Adds a button to the GitHub homepage/dashboard UI that takes you to your profile page
*/

function gitPP() {
  // Check login status
  const userLoginMeta = document.head.querySelector(
    'meta[name~="user-login"][content]'
  );

  if (!userLoginMeta) {
    return;
  }

  // Get username
  const username = userLoginMeta.content;

  // Build button
  const button = document.createElement("a");
  button.classList.add("btn");
  button.text = "Profile";
  button.href = `/${username}`;

  // Append button to UI
  const parent = document.querySelector(".border-bottom.py-3.mt-3.mb-4");
  parent.style.display = "flex";
  parent.style.alignItems = "center";
  parent.style.justifyContent = "space-between";

  parent.appendChild(button);
}

gitPP();
