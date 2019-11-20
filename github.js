class Github{
    constructor() {
        this.client_id = '4e6a57f1d92f126ee3ae';
        this.client_secret = '385a8052bbdf4329358cc849cd5535a4ee601b43';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}