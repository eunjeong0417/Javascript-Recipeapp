const searchEl = document.querySelector('.search-result')
const APP_ID = 'f2cf717f';
const APP_KEY = '274f67ac048c6ca7dc21ec0c6e4f1a27';


const formEl = document.querySelector('.header-search');

//form 태그에 submit 이벤트 추가
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
//e.preventDefault로 창이 새로고침되는 것을 막는다
    const query = e.target.querySelector('input').value;
//query에 input의 값을 넣어준다

//fetchAPI 함수의 인자로 query를 보낸다
    fetchAPI(query);
})

async function fetchAPI(query) {
    const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

//data.hits를 인자로 받아온다
function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += `
         <div class="item">
            <img src=${result.recipe.image} alt="food image">
                <div class="item-el">
                    <h2 class="item-title">${result.recipe.label}</h2>
                    <a href="${result.recipe.url}">🔎 Recipe</a>
                </div>
                <p class="item-data">CuisineType: ${result.recipe.cuisineType}</p>
            </div>
            `
    })
    searchEl.innerHTML = generatedHTML;
}