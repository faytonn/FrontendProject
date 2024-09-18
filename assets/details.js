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

    
    <div class="image">
    <img src="${json.image.original}" alt="${json.name}" />
    </div>


    <div class="text">
    <p style="font-size:40px; font-family: Arial, Helvetica, sans-serif; font-weight:bold;">${json.name}</p>
    <br>
    <br>
    <p>Genres: ${json.genres}</p>
    <p>Status: ${json.status}</p>
    <p>Language: ${json.language}</p>
    <br>
    <br>
    <p>${json.summary}</p>
    </div> `;
   

    console.log(json);
  } catch (e) {
    window.location.href = "error.html";
  }
};

getData();
