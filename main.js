document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    //when you click on the text box to upload
    dropZoneElement.addEventListener("click", e => {
       inputElement.click();
    });

    //only get the first file from bunch of many you are trying to upload at once
    inputElement.addEventListener("change", e => {
       if (inputElement.files.length){
           updateThumbnail(dropZoneElement, inputElement.files[0]);
       }
    });

    //lets you drag over the text box
    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    //when you drop the file remove the text inside the text box
    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    //drop the file into the text box, make sure the first once is dropped
    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length){
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
        
        const [file] = document.querySelector('input[type=file]').files;
        const reader = new FileReader();

        //load the file data into console
        reader.addEventListener("load", () => {
            // this will then display a text file
            console.log(reader.result)
            // content.innerHTML
        }, false);

        if (file) {
            reader.readAsText(file);
        }
    });
});

/**
*  @param {HTMLElement} dropZoneElement
*  @param {File} file
 */



function updateThumbnail(dropZoneElement, file){
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    console.log(file)


    //remove prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")){
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    //no thumbnail element at start
    if (!thumbnailElement){
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    //shows up the file name when uploaded
    thumbnailElement.dataset.label = file.name;
}

function previewFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();

    //load the file data into console
    reader.addEventListener("load", () => {
        // this will then display a text file
        console.log(reader.result)
        // content.innerHTML
    }, false);

    if (file) {
        reader.readAsText(file);
    }

    // reader.addEventListener('progress', (event) => {
    //     if (event.loaded && event.total){
    //         const percent = (event.loaded / event.total) * 100;
    //         content.innerHTML = `Progress: ${Math.round(percent)}`
    //         console.log(`Progress: ${Math.round(percent)}`);
    //     }
    // });
}



