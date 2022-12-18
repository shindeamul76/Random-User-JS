
class RandomUser {
    constructor(api) {
        this.API = api
    }
    async fetchUser() {
        try {
            let data = await fetch(this.API);
            this.user = await data.json();
            this.user = await this.user.results[0];
            console.log(this.user);
            this.name = `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`;
            this.photo = this.user.picture.large;
            this.email = this.user.email;
            this.age = this.user.dob.age;
            this.phone = this.user.phone;

            let nameDiv = document.querySelector('#name');
            let photoDiv = document.querySelector('#photo');
            this.details = document.querySelector('#details');
            if (this.user.name.title == "Mr") this.details.innerText = "Is he cute? Get more details of him.";
            else this.details.innerText = "Is she pretty? Get more details of her.";
            nameDiv.innerHTML = photoDiv.innerHTML = '';
            let userName = document.createElement('h1');
            userName.innerText = this.name;

            nameDiv.appendChild(userName);
            let photo = document.createElement('img');
            photo.src = this.photo;
            photoDiv.appendChild(photo)

        }
        catch (err) {
            console.log(err);
        }
    }
    showAge() {
        this.details.innerHTML = '';
        this.details.innerText = "Age: " + this.age;
    }
    showEmail() {
        this.details.innerHTML = '';
        this.details.innerText = "Email: " + this.email;
    }
    showPhone() {
        this.details.innerHTML = '';
        this.details.innerText = `Phone Number: ${this.phone}`;
    }


}



function getNewUser() {

    let randomUser = new RandomUser('https://randomuser.me/api/');
    randomUser.fetchUser();


    document.querySelector('#age').addEventListener('click', () => randomUser.showAge());

    document.querySelector('#email').addEventListener('click', () => randomUser.showEmail());

    document.querySelector('#phone').addEventListener('click', () => randomUser.showPhone());
}


getNewUser();

document
    .querySelector('#getUser')
    .addEventListener('click', getNewUser);
