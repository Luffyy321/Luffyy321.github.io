const params = new URLSearchParams(window.location.search);
const projectKey = params.get("id");
const project = PROJECTS[projectKey];

if (project) {
    document.getElementById("page-title").textContent = project.name;
    document.getElementById("project-name").textContent = project.name;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-role").textContent = project.role;

    const mediaContainer = document.getElementById("project-media");

    if (project.media.type === "image") {
    mediaContainer.innerHTML = `
        <div class="ratio ratio-16x9 projet_box rounded overflow-hidden">
            <img 
                src="${project.media.src}"
                alt="Aperçu du projet"
                class="w-100 h-100 projet_media_img">
        </div>
    `;
}

    if (project.media.type === "video") {
    mediaContainer.innerHTML = `
        <div class="ratio ratio-16x9 projet_box rounded">
            <iframe 
                src="${project.media.embed}"
                title="Vidéo du projet"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    `;
}


    const linksContainer = document.getElementById("project-links");
    project.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = "btn btn-contact";
        a.textContent = link.label;
        linksContainer.appendChild(a);
    });
}
