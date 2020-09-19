<script>
    export let imgSrc;
    export let name;
    export let about;
    export let gitLink;
    export let facebookLink;
    export let twitterLink;

</script>

<div class="team-member">
    <div class="left">
        <img src={imgSrc} alt="event poster">
    </div>
    <div class="right">
        <h2 class="name">{name}</h2>
        <p class="about">{about}</p>
        <div class="socails">
            <a href={gitLink}>GITHUB</a>
            <a href={facebookLink}>FACEBOOK</a>
            <a href={twitterLink}>TWITTER</a>
        </div>
    </div>
</div>

<style>
    .team-member {
        display: flex;
        padding-bottom: 1rem;
        border-bottom: 1px solid white;
        margin-top: 2rem;
    }

    .right {
        padding: 0 0 0 2rem;
    }

    .name {
        font-size: 2rem;
        font-weight: bold;
    }

    @media (max-width:700px) {
        .team-member {
            flex-direction: column;
            align-items: center;
            font-size: 1rem;
        }

        img {
            height: auto;
            max-width: 200px;
        }

        .name {
            font-size: 1.5rem;
        }

        .right {
            padding: 1rem 0 0 0;
        }
    }
</style>