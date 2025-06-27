import './components/Contacts.css';

function Contacts() {
    function Feedback () {
        const name = document.getElementById('name').value
        const phoneNumber = document.getElementById('phoneNumber').value
       const email = document.getElementById('email').value
       const data = {
        name: name,
        phoneNumber: phoneNumber,
        email: email
       }

       const api = 'mongodb://localhost:9001/feedback'

       fetch (api, 
        {
         method: 'POST',
         headers:{'Content-Type':'Application.JSON'},
         body: JSON.stringify(data)
        })
        .then (result => result.json())
        .then ((result) => {console.log (result)})
    }
    

  return (
    <div className="Contacts">
        <div id ="adress">Адрес: г. Москва, ул. Молодежная, 11, к. 15</div>
        <div id = "phone">Телефон: (912) 00-55-000</div>
        <div id = "email">email: mastervann@mail.ru</div>
        <input id='name' type="text" placeholder='Имя' />
        <input id='phoneNumber' type="text" placeholder='Номер телефона' />
        <input id='email' type="text" placeholder='Эл. почта' />
        <button onClick = {Feedback}>Отправить данные</button>
        <img src='./media/002-1.png'></img>
    </div>
  );
}

export default Contacts;
