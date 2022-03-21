const optionBtnOrder = document.querySelector('.option__btn_order');
const optionBtnPeriod = document.querySelector('.option__btn_period');
const optionListOrder = document.querySelector('.option__list_order');
const optionListPeriod = document.querySelector('.option__list_period');

optionBtnOrder.addEventListener('click', () => {
    optionListOrder.classList.toggle('option__list_active');
    optionListPeriod.classList.remove('option__list_active');
});

optionBtnPeriod.addEventListener('click', () => {
    optionListPeriod.classList.toggle('option__list_active');
    optionListOrder.classList.remove('option__list_active');
});

optionListOrder.addEventListener('click', (e) =>{
    const target = e.target;

    if (target.classList.contains('option__item')) {
        optionBtnOrder.textContent = target.textContent;
        optionListOrder.classList.remove('option__list_active');
        for (const elem of optionListOrder.querySelector('.option__item')) {
            if (elem === target) {
                elem.classList.add('option__item_active');
            } else {
                elem.classList.remove('option__item_active');
            }
        }
    }
});

optionListPeriod.addEventListener('click', (e) =>{
    const target = e.target;

    if (target.classList.contains('option__item')) {
        optionBtnPeriod.textContent = target.textContent;
        optionListPeriod.classList.remove('option__list_active');
        for (const elem of optionListPeriod.querySelector('.option__item')) {
            if (elem === target) {
                elem.classList.add('option__item_active');
            } else {
                elem.classList.remove('option__item_active');
            }
        }
    }
});

// выбор города

const topCityBtn = document.querySelector('.top__city');
const city = document.querySelector('.city');
const cityClose = document.querySelector('.city__close');
const cityRegionList = document.querySelector('.city__region-list');

topCityBtn.addEventListener('click', () => {
    city.classList.toggle('city_active');
});

cityRegionList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('city__link')) {
        topCityBtn.textContent = target.textContent;
        city.classList.remove('city__active');
    }
});

cityClose.addEventListener('click', () => {
    city.classList.remove('city_active');
})

// Модальное окно

const overlayVacancy = document.querySelector('.overlay_vacancy');
const resultList = document.querySelector('.result__list');

resultList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.dataset.vacancy) {
        e.preventDefault();
        overlayVacancy.classList.add('overlay_active');
    }
});

overlayVacancy.addEventListener('click', (e) => {
    const target = e.target;
    overlayVacancy.classList.remove('overlay_active');
});

// вывод карточек

const createCard = (vacancy) => {
    const card = document.createElement('li');
    card.classList.add('result__item');

    card.insertAdjacentHTML('afterbegin', `
    <article class="vacancy">
    <h2 class="vacancy__title">
      <a class="vacancy__open-modal" href="#" data-vacancy="3515">Junior Frontend разработчик</a>
    </h2>
    <p class="vacancy__compensation">30&nbsp;000 – 40&nbsp;000 грн.</p>
    <p class="vacancy__work-schedule">Можно работать из дома</p>
    <div class="vacancy__employer">
      <p class="vacancy__employer-title">HFLabs</p>
      <p class="vacancy__employer-address">Киев</p>
    </div>
    <p class="vacancy__description">Ожидаем, решения задач связанных с визуальными изменениями на сайтах сервисов, к таковым задачам относится, как верстка ...</p>
    <p class="vacancy__date">
      <time datetime="2022-01-25">25.01.2022</time>
    </p>
    <div class="vacancy__wrapper-btn">
      <a class="vacancy__response vacancy__open-modal" href="#" data-vacancy="3515">Откликнуться</a>
      <button class="vacancy__contacts">Показать контакты</button>
    </div>
  </article>
    `)
};


