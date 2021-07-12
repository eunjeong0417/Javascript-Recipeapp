const APP_ID = 'f2cf717f';
const APP_KEY = '274f67ac048c6ca7dc21ec0c6e4f1a27';


const formEl = document.querySelector('.header-search')

//form 태그에 submit 이벤트 추가
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
//e.preventDefault로 창이 새로고침되는 것을 막는다
    const query = e.target.querySelector('input').value;
//query에 input의 값을 넣어준다
    fetchAPI();
})

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data)
}