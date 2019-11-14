function galleryTemplate(obj) {
    return(
      `
      <div class="project-tile">
      <a class="project-link" href="${obj.link}" target="_blank">
        <img src="${obj.src}" class="project-pic">
        <div class="p-title">${obj.title}</div>
      </img>
      </a>
      <div class="project-description">
        <div class="project-description_wrapper">
            ${obj.desc}
            <div class="project-description-techs">
              <span>html5</span> <span>CSS3</span>
            </div>
        </div>
      </div>
    </div>`
    )
  }

export default galleryTemplate;