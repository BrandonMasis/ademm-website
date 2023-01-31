setTimeout(function () {
  document.body.className = '';
}, 500);

// body preload

const showAnswerBtns = document.querySelectorAll('.show-answer');
const faqItems = document.querySelectorAll('.faq-item');

const nav = document.querySelector('nav');
const heroContainer = document.querySelector('#hero');
const benefitsDisplay = document.querySelector('.benefits-display');
const benefitOption = document.querySelectorAll('.benefit-option');

const searchMemberInput = document.querySelector('#search-members-input');
const searchMemberResults = document.querySelector('.search-member-results');
const totalMembers = document.querySelector('.total-members h2');

const memberList = [
  'Carlos Gomez Alvares',
  'Nancy Mancia Gomez',
  'Carla Gomez Fernandez',
  'Daniel Mora Alvares',
  'Julia Alvares Masis',
  'Emilia gomez hernandez',
  'Gabriela Vargas',
  'Magaly Vargas',
  'Carlos chacon',
];

// benefits
const academyBenefitsList1 = `
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Respaldo
  de las certificaciones (talleres,seminarios
  y cursos) con sello de calidad ademm,
  presencial y en linea</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Cartas de certificacion academica para
  instituciones publicas o privadas
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Difusion de cursos y productos o servicios
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carnet y certificado con codigo de
  verificacion
</li>
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Verificacion
  de estudios a nivel internacional (exclusivo
  para socios)</li>
`;

const academyBenefitsList2 = ` 

<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Capacitaciones gratuitas (exclusivas para
  socios)
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Consultorias y asesoramiento
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Bolsa de empleo
</li>

<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Descuento en maestrias internacionales y
  curso de formadores en belleza, para
  planeamiento y evaluacion
</li>

`;

const studentBenefitsList1 = `
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Carta
  de idoneidad gratuita, al graduarte
  en una academia avalada</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Precio preferencial en casas comerciales
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Plataforma de consultas
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carta de idoneidad gratuita para tramite de
  patente para apertura del salon de belleza
  (segun lo dicta la reforma del reglamento N°
  42942-S, del decreto ejecutivo 18329.)
</li>
`;

const salonBenefitsList1 = ` 
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Carta
  de idoneidad gratuita para tramite de
  patente para apertura del salon de belleza
  (segun lo dicta la reforma del reglamento N°
  42942-S, del decreto ejecutivo 18329.)</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carnet y certificado con codigo de
  verificacion
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carta para salas comerciales
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Capacitaciones gratuitas (exclusivas para
  socios)
</li>

`;

const salonBenefitsList2 = `
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Consultorias y asesoramiento
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Bolsa de empleo
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Descuento en maestrias internacionales y
  curso de formadores en belleza, para
  planeamiento y evaluacion
</li>

`;

window.addEventListener('scroll', () => {
  heroContainer.classList.toggle('afterSticky', window.scrollY > 0);
  nav.classList.toggle('sticky', window.scrollY > 0);
});

benefitOption.forEach((option) => {
  option.addEventListener('click', () => {
    benefitOption.forEach((option) => {
      option.classList.remove('actual-tab');
    });
    option.classList.add('actual-tab');

    switch (option.getAttribute('data-option')) {
      case 'academy-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

        <img src="./images/academy-benefits.webp" alt="">

        <div class="benefits">
        <ul>
        ${academyBenefitsList1}
        </ul>
        </div>
      </div>
      <div class="row">
        <div class="benefits">
        <ul>
        ${academyBenefitsList2}
        </ul>
        </div>
        <img src="./images/academy-benefits2.webp" alt="">
      </div>`;
        break;

      case 'student-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

        <img src="./images/student-benefits1.webp" alt="">

        <div class="benefits">
        <ul>
        ${studentBenefitsList1}
        </ul>
        </div>
      </div>`;
        break;
      case 'salon-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

          <img src="./images/salon-benefits1.webp" alt="">

          <div class="benefits">
          <ul>
          ${salonBenefitsList1}
          </ul>
          </div>
        </div>
        <div class="row">
          

          <div class="benefits">
          <ul>
          ${salonBenefitsList2}
          </ul>
          </div>
          <img src="./images/salon-benefits2.webp" alt="">
        </div>`;
        break;
    }
  });
});

// mobile benefits

const _benefitOptions = document.querySelectorAll(`._benefit-option`);
_benefitOptions.forEach((option) => {
  option.addEventListener('click', () => {
    let bodyOffsetHeight =
      option.querySelector('.option-benefits').offsetHeight;
    let chevron = option.querySelector(`i`);

    if (option.offsetHeight == 140) {
      option.setAttribute('style', `height:${bodyOffsetHeight + 140}px`);
      chevron.style.transform = 'rotate(180deg)';
    } else {
      option.setAttribute('style', `height: 140px`);
      chevron.style.transform = 'rotate(0deg)';
    }
  });
});

//Search member

searchMemberInput.addEventListener('input', () => {
  const regex = new RegExp(`${searchMemberInput.value}`, 'i');

  let results = memberList.filter((member) => member.match(regex));

  let resultHtml = '';

  results.forEach((result) => {
    resultHtml += `<div class="result"><h2>${result.replaceAll(
      result.match(regex),
      `<span class="highlighted-match">${result.match(regex)}</span>`
    )}</h2><p class="result-tag">Miembro verificado</p></div>`;
  });

  searchMemberResults.innerHTML = resultHtml;
  totalMembers.textContent = results.length;
  if (totalMembers.textContent == 0) {
    searchMemberResults.innerHTML = `<div class="result"><h2>No hay resultados para "<span class="highlighted-match">${searchMemberInput.value}</span>"</h2></div>`;
  }
  if (searchMemberInput.value == '') {
    searchMemberResults.innerHTML = '';

    searchMemberInput.parentElement.classList.remove('open');
  } else {
    searchMemberInput.parentElement.classList.add('open');
  }
});

// FAQ
document
  .querySelectorAll('.faq-answer-wrapper')
  .forEach((i) => i.setAttribute('style', 'height: 0px'));

showAnswerBtns.forEach((btn) =>
  btn.parentElement.addEventListener('click', () => {
    let item = btn.parentElement;
    if (item.querySelector('.faq-answer-wrapper').classList.contains('open')) {
      item.querySelector('.faq-answer-wrapper').classList.remove('open');

      item
        .querySelector('.faq-answer-wrapper')
        .setAttribute('style', 'height: 0px');
      item.querySelector('.show-answer i').style.transform = 'rotate(0deg)';
    } else {
      item.querySelector('.faq-answer-wrapper').classList.add('open');

      let bodyOffsetHeight = item.querySelector(
        '.faq-answer-wrapper p'
      ).offsetHeight;

      item
        .querySelector('.faq-answer-wrapper')
        .setAttribute('style', `height:${bodyOffsetHeight + 30}px`);

      item.querySelector('.show-answer i').style.transform = 'rotate(-180deg)';
    }
  })
);

// burger menu

window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
};

const allMobile = document.querySelectorAll('.mobile-nav ul li a');
allMobile.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove(
      'is-active'
    );

    document
      .querySelector('.hamburger.is-active')
      .classList.remove('is-active');
  });
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
reveal();
