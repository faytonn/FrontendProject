function redirectToLogin() {
    console.log("redirectToLogin function called");
    window.location.href = "login.html";  
}
function redirectToRegister() {
  window.location.href = "register.html";  
}


    

    const getData = async () => {
        const response = await fetch("https://api.tvmaze.com/shows");
      
        const json = await response.json();

      
        return json;
      };
      
      const renderList = (data, page) => {
        for (let i = (page-1)*20; i < page * 20; i++) {
          const element = data[i];
          const list = document.querySelector(".list");
      
          list.innerHTML += `
       
        <li>
        <a href="detail.html?id=${element.id}">
        <img class="img" src="${element.image.original}" />
        ${element.name}
        </a>
        </li>
        `;
        }
      };
      
      const data = await getData();
      
      renderList(data, 1);

      $('.list').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow : '<span class="prev"><i style="font-size:20px;" class="fa-solid fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i style="font-size:20px;" class="fa-solid fa-chevron-right"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

