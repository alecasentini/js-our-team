const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// Seleziona l'elemento HTML in cui inserire le card del team
const teamContainer = document.getElementById("team-container");

// Crea le card del team dinamicamente utilizzando il ciclo for
for (let i = 0; i < team.length; i++) {
  // Crea i tag HTML per la card
  const box = document.createElement("div");
  box.classList.add("box");
  
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox");
  
  const img = document.createElement("img");
  img.src = "./assets/img/" + team[i].image;
  
  const content = document.createElement("div");
  content.classList.add("content");
  
  const name = document.createElement("h2");
  name.classList.add("name");
  name.innerHTML = team[i].name + "<br>" + "<span class='role'>" + team[i].role + "</span>";
  
  // Aggiungi i tag HTML creati alla card
  imgBox.appendChild(img);
  content.appendChild(name);
  box.appendChild(imgBox);
  box.appendChild(content);
  
  // Aggiungi la card al container del team
  teamContainer.appendChild(box);
}