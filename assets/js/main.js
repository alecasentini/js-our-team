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

  const teamContainer = document.querySelector('.container');

  const row1 = document.createElement('div');
  row1.classList.add('row', 'justify-content-center', 'gap-3', 'py-3');
  
  const row2 = document.createElement('div');
  row2.classList.add('row', 'justify-content-center', 'gap-3', 'py-3');
  
  teamContainer.appendChild(row1);
  teamContainer.appendChild(row2);
  
  for (let i = 0; i < team.length; i++) {
  const member = team[i];
  const card = '<div class="card col-4" style="width: 18rem;">' +
               '<img src="./assets/img/' + member.image + '" class="card-img-top" alt="...">' +
               '<div class="card-body text-center">' +
               '<h5 class="card-title name">' + member.name + '</h5>' +
               '<p class="card-text role">' + member.role + '</p>' +
               '</div>' +
               '</div>';

  if (i < 3) {
      row1.innerHTML += card;
  } else {
      row2.innerHTML += card;
  }
}