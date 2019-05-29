
function showUploadWidget() {
    cloudinary.openUploadWidget({
        cloudName: "lucaspedroso",
        uploadPreset: "tb3la6jd",
        sources: [
            "local",
            "url",
            "camera"
        ],
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: "local",
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#0078FF",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#0078FF",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1"
            },
            fonts: {
                default: null,
                "'Fira Sans', sans-serif": {
                    url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                    active: true
                }
            }
        }
    },
        (err, info) => {
            if (!err) {
                //console.log("Upload Widget event - ", info);
                if (info.info.secure_url) {
                    $('.image__hiden').val(info.info.url)
                    $('.file_name').append(info.info.original_filename + '.' + info.info.format);
                    console.log(info.info)
                }
            }
            return false;
        });
}

document.getElementById("upload_widget").addEventListener("click", function (e) {
    e.preventDefault()
    showUploadWidget()
    return false;
}, false);