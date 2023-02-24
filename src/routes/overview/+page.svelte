<script>
    import {password, state, username} from "$lib/store/store.js";

    let hiddenPassword = $password.replace($password.substring(0, $password.length - 3), "****")

    let map = new Map();
    map.set(0, "You got phished.")
    map.set(1, "What is phishing?")
    map.set(2, "How is it delivered?")
    map.set(3, "What's a famous example of phishing?")
    map.set(4, "The economic impact of phishing.")
    map.set(5, "How long has phishing been around?")
    map.set(6, "How was phishing created?")
    map.set(7, "The end.")
</script>

<div class="container">
    <div class="content">
        <div class="title">{map.get($state)}</div>
        <div class="description">
            {#if $state === 0}
                Haha, you fell for it!<br>
                We casted the bait and reeled you in. <br>
                Now we have all of your information.<br>
                <br>
                The username you entered: <strong>{$username}</strong><br>
                <div on:mouseenter={() => document.getElementById("pass").innerHTML = $password}
                     on:mouseleave={() => document.getElementById("pass").innerHTML = hiddenPassword}>
                    The password you entered:
                    <span id="pass">{hiddenPassword}</span>
                </div>
                <br>
                No worries though. This presentation will make you an expert on phishing scams and will ensure that you never fall for them.
            {:else if $state === 1}
                Phishing is a scam where an attacker creates a website / login page pretending to be someone or something that they are not.<br><br>
                Their goal is to get you to enter your account information into their website, believing it to be the real one, where they will then take your account information and steal it.<br><br>
                There are several things that they can get out of stealing your account details. They can sell your account to buyers, or they can attempt to steal sensitive data like credit card numbers or addresses.<br><br>
                The best way to prevent being phished is by being careful about what links you click on and ensuring that the URL is exactly correct before logging in.
            {:else if $state === 2}
                There are several different ways that attackers attempt to distribute phishing exams.
                <ol>
                    <li>The first way that attackers attempt to distribute phishing links to you is via email scams.
                    These emails will come from what appear to be legitimate sources, although will take you to an illegitimate website.</li>
                    <li>Another way that attackers will distribute phishing scams is by suspicious looking advertisements on other websites.</li>
                    <li>The final and most common way of attackers contacting their potential victims, is via text message.</li>
                </ol>
                Overall, just be cautious about links that you click on that take you to a login page.
            {:else if $state === 3}
                One of the most famous incidents of the phishing scam occurred on twitter.
                A twitter employee with administrative privileges in the twitter administrator panel fell for a
                phishing scam.<br><br>
                This led to twitters admin dashboard being compromised and tons of celebrity and branded twitter
                accounts being taken over by hackers which posted bitcoin scams onto the twitter accounts of these
                accounts.<br><br>
                The attackers that pulled off this stunt made millions this day and costed Twitter millions as well.
            {:else if $state === 4}
                There are several ways that phishing can have an economic impact.<br><br>
                The first way is if a persons bank account or account linked to a bank account is compromised via phishing.
                This would allow the attacker to have full access to a persons funds.<br><br>
                Another way that phishing could have an economic impact would be a phishing incident hurt the reputation of
                a brand like with what happened to twitter.
            {:else if $state === 5}
                Phishing is thought to have first been started in the mid 1990s.<br><br>
                The first incident of phishing was done over at AOL where a group of people created a fake AOL site and sent
                out instant messages through instant messaging which allowed them to steal hundreds of peoples personal emails.
            {:else if $state === 6}
                Phishing was created by social engineers who discovered a good way to steal people's information.<br><br>
                There was never any good intention whenever it came to phishing, as there's no good reason for it to exist.
                This means that whoever created the first phishing site could be held responsible for the hundreds of millions
                of dollars in damages that it has caused ever since.
            {:else if $state === 7}
                The best way to avoid phishing is just to be careful about where you enter your information.<br><br>
                One good way to prevent that you're never phished is to use a password manager which auto fills your information
                whenever you're at the correct website.<br><br>
                Overall however, you can really just look at the link before entering your passwords and make sure that you're at the right website.
            {/if}
        </div>
        <div class="buttons">
            <div>
                {#if $state !== 0}
                    Previous:<br> <strong on:click={() => state.set($state - 1)}>{map.get($state - 1)}</strong>
                {/if}
            </div>
            <div>
                {#if $state !== 7}
                    Next:<br> <strong on:click={() => state.set($state + 1)}>{map.get($state + 1)}</strong>
                {/if}
            </div>
        </div>

    </div>
</div>

<style>
    .container {
        max-width: 800px;
        margin: auto;
    }

    .title {
        margin-bottom: 1rem;
        margin-top: 3rem;
        font-size: 3rem;
        font-weight: bold;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
    }

    .buttons strong {
        cursor: pointer;
    }

    .buttons strong:hover {
        color: gray;
    }

    .description {
        font-size: 1.2rem;
    }

    #pass {
        font-weight: bold;
    }

    @media(max-width: 800px) {
        .container {
            margin-left: 2rem;
            margin-right: 2rem;
        }
    }
</style>