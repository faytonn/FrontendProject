const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getData = async () => {
  try {
    const id = urlParams.get("id");
    console.log(id);

    const response = await fetch(
      `https://api.tvmaze.com/shows/${id}`
    );

   
    if (!response.ok) {
      window.location.href = "error.html";
      return;
    }

    const json = await response.json();
    const output = document.querySelector(".output");

    output.innerHTML = `
      <img src="${json.image.original}" alt="${json.name}" />
      <p>Name: ${json.name}</p>
      <p></p>
      <p>Status: ${json.status}</p>
    `;

    console.log(json);
  } catch (e) {
    window.location.href = "error.html";
  }
};

getData();
