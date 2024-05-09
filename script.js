const api = "Yor api key";
const inp = document.getElementById('inp');
const imges = document.querySelector(".imges");

const getImage = async () => {
    const methods = {
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);
        // JSON return it
        const data = await res.json();
        const listImages = data.data;
        imges.innerHTML = '';
        listImages.forEach(photo => {
            const container = document.createElement("div");
            imges.append(container);
            const img = document.createElement("img");
            container.append(img);
            img.src = photo.url;
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};