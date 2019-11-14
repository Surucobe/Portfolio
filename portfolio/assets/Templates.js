class Templates{

  galleryTemplate(obj) {
    let s = []
    obj.tech.forEach((item) =>{
      s.push(`<span>${item}</span>`)
    })
  
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
                ${s}
              </div>
          </div>
        </div>
      </div>`
      )
    }
  
  welcomeTemplate(){
    return(
      `
      <div class="welcome-wrapper">
        <div class="welcome-section_div">
          <img src="./images/foto.jpg" class="profile" alt="me">
          <h1>About me</h1>
        </div>
        <div>
          <p>
            My name is Armando Duarte, i also go under the nick surucobe, i'm 22 years old and i'm from Venezuela <br>
            I'm a front-end developer, buddhist, gamer, anime lover, bilingual, student and Javascript fan <br><br>
          </p>
          <p>
            I Learned web development in <a href="https://platzi.com/@Surucobe/" target="_blank">Platzi</a>, one of the best if
            not the best learning plataform i came across in latin america
            <br> and <a href="https://www.freecodecamp.org/surucobe">freeCodeCamp</a> which is a non-profit organization based on a
            learning plataform for everyone who want to learn to code<br><br>
          </p>
          <p>
            You can find me easier in <a href="https://twitter.com/Surucobe" target="_blank">twitter</a> or <a
            href="https://github.com/Surucobe">github</a>, links are on the side bar along with my email and my linkedin
          </p>
        </div>
      </div>
      `
    )
  }
}

export default Templates;