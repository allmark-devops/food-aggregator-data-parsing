var Selectorn = "Zomato"

function setJsonFormat(value){
    document.getElementsByClassName("displayElHeader")[0].innerHTML = value + " Details"
    // document.getElementsByClassName("displayElHeader")[0].style.fontWeight = "900";
    
  var slides = document.getElementsByClassName("text");
for(var i = 0; i < slides.length; i++)
{
  slides[i].innerHTML = ""
}

// for(var i = 0; i < 21; i++)
// {
//     getElementsByClassName("text")[i].innerHTML = ""
// }

    Selectorn = value
    
    // document.getElementById("jsonFile").value=""
    
}

function closeWindow(value){
    console.log("working");
    // document.getElementById("second").hidden = value
    // document.getElementById("show").hidden = !value
   
    if (value == true){
      
        document.getElementsByClassName("secondCol")[0].style.display="none";
        
    }
    else{
       
        document.getElementsByClassName("secondCol")[0].style.display="block";
     
      
    }
}


document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone"); dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    }); inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    }); dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    }); dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault(); if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        } dropZoneElement.classList.remove("drop-zone--over");
    });
});
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");// First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }// First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    } thumbnailElement.dataset.label = file.name;// Show thumbnail for image files

    const reader = new FileReader(); reader.readAsText(file);
    reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        document.getElementById('output').textContent = reader.result;

    }
}




function changeFontSize() {
    var size = document.getElementById("size").value
    var textArea = document.getElementById("output").style.fontSize = size + "px";
}
function defaultSize() {

    var textArea = document.getElementById("output").style.fontSize = "15px";
}

function FilterData() {
    var stringData = document.getElementById("output").value;
    var jsondata = JSON.parse(stringData)


    if (Selectorn == "Zomato"){
        document.getElementById("text1").innerHTML = jsondata.page_info.resId
        document.getElementById("text2").innerHTML = jsondata.page_info.pageTitle
        document.getElementById("text3").innerHTML = jsondata.page_info.pageUrl
        document.getElementById("text4").innerHTML = jsondata.page_data.sections.SECTION_USER_ACTIONS.share.url
        document.getElementById("text5").innerHTML = jsondata.page_data.sections.SECTION_BASIC_INFO.res_id
        document.getElementById("text6").innerHTML = jsondata.page_data.sections.SECTION_BASIC_INFO.name
        document.getElementById("text7").innerHTML = jsondata.page_data.sections.SECTION_BASIC_INFO.rating.aggregate_rating
        document.getElementById("text8").innerHTML = jsondata.page_data.sections.SECTION_BASIC_INFO.res_status_text
        document.getElementById("text9").innerHTML = jsondata.page_data.sections.SECTION_BASIC_INFO.timing.timing_desc
        document.getElementById("text10").innerHTML = jsondata.page_data.order.menuList.fssaiInfo.text
        document.getElementById("text11").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.address
        document.getElementById("text12").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.locality_verbose
        document.getElementById("text13").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.city_name
        document.getElementById("text14").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.country_name
        document.getElementById("text15").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.zipcode
        document.getElementById("text16").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.latitude
        document.getElementById("text17").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.longitude
        document.getElementById("text18").innerHTML = jsondata.page_data.sections.SECTION_RES_CONTACT.phoneDetails.phoneStr
        document.getElementById("text19").innerHTML = jsondata.page_data.metaData.currencyDetails.currency
        document.getElementById("text20").innerHTML = jsondata.page_data.metaData.currencyDetails.currencyISOCode

    }
    else if(Selectorn == "Swiggy"){
        document.getElementById("text1").innerHTML = jsondata.data.id
        document.getElementById("text2").innerHTML = jsondata.data.name
        document.getElementById("text3").innerHTML = ""
        document.getElementById("text4").innerHTML = ""
        document.getElementById("text5").innerHTML = jsondata.data.id
        document.getElementById("text6").innerHTML = jsondata.data.name
        document.getElementById("text7").innerHTML = jsondata.data.avgRatingString
        document.getElementById("text8").innerHTML = ""
        document.getElementById("text9").innerHTML = ""
        document.getElementById("text10").innerHTML = jsondata.data.restaurantLicenses[0].text
        document.getElementById("text11").innerHTML = jsondata.data.locality
        document.getElementById("text12").innerHTML = jsondata.data.area
        document.getElementById("text13").innerHTML = jsondata.data.city
        document.getElementById("text14").innerHTML = ""
        document.getElementById("text15").innerHTML = ""
        document.getElementById("text16").innerHTML = jsondata.data.latLong
        document.getElementById("text17").innerHTML = jsondata.data.latLong
        document.getElementById("text18").innerHTML = ""
        document.getElementById("text19").innerHTML = ""
        document.getElementById("text20").innerHTML = ""
  
    }
}



var mq = window.matchMedia( "(max-width: 500px)" );
if (mq.matches) {
    var slides = document.getElementsByClassName("text");
    for(var i = 0; i < slides.length; i++)
    {
      slides[i].hidden = true
    }


}
else {
    var slides = document.getElementsByClassName("text");
    for(var i = 0; i < slides.length; i++)
    {
      slides[i].hidden = false
    }
}