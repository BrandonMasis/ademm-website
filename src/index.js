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
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="benefits">
          <ul>

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
          </ul>
        </div>
      </div>`;
        break;
      case 'salon-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

          <img src="./images/salon-benefits1.webp" alt="">

          <div class="benefits">
            <ul>
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
              
            </ul>
          </div>
        </div>
        <div class="row">
          

          <div class="benefits">
          <ul>
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
              
            </ul>
          </div>
          <img src="./images/salon-benefits2.webp" alt="">
        </div>`;
        break;
    }
  });
});

searchMemberInput.addEventListener('input', () => {
  const regex = new RegExp(`${searchMemberInput.value}`, 'i');

  let results = memberList.filter((member) => member.match(regex));

  let resultHtml = '';

  results.forEach((result) => {
    resultHtml += `<h2>${result.replaceAll(
      result.match(regex),
      `<span class="highlighted-match">${result.match(regex)}</span>`
    )}</h2>`;
  });

  searchMemberResults.innerHTML = resultHtml;
  totalMembers.textContent = results.length;
  if (totalMembers.textContent == 0) {
    searchMemberResults.innerHTML = `<h2>No hay resultados para "<span class="highlighted-match">${searchMemberInput.value}</span>"</h2>`;
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
