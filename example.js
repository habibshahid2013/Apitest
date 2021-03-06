function fetchData(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response =>{
        if (!response.ok){
            throw Error('Oh No ERROR')
        }
        console.log(response);    
        return response.json();     
    }).then( data => {
        console.log(data.data);
        const html = data.data.map(user => {
            return `
            <div class="user">
            <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
            <p> Name: ${user.first_name}</p>
            <p> Email: ${user.email}</p>
            </div>`
        }).join('')
        console.log(html);
        document.querySelector('#app')
        .insertAdjacentHTML("afterbegin", html )
    }).catch(error => {
        console.log(error);
    });
    console.log('Log data');
    
}
fetchData();