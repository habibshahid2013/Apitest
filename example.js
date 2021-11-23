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
            return `<p> Name: ${user.first_name}</p>`
        })
        document.querySelector('#app')
        .insertAdjacentHTML("afterbegin","<h1>hellooo</h1>")
    }).catch(error => {
        console.log(error);
    });
    console.log('Log data');
    
}
fetchData();