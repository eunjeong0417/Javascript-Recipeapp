const searchEl = document.querySelector('.search-result')
const APP_ID = 'f2cf717f';
const APP_KEY = '274f67ac048c6ca7dc21ec0c6e4f1a27';
const formEl = document.querySelector('.header-search');


function onSubmit(e) {
    e.preventDefault();
//e.preventDefault로 창이 새로고침되는 것을 막는다
    const query = e.target.querySelector('input').value;
//query에 input의 값을 넣어준다

//fetchAPI 함수의 인자로 query를 보낸다
    fetchAPI(query);
}

formEl.addEventListener('submit', onSubmit)


async function fetchAPI(query) {
    const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`
//query는 input에 입력된 value
    const response = await fetch(baseURL);
    const data = await response.json();
//받아온 데이터를 json 형식으로 바꿔준다
    generateHTML(data.hits);
//generateHTML 함수의 인자로 data를 보낸다
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
                    <div class="item-recipe"><a href="${result.recipe.url}"> Recipe</a></div>
                </div>
                <p class="item-data">CuisineType: ${result.recipe.cuisineType}</p>
                <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            </div>
            `
    })
    searchEl.innerHTML = generatedHTML;
}