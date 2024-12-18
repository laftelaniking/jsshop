//document가 반환하는 값은 해당하는 요소(element)이다.
//ex) li.tab-button   querySelectorAll같은 경우는 nodelist를 반환한다. list랑 비슷한데 엄밀히는 다름름
var tabbutton = document.querySelectorAll('.tab-button');
var tabcontent = document.querySelectorAll('.tab-content');
// console.log(tabbutton)

//왜 var, let으로 선언할 때의 결과가 다를까?


//반복문 사용안한 버전

document.querySelector('.list').addEventListener('click', function(e){
    //누른게 0번째 탭이면 탭열기
    // console.log(parseInt(e.target.dataset.id))
    // console.log(document.querySelectorAll('.tab-button')[0])
    
    tabOpen(parseInt(e.target.dataset.id));
});


function tabOpen(num) {
    tabbutton.forEach( button => {
        button.classList.remove('orange');
    })
    tabcontent.forEach( content => {
        content.classList.remove('show');
    })
    tabbutton[num].classList.add('orange')
    tabcontent[num].classList.add('show')
}












//반복문 사용한 버전
// for(let i=0; i<tabbutton.length; i++){
    
//     document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
//         console.log(i)
        
//         //버튼을 눌렀을 때 모든 orange가 사라지고 클릭한 버튼에 show 붙이기
//         tabbutton.forEach( button => {
//             button.classList.remove('orange');
//         })
//         tabcontent.forEach( content => {
//             content.classList.remove('show');
//         })
//         tabbutton[i].classList.add('orange')
//         tabcontent[i].classList.add('show')
//     });
// }
