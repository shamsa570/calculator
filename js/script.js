document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  let currentPage = 0; 
  const itemsPerPage = 10; 

 
  const updateGallery = () => {
    galleryItems.forEach((item, index) => {
   
      if (
        index >= currentPage * itemsPerPage &&
        index < (currentPage + 1) * itemsPerPage
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };


  document.getElementById("next").addEventListener("click", () => {
    if ((currentPage + 1) * itemsPerPage < galleryItems.length) {
      currentPage++;
      updateGallery();
    }
  });

 
  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateGallery();
    }
  });

  updateGallery();
});
