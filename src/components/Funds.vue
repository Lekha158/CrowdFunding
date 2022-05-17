<template>
    <div>
        <div class="form">
            <div class="login">
                <h3>Raise Fund</h3>
                <p> Please enter details to raise a fund</p>
            </div>
            <form class="message">
                <select class="dropdown">
                    <option> Orphange</option>
                    <option> Poor </option>
                    <option> Emergency</option>
                    <option> Patient </option>
                    <option> Oldage homes</option>
                </select>
                <input type="text" placeholder="Fund Raiser Name" />
                <input type="number" placeholder="contact" />
                <input type="text" placeholder="upi id" />
                <input type="text" placeholder="Needy Person Name" />
                <input type="number" placeholder="Age" />
                <input type="number" placeholder="contact" />
                <textarea type="text" placeholder="Details" class="details"> </textarea>
                <button @click="navigateToFundDetails">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToFundDetails() {
            this.$router.push('/fundDetails');
        }
    }
}
</script>

<style scoped>
.form {
    overflow-y: scroll;
    overflow-x: none;
    position: relative;
    height: 450px;
    z-index: 1;
    background: #FFFFFF;
    max-width: 500px;
    margin: 40px auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form input,
.dropdown,
.details {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form .message {
    margin: 15px 0 0;
    color: #1b1616;
    font-size: 12px;
}

.dropdown {
    margin-bottom: 15px;
}

textarea::-webkit-input-placeholder {
    color: #282222;
}
</style>