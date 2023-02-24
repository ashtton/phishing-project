<script>
    import {goto} from "$app/navigation";
    import {username, password} from "$lib/store/store.js";

    function handleEnter(event) {
        if (event.key === "Enter") {
            submit()
        }
    }

    function submit() {
        if ($username.length === 0) {
            alert("Enter a valid username.")
            return
        }

        if ($password.length === 0) {
            alert("Enter a valid password.")
            return
        }

        goto("/overview")
    }
</script>
<div class="container">
    <div class="header">
        <img alt="Aspen Logo" src="/images/aspen/logo.png" />
    </div>
    <div class="login-container">
        <div class="login">
            <div class="login-header">
                <strong>Knox County Schools</strong>
                <hr />
            </div>
            <div class="login-input">
                <div><strong>Login ID</strong></div>
                <input type="text" bind:value={$username} on:keypress={(e) => handleEnter(e)} />
                <div class="login-links">
                    <a>Request an account</a>
                </div>
            </div>
            <div class="login-input">
                <div><strong>Password</strong></div>
                <input type="password" bind:value={$password}  on:keypress={(e) => handleEnter(e)} />
                <div class="password-links">
                    <a>Trouble logging in?</a>
                    <a>I forgot my password</a>
                </div>
            </div>
            <div class="button-container">
                <button on:click={() => submit()}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width=".7rem" height=".7rem" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </span>
                    <span>
                        Log On
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="footer">
        <div>
            Copyright © 2023 Follett School Solutions, LLC. All rights reserved.
        </div>
        <div>
            Follett School Solutions | Aspen | Terms of Use
        </div>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, serif;
    }

    img {
        user-select: none;
        width: 20rem;
    }

    .container {
        background-image: url("/images/aspen/students.jpeg");
        height: 100vh;
        overflow: hidden;
    }

    .header {
        padding: 1.5rem;
        background-color: rgba(38, 93, 161, 0.91);
        border-bottom: solid 1px white;
    }

    .login-container {
        display: flex;
        justify-content: center;
    }

    .login {
        margin-top: 4rem;
        width: 19rem;
        background-color: rgba(238,238,238,0.9);
        height: 19rem;
        border-radius: 1rem;
        border: 1px solid grey;
        padding: 2rem;
    }

    .login-header {
        text-align: center;
        justify-content: center;
    }

    .login-header hr {
        background-image: -webkit-linear-gradient(left, rgba(96,98,100,0), rgba(96,98,100,0.85), rgba(96,98,100,0));
    }

    .login-input {
        margin-top: 1rem;
    }

    .login-input input {
        width: 100%;
        margin-top: 0.3rem;
        height: 1.5rem;
        border: 1px solid #999;
        font-size: medium;
        padding: 0.3rem;
        color: #555555;
    }

    .login-links {
        margin-top: 0.3rem;
        display: flex;
        justify-content: end;
    }

    .password-links {
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
    }

    a {
        font-size: small;
        font-weight: bold;
        color: #2883a6;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    svg {
        fill: white;
    }

    .button-container button {
        margin-top: 2rem;
        border: 2px solid #fff;
        background-color: #6f6f6f;
        color: white;
        font-size: .9rem;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
        padding: .4rem;
        display: flex;
        align-items: center;
    }

    .button-container button:hover {
        background-color: #777;
        cursor: pointer;
    }

    button svg {
        margin-right: .3rem;
    }

    .footer {
        border-top: solid 1px white;
        background-color: rgba(38, 93, 161, 0.91);
        bottom: 0;
        position: absolute;
        color: white;
        width: 100%;
        font-size: small;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
        overflow: hidden;
    }

    .footer div:first-child {
        margin-left: 1rem;
    }

    .footer div:last-child {
        margin-right: 1rem;
    }
</style>